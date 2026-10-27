# AI Open Source Trends 2026-08-03

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-03 03:34 UTC

---

After filtering out non-AI trending repos (`kaneo`, `invidious`, `build-your-own-x`, `HarbourMasters/Lighthouse`), the AI-relevant open-source landscape splits into five clear clusters.

## 1. Today’s Highlights

Today’s AI open-source momentum is concentrated less in model weights and more in **agent-centric infrastructure, memory, and skill packs**. The top trending repo is Microsoft’s [AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) (+2,629 today), while domain-specific agent skill repos like [reverse-skill](https://github.com/zhaoxuya520/reverse-skill) (+1,141), [Agent-Reach](https://github.com/Panniantong/Agent-Reach) (+659), and [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) (+602) signal a shift toward equipping coding agents with routable tools and persistent memory. The DeepSeek ecosystem is also visible: [antirez/ds4](https://github.com/antirez/ds4) brings DeepSeek 4 Flash/PRO inference to Metal/CUDA/ROCm, and [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) is a DeepSeek-native terminal coding agent built for long-running sessions. In the topic-search universe, RAG platforms such as [dify](https://github.com/langgenius/dify) and [open-webui](https://github.com/open-webui/open-webui) remain dominant, but graph/vectorless retrieval approaches like [Graphify](https://github.com/Graphify-Labs/graphify) are emerging.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐143,263 total — The agent engineering platform and default SDK for building LLM-powered applications.
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐177,628 total — Local model runtime now supporting Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, and more.
- [vllm-project/vllm](https://github.com/vllm-project/vllm) — ⭐87,991 total — High-throughput, memory-efficient inference and serving engine for LLMs.
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐163,269 total — The standard model-definition framework for text, vision, audio, and multimodal models.
- [lyogavin/airllm](https://github.com/lyogavin/airllm) — ⭐0 (+819 today) — Enables 70B-class LLM inference on a single 4GB GPU via layer streaming.
- [antirez/ds4](https://github.com/antirez/ds4) — ⭐0 (+139 today) — Local inference engine for DeepSeek 4 Flash/PRO across Metal, CUDA, and ROCm.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐62,342 total — Universal memory layer for AI agents, turning memory into reusable infrastructure.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐64,111 total — Compresses tool outputs, logs, and RAG chunks before they reach the LLM, saving 20–95% tokens.

### 🤖 AI Agents / Workflows

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐185,775 total — The long-standing open-source vision for accessible, general-purpose AI agents.
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐107,628 total — Makes websites accessible to AI agents, enabling automated online task execution.
- [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) — ⭐73,010 total — A nano Claude Code–like agent harness built from 0 to 1, ideal for learning agent internals.
- [different-ai/openwork](https://github.com/different-ai/openwork) — ⭐0 (+280 today) — Open-source alternative to Claude Cowork, powered by opencode.
- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) — ⭐0 (+333 today) — DeepSeek-native terminal coding agent engineered around prefix-cache stability.
- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — ⭐0 (+659 today) — CLI that gives AI agents read/search access to Twitter, Reddit, YouTube, GitHub, Bilibili, and more with zero API fees.
- [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) — ⭐0 (+1,141 today) — AI-powered skill router pack for security research and authorized penetration testing, supporting Claude Code, Kiro, Cursor, and Cline.
- [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) — ⭐46,281 total — Open-source super assistant and agent harness with multi-model, multi-channel support and self-evolving memory.

### 📦 AI Applications

- [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) — ⭐0 (+2,629 today) — 12-week, 24-lesson AI curriculum; today’s most-starred repository.
- [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) — ⭐0 (+588 today) — 21-lesson generative AI course, a top educational entry point.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐101,232 total — Automates short-video generation from a topic or keyword using LLMs and AI workflows.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐49,306 total — AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐42,609 total — Turns documents or topics into native PowerPoint decks with charts, transitions, and narration.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐59,885 total — LLM-powered multi-market stock analysis with real-time news and decision dashboards.
- [santifer/career-ops](https://github.com/santifer/career-ops) — ⭐62,568 total — Open-source AI job-search skill that scans portals, scores listings, and tailors CVs inside AI coding CLIs.
- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) — ⭐0 (+206 today) — AI agent skill that researches any topic across Reddit, X, YouTube, HN, and Polymarket, then synthesizes a grounded summary.

### 🧠 LLMs / Training

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐100,406 total — Step-by-step implementation of a ChatGPT-like LLM in PyTorch from scratch.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,261 total — LLM evaluation platform supporting 100+ datasets and major model families.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,432 total — A systems-engineering course on building a tiny vLLM + Qwen on Apple Silicon.
- [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) — ⭐2,582 total — Comprehensive GenAI roadmap with projects, use cases, and interview prep.
- [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) — ⭐1,423 total — Curated overview of Japanese LLMs and resources.
- [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) — ⭐785 total — Awesome list for on-policy distillation, a rising LLM training direction.
- [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) — ⭐616 total — Resource repository for machine unlearning in LLMs.
- [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) — ⭐59 total — Decoder-only LLM built from scratch in pure Rust/Candle, with MoE and sparse attention.

### 🔍 RAG / Knowledge

- [langgenius/dify](https://github.com/langgenius/dify) — ⭐151,124 total — Build agentic workflows and RAG pipelines in one collaborative workspace.
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐147,657 total — User-friendly AI interface with deep RAG support for Ollama, OpenAI API, and local models.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐86,655 total — Leading open-source RAG engine combining deep retrieval with agent capabilities.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ⭐51,324 total — Document agent and OCR platform now positioned as a core RAG/data framework.
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ⭐64,252 total — Local-first, all-in-one RAG/agent workspace for owning your intelligence.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐101,171 total — Turns codebases, docs, and schemas into queryable knowledge graphs using AST parsing, with no vector store.
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐89,350 total — Captures agent sessions, compresses them with AI, and injects relevant context into future sessions.
- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) — ⭐0 (+602 today) — Team-level memory hub that turns conversations, docs, and code into reusable memory assets for AI agents.

## 3. Trend Signal Analysis

The strongest signal today is that **“skills” have become a first-class artifact in the AI open-source ecosystem**. Multiple trending repos are not full agents but carefully packaged skill libraries that add domain expertise to Claude Code, Cursor, Cline, and similar tools: `reverse-skill` for security, `last30days-skill` for web research, and `k-skill` for Korean-language agent behavior. Combined with high-star agent harnesses like `learn-claude-code` and `CowAgent`, the community is shifting from building standalone agents to customizing and composing existing coding-agent runtimes.

A second clear signal is the **local-first DeepSeek moment**. [antirez/ds4](https://github.com/antirez/ds4) explicitly targets DeepSeek 4 Flash/PRO on Metal, CUDA, and ROCm, while [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) is engineered around prefix-cache stability for always-on terminal agents. This points toward a workflow where users serve open-weight models locally and keep an agent resident in the terminal rather than relying on hosted APIs.

Finally, RAG is moving beyond vector search. [Graphify](https://github.com/Graphify-Labs/graphify), [PageIndex](https://github.com/VectifyAI/PageIndex), and [LEANN](https://github.com/StarTrail-org/LEANN) offer graph-based, vectorless, or storage-savvy retrieval, while `claude-mem` and `TencentDB-Agent-Memory` treat memory as a reusable shared asset. The underlying need is clear: agents need cheaper context, persistent memory, and retrieval that scales beyond embeddings.

## 4. Community Hot Spots

- **Agent skill packs** — [reverse-skill](https://github.com/zhaoxuya520/reverse-skill), [last30days-skill](https://github.com/mvanhorn/last30days-skill), and [k-skill](https://github.com/NomaDamas/k-skill) are the fastest-growing packaging format for teaching existing AI clients new workflows.
- **Memory/context infrastructure** — [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory), [claude-mem](https://github.com/thedotmack/claude-mem), and [mem0](https://github.com/mem0ai/mem0) show that persistent memory is the key bottleneck for production agents.
- **Local inference for large models** — [airllm](https://github.com/lyogavin/airllm) and [ds4](https://github.com/antirez/ds4) are pushing frontier-size LLMs onto commodity hardware.
- **DeepSeek-native tooling** — [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) represents a new breed of terminal agents optimized for long-running, prefix-cache-stable sessions.
- **Graph/vectorless RAG** — [Graphify](https://github.com/Graphify-Labs/graphify) and [PageIndex](https://github.com/VectifyAI/PageIndex) challenge the assumption that RAG requires vector embeddings, promising cheaper and more explainable retrieval.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*