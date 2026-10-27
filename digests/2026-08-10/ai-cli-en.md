# AI CLI Tools Community Digest 2026-08-10

> Generated: 2026-08-10 02:15 UTC | Tools covered: 9

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
**Date:** 2026-08-10 · **Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI

---

## 1. Ecosystem Overview

The AI CLI tool landscape is entering a stabilization phase: the three largest platforms (Claude Code, OpenAI Codex, Gemini CLI) shipped no user-facing releases in the past 24 hours, while mid-tier tools (Qwen Code, Pi, OpenCode) continue rapid iteration and nightly shipping. Multi-agent orchestration is the defining architectural frontier — Qwen published an RFC for independent-session coordination (#8718), Gemini opened "agents calling agents" (#28738), and Claude, Copilot, and OpenCode all field subagent reliability bugs. The two weakest points across nearly every tool are Windows reliability and MCP integration tolerance, which together generate the largest cluster of user pain reports. Meanwhile, persistent memory/context continuity is the most consistent cross-community feature demand, and safety/approval UX is shifting toward user control rather than opaque model decisions.

---

## 2. Activity Comparison

*Counts reflect issues/PRs tracked in each digest; explicit totals stated by the digests are used where available.*

| Tool | Issues updated (24h) | PRs updated (24h) | Releases (24h) |
|---|---|---|---|
| Claude Code | ~10 hot issues | 5 | None |
| OpenAI Codex | 10 hot issues | 8 | None |
| Gemini CLI | 10 hot issues | 10 | Nightly v0.56.0-nightly.20260810 |
| GitHub Copilot CLI | 25 issues | 0 | None |
| Kimi Code CLI | 2 issues | 1 | None |
| OpenCode | ~10 hot issues | 10 | None |
| Pi | 10 hot issues | 10 | None |
| Qwen Code | 21 issues | 50 active PRs | Nightly v0.21.8-nightly.20260810 |
| DeepSeek TUI | 10 hot issues | 3 | None (v0.9.6 in prep) |

**Key takeaways:** Qwen Code has by far the highest PR velocity (50 active), with an autofix bot actively firefighting CI/test failures. Copilot CLI shows a concerning imbalance — 25 issues updated, zero PRs. Kimi Code is nearly dormant (2 issues, 1 PR). Claude Code's PR queue is explicitly "lighter than the requested 10."

---

## 3. Shared Feature Directions

**Persistent memory & context continuity** (highest cross-tool demand)
- Kimi: Memory System request (#1283), 27 comments over 5 months
- Gemini: Auto Memory retry loops (#26522), pre-redaction privacy leak (#26525)
- OpenCode: Memory Megathread (#20695, 124 comments/96 👍); daemon sessions with recall (#41453)
- Pi: Porting cross-session memory from oh-my-pi (#7845)
- Codex: Chat sync across web/IDE/desktop (#5609, 63 👍)

**Multi-agent orchestration**
- Qwen: RFC for leader/worker session coordination (#8718); native Agent Team PR (#8804)
- Gemini: Subagent-to-subagent delegation with recursion (#28738)
- Copilot: Subagent freezes (#4306); parallel explore fan-out rate-limit collisions (#4416)
- Claude: Subagent effort observability (#85416)
- OpenCode: Nested subagent permission prompts hang silently (#13715)

**Model/provider resilience & failover**
- OpenCode: Cross-model fallback beyond same-provider retry (#7602, 107 👍)
- Copilot: Missing auto-switch despite `eligibleForAutoSwitch` (#4416); BYOK local 403s (#4414)
- Claude: Safety classifier silently downgrades model, `/model` cannot override (#67246)
- Pi: Copilot login 429s on orgs with many models (#7850)

**MCP integration hardening**
- Copilot: Fixed 60s init timeout without retry (#4421); managed-settings deny-all (#4419)
- Qwen: Optional GET/SSE probe rejection kills whole MCP connection (#8784)
- Claude: Tool index not refreshed for new MCP tools (#66084)
- Kimi: Google GenAI rejects standard JSON Schema metadata (#739)
- Codex: Inbound MCP notifications into active sessions (#15299)

**Localization**
- Claude: UI i18n (#31413) · Copilot: zh-CN localization (#4407) · DeepSeek TUI: "Constitution" translation debate (#4949)

**Context-window transparency**
- DeepSeek TUI: 1M-token models silently compact at 128K (#5239); `/compact` shows success with no token gain (#5096)
- Gemini: Hard failure at >128 tools, no graceful degradation (#24246)
- Qwen: Context usage progress pill in composer (#8794)

---

## 4. Differentiation Analysis

| Tool | Feature focus | Primary users | Technical signature |
|---|---|---|---|
| **Claude Code** | Agent trust, hooks/plugins, safety controls | Enterprise teams, power users | Plugin/skills system; safety-classifier model control; Desktop/MSIX packaging |
| **OpenAI Codex** | ChatGPT/IDE integration, cloud sandboxing | ChatGPT, VS Code/Cursor users; Windows-heavy | Exec-server with gRPC transport; Computer Use; `apply_patch` line-ending modes |
| **Gemini CLI** | Agent delegation, browser agent, Auto Memory | Google ecosystem, autonomous workflows | ACP session files; policy engine (YOLO/AUTO_EDIT); nightly releases |
| **GitHub Copilot CLI** | GitHub-native remote sessions, fleet workflows | GitHub Enterprise orgs | Tight platform coupling (managed settings, org model catalog); `/remote` |
| **Kimi Code CLI** | Lightweight ACP bridging | Moonshot/Kimi users, automation | ACP mode; `wire.jsonl` session-trace reliability |
| **OpenCode** | Provider-agnostic TUI, headless/CI parity | Multi-provider TUI enthusiasts | OpenCode Go gateway; AI SDK provider layer; renderer perf focus |
| **Pi** | Local models, TUI ergonomics, extensions | Self-hosters, llama.cpp users | llama.cpp provider; extension protocol; remote-session wire protocol (CBOR) |
| **Qwen Code** | Multi-agent workflows, web shell/desktop | Alibaba ecosystem; workflow-engine users | Daemon/web-shell state model; Goal v3; live-session registry |
| **DeepSeek TUI** | Fleet/lane workers, compaction architecture | DeepSeek/GLM users; ops-style automation | "Subtractive" runtime (single-provider summary + successor handoff); lane/fleet concepts |

**Positioning summary:** Claude Code and Copilot CLI target enterprise trust and governance. Codex, Gemini, and Qwen are pushing autonomous multi-agent capabilities hardest (each with different orchestration models). OpenCode, Pi, and DeepSeek TUI compete on TUI/operator ergonomics and provider openness. Kimi is the outlier — minimal activity but a strong latent demand for memory features.

---

## 5. Community Momentum & Maturity

- **Claude Code** — Most mature and enterprise-entrenched, but the quiet release cadence and a cluster of high-trust-impact bugs (fabricated conversation turns #85286, denied tool executed #83760, 30-min SIGTERM #84981) suggest a stability-over-features phase. Community is large and vocal (76 👍 on cross-directory resume).
- **Qwen Code** — Fastest iteration: nightly releases, 50 active PRs, autofix bot automating CI triage. Distinctly strategic roadmap (multi-agent RFC, workflow engine adoption).
- **OpenCode** — Strong grassroots momentum: the two biggest megathreads in this digest (memory #20695 at 96 👍, clipboard #4283 at 110 👍) show a large, opinionated user base and fast PR turnaround.
- **Pi** — Impressive bug-fix velocity (10 PRs, 9 of 10 hot issues closed). Focused, self-hosted community; lean scope.
- **GitHub Copilot CLI** — High issue reporting volume (25 updated) but zero PRs in 24h — a possible maintainer bottleneck. Enterprise blockers (org repos #2751, disabled Claude models #4422) remain open.
- **Gemini CLI** — Steady progress with p1-labeled bugs under active retest; "agents calling agents" is a major architectural milestone awaiting merge.
- **OpenAI Codex** — Windows fixes landing (line-ending preservation), but the systemic Computer Use failure cluster and IDE extension issues (vanishing prompts #25928) keep trust fragile.
- **DeepSeek TUI** — Small but engaged community pushing context transparency and fleet-worker semantics; v0.9.6 release prep is the main signal.
- **Kimi Code CLI** — Lowest activity; single feature request (memory) dominates its tracker.

---

## 6. Trend Signals

1. **Multi-agent orchestration is the next plateau.** Expect leader/worker topologies with structured results to become table stakes (Qwen #8718, Gemini #28738, Copilot fleet workflows). Tooling for trajectory observability and subagent identity will follow (#22598, #5287, #8728).
2. **Memory/context continuity is the most monetizable unmet need.** Automatic memory, session portability, and durable archival appear across six of nine communities — the tool that ships reliable cross-session memory first gains a durable moat.
3. **Windows is the battleground for trust.** Installer failures, sandbox errors, line-ending corruption, and IME issues appear in every Windows-heavy tool. Cross-platform reliability is now a differentiator, not a feature.
4. **MCP ecosystems demand tolerance, not strictness.** Optional-endpoint failures killing live connections (Qwen #8784, Copilot #4421) will drive a shift toward graceful degradation and retry semantics in MCP clients.
5. **Safety UX is moving from silent policy to user control.** Deny-by-default approval defaults (DeepSeek #5293), overridable classifiers (Claude #67246), and permission-bypass audits (OpenCode #39931) point to a future where safety decisions are visible, configurable, and auditable.
6. **Context-window honesty is emerging as a UX requirement.** Users with 1M-token models reject silent compaction and unreported fallbacks. Tools must surface exactly what happened to context — before, during, and after compaction.
7. **Autonomous background work is not yet trusted.** Stalls, freezes, silent SIGTERMs, and dropped prompts are the most damaging bug class; reliability of unattended operation is the gating factor for fleet/autopilot adoption.

---

*Digest data for 2026-08-10 from: anthropics/claude-code, openai/codex, google-gemini/gemini-cli, github/copilot-cli, MoonshotAI/kimi-cli, anomalyco/opencode, earendil-works/pi, QwenLM/qwen-code, Hmbown/DeepSeek-TUI.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Source: github.com/anthropics/skills · Data as of 2026-08-10*

## 1. Top Skills Ranking

The most-discussed pull requests split into two clusters: hardening the `skill-creator` evaluation pipeline, and new or improved Skills. Top 8 by discussion volume:

**PR #1298 — skill-creator eval pipeline fix** *(open)*
Repairs `run_eval.py`, which reported `recall=0%` for every skill description (root cause of issue #556, with 10+ independent reproductions). Installs the eval artifact as a real skill, and fixes Windows stream reading, trigger detection, and parallel workers. Restores meaningful signal to the `run_loop.py` / `improve_description.py` optimization loop. Discussion ties directly to the repo's most-reported bug.
[anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

**PR #514 — document-typography skill** *(open)*
New Skill for typographic quality control in AI-generated documents: orphan-word wrap, widow paragraph headers, and numbering misalignment. Addresses a defect class users rarely articulate but encounter in nearly every generated document.
[anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

**PR #538 — pdf skill case-sensitivity fix** *(open)*
Corrects 8 case-mismatched file references (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break the pdf skill on case-sensitive filesystems — representative of the community's "hardening" contributions.
[anthropics/skills PR #538](https://github.com/anthropics/skills/pull/538)

**PR #486 — ODT skill** *(open)*
New Skill for OpenDocument Format: create, fill, read, and convert `.odt`/`.ods` files, plus ODT→HTML parsing. Triggers on "ODT", "ODS", "ODF", "OpenDocument", and "LibreOffice document". Fills the ISO-standard-format gap alongside docx/pdf.
[anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)

**PR #210 — frontend-design skill improvement** *(open)*
Substantial revision of the frontend-design Skill for clarity, actionability, and internal coherence — ensuring every instruction is executable within a single conversation. Represents community investment in Skill quality over quantity.
[anthropics/skills PR #210](https://github.com/anthropics/skills/pull/210)

**PR #83 — skill-quality-analyzer + skill-security-analyzer** *(open)*
Adds two meta-Skills to the example-skills marketplace: quality analysis across structure/documentation/examples, and security analysis. A direct response to the trust-boundary concerns raised in issue #492.
[anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)

**PR #541 — docx tracked-changes w:id fix** *(open)*
Prevents document corruption when adding tracked changes to docx files containing existing bookmarks — `w:id` is a shared ID space across bookmarks, comments, and move ranges in OOXML. High-value reliability fix for the most-used document Skill.
[anthropics/skills PR #541](https://github.com/anthropics/skills/pull/541)

**PR #539 — skill-creator YAML frontmatter validation** *(open)*
Adds pre-parse validation in `quick_validate.py` to catch unquoted `description` fields containing `:`, preventing silent YAML truncation. Part of the same skill-creator hardening wave.
[anthropics/skills PR #539](https://github.com/anthropics/skills/pull/539)

## 2. Community Demand Trends

- **Security & trust boundary (highest urgency)** — Issue #492 (43 comments, 2 👍) exposes that community Skills distributed under the `anthropic/` namespace impersonate official ones, enabling trust-boundary abuse with elevated permissions. It is the most-discussed issue in the repo and directly motivated meta-analysis Skills like PR #83.
  [Issue #492](https://github.com/anthropics/skills/issues/492)

- **Org-wide skill sharing** — Issue #228 (16 comments, 8 👍) requests native shared skill libraries / direct sharing links in Claude.ai; the current download-via-Slack-and-manually-upload workflow is untenable for teams.
  [Issue #228](https://github.com/anthropics/skills/issues/228)

- **Skill toolchain reliability (the broken eval loop)** — Issues #556 (12 comments, 7 👍) and #1169 document `run_eval.py` scoring 0% recall on every query, including literal slash-command invocations. Issue #202 (closed) additionally criticizes skill-creator's educational tone as non-operational.
  [Issue #556](https://github.com/anthropics/skills/issues/556) · [Issue #1169](https://github.com/anthropics/skills/issues/1169)

- **Packaging robustness & duplicate Skills** — Issue #189 (6 comments, 9 👍, highest 👍 in the dataset) reports `document-skills` and `example-skills` installing identical content, duplicating Skills in the context window. Issue #62 (10 comments) documents Skills silently disappearing after local file operations.
  [Issue #189](https://github.com/anthropics/skills/issues/189) · [Issue #62](https://github.com/anthropics/skills/issues/62)

- **Context-window efficiency** — Issue #1487 reports the bundled `claude-api` skill eagerly injecting ~156k tokens in a single tool call, exhausting the context window; Issue #1175 raises combined security/context concerns for SharePoint Online document handling.
  [Issue #1487](https://github.com/anthropics/skills/issues/1487)

- **Platform & protocol expansion** — Issue #29 requests AWS Bedrock support; Issue #16 proposes exposing Skills as MCP servers.
  [Issue #29](https://github.com/anthropics/skills/issues/29) · [Issue #16](https://github.com/anthropics/skills/issues/16)

- **New Skill directions proposed** — compact symbolic agent memory (#1329), agent-governance safety patterns (#412, closed), and a three-gate Reasoning Quality Pipeline with pre-task calibration and adversarial review (#1385).
  [Issue #1329](https://github.com/anthropics/skills/issues/1329) · [Issue #1385](https://github.com/anthropics/skills/issues/1385)

## 3. High-Potential Pending Skills

Open PRs with active discussion that may land soon:

- **document-typography** (#514) — typographic QC for generated documents.
  [PR #514](https://github.com/anthropics/skills/pull/514)
- **ODT / OpenDocument** (#486) — create, fill, and parse ODF files.
  [PR #486](https://github.com/anthropics/skills/pull/486)
- **testing-patterns** (#723) — full-stack testing methodology: Testing Trophy model, unit/React Testing Library patterns, what to test vs. not.
  [PR #723](https://github.com/anthropics/skills/pull/723)
- **self-audit** (#1367) — mechanical output-file verification plus a four-dimension reasoning quality gate before delivery (v1.3.0).
  [PR #1367](https://github.com/anthropics/skills/pull/1367)
- **color-expert** (#1302) — color naming systems (ISCC-NBS, Munsell, RAL…), color-space selection tables (OKLCH/OKLAB), by color expert meodai.
  [PR #1302](https://github.com/anthropics/skills/pull/1302)
- **pyxel** (#525) — retro/pixel-art/8-bit game development via the pyxel-mcp server: write → run_and_capture → inspect → iterate.
  [PR #525](https://github.com/anthropics/skills/pull/525)
- **plan-file-hygiene** (#1479) — lifecycle management for accumulating planning artifacts (addresses #1417).
  [PR #1479](https://github.com/anthropics/skills/pull/1479)
- **skill-quality-analyzer / skill-security-analyzer** (#83) — meta-Skills for evaluating other Skills.
  [PR #83](https://github.com/anthropics/skills/pull/83)

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not a new domain Skill but reliability and trust infrastructure: fixing the skill-creator evaluation pipeline, securing the official distribution namespace, preventing duplicate/context-bloating installs, and enabling safe org-wide sharing.

---

# Claude Code Community Digest — 2026-08-10

## Today's Highlights
No new releases landed in the past 24 hours. Community attention is concentrated on safety-classifier false positives (especially Fable 5 sessions being downgraded to Opus 4.8), a heavily upvoted request for cross-directory conversation resume, and several data-loss edge cases on Desktop/Windows. The PR queue is light, with plugin/skills fixes and documentation/model-reference updates.

## Releases
No releases were published in the last 24 hours.

## Hot Issues
1. **#31413 — UI language localization support**  
   https://github.com/anthropics/claude-code/issues/31413  
   An open enhancement request for UI localization. 13 comments and 8 👍 indicate meaningful community interest, though it has not yet been scheduled.

2. **#67246 — Safety-classifier model switch (Fable 5 → Opus 4.8) fires on benign content and can't be overridden with /model**  
   https://github.com/anthropics/claude-code/issues/67246  
   A serious model-control regression: the safety classifier silently switches the active model mid-session, and users report `/model` cannot override it. 12 comments.

3. **#28745 — Allow resuming conversations from different directories**  
   https://github.com/anthropics/claude-code/issues/28745  
   Very popular enhancement with 76 👍 and 11 comments. Users want to resume conversations even when the original directory was moved, renamed, or deleted.

4. **#72248 — Workflow tool delivers JSON args as string instead of parsed object**  
   https://github.com/anthropics/claude-code/issues/72248  
   Breaks the documented “verbatim” contract for Workflow tool args. Affects scripts relying on structured arguments; 10 comments.

5. **#83913 — Prompt cache invalidated when PreToolUse/PostToolUse additionalContext changes during history rebuild**  
   https://github.com/anthropics/claude-code/issues/83913  
   Adds avoidable cache-write costs on every normal turn. Important for performance-sensitive hook users; 5 comments.

6. **#81306 — Windows: Desktop crash wedged the MSIX package; recovery required manual package removal, destroying local app data**  
   https://github.com/anthropics/claude-code/issues/81306  
   A severe recovery path that deletes user data. 5 comments; likely relevant to Desktop/Windows users.

7. **#85286 — Assistant generates fabricated conversation turns and role markers**  
   https://github.com/anthropics/claude-code/issues/85286  
   Claude Code occasionally “runs past” its turn and fabricates user/system/tool messages. 4 comments; high trust-impact if confirmed.

8. **#66084 — tools/list_changed doesn't refresh the deferred-tool / ToolSearch index in interactive sessions**  
   https://github.com/anthropics/claude-code/issues/66084  
   MCP-related bug that makes newly added tools invisible until restart. 4 comments; still reproducible on recent versions.

9. **#84981 — Background tasks SIGTERMed on an exact 30-minute internal timer**  
   https://github.com/anthropics/claude-code/issues/84981  
   Background Bash tasks are killed at exactly 30-minute intervals with no task completion event. 3 comments; important for long-running automation.

10. **#83760 — A denied tool call was executed anyway (PowerShell tool ran despite "deny")**  
    https://github.com/anthropics/claude-code/issues/83760  
    User denial was ignored and the PowerShell tool still executed. Security-sensitive bug with 2 comments.

## Key PR Progress
Only 5 PRs were updated in the last 24 hours, fewer than the requested 10. All are listed below.

1. **#85409 — security-guidance: update default model refs from Opus 4.7/Sonnet 4.6 to Opus 5/Sonnet 5**  
   https://github.com/anthropics/claude-code/pull/85409  
   Refreshes the `security-guidance` plugin’s README and hook code to current model names. Useful maintenance to avoid outdated defaults.

2. **#85323 — fix(plugin-dev): parse block scalar agent descriptions**  
   https://github.com/anthropics/claude-code/pull/85323  
   Fixes YAML block-scalar parsing in `validate-agent.sh` so multiline `description: |` / `description: >` values are handled correctly.

3. **#85243 — fix(skills): use spec-conformant names in the plugin-dev and hookify skills**  
   https://github.com/anthropics/claude-code/pull/85243  
   Fixes eight bundled skills whose `name:` fields contained spaces/title-casing, bringing them in line with the skill spec.

4. **#17395 — [Plugin] Add `agent-session-commit` plugin to incrementally iterate on `AGENTS.md`**  
   https://github.com/anthropics/claude-code/pull/17395  
   Closed PR, but the idea is notable: a `/session-commit` workflow and Stop hook to keep project instructions updated.

5. **#9262 — docs: enforce task tool and model metadata**  
   https://github.com/anthropics/claude-code/pull/9262  
   Closed documentation PR that clarifies `model` metadata and Task tool usage in commit workflows.

## Feature Request Trends
Across the issue queue, the clearest feature directions are:

- **UI localization / i18n support** — #31413 remains the primary request.
- **Conversation portability** — high demand for resuming sessions independently of original directories (#28745).
- **Better safety-filter controls** — users want visible, overridable classifier behavior instead of silent model downgrades (#67246, #85414, #85415).
- **Session/archive protections** — prevent accidental archiving/deletion of pinned sessions (#62104) and improve retention behavior (#81100).
- **Subagent effort observability** — users want to know whether frontmatter `effort:` is actually applied to background subagents (#85416).

## Developer Pain Points
- **Safety-classifier false positives** are the dominant recurring frustration: benign work is flagged as cyber/security, sessions are halted, or the active model is silently downgraded (#67246, #85375, #85389–#85392, #85414).
- **Data loss / destructive recovery paths** appear in multiple reports: MSIX crash recovery deleting app data (#81306), Desktop retention sweeps removing transcripts (#81100), and pinned sessions being archivable/deletable (#62104).
- **Tool execution trust issues** — a denied tool call still executed (#83760), and Workflow args arrive as strings instead of structured JSON (#72248).
- **Unexpected process lifecycle** — background tasks are SIGTERMed on a fixed 30-minute timer with no documented event (#84981).
- **Cache and hook inconsistencies** — prompt cache invalidation due to `additionalContext` changes (#83913) and `MessageDisplay` hooks being ignored (#83957) create avoidable overhead and confusion.
- **Fabricated conversation turns** (#85286) are a high-impact correctness issue that undermines session reliability if confirmed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## Today's Highlights

No new Codex release shipped in the last 24 hours. The maintainer focus is clearly on Windows reliability: fixes landed for `apply_patch` line-ending preservation ([PR #37757](https://github.com/openai/codex/pull/37757), [PR #37758](https://github.com/openai/codex/pull/37758)) and for a Cursor project path resolution issue ([PR #37747](https://github.com/openai/codex/pull/37747)). Meanwhile, the community is still hitting a systemic Windows Computer Use failure cluster around `EnumWindows`/`0x80070003`, plus IDE extension reliability bugs with long comment threads.

## Releases

No new Codex releases were published in the last 24 hours.

## Hot Issues

- [Issue #4003](https://github.com/openai/codex/issues/4003) — **Patched files have mixed line endings on Windows** (closed; 33 comments, 74 👍). The highest-reaction bug in this batch: `apply_patch` normalized files to LF, creating noisy diffs on CRLF files. Addressed by PRs [#37757](https://github.com/openai/codex/pull/37757) and [#37758](https://github.com/openai/codex/pull/37758).

- [Issue #25928](https://github.com/openai/codex/issues/25928) — **Submitted prompts randomly disappear before entering the queue** (25 comments, 17 👍). A serious UX failure in the Cursor/VS Code extension on Windows: users lose submitted input before the model ever sees it.

- [Issue #37458](https://github.com/openai/codex/issues/37458) — **Codex extension fails to start: "The extension couldn't load its resources"** (24 comments). Blocks the extension entirely for affected Windows/VS Code users.

- [Issue #11011](https://github.com/openai/codex/issues/11011) — **Switching between threads is very slow** (22 comments, 19 👍). A desktop app regression that makes basic session navigation feel unresponsive.

- [Issue #37043](https://github.com/openai/codex/issues/37043) — **Windows Computer Use fails at EnumWindows with 0x80070003** (18 comments, 4 👍). One of several reports of the same root cause; duplicates include [#37383](https://github.com/openai/codex/issues/37383), [#37595](https://github.com/openai/codex/issues/37595), and [#37734](https://github.com/openai/codex/issues/37734).

- [Issue #15299](https://github.com/openai/codex/issues/15299) — **Support inbound MCP notifications routed into an active Codex CLI session** (15 comments, 14 👍). A strongly requested extension point: external events/channels should be able to push messages into a running session, not just receive tool calls.

- [Issue #37180](https://github.com/openai/codex/issues/37180) — **Windows Computer Use approval prompt never appears; `launch_app` fails** (11 comments, 6 👍). The approval flow is broken, which is both a reliability and safety concern.

- [Issue #5609](https://github.com/openai/codex/issues/5609) — **Sync chats/conversation history between ChatGPT website, Codex in VS Code, and other surfaces** (6 comments, 63 👍). The highest-upvoted feature request in this batch; users want conversation continuity across web, IDE, and desktop.

- [Issue #33282](https://github.com/openai/codex/issues/33282) — **Codex Desktop `create_thread` does not inherit auto-approval mode for worktree tasks** (7 comments, 3 👍). Permission inheritance is inconsistent when spawning worktree-based child sessions.

- [Issue #35490](https://github.com/openai/codex/issues/35490) — **Realtime V3 sideband blocked by Cloudflare challenge → 403** (6 comments, 2 👍). A network/transport regression where the client dials the ChatGPT backend sideband and is blocked before establishing a session; cross-linked to [#35094](https://github.com/openai/codex/issues/35094).

## Key PR Progress

All 8 PRs updated in the last 24 hours:

- [PR #37758](https://github.com/openai/codex/pull/37758) — **Add a feature flag to preserve apply_patch line endings**. Adds `apply_patch_preserve_line_endings`, disabled by default, applied consistently to built-in patch handling.

- [PR #37757](https://github.com/openai/codex/pull/37757) — **Add a line-ending preservation mode to `apply_patch`**. Implements the opt-in `PreserveLineEndings` update mode so CRLF/CR/mixed endings are not normalized to LF.

- [PR #37747](https://github.com/openai/codex/pull/37747) — **Bound Cursor project path resolution**. Avoids recursively scanning large directory trees by probing a bounded set of path candidates based on common filename separators.

- [PR #31817](https://github.com/openai/codex/pull/31817) — **Update models.json**. Automated model metadata refresh; still open.

- [PR #37745](https://github.com/openai/codex/pull/37745) — **Add gRPC TCP transport to the code-mode host**. Allows `grpc://IP:PORT` via `--listen`, and prints the actual bound HTTP endpoint when using port `0`.

- [PR #37723](https://github.com/openai/codex/pull/37723) — **Report I/O subtypes for session config import failures**. Adds stable `std::io::ErrorKind` categories such as `invalid_data`, `not_found`, and `permission_denied` to failure subtypes.

- [PR #37709](https://github.com/openai/codex/pull/37709) — **Keep wrapped composer whitespace with following text**. Fixes a TUI composer wrapping bug where overflow whitespace landed on a separate blank row.

- [PR #37654](https://github.com/openai/codex/pull/37654) — **Advertise environment config read support**. Adds `environmentConfigRead` to exec-server environment capabilities, defaulting to `false` for legacy executors.

## Feature Request Trends

- **MCP-driven extensibility**: Users want inbound MCP notifications to feed into active CLI sessions, enabling external automation and channel events to drive Codex ([Issue #15299](https://github.com/openai/codex/issues/15299)).

- **Conversation sync across surfaces**: Strong demand for chat history continuity between ChatGPT website, Codex in VS Code, desktop app, and Codespaces ([Issue #5609](https://github.com/openai/codex/issues/5609)).

- **Enterprise model alias mapping**: Requests for first-class `model_aliases` support so gateway model names can map to canonical Codex model metadata ([Issue #21594](https://github.com/openai/codex/issues/21594)).

- **Better multi-agent steering**: Users want child subagent threads to be correctable/steerable rather than read-only after creation ([Issue #33885](https://github.com/openai/codex/issues/33885)).

## Developer Pain Points

- **Windows Computer Use is the biggest recurring failure cluster**: `EnumWindows`/`0x80070003` appears across multiple reports ([#37043](https://github.com/openai/codex/issues/37043), [#37383](https://github.com/openai/codex/issues/37383), [#37595](https://github.com/openai/codex/issues/37595), [#37734](https://github.com/openai/codex/issues/37734)), plus broken approval prompts ([#37180](https://github.com/openai/codex/issues/37180)) and desktop crash loops ([#37752](https://github.com/openai/codex/issues/37752)).

- **Windows sandbox/execution is fragile**: `CreateProcessAsUserW` error 5 ([#26803](https://github.com/openai/codex/issues/26803)), WSL integrated terminal failures ([#37104](https://github.com/openai/codex/issues/37104)), and visible Windows Terminal windows appearing from `codex-code-mode-host` ([#37599](https://github.com/openai/codex/issues/37599)).

- **IDE extension reliability is hurting trust**: submitted prompts vanishing before queueing ([#25928](https://github.com/openai/codex/issues/25928)) and extension resource-load failures ([#37458](https://github.com/openai/codex/issues/37458)).

- **Desktop app performance and stability**: slow thread switching ([#11011](https://github.com/openai/codex/issues/11011)), zombie subprocess leaks ([#37311](https://github.com/openai/codex/issues/37311)), macOS crashes ([#30928](https://github.com/openai/codex/issues/30928)), and intermittent deletion of `~/.codex/skills/.system` ([#19265](https://github.com/openai/codex/issues/19265)).

- **CLI/TUI and transport regressions**: WSL CLI startup stalls ([#22176](https://github.com/openai/codex/issues/22176)), full terminal scrollback replay ([#37759](https://github.com/openai/codex/issues/37759)), reuse of dead WebSockets after network loss ([#33163](https://github.com/openai/codex/issues/33163)), and unbounded goal auto-continuation loops ([#34248](https://github.com/openai/codex/issues/34248)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-10

## Today's Highlights

A quiet day on the release front with only the automated nightly build (v0.56.0-nightly.20260810) shipping, but the PR queue shows meaningful progress on agent architecture: a long-awaited "agents calling agents" change is open, and an ACP session-poisoning fix addresses a subtle resume bug. Meanwhile, the issue tracker remains dominated by agent reliability complaints — subagent termination misreporting, generalist hangs, and shell execution stalls continue to draw community attention and 👍 votes.

## Releases

- **[v0.56.0-nightly.20260810.gcf22ac7e8](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260809.gcf22ac7e8...v0.56.0-nightly.20260810.gcf22ac7e8)** — Automated nightly release; no user-facing changelog beyond the version bump.

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** — The `codebase_investigator` subagent reports `status: "success"` with termination reason `GOAL` even when it hit `MAX_TURNS` before doing any analysis. This misleads both users and parent agents; 12 comments and a p1 label suggest maintainers are actively retesting.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — The most-upvoted open issue (8 👍). Simple operations like folder creation hang indefinitely when the CLI defers to the generalist agent. Users report waiting up to an hour; a workaround exists (instructing the model not to delegate), but the core defect persists.

3. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** — Simple CLI commands that cannot prompt for input still leave the shell in a hanging "awaiting user input" state. High frustration signal with 3 👍; maintainers have marked it p1/effort-medium.

4. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — Auto Memory only marks a session processed when the extraction agent reads it; low-signal sessions are re-surfaced repeatedly, wasting tokens and causing infinite retry loops. Part of a broader memory-system bug wave from SandyTao520.

5. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — A security-adjacent concern: transcript content is sent to the extraction model *before* prompt-based redaction, and the service may log existing skill content. Community interest in stronger privacy guarantees for the memory pipeline.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — A recurring behavioral complaint: custom skills and sub-agents are only invoked when explicitly instructed, even when their descriptions match the current task. This ties into several other "agent self-awareness" requests.

7. **[#24246 — Gemini CLI encounters 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** — With many MCP servers or skills enabled, the CLI exceeds model tool-count limits and fails hard. The expectation is smarter tool scoping based on the task, which is a common enterprise-scale pain point.

8. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** — The model occasionally reaches for `git reset` or `--force` flags when safer alternatives exist. Users want guardrails for destructive operations, especially around complex git workflows and database maintenance.

9. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — The browser agent terminates with `GOAL` but fails under Wayland sessions, restricting Linux users on modern display servers. A p1 browser-agent issue with a pending retest.

10. **[#20079 — Symlinked agent files are not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** — `~/.gemini/agents/filename.md` symlinks are silently ignored, breaking dotfile-managed workflows. Small but high-friction for users syncing configs across machines.

## Key PR Progress

1. **[#28744 — fix(acp): don't start a fresh chat before resuming, it poisons the session file](https://github.com/google-gemini/gemini-cli/pull/28744)** — Closes #28693. `loadSession` was calling `initialize()` before `resumeChat()`, creating a fresh chat that corrupted session data. A critical correctness fix for ACP session resumption.

2. **[#28738 — Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738)** — Implements subagent-to-subagent delegation (including recursion) via `tools:` frontmatter, fixing #22092. This is a major architectural enabler for hierarchical agent workflows, though the size/l label suggests a substantial review.

3. **[#28743 — fix(core): preserve resolved model config systemInstruction and tools](https://github.com/google-gemini/gemini-cli/pull/28743)** — Fixes an overwrite bug where model-specific `systemInstruction`/`tools` from `getResolvedConfig()` were clobbered by chat-level values in `sendMessageStream()`.

4. **[#26540 — fix(core): resolve policy engine bugs affecting tool approvals](https://github.com/google-gemini/gemini-cli/pull/26540)** — Fixes a regex null-byte issue in `buildParamArgsPattern` and other policy-engine defects that caused spurious approval prompts in `YOLO`/`AUTO_EDIT` modes. Maintainer-only; high relevance for permissive-mode users.

5. **[#28742 — fix(caretaker-agent): use spec-valid names for two triage-worker skills](https://github.com/google-gemini/gemini-cli/pull/28742)** — Renames `code_explorer` and `spec_generator` skills to comply with the Agent Skills name specification (underscores are invalid). Small but important for spec compliance.

6. **[#28758 — chore/release: bump version to 0.56.0-nightly.20260810.gcf22ac7e8](https://github.com/google-gemini/gemini-cli/pull/28758)** — Automated nightly version bump by the release robot.

7. **[#28746 — chore(deps): bump the npm-dependencies group with 74 updates](https://github.com/google-gemini/gemini-cli/pull/28746)** — A large consolidated dependency bump (size/xl) covering `simple-git`, `@modelcontextprotocol/sdk`, and 72 other packages. Closed; expect follow-up releases.

8. **[#28752 — chore(deps): bump puppeteer-core from 24.0.0 to 25.4.0](https://github.com/google-gemini/gemini-cli/pull/28752)** — Major-version bump for the browser automation layer; relevant to the browser-agent stability issues tracked in #21983 and #22232.

9. **[#28749 — chore(deps): bump @google/genai from 1.30.0 to 2.15.0](https://github.com/google-gemini/gemini-cli/pull/28749)** — Crosses the 2.x line for the GenAI SDK. Significant jump; worth watching for API-compat regressions in nightly builds.

10. **[#28619 — Update .gitignore to ignore .env and .ai files; add unit tests](https://github.com/google-gemini/gemini-cli/pull/28619)** — Closed; expands default ignores for environment files and adds test coverage. Simple but reduces accidental secret leakage.

## Feature Request Trends

- **Agent-to-agent delegation & recursion** — After months of community requests, PR #28738 finally enables hierarchical subagent composition. Expect follow-up issues around scoping, permissions, and trajectory visibility.
- **AST-aware codebase tooling** — The EPIC pair #22745/#22746 pushes for AST-aware file reads, method-bound extraction, and codebase mapping (via tools like `tilth`/`glyph`) to reduce token noise and misaligned reads.
- **Subagent observability** — Requests like #22598 (share subagent trajectories via `/chat share`) and #21763 (bug reports lacking subagent context) reflect a growing need to debug multi-agent runs.
- **Auto Memory reliability & privacy** — The cluster of issues from SandyTao520 (#26516, #26522, #26523, #26525) focuses on deterministic redaction, quarantining invalid patches, and stopping retry loops — signaling the memory system is maturing but needs hardening.
- **Browser agent resilience** — Automatic session takeover, lock recovery (#22232), and Wayland support (#21983) are the top browser-agent asks.

## Developer Pain Points

- **Hangs and stalls are the #1 frustration** — Generalist agent hangs (#21409), shell "Waiting input" after completion (#25166), and interactive-prompt deadlocks (#22465) collectively erode trust in autonomous mode.
- **Misleading termination signals** — Subagents reporting `GOAL` success on `MAX_TURNS` interruption (#22323) makes failure diagnosis nearly impossible.
- **Configuration not honored** — A recurring theme: `settings.json` overrides ignored by the browser agent (#22267), symlinked agents dropped (#20079), and subagents running despite being disabled (#22093).
- **Models under-utilize user configuration** — Skills and sub-agents are ignored unless explicitly prompted (#21968), negating the value of custom setup.
- **Workspace pollution** — The model creating tmp scripts in random directories (#23571) adds cleanup overhead and can dirty commits.
- **Scale ceilings** — The >128-tool 400 error (#24246) punishes power users with many MCP servers, and there is no graceful degradation.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-10

## Today's Highlights

No new releases or pull requests landed in the last 24 hours, but issue activity remained high with 25 issues updated. The most impactful reports focus on MCP reliability, enterprise/org model availability, and concurrency bugs in subagent and parallel tool execution. A newly filed issue describing a silently dropped kickoff prompt (#4423) is particularly concerning because sessions can appear provisioned while never receiving the user’s initial message.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

1. [**#4423 — Kickoff prompt silently dropped when a new session is created**](https://github.com/github/copilot-cli/issues/4423)  
   The worktree, branch, and CLI session are provisioned, but the initial prompt never reaches the agent, leaving the session idle forever. No comments yet, but this is a high-severity silent failure for automation and desktop-app workflows.

2. [**#2751 — `/remote` fails on org repos: “could not resolve repository”**](https://github.com/github/copilot-cli/issues/2751)  
   Copilot CLI v1.0.28 cannot start a remote session in organization-owned repositories. With 13 👍 and 8 comments, this remains a common enterprise blocker.

3. [**#1857 — Allow users to cancel/remove enqueued messages before execution**](https://github.com/github/copilot-cli/issues/1857)  
   Users want the ability to cancel queued `Ctrl+Q` / `Ctrl+Enter` messages while the agent is busy. The 26 👍 reaction makes this the most community-supported feature request in this batch.

4. [**#4306 — Subtasks freeze and stop responding**](https://github.com/github/copilot-cli/issues/4306)  
   In autopilot/fleet-style workflows, subagents can freeze mid-session and stop producing output. This threatens the reliability of autonomous multi-agent usage.

5. [**#4422 — All Claude models disabled under CLI model selection**](https://github.com/github/copilot-cli/issues/4422)  
   Enterprise personal accounts can no longer use Claude models even though they appear enabled in GitHub Copilot settings. The user reports the issue persists after rolling back CLI versions.

6. [**#4416 — Parallel explore subagent fan-out dies to per-model 429s**](https://github.com/github/copilot-cli/issues/4416)  
   Parallel `explore` agents all default to the same lightweight model bucket, causing concentrated rate limits. There is no backoff or automatic model switch despite `eligibleForAutoSwitch`.

7. [**#4420 — Parallel tool calling non-deterministic response order results in confused bots**](https://github.com/github/copilot-cli/issues/4420)  
   The harness loses request/response correlation when multiple parallel tool calls are in flight, leading to confusion in agent behavior. This is a core correctness issue for agentic workflows.

8. [**#4419 — Managed-settings interim fail-closed drops user MCP servers**](https://github.com/github/copilot-cli/issues/4419)  
   While managed settings are being resolved, the CLI installs an empty MCP allow list and rejects user-configured MCP servers. Even accounts with no managed policy are affected.

9. [**#4421 — MCP initialize handshake has a fixed 60s budget with no retry**](https://github.com/github/copilot-cli/issues/4421)  
   npx-launched stdio MCP servers fail roughly 29% of sessions because initialization exceeds the hard-coded 60-second timeout. Failed servers are never respawned during the session.

10. [**#4414 — BYOK custom providers return local 403 before requests reach provider**](https://github.com/github/copilot-cli/issues/4414)  
    Custom OpenAI- and Anthropic-compatible providers configured in the Copilot App fail with a local `Authorization error`, and the request never reaches the provider. The suggested `/login` action does not resolve it.

## Key PR Progress

No pull requests were updated in the last 24 hours.

## Feature Request Trends

- **More control over input and session state**  
  Issues like #1857 (cancel queued messages), #4418 (configurable HUD/context state), and #4417 (built-in GUI prompt composer) show demand for better visibility and control over CLI sessions.

- **Expanded remote-session compatibility**  
  #2922 asks for `/remote` support in non-GitHub repositories such as GitLab and Bitbucket. Enterprise users also want clearer handling when remote control is disabled (#4409).

- **Model and provider flexibility**  
  Users want more control over model selection, including Anthropic `cache_control` breakpoints (#4256), a configurable auto-mode model strength range (#4412), and proper inclusion of org-enabled models in the catalogue (#4390).

- **Localization and accessibility**  
  #4407 requests Chinese (zh-CN) UI localization for the Copilot desktop app, indicating growing demand for non-English user interfaces.

## Developer Pain Points

- **MCP integration remains the most fragile area**  
  Reports include FastMCP `server/discover` incompatibility (#4370), OAuth 3LO failure (#4371), broken github-mcp-server authentication on Enterprise (#4408), no-retry initialization timeouts (#4421), and transient managed-settings deny-all behavior (#4419).

- **Model availability and authentication blockers**  
  Several users report being blocked before code execution even starts: Claude models disabled for Enterprise accounts (#4422), org-enabled models missing (#4390), and BYOK providers returning local 403 errors (#4414).

- **Concurrency and reliability under parallel workloads**  
  Subagents freezing (#4306), non-deterministic parallel tool responses (#4420), and per-model rate-limit failures during explore fan-out (#4416) erode trust in autonomous agent workflows.

- **Silent failures and opaque state**  
  The dropped kickoff prompt (#4423), warm `session.resume` metadata corruption (#4413), and missing indicators for disabled remote control (#4409) all share a common theme: failures are not surfaced clearly to users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI — Community Digest (2026-08-10)

## Today's Highlights
A quiet release day with no new versions, but two issues and one PR saw renewed activity. The long-running **Memory System** feature request (#1283) continues to accumulate community support, while a newly reported **ACP streaming hang bug** (#2598) highlights a serious reliability gap in 0.34.0. Meanwhile, PR #739 — fixing Google GenAI/MCP tool parameter compatibility — received a fresh update after months of dormancy.

## Releases
No new releases in the last 24 hours.

## Hot Issues
Only 2 issues were updated in the last 24h. Both are covered below.

---

### 1. Memory System — Persistent Context Across Sessions
**#1283** | [MoonshotAI/kimi-cli#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **Author:** CatKang | **Created:** 2026-02-27 | **Updated:** 2026-08-09 | **Comments:** 27

**Why it matters:** This is the strongest signal yet that users want Kimi Code CLI to behave more like a true coding agent. The request covers both *automatic memory* (AI-managed project notes) and *manual memory* (user-defined persistent instructions), spanning project patterns and preferences across sessions.

**Community reaction:** With 27 comments over ~5 months, this issue has become a touchstone for the "context continuity" problem. No 👍 reactions recorded, but sustained comment activity suggests an engaged, opinionated thread — likely discussing memory scoping, privacy, and storage tradeoffs.

---

### 2. ACP/Print Streaming Response Hangs Silently — No Idle Timeout, Partial Data Lost
**#2598** | [MoonshotAI/kimi-cli#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)
- **Author:** ai-agent-workbench | **Created:** 2026-08-09 | **Updated:** 2026-08-09 | **Comments:** 0

**Why it matters:** A critical reliability bug in `kimi acp` mode (0.34.0). After all content deltas arrive, the connection hangs waiting for the terminal `[DONE]` frame — with no error, no idle timeout, and no config option to bound the wait. The failure is compounded by silent state corruption:

- Sending the next message **silently replaces the hung turn**
- The already-streamed reply is **never written to `wire.jsonl`** (missing `content.part` / `usage.record`)
- The 0.31.1 fix only covered the Esc (interrupt) scenario

**Community reaction:** Newly filed (0 comments), but this touches exactly the kind of session-trace reliability that agentic workflows depend on — expect quick traction from automation users.

---

## Key PR Progress
Only 1 PR was updated in the last 24h. Covered below.

### 1. fix(kosong): Strip JSON Schema Metadata from Google GenAI Tool Parameters
**#739** | [MoonshotAI/kimi-cli#739](https://github.com/MoonshotAI/kimi-cli/pull/739)
- **Author:** xiaoju111a | **Created:** 2026-01-28 | **Updated:** 2026-08-09 | **Resolves:** #734

**What it does:** Fixes a compatibility break between the Google GenAI provider and MCP tools emitting standard JSON Schema metadata fields. Tools like Exa MCP fail provider-side validation because the Google API rejects these extra metadata fields.

**Why it matters:** This is a cross-provider MCP interop fix. After nearly 7 months, the PR is still open (comments field not surfaced in data), suggesting either maintainer bandwidth limits or a lingering design question about where schema normalization should live (provider adapter vs. core tooling layer).

---

## Feature Request Trends
Given the limited 24h window, the dominant signal is:

- **Persistent Memory / Context Continuity (#1283):** Automatic and manual memory that survives session boundaries — project patterns, user preferences, and reusable context. This mirrors the broader industry trend (2026's "agent memory" race) and remains the single most-discussed open feature request in the tracker.

Secondary (implied from #2598 and #739):

- **Session reliability instrumentation:** users increasingly want observability into what is written/not written to session traces (`wire.jsonl`)
- **Bridge MCP ecosystem gaps:** provider-specific tool schema normalization (Google GenAI) continues to be an integration pain point

## Developer Pain Points

- **Streaming without safety rails:** The #2598 report shows the CLI can hang indefinitely post-stream with no idle timeout. The "next message silently kills the previous turn" behavior destroys trace integrity and is a data-loss event for agent tooling users.
- **Incomplete fix coverage:** 0.31.1 addressed Esc-interrupt handling, but the underlying hang condition persists in other paths — a recurring pattern where fixes are reactive and scenario-scoped rather than systemic.
- **MCP + cloud provider friction:** MCP tools validated fine locally but fail when routed through provider APIs (Google GenAI) that reject standard JSON Schema metadata — forcing users to work around validation errors outside their control.
- **Feature osmosis:** The Memory System request (#1283) has been open for ~5 months without visible progress — from the community's perspective, a high-demand feature is stuck in limbo.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-08-10

### Today's Highlights
No new releases were published in the last 24 hours. The most active discussion remains split between two long-running reliability threads — memory issues and clipboard breakage — while a tightly related cluster of OpenCode Go bugs shows `deepseek-v4-flash` requests failing because the gateway forwards the model name with a leading space. On the PR side, contributors are landing session-level fixes around tool-calling capability detection, overflow compaction loops, and notable renderer performance improvements.

### Hot Issues

- [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) — Central tracking issue for scattered memory problems. Maintainers are asking for heap snapshots and explicitly discouraging LLM-suggested fixes. 124 comments and 96 👍 make this the most active reliability thread.
- [#4283 Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283) — Users report copied response text not reaching the clipboard across multiple versions. With 122 comments and 110 👍, this remains one of the most impactful UX bugs.
- [#7602 [FEATURE]: Native Model Fallback / Failover Support](https://github.com/anomalyco/opencode/issues/7602) — Requests fallback between different model IDs, not just same-model provider fallback. 107 👍 show strong community demand for agent resilience during rate limits/errors.
- [#785 Is there a way to disable streaming mode?](https://github.com/anomalyco/opencode/issues/785) — Some proxy providers do not support streaming and fail outright. 29 comments and 38 👍 indicate this is a common integration blocker.
- [#24649 OpenCode Go: clarify which models are self-hosted vs. proxied through third-party providers](https://github.com/anomalyco/opencode/issues/24649) — Users want transparency about OpenCode Go model infrastructure and routing. 18 comments and 32 👍.
- [#34743 opencode ACP from Xcode 27 beta 2 uses default model big-pickle ignoring opencode.json or model selected in TUI](https://github.com/anomalyco/opencode/issues/34743) — The Xcode ACP integration ignores configured models and uses `big-pickle` by default. 15 comments; a new Apple ecosystem pain point.
- [#13715 Permission asks from nested subagent sessions silently hang](https://github.com/anomalyco/opencode/issues/13715) — Subagent-spawned permission prompts are emitted but never rendered, causing the TUI to hang forever. 11 comments and 24 👍.
- [#39838 DeepSeek V4 Flash has suddenly stopped working](https://github.com/anomalyco/opencode/issues/39838) — Model access failed without a clear version or reproduction path. 9 comments; highlights provider-status fragility.
- [#30221 [BUG] "terminated" error](https://github.com/anomalyco/opencode/issues/30221) — All OpenCode Go sessions consistently fail with `UnknownError: terminated`, while direct API endpoints work. 9 comments; a serious subscription reliability concern.
- [#27361 [BUG] Model `options` (reasoning/thinking) not forwarded to API for `@ai-sdk/openai-compatible` providers in headless mode](https://github.com/anomalyco/opencode/issues/27361) — `reasoning.effort` and similar model options are silently stripped in `opencode run --format json`. 6 comments; blocks advanced reasoning in CI/headless workflows.

### Key PR Progress

- [#41463 fix(session): omit tool definitions for models that cannot call tools](https://github.com/anomalyco/opencode/pull/41463) — Fixes `capabilities.toolcall` being read but never applied, so tools are now correctly omitted for non-tool-calling models.
- [#38067 fix(session): edge-trigger build-switch reminder instead of scanning full session history](https://github.com/anomalyco/opencode/pull/38067) — Replaces full-history scanning with an edge-triggered reminder injection, reducing noisy or incorrect plan/build reminders.
- [#35976 fix(opencode): add --dir option to web/serve; use directory as worktree](https://github.com/anomalyco/opencode/pull/35976) — Adds `--dir` support to `opencode web`/`serve` and addresses multiple related root causes around workspace handling.
- [#37584 fix(session): bound consecutive overflow compaction cycles in the prompt loop](https://github.com/anomalyco/opencode/pull/37584) — Prevents infinite retry loops when providers reject context-overflow turns.
- [#40427 [beta] some experimental perf improvements](https://github.com/anomalyco/opencode/pull/40427) — Experimental renderer performance work: initial renderer entry memory drops from 7.45 MB to 1.82 MB (-75.5%) in benchmarks.
- [#39358 [contributor] feat(session): add durable session archival](https://github.com/anomalyco/opencode/pull/39358) — Adds first-class, idempotent session archiving to V2 with an archived timestamp, separate from deletion.
- [#41452 fix(core): align Copilot response continuation](https://github.com/anomalyco/opencode/pull/41452) — Aligns stateless Copilot response continuation with the official VS Code Copilot client and preserves reasoning/tool-call state.
- [#40997 refactor(core): replace integration prompts with forms](https://github.com/anomalyco/opencode/pull/40997) — Replaces integration-specific prompts with shared form definitions and moves OAuth/key validation into Core for Copilot, Azure, and Cloudflare.
- [#41450 fix(core): derive fallback message for empty AI SDK provider errors](https://github.com/anomalyco/opencode/pull/41450) — Improves diagnostics when AI SDK errors have empty messages, surfacing status codes, response bodies, and rate-limit headers.
- [#41455 fix(tui): include attachment path in model context](https://github.com/anomalyco/opencode/pull/41455) — Preserves local attachment paths as text before binary image parts, helping providers that reject binary image inputs.

### Feature Request Trends

- **Provider resilience and failover**: Users want native fallback across different model IDs ([#7602](https://github.com/anomalyco/opencode/issues/7602)), plus persistent daemon sessions with memory recall to avoid re-establishing context ([#41453](https://github.com/anomalyco/opencode/issues/41453)).
- **Session UX control**: Strong interest in `/undo` and fork points at question answers ([#25555](https://github.com/anomalyco/opencode/issues/25555)), a `/clear` command instead of `/new` ([#38392](https://github.com/anomalyco/opencode/issues/38392)), and configurable code-concealment defaults ([#35093](https://github.com/anomalyco/opencode/issues/35093)).
- **Headless/API parity**: Requests for a streaming toggle ([#785](https://github.com/anomalyco/opencode/issues/785)), forwarding reasoning options in headless mode ([#27361](https://github.com/anomalyco/opencode/issues/27361)), and clearer OpenCode Go model routing ([#24649](https://github.com/anomalyco/opencode/issues/24649)).
- **Integration control**: The Xcode ACP integration should respect the configured model and local provider settings ([#34743](https://github.com/anomalyco/opencode/issues/34743)).

### Developer Pain Points

- **Memory and stability**: Long-standing memory complaints are still centralized in [#20695](https://github.com/anomalyco/opencode/issues/20695); also recurring reports of blank-screen TUI freezes ([#41284](https://github.com/anomalyco/opencode/issues/41284)) and Windows hangs unless run as Administrator ([#41436](https://github.com/anomalyco/opencode/issues/41436)).
- **Provider/API friction**: Unsupported streaming ([#785](https://github.com/anomalyco/opencode/issues/785)), silently dropped reasoning options ([#27361](https://github.com/anomalyco/opencode/issues/27361), [#41294](https://github.com/anomalyco/opencode/issues/41294)), OpenCode Go gateway leading-space model-name bugs ([#41300](https://github.com/anomalyco/opencode/issues/41300), [#41306](https://github.com/anomalyco/opencode/issues/41306), [#41314](https://github.com/anomalyco/opencode/issues/41314)), sudden DeepSeek V4 Flash failures ([#39838](https://github.com/anomalyco/opencode/issues/39838)), and "terminated" errors on Go subscriptions ([#30221](https://github.com/anomalyco/opencode/issues/30221)).
- **Permissions/security**: Nested subagent permission prompts hang silently ([#13715](https://github.com/anomalyco/opencode/issues/13715)), and bash permission can be bypassed using `--` ([#39931](https://github.com/anomalyco/opencode/issues/39931)).
- **Copy/paste instability**: Clipboard selection/copy is broken in the TUI ([#4283](https://github.com/anomalyco/opencode/issues/4283)) and copy/paste is nonfunctional in the VS Code extension on macOS ([#39588](https://github.com/anomalyco/opencode/issues/39588)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-10

## Today's Highlights

The Pi project saw concentrated activity around TUI stability and provider reliability. A long-standing llama.cpp default-model race condition was fixed via model catalog caching (PR #7072), while GitHub Copilot login 429 failures were addressed by two complementary PRs that serialize policy-enablement requests. A wave of freshly filed bug reports flagged renderer crashes on oversized lines, EPIPE crashes in desktop-host scenarios, and multiple scroll/viewport jump issues in the TUI.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6922 — Default model cannot be a llama.cpp model](https://github.com/earendil-works/pi/issues/6922)** — CLOSED. With `defaultProvider: "llama.cpp"`, Pi showed "No models available" on startup and exited. The most-discussed issue in the window (10 comments, 14 👍), root-caused to a race between startup and async model refresh.

2. **[#7730 — High CPU usage on Mac OS with long session](https://github.com/earendil-works/pi/issues/7730)** — OPEN. Users report 50–110% CPU with 600–800MB memory, seemingly correlated with session length/context size. Still open with 6 👍, signaling a real performance concern for long-running sessions.

3. **[#6948 — Built-in llama.cpp provider: defaultProvider/defaultModel not applied at startup](https://github.com/earendil-works/pi/issues/6948)** — CLOSED. The model appears in `/model` after startup, but sessions don't start with it — a race condition with async model refresh, now fixed by PR #7072.

4. **[#7323 — `pi update --models` fails the entire refresh on a transient catalog request stall](https://github.com/earendil-works/pi/issues/7323)** — CLOSED. A single 15-second HTTPS timeout against pi.dev fails the whole model catalog refresh; retries succeed, but Pi only makes one attempt.

5. **[#7720 — Allow disabling select to copy in fullscreen TUI mode](https://github.com/earendil-works/pi/issues/7720)** — OPEN. The new TUI mode copies mouse-selected text to the clipboard by default; terminal power-users want a setting to disable it. Addressed by PR #7866.

6. **[#7869 — ai21 api broken](https://github.com/earendil-works/pi/issues/7869)** — CLOSED. AI21 retired their API in favor of the AI21 Gateway, returning HTTP 410. Pi needs an endpoint update or migration path.

7. **[#7868 — Renderer hard-crashes when any rendered line exceeds terminal width](https://github.com/earendil-works/pi/issues/7868)** — CLOSED. A single over-wide line aborts the entire agent session instead of truncating — reported as killing real sessions mid-work on v0.84.1.

8. **[#7864 — ExtensionContext.exec timeout never force-kills a SIGTERM-ignoring child](https://github.com/earendil-works/pi/issues/7864)** — CLOSED. Node sets `proc.killed` when a signal is *sent*, not when the process exits, so a SIGTERM-ignoring child leaves the `pi.exec()` promise hanging forever.

9. **[#7850 — GitHub Copilot login fails with 429 for organizations with many models](https://github.com/earendil-works/pi/issues/7850)** — CLOSED. Device authorization succeeds, then policy-enablement requests for 20+ models fire concurrently and trip GitHub's rate limit. Fixed by PRs #7851 and #7844.

10. **[#7848 — Auto-compaction stops an active task instead of resuming it](https://github.com/earendil-works/pi/issues/7848)** — CLOSED. When context limits trigger auto-compaction mid-task, Pi stops and waits for user input instead of continuing the unfinished work.

## Key PR Progress

1. **[#7072 — fix(coding-agent): cache llama.cpp model catalog](https://github.com/earendil-works/pi/pull/7072)** — Fixes #6948 by caching the llama.cpp model catalog, eliminating the startup race that prevented `defaultProvider`/`defaultModel` from being applied.

2. **[#7866 — feat(tui): add copyOnSelect option to TuiAltScreen](https://github.com/earendil-works/pi/pull/7866)** — Adds `copyOnSelect?: boolean` (default `true`) so users can disable automatic copy-to-clipboard when mouse-selecting in fullscreen TUI mode. Addresses #7720.

3. **[#7865 — fix(tui): handle tui.select.pageUp/pageDown in base SelectList and model-selector](https://github.com/earendil-works/pi/pull/7865)** — Adds missing Page Up/Page Down keybinding handling to the base SelectList component, fixing navigation across all selectors.

4. **[#7344 — feat(protocol): add remote session wire protocol](https://github.com/earendil-works/pi/pull/7344)** — Introduces a transport-neutral `@earendil-works/pi-protocol` package with validated remote-session commands, events, snapshots, bounded CBOR encoding, and length-prefixed framing.

5. **[#7858 — fix(coding-agent): route extension commands regardless of expandPromptTemplates](https://github.com/earendil-works/pi/pull/7858)** — Fixes #7859: `pi.sendUserMessage()` now routes extension commands even with `expandPromptTemplates: false`, making the documented self-reload extension pattern work.

6. **[#7857 — feat(agent): expose `expandPromptTemplates` in `sendUserMessage`](https://github.com/earendil-works/pi/pull/7857)** — OPEN. Complementary to #7858; lets extension authors explicitly opt into template expansion, useful for projects like toilet-pi.

7. **[#7856 — fix(ai): repair JSON-serialized structured tool arguments during validation](https://github.com/earendil-works/pi/pull/7856)** — Fixes double-serialized nested tool arguments (JSON object/array passed as a string), which previously hard-failed object-typed parameter validation instead of recovering.

8. **[#7851 — fix(provider): enable GitHub Copilot model policies sequentially](https://github.com/earendil-works/pi/pull/7851)** — Serializes Copilot policy-enablement requests after device authorization, preventing HTTP 429 rate-limit failures for orgs with many models.

9. **[#7844 — Prevent bulk policy updates during login](https://github.com/earendil-works/pi/pull/7844)** — Removes concurrent model enabling from login entirely; models can still be enabled explicitly through Copilot Chat. Complements #7851.

10. **[#7872 — feat(coding-agent): expose context files at session start](https://github.com/earendil-works/pi/pull/7872)** — Exposes loaded AGENTS/CLAUDE context files on the `session_start` event, with documentation and focused test coverage.

## Feature Request Trends

- **TUI ergonomics**: Multiple requests around fullscreen mode — disabling copy-on-select (#7720), mouse-click positioning in the input textarea (#7852), and consistent Page Up/Page Down navigation (#7616, #7865).
- **Extension system maturity**: Command routing via `sendUserMessage` (#7859), custom tool rendering after `/reload` (#7740), and a formal remote-session wire protocol (#7344).
- **Provider breadth and correctness**: New Qwen Token Plan China provider (#7847), accurate context windows for z-ai/glm-5.2 (#7870), and treating Codex request-buffer exhaustion as context overflow (#7867).
- **Smarter session memory**: Porting stream rules, subagent tools, an advisor model, and cross-session memory from oh-my-pi (#7845); configurable per-model thinking-level persistence (#7871).

## Developer Pain Points

- **llama.cpp integration**: Repeated friction with default model selection and startup races (#6922, #6948) — even with fixes landing, local-model users remain the most vocal group.
- **TUI scroll/viewport instability**: Scroll jumps while streaming long output (#7861), view jumping when replying after scrolling up (#7495), and full-screen clears when tool blocks exceed the viewport (#7616).
- **Fragile crash paths**: Renderer hard-crashes on over-wide lines (#7868), EPIPE crashes when a desktop host closes stdout (#7860), `zlib.createZstdDecompress is not a function` under Bun (#7846), and ExtensionContext.exec hangs on SIGTERM-ignoring children (#7864).
- **Context/compaction friction**: Auto-compaction stops active tasks (#7848) and random "Response was truncated before completion" errors (#7855) interrupt long-running agent work.
- **Provider onboarding pain**: AI21's silent API retirement (#7869), GitHub Copilot login 429s for large orgs (#7850), and transient catalog fetch failures killing full refresh (`pi update --models`, #7323).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-10

## 1. Today's Highlights
The nightly release v0.21.8-nightly.20260810 lands Qoder plugin extension support and CI area-owner auto-assignment. Multi-agent coordination is the clearest roadmap signal: an RFC for independent-session orchestration (#8718) drew active discussion, and a draft PR (#8804) exposes native in-process Agent Team workflows as a first step. Meanwhile, the autofix bot is heavily engaged on CI/test reliability, with PRs addressing silent sandbox hangs, flaky shell-registry tests, and MCP connection fragility.

## 2. Releases
**v0.21.8-nightly.20260810.55e20db328** (nightly)
- feat(core): support Qoder plugin extensions — [PR #8661](https://github.com/QwenLM/qwen-code/pull/8661) (@callmeYe)
- feat(ci): auto-assign issues to area owners

Context: the previous nightly (v0.21.8-nightly.20260809.73e9eab626) failed its release workflow in the `integration_none` and `integration_docker` jobs — [Issue #8771](https://github.com/QwenLM/qwen-code/issues/8771).

## 3. Hot Issues
21 issues were updated in the last 24h; the 10 most noteworthy:

- **[#8718 — RFC: Native coordination for independent Qwen sessions](https://github.com/QwenLM/qwen-code/issues/8718)** (P2, multi-agent) — Proposes a leader dispatching self-contained workers with correlated runtime/task states and structured results. 8 comments; the most strategically important open discussion.
- **[#8784 — Streamable HTTP: optional GET/SSE stream rejected with 404 kills the whole MCP connection](https://github.com/QwenLM/qwen-code/issues/8784)** (P2, MCP) — A single optional probe failure tears down a healthy MCP session. 5 comments from affected integrators.
- **[#8823 — bug(sdk): hidden unrecognized diagnostics mutate and evict transcript state](https://github.com/QwenLM/qwen-code/issues/8823)** (P2, daemon/SDK) — Unknown daemon events enter the shared transcript reducer and cause visible state eviction; affects Web Shell and SDK consumers.
- **[#7118 — Windows standalone installer fails when powershell.exe cannot resolve Get-FileHash](https://github.com/QwenLM/qwen-code/issues/7118)** (P2, welcome-pr) — SHA-256 verification fails in constrained PowerShell environments; the most-upvoted open bug (3 👍).
- **[#8615 — Desktop 0.1.0 / Windows: bundled runtime crashes with EISDIR lstat 'C:'](https://github.com/QwenLM/qwen-code/issues/8615)** (P1, closed) — Workspace-open crash in bundled Node 22; now closed, a useful reference for Windows Desktop regressions.
- **[#8769 — Proposal: rebuild /review Step 3–5 orchestration on the workflow engine](https://github.com/QwenLM/qwen-code/issues/8769)** (P2, enhancement) — Wants deterministic agent fan-out, verification, and reverse audit via `QWEN_CODE_ENABLE_WORKFLOWS` instead of model-driven execution.
- **[#8678 — fix(serve): Preserve the current session when a large restore times out](https://github.com/QwenLM/qwen-code/issues/8678)** (P1, session-management) — PR1 (#8691) merged, adding safe/observable restore timeouts; remaining work targets session preservation during large restores.
- **[#7585 — proposal: Add a direct external context provider profile](https://github.com/QwenLM/qwen-code/issues/7585)** (P3, integration/MCP) — Most-commented open feature (12 comments): private monorepo integration with on-demand and Auto Recall context profiles.
- **[#8659 — TUI flickering / screen tearing in web-based terminals](https://github.com/QwenLM/qwen-code/issues/8659)** (P3, Linux/UI) — Virtualized History mode's full-screen ANSI redraws break web terminals such as Alibaba Cloud Workbench; `welcome-pr`.
- **[#8721 — npm test doesn't run due to unknown flag](https://github.com/QwenLM/qwen-code/issues/8721)** (P2, build-system) — Local `make test` fails with `EUNKNOWNCOMMAND`, blocking contributor validation.

## 4. Key PR Progress
50 PRs were active; the 10 most significant:

- **[#8804 — feat(cli): add native multi-agent coordination](https://github.com/QwenLM/qwen-code/pull/8804)** — Draft first step toward #8718: exposes the in-process Agent Team workflow; persistent-session dispatch/collect is explicitly deferred.
- **[#8732 — feat(cli): adopt Goal v3 in ACP sessions](https://github.com/QwenLM/qwen-code/pull/8732)** — Replaces the legacy Stop-hook `/goal` with the canonical Goal v3 state machine: create, status, edit, pause, resume, replace, clear.
- **[#8728 — feat(core): add a live-session registry and `qwen sessions ps`](https://github.com/QwenLM/qwen-code/pull/8728)** — Sessions self-register at `~/.qwen/sessions/<pid>.json`; no transport/tool/message path changes, foundation for #8724.
- **[#8818 — fix(core): catch content-only thinking-tag leaks on all OpenAI-compatible providers](https://github.com/QwenLM/qwen-code/pull/8818)** — Extends the `<think>` leak defense (cf. #6666) to default provider behavior and closes two bypasses.
- **[#8798 — fix(web-shell): reconcile mid-turn messages with daemon state](https://github.com/QwenLM/qwen-code/pull/8798)** — Makes the daemon the authoritative owner of accepted mid-turn messages; restores queued messages after refresh/session switch.
- **[#8802 — fix(desktop): restore the macOS window after closing it](https://github.com/QwenLM/qwen-code/pull/8802)** — Closing hides instead of destroys; Dock reopen restores focus without stealing it from Local Control.
- **[#8276 — fix(core): preserve prompt cache across deferred tool discovery](https://github.com/QwenLM/qwen-code/pull/8276)** — Keeps provider tool declarations and cached system instructions stable; adds a `deferred_tool_call` bridge.
- **[#8794 — feat(web-shell): show context usage as a mini progress pill](https://github.com/QwenLM/qwen-code/pull/8794)** — Always-on circular progress ring in the composer, following the same thresholds as `/context`.
- **[#8780 — feat(web-shell): improve subagent activity rows](https://github.com/QwenLM/qwen-code/pull/8780)** — Adds persistent chevrons, hover/focus highlighting, and keyboard discoverability while preserving the compact layout.
- **[#8408 — fix(serve): use authority-scoped credential stripping in provider warning sanitizer](https://github.com/QwenLM/qwen-code/pull/8408)** — Fixes port-truncation and password leaks in `sanitizeProviderWarning`.

## 5. Feature Request Trends
- **Multi-agent orchestration** is the strongest signal. #8718 (independent-session coordination), #8769 (`/review` on the workflow engine), and PR #8804 indicate a push from single-session CLI toward leader/worker topologies with structured results.
- **External context/memory integration profiles**: #7585 and #7449 both request provider-neutral, administrator-bound profiles for repository context and enterprise memory — documentation-first with incremental compatibility tests.
- **Session management & observability**: #8678 (restore timeouts) and #8411 (caller-supplied session IDs across daemon transports) target safe multi-entry-point session lifecycles; PR #8728 adds the live-session registry.
- **Workflow engine adoption**: #8690 asks for orchestration-policy guidance in the Workflow tool description, and #8769 wants `/review` rebuilt on the engine — a clear direction of travel.
- **Remote/mobile access**: #8595 (QR-code "Local Control" mode) closed, but the interest in phone access to local sessions remains a recurring theme.

## 6. Developer Pain Points
- **CI and test instability** dominates: repeated E2E failures (#8756, #8822, #8799, #8766), release integration failures (#8771), and 2-hour silent sandbox hangs (addressed by #8816). Autofix mitigations (tmux/zip pinning in #8792, idle watchdog #8816, tunable triage timeout #8810) show the bot is actively firefighting.
- **Cross-platform friction**: Windows installer SHA-256 failure (#7118), Desktop EISDIR crash (#8615), and macOS window lifecycle fixes (#8802) indicate desktop QA still lags.
- **MCP interoperability**: #8784 shows a single optional endpoint rejection can kill an entire MCP connection — the community expects spec-compliant tolerance for optional features.
- **Contributor DX**: broken `npm test` (#8721) and flaky tests sharing fixed `/tmp` paths (PRs #8813, #8795) are low-hanging fruit for reducing contribution friction.
- **Daemon/renderer state consistency**: #8823 and #8798 both stem from the daemon-vs-UI state split — unrecognized events and mid-turn messages can corrupt or lose transcript state, breaking user expectations in the Web Shell.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-10

## Today's Highlights

No new releases landed in the last 24 hours, but v0.9.6 is in active preparation: PR #5313 describes a "subtractive runtime release" that rebuilds compaction around a single provider summary plus a committed successor handoff. Meanwhile, the community is pushing hard on context-window transparency — users with 1M-token models report silent compaction at 128K (#5239, #5244) and a `/compact` command that reports success without any visible token gain (#5096). Several reliability issues around silent fallbacks are also drawing attention: provider switching can retain an unrelated default model (#5034) and `File` edits can report fake success (#5209).

## Releases

No new releases published in the last 24 hours. The next version, **v0.9.6**, is being prepared in [PR #5313](https://github.com/Hmbown/CodeWhale/pull/5313) — a "subtractive" runtime release that removes harness-created obstruction (including mailbox freezes) while preserving explicit budgets, deadlines, cancellation, and truthful provider state.

## Hot Issues

1. **[#4949 — Discussion: The Chinese Translation of "Constitution"](https://github.com/Hmbown/CodeWhale/issues/4949)** — Open, 8 comments. A community terminology debate triggered by PR #4908: should "Constitution" be translated as 宪法 (with political baggage in Chinese) or 协作准则? Active participation from native speakers; no consensus yet.

2. **[#3205 — v0.9.3: Fleet model classes, loadout auto, and semantic route roles](https://github.com/Hmbown/CodeWhale/issues/3205)** — Closed, 13 comments. The most-commented issue this cycle. Defines the shared model/loadout selector for TUI, CLI, exec, subagents, and Fleet workers — "Fleet loadout auto" resolves the whole compute loadout for a role/slot, not just a model string.

3. **[#4022 — v0.9.3: define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022)** — Closed, 9 comments. The TUI sidebar became the primary place for subagent status/cancellation; the concern is those control surfaces must not be trapped inside the TUI if a future cloud app or remote workbench arrives.

4. **[#5034 — Switching providers can retain an unrelated default model](https://github.com/Hmbown/CodeWhale/issues/5034)** — Open, 4 comments. Switching to OpenAI can leave `gpt-5.5` as the default even when inherited from a different route. Provider and model resolution are not updated as one coherent unit.

5. **[#5096 — Compaction gain not visible](https://github.com/Hmbown/CodeWhale/issues/5096)** — Open, 4 comments. User reports `/compact` shows "compaction triggered/completed" (in French locale), but the token counter stays at 37K/128K. Compaction either isn't happening or isn't reflected in the UI — a transparency problem.

6. **[#5293 — TUI: make deny-by-default approval selection configurable](https://github.com/Hmbown/CodeWhale/issues/5293)** — Open, 4 comments, 1 👍. Since v0.9.4 the default highlighted option in the permission dialog is "deny." Users fear accidental denies when muscle-memory hits Enter to approve. Requests a configurable default.

7. **[#5270 — v0.9.5: unified tasks surface (shell + subagents + durable workers)](https://github.com/Hmbown/CodeWhale/issues/5270)** — Open, 3 comments. Proposal for one operator-facing list of "things still running for this session": background shells, subagents, Fleet/lane workers, and workflow runs, with idle chrome warning when background work is alive.

8. **[#5209 — File (action=edit) silently accepts wrong parameter names and reports fake success](https://github.com/Hmbown/CodeWhale/issues/5209)** — Open, 3 comments. Using `new_str` instead of `replace` doesn't error — it returns "Replaced" without doing anything, forcing 3–5x re-edits per location. A model-facing reliability trap.

9. **[#5239 — The model supports 1M context, but why does the tool only trigger context compression at 128K](https://github.com/Hmbown/CodeWhale/issues/5239)** — Open, 2 comments. A recurring user complaint: `context_window_for_model` doesn't know newer model IDs and silently falls back to the 128K legacy default. Top issue for context-handling confusion; related to #5134 and #5244.

10. **[#5287 — TUI/Fleet: sub-agent display identity should be the fleet/session name](https://github.com/Hmbown/CodeWhale/issues/5287)** — Open, 2 comments. The same running child is shown as `agent_<hex>`, auto-generated whale nicknames (e.g. "Amazon River"), or the dispatch name across surfaces. Operators dispatched lanes by name (e.g. `branch-triage`) and need that name echoed back.

## Key PR Progress

Only 3 PRs were updated in the last 24 hours:

1. **[#5313 — chore(release): prepare v0.9.6](https://github.com/Hmbown/CodeWhale/pull/5313)** — Closed. The v0.9.6 release prep. Rebuilds compaction around one provider summary plus a committed successor handoff, "without mailbox freezes"; explicitly preserves budgets, deadlines, cancellation, and truthful provider state.

2. **[#5308 — fix(release): use CNB asset download URLs](https://github.com/Hmbown/CodeWhale/pull/5308)** — Closed. Fixes the updater so mirror mode receives actual asset bytes instead of release HTML by using the canonical `codewhale.net/codewhale` slug and the `/-/releases/download/vX.Y.Z/` path. Preserves explicit mirror override precedence.

3. **[#5281 — build(deps): bump jsonschema from 0.46.10 to 0.49.6](https://github.com/Hmbown/CodeWhale/pull/5281)** — Open. Routine Dependabot dependency bump, still awaiting review.

## Feature Request Trends

- **Context-window transparency and control**: Users with 1M-token models are frustrated by silent compaction at 128K and want the limit configurable or at least loudly surfaced (#5239, #5134, #5244). Related requests ask for compaction to preserve active intent/decisions and to publish a "structured survival contract" (#5043, #4394), plus visible token gains after `/compact` (#5096).

- **Multi-provider lifecycle management**: Several users run DeepSeek and GLM (or OpenAI) side by side and need per-provider API keys instead of one overwritten slot (#5250), durable global secret storage instead of repo-local plaintext (#5047), and coherent provider+model switching (#5034).

- **Unified operator surfaces**: A strong direction toward one control plane: CLI/TUI parity for subagent controls (#4022), a unified tasks panel for shells/subagents/Fleet/workflow (#5270), and consistent Fleet display identity (#5287).

- **Safer editing tools**: Guardrails and loud failures for edit operations — read-before-edit enforcement, strict parameter validation, and no false success messages (#5209, #3364).

- **Terminal UX polish**: Windows IME candidate window stability (#5023), rail-clean copy without `● ▏` decorations (#5314), and configurable default for approval dialogs (#5293).

## Developer Pain Points

- **Silent degradation and fallbacks**: Unknown model IDs quietly fall back to 128K context (#5244); config layers silently shadow each other — editing `~/.codewhale/agents/builder.toml` had no effect because another layer overrode it (#5098); API keys silently persist only in the working repo (#5047).
- **False-positive tool success**: `File action=edit` accepting wrong parameter names and reporting "Replaced" costs users 3–5x re-edits per location (#5209).
- **Compaction opacity**: "Compaction triggered/completed" messages with no change in token counters undermine trust (#5096); interrupted assistant output also vanishes from the authoritative session (#5000).
- **Localization and input-method friction**: Windows 11 IME candidate windows jump during input (#5023), French UI messages don't clarify compaction state (#5096), and the Chinese "Constitution" translation debate (#4949) shows localization is a first-class concern.
- **Test reliability debt**: Flaky verifier background tests under parallelism, `/workspace`-sensitive fixtures, and 12 untriaged `#[ignore]` tests remain untended (#5056).

*Digest generated from [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) activity data for 2026-08-10.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*