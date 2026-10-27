# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 03:12 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date:** 2026-08-05 | **Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is entering a **reliability-and-hardening phase** after a period of rapid feature expansion. Releases today range from security fixes (Claude Code v2.1.222, Gemini CLI security P1s) to incremental alpha iterations (Codex shipping four Rust alphas in 24 hours). Across all nine trackers, the dominant themes are **context-window degradation at scale**, **cross-platform desktop/terminal reliability**, and **agent-orchestration correctness** — subagents that hang, misreport success, or bypass permission gates. Simultaneously, a convergence is visible around the **Agent Client Protocol (ACP)** as an integration standard, and around **BYOK/local-model support** as a community-driven requirement. The ecosystem is maturing from "demo-quality" agents to infrastructure that enterprises can trust with long-running, multi-step, security-sensitive workflows.

---

## 2. Activity Comparison

| Tool | Issues Surfaced | PRs Surfaced | Release Status |
|---|---|---|---|
| **Claude Code** | 10 hot (top: 335 👍 / 226 comments) | 10 key PRs | ✅ v2.1.222 (security fixes) |
| **OpenAI Codex** | 10 hot (top: 917 👍 Linux desktop) | 10 key PRs | ✅ 4× rust-v0.147.0-alpha builds |
| **Gemini CLI** | 10+ (50 issues triaged) | 10+ (26 PRs total) | ⏸️ None (heavy triage day) |
| **Copilot CLI** | 10 hot | 2 PRs (both open, minimal) | ✅ v1.0.79-1 (breaking sandbox rename) |
| **Kimi Code CLI** | 6 issues | 3 PRs | ⏸️ None |
| **OpenCode** | 10 hot | 10 key PRs | ✅ v1.18.13 (TUI/Desktop polish) |
| **Pi** | 10 hot (top: 18 👍 compaction) | 10 key PRs | ⏸️ None (0.83-cycle fixes in flight) |
| **Qwen Code** | 10 hot | 10 key PRs | ✅ v0.21.6-preview.0 + nightly |
| **DeepSeek TUI** | 10 of 15 | 10 of 29 | ⏸️ None (v0.9.4 train, 77 commits ahead) |

*Counts reflect digest-surfaced items, not total tracker volume. Gemini CLI reported 50 issues/26 PRs triaged; DeepSeek TUI has 29 open PRs.*

---

## 3. Shared Feature Directions

| Direction | Tools | Specific Needs |
|---|---|---|
| **Persistent memory & context management** | Claude, Gemini, Kimi, Copilot, Qwen, Pi, DeepSeek | Configurable memory systems (Kimi #1283), Auto Memory liveness/redaction (Gemini #26522/#26525), compaction model control (Pi #7553), silent 128K fallback warnings (DeepSeek #5244), transcript loss after abort (Qwen #8356) |
| **Cross-platform reliability** | Claude, Codex, Copilot, Kimi, Pi, Qwen, OpenCode | Windows MSIX crashes (Claude #53247), Linux desktop demand (Codex #11023, 917 👍), WSL2 input/keybinding issues (Copilot #4328, OpenCode #20234), IME duplication (Kimi #2584), Windows path bugs (Pi #6817), maintainer-driven Windows survey (Pi #7547) |
| **Local/self-hosted model endpoints** | Codex, Gemini, Copilot, Pi, Kimi | SGLang + OpenAI-compatible endpoints (Gemini #28681), BYOK/custom providers (Copilot #4139), new router integrations (Pi #7571/#7610), hardcoded model IDs breaking custom providers (Codex #37009) |
| **Subagent orchestration correctness** | Gemini, Claude, OpenCode, DeepSeek | Hangs on trivial tasks (Gemini #21409), MAX_TURNS misreported as GOAL success (Gemini #22323), per-agent effort ignored (Claude #64706), hangs after fast tool calls (OpenCode #33028), checkpoint resume (DeepSeek #5242) |
| **ACP protocol maturation** | Kimi, Qwen, DeepSeek, OpenCode | Model discovery/mid-session switching (Kimi #2583), permission-mode switching (Kimi #2364), JetBrains parity gap (Qwen #8544), tool execution over ACP (DeepSeek #5225), cache-write accounting (OpenCode #40450) |
| **Security hardening** | Gemini, Copilot, Claude, Qwen, DeepSeek | SSRF via DNS rebinding (Gemini #28557), shell variable-expansion bypass (Gemini #28691), sandbox opt-out demand (DeepSeek #4955), policy fail-closed on valid enums (Copilot #4349), credential leak in sanitizer (Qwen #8136) |
| **Session/state integrity** | OpenCode, Qwen, Pi, Kimi, Codex | Destructive SQLite migration (OpenCode #30963), OAuth refresh lock freeze (Pi #7508), session-resume regression (Codex #31754), abnormal exit on advance (Kimi #2587) |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Security isolation, plugin/hook tooling, multi-account enterprise workflows | Enterprise teams, plugin developers | Worktree-isolated sessions, hook system with strict auto-allow gating; slower, deliberate release cadence |
| **OpenAI Codex** | Cross-platform desktop, rapid Rust iteration, IDE integration | Desktop-app users, VS Code/Cursor developers | Rust rewrite with 4× daily alpha builds; concurrent exec-server dispatch; OpenAI model ecosystem (GPT-5.x) |
| **Gemini CLI** | Agent-orchestration correctness, security posture, eval infrastructure | Google-centric devs, multi-agent workflow users | Aggressive P1 security response; 76 behavioral eval tests across 6 models; AST-aware tooling epics |
| **Copilot CLI** | GitHub/enterprise integration, plugin skills, managed policy | GitHub Enterprise orgs, Copilot subscribers | Tight coupling to GitHub platform; sandbox via config settings; notably slow PR throughput (2 PRs) |
| **Kimi Code CLI** | ACP ecosystem leadership, long-context agentic work | ACP client users, Moonshot model users | Smallest community but protocol-forward; ~500K context reliability cliff identified |
| **OpenCode** | TUI/Desktop UX polish, multi-provider breadth, data safety | Open-source tinkerers, multi-model power users | 4× weekly releases; provider-agnostic; focuses on billing/schema edge cases across many backends |
| **Pi** | Embeddable agent core, provider aggregation, terminal rendering | Embedded/headless consumers, proxy/router users | RPC/socket surface expansion; "server session backend" (JSONL persistence); Mermaid/iTerm2 rendering |
| **Qwen Code** | Daemon-scale governance, ACP/JetBrains parity, omni input | Managed deployments, JetBrains users | Memory observability vs. real denominators; group-pairing channels; nightly + preview dual channel |
| **DeepSeek TUI** | Build performance, sandbox flexibility, multi-provider credential UX | OSS contributors, DeepSeek/GLM users | Monolith-splitting epic (#5245–#5249); Seatbelt sandbox with opt-out demand; 29-PR pipeline |

---

## 5. Community Momentum & Maturity

- **Most active communities:** **OpenAI Codex** shows the strongest demand signal (917 👍 on Linux desktop; 387 👍 on macOS performance) and the fastest iteration cadence (4 alpha builds/day). **Claude Code** has the deepest engagement per issue (335 👍 / 226 comments on multi-account connectors) and the largest enterprise-focused surface.
- **Fastest security response:** **Gemini CLI** triaged 50 issues and 26 PRs in a day, landing or advancing two P1 security fixes (SSRF, shell-substitution bypass) within 24 hours — a notable operational tempo.
- **Rapid iteration:** **Qwen Code** (preview + nightly same-day), **OpenCode** (v1.18.13 with 10 PRs), and **Codex** lead on shipping velocity. **Copilot CLI** is the slowest mover (2 open PRs, 1 release with a breaking change that silently ignored an old config key).
- **Emerging but credible:** **DeepSeek TUI** punches above its size (29 PRs, owner-authored epics) but signals an internal build-system crisis; **Kimi Code CLI** is small (6 issues/3 PRs) yet protocol-forward on ACP.
- **Maturity signals:** Pi's compaction-failure cluster (3 issues, 18 👍) and Claude's memory-leak issue (#21378) both indicate the ecosystem is now being used for **long-running production workloads** where hours-long sessions and cost predictability matter.

---

## 6. Trend Signals

1. **Context-window reliability is the new competitive frontier.** Multiple tools hit concrete degradation boundaries this week: Kimi at ~500K tokens (loops/drift), DeepSeek's silent 128K fallback for 1M models, Gemini's `/compress` state corruption, and Pi's expensive reasoning-model compaction. Expect **configurable compaction models, deterministic memory redaction, and loud degradation warnings** to become table stakes.
2. **Security is catching up to agent capability.** Within one day: two Gemini P1 security fixes, a Claude worktree-isolation fix, a Copilot sandbox-setting rename, and a Qwen credential-leak report. Attack surfaces to watch: **SSRF via DNS resolution, shell variable expansion, sanitizer leaks, and hook bypasses**.
3. **BYOK/local inference is a cross-community demand.** Gemini's SGLang/OpenAI-compatible PR, Copilot's BYOK requests, Pi's router-provider additions, and Codex's hardcoded-model bug all point to users wanting **provider neutrality** — with privacy, cost, and offline workflows as drivers.
4. **Windows/Linux parity is the largest unaddressed gap.** Windows is the loudest pain cluster in every tool's tracker (crashes, IME issues, WSL2 input bugs, path handling). **Linux desktop support** is the single most-upvoted Codex request. Decisions on cross-platform investment will shape adoption outside the macOS-centric developer default.
5. **ACP is becoming the interoperability standard.** Kimi, Qwen, DeepSeek, and OpenCode are all actively building ACP features (model discovery, permission switching, tool execution, usage accounting). Tools that lag on ACP parity — Qwen's JetBrains gap being the clearest example — will feel pressure from IDE/editor integration.
6. **Silent failure is the worst failure mode.** The most corrosive bugs this week are ones that **report success while doing nothing**: DeepSeek's fake file-edit success, Gemini's MAX_TURNS-as-GOAL, OpenCode's stuck-with-no-response, and Claude's dropped hook output. For agentic workflows, **observability and truthful status propagation** are becoming core differentiators.
7. **Enterprise governance is under-served.** Copilot's policy fail-closed bug (#4349), Claude's multi-account connector request, and enterprise memory/auth failures (Copilot #4005, Pi's Copilot Enterprise compaction cluster) indicate that **multitenant, policy-managed deployments** are a growing but still-fragile use case.

---

### Bottom Line for Decision-Makers

- **If you prioritize security and enterprise isolation:** Claude Code's worktree/hook hardening is the most mature, but Gemini CLI is closing fastest.
- **If you need cross-platform desktop + IDE workflows:** Codex has the most momentum but the least stability right now (alpha cadence, macOS/Windows regressions).
- **If you run long, context-heavy agentic tasks:** No tool fully solves this yet — watch Kimi's 500K cliff, DeepSeek's context fallback, and Gemini's `/compress` fixes closely.
- **If you build tools on top of agents:** ACP support is the emerging standard; Kimi, Qwen, and DeepSeek are the most protocol-forward, while Pi's RPC/embedding surface offers the most headless flexibility.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-05

## 1. Top Skills Ranking

Ordered by community attention in the provided PR dataset. All PRs are currently **open**.

1. **[#1298 — fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)**  
   *Status: Open*  
   Fixes the skill-creator eval harness, which reports `recall=0%` for every description and causes the optimization loop to tune against noise. Also addresses Windows stream reading, trigger detection, and parallel workers. This is the most-attended PR because it directly blocks reliable skill description optimization.

2. **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**  
   *Status: Open*  
   Adds typographic quality control for generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Discussion highlights that these issues affect nearly every AI-generated document and are rarely requested by users.

3. **[#538 — fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)**  
   *Status: Open*  
   Fixes 8 case mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). This breaks PDF skill references on case-sensitive filesystems, making it a small but high-impact reliability fix.

4. **[#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486)**  
   *Status: Open*  
   Adds OpenDocument support: create, fill, read, and convert `.odt`/`.ods` files, including ODT-to-HTML conversion. Strong interest from users needing ISO-standard, enterprise document workflows.

5. **[#210 — Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**  
   *Status: Open*  
   Revises the frontend-design skill so every instruction is executable within one conversation and specific enough to steer behavior without over-constraining output. Discussion centered on making design guidance operational rather than descriptive.

6. **[#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)**  
   *Status: Open*  
   Proposes two meta-skills: one evaluating skill structure/docs/quality, and one evaluating security. This directly addresses community concerns about trust and safety in the skills ecosystem.

7. **[#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)**  
   *Status: Open*  
   Fixes DOCX corruption caused by shared OOXML `w:id` ID space collisions between tracked changes and existing bookmarks. Important for reliable tracked-change editing in generated Word documents.

8. **[#539 — fix(skill-creator): warn on unquoted description with YAML special characters](https://github.com/anthropics/skills/pull/539)**  
   *Status: Open*  
   Adds pre-parse validation in `quick_validate.py` to detect unquoted `description` fields containing `:`. Prevents silent YAML truncation and split-key failures in skill frontmatter.

---

## 2. Community Demand Trends

From the most-commented Issues, the community is asking for:

- **Security, trust boundaries, and governance**  
  [#492: Community skills under `anthropic/` namespace enable trust boundary abuse](https://github.com/anthropics/skills/issues/492) — 43 comments  
  [#1175: Security/context concerns for SharePoint Online via Agent Skills](https://github.com/anthropics/skills/issues/1175)  
  [#412: Skill proposal: agent-governance — safety patterns for AI agent systems](https://github.com/anthropics/skills/issues/412)

- **Context-window and memory efficiency**  
  [#1487: `claude-api` skill injects ~156k tokens](https://github.com/anthropics/skills/issues/1487)  
  [#1329: compact-memory — symbolic notation for compact agent state](https://github.com/anthropics/skills/issues/1329)

- **Reliable skill-authoring tooling**  
  [#556: `run_eval.py` never triggers skills — 0% trigger rate](https://github.com/anthropics/skills/issues/556)  
  [#1169: skill-creator recall=0% including slash-command queries](https://github.com/anthropics/skills/issues/1169)  
  [#1061: Windows compatibility failures in skill-creator scripts](https://github.com/anthropics/skills/issues/1061)  
  [#202: skill-creator should be updated to best practice](https://github.com/anthropics/skills/issues/202)

- **Enterprise sharing and plugin hygiene**  
  [#228: Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228)  
  [#189: `document-skills` and `example-skills` install identical content](https://github.com/anthropics/skills/issues/189)

- **Interoperability and platform support**  
  [#29: Usage with AWS Bedrock](https://github.com/anthropics/skills/issues/29)  
  [#16: Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16)

---

## 3. High-Potential Pending Skills

These open PRs are still active and may land soon:

- **[#1479 — Add plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)**  
  *Open, updated 2026-07-27*  
  Addresses planning-artifact lifecycle: a skill for cleaning up and managing accumulated planning files. Directly responds to issue #1417.

- **[#1302 — Add color-expert skill](https://github.com/anthropics/skills/pull/1302)**  
  *Open, updated 2026-07-21*  
  Self-contained color expertise: naming systems, color spaces, and “what to use when” guidance for OKLCH, OKLAB, CAM16, etc.

- **[#525 — Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)**  
  *Open, updated 2026-07-15*  
  Integrates with `pyxel-mcp` for retro/pixel-art/8-bit game development, covering write → run_and_capture → inspect → iterate workflows.

- **[#1367 — Add self-audit skill](https://github.com/anthropics/skills/pull/1367)**  
  *Open, updated 2026-07-02*  
  Mechanical file verification plus a four-dimension reasoning audit gate before delivery; positioned as model- and stack-agnostic.

- **[#723 — Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**  
  *Open, updated 2026-04-21*  
  Covers testing philosophy, unit testing, React component testing, and Testing Library patterns — a broad, practical addition for everyday development work.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **trust and reliability**: secure distribution/governance of skills, dependable skill-creator/eval tooling, and context-efficient execution — while the most active new skill proposals focus on document quality, testing/QA, and agent memory/hygiene.

---

# Claude Code Community Digest — 2026-08-05

## Today's Highlights

Anthropic shipped v2.1.222 with two security-focused fixes: worktree-isolated sessions can no longer run destructive git commands against the main checkout, and PreToolUse auto-allow hooks can no longer bypass tool restrictions in background agent tasks. Meanwhile, community attention is split between a long-running feature request for multi-account Connector support and a growing cluster of Windows/MSIX crash reports. The repo also saw a burst of plugin-dev tooling PRs aimed at hardening hook-testing and duplicate-maintenance scripts.

## Releases

- [v2.1.222](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)
  - Fixed worktree-isolated sessions and subagents being able to run destructive git commands against the main checkout. Isolation now applies to file edits and Bash in every session type.
  - Fixed PreToolUse auto-allow hooks bypassing tool restrictions in background agent tasks.

## Hot Issues

1. [Support multiple Connector accounts for the same connector in Claude Code](https://github.com/anthropics/claude-code/issues/27302) — The most active open request (226 comments, 335 👍). Users need different accounts with the same connector for multitenant workflows, and the thread shows sustained demand.
2. [Repeated "Image couldn't be processed" errors consuming usage limit](https://github.com/anthropics/claude-code/issues/62466) — 30 comments. Failed image-processing API calls appear to count against quota, making the bug expensive for users.
3. [Claude Desktop fails to launch on Windows; orphaned Silo / Job Object after crash](https://github.com/anthropics/claude-code/issues/53247) — 13 comments. Only logoff or reboot recovers, making this a severe desktop reliability issue.
4. [Claude accesses git origin server on startup before any commands are issued](https://github.com/anthropics/claude-code/issues/21108) — 13 comments. A security/privacy concern for users with restricted or monitored networks; reproducible on Linux.
5. [Desktop Browser pane crashes the whole app with GPU process exit code 101457950](https://github.com/anthropics/claude-code/issues/81275) — 11 comments. Reproduced on Intel, NVIDIA, and WARP rendering, suggesting a common Chromium integration issue.
6. [🚨 CRITICAL: Memory leak causes freeze after 20+ minutes (15GB RAM consumption)](https://github.com/anthropics/claude-code/issues/21378) — 8 comments. Long-running CLI sessions can become unusable; still open and frequently referenced.
7. [MCP Microsoft 365 connector rejects personal Microsoft accounts](https://github.com/anthropics/claude-code/issues/53408) — 7 comments. Hotmail/Outlook/Live users are blocked during OAuth, limiting a bundled connector.
8. [Read tool falsely reports unencrypted pandoc/LaTeX PDFs as "password-protected"](https://github.com/anthropics/claude-code/issues/66563) — 6 comments. The tool refuses valid PDFs with a misleading error, forcing unnecessary user work.
9. [Agent tool ignores `effort:` frontmatter in subagent .md files](https://github.com/anthropics/claude-code/issues/64706) — 5 comments. Subagents inherit global effort settings instead of their declared per-agent effort, reducing fine-grained control.
10. [claude-in-chrome MCP can't distinguish two Chrome profiles](https://github.com/anthropics/claude-code/issues/74902) — 3 comments. Generic "Browser 1/2" names create wrong-profile risk for users managing multiple browser profiles.

## Key PR Progress

1. [fix(plugin-dev): limit frontmatter parsing](https://github.com/anthropics/claude-code/pull/84004) — Parses only the opening YAML frontmatter block and rejects files without proper markers, avoiding false parsing of later `---` horizontal rules.
2. [fix(scripts): propagate top-level failures](https://github.com/anthropics/claude-code/pull/84003) — Duplicate-maintenance scripts now return a failing process status when top-level rejects occur, instead of swallowing errors.
3. [fix(scripts): validate gh flag values](https://github.com/anthropics/claude-code/pull/83999) — Rejects incomplete `gh` commands like `gh issue list --limit` in the restricted wrapper, closing an argument-validation bypass.
4. [fix(scripts): validate label option values](https://github.com/anthropics/claude-code/pull/83995) — Ensures `--add-label` and `--remove-label` receive actual label names, preventing unbound-variable aborts.
5. [fix(scripts): reject self-referential duplicates](https://github.com/anthropics/claude-code/pull/83993) — Stops `comment-on-duplicates.sh` from proposing the triggering issue as a duplicate of itself.
6. [fix(plugin-dev): assert expected hook decision](https://github.com/anthropics/claude-code/pull/83992) — Fixes #83800 by adding `--expect allow|deny|ask` to `test-hook.sh`, so tests can catch hooks that allow operations they should deny.
7. [fix(plugin-dev): report missing jq dependency](https://github.com/anthropics/claude-code/pull/83990) — Fixes #83802. Missing `jq` is now reported clearly instead of being misdiagnosed as invalid JSON.
8. [Create pylint.yml](https://github.com/anthropics/claude-code/pull/83890) — Adds a pylint workflow; no extended description provided.
9. [docs(plugin-dev): document MessageDisplay streaming semantics](https://github.com/anthropics/claude-code/pull/83374) — Documents the `MessageDisplay` hook event in the bundled plugin-development skill, including trigger descriptions and quick-reference tables.
10. [Fix/83484 symlink path expansion](https://github.com/anthropics/claude-code/pull/83738) — Fixes #83484 by ensuring the Claude symlink target is created from an expanded home directory path instead of a literal `%h` placeholder.

## Feature Request Trends

- **Multi-account and profile identity support**: The top request remains [multiple Connector accounts for the same connector](https://github.com/anthropics/claude-code/issues/27302). Users also want reliable [Chrome profile identification](https://github.com/anthropics/claude-code/issues/74902) and [cross-machine device identity for Claude in Chrome](https://github.com/anthropics/claude-code/issues/77605).
- **Configurable hook/plugin behavior**: Developers are asking for tunable infrastructure rather than hardcoded limits, including a [configurable `persistHookOutput` threshold](https://github.com/anthropics/claude-code/issues/84022) and [custom skill directories in settings.json](https://github.com/anthropics/claude-code/issues/84014).
- **Model persistence/control**: Some users want a [model persistence option](https://github.com/anthropics/claude-code/issues/84020) to prevent Claude from switching away from the model they selected, particularly in security-sensitive work.

## Developer Pain Points

- **Windows/MSIX desktop reliability is the loudest cluster**: Repeated GPU-process crashes, updater lock failures, and orphaned Silo/Job Object issues are forcing full reboots. Representative reports include [#53247](https://github.com/anthropics/claude-code/issues/53247), [#81275](https://github.com/anthropics/claude-code/issues/81275), [#83130](https://github.com/anthropics/claude-code/issues/83130), and [#84005](https://github.com/anthropics/claude-code/issues/84005).
- **Silent context/data loss**: Hook output over 10K is [dropped with zero signal](https://github.com/anthropics/claude-code/issues/84021), and PostToolUse `additionalContext` can be [re-serialized between turns, invalidating the prompt cache](https://github.com/anthropics/claude-code/issues/81077). Both are high-cost issues for memory/plugin users.
- **Authentication and telemetry plumbing failures**: Recurring auth-related bugs include the [Microsoft 365 connector rejecting personal accounts](https://github.com/anthropics/claude-code/issues/53408), [Notion MCP "Invalid authorization request" errors](https://github.com/anthropics/claude-code/issues/84025), and [missing OTLP headers in the telemetry exporter](https://github.com/anthropics/claude-code/issues/82024).
- **Quota and session-limit confusion**: Users are reporting unexplained [session limits](https://github.com/anthropics/claude-code/issues/84026) and API errors that [consume usage limits](https://github.com/anthropics/claude-code/issues/62466), making cost behavior hard to predict.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-05

## Today's Highlights

Codex shipped another round of Rust CLI alpha builds under `0.147.0`, continuing a fast iteration cadence. Community attention is still heavily focused on cross-platform desktop support and system-level performance issues, while the latest PRs center on custom-tool discovery, skill/plugin cache correctness, and exec-server concurrency.

## Releases

Four `rust-v0.147.0-alpha` releases were published in the last 24 hours. No detailed changelogs were attached, so these appear to be incremental alpha refinements:

- [rust-v0.147.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.7)
- [rust-v0.147.0-alpha.6.4](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.4)
- [rust-v0.147.0-alpha.6.3](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.3)
- [rust-v0.147.0-alpha.6.1](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.1)

## Hot Issues

- [openai/codex#11023](https://github.com/openai/codex/issues/11023) — **Codex desktop app for Linux** (open, 199 comments, 917 👍). The most-supported feature request in the tracker. Users need a Linux desktop build, especially after macOS power/performance issues made the app difficult to use.
- [openai/codex#25719](https://github.com/openai/codex/issues/25719) — **macOS `syspolicyd` / `trustd` CPU and memory runaway** (open, 81 comments, 387 👍). Codex Desktop triggers OS security daemons, causing severe performance and battery problems on Apple Silicon.
- [openai/codex#13041](https://github.com/openai/codex/issues/13041) — **WebSocket upgrade succeeds then closes with 1008 Policy** (closed, 74 comments, 170 👍). Connection reliability issue causing reconnect loops and HTTPS fallback; drew heavy community discussion.
- [openai/codex#5999](https://github.com/openai/codex/issues/5999) — **Weekly limit reset date changed unexpectedly** (closed, 43 comments, 17 👍). Users want clearer, more predictable quota/reset visibility.
- [openai/codex#31846](https://github.com/openai/codex/issues/31846) — **GPT-5.3 Codex Spark fails with “Unsupported parameter: reasoning.summary”** (closed, 35 comments, 37 👍). Model/API parameter mismatch that blocked Spark users in the desktop app.
- [openai/codex#9926](https://github.com/openai/codex/issues/9926) — **Interactive `ask_user_question` tool** (closed, 27 comments, 48 👍). Strong interest in structured, constrained clarifying questions instead of free-form chat back-and-forth.
- [openai/codex#25928](https://github.com/openai/codex/issues/25928) — **Submitted prompts randomly disappear before entering queue in VS Code/Cursor** (open, 23 comments, 16 👍). IDE extension reliability issue that interrupts real developer workflows.
- [openai/codex#18299](https://github.com/openai/codex/issues/18299) — **Display dotfiles and dot folders in the app file viewer** (closed, 14 comments, 33 👍). Developers need visibility into `.agents`, `.codex`, and other hidden project files.
- [openai/codex#31754](https://github.com/openai/codex/issues/31754) — **CLI 0.143.0 regression: existing conversation fails with “Unknown parameter: input[...].namespace”** (open, 14 comments, 8 👍). Session resume breaks between patch releases, a notable regression for CLI users.
- [openai/codex#37009](https://github.com/openai/codex/issues/37009) — **Memory writer sends hardcoded GPT-5.6 Luna/Terra requests to custom model providers** (open, 3 comments). Newly filed; important for users routing Codex through non-OpenAI providers.

## Key PR Progress

- [openai/codex#36998](https://github.com/openai/codex/pull/36998) — **Support deferred custom tools in tool search**. Top-level freeform tools are now included in the tool-search index and serialized as Responses API `custom` tools.
- [openai/codex#37000](https://github.com/openai/codex/pull/37000) — **Keep shared skill caches fresh across plugin loads**. Caches are now keyed by filesystem/plugin snapshot identity, avoiding stale shared skill data.
- [openai/codex#36993](https://github.com/openai/codex/pull/36993) — **Support `includeTurns` reads for paginated threads**. Reconstructs the legacy full-history view for clients that still read threads with `includeTurns: true`.
- [openai/codex#36992](https://github.com/openai/codex/pull/36992) — **Allow injecting model catalog caches**. Adds a public `ModelsCache` contract so providers can supply custom cache implementations.
- [openai/codex#36987](https://github.com/openai/codex/pull/36987) — **Add opt-in concurrent exec-server request dispatch**. New `--concurrent-requests` flag prevents long-running requests from blocking health checks and cleanup.
- [openai/codex#36990](https://github.com/openai/codex/pull/36990) — **Remove legacy collaboration mode variants**. Drops hidden `PairProgramming` and `Execute` modes, simplifying mode handling to `Default` and `Plan`.
- [openai/codex#36981](https://github.com/openai/codex/pull/36981) — **Enable remote compaction for Amazon Bedrock**. Bedrock is marked v1-only and compaction routes through `/v1/responses/compact`.
- [openai/codex#36976](https://github.com/openai/codex/pull/36976) — **Honor explicit-only orchestrator skills**. Skills with `allow_implicit_invocation: false` are hidden from the model-visible catalog but remain directly invocable.
- [openai/codex#36966](https://github.com/openai/codex/pull/36966) — **Allow disabling the built-in image viewer**. Adds a stable `features.view_image` flag, useful in restricted or embedded environments.
- [openai/codex#36964](https://github.com/openai/codex/pull/36964) — **Preserve working directories when importing external sessions**. Resolves Cursor `empty-window` projectless chats to the correct parent workspace directory.

## Feature Request Trends

- **Linux desktop support remains the top ask** ([#11023](https://github.com/openai/codex/issues/11023)), with continued demand for better cross-platform desktop behavior.
- **Richer agent interaction controls**: the proposed `ask_user_question` questionnaire tool ([#9926](https://github.com/openai/codex/issues/9926)) reflects demand for structured human-in-the-loop workflows.
- **More file explorer transparency**: users want dotfiles and hidden project folders visible in the desktop app ([#18299](https://github.com/openai/codex/issues/18299)).
- **IDE/extension reliability is a growing theme**: lost prompts in VS Code/Cursor ([#25928](https://github.com/openai/codex/issues/25928)) and RPC serialization failures in IDE context ([#34920](https://github.com/openai/codex/issues/34920)) are both high-friction areas.

## Developer Pain Points

- **Windows remains the most painful platform**: WMI/PowerShell polling causes input lag ([#36176](https://github.com/openai/codex/issues/36176)), new project task creation times out ([#33288](https://github.com/openai/codex/issues/33288)), non-ASCII usernames can block app startup ([#13553](https://github.com/openai/codex/issues/13553)), and shell commands have failed with “batch file arguments are invalid” ([#19952](https://github.com/openai/codex/issues/19952)).
- **Desktop performance and OS-level side effects**: macOS `syspolicyd`/`trustd` runaway ([#25719](https://github.com/openai/codex/issues/25719)) and post-crash lag ([#32769](https://github.com/openai/codex/issues/32769)) significantly hurt daily usability.
- **CLI/auth friction**: `OPENAI_API_KEY` silently overriding OAuth tokens ([#15151](https://github.com/openai/codex/issues/15151)), login hangs on Windows ([#8692](https://github.com/openai/codex/issues/8692)), and session-resume regressions ([#31754](https://github.com/openai/codex/issues/31754)) all generate recurring support traffic.
- **Custom provider/model compatibility issues**: the hardcoded GPT-5.6 Luna/Terra memory-writer requests ([#37009](https://github.com/openai/codex/issues/37009)) are a notable problem for non-OpenAI model routing.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the repository saw heavy triage activity across 50 issues and 26 pull requests. The most urgent thread remains **agent reliability**: a long-standing P1 where the generalist agent hangs indefinitely (#21409) continues to draw the highest community reaction (8 👍), while a new security P1 PR (#28691) closes a variable-expansion bypass for GHSA-wpqr-6v78-jr5g. Notably, the security posture is improving fast — SSRF hardening in `web-fetch.ts` (#28557) and OAuth redirect fixes for Cloud Workstations (#28688) are also in flight.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, bug, 12 comments)
   A `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even when it hit the max turn limit before doing any analysis. This actively misleads users and any orchestration logic that trusts subagent status — a correctness issue at the heart of multi-agent workflows. Maintainer-only with `status/need-retesting`; likely a fix is in the retest queue.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, bug, 8 comments, 8 👍)
   The highest-signal community issue: deferring to the generalist agent hangs forever, even for trivial operations like folder creation. Users report waiting up to an hour before cancelling. Workaround exists (explicitly instructing the model to avoid subagents), which points to a subagent orchestration bug rather than a model behavior issue.

3. **[#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, enhancement, 8 comments)
   Proposes letting Gemini 3 models operate as native bash users (chaining POSIX tools) inside a zero-dependency OS sandbox, with post-execution intent routing to preserve security. A thoughtful design discussion on reconciling the model's native tool-use style with safe execution.

4. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, EPIC, 7 comments)
   Follow-up to the original behavioral evals work (#15300). The project now has 76 behavioral eval tests across 6 Gemini models and needs infrastructure to make them robust and component-level. Signals growing maturity in the eval pipeline.

5. **[#22745 — Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, feature, 7 comments)
   Epic exploring AST-aware tools to read method bounds in one call, reduce token noise from misaligned reads, and improve codebase navigation. Directly relevant to agent efficiency and context-window economy.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, bug, 6 comments)
   Anecdotal but resonant: the model has custom "gradle" and "git" skills available but won't invoke them unless explicitly told to. Undermines the value proposition of user-defined skills; likely needs prompt/trigger improvements.

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, bug, 5 comments)
   Auto Memory only marks a session processed when the extraction agent reads the transcript. Low-signal sessions that the agent skips get re-surfaced indefinitely, wasting model calls. A straightforward liveness bug in the memory pipeline.

8. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, security, 4 comments)
   Auto Memory sends local transcript content to the background extraction model before the "redact secrets" instruction runs — redaction happens after content is already in model context. The issue asks for deterministic pre-redaction and reduced logging of existing skill content.

9. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, bug, 4 comments, 3 👍)
   Simple, non-interactive CLI commands hang with the shell shown as active and "Awaiting user input" even after completion. Frequently reported class of terminal hang; P1 severity and multiple reactors suggest wide impact.

10. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, bug, 3 comments)
    After auto-updating to v0.33.0, subagents (e.g., generalist) execute even though agent mode is disabled in all configurations. A permission/configuration regression that erodes user trust in the agent opt-in model.

Also notable: **[#21983 — browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1) and **[#20079 — symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** — both small but indicative of edge-case coverage gaps.

## 4. Key PR Progress

1. **[#28691 — Block $VAR and ${VAR} variable expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28691)** (P1, security, size/l)
   Fixes an incomplete check in `detectBashSubstitution()`/`detectPowerShellSubstitution()` that let variable expansion patterns slip past the security gate from a prior advisory. Includes defense-in-depth hardening of the issue-dedup workflow. High urgency.

2. **[#28557 — Resolve SSRF vulnerability in web-fetch.ts via async DNS resolution](https://github.com/google-gemini/gemini-cli/pull/28557)** (P1, security, size/s)
   `isBlockedHost` only flagged literal IPs; hostnames resolving to `169.254.169.254` (or any internal range) bypassed validation. Switches to `isPrivateIpAsync` — a meaningful SSRF fix for the fetch tool. Fixes #28555.

3. **[#28689 — Unwrap and parse nested gaxios streaming errors from cause message](https://github.com/google-gemini/gemini-cli/pull/28689)** (core fix, size/m)
   Adds a fallback to parse structured Google API errors (rate limits, capacity exhaustion) nested in `error.cause.message` during streaming, so users get accurate error text instead of opaque failures.

4. **[#28639 — Guard formatTruncatedToolOutput against non-positive maxChars](https://github.com/google-gemini/gemini-cli/pull/28639)** (P1, core, size/s)
   Fixes output inflation (~2x) when `maxChars <= 0` due to `String.prototype.slice` negative-index behavior. Includes regression tests. Small bug, real token-cost impact.

5. **[#28641 — Prevent ghost text wrapping infinite loop at narrow widths](https://github.com/google-gemini/gemini-cli/pull/28641)** (P2, CLI, size/s, help wanted)
   Fixes an infinite loop in `getGhostTextLines` when `inputWidth` is narrower than a single CJK/emoji codepoint. Regression test included. Fixes #19985 — a good open-source contribution.

6. **[#28672 — Repair /compress session reload and quota-fallback tool response loss](https://github.com/google-gemini/gemini-cli/pull/28672)** (core/cli, size/m→l, maintainer only)
   Two fixes: `/compress` no longer permanently breaks sessions with "Failed to load resumed session data"; and quota-limit fallback no longer loses tool responses. Directly addresses a widely felt pain point (context compression + quota errors corrupting state).

7. **[#28681 — Add support for SGLang and local OpenAI-compatible endpoints](https://github.com/google-gemini/gemini-cli/pull/28681)** (P1, feature, size/l→xl)
   Opens the door to local/self-hosted inference backends (SGLang and OpenAI-compatible servers). Potentially the most requested feature direction surfacing in community channels — enables offline and privacy-preserving workflows.

8. **[#28664 — Reflect full MCP server config in consent and harden stdio env](https://github.com/google-gemini/gemini-cli/pull/28664)** (MCP, size/l)
   Update consent previously only showed command/args/httpUrl; `env`, `cwd`, and `headers` were neither displayed nor compared when deciding whether to re-prompt. This closes a real security/transparency gap for MCP extension updates.

9. **[#28688 — Dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows](https://github.com/google-gemini/gemini-cli/pull/28688)** (P3, security/auth, size/m→l)
   Fixes OAuth failures inside Cloud Workstations VMs where the static `localhost` redirect breaks because the browser runs on the local machine while the CLI runs in the VM. Improves the hosted-developer experience.

10. **[#28566 — Propagate InvalidStreamError details to UI for specific empty response guidance](https://github.com/google-gemini/gemini-cli/pull/28566)** (P1, core, closed)
    Closed without merge, but noteworthy: it aimed to surface `InvalidStreamError` type/message so the CLI can recommend targeted actions (e.g., `/compress`) on empty responses. Its closure suggests the approach was superseded — likely by the `/compress` fixes in #28672.

Additional notable: **[#28530 — Caretaker Agent triage evaluation framework](https://github.com/google-gemini/gemini-cli/pull/28530)** adds an LLM-as-a-Judge rubric and parallel Git Worktree runner for issue triage evals; **[#28640](https://github.com/google-gemini/gemini-cli/pull/28640)** fixes a broken auth docs link (small, but good DX hygiene); **[#28576](https://github.com/google-gemini/gemini-cli/pull/28576)**/**[#28577](https://github.com/google-gemini/gemini-cli/pull/28577)** target CI stability and startup time.

## 5. Feature Request Trends

- **Local/self-hosted inference support**: The SGLang and OpenAI-compatible endpoint PR (#28681) aligns with a recurring community desire to run Gemini CLI against non-Google backends for privacy, cost, or offline work.
- **AST-aware codebase tooling**: Two coordinated epics (#22745, #22746) push toward AST-aware file read/search/mapping to cut token noise and improve navigation precision. Expect this to reshape the `codebase_investigator` agent.
- **Agent self-utilization of skills/subagents**: Multiple threads (#21968, #21432) ask for the model to proactively use custom skills, subagents, and know its own CLI flags/hotkeys — i.e., better "self-awareness" and tool-triggering behavior.
- **Resilient memory and context management**: A cluster of Auto Memory issues (#26516, #26522, #26523, #26525) plus `/compress` fixes signal an investment in making session memory and compression deterministic, redacted, and free of infinite retries.
- **Browser agent robustness**: Requests for lock recovery/session takeover (#22232) and proper `settings.json` override support (#22267) indicate the browser subagent is a top integration point needing production hardening.
- **Deeper telemetry and eval infrastructure**: Component-level evals (#24353), subagent trajectory sharing via `/chat share` (#22598), and skill-name telemetry dimensions (#28474) show a push toward observability of agent behavior.

## 6. Developer Pain Points

- **Hangs and false success**: The combo of generalist agent hangs (#21409), shell "Waiting input" stalls (#25166), and MAX_TURNS misreported as GOAL success (#22323) paints a picture of unreliable execution status — developers can't trust that a completed step actually completed.
- **Agent opt-out not respected**: Subagents executing despite agents being disabled (#22093) is a configuration-trust violation that erodes confidence in the permission model.
- **State corruption after interruptions**: Quota errors, ESC queries, and `/compress` failures corrupt session state or drop tool responses (#28671, #28672), forcing users to restart workflows.
- **Security regressions keep appearing**: Two active security fixes in the last day alone (variable-expansion bypass #28691, SSRF #28557) show that shell-substitution and network-fetch boundaries remain an ongoing cat-and-mouse game.
- **Subagent observability gaps**: Bug reports and `/chat share` don't include subagent context or trajectories (#21763, #22598), making debugging multi-agent failures nearly impossible.
- **Terminal rendering fragility**: Narrow-width ghost-text loops (#28641), resize flicker (#21924), and post-editor corruption (#24935) indicate the terminal UI layer needs more hardening for edge-case environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-05

## 1. Today's Highlights
Copilot CLI shipped v1.0.79-1 with a breaking sandbox setting rename: `allowDevToolCaches` is now `allowDevToolAccess`, and the old key is silently ignored — so existing `false` opt-outs revert to the default. Community attention is split between long-standing requests (session forking, custom themes, plugin auto-update) and a fresh batch of regressions around MCP initialization, plugin slash commands, and enterprise policy handling.

## 2. Releases
- **v1.0.79-1** — [Release notes](https://github.com/github/copilot-cli/releases)
  - **Improved**
  - **BREAKING**: Sandbox setting `allowDevToolCaches` renamed to `allowDevToolAccess`; it now also covers dev-tool config and registries, not just caches.
  - The old key is no longer read and is ignored silently, meaning an existing `false` opt-out reverts to the default (`on`). Users must update their settings explicitly.

## 3. Hot Issues
- **[#1504 — Add custom theme support](https://github.com/github/copilot-cli/issues/1504)** — Users want user-defined, shareable themes, e.g. JSON files exposed through `/theme`. High interest: 23 👍 and 8 comments.
- **[#1285 — Organisation-level Agents not showing up](https://github.com/github/copilot-cli/issues/1285)** — Agents placed in `{org}/.github-private` are not appearing in CLI or VS Code. Blocks enterprise team adoption; 9 👍 and 7 comments.
- **[#2692 — Web Search tool fails with github-mcp-server](https://github.com/github/copilot-cli/issues/2692)** — Agent runs error during Web Search via MCP with `Streamable HTTP error` on POST. Affects reliability of MCP-backed tools; 6 comments.
- **[#4328 — Ctrl+H misread as Ctrl+Backspace under WSL2](https://github.com/github/copilot-cli/issues/4328)** — `WT_SESSION` leaking from Windows Terminal causes key-binding misbehavior. Daily editor frustration for WSL2 users; 5 comments.
- **[#4005 — Enterprise memory saving fails: “Copilot billing entity isn’t selected”](https://github.com/github/copilot-cli/issues/4005)** — Users on enterprise setups cannot save memories even though other features work; 4 comments and 3 👍.
- **[#4202 — Built-in `view` reports “Path does not exist” for existing files](https://github.com/github/copilot-cli/issues/4202)** — Regression introduced in v1.0.72/1.0.73; same probe succeeds on 1.0.71. Tooling breakage for non-interactive workflows; 4 comments.
- **[#1697 — Session forking: branch conversations into parallel sessions](https://github.com/github/copilot-cli/issues/1697)** — Strongly requested workflow feature for splitting tasks without losing context; 25 👍 and 3 comments.
- **[#4370 — v1.0.79-1 fails MCP initialization when `server/discover` returns `-32602`](https://github.com/github/copilot-cli/issues/4370)** — FastMCP servers don’t implement `server/discover`, and the CLI treats the response as fatal. New release regression; 1 comment.
- **[#4361 — Plugin skill slash commands no longer work](https://github.com/github/copilot-cli/issues/4361)** — Desktop app client used to rewrite `/plugin-skill` into natural language; now it fires a doomed `session.commands.invoke` RPC. Plugin workflow regression; 1 comment.
- **[#4349 — Managed settings policy fails closed on valid enum `"enable"`](https://github.com/github/copilot-cli/issues/4349)** — Enterprise policy validation only accepts `"disable"` for `permissions.disableBypassPermissionsMode`, so a valid `"enable"` value blocks all local/custom MCP servers; 1 comment.

## 4. Key PR Progress
Only 2 PRs were updated in the last 24 hours, both still open.

- **[#4366 — ACTION REQUIRED: Fundamental security findings resolution for copilot-cli](https://github.com/github/copilot-cli/pull/4366)** — Opened by `vault-chatops[bot]` to remediate a Fundamental security finding for the `copilot-cli` Vault app in `ci, production`. Requires maintainer review, replacing `<UPDATE_ME>` placeholders, and merging.
- **[#4355 — “Merge”](https://github.com/github/copilot-cli/pull/4355)** — Open PR with no description and no attached feature/fix context. Needs maintainer triage.

## 5. Feature Request Trends
- **Session lifecycle & continuity**: Cloud-synced sessions ([#1947](https://github.com/github/copilot-cli/issues/1947)), session forking ([#1697](https://github.com/github/copilot-cli/issues/1697)), explicit session deletion ([#2019](https://github.com/github/copilot-cli/issues/2019)), remote session heartbeat ([#1343](https://github.com/github/copilot-cli/issues/1343)), and persistent token/context usage display ([#2532](https://github.com/github/copilot-cli/issues/2532), [#4174](https://github.com/github/copilot-cli/issues/4174)).
- **Plugins & extensibility**: Plugin auto-update ([#1709](https://github.com/github/copilot-cli/issues/1709), 29 👍), skills invocable as slash commands ([#4048](https://github.com/github/copilot-cli/issues/4048)), and reliable `sessionStart` hooks on `/new` and `/clear` ([#4365](https://github.com/github/copilot-cli/issues/4365)).
- **Theming & accessibility**: Custom/shareable themes ([#1504](https://github.com/github/copilot-cli/issues/1504)) and fixing foreground/background contrast issues ([#3898](https://github.com/github/copilot-cli/issues/3898)).
- **BYOK & custom model endpoints**: Support for third-party LLM providers and custom endpoints ([#4139](https://github.com/github/copilot-cli/issues/4139)), plus BYOK streaming compatibility with `reasoning_content` deltas ([#4196](https://github.com/github/copilot-cli/issues/4196)).

## 6. Developer Pain Points
- **Windows/WSL2 terminal handling**: Keyboard input misreads ([#4328](https://github.com/github/copilot-cli/issues/4328)), raw DA1 escape sequences polluting the input box ([#4267](https://github.com/github/copilot-cli/issues/4267)), and persistent native-runtime crashes on Windows ([#4026](https://github.com/github/copilot-cli/issues/4026)).
- **Recent version regressions**: `view` tool path breakage ([#4202](https://github.com/github/copilot-cli/issues/4202)), plugin slash command regression ([#4361](https://github.com/github/copilot-cli/issues/4361)), and MCP initialization failing with FastMCP ([#4370](https://github.com/github/copilot-cli/issues/4370)).
- **Enterprise MCP/policy fail-closed issues**: Valid managed-settings enums blocking all MCP servers ([#4349](https://github.com/github/copilot-cli/issues/4349)), private CA rejection on macOS blocking enterprise MCP registries ([#4364](https://github.com/github/copilot-cli/issues/4364)), and enterprise billing entity errors breaking memory ([#4005](https://github.com/github/copilot-cli/issues/4005)).
- **State loss and unexpected behavior**: Stashed prompts discarded on session switch ([#4334](https://github.com/github/copilot-cli/issues/4334)) and background memory agents spawning even when memory is disabled ([#3859](https://github.com/github/copilot-cli/issues/3859)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-05

## 1. Today's Highlights

No new release shipped in the last 24 hours, but the issue tracker shows two important signals: a newly filed report points to a sharp reliability cliff around ~500K token context fill, causing loops and instruction drift, and long-standing requests for persistent memory (#1283) and remote session control (#1282) continue to draw community engagement. On the ACP side, model discovery, mid-session switching, and permission mode control are gaining momentum across both issues and PRs.

## 2. Releases

No releases were published in the last 24 hours.

## 3. Hot Issues

Only 6 issues were created or updated in the last 24 hours; all are listed below.

- **#1283 [OPEN] Feature Request: Memory System — Persistent context across sessions**  
  [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  Community wants automatic and manual memory so the CLI remembers project patterns and preferences across sessions. With 17 comments, this is one of the most-discussed open feature requests.

- **#1282 [OPEN] Feature Request: Remote Control — Continue local sessions from any device**  
  [MoonshotAI/kimi-cli Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)  
  Request for phone/tablet/browser access to local sessions. Has the strongest 👍 signal in this batch (24 👍), indicating real demand for mobility and workflow continuity.

- **#2586 [CLOSED] Agent reliability degrades at high context fill (~500K tokens)**  
  [MoonshotAI/kimi-cli Issue #2586](https://github.com/MoonshotAI/kimi-cli/issues/2586)  
  New report describing repetitive action loops, no escalation, and instruction drift once context fill passes roughly 500K tokens. Closed the same day, but it highlights an important reliability boundary for long-running agentic workflows.

- **#2587 [OPEN] [bug] kimi cli will exit abnormally when advancing the session normally**  
  [MoonshotAI/kimi-cli Issue #2587](https://github.com/MoonshotAI/kimi-cli/issues/2587)  
  Crash report on Windows with Kimi Code v0.29.2 and K3 high model. No comments yet, so likely needs more repro detail.

- **#2584 [OPEN] Bug: Thai (and other IME-based) characters duplicated when typing in the prompt on Windows**  
  [MoonshotAI/kimi-cli Issue #2584](https://github.com/MoonshotAI/kimi-cli/issues/2584)  
  Windows 11 + v0.31.1: IME input causes duplicated characters in the prompt. Affects non-Latin input workflows.

- **#2583 [OPEN] feat(acp): advertise available models and support mid-session model switching**  
  [MoonshotAI/kimi-cli Issue #2583](https://github.com/MoonshotAI/kimi-cli/issues/2583)  
  ACP clients like Happy Coder and Zed cannot discover available models or switch models mid-session. This is a gap in the ACP protocol integration.

## 4. Key PR Progress

Only 3 PRs were updated in the last 24 hours; all are listed below.

- **#2200 [OPEN] fix(shell): adapt timeouts for long commands**  
  [MoonshotAI/kimi-cli PR #2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)  
  Automatically extends the shell timeout for known-slow operations such as `git submodule cleanup`, `git clone/fetch`, package installs, and builds. Normal commands stay at the 60s default, while explicitly provided timeouts are preserved.

- **#2585 [OPEN] feat(cli): set `AI_AGENT` for subprocesses**  
  [MoonshotAI/kimi-cli PR #2585](https://github.com/MoonshotAI/kimi-cli/pull/2585)  
  Exposes `AI_AGENT=kimi` to subprocesses launched from both the pip/uv and standalone binary entrypoints. Also preserves an explicit non-blank value supplied by a wrapper or orchestrator.

- **#2364 [OPEN] feat(acp): support permission mode switching**  
  [MoonshotAI/kimi-cli PR #2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)  
  Adds protocol-level ACP permission mode switching for Kimi sessions and advertises the default mode. Resolves #1414 and stacks on #2363.

## 5. Feature Request Trends

- **Persistent context / memory** — Recurring ask for the CLI to remember project patterns, user preferences, and session context across runs (#1283).
- **Remote and mobile access** — Users want seamless continuation of local sessions from other devices (#1282).
- **ACP ecosystem maturity** — Clear direction toward better client integration: model discovery, mid-session model switching (#2583), and permission mode switching (#2364).
- **Reliability at long context** — The ~500K token degradation report (#2586) points to a need for context compaction, escalation, and drift prevention in long-running agentic sessions.

## 6. Developer Pain Points

- **Context window degradation** — Long sessions become unstable at high fill: repetitive action loops, instruction drift, and no automatic escalation. This is a serious blocker for large multi-step refactoring tasks.
- **Windows input and stability issues** — IME-based character duplication (#2584) and abnormal session exits (#2587) show Windows-specific polish is still needed.
- **ACP integration limitations** — Clients cannot discover or switch models mid-session, which limits flexibility for mobile/IDE-driven workflows (#2583).
- **Shell command timeouts** — Long commands like clones and package installs can hit the default timeout; PR #2200 is a direct response to that friction.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-05

## Today's Highlights

OpenCode shipped **v1.18.13**, focused on TUI and Desktop polish: PR review context now includes the PR number/URL, and multiple right-to-left layout issues were fixed. On the community side, attention is centered on reliability — recurring OpenCode Go billing errors, mid-session hangs, and a data-destructive SQLite migration bug. Several backend/PR fixes also landed for provider compatibility, including Gemini image generation support, xAI OAuth simplification, and cache-token accounting.

## Releases

**v1.18.13**  
- **TUI:** GitHub pull request reviews now include the PR number and URL in context.  
- **Desktop:** Fixed multiple right-to-left layout issues across tabs, drawers, resizing, and titlebar interactions.  
- **Desktop:** Fixed shared RTL UI behavior such as directional icons.

## Hot Issues

- **[#27593 — Error: 402 Insufficient Balance - opencode-go](https://github.com/anomalyco/opencode/issues/27593)**  
  Closed; 17 comments, 13 👍. Users with 98% session usage hit 402 only when using `ds4-flash`; other models work. Points to model-specific billing/metering misbehavior on OpenCode Go.

- **[#33028 — Subagents hang indefinitely after quick bash tool call](https://github.com/anomalyco/opencode/issues/33028)**  
  Open; 9 comments, 6 👍. Subagents/primary agents hang after a fast bash call; the next LLM stream never completes and never times out. Reproduced with `glm-5.2` and `minimax-m3`.

- **[#20118 — Failed to run the query 'PRAGMA journal_mode = WAL'](https://github.com/anomalyco/opencode/issues/20118)**  
  Closed; 10 comments, 11 👍. Downgrading OpenCode can break SQLite access. Users report poor error handling and missing log output for diagnosis.

- **[#20234 — WSL outputs only one word per line during thinking](https://github.com/anomalyco/opencode/issues/20234)**  
  Closed; 10 comments, 4 👍. WSL users see streaming output broken into one word per line, likely a TTY width detection issue.

- **[#30963 — Migration 20260604172448 deletes entire event log for all users](https://github.com/anomalyco/opencode/issues/30963)**  
  Closed; 4 comments. The migration runs `DELETE FROM event` and `UPDATE session SET workspace_id = NULL` unconditionally, causing event-log data loss on upgrade. High severity data-safety bug.

- **[#28704 — Zod internal properties leak into JSON Schema sent to provider](https://github.com/anomalyco/opencode/issues/28704)**  
  Closed; 5 comments. Raw Zod internals like `_def`, `typeName`, and `~standard` leak into tool schemas, causing Kimi k2.6 to reject requests. Core plugin/tool-schema correctness issue.

- **[#34214 — Opencode freezes / becomes unresponsive mid-session](https://github.com/anomalyco/opencode/issues/34214)**  
  Open; 5 comments, 1 👍. Long sessions degrade into a frozen UI with no new messages or tool calls; user must force-close and reopen.

- **[#30862 — STUCK WITH NO RESPOND/ERROR after update](https://github.com/anomalyco/opencode/issues/30862)**  
  Closed; 12 comments, 1 👍. After updating, both GUI and CLI versions appear stuck with no output. Session titles change, implying the LLM is working, but responses never reach the UI.

- **[#29951 — Desktop advanced settings toggles do nothing in new layout](https://github.com/anomalyco/opencode/issues/29951)**  
  Closed; 6 comments, 4 👍. In the new desktop layout, toggles for File tree, Command palette, Terminal, and Server status have no visible effect.

- **[#30951 — Zen lists nemotron-3-ultra-free but requests fail as unsupported](https://github.com/anomalyco/opencode/issues/30951)**  
  Closed; 5 comments. The model catalog advertises `nemotron-3-ultra-free`, but runtime requests return “Model not supported” — a mismatch between the catalog and Zen backend.

## Key PR Progress

- **[#40126 — feat(session): support Gemini image generation](https://github.com/anomalyco/opencode/pull/40126)**  
  Open. Gemini inline image outputs are now carried through the session pipeline instead of being dropped. Closes #40124.

- **[#40537 — fix(opencode): make xAI OAuth device-only](https://github.com/anomalyco/opencode/pull/40537)**  
  Closed. Replaces loopback OAuth with RFC 8628 device flow, removing PKCE/CORS/callback complexity while preserving SuperGrok access locally and remotely.

- **[#40541 — fix(llm): parse cache_creation_tokens from OpenAI-compat usage](https://github.com/anomalyco/opencode/pull/40541)**  
  Closed. `cacheWriteInputTokens` was always 0 on OpenAI-compatible providers; now parses `prompt_tokens_details` properly, important for LiteLLM-style proxies.

- **[#40450 — fix(opencode): include cache writes in ACP usage](https://github.com/anomalyco/opencode/pull/40450)**  
  Closed. ACP context usage now includes cache-write tokens and uses a single consistent calculation across both ACP service paths, with regression coverage.

- **[#40552 — fix(core): avoid eager directory snapshots](https://github.com/anomalyco/opencode/pull/40552)**  
  Open. Large repositories no longer rebuild filesystem search snapshots on every indexed file; directory materialization is delayed until actually needed.

- **[#40427 — [beta] experimental perf improvements](https://github.com/anomalyco/opencode/pull/40427)**  
  Open. Renderer-entry memory drops from 7.45 MB to 1.82 MB (−75.5%) in a benchmark corpus, with additional renderer-performance work.

- **[#40545 — fix(opencode): add model attribution to run --format json step events](https://github.com/anomalyco/opencode/pull/40545)**  
  Open. `step_start` / `step_finish` now include model info, allowing headless consumers to attribute tokens and cost correctly.

- **[#40551 — feat(tui): streamline tab navigation shortcuts](https://github.com/anomalyco/opencode/pull/40551)**  
  Closed. Adopts Slack/Mattermost conventions: `Option+Up/Down` switches tabs, `Option+Shift+Up/Down` switches unread tabs, plus `Ctrl+Tab` / `Ctrl+Shift+Tab`.

- **[#40558 — fix(core): unify patch path resolution](https://github.com/anomalyco/opencode/pull/40558)**  
  Open. Patch source and move targets now use the shared `LocationMutation` path-planning contract, aligning patch authorization with edit/write, including symlink and missing-ancestor handling.

- **[#37832 — fix(app): prevent Solid cleanNode crash on session switch](https://github.com/anomalyco/opencode/pull/37832)**  
  Closed. Fixes a desktop-app freeze/crash when switching sessions caused by an uncaught `TypeError: Cannot read properties...`.

## Feature Request Trends

- **Agent/subagent configuration and visibility** is a strong signal: users want agent presets ([#29626](https://github.com/anomalyco/opencode/issues/29626)), better subagent runtime status in chat ([#22233](https://github.com/anomalyco/opencode/issues/22233)), and configurable loop-detection thresholds ([#23531](https://github.com/anomalyco/opencode/issues/23531)).
- **Voice/dictation input** continues to be requested, both through plugin extensibility gaps ([#17425](https://github.com/anomalyco/opencode/issues/17425)) and native browser speech recognition ([#18226](https://github.com/anomalyco/opencode/issues/18226)).
- **Remote/headless workflows** are desired: auto-attach to a persistent remote server ([#17322](https://github.com/anomalyco/opencode/issues/17322)) and structured output that includes model attribution for headless consumers.
- **Keyboard UX polish** is recurring: restoring `//` for new-session ([#31009](https://github.com/anomalyco/opencode/issues/31009)), Escape focusing the prompt input ([#30887](https://github.com/anomalyco/opencode/issues/30887)), and tab-navigation shortcuts.

## Developer Pain Points

- **Billing/usage mismatches:** Multiple reports of “402 Insufficient Balance” despite available quota, especially with OpenCode Go and paid models like GLM 5.1/Kimi v2.6 ([#27593](https://github.com/anomalyco/opencode/issues/27593), [#30950](https://github.com/anomalyco/opencode/issues/30950)).
- **Hangs, freezes, and unresponsive sessions:** Stuck agents after tool calls ([#33028](https://github.com/anomalyco/opencode/issues/33028)), no-response regressions after updates ([#30862](https://github.com/anomalyco/opencode/issues/30862)), mid-session freezes ([#34214](https://github.com/anomalyco/opencode/issues/34214)), and dialog soft-locks ([#30590](https://github.com/anomalyco/opencode/issues/30590)).
- **Terminal state corruption:** WSL word-per-line output ([#20234](https://github.com/anomalyco/opencode/issues/20234)) and terminal raw mode not restored after abnormal exits ([#30920](https://github.com/anomalyco/opencode/issues/30920)).
- **Data and migration safety:** Destructive migrations ([#30963](https://github.com/anomalyco/opencode/issues/30963)) and SQLite/version-downgrade breakage ([#20118](https://github.com/anomalyco/opencode/issues/20118)) remain high-impact.
- **Provider/schema protocol issues:** Zod schema leakage ([#28704](https://github.com/anomalyco/opencode/issues/28704)), model-catalog mismatches ([#30951](https://github.com/anomalyco/opencode/issues/30951)), and cache-token accounting gaps are recurring integration pain points.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-05

**Today's Highlights**

Compaction/summarization failures on GitHub Copilot Enterprise seats remain the loudest complaint cluster this week (three separate reports, 18 👍), while Windows-specific bugs and TUI rendering glitches drive most new issue volume. The community is shipping steadily in response: PRs landed for configurable summarization models, Mermaid diagram rendering, several new AI provider integrations, and a wave of RPC/socket improvements for embedded clients.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6768 — Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)** — 19 comments, 18 👍
   The top-voted issue this cycle. Compaction fails with `421 Misdirected Request` on Copilot Enterprise seats for both OpenAI and Anthropic model paths. Closed, but it spawned follow-ups (#7579, #7413), suggesting the fix may not cover all enterprise variants.

2. **[#7547 — How do you use Pi on Windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)** — 13 comments
   Maintainer petrroll opened a deliberately broad survey to map the fragmented Windows landscape (native, WSL, MSYS2, …) and decide where to focus energy. The thread is actively feeding the Windows bug backlog.

3. **[#5023 — Terminal scrolls to beginning without reason](https://github.com/earendil-works/pi/issues/5023)** — 11 comments
   Long-running TUI bug: the terminal randomly jumps to the top of the session and fast-scrolls back to the end while the model is streaming. Closed; differential-renderer changes in the 0.83 cycle are the suspected trigger.

4. **[#7161 — anthropic-messages never sends x-client-request-id](https://github.com/earendil-works/pi/issues/7161)** — 10 comments
   The Anthropic path omits `x-client-request-id`, breaking gateways/proxies that key session affinity off that header. Proxy users round-robining across Claude accounts can't group conversations into sessions.

5. **[#7413 — Compaction fails on GitHub Copilot GHE.com — "unknown stamp" error](https://github.com/earendil-works/pi/issues/7413)** — 6 comments
   A distinct enterprise compaction failure: `/compact` returns `400 IDE authentication failed: invalid token: unknown stamp "prod-cus-01"` on GHE.com accounts while normal chat works fine.

6. **[#7553 — Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)** — 6 comments
   Auto-compaction unconditionally reuses the session's thinking level, making summarization on reasoning models expensive and uncontrollable. Users want independent model/thinking settings — a PR (#7602) is already up.

7. **[#7244 — Enhance `version` to show runtime (bun|node|deno)](https://github.com/earendil-works/pi/issues/7244)** — 6 comments
   A disproportionate number of bugs are runtime-specific (Bun especially), but version output doesn't include the runtime. Request to add it so users copy one string into bug reports.

8. **[#6817 — find returns no results for path patterns like src/**/*.ts on Windows](https://github.com/earendil-works/pi/issues/6817)** — 5 comments
   Windows-only bug in `packages/coding-agent/src/core/tools/find.ts`: any pattern containing a path separator fails with "No files found". Plain filename patterns work fine.

9. **[#7508 — Copilot/Codex OAuth refresh has no timeout, freezes session ~5 min](https://github.com/earendil-works/pi/issues/7508)** — 5 comments
   A stalled token refresh holds the serialized credential-store lock, freezing the session at the worst possible moment — token expiry on a flaky network. Closed with a fix.

10. **[#7395 — JSON mode serializes cumulative assistant state on every delta](https://github.com/earendil-works/pi/issues/7395)** — 3 comments
    In `--mode json`, each `message_update` re-serializes the complete accumulated assistant message, causing quadratic output and slow stdout drains — a performance landmine for programmatic consumers.

## Key PR Progress

1. **[#7602 — Configurable summarization models](https://github.com/earendil-works/pi/pull/7602)** — closes #7553
   Adds configurable models and thinking levels for compaction and branch summaries, with provider-error handling for context-window limits. Directly targets the top compaction complaints.

2. **[#7619 — Resume failed turn by selecting it in /tree](https://github.com/earendil-works/pi/pull/7619)** — closes #7609
   Selecting an errored assistant entry in the conversation tree retries the turn instead of dead-ending. The error stays in history; the retried response continues under it.

3. **[#7624 — Render Mermaid diagrams in markdown](https://github.com/earendil-works/pi/pull/7624)** — closes #7623
   Adds Mermaid diagram rendering for markdown output via the grok-mermaid library — a frequently requested visual improvement.

4. **[#7612 — Add size param to iTerm2 image encoder](https://github.com/earendil-works/pi/pull/7612)** — fixes #7465
   Adds `size=<decoded byte count>` to OSC 1337 sequences so `@xterm/addon-image@0.9.0` stops silently rejecting Pi images in xterm.js terminals.

5. **[#7632 — Retry transient management HTTP requests](https://github.com/earendil-works/pi/pull/7632)** — fixes #6675
   Retries idempotent management requests (pi.dev, gh releases, tools) to smooth over flaky networks, without adding per-attempt timeouts that could slow slower networks.

6. **[#7571 — Built-in Cortecs provider](https://github.com/earendil-works/pi/pull/7571)**
   Adds Cortecs, a European AI router, as a first-class provider backed by models.dev — following the established OpenRouter-style integration pattern.

7. **[#7610 — LLM Gateway and LLM Gateway DevPass providers](https://github.com/earendil-works/pi/pull/7610)**
   Another router integration: LLM Gateway ships as two `openai-completions` providers sharing an endpoint and attribution header, differing only by account type.

8. **[#7597 — Scrollable diff title in fullscreen extension selector](https://github.com/earendil-works/pi/pull/7597)**
   Wraps large diff titles in a ScrollView and pins the yes/no actions, so very long diffs can be reviewed without losing the action buttons.

9. **[#7396 — Server session backend](https://github.com/earendil-works/pi/pull/7396)**
   Adds a durable `pi-coding-agent/server` backend persisting sessions as JSONL with exclusive cross-process locking, crash recovery, and live transcript progress — a foundation piece for the v2 harness.

10. **[#7604 — Keep $defs in non-strict Anthropic tool schemas](https://github.com/earendil-works/pi/pull/7604)**
    Fixes dangling `$ref` pointers in non-strict Anthropic input schemas: zod-derived schemas with shared shapes lost their `$defs` during projection, breaking tool calls.

## Feature Request Trends

- **Compaction/summarization control**: The clearest trend — users want dedicated model, thinking level, and behavior for compaction independent of the main session (#7553), amplified by the Copilot Enterprise failure cluster (#6768, #7413, #7579).
- **Windows as a first-class platform**: A maintainer-driven survey (#7547) plus concrete Windows bugs (#6817, #7427) show the community pushing hard for Windows parity.
- **Richer TUI/markdown rendering**: Mermaid diagrams (#7623), iTerm2/xterm.js image compatibility (#7465), and scroll/keybinding fixes (#7574, #7616) point to active polish on the terminal experience.
- **Provider extensibility**: Three new provider PRs this cycle (Cortecs #7571, LLM Gateway #7610, Qwen Individual plan #7631) — the community is hungry for router-style aggregation and region-specific providers.
- **Embedding/RPC surface**: Exposing auth through RPC (#7590), argument completions over RPC (#7621), and Unix-socket/TCP listeners (#7599) signal growing demand for Pi as an embeddable agent core, not just a TUI.

## Developer Pain Points

- **Copilot Enterprise compaction is broken in multiple ways**: `421 Misdirected Request` (#6768, #7579) and `unknown stamp` on GHE.com (#7413). Three separate reports and 18 upvotes make this the single loudest reliability complaint this week.
- **Windows path/FS bugs keep recurring**: the `find` tool fails on any pattern with a path separator (#6817), and `loadSkills` throws a RangeError from the `ignore` lib on recursive skill directories (#7427).
- **TUI freezes and scroll jumps**: the transcript randomly scrolls to top (#5023), chat jumps when tool blocks grow taller than the viewport (#7616), and Home/End/PageUp/PageDown get consumed by the viewport instead of the editor (#7574).
- **Stalls from missing timeouts**: the OAuth refresh that holds the credential-store lock with no timeout (#7508) froze sessions for ~5 minutes — a reminder that retry/timeout hygiene matters for interactive tools.
- **Confusing error UX after retries**: successful retries leave permanent red `Error: fetch failed` lines in chat (#7613), making healthy sessions look broken.
- **Supply-chain alerts**: the 0.83.0 shrinkwrap pins vulnerable `undici@8.5.0` and `brace-expansion@5.0.7` (#7628), with security-conscious users watching `npm audit` output.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest — 2026-08-05

### 1. Today's Highlights

The project shipped **v0.21.6-preview.0** and a new nightly build, both adding alpha-readiness diagnostics for the browser extension and documentation for headless Goal workflows. Community discussion this cycle centered on trustworthy agent runtime design, daemon/memory resource governance, and ACP/JetBrains integration gaps. Several important fixes are in flight, including MCP SSE startup timeouts, daemon lockfile crash protection, and review-pipeline performance improvements.

---

### 2. Releases

- [v0.21.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0)  
  - feat(browser-ext): add alpha readiness diagnostics  
  - docs: document headless Goal workflows  

- [v0.21.5-nightly.20260805.32e274157](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157)  
  - Same change set as the preview release, shipped via the nightly channel.

---

### 3. Hot Issues

- [Issue #8102](https://github.com/QwenLM/qwen-code/issues/8102) — **Deterministic tool-execution boundaries for a trustworthy agent runtime**  
  Proposes keeping the language model outside the trust boundary and making the runtime able to constrain, authorize, and evaluate model-produced actions. The 17 comments show strong community interest in security-first agent architecture.

- [Issue #8519](https://github.com/QwenLM/qwen-code/issues/8519) — **Severe flickering in tmux**  
  P2 UI bug affecting Linux/tmux users, with 11 comments. Terminal-rendering stability remains a common pain point for interactive CLI users.

- [Issue #8051](https://github.com/QwenLM/qwen-code/issues/8051) — **Tracking multi-workspace daemon resource usage**  
  Requests bounded memory/CPU usage for `qwen serve` rather than count-only limits. Important for production deployments running many workspaces and ACP children.

- [Issue #8136](https://github.com/QwenLM/qwen-code/issues/8136) — **Provider warning sanitizer leaks passwords containing `@`**  
  Security-relevant bug: URL sanitization in provider warnings can truncate messages and leak credentials. Needs attention before `/status` output is consumed by external tooling.

- [Issue #8532](https://github.com/QwenLM/qwen-code/issues/8532) — **Mocked disk-full test errors look like real runner ENOSPC in CI**  
  CI logs from test-path errors are indistinguishable from production disk-full errors, creating false alarms and making real infrastructure failures harder to detect.

- [Issue #8356](https://github.com/QwenLM/qwen-code/issues/8356) — **Session transcript not written after APIUserAbortError**  
  After an abort, subsequent turns are lost from the local transcript. This is a core session-integrity bug with direct impact on long interactive workflows.

- [Issue #8550](https://github.com/QwenLM/qwen-code/issues/8550) — **`qwen mcp list` hangs on unresponsive SSE servers**  
  P2 bug: an SSE endpoint that never sends `endpoint` can hang the command indefinitely. Relevant to anyone operating MCP servers with flaky transports.

- [Issue #8533](https://github.com/QwenLM/qwen-code/issues/8533) — **Content[]/Part[] cannot safely encode reasoning-replay contracts**  
  Foundational design problem: current content/part model cannot represent per-provider reasoning-replay behavior safely. This has implications for multi-provider compatibility.

- [Issue #8535](https://github.com/QwenLM/qwen-code/issues/8535) — **`--resume` reconstructs the dangling-unsigned-thought hazard**  
  A bug that reintroduces a hazard fixed by PR #8260 in the live session path. Important for session replay correctness and safety.

- [Issue #8544](https://github.com/QwenLM/qwen-code/issues/8544) — **ACP task list not rendered in JetBrains**  
  JetBrains AI Assistant users don't see live task/plan updates with Qwen Code, while Claude Code and Codex render them. Part of a broader ACP integration parity gap.

---

### 4. Key PR Progress

- [PR #8440](https://github.com/QwenLM/qwen-code/pull/8440) — **feat(channels): support group pairing**  
  Adds `pairing` as a `groupPolicy` value, allowing a group chat to be approved once and reused by all members with audit context.

- [PR #8414](https://github.com/QwenLM/qwen-code/pull/8414) — **fix(webui): recover complete turns after live journal truncation**  
  Improves truncation handling so SDK consumers and users receive validated scope/limit metadata instead of a generic truncation message.

- [PR #8512](https://github.com/QwenLM/qwen-code/pull/8512) — **feat(omni): S2 input expansion**  
  Extends omni input to image/audio/URL sources, tool-result media, and token-dimension transport guards. A significant step for the omni experiment.

- [PR #8350](https://github.com/QwenLM/qwen-code/pull/8350) — **feat(voice): support trusted private ASR base URLs**  
  Adds an empty-by-default allowlist for private voice/ASR gateways, enabling managed deployments while keeping the default deny behavior.

- [PR #8442](https://github.com/QwenLM/qwen-code/pull/8442) — **fix: prevent daemon crash from proper-lockfile compromise**  
  Adds `onCompromised` handlers to lockfile call sites, turning crash-prone lock loss into logged warnings.

- [PR #8490](https://github.com/QwenLM/qwen-code/pull/8490) — **feat(review): test the diff's reverse-dependency closure**  
  Optimizes the review pipeline by scoping tests to affected reverse dependencies, failing open to the full suite only when needed.

- [PR #8332](https://github.com/QwenLM/qwen-code/pull/8332) — **feat(cli): add audio bridge for attachments**  
  Transcribes audio attachments through a batch voice model when the primary model is audio-unsupported, then marks the result as explicitly untrusted.

- [PR #8423](https://github.com/QwenLM/qwen-code/pull/8423) — **feat(serve): observe daemon and child memory against real denominators**  
  Implements memory observability and a child-heap partition model, directly addressing the daemon memory-governance issues reported by users.

- [PR #8425](https://github.com/QwenLM/qwen-code/pull/8425) — **feat(core): share compression cache with Gemini and Vertex AI**  
  Enables eligible compression requests on Gemini/Vertex AI to reuse provider-managed implicit caching, reducing cold-compression overhead.

- [PR #8555](https://github.com/QwenLM/qwen-code/pull/8555) — **fix(cli): time out silent MCP SSE startup**  
  Fixes the indefinite hang from Issue #8550 by applying a wall-clock timeout to the full MCP SSE connection attempt.

---

### 5. Feature Request Trends

- **ACP / JetBrains parity**  
  Multiple requests ask Qwen Code to match the ACP behavior of Claude Code and Codex: emit `usage_update` sessions updates ([#8513](https://github.com/QwenLM/qwen-code/issues/8513)), expose reasoning-effort tiers ([#8514](https://github.com/QwenLM/qwen-code/issues/8514)), emit `session_info_update` frames ([#8546](https://github.com/QwenLM/qwen-code/issues/8546)), support queuing follow-up messages ([#8542](https://github.com/QwenLM/qwen-code/issues/8542)), and render task lists correctly ([#8544](https://github.com/QwenLM/qwen-code/issues/8544)).

- **Trustworthy/secure agent runtime**  
  Issues like deterministic tool-execution boundaries ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)) and provider-warning sanitization fixes ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)) reflect growing demand for security and auditability.

- **Daemon resource governance**  
  Requests to bound multi-workspace daemon memory, per-child ACP memory, and request-body/WebSocket buffers continue to gain traction ([#8051](https://github.com/QwenLM/qwen-code/issues/8051), [#8182](https://github.com/QwenLM/qwen-code/issues/8182)).

- **MCP reliability and extension support**  
  The MCP SSE hang ([#8550](https://github.com/QwenLM/qwen-code/issues/8550)) and extension hooks not being used ([#8539](https://github.com/QwenLM/qwen-code/issues/8539)) highlight demand for more robust ecosystem integration.

- **Documentation and multilingual coverage**  
  Requests include refreshing the README product matrix ([#8556](https://github.com/QwenLM/qwen-code/issues/8556)) and adding Korean to the docs site ([#8551](https://github.com/QwenLM/qwen-code/issues/8551)).

---

### 6. Developer Pain Points

- **ACP/JetBrains gaps**  
  Missing task list rendering, context-usage indicators, session title updates, and message queuing make Qwen Code feel less complete inside JetBrains compared with other ACP agents.

- **Daemon memory issues**  
  Each `qwen --acp` child can be authorized 50% of host memory regardless of child count ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)), and daemon-wide bounds are still count-based rather than byte-based ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)).

- **Session integrity and prompt-cache invalidation**  
  Users are hitting transcript loss after aborts ([#8356](https://github.com/QwenLM/qwen-code/issues/8356)), cache-invalidating microcompaction loops ([#8452](https://github.com/QwenLM/qwen-code/issues/8452), [#8463](https://github.com/QwenLM/qwen-code/issues/8463)), and resume-time replay hazards ([#8535](https://github.com/QwenLM/qwen-code/issues/8535)).

- **CLI reliability**  
  Repeated complaints about tmux flicker ([#8519](https://github.com/QwenLM/qwen-code/issues/8519)), MCP hangs ([#8550](https://github.com/QwenLM/qwen-code/issues/8550)), dropped timeout error codes ([#8527](https://github.com/QwenLM/qwen-code/issues/8527)), and broken copy-response on Windows ([#8538](https://github.com/QwenLM/qwen-code/issues/8538)) suggest the interactive surface still needs hardening.

- **CI/tooling noise**  
  Mocked disk-full errors polluting CI logs ([#8532](https://github.com/QwenLM/qwen-code/issues/8532)) and release workflow failures ([#8476](https://github.com/QwenLM/qwen-code/issues/8476)) create unnecessary friction for maintainers and contributors.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-05

> Data source: `github.com/Hmbown/DeepSeek-TUI` (issue/PR links resolve to the Hmbown/CodeWhale repo).

## 1. Today's Highlights

The maintainers have opened a five-issue epic cluster (#5245–#5249) targeting the 682K-line `codewhale-tui` monolith and its 708-package build graph — the clearest signal yet that compile times are the project's top internal pain point. Meanwhile, the v0.9.4 release train (#5135) sits 77 commits ahead of main, the ACP server is gaining real tool execution (#5225), and users continue to hit a reproducible Anthropic-compat 400 error (#4978) plus a silent File-edit false-success bug (#5209).

## 2. Releases

No new releases in the last 24 hours. The v0.9.4 integration train is in progress via [#5135](https://github.com/Hmbown/CodeWhale/pull/5135).

## 3. Hot Issues (10 of 15)

- **[#4978] Frequent Anthropic API 400: `'type' must be in ["enabled","disabled","auto"]`** — [link](https://github.com/Hmbown/CodeWhale/issues/4978)  
  Intermittent HTTP 400s when using OpenModel via the Anthropic Messages API; retries occasionally pass. Six comments make this the most-discussed open bug — root cause still unconfirmed.

- **[#5249] Epic: v0.9.5 build-time lane — stop the monolith tax** — [link](https://github.com/Hmbown/CodeWhale/issues/5249)  
  Owner-authored epic quantifying the problem: `codewhale-tui` is 86% of the workspace and recompiles as one unit on every edit, commit, test, and release loop.

- **[#4991] Discussion: compilation times and the TUI crate monolith** — [link](https://github.com/Hmbown/CodeWhale/issues/4991)  
  Community discussion started during slash-command refactoring; four comments echo the same pain the v0.9.5 epics now formalize.

- **[#4955] Request: zero-sandbox / `--no-sandbox` mode** — [link](https://github.com/Hmbown/CodeWhale/issues/4955)  
  The kernel-level Seatbelt sandbox breaks basic shell commands daily. Four comments and the only 👍 on a request in this batch.

- **[#5209] File `action=edit` silently accepts wrong param names and reports fake success** — [link](https://github.com/Hmbown/CodeWhale/issues/5209)  
  Using `new_str` instead of `replace` returns "Replaced" without changing anything — causing 3–5x re-edits per location. A correctness bug that erodes agent trust.

- **[#5239] 1M-context model still triggers compression at 128K** — [link](https://github.com/Hmbown/CodeWhale/issues/5239)  
  User asks why compaction fires at 128K despite a 1M-capable model; pairs directly with the silent-fallback issue below.

- **[#5244] Unknown model ids silently degrade to the 128K legacy context default** — [link](https://github.com/Hmbown/CodeWhale/issues/5244)  
  Residual bug: unknown model ids fall back to 128K with no surfaced hint, so 1M-window models silently compact. Owner-flagged for an explicit warning.

- **[#5250] Only one API key can be saved** — [link](https://github.com/Hmbown/CodeWhale/issues/5250)  
  New request: store keys per provider instead of overwriting when switching between DeepSeek and GLM.

- **[#5241] Pricing endpoint returns 503 — all sessions show `unverified_live_pricing`** — [link](https://github.com/Hmbown/CodeWhale/issues/5241)  
  Regression after 0.8.67→0.9.3; cost display is broken across every provider with `unpriced_reasons = ["unverified_live_pricing"]`.

- **[#5243] OAuth login must adopt the token it just minted** — [link](https://github.com/Hmbown/CodeWhale/issues/5243)  
  Live dogfood bug: a successful xAI device login still leaves the session credential-less, forcing a second trip to the provider picker.

- **[#5005] [CLOSED] Sandbox filesystem path whitelist/allowlist** — [link](https://github.com/Hmbown/CodeWhale/issues/5005)  
  Closed but relevant: requested access to external logs/build artifacts (e.g. Xcode DerivedData) under `workspace-write`. Folded into the broader sandbox-flexibility trend.

## 4. Key PR Progress (10 of 29)

- **[#5135] release: Codewhale v0.9.4 release train** — [link](https://github.com/Hmbown/CodeWhale/pull/5135)  
  77 commits ahead of main; supersedes #5044 and contains the full 2026-08-01 source candidate. The integration train for all v0.9.4 fixes.

- **[#5242] feat(tui/subagent): resume interrupted children from checkpoint via followup** — [link](https://github.com/Hmbown/CodeWhale/pull/5242)  
  Fixes dead-lettered `followup` on `interrupted_continuable` children — long tasks (document review, multi-step search) can now resume from preserved checkpoints instead of re-dispatching.

- **[#5225] feat(acp): expose file/search/git/patch/shell tools over session/prompt** — [link](https://github.com/Hmbown/CodeWhale/pull/5225)  
  ACP `session/prompt` previously streamed model text only; this makes ACP-driven editors and bridges (Zed, community `acp-deepseek-adapter`) real code-editing agents.

- **[#5238] feat(mcp): MCP Registry discovery with Registry-first tool selection** — [link](https://github.com/Hmbown/CodeWhale/pull/5238)  
  Adds `registry_sync` and a Registry-first policy so the model prefers a matching zero-environment stdio server before falling back to `exec_shell` or custom code.

- **[#5240] feat(tui/shell): surface real wait elapsed time in tool content** — [link](https://github.com/Hmbown/CodeWhale/pull/5240)  
  `duration_ms` was metadata-only and invisible to the model; now wait results carry real elapsed time, fixing model busy-polling of short waits and misjudgment of long stalls.

- **[#5234] fix(tui): keep alternate scroll off while mouse capture is active (#5223)** — [link](https://github.com/Hmbown/CodeWhale/pull/5234)  
  Mouse-wheel/trackpad no longer toggles the composer's input history. Root cause: `recover_terminal_modes()` armed both mouse capture and xterm alternate-scroll mode.

- **[#5095] fix(ohos): re-quote Windows linker arguments containing spaces** — [link](https://github.com/Hmbown/CodeWhale/pull/5095)  
  Fixes `--sysroot` splitting when the OpenHarmony SDK lives under a spaced path (e.g. the default `D:\DevEco Studio\...`).

- **[#5221] fix(prompts): align tool contract copy with runtime behavior** — [link](https://github.com/Hmbown/CodeWhale/pull/5221)  
  Implements the evidence in #5215: describes `code_execution`/`js_execution` as local interpreter subprocesses (not sandboxes) and removes approval copy for a nonexistent CSV-batch tool.

- **[#5233] fix(modelstudio): surface reasoning on official chat routes** — [link](https://github.com/Hmbown/CodeWhale/pull/5233)  
  Classifies `reasoning_content` as a dedicated Thinking stream only on verified Alibaba Model Studio routes, with capability-shaped controls (`enable_thinking`, `preserve_thinking`).

- **[#5133] feat(runtime-api): expose persistent goal-loop state and completion controls** — [link](https://github.com/Hmbown/CodeWhale/pull/5133)  
  One of five Copilot-authored runtime-API PRs (#5129–#5133) adding goal, memory, MCP-server, skill-lifecycle, and verifier-receipt endpoints for managed clients.

## 5. Feature Request Trends

- **Sandbox flexibility**: a no-sandbox/`--no-sandbox` mode (#4955) and filesystem path allowlists (#5005) are the top sandbox asks — users want the guardrail without losing access to their own machine.
- **Build performance**: the v0.9.5 epic cluster (#5245–#5249) calls for splitting the monolith, shrinking the 708-package dependency graph, consolidating 25 integration-test binaries, decoupling the git-SHA stamp, and separating the shipping profile from local release gates.
- **Multi-provider support**: per-provider API key storage (#5250) and OAuth tokens that are adopted immediately (#5243) both reduce provider-switching friction.
- **Context-window correctness**: users want real 1M-window support (#5239) and loud warnings instead of a silent 128K fallback (#5244).
- **Reliable cost display**: the pricing endpoint regression (#5241) shows live pricing is now an expected, monitored feature.

## 6. Developer Pain Points

- **The monolith tax**: `codewhale-tui` (682,959 lines / 620 files) recompiles as one unit; every local commit invalidates tui+cli via the SHA stamp; 25 integration-test binaries each link the full graph; fat LTO runs on every pre-push gate. Community discussion (#4991) matches owner sentiment in #5249.
- **Silent failures**: the File-edit false success (#5209) and the context-window fallback (#5244) both report success while doing the wrong thing — the worst kind of bug for agent workflows.
- **Sandbox vs. daily workflow**: Seatbelt breaks basic shell commands (#4955), and external build artifacts are unreachable (#5005).
- **API-compat whack-a-mole**: Anthropic-compat 400s (#4978), provider-specific reasoning quirks (#5233), and unpriced sessions (#5241) all cost debugging time across providers.
- **Credential management**: a single API-key slot forces repeated provider logins (#5250), and a just-minted OAuth token isn't adopted by the current session (#5243).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*