# AI CLI Tools Community Digest 2026-07-10

> Generated: 2026-07-10 15:58 UTC | Tools covered: 9

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
**Date:** 2026-07-10 | **Prepared for:** Technical Decision-Makers & Developers

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape continues to mature rapidly, with seven major tools now serving distinct but overlapping developer workflows. The ecosystem is characterized by aggressive release cycles (multiple daily patches across projects), converging on GPT-5.6 model support and variable reasoning-effort levels. Platform parity remains a persistent pain point, with Windows and Linux users frequently reporting second-class experiences compared to macOS. Security concerns—credential leakage, RCE vulnerabilities, and sandbox bypasses—are drawing increasing attention as these tools become critical infrastructure for production workflows. The community is also showing growing demand for standardized permission models across MCP (Model Context Protocol) integrations and more transparent usage tracking.

---

## 2. Activity Comparison (2026-07-10)

| Tool | Hot Issues (Today) | Key PRs (24h) | Release Status | Notable Metric |
|------|-------------------|--------------|----------------|----------------|
| **Claude Code** | 10 noteworthy (58 comments on top issue) | 4 PRs updated | v2.1.206 shipped today | #73365: 99👍, 58 comments |
| **OpenAI Codex** | 10 selected (67👍 on top issue) | 10 PRs updated | rust-v0.144.0 & .1 shipped | #28190: 67👍, 44 comments |
| **Gemini CLI** | 10 selected (8👍 on top issue) | 10 PRs updated | v0.52.0-nightly shipped | 3 P1 security PRs today |
| **GitHub Copilot CLI** | 10 noteworthy (18👍 on top) | 0 PRs updated | v1.0.70 shipped yesterday | #107: 15 comments, months open |
| **Kimi Code CLI** | 2 issues updated | 2 PRs updated | No release (v0.8.3 latest) | Minimal activity signal |
| **OpenCode** | 10 selected (168👍 on top) | 10 PRs updated | v1.17.18 shipped today | #6231: 168👍, most requested feature |
| **Pi (pi-mono)** | 10 selected (22 comments on top) | 10 PRs updated | v0.80.6 shipped | Thinking levels expanding rapidly |
| **Qwen Code** | 10 noteworthy (20 comments on top) | 10 PRs updated | v0.19.8-nightly shipped | #6378: RFC, 20 comments |
| **DeepSeek TUI (CodeWhale)** | 10 noteworthy (60 comments on top) | 10 PRs updated | Preparing v0.8.68 | #4092: 60 comments, milestone tracking |

**Key Observation:** OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI show the highest PR velocity, each with 10+ PRs updated in 24 hours. Claude Code and Copilot CLI show lower PR throughput but higher community engagement per issue.

---

## 3. Shared Feature Directions

The following requirements emerge across multiple tool communities:

### MCP Tool Permission & Reliability
- **Affected tools:** Claude Code (#61196, #61143), Copilot CLI (#3874), Qwen Code (#6639), Kimi Code (#1537)
- **Common need:** MCP tool approvals not respected even when "always allow" is set; auto-approval bypasses; fragile OAuth recovery on 401 errors
- **Implication:** A systemic trust challenge in the MCP ecosystem that undermines automation

### Windows Platform Parity
- **Affected tools:** Claude Code (#47327, #73365, #66601), Codex (#28190, #32032), Copilot CLI (#4069, #4077), Gemini CLI (#28348), OpenCode (#16685), Pi (#6300)
- **Common need:** Windows-macOS feature gaps (advisor, cowork, sandbox), TUI rendering bugs, scroll wheel issues, missing PDF tools
- **Implication:** Universal vendor blind spot; Windows developers are vocal about feeling deprioritized

### Subagent Reliability & Observability
- **Affected tools:** Gemini CLI (#21409, #22323), OpenCode (#33028), Qwen Code (nightly fix for infinite loops), DeepSeek TUI (#4014)
- **Common need:** Subagents hanging, false success reporting after turn limits, poor visibility into subagent state
- **Implication:** Multi-agent architectures are powerful but brittle; observability is the next frontier

### Model Auto-Discovery & Configuration
- **Affected tools:** OpenCode (#6231, 168👍), Pi (#6475), Copilot CLI (#3399)
- **Common need:** Automatically enumerate models from OpenAI-compatible providers; eliminate manual config
- **Implication:** Users want "plug and play" model access without configuration burden

### Multi-File Diff Approval
- **Affected tools:** OpenCode (#36119, #17076), Qwen Code (#6612)
- **Common need:** UI shows only first file diff when approving multi-file edits; rest are applied blind
- **Implication:** Basic UX regression affecting code review workflows

### Enterprise/Proxy Compatibility
- **Affected tools:** Kimi Code (#2458), Copilot CLI (#3399, #4019), Pi (#6476)
- **Common need:** SSL certificate bypass flags, custom HTTP headers for BYOK, proxy support
- **Implication:** Enterprise adoption is blocked by missing network configuration options

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|----------|-----|-----------|--------------|
| **Primary Focus** | Opinionated dev workflow | Multi-agent orchestration | Agent reliability & security | GitHub ecosystem integration | Universal provider hub | SDK/library flexibility | Distributed execution | Architecture innovation |
| **Target User** | Individual developers | Pro/enterprise teams | Research & safety teams | GitHub-native devs | Provider-agnostic power users | Library embedders | Large-scale teams | Architecture-minded devs |
| **Key Strength** | `/cd`, `/doctor`, `/commit-push-pr` | Thread history pagination, workload identity | Security-first PRs, eval test suite | GPT-5.6 support, web_fetch fix | Model auto-discovery (168👍) | Thinking level ladder (7 rungs) | Multi-workspace daemon, SDK interactivity | Fleet/Workflow/Lane model |
| **Key Weakness** | Windows parity lagging | macOS stability, rate-limit waste | Agent hangs, false successes | Alpine segfault (#107, months open) | Provider model misconfiguration | Null content crashes | Model quirk brittleness | Default UI clutter |
| **Technical Approach** | Monolithic TUI + IDE extensions | Rust-based, multi-agent | Python/TypeScript, eval-driven | Node-based, GitHub Copilot infra | Desktop + TUI, Electron | Bun-based, provider-agnostic | Go-based, SDK-first | Rust-based, lane-oriented |

### Key Differentiators

- **Claude Code** is the most opinionated out-of-the-box experience, with workflow automation features (`/cd`, `/commit-push-pr`) that reduce friction but limit flexibility
- **OpenAI Codex** leads in enterprise features (workload identity, thread pagination) but struggles with macOS stability and rate-limit transparency
- **Gemini CLI** has the strongest security posture (multiple P1 security PRs today alone) and the most mature eval/test infrastructure
- **Copilot CLI** integrates most seamlessly with GitHub ecosystem but has the longest-standing unaddressed bug (#107, Alpine segfault)
- **OpenCode** has the most passionate community (168👍 for one feature) and the broadest provider support
- **Pi** excels at SDK/library flexibility with a deep thinking-level ladder
- **Qwen Code** is pushing hardest on distributed execution (multi-workspace daemon) and SDK interactivity
- **DeepSeek TUI** is the most architecturally innovative (Fleet/Workflow/Lane model) but least mature

---

## 5. Community Momentum & Maturity

### High Momentum / Rapid Iteration
- **OpenAI Codex** — 10 PRs/24h, 2 patch releases today, high issue engagement (67👍 on top bug)
- **Gemini CLI** — 10 PRs/24h, nightly release, 3 P1 security fixes, strong enterprise posture
- **OpenCode** — 10 PRs/24h, v1.17.18, 168👍 feature request, consistently high engagement
- **Pi** — 10 PRs/24h, v0.80.6, rapid thinking-level expansion, growing provider matrix
- **Qwen Code** — 10 PRs/24h, nightly release, major architecture discussions (#6378)

### Moderate Momentum / Steady Iteration
- **Claude Code** — v2.1.206 but only 4 PRs/24h; high community engagement but slower fix velocity
- **DeepSeek TUI** — Preparing v0.8.68, strong PR activity (10), but still pre-stable release
- **Copilot CLI** — v1.0.70 but 0 PRs/24h; critical bugs unaddressed (Alpine segfault months open)

### Low Activity / Risk of Stagnation
- **Kimi Code CLI** — Only 2 issues and 2 PRs updated today; no new release since June 29; minimal community engagement

### Maturity Assessment
- **Most mature:** Claude Code (v2.x, broadest feature set, VS Code/Cursor integration)
- **Most security-conscious:** Gemini CLI (TOCTOU fixes, RCE prevention, trust dialog hardening)
- **Fastest growing:** OpenCode (168👍 MR feature, active PR pipeline, broad provider support)
- **Most experimental:** DeepSeek TUI (new architecture model, pre-1.0)
- **Most neglected platform:** Windows (all tools except maybe Kimi show Windows-specific bugs)

---

## 6. Trend Signals

### For Tool Developers

1. **Windows parity is the single biggest unmet need** — Every major tool has Windows-specific bugs with high upvotes. No vendor has solved this. Tools that prioritize Windows compatibility will capture a large underserved market.

2. **MCP permission model needs standardization** — Across Claude Code, Copilot, Kimi, and Qwen, the "always allow" setting is unreliable. A cross-tool standard for MCP tool approval (e.g., OpenAPI-style permissions) would reduce fragmentation.

3. **Subagent observability is the next UX frontier** — Multiple tools report agents that hang, lie about success, or lack visibility into state. Investing in subagent logging, timeout recovery, and state reporting will be a competitive differentiator.

4. **Rate-limit transparency is table stakes** — OpenAI Codex users report credits wasted, abnormal depletion, and opaque UI. Tools that provide clear usage dashboards and predictable billing will win enterprise trust.

5. **Model auto-discovery is the most requested single feature** — OpenCode's 168👍 is the highest single-issue signal across all tools. Users want to configure once and have their tool automatically detect available models.

### For Developers Choosing a Tool

6. **Choose Claude Code for a polished single-developer workflow** — Best out-of-box experience if you're on macOS and value automation over flexibility.

7. **Choose OpenCode for provider independence** — If you want to switch between OpenAI, Anthropic, local models, and Copilot without changing tools.

8. **Choose Gemini CLI if security is your top requirement** — Most security fixes per release, strongest eval/test culture, most transparent about vulnerabilities.

9. **Avoid Copilot CLI on Alpine Linux** — Segmentation fault unresolved for months with no timeline; use Node-based distribution if necessary.

10. **Beware of model-specific quirks across all tools** — GPT-5.6 family causes issues in multiple tools (model not found, reasoning effort missing, context limits wrong). Expect a 2-4 week lag between model release and full tool support.

### Emerging Themes

- **Reasoning effort levels are expanding** — Pi now has 7 rungs (off → ultra); multiple tools adding `max` and `ultra` levels. This is becoming a standard UX pattern.
- **Agent constitution enforcement is fragile** — DeepSeek TUI (#4032) and others report agents finding justifications to bypass user-provided scripts. Trust in autonomous agents is not yet earned.
- **Sandboxing is moving from optional to required** — Multiple security PRs today address TOCTOU races, SSRF bypasses, and credential leakage. The "trust the model" era is ending.
- **Enterprise features are accelerating** — Workload identity (Codex), custom headers (Copilot), SSL bypass (Kimi), and multi-workspace daemons (Qwen) signal enterprise adoption is a key growth vector.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-07-10 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following pull requests attracted the most community discussion. Each represents either a new Skill submission or a critical fix to core tooling.

### 1.1 fix(skill-creator): run_eval.py always reports 0% recall
**PR #1298** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/1298)

A cross-cutting fix for the skill-creator evaluation pipeline, addressing a systemic bug where `run_eval.py` reports `recall=0%` for every description under test (#556). The PR fixes: (1) how the eval artifact is installed as a real skill, (2) Windows stream reading, (3) trigger detection logic, and (4) parallel worker isolation. This is the most critical open PR — the description-optimization loop has been optimizing against noise, making skill iteration effectively useless for many community members.

**Discussion highlights:** Multiple independent reproductions confirmed the bug. The community has been blocked on skill quality iteration for weeks.

---

### 1.2 Add document-typography skill
**PR #514** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/514)

Proposes a typographic quality-control skill addressing orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. The author argues these issues affect every document Claude generates, yet users rarely request them explicitly.

**Discussion highlights:** Strong community interest in document output quality. No major objections raised; the skill fills a clear gap in the document-formatting ecosystem.

---

### 1.3 Add ODT skill — OpenDocument text creation and template filling
**PR #486** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/486)

A comprehensive skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods). Includes triggers for "ODT," "ODS," "ODF," and "OpenDocument." Targets LibreOffice users and those requiring ISO-standard document formats.

**Discussion highlights:** Community is eager for non-Microsoft document format support. The skill's broad trigger surface suggests careful review needed to avoid false positives.

---

### 1.4 Improve frontend-design skill clarity and actionability
**PR #210** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/210)

A revision of the frontend-design skill focused on making every instruction directly executable by Claude within a single conversation. Addresses internal coherence and specificity of guidance.

**Discussion highlights:** Illustrates the broader community challenge of writing skills that are precise enough to steer behavior without being overly verbose. The revisionist approach (improving existing skills rather than creating new ones) is notable.

---

### 1.5 Add skill-quality-analyzer and skill-security-analyzer
**PR #83** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/83)

Two "meta skills" for the marketplace: a quality analyzer evaluating skills across Structure & Documentation, Completeness, Examples, Edge Cases, and Errors; and a security analyzer for identifying unsafe patterns (command injection, secret leakage, path traversal).

**Discussion highlights:** Met with cautious interest — these tools would help the community vet skills before sharing. Some concern about the security analyzer's ability to keep pace with evolving attack patterns.

---

### 1.6 fix(docx): prevent tracked change w:id collision with existing bookmarks
**PR #541** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/541)

Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. Root cause: OOXML's shared `w:id` ID space across bookmarks, tracked changes, comments, and move ranges. The SKILL.md examples used hardcoded low IDs that collide with real document content.

**Discussion highlights:** A practical, well-documented bug fix. Represents the type of edge-case polish the skill ecosystem needs as it matures.

---

### 1.7 fix(skill-creator): warn on unquoted description with YAML special characters
**PR #539** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/539)

Adds pre-parse validation in `quick_validate.py` to detect unquoted `description` fields containing YAML special characters (`:`), preventing silent misparsing where descriptions become truncated or split into multiple keys. A companion to PR #361 (similar detection for `# { } [ ]`).

**Discussion highlights:** A practical quality-of-life fix that prevents subtle, hard-to-debug failures in skill metadata. Minimal controversy.

---

## 2. Community Demand Trends

Analysis of the most-commented Issues reveals four concentrated demand areas:

### 2.1 Security & Trust Boundaries
**Issue #492** (34 comments, 2 👍) — *Open* — [View Issue](https://github.com/anthropics/skills/issues/492)

The most active issue by far. Community members are raising alarm about skills distributed under the `anthropic/` namespace that are community-contributed, not official. This creates a trust boundary vulnerability where users grant elevated permissions believing the skill is Anthropic-verified. **Takeaway:** The community urgently wants a verification/review process before a serious supply-chain incident occurs.

### 2.2 Enterprise Sharing & Organizational Management
**Issue #228** (14 comments, 7 👍) — *Open* — [View Issue](https://github.com/anthropics/skills/issues/228)

Users want org-wide skill sharing without manual file distribution. Current workflow (download .skill file → Slack/Teams → manual upload) is not scalable for teams. **Takeaway:** The community is using skills in production and needs enterprise-grade distribution.

### 2.3 Skill-Creator Tooling Reliability
**Issues #556** (12 comments), **#1061** (3 comments), **#1169** (3 comments) — All open or recently active

The `run_eval.py` / `run_loop.py` pipeline is fundamentally broken for many users: 0% recall across all queries (#556), Windows incompatibility (#1061), and failure on literal slash-command queries (#1169). Multiple PRs (#1298, #1099, #1050, #1323, #1261) attempt fixes, indicating the community is investing heavily in unblocking this.

**Takeaway:** The skill optimization tooling is the community's highest-priority infrastructure problem. Without reliable evaluation, skill quality cannot improve systematically.

### 2.4 New Skill Directions: Agent Governance & Memory
**Issues #412** (agent-governance skill proposal) and **#1329** (compact-memory proposal) show interest in AI agent safety patterns and efficient context use. Both are early-stage but signal the community's maturing concerns beyond basic document generation.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and appear close to landing. They represent the skills most likely to ship in the near term.

### 3.1 self-audit — Mechanical verification + reasoning quality gate
**PR #1367** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/1367)

A universal skill that audits AI output before delivery: mechanical file verification followed by four-dimension reasoning audit in damage-severity priority order. Works across any project and tech stack. Recently updated (2026-07-02) with active author engagement.

### 3.2 color-expert
**PR #1302** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/1302)

A self-contained color expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces (OKLCH, OKLAB, CAM16), and accessibility. Recently submitted with thorough documentation. Fills a clear creative-tooling gap.

### 3.3 testing-patterns
**PR #723** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/723)

Covers the full testing stack: testing philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing, integration tests, and E2E tests. Broad scope may require iteration but addresses a widely expressed need.

### 3.4 CONTRIBUTING.md
**PR #509** — *Status: Open* — [View PR](https://github.com/anthropics/skills/pull/509)

Addresses the repository's 25% community health metrics score. Adds structured contribution guidelines covering skill structure, testing, documentation, and review process. Low-risk, high-impact addition that unblocks community contributions.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable skill-development tooling — fixing the broken evaluation pipeline that makes skill iteration impossible — followed closely by trust and security infrastructure for the skills marketplace itself.**

The data reveals a two-speed community: contributors eager to build new skills (typography, ODT, color expertise, testing patterns) are blocked by foundational tooling bugs in the skill-creator scripts. Meanwhile, the security concern raised in Issue #492 signals that as the ecosystem grows, the absence of official review gates creates systemic risk. Until both the evaluation pipeline and the trust boundary are addressed, the skills ecosystem will struggle to scale beyond early adopters.

---

# Claude Code Community Digest — 2026-07-10

## Today's Highlights
- **v2.1.206** shipped with `/cd` directory suggestions, a new `/doctor` check for trimming oversized `CLAUDE.md` files, and auto‑approval of `git push` in `/commit-push-pr`.
- A high‑visibility bug (#73365) where the Fable 5 advisor is permanently “unavailable” across all sessions continues to draw community attention (58 comments, 99 👍).
- A critical cross‑session credential leakage report (#72274) surfaced, prompting immediate rotation advice for affected users.

## Releases
### [v2.1.206](https://github.com/anthropics/claude-code/releases/tag/v2.1.206) — 2026-07-10
- **`/cd`** now suggests directory paths, matching the existing `add-dir` behavior.
- **`/doctor`** gained a new check that proposes trimming checked‑in `CLAUDE.md` files by cutting content Claude could derive from the codebase.
- **`/commit-push-pr`** now auto‑allows `git push` to the repo’s configured remote, reducing approval friction.

## Hot Issues (10 noteworthy)

1. [#73365 – Advisor always “unavailable” with Fable 5 advisor](https://github.com/anthropics/claude-code/issues/73365)  
   **Bug · platform:windows · area:model**  
   The advisor feature is completely broken for Windows users running Opus 4.8. 58 comments, 99 👍 – the most active issue in the project. Community suspects a model‑routing or model‑compatibility bug.

2. [#47327 – Cowork tab disabled on Windows 11](https://github.com/anthropics/claude-code/issues/47327)  
   **Bug · platform:windows**  
   “yukonSilver unsupported” has blocked Cowork for months (since March 2026). 19 comments, still open.

3. [#65632 – Inline KaTeX math no longer renders](https://github.com/anthropics/claude-code/issues/65632)  
   **Bug · platform:macos · area:desktop**  
   `$...$` math is broken; only `$$...$$` works. A regression with 41 👍, likely caused by a chat rendering change. 15 comments.

4. [#23704 – PDF support requires poppler-utils but is undocumented](https://github.com/anthropics/claude-code/issues/23704)  
   **Bug · documentation · platform:linux**  
   The Read tool claims PDF support but silently fails without `poppler-utils`. No detection or error message. 14 comments, 19 👍.

5. [#72274 – Cross-session credential leakage](https://github.com/anthropics/claude-code/issues/72274)  
   **Bug · area:security**  
   Another user’s production database credentials appeared in a different session. The reporter masked the leaked value and urged rotation. 4 comments – low count but highest severity.

6. [#66601 – Scroll wheel hijacked by prompt history navigation](https://github.com/anthropics/claude-code/issues/66601)  
   **Bug · platform:windows · area:tui**  
   No way to disable the scroll‑wheel‑to‑history binding. Affects large outputs where users scroll to review. 5 comments, 6 👍.

7. [#71483 – Feature request: neutral spinner text](https://github.com/anthropics/claude-code/issues/71483)  
   **Enhancement · area:tui/a11y**  
   Users want an option to replace whimsical verbs (“Noodling…”) with a static “Working…”. Duplicate of #64098. 3 comments, 2 👍 – but strong sentiment across duplicates.

8. [#75534 – Hook block reason not shown in VS Code / Cursor](https://github.com/anthropics/claude-code/issues/75534)  
   **Bug · area:hooks/ide**  
   `UserPromptSubmit` hook with `decision:"block"` silently hangs in the IDE extension; the `reason` is never displayed. 2 comments, 1 👍.

9. [#59913 – CLI hangs indefinitely on stuck streaming](https://github.com/anthropics/claude-code/issues/59913)  
   **Bug · platform:macos · area:core/tui**  
   UI swallows input but redraws on window resize; only external kill recovers. 6 comments – closed as fixed? (still open in data? Actually closed).

10. [#61196 – Remote routine fails with MCP tool approval](https://github.com/anthropics/claude-code/issues/61196)  
    **Bug · area:mcp/routines**  
    Routines that should auto‑approve MCP tools still hit “requires approval” dialogs. 5 comments, closed as duplicate of #61143. Highlights a recurring permission model bug.

## Key PR Progress (4 PRs updated in last 24h)

1. [#76394 – Add Claude Code Launcher – Windows CLI Application](https://github.com/anthropics/claude-code/pull/76394)  
   A complete PowerShell‑based launcher with 14 menu options. Community‑contributed, aims to improve the Windows developer experience.

2. [#76298 – docs: document Remote Control background‑task panel](https://github.com/anthropics/claude-code/pull/76298)  
   Updates remote control docs to describe the new web/mobile task‑status panel and sync behavior introduced in v2.1.205.

3. [#76289 – examples/hooks: compound‑command pre‑flight example](https://github.com/anthropics/claude-code/pull/76289)  
   Extends the bash validator hook example to demonstrate detection of command chaining, pipelines, and dangerous patterns – useful for security‑conscious teams.

4. [#76274 – security‑guidance: resolve review paths against repo root](https://github.com/anthropics/claude-code/pull/76274)  
   Hardens the security‑guidance plugin’s path resolution to prevent ambiguous or absolute paths from other repos.

## Feature Request Trends

- **UI/UX customisation**: Repeated asks for configurable spinner text (#71483, #64098), terminal title templates (#61192), and more theme tokens (#61135). Users want to reduce visual noise and better identify sessions.
- **MCP permission model**: Multiple issues (#61196, #61143, #61175) report that MCP tool approvals are not respected even when marked “always allow”. A systemic reliability concern.
- **Platform parity**: Windows users lack Cowork (#47327), advisor (#73365), and PDF tools (#23704). Linux users also hit the poppler problem. MacOS is treated as first‑class.
- **Session management**: Better resume UX with project navigation (#61137), cross‑device sync (#58477). Users with many concurrent sessions find the current interface difficult.
- **Hooks/IDE integration**: Block reasons hidden (#75534), bash commands not visible in VS Code terminal (#61219). Developers want tighter integration with their existing tools.

## Developer Pain Points

- **Windows experience is lagging**: Three of the top‑voted open bugs are Windows‑specific (advisor, Cowork, scroll wheel). Many feel the platform is not receiving equal attention.
- **MCP tool approval inconsistency**: Even when configured to auto‑approve, approvals are still required – a recurring frustration that erodes trust in the permission system.
- **Critical bugs stay open**: The PDF tool has been broken for 5 months (#23704, opened in Feb), and Cowork for 3.5 months (#47327, opened in April). Community sentiment is growing impatient.
- **Security concerns**: The credential leakage report (#72274) is alarming, even if isolated. Users expect sandboxing to prevent cross‑session data leaks.
- **Missing documentation and diagnostics**: `poppler-utils` dependency goes undetected, spinner text cannot be disabled, and hook block reasons are invisible. Each adds friction to daily workflows.

---

*Generated from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) data updated 2026-07-10.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-10

## Today's Highlights
Two patch releases landed: `rust-v0.144.0` introduces a new `writes` app-approval mode and better credit management, while `v0.144.1` fixes standalone installs on macOS and handles GitHub metadata quirks. The community continues to face stability challenges with rate‑limit resets, macOS compatibility, and the unified ChatGPT/Codex app rename, but progress is visible in thread history pagination, plugin‑agent roles, and workload identity authentication.

## Releases
- **rust-v0.144.0** – New features: usage‑limit reset credits now show type/expiration and let you choose which credit to redeem; added `writes` app‑approval mode (declared read‑only actions allowed, writes prompt for approval); MCP tools can request interactive authentication.
- **rust-v0.144.1** – Bug fixes: standalone installs no longer fail when GitHub returns compact or reordered release metadata; macOS package installs now expose the code‑mode host alongside the `codex` executable; code mode keeps working when the companion host binary is unavailable (fallback).
- **rust-v0.145.0-alpha.1 & alpha.2** – No detailed changelog published.

## Hot Issues (10 selected from top 30)

1. **[#28190](https://github.com/openai/codex/issues/28190) – `rg` is blocked by macOS**  
   *67 👍, 44 comments* – A long‑running issue (25 days) where Codex’s bundled `rg` binary triggers macOS security blocks. High community interest; many users report workarounds but no fix yet.

2. **[#3355](https://github.com/openai/codex/issues/3355) – Error sending request after MacBook sleeps**  
   *21 👍, 41 comments* – Codex CLI fails to reconnect after notebook sleep. Reproduced across many months; indicates a persistent connectivity bug in the daemon/library layer.

3. **[#31814](https://github.com/openai/codex/issues/31814) – GPT‑5.6 Sol forces all subagents to also be Sol instances**  
   *57 👍, 24 comments* – Model metadata overrides user‑toggleable multi‑agent settings, forcing expensive Sol subagents when cheaper models would suffice. Sparks debate about model control vs. automation.

4. **[#31606](https://github.com/openai/codex/issues/31606) – Reset failed, credit wasted**  
   *21 👍, 20 comments* – Using a reset credit does not apply but consumes the count. Frustration is high because Pro users have limited resets.

5. **[#10561](https://github.com/openai/codex/issues/10561) – Feature Request: Plan Mode improvements**  
   *36 👍, 18 comments* – Popular request for a “Copy Plan” button and a “Clear Context and Start Coding” workflow to better separate planning from execution.

6. **[#32032](https://github.com/openai/codex/issues/32032) – Computer Use crashes on macOS 15.7.7 (Swift Concurrency symbol)**  
   *6 👍, 13 comments* – A `dyld` crash blocking Computer Use on the latest macOS. Related to earlier issue #22822; users on older macOS (14.x) also affected by #20183.

7. **[#30212](https://github.com/openai/codex/issues/30212) – 5‑hour allowance consumed in ~1 hour**  
   *9 👍, 12 comments* – Abnormal usage depletion affecting Pro+ subscribers. Uncovers possible metering bugs or runaway loops.

8. **[#31664](https://github.com/openai/codex/issues/31664) – Reasoning summaries render literal `<!-- -->` placeholders**  
   *20 👍, 9 comments* – A small but visible UI glitch in the CLI TUI where reasoning summaries show HTML comment markers instead of being stripped.

9. **[#31866](https://github.com/openai/codex/issues/31866) – macOS self‑update removed Codex.app, official download installs ChatGPT**  
   *4 👍, 5 comments* – User reports that the automatic update uninstalled Codex and then the official download installed the ChatGPT desktop app instead. Highlights branding confusion after the merge.

10. **[#32189](https://github.com/openai/codex/issues/32189) – CLI rejects gpt‑5.6 with ChatGPT auth despite availability in apps**  
    *0 👍, 2 comments* – New model `gpt-5.6` cannot be used in CLI even though it works in iOS/Windows apps. Indicates a backend authorization discrepancy.

## Key PR Progress (10 selected from top 20)

1. **[#32006](https://github.com/openai/codex/pull/32006) – core: use unique IDs for review history messages** – Fixes `/review` reusing shared identity for synthesized messages, improving threading and deduplication.

2. **[#31313](https://github.com/openai/codex/pull/31313) – feat(thread‑store): load bounded model context for resume** – Adds an API to reconstruct the latest model‑visible context without loading an entire thread history. Enabler for paginated threads.

3. **[#31859](https://github.com/openai/codex/pull/31859) – rollout: add ordinals to rollout JSONL lines** – Adds ordinal numbering to paginated thread rollouts, critical for future fork resolution.

4. **[#31891](https://github.com/openai/codex/pull/31891) – rollout: extract reverse JSONL scanner** – Refactors session index scanning into a reusable typed scanner. Improves maintainability and paves the way for pagination.

5. **[#31889](https://github.com/openai/codex/pull/31889) – Gate plugin runtime contributions on host capabilities** – Prevents plugins from relying on unavailable client features. Adds a normalized compatibility contract for plugins.

6. **[#32200](https://github.com/openai/codex/pull/32200) – Add a skill invocation extension contributor** – New extension point for skill invocation callbacks, enabling richer plugin integrations.

7. **[#28845](https://github.com/openai/codex/pull/28845) – Support plugin agent roles** – Bundled plugins can now define custom agent roles via TOML manifests, allowing namespaced `agent_type` values.

8. **[#31483](https://github.com/openai/codex/pull/31483) – Preserve imported session fidelity** – Fixes timestamps and deduplication during external agent session imports, preventing history reordering and phantom sessions.

9. **[#31951](https://github.com/openai/codex/pull/31951) – Assume models support reasoning summaries** – Removes a no‑op capability flag, making unknown/custom models behave consistently. Reduces complexity in config and caching.

10. **[#32010](https://github.com/openai/codex/pull/32010) – Integrate workload identity with Codex authentication** – Adds layered `workload_identity` support for enterprise deployments, with token exchange, 401 refresh, and assertion‑file rotation.

## Feature Request Trends
- **Plan-to-code workflow** – Users want a clear “Copy Plan” button and a way to reset context between planning and coding (`#10561`).  
- **Terminal customization** – Developers request nerd‑font support in the built‑in terminal (`#10620`).  
- **Usage transparency** – Persistent display of 5‑hour and weekly limits in the desktop app (`#32195`).  
- **Model selection control** – Ability to specify subagent models independently of the primary model (`#31814`).  
- **Cross‑platform parity** – Windows sandbox stability and macOS Computer Use compatibility continue to surface as requested improvements.

## Developer Pain Points
- **Rate‑limit management** – Reset credits are frequently wasted due to failed application (`#31606`, `#31601`); abnormal depletion is reported (`#30212`).  
- **macOS stability** – Bundled tools (`rg`) blocked by security policies (`#28190`), Computer Use crashes on newer (and older) macOS (`#32032`, `#20183`), and the ChatGPT/Codex app rename breaks updates (`#31866`, `#32202`).  
- **Windows sandbox failures** – ACL issues after power outages (`#28248`) and UAC setup markers (`#30445`) prevent sandbox from starting.  
- **Unified app confusion** – Sort order broken after rename (`#32166`), MCP path resolution fails when app is installed as `ChatGPT.app` (`#32202`).  
- **Subagent model forcing** – GPT‑5.6 Sol overrides user preferences and forces expensive subagents (`#31814`).  
- **Authentication gaps** – New models like `gpt-5.6` not accessible in CLI despite being available in apps (`#32189`).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here's the **Gemini CLI Community Digest** for **2026-07-10**, based on the latest GitHub activity.

---

## Today's Highlights

A new nightly release (v0.52.0) ships a critical fix for **thought leakage** in scrubbed history turns. On the security front, multiple PRs address **RCE vulnerabilities**, TOCTOU race conditions, and cross‑server MCP confusion. The community continues to flag agent‑stability issues—subagent false success reports and indefinite hangs remain high‑priority pain points.

---

## Releases

**v0.52.0-nightly.20260710.ga4c91ce19** – [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260710.ga4c91ce19)  
- **fix(core):** Strip thoughts from scrubbed history turns and resolve thought leakage (by @amelidev, PR [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)).  
- **refactor:** Exclude transient CI configuration files from workspace context (by @DavidAPierce, PR [#?](https://github.com/google-gemini/gemini-cli/pull/?)).  

---

## Hot Issues (10 selected out of 50 updated in 24h)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** – `Subagent recovery after MAX_TURNS reported as GOAL success, hiding interruption`  
   P1 bug. The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even though it hit the maximum turn limit. Highly commented (10), 2 👍. Misleading reports erode trust in agent workflows.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** – `Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing`  
   P2 enhancement with `effort/large`. Proposes sandboxing shell execution to leverage Gemini 3's native bash capabilities without compromising security. 8 comments, 1 👍.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** – `Robust component level evaluations`  
   P1 epic tracking the growth of behavioral eval tests (now 76). Essential for preventing regressions in agent behavior. 7 comments.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** – `Assess the impact of AST-aware file reads, search, and mapping`  
   P2 feature epic exploring AST‑based tools for more precise code navigation and reduced token consumption. 7 comments, 1 👍.

5. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** – `Generalist agent hangs`  
   P1 bug. The generalist agent hangs forever on simple tasks (e.g., folder creation). Users work around by disabling subagent delegation. 7 comments, 8 👍. High community impact.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** – `Gemini does not use skills and sub-agents enough`  
   P2 bug. Custom skills and sub‑agents are rarely invoked autonomously, even when relevant. 6 comments.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** – `Stop Auto Memory from retrying low-signal sessions indefinitely`  
   P2 bug. The extraction agent can keep re‑attempting low‑signal transcripts, wasting tokens. 5 comments.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** – `Shell command execution gets stuck with "Waiting input" after command completes`  
   P1 bug (`effort/medium`). Simple CLI commands hang after finishing, showing "Awaiting user input". 4 comments, 3 👍.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** – `browser subagent fails in wayland`  
   P1 agent/browser bug. The browser agent fails on Wayland displays. 4 comments, 1 👍.

10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** – `~/.gemini/agents/filename.md is not recognized as an agent if filename.md is a symlink`  
    P2 usability bug. Symlinks in the agents directory are silently ignored. 4 comments.

---

## Key PR Progress (10 selected out of 25 updated in 24h)

1. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) – `fix(a2a-server): enforce workspace trust during environment loading to prevent RCE`**  
   Critical security fix for zero‑click RCE and environment poisoning in untrusted workspaces. Size M/L.

2. **[#28316](https://github.com/google-gemini/gemini-cli/pull/28316) – `fix(a2a-server): ensure task cancellation aborts execution loop`**  
   Fixes “ghost executions” after task cancellation; also addresses race conditions and memory leaks. Size M/L.

3. **[#28330](https://github.com/google-gemini/gemini-cli/pull/28330) – `fix(ide-companion): set token file mode atomically to close TOCTOU window`**  
   P2 security. The auth‑token port file was briefly world‑readable between `writeFile` and `chmod`. Now atomically created with `0o600`.

4. **[#28349](https://github.com/google-gemini/gemini-cli/pull/28349) – `fix(cli): guard customDeepMerge against circular references`**  
   P2 core fix. A settings object with circular references (e.g., `obj.self = obj`) crashed the settings manager. Adds cycle detection.

5. **[#28348](https://github.com/google-gemini/gemini-cli/pull/28348) – `fix: resolve MaxListenersExceededWarning and infinite auth loop`**  
   Fixes two issues: `MaxListenersExceededWarning` during API retries, and an infinite authentication loop on Windows after successful OAuth.

6. **[#28144](https://github.com/google-gemini/gemini-cli/pull/28144) – `fix(cli): detect available editors lazily to avoid slow startup`**  
   **CLOSED.** `EditorSettingsManager` was probing all editors synchronously at module scope. Now lazy detection improves startup time, especially on Windows.

7. **[#28153](https://github.com/google-gemini/gemini-cli/pull/28153) – `fix(core): ignore stale update_topic calls after a session reset`**  
   **CLOSED.** Orphaned `update_topic` tool calls after `/clear` were writing to a stale topic state. Now ignored.

8. **[#28149](https://github.com/google-gemini/gemini-cli/pull/28149) – `fix(skills): respect .gitignore/.geminiignore in skill resource listing`**  
   **CLOSED.** Skill folder structures were shared with the model without respecting ignore files. Now filtered.

9. **[#28140](https://github.com/google-gemini/gemini-cli/pull/28140) – `fix(deps): patch shell command dependency advisories`**  
   **CLOSED.** Upgrades `shell-quote` and `simple-git` to versions addressing public security advisories. Preventive remediation.

10. **[#28346](https://github.com/google-gemini/gemini-cli/pull/28346) – `Fix trust dialog disclosure for runnable hooks`**  
    P1 security. Fixes a vulnerability where the trust dialog could disclose runnable hooks (fixes #27901). Also adds a warning for command hooks in project settings.

---

## Feature Request Trends

- **Agent Reliability & Self‑Awareness** – Several issues ask for the agent to understand its own tooling (flags, hotkeys, capabilities) and to better manage subagent delegation, turn limits, and error reporting.
- **AST‑Aware Tools** – There is strong interest in using Abstract Syntax Trees for file reading, code search, and codebase mapping to reduce token bloat and improve precision.
- **Improved Memory System** – The Auto Memory feature needs better filtering of low‑signal sessions, proper redaction before model context, and deterministic handling of invalid memory patches.
- **Security & Sandboxing** – Requests for zero‑dependency OS sandboxing for shell execution and policy engine improvements to discourage destructive commands (e.g., `git reset --force`).
- **Browser Agent Resilience** – Users want browser session takeover/lock recovery, proper configuration overrides (`maxTurns`), and Wayland support.

---

## Developer Pain Points

- **Agent Hangs & False Successes** – Subagents that hang indefinitely or report success after hitting turn limits are the most frequently reported frustrations (issues #21409, #22323, #25166).
- **Configuration & Permission Gaps** – Symlinks in the agents directory are ignored, subagents run without permission post‑update, and settings overrides are silently skipped by the browser agent.
- **Performance & Terminal Issues** – Slow startup due to eager editor detection, flickering on terminal resize, and corruption after exiting external editors in `terminalBuffer` mode.
- **Security Race Conditions** – TOCTOU windows in token file creation, cross‑server MCP resource confusion, and lack of deterministic secret redaction before model context injection.
- **Tool Limits & Modeling Quirks** – Agents fail when >128 tools are available (400 error), and the model frequently creates temporary scripts in random directories, making cleanup tedious.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-10

## Today's Highlights
Version **1.0.70** landed yesterday, adding GPT-5.6 model support and fixing `web_fetch` through mandatory HTTPS proxies. A critical segmentation fault on Alpine Linux (Issue #107) remains open with 15 comments, while multiple reports of TUI hangs on WSL2 and Windows Terminal (Issues #4069, #4077) are gaining traction. The removal of the standalone binary for `linuxmusl-x64` tarballs (Issue #4091) broke many Alpine users’ workflows.

## Releases
**v1.0.70** (2026-07-09)  
- Added GPT-5.6 model support.  
- Show a single `Error` prefix for MCP and skill command failures.  
- Display the real parse error when `--agent` selects a malformed custom agent.  
- `web_fetch` now works through mandatory HTTPS proxies.  
- Added hide/search functionality on the Gists tab.  
- Treated superseded subagent runs as cancelled (was “can”, likely a typo fixed).

## Hot Issues
1. **[#107 – Segmentation Fault on Alpine Linux](https://github.com/github/copilot-cli/issues/107)**  
   *15 comments, 👍4* – Any tool call inside a Docker container using `alpine:latest` causes a segfault. Affected version `0.0.328`. Still open and unresolved for months.

2. **[#1665 – Project/Repository scoped plugins](https://github.com/github/copilot-cli/issues/1665)**  
   *13 comments, 👍18* – Request to allow per-repo plugin configuration instead of global per-user installs. Closed as “under consideration”.

3. **[#4069 – TUI wedges mid-turn on WSL2 + Windows Terminal](https://github.com/github/copilot-cli/issues/4069)**  
   *7 comments, 👍7* – Screen clears, input dead, Ctrl+C ignored. `EIO` followed by `EPIPE` on Rust JSON-RPC transport. Triaged but no fix yet.

4. **[#2739 – `xhigh` reasoning removed for GPT-5.4 and GPT-5.3-codex](https://github.com/github/copilot-cli/issues/2739)**  
   *5 comments, 👍12* – Users are upset that high reasoning modes were dropped. Marked as closed, but strong community pushback.

5. **[#3399 – Allow custom headers for BYOK](https://github.com/github/copilot-cli/issues/3399)**  
   *3 comments, 👍6* – Enterprises need to send custom HTTP headers (e.g., `X-Tenant-ID`) when using bring-your-own-key LLM servers. Open feature request.

6. **[#4019 – `web_fetch` does not work with HTTP proxies](https://github.com/github/copilot-cli/issues/4019)**  
   *3 comments* – Corporate environments blocked because mandatory HTTP proxies were ignored. *Fixed* in v1.0.70 (see Releases).

7. **[#4091 – Standalone binary removed from `linuxmusl-x64` tarballs](https://github.com/github/copilot-cli/issues/4091)**  
   *1 comment* – Alpine users can no longer run the precompiled binary; only Node-based distribution remains. Breaking change, quickly closed without resolution.

8. **[#4089 – Atlassian MCP server: OAuth succeeds but zero tools exposed](https://github.com/github/copilot-cli/issues/4089)**  
   *2 comments* – OAuth flow completes but no tools are loaded. Other HTTP MCP servers work fine. Triaged.

9. **[#3874 – `preToolUse` agent hook denial does not work](https://github.com/github/copilot-cli/issues/3874)**  
   *2 comments* – Installing a hook that denies all commands fails to prevent tool execution. Security concern.

10. **[#4077 – TUI black-screen hang in 1.0.70-0 on Windows Terminal](https://github.com/github/copilot-cli/issues/4077)**  
    *2 comments, 👍3* – Mid-turn the TUI goes black; content is recoverable via `--resume`. Likely a rendering regression.

## Key PR Progress
No pull requests were merged or updated in the last 24 hours.

## Feature Request Trends
- **Project-scoped plugins** (#1665) continues to be the most-requested configuration improvement.
- **Custom HTTP headers for BYOK** (#3399) reflects growing enterprise adoption.
- **Configurable MCP tools for the research agent** (#4076) – users want `/research` to leverage their own MCP servers.
- **Voice mode enhancements**: auto-submit on spacebar release (#4090) and cross-app session sync (#4082).
- **Dynamic context injection in Skills** via `!command` placeholders (#4088).
- **Scheduled prompts** (#4078, #4079) are popular but currently break the task queue – requests for reliable scheduling.

## Developer Pain Points
- **Alpine Linux segfaults** (#107) remain a long-standing blocker for containerized workflows.
- **TUI hangs/deadlocks** on Windows and WSL2 (#4069, #4077) – multiple reports of unresponsive terminals mid-session.
- **MCP OAuth flow fragility** – several issues (#4084, #4085, #4086, #4089) describe OAuth connections that appear successful but deliver no tools.
- **Checkpoint restore deletes untracked files** (#1675) – `git clean -fd` is destructive and irreversible.
- **Standalone binary removal** (#4091) forces Alpine users to use Node, breaking Docker images that rely on the precompiled binary.
- **Context memory overflow** (#3024) – too many MCP servers cause continuous compaction and degraded performance.
- **`preToolUse` hook bypass** (#3874) raises security concerns about agent controls.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-10

## Today’s Highlights
Only two issues and two pull requests saw updates in the last 24 hours, but both carry meaningful implications for enterprise deployments and web UI compatibility. A community contributor has submitted a fix that turns the generic “LLM not set” error into an actionable message for fresh installs, addressing a common onboarding friction point. Meanwhile, a long-standing Safari IME composition bug has now been closed, improving the web-based chat experience for Chinese-language users.

## Releases
No new versions were released in the last 24 hours. The latest stable release remains **v0.8.3** (2026-06-29). Users should monitor the [releases page](https://github.com/MoonshotAI/kimi-cli/releases) for upcoming patches.

## Hot Issues

> Only two issues were updated in the reporting window; both are highlighted below.

1. **[#2458 – Add option to ignore SSL certificate](https://github.com/MoonshotAI/kimi-cli/issues/2458)**  
   *Opened 2026-06-17 by dmorsin • 5 comments*  
   **Why it matters:** In corporate environments where SSL traffic is intercepted by antivirus or security proxies, the CLI currently fails during login because the expected certificate is replaced. The requested `--insecure` flag would allow users to bypass certificate validation for such controlled networks. Community reaction is low (0 👍), but the use case is critical for enterprise adoption.  
   *[View issue](https://github.com/MoonshotAI/kimi-cli/issues/2458)*

2. **[#1537 – MCP/Skill Tool Usage Priority Configuration](https://github.com/MoonshotAI/kimi-cli/issues/1537)**  
   *Opened 2026-03-21 by zhang-xzh • 2 comments*  
   **Why it matters:** As projects integrate multiple MCP servers and Skills with overlapping capabilities, there is no standard way to define tool precedence. This leads to unpredictable behavior in agentic workflows. The community is asking for a declarative priority mechanism to avoid ambiguity.  
   *[View issue](https://github.com/MoonshotAI/kimi-cli/issues/1537)*

## Key PR Progress

1. **[#2488 – fix(soul): make LLMNotSet error message actionable for fresh installs](https://github.com/MoonshotAI/kimi-cli/pull/2488)**  
   *Opened 2026-07-10 by nankingjing • open*  
   **Feature/Fix:** Changes the default error message from `LLM not set` to a user-friendly prompt explaining that `kimi login` must be run first. This directly addresses a common confusion for Homebrew users. The PR is linked to issue [#2456](https://github.com/MoonshotAI/kimi-cli/issues/2456) (not listed in today’s data).  
   *[View PR](https://github.com/MoonshotAI/kimi-cli/pull/2488)*

2. **[#1815 – fix(web): prevent Enter from sending message during IME composition on Safari](https://github.com/MoonshotAI/kimi-cli/pull/1815)**  
   *Opened 2026-04-09 by qianqiuqiu • closed 2026-07-10*  
   **Feature/Fix:** Resolves a long-standing Safari-specific bug where pressing Enter while using a Chinese IME candidate bar would prematurely send the message instead of committing the text. The fix improves the web UI experience for users of CJK languages.  
   *[View PR](https://github.com/MoonshotAI/kimi-cli/pull/1815)*

## Feature Request Trends

Based on the two active issues, the community is currently focusing on:

- **Enterprise security environments:** Request for a “skip SSL verification” flag to operate behind corporate proxies and antivirus MiTM.
- **Agent orchestration:** A standardized configuration for tool priority when multiple MCP servers or Skills can serve the same intent. This points toward a broader need for declarative workflow control.

## Developer Pain Points

- **Onboarding friction:** Fresh installations give an unhelpful `LLM not set` error without guiding the user to run `kimi login`. The fix in PR #2488 addresses this, but the underlying UX still relies on proper error handling.
- **Browser compatibility:** Safari users on macOS experience IME input issues (now fixed), highlighting that web UI polish can lag behind the CLI experience.
- **Certificate chains:** The inability to ignore SSL validation blocks adoption in heavily managed IT environments – a recurring theme for enterprise tools.

*Digest compiled from GitHub repository [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) on 2026-07-10.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-10

## Today’s Highlights
Version **v1.17.18** ships with a critical fix for crashes caused by zero-billing batch-size models and adds a dedicated system prompt for Meta Muse Spark. Community attention is focused on the **GPT-5.6 model family** (multiple issues reported) and a longstanding **subagent hang** bug. The most upvoted feature—**auto‑discovery of models from OpenAI‑compatible providers** (#6231, 168 👍)—remains open and continues to drive discussion.

## Releases
### [v1.17.18](https://github.com/anomalyco/opencode/releases/tag/v1.17.18)
**Bugfixes**
- Prevent crashes and bad pricing data when GitHub Copilot returns models with a zero billing batch size.
**Improvements**
- Add a model-specific system prompt for Meta Muse Spark.

## Hot Issues (10 selected from 30)
1. **[#16685 – [Bug] "Provider returned error" with Kimi K2.5 via OpenCode Go on Windows](https://github.com/anomalyco/opencode/issues/16685)**  
   *25 comments, 10 👍* – Closed. Windows desktop client consistently fails with Kimi K2.5. Community confirmed and fix integrated.

2. **[#6231 – Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231)**  
   *14 comments, 168 👍* – Most requested feature. Users want LM Studio, Ollama, etc. to list models automatically without manual configuration.

3. **[#16344 – Requesty provider does not load approved models](https://github.com/anomalyco/opencode/issues/16344)**  
   *11 comments, 6 👍* – Model selection shows wrong set; not respecting account‑level approved model lists.

4. **[#36140 – GPT-5.6 Luna returns model not found with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)**  
   *9 comments, 27 👍* – `gpt-5.6-luna` fails with HTTP 404 despite being listed in the built‑in OpenAI provider. Works with direct API.

5. **[#36119 – Apply Patch / Edit permission view only shows the first file](https://github.com/anomalyco/opencode/issues/36119)**  
   *6 comments, 1 👍* – Multi-file approval UI is broken; users cannot see diffs for files after the first.

6. **[#33028 – Subagents hang indefinitely after quick bash tool call](https://github.com/anomalyco/opencode/issues/33028)**  
   *5 comments, 2 👍* – Stream never times out when subagent runs a fast bash command. Only manual escape unblocks.

7. **[#26103 – deepseek-v4-flash missing image modality in model definition](https://github.com/anomalyco/opencode/issues/26103)**  
   *5 comments, 0 👍* – Closed. Image input not allowed even though model supports it; error returned for multimodal prompts.

8. **[#17076 – CLI/TUI multi-file apply_patch approval only shows first file diff](https://github.com/anomalyco/opencode/issues/17076)**  
   *4 comments, 17 👍* – Same issue as #36119 but in TUI/CLI mode. `apply_patch` returns per‑file diffs but UI ignores them.

9. **[#36141 – GPT-5.6 models missing max reasoning effort variant](https://github.com/anomalyco/opencode/issues/36141)**  
   *4 comments, 2 👍* – OpenAI exposes `max` reasoning effort for GPT-5.6; OpenCode stops at `xhigh`.

10. **[#36247 – GPT-5.6 Codex OAuth uses 1.05M metadata instead of 500k/372k input limits](https://github.com/anomalyco/opencode/issues/36247)**  
    *2 comments, 0 👍* – Context limits are over‑reported when using Codex OAuth, causing potential overruns.

## Key PR Progress (10 selected from 20)
1. **[#36254 – feat(core): replace instruction checkpoints with value-delta sync](https://github.com/anomalyco/opencode/pull/36254)**  
   *Open.* Major architecture change: moves away from full prose checkpoints to delta‑based sync for mutable context (AGENTS.md, env, etc.).

2. **[#36267 – fix(core): simplify compaction semantics](https://github.com/anomalyco/opencode/pull/36267)**  
   *Closed.* Fixes automatic compaction that incorrectly forced `max_output_tokens` and broke endpoints.

3. **[#36264 – fix(tui): hide editor context from transcript](https://github.com/anomalyco/opencode/pull/36264)**  
   *Closed.* Prevents Zed editor context from leaking into the visible user prompt; uses separate synthetic message.

4. **[#32767 – fix(tui): restore ESC interrupt for delegated subagent sessions](https://github.com/anomalyco/opencode/pull/32767)**  
   *Open.* Re‑enables Escape key to stop subagents, a regression from previous releases.

5. **[#34901 – fix(provider): respect model limit.output instead of capping at 32k](https://github.com/anomalyco/opencode/pull/34901)**  
   *Open.* Removes hard 32k cap; uses model‑defined `limit.output`. Affects multiple related issues.

6. **[#35433 – fix(opencode): stop sending tools when `tool_call` is false](https://github.com/anomalyco/opencode/pull/35433)**  
   *Open.* Checks `capabilities.toolcall` before sending tool definitions; fixes silent tool injection.

7. **[#35819 – fix(core): prioritize manual compaction](https://github.com/anomalyco/opencode/pull/35819)**  
   *Open.* Ensures manual compaction runs at the next safe LLM step boundary and doesn’t interrupt active calls.

8. **[#36245 – fix(opencode): close webfetch SSRF redirect bypass, fix IP range checks](https://github.com/anomalyco/opencode/pull/36245)**  
   *Closed.* Security audit fix: SSRF guard now validates the final redirect target, not just the initial URL.

9. **[#35777 – fix(core): refresh stale @latest npm package cache on load](https://github.com/anomalyco/opencode/pull/35777)**  
   *Open.* Plugins pinned to `@latest` now check registry again instead of using stale `node_modules`.

10. **[#36248 – fix(openai): use codex context limits for gpt-5.6](https://github.com/anomalyco/opencode/pull/36248)**  
    *Open.* Corrects token limits for GPT-5.6 when using Codex OAuth (500k input instead of 1.05M).

## Feature Request Trends
The most passionate demand is **model auto-discovery** (#6231, 168 👍) — users want OpenCode to automatically enumerate models from OpenAI‑compatible local providers, eliminating tedious manual configuration. Other recurring requests include:
- **Tab completion** in shell mode (`!` commands) – #7755 (closed, now merged as PR #26065).
- **Message search** (Cmd+F / Ctrl+F) in desktop app – #19143.
- **Composite commands** to chain `/init`, `/review`, etc. – #36236.
- **Mouse tracking toggle** in TUI for remote SSH sessions – #36266.
- **Copy last agent response** command – #18425.

## Developer Pain Points
- **Provider model misconfiguration** – multiple issues report that OpenCode ignores or incorrectly reports a model’s capabilities (image modalities, reasoning efforts, output limits, approved lists).
- **Multi-file apply_patch approval** fails to display all diffs (both desktop and TUI), forcing users to approve blindly.
- **Subagent hangs** after fast shell commands, with no timeout recovery.
- **Config precedence** is broken (#28177) – project‑level settings do not properly override global config.
- **Import errors** misleadingly report “File not found” for malformed JSON (#36231, fixed in PR #36258).
- **Electron desktop** startup hangs with large `.gitignored` projects (#20977) and crashes when browsing deep folder trees (#22655).
- **Windows‑specific bugs** persist, including the Kimi K2.5 provider error (#16685) and dark mode detection (#36249).
- **GPT-5.6 family** has a cluster of compatibility issues (model not found, reasoning effort variants, context limit mismatch).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-10

## Today’s Highlights
The Pi ecosystem saw a flurry of activity around **GPT-5.6 model support**, with multiple issues and PRs adding the new `max` and `ultra` thinking levels across providers. A critical **regression** was reported where `httpIdleTimeoutMs` is no longer respected for self-hosted OpenAI-compatible providers (v0.80.6). Meanwhile, **OpenRouter session affinity** and **message-anchored tool loading** (POC) advanced the SDK's flexibility.

---

## Releases
- [v0.80.6](https://github.com/badlogic/pi-mono/releases/tag/v0.80.6) — Introduces a new `--thinking max` level (above `xhigh`), natively supported on GPT-5.6 and adaptive Claude models. Available in CLI, SDK, RPC, and model selection. Custom themes can define `thinkingMax`.
- [v0.80.5](https://github.com/badlogic/pi-mono/releases/tag/v0.80.5) — Minor patch release.

---

## Hot Issues (10 selected)
1. **[#6306: Support Strict Tools / Grammar](https://github.com/earendil-works/pi/issues/6306)** *(open, 22 comments)* — Lack of “free form” or strict tools in the SDK hinders LLM grammar-aware probing. Community wants parity with OpenAI’s LARK/regex support.  
2. **[#6259: fix: 'content is not iterable' when reasoning models return null content](https://github.com/earendil-works/pi/issues/6259)** *(closed, 14 comments)* — Reasoning models (e.g., GLM-5.2) return `content: null` during tool use, crashing multiple code paths. Fix was merged.  
3. **[#2023: Add pi.runWhenIdle() to schedule work after agent settles](https://github.com/earendil-works/pi/issues/2023)** *(closed, 14 comments)* — Request for an API to queue deferred actions (e.g., `/reload-runtime`) after the agent finishes. High community interest (5 👍).  
4. **[#3299: Add "max" thinking level for Opus 4.7 five-rung API](https://github.com/earendil-works/pi/issues/3299)** *(closed, 10 comments)* — Precursor to v0.80.6’s `max` level; Pi’s thinking ladder now has seven rungs.  
5. **[#6366: Support session IDs for OpenRouter](https://github.com/earendil-works/pi/issues/6366)** *(open, 7 comments)* — OpenRouter requires `x-session-id` header or `session_id` in body; Pi only sends the header, breaking caching.  
6. **[#6206: Clamping to context window prevents artificial context limits](https://github.com/earendil-works/pi/issues/6206)** *(open, 7 comments)* — Fix for #5595 clamps `max_tokens` to the model’s context window, but prevents users from setting lower limits—a regression for structured outputs.  
7. **[#6475: Add GPT-5.6 (Sol/Terra/Luna) to GitHub Copilot provider](https://github.com/earendil-works/pi/issues/6475)** *(open, 6 comments, 4 👍)* — Copilot rolled out GPT-5.6 today; users want immediate Pi integration.  
8. **[#6300: Windows: Input line redrawn on every keystroke](https://github.com/earendil-works/pi/issues/6300)** *(open, 5 comments)* — TUI on Windows (cmd.exe, Windows Terminal) renders each character on a new line—critical for Windows users.  
9. **[#6476: Regression: httpIdleTimeoutMs no longer respected in v0.80.6](https://github.com/earendil-works/pi/issues/6476)** *(open, 5 comments)* — Self-hosted vLLM setups timeout after a few minutes despite explicit timeouts; works in v0.80.3.  
10. **[#6097: Add support for 'max' thinking level](https://github.com/earendil-works/pi/issues/6097)** *(open, 3 comments, 17 👍)* — Highly requested feature; overlaps with #3299 but remains open as the canonical tracking issue for `max` level.

---

## Key PR Progress (10 selected)
1. **[#6503: Bump bun to 1.3.14](https://github.com/earendil-works/pi/pull/6503)** *(closed)* — Fixes bun’s built-in 5-min HTTP idle timeout via `BUN_CONFIG_HTTP_IDLE_TIMEOUT`, addressing #6476.  
2. **[#6501: Fix embedded library hosts (theme init + reused extension runtime)](https://github.com/earendil-works/pi/pull/6501)** *(closed)* — Closes #6102 and addresses #6101, enabling `initTheme()` for library embedders and preventing “stale ctx” errors across sessions.  
3. **[#6474: Support message-anchored tool loading](https://github.com/earendil-works/pi/pull/6474)** *(open, POC)* — Adds `addedTools` field in messages, allowing tools to be introduced mid-conversation. Not yet merge-ready but promising for SDK flexibility.  
4. **[#6496: Fix OpenRouter session affinity](https://github.com/earendil-works/pi/pull/6496)** *(closed)* — Sends `x-session-id` header and `session_id` in JSON body, solving #6366.  
5. **[#6216: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)** *(open)* — New provider for Bedrock Mantle’s OpenAI-compatible API, expanding Pi’s cloud support.  
6. **[#6490: Add xhigh and max to all fable-5 providers](https://github.com/earendil-works/pi/pull/6490)** *(closed)* — Fixes incorrect reasoning-level metadata in the model catalog (partially addresses #6374).  
7. **[#6489: Add ultra thinking level](https://github.com/earendil-works/pi/pull/6489)** *(closed)* — Introduces `ultra` above `max` for GPT-5.6 Sol/Terra; maps to Codex API `reasoning.effort`.  
8. **[#6481: Fix OpenRouter models: use context length from top provider](https://github.com/earendil-works/pi/pull/6481)** *(closed)* — Fixes #6378 where OpenRouter returned 400 due to incorrect context window.  
9. **[#6471: Correct GPT-5.6 Codex context window (272k → 372k)](https://github.com/earendil-works/pi/pull/6471)** *(closed)* — Aligns with upstream OpenAI Codex metadata.  
10. **[#6463: Cancel auto-retry when switching models](https://github.com/earendil-works/pi/pull/6463)** *(closed)* — Prevents stale retry loops when user changes model mid-conversation; adds regression test.

---

## Feature Request Trends
- **Thinking level expansion**: The community is heavily invested in extending Pi’s reasoning effort ladder—from `off` to `ultra`. Multiple issues/PRs chase alignment with OpenAI (GPT-5.6) and Anthropic (Opus) APIs.
- **New provider integrations**: Requests pour in for GPT-5.6 models across GitHub Copilot, OpenAI Codex, OpenRouter, Bedrock Mantle, and even xAI Grok OAuth.
- **SDK flexibility**: Strong interest in strict tool/grammar support, message-anchored tool loading, and deferred work scheduling (`runWhenIdle`).
- **Session & caching**: OpenRouter session IDs, Azure OpenAI `store:false` persistence, and compaction session IDs are frequent pain points.

---

## Developer Pain Points
1. **Null content in reasoning models** — Multiple code paths crash when `content` is `null` during tool calls (e.g., GLM-5.2).  
2. **Timeout regressions** — `httpIdleTimeoutMs` ignored in v0.80.6; bun’s hard-coded 5-min timeout also surfaces.  
3. **Context window clamping** — The fix for overlong requests prevents users from setting artificial lower limits, breaking structured output workflows.  
4. **Windows TUI issues** — Input redraw on every keystroke makes the terminal unusable on cmd.exe/Windows Terminal.  
5. **Model catalog inconsistencies** — Incorrect thinking levels and context windows across providers require manual deduplication.  
6. **Retry backoff explosion** — Exponential backoff has no cap, causing individual retry attempts to wait minutes.  
7. **Embedded library friction** — Theme initialization and extension runtime reuse are broken for library embedders.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-10, based on the provided GitHub data.

---

## Qwen Code Community Digest – 2026-07-10

### 1. Today's Highlights

Today’s activity is dominated by the ongoing push toward production multi-workspace daemon support, with several new PRs advancing the feature and a key RFC (#6378) still under active discussion. A critical fix for repeated subagent tool-call loops (v0.19.8-nightly) and a PR addressing leaked `<analysis>/<summary>` protocol tags from the `qwen3.7-max` model highlight the team's focus on agent reliability and safety. Additionally, a notable bug where `/review` on large diffs gave review agents only partial file context has been resolved, improving code review quality.

### 2. Releases

A new nightly release was published:
- **[v0.19.8-nightly.20260710.205430235](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.8-nightly.20260710.205430235)**
  - **Key Change:** Fixes a critical issue where subagents could get stuck in infinite tool-call loops by @yiliang114.
  - **Other Fix:** Resolves an issue with detecting and marking broken history chains in session management.

### 3. Hot Issues (10 Most Noteworthy)

1.  **[#6378: RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)**
    - **Why it matters:** This is the foundational discussion for a major architectural shift, enabling a single daemon to manage multiple workspaces. High community engagement (20 comments) and active PRs this week show this is the #1 priority.
2.  **[#6384: `hard limit: 0` bug when model reserves full context for output](https://github.com/QwenLM/qwen-code/issues/6384)**
    - **Why it matters:** A subtle but nasty bug that causes the client to fail before even sending a request. The root cause lies in how environment-configured models allocate their context window.
3.  **[#5970: Auto enter Plan mode from Yolo mode is back](https://github.com/QwenLM/qwen-code/issues/5970)**
    - **Why it matters:** A recurring regression that breaks the "YOLO" (fully automatic) workflow. The community is frustrated as this disrupts a core user preference for hands-off operation.
4.  **[#6590: Ctrl+V paste image broken on macOS standalone install](https://github.com/QwenLM/qwen-code/issues/6590)**
    - **Why it matters:** A platform-specific packaging bug where a native module (`@teddyzhu/clipboard`) is missing from the standalone build, breaking pasting screenshots for many macOS users.
5.  **[#6654: API Error: `tool_use` blocks missing corresponding `tool_result`](https://github.com/QwenLM/qwen-code/issues/6654)**
    - **Why it matters:** A core API error indicating a mismatch in the tool-use/tool-result message structure. This can halt complex multi-step agent tasks and is a sign of a deeper state-management issue.
6.  **[#6595: qwen3.7-max may leak `<analysis>/<summary>` tags](https://github.com/QwenLM/qwen-code/issues/6595)**
    - **Why it matters:** Internal protocol tags leaking into the output stream can break agents that rely on clean text parsing. The community is concerned about reliability, especially with the latest flagship model.
7.  **[#6639: MCP servers with HTTP transport stay offline on 401 errors](https://github.com/QwenLM/qwen-code/issues/6639)**
    - **Why it matters:** OAuth recovery is not triggered for MCP servers returning 401, leaving them permanently offline. This is a significant integration pain point for users of external tools.
8.  **[#6666: qwen 3.7 max returns `<think>` tags in `content` instead of `reasoning_content`](https://github.com/QwenLM/qwen-code/issues/6666)**
    - **Why it matters:** A model-specific bug where structured reasoning is incorrectly placed. This breaks features that rely on the separate `reasoning_content` field for display or processing.
9.  **[#6671: Subagent crashes on `${0}` in agent definitions](https://github.com/QwenLM/qwen-code/issues/6671)**
    - **Why it matters:** A template engine parsing issue that causes immediate crashes. This is a developer landmine for anyone creating custom agents with dollar-brace syntax.
10. **[#6669: Feature: Ctrl+S stash input box content](https://github.com/QwenLM/qwen-code/issues/6669)**
    - **Why it matters:** A small but heavily requested quality-of-life feature from the community (via chat), mirroring a feature in Claude Code to prevent losing long prompts during context switching.

### 4. Key PR Progress (10 Important PRs)

1.  **[#6603: fix(core): retry leaked protocol turns](https://github.com/QwenLM/qwen-code/pull/6603)**
    - **What it does:** Automatically detects and retries model responses that start with leaked `<analysis>` or `<summary>` tags, suppressing the bad output from history. Directly addresses the problem in issue #6595.
2.  **[#6457: feat(qqbot): group message handling and cron-msg-experimental](https://github.com/QwenLM/qwen-code/pull/6457)**
    - **What it does:** Adds comprehensive group chat support for the QQ Bot channel, including keyword triggers and scheduled messaging. Expands the platform's reach to a massive user base.
3.  **[#6676: feat(daemon): record & query sub-session parentSessionId](https://github.com/QwenLM/qwen-code/pull/6676)**
    - **What it does:** Removes the "isolated" scheduled-task mode, simplifying the architecture. All tasks now run in their bound session, with lineage tracked via `parentSessionId`.
4.  **[#6525: feat(serve): Add cursor-paged transcript replay endpoint](https://github.com/QwenLM/qwen-code/pull/6525)**
    - **What it does:** Adds a new API for replaying session transcripts with cursor-based pagination. Essential for debugging and building historical analysis UIs.
5.  **[#6612: feat(review): give every line of a large diff an accountable reviewer](https://github.com/QwenLM/qwen-code/pull/6612)**
    - **What it does:** Fixes a major `/review` bug where large diffs were truncated. Now, diffs are split into sub-diffs, each handed to a dedicated reviewer agent, ensuring every line is reviewed.
6.  **[#6630: fix(core): keep YOLO mode when the model calls enter_plan_mode](https://github.com/QwenLM/qwen-code/pull/6630)**
    - **What it does:** Prevents the model from overriding the user's explicit "YOLO" mode choice. A direct fix for the regression reported in issue #5970.
7.  **[#6678: feat(cli): show full reasoning content when expanding thinking blocks](https://github.com/QwenLM/qwen-code/pull/6678)**
    - **What it does:** Improves the streaming UX by rendering full reasoning content via MarkdownDisplay instead of a hardcoded preview, restoring pre-collapsible-feature behavior.
8.  **[#6655: feat(cli): forward `ask_user_question` answers from SDK](https://github.com/QwenLM/qwen-code/pull/6655)**
    - **What it does:** Enables interactive user queries (e.g., confirmation dialogs) to work when using the TypeScript and Python SDKs. A huge step toward making SDK-driven sessions as capable as CLI sessions.
9.  **[#6628: feat(core): add configurable default timeout for foreground shell commands](https://github.com/QwenLM/qwen-code/pull/6628)**
    - **What it does:** Introduces a new `tools.shell.defaultTimeoutMs` setting, giving users control over how long foreground shell commands run before being killed.
10. **[#6580: feat(cli): improve subagent observability](https://github.com/QwenLM/qwen-code/pull/6580)**
    - **What it does:** Improves the developer experience when debugging subagents by showing untruncated in-progress commands and providing clearer context in approval requests.

### 5. Feature Request Trends

- **Multi-Workspace Daemon:** This is the single most significant architectural feature being requested and developed. The vision is a single `qwen serve` daemon that can manage multiple, independent workspaces with their own sessions, channels, and configurations (See #6378 and its numerous dependent PRs).
- **Interactive SDK Support:** A strong push to make the TypeScript and Python SDKs fully interactive. Key requests include supporting `ask_user_question` (#6647) and other two-way tool calls, moving beyond simple "fire-and-forget" automation.
- **Enhanced CLI Shortcuts & UX:** Users are requesting features to improve the terminal workflow, such as stashing input content with `Ctrl+S` (#6669) and better reasoning display (#6669).
- **Improved Model Behavior & Robustness:** Multiple issues point to the need for more robust handling of model quirks, especially with newer models like `qwen3.7-max`. The community is requesting features for automatic retry of malformed responses and better parsing of structured output.

### 6. Developer Pain Points

- **Session Management Breakage:** Bugs like the `tool_use/tool_result` mismatch (#6654) and broken history chains (fix in nightly) cause complex agent workflows to fail mid-task, a major source of developer frustration.
- **Model Quirks Destroying Workflows:** The `qwen3.7-max` model leaking internal tags (#6595, #6666) and the consistent regression of YOLO/Plan mode interactions (#5970) are top frustrations. These issues erode trust in the agent's reliability.
- **Platform-Specific Packaging Issues:** Standalone macOS builds missing native modules (#6590) and garbled text on non-UTF-8 Windows terminals (#6214) highlight ongoing pain for users on less common platforms.
- **Tool System Gaps:** The inability of the SDK to handle interactive tool calls (#6647) and MCP servers failing to re-authenticate (#6639) create hard ceilings for automation and external integrations.
- **Template Engine Conflicts:** The `${0}` parsing bug (#6671) is a sharp edge for anyone trying to customize agent behavior, causing immediate crashes from seemingly benign agent definitions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-10

## Today's Highlights

v0.8.68 release preparation is in its final sprint: the release PR (#4327) is out, paired with a critical TUI state routing fix (#4332) and workflow dispatch improvements (#4336). Meanwhile, the community is actively contributing security-hardening PRs (dependency upgrades, cargo-deny) and a first-time contributor fixed a hot lock performance issue with `parking_lot` migration. On the issue tracker, the most active discussion concerns CodeWhale’s constitution compliance (33 comments) and the new Fleet/Workflow/Lane architecture is converging towards stable product readiness.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues (10 noteworthy)

1. **[#4092 – v0.8.68 execution board: lane order, dependencies, and agent protocol](https://github.com/Hmbown/CodeWhale/issues/4092)**  
   *Closed – 60 comments*  
   The canonical milestone issue that replaces the July 7 triage packet. Every open milestone issue now carries exactly one `lane-*` label, making lanes queryable. The high engagement reflects its role as the single entry point for all v0.8.68 work.

2. **[#4032 – Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)**  
   *Open – 33 comments*  
   A user reports that CodeWhale consistently writes temporary scripts despite having user-provided scripts, and always finds justifications. This indicates a deeper issue with agent constitution enforcement, generating significant community discussion.

3. **[#4042 – Environment-level tool sandboxing for sub-agents](https://github.com/Hmbown/CodeWhale/issues/4042)**  
   *Closed – 12 comments*  
   Tracks runtime enforcement of tool restrictions across sessions, sub-agents, Fleet workers, and MCP servers. The feature `--disallowed-tools` already exists; this issue confirmed its breadth.

4. **[#4178 – Stopship workflow as fleet-backed lane (dogfood)](https://github.com/Hmbown/CodeWhale/issues/4178)**  
   *Open – 10 comments*  
   Concrete end-to-end dogfood lane for active stopship issues. Demonstrates the new Fleet/Workflow/Lane/Runtime model in practice, with 10 comments reflecting implementation observations.

5. **[#4014 – TUI lag and memory pressure from high agent fan-out](https://github.com/Hmbown/CodeWhale/issues/4014)**  
   *Closed – 10 comments*  
   When 30+ sub-agents run in parallel, TUI becomes laggy with typing latency, rendering stalls, and host memory pressure. The performance lane label shows this is a recognized v0.8.68 focus.

6. **[#4175 – Architecture: Fleet / Workflow / Lane / Runtime product model](https://github.com/Hmbown/CodeWhale/issues/4175)**  
   *Open – 9 comments*  
   Canonical tracker for the approved orchestration vocabulary. Prevents the four concepts from collapsing into one. Reference doc `AGENT_WORKFLOWS_0868.md` is linked.

7. **[#4095 – Default TUI presentation too busy; compact mode should be standard](https://github.com/Hmbown/CodeWhale/issues/4095)**  
   *Closed – 9 comments*  
   Treats the cluttered default view as a v0.8.68 UX bug. Low-level activity changes too quickly, making the app feel chaotic. Expected to be resolved by making compact mode the standard.

8. **[#4257 – Add xAI (Grok) as a first-class provider](https://github.com/Hmbown/CodeWhale/issues/4257)**  
   *Closed – 9 comments*  
   Users could only reach x.ai via a custom OpenAI-compatible route. This issue requested API key + OAuth paths, and was closed after PR #4314 wired the OAuth entrypoints.

9. **[#4038 – Workflow: product-readiness tracker](https://github.com/Hmbown/CodeWhale/issues/4038)**  
   *Closed – 7 comments*  
   v0.8.68 umbrella issue ensuring Workflow becomes product-ready: stable model-facing tool, normal TUI/CLI run path, compact run view, and high-fan-out resource story. Closed with v0.8.68 release prep.

10. **[#4242 – Run Termux runtime QA for shell, PTY, config, and TUI startup](https://github.com/Hmbown/CodeWhale/issues/4242)**  
    *Open – 7 comments*  
    Validation of Android arm64 build on real Termux before marking official support. Part of the epic #4236 for official Termux/Android support, reflecting growing mobile use interest.

---

## Key PR Progress (10 important)

1. **[#4336 – feat(workflow): dispatch durable lanes without root model](https://github.com/Hmbown/CodeWhale/pull/4336)**  
   *Open*  
   Enables `codewhale workflow run` directly through the host-owned Workflow tool, bypassing the operator-model turn. Preserves profile, approval, sandbox, network, MCP, environment, and keyring precedence. A major step toward autonomous workflow execution.

2. **[#4332 – fix: make v0.8.68 TUI state and routing truthful](https://github.com/Hmbown/CodeWhale/pull/4332)**  
   *Open*  
   Stopship repair batch that fixes live regressions in the TUI: empty provider headers no longer treated as configured, fixes for configured picker, and truthful state routing. Critical for release quality.

3. **[#4331 – docs(release): align v0.8.68 mode FAQ and workflow commands](https://github.com/Hmbown/CodeWhale/pull/4331)**  
   *Open*  
   Aligns English/Chinese FAQ with the shipped Plan / Act / Operate mode contract. Replaces nonexistent `workflow status` examples with real `lane status`/`lane logs` commands.

4. **[#4327 – release: v0.8.68](https://github.com/Hmbown/CodeWhale/pull/4327)**  
   *Closed*  
   The release PR itself – intentionally last, carrying only version bump, changelog, and final public docs/site language. All feature and CI-speed work already merged.

5. **[#4328 – fix: upgrade dependencies to resolve cargo-audit vulnerabilities](https://github.com/Hmbown/CodeWhale/pull/4328)**  
   *Closed*  
   Upgraded crossbeam-epoch, pdf-extract, lopdf, and ttf-parser to fix security vulnerabilities (invalid pointer dereference, stack overflow). Community contribution from `bistack`.

6. **[#4243 – perf(tui): migrate runtime_threads maps to parking_lot::Mutex](https://github.com/Hmbown/CodeWhale/pull/4243)**  
   *Closed*  
   First-time contributor `wuisabel-gif` completed the `parking_lot` migration at hot lock sites, fixing a v0.8.68 performance target. Runtime thread manager now uses `parking_lot::Mutex` instead of `std::sync`.

7. **[#3902 – perf(tui): fix the five render/input hot paths](https://github.com/Hmbown/CodeWhale/pull/3902)**  
   *Closed*  
   Fixed five performance issues: double task row computation, redundant render calls, full-screen redraw on every tick, clipboard polling, and update_plan synchronization. Also fixed four regressions found by adversarial multi-agent review.

8. **[#4310 – ci: cut PR critical path and stop rebuilding nightly per merge](https://github.com/Hmbown/CodeWhale/pull/4310)**  
   *Closed*  
   Reduced PR CI wall time from ~19.5m to significantly less by caching nightly Rust toolchain and avoiding rebuilds on every merge. Critical for v0.8.68 iteration speed.

9. **[#4314 – feat(provider): wire xAI device-code OAuth entrypoints](https://github.com/Hmbown/CodeWhale/pull/4314)**  
   *Closed*  
   Completed the user-facing surface for xAI (Grok) support: CLI auth command, TUI auth command, TUI command `/auth xai-device`, and guided OAuth from provider setup. Based on already-merged xAI provider base (#4303).

10. **[#4315 – fix(android): build Termux target and stop rustls JVM panic](https://github.com/Hmbown/CodeWhale/pull/4315)**  
    *Closed*  
    Made Android/Termux arm64 build bootable: enabled bindgen for NDK sysroot, switched to `rustls-native-certs` to avoid JVM panic, and fixed TUI startup on Termux. Includes CI for Android arm64.

---

## Feature Request Trends

From the issue tracker, the most requested feature directions are:

- **Sidebar sessions panel** – persistent session browser with auto-resume (#2934, 5 comments)
- **Official Termux / Android arm64 support** – multiple issues (#4236, #4242) with QA requests
- **First-class xAI / Grok provider** – API key and OAuth now landed (#4257)
- **Per-project memory** – lightweight project-scoped recall (#3976) before full external-memory backend
- **Pricing improvements** – thread billing surfaces (PAYG vs Token Plan), cache pricing, and provider-aware scorecards (#4324, #4319, #4335)
- **Enhanced workflow gates and handoffs** – multi-step workflows with role-to-role gate semantics (#4179)
- **Permission profiles and nonblocking execution defaults** – separating TUI modes from approval/ sandbox behavior (#3211)
- **OpenAI Codex/ChatGPT OAuth verification** – moving from preview to supported (#2984)

The overarching theme is **making the tool more reliable, feature-complete for mobile/cloud deployment, and providing richer workflow orchestration**.

---

## Developer Pain Points

Recurring frustrations and high-frequency requests include:

- **Constitution compliance** – CodeWhale not following user-provided scripts and justifying workarounds (#4032) is a deep trusted-execution pain point.
- **TUI performance under high agent fan-out** – 30+ parallel sub-agents cause lag, rendering stalls, and memory pressure (#4014, #4326).
- **Default UI clutter** – the default TUI view is too busy, chaotic for normal work (#4095).
- **Workflow not product-ready** – despite workflow runtime foundations, stable model-facing tools and normal run paths are still evolving (#4038).
- **Configuration confusion** – empty provider headers treated as configured (#4333), custom provider identity lost on session restore (#4334).
- **Anthropic API error handling** – HTTP 400 due to missing `tool_result` blocks (#4329) indicates fragility in tool-use protocol.
- **Missing pricing accuracy** – offline scorecards not provider-aware, cache savings display $0, and DeepSeek alias deprecation deadline (#4320, #4319, #4335).

These pain points are driving the v0.8.68 stopship fixes and will likely shape priorities for v0.8.69.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*