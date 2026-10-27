# AI Open Source Trends 2026-08-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-10 02:15 UTC

---

# AI Open Source Trends Report — 2026-08-10

**Filter note:** Of the 12 GitHub trending repos, 9 are clearly AI-related. I excluded `witr` (process tracing), `authentik` (identity/authentication), and `t3code` (AI relevance not clear from metadata). For trending-list entries, the snapshot showed total stars as `0`, so I use **today’s star gain** as the primary signal.

---

## 1. Today’s Highlights

Today’s AI open-source activity is dominated by **agentic coding workflows** and the rapid rise of reusable **Agent Skills**. [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) leads with **+2,356 stars today**, a self-improving RLM agent for autonomous coding tasks. Meanwhile, [google/skills](https://github.com/google/skills) (+528) and [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (+680) are pushing “skills” as a standardized packaging format for AI agents. On the knowledge side, [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) (+96) shows growing demand for **knowledge-graph RAG over source code**, reinforcing the trend seen in larger projects like [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify). Vertical applications also stand out: [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) (+306) and [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) (+86) show LLM/ML moving into finance and weather. [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) (+365) remains the most popular open-source diffusion workflow engine.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐196,942 total. The foundational ML framework for production training and deployment.
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐163,507 total. The model-definition framework for state-of-the-art text, vision, audio, and multimodal models.
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐178,144 total. Local LLM runtime now supporting Kimi-K2.6, GLM-5.2, DeepSeek, and gpt-oss — critical for on-prem agent deployments.
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐102,303 total. Core deep learning framework with GPU acceleration and dynamic graphs.
- [roboflow/supervision](https://github.com/roboflow/supervision) — ⭐49,217 total. Reusable computer vision tools that dramatically speed up CV pipelines.
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐8,222 total. A Rust-native LLM application framework for building modular, scalable AI systems.
- [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) — n/a total (+365 today). The most powerful modular diffusion model GUI/backend with a graph/nodes interface.
- [Picovoice/picollm](https://github.com/Picovoice/picollm) — ⭐316 total. On-device LLM inference powered by X-bit quantization, pointing to edge-AI momentum.

### 🤖 AI Agents / Workflows

- [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) — n/a total (+2,356 today). Self-improving RLM agent for coding workflows and long-running autonomous tasks — today’s biggest star gain.
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) — n/a total (+858 today). A complete AI agency of specialized agents, covering everything from frontend work to community management.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — n/a total (+680 today). Production-grade engineering skills for AI coding agents.
- [google/skills](https://github.com/google/skills) — n/a total (+528 today). Official Agent Skills for Google products and technologies — a strong signal that “skills” are becoming platform-level.
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐227,968 total. “The agent that grows with you,” emphasizing memory and long-term adaptation.
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐186,464 total. The long-standing open-source platform for autonomous AI agents.
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐108,499 total. Makes websites accessible to AI agents and is central to web-automation agent builders.
- [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) — ⭐6,150 total. A modular framework for “building AI agents, atomically.”

### 📦 AI Applications

- [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) — n/a total (+86 today). Google DeepMind’s AI weather modeling project, applying foundation-model approaches to meteorology.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — 61,263 total (+306 today). LLM-powered multi-market stock analysis with real-time news, decision dashboards, and automated notifications.
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐102,345 total. Generates HD short videos from a topic/keyword using automated AI workflows.
- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — ⭐69,771 total. Gives AI agents CLI access to Twitter, Reddit, YouTube, GitHub, and more — with zero API fees.
- [santifer/career-ops](https://github.com/santifer/career-ops) — ⭐63,319 total. Open-source AI job-search copilot that scans listings, scores them, and tailors applications.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐50,187 total. AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐44,117 total. AI that turns documents or topics into real, native PowerPoint decks with charts and narration.
- [harveyai/harvey-labs](https://github.com/harveyai/harvey-labs) — n/a total (+47 today). A benchmark for evaluating and improving AI agents in legal work — a strong vertical-AI signal.

### 🧠 LLMs / Training

- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) — ⭐54,500 total. Train a 64M-parameter LLM from scratch in just 2 hours — ideal for education and small-model research.
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐102,072 total. Step-by-step PyTorch implementation of a ChatGPT-like LLM from scratch.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,457 total. Learn LLM inference on Apple Silicon by building a tiny vLLM + Qwen.
- [opencompass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,287 total. LLM evaluation platform supporting 100+ datasets and dozens of major models.
- [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) — ⭐2,591 total. Comprehensive generative AI roadmap with projects, use cases, and interview prep.
- [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) — ⭐1,424 total. Curated overview of Japanese LLMs, important for multilingual model tracking.

### 🔍 RAG / Knowledge

- [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) — n/a total (+96 today). “The ultimate RAG for your monorepo” — combines knowledge graphs with multi-language code understanding.
- [langgenius/dify](https://github.com/langgenius/dify) — ⭐151,883 total. Build agentic workflows and RAG pipelines with rich model and tool support.
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐148,335 total. User-friendly self-hosted AI interface supporting Ollama, OpenAI-compatible APIs, and RAG.
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐143,818 total. The leading agent engineering platform with deep RAG and tool-calling ecosystems.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐104,639 total. Turns codebases, docs, schemas, and PDFs into queryable knowledge graphs — deterministic, with no vector store.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐87,134 total. A leading open-source RAG engine that fuses RAG with agent capabilities.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐62,889 total. Universal memory layer for AI agents, enabling persistent context across sessions.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐45,575 total. High-performance, cloud-native vector database built for scalable ANN search.

---

## 3. Trend Signal Analysis

Today’s signal is unambiguous: the community is pouring attention into **agentic coding and composable agent skills**. The three highest-gaining trending repos — `prime-agent`, `agency-agents`, and `agent-skills` — are all agent/workflow projects. The parallel release of [google/skills](https://github.com/google/skills) suggests that “skills” is becoming a standard packaging format, similar to MCP, for teaching agents reusable procedures.

A second signal is **code-aware knowledge retrieval**. [code-graph-rag](https://github.com/vitali87/code-graph-rag) and [graphify](https://github.com/Graphify-Labs/graphify) both use knowledge graphs rather than dense vectors to understand codebases; Graphify explicitly claims “no vector store.” This points toward deterministic, explainable AI over code, especially for monorepo-scale projects.

Third, **memory is becoming the differentiation layer for agents**. Projects like [claude-mem](https://github.com/thedotmack/claude-mem), [mem0](https://github.com/mem0ai/mem0), [cognee](https://github.com/topoteretes/cognee), and [headroom](https://github.com/headroomlabs-ai/headroom) all target cross-session context — without durable memory, long-running coding agents fail.

Finally, **vertical applications are gaining real traction**: stock analysis, legal benchmarks, weather forecasting, and presentation generation are not toy demos but domain-specific workflows, often self-hosted or CLI-first. Meanwhile, [ollama](https://github.com/ollama/ollama)’s support for Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, and gpt-oss reminds us that cheap, local inference is fueling the broader agent boom.

---

## 4. Community Hot Spots

- **Agent Skills as a new packaging layer** — [google/skills](https://github.com/google/skills) and [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) are rapidly standardizing reusable behavior for coding agents, analogous to MCP for tool access.
- **Self-improving coding agents** — [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) had a **+2,356 star day**, signaling demand for agents that improve from experience and handle long-horizon autonomous tasks.
- **Knowledge-graph RAG over codebases** — [code-graph-rag](https://github.com/vitali87/code-graph-rag) and [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) are pushing deterministic, AST-based code retrieval without vector stores.
- **Persistent memory and context compression** — [claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), [cognee](https://github.com/topoteretes/cognee), and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) solve the “stateless agent” problem with memory and token reduction.
- **Vertical agent workflows** — [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis), [harvey-labs](https://github.com/harveyai/harvey-labs), [ppt-master](https://github.com/hugohe3/ppt-master), and [career-ops](https://github.com/santifer/career-ops) show open-source AI moving from generic chatbots to specific, high-value jobs: finance, legal, presentations, and recruiting.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*