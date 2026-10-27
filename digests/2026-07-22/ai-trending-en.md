# AI Open Source Trends 2026-07-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-22 03:20 UTC

---

# AI Open Source Trends Report — 2026-07-22

## 1. Today’s Highlights

Today’s GitHub trending is dominated by **AI agent infrastructure and skill customization**. The highest-starred project, *ai-agent-book* (+4,624 stars), signals a hunger for actionable knowledge on building agents. The **OmniRoute gateway** (+2,034 stars) unifies 268+ LLM providers behind a single endpoint, emphasizing cost and latency optimization. Meanwhile, the quirky *i-have-adhd* (+1,866 stars) reflects a new wave of interest in controlling agent behavior and output style. **MCP (Model Context Protocol)** continues its momentum, appearing in multiple trending repos (code-review-graph, wigolo, tradingview-mcp), positioning itself as a standard for AI tool integration.

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools)

- **[OmniRoute](https://github.com/diegosouzapw/OmniRoute)** ⭐0 (+2,034 today)  
  Free MIT AI gateway: one endpoint for 268+ providers (50+ free), quota-aware fallback, and RTK/Caveman token compression (saves 15–95% tokens). Works with Claude Code, Codex, Cursor, and more.

- **[code-review-graph](https://github.com/tirth8205/code-review-graph)** ⭐0 (+1,925 today)  
  Local-first code intelligence graph for MCP and CLI. Builds persistent codebase maps so AI tools read only relevant context — benchmarked 60–80% context reduction.

- **[wigolo](https://github.com/KnockOutEZ/wigolo)** ⭐0 (+642 today)  
  Web research for AI coding agents via MCP — local-first search, fetch, crawl. No API keys, no cloud, $0/query.

- **[llmfit](https://github.com/AlexsJones/llmfit)** ⭐0 (+129 today)  
  One command to find which of hundreds of models runs on your hardware — essential for local AI deployments.

- **[outlines](https://github.com/dottxt-ai/outlines)** ⭐0 (+65 today)  
  Structured outputs for LLMs — enforce JSON, regex, or grammar constraints during generation.

### 🤖 AI Agents / Workflows

- **[i-have-adhd](https://github.com/ayghri/i-have-adhd)** ⭐0 (+1,866 today)  
  A skill for coding agents to stop burying answers — ADHD-friendly output formatting. Explosive community interest in agent personality tuning.

- **[jcode](https://github.com/1jehuang/jcode)** ⭐0 (+843 today)  
  “The most intelligent agent harness for code” — combines tools, skills, and memory for multi-step coding workflows.

- **[AstrBot](https://github.com/AstrBotDevs/AstrBot)** ⭐0 (+416 today)  
  AI Agent assistant & development framework integrating multiple IM platforms, LLMs, plugins — positioning as an open-source alternative to OpenClaw.

- **[pi-web](https://github.com/agegr/pi-web)** ⭐0 (+298 today)  
  Web UI for the “pi” coding agent — brings agent interactions into a browser interface.

- **[text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐0 (+291 today)  
  Agent skills for CAD, robotics, and hardware design — turning natural language into design actions.

- **[tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp)** ⭐0 (+114 today)  
  Connect Claude Code to TradingView Desktop for AI-assisted chart analysis — niche but strong signal for financial agent automation.

### 📦 AI Applications (Specific Solutions)

- **[worldmonitor](https://github.com/koala73/worldmonitor)** ⭐0 (+1,295 today)  
  Real-time global intelligence dashboard: AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking.

- **[open_deep_research](https://github.com/langchain-ai/open_deep_research)** ⭐0 (+23 today)  
  LangChain’s open-source deep research tool — iterative search and synthesis for complex queries.

- **[Ontology-Playground](https://github.com/microsoft/Ontology-Playground)** ⭐0 (+355 today)  
  Microsoft’s free, static web app for learning and designing ontologies with RDF/XML export — connects to Microsoft Fabric IQ.

### 🧠 LLMs / Training

*(No projects from today’s trending list fall into this category directly. Notable from topic search: [vllm](https://github.com/vllm-project/vllm) (86k total), [stable-pretraining](https://github.com/galilai-group/stable-pretraining), and [tiny-llm](https://github.com/skyzh/tiny-llm) — but today’s trend favors agent infrastructure over raw model releases.)*

### 🔍 RAG / Knowledge

- **[code-review-graph](https://github.com/tirth8205/code-review-graph)** (also listed in Infrastructure) — builds a persistent knowledge graph of codebases, enabling context-aware retrieval without vector stores.

- **[Ontology-Playground](https://github.com/microsoft/Ontology-Playground)** — ontology design for structured knowledge representation, exportable as RDF/XML.

- *(Topic search highlights: [LightRAG](https://github.com/HKUDS/LightRAG) 37k stars, [RAGFlow](https://github.com/infiniflow/ragflow) 85k stars, [txtai](https://github.com/neuml/txtai) 12k stars — all show sustained interest in RAG.)*

## 3. Trend Signal Analysis

**Three explosive trends emerge from today’s data:**

1. **Agent skill & behavior customization** — *i-have-adhd* (+1,866) and *text-to-cad* (+291) demonstrate that developers want not just agents, but **controllable personalities and domain-specific skills**. The concept of “agent skills” as composable modules is crystallizing. This follows the recent explosion of *hermes-agent* and *claude-mem* in the topic search (both >80k stars), indicating the community is moving beyond basic agent scaffolds to fine-grained customization.

2. **Multi-provider gateways & token optimization** — *OmniRoute* (+2,034) and *wigolo* (+642) both emphasize **zero-cost queries** and **intelligent fallback**. The growing number of open LLMs (Kimi, GLM, DeepSeek, etc.) creates a need for unified access. The mention of “RTK+Caveman compression saving 15–95% tokens” is a new technical direction — lossy compression for agent prompts.

3. **Local-first code intelligence for MCP** — *code-review-graph* (+1,925) and *wigolo* are both **MCP-native** and **local-first**. Rather than relying on cloud vector databases, they build persistent graphs on-device. This is a direct response to the “context window problem” in coding agents — providing only the relevant code or web data.

**Connection to recent LLM releases:** The data references Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, etc., in Ollama’s description — reflecting the rapid pace of model releases from China-based labs. The community is building tools to manage this diversity.

**New tech stacks appearing:** 
- **MCP (Model Context Protocol)** — now a de facto standard for agent-tool integration (code-review-graph, wigolo, tradingview-mcp).
- **Agent harnesses** (jcode, AstrBot) — lightweight runtimes combining tools, memory, and multi-model support.
- **Token compression techniques** (Caveman compression mentioned in OmniRoute) — a nascent field.

## 4. Community Hot Spots

- **🎯 MCP-powered local intelligence** — Projects like *code-review-graph* and *wigolo* reduce reliance on cloud APIs for context retrieval. Developers should explore building MCP servers for their own codebases and data sources.

- **🎯 Agent personality & output control** — *i-have-adhd* shows that simple NLP rules (or fine-tuned skills) can drastically improve agent UX. The “ADHD-friendly” niche may expand to other accessibility-focused agent behaviors.

- **🎯 Multi-provider gateways with token compression** — *OmniRoute* is a template for cheap, resilient AI pipelines. The 15–95% token savings claim, if validated, could reshape how agents are deployed at scale.

- **🎯 AI Agent education** — *ai-agent-book* (+4,624) is the fastest-growing repo today. The demand for structured, book-length guides on building agents (from principles to code) is unmet by existing documentation. Community-led textbooks are a hot format.

- **🎯 Agent skills for vertical domains** — *text-to-cad* (hardware design) and *tradingview-mcp* (finance) indicate that domain-specific agent skills are rapidly emerging. Developers in vertical markets (legal, healthcare, manufacturing) should watch or contribute.

---

*Data source: GitHub Trending 2026-07-22 + AI Topic Search (80 repos). Report focuses on AI-relevant projects, excluding non-AI tools.*

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*