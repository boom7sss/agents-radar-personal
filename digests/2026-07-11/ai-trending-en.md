# AI Open Source Trends 2026-07-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-11 03:20 UTC

---

# AI Open Source Trends Report — 2026-07-11

## 1. Today's Highlights

Today's GitHub landscape is dominated by a surge in **standardized "agent skills"** — reusable, production-grade instruction sets for AI coding agents like Claude Code, Gemini CLI, and Cursor. Three separate projects (addyosmani/agent-skills, mattpocock/skills, obra/superpowers) collectively gained over 3,800 stars, signaling strong community desire for interoperable agent behavior definitions. Meanwhile, agent memory infrastructure is maturing rapidly: TencentCloud's **TencentDB-Agent-Memory** and the open-source **claude-mem** (86k+ stars) both tackle long-term context persistence across sessions. A new category of **agent-native office automation** emerges with iOfficeAI's OfficeCLI, purpose-built for AI agents to manipulate Word/Excel/PowerPoint without any desktop Office installation.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools)

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** — ⭐141,485 — The leading agent engineering platform for building LLM-powered applications, now deeply integrated with MCP and tool-calling standards.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — ⭐85,936 — High-throughput LLM inference serving engine, the de facto standard for production deployments.
- **[langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)** — ⭐12,573 — The JVM-native LangChain port, bringing unified LLM and vector store APIs to Java/Spring/Kotlin ecosystems.
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** — ⭐7,886 — Modular LLM application framework in Rust, gaining traction for its type-safe agent construction.
- **[samchon/nestia](https://github.com/samchon/nestia)** — ⭐2,164 — NestJS helper with integrated AI chatbot development capabilities.
- **[LancerLab/croqtile](https://github.com/LancerLab/croqtile)** — ⭐34 — A next-gen AI-native kernel programming DSL aiming to maximize developer productivity on AI hardware.

### 🤖 AI Agents / Workflows (Agent Frameworks, Automation, Multi-Agent Systems)

- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** — ⭐185,458 — The original autonomous agent project, still the most-starred general-purpose agent framework.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐212,825 — "The agent that grows with you" — a rapidly growing agent harness with built-in skill systems and memory.
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** — ⭐80,388 — AI-driven software development agent, competing with Claude Code and Codex in the coding agent space.
- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** — ⭐0 (+328 today) — MCP server giving Claude terminal control and file system editing; top trending repo today.
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — ⭐0 (+1,116 today) — Production-grade engineering skills for AI coding agents, authored by a Chrome engineering leader.
- **[mattpocock/skills](https://github.com/mattpocock/skills)** — ⭐0 (+1,712 today) — Skills for "real engineers" extracted from the author's personal .claude directory; highest daily stars in trending.
- **[obra/superpowers](https://github.com/obra/superpowers)** — ⭐0 (+1,013 today) — An agentic skills framework and software development methodology that works.
- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** — ⭐0 (+117 today) — Google's official library of Agent Skills for the Stitch MCP server, following the open Agent Skills standard.

### 📦 AI Applications (Specific Apps, Vertical Solutions)

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — ⭐145,004 — The most popular user-friendly AI interface supporting Ollama, OpenAI, and local models.
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** — ⭐48,423 — AI productivity studio with 300+ built-in assistants and unified access to frontier LLMs.
- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** — ⭐0 (+1,224 today) — First open-source Office suite purpose-built for AI agents to read/edit/automate documents without Office installation.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — ⭐92,244 — Multi-agent LLM financial trading framework, demonstrating vertical agent specialization.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — ⭐104,152 — Makes websites accessible for AI agents, enabling browser automation at scale.
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — ⭐148,962 — The API for AI agents to search, scrape, and interact with web content.
- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** — ⭐23,206 — AI agent workflow automation platform managing ~400 MCP servers.

### 🧠 LLMs / Training (Model Weights, Training Frameworks, Fine-Tuning Tools)

- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐162,461 — The foundational model-definition framework supporting virtually all modern LLMs.
- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐175,894 — The easiest way to run local LLMs, now supporting Kimi-K2.6, GLM-5.1, DeepSeek, Qwen, and more.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — ⭐7,184 — Comprehensive LLM evaluation platform supporting 100+ datasets and major model families.
- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** — ⭐283 — Reliable, scalable library for pretraining foundation and world models.
- **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** — ⭐66,685 — Classic ML framework, still essential for non-LLM AI pipelines.

### 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation, Knowledge Management)

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐84,782 — Leading open-source RAG engine combining cutting-edge RAG with agent capabilities.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐60,579 — Universal memory layer for AI agents, enabling persistent long-term context.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — ⭐45,177 — Cloud-native vector database for scalable ANN search.
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** — ⭐33,137 — High-performance vector search engine, production-tested for enterprise AI.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — ⭐86,785 — Persistent context across sessions for every agent; compresses, summarizes, and reinjects context.
- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** — ⭐0 (+123 today) — Fully local long-term memory for AI agents via a 4-tier progressive pipeline with zero external APIs.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐81,996 — Turns any folder of code, docs, or data into a queryable knowledge graph for AI agents.
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — ⭐33,927 — Document index for "vectorless, reasoning-based RAG," a novel approach to retrieval.

---

## 3. Trend Signal Analysis

**The "Agent Skills" movement is the dominant signal today.** Three independent projects — addyosmani/agent-skills, mattpocock/skills, and obra/superpowers — collectively gained over 3,800 stars in a single day, all addressing the same problem: how to define, share, and reuse production-grade instructions for AI coding agents. This mirrors the early Dockerfile movement — a standardization layer is emerging for agent behavior. The Google-backed **stitch-skills** project formalizes this into an open standard, suggesting institutional adoption is imminent.

**Memory infrastructure is becoming a first-class concern.** The simultaneous traction of claude-mem (86k stars), mem0 (60k stars), and today's TencentDB-Agent-Memory shows that the community has identified persistent context as the critical missing piece for production agents. The shift from "chat with context window" to "agent with database-backed memory" is accelerating rapidly. Notably, TencentDB-Agent-Memory's approach of a "4-tier progressive pipeline" indicates industrial-grade thinking around memory stratification.

**Agent-native document manipulation is a new category.** OfficeCLI's 1,224 stars today represents the first major open-source attempt to give AI agents direct, programmatic access to Office file formats without requiring a desktop installation. This is significant because document generation/review remains one of the most requested enterprise agent use cases. The project's "single binary, no Office required" approach solves a real deployment friction.

**Connections to recent events:** The rise of agent skills directly correlates with the proliferation of CLI-based coding agents (Claude Code, Codex, Gemini CLI, OpenCode, etc.). As these tools mature, the need for shared, high-quality skill definitions becomes acute. The RAG ecosystem continues absorbing agent capabilities — RAGflow, Graphify, and PageIndex all blur the line between retrieval and agent orchestration.

---

## 4. Community Hot Spots

- **Agent Skills Standardization** — Watch **addyosmani/agent-skills** and **google-labs-code/stitch-skills**. The emergence of an interoperability standard for agent instructions is akin to early containerization; developers should invest in understanding the skill format and contributing skills for their domain expertise.
- **Agent Memory Systems** — **mem0ai/mem0** and **thedotmack/claude-mem** are the key projects. As agents move from stateless chat to persistent workers, memory layer design becomes a core architectural decision. TencentDB-Agent-Memory's entry adds an enterprise-grade option.
- **Agent-Native Office Automation** — **iOfficeAI/OfficeCLI** is one to track closely. If this gains traction, it could redefine how organizations approach document workflows — moving from human-operated Office to agent-operated document pipelines.
- **RAG → Agent Convergence** — **infiniflow/ragflow** and **Graphify-Labs/graphify** are blurring the line between retrieval systems and agent frameworks. The "knowledge graph as agent memory" approach in Graphify (81k stars) deserves attention for its architectural novelty.
- **Financial Agent Applications** — **TauricResearch/TradingAgents** (92k stars) and **ZhuLinsen/daily_stock_analysis** (56k stars) show that domain-specific agents for finance are a major community investment. The multi-agent trading framework approach suggests this is moving beyond simple price prediction.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*