# AI CLI Tools Community Digest 2026-08-12

> Generated: 2026-08-12 02:25 UTC | Tools covered: 9

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
**Date:** 2026-08-12 | **Scope:** 9 tools

## 1. Ecosystem Overview

The AI CLI tool landscape is in an intense stabilization phase: on a single day, Claude Code, Gemini CLI, Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI all showed meaningful community activity, with Qwen Code shipping a stable release plus preview/nightly builds and OpenAI Codex pushing three Rust alphas. Community attention has shifted from raw model capability to operational maturity — Windows platform reliability, cost governance, MCP interoperability, and session durability dominate every tracker. Notably, Windows-specific breakage is the single largest shared pain point, appearing in 8 of 9 digests, while agent orchestration trust (subagent fan-out, delegation control, honest completion reporting) has emerged as the key product differentiator. The ecosystem is converging on a shared architecture — terminal UI + agent loop + MCP tooling + provider-agnostic routing — with differentiation now happening at the reliability and policy-control layer rather than the model layer.

## 2. Activity Comparison

| Tool | Hot issues highlighted | Key PRs | Releases (last 24h) | Peak engagement (comments / 👍) |
|---|---|---|---|---|
| Claude Code | 10 | 9 | v2.1.228 (stable fix) | 72 / 41 (#27801 Cowork VM) |
| OpenAI Codex | 10 | 10 | 3 Rust alphas (no changelog) | 96 / 81 (#20214 Windows freeze) |
| Gemini CLI | 10 | 10 | v0.55.1 stable + v0.56.0 nightly/preview | 12 comments (#26911 429s); 10 👍 (#23297 Enter deadlock) |
| Copilot CLI | 10 (41 tracker items updated) | 3 | None | 14 👍 (#4095 plugin update) |
| Kimi Code CLI | 3 | 8 | None | 34 comments (#1283 memory system) |
| OpenCode | 10 | 10 | None | 137 👍 / 34 (#16017 usage API) |
| Pi | 10 | 10 | None (0.84.1 current) | 25 comments (#6187 WSL login) |
| Qwen Code | 10 | 10 | v0.21.10 stable + preview/nightly + live-host | 7 comments (#8678 restore timeout) |
| DeepSeek TUI | 10 | 6 | None | 8 comments (#4959 `/stop`) |

*Note: "Hot issues highlighted" and "Key PRs" reflect the most significant items in each digest, not total tracker volume. Copilot CLI's 41 updated tracker items indicate the highest raw issue churn relative to its PR output.*

## 3. Shared Feature Directions

1. **Persistent memory & durable session context**
   Kimi's #1283 (AI-managed + manual memory) leads the discussion at 34 comments; Copilot requests durable context across repeated compactions (#4441); Gemini's Auto Memory cluster wants deterministic termination of low-signal retries (#26522); Pi asks for a decoupled compaction model/thinking budget (#7553); OpenCode is fighting infinite compaction loops (#27924); Claude Code seeks first-class cross-session coordination (#76727).

2. **Cost governance & usage transparency**
   OpenCode's Go-plan usage API (#16017, 137 👍) signals demand for programmatic cost monitoring; Claude Code faces multi-million-token fan-out burns (#67636) and disputed auto-recharges (#81703, $604.71); Gemini users want clearer 429/quota attribution (#26911); Copilot users are surprised by cross-model credit spending (#4377); DeepSeek's pricing endpoint outage (#5241) shows cost display is now a baseline feature.

3. **Windows reliability**
   Present in nearly every tracker: Codex's plugin/marketplace corruption cluster (#20214, #30270), Copilot's "Access is denied" plugin installs (#4095, #4151), Claude Code's Ctrl+C prompt wipe (#59408), Qwen's drive-letter link encoding (#8644), Kimi's PowerShell D:-drive startup bug (#2600), OpenCode's CRLF mangling (#37090), Pi's CMD duplicate output (#7947), DeepSeek's WSL2 connection failures (#4956).

4. **MCP hardening**
   Multi-account Gmail support (Claude Code #36024), reliable tool dispatch in Desktop (Claude Code #79986), BigInt serialization (Copilot #4211), GitLab OAuth issuer validation (Copilot #4439), CIMD-based OAuth registration (Codex #38089), MCP approval routing through shared review decisions (Codex #38081), and rich MCP tool contracts (Qwen #8568, 54 tools).

5. **Subagent orchestration & trust**
   Gemini's MAX_TURNS misreported as GOAL success (#22323) and Claude Code's 10–15 agent fan-out burning "a few million tokens" (#67636) frame the problem: users want deterministic caps, honest termination status, and no silent delegation overrides (Claude Code #80988 "heron_brook"). Copilot's GPT-5.6 Terra→Opus delegation (#4377), DeepSeek's leaked child-process events (#5325), Pi's subagent config-inheritance fix (#7897), and Qwen's inbound cross-session message gating (#8730) all point toward explicit, visible agent control.

6. **TUI/terminal stability & UX**
   Qwen's tmux/iTerm flicker (#8562, #8901), OpenCode's ALSA terminal corruption (#41763), Gemini's Enter deadlock (#23297) and sticky "Waiting input" (#25166), Claude Code's redraw stalls, DeepSeek's width regression (#5322), Pi's clipboard/scroll fixes (#7972, #7970), and Copilot's request to hide tool activity (#21252): terminal reliability remains the product surface for all CLI agents.

7. **Security hardening as a release driver**
   Critical CVEs triggered PRs in Gemini (shell-quote CVE-2026-9277 #28780; simple-git CVE-2026-28292 #28778) plus SSRF (#28557) and shell-expansion bypass (#28691) fixes; Copilot's adm-zip CVE report (#4442) and `pull_request_target` migration (#4449); Qwen's sharp bump for GHSA-f88m-g3jw-g9cj (#8952); Kimi's `assert`-stripping corrections (#2055, #2057); Claude Code's hookify rule-bypass fix (#85716).

## 4. Differentiation Analysis

| Tool | Core focus | Target users | Technical approach |
|---|---|---|---|
| Claude Code | Deepest plugin/skills/hooks ecosystem; MCP-first agent platform | Power users, teams, complex agent workflows | Node/TS with embedded ugrep/bfs; TUI + IDE/desktop; governance hooks |
| OpenAI Codex | Desktop App + Computer Use; ChatGPT ecosystem integration | ChatGPT/desktop users; Windows enterprise | Rust rewrite; plugin marketplace; gRPC code-mode sessions; aggressive alpha cadence |
| Gemini CLI | Enterprise/Google Cloud; security-first maintenance | Gemini API/Vertex/GCP enterprise | TS/Node; sandboxed execution; nightly+stable channels; Vitest eval infrastructure |
| Copilot CLI | GitHub-native governance; enterprise permissions; model delegation control | GitHub-centric enterprises | Node-based; GitHub Copilot model routing; `settings.json` policy surface |
| Kimi Code | Moonshot AI ecosystem; ACP interoperability | Kimi users, ACP-driven editors | Python; agent-spec protocol; PyInstaller packaging; reliability-focused PRs |
| OpenCode | Open-source hackability; V2 stability; Claude Code–style workflow parity | Open-source tinkerers; multi-agent setups | Cloudflare workerd/Durable Object runtime; ACP as subagent host; V2 TUI in beta |
| Pi | TUI ergonomics; provider-gateway flexibility | Terminal purists; multi-provider power users | TS on bun; Codex responses transport; Qwen CN / Cloudflare AI Gateway providers; intercom messaging |
| Qwen Code | Fastest release cadence; Web Shell UX; multimodal (images, CUA) | Alibaba Cloud/Qwen ecosystem; multimodal workflows | TS/Node; native DashScope; Web Shell; cross-session messaging; CUA driver |
| DeepSeek TUI | Minimal, reliable TUI for DeepSeek API; ACP code-editing bridge | DeepSeek API users; TUI minimalists | Rust/Ratatui; session snapshot isolation; agent-tool schema simplification |

## 5. Community Momentum & Maturity

- **Most active communities:** Claude Code sustains the deepest long-running engagement (72-comment Cowork issue open since February, 41 👍) alongside a contentious trust debate (#80988); OpenAI Codex's Windows freeze issue (96 comments, 81 👍) shows a large, vocal install base; Copilot CLI's tracker saw 41 items updated with no release — evidence of a fast-growing user base testing a slower-moving release train.
- **Rapidly iterating:** Qwen Code leads release velocity (stable + preview + nightly + live-host in one day), followed by Codex (3 changelog-less Rust alphas) and Gemini (stable + preview + nightly), with OpenCode merging 10 PRs while between releases.
- **Steady maintenance cadence:** Pi and Kimi show disciplined small-team patterns — closing long-standing bugs (WSL login hang, bun crash) and hardening internals (asserts, TOCTOU, snapshot reads).
- **Maturity signals:** Claude Code and Codex have the largest communities but also the most severe trust/regression fallout (billing disputes, silent delegation overrides, plugin corruption). Gemini differentiates on security posture (CVE-driven PRs, SSRF fixes). OpenCode's 137 👍 for a cost API request — even on a closed issue — suggests feature demand outpaces the maintainers' V2 stability priorities. DeepSeek TUI remains niche but maintainer-driven, with governance improvements (runtime isolation, schema simplification) beyond its community size.

## 6. Trend Signals

1. **Windows is the new compatibility frontier.** Eight of nine trackers feature Windows-specific failures at the top of their lists. Plugin lifecycles, native messaging hosts, path encoding, and TUI input handling on Windows are now the leading source of user friction — a significant opportunity for tools that treat Windows as a first-class target rather than a porting exercise.

2. **Cost governance is a product requirement, not an admin feature.** Usage APIs, fan-out caps, spend guardrails, and defensible billing reconciliation are being demanded at the feature-request level (OpenCode #16017, Claude Code #67636/#81703). "Runaway agent spend" is becoming a headline trust issue for vendors without mitigations.

3. **MCP is the standard integration substrate — and its rough edges are the competitive surface.** Multi-account support, OAuth/DCR+CIMD flows, serialization correctness, and approval routing are being fixed in parallel across Codex, Copilot, Claude Code, and Qwen. Interoperability will be won by tools that harden MCP protocol handling, not just add more tool servers.

4. **Subagent orchestration requires deterministic guardrails.** Communities are rejecting model-judgment delegation in favor of explicit controls: max spawn caps, honest termination status, opt-outs from injected delegation instructions, and cross-session coordination primitives. The "agent swarms" narrative is colliding with real cost and trust experience.

5. **Security scanning is inside the community loop.** Users running Trivy are filing CVEs and expecting same-day remediation; Gemini's shell-quote/simple-git upgrades, Qwen's sharp bump, and Copilot's adm-zip report show the bar has moved from "no known vulns at release" to "fast, visible fix cadence." Supply-chain hygiene is now a perception driver.

6. **Local and self-hosted model support is rising across ecosystems.** Gemini's SGLang/local OpenAI-compatible endpoint PR (#28681), Qwen's native DashScope path (#8714), Pi's Qwen CN and Cloudflare AI Gateway providers, and Copilot's `model_aliases` request (#21594) reflect cost, latency, and data-residency pressure on default provider lock-in.

7. **Session durability defines the long-running agent era.** Infinite compaction loops (OpenCode), resume OOMs (Copilot), daemon memory overcommit (Qwen #8182), and mid-run usage telemetry gaps (Pi #7911) all point to the same need: agents that run for days need first-class persistence, bounded memory, and observable state. This is the next battleground after single-session capability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot:** 2026-08-12 · Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The eight most-discussed Skill submissions, ranked by comment volume. **Note: none of the tracked PRs have been merged; all remain open**, indicating the review pipeline is the current bottleneck.

| # | Skill / PR | Functionality | Discussion highlights | Status |
|---|---|---|---|---|
| 1 | **[skill-creator eval fix](https://github.com/anthropics/skills/pull/1298)** | Fixes `run_eval.py` reporting `recall=0%` for every description; addresses Windows stream reading, trigger detection, and parallel workers | The most-commented PR in the repo. References issue #556 with 10+ independent reproductions — the description-optimization loop is "optimizing against noise." Three competing fixes exist (#1099, #1050), indicating a coordinated breakage | OPEN |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Typographic quality control: orphan word wrap, widow paragraphs, numbering misalignment in AI-generated documents | Argued as a universal pain point: "These issues affect every document Claude generates." Low controversy, clear scope | OPEN |
| 3 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | Create, fill, read, and convert OpenDocument files (.odt, .ods); includes ODT→HTML parsing and LibreOffice integration | Positions open-source document formats as a first-class citizen alongside the existing DOCX/PDF skills; broad trigger surface | OPEN |
| 4 | **[frontend-design revision](https://github.com/anthropics/skills/pull/210)** | Rewrites the existing frontend-design skill for clarity, actionability, and single-conversation executability | Community discussion centered on making skill instructions concrete enough for Claude to follow without ambiguity | OPEN |
| 5 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Two meta-skills: quality analysis across 5 dimensions (structure, docs, examples, resources…) and security auditing | Early meta-skill trendsetter (Nov 2025); the only PR proposing *self-regulating* skills. Probably influenced later quality-gate proposals | OPEN |
| 6 | **[self-audit](https://github.com/anthropics/skills/pull/1367)** | Universal pre-delivery audit: mechanical file-verification gate, then four-dimension reasoning audit in damage-severity order (v1.3.0) | Active iteration (created 2026-06-28, updated 2026-07-02). Proposes a model-agnostic, stack-agnostic quality gate; pairs with issue #1385 | OPEN |
| 7 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Full testing-stack guidance: Testing Trophy model, AAA unit test patterns, React Testing Library specifics, what *not* to test | Broad, practical scope; fills a notable gap — no equivalent skill exists in the official collection | OPEN |
| 8 | **[pyxel](https://github.com/anthropics/skills/pull/525)** | Retro/pixel-art/8-bit game development via `pyxel-mcp`; workflow: write → run_and_capture → inspect → iterate | Author is the Pyxel engine maintainer (kitao), lending credibility; updated as recently as 2026-07-15, signaling maintained interest | OPEN |

*Also notable:* **[color-expert](https://github.com/anthropics/skills/pull/1302)** — a deep color-science skill (ISCC-NBS, Munsell, OKLCH/OKLAB usage tables) — and **[plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)**, which addresses accumulating planning artifacts with no lifecycle.

---

## 2. Community Demand Trends

Distilled from the most-commented Issues:

**🔒 Security & trust boundary (highest engagement).** Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) exposed that community skills distributed under the `anthropic/` namespace impersonate official ones, creating a trust-boundary vulnerability where users grant elevated permissions unknowingly. This is the single most-discussed item in the repository.

**🔧 skill-creator tooling reliability.** Issues [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate in `run_eval.py`) and [#1169](https://github.com/anthropics/skills/issues/1169) (recall=0% even for literal slash-command queries) show the core skill-optimization loop is broken — undermining the entire skill-creation workflow. Related: [#202](https://github.com/anthropics/skills/issues/202) argues skill-creator itself violates best-practice guidelines.

**🏢 Enterprise sharing & distribution.** Issue [#228](https://github.com/anthropics/skills/issues/228) (8👍) requests org-wide skill sharing in Claude.ai — the current download-and-Slack workflow is untenable for teams. [#189](https://github.com/anthropics/skills/issues/189) (9👍) reports `document-skills` and `example-skills` plugins install identical content, doubling context-window usage.

**🧠 Context-window efficiency.** Issue [#1487](https://github.com/anthropics/skills/issues/1487): the bundled `claude-api` skill eagerly injects ~156k tokens in a single tool call, exhausting context. The proposed **[compact-memory](https://github.com/anthropics/skills/issues/1329)** skill (symbolic notation for agent state) targets the same pain from the authoring side.

**✅ Quality-gate meta-skills.** Issues [#1385](https://github.com/anthropics/skills/issues/1385) (pre-task calibration → adversarial review → delivery verification) and [#412](https://github.com/anthropics/skills/issues/412) (agent-governance: policy enforcement, threat detection, audit trails) show demand for skills that audit *AI output*, not just produce it.

**🔌 Platform & interoperability.** Ongoing requests for AWS Bedrock support ([#29](https://github.com/anthropics/skills/issues/29)) and exposing Skills as MCP servers ([#16](https://github.com/anthropics/skills/issues/16)). Windows compatibility is a recurring implicit theme — three separate PRs fix Windows-specific skill-creator bugs.

---

## 3. High-Potential Pending Skills

Active, open PRs that are strong merge candidates:

- **[document-typography](https://github.com/anthropics/skills/pull/514)** — Narrow, universally applicable, low-risk. A natural fit for the `document-skills` plugin.
- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** — Addresses a glaring gap in the collection; practical scope with concrete patterns.
- **[ODT skill](https://github.com/anthropics/skills/pull/486)** — Completes the document-format family (DOCX/PDF/ODT); strong trigger definitions.
- **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — Meta-skills that could become the repo's quality gate.

  **self-audit]((https://github.com/anthropics/skills/pull/1367)** — Actively iterated; pairs with issue #1385. High momentum, more complex scope.
- **[color-expert](https://github.com/anthropics/skills/pull/1302)** — Self-contained, expert-authored, no dependencies; likely to land cleanly.
- **[pyxel](https://github.com/anthropics/skills/pull/525)** — Maintainer-authored; niche but high-quality and continuously updated.
- **[plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)** — Directly addresses a named lifecycle gap (#1417); clear problem framing.

**Caveat:** all PRs in the repo are open, so "may land soon" reflects momentum, not pipeline confirmation.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *trust reliability* — fixing the broken skill-creator evaluation loop (recall=0%) and resolving the anthropic-namespace trust-boundary risk — followed closely by meta-skills that audit AI output quality and document-format specialists that work correctly with real-world files.**

---

# Claude Code Community Digest — 2026-08-12

## Today's Highlights

v2.1.228 shipped with fixes for interactive TUI redraw stalls, Windows Git discovery, and a `/tui` revert issue. Community attention remains concentrated on three fronts: the long-running Cowork VM startup failure ([#27801](https://github.com/anthropics/claude-code/issues/27801), 72 comments), a WSL2 memory-exhaustion regression traced to the embedded ugrep wrapper ([#54394](https://github.com/anthropics/claude-code/issues/54394)), and a contentious Opus 5-only system-prompt injection ("heron_brook") that silently overrides user delegation policy ([#80988](https://github.com/anthropics/claude-code/issues/80988)). MCP reliability, billing disputes, and agent cost governance remain recurring themes across the tracker.

## Releases

### v2.1.228 ([changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.228))
- Fixed interactive sessions that could stop redrawing entirely — while the process kept running — after a rare internal layout error.
- Fixed `git` / Git Bash not being found on Windows when Claude Code is launched from a parent folder of the Git installation.
- Fixed a `/tui` revert-related issue (detail truncated in the release notes).

## Hot Issues

1. **[#27801 — Cowork: "Failed to start Claude's workspace" — VM service not running, persists after reboot](https://github.com/anthropics/claude-code/issues/27801)** · 72 comments · 41 👍  
   The most active issue on the tracker, open since February and still unresolved. The Cowork workspace backend (VM service) fails to start and survives reboots, blocking the feature entirely. The sustained engagement suggests a widespread environment-dependent failure rather than a one-off misconfiguration.

2. **[#54394 — Embedded ugrep wrapper amplifies regex backtracking into V8-heap OOM (8 GB ceiling); host freezes on WSL2](https://github.com/anthropics/claude-code/issues/54394)** · 27 comments · 4 👍  
   Since v2.1.117, every `grep` shell invocation is routed through `claude.exe` via an `exec -a ugrep` shell-snapshot wrapper. A pathological regex can now escalate a grep-process OOM into a V8-heap OOM that freezes the WSL2 host. The thread contains deep root-cause analysis and is a strong signal that the native `bfs`/`ugrep` swap introduced unanticipated failure modes.

3. **[#36024 — Support multiple Gmail accounts in MCP integration](https://github.com/anthropics/claude-code/issues/36024)** · 25 comments · 77 👍  
   The most-upvoted feature request in the current set. The Gmail MCP server supports only one connected account, which breaks workflows for users juggling personal and Google Workspace accounts. High reaction count with relatively low comment volume indicates broad silent agreement.

4. **[#80988 — "heron_brook" prompt section injects "Do not call the AgentTool unless the user requested it" for Opus 5 only, no opt-out](https://github.com/anthropics/claude-code/issues/80988)** · 21 comments · 48 👍  
   v2.1.219 added an internal system-prompt section that overrides user-configured delegation policy for Opus 5 specifically, with no way to disable it. The community response is sharp: users see this as a trust and control regression, not a bug fix.

5. **[#79986 — Claude Desktop: external stdio MCP tools announced but never dispatched (zero tools/call)](https://github.com/anthropics/claude-code/issues/79986)** · 15 comments · 8 👍  
   After Claude Desktop 1.24012.1, MCP servers handshake and announce tools, but the app never sends a single `tools/call` — every invocation fails with "Failed to call tool." Reported across Windows/macOS/Linux and all install types; effectively breaks MCP in Chat mode.

6. **[#59408 — Ctrl+C and Ctrl+Shift+C silently clear prompt input with no confirmation or recovery](https://github.com/anthropics/claude-code/issues/59408)** · 14 comments · 10 👍  
   A Windows TUI data-loss bug: pressing Ctrl+C (or Ctrl+Shift+C) wipes the in-progress prompt with no undo. Trivial to reproduce, painful in practice for users who build long multi-line prompts.

7. **[#76727 — Cross-session coordination for independently-launched Claude Code sessions](https://github.com/anthropics/claude-code/issues/76727)** · 14 comments  
   Power users running many sessions against one shared working tree have no first-party coordination primitive; the only tool is a PreToolUse `deny` hook, which the author demonstrates has "silent holes." A well-argued gap analysis for multi-agent workflows.

8. **[#81703 — July 17 mass billing incident: usage credits charged despite plan allowance; $604.71 automatic recharges disputed](https://github.com/anthropics/claude-code/issues/81703)** · 12 comments  
   Users report being charged for paid usage credits while included plan allowance was available during Anthropic's acknowledged July 17 incident, with no reconciliation. Financial trust issue; paired with a similar August 1 incident in [#83062](https://github.com/anthropics/claude-code/issues/83062).

9. **[#73468 — macOS sandbox unusable: Seatbelt profile via `sandbox-exec -p` exceeds ARG_MAX with many git worktrees](https://github.com/anthropics/claude-code/issues/73468)** · 7 comments · 5 👍  
   Every sandboxed Bash command fails with `E2BIG: argument list too long`, including `printf ok`, once the inline Seatbelt profile exceeds ARG_MAX. The sandbox becomes 100% inoperable on macOS with large worktree setups — a clear repro with a clear root cause.

10. **[#67636 — Parallel agent spawning causes excessive token consumption before crashing](https://github.com/anthropics/claude-code/issues/67636)** · 6 comments  
    Claude spawned 10–15 agents for tasks that needed 1–2, burning "a few million tokens" before crashing. Raises systemic questions about agent fan-out heuristics and the absence of spend guardrails — echoed by similar cost-related complaints elsewhere in the tracker.

## Key PR Progress

1. **[#42996 — examples: Add MEP (Meat Puppet Elimination Protocol), an async state relay for multi-machine AI sessions](https://github.com/anthropics/claude-code/pull/42996)**  
   A zero-new-infrastructure pattern (three files) for preserving async state when switching machines or resuming sessions — aimed at eliminating context loss for developers who move between workstations.

2. **[#57888 — Scope `child_process_exec` to JS/TS files (fix Python false-positive)](https://github.com/anthropics/claude-code/pull/57888)** · CLOSED  
   The security-reminder hook's `"exec("` substring match also flagged Python's `asyncio.create_subprocess_exec()`. Scoping the rule to JS/TS eliminates the false positive.

3. **[#85925 — docs: Point remaining stale doc links at code.claude.com](https://github.com/anthropics/claude-code/pull/85925)**  
   Follow-up cleanup swapping old-domain `docs.claude.com` links for canonical `code.claude.com` targets across plugins, skills/agents/commands, and issue-template contact links.

4. **[#85834 — fix: HackerOne Bug Bounty Program access issue](https://github.com/anthropics/claude-code/pull/85834)**  
   Adjusts `devcontainer.json` so the hookify plugin installs correctly, addressing access to the HackerOne Bug Bounty Program. (Automated submission via AIOS Bounty Engine.)

5. **[#70173 — fix(commit-commands): Detect `[gone]` branches with `git branch -vv` in `clean_gone`](https://github.com/anthropics/claude-code/pull/70173)** · CLOSED  
   `/clean_gone` never deleted anything because `git branch -v | grep '\[gone\]'` misses branches whose upstream was deleted; switching to `git branch -vv` fixes the detection.

6. **[#85822 — docs: Fix stale doc links and README drift in plugins and examples](https://github.com/anthropics/claude-code/pull/85822)**  
   Docs-only cleanup verified against live redirects — fixes hooks documentation links and the plugins README.

7. **[#85806 — fix(security-guidance): Skip XSS warnings in docs](https://github.com/anthropics/claude-code/pull/85806)**  
   Reuses the existing `_DOC_EXTS` path filter to suppress XSS-family substring warnings in documentation and prose while preserving them for executable source, with regression coverage.

8. **[#85243 — fix(skills): Use spec-conformant names in the plugin-dev and hookify skills](https://github.com/anthropics/claude-code/pull/85243)**  
   Eight bundled skills declare title-cased `name:` fields containing spaces (e.g., "Agent Development"); this renames them to spec-conformant identifiers.

9. **[#85716 — fix(hookify): Load rules from ancestor `.claude` directories to prevent silent bypass](https://github.com/anthropics/claude-code/pull/85716)**  
   Fixes a silent failure mode where the hookify plugin's config loader missed security rules in parent `.claude` directories, allowing rules to be bypassed (fixes [#85613](https://github.com/anthropics/claude-code/issues/85613)).

## Feature Request Trends

- **MCP ecosystem maturity** — Users increasingly need MCP to handle real-world multi-account, multi-service setups: multiple Gmail accounts ([#36024](https://github.com/anthropics/claude-code/issues/36024)), reliable tool dispatch in Desktop ([#79986](https://github.com/anthropics/claude-code/issues/79986)), and custom `ANTHROPIC_BASE_URL` model resolution in VS Code ([#85977](https://github.com/anthropics/claude-code/issues/85977)).
- **Desktop/GUI polish** — Requests cluster around session and folder management: recent-folder entries in the GUI ([#33502](https://github.com/anthropics/claude-code/issues/33502), 37 👍), the session time-range filter regression ([#78775](https://github.com/anthropics/claude-code/issues/78775)), and long-prompt collapse controls ([#61675](https://github.com/anthropics/claude-code/issues/61675)).
- **Explicit, persistent policy control** — Users want durable control over agent behavior: a persistent off-switch for Remote Control ([#85980](https://github.com/anthropics/claude-code/issues/85980)), opt-outs from injected delegation instructions ([#80988](https://github.com/anthropics/claude-code/issues/80988)), and first-class cross-session coordination ([#76727](https://github.com/anthropics/claude-code/issues/76727)).
- **Cost governance** — A clear demand for guardrails on agent fan-out and predictable billing: capping parallel agent spawns ([#67636](https://github.com/anthropics/claude-code/issues/67636)) and reconciling plan-allowance vs. paid-credit billing ([#81703](https://github.com/anthropics/claude-code/issues/81703), [#83062](https://github.com/anthropics/claude-code/issues/83062)).

## Developer Pain Points

- **Network/API flakiness and poisoned sessions** — Persistent `ECONNRESET` on Windows even after the 2.1.228 fix ([#85979](https://github.com/anthropics/claude-code/issues/85979)); macOS reads of images >~200 KB deadlock every subsequent API call and survive `--resume` ([#85884](https://github.com/anthropics/claude-code/issues/85884)); SSE resets after the first chunk since 2.1.139 ([#84404](https://github.com/anthropics/claude-code/issues/84404)).
- **Regressions from toolchain swaps** — The embedded `ugrep`/`bfs` migration introduced an OOM escalation path on WSL2 ([#54394](https://github.com/anthropics/claude-code/issues/54394)), and sandboxed execution breaks outright on macOS with many worktrees ([#73468](https://github.com/anthropics/claude-code/issues/73468)).
- **Windows hybrid-environment friction** — Git/Git Bash discovery (addressed in 2.1.228), Ctrl+C silently wiping prompts ([#59408](https://github.com/anthropics/claude-code/issues/59408)), MSIX write-redirection false positives ([#84841](https://github.com/anthropics/claude-code/issues/84841)), and VS Code "NO MODELS AVAILABLE" with custom providers ([#85977](https://github.com/anthropics/claude-code/issues/85977)).
- **Update and install trust** — Auto-update reports success but leaves a non-functional stub binary ([#85975](https://github.com/anthropics/claude-code/issues/85975)); Desktop sessions open blank after a failed update/reinstall ([#85798](https://github.com/anthropics/claude-code/issues/85798)).
- **Billing and cost surprises** — Disputed auto-recharges after plan-allowance resets ([#81703](https://github.com/anthropics/claude-code/issues/81703), [#83062](https://github.com/anthropics/claude-code/issues/83062)) and multi-million-token burn from runaway parallel agents ([#67636](https://github.com/anthropics/claude-code/issues/67636)) are eroding trust.
- **Model instruction adherence** — Users report instructions being read, acknowledged, and then ignored, with memory-note collisions where the wrong note wins ([#85677](https://github.com/anthropics/claude-code/issues/85677)) — a reliability concern at the model-behavior layer.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-12

## Today's Highlights
Three new Rust alpha builds (`0.148.0-alpha.7` → `.9`) shipped with no detailed changelog. The issue tracker remains dominated by Windows desktop App plugin reliability, with the top issue at 96 comments and 81 👍. PR activity focused on TUI memory/perf improvements, MCP OAuth registration, and Windows sandbox fixes.

## Releases
Three incremental Rust alpha releases were published in the last 24 hours:

- [rust-v0.148.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.7)
- [rust-v0.148.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.8)
- [rust-v0.148.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9)

No detailed release notes were included in the available metadata.

## Hot Issues

- [openai/codex#20214](https://github.com/openai/codex/issues/20214) — **Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient resources.** The most engaging issue this cycle: 96 comments and 81 👍. It points to an app-level performance problem rather than constrained hardware.

- [openai/codex#17320](https://github.com/openai/codex/issues/17320) — **Excessive SQLite WAL writes during streaming because TRACE logs ignore `RUST_LOG`.** 31 comments, 39 👍. Highlights a logging + disk-I/O bug in the IDE extension path.

- [openai/codex#25391](https://github.com/openai/codex/issues/25391) — **Windows Computer Use plugin fails to bootstrap: native pipe path is unavailable.** 23 comments. Blocks Computer Use on Windows for Pro users.

- [openai/codex#26562](https://github.com/openai/codex/issues/26562) — **Computer Use plugin is unavailable in Codex Desktop on Windows.** 20 comments. Another instance of the Windows Computer Use feature failing to surface in the App despite subscription access.

- [openai/codex#21670](https://github.com/openai/codex/issues/21670) — **Windows Codex Desktop: Chrome plugin and Browser Use setup hang; plugin uninstall fails with OS error 5.** 15 comments. Shows browser automation and plugin lifecycle are both fragile on Windows.

- [openai/codex#25571](https://github.com/openai/codex/issues/25571) — **Windows Computer Use native pipe fails: helper paths unavailable on 26.527.31326.** 14 comments. Same family of Windows helper-path/bootstrap failures.

- [openai/codex#22114](https://github.com/openai/codex/issues/22114) — **Windows Codex Desktop corrupts `chrome@openai-bundled` cache when Chrome native host locks `extension-host.exe`.** 12 comments. A restart/uninstall loop caused by locked native messaging hosts.

- [openai/codex#30270](https://github.com/openai/codex/issues/30270) — **Bundled Browser/Chrome/Computer Use plugins disappear after Windows app updates due to stale bundled marketplace path.** Labeled `Papercuts 2026`, 12 comments. Represents a recurring update-lifecycle problem.

- [openai/codex#37403](https://github.com/openai/codex/issues/37403) — **[macOS regression] Desktop cannot resume Remote Control / CLI thread: "already has an active writer".** 10 comments, 9 👍. A recent macOS update broke a previously working off-hours remote-control workflow.

- [openai/codex#21252](https://github.com/openai/codex/issues/21252) — **TUI enhancement: add a CLI option to hide tool activity.** 9 comments, 17 👍. Popular request for cleaner long-session transcripts.

## Key PR Progress

- [openai/codex#38103](https://github.com/openai/codex/pull/38103) — **Avoid cloning MCP invocations in TUI history.** Uses borrowed invocation/server/tool names during TUI rendering, reducing allocations.

- [openai/codex#38101](https://github.com/openai/codex/pull/38101) — **Attach hosted app context to file uploads.** Adds connector ID, action name, and model to hosted-app file creation requests; falls back to local file size when server does not return one.

- [openai/codex#38092](https://github.com/openai/codex/pull/38092) — **Simplify queued user message admission.** User messages are admitted as soon as Core accepts a new turn or steer, without waiting for rollout persistence.

- [openai/codex#38089](https://github.com/openai/codex/pull/38089) — **Add CIMD support to MCP OAuth registration.** Prefers Client ID Metadata Documents for public clients with loopback callbacks; falls back to Dynamic Client Registration.

- [openai/codex#38087](https://github.com/openai/codex/pull/38087) — **Route gRPC code-mode sessions through the shared HTTP client.** Adds outbound proxy and custom CA support for gRPC code-mode connections.

- [openai/codex#38086](https://github.com/openai/codex/pull/38086) — **Support execution-host context when resolving cloud config.** Allows `~` paths to resolve against an explicitly supplied home directory.

- [openai/codex#38081](https://github.com/openai/codex/pull/38081) — **Use `ReviewDecision` for MCP tool approvals.** Introduces persistent MCP approval amendments and routes MCP approval responses through the shared review-decision type.

- [openai/codex#38080](https://github.com/openai/codex/pull/38080) — **Allow nested Git repositories in the Windows sandbox.** Fixes Git ownership issues when commands run as the sandbox user by trusting the worktree root plus wildcard.

- [openai/codex#38078](https://github.com/openai/codex/pull/38078) — **Reduce cloning in world-state patch handling.** Deserializes typed section snapshots from borrowed JSON and applies merge patches in place.

- [openai/codex#38075](https://github.com/openai/codex/pull/38075) — **Respect rendered width when adding TUI history.** Uses current terminal width for widget initialization and improves history-cell visibility checks.

## Feature Request Trends

- **Cleaner TUI/CLI sessions:** Users want to hide/collapse tool activity (`#21252`) and avoid full thread-history rerenders when resuming (`#34663`). The common goal is shorter, scannable long-running sessions.

- **Enterprise/custom-model configuration:** `#21594` requests first-class `model_aliases` mapping so gateway model names can resolve to canonical Codex model metadata for CLI and IDE extension usage.

- **Stability-driven "Papercuts" work:** Issues labeled `Papercuts 2026`, such as `#30270`, reflect growing community demand for fixing the bundled plugin/marketplace lifecycle rather than adding new features.

## Developer Pain Points

- **Windows plugin/marketplace corruption after app updates:** Many issues report stale `.tmp` marketplace paths, EBUSY/EFS errors, and Browser/Computer Use plugins silently breaking after Microsoft Store updates (`#26792`, `#26501`, `#25780`, `#28275`, `#32589`, `#33738`).

- **Windows Browser Use / Computer Use bootstrap failures:** Native messaging hosts are not registered or fail to start (`#28950`, `#25391`, `#25571`), and Chrome native-host file locks corrupt plugin caches (`#22114`, `#24296`).

- **Desktop App performance regressions:** UI freezes and plugin-list hangs are reported even on capable Windows hardware (`#20214`, `#34244`); excessive SQLite WAL writes from TRACE logs also concern developers (`#17320`).

- **Cross-platform regressions:** The macOS Remote Control / CLI thread resume failure (`#37403`) shows that non-Windows workflows are also sensitive to desktop-client updates.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-12

## Today's Highlights
The v0.56.0 nightly and v0.55.1 stable releases shipped this week, headlined by a fix for false model capacity exhaustion errors (#28730) and a new local eval report command (#28369). Security work dominated PR activity, with critical dependency upgrades for shell-quote and simple-git plus hardening against SSRF and shell variable-expansion bypasses. Community attention remains focused on shell hangs, subagent reliability, and rate-limit errors.

## Releases
- **[v0.55.1](https://github.com/google-gemini/gemini-cli/releases)** — Stable patch: fixed release verification (`npm ci --ignore-scripts`), prevented workspace binary shadowing in CI, and introduced a tool registry feature.
- **[v0.56.0-preview.1](https://github.com/google-gemini/gemini-cli/releases)** — Preview with changelog updates and version bumps; groundwork for the 0.56 cycle.
- **[v0.56.0-nightly.20260812.g5024443c7](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260812.g5024443c7)** — Includes [PR #28730](https://github.com/google-gemini/gemini-cli/pull/28730) (false capacity exhaustion fix, quota lookup mapping, "Keep trying" UI preservation) and [PR #28369](https://github.com/google-gemini/gemini-cli/pull/28369) (local eval report + developer docs).
- **[v0.55.0-preview.3](https://github.com/google-gemini/gemini-cli/releases)** — Cherry-pick patch on top of v0.55.0-preview.2 for the capacity-exhaustion fix.

## Hot Issues
- **[#26911 — 429 Too Many Requests](https://github.com/google-gemini/gemini-cli/issues/26911)** *(closed)*: Users report hitting 429s after 5–10 minutes in a fresh quota session, with the CLI stuck "thinking" for up to an hour. 12 comments; the false capacity-exhaustion fix in the nightly directly targets this class of problem.
- **[#23297 — Pressing Enter does nothing](https://github.com/google-gemini/gemini-cli/issues/23297)** *(open)*: The top-voted issue this cycle (10 👍). Input becomes unresponsive after shell restarts, with no obvious debug path. Community frustration is high around terminal input reliability.
- **[#22323 — Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** *(open)*: `codebase_investigator` reports `status: "success"` even when it hit max turns before doing analysis — masking real failures and producing misleading agent trajectories.
- **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** *(open)*: Maintainer EPIC to expand behavioral eval coverage (76 tests currently) and harden component-level testing across the 6 supported Gemini models.
- **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** *(open)*: EPIC investigating whether AST-aware tooling can reduce token noise, improve method-bound precision, and reduce misaligned reads.
- **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** *(open)*: Anecdotal but widely echoed: custom skills and sub-agents are ignored unless explicitly instructed, even for highly relevant tasks like gradle/git workflows.
- **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** *(open)*: Sessions the extractor skips as low-signal are never marked processed, so they resurface repeatedly — wasting tokens and background-agent cycles.
- **[#24828 — Sandbox does not forward GOOGLE_GENAI_API_VERSION](https://github.com/google-gemini/gemini-cli/issues/24828)** *(open)*: With `GEMINI_SANDBOX=true` and Vertex-compatible API paths, the sandbox drops the env var, causing 404 `ModelNotFoundError`.
- **[#24707 — run_shell_command hangs 5 minutes on interactive commands](https://github.com/google-gemini/gemini-cli/issues/24707)** *(open)*: Hardcoded 5-minute timeout with no TTY detection means `git pull` waiting for credentials or slow `grep -r` blocks the agent for the full duration.
- **[#25166 — Shell stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** *(open)*: 3 👍. Simple CLI commands hang indefinitely while the UI shows "Awaiting user input" despite the process finishing — a recurring shell-state bug.

## Key PR Progress
- **[#28730 — Fix false model capacity exhaustion & quota mapping](https://github.com/google-gemini/gemini-cli/pull/28730)** *(merged into nightly)*: Corrects client-side quota lookup, preserves the "Keep trying" option during capacity surges, and eliminates misleading exhaustion errors.
- **[#28369 — Local eval report command + developer docs](https://github.com/google-gemini/gemini-cli/pull/28369)** *(merged into nightly)*: Adds `npm run eval:report` to aggregate Vitest pass rates by model with duplicate-test support.
- **[#28691 — Block $VAR/${VAR} expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28691)** *(open)*: Closes a bypass in `detectBashSubstitution()`/`detectPowerShellSubstitution()` and hardens the auto-dedup CI workflow.
- **[#28780 — Upgrade shell-quote to 1.8.4 (CVE-2026-9277)](https://github.com/google-gemini/gemini-cli/pull/28780)** *(open)*: Critical-severity Trivy finding; upgrades from 1.8.3.
- **[#28778 — Upgrade simple-git to 3.32.3 (CVE-2026-28292)](https://github.com/google-gemini/gemini-cli/pull/28778)** *(open)*: Critical-severity dependency fix, bumps from 3.28.0.
- **[#28557 — Fix SSRF in web-fetch.ts via async DNS resolution](https://github.com/google-gemini/gemini-cli/pull/28557)** *(closed)*: Replaces sync `isPrivateIp()` with async resolution so hostnames resolving to 169.254.169.254 are correctly blocked.
- **[#28681 — SGLang and local OpenAI-compatible endpoints](https://github.com/google-gemini/gemini-cli/pull/28681)** *(open)*: Adds support for self-hosted / local model endpoints — a significant expansion of the CLI's provider surface.
- **[#28680 — Reject A2A OpenID Connect auth during validation](https://github.com/google-gemini/gemini-cli/pull/28680)** *(open)*: Prevents a config-valid-but-runtime-broken state for remote A2A agents using OpenID Connect.
- **[#28678 — Fix OAuth callback timeout leak](https://github.com/google-gemini/gemini-cli/pull/28678)** *(open)*: Centralizes callback server settlement and cleanup to prevent stale timers/memory leaks.
- **[#28688 — Dynamic Cloud Workstations OAuth redirect URI](https://github.com/google-gemini/gemini-cli/pull/28688)** *(closed)*: Resolves OAuth failures in Cloud Workstations VMs by resolving the proxy redirect URI dynamically instead of hardcoding `localhost`.

## Feature Request Trends
- **Local/self-hosted model support**: PR #28681 (SGLang, OpenAI-compatible endpoints) aligns with growing demand for non-Vertex/non-Gemini backends.
- **AST-aware codebase tooling**: Issues #22745/#22746 push for AST-based read/search/mapping to cut token waste and improve navigation precision.
- **Evals infrastructure maturity**: #24353 and PR #28369 signal a sustained investment in behavioral evals, component-level testing, and local reporting.
- **Memory system hardening**: The Auto Memory cluster (#26516, #26522, #26523, #26525) requests deterministic redaction, quarantine of invalid patches, and termination of low-signal retries.
- **Browser agent resilience**: #22232 and #22267 ask for session takeover, lock recovery, and respect for `settings.json` overrides.
- **Visibility into subagent behavior**: #22598 requests subagent trajectory sharing via `/chat share`; #22323 highlights the need for honest termination reporting.

## Developer Pain Points
- **Rate limits & capacity errors**: 429s and false "capacity exhausted" messages (#26911) interrupt long-running sessions; users want clearer quota attribution and retry behavior.
- **Shell hangs and input deadlocks**: The cluster of issues around Enter-key unresponsiveness (#23297), post-command "Waiting input" (#25166), and interactive-command timeouts (#24707) makes shell execution the most complained-about subsystem this week.
- **Subagent trust issues**: MAX_TURNS reported as GOAL success (#22323) and subagents running despite disabled configs (#22093) erode confidence in agent orchestration.
- **Security anxiety**: Users are shipping with critical CVEs (shell-quote, simple-git) and are actively reporting bypass vectors (variable expansion, SSRF) — the community is clearly running Trivy and expecting fast remediation.
- **Sandbox/env parity**: Missing env var forwarding in sandbox mode (#24828) and workstation-specific OAuth failures (PR #28688) show friction for enterprise/Vertex users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-12

## Today’s Highlights

Copilot CLI shipped no new release in the last 24 hours, but the issue tracker was very active with 41 updated items. Windows plugin install/update failures remain the most visible community pain point, especially #4095 with 14 👍 reactions. Meanwhile, recent triage issues reveal growing demand for better model selection transparency, skill/plugin deduplication, and enterprise/Permissions governance.

## Releases

None in the last 24 hours.

## Hot Issues

- **[#4095 — Windows: plugin update fails with “Access is denied” while VS Code is running](https://github.com/github/copilot-cli/issues/4095)**  
  `copilot plugin update` fails on Windows when the VS Code Copilot extension holds watcher handles on installed plugins. With 14 👍, it is the highest-reaction issue in this window and points to a common Windows workflow blocker.

- **[#4422 — All Claude models disabled under CLI model selection for Enterprise accounts](https://github.com/github/copilot-cli/issues/4422)**  
  Users report Claude Sonnet 5 / 4.8 and other Claude models becoming unavailable in the CLI even though they are enabled in GitHub settings. 3 👍 suggests broad enterprise impact.

- **[#4251 — Resume of a large session OOMs / grinds one CPU core for ~70 min in v1.0.74](https://github.com/github/copilot-cli/issues/4251)**  
  A controlled A/B test isolates a regression in v1.0.74 that causes 3–4× memory usage when resuming large sessions. Important for long-running agent workflows.

- **[#4151 — Windows: plugin install fails with “Access is denied” for all sources](https://github.com/github/copilot-cli/issues/4151)**  
  Installation fails 100% of the time on Windows 11 for marketplace, direct GitHub repo, and local directory sources. Complements #4095 and suggests a systemic Windows permission handling issue.

- **[#4211 — Copilot CLI cannot handle BigInt in structured MCP responses](https://github.com/github/copilot-cli/issues/4211)**  
  MCP servers returning large numbers crash the CLI with `TypeError: Do not know how to serialize a BigInt`, aborting all ongoing tasks. A concrete MCP serialization gap.

- **[#4431 — Using `/model config` wipes all settings](https://github.com/github/copilot-cli/issues/4431)**  
  In v1.0.79, setting a user-wide model overwrites `settings.json` and destroys existing configuration. Closed, but a severe data-loss bug and likely hotfix candidate.

- **[#3976 — Native `tgrep` indexer OOM-kills the host on large monorepos](https://github.com/github/copilot-cli/issues/3976)**  
  The `tgrep` trigram indexer daemon has no upper bound/memory cap. Users on large monorepos report host OOM kills at session startup.

- **[#4451 — Explicit slash skill is redundantly reloaded through model registry and fails](https://github.com/github/copilot-cli/issues/4451)**  
  A user-invoked slash skill resolves successfully but is then re-loaded via the `skill()` tool, failing with “Skill not found” for model-excluded skills. Fresh issue with 2 👍 and strong relevance to custom skill workflows.

- **[#4405 — Copilot Free in GitHub Codespaces: “No model available” after update](https://github.com/github/copilot-cli/issues/4405)**  
  Free-tier Codespaces users cannot run prompts after a CLI update. Auto selection, token isolation, and re-login do not resolve it. Blocks a significant user segment.

- **[#4439 — CLI rejects GitLab MCP OAuth metadata due to RFC 8414 issuer mismatch](https://github.com/github/copilot-cli/issues/4439)**  
  GitLab Self-Managed MCP servers using OAuth 2.0 Dynamic Client Registration fail authentication in v1.0.79. Important for enterprise MCP interoperability.

## Key PR Progress

Only 3 PRs were updated in the last 24 hours.

- **[#4449 — Migrate pull request automation away from `pull_request_target`](https://github.com/github/copilot-cli/pull/4449)**  
  Draft PR that moves PR-driven workflows off `pull_request_target` to reduce security risk from untrusted PR input. Repository-write actions are separated into safer, lower-privilege workflows.

- **[#4428 — Add initial devcontainer configuration](https://github.com/github/copilot-cli/pull/4428)**  
  Adds a devcontainer config to make repository setup and contribution environments more consistent.

- **[#4452 — Revert “copilot/fix with copilot”](https://github.com/github/copilot-cli/pull/4452)**  
  A revert PR opened and closed on the same day; no detailed summary was provided.

## Feature Request Trends

- **More control over model selection and delegation**  
  Users want user-selected defaults honored immediately (#4434), independent reviewer models for rubber-duck (#4380, #4432), and prevention of surprising subagent delegation such as GPT-5.6 Terra calling Opus (#4377).

- **Persistent, durable session context**  
  Requests include preserving durable context across repeated compactions (#4441), adding a condensed autopilot timeline (#2623), and making session resume fast and memory-safe (#4251).

- **Enterprise and policy governance**  
  Enterprises want enforced CLI sandbox and configuration policies (#4446), auto-allow permissions on session start (#3877), and permission prompts that distinguish read-only from write operations outside the working directory (#4443).

- **Broader interop with Claude Code and other agent ecosystems**  
  Users ask for reading `.claude/rules` (#4440) and safer handling of `.claude/agents/*/AGENT.md` `model:` fields (#4437). MCP robustness is also a theme: BigInt serialization (#4211) and OAuth issuer validation (#4439).

- **Skill and plugin lifecycle improvements**  
  Requests focus on deduplicating skills loaded from both repo and plugin (#4430), making `disable-model-invocation` skills still explicitly invokable (#4438), and avoiding redundant model-registry skill loads (#4451).

## Developer Pain Points

- **Windows plugin install/update is fragile**  
  Two issues report `Access is denied (os error 5)` during plugin install or update (#4095, #4151). The VS Code extension holding file watchers appears to be a major cause, and #4095 received 14 👍.

- **Model availability mismatches are common**  
  Free-tier Codespaces users get “No model available” (#4405); Enterprise users lose Claude models (#4422); auto mode can select unavailable reasoning levels and crash (#4445); user-configured default models are ignored until restart (#4434).

- **Memory and performance regressions hurt long sessions**  
  Large session resume OOMs (#4251), `tgrep` indexer OOM (#3976), and grep/search stalls (#4448) make monorepo and long-lived workflows unreliable.

- **Unexpected model delegation and cost**  
  Users are surprised by cross-model delegation: GPT-5.6 Terra spending credits on Opus (#4377), rubber-duck reviews staying in the same model family (#4380), and `model:` arguments overriding complementary strategies (#4432).

- **Configuration footguns and data loss**  
  `/config model` wiping all settings (#4431) is the most severe example. User-level model settings also not being applied to new sessions (#4434) creates additional confusion.

- **Security and compliance concerns are rising**  
  A reported bundled `adm-zip` vulnerability with CVE-2026-39244 (#4442) and the `pull_request_target` migration PR (#4449) show increased scrutiny of supply chain and CI/CD security.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-12

## Today's Highlights
No new release shipped in the last 24 hours. Community activity is focused on a long-running request for persistent memory (#1283), a new quote-and-reply interaction idea (#2601), and a Windows PowerShell working-directory bug (#2600). Meanwhile, 8 PRs were updated, mostly around reliability fixes: replacing unsafe `assert` statements, eliminating a TOCTOU race, improving ACP shell routing, and fixing PyInstaller packaging.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues
Only 3 issues were updated in the last 24 hours. All are listed below.

- [**#1283** — [enhancement] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  **Author:** CatKang | **Created:** 2026-02-27 | **Updated:** 2026-08-11 | **Comments:** 34  
  This is the most substantial community discussion in the current set. It proposes a memory system combining AI-managed automatic notes with user-defined manual instructions so Kimi Code CLI can retain project patterns and preferences across sessions. With 34 comments, it clearly remains a highly requested direction.

- [**#2601** — [Feature Request] Quote & Reply: comment on any selected part of an AI response in Kimi Web](https://github.com/MoonshotAI/kimi-cli/issues/2601)  
  **Author:** topit | **Created:** 2026-08-11 | **Updated:** 2026-08-11 | **Comments:** 0  
  A new request to let users select any text span in an assistant response — code block, plan step, or diff line — and attach a follow-up comment or question. This would improve review-style workflows. No community replies yet, but it represents an interesting interaction-model request.

- [**#2600** — [bug] Windows中的powershell7默认D盘启动，打开kimi code会找不到路径](https://github.com/MoonshotAI/kimi-cli/issues/2600)  
  **Author:** RooKichenn | **Created:** 2026-08-11 | **Updated:** 2026-08-11 | **Comments:** 0  
  Windows users who set PowerShell 7 to start from the D: drive can hit path-resolution failures when launching `kimi code` from that directory. The report is against v0.33 and highlights a cross-platform startup-path edge case.

## Key PR Progress
8 PRs were updated in the last 24 hours.

- [**#2509** — [OPEN] feat(kimi): configurable thinking effort and /effort command](https://github.com/MoonshotAI/kimi-cli/pull/2509)  
  **Author:** n-WN  
  Adds a `/effort` command and configurable thinking effort, resolving #2501 and building on earlier `reasoning_effort` support. This is the most feature-oriented PR in the current set.

- [**#2057** — [CLOSED] fix(acp): replace assert statements with proper RuntimeError exceptions](https://github.com/MoonshotAI/kimi-cli/pull/2057)  
  **Author:** hobostay  
  Replaces 5 `assert` statements in `acp/session.py` with `RuntimeError` exceptions so critical invariants are not silently stripped by Python’s `-O` flag.

- [**#2056** — [CLOSED] fix(wire): eliminate TOCTOU race in WireFile.append_record](https://github.com/MoonshotAI/kimi-cli/pull/2056)  
  **Author:** hobostay  
  Fixes a time-of-check-to-time-of-use race between `exists()` and `stat()` in `WireFile.append_record`, preventing crashes if the file is deleted concurrently.

- [**#2055** — [CLOSED] fix(agentspec): replace assert with proper AgentSpecError exception](https://github.com/MoonshotAI/kimi-cli/pull/2055)  
  **Author:** hobostay  
  Replaces `assert agent_spec.extend is None` with a proper `AgentSpecError`, again addressing the `python -O` assertion-stripping problem.

- [**#1328** — [CLOSED] Fix minor bugs in file tools and UI feedback](https://github.com/MoonshotAI/kimi-cli/pull/1328)  
  **Author:** hobostay  
  Fixes replacement-count calculation in `StrReplaceFile` when multiple edits are applied, plus other small file-tool and UI feedback bugs.

- [**#1082** — [CLOSED] fix(pyinstaller): filter non-existent dateparser cache files](https://github.com/MoonshotAI/kimi-cli/pull/1082)  
  **Author:** hobostay  
  Prevents PyInstaller collection failure by filtering out lazily generated `dateparser` cache files that may not exist in fresh CI environments.

- [**#1077** — [CLOSED] fix: remove redundant mode validation in WriteFile tool](https://github.com/MoonshotAI/kimi-cli/pull/1077)  
  **Author:** hobostay  
  Removes duplicate runtime validation of the `mode` parameter in the `WriteFile` tool, simplifying the code without changing behavior.

- [**#1393** — [CLOSED] fix(acp): route shell commands through terminal args](https://github.com/MoonshotAI/kimi-cli/pull/1393)  
  **Author:** hanhan3344  
  Fixes ACP Shell terminal execution by correctly separating the shell executable and its invocation args. Adds regression coverage for both bash and PowerShell command routing.

## Feature Request Trends
Based on the currently visible issues:

- **Persistent memory and context** is the strongest request direction: users want Kimi Code CLI to remember project patterns, preferences, and useful context automatically or via manual instructions.
- **Selection-based interaction** is emerging: users want to quote-and-reply on specific parts of an AI response, such as a code block, plan step, or diff line.
- **Cross-platform path robustness** is another visible theme: Windows users need correct behavior when starting the CLI from non-default drives like D:.
- **Configurable reasoning effort** also appears via PR #2509, indicating demand for user control over model thinking depth.

## Developer Pain Points
Recurring themes from the active issues and PRs:

- **Windows path handling:** Launching `kimi code` from a non-C drive in PowerShell 7 can cause path lookup failures.
- **Loss of context across sessions:** Without a memory system, developers must repeatedly re-explain project conventions and preferences.
- **Unsafe `assert` usage:** Critical invariant checks using `assert` are dangerous in production because Python’s `-O` flag strips them.
- **File race conditions:** TOCTOU issues like the one in `WireFile.append_record` can cause nondeterministic failures.
- **Packaging and CI reproducibility:** Lazily generated cache files, such as `dateparser`’s timezone cache, can break PyInstaller builds in clean environments.
- **ACP shell command routing:** Properly passing shell executables vs. shell arguments is fragile across bash and PowerShell, requiring targeted regression tests.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-12

## Today's Highlights

No release shipped in the last 24 hours. Community attention is concentrated on V2 stability and TUI reliability: ALSA terminal corruption, infinite retry/compaction loops, and MCP tool-snapshot races are drawing rapid PR follow-ups. At the same time, a wave of Claude Code–style slash-command feature requests signals growing demand for operational workflows inside OpenCode.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#16017 — Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)**  
   Closed feature request with 34 comments and 137 👍. Users want a public API endpoint for Go plan subscription usage/balance data, indicating strong demand for programmatic cost monitoring.

2. **[#27924 — Infinite compaction loop when compression fails](https://github.com/anomalyco/opencode/issues/27924)**  
   Session can enter `overflow → compact → still overflow` forever. Critical reliability issue for long-running conversation contexts.

3. **[#41848 — LLM retry has no max attempts](https://github.com/anomalyco/opencode/issues/41848)**  
   Stream errors trigger indefinite retries with `RETRY_MAX_DELAY` set to ~24 days, leaving the UI stuck on "Thinking..." indefinitely.

4. **[#41806 — Instance bootstrap hangs forever on Linux](https://github.com/anomalyco/opencode/issues/41806)**  
   A spawned git child exits but is never reaped, so the bootstrap await never settles. TUI renders, but Enter cannot start a session.

5. **[#41763 — ALSA errors flood and corrupt the terminal in V2 TUI](https://github.com/anomalyco/opencode/issues/41763)**  
   Interaction repeatedly initializes ALSA on machines without a sound card, printing diagnostics over the TUI. High-impact V2 beta bug.

6. **[#41777 — V2 webfetch returns null inside Code Mode](https://github.com/anomalyco/opencode/issues/41777)**  
   Regression between next builds: `webfetch` completes successfully but returns no content, and is missing from the top-level tool list.

7. **[#39831 — Zen gpt-5.6-luna / gpt-5.6-terra fail with HTTP 403](https://github.com/anomalyco/opencode/issues/39831)**  
   Specific Zen models consistently fail with "Upstream request failed", while gpt-5.4-nano works. Points to provider/model-specific routing issues.

8. **[#37090 — apply_patch messes up Windows line endings](https://github.com/anomalyco/opencode/issues/37090)**  
   The `apply_patch` and `write` tools introduce LF line endings into CRLF Windows files. Causes noisy diffs and potential corruption for Windows users.

9. **[#41875 — apply_patch Add File can overwrite an existing file](https://github.com/anomalyco/opencode/issues/41875)**  
   `add` hunks do not verify the target is absent. Verified on `dev`; serious data-loss risk.

10. **[#41751 — Exactly 2 project skills silently dropped in server/web mode](https://github.com/anomalyco/opencode/issues/41751)**  
   In git repos, server/web mode drops exactly two skills, while CLI/TUI loads all skills. Suggests a deterministic but unexplained filtering bug.

## Key PR Progress

1. **[#41918 — workerd runtime profile and SDK entrypoint](https://github.com/anomalyco/opencode/pull/41918)**  
   Enables an OpenCode server to run inside a Cloudflare Durable Object. A notable platform expansion for server-hosted agents.

2. **[#41904 — Add Claude Code ACP runtime](https://github.com/anomalyco/opencode/pull/41904)**  
   Allows running Claude Code inside OpenCode via the Agent Client Protocol. Potentially major for users who want mixed-model workflows.

3. **[#41789 — Expose local attachment paths](https://github.com/anomalyco/opencode/pull/41789)**  
   Restores models' access to the resolved filesystem paths of explicitly attached images and directories. Closes #41443 and #41454.

4. **[#41884 — Gate tool snapshot on initial MCP registration](https://github.com/anomalyco/opencode/pull/41884)**  
   Fixes a race where boot-resumed sessions take a tool snapshot before MCP tools exist in the registry.

5. **[#41899 — Record location switches](https://github.com/anomalyco/opencode/pull/41899)**  
   Durable sessions now log location changes as timeline messages, send them to model context, and preserve them through compaction.

6. **[#41770 — Stop retrying unavailable audio](https://github.com/anomalyco/opencode/pull/41770)**  
   Directly closes #41763 by disposing failed native audio engines and ceasing retry attempts when no playback device is available.

7. **[#41923 — Surface plugin failures in TUI](https://github.com/anomalyco/opencode/pull/41923)**  
   Adds a persistent failed-plugin count beside MCP status and a `/plugins` route that reveals error details.

8. **[#41922 — Compact turn token usage with expandable steps](https://github.com/anomalyco/opencode/pull/41922)**  
   Collapses verbose per-step token tables into a single summary line, improving `debug.turn_tokens` readability for tool-heavy turns.

9. **[#41900 — Render instruction updates as compact notices](https://github.com/anomalyco/opencode/pull/41900)**  
   Prevents multi-hundred-line model-facing instruction text from being dumped into the transcript.

10. **[#41790 — Tolerate older migration schemas](https://github.com/anomalyco/opencode/pull/41790)**  
   Makes V1 import robust for pre-launch databases missing nullable fields, retaining all available project/session/message data.

## Feature Request Trends

- **Claude Code–style slash commands**: A cluster of new requests proposes `/usage`, `/cost`, `/security-review`, `/verify`, `/simplify`, `/btw`, `/approve`, and `/context` (#41908–#41915). The pattern is clearly to bring CI-style quality gates and ephemeral side questions into OpenCode sessions.
- **Usage and cost visibility**: Beyond slash commands, #16017 asks for a public Go plan usage API. Users want both in-TUI and programmatic accounting.
- **TUI configurability**: #28191 (permission prompt height/expanded state) and #13033 (silent/background compaction) show demand for making the TUI less intrusive during long agent runs.
- **Cross-platform file fidelity**: #37090 (CRLF line endings) and #37602 (file encoding parameter such as GBK) indicate real Windows/non-UTF-8 user pain.
- **Ecosystem/plugin integrations**: Requests include a GitHub PR tracker plugin (#41857), VS Code notifications (#39936), and the ACP runtime PR (#41904), signaling a push toward richer external-tool integration.

## Developer Pain Points

- **Linux terminal corruption**: ALSA errors flood and corrupt the TUI, especially on machines without sound devices (#41763, #41890). This is a recurring V2 beta complaint.
- **Hangs and infinite loops**: The most serious reliability issues are the infinite compaction loop (#27924), unbounded LLM retries (#41848), and the zombie-child bootstrap hang (#41806).
- **Data integrity risks**: `apply_patch` can overwrite existing files (#41875); Windows line endings get mangled (#37090); V1 migration breaks on apostrophes in JSON payloads (#41869).
- **Desktop UI polish**: The Add server dialog has uneditable fields (#38193), and the close button behavior (#18134) still doesn't match user expectations on Windows.
- **V2 regression churn**: Users are hitting regressions between `next` builds — webfetch returning null (#41777), inherited cwd on new sessions (#41905), dropped skills in server mode (#41751), and optional fields that refuse to submit (#41919).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-12

## Today's Highlights
No new releases landed in the last 24 hours; the project remains on 0.84.1. Reliability is the through-line today: a combined edit-tool fix for single-object `edits` and whitespace-tolerant fuzzy matching was merged, a PR preserving `usage` in streaming events is heading for merge, and long-running pain points — the WSL Copilot login hang and the 0.84.x bun crash — were closed out. Meanwhile, the ecosystem is expanding with Qwen's China Token Plan provider, Cloudflare AI Gateway transport, and a community-built intercom extension for session-to-session messaging.

## Releases
No new releases in the last 24 hours.

## Hot Issues

- **[#6187 – Pi login hangs in WSL after Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)** (closed, 25 comments) — The most-commented issue of the cycle: browser auth completes but the WSL client never detects it and hangs. Highlights the fragility of the device-flow login path.
- **[#7730 – High CPU usage on macOS with long sessions](https://github.com/earendil-works/pi/issues/7730)** (open, 8 👍) — CPU swings between 50–110% with 600–800 MB RAM, seemingly correlated with session/context length. The most upvoted open bug this cycle; community wants a real fix.
- **[#7846 – 0.84.0/0.84.1 crash on bun runtime](https://github.com/earendil-works/pi/issues/7846)** (closed, 10 comments) — `zlib.createZstdDecompress is not a function` crashes pi under bun via undici. A clear runtime-compat regression, quickly triaged.
- **[#7553 – Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)** (open, 8 comments) — Auto-compaction reuses the session's thinking budget, so reasoning models burn summarization on the same budget as normal turns. Strong demand for decoupled compaction config.
- **[#7444 – WebSocket retry only handles two error codes](https://github.com/earendil-works/pi/issues/7444)** (closed, 8 comments) — Transient `response.failed` frames other than `previous_response_not_found`/`websocket_connection_limit_reached` hard-stop the turn. A resilience gap in the Codex responses transport.
- **[#7850 – Copilot login fails with 429 for orgs with 20+ models](https://github.com/earendil-works/pi/issues/7850)** (closed, 7 👍) — Device authorization succeeds, then login trips rate limiting while fetching the model list. Disproportionately affects larger enterprise orgs.
- **[#7836 – Edit fuzzy match misses whitespace-length differences](https://github.com/earendil-works/pi/issues/7836)** (open, 6 comments) — `normalizeForFuzzyMatch` doesn't collapse whitespace runs, so semantically identical `oldText` fails to match — particularly painful for small models.
- **[#7911 – Delta-only `message_update` removed `usage`](https://github.com/earendil-works/pi/issues/7911)** (open, in progress) — The 0.84.0 fix for #7290 dropped cumulative `message`, and `usage` went with it; wire/RPC consumers get no mid-run usage until `message_end`. Being addressed by PR #7982.
- **[#7947 – [P0] CMD on Windows: duplicated output and memory leak](https://github.com/earendil-works/pi/issues/7947)** (closed, 2 comments) — Running DeepSeek-V4-Flash under CMD produced runaway repeated output, with Ctrl+C unable to stop it. A jarring, P0-severity terminal experience.
- **[#7954 – OpenAI-compatible SSE turn can hang forever](https://github.com/earendil-works/pi/issues/7954)** (closed, 2 comments) — No inactivity timeout on the completions path; a gateway that never ends its response body strands the process until manual kill.

## Key PR Progress

- **[#7982 – Preserve usage in streaming events](https://github.com/earendil-works/pi/pull/7982)** — Keeps cumulative provider `usage` on JSON/RPC `message_update` while omitting cumulative snapshots so stream size stays linear; closes #7911 with docs and a regression test.
- **[#7978 – Normalize single-object edits + collapse whitespace in fuzzy match](https://github.com/earendil-works/pi/pull/7978)** — Combines two edit-tool fixes: accepts `edits` as a single object/JSON string and makes fuzzy matching whitespace-insensitive. Directly addresses #7944 and #7836.
- **[#7989 – Qwen Token Plan Individual CN provider](https://github.com/earendil-works/pi/pull/7989)** — Adds the China-region individual subscription catalog on the cn-beijing endpoint, reusing `QWEN_TOKEN_PLAN_CN_API_KEY`; mirrors #7659 and closes #7847.
- **[#7972 – Route selection copy through host clipboard](https://github.com/earendil-works/pi/pull/7972)** — `TuiAltScreen` previously wrote bare OSC 52 and flashed "Copied!" even where unsupported (Terminal.app, VTE, tmux). Now routes through the host clipboard so the message is truthful.
- **[#7970 – Show when fullscreen transcript is scrolled up](https://github.com/earendil-works/pi/pull/7970)** — Adds a `↓` indicator in the status row whenever the transcript isn't following the end; clears on scroll-to-bottom. A nice TUI ergonomics win.
- **[#7984 – Update grok-mermaid to 0.2.3](https://github.com/earendil-works/pi/pull/7984)** — Fixes mermaid diagram rendering (classes ignored for now); resolves #7832.
- **[#7956 – Render Mermaid diagrams in HTML exports](https://github.com/earendil-works/pi/pull/7956)** — Reuses the TUI's ANSI-to-HTML tool-call rendering so exports match what users see; diagrams are toggleable from the header.
- **[#7897 – Inherit subagent session config](https://github.com/earendil-works/pi/pull/7897)** — Subagents now follow the current session's model/thinking instead of whatever the last arbitrary session set. Fixes surprising cross-session leakage with multiple open sessions.
- **[#7901 – Cloudflare AI Gateway transport over the AI binding](https://github.com/earendil-works/pi/pull/7901)** — Adds Workers AI Gateway as a transport via `env.AI.run()`, expanding deployment options for Workers-based users and closing #7838.
- **[#7968 – Intercom: live session-to-session messaging + `ask_predecessor` ghost responder](https://github.com/earendil-works/pi/pull/7968)** — A novel community feature using file-mailbox channels for chat between running sessions, targeting handoff Q&A and co-op game playtesting. Ambitious and community-driven.

## Feature Request Trends

- **Configurable summarization/compaction** (#7553): users want a separate thinking level/model for compaction rather than inheriting session settings.
- **Performance budgets** (#7739, #7730): startup latency/memory comparable to jcode, plus a real fix for long-session CPU growth on macOS.
- **TUI/terminal customizability** (#7866, #7722, #7930, #7936, #7965): copy-on-select opt-out, `--use-theme` overrides, clickable OSC 8 links in fullscreen, inline Kitty images inside tmux, and documented terminal-specific mouse behavior.
- **Provider/gateway expansion** (#7989, #7901, #7981): new regions (Qwen CN), Cloudflare AI Gateway binding, and correct models.dev cost-tier mapping for all providers.
- **Wire-protocol extensibility** (#7911, #7986): extensions want access to session-bound off-transcript streaming and mid-run usage data.
- **Session/agent ergonomics** (#7897, #7968): subagents inheriting session config and cross-session intercom messaging.

## Developer Pain Points

- **GitHub Copilot auth fragility**: WSL hang on device flow (#6187) and 429 rate limits for orgs with many models (#7850, #7428) make first-run onboarding unreliable.
- **Runtime/platform inconsistencies**: bun crashes with `zlib.createZstdDecompress` (#7846), Windows CMD duplicate-output issues (#7947), misleading "bash not found" when JSON is invalid (#7829).
- **Edit-tool correctness**: fuzzy match fails on whitespace differences (#7836) and single-object `edits` are rejected before `prepareEditArguments` can run (#7944) — disproportionately hurts smaller models.
- **Streaming resilience**: WebSocket retry ignores most transient errors (#7444); OpenAI-compatible SSE can hang forever with no inactivity timeout (#7954).
- **CLI/config trust**: `--thinking` is silently ignored in favor of the previous mode (#7966); invalid `settings.json` is swallowed and surfaces as a confusing shell error (#7829).
- **Inconsistent session accounting**: `/resume` progress counts files while the completed list counts parsed sessions, so the two numbers diverge (#7960, #7931).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-12

Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

## 1. Today's Highlights

New preview and nightly releases tighten Web Shell session navigation and daemon session logging, while the latest stable `v0.21.10` adds ACP reasoning-effort configuration and image previews in the Web Shell. The community is particularly active around terminal flicker in tmux/iTerm and daemon/session reliability issues, with several related bugs and hardening PRs in motion. Cross-session messaging, native DashScope integration, and Web Shell UX improvements continue to be the most visible development threads.

## 2. Releases

- [v0.21.11-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-preview.0) — Fixes Web Shell prompt-safe session navigation ([#8931](https://github.com/QwenLM/qwen-code/pull/8931)) and adds session-continuation admission logging in `serve`.
- [v0.21.10-nightly.20260812.a64d1291d2](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.10-nightly.20260812.a64d1291d2) — Same Web Shell navigation fix and serve logging included in the nightly.
- [dsw-eas-smoke-20260812-281542bfdc](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-smoke-20260812-281542bfdc) — Non-production DSW/EAS infrastructure smoke release; no SWE score published.
- [v0.21.10](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.10) — Adds ACP support for configuring reasoning effort from Default to Max via session configuration ([#8526](https://github.com/QwenLM/qwen-code/pull/8526)); clicking uploaded/pasted images in Web Shell now opens a preview in the artifact.
- [live-host-v0.1.1](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.1.1) — Fixes sandbox runtime probing before selection ([#7734](https://github.com/QwenLM/qwen-code/pull/7734)) and serializes scan-and-pick in autofix.

## 3. Hot Issues

1. [#8678 — fix(serve): Preserve the current session when a large restore times out](https://github.com/QwenLM/qwen-code/issues/8678)  
   P1 daemon issue with 7 comments. Large session restores can time out and lose current context; a first PR has merged, but selective restore is still being designed. Critical for long-running sessions.

2. [#8562 — tmux flicker via iTerm 2/SSH to Ubuntu](https://github.com/QwenLM/qwen-code/issues/8562)  
   6 comments. Users report heavy flickering only inside tmux splits. One user used Qwen 3.8 Max for diagnosis and traced the issue to Qwen Code rendering. Related reports keep appearing.

3. [#8901 — mac iTerm flicker on every approval prompt](https://github.com/QwenLM/qwen-code/issues/8901)  
   4 comments. On macOS/iTerm, selecting an option and pressing Enter causes flicker every time. Likely shares a root cause with #8562 and is a top UI pain point.

4. [#8920 — Headless OpenAI API errors emit success result and exit 0 in stream-json mode](https://github.com/QwenLM/qwen-code/issues/8920)  
   4 comments. CI/automation users are affected: API failures are reported as successful runs when using `--output-format stream-json`. This undermines scripted usage and exit-code contracts.

5. [#8644 — Windows file links in chat fail because drive-letter colon is URL-encoded](https://github.com/QwenLM/qwen-code/issues/8644)  
   4 comments. VS Code cannot open `file:///d%3A/...` links. Breaks a common Windows navigation workflow.

6. [#8182 — Daemon authorises each ACP child 50% of host memory](https://github.com/QwenLM/qwen-code/issues/8182)  
   4 comments. Each `qwen --acp` child can reserve half of host memory, regardless of child count. This is a significant daemon resource-management bug under active tracking.

7. [#8897 — `--approval-mode` and `--auth-type` are accepted but missing from `qwen --help`](https://github.com/QwenLM/qwen-code/issues/8897)  
   4 comments. CLI flags are validated but undocumented in help output, reducing discoverability for non-interactive users.

8. [#8959 — Main CI failed: E2E Tests on a64d1291d2f6](https://github.com/QwenLM/qwen-code/issues/8959)  
   4 comments. A main-branch E2E CI run failed before any test result was reported; bot-tracked per commit. Needs maintainer investigation.

9. [#8957 — [Regression] Qwen Code crashes on image load since 0.21.2](https://github.com/QwenLM/qwen-code/issues/8957)  
   3 comments. Users report instant crashes when reading images after upgrading past 0.21.1. High impact for multimodal workflows.

10. [#8944 — 2 high severity vulnerabilities reported after `npm update` since 0.21.0](https://github.com/QwenLM/qwen-code/issues/8944)  
    3 comments. Repeated `npm audit` findings after update; security-conscious users are asking for an immediate dependency fix.

## 4. Key PR Progress

1. [#8733 — feat(core): address other sessions by name from send_message and list_agents](https://github.com/QwenLM/qwen-code/pull/8733)  
   Completes cross-session messaging: `list_agents` shows other local Qwen Code sessions and `send_message` can reach them by name.

2. [#8730 — feat(core): accept cross-session messages behind an inbound gate](https://github.com/QwenLM/qwen-code/pull/8730)  
   The security/messaging half of cross-session support: incoming messages are gated before the model can act on them.

3. [#8732 — feat(cli): adopt Goal v3 in ACP sessions](https://github.com/QwenLM/qwen-code/pull/8732)  
   Replaces the ACP/Web Shell Stop-hook implementation with the canonical Goal v3 runtime, adding create/status/edit/pause/resume/clear semantics.

4. [#8568 — feat(computer-use): use Qwen CUA driver by default](https://github.com/QwenLM/qwen-code/pull/8568)  
   Switches Computer Use from the external trycua driver to the vendored Qwen CUA driver with Qwen-owned binary/app identities and a 54-tool MCP contract.

5. [#8714 — feat(core): add native DashScope integration](https://github.com/QwenLM/qwen-code/pull/8714)  
   Adds `dashscope` as a first-class auth type using Alibaba ModelStudio’s native generation API instead of the OpenAI-compatible route.

6. [#8675 — feat(web-shell): add model-specific reasoning controls](https://github.com/QwenLM/qwen-code/pull/8675)  
   Introduces a model reasoning-controls registry and wires Thinking/Effort options through Core, ACP, daemon, SDK, and WebShell.

7. [#8687 — feat(daemon): guard cross-worktree Git mutations](https://github.com/QwenLM/qwen-code/pull/8687)  
   Blocks model-issued shell commands that use `-C`, `--work-tree`, or `--git-dir` to escape the session's configured workspace.

8. [#8927 — feat(channels): bound session lifetime with sessionRotation](https://github.com/QwenLM/qwen-code/pull/8927)  
   Adds per-channel `sessionRotation` limits (`maxTurns` / max duration) to force session refresh on active routes.

9. [#8682 — feat(serve): add pollable turn-status endpoints for daemon sessions](https://github.com/QwenLM/qwen-code/pull/8682)  
   Adds read-only HTTP endpoints for polling turn lifecycle status and current turn state in daemon sessions.

10. [#8952 — chore(deps): bump sharp to ^0.35.0 to resolve GHSA-f88m-g3jw-g9cj](https://github.com/QwenLM/qwen-code/pull/8952)  
    Dependency security fix for the image rendering pipeline; directly addresses user reports like #8944.

## 5. Feature Request Trends

- **Terminal rendering stability and UX**: Multiple issues request fixes for tmux/iTerm flicker, better VP-mode text selection, and reliable expansion of truncated output ([#8562](https://github.com/QwenLM/qwen-code/issues/8562), [#8901](https://github.com/QwenLM/qwen-code/issues/8901), [#8738](https://github.com/QwenLM/qwen-code/issues/8738)).
- **Session and daemon resilience**: Users want safe selective restore, bounded memory per ACP child, session rotation, and cleanup of stale session artifacts ([#8678](https://github.com/QwenLM/qwen-code/issues/8678), [#8182](https://github.com/QwenLM/qwen-code/issues/8182), [#8927](https://github.com/QwenLM/qwen-code/pull/8927)).
- **Cross-session and agent interoperability**: Demand for named session messaging, pollable turn status, and goal management across CLI/ACP/WebShell ([#8733](https://github.com/QwenLM/qwen-code/pull/8733), [#8682](https://github.com/QwenLM/qwen-code/pull/8682)).
- **Provider and model flexibility**: Requests for native DashScope, per-model reasoning controls, and correct handling of custom models during provider updates ([#8714](https://github.com/QwenLM/qwen-code/pull/8714), [#8504](https://github.com/QwenLM/qwen-code/issues/8504)).
- **Long-running task execution**: Strong desire for reliable auto-approval or background modes for overnight/long commands ([#8963](https://github.com/QwenLM/qwen-code/issues/8963)).

## 6. Developer Pain Points

- **tmux/iTerm flickering** is the most visible recurring complaint, with users describing it as “unusable” on remote/macOS setups ([#8962](https://github.com/QwenLM/qwen-code/issues/8962), [#8901](https://github.com/QwenLM/qwen-code/issues/8901), [#8562](https://github.com/QwenLM/qwen-code/issues/8562)).
- **Headless CLI correctness gaps**: API errors masquerading as successful results and missing `--help` entries harm automation users ([#8920](https://github.com/QwenLM/qwen-code/issues/8920), [#8897](https://github.com/QwenLM/qwen-code/issues/8897)).
- **Session restore and daemon memory fragility**: Timeouts and per-child memory overcommit create production reliability risks ([#8678](https://github.com/QwenLM/qwen-code/issues/8678), [#8182](https://github.com/QwenLM/qwen-code/issues/8182)).
- **Tool execution stalls**: Shell commands in auto/yolo modes can hang, preventing long-running tasks from completing ([#8963](https://github.com/QwenLM/qwen-code/issues/8963)).
- **Regression-prone file/image handling**: Image-load crashes since 0.21.2, Windows file-link encoding, and merged parallel `read_file` results are frequent friction points ([#8957](https://github.com/QwenLM/qwen-code/issues/8957), [#8644](https://github.com/QwenLM/qwen-code/issues/8644), [#8940](https://github.com/QwenLM/qwen-code/issues/8940)).
- **Configuration and update friction**: Provider update prompts repeat when custom models exist, and `tools.truncateToolOutputThreshold` is ignored by Shell ([#8504](https://github.com/QwenLM/qwen-code/issues/8504), [#8948](https://github.com/QwenLM/qwen-code/issues/8948), [#8922](https://github.com/QwenLM/qwen-code/issues/8922)).
- **Supply-chain concerns**: Recurring high-severity npm audit findings push users to demand faster dependency remediation ([#8944](https://github.com/QwenLM/qwen-code/issues/8944)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-12

## Today’s Highlights

No new release shipped in the last 24 hours, but attention is concentrated on a newly filed v0.9.5 Auto-Review regression that silently blocks Bash/write tool calls ([#5323](https://github.com/Hmbown/CodeWhale/issues/5323)). Maintainers also opened runtime-isolation and tool-schema-simplification issues ([#5325](https://github.com/Hmbown/CodeWhale/issues/5325), [#5324](https://github.com/Hmbown/CodeWhale/issues/5324)), while six PRs are in flight, including rail-clean copy behavior and safer session snapshot recovery.

## Releases

No new releases in the last 24 hours.

## Hot Issues

- [#5323 [OPEN] Regression in v0.9.5: Auto-Review mode silently blocks every Bash call and write operation](https://github.com/Hmbown/CodeWhale/issues/5323)  
  High-severity regression: upgrading to v0.9.5 changes Auto-Review from auto-approving to silently blocking “destructive actions.” This breaks normal agentic workflows and will likely be a fast-track fix.

- [#5324 [OPEN] agent tool: simplify the 32-field schema so models stop erroring on it](https://github.com/Hmbown/CodeWhale/issues/5324)  
  Maintainer-flagged design issue: the model-facing `agent` tool has 32 optional properties, 8 actions, and alias overloading. The complexity is causing models to error, so a schema simplification pass is planned.

- [#5325 [OPEN] runtime: don’t deliver child-owned background shell completions to the parent model stream](https://github.com/Hmbown/CodeWhale/issues/5325)  
  Sub-agent background shell jobs are leaking completion events into the parent model turn stream. This pollutes context and can cause incorrect model behavior in multi-agent runs.

- [#5314 [OPEN] Copy message from context menu includes rail decorations](https://github.com/Hmbown/CodeWhale/issues/5314)  
  The context-menu “Copy message” action includes role glyphs and rail characters. Community members expect clipboard copy to match selection copy, which is rail-clean. PR [#5319](https://github.com/Hmbown/CodeWhale/pull/5319) targets this directly.

- [#4959 [OPEN] [enhancement] proposed 'stop' command](https://github.com/Hmbown/CodeWhale/issues/4959)  
  Long-running discussion with 8 comments about adding a mechanical `/stop` or runtime STOP-word intercept. Users in YOLO/autonomous mode cannot reliably interrupt tool execution, making this a key control-plane request.

- [#4650 [OPEN] v0.9.1: Completion board, exact final dogfood, and no-publish release gate](https://github.com/Hmbown/CodeWhale/issues/4650)  
  Release-blocker tracking issue for v0.9.1. It owns final integration evidence, a local dogfood build, and the release stop line. Important for understanding maintainer release discipline.

- [#4683 [OPEN] Wrong deepseek completions url](https://github.com/Hmbown/CodeWhale/issues/4683)  
  Flaky network errors against `https://api.deepseek.com/v1/chat/completions`. Seems to appear after long-running sessions. Could indicate endpoint/URL handling or connection-reuse problems.

- [#5097 [CLOSED] According with this YouTube, CodeWhale is not considered official DeepSeek Coding Agent](https://github.com/Hmbown/CodeWhale/issues/5097)  
  Community trust issue: a YouTuber claimed DeepSeek’s official coding agent is another project. 5 comments show users are sensitive to branding and official-status confusion.

- [#5241 [OPEN] Pricing endpoint returns 503 - all sessions show unverified_live_pricing](https://github.com/Hmbown/CodeWhale/issues/5241)  
  Cost display is broken after 0.9.3. Every provider/session is unpriced with `unverified_live_pricing`. Developers relying on live cost tracking lose visibility.

- [#5322 [OPEN] Regression: output area doesn't fill wide terminals](https://github.com/Hmbown/CodeWhale/issues/5322)  
  In v0.9.x the transcript output is capped at max width, while v0.8.65 expanded to fill the terminal. This is a visible UX regression for wide-display users.

## Key PR Progress

Six PRs were updated in the last 24 hours. All are listed below.

- [#5326 [OPEN] web: audit fixes — i18n parity, copy/spacing, test fixes](https://github.com/Hmbown/CodeWhale/pull/5326)  
  Polish pass over the community website: fixes i18n consistency, copy/spacing issues, and stale contract tests in `web/`.

- [#5318 [OPEN] feat(tui): pin host terminal window as an always-on-top mini window](https://github.com/Hmbown/CodeWhale/pull/5318)  
  Adds Windows picture-in-picture behavior: shrink the host terminal to 640×400 and pin it on top via `/pin` or the right-click context menu. Toggle restores the original window size.

- [#5321 [OPEN] feat: register OrcaRouter as a named provider](https://github.com/Hmbown/CodeWhale/pull/5321)  
  Wires OrcaRouter as an OpenAI-compatible provider alongside OpenRouter. Uses `ORCAROUTER_API_KEY` and keeps model picker/config/docs consistent.

- [#5320 [OPEN] fix(session): separate snapshot reads from crash recovery](https://github.com/Hmbown/CodeWhale/pull/5320)  
  Adds `load_session_snapshot` for safe reads while tool calls are still running, and `recover_session_for_resume` with repair statistics for embedding hosts. Reduces crash-recovery coupling.

- [#5319 [OPEN] fix(tui): copy messages without visual rails](https://github.com/Hmbown/CodeWhale/pull/5319)  
  Fixes user/assistant cell copying by copying canonical source content instead of rendered Ratatui lines. Keeps complex cells on the full-transcript path and adds regression tests.

- [#5225 [CLOSED] feat(acp): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)  
  Bridges the gap for ACP-driven editors: `session/prompt` now streams model text and executes requested tool calls, so ACP clients get real code-editing capabilities instead of chat-only responses.

## Feature Request Trends

- **Mechanical interrupt/stop control**  
  Users want a reliable runtime-level stop mechanism, not just a text command that the model can ignore. See [#4959](https://github.com/Hmbown/CodeWhale/issues/4959).

- **TUI layout and copy UX**  
  Requests are converging on cleaner terminal behavior: pane zooming ([#1261](https://github.com/Hmbown/CodeWhale/issues/1261)), rail-free copy ([#5314](https://github.com/Hmbown/CodeWhale/issues/5314)), and fixing width-fill regressions ([#5322](https://github.com/Hmbown/CodeWhale/issues/5322)).

- **Provider and configuration flexibility**  
  Users want more provider registration and setup options, such as OrcaRouter in PR [#5321](https://github.com/Hmbown/CodeWhale/pull/5321) and env-var alternatives for Windows flag parsing in [#4564](https://github.com/Hmbown/CodeWhale/issues/4564).

- **Runtime isolation and schema simplification**  
  Maintainer-driven trends: isolate child-owned background events from parent streams ([#5325](https://github.com/Hmbown/CodeWhale/issues/5325)), simplify the over-broad agent tool schema ([#5324](https://github.com/Hmbown/CodeWhale/issues/5324)), and decompose the TUI crate structure ([#5316](https://github.com/Hmbown/CodeWhale/issues/5316)).

## Developer Pain Points

- **Network/API reliability**  
  Flaky DeepSeek completions URL issues ([#4683](https://github.com/Hmbown/CodeWhale/issues/4683)), WSL2 provider connection failures ([#4956](https://github.com/Hmbown/CodeWhale/issues/4956)), and pricing endpoint 503s ([#5241](https://github.com/Hmbown/CodeWhale/issues/5241)) are recurring blockers.

- **Release regressions**  
  Multiple regressions appeared in v0.9.x: Auto-Review blocking tool calls ([#5323](https://github.com/Hmbown/CodeWhale/issues/5323)), output width cap ([#5322](https://github.com/Hmbown/CodeWhale/issues/5322)), and slower slash-command responses ([#4568](https://github.com/Hmbown/CodeWhale/issues/4568)).

- **Windows/WSL-specific friction**  
  Users hit CLI flag-consumption bugs ([#4564](https://github.com/Hmbown/CodeWhale/issues/4564)) and connectivity/setup issues under WSL2 ([#4956](https://github.com/Hmbown/CodeWhale/issues/4956)).

- **Model-facing schema complexity**  
  The `agent` tool schema is too large and confusing for models, causing avoidable tool-call errors. See [#5324](https://github.com/Hmbown/CodeWhale/issues/5324).

- **Project identity confusion**  
  The “official DeepSeek coding agent” question raised by YouTube content caused user concern. See [#5097](https://github.com/Hmbown/CodeWhale/issues/5097).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*