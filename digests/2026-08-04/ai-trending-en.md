# AI Open Source Trends 2026-08-04

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-04 15:28 UTC

---

# AI Open Source Ecosystem Report — 2026-08-04

**Filter note:** Non-AI trending repos (Cypress, webpack, spdlog, Deno, Angular, Tailwind, Kaneo, etc.) were excluded. The realtime trending list reports only today’s star deltas, so entries marked “+today” come from that list; total stars are shown where available from topic search data.

---

## 1. Today’s Highlights

Agent memory and context are the hottest theme: [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) (+1,138) and [claude-mem](https://github.com/thedotmack/claude-mem) (⭐89,517) show the community’s push to give agents persistent, team-shared memory. Security and reliability for agents are also emerging fast — [Uber/ADR](https://github.com/uber/ADR) and security-focused skill routers like [reverse-skill](https://github.com/zhaoxuya520/reverse-skill) (+2,310) point to enterprise-grade agent governance. On the efficiency side, [AirLLM](https://github.com/lyogavin/airllm) (+1,716) continues to make 70B-class inference possible on a 4GB GPU, while [pdf-inspector](https://github.com/firecrawl/pdf-inspector) (+2,524) is building the document-routing layer AI pipelines need. Finally, coding agents are becoming richer: [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) (+924) brings DeepSeek-native terminal coding, and [video-use](https://github.com/browser-use/video-use) (+306) extends agent automation into video editing.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) — Today +2,524 — Fast Rust PDF inspection/classification library that detects scanned vs. text-based PDFs for smarter AI routing decisions.
- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) — Today +1,138 — Team-level memory hub for AI agents, turning conversations, docs, and code into reusable memory assets.
- [uber/ADR](https://github.com/uber/ADR) — Today +140 — Enterprise AI agent security through observability, threat detection, and security benchmarking.
- [lyogavin/airllm](https://github.com/lyogavin/airllm) — Today +1,716 — 70B LLM inference on a single 4GB GPU, a major low-resource inference breakthrough.
- [livekit/agents](https://github.com/livekit/agents) — Today +432 — Framework for building realtime voice AI agents.
- [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) — Today +33 — Official Compound Engineering plugin for Claude Code, Codex, Cursor, and more.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐64,640 — Compresses tool outputs, logs, and RAG chunks before they reach the LLM, saving 20–95% tokens.

### 🤖 AI Agents / Workflows

- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐237,587 — Agent harness performance optimization system with skills, memory, security, and research-first development.
- [obra/superpowers](https://github.com/obra/superpowers) — Today +617 — An agentic skills framework and software development methodology.
- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) — ⭐30,614; +924 today — DeepSeek-native AI coding agent for the terminal, engineered around prefix-cache stability.
- [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) — Today +2,310 — AI-powered skill router for reverse engineering / authorized penetration testing, with self-evolving knowledge base.
- [browser-use/video-use](https://github.com/browser-use/video-use) — Today +306 — Lets coding agents edit videos directly.
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐185,812 — The long-standing open-source vision for accessible AI agents.
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐225,339 — “The agent that grows with you,” a highly adaptable personal agent framework.

### 📦 AI Applications

- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — ⭐66,330 — Gives AI agents CLI access to read/search Twitter, Reddit, YouTube, GitHub, Bilibili, and more.
- [santifer/career-ops](https://github.com/santifer/career-ops) — ⭐62,750 — Open-source AI job search: scans portals, evaluates listings, tailors CVs, tracks applications.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐49,400 — AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
- [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) — ⭐46,311 — Open-source super AI assistant and agent harness with tools, memory, and multi-channel support.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐42,975 — Turns documents or topics into native PowerPoint decks with animations, charts, and narration.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐101,555 — Generates HD short videos from a topic or keyword using AI and automated workflows.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐60,042 — LLM-powered multi-market stock analysis system with news and decision dashboards.

### 🧠 LLMs / Training

- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐163,335 — The canonical framework for state-of-the-art ML models across text, vision, and audio.
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐102,175 — Core deep learning framework used across the LLM ecosystem.
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐100,538 — Step-by-step implementation of a ChatGPT-like LLM in PyTorch.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,273 — LLM evaluation platform supporting 100+ datasets and major models.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,440 — Build a tiny vLLM + Qwen inference serving stack on Apple Silicon.
- [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) — Today +784 — 21 lessons for getting started with generative AI.

### 🔍 RAG / Knowledge

- [langgenius/dify](https://github.com/langgenius/dify) — ⭐151,325 — Leading open-source platform for agentic workflows, RAG pipelines, and LLM tooling.
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐147,832 — User-friendly AI interface with RAG and multi-model support.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐102,261 — Turns any codebase/docs/SQL schema into a queryable knowledge graph for coding agents.
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐89,517 — Persistent context across sessions for Claude Code, Codex, Gemini, and more.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐86,804 — Open-source RAG engine fusing retrieval with agent capabilities.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐62,503 — Universal memory layer for AI agents.
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — ⭐35,010 — Document index for vectorless, reasoning-based RAG.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐45,508 — High-performance cloud-native vector database.

---

## 3. Trend Signal Analysis

Today’s hot list sends a clear signal: the center of gravity is shifting from model building to agent operations. The biggest star gains are not new foundation models but the support systems around them — persistent memory, skill routing, security, inference efficiency, and document preprocessing. Agent memory is exploding: TencentDB-Agent-Memory, claude-mem, and mem0 all point to a shared realization that stateless agents are the bottleneck. Teams want memory that is team-level, governed, and reusable across tools.

A second strong signal is "context engineering." Projects like headroom (token compression), JuliusBrussee/caveman (65% token reduction), pdf-inspector (smart document routing), and PageIndex (vectorless RAG) are attacking context cost and retrieval quality without relying on larger models. This connects directly to the current LLM release cadence — Ollama now lists Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. As capable models become commoditized, developers are investing in making agent pipelines cheaper, faster, and more secure.

New directions also include enterprise agent security — Uber/ADR is a concrete sign that large companies now treat AI agents as production systems requiring observability and threat detection. The rise of "compound engineering" plugins and skills (EveryInc, superpowers, ECC) shows that coding CLIs like Claude Code and Cursor are becoming the new IDE platform. Finally, low-resource inference remains an explosive niche: AirLLM’s continued traction proves that running large models on consumer-grade GPUs is still one of the community’s favorite problems.

---

## 4. Community Hot Spots

- **Agent memory & persistent context** — [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory), [claude-mem](https://github.com/thedotmack/claude-mem), [mem0](https://github.com/mem0ai/mem0): Session statelessness is the #1 blocker for real-world agents.
- **Agent security & governance** — [Uber/ADR](https://github.com/uber/ADR), [reverse-skill](https://github.com/zhaoxuya520/reverse-skill): Enterprises need observability, threat detection, and controlled skill execution.
- **Low-resource inference & token efficiency** — [AirLLM](https://github.com/lyogavin/airllm), [headroom](https://github.com/headroomlabs-ai/headroom), [pdf-inspector](https://github.com/firecrawl/pdf-inspector): Run more with less; reduce cost and latency before sending context to the LLM.
- **Coding-agent skill ecosystems** — [superpowers](https://github.com/obra/superpowers), [ECC](https://github.com/affaan-m/ECC), [compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin): Agent CLIs are becoming modular platforms with installable skills.
- **RAG without vectors** — [PageIndex](https://github.com/VectifyAI/PageIndex), [Graphify](https://github.com/Graphify-Labs/graphify): Reasoning-based retrieval and knowledge graphs are challenging the vector-database default.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*