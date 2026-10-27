# AI Open Source Trends 2026-08-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-15 01:37 UTC

---

# AI Open Source Trends Report — 2026-08-15

Filtered for AI/ML relevance, excluded unrelated tools (e.g. rustdesk, OpenCut, SpiderFoot, holehe). Primary categories assigned below.

## 1. Today’s Highlights

Today’s GitHub trending is dominated by **agent-centric infrastructure** and **local/edge AI**. Repos like `holaOS` (+769 today), `macro` (+436 today), and `ego-lite` (+165 today) are racing to solve the agent workspace problem: persistent memory, browser state sharing, MCP integrations, and multi-agent workflows. On the model side, `needle` (+662 today) shows growing interest in ultra-tiny foundation models, while `unsloth` (+501 today) makes local training/inference of the newest open-weight models easier. RAG is also shifting from raw vector search toward graph-native and memory-aware context layers, highlighted by `semantica` (+1,181 today) and `RAGFlow` (+473 today). Finally, GitHub’s `spec-kit` (+1,160 today) and `diagram-design` (+3,646 today) signal a maturation of **AI-native developer tooling**.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [github/spec-kit](https://github.com/github/spec-kit) — +1,160 today. Spec-driven development toolkit from GitHub; a strong signal that agentic coding workflows are standardizing around “spec-first” engineering.
- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — +3,646 today. 29 editorial diagram types for Claude Code in self-contained HTML/SVG; shows demand for higher-quality AI-generated diagrams beyond “Mermaid slop.”
- [cursor/plugins](https://github.com/cursor/plugins) — +41 today. Official plugin specification for Cursor; marks the beginning of a plugin ecosystem around AI-powered IDEs.
- [ollama/ollama](https://github.com/ollama/ollama) — 178,512 total stars. The default local LLM runtime, now supporting Kimi, GLM, MiniMax, DeepSeek, Qwen, Gemma, and more.
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — 144,237 total stars. The de-facto agent engineering and LLM orchestration framework.
- [ego-lite](https://github.com/citrolabs/ego-lite) — +165 today. A browser purpose-built for AI agents, enabling agents like Codex/Claude Code to share your logged-in browser state without disruption.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — 66,377 total stars. Compresses tool outputs, logs, and JSON before hitting the LLM; a practical answer to the token-cost problem for agents.

### 🤖 AI Agents / Workflows

- [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) — +769 today. Open-source all-in-one AI agent workspace; runs Claude Code/Codex across 100+ integrations and MCP with shared memory.
- [macro-inc/macro](https://github.com/macro-inc/macro) — +436 today. Agent-native team workspace combining email, chat, docs, tasks, and CRM, all @-linked through shared AI memory.
- [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) — +222 today. Curated DeepSeek agent ecosystem, reflecting the rapid rise of DeepSeek-based agent projects.
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — 90,774 total stars. Persistent cross-session context for every major agent CLI; captures, compresses, and re-injects relevant context automatically.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — 63,276 total stars. Universal memory layer for AI agents, now essential infrastructure for long-running agent workflows.
- [HKUDS/nanobot](https://github.com/HKUDS/nanobot) — 47,004 total stars. Ultra-lightweight self-hosted personal AI agent framework with tools, memory, MCP, multi-agent workflows, and WebUI.
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — 109,252 total stars. Makes websites accessible to AI agents; one of the key enablers of browser-based agent automation.

### 📦 AI Applications

- [lightningpixel/modly](https://github.com/lightningpixel/modly) — +579 today. Desktop app to generate 3D models from images or prompts using local AI, entirely on your GPU.
- [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) — +132 today. Open-source foundation of ToolJet AI for building internal tools, dashboards, business workflows, and AI agents.
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — 148,810 total stars. The leading user-friendly local AI interface, supporting Ollama/OpenAI APIs and RAG.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — 50,480 total stars. AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — 103,587 total stars. Generates HD short videos from a topic/keyword using automated AI workflows.
- [santifer/career-ops](https://github.com/santifer/career-ops) — 63,859 total stars. Open-source AI job search assistant that screens listings, scores them 1.0–5.0, and tailors CVs inside coding CLIs.

### 🧠 LLMs / Training

- [unslothai/unsloth](https://github.com/unslothai/unsloth) — +501 today. Local UI to run and train LLMs and diffusion models, including Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4, and FLUX.
- [cactus-compute/needle](https://github.com/cactus-compute/needle) — +662 today. A 14MB foundation model aimed at phones, wearables, smart home, and robots; an important edge-AI signal.
- [huggingface/transformers](https://github.com/huggingface/transformers) — 164,084 total stars. The standard framework for state-of-the-art text, vision, audio, and multimodal models.
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — 102,379 total stars. Core deep learning framework underpinning most open-source training/inference stacks.
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — 102,666 total stars. The go-to resource for implementing a ChatGPT-like LLM in PyTorch from scratch.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — 4,488 total stars. Build a tiny vLLM + Qwen inference system on Apple Silicon; bridges systems engineering and LLM inference.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — 7,301 total stars. Broad LLM evaluation platform supporting 100+ datasets and major open-weight model families.

### 🔍 RAG / Knowledge

- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — +473 today / 88,387 total stars. Leading open-source RAG engine that fuses retrieval-augmented generation with agent capabilities.
- [semantica-agi/semantica](https://github.com/semantica-agi/semantica) — +1,181 today. Graph-native infrastructure for context and accountable AI systems; a meaningful push beyond vector-only retrieval.
- [langgenius/dify](https://github.com/langgenius/dify) — 152,445 total stars. The collaborative workspace for agentic workflows and RAG pipelines, with strong self-hosted adoption.
- [topoteretes/cognee](https://github.com/topoteretes/cognee) — 30,025 total stars. Open-source AI memory platform for agents, using a self-hosted knowledge graph engine.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — 106,388 total stars. Converts codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs without a vector store.
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — 35,185 total stars. “Vectorless, reasoning-based RAG” document index; aligns with the move from vector search to structured reasoning.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — 33,981 total stars. High-performance vector database and search engine; still a core building block for production RAG systems.

## 3. Trend Signal Analysis

The strongest signal today is **agent infrastructure consolidation**. The community is no longer building simple single-turn LLM wrappers; it is building persistent, memory-aware workspaces. `holaOS`, `macro`, `ego-lite`, `claude-mem`, and `mem0` all address the same core problem: agents need shared state, context retention, and seamless access to tools and browser sessions. This is the foundation layer for the next wave of autonomous workflows.

A second major direction is **local and edge AI**. `needle`’s 14MB foundation model, `modly`’s local GPU 3D generation, and `unsloth`’s local training/runtime UI all point to a community that increasingly expects AI to run without cloud dependence. The timing aligns with a wave of recent open-weight releases — DeepSeek-V4, Kimi K3, MiniMax-H3, Gemma 4, and Qwen3.8 are all already supported by `unsloth`, suggesting extremely fast ecosystem adoption.

Third, RAG is evolving beyond vector search. `semantica`, `PageIndex`, and `Graphify` all advertise graph-native or vectorless reasoning, often for explainability and lower infrastructure cost. Meanwhile `claude-mem`, `cognee`, and `mem0` reframe memory as structured, queryable context rather than a static embedding corpus.

Finally, **AI-native developer workflow tooling** is emerging: `spec-kit`, `cursor/plugins`, and `diagram-design` show that coding agents are becoming first-class consumers of specs, plugin APIs, and high-quality output templates.

## 4. Community Hot Spots

- **Agent workspaces / all-in-one AI products** — [holaOS](https://github.com/holaboss-ai/holaOS) and [macro](https://github.com/macro-inc/macro) are growing fast because they combine agents, MCP, and shared memory into one product surface.
- **Edge and tiny models** — [needle](https://github.com/cactus-compute/needle) (+662 today) is worth watching closely; sub-100MB foundation models could unlock new embedded, wearable, and robotics use cases.
- **Graph-native context and memory** — [semantica](https://github.com/semantica-agi/semantica), [cognee](https://github.com/topoteretes/cognee), and [Graphify](https://github.com/Graphify-Labs/graphify) indicate a shift from vector DBs to structured knowledge graphs for agent memory.
- **Token reduction and context compression** — [headroom](https://github.com/headroomlabs-ai/headroom), `claude-mem`, and similar tools are solving real cost/prompt-window pain for long-running agent sessions.
- **Spec-driven development** — [github/spec-kit](https://github.com/github/spec-kit) is a strong indicator that “write the spec, let the agent build it” will become a mainstream workflow in AI coding.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*