# AI CLI Tools Community Digest 2026-08-11

> Generated: 2026-08-11 02:08 UTC | Tools covered: 9

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
**2026-08-11 Community Digest Analysis**

---

## 1. Ecosystem Overview

The AI CLI tool landscape is mature but iterating at high velocity. On a single day, four tools shipped stable releases (Claude Code v2.1.227, Copilot CLI v1.0.79, OpenCode v1.18.16, Qwen Code v0.21.9), while OpenAI Codex cut two alpha releases and Gemini CLI and Qwen Code published nightlies. Across all nine communities, four themes dominate: agent/subagent reliability and truthful completion reporting, cross-session memory, Windows platform stability, and entitlement/rate-limit transparency. The ecosystem is converging on a common feature surface — sandboxing, MCP integration, subagent orchestration, and long-session recovery — while each tool differentiates on target user (enterprise vs. individual) and integration depth (IDE, cloud, or terminal).

---

## 2. Activity Comparison

*Where exact counts were reported by the digest ("updated in last 24h"), they are cited directly; otherwise the digest's highlighted top-N issues/PRs are listed.*

| Tool | Issues (24h) | PRs (24h) | Release Status |
|---|---|---|---|
| **Claude Code** | 10 highlighted; top issue 72 comments | 2 updated | **Stable v2.1.227** shipped |
| **OpenAI Codex** | **50 updated** (highest) | **46 updated** (highest) | 2 alpha releases (rust-v0.148.0-a.6, v0.147.0-a.6.6) |
| **Gemini CLI** | 10 highlighted; top issue 12 comments | 10 highlighted | Nightly v0.56.0 |
| **Copilot CLI** | 10 highlighted | **0 updated** | **Stable v1.0.79** shipped |
| **Kimi Code** | 3 updated (lowest) | 0 updated | None |
| **OpenCode** | 10 highlighted | 10 highlighted | **Stable v1.18.16** shipped |
| **Pi** | 10 highlighted | 10 highlighted | None (PR queue active) |
| **Qwen Code** | 10 highlighted | 10 highlighted | **Stable v0.21.9** + nightly |
| **DeepSeek TUI** | 3 updated (tied lowest) | 4 updated | None (v0.9.6 release PR closed) |

**Read:** OpenAI Codex has the highest raw issue/PR velocity; Claude Code has the deepest single-thread engagement (72-comment entitlement issue). Kimi Code and DeepSeek TUI are the quietest communities.

---

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities:

- **Cross-session memory & persistence** — Kimi Code (#1283, 31 comments; #1478), Gemini CLI (Auto Memory hygiene, #26522/#26525), Claude Code (skill-replay opt-out #85138; `/btw` logging #85674), Qwen Code (workspace-scoped project memory #8854; memory tests #8809). Users across every tool want durable, documented memory layers.

- **Agent/subagent reliability & truthful completion** — Gemini CLI (#22323: `MAX_TURNS` false-reported as `GOAL` success; #21409: generalist agent hangs), Copilot CLI (#4416: parallel fan-out dies to per-model 429s), OpenAI Codex (#34700: `spawn_agent` rejection), Claude Code (#71723: Agent calls silently routed to teammate protocol), OpenCode (#37852: aborted streams recorded as clean stops), DeepSeek TUI (#5253: nested `max_depth` widens recursion budget).

- **Sandbox hardening & safety guardrails** — Gemini CLI (SSRF fix #28557; destructive-command guardrails #22672), Qwen Code (cross-worktree Git mutation guard #8687; path-containment report #8835), Copilot CLI (enterprise sandbox policy controls in v1.0.79), Claude Code (sandbox breakage of `.git/config.worktree` #76558), OpenAI Codex (Windows sandbox backend selection #37875).

- **Windows & remote platform stability** — OpenAI Codex (#20214 freezes, 81 👍; #37458 VS Code resource loading; #36176 input lag), Copilot CLI (#4095 plugin update "Access denied"; #4426 quoted Windows paths), Claude Code (#83744 Windows GPU crash), Pi (#6187 WSL login hangs). Windows is the weakest platform across the board.

- **Entitlement & rate-limit transparency** — Claude Code (#79337: Fable prompts on Max plan), OpenAI Codex (#32791: five-hour limit vanished; #35606: crashes consume quota), Copilot CLI (#4390/#4422: org-enabled models missing or blocked).

- **Long-session recovery & context management** — Copilot CLI (#4325: `events.jsonl` exceeds V8 string limit; #4424: `/compact` fails at 5 MB CAPI cap), Claude Code (#85668 autocompact thrashing; #82536 `--continue` can't resume `-p` sessions), OpenCode (#38458 SSE streams close), Qwen Code (#8678 session restore timeout).

- **Model routing & BYO provider flexibility** — Copilot CLI (#3954: `explore` hardcodes `gpt-5.4-mini` ignoring DeepSeek config), Pi (#7886: uppercase base URL breaks `maxTokens`), OpenCode (#35432: `tool_call: false` ignored), Qwen Code (#8863: provider update overwrites `model.name`/`baseUrl`), OpenAI Codex (#37380: Azure rejects empty namespace description).

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Enterprise entitlements, skills/hooks ecosystem, teammate protocol | Enterprise teams on Claude plans | Deep agent orchestration + policy control |
| **OpenAI Codex** | Windows desktop app, VS Code extension, Computer Use, remote control | ChatGPT Plus/Pro consumers and prosumers | Cloud-config-driven desktop/IDE integration |
| **Gemini CLI** | Security hardening (SSRF, OAuth), Auto Memory, eval infrastructure, AST-aware tooling | Google Cloud/Workstations developers | Security-first PR queue + CI-gated evals |
| **Copilot CLI** | Enterprise model catalogue, sandbox policies, GitHub-native workflows | GitHub organization users | Enterprise policy management + MCP |
| **Kimi Code** | Minimalist CLI; memory is the #1 gap | Moonshot AI model users | Small team, community-driven backlog |
| **OpenCode** | Open-source hackable core, V2 rewrite, ACP protocol, provider-agnostic | Tinkerers, self-hosters, builders | Aggressive V2 migration, transparent PR process |
| **Pi** | Lightweight TUI-first experience, extension examples, Cloudflare/Bedrock/Bun support | Terminal purists, local-model users | Single-binary mono-repo, provider-compat focus |
| **Qwen Code** | Web Shell, daemon/serve mode, multi-agent "fleet" architecture, OpenTUI renderer rewrite | Power users running daemonized workflows | Rapid feature velocity; nightly + stable same-day |
| **DeepSeek TUI** | Architectural consolidation: crate decomposition, request-DTO ownership | Niche DeepSeek/CodeWhale users | Staged EPIC-driven refactors |

**Key distinction:** Claude Code and Copilot CLI anchor the *enterprise policy* end; OpenAI Codex anchors *consumer desktop/IDE*; Qwen Code and Gemini CLI push *daemon/service + fleet orchestration*; Pi and OpenCode serve the *hacker/self-host* audience with provider agnosticism.

---

## 5. Community Momentum & Maturity

- **Highest velocity:** **OpenAI Codex** (50 issues + 46 PRs in 24h, 2 alphas) and **Qwen Code** (stable + nightly same day, 10 PRs). OpenCode is close behind with a steady stream of project-picker fixes and V2 beta infrastructure.
- **Stable but active:** **Claude Code** shows the deepest engagement per issue (72-comment entitlement thread) despite modest PR volume; **Copilot CLI** shipped a stable release with zero PR churn, indicating a mature, lower-CADENCE maintenance mode; **Gemini CLI** is actively iterating on security and evals; **Pi** is mid-cycle with a large open PR queue and no release.
- **Emerging / consolidating:** **Kimi Code** (3 issues, no PRs, no release) is the least mature — its community is still articulating a *memory* feature that other tools already have. **DeepSeek TUI** is in a deliberate consolidation phase (closed command-boundary EPIC #2870; new crate-decomposition EPIC #5316), prioritizing architecture over features.

**Maturity ranking by ecosystem signal:** OpenAI Codex ≈ Claude Code ≈ Copilot CLI > Qwen Code ≈ Gemini CLI ≈ OpenCode ≈ Pi > Kimi Code ≈ DeepSeek TUI.

---

## 6. Trend Signals

1. **Agent truthfulness is becoming a core correctness requirement.** False `"success"` reports after `MAX_TURNS` (Gemini), silent routing changes (Claude), and aborted streams recorded as clean stops (OpenCode) are no longer acceptable — expect status-transparency features to land across all tools.

2. **Memory is the next table-stakes feature.** Kimi Code's community is demanding it explicitly; Gemini's Auto Memory and Claude's skills/session tooling are already shipping rough edges (low-signal retries, pre-redaction exposure, skill replay after compaction). Tools without memory layers will lose users to those with them.

3. **Security hardening is moving into agentic execution paths.** SSRF via DNS rebinding (`web-fetch`), worktree-escape Git mutations, and sandbox path containment are being fixed at the protocol level, not just the policy level. Enterprise buyers should expect this to accelerate.

4. **Windows remains the industry's weakest platform.** Every major tool has an unresolved Windows-specific pain point: freezes (Codex), GPU crashes (Claude), file-locking (Copilot), WSL auth hangs (Pi). Cross-platform parity is a genuine competitive differentiator.

5. **Long-session resilience needs redesign, not patching.** Hard caps (5 MB CAPI, V8 string limits), failing compaction, and lost session discovery all point to session stores that were not designed for agentic, multi-hour workloads. Watch for persistent/streaming session backends as the fix.

6. **BYO-model and entitlement transparency are trust issues.** Users are actively burned by hardcoded model routing (Copilot's `explore`), provider-update config clobbering (Qwen), and invisible plan downgrades (Claude's Fable issue). Tools that expose *why* a model was chosen or rejected will win developer trust.

**Reference value for developers:** prioritize agent-status truthfulness and session-recovery guarantees in your own agent tooling; treat memory as a first-class product surface rather than a plugin; budget for Windows-specific testing; and expect users to demand visibility into every model-routing and entitlement decision.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Source:** github.com/anthropics/skills · Data as of 2026-08-11

---

## 1. Top Skills Ranking

The most-discussed PRs (sorted by engagement) span a mix of new Skill submissions and critical fixes to the skill-creator toolchain.

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall** ([PR](https://github.com/anthropics/skills/pull/1298))
Repairs the skill-description evaluation loop that has been returning `recall=0%` for **every** skill description (10+ independent reproductions, tracked in [#556](https://github.com/anthropics/skills/issues/556)). Also fixes Windows stream reading, trigger detection, and parallel worker handling. The discussion converges with several sibling PRs — [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323), [#1261](https://github.com/anthropics/skills/pull/1261) — making this the community's single hottest fix area. **Status:** Open.

**#514 — Add document-typography skill** ([PR](https://github.com/anthropics/skills/pull/514))
A typographic quality-control skill for AI-generated documents: prevents orphan word wrap (1–6 words spilling onto a new line), widow paragraphs (headers stranded at page bottom), and numbering misalignment — issues that appear in nearly every Claude-generated document. **Status:** Open.

**#486 — Add ODT skill** ([PR](https://github.com/anthropics/skills/pull/486))
New skill for OpenDocument Format files (`.odt`, `.ods`): creation, template filling, and ODT→HTML conversion. Triggers on "ODT/ODS/ODF/OpenDocument/LibreOffice" mentions, covering a clear gap for open-source/ISO-standard document workflows. **Status:** Open.

**#210 — Improve frontend-design skill clarity** ([PR](https://github.com/anthropics/skills/pull/210))
A substantial revision of the existing frontend-design skill aimed at actionability: every instruction must be executable within a single conversation, with guidance specific enough to steer behavior without over-constraining output. **Status:** Open.

**#83 — Add skill-quality-analyzer and skill-security-analyzer** ([PR](https://github.com/anthropics/skills/pull/83))
Two meta-skills added to the example-skills marketplace. `skill-quality-analyzer` evaluates skills across five weighted dimensions (Structure & Documentation 20%, examples, resources, …); `skill-security-analyzer` addresses the security-review gap. Directly responsive to the trust-boundary concerns raised in issue [#492](https://github.com/anthropics/skills/issues/492). **Status:** Open.

**#723 — Add testing-patterns skill** ([PR](https://github.com/anthropics/skills/pull/723))
A comprehensive testing skill spanning the full stack: Testing Trophy philosophy, unit-testing patterns (AAA, naming, pure functions, edge cases), and React component testing with Testing Library. One of the most broadly applicable engineering skills proposed this cycle. **Status:** Open.

**#525 — Add pyxel skill for retro game development** ([PR](https://github.com/anthropics/skills/pull/525))
Wraps the pyxel-mcp server for the Pyxel retro-game engine: triggers on retro/pixel-art/8-bit game requests and defines a write → run_and_capture → inspect → iterate workflow. Notable as a creative-domain skill with tight MCP integration. **Status:** Open.

**#1302 — Add color-expert skill** ([PR](https://github.com/anthropics/skills/pull/1302))
A self-contained color-expertise skill: color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway, CSS), plus a "what to use when" table for color spaces (OKLCH for scales, OKLAB for gradients, CAM16 for perceptually uniform work). Positioned for any color-related design task. **Status:** Open.

---

## 2. Community Demand Trends

Distilled from the most-commented Issues:

- **Skill-creation tooling reliability is the #1 pain point.** Issues [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) and [#1169](https://github.com/anthropics/skills/issues/1169) document the `run_eval.py` 0%-recall failure that makes the description-optimization loop optimize against noise. [#62](https://github.com/anthropics/skills/issues/62) reports user-created skills silently disappearing. The demand: *make the skill-creation feedback loop actually work*.

- **Security and trust-boundary hardening.** Issue [#492](https://github.com/anthropics/skills/issues/492) — the cycle's most-commented issue at 43 comments — warns that community skills distributed under the `anthropic/` namespace impersonate official skills, enabling trust-boundary abuse with elevated permissions. Supplemented by [#1175](https://github.com/anthropics/skills/issues/1175) on access-control logic inside SKILL.md files. The demand: *official vs. community provenance must be unambiguous, and skills need security review*.

- **Enterprise/org-wide skill sharing.** Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests org-level sharing in Claude.ai — currently users must manually transfer `.skill` files over Slack/Teams and upload them. The demand: *a managed skill library for organizations*.

- **Context-window efficiency.** Issue [#1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill eagerly injecting ~156k tokens in a single tool call, exhausting context. The demand: *lean, lazy-loading skills that respect the context budget*.

- **Agent self-management and meta-skills.** Proposals for `compact-memory` ([#1329](https://github.com/anthropics/skills/issues/1329)), `agent-governance` ([#412](https://github.com/anthropics/skills/issues/412)), and a Reasoning Quality Gate pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)) show demand for skills that manage agent state, safety, and output quality rather than just domain tasks.

- **Platform integration.** Persistent asks for AWS Bedrock support ([#29](https://github.com/anthropics/skills/issues/29)) and exposing Skills as MCPs ([#16](https://github.com/anthropics/skills/issues/16)).

---

## 3. High-Potential Pending Skills

All PRs below are **open** with active discussion; they represent the strongest near-term additions to the ecosystem:

**Document & content QA**
- [#514 document-typography](https://github.com/anthropics/skills/pull/514) — typographic quality control for generated documents
- [#486 ODT skill](https://github.com/anthropics/skills/pull/486) — OpenDocument creation/fill/parse and ODT→HTML

**Engineering practice**
- [#723 testing-patterns](https://github.com/anthropics/skills/pull/723) — full-stack testing patterns (Trophy model, unit, React)
- [#210 frontend-design revision](https://github.com/anthropics/skills/pull/210) — actionability overhaul of an existing skill

**Agent quality & meta-skills**
- [#83 skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83) — marketplace meta-skills for evaluating other skills
- [#1367 self-audit](https://github.com/anthropics/skills/pull/1367) — mechanical file verification + four-dimension reasoning quality gate
- [#1479 plan-file-hygiene](https://github.com/anthropics/skills/pull/1479) — lifecycle management for accumulated planning artifacts

**Creative/domain**
- [#1302 color-expert](https://github.com/anthropics/skills/pull/1302) — color naming systems and color-space selection
- [#525 pyxel](https://github.com/anthropics/skills/pull/525) — retro-game development via pyxel-mcp

**Note:** A separate cluster of skill-creator bug-fix PRs ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1261](https://github.com/anthropics/skills/pull/1261)) targets the same root `run_eval.py` failure from different angles; a consolidated merge is likely.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is no longer just *more domain skills* — it is a **trustworthy skill lifecycle**: reliable skill-creation/eval tooling, clear security boundaries between official and community content, and quality-audit meta-skills that verify output, context usage, and provenance before delivery.

---

# Claude Code Community Digest — 2026-08-11

## Today's Highlights

v2.1.227 shipped fixes for subscription-tier feature-flag evaluation (the Fable Max usage-credit prompt) and `claude-code-action` Bash failures. The Fable/Max entitlement issue remains the most active thread with 72 comments, while CVP-approved organizations continue reporting cyber-safeguard false positives. Agent/session reliability and missing transparency around gated/held messages are the emerging community themes.

## Releases

- [Claude Code v2.1.227](https://github.com/anthropics/claude-code/releases)
  - Fixed feature flags being evaluated without the user's subscription tier when a session started with an expired login token, which could wrongly prompt Max plan users to enable usage credits for Fable.
  - Fixed every Bash command failing under `claude-code-action` with an `allowed_no` condition (source text truncated).

## Hot Issues

1. [Fable 5 prompts "usage credits required" on Max plan — #79337](https://github.com/anthropics/claude-code/issues/79337)  
   Top issue: Max users silently downgraded to Opus 4.8 despite Fable 5 being standard on Max. **72 comments, 23 👍**; release v2.1.227 appears targeted at this exact failure.

2. [CVP-approved org still receives cyber safeguard blocks — #84352](https://github.com/anthropics/claude-code/issues/84352)  
   A previously approved Claude.ai organization is blocked again, and the verification portal shows "Under review" despite prior approval. **33 comments**.

3. [Agent tool `name` silently switches to teammate protocol — #71723](https://github.com/anthropics/claude-code/issues/71723)  
   If any team config exists, a named Agent call takes the teammate path instead of the background-agent path, and results are lost. **11 comments**.

4. [`--continue` cannot find sessions created by `-p` — #82536](https://github.com/anthropics/claude-code/issues/82536)  
   Interactive resume fails to locate sessions created via print mode. **10 comments**.

5. [Opus 5 hallucination regression — #82326](https://github.com/anthropics/claude-code/issues/82326)  
   Users report Opus 5 inventing answers that Opus 4.8 did not produce. **8 comments**.

6. [Claude Desktop Windows GPU process crash — #83744](https://github.com/anthropics/claude-code/issues/83744)  
   A GPU process crash (`exitCode 101457950`) kills the entire desktop app. **6 comments**.

7. [Published artifacts missing from mobile app — #78792](https://github.com/anthropics/claude-code/issues/78792)  
   Artifacts appear on web and desktop but not in the iOS app. **5 comments, 20 👍**.

8. [Spoofed "file modified... don't tell the user" system-reminder — #74636](https://github.com/anthropics/claude-code/issues/74636)  
   A fake system-reminder-style note appears after Claude's own Write/Edit tool calls. **5 comments**.

9. [Argument substitution corrupts literal `$N` text — #78759](https://github.com/anthropics/claude-code/issues/78759)  
   Prices and awk fields are silently rewritten in skills/slash-command content, even inside fenced code blocks, with no opt-out. **4 comments**.

10. [Autocompact thrashing — #85668](https://github.com/anthropics/claude-code/issues/85668)  
   Context refills to the limit within 3 turns after every compact, 3 times in a row. Closed as likely caused by oversized file/tool output. **3 comments**.

## Key PR Progress

Only two PRs saw updates in the last 24 hours, so a 10-item list is not available.

- [feat: add automatic GitHub/GitLab detection and GitLab support for `/code-review` — #34951](https://github.com/anthropics/claude-code/pull/34951)  
  Adds multi-platform support, including self-hosted GitLab, and addresses issue #26932. Still open.

- [plugins: add entroly-context for budget-aware context management — #85464](https://github.com/anthropics/claude-code/pull/85464)  
  Community plugin that provides budget-aware context selection for Claude Code sessions when codebases exceed the context window. Closed.

## Feature Request Trends

- **Agent-message transparency**: Held or expired cross-session messages need explicit markers, denial notices, and expiry notifications so the receiver knows a message was gated ([#85678](https://github.com/anthropics/claude-code/issues/85678), [#85679](https://github.com/anthropics/claude-code/issues/85679)).
- **Hook context**: PreToolUse hooks need to know whether a human approved the tool call ([#85606](https://github.com/anthropics/claude-code/issues/85606)).
- **Skills/command escape hatches**: Users want frontmatter opt-out from post-compaction skill replay ([#85138](https://github.com/anthropics/claude-code/issues/85138)) and from literal `$N` argument substitution ([#78759](https://github.com/anthropics/claude-code/issues/78759)).
- **TUI/keybinding configurability**: Opt-in "Enter = newline, Mod+Enter = submit" across desktop and CLI ([#74655](https://github.com/anthropics/claude-code/issues/74655)).
- **Session tooling**: Logging `/btw` messages ([#85674](https://github.com/anthropics/claude-code/issues/85674)), better `--continue`/`--resume` session discovery ([#82536](https://github.com/anthropics/claude-code/issues/82536), [#85657](https://github.com/anthropics/claude-code/issues/85657)), and multi-platform `/code-review` support ([#34951](https://github.com/anthropics/claude-code/pull/34951)).

## Developer Pain Points

- **Entitlement misclassification**: Fable usage-credit prompts appear on Max and Team Premium plans despite included access ([#79337](https://github.com/anthropics/claude-code/issues/79337), [#82797](https://github.com/anthropics/claude-code/issues/82797)).
- **False-positive policy blocks**: CVP-approved organizations are still blocked by cyber safeguards ([#84352](https://github.com/anthropics/claude-code/issues/84352), [#85680](https://github.com/anthropics/claude-code/issues/85680)).
- **Silent data loss / session state confusion**: Named Agent calls route to teammate protocol and lose results ([#71723](https://github.com/anthropics/claude-code/issues/71723)), sessions disappear after backgrounding ([#85676](https://github.com/anthropics/claude-code/issues/85676)), and `--continue` cannot resume `-p` sessions ([#82536](https://github.com/anthropics/claude-code/issues/82536)).
- **Context-management churn**: Autocompact thrashing ([#85668](https://github.com/anthropics/claude-code/issues/85668)), hallucination regressions ([#82326](https://github.com/anthropics/claude-code/issues/82326)), and stale skill replay after compaction ([#85138](https://github.com/anthropics/claude-code/issues/85138)) are all recurring complaints.
- **Platform/desktop instability**: Windows GPU crashes ([#83744](https://github.com/anthropics/claude-code/issues/83744)), Synology SSH remote upload failures ([#78493](https://github.com/anthropics/claude-code/issues/78493)), connector-synced folders stuck empty ([#85681](https://github.com/anthropics/claude-code/issues/85681)), and sandbox breakage of `.git/config.worktree` ([#76558](https://github.com/anthropics/claude-code/issues/76558)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-11

Across 50 updated issues and 46 PRs in the last 24 hours, community attention is concentrated on Windows app stability and VS Code extension resource-loading regressions. Meanwhile, recent PRs indicate a strong internal push on reliability: cloud config refreshes, fire-and-forget notifications, image-handling cleanup, and Windows sandbox/network fixes.

## Releases

Two alpha releases were cut in the last 24 hours:

- [rust-v0.148.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.6)
- [rust-v0.147.0-alpha.6.6](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.6)

No detailed changelog was included in the provided data; both appear to be incremental alpha patches on the Rust CLI tracks.

## Hot Issues

1. **[Windows app freezes/stutters on capable hardware](https://github.com/openai/codex/issues/20214)** — 93 comments, 81 👍  
   The top community thread: Plus users on Windows 11 with sufficient RAM/CPU still experience frequent UI freezes and stutters in the latest Microsoft Store build. High engagement indicates this is the single biggest desktop-app pain point right now.

2. **[VS Code extension fails to start: “couldn’t load its resources”](https://github.com/openai/codex/issues/37458)** — 32 comments  
   The `openai.chatgpt` extension 26.803.41515 fails on Windows x64 with VS Code 1.132. Related reports also exist for Remote-SSH and WSL, making this the most active extension regression.

3. **[Windows app missing “Control other devices” tab](https://github.com/openai/codex/issues/28919)** — 28 comments, 31 👍  
   Pro users expect remote-control capabilities from Settings > Connections, but the tab is absent on Windows. This is a feature-parity and expectation mismatch for cross-device Codex workflows.

4. **[Windows Computer Use reuses stale node_repl context](https://github.com/openai/codex/issues/37013)** — 18 comments  
   After the first `node_repl/js` execution finishes, subsequent `@oai/sky` calls reuse a broken Windows helper transport. This effectively breaks Computer Use workflows that span more than one JS execution.

5. **[Support opening Codex sessions as full VS Code editor tabs](https://github.com/openai/codex/issues/20951)** — 15 comments, 38 👍  
   A strong feature request: users want Codex sessions in normal editor tabs, similar to Claude Code in VS Code, instead of being confined to the sidebar.

6. **[spawn_agent rejects gpt-5.6-luna with multi_agent_v2](https://github.com/openai/codex/issues/34700)** — 13 comments, 35 👍  
   Enabling subagents with `gpt-5.6-luna` fails with `spawn_agent` rejection in the Windows app / CLI 0.145.0. This blocks a popular subagent configuration.

7. **[Azure Responses rejects empty functions namespace description](https://github.com/openai/codex/issues/37380)** — 12 comments, 27 👍  
   A 0.147.0 regression: custom Azure OpenAI / API Management providers reject the empty `functions` namespace description sent by Codex CLI, breaking `gpt-5.6-sol` workflows.

8. **[Full-process PowerShell/WMI polling contributes to input lag](https://github.com/openai/codex/issues/36176)** — 11 comments, closed  
   Though marked closed, this documents a recurring Windows desktop issue: polling remains in 26.721.4979.0 and causes system-wide input lag. Community members have already patched local copies to work around it.

9. **[Five-hour Codex usage limit disappeared from Plus accounts](https://github.com/openai/codex/issues/32791)** — 11 comments  
   Plus users report only the weekly limit is shown, while the previously visible five-hour limit has vanished. This is a recurring rate-limit transparency issue.

10. **[Remote connection notifications don’t fire](https://github.com/openai/codex/issues/20930)** — 10 comments, 16 👍  
   When Codex runs on a remote Linux host with a macOS desktop client, turn-completion notifications are suppressed, making remote coding workflows harder to monitor.

## Key PR Progress

- **[Apply refreshed cloud config bundles to later sessions](https://github.com/openai/codex/pull/37908)**  
  Background refreshes previously only warmed the disk cache. This change makes new sessions in the same process load the latest cloud config bundle instead of the startup snapshot.

- **[Make gRPC code-mode notifications fire-and-forget](https://github.com/openai/codex/pull/37906)**  
  Unacknowledged notifications no longer block cell completion. The ack RPC remains as a compatibility no-op, improving code-mode responsiveness.

- **[Defer `view_image` processing to history insertion](https://github.com/openai/codex/pull/37902)**  
  Image bytes are passed through unchanged from `view_image`; decoding and resizing happen in the shared history-insertion path, with invalid images represented by a placeholder.

- **[Validate images before returning `view_image` output](https://github.com/openai/codex/pull/37892)**  
  Adds clear errors for invalid/unsupported image data and re-encodes code-mode images as PNG while preserving original bytes for direct tool calls.

- **[Add configurable Responses API request metadata](https://github.com/openai/codex/pull/37895)**  
  Introduces `responses_api_metadata` for product-owned key/value metadata on every Responses API turn, including parent and subagent requests, with size/key constraints.

- **[Use thread configuration for `app/read`](https://github.com/openai/codex/pull/37891)**  
  Adds an optional `threadId` parameter to `app/read` so the thread’s effective config is loaded before feature gating, workspace policy, and plugin attribution are applied.

- **[Ignore Unix socket proxy settings on Windows](https://github.com/openai/codex/pull/37889)**  
  Prevents macOS-only Unix socket permissions from clamping Windows proxy listeners to loopback and emitting unsupported-setting warnings.

- **[Add configurable goal token budget limits](https://github.com/openai/codex/pull/37878)**  
  Adds `goals.max_goal_token_budget` as a positive-integer setting, used as the default for new goals and enforced when token budgets are reset or updated.

- **[Honor the configured Windows sandbox level for managed networking](https://github.com/openai/codex/pull/37875)**  
  Managed networking now selects the Windows sandbox backend solely from `WindowsSandboxLevel`, rather than implicitly forcing the elevated backend.

- **[Reject duplicate resolved paths in `apply_patch`](https://github.com/openai/codex/pull/37867)**  
  Patches containing multiple ops that resolve to the same file, such as `duplicate.txt` and `./duplicate.txt`, are now rejected, while multi-file patches remain supported.

## Feature Request Trends

Several clear feature directions emerged from the issue activity:

- **First-class editor integration:** The most explicit request is opening Codex sessions as full VS Code editor tabs (#20951), alongside demand for more reliable extension startup across remote environments (#37458, #37517, #37543).
- **Remote and multi-device control parity:** Users want the “Control other devices” flow to work consistently on Windows (#28919), plus reliable notifications for remote sessions (#20930), Android pairing (#37897), and mobile access to running tasks (#28340).
- **Rate-limit transparency:** Multiple users are asking for clear, consistent visibility into five-hour and weekly limits (#32791, #36170), especially when crashes or freezes consume quota (#35606).
- **Expanded subagent/model flexibility:** Requests around `multi_agent_v2`, model compatibility, and subagent execution status indicate growing reliance on subagents (#34700, #37814).

## Developer Pain Points

- **Windows desktop performance remains the #1 frustration.** Freezes, stutters, crashes, and input lag dominate the top issue list (#20214, #36176, #35606, #30906).
- **VS Code extension resource-loading regressions are widespread.** The same “couldn’t load its resources” error appears on Windows, Remote-SSH, WSL, and older macOS setups (#37458, #37517, #37543, #37508).
- **Sandbox and configuration behavior can be surprising.** Developers report project-scoped `approval_policy = "never"` being ignored (#37914), Azure providers rejecting empty namespace descriptions (#37380), and MCP OAuth issuer handling changing in 0.147 (#37373).
- **Remote and Computer Use flows are fragile.** Stale execution contexts (#37013), coordinate-click failures after restart (#36459), pairing failures (#37897), and missing notifications (#20930) disrupt automated or remote workflows.
- **Quota and billing clarity is a recurring trust issue.** Missing five-hour limits, missed resets, and quota consumed by app crashes continue to resurface (#32791, #36170, #35606).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-11

## 1. Today's Highlights
Nightly release **v0.56.0** shipped with a first-time contributor fix for MCP OAuth token refresh, eliminating a bug where failed refreshes deleted stored credentials and forced re-authentication. Security work is prominent in the PR queue, including an SSRF fix for `web-fetch.ts` and Cloud Workstations OAuth redirect resolution — while the community continues to surface agent reliability concerns, particularly subagents misreporting `MAX_TURNS` interruptions as goal success and generalist agent hangs.

## 2. Releases
- **[v0.56.0-nightly.20260811.geef19f25c](https://github.com/google-gemini/gemini-cli/releases)** — Fixes MCP OAuth token refresh for servers configured via OAuth discovery + dynamic client registration. Previously, refresh failed locally before any network I/O and deleted stored credentials, forcing re-auth every session. First contribution from [@ParthivNaresh](https://github.com/ParthivNaresh) in [#28481](https://github.com/google-gemini/gemini-cli/pull/28481).

## 3. Hot Issues
- **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (12 comments) — `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the max turn limit before doing any analysis. This masks real failures and is a high-priority correctness bug for agent orchestration.
- **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments, 8 👍) — Any deferral to the generalist agent hangs indefinitely, even trivial operations like folder creation; users wait up to an hour before cancelling. Workaround: explicitly instructing the model to avoid subagents.
- **[#25166 — Shell command execution stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3 👍) — Simple CLI commands finish but the terminal still shows them as active and awaiting input, forcing manual intervention. Recurring and disruptive to workflow.
- **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments) — Browser agent terminates with `GOAL` immediately on Wayland sessions, making browser automation unusable for Linux/Wayland users.
- **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments) — Sessions the extraction agent deems low-signal are never marked processed, so they surface repeatedly in the inbox — a background-process hygiene problem.
- **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (4 comments) — Auto Memory sends transcript content to the extraction model *before* redaction happens, and can log existing skill contents — a legitimate privacy/security concern.
- **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments) — Community reports that custom skills and sub-agents are ignored unless explicitly instructed, even when highly relevant (e.g., user-defined `gradle`/`git` skills).
- **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (3 comments) — Agents mode is disabled in configs, yet subagents trigger anyway after the v0.33.0 update; users expected MCP-only behavior and got unrequested agent delegation.
- **[#24246 — 400 error when more than 128 tools enabled](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments) — The client errors out with large tool sets instead of intelligently scoping tools; users expect smarter tool prioritization.
- **[#22672 — Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (3 comments, 1 👍) — Models occasionally reach for `git reset`, `--force`, or destructive DB operations when safer alternatives exist; community wants guardrails around irreversible actions.

## 4. Key PR Progress
- **[#28481 — fix(core): refresh MCP OAuth tokens with the stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)** (merged into nightly) — Stops credential deletion on failed refresh for OAuth-discovered MCP servers; requires re-auth only when truly necessary.
- **[#28557 — fix: resolve SSRF vulnerability in web-fetch.ts](https://github.com/google-gemini/gemini-cli/pull/28557)** — Replaces synchronous `isPrivateIp()` (which misses hostnames resolving to internal ranges like `169.254.169.254`) with async DNS resolution — an important security hardening.
- **[#28730 — fix(core,cli): resolve false model capacity exhaustion](https://github.com/google-gemini/gemini-cli/pull/28730)** — Fixes misleading capacity-exhaustion errors, corrects model quota lookup mapping in core, and preserves the "Keep trying" UI option during transient surges.
- **[#28734 — fix(core): handle EACCES in resolveToRealPath](https://github.com/google-gemini/gemini-cli/pull/28734)** — Prevents a CLI crash on startup when macOS Seatbelt sandboxing is enabled and CWD is inside a Git repo; previously only specific `fs.realpathSync` error codes were recovered.
- **[#28729 — fix(core): resolve swallowed directory mismatch in IDE connections](https://github.com/google-gemini/gemini-cli/pull/28729)** — Fixes Gemini CLI failing to attach to the IDE companion extension under Cider or VS Code forks/remote workspaces with virtual or differing FUSE/directory paths.
- **[#28688 — fix(core): dynamically resolve Cloud Workstations proxy redirect URI for OAuth](https://github.com/google-gemini/gemini-cli/pull/28688)** — OAuth flows in Cloud Workstations VMs previously failed because redirects were statically bound to `localhost` instead of the workstation's proxy.
- **[#28624 — fix(core): prevent boolean thought parts leaking as `[Thought: true]` text](https://github.com/google-gemini/gemini-cli/pull/28624)** — Fixes internal `thought: true` parts appearing verbatim in model thought text output (fixes #23525).
- **[#28764 — fix(vscode-ide-companion): track all activate() Disposables](https://github.com/google-gemini/gemini-cli/pull/28764)** — Fixes comma-expression bug where only one of two paired registrations was tracked, which could break `gemini.diff.accept` and related commands.
- **[#28305 — feat(evals): add tool call formatter and integrate failure summaries](https://github.com/google-gemini/gemini-cli/pull/28305)** — On eval failure, prints a numbered tool-call timeline with arguments, status, and errors directly in console output — big debugging UX improvement.
- **[#28344 — Feat/eval validate](https://github.com/google-gemini/gemini-cli/pull/28344)** — New `eval:validate` static-analysis command enforcing 9 validation rules on eval source files with CI-gating exit codes.

## 5. Feature Request Trends
- **AST-aware codebase tooling** — Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) investigate AST-aware file reads, search, and codebase mapping to reduce token noise and improve method-boundary precision.
- **Agent self-awareness & observability** — Requests for subagent trajectory visibility via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and accurate self-knowledge of CLI flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
- **Zero-dependency OS sandboxing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) — Leverage Gemini's native bash affinity with a sandbox + post-execution intent routing layer, balancing capability with security.
- **Component-level evaluation infrastructure** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#28305](https://github.com/google-gemini/gemini-cli/pull/28305), [#28344](https://github.com/google-gemini/gemini-cli/pull/28344)) — Push toward more robust, CI-gated behavioral evals.
- **Browser agent resilience** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) — Automatic session takeover and lock recovery instead of fail-fast on locked browser profiles, plus honoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

## 6. Developer Pain Points
- **Agent reliability & truthfulness** — Subagents hanging, crashing, or falsely reporting success after `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) undermines trust in delegated work.
- **Permission and safety surprises** — Subagents executing without permission despite disabled configs ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), destructive commands (`git reset`, `--force`) ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), and SSRF risk in fetch tooling ([#28557](https://github.com/google-gemini/gemini-cli/pull/28557)).
- **Auto Memory hygiene** — Indefinite retries of low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), pre-redaction transcript exposure ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and silently skipped invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Terminal/UX regressions** — Stuck "Waiting input" after shell completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), terminal corruption after external editors ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and flicker/resize issues ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).
- **Configuration ignored** — Browser agent and subagent `settings.json` overrides not honored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), symlinked agent files unrecognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-11

## Today's Highlights

The Copilot CLI team shipped **v1.0.79**, adding sandbox configuration visibility and enterprise sandbox policy controls. Meanwhile, the issue tracker saw a spike in enterprise model-catalogue and MCP reliability reports, including new complaints that Claude models are missing or blocked for organization users. No pull requests were updated in the last 24 hours.

## Releases

**v1.0.79** — [GitHub Release](https://github.com/github/copilot-cli/releases/tag/v1.0.79) (2026-08-10)

- The `/sandbox` configuration dialog now shows where sandbox settings are stored in `settings.json`.
- Added support for enterprise `allow-auto-only` policy so `/allow-all auto` works while full allow-all remains blocked.
- Enterprise-managed sandbox policy can now enforce a proxy URL while credential handling is updated (source description truncated).

## Hot Issues

- **[#4422 — All Claude models disabled under CLI model selection](https://github.com/github/copilot-cli/issues/4422)**  
  A personal Enterprise user reports losing access to all Claude models overnight, even though they appear enabled in GitHub settings. Rolling back the CLI does not help, suggesting a server-side model policy issue.

- **[#4390 — Enabled organization models missing from catalogue](https://github.com/github/copilot-cli/issues/4390)**  
  Claude Sonnet 5 / Opus 5 and Kimi K3 are missing from the effective model catalogue despite being explicitly enabled. The CLI reports "This model is disabled by your organization," which points to a policy/catalogue sync bug.

- **[#1595 — Sporadic policy blocking issue retrieving models](https://github.com/github/copilot-cli/issues/1595)**  
  A long-running enterprise issue with 29 comments and 11 👍. Users with valid Enterprise subscriptions cannot list models via `/models` and receive "access denied by Copilot policy" errors.

- **[#4416 — Parallel explore subagent fan-out dies to per-model 429s](https://github.com/github/copilot-cli/issues/4416)**  
  Parallel `explore` subagents all default to the same lightweight model, `claude-haiku-4.5`, causing concentrated rate-limit failures. There is no backoff and no automatic model switch despite `eligibleForAutoSwitch`.

- **[#4325 — Session becomes permanently unloadable once events.jsonl exceeds V8's max string length](https://github.com/github/copilot-cli/issues/4325)**  
  A long-lived session becomes unresumable once its `events.jsonl` grows past V8's maximum string length. The session still appears in `/resume`, but the CLI cannot load it. Closed during the window.

- **[#4095 — Windows plugin update fails with "Access is denied" while VS Code is running](https://github.com/github/copilot-cli/issues/4095)**  
  The Copilot extension holds watcher handles on installed plugins, so `copilot plugin update` fails on Windows with OS error 5. High community impact with 13 👍.

- **[#3954 — `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring custom/DeepSeek API config](https://github.com/github/copilot-cli/issues/3954)**  
  When a custom model endpoint such as DeepSeek is configured, the `explore` tool still tries to pass `gpt-5.4-mini`, causing API errors. This breaks BYO-model workflows.

- **[#4424 — `/compact` cannot recover a session after CAPI Responses payload reaches the 5 MB limit](https://github.com/github/copilot-cli/issues/4424)**  
  Once a session hits the 5 MB CAPI request limit, normal prompts fail and `/compact` also fails, leaving no way to reduce context or continue the session.

- **[#4419 — Managed-settings interim fail-closed drops user MCP servers that register inside the window](https://github.com/github/copilot-cli/issues/4419)**  
  During managed-settings resolution, the CLI installs an empty allow list (`[[]]`), causing user MCP servers to be rejected permanently. Reproducible even on accounts with no managed policy.

- **[#4421 — MCP initialize handshake has a fixed 60s budget with no retry](https://github.com/github/copilot-cli/issues/4421)**  
  The MCP `initialize` handshake uses a hard-coded 60,000 ms timeout with no retry or backoff. npx-launched stdio servers reportedly fail in ~29% of sessions and never recover.

## Key PR Progress

No pull requests were updated in the last 24 hours. There are no PR updates to highlight in this digest window.

## Feature Request Trends

- **Per-agent model and reasoning-effort control**  
  Users want to set reasoning effort per custom agent in `.agent.md` frontmatter ([#2904](https://github.com/github/copilot-cli/issues/2904)), while others want the `explore` tool to respect custom model configurations ([#3954](https://github.com/github/copilot-cli/issues/3954)).

- **Longer, cheaper, resumable sessions**  
  Requests include prompt caching for Claude Sonnet to reduce latency and token costs ([#3808](https://github.com/github/copilot-cli/issues/3808)), plus better compaction and recovery for large sessions ([#4424](https://github.com/github/copilot-cli/issues/4424), [#4325](https://github.com/github/copilot-cli/issues/4325)).

- **Richer terminal UI**  
  Developers are asking for a built-in floating GUI prompt composer with large accessible text and word wrap ([#4417](https://github.com/github/copilot-cli/issues/4417)), and a configurable HUD/session context display ([#4418](https://github.com/github/copilot-cli/issues/4418)).

- **Enterprise model catalogue transparency**  
  Multiple issues around missing org-enabled models and policy denials ([#4390](https://github.com/github/copilot-cli/issues/4390), [#1595](https://github.com/github/copilot-cli/issues/1595), [#4422](https://github.com/github/copilot-cli/issues/4422)) show strong demand for clearer model availability diagnostics.

## Developer Pain Points

- **Enterprise model availability is unreliable**: org-enabled models disappear, Claude models are blocked, and policy errors are sporadic and opaque.
- **MCP setup is fragile**: fixed handshake timeouts, dead pooled TCP connections, and fail-closed interim policies can permanently drop configured MCP servers.
- **Long sessions hit hard limits**: 5 MB CAPI payload caps, oversized `events.jsonl` files, and failing `/compact` leave users no recovery path.
- **Model routing and rate limits frustrate agentic workloads**: hardcoded subagent models and concentrated per-model 429s cause parallel operations to fail without fallback.
- **Windows-specific blockers continue**: plugin updates fail under VS Code due to file-locking watcher handles, and pasted quoted Windows paths are not handled by `/cwd` ([#4426](https://github.com/github/copilot-cli/issues/4426)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-11

## Today's Highlights
No new releases or pull requests were published in the last 24 hours. Community activity centers on three issues: repeated demand for a persistent memory system, a request for better memory-layer documentation and optimization, and a surprising bug where the planning todo list uses the term “autopsy.” The memory feature direction continues to dominate user feedback.

## Releases
No new releases in the last 24 hours.

## Hot Issues
Only three issues were updated in the last 24 hours; all are included below.

- **[#1283 [enhancement] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
  *Author: CatKang | Updated: 2026-08-10 | Comments: 31*  
  The community’s longest-running request for a memory system that persists context, project patterns, and user preferences across sessions. With 31 comments, this issue shows strong interest in both automatic AI-managed notes and manual user-defined instructions. It remains open and is a clear signal that memory is a top-priority feature gap.

- **[#1478 [enhancement] Can the memory layer be optimized? And no memory-related documentation was found](https://github.com/MoonshotAI/kimi-cli/issues/1478)**  
  *Author: hahy36 | Updated: 2026-08-11 | Comments: 1*  
  A bilingual follow-up expressing pain when working on large projects without an effective memory layer. The author points out the lack of memory documentation beyond `agent.md` and references a similar memory structure from another tool. This reinforces the demand for both better memory functionality and official documentation.

- **[#2599 [bug] CLI planning task shows "Autopsy" in todo — “验尸” is terrifying](https://github.com/MoonshotAI/kimi-cli/issues/2599)**  
  *Author: KING0177 | Created/Updated: 2026-08-11 | Comments: 0*  
  A newly filed bug report concerning Kimi Code CLI 0.34.0 (model: kimi k3, platform: Intel Mac). During planning tasks, the todo list unexpectedly includes the word “Autopsy,” causing user confusion and alarm. While it may be a translation issue or task-naming artifact, it highlights the need for clearer, less morbid terminology in the agent’s planning output.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
The dominant feature request direction is **memory and persistence**:
- A comprehensive memory system that retains context across sessions (Issue #1283).
- Optimized memory layer for large projects and better reference documentation (Issue #1478).
- Users expect both automatic memory management and manual/user-defined memory, plus clearer documentation of how memory works in the CLI.

## Developer Pain Points
- **Lack of memory for large-scale projects**: Users report that the absence of a proper memory layer makes working on big codebases painful and error-prone.
- **Insufficient memory documentation**: Community members cannot find memory-related references, only `agent.md`, which limits their ability to configure or understand the tool’s behavior.
- **Confusing planning terminology**: Unexpected terms like “Autopsy” in todo lists create discomfort and reduce trust in the tool’s output quality.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-11

## Today's Highlights

OpenCode shipped **v1.18.16** with config-parsing and Home-project registration fixes, while the community’s attention is concentrated on the long-running **native session goals / `/goal` feature request** (#27167, 70 comments, 128 👍) and a **provider stream abort reliability bug** (#37852). On the PR side, multiple fixes for the broken “Open project” / web project picker are converging, and V2 beta build automation is starting to land.

---

## Releases

### [v1.18.16](https://github.com/anomalyco/opencode/releases/tag/v1.18.16)

**Core**
- Ignore unknown top-level config fields instead of failing config parsing.
- Register projects opened from Home so they are available to the rest of the app.

**Desktop**
- Open the project menu with a right-click in Home.
- Fall back to listing when project discovery fails.

---

## Hot Issues

1. **[#27167 — [FEATURE]: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)**  
   The highest-signal open feature request: persistent session goals and lifecycle management beyond custom slash commands. 70 comments, 128 👍 — clearly a major community want.

2. **[#37852 — Aborted provider stream recorded as clean stop](https://github.com/anomalyco/opencode/issues/37852)**  
   A provider stream that dies mid-generation is recorded as `finish=unknown` with zero usage/text and no error, causing subagents to return empty. Serious silent-failure bug; 15 comments, 55 👍.

3. **[#26220 — OpenCode enters infinite loop after tool calls complete](https://github.com/anomalyco/opencode/issues/26220)**  
   Reproducible on “Zen/big-pickle” builds: process stays alive and unresponsive after tool calls. High-impact stability issue.

4. **[#39434 — “Open project” dialog always shows “No folders found”](https://github.com/anomalyco/opencode/issues/39434)**  
   `GET /file` is called without the required `path` param, so the picker never lists valid directories. Blocks basic onboarding for web/desktop users.

5. **[#37611 — Web project picker is empty until a search is entered](https://github.com/anomalyco/opencode/issues/37611)**  
   Empty query is sent to `/find/file`, which returns nothing. Closely related to #39434 and affects the “New Session” flow.

6. **[#35432 — Config `tool_call: false` does not disable tools](https://github.com/anomalyco/opencode/issues/35432)**  
   The prompt loop unconditionally sends tools even when the model config disables them. Particularly painful for providers without tool-call support.

7. **[#26487 — `chunkTimeout` does not work for AWS Bedrock / non-SSE streams](https://github.com/anomalyco/opencode/issues/26487)**  
   Streaming timeout protection is ineffective for EventStream-based providers like Bedrock and potentially Google Vertex.

8. **[#40474 — [2.0] Agent/mode switches are invisible to the model](https://github.com/anomalyco/opencode/issues/40474)**  
   In V2, mode-switch messages are silently dropped from LLM context; the Plan agent has no system prompt or reminders, a serious V1 parity gap.

9. **[#38458 — SSE stream closes mid-turn](https://github.com/anomalyco/opencode/issues/38458)**  
   `opencode serve` SSE connections are not persistent as documented, breaking orchestration/monitoring workflows.

10. **[#40642 — MiMo V2.5 advertises video/audio but video input is never received](https://github.com/anomalyco/opencode/issues/40642)**  
   Model metadata claims video support, but the model never gets the video part. Metadata-vs-runtime mismatch confuses users.

---

## Key PR Progress

1. **[#41158 — fix(app): populate project picker from home](https://github.com/anomalyco/opencode/pull/41158)**  
   Uses indexed directory results when available and falls back to home-directory listing; also handles empty queries with fuzzy matching.

2. **[#41153 — fix(app): list the base directory on an empty project search](https://github.com/anomalyco/opencode/pull/41153)**  
   Closes #37611 by returning base-directory subfolders for empty `/find/file` queries.

3. **[#39758 — fix(app): show directories in web project picker on open](https://github.com/anomalyco/opencode/pull/39758)**  
   Another targeted fix for the “No folders found” issue, closing #39434, #37961, and #37611.

4. **[#39732 — fix(app): make New Session and project picker work with no project open](https://github.com/anomalyco/opencode/pull/39732)**  
   Fixes fresh-browser-profile flows in `opencode web` so first-time users can actually add a project.

5. **[#41626 — feat(desktop): publish v2 beta builds](https://github.com/anomalyco/opencode/pull/41626)**  
   Skips legacy V1 CLI steps in beta packaging and bundles the V2 npm CLI in desktop betas.

6. **[#41627 — chore: build beta branch from v2](https://github.com/anomalyco/opencode/pull/41627)**  
   Switches beta-branch generation from `dev` to `v2`, including V2 dependency install and smoke build. Depends on #41626.

7. **[#41630 — fix(session): recover orphan reasoning stream parts](https://github.com/anomalyco/opencode/pull/41630)**  
   Closes #36241: handles in-band “part not found” errors from the AI SDK instead of promoting them to fatal failures.

8. **[#41634 — fix(acp): respect default agent variant](https://github.com/anomalyco/opencode/pull/41634)**  
   Fresh ACP sessions now keep the configured default model and matching agent variant instead of falling back to a different effort level.

9. **[#41455 — fix(tui): include attachment path in model context](https://github.com/anomalyco/opencode/pull/41455)**  
   Preserves local attachment paths as text parts before binary image data, helping providers that don’t support image parts.

10. **[#14743 — fix(cache): improve Anthropic prompt cache hit rate](https://github.com/anomalyco/opencode/pull/14743)**  
    Addresses cross-repo/cross-session Anthropic cache misses with system splits and tool stability — a long-standing performance issue.

---

## Feature Request Trends

- **Native session goals/lifecycle**: #27167 is the clearest trend — users want persistent `/goal` workflows rather than custom slash-command workarounds.
- **Project picker & home-directory UX**: Multiple issues (#37611, #39434, #37005) request reliable first-run project discovery and empty-state directory listing.
- **Workspace/worktree switching**: #36048 proposes worktree-based workspace switching with stash-based “warp” semantics.
- **Raw markdown copy**: #14041 was closed but re-filed as #41609 — demand remains for copying LLM responses as raw Markdown.
- **Embedded/white-label customization**: #38010 asks for opt-in splash-screen suppression.
- **Per-user data isolation**: PR #41639 introduces per-user workspace directories via `OPENCODE_DATA_ROOT`.

---

## Developer Pain Points

- **Broken first-run project discovery**: The web/desktop “Open project” dialog consistently shows “No folders found”, blocking onboarding across multiple versions.
- **Silent provider-stream failures**: Mid-stream aborts are recorded as clean stops, SSE connections drop, and `chunkTimeout` doesn’t cover EventStream providers — making failures hard to diagnose.
- **Config not fully honored**: `tool_call: false` being ignored and model metadata mismatches (e.g., context limits, video/audio caps) erode trust in configuration.
- **V2 parity gaps**: Mode/agent switches are invisible to models, and V2-specific streaming/context behavior lags behind V1.
- **TUI state problems**: Drafts leak across sessions, are cleared on session switch, or don’t persist per-session as expected (#36203, #41614).
- **Windows/install friction**: PATH recognition issues and permission errors during `npm i -g` continue to resurface for Windows users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi Community Digest — 2026-08-11

### 1. Today’s Highlights
The Pi community spent the last 24 hours focused on terminal/TUI reliability and provider-compatibility fixes. Notable progress includes a Bedrock tool-call sanitization fix ([#7882](https://github.com/earendil-works/pi/pull/7882)), protection against split Alt+Enter interrupting active turns ([#7899](https://github.com/earendil-works/pi/pull/7899)), and hardening of the plan-mode example extension ([#7918](https://github.com/earendil-works/pi/pull/7918)). No new release was published, but open feature PRs like Cloudflare AI Gateway transport ([#7901](https://github.com/earendil-works/pi/pull/7901)) and fullscreen transcript search ([#7913](https://github.com/earendil-works/pi/pull/7913)) continue to move forward.

### 2. Releases
No new releases in the last 24 hours.

### 3. Hot Issues

- **[#6187 — Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)**  
  Open, 21 comments. The longest-running thread in this batch. Device authorization completes in the browser, but the WSL client never detects it. Major onboarding blocker for WSL users.

- **[#7855 — Pi stops with “Response was truncated before completion.”](https://github.com/earendil-works/pi/issues/7855)**  
  Closed as no-action. Happens randomly with any OpenAI-compatible API, including local VLLM. Users must manually prompt continuation. Concerning for local-model workflows.

- **[#7850 — GitHub Copilot login fails with 429 for orgs with many models](https://github.com/earendil-works/pi/issues/7850)**  
  Closed as no-action, 3 👍. Copilot orgs with 20+ available models hit rate limiting after device auth. Affects larger enterprise setups.

- **[#7782 — Invalid tool call from Bedrock poisoned Pi session](https://github.com/earendil-works/pi/issues/7782)**  
  Closed. Pi persisted an empty-key tool argument, replayed it on every turn, and permanently bricked the session. Fixed by PR [#7882](https://github.com/earendil-works/pi/pull/7882).

- **[#7876 — Alt+Enter intermittently aborts the running task](https://github.com/earendil-works/pi/issues/7876)**  
  Closed as no-action. In legacy terminals, Alt+Enter arrives as `ESC` + `CR`; the 10ms `StdinBuffer` timeout can split them and trigger an interrupt. Fix proposed in [#7899](https://github.com/earendil-works/pi/pull/7899).

- **[#7886 — DeepSeek maxTokens stops working when custom baseUrl uses uppercase letters](https://github.com/earendil-works/pi/issues/7886)**  
  Closed as no-action. `https://api.deepseek.com` works, but `https://API.DeepSeek.COM` breaks `maxTokens`. An edge case that shows how fragile provider URL normalization can be.

- **[#7836 — Edit fuzzy match misses lines with whitespace-length differences](https://github.com/earendil-works/pi/issues/7836)**  
  Open, 1 👍. `normalizeForFuzzyMatch` does not collapse whitespace, so small models fail edits even when content is identical. Affects model-driven file editing reliability.

- **[#7794 — APPEND_SYSTEM.md auto-discovery broken](https://github.com/earendil-works/pi/issues/7794)**  
  Closed as resource-loader bug. Two bugs prevent `~/.pi/agent/APPEND_SYSTEM.md` from being auto-loaded, silently breaking custom system-prompt workflows.

- **[#7846 — Unable to start 0.84.0/0.84.1 with bun runtime](https://github.com/earendil-works/pi/issues/7846)**  
  Open, 1 👍. Crashes on startup because `undici` calls `zlib.createZstdDecompress`, which is missing in bun. Blocks bun-based Pi users.

- **[#7791 — Global Undici dispatcher inherits 16 KiB maxHeaderSize, causing UND_ERR_HEADERS_OVERFLOW](https://github.com/earendil-works/pi/issues/7791)**  
  Open. Pi installs an `EnvHttpProxyAgent` as global dispatcher without raising `maxHeaderSize`, so valid responses with large headers are rejected. Especially relevant in proxy-heavy environments.

### 4. Key PR Progress

- **[#7882 — fix(ai): sanitize empty Bedrock tool argument keys](https://github.com/earendil-works/pi/pull/7882)**  
  Closed. Removes empty property names recursively only when replaying tool arguments to Bedrock, without mutating persisted conversation data. Fixes [#7782](https://github.com/earendil-works/pi/issues/7782).

- **[#7899 — fix(tui): prevent split Alt+Enter from interrupting](https://github.com/earendil-works/pi/pull/7899)**  
  Open. Raises the escape-sequence timeout from 10ms to 100ms when the Kitty keyboard protocol is unavailable, preventing accidental task aborts.

- **[#7904 — fix(edit): normalize single-object edits argument to array](https://github.com/earendil-works/pi/pull/7904)**  
  Closed. Makes the edit tool accept `{oldText, newText}` as a single object or JSON string, fixing models that do not wrap edits in an array.

- **[#7901 — feat(ai): AI Gateway transport over the Cloudflare AI binding](https://github.com/earendil-works/pi/pull/7901)**  
  Open. Implements feature request [#7838](https://github.com/earendil-works/pi/issues/7838) and enables Pi apps inside Cloudflare Workers to route through AI Gateway via `env.AI.run`.

- **[#7913 — feat(tui): add fullscreen transcript search](https://github.com/earendil-works/pi/pull/7913)**  
  Open. Adds `Ctrl+Shift+f` transcript search in fullscreen mode. A highly requested TUI quality-of-life feature.

- **[#7918 — fix(plan-mode): make progress tracking robust and tolerant](https://github.com/earendil-works/pi/pull/7918)**  
  Closed. Hardens the plan-mode example extension so steps are checked off more reliably, including reading `thinking` blocks. Fixes [#7919](https://github.com/earendil-works/pi/issues/7919).

- **[#7887 — fix: add trailing newline after current working directory](https://github.com/earendil-works/pi/pull/7887)**  
  Closed. Fixes a vanilla system-prompt bug where the first user message could appear directly after the working directory without a newline.

- **[#7897 — fix(coding-agent): inherit subagent session config](https://github.com/earendil-works/pi/pull/7897)**  
  Open. Makes subagents follow the current session’s model/thinking settings instead of the last arbitrary session’s selection.

- **[#7906 — feat(coding-agent): add fullscreen fixed top bar](https://github.com/earendil-works/pi/pull/7906)**  
  Closed. Adds a fullscreen-only fixed bar with abbreviated cwd, git branch, context usage, and auto-compaction state.

- **[#7881 — fix(ai): reject item_* content IDs in message-level input[].id fields](https://github.com/earendil-works/pi/pull/7881)**  
  Closed. Prevents ID namespace confusion in the Responses API between `item_*` content IDs and `msg_*` message-level IDs during streaming.

### 5. Feature Request Trends

- **Fullscreen/TUI polish is the hottest area.** Requests include transcript search ([#7913](https://github.com/earendil-works/pi/pull/7913)), fixed top bar ([#7906](https://github.com/earendil-works/pi/pull/7906)), sticky last-prompt header ([#7802](https://github.com/earendil-works/pi/issues/7802)), responsive footer ([#7884](https://github.com/earendil-works/pi/issues/7884)), and unbound line-scrolling actions ([#7903](https://github.com/earendil-works/pi/pull/7903)). The community is pushing fullscreen mode toward an IDE-like experience.

- **Provider expansion remains a priority.** Cloudflare Workers AI Gateway transport ([#7838](https://github.com/earendil-works/pi/issues/7838), PR [#7901](https://github.com/earendil-works/pi/pull/7901)), Amazon Bedrock Mantle OpenAI Responses support ([#6216](https://github.com/earendil-works/pi/pull/6216)), and Muse Spark via Muse Code ([#7877](https://github.com/earendil-works/pi/pull/7877)) all point to demand for broader model-provider coverage.

- **Better export and documentation.** A three-state tool-output toggle for `/export` ([#7907](https://github.com/earendil-works/pi/issues/7907)) and a proposed `pi.1` man page ([#7888](https://github.com/earendil-works/pi/issues/7888)) show interest in shareable artifacts and CLI discoverability.

- **Extension developer ergonomics.** Users want per-message identity for markdown transformers ([#7910](https://github.com/earendil-works/pi/pull/7910)), inherited subagent configuration ([#7897](https://github.com/earendil-works/pi/pull/7897)), and better example-extension reliability ([#7918](https://github.com/earendil-works/pi/pull/7918)).

### 6. Developer Pain Points

- **Auth and onboarding flows are brittle.** WSL login hangs ([#6187](https://github.com/earendil-works/pi/issues/6187)), Copilot org-level 429s ([#7850](https://github.com/earendil-works/pi/issues/7850)), and provider API retirements such as AI21 ([#7869](https://github.com/earendil-works/pi/issues/7869)) force manual intervention.

- **Tool-call and schema edge cases are a recurring source of breakage.** Examples include Bedrock empty-key arguments bricking sessions ([#7782](https://github.com/earendil-works/pi/issues/7782)), edit argument shape mismatches ([#7904](https://github.com/earendil-works/pi/pull/7904)), whitespace-sensitive fuzzy matching ([#7836](https://github.com/earendil-works/pi/issues/7836)), and Cloudflare gateway missing `strict:false` ([#7896](https://github.com/earendil-works/pi/issues/7896)).

- **Terminal compatibility is still painful.** Split Alt+Enter can abort tasks ([#7876](https://github.com/earendil-works/pi/issues/7876)), fullscreen mode can corrupt rendering inside embedded terminals ([#7917](https://github.com/earendil-works/pi/issues/7917)), and narrow panes drop context-window visibility ([#7884](https://github.com/earendil-works/pi/issues/7884)).

- **Runtime inconsistencies slow adoption.** Bun users crash on missing `zlib.createZstdDecompress` ([#7846](https://github.com/earendil-works/pi/issues/7846)), global undici `maxHeaderSize` rejects valid responses ([#7791](https://github.com/earendil-works/pi/issues/7791)), and npm search does not index newly published pi-packages ([#7885](https://github.com/earendil-works/pi/issues/7885)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-11

## Today's Highlights
v0.21.9 shipped with native Qoder plugin installation from directories, archives, Git repos, URLs, and npm packages, plus QR-code pairing for Local Control. The community is most engaged around TUI rendering robustness and the evolving multi-agent “fleet” architecture. Several P1/P2 regressions in provider updates and serve-mode ACP handling indicate growing usage of daemon and Web Shell workflows.

## Releases
- **v0.21.9** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.9))  
  Added native support for installing Qoder plugins from directories, archives, Git repos, URLs, and npm packages with automatic system-prompt loading ([#8661](https://github.com/QwenLM/qwen-code/pull/8661)). Enabled Local Control pairing via QR code.
- **v0.21.9-nightly.20260811.8c90697ace** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.9-nightly.20260811.8c90697ace))  
  Added memory tests covering context-refresh marker carry-over across turns ([#8809](https://github.com/QwenLM/qwen-code/pull/8809)).

## Hot Issues
1. **#8124 — Startup banner sometimes missing top lines on first paint** ([link](https://github.com/QwenLM/qwen-code/issues/8124))  
   Intermittent TUI first-paint bug correlated with pending provider updates. 10 comments and the `welcome-pr` label make it an approachable contribution target.

2. **#8718 — RFC: Native coordination for independent Qwen sessions** ([link](https://github.com/QwenLM/qwen-code/issues/8718))  
   The umbrella issue for multi-agent fleet work. Discusses a leader dispatching self-contained workers while remaining interactive.

3. **#8557 — Shrinking terminal reprints transcript blocks in scrollback** ([link](https://github.com/QwenLM/qwen-code/issues/8557))  
   Duplicate transcript output on macOS/Warp when the terminal is resized. Tied to the broader resize/wake rendering bug.

4. **#8871 — ACP child process fails with “Unknown argument: acp” in serve mode** ([link](https://github.com/QwenLM/qwen-code/issues/8871))  
   Breaks `qwen serve` with the default HTTP bridge and causes 401 auth failures. Important for everyone using daemonized ACP sessions.

5. **#8863 — Built-in provider update silently overwrites model.name and model.baseUrl** ([link](https://github.com/QwenLM/qwen-code/issues/8863))  
   P1 regression from #5819: selecting “Update all” overwrites the current model with the provider’s first built-in model and clears base URL.

6. **#8885 — Rewind indexes misaligned with automatic user-role history entries** ([link](https://github.com/QwenLM/qwen-code/issues/8885))  
   P1 session-management bug affecting cron prompts, background notifications, and stop continuations during rewind.

7. **#8678 — Preserve current session when large restore times out** ([link](https://github.com/QwenLM/qwen-code/issues/8678))  
   P1 serve reliability issue. Partial fix landed in [#8691](https://github.com/QwenLM/qwen-code/pull/8691), but timeout-safe session preservation is still being tracked.

8. **#8860 — OpenAI API logs grow without bound** ([link](https://github.com/QwenLM/qwen-code/issues/8860))  
   `logs/openai` has no rotation or retention; observed ~95 GB / 340k files in two months. High operational risk for users enabling OpenAI logging.

9. **#8888 — Autofix pushes cancel in-progress review-pr, creating a self-reinforcing loop** ([link](https://github.com/QwenLM/qwen-code/issues/8888))  
   CI automation on bot-authored PRs enters a cancel/retry loop when autofix pushes trigger `pull_request_target: synchronize`.

10. **#8835 — Repo-hygiene 2026-W33 report-only findings** ([link](https://github.com/QwenLM/qwen-code/issues/8835))  
    Security-sensitive report covering path containment issues, including a `startsWith('..')` traversal class in ACP and worktree validation paths.

## Key PR Progress
1. **#8900 — fix(core): sync loaded-skill state with history eviction; add /unskill** ([link](https://github.com/QwenLM/qwen-code/pull/8900))  
   Keeps loaded-skill state consistent when history entries are evicted and adds a user-facing `/unskill` command.

2. **#8848 — feat(web-shell): redesign Channel policy and workspace management** ([link](https://github.com/QwenLM/qwen-code/pull/8848))  
   Exposes shared channel access, session isolation, and workspace-ownership controls for Web Shell adapters.

3. **#8817 — feat: support fork from any conversation** ([link](https://github.com/QwenLM/qwen-code/pull/8817))  
   Allows branching from an earlier assistant response rather than only the latest active session state.

4. **#8677 — feat(tui): OpenTUI renderer backend (react track)** ([link](https://github.com/QwenLM/qwen-code/pull/8677))  
   Large TUI rewrite targeting flicker-free rendering and first-class mouse support.

5. **#8831 — fix(cli): eliminate banner duplication and drag flicker on resize/wake** ([link](https://github.com/QwenLM/qwen-code/pull/8831))  
   Addresses the scrollback duplication and resize artifacts investigated in #8557.

6. **#8687 — feat(daemon): guard cross-worktree Git mutations** ([link](https://github.com/QwenLM/qwen-code/pull/8687))  
   Blocks model-issued git commands that escape the session workspace via `-C`, `--work-tree`, or `--git-dir`.

7. **#8675 — feat(web-shell): add model-specific reasoning controls** ([link](https://github.com/QwenLM/qwen-code/pull/8675))  
   Adds a reasoning-controls registry spanning Core, ACP, daemon, SDK, and Web Shell, with initial support for `qwen3.*`.

8. **#8894 — feat(review): capture-tui — rendering claims get pixels, not prose** ([link](https://github.com/QwenLM/qwen-code/pull/8894))  
   Uses a private tmux server to capture the code under review exactly as rendered, giving verifiers pixel-based evidence.

9. **#8874 — feat(web-shell): support workspace file uploads** ([link](https://github.com/QwenLM/qwen-code/pull/8874))  
   Adds file uploads from the Web Shell composer with progress, cancellation, conflict renaming, and inline file references.

10. **#8891 — feat(web-shell): share session catalog scheduling** ([link](https://github.com/QwenLM/qwen-code/pull/8891))  
    Isolates session-list queries per daemon client and limits list concurrency, reducing Web Shell polling overhead.

## Feature Request Trends
- **Native multi-agent “fleet” mode** is the clearest roadmap signal. Umbrella RFC [#8718](https://github.com/QwenLM/qwen-code/issues/8718) is broken into stages: [#8840](https://github.com/QwenLM/qwen-code/issues/8840), [#8841](https://github.com/QwenLM/qwen-code/issues/8841), [#8842](https://github.com/QwenLM/qwen-code/issues/8842), and [#8843](https://github.com/QwenLM/qwen-code/issues/8843).
- **Web Shell management surfaces** are increasingly requested: channel policy, session isolation, and workspace ownership ([#8845](https://github.com/QwenLM/qwen-code/issues/8845)).
- **Serve-mode defaults** lean toward workspace-scoped project memory ([#8854](https://github.com/QwenLM/qwen-code/issues/8854)) and safer session restore behavior ([#8678](https://github.com/QwenLM/qwen-code/issues/8678)).
- **Terminal UX polish** remains popular: `/clear` should report blocking background tasks ([#8741](https://github.com/QwenLM/qwen-code/issues/8741)), and `@` completion tabs should work with bare arrow keys ([#8576](https://github.com/QwenLM/qwen-code/pull/8576)).

## Developer Pain Points
- **TUI rendering fragility**: banner truncation, scrollback duplication on resize, and input-box jitter keep surfacing ([#8124](https://github.com/QwenLM/qwen-code/issues/8124), [#8557](https://github.com/QwenLM/qwen-code/issues/8557), [#8849](https://github.com/QwenLM/qwen-code/issues/8849)).
- **Provider updates clobber user settings**: silent overwrites of `model.name` and `model.baseUrl` ([#8863](https://github.com/QwenLM/qwen-code/issues/8863)) and repeated update prompts ([#8504](https://github.com/QwenLM/qwen-code/issues/8504)).
- **Serve-mode permission mismatches**: ACP argument failures ([#8871](https://github.com/QwenLM/qwen-code/issues/8871)), same-host read/write boundary issues ([#8618](https://github.com/QwenLM/qwen-code/issues/8618), [#8851](https://github.com/QwenLM/qwen-code/issues/8851)), and `.env` trust evaluated too early ([#8643](https://github.com/QwenLM/qwen-code/issues/8643)).
- **Session restore/transcript inconsistencies**: scheduled prompts missing after restore ([#8837](https://github.com/QwenLM/qwen-code/issues/8837)) and rewind index mismatches ([#8885](https://github.com/QwenLM/qwen-code/issues/8885)).
- **Operational hygiene**: unbounded OpenAI API logs ([#8860](https://github.com/QwenLM/qwen-code/issues/8860)) and CI bot cancellation loops ([#8888](https://github.com/QwenLM/qwen-code/issues/8888)) add avoidable maintainer overhead.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-11

## Today's Highlights

The project is in a consolidation-and-ship phase: the v0.9.6 release PR was closed, and a subagent recursion-depth bug was fixed via PR #5317. The long-running command-boundary refactor EPIC (#2870) is closed, while the team has opened a new umbrella EPIC for TUI crate decomposition (#5316).

## Releases

No new release was published in the last 24 hours. The closest release activity is the closed **chore(release): ship v0.9.6** PR (#5315), describing v0.9.6 as a subtractive release with fewer runtime guards, one stable base prompt, truthful provider endings, and a smaller compaction path that preserves provider state.

## Hot Issues

Only 3 issues were updated in the last 24 hours; all are listed below.

- **[#2870 — EPIC: staged command-boundary refactor for #2791 [CLOSED]**](https://github.com/Hmbown/CodeWhale/issues/2870)  
  The umbrella issue tracked the command-boundary refactor as smaller mergeable layers, with a reference proof PR in #2851. It accumulated 20 comments and has now been closed, signaling the staged refactor is complete.

- **[#5253 — bug(subagents): nested max_depth can widen the root session depth budget [CLOSED]**](https://github.com/Hmbown/CodeWhale/issues/5253)  
  A descendant subagent could bypass the root session's recursion budget by supplying an explicit `max_depth` on a nested spawn. The bug was fixed by PR #5317. Low discussion volume, but it is an important safety-related correction for agent recursion limits.

- **[#5316 — EPIC-005: CodeWhale TUI Crate Decomposition [OPEN]**](https://github.com/Hmbown/CodeWhale/issues/5316)  
  A new umbrella EPIC tracking the TUI crate decomposition. It is open and has no comments yet, but it is expected to aggregate all sub-EPICs, feature work, and PRs. This is the main architectural direction to watch.

## Key PR Progress

Only 4 PRs were updated in the window; all are listed below.

- **[#5277 — build(deps): bump docker/login-action from 4.5.2 to 4.6.0 [OPEN]**](https://github.com/Hmbown/CodeWhale/pull/5277)  
  Dependabot PR updating the GitHub Action `docker/login-action` to v4.6.0, which includes CI hardening changes.

- **[#5317 — fix(subagents): cap nested max_depth by inherited budget [CLOSED]**](https://github.com/Hmbown/CodeWhale/pull/5317)  
  Fixes #5253. The explicit-`max_depth` arm now applies `inherited.min(..)`, matching the existing profile-hint arm and preventing nested spawns from widening recursion beyond the root session's chosen budget.

- **[#5300 — refactor(core): own primary request preparation [CLOSED]**](https://github.com/Hmbown/CodeWhale/pull/5300)  
  Replaces the unused synthetic `ChatRequest` scaffold in `codewhale-core` with the production `MessageRequest` DTO family previously owned by the TUI crate. Adds a pure `prepare_primary_turn_request` constructor and routes production and test paths through it.

- **[#5315 — chore(release): ship v0.9.6 [CLOSED]**](https://github.com/Hmbown/CodeWhale/pull/5315)  
  Release-prep PR for v0.9.6. Notes that release state is tracked in the private `codewhale-ops` release ledger rather than a public issue.

## Feature Request Trends

The current issue set is not oriented around new end-user features; the dominant themes are architectural:

- **Crate decomposition**: TUI code is being split and the core crate is absorbing responsibility for request/DTO preparation (#5316, #5300).
- **Command-boundary refactoring**: The completed #2870 EPIC shows a preference for staged, mergeable refactors over single large changes.
- **Subagent safety**: Recursion/depth budget semantics are being hardened, particularly around inherited limits (#5253, #5317).

## Developer Pain Points

- **Subagent depth semantics are subtle**: Explicit `max_depth` overrides were able to widen the inherited root budget, which creates confusing recursion risk for operators configuring per-session limits.
- **Large refactors need explicit breakdowns**: The team relies on EPIC tracking and layered PRs to keep command-boundary work reviewable; this is a recurring process constraint.
- **Release visibility is limited**: Release state is tracked in a private ledger rather than a public issue, making it harder for the community to trace release progress.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*