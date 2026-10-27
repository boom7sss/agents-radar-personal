# AI Open Source Trends 2026-08-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-06 03:15 UTC

---

# AI Open Source Trends Report — 2026-08-06

**Data note:** Trending-list repos often only expose today’s new stars in the source data; total stars are shown where available. Non-AI repos (`system-design-primer`, `next.js`, `tailwindcss`, `netdata`, `airflow`, `julia`, `siyuan`) were filtered out.

---

## 1. Today’s Highlights

Today’s GitHub trending is dominated by **agent memory and agent infrastructure**, not raw model releases. [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) (+1,892 today) shows that teams want a governed, shared memory layer for AI agents, while [cloudflare/computer](https://github.com/cloudflare/computer) (+891) pushes the “agent gets a computer” pattern forward. The fast rise of [obra/superpowers](https://github.com/obra/superpowers) (+931) and [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (+226) signals that **agent skills/methodologies are becoming versionable engineering artifacts**. Meanwhile, [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) (+747) and [lyogavin/airllm](https://github.com/lyogavin/airllm) (+833) reinforce the demand for cost-efficient, local/DeepSeek-native AI tooling. Finally, [uber/ADR](https://github.com/uber/ADR) (+354) brings enterprise **agent security/observability** into the open-source stack.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [huggingface/transformers](https://github.com/huggingface/transformers) — ★ 163,378 — The standard model-definition/inference framework for modern ML models across text, vision, audio, and multimodal.
- [ollama/ollama](https://github.com/ollama/ollama) — ★ 177,881 — The easiest way to run leading open models locally; now surfaces Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma, and more.
- [vllm-project/vllm](https://github.com/vllm-project/vllm) — ★ 88,291 — High-throughput, memory-efficient LLM inference/serving engine, still central to open-source serving stacks.
- [lyogavin/airllm](https://github.com/lyogavin/airllm) — +833 today — 70B-scale LLM inference on a single 4GB GPU; a strong signal for low-cost local inference.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ★ 65,070 — Compresses tool outputs, logs, and RAG chunks before they reach the LLM, cutting tokens while preserving answer quality.
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ★ 8,182 — Modular Rust framework for building LLM applications; notable for the Rust-native AI ecosystem.
- [roboflow/supervision](https://github.com/roboflow/supervision) — ★ 48,969, +146 today — Reusable computer vision tools; a practical foundation for building CV pipelines quickly.

### 🤖 AI Agents / Workflows

- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ★ 238,046 — Agent-harness performance optimization system with skills, instincts, memory, and security for coding agents.
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ★ 143,517 — The de facto agent-engineering platform for LLM-powered tools, RAG, and tool calling.
- [langgenius/dify](https://github.com/langgenius/dify) — ★ 151,475 — Collaborative workspace for building agentic workflows and RAG pipelines, from prototype to production.
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ★ 107,999 — Makes websites accessible to AI agents; core infrastructure for browser-based agent automation.
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ★ 185,836 — The long-standing open-source vision for general-purpose, accessible AI agents.
- [cloudflare/computer](https://github.com/cloudflare/computer) — +891 today — “Give your agent a computer”; a hosted/cloud-native environment for agentic computer-use tasks.
- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) — ★ 31,750, +747 today — DeepSeek-native terminal coding agent engineered around prefix-cache stability for long-running sessions.
- [uber/ADR](https://github.com/uber/ADR) — +354 today — Uber’s open-source agent security/observability layer, covering security benchmarking and threat detection.

### 📦 AI Applications

- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ★ 147,985 — User-friendly, self-hosted AI interface supporting Ollama and OpenAI-compatible APIs.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ★ 101,788 — Automated short-video generation from a topic/keyword using AI models and workflows.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ★ 49,718 — AI productivity studio with smart chat, autonomous agents, and 300+ assistive personas.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ★ 43,301 — Converts documents/topics into native PowerPoint decks with charts, animations, and narration.
- [santifer/career-ops](https://github.com/santifer/career-ops) — ★ 62,959 — Open-source AI job-search assistant: scans portals, scores listings, and tailors CVs locally.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ★ 60,195 — LLM-powered multi-market stock analysis with real-time news, decision dashboards, and automated delivery.

### 🧠 LLMs / Training

- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ★ 102,227 — The dominant dynamic neural-network framework for GPU-accelerated model research and training.
- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ★ 196,876 — The long-standing open-source ML framework for production training and deployment.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ★ 7,278 — Comprehensive LLM evaluation platform supporting 100+ datasets and major model families.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ★ 4,444 — A hands-on course where systems engineers build a tiny vLLM + Qwen stack on Apple Silicon.
- [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) — ★ 804 — Curated list for on-policy distillation, a fast-moving LLM training/research direction.
- [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) — ★ 63 — Decoder-only LLM built from scratch in pure Rust with Candle: MoE, quantization-aware training, and tool agents.

### 🔍 RAG / Knowledge

- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) — +1,892 today — Team-level memory hub that turns conversations, docs, and code into reusable Chat Memory, Skills, LLM-Wiki, and Code-Graph assets.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ★ 86,917 — Leading open-source RAG engine combining deep document understanding with agent capabilities.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ★ 103,096 — Converts codebases/docs/schemas into queryable knowledge graphs with deterministic AST parsing; no vector store required.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ★ 62,616 — Universal memory layer for AI agents, enabling persistent cross-session recall.
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ★ 89,754 — Captures agent-session activity, compresses it, and injects relevant context into future sessions for Claude Code, Codex, Gemini, and more.
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ★ 64,397 — Local-first “own your intelligence” agent/RAG platform for private document Q&A.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ★ 45,526 — High-performance, cloud-native vector database built for scalable ANN search.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ★ 33,805 — High-performance vector database/search engine for next-generation AI applications.

---

## 3. Trend Signal Analysis

Today’s explosive community attention is centered on **agent memory and context**, not just model quality. [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) +1.9k stars suggests teams want a governed, shared memory plane for multi-agent workflows. The rapid rise of agent-skill/methodology repos such as [obra/superpowers](https://github.com/obra/superpowers) and [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) shows the community is industrializing coding agents: skills are becoming versionable, shareable artifacts with defined engineering practice. New architecture directions are also visible — **vectorless/reasoning-based RAG** (e.g., [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex), [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)) and **prefix-cache-stable coding agents** (e.g., [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)) both attack the same pain points: token cost, latency, and long-running reliability. [lyogavin/airllm](https://github.com/lyogavin/airllm) +833 confirms continued demand for local inference on constrained hardware. Meanwhile, [uber/ADR](https://github.com/uber/ADR) and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) show that security, observability, and context/token optimization are becoming first-class concerns in the agent stack. The broader pattern connects to the current open-model wave — e.g., DeepSeek, Kimi-K2.6, GLM-5.2, gpt-oss shown in [ollama/ollama](https://github.com/ollama/ollama) — where tooling is increasingly optimized for cache reuse, local deployment, and long-lived agent sessions.

---

## 4. Community Hot Spots

- **Agent memory & persistent context** — Watch [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), and [topoteretes/cognee](https://github.com/topoteretes/cognee). Memory is rapidly becoming a first-class infrastructure layer for agents.

- **Agent skills & methodology** — [obra/superpowers](https://github.com/obra/superpowers), [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), and [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) treat skills as packages/plugins for Claude Code, Codex, and similar CLIs. This is where coding-agent usability is being standardized.

- **Vectorless / knowledge-graph RAG** — Projects like [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex), and [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) challenge the default “always use a vector DB” approach with cheaper, explainable retrieval.

- **Cost-efficient local inference** — [lyogavin/airllm](https://github.com/lyogavin/airllm), [Picovoice/picollm](https://github.com/Picovoice/picollm), and [ollama/ollama](https://github.com/ollama/ollama) remain high-interest because running capable open models on commodity hardware keeps democratizing AI access.

- **Agent security & enterprise hardening** — [uber/ADR](https://github.com/uber/ADR), [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), and [affaan-m/ECC](https://github.com/affaan-m/ECC) show that as agents move into production, observability, context compression, and security benchmarking are evolving alongside them.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*