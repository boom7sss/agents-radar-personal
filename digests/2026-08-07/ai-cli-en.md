# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-07 02:55 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — AI CLI Developer Tools
**Date:** 2026-08-07 | **Scope:** 9 major AI coding agents

---

## 1. Ecosystem Overview

The AI CLI tool landscape has matured into a multi-vendor ecosystem where all major AI labs (Anthropic, OpenAI, Google, GitHub, Moonshot AI, Qwen) ship dedicated coding agents alongside independent and community-driven projects (OpenCode, Pi, DeepSeek TUI). Release velocity remains high — five of nine tools shipped updates in the last 24 hours, with OpenAI Codex and Qwen Code demonstrating the fastest iteration cadence. The community feedback converging across all projects points to three systemic challenges: terminal UI reliability (copy/paste, rendering, input handling), MCP lifecycle and interoperability friction, and the safety-critical need for transparent session/context management. Notably, Windows support remains the weakest platform across every tool, and data-integrity incidents (file corruption, silent truncation) are generating the strongest user backlash. Enterprise configurability (HTTP proxies, custom auth endpoints, private registries) is emerging as a recurring demand as these tools move from individual use to organizational deployment.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PR Activity (24h) | Release Status |
|---|---|---|---|
| **Claude Code** | 10 (+19👍 top issue) | 3 open, 0 merged | **No release** — quiet day |
| **OpenAI Codex** | 10 | **10 landed** | **rust-v0.147.0** — major feature release |
| **Gemini CLI** | 10 | 10 (6 closed/merged, 4 open) | **2 releases** — preview patch + nightly |
| **Copilot CLI** | 32 items updated | **0 PRs** | **v1.0.79-6** — targeted bugfix |
| **Kimi Code CLI** | 8 | 3 (1 closed, 2 open) | **No release** |
| **OpenCode** | 10 | 10 (all merged) | **No release** — active queue |
| **Pi** | 10 | 10 | **v0.84.0** — fullscreen TUI |
| **Qwen Code** | 10 | 10 | **3 releases** — stable + nightly + live-host |
| **DeepSeek TUI** | 10 | 10 (7 closed, 3 open) | **No release** — v0.9.4 train closed |

**Reading:** Codex and Qwen are shipping fastest. Copilot is patching steadily with no feature PRs. Claude Code, Kimi, and OpenCode had no releases but maintained active issue/PR engagement. DeepSeek TUI shows disproportionate PR velocity for a community project.

---

## 3. Shared Feature Directions

Across the nine communities, seven requirement clusters appear repeatedly:

| Direction | Tools (Evidence) | Specific Needs |
|---|---|---|
| **Context/session visibility** | OpenCode (#6152, 129👍), Copilot (#4174), DeepSeek TUI (#5244), Claude (#54750), Gemini (#28596) | In-session token/context breakdowns, cross-project session pickers, visible fallback warnings, honest usage accounting |
| **TUI copy/paste & rendering fixes** | Claude (#13378, 72👍; #37796, 49👍), Codex (#24685), Pi (#7720), Qwen (#8557), OpenCode (#1168, 119👍) | Configurable rendering indentation, clean multi-line copy, clickable links, no ghost-text reprints |
| **MCP lifecycle consolidation** | Codex (#20883, #28080), Copilot (#4211, #4392), Gemini (#10704), Kimi (#2147), DeepSeek TUI (#5238) | Project-scoped server pools, lazy-loaded schemas, BigInt handling, orphan process reaping, registry discovery |
| **Windows first-class support** | Codex (#33776), Gemini (#20773, #25867), Qwen (#8615), Pi (#7547), Copilot (#4391) | No process storms, PowerShell 5.1 parsing, verbatim path handling, configurable default shell |
| **Persistent memory across sessions** | Kimi (#1283, 20 comments), DeepSeek TUI (memory requests), Claude (#33026), OpenCode (#38973) | AI-managed project notes, user-defined persistent preferences, agent-initiated compaction |
| **Subagent lifecycle & accounting** | Codex (#35463), Gemini (#22323), DeepSeek TUI (#5253), OpenCode (#40931) | Correct quota metering, honest termination reporting, recursion budget enforcement, resumable children |
| **Enterprise/network configurability** | Codex (#6060), Claude (#76248), Gemini (custom identity), Copilot (#4390) | HTTP proxy support, custom auth endpoints, PAT pass-through, org model catalogs |

**Data integrity** deserves special mention: Kimi (#2591 — UTF-8 corruption in `StrReplaceFile`), Gemini (#26856 — Obsidian data loss, 47 comments; #27386 — silent mojibake), and Claude's copy/paste corruption all share a root theme — **editing and rendering must never silently alter user data**.

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Enterprise agent platform with plugin ecosystem, hooks, Cowork cloud sessions | Professional dev teams, automation-heavy workflows | Node/TypeScript, TUI + Desktop, native build for WSL2, ugrep-embedded Bash tool |
| **OpenAI Codex** | Fast-iterating multi-surface agent (CLI + Desktop) with Agent Plugins | Developers inside OpenAI ecosystem, Pro subscribers | Rust, thread/agents model, ACP protocol support, Bubblewrap sandboxing |
| **Gemini CLI** | Deep Google-ecosystem integration; sandboxed agent with browser automation | GCP/Vertex users, Gemini API consumers | Node, Bubblewrap full-filesystem sandbox, VS Code extension, MCP client |
| **Copilot CLI** | GitHub-native coding agent with ACP server mode and skills convention | GitHub-heavy developers, enterprise orgs | TypeScript, ACP protocol server, `.agents/skills`, non-interactive mode |
| **Kimi Code CLI** | Lightweight CLI + VSCode extension for Moonshot models | VSCode users in Chinese/SEA markets | CLI tool + IDE extension, MCP client, StrReplaceFile editing |
| **OpenCode** | Multi-provider TUI aggregator with paid subscription gateway (Go/Zen) | Power users mixing free + paid models | TUI-first, models.dev metadata, ACP, plugin commands, session serialization |
| **Pi** | Hackable agent framework with advanced TUI and harness lifecycle | Tool-builders, tinkerers, provider-agnostic users | Bun-compiled monorepo, extensible Harness factory, provider adapters (Ollama, Bedrock, Qwen) |
| **Qwen Code** | Qwen-model agent with long-running Goals, multimodal output, Live Host | Qwen/DashScope users, Chinese + international devs | Rust core, Goals with evidence checkpoints, inline terminal images, `/review` CI tooling |
| **DeepSeek TUI** | Community-built orchestration agent with subagent fleets and ACP tool execution | Advanced users of DeepSeek/GLM models | Rust, command-boundary refactor, MCP Registry-first selection, runtime API expansion |

**Key distinction:** The big-vendor tools (Claude, Codex, Gemini, Copilot) differentiate on ecosystem lock-in — permission models, cloud sessions, GitHub/Google integration. The independent tools (Pi, OpenCode, DeepSeek TUI) compete on **provider agnosticism, TUI polish, and extensibility**. Qwen and Kimi occupy a middle ground with model-aligned but open architectures.

---

## 5. Community Momentum & Maturity

**Highest momentum — shipping daily:**
- **OpenAI Codex** — Major release plus 10 merged PRs in 24h; the 933👍 Linux desktop request demonstrates intense community investment. Rapid iteration on MCP, auth, and subagent internals.
- **Qwen Code** — Three release tracks (stable, nightly, live-host) indicate mature automation. The 150-comment OAuth free-tier debate shows a large, engaged, opinionated user base.
- **OpenCode** — Despite a critical paid-outage incident, 10 PRs merged today shows strong maintainer responsiveness. The 129👍 context-breakdown request signals a feature-hungry community.

**Steady and maturing:**
- **Gemini CLI** — Active PR pipeline (auth-loop fix, capacity-exhaustion handling cherry-picked into preview) but community trust is strained by the P1 data-loss issue and stale closures on active bugs.
- **Pi** — v0.84.0 shipped with meaningful TUI innovation; 9 PRs landed across providers and agent lifecycle. Smaller community but technically sophisticated.
- **DeepSeek TUI** — High PR velocity for a community project (10 PRs, 7 closed). Release train model works, but the v0.9.4 train closure suggests batch-shipping rather than continuous delivery.

**Consolidating:**
- **Copilot CLI** — Patch-focused release, zero PRs. Issue volume (32 updated) indicates an active user base but slower feature velocity relative to competitors.
- **Claude Code** — No release; 3 small plugin-dev PRs only. The two most-upvoted issues (72👍, 49👍) remain unfixed for what appears to be months. Community is vocal but feature throughput is low this cycle.
- **Kimi Code** — Smallest community footprint. All attention concentrated on the data-corruption bug; otherwise low engagement.

**Maturity assessment:** The ecosystem is entering a *reliability phase* — the differentiating features (agents, MCP, cloud sessions) exist, and the community is now demanding they stop breaking. Data-loss reports, false-success signals, and silent fallbacks dominate the most-active issues across Gemini, Kimi, Claude, and DeepSeek TUI.

---

## 6. Trend Signals

1. **TUI usability is the #1 cross-cutting battleground.** Copy/paste corruption (Claude 121 combined 👍), blank-line rendering bugs (Copilot #4311), scroll interference (DeepSeek TUI #5223), and terminal-width crashes (Pi #7736) span every tool. The terminal is the product surface, and it is still fragile.

2. **Data integrity is now a headline risk.** Three separate data-loss/corruption incidents (Gemini Obsidian deletion, Kimi UTF-8 replacement, Claude copy-paste corruption) in one digest cycle signals a systemic issue: agents that edit files and render output must treat data preservation as a hard invariant. Expect "fail fast on non-UTF-8" (Kimi #2595) to become a standard pattern.

3. **MCP is winning, but lifecycle management is the gap.** Every tool supports MCP; every tool has MCP reliability complaints — orphaned processes, per-session duplication, handler loss, BigInt crashes, schema bloat. The next wave of differentiation will be MCP runtime quality, not MCP adoption.

4. **Session/context transparency is the new feature frontier.** Users no longer accept silent 128K fallbacks (DeepSeek TUI #5244), opaque session limits (Claude #54750), or missing token accounting (Copilot #4174). Context-window breakdowns, cross-project session pickers, and honest subagent reporting are the most consistently requested features.

5. **Windows remains the universal weak point.** From Codex process storms to Qwen EISDIR crashes to Gemini PowerShell failures — every single tool has open Windows reliability issues. There is a clear market opportunity for the first tool that treats Windows as a first-class citizen.

6. **Consumer-grade subscription models are under stress.** The OpenCode Go/Zen outage (4+ issues, 80+ comments) and Claude's Cowork-service privacy pushback show that users are sensitive to paid-tier reliability and bundled background services. Tool vendors must treat gateway/auth infrastructure as product-critical, not ancillary.

7. **Long-running autonomous agents need durable execution.** The convergence of Qwen's Goal turn-limit removal, DeepSeek TUI's checkpoint resume, Codex's context-window lineage, and Gemini's interruption handling points to a shared roadmap: checkpointing, pausing, resuming, and honest termination reporting for multi-hour agent runs.

8. **Enterprise configurability is table stakes for adoption.** HTTP proxies, custom identity endpoints, PAT pass-through, and org model catalogs are no longer nice-to-haves — they are blocking enterprise rollout across Codex, Claude, Gemini, and Copilot.

---

*Report compiled from 2026-08-07 community digest summaries. Issue/PR counts reflect items updated in the last 24 hours as reported by each project's digest.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-07

*Note: The source data did not expose numeric PR comment counts, so ranking follows the provided list order, which appeared sorted by comment activity.*

---

## 1. Top Skills Ranking

| PR | Skill / Change | Functionality & Discussion Highlights | Status |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | Fixes `run_eval.py` permanently reporting `recall=0%` because the eval artifact isn't installed as a real skill. Also fixes Windows stream reading, trigger detection, and parallel workers. High attention because it blocks meaningful description optimization for all skill authors. | Open |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` skill | Adds typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, section-header stranding, and numbering misalignment. Addresses a universal document-generation pain point. | Open |
| [#538](https://github.com/anthropics/skills/pull/538) | `pdf` skill fix | Corrects 8 case-sensitive filename mismatches in `SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). Important for Linux/macOS users where casing breaks skill loading. | Open |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` skill | New skill for creating, filling, reading, and converting OpenDocument files (`.odt`, `.ods`), including template filling and ODT-to-HTML parsing. Targets the open-source/ISO document format gap. | Open |
| [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` skill | Revises the existing frontend-design skill for clarity and actionability, ensuring every instruction is something Claude can execute within a single conversation. | Open |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | Adds two meta-skills: quality analysis across structure/documentation/examples, and security analysis for skills. Directly addresses growing demand for safe, well-built community skills. | Open |
| [#541](https://github.com/anthropics/skills/pull/541) | `docx` skill fix | Prevents document corruption when tracked changes use `w:id` values that collide with existing bookmarks, comments, or move ranges in OOXML documents. | Open |
| [#539](https://github.com/anthropics/skills/pull/539) | `skill-creator` YAML validation | Adds pre-parse validation for unquoted `description` fields containing `:`, preventing silent YAML frontmatter truncation during skill creation. | Open |

---

## 2. Community Demand Trends

- **Security and trust boundaries**  
  [Issue #492](https://github.com/anthropics/skills/issues/492) is the highest-activity issue: community skills under the `anthropic/` namespace create a trust boundary vulnerability. There is strong demand for security analysis, permission sandboxing, and official-vs-community separation.

- **Skill reliability and meta-tooling**  
  Multiple issues and PRs target broken skill evaluation and creation tooling: [run_eval.py 0% trigger rate (#556)](https://github.com/anthropics/skills/issues/556), [recall=0% in the description loop (#1169)](https://github.com/anthropics/skills/issues/1169), and [skill-creator not following best practices (#202)](https://github.com/anthropics/skills/issues/202). The community wants dependable skill development infrastructure.

- **Skill sharing and lifecycle management**  
  [Org-wide sharing (#228)](https://github.com/anthropics/skills/issues/228), [duplicate skills across plugins (#189)](https://github.com/anthropics/skills/issues/189), and [skills disappearing (#62)](https://github.com/anthropics/skills/issues/62) show demand for better distribution, installation, and versioning mechanisms.

- **Context-window and memory efficiency**  
  [claude-api skill injecting ~156k tokens (#1487)](https://github.com/anthropics/skills/issues/1487) and [compact-memory skill proposal (#1329)](https://github.com/anthropics/skills/issues/1329) reflect growing concern about skills consuming too much context and about long-running agent memory.

- **Agent governance and reasoning quality**  
  Proposals such as [agent-governance (#412)](https://github.com/anthropics/skills/issues/412) and [reasoning quality gate pipeline (#1385)](https://github.com/anthropics/skills/issues/1385) signal demand for skills that audit, verify, and govern AI agent behavior before delivery.

- **Enterprise and platform integration**  
  Requests for [AWS Bedrock compatibility (#29)](https://github.com/anthropics/skills/issues/29), [SharePoint Online handling (#1175)](https://github.com/anthropics/skills/issues/1175), and [exposing Skills as MCPs (#16)](https://github.com/anthropics/skills/issues/16) show a clear pull toward enterprise deployment, access control, and wider interoperability.

---

## 3. High-Potential Pending Skills

These open PRs carry notable community attention and may land soon:

| PR | Skill | Summary |
|---|---|---|
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | Self-contained color knowledge: color naming systems (ISCC-NBS, Munsell, RAL, CSS), color-space selection tables, and practical guidance for scales and gradients. |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, unit testing with AAA, React component testing with Testing Library, and what-not-to-test guidance. |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | Retro/pixel-art/8-bit game development using `pyxel-mcp`, covering write → run-and-capture → inspect → iterate workflows. |
| [#1479](https://github.com/anthropics/skills/pull/1479) | `plan-file-hygiene` | Addresses planning-artifact accumulation: gives planning files a lifecycle and prevents stale artifacts from polluting projects. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | Mechanical file verification plus four-dimension reasoning audit before delivery; positioned as a universal quality gate for any project. |
| [#181](https://github.com/anthropics/skills/pull/181) | SAP predictive analytics | Skill for using SAP’s open-source `SAP-RPT-1-OSS` tabular foundation model on business data for predictive analytics. |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` | OpenDocument creation, template filling, and ODT-to-HTML parsing for LibreOffice/ISO-standard document workflows. |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Prevents orphaned words, stranded headers, and numbering misalignment in generated documents. |

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is not for any single domain skill, but for **trustworthy, reliable skill infrastructure** — secure skill distribution, robust creation/evaluation tooling, context-window safety, and lifecycle management.

---

# Claude Code Community Digest — 2026-08-07

## Today's Highlights
No new Claude Code release shipped in the last 24 hours. Community attention remains focused on persistent TUI copy/paste corruption, permission-system friction for automation, and Cowork/cloud session regressions. Three small plugin-dev validation PRs are currently open.

## Releases
None in the last 24 hours.

## Hot Issues

1. **[v2.1.117 embedded ugrep wrapper amplifies regex backtracking from grep-process-OOM into V8-heap-OOM — host freezes on WSL2 (#54394)](https://github.com/anthropics/claude-code/issues/54394)**  
   24 comments. The embedded `ugrep` wrapper replaces normal `grep` in the Bash tool, and a regex-heavy invocation can cascade from a normal grep OOM into an 8 GB V8-heap OOM that freezes the entire WSL2 host. High-stability concern for WSL users on the native build.

2. **[ask list is ignored when "Bash" is in allow list (#6527)](https://github.com/anthropics/claude-code/issues/6527)**  
   23 comments, 19 👍. A permission-model security bug: once `Bash` is allowlisted, entries in the `ask` list are effectively ignored. This defeats explicit per-command confirmation and makes safe automation setups behave dangerously.

3. **[Claude Desktop (Windows): provide a way to disable the bundled Cowork background service (#57371)](https://github.com/anthropics/claude-code/issues/57371)**  
   18 comments, 42 👍. Users who do not use Cowork want to stop the `CoworkVMService` background process. The strong reaction indicates privacy/resource-control concerns with always-on bundled services.

4. **[2-space indent and hard wrap at 80 breaks copy-paste — need a way to configure it out of the way (#13378)](https://github.com/anthropics/claude-code/issues/13378)**  
   16 comments, 72 👍. One of the most-upvoted open issues. The terminal UI’s padding and wrapping corrupt copied code, and there is no supported way to disable it.

5. **[Current session limit reaches 100% despite low visible local session usage (#54750)](https://github.com/anthropics/claude-code/issues/54750)**  
   16 comments. Users are blocked from continuing work when local session metrics appear nearly empty. Points to an accounting/sync bug between local usage and server-side session limits.

6. **[Cloud/Cowork sessions: git proxy blocks all pushes — PAT pass-through no longer works (#76248)](https://github.com/anthropics/claude-code/issues/76248)**  
   14 comments. Pushes to repositories outside the session’s “authorized repository set” now fail even with a user-supplied PAT. This is a disruptive regression for cloud/remote workflows that rely on normal Git permissions.

7. **[Copied text includes 2-space leading indentation from rendered output (#37796)](https://github.com/anthropics/claude-code/issues/37796)**  
   13 comments, 49 👍. Companion issue to #13378: every pasted line from the TUI carries rendering padding. Developers are repeatedly cleaning up indentation manually.

8. **[Assistant text emitted before a tool call is intermittently never rendered (#79584)](https://github.com/anthropics/claude-code/issues/79584)**  
   9 comments. Text produced before `AskUserQuestion` or other tool calls sometimes never appears. This undermines trust in agent explanations and is especially visible in plugin-driven workflows.

9. **[Compound-command permission prompting makes multi-session orchestration unusable (#76718)](https://github.com/anthropics/claude-code/issues/76718)**  
   7 comments. Even fully allowlisted compound commands trigger permission prompts; one user reported 700+ prompts over two days. This effectively blocks parallel/fan-out agent orchestration.

10. **[Desktop app: session time-range filter only appears when Group by is set to State (#78775)](https://github.com/anthropics/claude-code/issues/78775)**  
    7 comments, 23 👍. A recent Desktop UI regression hides a useful filter behind a specific grouping mode, frustrating session management workflows.

## Key PR Progress
Only 3 PRs were updated in the last 24 hours; all are currently open.

1. **[Enable frontend-design plugin at project scope (#84600)](https://github.com/anthropics/claude-code/pull/84600)**  
   Registers the official Anthropics marketplace and enables the `frontend-design` skill via `.claude/settings.json`, so it loads automatically for anyone using Claude Code in the repository.

2. **[fix(plugin-dev): prevent validate-agent.sh exiting on first warning (#84427)](https://github.com/anthropics/claude-code/pull/84427)**  
   Follow-up to #76985. Fixes `validate-agent.sh` exiting early under `set -e` because Bash arithmetic expressions like `((error_count++))` return non-zero.

3. **[fix(plugin-dev): handle wrapped hook schemas and optional matchers in validate-hook-schema.sh (#84381)](https://github.com/anthropics/claude-code/pull/84381)**  
   Improves hooks.json validation by supporting top-level `"hooks"` object wrappers and correctly handling optional matchers.

## Feature Request Trends
- **Opt-out control for bundled background services** on Desktop, especially Cowork (**#57371**).
- **System/terminal notifications** when Claude needs attention or finishes a task (**#26581**).
- **Agent-initiated context compaction** so Claude can proactively compact before a long-running task gets too large (**#33026**).
- **Better terminal integration state**, such as tmux/tab titles reflecting unread/active agent state (**#71369**).
- **More expressive hooks**, e.g. a `UserPromptSubmit` “handled” decision that shows output without the “blocked” framing (**#72327**).
- **Configuration for TUI rendering**, specifically disabling 2-space indentation and 80-column hard wrapping that corrupts copy/paste (**#13378**, **#37796**).

## Developer Pain Points
- **Copy/paste corruption is the loudest TUI issue**: two separate issues have accumulated 72 and 49 👍 respectively, with no configuration escape hatch yet.
- **Permission prompts are a bottleneck for automation**: allowlisted Bash can silently override `ask` rules (**#6527**), while compound commands trigger excessive prompts even when every segment is allowed (**#76718**).
- **Memory and streaming reliability remains fragile**: the ugrep wrapper can OOM the whole WSL2 host (**#54394**), and multiple reports describe SSE/streaming resets on Windows and Linux (**#84194**, **#84404**).
- **Cowork/cloud regressions are eroding trust in remote sessions**: git proxy authorization blocks legitimate pushes (**#76248**), and Desktop lacks a clean way to disable the Cowork background service (**#57371**).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-07

## Today's Highlights
Codex `rust-v0.147.0` shipped portable Agent Plugins and persistent conversation sections, targeting long-running, multi-session workflows. Community attention remains concentrated on Linux desktop demand and Windows desktop stability issues. On the PR side, Markdown conversation export, TUI placeholder cleanups, and multiple MCP/auth reliability fixes landed today.

## Releases

### `rust-v0.147.0`
- Install portable Agent Plugins and search across local, personal, workspace, and remote plugin catalogs. (#36544, #36409, #36919, #36796)
- Organize conversations into persistent, manually ordered sections and browse long transcripts incrementally. (#35722, #36007, #36380, #36948)

## Hot Issues

1. **Linux desktop app request** — [#11023](https://github.com/openai/codex/issues/11023)  
   The most upvoted open request (933 👍, 203 comments). Users want a native Codex desktop app for Linux, especially where macOS power/performance issues make the current app unusable.

2. **Windows: taskkill/conhost process storm** — [#33776](https://github.com/openai/codex/issues/33776)  
   `ChatGPT.exe` spawns hundreds of `taskkill.exe` and `conhost.exe` processes, triggering WMI storms and DWM degradation. Major Windows reliability concern.

3. **Copy/Export Message as Markdown** — [#2880](https://github.com/openai/codex/issues/2880)  
   Long-requested TUI feature (78 👍) for exporting conversations as Markdown. It closed as PR [#37358](https://github.com/openai/codex/pull/37358) landed today.

4. **Enterprise HTTP proxy via `config.toml`** — [#6060](https://github.com/openai/codex/issues/6060)  
   Needs outbound HTTP proxy support for Zscaler/PAC/on-prem egress environments. Important for enterprise adoption.

5. **Project-scoped MCP process pool** — [#20883](https://github.com/openai/codex/issues/20883)  
   Desktop currently starts stdio MCP servers per chat/session instead of sharing them per project, causing duplicate processes and fragmented state.

6. **Multi-line status line** — [#21653](https://github.com/openai/codex/issues/21653)  
   The CLI status line truncates when multiple items are configured. Developers want wrapping/multi-line support.

7. **Windows: configurable default session shell** — [#16579](https://github.com/openai/codex/issues/16579)  
   Codex defaults to PowerShell, which is inconvenient for Git Bash users. A proposed config item would allow a custom default shell.

8. **Desktop thread tools lose handlers** — [#28080](https://github.com/openai/codex/issues/28080)  
   In active Windows desktop sessions, tools intermittently fail with `No handler registered`, breaking long-running work.

9. **Subagents drain full week quota overnight** — [#35463](https://github.com/openai/codex/issues/35463)  
   Pro users report subagent workloads consuming the entire weekly quota due to broken usage accounting. High severity for automated workflows.

10. **OAuth fallback uses hardcoded dummy API key** — [#37192](https://github.com/openai/codex/issues/37192)  
   After network changes, Codex silently falls back to a dummy key instead of re-authenticating, resulting in confusing 401 errors.

## Key PR Progress

1. **Add Markdown conversation export to the TUI** — [#37358](https://github.com/openai/codex/pull/37358)  
   Adds `/export` with clipboard/file destinations and structured Markdown export of full conversation history.

2. **Use consistent TUI input placeholders** — [#37360](https://github.com/openai/codex/pull/37360)  
   Standardizes placeholders and removes randomized example prompts, addressing long-standing UX complaints.

3. **Send model routing hints to the Codex backend** — [#37345](https://github.com/openai/codex/pull/37345)  
   Adds `x-codex-routing-hint` header containing request model and service tier across HTTP, compaction, and WebSocket requests.

4. **Mount a minimal `/dev` in full-filesystem Bubblewrap sandboxes** — [#37349](https://github.com/openai/codex/pull/37349)  
   Prevents the host device tree from leaking into network-isolated sandboxes by overlaying a minimal `/dev`.

5. **Fix subagent MCP startup status settling** — [#37344](https://github.com/openai/codex/pull/37344)  
   Clears deferred MCP startup expectations for subagents, fixing the TUI showing “MCP startup running” indefinitely.

6. **Recover MCP servers after OAuth reauthentication** — [#37337](https://github.com/openai/codex/pull/37337)  
   Allows OAuth-backed Streamable HTTP MCP servers to restart with refreshed credentials without restarting the client.

7. **Track context windows per agent** — [#37347](https://github.com/openai/codex/pull/37347)  
   Forked subagents now get distinct context-window lineage instead of inheriting the parent’s compacted history metadata.

8. **Allow `ThreadManager` to customize thread ID generation** — [#37350](https://github.com/openai/codex/pull/37350)  
   Adds configurable ID generation for root, child, and forked threads while preserving UUIDv7 as the default.

9. **Configure the default code-mode exec yield timeout** — [#37352](https://github.com/openai/codex/pull/37352)  
   Adds `features.code_mode.default_exec_yield_time_ms`, defaulting to 30 seconds, for code-mode `exec` calls that omit `yield_time_ms`.

10. **Support agent identity endpoint overrides** — [#37356](https://github.com/openai/codex/pull/37356)  
    Honors `CODEX_AGENT_IDENTITY_AUTHAPI_BASE_URL` and `CODEX_AGENT_IDENTITY_JWKS_BASE_URL` for custom identity deployments.

## Feature Request Trends

- **Cross-platform desktop expansion**  
  Linux desktop support is the standout request ([#11023](https://github.com/openai/codex/issues/11023), 933 👍), alongside Windows shell configurability ([#16579](https://github.com/openai/codex/issues/16579)).

- **Conversation export and TUI ergonomics**  
  Markdown export ([#2880](https://github.com/openai/codex/issues/2880)), multi-line status lines ([#21653](https://github.com/openai/codex/issues/21653)), better copying ([#24685](https://github.com/openai/codex/issues/24685)), and placeholder/notification control ([#13466](https://github.com/openai/codex/issues/13466), [#13979](https://github.com/openai/codex/issues/13979)) remain recurring asks.

- **MCP lifecycle consolidation**  
  Users want project-scoped MCP pools ([#20883](https://github.com/openai/codex/issues/20883)), less memory growth ([#33531](https://github.com/openai/codex/issues/33531)), and deterministic MCP tool ordering ([#37351](https://github.com/openai/codex/issues/37351)).

- **Enterprise/network configurability**  
  Demand continues for HTTP proxy support ([#6060](https://github.com/openai/codex/issues/6060)), custom agent identity endpoints, and robust OAuth/network-change handling ([#37192](https://github.com/openai/codex/issues/37192)).

- **Subagent and session accounting**  
  Subagent child threads polluting recent conversations ([#25341](https://github.com/openai/codex/issues/25341)) and subagent quota metering bugs ([#35463](https://github.com/openai/codex/issues/35463)) show the need for better subagent lifecycle isolation.

## Developer Pain Points

- **Windows reliability**  
  Process storms ([#33776](https://github.com/openai/codex/issues/33776)), zombie child process leaks ([#37247](https://github.com/openai/codex/issues/37247)), WFP firewall/UAC re-arming ([#31556](https://github.com/openai/codex/issues/31556)), and MCP memory bloat ([#33531](https://github.com/openai/codex/issues/33531)) are making Codex Desktop difficult to use on Windows.

- **MCP and subagent operational friction**  
  MCP servers start per session ([#20883](https://github.com/openai/codex/issues/20883)), lose handlers mid-session ([#28080](https://github.com/openai/codex/issues/28080)), and expose nondeterministic tool ordering ([#37351](https://github.com/openai/codex/issues/37351)). Subagent threads also clutter recent conversation lists ([#25341](https://github.com/openai/codex/issues/25341)).

- **TUI/usability gaps**  
  CLI copy-paste from multi-line output remains painful ([#24685](https://github.com/openai/codex/issues/24685)), status lines truncate ([#21653](https://github.com/openai/codex/issues/21653)), and Windows users cannot set their preferred default shell ([#16579](https://github.com/openai/codex/issues/16579)).

- **Auth/network edge cases**  
  Silent fallback to dummy API keys ([#37192](https://github.com/openai/codex/issues/37192)), CLI inability to acquire the Chrome extension backend ([#26820](https://github.com/openai/codex/issues/26820)), and app-server sidecar stalls ([#27395](https://github.com/openai/codex/issues/27395)) are causing avoidable interruptions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-07

## Today's Highlights

Two releases shipped in the last 24 hours: a patch preview (v0.55.0-preview.2) that cherry-picks the capacity-exhaustion error-handling fix, plus a new nightly (v0.56.0). On the community side, the P1 data-loss report [#26856](https://github.com/google-gemini/gemini-cli/issues/26856) remains the most active thread at 47 comments, while several high-value PRs — including an auth-loop fix and a fix for "model finishes your sentence" — moved toward merge. Release automation and version churn continue to dominate PR activity.

## Releases

- **[v0.55.0-preview.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.2)** — Patch release created by cherry-picking commit `2139b12` (the capacity-exhaustion terminal-error change from PR [#28716](https://github.com/google-gemini/gemini-cli/pull/28716)) onto v0.55.0-preview.1.
- **[v0.56.0-nightly.20260807.gd5c9a97dc](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260807.gd5c9a97dc)** — Nightly build with changelog updates for v0.55.0-preview.1 and v0.54, plus a version bump from the previous nightly.

## Hot Issues

1. **[#26856 — Catastrophic data loss in Obsidian workspace](https://github.com/google-gemini/gemini-cli/issues/26856)** — *P1, 47 comments, 16 👍.* The most-active issue: the agent deleted tens of thousands of Obsidian files, costing the user ~$300 in work. Remains open in manual triage; the emotional intensity reflects broad community anxiety about destructive agent actions.

2. **[#22323 — Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — *P1, 12 comments.* `codebase_investigator` reports `status: "success"` with `Termination Reason: "GOAL"` even when it hits the turn limit before doing any work. Misleading success signals are a trust problem for agent observability.

3. **[#20773 — PowerShell 5.1 ParserError on `&&`](https://github.com/google-gemini/gemini-cli/issues/20773)** — *17 comments, closed.* Long-running Windows compatibility bug where `git status && git branch` crashes PowerShell 5.1. Finally closed after months; a reminder of Windows shell-fragmentation costs.

4. **[#10704 — MCP Client Sampling support](https://github.com/google-gemini/gemini-cli/issues/10704)** — *13 comments, 9 👍, closed.* Strong community demand for MCP servers to call LLMs via Gemini CLI per the MCP spec. Closed, but signals appetite for bidirectional MCP integrations.

5. **[#25867 — Backspace deletes word instead of character on Windows](https://github.com/google-gemini/gemini-cli/issues/25867)** — *10 comments, closed.* Input-handling regression in v0.39.0 that wrecked basic editing UX on Windows. Closed as stale despite user reports.

6. **[#25884 — Invalid whitespace/newlines in generated terminal commands](https://github.com/google-gemini/gemini-cli/issues/25884)** — *10 comments, closed.* Agent responses occasionally contain stray whitespace that breaks copy-paste execution in zsh. A recurring correctness class for generated shell output.

7. **[#27132 — VS Code extension UI lockup from globalState storage](https://github.com/google-gemini/gemini-cli/issues/27132)** — *7 comments.* Long sessions or window reloads freeze the extension UI ("Window is not responding") because `globalState` storage blocks the main thread. Directly impacts daily IDE workflow.

8. **[#28698 — High memory usage during idle loops](https://github.com/google-gemini/gemini-cli/issues/28698)** — *5 comments.* Fresh report on v0.53.1: memory climbs in a loop during breaks. Unaddressed and worth watching for a resource-leak fix.

9. **[#25166 — Shell command stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** — *P1, 4 comments, 3 👍.* Simple commands hang with the shell shown as active after they finish, blocking the session. Multiple users confirm via reactions.

10. **[#27386 — Silent Unicode corruption during file edits](https://github.com/google-gemini/gemini-cli/issues/27386)** — *P1, 4 comments, closed.* Vietnamese, Samoan, and bolívar text was silently mojibake'd across date/currency libraries with no recovery path. Highlights encoding-safety gaps in file-editing tools.

## Key PR Progress

1. **[#28716 — Reclassifying Capacity Exhaustion as Terminal Error](https://github.com/google-gemini/gemini-cli/pull/28716)** — *Closed.* Capacity exhaustion and insufficient-credit now trigger immediate model fallback instead of retry loops. Already cherry-picked into v0.55.0-preview.2.

2. **[#28519 — Prevent infinite auth loop by awaiting credential save](https://github.com/google-gemini/gemini-cli/pull/28519)** — *P1 core, closed.* Fixes [#28430](https://github.com/google-gemini/gemini-cli/issues/28430) by awaiting the `oauth_creds.json` write and forcing consent re-prompt.

3. **[#28700 — Stop a new user message fusing into an unanswered tool response](https://github.com/google-gemini/gemini-cli/pull/28700)** — *Closed.* Fixes the "model finishes your sentence instead of answering" bug caused by interrupted tool-call turns merging into the next user message.

4. **[#28718 — Record usage already received when a stream is aborted](https://github.com/google-gemini/gemini-cli/pull/28718)** — *Open.* Fixes [#28682](https://github.com/google-gemini/gemini-cli/issues/28682): `usageMetadata` captured mid-stream was dropped on abort, under-reporting token consumption.

5. **[#28603 — Upgrade sandbox Dockerfile to Node 22](https://github.com/google-gemini/gemini-cli/pull/28603)** — *P1 security, open.* Moves the sandbox runtime (which executes model-directed commands) off Node 20, EOL since 2026-04-30.

6. **[#28602 — Update Docker base image to node:24-slim](https://github.com/google-gemini/gemini-cli/pull/28602)** — *Open.* Modernizes builder/runtime images and fixes CLI package copying in the runtime stage.

7. **[#28597 — Load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)** — *Open.* Fixes a load-order race where local `.env` values weren't available when settings placeholders were expanded at startup.

8. **[#28596 — Add --list-all-sessions across workspaces](https://github.com/google-gemini/gemini-cli/pull/28596)** — *P3, open.* New CLI option to list sessions across all registered workspaces, grouped by path — directly addresses session-discovery friction.

9. **[#28641 — Prevent ghost-text wrapping infinite loop at narrow widths](https://github.com/google-gemini/gemini-cli/pull/28641)** — *Open.* Fixes an input-prompt hang when width is narrower than a CJK/emoji codepoint, with a regression test.

10. **[#19638 — Cap search results and clarify context overflow message](https://github.com/google-gemini/gemini-cli/pull/19638)** — *Help wanted, open.* Caps grep/ripgrep output to prevent context-window overflow from broad queries. Open since February; still awaiting review.

## Feature Request Trends

- **MCP ecosystem hardening** — Users want client sampling ([#10704](https://github.com/google-gemini/gemini-cli/issues/10704)) plus reliable MCP payload handling ([#27731](https://github.com/google-gemini/gemini-cli/issues/27731) Figma WebP/PNG mismatch, [#27725](https://github.com/google-gemini/gemini-cli/issues/27725) Calendar schema error). Expect more MCP reliability work.
- **Session lifecycle management** — From `--list-all-sessions` ([#28596](https://github.com/google-gemini/gemini-cli/pull/28596)) to session-loss resilience ([#27180](https://github.com/google-gemini/gemini-cli/issues/27180), [#27721](https://github.com/google-gemini/gemini-cli/issues/27721)) and interruption handling ([#28700](https://github.com/google-gemini/gemini-cli/pull/28700)), session-state reliability is a recurring theme.
- **Agent safety and non-destructiveness** — Multiple threads demand guards against destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), encoding-safe edits ([#27386](https://github.com/google-gemini/gemini-cli/issues/27386)), and honest termination reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **AST-aware codebase tooling** — Epic [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) investigates AST-aware reads/search/codebase mapping to cut token noise and misaligned reads.
- **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) requests automatic session takeover and lock recovery instead of fail-fast behavior for locked browser profiles.

## Developer Pain Points

- **Windows input and shell friction** — Persistent issues across PowerShell 5.1 parsing ([#20773](https://github.com/google-gemini/gemini-cli/issues/20773)), backspace behavior ([#25867](https://github.com/google-gemini/gemini-cli/issues/25867)), blocked `/setup-github` due to command-substitution checks ([#26318](https://github.com/google-gemini/gemini-cli/issues/26318)), and whitespace corruption in generated commands ([#25884](https://github.com/google-gemini/gemini-cli/issues/25884)). Windows remains a second-class citizen in shell handling.
- **Data loss and destructive edits** — The Obsidian deletion ([#26856](https://github.com/google-gemini/gemini-cli/issues/26856)) and silent Unicode corruption ([#27386](https://github.com/google-gemini/gemini-cli/issues/27386)) drive the strongest user backlash; developers want safer defaults, confirmation guardrails, and recovery paths.
- **Stalls and hangs** — Shell commands stuck in "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), VS Code UI freezes ([#27132](https://github.com/google-gemini/gemini-cli/issues/27132)), and high-memory idle loops ([#28698](https://github.com/google-gemini/gemini-cli/issues/28698)) interrupt flow and erode trust in automation.
- **Stale closures on active bugs** — Several user-reported issues (e.g., [#25867](https://github.com/google-gemini/gemini-cli/issues/25867), [#25884](https://github.com/google-gemini/gemini-cli/issues/25884)) were auto-closed as stale, which can frustrate users when regressions persist across releases.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-07

## Today's Highlights
v1.0.79-6 ships with two targeted fixes: a rare internal delay no longer prints a warning over the interactive UI, and failed session-history loads no longer leave the transcript permanently blank. The issue tracker saw 32 items updated in the last 24h, with notable regressions around session resume, MCP interoperability, and terminal rendering. No pull requests were merged or updated in the last 24 hours.

## Releases
**v1.0.79-6** — [GitHub Releases](https://github.com/github/copilot-cli/releases)

Fixes:
- A rare internal delay no longer prints a diagnostic warning on top of the interactive UI.
- A failed session-history load no longer leaves the timeline permanently empty; the failure was previously silently discarded, causing a blank transcript for the rest of the session.

## Hot Issues
1. **[#4313 — Allow scrolling through the current conversation history](https://github.com/github/copilot-cli/issues/4313)**  
   Users want mouse wheel or PageUp/PageDown navigation through the current conversation. The 4 comments show this is a common interactive-mode navigation gap.

2. **[#3392 — Bash tool breaks on NixOS with version >=1.0.49](https://github.com/github/copilot-cli/issues/3392)**  
   The Bash tool fails with `Failed to start bash process` on NixOS. With 7 👍, this is one of the most upvoted open bugs and points to a platform-specific process-spawning regression.

3. **[#4174 — ACP server does not expose token/context usage](https://github.com/github/copilot-cli/issues/4174)**  
   The `copilot --acp` server lacks token/context/cost visibility in protocol messages. This is important for teams building observability around ACP-based tooling; now closed, but it highlights an ongoing enterprise need.

4. **[#4251 — Resume of a large session OOMs / grinds one CPU core for ~70 min](https://github.com/github/copilot-cli/issues/4251)**  
   A controlled A/B test isolates this regression to v1.0.74. Long-lived sessions become nearly impossible to resume, with 3–4× memory usage compared to v1.0.73.

5. **[#4311 — Transcript renders as blank lines until width/children change](https://github.com/github/copilot-cli/issues/4311)**  
   The measured-line cache is invalidated without re-triggering measurement, causing blank transcript regions. `/resume` does not recover it, making this a serious interactive-mode reliability issue.

6. **[#4212 — Prompt box and menu items render invisible inside tmux](https://github.com/github/copilot-cli/issues/4212)**  
   Dark-on-dark rendering makes the prompt and highlighted menu items unreadable in tmux. This is both a terminal-compatibility and accessibility problem.

7. **[#4211 — Copilot CLI cannot handle BigInt in structured MCP responses](https://github.com/github/copilot-cli/issues/4211)**  
   MCP servers returning large numbers crash the CLI with `Do not know how to serialize a BigInt`, aborting active tasks. This is a real interoperability blocker for MCP ecosystems.

8. **[#4380 — Rubber Duck reviews sometimes use the same model family as the primary session](https://github.com/github/copilot-cli/issues/4380)**  
   Adversarial review is less valuable when the reviewer model is not independent. Users expect separate model-family selection for Rubber Duck sessions.

9. **[#4392 — Post-authentication MCP client rebuild leaves orphaned stdio MCP server processes](https://github.com/github/copilot-cli/issues/4392)**  
   At startup, the CLI spawns MCP servers, then rebuilds the entire MCP client after auth, leaving the first generation of stdio child processes unreaped. This is a resource leak in a common workflow.

10. **[#4118 — `/app` command does not select current working directory by default](https://github.com/github/copilot-cli/issues/4118)**  
    Closed, but with 35 👍 it represents a clear usability demand: launching the Copilot app should default to the current working directory instead of requiring manual selection.

## Key PR Progress
No pull requests were merged or updated in the last 24 hours. No PR progress to report.

## Feature Request Trends
- **Better conversation and terminal UX**  
  Users are asking for scrollable conversation history (#4313), normal Tab completion in shell `!` mode (#4387), and clearer permission prompts that explain why a command triggered approval (#4386).

- **Broader customization discovery**  
  Copilot CLI already supports `.agents/skills`; users want the same convention extended to instructions, agents, and hooks in any opened folder (#4204). There is also demand for BYOM model discovery and in-session switching instead of restarting (#4376).

- **More transparent non-interactive/ACP operation**  
  ACP users want token/context usage surfaced in protocol messages (#4174), and enterprise users want enabled org models to appear correctly in the model catalogue (#4390).

## Developer Pain Points
- **Session and state reliability**  
  Recurring problems with resuming sessions: OOM/CPU spikes on large sessions (#4251), blank transcripts after history load failures (#4311), stuck queued messages (#4373), and steering messages being applied out of order (#4372).

- **Permission-mode confusion**  
  Multiple reports of permission mode staying in "auto" after switching back to interactive (#4388, #4389), causing unexpected code changes.

- **MCP integration fragility**  
  BigInt serialization failures (#4211), orphaned stdio server processes (#4392), MCP registry policy 403s with Actions `GITHUB_TOKEN` (#4346), and `/mcp search` failing in repos with Azure DevOps remotes (#4374).

- **Platform-specific terminal breakage**  
  NixOS Bash tool failures (#3392), tmux dark-on-dark rendering (#4212), Windows codepage-related screen clears when copying (#4391), and terminal title being overwritten to "Windows PowerShell" (#4384).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-07

## Today's Highlights
Two independent fixes for a critical data-corruption bug in `StrReplaceFile` landed as PRs within hours of each other, after users reported that non-UTF-8 bytes anywhere in a file were being silently replaced with U+FFFD during edits ([#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)). Meanwhile, the long-running feature request for a persistent Memory System ([#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)) remains the most-discussed open issue, with 20 comments. No new CLI releases were published in the last 24 hours.

## Releases
_No new releases in the last 24 hours._

## Hot Issues
_All 8 issues updated in the last 24h are listed below._

- **[#2591 — StrReplaceFile corrupts undecodable bytes outside the edited region](https://github.com/MoonshotAI/kimi-cli/issues/2591)** — Critical data-loss bug: the tool decodes the entire file with `errors="replace"` and re-encodes on write, so any invalid UTF-8 byte anywhere in the file is permanently replaced with `EF BF BD`. The report is only two days old and already has two competing fix PRs, showing its severity.

- **[#1283 — Feature Request: Memory System (persistent context across sessions)](https://github.com/MoonshotAI/kimi-cli/issues/1283)** — The most active open feature request (20 comments) asks for both automatic AI-managed notes and manual user-defined instructions to persist project patterns and preferences between sessions. This signals strong community demand for long-term agentic memory.

- **[#2474 — CLI interface constantly re-rendering/shaking](https://github.com/MoonshotAI/kimi-cli/issues/2474)** — Users on Linux (v0.19.2) report the TUI repeatedly flickers and re-renders the entire conversation from scratch. Two 👍 indicate this is disrupting real workflows, especially in remote/SSH environments.

- **[#2317 — [VSCode Extension] Plan mode file path not clickable in chat webview](https://github.com/MoonshotAI/kimi-cli/issues/2317)** — In the VSCode extension (v0.5.10), file paths emitted in plan mode are plain text instead of clickable links. A small UX gap, but it hurts the review handoff between plan and apply workflows.

- **[#2147 — Lazy-load MCP tool schemas into context](https://github.com/MoonshotAI/kimi-cli/issues/2147)** — Proposes injecting MCP tool schemas only when tools are actually invoked, rather than at session start. With multiple MCP servers configured, schema bloat can consume thousands of tokens before the user types a single message — a meaningful context-budget optimization.

- **[#2593 — Quick auto/yolo/manual mode switching + quota status in VSCode panel](https://github.com/MoonshotAI/kimi-cli/issues/2593)** — A fresh enhancement request (no comments yet) asking for one-click mode switching in the extension panel and a status-bar display of the remaining 5-hour quota. Reflects growing usage of the IDE extension in agentic workflows.

- **[#621 — First WriteFile always errors "Invalid path", then works with absolute path](https://github.com/MoonshotAI/kimi-cli/issues/621)** — Closed bug where the first `WriteFile` call failed on relative paths (CLI v0.76). Users may still hit path-resolution edge cases when the working directory is ambiguous.

- **[#821 — Missing authorization checks + dependency updates needed](https://github.com/MoonshotAI/kimi-cli/issues/821)** — A closed security review reported 2 IDOR/missing-authorization vulnerabilities in the web API and 5 dependency CVEs with available fixes, rated high severity (CVSS 7.0–8.0). The closure with zero comments warrants transparency about how these were resolved.

## Key PR Progress
_All 3 PRs updated in the last 24h are listed below._

- **[#2595 — fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)** — Resolves #2591 by failing fast on non-UTF-8 files instead of silently corrupting them. A conservative "safety first" approach that trades edit availability for data integrity.

- **[#2594 — fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits](https://github.com/MoonshotAI/kimi-cli/pull/2594)** — The competing fix: instead of refusing, it applies `old`/`new` replacements as UTF-8 byte substrings on the raw buffer, preserving unrelated invalid bytes. More capable, but more complex to review.

- **[#2255 — feat(shell): support Shift+Enter for inserting newlines](https://github.com/MoonshotAI/kimi-cli/pull/2255)** — Closed after adding Shift+Enter as a newline shortcut alongside Ctrl-J and Alt-Enter, addressing a cluster of linked issues (#2254, #2010, #2121, #1585, #1574). A meaningful quality-of-life win for multiline prompts in the interactive shell.

## Feature Request Trends
- **Persistent memory across sessions** ([#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)) — the dominant ask: users want the agent to remember project context, patterns, and preferences without re-prompting each session.
- **Context-window efficiency** ([#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147)) — as MCP adoption grows, users want tools to be lazy-loaded rather than burning context on unused schemas.
- **IDE integration ergonomics** ([#2593](https://github.com/MoonshotAI/kimi-cli/issues/2593), [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317)) — faster mode switching, clear quota visibility, and clickable file paths in the VSCode extension.
- **Terminal input ergonomics** ([#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255)) — multiline input shortcuts continue to be a recurring request, now partially addressed.

## Developer Pain Points
- **Data corruption from file edits** ([#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)) — decoding and re-encoding whole files is destructive for non-UTF-8 content; the two competing PRs highlight how high-stakes file integrity is for users.
- **TUI rendering instability** ([#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474)) — full re-renders and shaking make the interactive CLI hard to use on some Linux setups.
- **Context scrubbing** ([#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147)) — multi-server MCP configurations consume the context budget before work begins, reducing effective model capability.
- **VSCode extension friction** ([#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317), [#2593](https://github.com/MoonshotAI/kimi-cli/issues/2593)) — non-clickable paths and missing mode/quota visibility complicate plan-review and agent-control loops.
- **Recurring path-resolution failures** ([#621](https://github.com/MoonshotAI/kimi-cli/issues/621)) — "Invalid path" on first `WriteFile` is a known, closed issue, but it illustrates a broader class of relative-path ambiguity problems.
- **Security and supply-chain hygiene** ([#821](https://github.com/MoonshotAI/kimi-cli/issues/821)) — unresolved closure of a high-severity audit with dependency CVEs leaves users needing confirmation that the findings were addressed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-07

## Today's Highlights

Community attention is dominated by a widespread paid-subscription outage: multiple OpenCode Go and Zen users report `401 Request blocked by upstream provider` on all `chat/completions` calls while free models and `/v1/models` continue to work. Separately, session/context visibility features remain highly requested, and the PR queue is active with i18n improvements, desktop lifecycle fixes, and core session/tool reliability patches. No new releases were published in the last 24 hours.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

- [#38257 — [Bug] OpenCode Go: return 401 Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38257)  
  One of the most active reports, with 44 comments and 11 reactions. Users on paid OpenCode Go plans see `401 Request blocked` only on `chat/completions`; `/v1/models` works. Likely server-side, affecting all Go-tier models.

- [#38218 — All subscription models return "Request blocked by upstream provider"](https://github.com/anomalyco/opencode/issues/38218)  
  Duplicate of the main Go outage with 13 👍. Every model under the subscription fails uniformly, reinforcing that this is not a client configuration issue.

- [#38195 — 401 AuthError on OpenCode Go](https://github.com/anomalyco/opencode/issues/38195)  
  24 comments. Reproduced in both OpenCode Desktop and Hermes, on Windows and multiple machines. Free models work; paid models do not.

- [#39827 — [Zen] All Zen models broken, account recreated](https://github.com/anomalyco/opencode/issues/39827)  
  Paid and free Zen models all return `Request blocked by upstream provider`. Direct provider API keys work, pointing to an upstream auth/routing failure on the Zen gateway.

- [#6152 — Session context usage breakdown (similar to /context in Claude)](https://github.com/anomalyco/opencode/issues/6152)  
  129 👍 and 22 comments. Users want a TUI dialog showing a detailed breakdown of the current session's context window usage.

- [#1168 — Make links clickable (Ctrl+Left Click to Open)](https://github.com/anomalyco/opencode/issues/1168)  
  119 👍. A long-standing TUI usability request: URLs should open in the default browser from the interface.

- [#31932 — Cross-project session list / picker for TUI](https://github.com/anomalyco/opencode/issues/31932)  
  15 comments. The built-in `/sessions` command is scoped to the current project; developers working across multiple repos want a global session picker.

- [#14332 — Amazon Bedrock Opus 4.6 compaction failure](https://github.com/anomalyco/opencode/issues/14332)  
  13 comments. Compaction fails when `thinking` blocks in the latest assistant message are modified, causing model errors and lost context continuity.

- [#40234 — Subscribed to OpenCode Go but plan not applied](https://github.com/anomalyco/opencode/issues/40234)  
  13 comments. Users receive subscription confirmation but the UI still shows no plan, and requests fail with "No payment method".

- [#40958 — DeepSeek V4 Flash Free metadata shows 200K context instead of native 1M](https://github.com/anomalyco/opencode/issues/40958)  
  Fresh bug report. The models.dev metadata caps DeepSeek V4 Flash Free at 200K context, artificially reducing its utility for long-context coding tasks.

## Key PR Progress

- [fix(app): complete translation coverage — #40981](https://github.com/anomalyco/opencode/pull/40981)  
  Adds missing session-export strings to all 27 non-English app locales and localizes the usage-limit "Don't show again" action.

- [fix(opencode): stop storing full patch text in session summary diffs — #40861](https://github.com/anomalyco/opencode/pull/40861)  
  Prevents session summaries from retaining complete patch blobs, reducing storage overhead and addressing earlier auto-closed attempts.

- [fix(acp): isolate session MCP tools — #40979](https://github.com/anomalyco/opencode/pull/40979)  
  Tracks which ACP session owns each dynamically registered MCP server name, preventing cross-session tool name collisions.

- [fix(i18n): use 词元 instead of 令牌 for token in zh locale — #40977](https://github.com/anomalyco/opencode/pull/40977)  
  Fixes misleading Chinese terminology where "token" was translated as "API credential token" rather than the LLM context token meaning.

- [fix(desktop): preserve macOS app on window close — #40974](https://github.com/anomalyco/opencode/pull/40974)  
  Keeps the macOS app running when its last window closes and restores the persisted window on Dock activation.

- [fix(provider): forward agent temperature for config-defined custom models — #40973](https://github.com/anomalyco/opencode/pull/40973)  
  Config-defined models currently default to `temperature: false`, silently dropping agent-level temperature settings. This normalizes behavior with built-in models.

- [feat(tui): expose prompt action commands — #40971](https://github.com/anomalyco/opencode/pull/40971)  
  Adds stable TUI plugin commands for form and permission prompt interactions, e.g. `form.option.previous`.

- [fix(opencode): serialize orphaned compaction history — #40800](https://github.com/anomalyco/opencode/pull/40800)  
  Serializes compaction history into readable labeled text, preserving user/assistant/tool context while truncating large tool output.

- [feat(core): continue subagent sessions — #40931](https://github.com/anomalyco/opencode/pull/40931)  
  Introduces an optional `sessionID` input to continue foreground subagent sessions while validating parent ownership and agent identity.

- [feat(core): bound tool output — #40929](https://github.com/anomalyco/opencode/pull/40929)  
  Enforces line/byte limits on tool output, retains full truncated text in managed files, and cleans up files older than seven days.

## Feature Request Trends

- **Session and context visibility** remains the strongest theme: users want in-session context usage breakdowns ([#6152](https://github.com/anomalyco/opencode/issues/6152)), cross-project session pickers ([#31932](https://github.com/anomalyco/opencode/issues/31932)), session content search ([#38973](https://github.com/anomalyco/opencode/issues/38973)), and local session stats ([#37760](https://github.com/anomalyco/opencode/issues/37760)).

- **Richer TUI interactions** are frequently requested: clickable links ([#1168](https://github.com/anomalyco/opencode/issues/1168)), queue-vs-steer mid-run prompt semantics ([#32157](https://github.com/anomalyco/opencode/issues/32157)), and project-scoped todo management with Linear integration ([#38081](https://github.com/anomalyco/opencode/issues/38081)). A related PR already exposes Option+Enter prompt queueing ([#40922](https://github.com/anomalyco/opencode/pull/40922)).

- **Privacy and transparency** are gaining traction: [#39875](https://github.com/anomalyco/opencode/issues/39875) asks to restore Go privacy wording and provider attribution, and to add telemetry and retention details to the privacy policy.

- **Model metadata correctness** is becoming a developer concern, as seen in [#40958](https://github.com/anomalyco/opencode/issues/40958), where context limits in models.dev metadata do not match native model capabilities.

## Developer Pain Points

- **Paid subscription outages are the top frustration.** The recurring `401 Request blocked by upstream provider` on OpenCode Go and Zen has generated multiple high-traffic issues ([#38257](https://github.com/anomalyco/opencode/issues/38257), [#38218](https://github.com/anomalyco/opencode/issues/38218), [#38195](https://github.com/anomalyco/opencode/issues/38195), [#39827](https://github.com/anomalyco/opencode/issues/39827), [#39215](https://github.com/anomalyco/opencode/issues/39215)). Users report free models working fine while paid models fail everywhere.

- **Subscription activation and billing friction.** Some users receive confirmation emails but their plan never activates ([#40234](https://github.com/anomalyco/opencode/issues/40234)), causing immediate "No payment method" errors.

- **Client stability issues persist.** Reports include garbled PowerShell output after closing the CLI ([#11748](https://github.com/anomalyco/opencode/issues/11748)), TUI freezes on Linux ([#35494](https://github.com/anomalyco/opencode/issues/35494), [#40871](https://github.com/anomalyco/opencode/issues/40871)), and startup crashes on Windows ([#40957](https://github.com/anomalyco/opencode/issues/40957)).

- **Context/compaction reliability is a recurring pain point.** Compaction failures with Bedrock Opus ([#14332](https://github.com/anomalyco/opencode/issues/14332)) and orphaned compaction history show that long-session memory handling still needs work.

- **Security-sensitive configuration edge cases.** Permission rules using absolute or `~` paths silently never match because matching is worktree-relative, which is fail-open for `deny` rules ([#40945](https://github.com/anomalyco/opencode/issues/40945)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-07

## Today's Highlights

Pi shipped **v0.84.0** with a new fullscreen TUI mode, including runtime switching, a sticky editor/footer, independently scrollable transcripts, and draggable scrollbars. Community attention is currently centered on Windows support, context-compaction reliability, and provider-specific compatibility issues (Gemini, DeepSeek, Copilot GHE), while several PRs landed to stabilize the new TUI and extend provider coverage.

## Releases

- [v0.84.0](https://github.com/earendil-works/pi/releases/tag/v0.84.0) — New **Fullscreen TUI mode**: switch between regular and fullscreen at runtime, sticky editor and footer, independently scrollable transcript, and draggable scrollbars. See the [UI & Display docs](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settings.md).

## Hot Issues

- [Issue #7547 — How do you use Pi on Windows?](https://github.com/earendil-works/pi/issues/7547)  
  Open poll/support thread with 22 comments. The community is gathering Windows usage patterns and pain points to help prioritize fixes, docs, and out-of-box support.

- [Issue #6879 — Auto-compaction never triggers after context grows past 100%](https://github.com/earendil-works/pi/issues/6879)  
  A session ran past the compaction threshold and only stopped at a 373k-token provider overflow. 15 👍 show broad impact; users want compaction checks after every agentic turn, not only at API rejection time.

- [Issue #7128 — New PI_* guideline over-encourages unnecessary bash calls](https://github.com/earendil-works/pi/issues/7128)  
  The default system prompt now tells the agent to inspect `PI_*` env vars, which biases it toward frequent, often unnecessary `env`-inspection shell commands. Community wants the guideline tempered or made conditional.

- [Issue #5323 — Improve Vertex + GCP metadata server support](https://github.com/earendil-works/pi/issues/5323)  
  Pi’s Vertex auth check only looks for local credential files and doesn’t support GCP metadata server auth, limiting usage in cloud/VM environments.

- [Issue #7413 — Compaction fails on GitHub Copilot GHE.com enterprise accounts](https://github.com/earendil-works/pi/issues/7413)  
  `/compact` fails with `invalid token: unknown stamp "prod-cus-01"` on GHE.com accounts, while normal chat works. Enterprise users are blocked from a core workflow.

- [Issue #6733 — Support Gemini’s extra_content thought_signature in openai-completions](https://github.com/earendil-works/pi/issues/6733)  
  The OpenAI-completions provider drops Gemini thought signatures arriving via `extra_content.google.thought_signature`, breaking reasoning continuity. Addressed by [PR #7745](https://github.com/earendil-works/pi/pull/7745).

- [Issue #7702 — DeepSeek models require reasoning_content to be passed back](https://github.com/earendil-works/pi/issues/7702)  
  DeepSeek via the opencode zen gateway fails with 400 on multi-turn/tool-call conversations because `reasoning_content` is not preserved. Provider compatibility issue with active discussion.

- [Issue #7720 — Allow disabling select-to-copy in fullscreen TUI mode](https://github.com/earendil-works/pi/issues/7720)  
  The new fullscreen TUI copies automatically on mouse selection. Users who frequently highlight terminal output want a setting to disable this behavior.

- [Issue #7736 — Uncaught exception when exceeded terminal width](https://github.com/earendil-works/pi/issues/7736)  
  Version 0.84.0 crashes with `Rendered line 409 exceeds terminal width` instead of truncating. Related to [Issue #7737](https://github.com/earendil-works/pi/issues/7737), which reports the same fatal behavior on macOS.

- [Issue #7600 — pi-coding-agent leaks X11 connections](https://github.com/earendil-works/pi/issues/7600)  
  A long-running Pi process leaked ~182 X server connections over 8 days, eventually exhausting Xorg’s 256-client table and blocking new X clients.

## Key PR Progress

- [PR #7745 — fix(ai): preserve Gemini thought signatures in OpenAI completions](https://github.com/earendil-works/pi/pull/7745)  
  Captures Gemini `thought_signature` from streamed OpenAI-compatible tool calls and replays it on follow-up requests, while keeping existing OpenRouter `reasoning` handling.

- [PR #7742 — feat(ai): Ollama Cloud support](https://github.com/earendil-works/pi/pull/7742)  
  Adds Ollama Cloud as a provider using `OLLAMA_API_KEY`, following existing provider patterns and using models.dev for model metadata.

- [PR #6216 — feat: Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)  
  Adds a provider for Amazon Bedrock Mantle’s OpenAI Responses API, superseding an earlier Bedrock provider PR.

- [PR #7659 — feat(ai): add Qwen Token Plan Individual provider](https://github.com/earendil-works/pi/pull/7659)  
  Adds `qwen-token-plan-individual` as a built-in provider with the international endpoint and eight documented Individual-subscription models.

- [PR #7686 — feat(coding-agent): add configurable Harness factory](https://github.com/earendil-works/pi/pull/7686)  
  Introduces an internal Harness factory that preserves caller-provided tools, activation, prompt policy, and environment state.

- [PR #7710 — feat(agent): restore suspended harness operations](https://github.com/earendil-works/pi/pull/7710)  
  Implements the Harness v2 recovery/query/reduce/restore milestone, allowing a new harness to be loaded from an existing session.

- [PR #7717 — fix(agent): reject reset during active runs](https://github.com/earendil-works/pi/pull/7717)  
  Prevents `Agent.reset()` from clearing transcript and runtime state mid-stream, preserving the `user -> assistant` ordering. Fixes [Issue #7703](https://github.com/earendil-works/pi/issues/7703).

- [PR #7715 — feat(agent): allow blocked tool calls to terminate](https://github.com/earendil-works/pi/pull/7715)  
  Adds an optional `terminate` hint to blocked `beforeToolCall` results and exposes it to extension `tool_call` handlers. Implements the request from [Issue #5998](https://github.com/earendil-works/pi/issues/5998).

- [PR #7721 — fix(tui): avoid unwanted newlines when copying in fullscreen](https://github.com/earendil-works/pi/pull/7721)  
  Fixes fullscreen mouse selection copying each visual wrapped row as a separate line, so pasted text no longer gains extra newlines.

- [PR #7733 — fix(tui): correct multi-click text selection](https://github.com/earendil-works/pi/pull/7733)  
  Fixes double-click behavior so word selection doesn’t include trailing whitespace and whitespace-group selection behaves predictably.

## Feature Request Trends

- **Fullscreen TUI polish and input ergonomics** — Multiple requests around selection behavior: disabling select-to-copy, double-click word selection, half-page scrolling, and better handling of terminals without bracketed paste.
- **Provider breadth and cloud auth** — Strong demand for more providers and auth paths: Ollama Cloud, Amazon Bedrock Mantle, Qwen Token Plan Individual, GCP metadata server, and Copilot GHE.com enterprise support.
- **Provider-specific protocol compatibility** — Users are hitting issues where model-specific fields must be preserved across turns: Gemini `thought_signature`, DeepSeek `reasoning_content`, GLM prompt-cache handling, and server-side built-in tools.
- **Agent lifecycle and extensibility** — Requests for harness recovery/restore, rejecting or safely handling `reset()` during active runs, allowing blocked tool calls to terminate, session reload from disk, theme overrides, and non-interactive auth preflight commands.

## Developer Pain Points

- **Compaction/context reliability is fragile** — Auto-compaction can fail to trigger until provider overflow, and enterprise Copilot compaction breaks with auth “unknown stamp” errors.
- **TUI edge cases cause crashes and lost output** — Over-wide lines throw uncaught exceptions, wrapped-line copying introduces unwanted newlines, content-driven redraws can lose scrollback, and multi-line paste breaks on terminals without bracketed paste.
- **Provider quirks require frequent workarounds** — Model lists are out of sync with actual API availability, reasoning fields must be manually round-tripped, and some GLM/Fireworks requests fail when prompt caching is enabled.
- **Resource and performance hazards** — X11 connection leaks exhaust server limits, tool-call streaming re-parses the whole buffer on every delta (O(n²)), and SQLite session queries still need optimization.
- **Environment/config pitfalls** — Bun-compiled binaries can crash at startup from `bunfig.toml` autoload, Anthropic login over SSH redirects to localhost instead of offering a code, and `AI_AGENT`/`PI_*` env vars remain under-documented.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-07

## Today's Highlights

The stable **v0.21.7** release landed with two important improvements: the 50-turn limit for long-running Goals was removed, and interactive CLI now supports inline terminal image rendering. At the same time, the community remains focused on Windows/Desktop reliability, terminal rendering regressions, and a significant hook-dispatch regression in 0.21.6. The most active discussion continues to be the controversial Qwen OAuth free-tier policy proposal.

## Releases

- **[`v0.21.7`](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7)** — Removed the 50-turn limit for Goals, allowing tasks to resume and continue beyond previous boundaries. Enabled inline terminal image rendering from model outputs for kitty/iTerm2/WezTerm/Ghostty/Warp.
- **[`v0.21.7-nightly.20260807.fca8f3c1f`](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7-nightly.20260807.fca8f3c1f)** — CI fix to surface blocked autofix takeover admission.
- **[`live-host-v0.1.0`](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.1.0)** — Qwen Live Host v0.1.0 release, including Windows merge queue test CI work and evidence-image tooling for review.
- **[`live-host-latest`](https://github.com/QwenLM/qwen-code/releases/tag/live-host-latest)** — Stable Qwen Live Host installer feed.

## Hot Issues

1. **[#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** — Closed, 150 comments. Proposal to reduce daily free quota to 100 requests/day and phase out the free tier. This remains the most controversial community topic, with strong pushback in the thread.

2. **[#6565 — Internal Error when connecting to Qwen Coder](https://github.com/QwenLM/qwen-code/issues/6565)** — Closed, 10 comments. Users across Chinese/Japanese/English locales are hitting an `Internal Error` in the authentication/connection path. Highlights the need for clearer backend diagnostics.

3. **[#8316 — Prompt not restored after Ctrl+C cancellation](https://github.com/QwenLM/qwen-code/issues/8316)** — Open, 8 comments. Canceling an agent run loses the user’s draft instead of restoring it to the input box, forcing retyping. Common UX regression.

4. **[#5199 — Minified React error #185 in cherrystudio install](https://github.com/QwenLM/qwen-code/issues/5199)** — Open, 7 comments. Windows users report a React runtime crash under a path with `install/global/node_modules/@qwen-code/qwen...`. Likely related to bundled installation paths.

5. **[#8557 — Shrinking terminal reprints transcript blocks](https://github.com/QwenLM/qwen-code/issues/8557)** — Open, 6 comments. On macOS/Warp, narrowing the terminal duplicates previous transcript blocks into the scrollback. Rendering issue in the interactive TUI.

6. **[#8615 — Desktop 0.1.0 Windows startup crash: EISDIR lstat 'C:'](https://github.com/QwenLM/qwen-code/issues/8615)** — Open, 5 comments, P1. The new Desktop build crashes when opening a workspace on Windows due to verbatim path mishandling (`C:` treated as a relative path).

7. **[#8622 — 0.21.6 hook regression: PreToolUse/PostToolUse/PreCompact/SessionStart never dispatched](https://github.com/QwenLM/qwen-code/issues/8622)** — Open, 5 comments, P1. Only `UserPromptSubmit` and `Stop` fire, breaking hook-based tool gating, compact hooks, and session-start automation. Significant regression from 0.21.5.

8. **[#8629 — Proposal to list qwen-audio-agent in README Ecosystem](https://github.com/QwenLM/qwen-code/issues/8629)** — Open, 5 comments. Suggests adding a realtime full-duplex voice frontend over ACP to the ecosystem list. Reflects growing interest in voice-driven coding agents.

9. **[#8592 — Desktop: switching UI language in Settings has no effect](https://github.com/QwenLM/qwen-code/issues/8592)** — Closed, 5 comments. The language dropdown in Desktop Settings does not actually change the UI language; persistence/application gap.

10. **[#8627 — Explicit DO_NOT_TRUST overridden by ancestor TRUST_FOLDER](https://github.com/QwenLM/qwen-code/issues/8627)** — Open, 3 comments. Folder trust rules short-circuit, so an untrusted workspace can inherit trust from a parent and potentially inject the `qwen serve` bearer token. Important security concern.

## Key PR Progress

1. **[#7897 — Skip terminal redraw optimizer on WSL/ConPTY](https://github.com/QwenLM/qwen-code/pull/7897)** — Fixes the WSL + Windows Terminal streaming duplication bug where batched cursor-up sequences are mishandled by ConPTY.

2. **[#8619 — Strip Windows verbatim prefix from workspace paths](https://github.com/QwenLM/qwen-code/pull/8619)** — Replaces `std::fs::canonicalize` with `dunce::canonicalize` for desktop workspace paths, directly addressing the Windows Desktop EISDIR crash from #8615.

3. **[#8465 — Checkpoint long-running Goal evidence](https://github.com/QwenLM/qwen-code/pull/8465)** — Adds durable, Core-owned evidence checkpoints for Goals, compressing evidence before hitting the bounded catalog limit. Aligns with the removed 50-turn Goal limit.

4. **[#8320 — Cooperative pause and resume for Dynamic Workflows](https://github.com/QwenLM/qwen-code/pull/8320)** — Adds whole-run pause/resume, letting in-flight work converge and holding results at a gate until resumed. Improves long-running automation control.

5. **[#8423 — Observe daemon/child memory against real denominators](https://github.com/QwenLM/qwen-code/pull/8423)** — Turns memory denominator work into actual readings, aggregating child RSS and modeling child-heap partitions for more accurate daemon memory accounting.

6. **[#8525 — Resolve Qwen 3.8 reasoning budget conflicts](https://github.com/QwenLM/qwen-code/pull/8525)** — Prevents DashScope Qwen 3.8 requests from carrying both `reasoning_effort` and `thinking_budget` when settings come from different config layers.

7. **[#8388 — Review capture-tui Phase 2](https://github.com/QwenLM/qwen-code/pull/8388)** — Producers rendering claims into pixels: the verifier can drive code in a private tmux server and capture exact pane output as evidence images.

8. **[#8658 — Move `/review` remote matching into CLI](https://github.com/QwenLM/qwen-code/pull/8658)** — Reduces review orchestration overhead with deterministic `qwen review match-remote` instead of model-authored prose for Git remote resolution.

9. **[#8654 — Add qwen-code repository context manifest](https://github.com/QwenLM/qwen-code/pull/8654)** — Introduces a review context manifest declaring bounded review domains, related paths, recommended tests, and required configs for `/review`.

10. **[#8640 — Refresh live instructions after memory writes](https://github.com/QwenLM/qwen-code/pull/8640)** — Ensures persisted memory changes, including `/remember`, are reflected in the active session’s live system instruction immediately.

## Feature Request Trends

- **Long-running autonomous agents** — Removing the 50-turn Goal limit, checkpointing Goal evidence, tracking `activeWork`, and supporting background Agent recovery are consistent directions toward more durable automation.
- **Multimodal and voice interaction** — Inline terminal image rendering, the Omni multimodal experiment, S3 upload reliability, and the qwen-audio-agent voice frontend all point toward richer input/output modalities beyond pure text.
- **Web Shell and Desktop completeness** — Users are asking for fullscreen artifact panels, persisted UI language, working deep-link authentication behind bearer tokens, and reliable Windows workspace path handling.
- **Review/CI tooling maturity** — Evidence capture via TUI screenshots, repository context manifests, deterministic remote matching, and clearer autofix/takeover behavior show a push to make `/review` more trustworthy and cheaper to operate.
- **Documentation/i18n expansion** — Requests include adding Korean docs, expanding the README language bar, and fixing Desktop UI language persistence.

## Developer Pain Points

- **Terminal rendering fragility** — Recurring reports of duplicated streaming text on WSL/ConPTY, tmux flashing, scrollback reprints on resize, illegible Chinese pinyin input on Windows, and Ctrl+S truncation not expanding in VP mode.
- **Windows path and packaging issues** — Desktop startup crashes, URL-encoded drive-letter links, verbatim `\\?\` path prefixes, and React errors under Windows install paths are common friction points.
- **Hooks/automation regressions** — The 0.21.6 hook regression is especially painful for developers relying on `PreToolUse`/`PostToolUse` for gating. Losing canceled prompts and sandbox runtime mis-selection add to automation frustration.
- **Trust/security model confusion** — Multiple issues around folder trust precedence and `.env` loading from untrusted ancestors indicate the trust model is not yet intuitive or safe enough for multi-root workspaces.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## DeepSeek TUI Community Digest — 2026-08-07

### Today’s Highlights
No release was published in the last 24 hours, but project activity remains high: the v0.9.4 release train closed, and multiple TUI, subagent, MCP, and ACP fixes landed or advanced. The main community focus is on eliminating silent failure modes — context-window fallback, workflow fan-out nulls, and false-success API responses — while improving contributor build ergonomics.

### Releases
None in the last 24 hours.

---

### Hot Issues

- **#2870 — EPIC: staged command-boundary refactor for #2791**  
  [Hmbown/CodeWhale Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)  
  Closed with 20 comments. This EPIC tracked the layered command-boundary refactor and provides key architectural context for the command palette, slash-completion, and discovery-filtering work seen in current PRs.

- **#4978 — Anthropic API error: `'type'` must be in `["enabled", "disabled", "auto"]`**  
  [Hmbown/CodeWhale Issue #4978](https://github.com/Hmbown/CodeWhale/issues/4978)  
  Closed with 6 comments. Intermittent HTTP 400 errors when using Anthropic-compatible providers. Retries sometimes succeed, but the noise is a recurring compatibility pain point.

- **#5250 — Only one API key can be saved across providers**  
  [Hmbown/CodeWhale Issue #5250](https://github.com/Hmbown/CodeWhale/issues/5250)  
  Open with 2 comments. Users switching between DeepSeek, GLM, and other providers must re-enter keys. Requested feature: separate key storage per provider.

- **#5244 — Unknown model IDs silently degrade to 128K context**  
  [Hmbown/CodeWhale Issue #5244](https://github.com/Hmbown/CodeWhale/issues/5244)  
  Open with 2 comments. Unknown model IDs fall back to `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS` without warning. A 1M-window model can be silently compacted at 128K — important transparency gap.

- **#4828 — macOS: underwater shell breaks `open`/`osascript`/`launchctl` (exit -54)**  
  [Hmbown/CodeWhale Issue #4828](https://github.com/Hmbown/CodeWhale/issues/4828)  
  Closed with 2 comments. Regression introduced by the v0.9.0 underwater shell. macOS users saw `operation not permitted`; downgrading to v0.8.67 was the workaround.

- **#5253 — Nested `max_depth` can widen root session depth budget**  
  [Hmbown/CodeWhale Issue #5253](https://github.com/Hmbown/CodeWhale/issues/5253)  
  Open with 1 comment. A descendant subagent can bypass the inherited recursion budget by supplying an explicit `max_depth` on a nested spawn. Important for subagent isolation and resource control.

- **#5223 — Long content: mouse wheel scrolls input history instead of transcript**  
  [Hmbown/CodeWhale Issue #5223](https://github.com/Hmbown/CodeWhale/issues/5223)  
  Closed with 1 comment. Wheel/trackpad scrolling was routed to the composer’s history buffer rather than the content area. Fixed by PR #5234.

- **#5178 — Admin digest “post” returns `ok:true` while posting nothing**  
  [Hmbown/CodeWhale Issue #5178](https://github.com/Hmbown/CodeWhale/issues/5178)  
  Closed. The web digest endpoint reported success but the draft remained in Pending forever — a false-success API bug.

- **#5035 — Workflow authoring failures inconsistent and hidden by parallel fan-out**  
  [Hmbown/CodeWhale Issue #5035](https://github.com/Hmbown/CodeWhale/issues/5035)  
  Closed as a v0.9.4 release-blocker. `task(...)` rejected options accepted by direct Agent dispatch, and failed parallel slots were treated as `null` successes, making orchestration failures look clean.

- **#5046 — Fleet named agents must bind strictly to configured roles**  
  [Hmbown/CodeWhale Issue #5046](https://github.com/Hmbown/CodeWhale/issues/5046)  
  Closed. A generic role with `model_strength: same` cloned the operator’s model five times instead of respecting fleet configuration. Highlights the need for stricter dispatch boundaries.

---

### Key PR Progress

- **#5135 — release: Codewhale v0.9.4 release train**  
  [Hmbown/CodeWhale PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135)  
  Closed. Integration train for v0.9.4, superseding #5044 and containing 77 commits ahead of `main`, including the 2026-08-01 release candidate.

- **#5234 — fix(tui): keep alternate scroll off while mouse capture is active**  
  [Hmbown/CodeWhale PR #5234](https://github.com/Hmbown/CodeWhale/pull/5234)  
  Closed. Fixes #5223 by preventing xterm alternate-scroll mode from conflicting with mouse capture. Wheel events now scroll the transcript instead of toggling input history.

- **#5242 — feat(tui/subagent): resume interrupted children from checkpoint via followup**  
  [Hmbown/CodeWhale PR #5242](https://github.com/Hmbown/CodeWhale/pull/5242)  
  Closed. Previously, interrupted continuable children produced dead-letter checkpoints. This allows long tasks to actually resume through `agents/followup`.

- **#5240 — feat(tui/shell): surface real wait elapsed time in tool content**  
  [Hmbown/CodeWhale PR #5240](https://github.com/Hmbown/CodeWhale/pull/5240)  
  Closed. `duration_ms` from Bash `wait` results is now model-visible, preventing the model from misjudging short vs. long-running waits and reducing busy-polling.

- **#5238 — feat(mcp): MCP Registry discovery with Registry-first tool selection**  
  [Hmbown/CodeWhale PR #5238](https://github.com/Hmbown/CodeWhale/pull/5238)  
  Closed. Adds MCP Registry discovery so the model prefers matching zero-environment stdio servers before falling back to `exec_shell` or custom code.

- **#5225 — feat(acp): expose file/search/git/patch/shell tools over session/prompt**  
  [Hmbown/CodeWhale PR #5225](https://github.com/Hmbown/CodeWhale/pull/5225)  
  Closed. ACP `session/prompt` previously streamed model text only. It now executes tool calls, enabling real code-editing flows for Zed and other ACP clients.

- **#5077 — perf(prompt): progressively disclose fresh context**  
  [Hmbown/CodeWhale PR #5077](https://github.com/Hmbown/CodeWhale/pull/5077)  
  Closed. Keeps `AGENTS.md`/`CLAUDE.md` eager, limits ambient skills to 2,400 characters, and keeps skill bodies lazy until explicitly loaded.

- **#5255 — Layer 5.3: Palette, completion, and discovery filtering**  
  [Hmbown/CodeWhale PR #5255](https://github.com/Hmbown/CodeWhale/pull/5255)  
  Open. Verifies and consolidates user-command integration in the palette and slash-completion surfaces as part of the command-boundary refactor.

- **#5254 — Build fix for FreeBSD**  
  [Hmbown/CodeWhale PR #5254](https://github.com/Hmbown/CodeWhale/pull/5254)  
  Open. Adds a FreeBSD build path. rquickjs lacks platform bindings, so the PR enables the `bindgen` feature as a fallback.

- **#5252 — feat(subagents): allow embedders to isolate runtime state roots**  
  [Hmbown/CodeWhale PR #5252](https://github.com/Hmbown/CodeWhale/pull/5252)  
  Open. Adds optional `EngineConfig::subagent_state_root` so embedding hosts can give delegated agents session-owned state without changing legacy defaults.

---

### Feature Request Trends

- **Per-provider API key management**  
  Users want separate saved keys per provider instead of a single overwritten key slot.  
  → [#5250](https://github.com/Hmbown/CodeWhale/issues/5250)

- **Explicit context-window fallback warnings**  
  Unknown model IDs should not silently fall back to 128K context; users want a visible warning.  
  → [#5244](https://github.com/Hmbown/CodeWhale/issues/5244)

- **Better TUI input/scroll ergonomics**  
  Mouse wheel should scroll transcript content, and persistent workflow status should move out of the composer area.  
  → [#5223](https://github.com/Hmbown/CodeWhale/issues/5223), [#5040](https://github.com/Hmbown/CodeWhale/issues/5040)

- **Stricter subagent/fleet boundaries**  
  Depth budgets must not be widen-able by nested subagents; named agents should bind strictly to configured roles.  
  → [#5253](https://github.com/Hmbown/CodeWhale/issues/5253), [#5046](https://github.com/Hmbown/CodeWhale/issues/5046)

- **Developer/build ergonomics**  
  Requests to separate the shipping profile from the pre-push release gate and stop full rebuilds on every commit.  
  → [#5246](https://github.com/Hmbown/CodeWhale/issues/5246), [#5245](https://github.com/Hmbown/CodeWhale/issues/5245)

- **Runtime API lifecycle coverage**  
  PRs are expanding the runtime API beyond read-only inventory: memory, goals, verifier receipts, MCP config, and skill lifecycle endpoints.  
  → [#5131](https://github.com/Hmbown/CodeWhale/pull/5131), [#5133](https://github.com/Hmbown/CodeWhale/pull/5133), [#5132](https://github.com/Hmbown/CodeWhale/pull/5132), [#5130](https://github.com/Hmbown/CodeWhale/pull/5130), [#5129](https://github.com/Hmbown/CodeWhale/pull/5129)

- **Cross-platform support**  
  FreeBSD build fixes and Chinese-language Windows beginner documentation are both receiving community contributions.  
  → [#5254](https://github.com/Hmbown/CodeWhale/pull/5254), [#5229](https://github.com/Hmbown/CodeWhale/pull/5229)

---

### Developer Pain Points

- **Expensive local builds**  
  Fat LTO and HEAD SHA stamping cause full rebuilds of large crates on pre-push and every commit.  
  → [#5246](https://github.com/Hmbown/CodeWhale/issues/5246), [#5245](https://github.com/Hmbown/CodeWhale/issues/5245)

- **Provider compatibility friction**  
  Anthropic-compatible providers reject `type` values; unknown model IDs silently reduce context; multiple provider keys cannot be stored simultaneously.  
  → [#4978](https://github.com/Hmbown/CodeWhale/issues/4978), [#5244](https://github.com/Hmbown/CodeWhale/issues/5244), [#5250](https://github.com/Hmbown/CodeWhale/issues/5250)

- **Silent failures and misleading success states**  
  Web admin returns `ok:true` without posting; workflow fan-out hides failed parallel slots as `null`; `<turn_meta>` reappears after session reopen.  
  → [#5178](https://github.com/Hmbown/CodeWhale/issues/5178), [#5035](https://github.com/Hmbown/CodeWhale/issues/5035), [#4681](https://github.com/Hmbown/CodeWhale/issues/4681)

- **macOS shell regressions**  
  Underwater shell breaks common macOS commands like `open`, `osascript`, and `launchctl` with exit -54.  
  → [#4828](https://github.com/Hmbown/CodeWhale/issues/4828)

- **TUI scrolling conflicts**  
  Wheel/trackpad input is captured by the wrong widget, making long transcripts hard to navigate.  
  → [#5223](https://github.com/Hmbown/CodeWhale/issues/5223)

- **Subagent and tool availability errors**  
  Users still hit missing `task` tool errors, and nested subagents can widen recursion budgets unintentionally.  
  → [#5002](https://github.com/Hmbown/CodeWhale/issues/5002), [#5253](https://github.com/Hmbown/CodeWhale/issues/5253)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*