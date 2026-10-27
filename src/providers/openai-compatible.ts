/**
 * Base class for OpenAI-compatible providers.
 *
 * Shared by OpenAI, GitHub Copilot, and OpenRouter providers.
 */

import OpenAI from "openai";
import type {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from "openai/resources/chat/completions";
import type { LlmProvider } from "./types.ts";

type ThinkingMode = "enabled" | "disabled";

type ProviderRequestOptions = {
  apiKey?: string;
  baseURL?: string;
  model: string;
  systemPrompt?: string;
  thinking?: ThinkingMode;
};

export abstract class OpenAICompatibleProvider implements LlmProvider {
  abstract readonly name: string;
  protected readonly client: OpenAI;
  protected readonly model: string;
  private readonly systemPrompt?: string;
  private readonly thinking?: ThinkingMode;

  constructor(opts: ProviderRequestOptions) {
    this.model = opts.model;
    this.systemPrompt = opts.systemPrompt;
    this.thinking = opts.thinking;
    this.client = new OpenAI({
      apiKey: opts.apiKey,
      baseURL: opts.baseURL,
    });
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const messages: ChatCompletionMessageParam[] = [
      ...(this.systemPrompt ? [{ role: "system" as const, content: this.systemPrompt }] : []),
      { role: "user", content: prompt },
    ];
    const request: ChatCompletionCreateParamsNonStreaming & { thinking?: { type: ThinkingMode } } = {
      model: this.model,
      max_completion_tokens: maxTokens,
      messages,
      ...(this.thinking ? { thinking: { type: this.thinking } } : {}),
    };
    const response = await this.client.chat.completions.create(request);
    const usage = response.usage as
      | {
          prompt_tokens?: number;
          completion_tokens?: number;
          prompt_cache_hit_tokens?: number;
          prompt_cache_miss_tokens?: number;
        }
      | undefined;
    if (this.name === "deepseek" && typeof usage?.prompt_cache_hit_tokens === "number") {
      console.log(
        `[llm/deepseek] input=${usage.prompt_tokens ?? 0} output=${usage.completion_tokens ?? 0} cache-hit=${usage.prompt_cache_hit_tokens} cache-miss=${usage.prompt_cache_miss_tokens ?? 0}`,
      );
    }
    // Some OpenAI-compatible gateways can return a non-standard error payload
    // with HTTP 200. Validate it before accessing choices so callers can retry.
    const choices = (response as { choices?: unknown }).choices;
    if (!Array.isArray(choices) || choices.length === 0) {
      throw new Error(`Unexpected empty response from ${this.name}: no completion choices`);
    }
    const text = choices[0] as { message?: { content?: string | null } };
    if (!text.message?.content) throw new Error(`Unexpected empty response from ${this.name}`);
    return text.message.content;
  }
}
