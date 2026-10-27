# AI Open Source Trends 2026-08-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-13 02:27 UTC

---

# AI Open Source Trends Report — 2026-08-13

After filtering out non-AI trending repos (MediaCrawler, SpiderFoot, LocalSend, everyone-can-use-english, etc.), the remaining AI-related projects cluster around agent orchestration, context/memory infrastructure, RAG, and smaller/domain-specific foundation models.

---

## 1. Today's Highlights

Agent operations dominated today's trending: Orca (+1,235) and Paperclip (+571) focus on running and managing fleets of agents, while agency-agents (+1,873) packages a full "AI agency" of specialized roles. At the same time, the top daily gainer, diagram-design (+2,855), shows that curated prompts and output templates for coding agents are becoming a product category of their own. On the model side, needle's 14MB foundation model and Kronos' financial-market foundation model signal a push toward tiny and vertical LLMs. NVIDIA-NeMo's Rust-based Switchyard (+421) also hints that major vendors are investing in lower-level agent infrastructure.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- [TensorFlow](https://github.com/tensorflow/tensorflow) — ⭐196,982 — Standard open-source ML framework; still the backbone for many production training/inference systems.
- [PyTorch](https://github.com/pytorch/pytorch) — ⭐102,351 — Dominant deep learning framework for research and production AI.
- [Hugging Face Transformers](https://github.com/huggingface/transformers) — ⭐164,021 — The de facto model-definition and inference library for modern LLMs and multimodal models.
- [Ollama](https://github.com/ollama/ollama) — ⭐178,377 — Local LLM runner now supporting a fast-growing list of recent models; key infrastructure for on-prem/edge inference.
- [semantica-agi/semantica](https://github.com/semantica-agi/semantica) — +845 today — Graph-native infrastructure for "context and accountable AI systems"; a new angle on AI memory and auditability.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐66,101 — Token-compression layer for agent context; reduces JSON token usage by 60–95% before it reaches the LLM.
- [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) — +421 today — Rust-coded repo from NVIDIA NeMo; no README description in this snapshot, but the rapid star gain makes it a project to watch.

### 🤖 AI Agents / Workflows

- [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐186,565 — The long-running open-source vision for accessible, general-purpose AI agents.
- [LangChain](https://github.com/langchain-ai/langchain) — ⭐144,105 — The dominant agent-engineering platform and a major hub for LLM tooling.
- [browser-use](https://github.com/browser-use/browser-use) — ⭐108,979 — Lets AI agents actually use websites; key infrastructure for web automation and agentic browsing.
- [stablyai/orca](https://github.com/stablyai/orca) — +1,235 today — An "ADE" (agent development environment) for running fleets of parallel agents with your own API subscriptions.
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) — +1,873 today — A ready-made "AI agency" of specialized agents, from frontend wizards to Reddit community experts.
- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) — +571 today — Open-source app for managing agents at work; a strong signal that agent operations software is emerging.
- [macro-inc/macro](https://github.com/macro-inc/macro) — +227 today — Unified team workspace where email, chat, docs, tasks, and CRM are linked with agents and shared AI memory.
- [embabel/embabel-agent](https://github.com/embabel/embabel-agent) — +40 today — A new agent framework for the JVM; notable for expanding agent development beyond Python/TypeScript/Rust.

### 📦 AI Applications

- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — +2,855 today — 29 editorial diagram types for Claude Code, delivered as self-contained HTML/SVG; the day's biggest star gainer.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐45,703; +476 today — AI turns documents/topics into native PowerPoint decks with real shapes, transitions, charts, and audio narration.
- [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐102,825 — AI-powered workflow that generates short videos from a topic or keyword; still a community favorite.
- [career-ops](https://github.com/santifer/career-ops) — ⭐63,648 — Open-source AI job-search agent that scans portals, scores listings, and tailors CVs from your coding CLI.
- [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐62,588 — LLM-driven multi-market stock analysis with real-time news, dashboards, and automated push notifications.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐50,358 — AI productivity studio with chat, autonomous agents, and 300+ assistants across frontier LLMs.

### 🧠 LLMs / Training

- [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) — +266 today — A foundation model for the language of financial markets; a clear example of vertical/domain-specific foundation models.
- [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) — +65 today — Official inference and LoRA trainer package for the LTX-2 audio–video generative model.
- [cactus-compute/needle](https://github.com/cactus-compute/needle) — +315 today — A 14MB foundation model for tiny devices: phones, wearables, smart home, and robots.
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐102,535 — The best-known educational path for implementing a ChatGPT-like LLM in PyTorch.
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,480 — Educational project for systems engineers to build a tiny vLLM-compatible inference stack on Apple Silicon.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,298 — Comprehensive LLM evaluation platform supporting 100+ datasets and numerous model families.
- [Picovoice/picollm](https://github.com/Picovoice/picollm) — ⭐316 — On-device LLM inference powered by X-bit quantization; aligned with the small/edge model trend.

### 🔍 RAG / Knowledge

- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐87,585; +139 today — Leading open-source RAG engine fusing retrieval with agent capabilities to create a stronger LLM context layer.
- [langgenius/dify](https://github.com/langgenius/dify) — ⭐152,264 — Agentic workflow and RAG platform with rich model/tool support; a major hub for production LLM apps.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ⭐51,600 — The leading document-agent and OCR platform; central to RAG application development.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐45,616 — High-performance cloud-native vector database built for scalable vector search.
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐33,943 — High-performance vector database purpose-built for AI and next-generation search applications.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐63,143 — Universal long-term memory layer for AI agents; a key piece of the "memory infrastructure" wave.
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐90,559 — Captures, compresses, and reinjects agent context across sessions; practical persistent memory for Claude Code and other agents.
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐105,709 — Turns codebases and documents into queryable knowledge graphs without vector stores; represents graph-native RAG.

---

## 3. Trend Signal Analysis

The clearest signal is that the open-source community is no longer just building agents — it is building the operating layer for many agents. Orca, Paperclip, agency-agents, and Macro all treat agents as a workforce to be launched, managed, and given shared memory. This is a shift from "chat with an LLM" to "run an AI team."

The second signal is prompt/template content as a product. diagram-design's +2,855 stars in one day demonstrates that high-quality, opinionated instructions and output formats for agentic coding tools are highly valued.

Third, context and memory infrastructure is becoming a core layer. Semantica (graph-native accountability), Headroom (token compression), claude-mem (persistent context), and mem0 (agent memory) all attack context costs and continuity from different angles.

Fourth, small and domain-specific models are emerging: needle is an edge-scale 14MB foundation model; Kronos targets financial markets; LTX-2 targets audio-video generation. This verticalization of foundation models is a notable new pattern.

Finally, there is a technical stack shift. Rust is appearing in agent infrastructure (Macro, Switchyard, rig), and JVM agent frameworks like embabel are arriving, while Python/TypeScript remain dominant. The data also reflects the broader LLM market: Ollama's local model list now includes very recent releases such as Kimi, GLM, DeepSeek, gpt-oss, and Qwen, suggesting the local model race is accelerating and agent tooling must keep pace. Meanwhile, RAG has fully merged with agent workflows: RAGFlow, Dify, LlamaIndex, and Graphify are treating retrieval as an agent context layer rather than a separate search step.

---

## 4. Community Hot Spots

- **Fleet-of-agents operations** — [Orca](https://github.com/stablyai/orca) and [Paperclip](https://github.com/paperclipai/paperclip) are early signals of "Kubernetes for agents." If you are building agent products, this is the missing management plane.
- **Context & memory infrastructure** — [semantica](https://github.com/semantica-agi/semantica), [Headroom](https://github.com/headroomlabs-ai/headroom), [claude-mem](https://github.com/thedotmack/claude-mem), and [mem0](https://github.com/mem0ai/mem0) are all attacking the context-window problem from different directions.
- **Promptware / output design** — [diagram-design](https://github.com/cathrynlavery/diagram-design) shows that curated prompts and templates for coding agents are a rising category worth developer attention.
- **Edge and tiny models** — [needle](https://github.com/cactus-compute/needle) and [picollm](https://github.com/Picovoice/picollm) highlight on-device LLM work; with 14MB models, agent capabilities will move to phones, wearables, and robots.
- **Graph-native AI context** — [Graphify](https://github.com/Graphify-Labs/graphify) and [semantica](https://github.com/semantica-agi/semantica) show growing preference for knowledge graphs over pure vector search for explainable, relation-aware AI context.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*