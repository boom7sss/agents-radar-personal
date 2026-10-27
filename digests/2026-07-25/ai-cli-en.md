# AI CLI Tools Community Digest 2026-07-25

> Generated: 2026-07-25 03:20 UTC | Tools covered: 9

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
**2026-07-25**

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 25, 2026, reflects a maturing but fractious ecosystem. Seven major tools shipped code or releases this week, with **OpenAI Codex** leading in raw velocity (five alpha releases in 24 hours) while **Claude Code** continues to dominate community engagement volume, driven by a persistent session-limit controversy with 805 comments. The ecosystem is converging on shared pain points—subagent reliability, session management, and Windows platform stability—while diverging in architectural philosophy (sandbox-first vs. flexible tool use, local-model support vs. cloud-only). Notably, **Pi** and **OpenCode** are investing in constrained sampling and lock-free execution, signaling a shift toward production-grade correctness. **Qwen Code** and **DeepSeek TUI** (now CodeWhale) are emerging as fast-followers with strong localization and performance optimization agendas.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs Updated (24h) | Release Status | Community Signal |
|------|-----------------|-------------------|----------------|-----------------|
| **Claude Code** | 10 | 1 | v2.1.219–220 | 805 comments on #38335; highest engagement |
| **OpenAI Codex** | 10 | 10 | 5× rust alpha | Rapid iteration on Windows regressions |
| **Gemini CLI** | 10 | 10 | Nightly build failed | Security fixes dominate PRs |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.75 | Regression cluster; no code contributions |
| **Kimi Code CLI** | 5 | 2 | None | Login failures dominate; smallest footprint |
| **OpenCode** | 10 | 10 | v1.18.5 | Performance/correctness focus; strong PR velocity |
| **Pi** | 10 | 10 | v0.82.0 | Compaction reliability is top concern |
| **Qwen Code** | 10 | 10 | v0.21.0 stable | Terminal rendering bugs; cold-start optimization |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | v0.9.1 stabilization | Architecture refactoring; CI policy overhaul |

**Key observation:** Three tiers emerge—**high-velocity release** (Codex, Qwen Code), **high-engagement debate** (Claude Code), and **rapid PR throughput** (Gemini CLI, OpenCode, Pi, DeepSeek TUI). Copilot CLI stands out for zero PR activity despite significant regression complaints.

---

## 3. Shared Feature Directions

### 3.1 Subagent Lifecycle & Model Management
**Appears in:** Claude Code, Gemini CLI, Copilot CLI, Pi, Qwen Code

- **Model grade selection for subagents**: Claude Code (#81050), Qwen Code (#7685, draft PR #7702) both want granular control over which model a subagent uses (small/medium/high). Pi (#7065) validates context size on model switch. *Trend: Users want cost- and capability-optimized agent hierarchies.*
- **Subagent persistence across sessions**: Codex (#33314) demands full-profile lifecycle continuity; Gemini CLI (#22323) reports false success on max-turn exceedance. *Repeated across 4+ tools.*

### 3.2 Session Continuity & Compaction
**Appears in:** Claude Code, Copilot CLI, OpenCode, Pi, Qwen Code

- **Compaction data loss**: Claude Code (#80883, community plugin proposal), Copilot CLI (#4183, 5 MB CAPI limit), OpenCode (#13838, fake user message injection), Pi (#6768, #7020, #7048). *This is the most consistent cross-tool pain point—every major tool has a compaction reliability issue.*
- **Resume behavior regression**: Qwen Code (#7485, blank area), Copilot CLI (#4251, OOM on resume), Pi (#6951, model state lost). *Session resumption after idle is fragile across the board.*

### 3.3 Remote/Cross-Device & MCP Integration
**Appears in:** Claude Code, Kimi Code CLI, OpenCode, Pi, Qwen Code

- **MCP OAuth/infrastructure gaps**: Claude Code (#78469, 401 on valid token), Pi (#6970, multi-device token invalidation), Qwen Code (#7510, OAuth callback hardening), Kimi Code CLI (#762, SSL_CERT_FILE). *MCP and remote control remain immature across all tools.*
- **Remote session continuation**: Kimi Code CLI (#1282, 👍16), OpenCode (#29152, SSH remote editing). *Strong demand for device-spanning workflows.*

### 3.4 User-Configurable Behavior & Governance
**Appears in:** Claude Code, Qwen Code, DeepSeek TUI

- **User rules vs. system prompt conflicts**: Qwen Code (#7679, QWEN.md bans overridden), DeepSeek TUI (#4783, constitution.json amend UX). *Users want deterministic precedence for custom instructions.*
- **Permission/approval UX**: DeepSeek TUI (#4608, permission posture alignment), Codex (#35281, structured consent workflows). *Consent models are being redesigned for clarity.*

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|----------|----|-----------|--------------|
| **Primary target** | Enterprise Dev/CI | Windows devs | Google ecosystem | GitHub ecosystem | Power devs | Multi-provider hackers | Chinese/Asian market | Localization & TUI |
| **Model philosophy** | Cloud-only, sandboxed | Cloud-only, fast iteration | Multi-model | Cloud-only, GitHub integration | Multi-model | Local-first + cloud | DashScope + cloud | Multi-model, local |
| **Agent model** | Subagent hierarchy | Multi-agent V2 | Generalist + subagents | Sequential plan-mode | V2 runner, lock-free | Coding agent + constrained sampling | Subagent model grades | Staged command boundaries |
| **Security focus** | Sandbox strict allowlist | Credential broker | OAuth + HTTPS enforcement | Password masking (complain) | Permission coalescing | Constrained tool JSON | OAuth callback hardening | Audit bug cluster (11 fixes) |
| **Top differentiator** | Sandboxed execution | Windows focus | Security regression velocity | GitHub integration depth | Compaction/correctness | Local model viability | Terminal rendering | Architecture refactoring |
| **Weakest point** | Session limit trust | Git resource leaks | Agent hangs (false success) | Regression management | Subscription confusion | Compaction reliability | Xterm.js + IME bugs | Pipeline drift |

**Takeaway:** The market is segmenting along cloud vs. local, enterprise vs. individual, and platform allegiance (GitHub, Google, OpenAI). Claude Code and Codex compete for CI/CD workflows; Pi and OpenCode serve the polyglot power-user niche.

---

## 5. Community Momentum & Maturity

| Tool | Community Size Proxy | Velocity | Maturity Signal | Risk Factors |
|------|--------------------|----------|----------------|--------------|
| **Claude Code** | 805-comment issue, 470 👍 | Moderate (2 patches/day) | Sandbox security model | Session trust erosion; Fable 5 teething |
| **OpenAI Codex** | 33 comments top issue, 5 alpha/day | Very High (5 releases) | Rust alpha indicates active dev | Windows QA gaps; release quality regressions |
| **Gemini CLI** | 8+ 👍 top issue, 10 PRs | High (10 PRs) | Security hardening focus | Nightly CI failures; agent unreliability |
| **Copilot CLI** | 28 👍 top request, 0 PRs | Low (1 release) | GitHub ecosystem integration | Regression accumulation; zero community code |
| **Kimi Code CLI** | 16 👍 top request, 2 PRs | Low (no release) | Enterprise proxy PR (long overdue) | Login failures block growth |
| **OpenCode** | 16 comments top issue, 10 PRs | High (10 PRs) | Lock-free runner; PDF support | Subscription/billing confusion |
| **Pi** | 12 comments top issue, 10 PRs | High (10 PRs) | Constrained tool sampling | Compaction/compatibility issues |
| **Qwen Code** | 8 comments top issue, 10 PRs | High (stable + nightly) | Terminal math fix, cold-start perf | Mac/IME input challenges |
| **DeepSeek TUI** | 17 comments epic, 10 PRs | High (stabilization sprint) | CI policy evolution; localization push | Architecture debt (14k-line files) |

**Ranked by overall momentum:** OpenAI Codex > OpenCode ≈ Pi ≈ Qwen Code > Gemini CLI > DeepSeek TUI > Claude Code > Copilot CLI > Kimi Code CLI

---

## 6. Trend Signals

### 6.1 The Great Regression
Multiple tools (Copilot CLI, Codex, Claude Code) introduced regressions this week—broken scrolling, blocked commands, OOM on resume. The prevalence suggests **feature velocity is outpacing testing capacity**. Copilot CLI's zero-PR response to a regression cluster signals a maintenance debt crisis.

### 6.2 Local Model Viability Under Pressure
Pi and Qwen Code both show local/self-hosted model support degrading: llama.cpp race conditions (#6922, #7072), Qwen default model not applied (#6948). The **local-model dream faces infrastructure friction** that cloud-only tools avoid.

### 6.3 Security Is Becoming a First-Class Feature
Pi's constrained tool sampling, Gemini CLI's HTTPS enforcement + OAuth fix cluster, and DeepSeek TUI's 11-fix audit landing all indicate **security hardening is no longer optional**. Claude Code's sandbox strict allowlist is the most mature approach; Kimi Code's pending SSL_CERT_FILE fix shows enterprise security gaps persist.

### 6.4 Compaction Is the Achilles' Heel
Every tool with session persistence reports compaction bugs: data loss, fake messages, token waste, OOM. This is **the foundational UX challenge for all agentic CLI tools**. The community is building workarounds (Claude Code's `context-safety-net` plugin) before vendors provide first-party solutions.

### 6.5 Subagent Autonomy Demand Is Surpassing Capability
Users want subagents that choose their own models, persist state, and report accurate completion status. Current implementations hang (#21409), lie about success (#22323), or ignore custom skills (#21968). **The gap between user expectations and agent reliability is the ecosystem's biggest opportunity.**

### 6.6 Cross-Platform Parity Remains Elusive
Windows-specific bugs dominate Codex (git.exe, GPU crash, second-folder brick) and Qwen Code (IME, WSL rendering). Linux has ECONNRESET and connection drops. macOS has proxy certificate errors. **No tool has achieved stable cross-platform parity**—this is a key gap for any entrant.

### 6.7 Open Source Rebalancing
DeepSeek TUI's rebrand to CodeWhale and aggressive CI policy (close issues or explain why) signals **open-source projects are professionalizing**. The 329-of-342 issues touched statistic is a governance signal: active translation and refactoring are now community norms, not vendor expectations.

---

*Report generated from public GitHub activity on 2026-07-25. Data compiled from Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI (CodeWhale) community digests.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot:** 2026-07-25

---

## 1. Top Skills Ranking

### 1.1 skill-creator Bug Fixes (Multiple PRs) — #1298, #1099, #1050, #362, #361, #1323
**Status:** Open | **Activity:** Extensive cross-referencing across 6+ PRs and 4+ related issues (#556, #1169, #1061)

The *skill-creator* toolkit is the community's most actively discussed topic. Multiple PRs target a systemic `recall=0%` bug in `run_eval.py` that renders the description-optimization loop useless. Key discussion points:
- **Windows incompatibility** (subprocess `PATHEXT`, `cp1252` encoding, `select` on pipes) — PRs #1099, #1050
- **YAML parsing failures** from unquoted description fields with colons — PRs #539, #361
- **UTF-8 byte-length validation** to prevent Rust panics in the CLI — PR #362
- **Trigger detection logic** that bails on non-Skill tools or misses the skill name — PR #1323
- **Eval artifact installation** fix to make skills available during testing — PR #1298

**Why this dominates:** Without a working evaluation loop, skill authors cannot optimize descriptions. This is the ecosystem's critical infrastructure bottleneck.

[PR #1298](https://github.com/anthropics/skills/pull/1298) | [PR #1099](https://github.com/anthropics/skills/pull/1099) | [PR #362](https://github.com/anthropics/skills/pull/362) | [Issue #556](https://github.com/anthropics/skills/issues/556)

---

### 1.2 document-typography — PR #514
**Status:** Open | **Created:** 2026-03-04 | **Updated:** 2026-03-13

A quality-control skill targeting orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. The PR emphasizes that these issues "affect every document Claude generates" and that "users rarely ask for good typography" — making it a silent quality gap.

**Discussion highlights:** Addresses a universal pain point for document generation. The skill is self-contained and immediately actionable with clear trigger descriptions.

[PR #514](https://github.com/anthropics/skills/pull/514)

---

### 1.3 self-audit — PR #1367
**Status:** Open | **Created:** 2026-06-28 | **Updated:** 2026-07-02

A meta-skill that audits AI output *before delivery* with a two-stage pipeline: (1) mechanical file verification (claims every output file exists), then (2) a four-dimension reasoning quality audit in damage-severity priority order. Claims universal applicability across any project and model.

**Discussion highlights:** This is a novel "gatekeeper" pattern — it doesn't guide generation but verifies output. Related proposal (#1385) extends this into a three-gate pipeline. Represents a new skill category: output quality assurance.

[PR #1367](https://github.com/anthropics/skills/pull/1367) | [Issue #1385](https://github.com/anthropics/skills/issues/1385)

---

### 1.4 testing-patterns — PR #723
**Status:** Open | **Created:** 2026-03-22 | **Updated:** 2026-04-21

A comprehensive testing skill covering the full stack: testing philosophy (Trophy model), unit testing (AAA pattern, pure functions, edge cases), React component testing (Testing Library, queries, user events), end-to-end testing, and mocking strategies.

**Discussion highlights:** Fills a clear gap — the collection had creative, document, and enterprise skills but no dedicated testing guidance. The scope is ambitious; community feedback may focus on balancing depth with token efficiency.

[PR #723](https://github.com/anthropics/skills/pull/723)

---

### 1.5 color-expert — PR #1302
**Status:** Open | **Created:** 2026-06-10 | **Updated:** 2026-07-21

A self-contained color expertise skill covering color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912), color spaces with usage guidance (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and accessibility-focused color palettes.

**Discussion highlights:** Highly polished with concrete, referenced color knowledge. The "what to use when" tables directly address Claude's tendency to produce aesthetically poor color choices. Active updates suggest author responsiveness to feedback.

[PR #1302](https://github.com/anthropics/skills/pull/1302)

---

### 1.6 pyxel — PR #525
**Status:** Open | **Created:** 2026-03-05 | **Updated:** 2026-07-15

A skill for retro game development using the Pyxel engine, integrating with a companion MCP server (`pyxel-mcp`). Covers the write → run_and_capture → inspect → iterate workflow.

**Discussion highlights:** Niche but enthusiastically received. Represents the "creative coding" demand. Integration with an external MCP server is a notable architectural pattern worth monitoring.

[PR #525](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends

### 2.1 Skill Reliability & Infrastructure
The dominant issue cluster (43 comments on #492, 14 on #228, 12 on #556, 10 on #62) reveals deep concern about the **skill ecosystem's foundations**:
- **Security/trust boundaries** (#492): Community skills under `anthropic/` namespace impersonate official skills — a trust vulnerability requiring namespace governance
- **Org-wide sharing** (#228): Request for team-level skill distribution without manual file sharing
- **Skill persistence** (#62): Skills disappearing after file renames or sync failures

### 2.2 Cross-Platform Compatibility
Multiple issues (#1061, #1169) and 4+ PRs target **Windows support** for skill-creator tools. The `.claude` CLI ships as `claude.cmd` on Windows, but Python's subprocess doesn't honor `PATHEXT`. This is a barrier for a significant portion of the developer audience.

### 2.3 Agent Governance & Safety
Requested skills:
- **Agent governance** (#412): Policy enforcement, threat detection, trust scoring, audit trails for AI agent systems
- **Reasoning quality gates** (#1385): Pre-task calibration → adversarial review → delivery verification pipeline
- **Compact memory** (#1329): Symbolic notation for efficient agent state management

### 2.4 Duplicate Skill Management
Issue #189 (6 comments, 9 👍) reports that installing both `document-skills` and `example-skills` plugins creates identical skills, wasting context window. Community wants **deduplication logic** at the plugin level.

### 2.5 MCP Integration
Issue #16 requests exposing Skills as MCPs (Model Context Protocol) to create standardized APIs for AI software, suggesting a convergence between the Skills and MCP ecosystems.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to merge soon:

| Skill | PR | Created | Status Signal |
|-------|----|---------|---------------|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-04 | Low friction, clear value, no dependencies |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 2026-06-28 | Author has related proposal (#1385); active iteration |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-03-22 | Comprehensive scope; may need size trimming |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | 2026-06-10 | Author actively updating (latest: Jul 21) |
| **pyxel** | [#525](https://github.com/anthropics/skills/pull/525) | 2026-03-05 | Sustained updates (latest: Jul 15); external MCP dependency |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-03-01 | Fills enterprise document gap; waiting on review |
| **SAP-RPT-1-OSS** | [#181](https://github.com/anthropics/skills/pull/181) | 2025-12-28 | Long-running; enterprise vertical |

**Skill-creator fix PRs** (#1298, #1099, #1050, #1323) are likely to merge on a fast track given the critical `recall=0%` bug blocking all description optimization, but they represent infrastructure fixes rather than new skills.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is a reliable, cross-platform skill creation and evaluation toolkit** — the `recall=0%` bug cluster and Windows compatibility issues are referenced across 6+ PRs and 4+ issues, making skill-creator reliability the single largest blocker to ecosystem growth, far outweighing demand for any individual domain skill.

---

# Claude Code Community Digest — 2026-07-25

**Data source:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## Today’s Highlights

Two minor patch releases landed today (v2.1.219 and v2.1.220), the most notable addition being **Claude Opus 5** as the default Opus model with 1M context and a strict allowlist setting for sandboxed commands. The community is still wrestling with a months-old session‑limit exhaustion bug (#38335) that has amassed 805 comments, and several new Fable 5 issues are surfacing around safety classifiers, invisible mid‑turn messages, and model persistence on session resume.

---

## Releases

Two versions shipped in the last 24 hours:

- **[v2.1.220](https://github.com/anthropics/claude-code/releases/tag/v2.1.220)** — Bug fixes and reliability improvements only.
- **[v2.1.219](https://github.com/anthropics/claude-code/releases/tag/v2.1.219)** — Adds **Claude Opus 5** (`claude-opus-5`, 1M context, $10/$50 per Mtok) as the default Opus model. Introduces `sandbox.network.strictAllowlist` to deny non‑allowlisted hosts without prompting for sandboxed commands. Also adds a `DirectoryAdded` hook.

No breaking changes or major new features in either release.

---

## Hot Issues (Top 10 by community activity)

1. **[#38335 – Claude Max plan session limits exhausted abnormally fast since March 23, 2026](https://github.com/anthropics/claude-code/issues/38335)**  
   **805 comments · 470 👍**  
   The highest‑traffic open issue. Users report session limits being hit after just a few turns despite a Max plan. Despite being labeled `[invalid]`, it continues to attract new activity daily. Indicates a persistent perception of throttling or a counting bug.

2. **[#40043 – Allow removal of local folders from a Cowork project’s context](https://github.com/anthropics/claude-code/issues/40043)**  
   **21 comments · 63 👍**  
   Feature request to prune unwanted directories from the context in Cowork sessions. Strong consensus that this would improve large‑project workflows.

3. **[#62644 – "Buy credits" button permanently disabled – free tier shows $500 limit](https://github.com/anthropics/claude-code/issues/62644)**  
   **13 comments**  
   Free‑tier users cannot upgrade due to a UI bug; billing page returns HTTP 429. Blocks a significant onboarding path.

4. **[#69336 – API Error: Connection closed mid‑response (Linux)](https://github.com/anthropics/claude-code/issues/69336)**  
   **10 comments · 11 👍**  
   Happens immediately in new context windows. Affects users on Linux and hints at a deeper API or networking issue.

5. **[#79360 – Fable 5 gated behind usage credits dialog on Max when using `claude setup-token`](https://github.com/anthropics/claude-code/issues/79360)**  
   **7 comments · 35 👍**  
   OAuth tokens with inference‑only scope cannot read entitlements, so Fable 5 is blocked even for paying Max users. A common frustration for CI/CD setups.

6. **[#67766 – Socket connection closed unexpectedly (server‑initiated FIN, 10 incidents)](https://github.com/anthropics/claude-code/issues/67766)**  
   **6 comments · 4 👍**  
   Packet‑capture evidence points to server‑side FIN mid‑stream, not client issues. Intermittent but disruptive under heavy interactive use.

7. **[#78469 – Remote Control fails at bridge init: intermittent 401 on valid OAuth token](https://github.com/anthropics/claude-code/issues/78469)**  
   **6 comments · 1 👍**  
   Backend fleet inconsistency causes ~50‑70% of `--remote-control` sessions to fail at startup on Windows.

8. **[#66697 – Fable 5 safety classifier false‑positives on authorized security audits (closed, stale)](https://github.com/anthropics/claude-code/issues/66697)**  
   **5 comments · 3 👍**  
   Closed as stale, but reveals an unresolved tension: Fable 5’s cyber safety classifier blocks legitimate defensive security work.

9. **[#77798 – Fable mid‑turn messages invisible to operator; long text blocks emitted as thinking blocks](https://github.com/anthropics/claude-code/issues/77798)**  
   **4 comments · 1 👍**  
   Operator cannot see mid‑turn assistant output, making Fable 5’s iterative reasoning opaque. Likely related to block‑type handling.

10. **[#76248 – Cowork git proxy blocks all pushes not in “authorized repository set”](https://github.com/anthropics/claude-code/issues/76248)**  
    **3 comments · 3 👍**  
    Even PAT pass‑through no longer works. Rollout of `CCR_TEST_GITPROXY` broke existing workflows mid‑session.

---

## Key PR Progress

Only **one pull request** was updated in the last 24 hours:

- **[#80883 – feat: Add context-safety-net plugin to mitigate auto-compact context loss](https://github.com/anthropics/claude-code/pull/80883)**  
  Proposed by community member `jeshiomurmu`. Addresses long‑standing complaints about silent context degradation during auto‑compaction (see issues #42542, #13112, #28721). The plugin would save snapshots of key files before compaction, enabling deterministic recovery. The PR is still open and awaiting review.

No other PRs were updated or merged in this window. The community is clearly focused on issues rather than code contributions this week.

---

## Feature Request Trends

From recent issues and enhancement tags, the most requested directions are:

- **Cowork context management** (#40043, #76248): Users want to remove local folders from a project’s context, and to push freely to any repository without an “authorized set” proxy.
- **Subagent model policies** (#81050): Granular control over which model a subagent uses, with relative bias and cap/floor bounds.
- **Plugin skill overrides** (#81047): `skillOverrides` in settings.json is ignored for plugin‑provided skills; users want the same off/on control as for built‑in skills.
- **Gmail connector improvements** (#81044): Connector shows “connected” but doesn’t appear in the tool list or scheduled routines.
- **Persistent model configuration** (#81045): Resuming a session should restore the previously selected model (e.g., Sonnet 5) instead of defaulting to Fable 5.
- **Memory transparency** (#81040): The agent claims its memory is project‑agnostic, but users want explicit documentation and reliable model answers about scope (local vs. global, per‑project vs. per‑machine).

---

## Developer Pain Points

Recurring frustrations and high‑frequency blockers visible in this week’s data:

1. **Session‑limit billing confusion** (#38335, #62644) – Max plan users feel throttled; free‑tier users cannot upgrade. Trust in the billing system is eroding.
2. **Network reliability** (#69336, #67766, #78469) – Intermittent API crashes (ECONNRESET, FIN, 401 on valid tokens) disrupt workflows, especially on Linux and Windows. Root causes appear to be on the server side.
3. **Fable 5 teething issues** (#79360, #66697, #77798, #81045) – Authentication gaps, safety false positives, invisible mid‑turn output, and model‑preference overwrites make Fable 5 unreliable for many early adopters.
4. **Context window mismatches** (#81039) – Desktop app uses 200K context while terminal uses 1M; `/context` under‑reports and auto‑compaction never fires, causing silent truncation.
5. **Session persistence** (#80642, #74894) – Session indexes are lost on reinstall or VS Code restart even when transcript files remain on disk, forcing users to rebuild context.
6. **Git proxy lock‑in** (#76248) – Cowork sessions now block pushes to unauthorized repos, breaking established `git push` workflows with PATs.
7. **Auto‑compaction degradation** (#80883, #81039) – Long sessions silently lose anchor files. The proposed `context-safety-net` plugin is a community attempt to patch this, but a first‑party solution is still missing.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the Codex Community Digest for July 25, 2026.

---

## Codex Community Digest – 2026-07-25

### Today's Highlights
A torrent of five consecutive Rust alpha releases landed today, suggesting rapid iteration on the `0.146.0` branch—likely targeting stability for the Windows desktop client. The community is vocal about Windows-specific regressions, with a critical new bug report detailing a complete desktop lock-up when adding a second folder to a project. Meanwhile, several high-traction issues around `git.exe` resource leaks and accidental folder creation continue to dominate discussion.

### Releases
Five new Rust alpha releases were published in the last 24 hours:
- **rust-v0.146.0-alpha.10**, **.9**, **.8**, **.7**, and **.6**
  - All are labeled simply as “Release 0.146.0-alpha.X”. No individual changelogs are provided, but the volume suggests aggressive bug fixing and internal validation, likely addressing the surge of Windows and Git-related crashes reported this week.

### Hot Issues

1. **[#17229 – Codex Windows App keeps spawning `git.exe` processes](https://github.com/openai/codex/issues/17229)**
   - *33 comments, 6 👍* – A long-running issue (April 2026) that refuses to die. The app repeatedly calls `git.exe status --porcelain=v1 -z` and leaves orphan processes. Community frustration is high; the 33 comments indicate this is a top pain point for Windows users.

2. **[#20880 – Silent `~/Documents/Codex` folder creation](https://github.com/openai/codex/issues/20880)**
   - *20 comments, 39 👍* – High community agreement. Users demand the app stop creating empty folders on every launch. This is a classic paper-cut bug that erodes trust in the desktop experience.

3. **[#35057 – Windows Desktop unstartable after adding second folder to project](https://github.com/openai/codex/issues/35057)**
   - *19 comments, 5 👍* – Filed yesterday, this is today's most critical bug. The app bricks itself after a multi-root project is created. The crash is reproducible and renders the app unusable until repair.

4. **[#25928 – Submitted prompts randomly disappear before entering queue](https://github.com/openai/codex/issues/25928)**
   - *16 comments, 8 👍* – A queue-drop bug in the Cursor/VS Code extension on Windows. Prompts users typed vanish silently. High impact for daily coding workflows.

5. **[#20933 – Multiple `git.exe add -A` processes cause severe CPU/disk usage](https://github.com/openai/codex/issues/20933)**
   - *13 comments, 11 👍* – Another Git-related performance issue. Opening a chat triggers parallel `git add -A` processes, causing system-wide slowdowns.

6. **[#34133 – `Page.captureScreenshot` crashes GPU process due to Code Integrity reject](https://github.com/openai/codex/issues/34133)**
   - *9 comments* – A deep-dive Windows bug. A bundled `vk_swiftshader.dll` is rejected by Code Integrity, crashing the in-app browser's GPU process. Complex and rare, but severe when triggered.

7. **[#20930 – Notifications break with remote connections](https://github.com/openai/codex/issues/20930)**
   - *8 comments, 15 👍* – Users accessing Codex from macOS to a remote Linux host get no turn-complete notifications. A significant remote-work regression.

8. **[#31967 – GPT-5.6 Luna resolves to missing internal engine for non-Codex originators](https://github.com/openai/codex/issues/31967)**
   - *8 comments, 8 👍* – **Closed**. A model routing bug where ChatGPT OAuth users hitting `gpt-5.6-luna` from outside Codex get a "Model not found" error. Important for API parity.

9. **[#35050 – GPT-5.6 serializes independent Code Mode calls; batching reduces usage by 27–45%](https://github.com/openai/codex/issues/35050)**
   - *7 comments* – An insightful model-behavior report. Users discovered the model serializes parallel tool calls, and explicit batching dramatically cuts token weight. Valuable for power users managing usage quotas.

10. **[#33314 – Multi-Agent V2 needs verifiable full-profile lifecycle continuity](https://github.com/openai/codex/issues/33314)**
    - *7 comments, 8 👍* – A follow-up request for custom agent persistence. Users want custom agents to retain state and profile settings across sessions reliably.

### Key PR Progress

1. **[#35280 – Skip plugin MCP filtering when no allowlists are configured](https://github.com/openai/codex/pull/35280)**
   - Cleanup: avoids unnecessary MCP server filtering when no allowlists exist, simplifying plugin behavior for most users.

2. **[#35275 – Trace remote exec-server connection setup](https://github.com/openai/codex/pull/35275)**
   - Observability: adds tracing spans for remote environment startup, network connections, and WebSocket stages. Essential for debugging remote execution issues.

3. **[#35271 – Include code-mode tool names in Responses Lite metadata](https://github.com/openai/codex/pull/35271)**
   - API: exposes structured tool names in Responses Lite metadata, enabling clients to better understand which code-mode tools were invoked.

4. **[#29752 – Integrate experimental credential broker](https://github.com/openai/codex/pull/29752)**
   - **Open** – Core integration for replacing real credentials with dummies in managed child processes. A security/privacy feature still in review.

5. **[#35267 – Harden network approval cancellation and concurrency](https://github.com/openai/codex/pull/35267)**
   - Stability: scopes pending network approvals to a single execution, fixing race conditions where duplicate requests or cancelled executions could leave the system in an inconsistent state.

6. **[#35266 – Allow disabling the in-process code-mode host fallback](https://github.com/openai/codex/pull/35266)**
   - Configuration: adds a flag to avoid falling back to embedded V8 when the standalone host fails. Useful for environments where the embedded host is undesirable.

7. **[#35264 – Sign bundled macOS helper binaries](https://github.com/openai/codex/pull/35264)**
   - Platform fix: ensures `rg` and zsh helpers are signed and notarized during the macOS build process, fixing a CI gap that left them unsigned in previous releases.

8. **[#35262 – Track remote plugin IDs in skill invocation analytics](https://github.com/openai/codex/pull/35262)**
   - Telemetry: adds `remote_plugin_id` to analytics, enabling better tracking of plugin usage patterns for the upcoming marketplace.

9. **[#31307 – Support a configurable plugins MCP endpoint](https://github.com/openai/codex/pull/31307)**
   - Config: allows `CODEX_PLUGINS_MCP_BASE_URL` to override the default MCP endpoint, critical for development and staging setups.

10. **[#35238 – Support the ent26 enterprise plan](https://github.com/openai/codex/pull/35238)**
    - Billing: recognizes the new `ent26` enterprise plan across auth, rate-limiting, and app-server schemas. A behind-the-scenes change for upcoming enterprise features.

### Feature Request Trends
- **Multi-Agent Lifecycle Persistence** (#33314): Users demand that custom agents retain full state and profiles across sessions.
- **Structured Consent Workflows** (#35281): Requests for a formal "User action required" checkpoint for policy-mandated consent steps, rather than relying on implicit permissions.
- **Better Model Capability Disclosure** (#34677): Users want clear indicators when models silently degrade or reroute (e.g., GPT-5.6 Pro behaving as Instant). Transparency is key.

### Developer Pain Points
- **Windows Git Spawn Hell**: Issues #17229, #20933, and #35179 collectively show that Codex's Git integration on Windows is a recurring source of resource leaks, CPU spikes, and crashes. This is the #1 cluster of Windows complaints.
- **Silent Side Effects**: The `~/Documents/Codex` folder creation (#20880) and other silent file-system modifications erode trust. Developers expect apps to announce when they write to disk.
- **Post-Update Bricking**: Multiple reports (#35057, #35284) indicate that the July 24 Windows update introduced a class of bugs that render the app completely unstartable without repair—a critical release-quality regression.
- **Model Behavior Opacity**: Users are frustrated by silent model rerouting (#34677) and request-blocking that permanently poisons threads (#35160). Clearer error states and model selection indicators are sorely needed.
- **CLI Database Locking**: Issue #31184 ("database is locked") and high-frequency SQLite writes (#35092) show that the CLI backend still has concurrency issues, especially under API key authentication.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-25

## Today’s Highlights

The nightly release for v0.54.0-nightly.20260725 failed due to a workflow error, though no blocking issues were reported in the last 24 hours. Agent reliability remains the top concern: subagents incorrectly report success after hitting the max turn limit, and the generalist agent still hangs on simple tasks. On the security front, multiple PRs landed to fix OAuth token refresh, credential leak over HTTP, and path traversal in the a2a-server.

## Releases

No new versions were published in the last 24 hours.

## Hot Issues (10 noteworthy)

1. **#22323 – Subagent recovery after MAX_TURNS reported as GOAL success**  
   `codebase_investigator` returns `status: "success"` and `Termination Reason: "GOAL"` even though it hit the max turn limit before doing any work. This misleads users into thinking analysis completed. (12 comments, 2 👍)  
   [google-gemini/gemini-cli Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 – Generalist agent hangs**  
   Gemini CLI hangs indefinitely whenever it delegates to the generalist agent. Workaround is to instruct the model not to use sub‑agents. High community impact (8 comments, 8 👍).  
   [google-gemini/gemini-cli Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#24353 – Robust component level evaluations**  
   Epic tracking 76 behavioral eval tests and the need for a more systematic evaluation framework for agent components. (7 comments)  
   [google-gemini/gemini-cli Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

4. **#22745 – Assess AST-aware file reads, search, and mapping**  
   Investigates whether AST-based tools could reduce tokens, improve precision, and reduce turn count for code understanding. (7 comments, 1 👍)  
   [google-gemini/gemini-cli Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

5. **#21968 – Gemini does not use skills and sub-agents enough**  
   Even when relevant custom skills (e.g., gradle, git) are defined, the model rarely invokes them unless explicitly told. Community frustration with underutilised agent capabilities. (6 comments)  
   [google-gemini/gemini-cli Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **#26522 – Auto Memory retries low-signal sessions indefinitely**  
   Sessions the extraction agent skips as low‑signal are never marked processed, causing them to reappear infinitely. (5 comments)  
   [google-gemini/gemini-cli Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

7. **#26525 – Add deterministic redaction and reduce Auto Memory logging**  
   Sensitive content is sent to the model before redaction, and skill content may be logged. Usability & security concern. (4 comments)  
   [google-gemini/gemini-cli Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

8. **#25166 – Shell command execution stuck with “Waiting input” after completion**  
   Simple CLI commands cause Gemini to hang, showing the shell as active even though the command has finished. Repeated occurrence. (4 comments, 3 👍)  
   [google-gemini/gemini-cli Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

9. **#22232 – browser_agent: session takeover and lock recovery**  
   Currently uses a fail‑fast strategy when encountering a locked browser profile; requests automatic recovery for persistent sessions. (4 comments)  
   [google-gemini/gemini-cli Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)

10. **#21983 – Browser subagent fails on Wayland**  
    The browser agent terminates with `GOAL` but fails to work properly under Wayland sessions. (4 comments, 1 👍)  
    [google-gemini/gemini-cli Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

---

## Key PR Progress (10 important)

1. **#28353 – fix(a2a-server): prevent path traversal in restore command**  
   Adds normalization and containment checks to avoid reading arbitrary files via `../etc/passwd`. Defence‑in‑depth. (closed)  
   [google-gemini/gemini-cli PR #28353](https://github.com/google-gemini/gemini-cli/pull/28353)

2. **#28348 – fix: resolve MaxListenersExceededWarning and infinite auth loop**  
   Fixes two critical bugs: retry loops flooding listeners and an infinite OAuth loop on Windows after success. (closed)  
   [google-gemini/gemini-cli PR #28348](https://github.com/google-gemini/gemini-cli/pull/28348)

3. **#28531 – fix(a2a-server): normalize CRLF line endings to LF in getProposedContent**  
   Ensures side‑by‑side diffs in Gemini Code Assist work correctly on Windows by converting CRLF to LF. (open)  
   [google-gemini/gemini-cli PR #28531](https://github.com/google-gemini/gemini-cli/pull/28531)

4. **#28523 – fix(core): enforce explicit tag length and validation in file keychain**  
   Enforces 128‑bit authentication tags for credential storage, preventing potential cryptographc misconfigurations. (open)  
   [google-gemini/gemini-cli PR #28523](https://github.com/google-gemini/gemini-cli/pull/28523)

5. **#28517 – fix(core): enforce HTTPS for GoogleCredentialsAuthProvider**  
   Blocks transmission of ADC tokens over HTTP, addressing a cleartext leakage vulnerability. (closed)  
   [google-gemini/gemini-cli PR #28517](https://github.com/google-gemini/gemini-cli/pull/28517)

6. **#28481 – fix(core): refresh MCP OAuth tokens with the stored client ID**  
   Fixes token refresh for dynamically registered MCP servers, where failures previously deleted stored credentials. (open)  
   [google-gemini/gemini-cli PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

7. **#28446 – fix(auth): use native fetch for OAuth token exchange**  
   Replaces third‑party HTTP library with native fetch to resolve “Premature close” errors on headless VPSes. (open)  
   [google-gemini/gemini-cli PR #28446](https://github.com/google-gemini/gemini-cli/pull/28446)

8. **#28532 – feat(caretaker-evals): add local golden issue collection and Firestore sync tools**  
   Extends evaluation infrastructure with tooling to manage test datasets for the Caretaker Agent. (open)  
   [google-gemini/gemini-cli PR #28532](https://github.com/google-gemini/gemini-cli/pull/28532)

9. **#28530 – feat(caretaker-evals): add triage evaluation framework and judge runner**  
   Implements an LLM‑as‑a‑Judge rubric and parallel benchmark runner for issue triage quality assessment. (open)  
   [google-gemini/gemini-cli PR #28530](https://github.com/google-gemini/gemini-cli/pull/28530)

10. **#28435 – feat(pr-generator-core): add environment config parser, command executor, GitHub REST client**  
    Foundational utilities for a new headless code generation pipeline, including Git operations and ANSI log filtering. (open)  
    [google-gemini/gemini-cli PR #28435](https://github.com/google-gemini/gemini-cli/pull/28435)

---

## Feature Request Trends

- **AST-aware tooling** – Multiple issues and epics (#22745, #22746) propose using Abstract Syntax Tree analysis to improve code reading, search, and codebase mapping, reducing token usage and turn count.
- **Agent autonomy & self-awareness** – Users want the CLI to understand its own flags, hotkeys, and capabilities (#21432), and to autonomously use custom skills and sub‑agents without explicit instructions (#21968).
- **Browser agent resilience** – Requests for automatic session lock recovery (#22232) and better Wayland support (#21983) show the browser agent is a pain point.
- **Memory system improvements** – The Auto Memory feature needs robust retry handling (#26522), deterministic redaction (#26525), and quarantine for invalid patches (#26523).
- **Destructive operation prevention** – Demand for the agent to be more cautious with commands like `git reset --force` and database modifications (#22672).

---

## Developer Pain Points

- **Agent hangs and false successes** – The generalist agent hangs indefinitely (#21409) and subagents report “GOAL” success even when they timeout (#22323), eroding trust in agent completion.
- **Security & credential handling** – Credentials can be sent in cleartext over HTTP (#28517), OAuth refresh fails silently (#28481, #28446), and redaction is applied after content enters model context (#26525).
- **Subagent permission & usage issues** – Subagents run without consent after v0.33.0 (#22093), and the model rarely invokes custom skills unless forced (#21968).
- **Tool overload** – With >128 tools the backend returns a 400 error (#24246), forcing users to manage tool counts.
- **Terminal & UI glitches** – Shell commands stuck at “Waiting input” (#25166), terminal resizing causes flicker (#21924), and external editors corrupt the display (#24935).
- **Nightly release instability** – The v0.54.0 nightly build failed today (#28533), indicating ongoing CI pipeline issues.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-07-25

## Today’s Highlights
A new release (v1.0.75) adds support for **Claude Opus 5**, but the community remains focused on a cluster of regressions: terminal scrolling is broken, plan‑mode now blocks legitimate read‑only `gh` commands, and Ctrl+C no longer cancels agent runs. The most critical open issue involves a **5 MB CAPI body limit** that can stall long sessions even though context tokens are fine, while a zombie‑process leak and a resume‑time OOM are drawing attention.

## Releases
**v1.0.75 (2026-07-24)** – [Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.75)  
- Added support for **Claude Opus 5** model.

## Hot Issues (10 selected)

1. **#2205** – *Usability issue – scroll in terminal (Terminator)*  
   Since the last version, mouse scroll no longer moves through agent output; it instead cycles through previous inputs. 13 comments, 14 👍.  
   [Issue #2205](https://github.com/github/copilot-cli/issues/2205)

2. **#1128** – *Feature Request: Add `awaitingUserInput` hook type*  
   Wanted: a hook that fires when the CLI is waiting for user input (today only `userPromptSubmitted` exists). 5 comments, 28 👍 – the most upvoted request.  
   [Issue #1128](https://github.com/github/copilot-cli/issues/1128)

3. **#4188** – *Regression on plan‑mode (blocking shell commands)*  
   Plan mode now blocks shell commands that enrich plans (e.g., `gh` CLI). Considered a regression because those commands were previously allowed. 4 comments.  
   [Issue #4188](https://github.com/github/copilot-cli/issues/4188)

4. **#4163** – *copilot CLI 1.0.71 does not reap child processes – zombies accumulate*  
   Finished subprocesses remain as zombies under the copilot PID (~2/min). Closed as fixed? (status CLOSED). 3 comments, 3 👍.  
   [Issue #4163](https://github.com/github/copilot-cli/issues/4163)

5. **#4183** – *Auto‑compaction does not prevent CAPI 5 MB failure from accumulated normal tool history*  
   Long sessions can hit the 5 MB CAPI response body limit even when context tokens are fine; auto‑compaction doesn’t help. 3 comments, 10 👍.  
   [Issue #4183](https://github.com/github/copilot-cli/issues/4183)

6. **#3773** – *Broken light theme*  
   Black background on user prompts and low‑contrast selections make the theme unusable in light mode. 3 comments, 3 👍.  
   [Issue #3773](https://github.com/github/copilot-cli/issues/3773)

7. **#4220** – *Plan mode blocks read‑only `gh api` GET/GraphQL queries*  
   The command gate in plan mode falsely flags `gh api` as potentially workspace‑modifying. 1 comment, 1 👍.  
   [Issue #4220](https://github.com/github/copilot-cli/issues/4220)

8. **#4235** – *Ctrl+C no longer cancels/interrupts an active agent run (regression)*  
   Pressing Ctrl+C during an active turn does nothing; the run continues. 1 comment.  
   [Issue #4235](https://github.com/github/copilot-cli/issues/4235)

9. **#4222** – *Regression of #2802: main pane freezes / output swallowed – infinite React/Ink render loop returns on v1.0.72+*  
   The infinite render loop bug has regressed, causing the UI to freeze and output to disappear. 1 comment.  
   [Issue #4222](https://github.com/github/copilot-cli/issues/4222)

10. **#4251** – *Resume of a large session OOMs / grinds one CPU core for ~70 min in 1.0.74 (regression vs 1.0.73)*  
    Upgrading to 1.0.74 caused a ~3–4× memory increase when resuming large sessions. 0 comments but triaged.  
    [Issue #4251](https://github.com/github/copilot-cli/issues/4251)

## Key PR Progress
No pull requests were updated in the last 24 hours. The community will be watching upcoming PRs that address the regressions listed above.

## Feature Request Trends
- **Hooks & Theming** – Strong demand for a `awaitingUserInput` hook (#1128) and better theme customization (light theme broken, #3773).
- **Plugin / MCP Improvements** – Consistent requests for proper plugin installation path resolution (#2200), persistent marketplace registration (#4247), and MCP server project‑directory resolution (#4234).
- **Context & Instruction Scoping** – Users want domain‑category tags alongside `applyTo` globs in `.instructions` (#4231) and more granular control over session worktrees (#3675).
- **Resume / Memory Management** – Automatic compaction needs to handle the 5 MB CAPI limit (#4183), and resume of large sessions must not OOM (#4251).

## Developer Pain Points
- **Regressions** – The most vocal pain point: scrolling broke (#2205), plan‑mode started blocking read‑only commands (#4188, #4220), Ctrl+C lost its interrupt behaviour (#4235), and the Ink render loop returned (#4222).
- **Resource Leaks** – Zombie child processes (#4163) and orphaned worktrees after `archive_session` timeout (#4246) waste disk and CPU.
- **Inconsistent Behaviour Across Clients** – Features like `/rename` work in the terminal but not in VS Code agent sessions (#4244).
- **Password Masking Overhead** – The password‑masking feature consumes extra tokens and confuses agents (#4241).
- **SSH Host Alias Handling** – `/pr` fails on repos using `~/.ssh/config` host aliases (#4248), a common setup for many developers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-25

## Today’s Highlights
No new releases today, but the community is actively discussing login issues spanning multiple versions and platforms. A long-standing corporate proxy SSL bug may finally be resolved by a pending PR, while a popular feature request for remote session continuance (👍16) continues to gain traction. Two open bugs on Windows and VS Code also saw recent activity.

## Releases
No new releases in the last 24 hours.

## Hot Issues (5 items from last 24h)

1. **#2556 – `kimi login` fails**  
   *Author:* moodmosaic | *Updated:* 2026-07-24  
   *Summary:* After purchasing a Vivac subscription, `kimi login` (OAuth) fails on Linux ARM64. No comments yet, but this is critical for new users.  
   [Issue #2556](https://github.com/MoonshotAI/kimi-cli/issues/2556)

2. **#2521 – Windows: Cannot use arrow keys to select in `herdr`**  
   *Author:* RambleRainbow | *Updated:* 2026-07-24  
   *Summary:* On Windows (v0.27.0), interactive selection menus (e.g., `sl`) do not respond to arrow keys. Likely a terminal compatibility issue. Only 1 comment so far.  
   [Issue #2521](https://github.com/MoonshotAI/kimi-cli/issues/2521)

3. **#2326 – VS Code Kimi Freezes (multiple issues)**  
   *Author:* pctablet505 | *Updated:* 2026-07-24  
   *Summary:* Ubuntu user reports frequent VS Code extension freezes, often requiring restart. Using kimi 2.6. No workaround yet. 3 comments.  
   [Issue #2326](https://github.com/MoonshotAI/kimi-cli/issues/2326)

4. **#1282 – [Enhancement] Remote Control – Continue sessions from any device**  
   *Author:* CatKang | *Updated:* 2026-07-24  
   *Summary:* Feature request to let users keep a local session active and resume from phone/tablet/browser. 16 upvotes (highest in this set) and 7 comments, indicating strong interest.  
   [Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

5. **#1070 – [CLOSED] Login failed: Network unreachable to auth.kimi.com:443**  
   *Author:* notedit | *Updated:* 2026-07-24  
   *Summary:* Closed but still relevant – SSL connection failure on v1.9.0. Likely root cause is missing custom CA support (see PR #762).  
   [Issue #1070](https://github.com/MoonshotAI/kimi-cli/issues/1070)

## Key PR Progress (2 items from last 24h)

1. **#762 – fix: respect SSL_CERT_FILE env var for corporate proxy support**  
   *Author:* aaraujodata | *Updated:* 2026-07-24  
   *Summary:* Adds support for `SSL_CERT_FILE` environment variable, fixing #760. Essential for users behind Zscaler, BlueCoat, Fortinet proxies. No comments, but this PR directly addresses multiple login bugs.  
   [PR #762](https://github.com/MoonshotAI/kimi-cli/pull/762)

2. **#1637 – fix: route MCP server log notifications to loguru instead of TUI**  
   *Author:* he-yufeng | *Updated:* 2026-07-24  
   *Summary:* Prevents MCP server logs (e.g., SearXNG) from being dumped into the TUI. Uses `fastmcp.Client` with custom log handler. Improves user experience for those using external tools.  
   [PR #1637](https://github.com/MoonshotAI/kimi-cli/pull/1637)

## Feature Request Trends
- **Remote session continuation** (#1282 – 👍16) is the standout request, echoing a broader need for cross-device workflow flexibility.  
- No other explicit feature requests surfaced in the last 24h, but the PRs suggest interest in enterprise proxy support and cleaner MCP integration.

## Developer Pain Points
- **Login failures** dominate: issues on Windows (arrow keys), Linux ARM64 (OAuth), and general SSL/proxy errors (#2556, #2521, #1070).  
- **VS Code extension stability** (#2326) remains a concern, with freezes reported on Ubuntu.  
- **Windows usability** – the arrow key bug in `herdr` shows inconsistent terminal interaction across platforms.  
- **Corporate network compatibility** – the SSL_CERT_FILE PR (#762) is long overdue (opened in January) and still unmerged, leaving enterprise users stuck.

---
*Generated from GitHub data for the 24h ending 2026-07-24.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-25

## Today's Highlights
OpenCode **v1.18.5** shipped with critical bugfixes for Claude adaptive thinking, OpenAI Responses phase handling, Mistral reasoning stability, and grep symlink preservation. Community attention is focused on a long-standing compaction bug that injects a fake "What did we do so far?" message (🎯 16 comments), and a rising demand for hot-reloading configuration changes. Several major PRs landed, including lock-free step settlement for the V2 runner and a first-class browser pane for desktop agents.

## Releases
**v1.18.5** — Core only  
- Improved Claude adaptive thinking handling across more response shapes.  
- Avoided OpenAI Responses phase handling that could break conversations.  
- Preserved grep symlink paths in search results (thanks @remixz).  
- Preserved Mistral reasoning history across turns and stabilized Mistral integration.

## Hot Issues
*(Top 10 by comment count; all closed unless noted)*

1. **[#13838](https://github.com/anomalyco/opencode/issues/13838)** — Compaction replay injects fake user message *“What did we do so far?”*, forcing unwanted summary generation. 16 comments, 4 👍.  
   *Why it matters:* Breaks session continuity and wastes tokens; community has been asking for a fix since February.

2. **[#10899](https://github.com/anomalyco/opencode/issues/10899)** — All config changes require full app restart; no hot reload. 9 comments, 1 👍.  
   *Why it matters:* Severely impacts developer workflow; top feature request by longevity.

3. **[#29262](https://github.com/anomalyco/opencode/issues/29262)** — `opencode --continue --fork` shows *“Expected a string starting with ‘ses’, got ‘dummy’”* error. 6 comments, 1 👍.  
   *Why it matters:* Forking is a core workflow; the dummy session ID suggests a deeper state bug.

4. **[#21206](https://github.com/anomalyco/opencode/issues/21206)** — macOS intermittent `UNKNOWN_CERTIFICATE_VERIFICATION_ERROR` for OpenAI/Codex under proxy. 6 comments, 1 👍.  
   *Why it matters: Affects corporate/proxy users; certificate validation must be robust.*

5. **[#27210](https://github.com/anomalyco/opencode/issues/27210)** — GPT OSS 120B subagent stops mid-reasoning, returns empty after several tool calls. 5 comments.  
   *Why it matters: Subagent reliability is critical for multi-step tasks; model-specific regression.*

6. **[#29207](https://github.com/anomalyco/opencode/issues/29207)** — Unable to verify active membership benefits on OpenCode Go despite active subscription. 4 comments.  
   *Why it matters: Billing/subscription issues cause user lockout; trust and revenue impact.*

7. **[#19174](https://github.com/anomalyco/opencode/issues/19174)** — Feature request: Basic PWA support for mobile installability. 4 comments, 3 👍.  
   *Why it matters: High demand for mobile/offline usage; web app currently not installable.*

8. **[#28970](https://github.com/anomalyco/opencode/issues/28970)** — GitLab Duo models not routed through GitLab; use original providers instead. 4 comments.  
   *Why it matters: Breaks enterprise model routing; users pay for unused proxy.*

9. **[#29152](https://github.com/anomalyco/opencode/issues/29152)** — Feature request: SSH remote file editing for cloud/remote systems. 4 comments.  
   *Why it matters: Developers need to work on remote codebases; no current remote FS support.*

10. **[#38775](https://github.com/anomalyco/opencode/issues/38775)** — Typing a command returns nothing, no freeze, just empty response. 3 comments, opened today.  
    *Why it matters: Total UI breakdown; likely a backend state issue — needs immediate triage.*

## Key PR Progress
*(10 important PRs, ordered by relevance)*

1. **[#38786](https://github.com/anomalyco/opencode/pull/38786)** — **fix(app): refresh V1 providers after auth**  
   *Disposes scoped V1 instance after API-key or OAuth completion so provider catalog rebuilds from persisted credentials. Covers both compatibility paths.*

2. **[#38793](https://github.com/anomalyco/opencode/pull/38793)** — **fix(desktop): remove titlebar inset in fullscreen**  
   *Exposes Electron fullscreen transitions to renderer; removes macOS traffic-light inset when going fullscreen, restores on windowed.*

3. **[#38689](https://github.com/anomalyco/opencode/pull/38689)** — **fix(ui): support `\[...\]`, `$$...$$`, `$...$` LaTeX math rendering**  
   *Closes #37326 and #38030. Rebuilds inline and display math after it was inadvertently removed in #34850.*

4. **[#38797](https://github.com/anomalyco/opencode/pull/38797)** — **fix(core): support PDF files in V2 read tool**  
   *Closes #37323. The V2 ReadToolFileSystem incorrectly rejected PDF files at the magic-byte check; now allows PDF reading.*

5. **[#36091](https://github.com/anomalyco/opencode/pull/36091)** — **fix(core): coalesce equivalent pending permission requests**  
   *Closes #36055. When multiple tools request the same permission simultaneously, the system now merges them to avoid duplicate prompts.*

6. **[#38776](https://github.com/anomalyco/opencode/pull/38776)** — **feat(core): enable FFF in Node runtimes**  
   *Adds `@ff-labs/fff-node` dependency and replaces the Node FFF stub so both Bun and Node use the same search adapter. Packages FFF in Node SEA builds.*

7. **[#38627](https://github.com/anomalyco/opencode/pull/38627)** — **feat(desktop): add agent browser pane**  
   *Introduces a native browser pane beside sessions, gated behind an advanced setting. Bridges the local server to Electron over the utility-process channel.*

8. **[#38790](https://github.com/anomalyco/opencode/pull/38790)** — **feat(app): add workspace flows to new layout**  
   *Adds Local/New/Existing workspace selection for V2 sessions, with persisted drafts, lifecycle rows, and a 280px working-changes details panel.*

9. **[#38743](https://github.com/anomalyco/opencode/pull/38743)** — **refactor(core): settle steps lock-free by joining tool fibers first**  
   *Removes all 12 semaphore sites from the V2 runner. Settlement becomes ~40 lock-free lines by joining tool fibers before writing results. Major performance and correctness win.*

10. **[#38778](https://github.com/anomalyco/opencode/pull/38778)** — **fix(opencode): keep DeepSeek assistant content non-empty**  
    *Closes #38654. DeepSeek returns `reasoning_content` with empty `content`, causing assistant turns to appear blank. This ensures at least one non-reasoning part is emitted.*

## Feature Request Trends
The most requested directions across recent issues:

- **Hot-reload for configurations** – #10899 (1👍/9 comments) and multiple duplicates. Users expect instant config application without restart.
- **Improved subagent reliability** – #27210, #29209 highlight subagents losing context or returning empty results after interruption.
- **Better remote file support** – SSH remote editing (#29152), multiple file encodings (#27832), and manual webui reload (#29266) all point to remote/multi-stack workflows.
- **Model routing and compatibility** – GitLab Duo routing (#28970), Cloudflare Worker AI API failure (#23773), Ling 3.0 stoppage (#38782) indicate integration friction with third-party providers.
- **PWA & mobile support** – #19174 received 3👍 and 4 comments; users want installable mobile experience.
- **LSP-based formatting** – #29252 requests auto-format via LSP instead of shell commands, and RenameSymbol support.

## Developer Pain Points
Recurring frustrations emerging from this week’s issues:

- **Subagent unreliability** – Abrupt stops, empty results, lost completed work (e.g., #27210, #29209). A top complaint affecting multi-step tasks.
- **Certificate/Proxy errors** – #21206 on macOS persists; network proxy setups remain fragile.
- **Session compaction artifact** – #13838’s fake message injection has been open since February; users see wasted tokens and broken summaries.
- **Billing/subscription confusion** – #29207, #28094 show double charges, missing subscription options, and inability to verify membership.
- **TUI/UI glitches** – #38775 (commands return nothing), #35887 (cannot submit prompt in Linux), #29164 (type error on `path`), and #29301 (version mismatch) cumulatively degrade the user experience.
- **Model-specific regressions** – DeepSeek empty content (#38654), Mistral reasoning loss, and Ling model stalling after each edit (#38782) highlight testing gaps for specific provider responses.
- **Permission rule limitations** – #14110 shows environment-variable-prefixed commands bypass permission rules; needs tree-sitter update.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-25

**Data sources:** [pi-mono](https://github.com/badlogic/pi-mono) (issues & PRs at [earendil-works/pi](https://github.com/earendil-works/pi))

---

## 1. Today’s Highlights

Release v0.82.0 lands with **constrained tool sampling**, allowing tools to opt into strict JSON Schema or OpenAI Lark/regex grammars. The community is buzzing about persistent compaction failures—especially with Copilot Enterprise—and a cluster of model‑switching bugs that can corrupt or break sessions. Meanwhile, Anthropic’s **Claude Opus 5** hit the catalog and is being rapidly integrated via several PRs.

---

## 2. Releases

### v0.82.0 – Constrained Tool Sampling
- Added `constrained` tool sampling: tools can prefer or require strict JSON Schema, OpenAI Lark, or regex grammars.
- Model capability metadata prevents unsupported requests from being sent.
- [Release notes](https://github.com/earendil-works/pi/releases/tag/v0.82.0)

---

## 3. Hot Issues (10 noteworthy)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|-------------------|
| [#6768](https://github.com/earendil-works/pi/issues/6768) | Compaction fails with Copilot Enterprise – `421 Misdirected Request` | Blocks heavy users on Copilot Enterprise; high 👍 (11). | 12 comments, open. |
| [#6686](https://github.com/earendil-works/pi/issues/6686) | Pi auto‑logs out of GitHub (still active) | Recurring authentication breakage; closed but unresolved. | 12 comments, closed. |
| [#6922](https://github.com/earendil-works/pi/issues/6922) | Default model cannot be a llama.cpp model – “No models available” | Makes local‑first workflows impossible. | 6 comments, in‑progress, 10 👍. |
| [#6948](https://github.com/earendil-works/pi/issues/6948) | `defaultProvider`/`defaultModel` not applied at startup (race condition) | Another local‑model startup failure; in‑progress. | 4 comments, open. |
| [#7047](https://github.com/earendil-works/pi/issues/7047) | Gemini 3.x tool‑call IDs stripped – multi‑turn tool use broken | Breaks agentic workflows on Gemini. | 4 comments, open. |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | Pi stops responding after compaction (long sessions) | Critical for long‑running coordinator sessions. | 3 comments, in‑progress, 1 👍. |
| [#6951](https://github.com/earendil-works/pi/issues/6951) | Qwen reasoning effort levels misaligned (low/medium/xhigh) | Users of Qwen 3.8 get incorrect thinking‑effort tiers. | 7 comments, open. |
| [#6970](https://github.com/earendil-works/pi/issues/6970) | GitHub Copilot Plugin auth invalidated on multi‑device use | Token invalidation due to incorrect plugin ID; in‑progress. | 3 comments, open. |
| [#7048](https://github.com/earendil-works/pi/issues/7048) | Compaction summary truncated mid‑word when token cap hit | Silent data loss; `stopReason` not checked. | 3 comments, open. |
| [#6998](https://github.com/earendil-works/pi/issues/6998) | DeepSeek via Aliyun should use `thinkingFormat: "qwen"` | Incorrect thinking format for Aliyun‑hosted DeepSeek. | 3 comments, open. |

---

## 4. Key PR Progress (10 important)

| PR | Description | Status |
|----|-------------|--------|
| [#7091](https://github.com/earendil-works/pi/pull/7091) | `fix(coding-agent)`: Reject overlapping user bash commands – prevents runaway RPC calls. | Open |
| [#7085](https://github.com/earendil-works/pi/pull/7085) | `feat(coding-agent)`: Add Vitest eval harness – enables reproducible model evaluations. | Open |
| [#7032](https://github.com/earendil-works/pi/pull/7032) | `fix(coding-agent)`: Expose unavailable scoped models in `/models` – better UX for misconfigured patterns. | Open |
| [#7081](https://github.com/earendil-works/pi/pull/7081) | `feat(ai)`: Support Claude Opus 5 on Bedrock – adds adaptive thinking and better error messages. | Open |
| [#7082](https://github.com/earendil-works/pi/pull/7082) | `perf(tui)`: O(viewport) transcript rendering – keystroke lag fix for large transcripts. | Closed (merged) |
| [#7072](https://github.com/earendil-works/pi/pull/7072) | `fix(coding-agent)`: Cache llama.cpp model catalog – addresses race condition #6948. | Open |
| [#7031](https://github.com/earendil-works/pi/pull/7031) | `fix(coding-agent)`: Keep model registry tests offline – prevents flaky CI from timeouts. | Open |
| [#7061](https://github.com/earendil-works/pi/pull/7061) | `fix(openai-completions)`: Handle array content and missing `finish_reason` – fixes Databricks/Qwen streaming. | Closed (merged) |
| [#7055](https://github.com/earendil-works/pi/pull/7055) | `fix(ai,agent,coding-agent)`: Prevent retry on tool validation errors – stops infinite retries. | Closed (merged) |
| [#7050](https://github.com/earendil-works/pi/pull/7050) | `Normalize OpenAI tool schema required arrays – DeepSeek compatibility fix. | Closed (merged) |

---

## 5. Feature Request Trends

- **Provider expansion**: Multiple requests for new first‑class providers (Eden AI [#6403](https://github.com/earendil-works/pi/issues/6403), Amazon Bedrock Mantle [#6216](https://github.com/earendil-works/pi/pull/6216), WebSocket transport for OpenAI [#3442](https://github.com/earendil-works/pi/issues/3442)).
- **RPC and programmatic control**: Request to expose `refreshModels` via RPC ([#7087](https://github.com/earendil-works/pi/issues/7087)).
- **UI/UX improvements**: Standard keyboard text selection in TUI editor ([#7038](https://github.com/earendil-works/pi/issues/7038)), collapsed tool output mode ([#5137](https://github.com/earendil-works/pi/issues/5137)).
- **Prompt caching improvements**: Provider‑neutral prompt cache contracts ([#7046](https://github.com/earendil-works/pi/pull/7046)) and customizable cache keys ([#6654](https://github.com/earendil-works/pi/pull/6654)).
- **Model switch safeguards**: Validate context size and convert thinking blocks on mid‑session model switch ([#7065](https://github.com/earendil-works/pi/issues/7065)).

---

## 6. Developer Pain Points

- **Compaction reliability**: Multiple reports of failures (Copilot Enterprise, unresponsive sessions, truncated summaries) – the most vocal pain point this week.
- **Model switching breaks sessions**: Switching between high‑context and low‑context models (e.g., Qwen↔GPT) silently fails, triggers HTML errors, or corrupts tool‑call IDs.
- **Local/home‑brewed models**: `llama.cpp` models are plagued by race conditions on startup and missing default model selection, making local‑first development frustrating.
- **Authentication instability**: GitHub auto‑logout, Copilot token invalidation, and hardcoded Anthropic OAuth detection patterns cause recurring credential friction.
- **Proxy configuration complexity**: Corporate proxies (Windows, WSL) break HTTP connections, and Undici’s proxy tunnel handling is incomplete until the next upgrade ([#7049](https://github.com/earendil-works/pi/issues/7049)).
- **Extension lifecycle quirks**: Custom keybindings not applied on initial start, inline UI promises never resolve after superseded prompts, and resource discovery handlers overwrite skill scopes.

---

*Generated from 50 issues and 23 PRs updated in the last 24h.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-25

## Today's Highlights
**v0.21.0** shipped as a stable release without breaking changes, including a new workspace selector in the web-shell composer and a flurry of DSW SWE-bench Verified POC runs (quarantined). Meanwhile, the community has been busy: a critical fix for terminal math rendering is in review, and a draft PR enables model grade selection for subagents — a long-requested feature. The daemon’s cold-start performance also saw a major lazy-loading optimization land in `main`.

---

## Releases

### [v0.21.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0) (stable)
- **No breaking changes.**
- **Feature:** `feat(web-shell): add workspace selector button with add/switch dropdown in composer toolbar` ([#7390](https://github.com/QwenLM/qwen-code/issues/7390))
- Also includes a series of DSW SWE-bench Full POC prereleases (not official) — results are **quarantined** pending review (332/500 resolved on the latest async run).

### [v0.21.0-nightly.20260725.1183a4c82](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260725.1183a4c82)
- `fix(cli): measure insight days and hours in local time everywhere` (addresses [#6835](https://github.com/QwenLM/qwen-code/issues/6835))
- `refactor(autofix): ext` (internal refactoring)

---

## Hot Issues (10 notable items)

1. **[#5800](https://github.com/QwenLM/qwen-code/issues/5800) — Terminal line overwritten on tall replies (P2, bug, UI)**  
   In Static mode, when an assistant reply is taller than the terminal, the last line is hidden on completion. Community has 8 comments, still needs triage. Upstream Ink #973 tracked.

2. **[#7485](https://github.com/QwenLM/qwen-code/issues/7485) — Large blank area after `qwen resume` (P2, bug, UI)**  
   Resuming a session leaves a gap between the last message and the input prompt. Closed quickly with 6 comments.

3. **[#7684](https://github.com/QwenLM/qwen-code/issues/7684) — IME candidate window misplaced with multiline statusline (P2, bug, UI, macOS)**  
   Command-mode statusline pushes the input method popup away from the cursor. Chinese community impacted; 5 comments.

4. **[#7264](https://github.com/QwenLM/qwen-code/issues/7264) — Cold-start follow-ups: remaining lazy-loading candidates (P2, performance)**  
   Eager static import closure of 17.24 MiB / 2420 modules on every cold start. Follow-up to [#4748](https://github.com/QwenLM/qwen-code/issues/4748). 5 comments; PR [#7686](https://github.com/QwenLM/qwen-code/pull/7686) now addresses it.

5. **[#7631](https://github.com/QwenLM/qwen-code/issues/7631) — xterm.js parsing errors in AcpBridge (bug, core)**  
   Frequent parsing errors reported via WeChat channel. Needs information from reporter; 5 comments.

6. **[#7685](https://github.com/QwenLM/qwen-code/issues/7685) — Subagent model grade selection at spawn time (feature request, P3)**  
   Wanted: a `model` parameter on the `agent` tool to let AI pick small/medium/high/super. PR [#7702](https://github.com/QwenLM/qwen-code/pull/7702) is a draft. 4 comments, strong community interest.

7. **[#7699](https://github.com/QwenLM/qwen-code/issues/7699) — Inline math recognition inconsistent across render/copy/tables/streaming (P2, bug)**  
   Single-character `$x$` missed; escaped dollars and backtick code spans not aligned. Developer CubeLander filed both issue and PR [#7701](https://github.com/QwenLM/qwen-code/pull/7701). 3 comments.

8. **[#7626](https://github.com/QwenLM/qwen-code/issues/7626) — Background shell relaunched when output file empty (P2, bug, shell)**  
   Long-running buffered background jobs cause model to re‑execute because the output file appears empty. PR [#7627](https://github.com/QwenLM/qwen-code/pull/7627) adds liveness sidecar. 3 comments.

9. **[#7679](https://github.com/QwenLM/qwen-code/issues/7679) — QWEN.md multi-agent ban overridden by default Explore instructions (P2, bug, core)**  
   User’s explicit rule “do not use subagent unless asked” is ignored because system prompts override it. 3 comments; highlights deeper conflict between user rules and default system prompts.

10. **[#7659](https://github.com/QwenLM/qwen-code/issues/7659) — `tool_choice: "required"` rejected in thinking mode (P2, bug, core)**  
    DashScope returns HTTP 400 when thinking mode is enabled. Requires manual `thinkingMandatory` config — no runtime learning. 3 comments.

---

## Key PR Progress (10 important changes)

1. **[#7704](https://github.com/QwenLM/qwen-code/pull/7704) — `fix(web-shell): add :focus-visible outline to GitHub PR list rows`**  
   Small accessibility fix: keyboard users now see which PR is focused in the Git dialog.

2. **[#7691](https://github.com/QwenLM/qwen-code/pull/7691) — `feat(review): enforce the submit-only write contract with a cleanup tripwire`**  
   Closes a hole where `/review` could write to PRs without going through `qwen review submit`. Adds deterministic tripwire for bypass detection.

3. **[#7703](https://github.com/QwenLM/qwen-code/pull/7703) — `fix(triage): resolve stage comment ids by marker at patch time, harden model injection`**  
   Hardens triage pipeline comment updates; uses bot-author‑filtered `startswith` matching to avoid fragile ID assumptions.

4. **[#7686](https://github.com/QwenLM/qwen-code/pull/7686) — `perf(core): Lazy-load first-use dependencies`**  
   Major cold-start improvement: moves heavy modules (e.g., MCP, terminal image renderer) to lazy import. Direct follow‑up to [#7264](https://github.com/QwenLM/qwen-code/issues/7264).

5. **[#7680](https://github.com/QwenLM/qwen-code/pull/7680) — `perf(web-shell): paint the composer git chip before git status completes`**  
   Uses cached, throttled git status so the branch chip appears instantly on new sessions. Daemon-side optimization.

6. **[#7683](https://github.com/QwenLM/qwen-code/pull/7683) — `feat(web-shell): add read-only GitHub pull requests panel`**  
   New “Pull requests” tab in Git dialog with title, branch, author, review badge, CI icon, and age. `/prs` command opens it directly.

7. **[#7632](https://github.com/QwenLM/qwen-code/pull/7632) — `feat(channels): GitHub polling adapter with notification-as-wakeup architecture`**  
   Redesigned GitHub channel adapter that polls notifications and responds to @mentions. Signal vs. content separation architecture.

8. **[#7510](https://github.com/QwenLM/qwen-code/pull/7510) — `fix(mcp): harden OAuth callback handling`**  
   Binds local OAuth listener to loopback, validates state, prevents invalid callbacks from cancelling legitimate logins. Adds reverse-proxy docs.

9. **[#7702](https://github.com/QwenLM/qwen-code/pull/7702) — `feat(core): add model grade selection for subagent spawn (#7685)`**  
   Draft implementation of `model` parameter on `agent` tool. Tracks setting `agents.modelGrades` and `allowedGrades`. Not ready for review.

10. **[#7692](https://github.com/QwenLM/qwen-code/pull/7692) — `feat(review): detect head drift at presubmit and cap the verdict`**  
    `presubmit` now warns when the PR head advanced during review, preventing stale verdicts. Stacked on #7691.

---

## Feature Request Trends

- **Subagent Model Grade Selection** ([#7685](https://github.com/QwenLM/qwen-code/issues/7685)): let the AI choose small/medium/high/super models for spawned agents. Draft PR [#7702](https://github.com/QwenLM/qwen-code/pull/7702).
- **Service Agent Engine** ([#7696](https://github.com/QwenLM/qwen-code/issues/7696)): a generic runtime for background auto-control agents, separate from chat agents.
- **Image Generation Model Support** ([#7606](https://github.com/QwenLM/qwen-code/issues/7606)): dedicated model configuration and built-in image generation tool.
- **Fork Profiles** ([#7625](https://github.com/QwenLM/qwen-code/issues/7625)): named tool-restriction presets for cache-sharing forks, plus self-reflection patterns.
- **Explicit Math Authoring Contract** ([#7700](https://github.com/QwenLM/qwen-code/issues/7700)): define a stable, source‑preserving syntax for inline/block math to avoid rendering and copy inconsistencies.
- **Stream Rate‑Limit Retry Configuration** ([#7658](https://github.com/QwenLM/qwen-code/issues/7658)): make 60/120/240s retry delays configurable. PR [#7666](https://github.com/QwenLM/qwen-code/pull/7666).
- **Generation Timing Metrics in `/stats`** ([#4252](https://github.com/QwenLM/qwen-code/issues/4252)): TPS and TTFT exposed. PR [#7677](https://github.com/QwenLM/qwen-code/pull/7677) reuses existing streaming TTFT measurement.

---

## Developer Pain Points

1. **Terminal rendering glitches remain the top frustration:**  
   - Tall replies overwrite last line ([#5800](https://github.com/QwenLM/qwen-code/issues/5800))  
   - Large blank area after resume ([#7485](https://github.com/QwenLM/qwen-code/issues/7485))  
   - IME cursor misplaced with multiline statusline ([#7684](https://github.com/QwenLM/qwen-code/issues/7684))  
   - WSL rendering duplicates characters during streaming ([#7634](https://github.com/QwenLM/qwen-code/issues/7634))

2. **Background shell handling is fragile:**  
   - Long-running jobs with buffered output cause model to relaunch ([#7626](https://github.com/QwenLM/qwen-code/issues/7626))  
   - Liveness sidecar PR [#7627](https://github.com/QwenLM/qwen-code/pull/7627) aims to fix, but the community asks for more robust design.

3. **Inconsistent math rendering across contexts:**  
   Inline math recognition differs between render, copy, tables, and streaming ([#7699](https://github.com/QwenLM/qwen-code/issues/7699)). PR [#7701](https://github.com/QwenLM/qwen-code/pull/7701) proposes a unified contract.

4. **System prompt conflicts with user rules:**  
   QWEN.md bans are overridden by default Explore prompts ([#7679](https://github.com/QwenLM/qwen-code/issues/7679)). Users want a deterministic precedence for custom rules.

5. **MCP integration issues:**  
   - OAuth callback failures on remote hosts ([#7510](https://github.com/QwenLM/qwen-code/pull/7510))  
   - Unity MCP cannot connect in VS Code extension while Claude Code can ([#7697](https://github.com/QwenLM/qwen-code/issues/7697)).

6. **API compatibility gaps:**  
   `tool_choice: "required"` rejected in thinking mode ([#7659](https://github.com/QwenLM/qwen-code/issues/7659)). Requires manual config with no runtime learning.

7. **Cold-start performance:**  
   Eager loading of 2420 modules on every start ([#7264](https://github.com/QwenLM/qwen-code/issues/7264)) — addressed by PR [#7686](https://github.com/QwenLM/qwen-code/pull/7686) but still a pain for heavy setups.

---

*Digest auto-generated from GitHub data. For questions, reach out to the Qwen Code team on [GitHub Discussions](https://github.com/QwenLM/qwen-code/discussions).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-25

## Today's Highlights

The v0.9.2 stabilization sprint is in full swing with a major audit-bug cluster landed across 11 fixes covering execution policy, MCP, state, and workflow subsystems. The project has officially rebranded its public product to **CodeWhale** (Shannon Labs), deprecating the legacy `deepseek-tui` npm package. Meanwhile, the backlog is unusually healthy — 329 of 342 open issues were touched this month — prompting a new CI policy requiring every PR to close an issue or justify why it doesn't.

## Releases

**v0.9.1** — Codewhale is now the public product. The `codewhale` command, npm package, and release assets are lowercase technical identifiers. The legacy `deepseek-tui` npm package is deprecated with no further releases. Users migrating from v0.8.x legacy `deepseek` / `d` should plan to switch.

## Hot Issues

1. **[#2870 — EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)** — 17 comments. Tracks the multi-phase refactor of command boundaries (reference PR #2851). High community engagement; 0 upvotes suggests this is more internal coordination than user-facing demand. *(opened 2026-06-07)*

2. **[#4479 — BUG: TUI rendering glitch — missing/extra spaces, recovers on mouse selection](https://github.com/Hmbown/CodeWhale/issues/4479)** — 9 comments. Intermittent text corruption affecting Windows Terminal users. The mouse-selection recovery hint suggests a terminal-diffing or buffer-manipulation issue. *(closed, user-reported by SparkofSpike)*

3. **[#689 — `deepseek doctor` passes but `deepseek run` fails](https://github.com/Hmbown/CodeWhale/issues/689)** — 8 comments. Chinese-language report (diagnostics pass, runtime fails silently). Persistent issue since v0.8.10 — likely a configuration or runtime-environment mismatch that the diagnostic doesn't cover.

4. **[#1004 — /dryrun command: preview next chat completion without sending](https://github.com/Hmbown/CodeWhale/issues/1004)** — 4 comments. Long-standing feature request from V4 Pro users to preview the assembled request payload (system prompt, cached files, tool definitions). High value for cost-sensitive users.

5. **[#3480 — EPIC: TUI information architecture and visual UX overhaul](https://github.com/Hmbown/CodeWhale/issues/3480)** — 3 comments. Dogfood feedback reveals the TUI exposes raw state but not actionable context. Sub-agent overlay competing with transcript, statusline, and task sidebar.

6. **[#4803 — BUG: Right-click context menu highlights wrong item (one-row offset)](https://github.com/Hmbown/CodeWhale/issues/4803)** — 1 comment (fresh today). Hovering item N highlights item N+1. Classic off-by-one in hit-testing or event routing.

7. **[#4794 — Model catalog: make vision/modality a first-class routed capability](https://github.com/Hmbown/CodeWhale/issues/4794)** — 1 comment. Modality data is parsed and stored but never used for routing decisions. Improvement would allow automatic provider selection based on input type.

8. **[#4790 — Add Hindi localization with Devanagari terminal-shaping spike](https://github.com/Hmbown/CodeWhale/issues/4790)** — 1 comment. First Devanagari locale — carries rendering risks (terminal shaping). India is cited as the largest developer population without representation.

9. **[#4787 — Make localization matrix describe TUI packs and gate locale drift in CI](https://github.com/Hmbown/CodeWhale/issues/4787)** — 1 comment. LOCALIZATION.md has tables for website and README but not TUI locale packs — the largest translation surface. CI drift gate is the real ask.

10. **[#4791 — Add Ukrainian localization alongside Russian](https://github.com/Hmbown/CodeWhale/issues/4791)** — 1 comment. Shipping Russian without Ukrainian is flagged as a known friction point; cheaper to add both as planned siblings.

## Key PR Progress

1. **[#4804 — fix(v0.9.2): land the audit bug cluster](https://github.com/Hmbown/CodeWhale/pull/4804)** — Lands 11 of 16 audit-derived bugs (#4725–#4740) across execpolicy, MCP, state, workflow. Every fix carries a test; three tests verified against reverted fix. *(opened today)*

2. **[#4802 — ci(release): replace unusable recovery input with standalone workflow](https://github.com/Hmbown/CodeWhale/pull/4802)** — Fixes #4801's flawed approach (`workflow_dispatch` reads schema from the ref being dispatched, not current). *(opened today)*

3. **[#4801 — ci(release): add recovery path for derived channels (docker, homebrew)](https://github.com/Hmbown/CodeWhale/pull/4801)** — v0.9.1 shipped GitHub Release, crates.io, npm, CNB — but GHCR and Homebrew tap are still v0.9.0. *(closed, replaced by #4802)*

4. **[#4799 — fix(web): advance published-release fact to v0.9.1](https://github.com/Hmbown/CodeWhale/pull/4799)** — Install page still said "latest published: 0.9.0". Manual advancement design avoids advertising tags before binaries exist. *(closed)*

5. **[#4798 — ci: require every PR to close an issue or say why it doesn't](https://github.com/Hmbown/CodeWhale/pull/4798)** — Data showed 329 of 342 open issues touched this month. Nothing is rotting — the backlog is *unclosed*, not stale. *(opened today)*

6. **[#4776 — ci(web): auto-deploy codewhale.net on every push to main](https://github.com/Hmbown/CodeWhale/pull/4776)** — Deploy job existed but was gated to `workflow_dispatch` only. Site drifted behind main — TUI locales page was a month stale. *(closed)*

7. **[#4768 — docs(agents): adopt "intent is the artifact" as operating stance](https://github.com/Hmbown/CodeWhale/pull/4768)** — New stance: generating code against current `main` is cheaper than recovering old code. Lead section in AGENTS.md, condensed mirror in CLAUDE.md. *(closed)*

8. **[#4611 — fix(goal): continue durable goals across turns](https://github.com/Hmbown/CodeWhale/pull/4611)** — Carries active goal (objective, budget, usage, continuation count) across live-session turns. Queue typed continuation after completed turn; handle pause, clear, complete, blocked, budget exhaustion. *(closed)*

9. **[#4608 — fix(tui): align permission postures and compact approvals](https://github.com/Hmbown/CodeWhale/pull/4608)** — Preserves Full Access across subagent handoffs; fails closed for non-bypassable holds; allows user questions in Ask/Never/Full Access while making Auto-Review fully autonomous. *(closed)*

10. **[#4792 — ci(triage): stop over-labelling well-specified issues](https://github.com/Hmbown/CodeWhale/pull/4792)** — Auto-labellers classify from full body text, so better-specified issues collect more wrong labels. #4787 and #4790 got tagged `bug, question` because acceptance criteria used the word "fails". *(opened today)*

## Feature Request Trends

- **Architecture refactoring** — The dominant theme is splitting monolithic modules: `RuntimeThreadManager` (7,133 lines), `mcp.rs`, `history.rs`, `main.rs` (14,878 lines), `views/mod.rs` (4,056 lines), `ui/tests.rs` (12,004 lines). This is clearly a tracked initiative across v0.9.2, not ad-hoc requests.

- **Localization expansion** — Multiple issues filed today (#4790 Hindi, #4791 Ukrainian, #4787 matrix CI gate) suggest a systematic push to broaden language support with quality gates.

- **User-configurable constitution** (#4783) — The `constitution.json` system is praised as "best-designed" but needs amend/validate UX. Indicates the project is maturing its agent governance model.

- **Multimodal privacy** (#4796) — Sending audio/images requires transparency about where data goes and billing implications. §8 coverage filled as a deliberate security/privacy gap.

## Developer Pain Points

- **TUI rendering glitches** (#4479) — Intermittent character corruption recovering on mouse selection is an unusual bug pattern that may be terminal-library specific (Windows Terminal) rather than a general issue.

- **Release pipeline friction** (#4801/#4802) — Container image and Homebrew tap lagged behind for v0.9.1, and the recovery fix (#4801) was itself broken due to GitHub Actions `workflow_dispatch` schema resolution semantics.

- **Diagnostic/runtime mismatch** (#689) — `deepseek doctor` passes but `deepseek run` fails silently. Chinese-language reporter on v0.8.10; no resolution path visible. This pattern (passing diagnostics + failing runtime) is particularly frustrating for debugging.

- **Performance regressions** — Streaming thinking cell re-parses full buffer on every revision bump (O(N²), #3903); path-like @mention completion re-walks filesystem on every keystroke (#3899). These are known but not yet fixed.

- **Documentation drift** — Localization matrix (#4787) and install page version (#4799) both stale. The repo admits no CI guard exists for either.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*