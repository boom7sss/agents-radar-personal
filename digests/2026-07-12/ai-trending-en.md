# AI Open Source Trends 2026-07-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-12 03:32 UTC

---

# AI Open Source Trends Report — 2026-07-12

## 1. Today's Highlights

Today’s GitHub AI landscape is dominated by **agent tooling and the Model Context Protocol (MCP) ecosystem**. The standout is `wonderwhy-er/DesktopCommanderMCP`, which exploded with **+909 stars**—the highest single-day gain—giving Claude terminal, file, and diff-editing capabilities via MCP. Meanwhile, `google-labs-code/stitch-skills` (+340) introduces an open **Agent Skills standard** for compatibility across coding agents (Claude Code, Gemini CLI, Cursor, etc.), signaling an industry push toward interoperability. `obra/superpowers` (+740) provides a full agentic skills framework and development methodology. On the memory and RAG front, projects like `thedotmack/claude-mem` (86k+ stars) and `mem0ai/mem0` (60k+) continue to gain traction as essential components for persistent agent context. Overall, the community is racing to build **reusable, standardized agent components** that decouple skills from specific LLMs.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- **[huggingface/transformers](https://github.com/huggingface/transformers)** — 162,514 stars  
  The de facto model-definition framework for state-of-the-art machine learning across modalities, essential for inference and training.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — 85,999 stars  
  High-throughput, memory-efficient LLM inference engine; critical for serving large models in production.

- **[ollama/ollama](https://github.com/ollama/ollama)** — 175,944 stars  
  The simplest way to run local LLMs (Kimi, DeepSeek, Qwen, etc.); a cornerstone of on‑premises AI.

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — 149,439 stars  
  API for web search, scraping, and interaction at scale; widely used by AI agents to access live data.

- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** — 35,923 stars  
  Frontend stack for Generative UI and agents (React, Angular, Mobile); popular for building agent interfaces.

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** — 141,561 stars  
  The leading agent engineering platform, now tightly integrated with MCP and tool‑calling.

- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** — 7,895 stars  
  Modular LLM application framework in Rust, gaining attention for performance and safety.

### 🤖 AI Agents / Workflows

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — 213,342 stars  
  The “agent that grows with you”—a flexible, open‑source agent harness with skill management.

- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** — 185,481 stars  
  Pioneer of autonomous agents; now a full platform for building and running agentic workflows.

- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** — +909 today, 0 total (link)  
  MCP server giving Claude direct terminal control, file system search, and diff editing—today’s top gainer.

- **[obra/superpowers](https://github.com/obra/superpowers)** — +740 today, Shell  
  An agentic skills framework with a full development methodology; designed for reliability and composability.

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** — +340 today, TypeScript  
  Library of Agent Skills following an open standard, ensuring compatibility with multiple coding agents.

- **[langgenius/dify](https://github.com/langgenius/dify)** — 148,528 stars  
  Production‑ready platform for building agentic workflows with visual design and MCP support.

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — 104,289 stars  
  Makes websites directly accessible to AI agents; automates browser tasks reliably.

- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** — 80,497 stars  
  AI‑driven development environment that writes, debugs, and deploys code autonomously.

### 📦 AI Applications

- **[Deepfakes/faceswap](https://github.com/deepfakes/faceswap)** — 55,340 stars  
  Popular deepfake software; continues to see updates and community use.

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** — 48,450 stars  
  AI productivity studio with 300+ assistants, smart chat, and autonomous agents.

- **[santifer/career-ops](https://github.com/santifer/career-ops)** — 59,665 stars  
  Open‑source AI job‑search tool—scans portals, scores listings, tailors CV—runs in CLI agents.

- **[DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io)** — +81 today, TypeScript  
  Next.js web app that integrates AI with draw.io for diagram creation via natural language.

- **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** — 59,371 stars  
  YOLO models for object detection, segmentation, and pose estimation—industry standard for vision AI.

### 🧠 LLMs / Training

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — 98,937 stars  
  Step‑by‑step implementation of a ChatGPT‑like LLM in PyTorch; top educational resource.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — 85,999 stars (also infrastructure)  
  Also critical for training inference pipelines.

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — 7,184 stars  
  Comprehensive LLM evaluation platform covering 100+ datasets and all major models.

- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** — 283 stars  
  Minimal, scalable library for pretraining foundation and world models; emerging research tool.

- **[testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io)** — 107 stars  
  Survey on test‑time scaling in LLMs—reflects growing interest in inference‑time compute.

### 🔍 RAG / Knowledge

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — 84,836 stars  
  Leading open‑source RAG engine that combines retrieval with agent capabilities for superior context.

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — 45,197 stars  
  High‑performance, cloud‑native vector database; backbone of many RAG pipelines.

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 86,882 stars  
  Captures, compresses, and injects contextual memory across agent sessions—key for persistent agents.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 60,631 stars  
  Universal memory layer for AI agents, bridging long‑term and short‑term context.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 82,493 stars  
  Turns code, docs, and media into queryable knowledge graphs; works with multiple agent CLIs.

- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** — 33,163 stars  
  Massive‑scale vector search engine, used in production RAG architectures.

- **[langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)** — 12,574 stars  
  Java library for RAG, tool calling, and MCP support—bridging enterprise Java with AI.

## 3. Trend Signal Analysis

The most explosive community attention today is directed at **MCP-based agent tooling and standardized agent skills**. The phenomenal +909 stars of `DesktopCommanderMCP` and +740 of `superpowers` indicate a clear hunger for giving coding agents deeper system control (terminal, file editing) through a universal protocol. This is not isolated—`stitch-skills` (+340) from Google Labs is actively pushing an **Agent Skills open standard**, suggesting the industry is converging on MCP as the interoperability layer. The appearance of dozens of new “agent harness” projects (e.g., `affaan-m/ECC`, `zhayujie/CowAgent`, `HKUDS/nanobot`) all boasting compatibility with Claude Code, Gemini CLI, Codex, and Cursor shows that **agent portability is a first‑class requirement**.

A second strong signal is the **memory and context layer** arms race. Projects like `claude-mem`, `mem0`, `cognee`, and `memvid` are all tackling the same problem: giving agents persistent, compressed, and retrievable memory across sessions. The rise of “**universal memory layers**” as a distinct product category suggests that RAG is evolving from simple vector retrieval into more sophisticated agent memory management.

Finally, we see **Rust entering the AI infrastructure stack** more prominently. `rig` (7.9k stars) offers modular LLM apps in Rust, `memvid` (15.7k) is a Rust‑based memory layer, and `lancedb` (10.8k) uses Rust for embedded vector search. This reflects a trend toward performance‑critical AI components written in systems languages.

The connection to recent LLM releases (e.g., Claude new models, DeepSeek updates) is evident: many agent tools explicitly mention support for the latest models and leverage `ollama` for local inference.

## 4. Community Hot Spots

- **🛠️ DesktopCommanderMCP** ([wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)) — The single hottest project today. Gives Claude the ability to control the terminal, search files, and edit diffs. Developer focus: integration with any MCP‑compatible agent.

- **🧩 Stitch Skills Standard** ([google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)) — Google’s open standard for agent skills, backed by a library of ready‑to‑use skills. Developers should build skills compatible with this standard to ensure cross‑agent portability.

- **🧠 claude-mem** ([thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)) — The most starred memory project (86k+). Provides persistent context across sessions for all major agents. Worth studying for anyone building long‑running agent workflows.

- **🚀 superpowers** ([obra/superpowers](https://github.com/obra/superpowers)) — A full agentic skills framework and software development methodology. With +740 stars today, it represents a paradigm shift toward structured, testable agent development.

- **🔍 ollama** ([ollama/ollama](https://github.com/ollama/ollama)) — While not new, its 175k+ stars and continuous updates (now supports Kimi‑K2.6, GLM‑5.1, etc.) make it the de facto local LLM runner. Essential for any AI developer wanting to run models without cloud dependency.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*