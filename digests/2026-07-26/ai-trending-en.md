# AI Open Source Trends 2026-07-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-26 03:34 UTC

---

# AI Open Source Trends Report  
**Date: 2026-07-26**  

## 1. Today’s Highlights  
Agentic skill frameworks and browser-based automation for AI agents dominate today’s trending list. **mattpocock/skills** (+1,740 stars) – a curated collection of agent skills from a well-known developer – and **citrolabs/ego-lite** (+986 stars) – a zero-config browser purpose-built for AI agents – both saw explosive adoption. The surge underscores a community-wide push to give coding agents (Claude Code, Codex, Gemini CLI) persistent, shareable, and high-performance “skills.” Meanwhile, **Alibaba/open-code-review** (+431 stars) continues to prove that hybrid rule+LLM code review is production-ready at scale.  

## 2. Top Projects by Category  

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools)  
- **[ollama/ollama](https://github.com/ollama/ollama)** (⭐176,895) – The go-to local LLM runner, now supporting the latest Kimi-K2.6, GLM-5.2, and DeepSeek models.  
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** (⭐87,158) – High-throughput LLM inference server, the de facto choice for production deployments.  
- **[andrewyng/aisuite](https://github.com/andrewyng/aisuite)** (⭐0 +77 today) – A thin, unified Python API over multiple generative AI providers – simplifies multi-model switching.  
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** (⭐0 +431 today) – Battle-tested code review tool combining deterministic pipelines with LLM agents; provides line-level comments for NPE, SQL injection, etc.  
- **[RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec)** (⭐0 +86 today) – A Rust‑powered vector index with Python bindings, built on TurboQuant for speed.  

### 🤖 AI Agents / Workflows  
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** (⭐185,686) – The original autonomous agent framework, still actively maintained.  
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** (⭐106,777) – Lets AI agents interact with any website – the backbone of agentic web automation.  
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** (⭐82,085) – AI-driven software development agent, one of the fastest-growing code-generation platforms.  
- **[mattpocock/skills](https://github.com/mattpocock/skills)** (⭐0 +1,740 today) – A community-driven `.agents` directory of reusable skills for Claude Code, Codex, and Gemini CLI.  
- **[citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)** (⭐0 +986 today) – The “fastest browser for AI agents” – lets agents reuse your logged-in browser state without interrupting you.  
- **[obra/superpowers](https://github.com/obra/superpowers)** (⭐0 +479 today) – An agentic skills framework + software development methodology, aimed at making AI agents more reliable.  
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** (⭐233,362 +377 today) – Agent harness performance optimizer that adds skills, memory, and security to Claude Code, Codex, and Cursor.  

### 📦 AI Applications (Vertical Solutions)  
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** (⭐0 +319 today) – A foundation model tailored for financial markets – a sign of domain-specific LLMs gaining traction.  
- **[Automattic/harper](https://github.com/Automattic/harper)** (⭐0 +503 today) – Offline, privacy-first grammar checker built in Rust; brings AI-powered writing assistance to the desktop.  
- **[palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro)** (⭐0 +412 today) – macOS video editor “built for AI” – likely using LLMs for script generation, scene suggestions, etc.  
- **[OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB)** (⭐0 +360 today) – AI-native database client that supports natural-language SQL queries across 10+ DB engines.  
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** (⭐99,303) – Automates short video generation from keywords using AI workflows – still hugely popular.  

### 🧠 LLMs / Training  
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** (⭐53,845) – Train a 64M-parameter LLM from scratch in 2 hours – an accessible entry point for LLM research.  
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** (⭐7,236) – Comprehensive LLM evaluation platform supporting 100+ datasets.  
- **[Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms)** (⭐0 +408 today) – A Chinese-language hands-on tutorial series for building LLMs – similar to “Awesome” but with code exercises.  

### 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation)  
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** (⭐85,999) – Leading open-source RAG engine with agent capabilities; fuse retrieval with LLM reasoning.  
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** (⭐45,382) – Cloud-native vector database, the standard for large-scale ANN search.  
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** (⭐33,586) – High-performance vector search engine written in Rust, with a managed cloud offering.  
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** (⭐62,430) – Token compression for RAG pipelines – reduces LLM input tokens by 20–95% without losing accuracy.  
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** (⭐61,686) – Universal memory layer for AI agents, enabling long-term context persistence.  
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** (⭐95,917) – Turns codebases, docs, and configs into queryable knowledge graphs – a deterministic alternative to vector-only RAG.  

## 3. Trend Signal Analysis  

**Agent skills are exploding.** Today’s trending list is dominated by projects that package AI agent capabilities into reusable, shareable “skills” or “harnesses.” **mattpocock/skills** (+1,740 stars) and **affaan-m/ECC** (+377) are both pure skill collections, while **obra/superpowers** (+479) offers a methodology for building agent workflows. This signals a maturation of the agent ecosystem: developers no longer build one-off scripts; they compose curated skills into reliable pipelines.  

**Browser automation for agents goes mainstream.** **ego-lite** (+986) is the first dedicated browser designed to be controlled by AI agents without user interference. Combined with **browser-use** (106k stars), it points to a future where agents routinely interact with web UIs as naturally as humans do.  

**Domain-specific foundation models emerge.** **Kronos** (financial LLM) and **palmier-pro** (AI video editor) indicate that the one-size-fits-all LLM approach is giving way to specialized models and tools. This aligns with recent releases like Kimi-K2.6 and GLM-5.2 (seen in ollama’s updated model list), which offer strong Chinese-language and multi-modal capabilities.  

**Privacy-first, offline AI gains momentum.** **Automattic/harper** (grammar checker, +503) is a Rust-powered, offline grammar tool. It joins a growing wave of tools that run entirely on-device, addressing enterprise and user privacy concerns while still leveraging AI.  

**RAG infrastructure continues to commoditize.** Tools like **headroom** (token compression) and **Graphify** (knowledge graphs) are moving beyond simple vector search, offering richer retrieval strategies for less compute. The vector database space (milvus, qdrant, lancedb) remains highly active, but the conversation is shifting from “which vector DB?” to “how to make retrieval cheaper and more accurate.”  

## 4. Community Hot Spots  

- **Agent skill marketplaces (mattpocock/skills, ECC)** – The `.agents` directory concept is rapidly standardizing; expect many more curated skill sets and even a potential open registry. Developers should start building their own reusable agent skills.  
- **Agent-controlled browsers (ego-lite)** – Zero-config, state-sharing browser environments are a game-changer for web automation. Watch for integrations with major agent frameworks.  
- **Token compression for RAG (headroom)** – As LLM API costs remain high, tools that shrink input tokens without performance loss will become essential in every RAG stack.  
- **On-device, offline AI (harper)** – With Rust and WebAssembly, running AI locally becomes faster and more private. This trend may reduce reliance on cloud APIs for many consumer and enterprise applications.  
- **Code review with hybrid rules + LLM (alibaba/open-code-review)** – The battle-tested approach from Alibaba shows that deterministic static analysis combined with LLM reasoning catches more bugs than either alone. Expect similar hybrid tools to proliferate.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*