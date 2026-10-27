# AI Open Source Trends 2026-08-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-07 02:55 UTC

---

# AI Open Source Trends Report — 2026-08-07

**Data note:** For new repos on GitHub Trending, the total-star field may not be fully populated; the "+N today" count is the meaningful signal.

---

## 1. Today's Highlights

After filtering out non-AI entries (authentik, guava, ChinaTextbook), today’s GitHub AI activity is dominated by a rapid push to standardize **agent skills**, **memory/context engineering**, and **computer-use infrastructure**. [`cloudflare/computer`](https://github.com/cloudflare/computer) exploded with +2,802 stars, signaling that cloud vendors are entering the "give your agent a computer" space. At the same time, developer-authored skill packs like [`mattpocock/skills`](https://github.com/mattpocock/skills) (+1,873) and [`obra/superpowers`](https://github.com/obra/superpowers) (+858) show a booming ecosystem around reusable skills for coding agents. Meanwhile, [`TencentCloud/TencentDB-Agent-Memory`](https://github.com/TencentCloud/TencentDB-Agent-Memory) (+1,057) and [`claude-mem`](https://github.com/thedotmack/claude-mem) are making agent memory a first-class, shareable asset. The overall trend is clear: the community is moving up the stack from raw model capability to the operational layer — skills, memory, context compression, and durable agent loops.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [cloudflare/computer](https://github.com/cloudflare/computer) — ⭐0 (+2,802 today) — Cloudflare's "give your agent a computer" runtime; a major cloud-vendor bet on agent computer-use infrastructure.
- [vllm-project/vllm](https://github.com/vllm-project/vllm) — ⭐88,382 — High-throughput, memory-efficient LLM inference and serving engine.
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐177,949 — One-command LLM runtime; now supports Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and more.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐65,252 — Compresses tool outputs and RAG chunks before they reach the LLM, cutting coding-agent tokens by up to 95% for JSON-heavy workloads.
- [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) — ⭐0 (+237 today) — Local-first code intelligence graph for MCP/CLI, helping AI coding tools read only what matters.
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐143,578 — The agent engineering platform for RAG, tool-calling, and workflow orchestration.
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) — ⭐39,067 — Build resilient agents with fine-grained stateful graph control.

### 🤖 AI Agents / Workflows

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐186,050 (+37 today) — The long-standing open-source vision for accessible, building-block agents.
- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) — ⭐0 (+1,057 today) — Team-level memory hub turning conversations, docs, and code into reusable agent memory assets.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — ⭐0 (+593 today) — Production-grade engineering skills designed for AI coding agents.
- [mattpocock/skills](https://github.com/mattpocock/skills) — ⭐0 (+1,873 today) — Real-world engineering skills from a senior developer’s `.agents` directory.
- [obra/superpowers](https://github.com/obra/superpowers) — ⭐0 (+858 today) — An agentic skills framework and software development methodology.
- [huangruiteng/loopx](https://github.com/huangruiteng/loopx) — ⭐0 (+847 today) — Lightweight loop-engineering state kernel for long-running agent teams with durable goals, evidence logs, and verifiable handoffs.
- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) — ⭐32,505 total (+888 today) — DeepSeek-native terminal coding agent engineered around prefix-cache stability.
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐108,107 — Makes websites accessible to AI agents for browser automation at scale.

### 📦 AI Applications

- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐148,087 — User-friendly, self-hosted AI interface supporting Ollama, OpenAI API, and more.
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ⭐64,436 — Local-first agent experience with full ownership of your intelligence.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐49,927 — AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐43,560 — AI turns documents or topics into native PowerPoint decks with charts, transitions, and narration.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐101,934 — One-click AI short-video generation from a keyword or topic.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐60,272 — LLM-powered multi-market stock analysis with real-time news and decision dashboards.
- [santifer/career-ops](https://github.com/santifer/career-ops) — ⭐63,085 — Open-source AI job search: scans listings, scores opportunities, tailors CV, and tracks applications.

### 🧠 LLMs / Training

- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐163,421 — The standard framework for state-of-the-art ML models across text, vision, and audio.
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐102,252 — Dynamic neural network framework with strong GPU acceleration.
- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐196,895 — The long-standing open-source machine learning framework.
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) — ⭐54,414 — Train a 64M-parameter LLM from scratch in about two hours.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,444 — Educational project building a tiny vLLM + Qwen on Apple Silicon.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,281 — LLM evaluation platform covering 100+ datasets and a wide range of models.
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐8,191 — Build modular, scalable LLM applications in Rust.
- [Picovoice/picollm](https://github.com/Picovoice/picollm) — ⭐316 — On-device LLM inference powered by X-bit quantization.

### 🔍 RAG / Knowledge

- [langgenius/dify](https://github.com/langgenius/dify) — ⭐151,608 — Collaborative workspace for building agentic workflows and RAG pipelines.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐86,989 — Leading open-source RAG engine fused with agent capabilities.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐103,566 — Turns codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs without a vector store.
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — ⭐35,049 — Document indexing for vectorless, reasoning-based RAG.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐45,543 — High-performance, cloud-native vector database for ANN search.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐33,819 — High-performance vector database built for next-generation AI.
- [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) — ⭐58,892 — Lightning-fast search engine with AI-powered hybrid search.
- [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) — ⭐0 (+1,190 today) — Rust-based PDF classification and text extraction that detects scanned vs text-based PDFs for smart RAG routing.

---

## 3. Trend Signal Analysis

The strongest signal today is the emergence of **"skills" as a distribution primitive for AI coding agents**. Three independent projects — [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills), [`mattpocock/skills`](https://github.com/mattpocock/skills), and [`obra/superpowers`](https://github.com/obra/superpowers) — all gained significant stars today, suggesting that developers are beginning to package engineering knowledge into reusable, versionable agent skills. This is a natural evolution beyond MCP tools: skills are higher-level, methodology-driven assets.

A second clear trend is the shift from stateless prompts to **durable memory and context engineering**. [`TencentDB-Agent-Memory`](https://github.com/TencentCloud/TencentDB-Agent-Memory) frames memory as a team-shared asset with four reusable types — chat memory, skills, LLM-Wiki, and code-graph. [`claude-mem`](https://github.com/thedotmack/claude-mem) captures and compresses everything an agent does across sessions. At the same time, [`headroom`](https://github.com/headroomlabs-ai/headroom) and [`code-review-graph`](https://github.com/tirth8205/code-review-graph) attack the token-cost bottleneck by compressing or deterministically selecting context before it reaches the LLM.

New directions include **cloud-native computer-use infrastructure**: [`cloudflare/computer`](https://github.com/cloudflare/computer) (+2,802 today) is the clearest signal yet that platform vendors want to make "agent computer access" an infrastructure layer, complementing established tools like [`browser-use`](https://github.com/browser-use/browser-use). Terminal coding agents are also getting more sophisticated: [`DeepSeek-Reasonix`](https://github.com/esengine/DeepSeek-Reasonix) and [`loopx`](https://github.com/huangruiteng/loopx) optimize for prefix-cache stability, durable state, and verifiable handoffs — concerns that only matter when agents are expected to run continuously in production.

Finally, the connection to the open-weight LLM release cycle is clear. With Ollama now advertising Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma, model access is increasingly commoditized. Developer attention is moving up the stack to the layers around models: skills, memory, context reduction, code knowledge graphs, and long-running agent orchestration.

---

## 4. Community Hot Spots

- **Agent Skills as the new plugin model** — Watch [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills), [`mattpocock/skills`](https://github.com/mattpocock/skills), and [`obra/superpowers`](https://github.com/obra/superpowers). The huge star counts today suggest a rapidly forming ecosystem around shareable, methodology-driven agent skills.

- **Agent memory and context infrastructure** — [`TencentDB-Agent-Memory`](https://github.com/TencentCloud/TencentDB-Agent-Memory), [`thedotmack/claude-mem`](https://github.com/thedotmack/claude-mem), and [`mem0ai/mem0`](https://github.com/mem0ai/mem0) are defining how agents remember, share, and reload context across sessions.

- **Computer-use and browser agents** — [`cloudflare/computer`](https://github.com/cloudflare/computer) and [`browser-use/browser-use`](https://github.com/browser-use/browser-use) show that giving agents a real computer/browser is now a platform-level race.

- **Long-running coding agents with cost efficiency** — [`huangruiteng/loopx`](https://github.com/huangruiteng/loopx), [`esengine/DeepSeek-Reasonix`](https://github.com/esengine/DeepSeek-Reasonix), and [`tirth8205/code-review-graph`](https://github.com/tirth8205/code-review-graph) are pushing durable state, prefix-cache stability, and context-graph-aware code review.

- **Vectorless RAG / deterministic knowledge graphs** — [`Graphify-Labs/graphify`](https://github.com/Graphify-Labs/graphify), [`VectifyAI/PageIndex`](https://github.com/VectifyAI/PageIndex), and [`firecrawl/pdf-inspector`](https://github.com/firecrawl/pdf-inspector) point toward faster, more interpretable retrieval that doesn't depend on brute-force vector search.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*