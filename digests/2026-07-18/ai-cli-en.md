# AI CLI Tools Community Digest 2026-07-18

> Generated: 2026-07-18 02:56 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-07-18 | **Analyst:** Senior Technical Analyst

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 18, 2026 reveals an ecosystem in a **hyper-growth phase with significant growing pains**. All seven tools (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, DeepSeek TUI) are shipping daily releases or patches while grappling with shared infrastructure challenges: **Windows platform stability**, **memory/resource leaks**, **subprocess lifecycle management**, and **TUI rendering regressions**. The most active communities (Claude Code, Qwen Code, OpenCode) show 40-80 open issues per cycle, with Windows-specific bugs representing 20-35% of all reported problems. A major bifurcation is emerging between **enterprise-grade tools** (Claude Code, Copilot CLI) investing in permission models and auditability, and **open-source/community tools** (OpenCode, DeepSeek TUI, Pi) prioritizing extensibility and provider diversity. The common thread: developers are demanding **reliable, observable, and platform-consistent** AI coding assistants, not just flashy demos.

---

## 2. Activity Comparison

| Tool | Active Issues (24h) | PRs (24h) | Release Today | Release Velocity | Community Engagement Signal |
|------|-------------------|-----------|---------------|------------------|-----------------------------|
| **Claude Code** | 10 (top issues) | 10 | ✅ v2.1.214 | High (daily patches) | 277 👍 on #3412 → strong TUI demand |
| **OpenAI Codex** | 10 | 10 | ✅ 3 alpha builds | Very high (3 builds/day) | 782 👍 on Linux desktop → biggest gap |
| **Gemini CLI** | 10 | 10 | ✅ Nightly | High (nightly + fixes) | Focus on security hardening |
| **Copilot CLI** | 10 | 0 | ✅ v1.0.72-1 | Moderate (weekly) | Windows regressions dominate |
| **Kimi Code** | 3 | 1 | ❌ None | Low (quiet) | Community small but vocal |
| **OpenCode** | 10 | 10 | ❌ None | High (PR-heavy) | 73 👍 on SSH → remote work demand |
| **Pi** | 10 | 10 | ❌ None | Very high (22 PRs in 24h) | CPU spin + compaction top concerns |
| **Qwen Code** | 10 | 10 | ✅ Nightly | Very high (nightly + active) | Multi-workspace RFC dominates |
| **DeepSeek TUI** | 10 | 10 | ❌ None | High (10 PRs in 24h) | Agency control #4032: 35 comments |

**Key Observations:**
- **Claude Code** and **Copilot CLI** are the only tools shipping stable patch releases.
- **OpenAI Codex** and **Pi** have the highest PR velocity but also the most unresolved Windows issues.
- **Kimi Code** is the quietest—small community, slow iteration, few contributors.
- **Qwen Code** and **DeepSeek TUI** are the fastest-growing in terms of community engagement.

---

## 3. Shared Feature Directions

The following requirements appear across **3+ tool communities**, indicating genuine industry demand:

| Shared Requirement | Tools Mentioning | Common Pain Points |
|-------------------|------------------|-------------------|
| **Per-agent/provider routing** | Claude Code (#38698), Gemini CLI (#21968), OpenCode (#34652) | Users want different LLM backends for subagents vs. orchestrator |
| **Session/state persistence & recovery** | Claude Code (#3412), Copilot CLI (#4165), OpenCode (#27924), Pi (#6647) | Session hangs, compaction failures, resume hangs |
| **Memory system reliability** | Claude Code (#66020), Gemini CLI (#26522), Qwen Code (#7040), Pi (#6647) | Leaks, infinite retries, opaque recall failures |
| **MCP/plugin ecosystem maturity** | Copilot CLI (#4151), Kimi Code (#2505), Qwen Code (#6992), DeepSeek TUI (#3916) | Silent failures, permission deadlocks, dependency issues |
| **Windows platform stability** | Claude Code (v2.1.214), OpenAI Codex (#33780), Copilot CLI (#4151, #4165), Qwen Code (#6992), DeepSeek TUI (#4489) | HID polling, process leaks, ConPTY issues, freeze-on-launch |
| **Better TUI rendering** | Claude Code (#3412), Kimi Code (#2379), Pi (#6665), Qwen Code (#6809, #7006), DeepSeek TUI (#4479) | Garbled diffs, code block overflow, CJK width bugs |
| **Destructive action prevention** | Claude Code (v2.1.214), Gemini CLI (#22672), Copilot CLI (#4156) | Git force-delete bypass, unsafe file overwrites |
| **Long-context / compaction UX** | Claude Code (#3412), OpenAI Codex (#28969), OpenCode (#27924), Pi (#6647) | Auto-resolve timeout, infinite compaction loops |
| **Multi-workspace / daemon support** | Qwen Code (#6378), OpenCode (#37437), DeepSeek TUI (#1481) | One daemon per workspace = resource waste |
| **Agent self-control / escape prevention** | Claude Code (#3412), DeepSeek TUI (#3275, #4032), OpenAI Codex (#33944) | Agent ignores user intent, writes own scripts |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|------------|-------------|------------|-------------|----------|---|-----------|--------------|
| **Primary Target User** | Power users, MCP developers | Enterprise teams, Copilot users | Google ecosystem developers | GitHub ecosystem, VS Code users | Open-source, BYOK crowd | CLI purists, self-hosters | Chinese dev market, multi-model | Linux/Android, Rust ecosystem |
| **Technical Approach** | Fast-iteration patch cycles, hook-based security | Rust components, Electron desktop | LLM-triage orchestrator, SeaBIOS sandbox | Plugin mutations, skill management | Event-stream architecture, SSH tunnels | TUI-first, custom CSS engine | Daemon-based ACP, web shell | Rust CLI, rquickjs bindings |
| **Security Model** | Directory-pattern auto-approval, hookify rules | Hash-keyed world state permissions | Deny-default Seatbelt profiles | Substring-based plan heuristics | Event-stream ownership, bounded payloads | Codex-style compaction retry | System prompt alignment with mode | Device-code OAuth, isolated runtime |
| **Strengths** | Fastest patch cadence, strong MCP plugin ecosystem | Largest community (782👍), Rust CLI performance | Strongest sandboxing (deny-default), automated triage | GitHub integration, skill removal | Most extensible (plugin hooks, SSH), multi-provider | Best TUI customization, model catalog agility | Multi-workspace RFC, web shell innovation | Android/Termux, HarmonyOS support |
| **Weaknesses** | Memory leaks, macOS kernel zone bugs | Windows reliability crisis, no Linux app | Subagent visibility, agent hangs | Windows regressions, plan heuristic false positives | Migration fragility, OpenTUI dependency | CPU spin on streaming, compaction fragility | Cold-start latency, MCP chain failures | Agency over-reach, plugin infra incomplete |

**Strategic Divergence:**
- **Claude Code** is pursuing **fast-iteration security hardening** (directory patterns, hookify negations).
- **OpenAI Codex** is investing in **enterprise infrastructure** (SQLite config, paginated threads, managed proxies).
- **Gemini CLI** is betting on **automated CI/CD pipelines** (PR generator, caretaker triage).
- **OpenCode** is building **remote-first, SSO-friendly architecture** (SSH tunnels, workspace seams).
- **Pi** is optimizing for **TUI performance and model catalog flexibility** (separate JSON model data, StepFun providers).
- **Qwen Code** is uniquely focused on **multi-workspace daemon** and **web shell IDE parity**.
- **DeepSeek TUI** is the only tool targeting **Android/Termux and HarmonyOS**.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Growth** | Claude Code, OpenAI Codex, Qwen Code, Pi | 10+ active PRs/day, daily or nightly releases, 277-782👍 top issues, strong maintainer responsiveness |
| **Moderate Momentum / Stable** | Copilot CLI, Gemini CLI | Weekly patches, smaller PR volume (0-10/day), stable feature set, fewer new feature requests |
| **Early / Niche** | Kimi Code, DeepSeek TUI | <5 issues/day, slow release cycles, small but vocal communities, niche platform focus |

**Maturity Assessment:**

- **Claude Code**: **Most mature** by release discipline (stable + nightly), permission model, and plugin ecosystem. However, memory leaks and macOS kernel bugs indicate quality gaps.
- **OpenAI Codex**: **Largest community** but **fragile Windows experience**. The 782👍 Linux desktop request signals unmet demand. Enterprise-focused PRs (SQLite config, paginated threads) suggest readiness for scale.
- **Gemini CLI**: **Security-first maturity** (deny-default profiles, loop detection). The automated PR generator pipeline (#28431-28435) is the most advanced CI integration in the ecosystem.
- **Copilot CLI**: **Stable but regressing**. The v1.0.72-1 introduced more bugs than it fixed. GitHub integration is strong, but Windows quality is deteriorating.
- **OpenCode**: **Fastest-growing open-source CLI**. SSH and remote work features (#7790, 73👍) position it for remote/hybrid teams. Migration fragility (#31119) is the biggest risk.
- **Pi**: **High-velocity but unstable**. 22 PRs in 24h is the most of any tool, but CPU spin (#6665) and compaction fragility (#6647) suggest quality sacrifice for velocity.
- **Qwen Code**: **Rapidly maturing**. Multi-workspace RFC (#6378) and web shell Git status (#7054) show a clear product vision. The daemon cold-start fix (#7145) addresses a critical performance gap.
- **DeepSeek TUI**: **Niche but dedicated**. Android/Termux support is unique. Agency-control issues (#3275, #4032) are the most commented and need urgent attention.

---

## 6. Trend Signals

### Industry Trends from Community Feedback

1. **TUI is the new IDE**
   - 6/7 tools have TUI-specific issues (rendering, keybinding, color, CJK support).
   - The demand for paste review (#3412 Claude Code), inline LaTeX (#18906 OpenAI Codex), and markdown rendering (#2379 Kimi Code) shows the TUI is no longer a fallback—it's the primary interface.
   - **Signal**: Invest in terminal emulator compatibility (Windows Terminal, Ghostty, kitty) and accessibility (screen readers, RTL).

2. **Windows is the weakest link**
   - Every tool reports Windows-specific regressions (hangs, process leaks, HID polling, ConPTY failures).
   - OpenAI Codex has 6 open Windows bugs; Copilot CLI has 4 new in 24h; DeepSeek TUI fixed process leaks today.
   - **Signal**: Windows should be treated as a first-class platform with dedicated CI/CD, not an afterthought.

3. **Subprocess lifecycle management is under-engineered**
   - Orphaned processes (Copilot CLI #4163), zombie zombies (OpenAI Codex #33776), and MCP leaks (OpenAI Codex #31499) are systemic.
   - **Signal**: All tools need robust subprocess reaping, timeout enforcement, and resource budgeting.

4. **Memory is the new bottleneck**
   - Claude Code macOS kernel leak (#66020), Pi CPU spin (#6665), OpenAI Codex 112GB MCP child (#33724).
   - Compaction/retry loops exacerbate memory pressure.
   - **Signal**: Tools must adopt circuit breakers, bounded retries, and memory monitoring.

5. **Agent autonomy is a trust crisis**
   - DeepSeek TUI (#4032, 35 comments): agent ignores user scripts.
   - Copilot CLI (#4156): destructive git operations bypass permissions.
   - Claude Code (#3412): pasted text uneditable before submission.
   - **Signal**: The community wants **guardrails, not jailbreaks**. Auto-approve should be opt-in, not default.

6. **Multi-provider routing is the new normal**
   - 4/7 tools have issues about per-agent model routing, provider switching, or model version pinning.
   - Claude Code (#38698), Gemini CLI (#21968), OpenCode (#34652) all request different backends for different subagents.
   - **Signal**: Tools that support only one provider (e.g., Kimi Code with K2.6) face community pushback. Flexibility wins.

7. **Plugin ecosystems are immature but essential**
   - 5/7 tools have plugin-related bugs or feature requests.
   - Copilot CLI (#4151), Kimi Code (#2505), Qwen Code (#6992) all report plugin installation failures.
   - **Signal**: Plugin developers need stable APIs, manifest validation, and sandboxed execution. Trust vs. enablement (#4399 DeepSeek TUI) is an unsolved design challenge.

8. **CI/CD for AI is emerging**
   - Gemini CLI's PR Generator Pipeline (#28431-28435) is the most ambitious: Firestore locks, Cloud Run jobs, Antigravity agents, iterative bug-fixing state machines.
   - Qwen Code's Fleet Shepherd (#7142) automates merge conflict resolution and label application.
   - **Signal**: The next wave is **AI-driven development workflows** where the tool not only codes but manages its own lifecycle.

---

## Conclusion

The AI CLI tools ecosystem on July 18, 2026 is **growing fast but bleeding from a thousand small cuts**. No tool is fully stable across Windows, Linux, and macOS. No tool has solved the agent autonomy problem. No tool has a mature plugin ecosystem that works reliably.

**The winners will be those that:**
1. Fix Windows reliability (the #1 blocker for enterprise adoption)
2. Give users control over agent behavior (guardrails > autonomy)
3. Support multi-provider routing (flexibility wins lock-in)
4. Deliver stable, observable memory/compaction systems (trust requires predictability)
5. Invest in TUI rendering quality (your terminal is your IDE)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-18 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed Pull Requests)

### 1. 🔧 `skill-creator` Fixes: `run_eval.py` Recall Bug (#1298)
- **Functionality:** Repairs the core evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) which was reporting `recall=0%` for every skill description due to missing eval artifact installation, Windows stream handling failures, and parallel worker bugs. Fixes [Issue #556](https://github.com/anthropics/skills/issues/556) (10+ independent reproductions).
- **Discussion Highlights:** Blocking issue for anyone using the skill-optimization loop; the entire description-improvement pipeline was "optimizing against noise." Fix involves installing the eval artifact as a real skill rather than a temporary file.
- **Status:** OPEN | [PR #1298](https://github.com/anthropics/skills/pull/1298) | Author: MartinCajiao

### 2. 📄 Document Typography Skill (#514)
- **Functionality:** Prevents orphan word wrap (1–6 words on new line), widow paragraphs (headers stranded at page bottom), and numbering misalignment in AI-generated documents. Aims to fix typographic issues that affect "every document Claude generates."
- **Discussion Highlights:** Addresses a universal pain point — users rarely request good typography, yet poor defaults degrade output quality. Considered a "drop-in quality improvement" for any document workflow.
- **Status:** OPEN | [PR #514](https://github.com/anthropics/skills/pull/514) | Author: PGTBoos

### 3. 📝 ODT Skill — OpenDocument Format Support (#486)
- **Functionality:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods, .odf). Supports LibreOffice document workflows and ISO-standard open formats. Includes ODT-to-HTML conversion.
- **Discussion Highlights:** Bridges a major format gap for enterprise and open-source users. Triggers on mentions of "ODT," "ODS," "ODF," "OpenDocument," or "LibreOffice." Still under review for file-handling edge cases.
- **Status:** OPEN | [PR #486](https://github.com/anthropics/skills/pull/486) | Author: GitHubNewbie0

### 4. 🎨 Frontend Design Skill Improvement (#210)
- **Functionality:** Revises the existing `frontend-design` skill for clarity, actionability, and internal coherence. Ensures every instruction is executable within a single conversation, with specificity to steer behavior without being brittle.
- **Discussion Highlights:** Early effort to professionalize community skills — focuses on instruction quality over feature quantity. Sets a precedent for skill refactoring PRs.
- **Status:** OPEN | [PR #210](https://github.com/anthropics/skills/pull/210) | Author: justinwetch

### 5. 🧪 Skill Quality & Security Analyzers (#83)
- **Functionality:** Two meta-skills: (1) `skill-quality-analyzer` evaluating structure, documentation, examples, and resource references across five dimensions; (2) `skill-security-analyzer` for threat modeling and trust-boundary analysis in skills.
- **Discussion Highlights:** Meta-level tooling that could standardize skill quality across the entire ecosystem. Directly relevant to [Issue #492](https://github.com/anthropics/skills/issues/492) (trust boundary abuse under `anthropic/` namespace).
- **Status:** OPEN | [PR #83](https://github.com/anthropics/skills/pull/83) | Author: eovidiu

### 6. 🔐 Self-Audit Reasoning Quality Gate (#1367)
- **Functionality:** A universal skill that audits AI output before delivery: mechanical file verification first, then a four-dimension reasoning audit (damage-severity priority order). Works with any project, tech stack, or model.
- **Discussion Highlights:** Part of a broader quality-gate pipeline proposal ([Issue #1385](https://github.com/anthropics/skills/issues/1385)). Active discussion on pre-task calibration and adversarial review gates.
- **Status:** OPEN | [PR #1367](https://github.com/anthropics/skills/pull/1367) | Author: YuhaoLin2005

### 7. 🎮 Pyxel Retro Game Engine Skill (#525)
- **Functionality:** Skill for the [Pyxel](https://github.com/kitao/pyxel) retro game engine via [pyxel-mcp](https://github.com/kitao/pyxel-mcp). Covers write → run_and_capture → inspect → iterate workflow for pixel-art/8-bit games.
- **Discussion Highlights:** Niche but passionate community; demonstrates MCP integration with an external game engine. Longest-open duration (since March 2026) with sustained attention.
- **Status:** OPEN | [PR #525](https://github.com/anthropics/skills/pull/525) | Author: kitao

---

## 2. Community Demand Trends (From Issues)

| Trend | Signal | Key Issue |
|-------|--------|-----------|
| **Trust & Security** | 34 comments — strongest demand signal. Community fears granting elevated permissions to skills under `anthropic/` namespace that aren't actually official. | [#492](https://github.com/anthropics/skills/issues/492) |
| **Org-wide Skill Sharing** | 14 comments, 7 👍. Users need seamless skill distribution within organizations without manual file-sharing. | [#228](https://github.com/anthropics/skills/issues/228) |
| **Tooling Reliability** | 12 comments, 7 👍. `run_eval.py` unusable on Windows and in general — recall always 0%. Blocking all skill creators. | [#556](https://github.com/anthropics/skills/issues/556), [#1061](https://github.com/anthropics/skills/issues/1061), [#1169](https://github.com/anthropics/skills/issues/1169) |
| **Skill Deduplication** | 6 comments, 9 👍. Installing `document-skills` and `example-skills` plugins causes identical skills in context window. | [#189](https://github.com/anthropics/skills/issues/189) |
| **Agent Governance & Safety** | 6 comments. Demand for policy enforcement, threat detection, trust scoring, and audit trails in agent systems. | [#412](https://github.com/anthropics/skills/issues/412) |
| **Compact Agent Memory** | 9 comments. Need for symbolic notation to reduce context consumed by long-running agent notes and persistent memory. | [#1329](https://github.com/anthropics/skills/issues/1329) |
| **MCP Integration** | Persistent but low-volume request to expose Skills as MCP tools with typed APIs. | [#16](https://github.com/anthropics/skills/issues/16) |

**Top 3 Most-Anticipated Directions:**
1. **Trust boundary enforcement** (namespace verification, permission scoping)
2. **Collaboration infrastructure** (org sharing, deduplication, discovery)
3. **Agent reliability tooling** (quality gates, memory compression, governance)

---

## 3. High-Potential Pending Skills (Likely to Land Soon)

| Skill | PR | Author | Last Update | Why It's Close |
|-------|-----|--------|-------------|----------------|
| **Self-Audit Reasoning Gate** | [#1367](https://github.com/anthropics/skills/pull/1367) | YuhaoLin2005 | 2026-07-02 | Active cross-referencing with Issue #1385; v1.3.0 clearly versioned; mechanical verification + 4-dimension audit well-scoped |
| **Color Expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | meodai | 2026-06-12 | Self-contained, well-defined scope (ISCC-NBS, Munsell, OKLCH, CAM16); minimal controversy |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | 2026-04-21 | Comprehensive stack coverage (unit, React, philosophy); no major objections |
| **Pyxel Game Engine** | [#525](https://github.com/anthropics/skills/pull/525) | kitao | 2026-07-15 | Recently updated; established OSS project author; niche but high-quality |
| **Skill Quality Analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | eovidiu | 2026-01-07 | Directly addresses #492 security concerns; meta-tooling with clear evaluation dimensions |

**Prediction:** The self-audit and color-expert skills are closest to merge based on recent activity and clear scope. The Windows compatibility fixes (#1298, #1099, #1050) are likely to merge as a group once the `run_eval.py` recall bug is fully resolved.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for infrastructure reliability and trust — fixing the skill-creation toolchain (especially on Windows) and establishing security/quality gates for distributed skills — rather than for any single domain-specific skill.**

Put differently: the ecosystem is bottlenecked not by *what* skills can do, but by *confidence* that skills work correctly and safely. The top two PRs and the top two issues all converge on tooling, evaluation, and trust — not on new features.

---

# Claude Code Community Digest — 2026-07-18

## Today’s Highlights

A patch release (v2.1.214) fixes a Windows PowerShell 5.1 permission‑check bypass and a directory‑pattern auto‑approval bug. The community is most vocal about two issues: the inability to edit pasted text blocks before submission (277 👍, 80 comments) and a payment‑flow bug that voids PaymentIntent before confirmation (76 comments). Memory‑related bugs also continue to attract attention, with a macOS kernel zone leak and an embedded ugrep OOM on bounded‑repeat regexes both reported.

## Releases

**v2.1.214** — [Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.214)  
- Fixed `dir/**` allow rules (e.g. `Edit(src/**)`) auto‑approving writes to nested `dir/` directories anywhere in the tree instead of only `<cwd>/dir`.  
- Fixed a permission‑check bypass affecting commands run in Windows PowerShell 5.1 sessions.  
- Corrected a Bash permission cache issue (description truncated in source data).

## Hot Issues

1. **[#3412 — Allow viewing/editing pasted text blocks before submission](https://github.com/anthropics/claude-code/issues/3412)**  
   *Enhancement, macOS, TUI, a11y* – When dictation software pastes spoken text, the content is collapsed and uneditable. The community strongly supports a review step (277 👍, 80 comments).

2. **[#55982 — Plan upgrade payment fails with `void_invoice`](https://github.com/anthropics/claude-code/issues/55982)**  
   *Bug* – PaymentIntent is voided before confirmation, blocking plan upgrades. 76 comments indicate wide impact.

3. **[#50674 — Cowork fails on ARM64 Windows despite passing readiness check](https://github.com/anthropics/claude-code/issues/50674)**  
   *Bug, Windows, Cowork* – Snapdragon X users cannot start Cowork sessions. 40 comments, marked duplicate but still unresolved.

4. **[#40043 — Allow removal of local folders from a Cowork project’s context](https://github.com/anthropics/claude-code/issues/40043)**  
   *Enhancement, Cowork* – Users want to exclude folders without deleting them from disk. 56 👍, 19 comments.

5. **[#66020 — macOS kernel zone leak (`data.kalloc.1024`) from Claude Code CLI](https://github.com/anthropics/claude-code/issues/66020)**  
   *Bug, macOS, memory* – `claude.exe` panics at ~20 GB; leak rate scales with agent load (21→1027/sec). 16 comments, has repro.

6. **[#38698 — Per‑agent model provider routing (e.g. Ollama for subagents, Anthropic for orchestrator)](https://github.com/anthropics/claude-code/issues/38698)**  
   *Enhancement, agents* – Currently `ANTHROPIC_BASE_URL` is session‑wide; users want to route subagents to different providers. 40 👍, 10 comments.

7. **[#66504 — Session URL appended to commit messages by default — should be opt‑in](https://github.com/anthropics/claude-code/issues/66504)**  
   *Enhancement, UX* – Every commit gets a Claude Code session URL; several users want it opt‑in. 33 👍, 8 comments.

8. **[#75899 — Left arrow accidentally navigates to agents screen and breaks session on return](https://github.com/anthropics/claude-code/issues/75899)**  
   *Bug, macOS, TUI, keybindings* – The key is not rebindable, and returning from agents view breaks the main session. 7 comments.

9. **[#74949 — Auto‑mode classifier bursts as ‘temporarily unavailable’ — fail‑closed blocks compound Bash commands](https://github.com/anthropics/claude-code/issues/74949)**  
   *Bug, macOS, permissions* – During peak windows classifier errors block most shell work. 6 comments.

10. **[#70422 — Blank stdout tool call triggers false ‘no visible output’ retry loop](https://github.com/anthropics/claude-code/issues/70422)**  
    *Bug, macOS* – Commands that produce no stdout (e.g. `afplay &`) cause Claude to retry pointlessly. 3 comments, has repro.

## Key PR Progress

1. **[#78715 — feat(hookify): add `regex_not_match` / `not_regex_match` operator](https://github.com/anthropics/claude-code/pull/78715)**  
   Adds a missing negation operator to the hookify rule engine; previously unknown operators silently returned `false`.

2. **[#76581 — fix(plugins): harden YAML, path, and symlink handling in scripts](https://github.com/anthropics/claude-code/pull/76581)**  
   Addresses YAML breakout, path traversal, and symlink‑based credential overwrite in official plugin scripts (e.g. `ralph-wiggum`).

3. **[#78446 — fix(plugin-dev): add missing `.claude-plugin/plugin.json` manifest](https://github.com/anthropics/claude-code/pull/78446)**  
   The `plugin-dev` directory was the only plugin without a manifest, breaking tool‑based setup.

4. **[#78445 — docs: correct plugin descriptions and version that contradict the plugins](https://github.com/anthropics/claude-code/pull/78445)**  
   Three inaccuracies in `plugins/README.md` and marketplace metadata fixed after source verification.

5. **[#78441 — fix(devcontainer script): detect native command failures via `$LASTEXITCODE`](https://github.com/anthropics/claude-code/pull/78441)**  
   PowerShell’s `try/catch` never caught non‑zero exits from native tools; now uses explicit exit‑code checks.

6. **[#78425 — fix(code-review): require explicit user invocation](https://github.com/anthropics/claude-code/pull/78425)**  
   Prevents models/subagents from programmatically re‑entering the multi‑agent review workflow; marks `/code-review` as manual‑only.

7. **[#77427 — fix(pr-review-toolkit): make `code-reviewer` a leaf agent](https://github.com/anthropics/claude-code/pull/77427)**  
   Restricts the reviewer to repository‑inspection tools only, preventing unintended agent invocation chains.

8. **[#78371 — Harden ralph-wiggum plugin: bounded iterations, push/publish guard, stop‑hook fixes](https://github.com/anthropics/claude-code/pull/78371)**  
   Adds safety bounds to the loop‑oriented plugin; prevents unattended loops from pushing or deploying half‑finished work.

9. **[#78532 — gateway/gcp: optional internal ALB + PG16 Cloud SQL edition fix](https://github.com/anthropics/claude-code/pull/78532)**  
   Terraform example updated: new PG16 instances now default to `ENTERPRISE_PLUS` edition, reject shared‑core tiers. Adds optional internal ALB.

10. **[#6754 — Document RTL support for Claude CLI in VS Code](https://github.com/anthropics/claude-code/pull/6754)**  
    New `rtl-support.md` describes a workaround for reversed Hebrew/Arabic/Persian text in VS Code’s integrated terminal.

## Feature Request Trends

- **Per‑agent model provider routing** – Users want to assign different LLM backends (Ollama, Anthropic, etc.) to specific subagents rather than a session‑wide base URL.  
- **Pasted text review/editing** – Strong demand for a preview step before submitting pasted content (dictation, clipboard).  
- **Cowork context management** – Request to remove local folders from a project’s context without deleting the files, plus better scheduler persistence cleanup.  
- **Autocomplete opt‑out** – Several users request the ability to disable or remove inline autocomplete suggestions.  
- **Longer OAuth sessions for Max subscribers** – Frequent re‑authentication is seen as friction for paid users.  
- **Auto‑mode classifier fallback** – When the classifier is unavailable, fall back to an alternative model (Opus low) rather than blocking commands.

## Developer Pain Points

- **Memory exhaustion** – Two distinct bugs reported: a macOS kernel zone leak (scales with agent load) and an embedded ugrep OOM when compiling bounded‑repeat regexes. Both can cause crashes.  
- **Permission bypasses** – The v2.1.214 patch addresses one, but the frequency of permission‑related bugs (auto‑mode classifier bursts, blank‑stdout retry loops, silent grep shadowing) remains a top concern.  
- **Cross‑platform gaps** – Windows ARM64 Cowork fails despite passing readiness checks; Windows notification COM calls freeze the desktop app.  
- **Inconsistent plan‑mode UI** – Multiple reports of plan mode state not being reflected in the UI (e.g., left arrow navigation, false “exited plan mode” messages, plan mode persisting after abort).  
- **Prompt cache invalidation** – Tiny git status changes between turns invalidate the full prompt cache, causing cost spikes for `-p --resume` workflows.  
- **Missing negation operators** – The hookify rule engine lacked `regex_not_match`, forcing users to work around it with brittle custom logic (now fixed in PR #78715).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-18

## Today's Highlights
Three new Rust alpha builds (0.145.0-alpha.20/22/23) were released without visible changelogs, while a **major Windows stability crisis** dominates community attention: at least seven open bugs report desktop app hangs, WMI CPU storms, and memory exhaustion, including a single MCP child process consuming 112 GB of commit. Meanwhile, the long-running **Linux desktop app request** (#11023) continues to gather support, now at 782 👍 and 174 comments.

## Releases
- **rust-v0.145.0-alpha.20 / .22 / .23** — Three sequential alpha releases of the Rust CLI component. No changelog details published.

## Hot Issues (10 picks)

### 1. #11023 – [Open] Codex desktop app for Linux
- **Why it matters**: The most popular open issue by far (782 👍, 174 comments). Users report the macOS app is unusable due to an unrelated blocking issue (#10432), and need a Linux-native app for stable power management. Community frustration is high.
- **GitHub**: openai/codex#11023

### 2. #9203 – [Open] Please make "/undo" back
- **Why it matters**: The `/undo` command was removed, and users report data loss when Codex unintentionally modifies or deletes files not tracked by git. 348 👍 and 59 comments show a strong, vocal power-user demand.
- **GitHub**: openai/codex#9203

### 3. #28969 – [Open] Add setting to disable auto-resolve in 60 seconds
- **Why it matters**: Codex CLI auto-answers questions after 60 seconds, confusing developers who need more time to review or plan. 135 👍 indicate broad annoyance.
- **GitHub**: openai/codex#28969

### 4. #33780 – [Open] Windows app hangs on HID device enumeration
- **Why it matters**: A single unresponsive HID device can block the Electron main thread forever, freezing the entire app at launch. 21 comments and a detailed reproduction make this a high-impact Windows regression.
- **GitHub**: openai/codex#33780

### 5. #33438 – [Open] Repeated 0xC06D007F crashes and input lag on Windows
- **Why it matters**: Users report 2–3 second system-wide input lag when opening a new task on Windows x64, alongside SEH exceptions. Impacts Pro-tier users on modern hardware.
- **GitHub**: openai/codex#33438

### 6. #31499 – [Open] Windows spawns duplicate MCP process pools (183 node.exe, 13 GB memory)
- **Why it matters**: MCP stdio process pools are not reaped, causing unbounded memory growth. 6 comments but a clear, severe resource-exhaustion scenario.
- **GitHub**: openai/codex#31499

### 7. #33724 – [Open] Single Node MCP child reaches 112 GB and exhausts system commit
- **Why it matters**: A single MCP subprocess consumes over 112 GB, crashing the host. The reporter labels it a “SEVERE ISSUE” but notes the latest build may have fixed it—status unclear.
- **GitHub**: openai/codex#33724

### 8. #33776 – [Open] Hundreds of taskkill.exe/conhost.exe processes spawned
- **Why it matters**: Each tool execution leaves behind orphaned `taskkill.exe` and `conhost.exe` processes, degrading DWM and WMI. 2 👍 but a systemic pattern of process leaks.
- **GitHub**: openai/codex#33776

### 9. #22773 – [Open] iOS/macOS Remote Control broken after desktop update
- **Why it matters**: Capacities like remote control from mobile to desktop regressed. 14 comments from multiple users tracking a stale plan state and 403 errors, showing cross-device parity is fragile.
- **GitHub**: openai/codex#22773

### 10. #33912 – [Open] Work Louder/Codex Micro HID discovery blocks Electron main thread
- **Why it matters**: Specific hardware (Work Louder device) triggers the same HID-blocking freeze as #33780, suggesting a systemic HID polling design flaw in the Windows app.
- **GitHub**: openai/codex#33912

## Key PR Progress (10 picks)

### 1. #33944 – [Closed] Track permission instructions in world state
- **What it does**: Models permission instructions as a hash-keyed world-state section, re-emitting context only when contents change. Reduces redundant permission prompts.
- **GitHub**: openai/codex#33944

### 2. #33938 – [Closed] Centralize SQLite connection configuration
- **What it does**: Introduces `SqliteConfig` to enforce consistent WAL, synchronization, busy-timeout, and pool-size settings across all writable Codex databases. Improves database reliability and debuggability.
- **GitHub**: openai/codex#33938

### 3. #33932 – [Closed] Forward audio inputs to the Responses API
- **What it does**: Serializes audio data URLs as `input_audio` content and converts local audio files (wav, mp3) for transmission to the model. Enables voice-driven workflows.
- **GitHub**: openai/codex#33932

### 4. #33930 – [Closed] Track inherited paginated rollout prefixes
- **What it does**: Adds `HistoryPosition` metadata so threads can inherit and record paginated rollout prefixes from source threads. Enables incremental state sharing.
- **GitHub**: openai/codex#33930

### 5. #33908 – [Closed] Allow publishing plugins through share updates
- **What it does**: Accepts a `LISTED` discoverability value in plugin share updates, enabling authors to publish plugins publicly via the share API.
- **GitHub**: openai/codex#33908

### 6. #33907 – [Closed] Add occurrence search for paginated threads
- **What it does**: Introduces `thread/searchOccurrences` for case-insensitive literal search across thread history without replaying the thread, returning paginated snippets with UTF-16 offsets.
- **GitHub**: openai/codex#33907

### 7. #33906 – [Closed] Launch managed network proxies on remote executors
- **What it does**: Adds executor-local proxy listeners for remote executions, making loopback proxy addresses reachable by launched processes. Critical for secure networked tool calls.
- **GitHub**: openai/codex#33906

### 8. #33901 – [Closed] Support ChatGPT-branded Desktop app builds
- **What it does**: Enables the desktop app to use either Codex or ChatGPT branding while retaining stable platform identities, searching for both executable names on macOS.
- **GitHub**: openai/codex#33901

### 9. #33925 – [Closed] Render inline visualization links in the TUI
- **What it does**: Recognizes `::codex-inline-vis` directives in assistant Markdown and replaces them with browser-clickable links, giving terminal users access to visual artifacts.
- **GitHub**: openai/codex#33925

### 10. #33919 – [Closed] Allow stable Python SDK releases
- **What it does**: Relaxes the release tag validation to accept stable (non-beta) tags, enabling the Python SDK to publish production versions like `python-v0.144.4`.
- **GitHub**: openai/codex#33919

## Feature Request Trends
- **Linux desktop app** (#11023) dominates with 782 👍 — the single most-requested feature, driven by macOS performance issues.
- **/undo command revival** (#9203) is a close second, with deep emotional resonance among power users who lost work.
- **Usage-reset expiration visibility** (#28161, 56 👍) reflects demand for better rate-limit transparency.
- **First-class CLI Computer Use** (#20851, 16 👍) from a growing cohort wanting agentic capabilities without the desktop app.
- **TUI LaTeX rendering** (#18906, 16 👍) shows academic/STEM users want inline math in the terminal.
- **Remote host-to-host connectivity** (#26846, 1 👍 but well-articulated) points to multi-machine power users.

## Developer Pain Points
- **Windows reliability crisis**: Six separate issues (##33780, 33438, 31499, 33724, 33776, 33912) report hangs, memory exhaustion, process leaks, and WMI storms. The root cause clusters around **HID device polling** and **MCP subprocess lifecycle**—both appear to block the Electron main thread or leak OS handles.
- **Cross-device remote control fragility**: Issue #22773 documents a mobile-to-desktop regression with 403 errors and stale plans, indicating the remote-control feature lacks integration-tested fallbacks.
- **i18n gaps**: #26250 (RTL/LTR text rendering for Arabic/English) highlights that multilingual support remains incomplete in the desktop app.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-18

## Today’s Highlights

A nightly release (v0.52.0‑nightly.20260718) ships two infrastructure improvements: an LLM‑based triage orchestrator for issue caretaking and hardened macOS Seatbelt profiles aligning permissive mode with a deny‑default model. On the bug front, the team merged a critical fix for infinite ReAct loops and prompt‑injection attacks (PR #28429), while multiple open issues continue to highlight pain points around subagent transparency, memory system quality, and MCP authentication reliability.

## Releases

**v0.52.0‑nightly.20260718.gacae7124b** — Nightly build for July 18.  
Changes:
- `feat(caretaker‑triage)`: Implements LLM‑based triage orchestrator and container build for automated issue management.  
- `refactor(cli)`: Updates macOS permissive Seatbelt profiles to use `(deny default)` with explicit allow‑lists, consistent with restrictive and strict profiles.  
[Release link](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260718.gacae7124b)

## Hot Issues (10 of note)

1. **#22323** — *Subagent recovery after MAX_TURNS reported as GOAL success* (11 💬)  
   The `codebase_investigator` subagent marks itself as “success” even when hitting the turn limit, hiding genuine interruptions. This masks real failures and frustrates debugging.  
   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#24353** — *Robust component level evaluations* (7 💬)  
   Epic to expand behavioral evaluation tests (currently 76) across all six supported Gemini models. Critical for ensuring quality as the agent system grows.  
   [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

3. **#22745** — *Assess impact of AST‑aware file reads, search, and mapping* (7 💬)  
   Investigates whether AST‑aware tools can reduce token noise, improve read precision, and lower turn count. Promises big efficiency gains for large codebases.  
   [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

4. **#21409** — *Generalist agent hangs* (7 💬, 8 👍)  
   The CLI hangs indefinitely when deferring to the generalist agent for simple tasks (e.g., folder creation). Users forced to disable subagents altogether — a major reliability blocker.  
   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

5. **#21968** — *Gemini does not use skills and sub‑agents enough* (6 💬)  
   Anecdotal reports that custom skills (e.g., gradle, git) are ignored unless explicitly invoked. Limits the value of the skills system for automated workflows.  
   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **#23296** — *MCP HTTP OAuth token refresh fails during tool calls* (5 💬)  
   After an access token expires, tool calls in an active chat session fail silent – no automatic refresh. Affects any user of remote MCP servers with short‑lived tokens.  
   [Issue #23296](https://github.com/google-gemini/gemini-cli/issues/23296)

7. **#26522** — *Auto Memory retries low‑signal sessions indefinitely* (5 💬)  
   The extraction agent skips low‑signal transcripts but leaves them marked as unprocessed, causing repeatedly re‑scanning. Wastes background processing cycles.  
   [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **#25166** — *Shell command execution stuck after command completes* (4 💬, 3 👍)  
   After running simple CLI commands, the shell shows “Awaiting user input” indefinitely. Common and highly visible user‑experience issue.  
   [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

9. **#21983** — *Browser subagent fails in Wayland* (4 💬)  
   The browser agent crashes on Wayland sessions with a “GOAL” termination, providing no useful error. Blocks Linux users with modern display servers.  
   [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

10. **#21000** — *Experiment with native file tools for task tracker* (4 💬)  
    Epic to replace shell‑based task tracking with native file tools, aiming for fewer hangs and more predictable behavior.  
    [Issue #21000](https://github.com/google-gemini/gemini-cli/issues/21000)

## Key PR Progress (10 impactful)

1. **#28429** — *Mitigate infinite ReAct loops and prompt injection loops* (Closed)  
   Implements a session‑level default turn limit of 15 and enhanced loop detection. Directly addresses security vulnerabilities from malicious workspace files.  
   [PR #28429](https://github.com/google-gemini/gemini-cli/pull/28429)

2. **#28345** — *LLM triage orchestrator and container build* (Closed)  
   Adds `triage_orchestrator.py` using Antigravity SDK and Cloud Run job definition. Automates issue triage for the caretaker workflow.  
   [PR #28345](https://github.com/google-gemini/gemini-cli/pull/28345)

3. **#28424** — *Align macOS permissive Seatbelt profiles with deny‑default model* (Closed)  
   Updates `permissive-open` and `permissive-proxied` profiles to deny‑by‑default for stronger sandboxing while preserving developer tool access.  
   [PR #28424](https://github.com/google-gemini/gemini-cli/pull/28424)

4. **#28403** — *Block $VAR and ${VAR} variable expansion bypass* (Open)  
   Fixes an incomplete security check that allowed variable expansion to bypass a prior vulnerability patch (GHSA‑wpqr‑6v78‑jr5g). Defense‑in‑depth hardening.  
   [PR #28403](https://github.com/google-gemini/gemini-cli/pull/28403)

5. **#28346** — *Fix trust dialog disclosure for runnable hooks* (Open)  
   Makes folder‑trust discovery inspect the actual hook definition shape, stops reporting flat invalid entries, and adds warnings for command hooks found in project settings.  
   [PR #28346](https://github.com/google-gemini/gemini-cli/pull/28346)

6. **#28348** — *Fix MaxListenersExceededWarning and infinite auth loop* (Open)  
   Resolves an infinite authentication loop on Windows after successful OAuth and a MaxListenersWarning during API retries.  
   [PR #28348](https://github.com/google-gemini/gemini-cli/pull/28348)

7. **#28353** — *Prevent path traversal in restore command* (Open)  
   Adds normalization and containment checks to the `a2a‑server restore` command, closing a path traversal vulnerability.  
   [PR #28353](https://github.com/google-gemini/gemini-cli/pull/28353)

8. **#28164** — *Limit recursive reasoning turns per single user request* (Closed)  
   Introduces a configurable turn limit (default 15) on recursive reasoning to protect local CPU and API quota from infinite loops.  
   [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)

9. **#28319** — *Enforce path trust check prior to environment loading in a2a‑server* (Open)  
   Refactors CoderAgentExecutor to check workspace trust before loading environment variables, and uses `AsyncLocalStorage` to isolate task environments.  
   [PR #28319](https://github.com/google-gemini/gemini-cli/pull/28319)

10. **#28435–#28431** — *PR Generator pipeline series* (5 PRs, all Open)  
    A series introducing the Gemini CLI Issue‑to‑PR Code Generation Pipeline: includes a Firestore concurrency lock, Cloud Run job config, Antigravity agent runner, and iterative bug‑fixing state machine. Infrastructure for automated code generation from issues.  
    - [PR #28435](https://github.com/google-gemini/gemini-cli/pull/28435)  
    - [PR #28434](https://github.com/google-gemini/gemini-cli/pull/28434)  
    - [PR #28433](https://github.com/google-gemini/gemini-cli/pull/28433)  
    - [PR #28432](https://github.com/google-gemini/gemini-cli/pull/28432)  
    - [PR #28431](https://github.com/google-gemini/gemini-cli/pull/28431)

## Feature Request Trends

- **Subagent visibility & recovery** — Users want subagent trajectories included in `/chat share` (#22598), bug reports to include subagent context (#21763), and clear reporting of real failures vs. turn‑limit “success” (#22323).
- **AST‑aware tooling** — Two related issues (#22745, #22746) call for AST‑aware file reading, search, and codebase mapping to reduce token waste and turn count.
- **Agent self‑awareness** — A request for the CLI to know its own flags, hotkeys, and execution mechanics so it can serve as its own expert guide (#21432).
- **Destructive action prevention** — Users want the agent to avoid `git reset --force` and similar destructive commands unless explicitly authorized (#22672).
- **Memory system quality** — Multiple issues (#26516, #26522, #26523, #26525) focus on improving Auto Memory: preventing indefinite retries, adding deterministic redaction, and surfacing invalid patches.
- **Component‑level evaluations** — The push for robust behavioral evals (#24353) indicates a desire for systematic quality measurement across models.

## Developer Pain Points

- **Agent hangs and indefinite waits** — The generalist agent hang (#21409) and shell command “Waiting input” bug (#25166) are the most upvoted frustrations, making basic automation unreliable.
- **Subagent reliability** — False success reports (#22323) and subagent permission bypasses (#22093) undermine trust in the agent orchestration.
- **MCP authentication friction** — OAuth token refresh failures (#23296) break long‑running sessions with remote servers; users expect seamless re‑authentication.
- **Memory system inefficiency** — Auto Memory retries low‑signal sessions (#26522) and silently skips invalid patches (#26523), wasting background cycles without feedback.
- **Platform‑specific issues** — Browser agent fails on Wayland (#21983), Windows SEA builds fork incorrectly (#26365), and terminal corruption after external editor exit (#24935) show uneven platform support.
- **Security awareness** — Recent exploits / near‑misses (infinite loops from prompt injection, variable expansion bypass) highlight that developers want proactive hardening, not just reactive patches.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-18

## Today's Highlights
A new patch release (v1.0.72-1) ships with support for plugin mutations, skill removal, and several UX improvements. The community flags a wave of Windows-specific regressions, including plugin installation failures and a resumption hang, while a critical session-wedging bug from June is finally closed. Multiple feature requests around permissions granularity and multi-account management gain traction.

## Releases
**v1.0.72-1** (`2026-07-17`)  
- **Added**: `--plugin`, `--mcp`, and `--skill` flags for plugin mutations; `copilot plugins remove --skill` for skill removal.  
- **Improved**: Full file paths shown when expanding compact editing rows; plan-approval menu deterministic across models; `/add-dir` directories remain visible.  
- *Note*: Several reports indicate this version introduces new rendering and permission issues (see Hot Issues below).

## Hot Issues (10 selected)
1. **[#4024] Voice mode: all bundled ASR models fail silently** – `/voice` records but returns empty transcriptions across all three Nemotron models. 12 comments, no fix yet. *High impact for speech users.*  
   [github.com/github/copilot-cli/issues/4024](https://github.com/github/copilot-cli/issues/4024)

2. **[#3767] [Closed] Oversized attachment permanently wedges session** – CAPI 5 MB native limit with no recovery path; marked as closed after a fix. 7 comments. *Important for attachment-heavy workflows.*  
   [github.com/github/copilot-cli/issues/3767](https://github.com/github/copilot-cli/issues/3767)

3. **[#4151] plugin install fails with Access is denied on Windows** – Blocks all sources (marketplace, GitHub repo, local dir) on Windows 11. 3 comments, no workaround yet. *Critical for Windows users.*  
   [github.com/github/copilot-cli/issues/4151](https://github.com/github/copilot-cli/issues/4151)

4. **[#4160] Plan mode over-blocks read-only shell commands** – Heuristic based on substring matching blocks benign commands like `dir`, `ls`, `cat`. 3 comments. *Nullifies plan mode usability for safe commands.*  
   [github.com/github/copilot-cli/issues/4160](https://github.com/github/copilot-cli/issues/4160)

5. **[#4163] Zombie processes accumulate under copilot PID** – Subprocesses not reaped; ~2 zombies per minute. 1 comment, no response from maintainers. *System resource leak affecting long sessions.*  
   [github.com/github/copilot-cli/issues/4163](https://github.com/github/copilot-cli/issues/4163)

6. **[#4156] Destructive git branch deletion (`-D`) requires no permission** – `git branch -D` bypasses approval, while `git push --delete` correctly prompts. 0 comments, but high security concern.  
   [github.com/github/copilot-cli/issues/4156](https://github.com/github/copilot-cli/issues/4156)

7. **[#4155] Gemini models return 400 Bad Request in CLI** – Plain text prompts to `gemini-3.1-pro-preview` and `gemini-3.5-flash` fail. 0 comments, no workaround. *Blocks entire model family.*  
   [github.com/github/copilot-cli/issues/4155](https://github.com/github/copilot-cli/issues/4155)

8. **[#4165] `copilot --resume` hangs on Windows cold start** – Stays at “Resuming session…” indefinitely; same session resumes fine after interactive launch. 0 comments, Windows-only.  
   [github.com/github/copilot-cli/issues/4165](https://github.com/github/copilot-cli/issues/4165)

9. **[#4159] Interactive mode goes blank after submitting prompt on Windows Terminal** – Works in `-p` mode but TUI turns blank. 0 comments, likely rendering regression.  
   [github.com/github/copilot-cli/issues/4159](https://github.com/github/copilot-cli/issues/4159)

10. **[#3762] `contextTier` config option does nothing** – Setting has no effect until user manually selects a long-context model via the picker. 6 comments, 0 thumbs up. *Confusing & broken configuration.*  
    [github.com/github/copilot-cli/issues/3762](https://github.com/github/copilot-cli/issues/3762)

## Key PR Progress
No pull requests were updated in the last 24 hours. The repository appears to be in a quiet development phase following the v1.0.72-1 release.

## Feature Request Trends
Several consistent themes emerge from the latest issues:

- **Granular permissions** – Adding path prefixes to file and web permissions (#4157), allowing spaces in `commandIdentifiers` (#4150), and distinguishing destructive operations like forced branch deletion (#4156).
- **Multi‑account & default user** – Ability to set a default GitHub user when multiple accounts are configured (#4166).
- **Better IDE integration** – Multi-root workspace support via `.code-workspace` files (#1826, 14 👍) and exposing queued/active processing state for project sessions (#4158).
- **Local model optimizations** – Allowing `-max-ai-credits=0` when using local models (#4167) and disabling low‑credit warnings (#4168).
- **Keyboard navigation** – `j`/`k` shortcuts for multiple-choice menus (#4152) and vi‑like navigation.

## Developer Pain Points
Recurring frustrations reported this week:

- **Windows‑specific regressions** – Plugin installation (#4151), resume hang (#4165), blank screen after prompt (#4159), and zombie process accumulation (#4163). Multiple Windows issues in 24h indicate a platform‑wide stability problem.
- **Broken/misconfigured features** – `contextTier` config having no effect (#3762), Gemini 400 errors (#4155), plan mode heuristic false positives (#4160), and `task_complete` tool going missing after mode switch (#4161).
- **UX annoyances** – Copying prompt text includes the input box border (#4116), oversized attachment warnings repeat 6× (#4164), and scheduled prompts not firing (#4137).
- **Security gaps** – Destructive git operations bypassing permission checks (#4156) and missing custom headers for BYOK (#3399, 8 👍).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-18

## Today's Highlights
Activity remained quiet with no new releases, but one meaningful PR landed to improve schema dereferencing error handling. The most pressing community concern comes from a Wind plugin integration failure caused by an unreachable intranet dependency, blocking users on public networks. A long-standing TUI rendering bug and a debate over model choice (K2.5 vs K2.6) continue to draw attention.

## Releases
No new releases in the last 24 hours.

## Hot Issues
Only three issues were updated, each reflecting distinct community concerns:

- **#1925 – [enhancement] Kimi K2.5 vs K2.6**  
  *Author: herrbasan*  
  A user requests the ability to switch back to Kimi K2.5, complaining that K2.6 over-thinks, suppresses creativity, and increases hallucinations. The 13-comment thread indicates active community sentiment against the newer model.  
  👉 https://github.com/MoonshotAI/kimi-cli/issues/1925

- **#2505 – [Wind 插件] 取数失败：依赖无法安装，指引指向内网地址**  
  *Author: Steven-DD*  
  The Wind data plugin (`wind-allskill`) fails entirely with `NETWORK_ERROR` because the required SDK `agent-gw-pysdk` is not bundled, and the installation guide points to an internal `dev.msh.team` Git server unreachable from public networks. This blocks enterprise users on Windows.  
  👉 https://github.com/MoonshotAI/kimi-cli/issues/2505

- **#2379 – [bug] Markdown list items in TUI drop characters and split words**  
  *Author: bdragan*  
  A text rendering bug in the TUI (Linux, Kimi-k2.6) causes list items to be truncated or words split when wrapped. Affects readability for CLI-heavy workflows.  
  👉 https://github.com/MoonshotAI/kimi-cli/issues/2379

## Key PR Progress
Only one PR was active today:

- **#2506 – fix(kosong): raise a clear error on circular $ref in deref_json_schema**  
  *Author: Sreekant13*  
  A small, self-contained fix (well under the 100-line guideline) that improves error clarity when `deref_json_schema` encounters circular `$ref` references. No related issue was filed, but the change should prevent silent failures in schema processing.  
  👉 https://github.com/MoonshotAI/kimi-cli/pull/2506

## Feature Request Trends
Based on all open issues, the most recurring requests are:
- **Model switching & control** – Users want the ability to select between Kimi K2.5 and K2.6, with preferences for the former’s personality and creativity. This may indicate a broader desire for model version rollback or configuration.
- **Plugin/extension reliability** – The Wind plugin issue highlights the need for self-contained distributions or fallback dependency sources that work in public network environments.
- **TUI formatting improvements** – Consistent requests for better text rendering in the terminal, particularly for Markdown lists and wrapping.

## Developer Pain Points
Recurring frustrations from recent issues include:
- **External dependency availability** – The Wind plugin relies on an SDK hosted on an internal Git server, making it impossible for users outside the Moonshot intranet to install. This points to a lack of proper packaging or public mirroring.
- **Model regression** – Users feel that K2.6 sacrifices creativity and personality for “thinking” depth, with increased hallucination rates. The inability to switch back is a clear pain point.
- **TUI text rendering bugs** – List items being truncated or words splitting on wrap disrupts reading, especially for developers who rely on CLI-based workflows.

---

*Generated from GitHub data for MoonshotAI/kimi-cli – 2026-07-18*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-18

## Today's Highlights
The past 24 hours have been dominated by urgent regressions and infrastructure hardening. A critical TUI startup crash caused by the OpenTUI 0.4.5 upgrade was reverted in PR #37582, while a long-standing infinite compaction loop finally got a fix in PR #37584. On the feature front, SSH‑based remote connections (#7790) remain the most popular request, and the core team made steady progress on event-stream ownership and bounded payloads across multiple PRs.

## Releases
No new releases in the last 24 hours.

## Hot Issues (Top 10 by activity & impact)

1. **[#5305](https://github.com/anomalyco/opencode/issues/5305) – Plugin Hook for Instant TUI Commands**  
   *Author: malhashemi | 19 comments, 14 👍*  
   Proposes a new plugin hook to register instant TUI commands that execute without invoking the agent. Community strongly supports lightweight, low‑latency interactions.

2. **[#7790](https://github.com/anomalyco/opencode/issues/7790) – SSH‑Based Remote Server Connections**  
   *Author: dl-alexandre | 15 comments, 73 👍*  
   The most upvoted open feature request. Users want first‑class SSH connectivity to connect OpenCode Desktop to remote `opencode server` instances. A duplicate (#33273) reinforces the demand.

3. **[#31119](https://github.com/anomalyco/opencode/issues/31119) – `Error: no such column: name`**  
   *Author: AndrewShear | 13 comments, 11 👍*  
   A breaking DB migration issue after upgrading to v1.16.2. Users coming back to OpenCode are locked out. Root cause likely stale migration state – requires urgent triage.

4. **[#27924](https://github.com/anomalyco/opencode/issues/27924) – Infinite Compaction Loop**  
   *Author: ranxianglei | 7 comments*  
   Session enters an endless `compact → still overflow → compact` loop when compression fails to reduce context below the token limit. A fix is now in PR #37584.

5. **[#33028](https://github.com/anomalyco/opencode/issues/33028) – Subagents Hang Indefinitely After Bash Tool Call**  
   *Author: simoesleandro | 6 comments, 3 👍*  
   Subagents (and the primary agent) stall after a quick bash tool call; the LLM stream never times out. Occurs with at least two different models (`glm-5.2`, `minimax-m3`). Only manual `Esc` or process kill recovers.

6. **[#27303](https://github.com/anomalyco/opencode/issues/27303) – Official OpenCode Go/Zen BYOK Provider for VSCode Copilot**  
   *Author: Gr33nLight | 5 comments, 5 👍*  
   Requests a dedicated VS Code extension that brings OpenCode’s BYOK model support into the Copilot ecosystem, leveraging recent VS Code improvements for external providers.

7. **[#37430](https://github.com/anomalyco/opencode/issues/37430) – Cannot Switch Build/Plan Modes in New UI (v1.18.1, v1.18.3)**  
   *Author: SiXuManYan | 5 comments, 2 👍*  
   A UI regression: the build/plan mode toggle button is missing in the new desktop UI. Users are forced to switch back to the old UI.

8. **[#34652](https://github.com/anomalyco/opencode/issues/34652) – Tool Calls Fail with SchemaError on Anthropic (Native) Provider**  
   *Author: edikid | 5 comments*  
   `todowrite` (and any tool with array/object params) fails when the Anthropic provider returns nested arguments as a JSON‑encoded string instead of a real array. OpenAI provider works fine.

9. **[#33934](https://github.com/anomalyco/opencode/issues/33934) – OpenAI gpt-5.5-fast xhigh Fails with `reasoning part … not found`**  
   *Author: NedMalki-Chief | 4 comments*  
   On Windows Desktop v1.17.11, using `openai/gpt-5.5-fast` with variant `xhigh` fails with a reasoning‑part lookup error. Likely a regex/parser mismatch.

10. **[#37399](https://github.com/anomalyco/opencode/issues/37399) – xAI Grok 4.5 Generating Useless `bash true` Tool Calls**  
    *Author: berenddeboer | 4 comments*  
    Grok 4.5 repeatedly invokes `$ true` as a tool call, producing no output but wasting tokens. Indicates a model‑side reasoning glitch that may need a prompt workaround.

## Key PR Progress (10 important merges or open PRs)

1. **[#37582](https://github.com/anomalyco/opencode/pull/37582) – revert(tui): downgrade opentui to 0.4.3**  
   *Merged* – Hot‑fix for the compiled TUI startup crash (undefined `startsWith`). Rolls back OpenTUI 0.4.5 until the upstream regression is resolved.

2. **[#37584](https://github.com/anomalyco/opencode/pull/37584) – fix(session): bound consecutive overflow compaction cycles**  
   *Open* – Closes #27924. Prevents the infinite compaction loop by capping retries and falling back to truncation or error.

3. **[#37559](https://github.com/anomalyco/opencode/pull/37559) – feat(core): bound tool and admitted event payloads via session blobs**  
   *Open* – Part of the epic to scope streams and bound payloads. Moves large tool results and admission events into blob storage to reduce memory pressure.

4. **[#37487](https://github.com/anomalyco/opencode/pull/37487) – feat(server): narrow event subscriptions by session interest**  
   *Open* – Improves SSE scalability by filtering server‑side event delivery based on which sessions are actually interested.

5. **[#37514](https://github.com/anomalyco/opencode/pull/37514) – fix(provider): support Kimi K3 reasoning effort**  
   *Merged* – Adds `low`, `high`, `max` effort levels for the Kimi K3 model, aligning with its model card.

6. **[#37596](https://github.com/anomalyco/opencode/pull/37596) – fix(core): remove session import cycle**  
   *Open* – `opencode-agent[bot]` contribution that breaks a circular dependency between `Session` and `Permission`, fixing runtime import cycles.

7. **[#37437](https://github.com/anomalyco/opencode/pull/37437) – feat(core): add remote workspace environment seam**  
   *Open* – First provider‑free seam for centrally executed V2 sessions on hosted workspaces. Adds `Workspace.Info` and sandbox abstractions.

8. **[#37589](https://github.com/anomalyco/opencode/pull/37589) – refactor(desktop): unify sidecar controller interface**  
   *Open* – Establishes a common `SidecarInstance` interface and `BaseSidecarController` for local vs. WSL sidecars, improving lifecycle management.

9. **[#37592](https://github.com/anomalyco/opencode/pull/37592) – fix(opencode): stabilize Codex connections**  
   *Open* – Addresses short timeouts and transient upstream failures that caused Codex sessions to drop, using retry logic and connection health checks.

10. **[#37571](https://github.com/anomalyco/opencode/pull/37571) – fix(tui): bundle parser worker separately**  
    *Merged* – Second fix for the TUI crash: stops using OpenTUI’s parser worker source as a direct Bun entrypoint, compiling through an OpenCode‑owned virtual entry instead.

## Feature Request Trends
- **Remote / SSH connectivity** remains the #1 requested capability, with two issues (#7790, #33273) and 74+ upvotes combined.
- **Plugin extensibility** is on the rise – instant TUI command hooks (#5305) and BYOK Copilot extensions (#27303) both aim to extend OpenCode without modifying core.
- **Desktop UI polish** – users are asking for better dark‑mode contrast (#37428), proper IME handling (#37167), and persistent mode toggles (#37430).
- **Provider expansions** – Kimi K3 reasoning effort support, Muse‑Spark prompt updates, and OpenAI‑compatible parser fixes show demand for model‑specific tuning.

## Developer Pain Points
- **Migration fragility** – Several users hit `no such column` errors after updates (#31119, #35403), indicating poor handling of schema migrations between CLI and plugins.
- **Context / staleness bugs** – Infinite compaction loops (#27924), context‑limit ignoring model variants (#31020), and subagent hangs (#33028) erode trust in session management.
- **UI regressions after TUI upgrades** – The OpenTUI 0.4.5 bump caused a complete TUI crash for compiled binaries (#37556), and the new desktop UI omitted the build/plan toggle (#37430).
- **Provider‑specific failures** – Anthropic nested arrays (#34652), OpenAI reasoning part missing (#33934), and Grok 4.5 spamming meaningless tool calls (#37399) force users to switch providers while waiting for patches.
- **Windows‑specific issues** – Memory exhaustion from child processes (#37597), `ctrl+p` unresponsive (#37165), and ENOENT for VS Code extension (#35934) suggest uneven Windows QA.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-18

**Repository:** `badlogic/pi-mono` (issue/PR data from `earendil-works/pi`)  
**Generated:** 2026-07-18

---

## Today’s Highlights

Yesterday brought a heavy wave of upstreaming: the team merged a major refactor to move generated model data into separate JSON files to reduce churn, exposed Kimi K3’s new thinking levels, and added native StepFun providers. On the stability front, a retry mechanism for compaction and branch summarisation went up, and several TUI performance regressions (CPU spin, hang on submit) were addressed. Community activity was high, with 30+ issues and 22 PRs touched in 24h.

---

## Releases

No new releases were published in the last 24 hours.

---

## Hot Issues

1. **[PI-#6747](https://github.com/earendil-works/pi/issues/6747) – API for enhancing agent message markdown (OPEN)**  
   Proposes an extension API to mutate agent message display without altering LLM content. Community interest (5 comments) and a concrete use case – a best-effort formula renderer – make this a high-impact feature request.

2. **[PI-#3790](https://github.com/earendil-works/pi/issues/3790) – Add backward-direction shortcut for cycling thinking level (CLOSED)**  
   A long-lived request (since April) to avoid forward‑cycling through 5–6 levels. Finally closed yesterday after 5 comments. Essential UX polish many users want.

3. **[PI-#6725](https://github.com/earendil-works/pi/issues/6725) – Copilot pricing for GPT-5.6 models incorrect (OPEN, inprogress)**  
   Cache-write costs missing from Copilot’s model pricing, leading to under‑estimation by ~$1.67 per session. Marked in‑progress, suggesting a fix is imminent.

4. **[PI-#6665](https://github.com/earendil-works/pi/issues/6665) – TUI pins a full core while streaming (OPEN, inprogress)**  
   Long sessions cause 100% CPU due to uncached `Intl.Segmenter` and per-chunk markdown rebuild. A critical performance bug for heavy users; assigned in‑progress.

5. **[PI-#6647](https://github.com/earendil-works/pi/issues/6647) – Compaction fails on single transient stream drop (OPEN, inprogress)**  
   Non‑retried summarisation call kills compaction entirely. Now fixed by PR #6775 (see below). The issue itself remains open, tracking the problem.

6. **[PI-#6768](https://github.com/earendil-works/pi/issues/6768) – Compaction using Copilot Enterprise not possible (CLOSED)**  
   Both OpenAI and Anthropic models fail with 421 or prefix errors. Marked bug/untriaged; user with 1 👍 indicates it affects paying Copilot customers.

7. **[PI-#6662](https://github.com/earendil-works/pi/issues/6662) – Mouse select+copy from TUI introduces scroll to bottom (CLOSED)**  
   After copying text the TUI scrolls to end. Reproducible in Ghostty. Fixed, but the confusion it caused was widely noted.

8. **[PI-#6740](https://github.com/earendil-works/pi/issues/6740) – Incorrect thinking level mapping for GPT 5.4 mini (CLOSED)**  
   OpenAI doesn’t support “minimal” effort for 5.4-mini, but the provider map allowed it. Quickly closed after minimal discussion—low‑hanging config fix.

9. **[PI-#6762](https://github.com/earendil-works/pi/issues/6762) – JSON parse crashes SSE stream on control chars in tool-call arguments (CLOSED)**  
   A literal control char inside a tool argument kills the stream. The fix (hardened `parseJsonWithRepair`) is essential for LLM output resilience.

10. **[PI-#6789](https://github.com/earendil-works/pi/issues/6789) – TUI hangs on submit – pi-coding-agent 0.80.10 on Linux Mint (CLOSED, untriaged)**  
    Slower startup and full hang after submitting prompt. Attributed to the version; closed quickly as untriaged but signals a possible regression in 0.80.x.

---

## Key PR Progress

1. **[PR #6775](https://github.com/earendil-works/pi/pull/6775) – retry on compaction/branch summarisation retryable failures (OPEN)**  
   Fixes #6647. Adds retry logic identical to assistant turns. Author flags need for UI indication and agent‑harness parity. Directly addresses a top community pain point.

2. **[PR #6772](https://github.com/earendil-works/pi/pull/6772) – export missing message and tool execution event types (OPEN)**  
   Repairs missing type exports (#6687). Small but critical for extension developers.

3. **[PR #6770](https://github.com/earendil-works/pi/pull/6770) – expose low/high thinking levels for Kimi K3 (CLOSED)**  
   Closes #6769. Kimi K3 now offers three effort levels instead of just `max`. Merged and reflected in provider metadata.

4. **[PR #6779](https://github.com/earendil-works/pi/pull/6779) – support freeform tool calls (CLOSED)**  
   Adds typed JSON and freeform tool definitions across AI/agent APIs, plus UI rendering. A large new capability for custom tool integrations.

5. **[PR #6783](https://github.com/earendil-works/pi/pull/6783) – add StepFun providers (CLOSED)**  
   Four new native providers (`stepfun`, `stepfun-ai`, `stepfun-step-plan`, `stepfun-step-plan-ai`), sourced from models.dev. Expands model reach for China/global use.

6. **[PR #6771](https://github.com/earendil-works/pi/pull/6771) – speed up external editor launch (CLOSED)**  
   Instead of writing prompt directly in `os.tmpdir()`, now creates a private `mkdtemp` directory. Fixes noticeable slowness on crowded temp dirs.

7. **[PR #6764](https://github.com/earendil-works/pi/pull/6764) – fix CRLF and CR line endings in TUI (CLOSED)**  
   `wrapTextWithAnsi()` previously ignored `\r\n`. Fixes corrupt overlay rows. A subtle but important correctness fix.

8. **[PR #6765](https://github.com/earendil-works/pi/pull/6765) – separate generated model data into JSON files (CLOSED)**  
   Moves generated model values into separate `.json` files while keeping the TypeScript catalog structure. Reduces repo churn on model updates.

9. **[PR #6730](https://github.com/earendil-works/pi/pull/6730) – preserve compaction queue behavior (CLOSED, inprogress)**  
   Ensures a compaction‑queued message retains its steering/follow‑up behavior. Fixes a regression in `AgentSession.prompt()`.

10. **[PR #6721](https://github.com/earendil-works/pi/pull/6721) – test model catalogs against PR merge refs (CLOSED)**  
    Uses GitHub’s merge ref to include generation scripts from main. CI improvement to prevent stale catalog artifacts.

---

## Feature Request Trends

- **Agent message presentation API** (#6747) – Extensions need a hook to mutate markdown rendering without affecting LLM content.
- **Backward thinking‑level cycling** (#3790) – Simple UX wish for overshoot prevention, now implemented.
- **Header‑only collapsed tool output** (#5137) – Desired default compact tool cards with optional expansion.
- **Environment variable control for default model** (#6777) – Users want `PI_MODEL`/`PI_PROVIDER` for dev environment consistency.
- **Compact/Codex endpoint support** (#6676) – Server‑side compaction via Codex `/responses/compact` is desired.
- **Freeform tool calls** (PR #6779) – Broad community interest in custom tool definitions beyond strict OpenAI shape.
- **New providers**: StepFun, Kimi K3 effort levels, built‑in llama‑cpp (via inline extension) – Continuous demand for more LLM backends.

---

## Developer Pain Points

1. **TUI performance regressions** – CPU spin on streaming (#6665), hang on submit under Linux Mint (#6789), slow external editor launch (#6771 fixed). High impact on daily workflow.
2. **Compaction fragility** – Single transient network error fails entire compaction (#6647), Copilot Enterprise incompatibility (#6768), misleading “nothing to compact” errors (#6751). Retry logic (PR #6775) is a welcome fix.
3. **Config sync gaps** – `pi update --extensions` does not install missing packages, breaking machine‑to‑machine sync (#6214).
4. **Error reporting & handling** – API error bodies sometimes ignored (#6749), retry not triggered for OpenAI API key mismatches (#6727), tool‑use blocks orphaned in Anthropic conversations (#6761).
5. **Keyboard protocol quirks** – Slash command selectors auto‑close under kitty keyboard protocol (#6746). Small but disruptive.
6. **Deprecated models** – Together.ai models still listed despite deprecation (#6748) – confuses users trying to select working endpoints.
7. **Hardcoded paths** – Crash log always goes to `~/.pi/agent/pi-crash.log` ignoring `PI_CODING_AGENT_DIR` (#6652).

---

*Digest produced by the Pi Community Analytics team. Data source: github.com/badlogic/pi-mono (referenced issues/PRs from earendil-works/pi).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for July 18, 2026, based on the provided GitHub data.

---

# Qwen Code Community Digest — 2026-07-18

## 1. Today's Highlights

A new nightly release (`v0.19.11-nightly`) lands with a focus on daemon cold-start tracing and multi-workspace ownership hardening, directly addressing two of the community's hottest active threads. The conversation around RFC-6378 ("Support multiple workspaces in one daemon") continues to dominate, while a major E2E CI flakiness issue (#7096) has been promptly identified and labeled for autofix. The web shell also sees significant feature velocity, with a large PR introducing a Git status chip and visual diff, signaling deeper IDE-like capabilities for the browser-based UI.

## 2. Releases

- **v0.19.11-nightly.20260718.767a32484**
  - **Key Changes:**
    - `feat(daemon)`: Trace cold first-session startup to help diagnose and optimize the initial daemon boot latency.
    - `fix(serve)`: Harden multi-workspace ownership logic to prevent races and ownership conflicts.
  - **Analysis:** This release directly responds to the community's long-running concerns about daemon cold-start performance (tracked in #4748) and lays groundwork for the multi-workspace RFC (#6378) by ensuring the single-daemon ownership model is robust.

## 3. Hot Issues (Top 10)

1.  **[#6378: RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** (29 comments)
    - **Synopsis:** An RFC proposing a shift from "1 daemon = 1 workspace" to "1 daemon = N workspaces" while maintaining backward compatibility.
    - **Why it matters:** This is the most engaged topic, indicating a strong community desire to reduce resource overhead by running a single daemon for multiple projects. The need for a clear design before implementation is evident.

2.  **[#4748: Optimize daemon cold start and qwen serve fast-path latency](https://github.com/QwenLM/qwen-code/issues/4748)** (6 comments)
    - **Synopsis:** Tracks the remaining gap after initial listener optimizations. The current daemon boot + first session (~2.5s) is still significantly slower than a full CLI init (~0.7s).
    - **Why it matters:** A major quality-of-life issue. The fix in today's nightly (#6907) is a direct response to this issue, showing it's a high-priority performance target.

3.  **[#7040: RFC: Reliable auto-memory recall — timing, quality, and telemetry](https://github.com/QwenLM/qwen-code/issues/7040)** (6 comments)
    - **Synopsis:** A narrowed RFC for improving the auto-memory recall path to benefit every user, explicitly avoiding the scope of a full "enterprise memory-governance platform."
    - **Why it matters:** The community is seeking a predictable, high-quality memory system. The decision to keep it simple and core-focused is a pragmatic and well-received direction.

4.  **[#7051: VS Code侧边插件报错 (VS Code Extension Error)](https://github.com/QwenLM/qwen-code/issues/7051)** (6 comments)
    - **Synopsis:** The VS Code companion extension fails to connect to the ACP process due to unknown Electron command-line flags (`acp`, `channel`).
    - **Why it matters:** A high-priority bug blocking users on VS Code. The error message suggests a configuration or packaging issue needing immediate investigation.

5.  **[#6809: Bug: Ctrl+S diff preview garbled for multi-line edits in permission dialog](https://github.com/QwenLM/qwen-code/issues/6809)** (4 comments)
    - **Synopsis:** The diff preview in the "write file" permission dialog concatenates lines and garbles the display for multi-line edits.
    - **Why it matters:** This is a critical UI bug that undermines user trust when reviewing changes before applying them.

6.  **[#7006: Streaming a code block taller than the viewport breaks its rendering](https://github.com/QwenLM/qwen-code/issues/7006)** (4 comments)
    - **Synopsis:** When a streamed code block exceeds the terminal viewport, it loses code styling, line numbers reset, and rendering becomes "stall-then-dump."
    - **Why it matters:** A fundamental rendering flaw that makes the CLI unusable for large code outputs, a core use case for the tool.

7.  **[#6992: Chained MCP calls fail silently with "Server configuration not found"](https://github.com/QwenLM/qwen-code/issues/6992)** (3 comments)
    - **Synopsis:** Two critical MCP bugs on Windows: (1) chained permission requests fail silently, and (2) the permission UI gets stuck.
    - **Why it matters:** MCP integration is a key differentiator. Silent failures and UI lockups are blockers for complex, multi-tool workflows, especially on Windows.

8.  **[#7128: Web Shell message text concatenated after refresh](https://github.com/QwenLM/qwen-code/issues/7128)** (2 comments)
    - **Synopsis:** After a page refresh, previously sent messages are incorrectly concatenated and re-populated the input box.
    - **Why it matters:** A highly reproducible data integrity bug that corrupts user input in the web shell. This was reported with clear reproduction steps, making it easy to fix.

9.  **[#7111: Main CI failed: E2E Tests on main](https://github.com/QwenLM/qwen-code/issues/7111)** (2 comments)
    - **Synopsis:** Another instance of the main-branch E2E test pipeline failing. This is flagged for autofix/in-progress.
    - **Why it matters:** Persistent CI failures on the main branch are a serious quality signal, blocking releases and indicating flaky tests or a regression.

10. **[#7117: feat(web-shell): persist terminal history pagination errors](https://github.com/QwenLM/qwen-code/issues/7117)** (2 comments)
    - **Synopsis:** When loading older history fails (e.g., 403/404), the warning is dismissed and the user has no persistent record of why history is missing.
    - **Why it matters:** A UX polish issue. Silent failures degrade the reliability of session history, a core feature for developers.

## 4. Key PR Progress (Top 10)

1.  **[#7142: ci(shepherd): add Fleet Shepherd — automated unblocking of the bot-PR fleet](https://github.com/QwenLM/qwen-code/pull/7142)**
    - **Synopsis:** A scheduled janitor workflow that automatically resolves merge conflicts and applies labels to keep bot PRs moving without a human shepherd.
    - **Why it matters:** A major DevOps automation win. This reduces maintainer toil and accelerates the autofix pipeline, which is generating a high volume of PRs.

2.  **[#7144: fix(core): add kimi-k3 token limits (1M context, 128K output)](https://github.com/QwenLM/qwen-code/pull/7144)**
    - **Synopsis:** Registers explicit token limits for the Kimi K3 model, preventing it from using generic fallback values.
    - **Why it matters:** Ensures correct model behavior for users of the Kimi K3 model, which has a very large context window.

3.  **[#7145: feat(daemon): Profile ACP channel initialization](https://github.com/QwenLM/qwen-code/pull/7145)**
    - **Synopsis:** Adds an opt-in profiler that records startup phases of child processes during ACP initialization, attaching timings to the parent span.
    - **Why it matters:** Provides the instrumentation needed to finally resolve the cold-start performance issue tracked in #4748.

4.  **[#7054: feat(web-shell): git status chip, visual working-tree diff, and sidebar git status](https://github.com/QwenLM/qwen-code/pull/7054)**
    - **Synopsis:** Brings working-tree Git awareness to the Web Shell, showing dirty state, diff counts, and a visual diff view.
    - **Why it matters:** A massive UX upgrade for the web shell, closing the feature gap with the terminal CLI and making it viable for daily development.

5.  **[#7060: feat(ui): let the user read the full plan from the exit_plan_mode confirmation](https://github.com/QwenLM/qwen-code/pull/7060)**
    - **Synopsis:** Adds an `o` key shortcut in the `exit_plan_mode` dialog to open the full plan in the user's configured editor.
    - **Why it matters:** A direct response to community feedback (#7001). This is a simple but effective solution for reviewing long plans.

6.  **[#7116: feat(cli): toggle plan confirmation expand/collapse with 'e' key](https://github.com/QwenLM/qwen-code/pull/7116)**
    - **Synopsis:** Adds an inline `e` key toggle to expand the plan body to full terminal height for easier reading.
    - **Why it matters:** Another PR addressing #7001, offering an alternative method to review long plans without leaving the terminal.

7.  **[#7089: fix(core): align system prompt with interaction mode](https://github.com/QwenLM/qwen-code/pull/7089)**
    - **Synopsis:** Makes the core system prompt aware of the execution mode (interactive, non-interactive, ACP-hosted) to provide accurate role descriptions and permission guidance.
    - **Why it matters:** Addresses a root cause of many permission-related bugs. Wrong system prompts can lead to the model making incorrect assumptions about its environment.

8.  **[#7048: feat(core): improve subagent delegation defaults and guardrails](https://github.com/QwenLM/qwen-code/pull/7048)**
    - **Synopsis:** Makes one-shot subagents run in the background by default, while preserving an explicit foreground option. Nested launches remain foreground.
    - **Why it matters:** A sensible change to the subagent execution model, reducing blocking and improving parallelism.

9.  **[#6999: feat(webshell): replay ChatRecord history in readonly WebShell](https://github.com/QwenLM/qwen-code/pull/6999)**
    - **Synopsis:** Adds a deterministic replay pipeline in the Web Shell for viewing persisted `ChatRecord` history.
    - **Why it matters:** Delivers the core functionality behind #7064, enabling users to review past sessions in the web UI, a long-standing request.

10. **[#7043: feat(cli): show active path in compact tool summaries](https://github.com/QwenLM/qwen-code/pull/7043)**
    - **Synopsis:** In compact mode, a dimmed hint line shows the most recent active description, addressing the "show file names" request.
    - **Why it matters:** A direct fix for #6813 that preserves the compact UI while providing critical context.

## 5. Feature Request Trends

- **Multi-Workspace Daemon ( #6378):** The single most requested architectural change. The community wants to run one `qwen serve` daemon to manage sessions for multiple projects.
- **Reliable Auto-Memory ( #7040):** A strong push for a predictable, high-quality memory recall system that works for all users, without becoming overly complex.
- **Session Management & History:** Multiple issues request new APIs for session info ( #7070), pagination improvements ( #7117), and persistent history in the Web Shell ( #6999).
- **Tool Summary & Path Display:** Several issues ( #6813, #7007, #7110) demand richer, more informative tool descriptions that show file paths and individual names instead of just counts.
- **IDE-like Web Shell Features:** The large Git status and diff PR ( #7054) signals a desire for the Web Shell to become a fully-featured development interface.
- **Expanded Git Integration:** PRs for Git status in the web shell and improved diff views show a clear trend towards deeper system-level integration.

## 6. Developer Pain Points

- **Daemon Cold-Start Latency:** The performance gap between daemon boot (~2.5s) and CLI init (~0.7s) is a persistent friction point (#4748).
- **CLI UI Rendering Bugs:** Multiple bugs are present in the terminal UI, including garbled diffs ( #6809), broken code block rendering ( #7006), and terminal state corruption after `Ctrl+C` ( #6776, #4586).
- **Multi-Workspace Ownership Confusion:** The current single-workspace-per-daemon model causes operational friction. The discussion in #6378 highlights this as a major pain point.
- **Memory Recall Unpredictability:** The core team acknowledges the auto-memory recall path needs significant improvement for reliability and quality ( #7040).
- **MCP Permission Handling:** Chained MCP tool calls and UI freezes on Windows are blocking advanced agentic workflows ( #6992).
- **VS Code Extension Fragility:** The companion extension frequently fails to launch the ACP process, often due to environmental configuration issues ( #7051, #7101).
- **Terminal State Corruption:** Managing signal handling ( `Ctrl+C`) and terminal cleanup on exit is a recurring source of bugs that disrupt the user's shell ( #6776, #4586).
- **Test Suite Flakiness:** A high number of CI failures ( #7096, #7111, #7086) indicate that the test suite, especially E2E tests, is flaky.

---
*Generated by a technical analyst specialized in AI developer tools.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-18

## Today's Highlights

The community remains intensely active around CodeWhale’s v0.9.x release cycle, with today’s digest dominated by **rendering and reliability fixes**, **plugin infrastructure gaps**, and **provider‑auth improvements**. The maintainer (Hmbown) and contributors (SparkofSpike, shenyongqing, shenjackyuanjie) merged several critical patches for Windows, HarmonyOS, and TUI glitches, while a long‑standing “agent over‑involvement” issue continues to attract the most discussion. No new releases were published in the last 24 hours.

## Releases

No releases in the last 24 hours.

## Hot Issues

1. **[#4032 – Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** *(35 comments)*  
   The top‑voted issue: the agent ignores user‑provided scripts and writes its own, then justifies itself. Community frustration is high; suggests a systemic agency‑control problem.

2. **[#3275 – CodeWhale overly involved, self‑questioning, deviating from user intent](https://github.com/Hmbown/CodeWhale/issues/3275)** *(17 comments)*  
   A regression from #3061. Users report the agent enters a self‑directed loop of proposing and executing without waiting for confirmation. A core UX/control priority.

3. **[#3192 – Request: list CodeWhale on agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192)** *(12 comments)*  
   Integration ask from Zed users – listing would simplify install. Positive community support (👍1).

4. **[#1481 – Support OpenCode Go/Zen as a DeepSeek provider](https://github.com/Hmbown/CodeWhale/issues/1481)** *(9 comments)*  
   Feature request for cheap DeepSeek‑V4 access via OpenCode. Unresolved for months; active discussion.

5. **[#4242 – Run Termux runtime QA for shell, PTY, config, and TUI startup](https://github.com/Hmbown/CodeWhale/issues/4242)** *(8 comments)*  
   Part of the official Termux/Android support epic. Maintainer validation task before marking Android support ready.

6. **[#4479 – TUI rendering glitch: missing/extra spaces, recovers on mouse selection](https://github.com/Hmbown/CodeWhale/issues/4479)** *(7 comments, recently updated)*  
   A tricky rendering bug on Windows Terminal. SparkofSpike filed a PR (#4510) that addresses a keycap‑sequence offset – community eager for fix.

7. **[#4236 – Epic: official Termux / Android arm64 support](https://github.com/Hmbown/CodeWhale/issues/4236)** *(7 comments)*  
   High demand for native Android ARM64 build (not just Linux ARM64 assets). Epic tracking QA and packaging.

8. **[#4489 – Hooks process leak on Windows](https://github.com/Hmbown/CodeWhale/issues/4489)** *(5 comments, now closed)*  
   Hook commands leak `node.exe` processes because timeout only kills `cmd.exe`. Fixed in PR #4491 – important for Windows reliability.

9. **[#4410 – Restore xAI device‑code OAuth login](https://github.com/Hmbown/CodeWhale/issues/4410)** *(4 comments, recently updated)*  
   `/auth xai-device` fails due to hard‑coded endpoint path mismatch with Grok CLI. Release‑blocker for v0.9.1.

10. **[#4100 – exec_shell fails with exit code 2147483647 on Windows](https://github.com/Hmbown/CodeWhale/issues/4100)** *(4 comments)*  
    Catastrophic failure inside Windows ConPTY – likely handle leak or resource exhaustion. Diagnostic sentinel removed in PR #4491.

## Key PR Progress

1. **[#4510 – fix(tui): give U+20E3 display width 1, fixing keycap sequence cell offset (#4479)](https://github.com/Hmbown/CodeWhale/pull/4510)**  
   Targeted fix for the “missing/extra spaces” rendering glitch. Community‑submitted by SparkofSpike.

2. **[#4500 – feat(auto): surface routing scope and per‑turn receipts](https://github.com/Hmbown/CodeWhale/pull/4500)**  
   Adds typed receipts to make Auto tier‑routing observable – addresses user complaints about opaque model selection.

3. **[#4504 – fix(onboarding): support keyless and guided provider setup](https://github.com/Hmbown/CodeWhale/pull/4504)**  
   Allows first‑run users to skip DeepSeek API key if they configure local models (SGLang, vLLM, Ollama). Reduces onboarding friction.

4. **[#4498 – fix(tui): make Ctrl+O inspector complete and draft‑safe](https://github.com/Hmbown/CodeWhale/pull/4498)** *(merged)*  
   Fixes output truncation and flashing in the pager. Moves external editor to Ctrl+Shift+O.

5. **[#4509 – fix(tui): enable CJK feature for unicode‑width to fix Ambiguous‑width glyph overlap](https://github.com/Hmbown/CodeWhale/pull/4509)** *(merged)*  
   Another rendering fix: circled numbers (①②③) no longer overlap. By SparkofSpike.

6. **[#4505 – fix(auth): isolate xAI device login from Tokio](https://github.com/Hmbown/CodeWhale/pull/4505)** *(merged)*  
   Moves synchronous xAI OAuth flow to Tokio blocking pool – resolves release‑blocker in #4410.

7. **[#4506 – feat(release): publish native Windows ARM64 artifacts](https://github.com/Hmbown/CodeWhale/pull/4506)** *(merged)*  
   First native Windows ARM64 builds. Supports npm, updater, and install UI.

8. **[#4491 – fix(runtime): contain hooks and preserve Windows PTY status](https://github.com/Hmbown/CodeWhale/pull/4491)** *(merged)*  
   Dual fix: hooks no longer leak processes (fixes #4489) and exit‑code sentinel removed to aid diagnosis (fixes #4100). Critical for Windows reliability.

9. **[#4470 – fix(ohos): generate QuickJS bindings and gate unsupported PTY tools](https://github.com/Hmbown/CodeWhale/pull/4470)** *(merged)*  
   Enables HarmonyOS/OpenHarmony build by generating rquickjs bindings and conditionally compiling PTY tools. Community contribution.

10. **[#4501 – fix(auth): fail closed on legacy Kimi imports](https://github.com/Hmbown/CodeWhale/pull/4501)** *(merged)*  
    Removes hard‑coded Kimi client ID and impersonation, making the auth path more secure and maintainable.

## Feature Request Trends

- **Broader provider support**: OpenCode Go/Zen (#1481), Kimi K3 (#4387), and improved OAuth for xAI (#4410) and Kimi (#4417) are the most requested integrations.
- **Portability & platforms**: Strong demand for native Android/Termux support (#4236, #4242) and Windows ARM64 (#4506 now shipping).
- **Observability & control**: Users want visible routing decisions (Auto tier selection, #4500), per‑turn tool budgets (#4415), and clearer provider health status (#4406).
- **Plugin ecosystem maturity**: Several issues request that plugin‑shipped skills actually work (#3917), plugin MCP servers be loaded on all subcommands (#3916), and trust be separated from enablement (#4399).

## Developer Pain Points

- **Agency over‑reach** (#3275, #4032): The agent repeatedly exceeds user intent, writing scripts or self‑directing without confirmation. This is the most‑commented pain point and a top UX priority.
- **TUI rendering glitches** (#4479, #4482): Intermittent text corruption and pager truncation on Windows Terminals degrade the core experience. Two fixes merged today (keycap offset, CJK width).
- **Windows process/resource leaks** (#4489, #4100): Hook commands leak processes; `exec_shell` can fail with cryptic exit codes. The v0.9.1 runtime bundle (#4491) addresses both.
- **Plugin infrastructure incomplete** (#3916, #3917): Plugin‑declared skills and MCP servers silently do nothing on resume/fork/exec paths. Trust and enablement are conflated (#4399).
- **Onboarding friction** (#3927): The API‑key gate blocks users who want to try local models or browse before configuring a key. PR #4504 begins to address this.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*