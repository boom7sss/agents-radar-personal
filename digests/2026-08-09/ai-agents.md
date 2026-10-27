# OpenClaw 生态日报 2026-08-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-09 02:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-08-09

---

## 1. 今日速览

OpenClaw 项目在 2026-08-09 保持极高活跃度：24 小时内处理 500 条 Issue 更新（448 条新开/活跃，52 条关闭）与 500 条 PR 更新（324 条待合并，176 条已合并/关闭），并发布 2 个安全加固版本。最新版本 v2026.6.34 与 v2026.6.33 均围绕浏览器/网络边界与密钥保护展开，反映项目当前安全优先的迭代方向。社区讨论热度最高的 Issue #116277（DeepSeek v4 Flash 静默失败）已关闭，但项目仍积压多项 P0/P1 级稳定性问题（网关内存泄漏、启动失败、消息丢失等），健康度整体呈“高活跃、高压力”状态。

---

## 2. 版本发布

### v2026.6.34（最新版）
- **发布时间**：2026-08-09
- **核心主题**：更安全的浏览器与网络边界
- **重点内容**：
  - 沙箱化浏览器路由，拒绝不安全访问路径
  - 可信 DNS 目标校验
  - 自定义浏览器来源（origin）支持
  - 回环（loopback）provider 端点加固
- **感谢贡献者**：@eleqtrizit、@brunowowk、@mosidevv、@pgondhi987
- **链接**：https://github.com/openclaw/openclaw/releases

### v2026.6.33
- **发布时间**：2026-08-08
- **核心主题**：更安全的网络与密钥边界
- **重点内容**：
  - provider 流、Discord REST 响应、浏览器抓取、OAuth 路径、日志均对恶意超大响应进行容量限制
  - Telegram 凭据不再出现在诊断信息中
- **感谢贡献者**：@wangmiao0668000666、@Alix-007 等
- **链接**：https://github.com/openclaw/openclaw/releases

> **迁移注意**：两个版本均以安全加固为主，未发现破坏性配置变更或迁移阻断项，可正常升级。

---

## 3. 项目进展

今日共有 176 个 PR 合并/关闭，覆盖核心网关、多平台渠道、CLI、UI 与 QA 工具链。重点合并/关闭 PR 如下：

### 稳定性修复
- **[CLOSED] #119511 — 归档 tasks maintenance 被裁剪的 cron-run 会话记录**
  修复 `openclaw tasks maintenance --apply` 硬删 SQLite 会话记录且不写 `.deleted` 归档的问题，与 #119269 对应。
  https://github.com/openclaw/openclaw/pull/119511
- **[CLOSED] #120802 — Windows 子进程环境变量大小写覆盖问题**
  修复 Windows 子进程忽略配置中大小写不同的环境变量覆盖的问题，波及命令发现、MCP stdio 服务器等。
  https://github.com/openclaw/openclaw/pull/120802
- **[CLOSED] #120813 — Mistral 重连后重置转录状态**
  修复实时转录插件在 WebSocket 自动重连后残留旧文本/最终片段状态的问题。
  https://github.com/openclaw/openclaw/pull/120813
- **[CLOSED] #120239 — Google Chat 拒绝 API 响应中的非法 UTF-8**
  避免损坏的 `name` 标识符（如 `spaces/�AAA`）被后续 API 调用使用。
  https://github.com/openclaw/openclaw/pull/120239
- **[CLOSED] #120738 — 接受过时历史贡献记录计数**
  修复 beta 发布候选校验因旧 changelog 计数陈旧而误拒绝发布的问题。
  https://github.com/openclaw/openclaw/pull/120738

### 新功能与增强
- **#120768 — 一键设备配对（oc-pair setup links）**
  实现 docs/plan/runners.md milestone 3 的“一键粘贴”配对流程，大幅降低新设备接入门槛。
  https://github.com/openclaw/openclaw/pull/120768
- **#120664 — `openclaw resume` 将 TUI 附加到最近会话**
  为任意位置启动的会话（Web UI、渠道、云 worker）提供 CLI 续接路径。
  https://github.com/openclaw/openclaw/pull/120664
- **#120817 — 修复 Telegram beta.1 账户回复模式回归**
  修复 2026.8.1-beta.1 候选版本中 `replyToMode: "first"` 被忽略的发布阻断问题。
  https://github.com/openclaw/openclaw/pull/120817
- **#120824 — Microsoft Teams 频道线程回复分页**
  修复 >50 条回复的线程只能获取过期/不完整上下文的问题。
  https://github.com/openclaw/openclaw/pull/120824
- **#120496 — 允许 Claude CLI 会话在无 API Key 时压缩**
  修复 `/compact` 依赖 Anthropic summarizer 需要 API Key 的缺陷（关联 #103231）。
  https://github.com/openclaw/openclaw/pull/120496

### 治理与审计
- **#119892 / #120819 / #120821 / #120818 / #120823 — Code Mode 审计/证据矩阵系列 PR**
  由 @vincentkoc 主导，系统性地为 Code Mode 增加可审计的物理调用证据、封闭式 trace schema、provider 调度证明与 frontier 对比证据矩阵。
  https://github.com/openclaw/openclaw/pull/119892
  https://github.com/openclaw/openclaw/pull/120821
  https://github.com/openclaw/openclaw/pull/120819

---

## 4. 社区热点

热度最高的讨论集中在消息丢失、内存泄漏与安全边界问题：

- **Issue #116277（热度 ⭐⭐⭐⭐⭐，179 条评论，已关闭）**
  **DeepSeek v4 Flash 静默回复失败** — 模型在 Telegram 群组中不生成回复，只发布通用 fallback 消息。该问题带动了整个社区对“默认模型静默失败”现象的大规模讨论，是 24 小时内评论量最高的 Issue。
  https://github.com/openclaw/openclaw/issues/116277
- **Issue #7707（31 条评论，仍开放）**
  **记忆信任标签（Memory Trust Tagging by Source）** — 社区持续呼吁对记忆条目按来源（用户命令、网页抓取、第三方技能）打信任标签，以防范记忆投毒攻击。
  https://github.com/openclaw/openclaw/issues/7707
- **Issue #44925（24 条评论，仍开放）**
  **子代理完成结果静默丢失** — 子代理任务编排在 E31/E42/E45 等异常下无重试、无通知、无自动重启，用户感到“高度不可靠”。
  https://github.com/openclaw/openclaw/issues/44925
- **Issue #91588（22 条评论，仍开放，P0）**
  **网关内存泄漏导致 OOM 崩溃** — RSS 从 350MB 涨至 15.5GB，触发反复 launchd-handoff 重启循环，是当前最受关注的稳定性话题。
  https://github.com/openclaw/openclaw/issues/91588

**PR 侧**：@steipete 提交的 #120791（侧边栏身份不刷新）、#120804（Where 选择器）、#120803（云 handoff 会话保持）等系列 PR 获得较高关注，社区对“多端会话一致性与设备配对”的改进表现出明显兴趣。

---

## 5. Bug 与稳定性

### P0 级（严重崩溃/关键路径阻断）

| Issue | 描述 | 状态 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏：RSS 从 350MB 涨至 15.5GB，OOM 崩溃并反复重启 | 开放，无 fix PR |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | 升级至 2026.7.1 后网关无法启动（systemd/ollama/手动均失败） | 开放，需更多信息 |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 6.11→7.1 升级迁移预检阻塞，迁移表与租约为空 | 开放，无 fix PR |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默回复失败（179 评论热点） | 已关闭 |

### P1 级（数据/消息丢失、核心功能异常）

- **#44925 — 子代理完成结果静默丢失**（无重试/无通知）：开放，无 fix PR
  https://github.com/openclaw/openclaw/issues/44925
- **#96834 — WhatsApp 1:1 图片阻塞主通道约 3 分钟**：开放，有 repro
  https://github.com/openclaw/openclaw/issues/96834
- **#86215 — Codex OAuth 刷新失败可卡住 agent 数小时**：开放，无 fix PR
  https://github.com/openclaw/openclaw/issues/86215
- **#87109 — 网关闲置堆内存增长至 1073MB+，cron 静默失败**：开放
  https://github.com/openclaw/openclaw/issues/87109
- **#92076 — 子代理完成投递在 requester 会话不活跃时失败**：开放
  https://github.com/openclaw/openclaw/issues/92076
- **#98435 — MCP loopback 在网关重启后不自动重连**：开放
  https://github.com/openclaw/openclaw/issues/98435
- **#103231 — `ownsNativeCompaction` 假设对 `claude -p` 不成立**：开放，有 fix PR #120496
  https://github.com/openclaw/openclaw/issues/103231
- **#114020 — 升级 2026.7.2-beta.4 后 Feishu/Telegram 分发失败**：开放
  https://github.com/openclaw/openclaw/issues/114020
- **#119269 — tasks maintenance 删除 cron-run 记录且不归档**：开放，已有 fix PR #119511 关闭
  https://github.com/openclaw/openclaw/issues/119269
- **#92186 — 前台回复围栏取消较早并发群组消息投递**：开放
  https://github.com/openclaw/openclaw/issues/92186

### 回归问题
- **#38327 — “Cannot convert undefined or null to object”（google-vertex）**：3.2 版本回归，开放
  https://github.com/openclaw/openclaw/issues/38327
- **#108265 — Feishu 流式渲染“字符逐字蹦出”**：7.1 升级后回归，开放
  https://github.com/openclaw/openclaw/issues/108265

**总体判断**：P0 级问题均无直接 fix PR 被合并，且其中 3 个为长时间未解决（#91588 已持续 2 个月）。P1 级中 #119269 已有关联 PR 修复（#119511，已关闭），#103231 有修复 PR（#120496）但仍在等待 proof。

---

## 6. 功能请求与路线图信号

### 高热度功能请求

| Issue | 诉求 | 潜力判断 |
|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 记忆条目按来源打信任标签，防记忆投毒 | 高 — 契合当前安全优先迭代方向 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | OpenRouter 等 provider 的完全动态模型发现 | 中高 — 模型目录静态化长期被诟病 |
| [#75947](https://github.com/openclaw/openclaw/issues/75947) | 基于可访问性/人体工学的 UI 重构 | 中 — 已有多个 UI 小修 PR 进入 |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 配置选项抑制子代理 announce | 中 — 与 #101248 的 announceTarget 方向互补 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 按模型的 usage 日志，支持成本追踪 | 中高 — 企业采用的重要基础 |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | 长时运行任务的持久状态界面 | 中 — 与 worker/配对新功能协同 |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | macOS Talk Mode 支持 OpenAI Realtime 语音路径 | 中低 — 属于特定平台增强 |

### 路线图信号（结合 PR）
- **“设备配对 / 多端一致”** 明显是当前重点：#120768（一键配对）、#120825（非密钥连通性预检）、#120804（Where 选择器 + 项目 read model）、#120803（云 handoff 会话保持）连续 4 个 PR 同日出现。
- **“可审计 AI”** 是另一条主线：@vincentkoc 的 Code Mode 审计/证据矩阵系列（#119892、#120819、#120821、#120818、#120823）表明项目在向企业级可审计方向推进。
- **“CLI 体验补齐”**：#120664（`openclaw resume`）直接响应“会话无处续接”的诉求。

---

## 7. 用户反馈摘要

- **正面反馈**：Issue #73537 中用户明确表达“OpenClaw 已成为我们家庭和商业助手的日常一部分”，特别肯定 Telegram 集成、自动化、cron 和 Home Assistant 控制能力。同一条 Issue 也提出“生产就绪稳定性标签”需求，说明家庭/商业用户对版本信心有期待。
  https://github.com/openclaw/openclaw/issues/73537
- **核心痛点 1 — “静默”失败模式**：多个高热度 Issue（#116277、#44925、#87109）共同指向同一类不满：**错误发生时没有任何提示** —— 没有回复、没有重试、没有通知、没有错误上报。用户宁可看到报错，也不愿看到“成功”的假象。
- **核心痛点 2 — 会话状态易失**：#92076、#98435、#119269 反复描述“结果已生成但未投递”“记录被删除未归档”的场景，用户对数据持久性和可恢复性的信任度在下降。
- **核心痛点 3 — 内存与长期稳定性**：#91588（350MB→15.5GB）、#87109（558MB→1073MB+）多次出现“重启即恢复，运行几天就恶化”的模式，用户已能稳定复现但未见修复。
- **社区参与度**：多数热门 Issue 均有详细的环境信息、复现步骤和日志（如 #91588、#96834），用户侧在主动帮助维护者定位问题，但部分 Issue（如 #108435）仍标记 `needs-info`，等待用户补充数据。

---

## 8. 待处理积压

### 长期悬而未决的高影响 Issue（按创建时间排序）

| Issue | 创建时间 | 时长 | 严重度 | 状态与风险 |
|---|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) 记忆信任标签 | 2026-02-03 | 6 个月+ | P2/安全 | 31 条评论无结论，`needs-maintainer-review` |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) 动态模型发现 | 2026-02-06 | 6 个月+ | P2 | `needs-product-decision`，长期未定 |
| [#44525](https://github.com/openclaw/openclaw/issues/44925) 子代理结果静默丢失 | 2026-03-13 | 5 个月+ | P1 | 无 fix，持续被社区顶起 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) google-vertex 回归 | 2026-03-06 | 5 个月+ | P1 | `needs-live-repro`，无进展 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) 网关内存泄漏 | 2026-06-09 | 2 个月+ | **P0** | 无 fix PR，OOM 反复发生 |

### 需维护者优先关注的信号
- **P0 三连**：当前 [#91588](https://github.com/openclaw/openclaw/issues/91588)、[#108435](https://github.com/openclaw/openclaw/issues/108435)、[#112395](https://github.com/openclaw/openclaw/issues/112395) 均为 P0 且无有效 fix PR，构成版本升级与长期运行的双重风险。
- **高评论低响应**：#7707（31 条评论）、#44925（24 条评论）长期停留在 `needs-maintainer-review`，社区活跃度与响应速度不匹配。
- **PR 堆积**：324 个 PR 待合并中，包含多个标注 `ready for maintainer look` 但没有“已批准”标记的 PR（如 #120360、#120803、#120768），建议维护者量力分批合并，避免技术债累积。

---

*本报告基于 2026-08-09 日 GitHub 公开数据生成，数据来源：https://github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**数据窗口：2026-08-08 ~ 2026-08-09 ｜ 覆盖 13 个仓库**

---

## 1. 生态全景

以 OpenClaw 为核心的 "Claw 家族" 已构成个人 AI 助手/自主智能体开源生态的主干，但生态正从 "功能竞赛" 进入 "可靠性、安全性与治理能力比拼" 的第二阶段。头部项目日均处理 500 级 Issue/PR，却普遍面临 P0/P1 缺陷积压与 PR 合并瓶颈并存的结构性压力；安全加固、成本可观测性、MCP 韧性与多端一致性成为跨项目共有的第一优先级。生态内部明显分化：IronClaw、ZeroClaw 等向企业级可审计方向收敛，NanoBot、PicoClaw 等走轻量务实路线，而 LobsterAI 停滞、NullClaw/TinyClaw/ZeptoClaw 休眠，显示 Claw 生态存在较高的 fork 更迭率。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（448 新/52 关） | 500（324 待/176 合） | 2（v2026.6.33/.34，安全版） | 🔴 高活跃、高压力；P0 三连无 fix |
| **Hermes Agent** | 50（38 新） | 50（43 待/7 合） | 0 | 🟠 高活跃、修复驱动；PR 积压严重 |
| **ZeroClaw** | 50（47 新/3 关） | 50（48 待/2 合） | 0 | 🟠 高活跃；P1 数量偏多，合并瓶颈 |
| **IronClaw** | 30（6 新/24 关） | 50（18 待/32 合） | 0 | 🟢 高强度迁移收尾，质量巩固期 |
| **CoPaw** | 19（17 活/2 关） | 50（47 待/3 合） | 0 | 🟠 功能与稳定性并行；4 个高危 bug 无 fix |
| **NanoBot** | 5 | 9（4 合） | 0 | 🟢 稳步推进；48h 响应闭环值得肯定 |
| **NanoClaw** | 5 新/3 关 | 3 待/3 合 | 0 | 🟢 健康迭代；Mattermost 双 PR 需去重 |
| **PicoClaw** | 3（2 活/1 关） | 4 待 | 0 | 🟡 中等；2 个 PR 挂起超 1 个月 |
| **Moltis** | 1 新/1 关 | 1 合 | 0 | 🟡 常规维护；Docker 沙箱问题闭环 |
| **LobsterAI** | 1 | 3（1 关，2 stale） | 0 | 🟠 低活跃/停滞；重要性能 PR 4 个月未审 |
| **NullClaw** | 0 | 0 | 0 | ⚫ 休眠 |
| **TinyClaw** | 0 | 0 | 0 | ⚫ 休眠 |
| **ZeptoClaw** | 0 | 0 | 0 | ⚫ 休眠 |

> **生态总待合并 PR 约 491 个**（OpenClaw 324 + ZeroClaw 48 + CoPaw 47 + Hermes 43 + IronClaw 18 + 其余 11），review 带宽是全局性瓶颈。

---

## 3. OpenClaw 在生态中的定位

**社区规模：断层式第一。** 单日 500 Issue + 500 PR 更新，是第二梯队（Hermes/ZeroClaw/IronClaw，各约 50+50）的 10 倍；单日合并 176 个 PR，是 IronClaw（32 个）的 5.5 倍。这种吞吐量使其成为生态事实上的上游参照与标准制定者——PicoClaw、NanoClaw、ZeroClaw 等 "Claw" 系项目在架构形态（单网关 + 多渠道 + agent 运行时）上均与其同构。

**技术路线：安全优先的防御性迭代。** 连续两个版本（v2026.6.34/v2026.6.33）聚焦浏览器/网络边界与密钥保护：沙箱化浏览器路由、可信 DNS 校验、loopback 加固、恶意超大响应容量限制、Telegram 凭据脱敏。在同生态中，OpenClaw 是唯一将安全加固作为发布主线、且保持每日双版本节奏的项目。

**差异化优势：渠道覆盖与功能广度。** 已贯通 Telegram、WhatsApp、Discord、Google Chat、Teams、Feishu 等主流 IM，并叠加 cron 自动化、Home Assistant 控制、家庭/商业双场景（#73537 用户证言）。路线图信号清晰：设备一键配对（#120768）、`openclaw resume`（#120664）、Code Mode 可审计证据矩阵（@vincentkoc 系列 PR）分别对应多端一致、CLI 体验、企业治理三个方向。

**短板与风险：规模反噬稳定性。** P0 三连（#91588 网关内存泄漏 350MB→15.5GB 已持续 2 个月、#108435 升级后无法启动、#112395 迁移预检阻塞）均无有效 fix；#116277 等静默失败热点暴露了规模扩大后的质量治理压力。生态地位越高，这些 P0 的辐射影响越大——下游 fork 项目会同步继承其架构缺陷。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 / 表现 |
|---|---|---|
| **安全边界与密钥保护** | OpenClaw、ZeroClaw、Hermes、IronClaw、NanoClaw、CoPaw | 浏览器沙箱与可信 DNS（OpenClaw）；审批越权 P1（ZeroClaw #9387）与 `forbidden_paths` 绕过（#9815）；ANSI 序列绕过密钥掩码（Hermes #81012）；SafetyLayer 关键函数无调用者（IronClaw #7391）；agent 密钥隔离模型未定型（NanoClaw #3205）；审批附言透明化（CoPaw #6832） |
| **MCP 生态接入与韧性** | NanoBot、PicoClaw、NanoClaw、CoPaw、ZeroClaw、Hermes | 单 MCP 故障拖垮网关（NanoBot #5300）；OAuth 2.1 网页授权（PicoClaw #3302、NanoBot #5297）；远程 HTTP/SSE MCP（NanoClaw #2776）；MCP 重连后会话永久阻塞（CoPaw #6822）；stdio MCP 僵尸进程（ZeroClaw #8731）；冷启动挂死 300s（Hermes #81995） |
| **Token 与成本可观测性** | NanoBot、IronClaw、ZeroClaw、OpenClaw | 2 小时百万 Token 无感知消耗（NanoBot #5266→#5293/#5299 已闭环）；token 按字符串引用长度估算失真（IronClaw #6989，P1）；Anthropic 成本恒为 $0、预算熔断失效（ZeroClaw #9816）；内存泄漏 OOM 即隐性资源失控（OpenClaw #91588） |
| **对抗 "静默失败"** | OpenClaw、ZeroClaw、Hermes、CoPaw、LobsterAI | DeepSeek 静默不回（OpenClaw #116277，179 评论）；子代理结果静默丢失（#44925）；cron 显示 ok 但输出无处投递（ZeroClaw #9340）；上下文压缩抹掉人类可见历史（Hermes #70846）；MCP 断连后对话无提示卡死（CoPaw #6822）；模型不遵循工具默认参数（LobsterAI #1192） |
| **多端一致与设备配对** | OpenClaw、IronClaw、Hermes、CoPaw | 一键设备配对（OpenClaw #120768）；Web Push 通知 + Slack/Telegram presence 共享会话（IronClaw #7398/#7397）；桌面更新进程互斥与 handoff（Hermes #75778/#53040）；Windows/macOS/Docker 三平台安装链路问题（CoPaw #6810/#6831/#6782） |
| **可审计 AI / 治理流程** | OpenClaw、IronClaw、ZeroClaw、CoPaw | Code Mode 物理调用证据与 evidence matrix（OpenClaw @vincentkoc 系列）；"run acts as its invoker" 多租户安全语义（IronClaw #7377）；RFC 决策队列积压（ZeroClaw #8692）；审批过程可视化（CoPaw #6832） |
| **国内大模型/IM 接入** | CoPaw、ZeroClaw、OpenClaw | Volcengine Agent Plan、小米 MiMo、阿里 qwen3.8（CoPaw #6490/#6293）；非 ASCII agent 别名如 `[agents."审核助手"]`（ZeroClaw #9845）；DeepSeek v4 系列兼容问题（OpenClaw #116277、CoPaw #6821） |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 | 关键差异点 |
|---|---|---|---|---|
| **OpenClaw** | 全能型个人 AI 助手/网关，家庭+商业双场景 | 极客、家庭用户、中小团队 | 大规模多渠道网关 + 插件生态（渠道覆盖最多） | 社区规模第一；安全加固为发布主线；设备配对/多端一致领跑 |
| **Hermes Agent** | 桌面优先的研究型 Agent | 个人研究者、桌面重度用户 | Node/Electron 桌面端 + Copilot ACP + 会话写入策略 | 系统级"抢救"社区 PR；更新链路（Win/macOS）是当前最大信任赤字 |
| **IronClaw** | 企业级可审计 Agent 平台 | 企业、多租户场景 | Rust；`run as invoker` 身份模型；Reborn v2 架构 | 迁移收尾 + 审计/测试基建最重（37 个 gate 审计、压力测试补盲区）；安全文档与实现漂移需警惕 |
| **ZeroClaw** | 治理/流程驱动 + SOP 自动化 | 运营者、自动化重度用户 | Rust；RFC 决策流程 + 审批系统 + 插件目录契约 | 安全与流程并重；P1 数量偏多（~10 个活跃）但 SOP 链路已有 #9841 接替 |
| **CoPaw** | AgentScope 生态的多 Agent 编排 | Python 生态开发者、国内用户 | Python + TS 前端；Scroll 单一上下文协议；ReMe 记忆 | 记忆/上下文工程主线（reranker、产物卡片）；2.1.0b2 暴露集中回归 |
| **NanoBot** | 轻量、WebUI 体验优先 | 入门用户、成本敏感者 | 轻量架构；临时聊天模式、Token 诊断 | 48h 完成"诉求→后端→前端"响应闭环；MCP 错误隔离缺失是架构短板 |
| **NanoClaw** | 多 Agent 密钥与审批治理 | 小团队协作 | TypeScript；ChannelAdapter v2；远程 MCP/Strava 技能 | Discord 审批流是当前关键路径；密钥隔离模型未定型 |
| **PicoClaw** | 轻量多 IM 网关 | 自托管轻量用户、Go 生态 | Go；WhatsApp/IRC/Simplex/DeltaChat 通道 | 前缀缓存优化、WhatsApp 405 修复待合入；2 个 PR 超 1 个月未审 |
| **Moltis** | 容器沙箱兼容性 | Docker/Apple Container 用户 | 沙箱文件系统工具 + 回归测试 | Docker 问题闭环（2 个月）；Apple Container 1.x 新缺口，修复模式偏"逐个打补丁" |
| **LobsterAI** | 中文生态（网易有道） | 中文用户 | JS/TS（sql.js 内存库） | 明显停滞；SQLite 写放大 PR 4 个月未审、LiteLLM 集成 PR 被关 |
| **NullClaw / TinyClaw / ZeptoClaw** | — | — | — | 24h 零活动，fork 更迭期产物，需观察是否持续活跃 |

---

## 6. 社区热度与成熟度

**活跃度分层：**

- **S 级（绝对龙头）**：**OpenClaw**——日处理千级事件、双安全版本发布，但 P0 积压与 324 个待合并 PR 构成"增长与质量的张力"。
- **A 级（高活跃，快速迭代）**：**Hermes Agent、ZeroClaw、IronClaw、CoPaw**——日更新 50-100 级，均处于架构演进或修复高压期。共性问题是 PR 积压（43/48/18/47 个待合并）。
- **B 级（中等活跃，稳步推进）**：**NanoBot、NanoClaw、PicoClaw**——单日个位数至十位数更新，迭代节奏健康，是"小而美"路线的代表。
- **C 级（低活跃/维护期）**：**Moltis**（常规维护）、**LobsterAI**（全条目 stale，距"僵尸项目"一步之遥）。
- **D 级（休眠）**：**NullClaw、TinyClaw、ZeptoClaw**——零活动。

**成熟度判断：**

- **IronClaw 处于质量巩固期**：Issue 关闭/新开比 24:6，PR 合并/待审比 32:18，20+ 个 Reborn v1 迁移 tracking issue 批量关闭，架构主体对齐完成，重心转向审计、压力测试与浏览器安全覆盖——是生态中最接近"产品化收尾"的项目。
- **OpenClaw、ZeroClaw、CoPaw 处于高速迭代但阵痛期**：功能推进快，但 P0/P1 无 fix 比例高（如 CoPaw 今日 4 个高危 bug 均无修复 PR、ZeroClaw 约 10 个 P1 活跃）。
- **Hermes Agent 处于修复驱动的信任重建期**：无新功能航道，密集缺陷修复 + 社区 PR 抢救（salvage 系列），但用户"害怕更新"的情绪化反馈（#81969）说明口碑修复仍长路漫漫。
- **NanoBot 是流程效率标杆**：#5266 从用户诉求到后端日志（#5293）再到 WebUI 展示（#5299）48 小时闭环，值得生态借鉴。

---

## 7. 值得关注的趋势信号

1. **生态主题从"功能竞赛"切换到"可靠性 + 安全竞赛"**。OpenClaw 连续两个安全版本、ZeroClaw 审批越权/路径绕过 P1、Hermes 密钥掩码绕过、IronClaw SafetyLayer 无调用者、NanoBot 单 MCP 故障拖垮网关——安全已从"加分项"变为"发布阻断项"。**对开发者的启示：安全审计应前置到架构层，而非等 P1 出现后再打补丁。**

2. **"宁可报错，不可假装成功"成为产品铁律**。"静默失败"是跨项目最高频的用户情绪（OpenClaw #116277/#44925、ZeroClaw #9340、Hermes #70846、CoPaw #6822、LobsterAI #1192）。用户宁可看到明确报错，也不接受"显示 ok 实则无输出"。**建议所有 Agent 产品将"可观测的失败"作为核心 UX 原则纳入测试标准。**

3. **MCP 从"能接就行"走向"接入质量"**。OAuth 网页授权、故障隔离、超时管理、远程 HTTP/SSE 支持在 6 个项目中同时出现。MCP 将是 Agent 生态的标准总线，**能提供稳定、隔离、可认证的 MCP 运行时，将成为下一代网关的护城河**。

4. **成本可观测性成为生产环境刚需**。NanoBot 百万 Token 事件、IronClaw P1 计量失真、ZeroClaw 预算熔断失效，三线并进指向同一个结论：**按调用/按迭代/按模型的用量审计与预算熔断，是 Agent 从玩具走向生产力的前置条件。**

5. **"多端一致性"是下一个产品战场**。OpenClaw 设备一键配对、IronClaw Web Push + presence 共享会话、Hermes handoff、CoPaw 跨平台安装修复——**Agent 正从"单点助手"演化为"跨设备的持续在场服务"**，类似 Apple Continuity 的体验标准正在开源生态中成形。

6. **企业治理能力决定上层市场分层**。OpenClaw 的可审计证据矩阵、IronClaw 的 identity ladder 与 gate 审计、ZeroClaw 的 RFC 决策队列、CoPaw 的审批透明化——**"可审计、可追溯、可管控"正在成为政企采购的分水岭**，纯个人向的 Agent 项目若忽略治理能力，将难以向上突破。

7. **国内模型/服务接入需求形成明确的第二增长曲线**。CoPaw 的 Volcengine/小米/阿里接入、ZeroClaw 的中文 agent 别名、OpenClaw 的 DeepSeek 兼容问题，说明**国产大模型生态与本地化部署已成为不可忽视的用户基数**，国际化项目应尽早将 provider 抽象与 i18n 纳入架构，而非事后打补丁。

8. **全局性 PR 合并瓶颈值得所有维护者警惕**。生态待合并 PR 累计约 491 个，其中 OpenClaw 324 个。贡献者 PR 长期无 review 会直接导致社区热情流失（LobsterAI #1193 已 4 个月、PicoClaw #3193 已 43 天、CoPaw 首贡献者 PR 滞留 30+ 天）。**建议头部项目引入 bot 辅助 triage、分批合并机制与明确的 review 时限承诺，避免技术债与社区债同步累积。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-08-09）

## 1. 今日速览

过去 24 小时 NanoBot 项目保持较高活跃度：共产生 5 条 Issue 更新和 9 条 PR 更新，无新版本发布。社区对 **Token 消耗透明化** 的需求集中爆发（Issue #5266 累计 13 条评论），并已形成"后端日志（#5293 关闭）→ WebUI 展示（#5299 待审）"的快速响应闭环。4 个 PR 于今日关闭，涵盖 WebUI 临时会话模式、Token 诊断日志、死代码清理与图片预览修复。项目整体稳步推进，但存在一个 P0 级会话数据覆盖修复 PR（#5271）因合并冲突尚未落地，且 2 个新增 MCP 相关 Bug（#5295 / #5300）暂无修复 PR，需维护者重点关注。

## 2. 版本发布

今日无新 Releases。

## 3. 项目进展

今日 4 个 PR 关闭/合并：

- **#5252 feat(webui): add temporary chat mode** — WebUI 新增"临时聊天"模式：首条消息后才创建会话、支持多个临时会话、不持久化到磁盘（无 session/history 文件），适合一次性或敏感对话场景。
  https://github.com/HKUDS/nanobot/pull/5252

- **#5293 feat(usage): log per-iteration token diagnostics** — 按 agent 迭代记录 Token 消耗明细（关联 #5266），在不改变 provider 接口的前提下捕获 source/session 上下文与请求工具信息，为定位"异常高消耗调用"提供数据基础。
  https://github.com/HKUDS/nanobot/pull/5293

- **#5296 refactor: remove verified dead code** — 移除 19 个仓库内部死代码单元及孤立前端依赖，清理 11 个生产不可达的测试后门，保留 6 个需显式兼容性决策的 API 敏感单元。代码库实现有效瘦身。
  https://github.com/HKUDS/nanobot/pull/5296

- **#5294 fix(webui): prevent image hover clipping** — 移除助手图片预览的悬停缩放与悬停光环，避免容器裁剪遮挡图片边缘；保留缩放光标、静态边框、原生按钮行为及键盘 focus-visible 样式，并补充回归测试。
  https://github.com/HKUDS/nanobot/pull/5294

**项目推进总结**：WebUI 功能增强 + Token 可观测性建设 + 代码库健康度提升三线并进。尤其 Token 诊断从"用户诉求（#5266）→ 后端日志（#5293）→ 前端展示（#5299）"在 48 小时内形成完整闭环，响应速度值得肯定。

## 4. 社区热点

- **#5266 [enhancement] Logs about token consumption**（13 条评论，今日最热）
  https://github.com/HKUDS/nanobot/issues/5266
  用户 knoppix2 反馈"约 2 小时消耗百万 Token 且用户无感知活动"，要求按调用记录时间和 Token 消耗。该诉求直接催生了 PR #5293（已关闭）与 #5299（待审）。**背后诉求：成本可观测性** — 用户需要能追溯"Token 花在哪了"的工具，这是 LLM 应用走向生产环境的普遍核心痛点。

- **#5297 [feature] MCP 增加 OAuth 网页授权**（2 条评论）
  https://github.com/HKUDS/nanobot/issues/5297
  用户 sunboy0523 请求支持需网页授权的 MCP 服务（如 `app.xmind.com/api/mcp`），并建议通过 gateway 获取授权、非本机经远程 IP/域名访问。**背后诉求：MCP 生态接入门槛** — 越来越多 MCP 服务采用 OAuth 流程，当前本地配置模式成为瓶颈。

- **#5295 [bug] docker compose 部署失败**（2 条评论）
  https://github.com/HKUDS/nanobot/issues/5295
  用户按 deployment.md 操作，`docker compose logs` 报 `entrypoint.sh: Permission denied`，容器以 code 2 退出。**背后诉求：部署体验一致性** — 文档与镜像实际行为存在偏差，直接提高新用户上手成本。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 问题描述 | 修复状态 |
|---|---|---|---|
| 🔴 严重 | #5300 | MCP 连接失败未隔离：远程返回 HTTP 530 → anyio cancel scope 跨任务崩溃 → 网关进程崩溃/卡死、Task 泄漏、CPU 飙升 | 无修复 PR |
| 🟠 高 | #5271 | （P0 已知问题）后台任务持 Session 引用，用户 `/new` 后陈旧保存可能覆盖新会话数据 | 修复 PR 存在但**有合并冲突** |
| 🟡 中 | #5295 | Docker Compose 部署 `entrypoint.sh: Permission denied`，网关无法启动 | 无修复 PR |
| 🟢 低 | #5206 | （P2 已知问题）流式响应被重复记录，产生重复 'Response to' 日志行 | 修复 PR 存在但**有合并冲突** |

- #5300：https://github.com/HKUDS/nanobot/issues/5300
- #5271：https://github.com/HKUDS/nanobot/pull/5271
- #5295：https://github.com/HKUDS/nanobot/issues/5295
- #5206：https://github.com/HKUDS/nanobot/pull/5206

**已修复**：#5294（WebUI 图片悬停裁剪）已于今日关闭。

**重点提示**：#5300 属于"单个 MCP 故障拖垮整个网关"的架构级稳定性问题。作者 sunboy0523 同时提交了 #5297 功能请求与 #5300 Bug，说明该用户正在深度使用 MCP 功能并连续遭遇真实障碍，建议维护者优先评估 MCP 错误隔离机制。

## 6. 功能请求与路线图信号

- **Token 用量可观测性**（#5266）→ 后端按迭代诊断已关闭（#5293），WebUI 展示在途（#5299）。**基本确定纳入下一版本**。
  https://github.com/HKUDS/nanobot/issues/5266

- **MCP OAuth 网页授权**（#5297）→ 暂无对应 PR，但符合 MCP 生态演进方向，**有望进入近期规划**。
  https://github.com/HKUDS/nanobot/issues/5297

- **大工具集 MCP Schema 预算控制**（#5298）→ 用户 kuaijiemei 建议对模型可见的 MCP schemas 做预算/裁剪管理，控制上下文成本。与 #5266 同属成本治理方向，**路线图信号明确**。
  https://github.com/HKUDS/nanobot/issues/5298

- **模型无关的 Computer Use 工具**（#4276）→ PR 自 6 月 10 日开启，8 月 8 日仍有更新，属于长期功能分支：`computer_use`（截图 + 键鼠控制）与 `browser`（DOM 稳定引用自动化）。体量较大，**可能作为大版本特性推出**。
  https://github.com/HKUDS/nanobot/pull/4276

## 7. 用户反馈摘要

- **Token 消耗焦虑**（#5266）：knoppix2 称"2 小时烧掉百万 Token 且用户无任何明显操作"，暗示后台自动任务可能产生隐藏成本，用户对成本透明度有强烈需求。
- **MCP 接入双重痛点**（#5297 / #5300）：sunboy0523 反映两类障碍 — ① 需 OAuth 网页授权的 MCP（如 XMind）完全无法配置；② 单个 MCP 连接失败（HTTP 530 + Cloudflare 1033）会导致整个网关崩溃和 CPU 异常。说明 MCP 功能需求旺盛，但健壮性与易用性仍是短板。
- **部署摩擦**（#5295）：Bennett-Yang 严格按文档操作仍遇权限问题，文档与镜像行为存在偏差，影响新用户首次体验。
- **满意信号**：临时聊天模式（#5252）与图片预览修复（#5294）均为用户可见的体验改进，从提交到关闭节奏快，体现社区维护响应积极。

## 8. 待处理积压

- **#4276 [OPEN] Computer Use 工具 PR** — 已开放 2 个月（6/10 创建，8/8 仍有更新），功能量大，建议维护者明确评估是否纳入主线或转入 roadmap。
  https://github.com/HKUDS/nanobot/pull/4276

- **#5271 [OPEN, P0] Session 数据覆盖修复** — 严重度 P0 但存在合并冲突，需维护者解决冲突并尽快合并，否则存在会话数据丢失风险。
  https://github.com/HKUDS/nanobot/pull/5271

- **#5206 [OPEN] 流式日志去重修复** — 已开放 8 天且存在冲突，修复虽小，但长期搁置会积累合并成本。
  https://github.com/HKUDS/nanobot/pull/5206

- **#5300 [OPEN] MCP 崩溃无修复 PR** — 今日新报告的高影响稳定性 Bug，暂无进展，建议分配专人跟进。
  https://github.com/HKUDS/nanobot/issues/5300

---

**项目健康度总评**：活跃度高、功能迭代快、社区参与积极；主要风险集中在 MCP 子系统的稳定性（崩溃隔离缺失）与两个 P0/P2 修复 PR 的合并冲突积压。建议维护者优先处理冲突合并，并关注 Token 可观测性功能的完整落地。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-09

> 数据区间：过去 24 小时（2026-08-08 → 2026-08-09）｜数据源：NousResearch/hermes-agent GitHub Issues/PRs

---

## 1. 今日速览

过去 24 小时项目保持**高活跃度**：Issues 与 PR 更新各达 50 条，其中新开/活跃 Issue 38 条、待合并 PR 43 条。**无新版本发布**，但 43 条 PR 积压待审，说明当前正处于密集提交与合并窗口。活跃焦点集中在三块：**更新/安装可靠性**（#81969、#75778、#62171）、**搜索与密钥安全修复**（#82152、#82151、#81012）、以及**会话写入策略的持续推进**（#79723、#80943）。值得注意的是，今日有多条 `salvage`（抢救）PR 将社区早期贡献重新落地（#82162、#82152、#82151），显示维护团队正在系统回收有价值的 PR。

---

## 2. 版本发布

今日 **无新版本发布**（Releases 更新为 0）。

当前大量 PR 尚在待合并状态（43/50），下一个版本预计将集中包含桌面更新修复、搜索 FTS5 修复、以及 MCP 记录/回放等批量变更。

---

## 3. 项目进展

今日共 **7 条 PR 被合并/关闭**（列表展示 4 条），另有大量高价值修复 PR 新提交待合并。整体进展集中在**修复社区反馈回归**和**安全边界加固**。

### 合并/关闭的 PR

| PR | 说明 | 状态 |
|---|---|---|
| [#82158](https://github.com/NousResearch/hermes-agent/pull/82158) | venv-blocker 扫描截断 cmdline，导致 Desktop 更新被误拦截；同日即关闭（重复） | CLOSED |
| [#79723](https://github.com/NousResearch/hermes-agent/pull/79723) | v0.20 会话写入策略迁移（29 路径，27 条含有效 diff） | CLOSED |
| [#80943](https://github.com/NousResearch/hermes-agent/pull/80943) | 将会话写入策略传播至委派子代理与 Copilot ACP，19 项合同测试全通过 | CLOSED |
| [#82153](https://github.com/NousResearch/hermes-agent/pull/82153) | xAI OAuth 凭证 403 刷新修复（与 #82052 重复） | CLOSED |

> ⚠️ 注意：#79723 与 #80943 两条写入策略相关 PR 均以 CLOSED 收尾，而非常规 merged，需持续关注后续替代方案。

### 今日新提交的关键 PR（待合并）

| 优先级 | PR | 解决的问题 |
|---|---|---|
| P0 | [#81929](https://github.com/NousResearch/hermes-agent/pull/81929) | 为 skill 消息声明缓存边界，避免 Anthropic 重复重写完整 skill 消息（webhook/cron 高频调用场景） |
| P1 | [#82143](https://github.com/NousResearch/hermes-agent/pull/82143) | Windows 桌面更新自愈：为 `get-windows` 补上缺失的 win32 binding，直接修复 #81969 |
| P2 | [#82162](https://github.com/NousResearch/hermes-agent/pull/82162) | 网关媒体投递修复：排队响应不再泄漏 `MEDIA:/path` 文本或静默丢附件 |
| P2 | [#82152](https://github.com/NousResearch/hermes-agent/pull/82152) | FTS5 搜索修复：补全 `it's`、`gateway/run.py`、`user@host`、`50%` 等特殊字符清洗 |
| P2 | [#82151](https://github.com/NousResearch/hermes-agent/pull/82151) | 模型切换密钥全部改走 per-profile secret 作用域，杜绝跨档案读取 API key |
| P2 | [#82163](https://github.com/NousResearch/hermes-agent/pull/82163) | CLI 启动不再泄漏 OSC 11 回复字节到输入行（解决 herdr 等终端管理器下的乱码） |

**整体评估**：项目今日未引入新功能航道，但进行了**密集的缺陷修复与社区 PR 抢救**，尤其是在 Windows 更新、FTS 搜索、密钥隔离三个方向都有实质 PR 落地或在审，项目健康度处于修复驱动的正向周期。

---

## 4. 社区热点

今日评论数最高的 Issues 呈现一个共同主题：**用户对更新机制的信任危机与安全默认值的担忧**。

### 🔥 最热讨论（评论 ≥ 5）

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) `security` | 6 | Agent 自动写的技能默认绕过 Skills Guard 内容扫描，且进入每次会话的 system prompt —— 安全纵深防御缺陷 |
| [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) `cron` | 6 | Cron 脚本路径守卫误拒绝引用默认 profile 脚本目录的合法任务（#32091 的逆回归） |
| [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) `P1` | 6 | 用户直言「害怕更新，因为每次都搞坏一切」—— 对更新稳定性的强烈不满 |
| [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) `P1` | 6 | macOS 桌面更新产生重复进程，失败窗口掩盖了仍在运行的真实更新 |
| [#70846](https://github.com/NousResearch/hermes-agent/issues/70846) `P2` | 5 | 上下文压缩导致人类可见消息历史也消失，无法回溯长对话 |
| [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) `P2` | 5 | `lifecycle_guard` 对 ELF 二进制路径误报 `embedded null byte`，良性命令被拒绝 |

**分析**：高热度讨论呈现两种情绪——**对更新流程可靠性的焦虑**（#81969、#75778）与**对安全/校验机制过度或不足的两极担忧**（#78515 安全扫描缺失 vs #81322 校验过度）。其中 #81969 的措辞强烈（"ANNOYING"、"no confidence"），已由 PR #82143 做出直接回应，建议维护者优先在 release notes 中回应此用户情绪。

---

## 5. Bug 与稳定性

今日报告 22 条 Bug 类 Issue（含更新、桌面、Agent 生命周期、MCP、安全问题），另有 2 个安全相关 Issue。按严重程度排列如下：

### P1 — 高危（更新阻断/核心功能不可用）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) | Windows 桌面更新在 npm `allowScripts` 策略下缺失 win32 binding 而完全无法更新 | ✅ 已有 [#82143](https://github.com/NousResearch/hermes-agent/pull/82143) |
| [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | macOS 桌面更新产生重复 `hermes-setup` 进程，错误窗口掩盖真实更新进程 | ❌ 尚无对应 fix |

### P2 — 中危（功能受损/数据风险/安全隐患）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#70846](https://github.com/NousResearch/hermes-agent/issues/70846) | Agent 上下文压缩同时清掉人类可见历史记录，无法回溯 | ❌ |
| [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) | `lifecycle_guard` 对 ELF 二进制路径抛 `embedded null byte`，良性命令被拒 | ❌ |
| [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) | 后台进程在 agent 生命周期 `release()` 时被 SIGTERM 误杀（`terminal(background=true)`） | ❌ |
| [#39245](https://github.com/NousResearch/hermes-agent/issues/39245) | ACP prompt 在 `usage_update` 不返回时永久挂起 | ❌ |
| [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | macOS `state.db` FTS 索引损坏，`hermes doctor` 探测失败，影响会话搜索与 handoff | ❌ |
| [#81430](https://github.com/NousResearch/hermes-agent/issues/81430) | `hermes memory status` 报告 Memory disabled，实际注入/工具集/doctor 均正常 —— 状态显示与实际行为不一致 | ❌ |
| [#81162](https://github.com/NousResearch/hermes-agent/issues/81162) | 自动语音回复同步阻塞文本响应，慢 TTS 后端拖垮整个会话回合 | ❌ |
| [#82074](https://github.com/NousResearch/hermes-agent/issues/82074) | Podman + SELinux 下自动挂载的 skills 目录缺少 `:z` 标签，容器内不可读 | ❌ |
| [#81995](https://github.com/NousResearch/hermes-agent/issues/81995) | stdio MCP 冷启动停滞时 in-flight 工具调用挂在死子进程上，占满 300s 超时 | ❌ |
| [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) 🔒 | 完整 CSI/SGR ANSI 序列可绕过 token 前缀掩码，API 密钥可能整体泄露 | ❌ |
| [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) 🔒 | Agent 生成的 skills 默认跳过内容扫描并进入所有会话 system prompt | ⚠️ 相关 [#82146](https://github.com/NousResearch/hermes-agent/pull/82146) 仅补充可配置工具，未修复默认关闭问题 |

### P3 — 低危

| Issue | 描述 |
|---|---|
| [#62171](https://github.com/NousResearch/hermes-agent/issues/62171) | npm 12 新默认安装脚本策略破坏 Linux 桌面更新路径 |
| [#77833](https://github.com/NousResearch/hermes-agent/issues/77833) | Kanban 事件流 WS 处理器在客户端断开时泄漏轮询任务，Executor 池占满、CPU 100%+ |
| [#81846](https://github.com/NousResearch/hermes-agent/issues/81846) | 桌面端「分支到新聊天」按钮间歇性消失，需重开会话才恢复 |
| [#43997](https://github.com/NousResearch/hermes-agent/issues/43997) | npm 11 `allow-scripts` 警告（advisory，未来将升级为阻断） |

**小结**：今日无新增 P0 级 Bug，但 P2 级问题密度较高。**#81012 安全掩码绕过问题值得最高关注**——攻击者可借 ANSI 色码使密钥明文泄露，建议优先安排修复。已有明确 fix PR 的仅 #81969 一条。

---

## 6. 功能请求与路线图信号

今日共 8 条功能请求 / RFC 类 Issue 更新，结合在审 PR 分析路线图信号：

### 🗳️ 明确纳入下一版本的高概率项

| 功能 | 相关 Issue / PR | 信号强度 |
|---|---|---|
| **委派子代理内存隔离** | [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) ↔ [#82157](https://github.com/NousResearch/hermes-agent/pull/82157)（per-child memory + 工具集权限边界） | Issue 提出后 5 天即有对应 PR，采纳概率高 |
| **Telegram 双向上下文反应** | [#81709](https://github.com/NousResearch/hermes-agent/pull/81709) + [#82159](https://github.com/NousResearch/hermes-agent/pull/82159)（对齐文档） | 功能与文档同步推进，预计随下版本落地 |
| **搜索专用工具集** | [#82155](https://github.com/NousResearch/hermes-agent/pull/82155)（`web_search` 与 `web_extract` 解耦） | 小而明确的改进，正在测试中 |
| **MCP 确定性测试夹具** | [#80475](https://github.com/NousResearch/hermes-agent/pull/80475)（`hermes mcp fixtures record/replay`） | 完善测试基础设施，属于高质量工程改进 |

### 📡 用户呼声较高、尚无明确动作

- **西班牙语界面**（[#82165](https://github.com/NousResearch/hermes-agent/issues/82165)）：桌面端语言列表含英/简中/繁中/日/阿，但全球第二大语言西班牙语缺席。评论仅 1 条但理由充分（约 6 亿使用者），低成本高回报。
- **统一内容搜索**（[#49103](https://github.com/NousResearch/hermes-agent/issues/49103)）：Cmd+K 目前只能搜会话 ID 和斜杠命令，诉求扩展为文件、会话历史、技能的 Spotlight 式全局搜索。
- **工具循环抑制（ToolCallStormBreaker）**（[#35573](https://github.com/NousResearch/hermes-agent/issues/35573)）：RFC 提出对相同工具相同参数循环调用的自动熔断，直击 token 浪费与用户体验痛点。
- **Cron 交付方式多选**（[#72337](https://github.com/NousResearch/hermes-agent/issues/72337)）：今日已关闭，但从「关闭」而非「实现」看，可能被更低优先级搁置或走了内部替代方案。
- **内置记忆生命周期管理**（[#78307](https://github.com/NousResearch/hermes-agent/issues/78307)）：MEMORY.md / USER.md 的检查、去重、压缩、冲突检测 UI。与 #82157 方向互补，但范围更大。

**路线图判断**：项目当前优先加固**运行时稳定性与安全边界**，功能侧集中在 **Telegram/多平台交互** 与 **子代理权限模型**。全球化（i18n）和开发者体验（Cmd+K、MCP 测试）是社区呼声较高但尚未排期的方向。

---

## 7. 用户反馈摘要

从今日活跃 Issue 评论提炼的用户声音：

### 😠 强烈不满

> **「每次更新都搞坏一切，我已经失去信心了。」** — [#81969](https://github.com/NousResearch/hermes-agent/issues/81969)
> 用户对更新流程的可靠性表达了强烈不信任，指出反复丢失配置、被迫重配。P1 紧急度 + 情绪化措辞，值得官方直接回应。

> **「点击更新后冒出两个安装进程，一个是假的失败了，真的一直在跑——我被那个失败窗口误导了。」** — [#75778](https://github.com/NousResearch/hermes-agent/issues/75778)
> macOS 更新流程缺乏进程互斥和清晰的用户反馈，错误提示反而掩盖真实状态。

### 😕 体验受阻

> **「压缩是为了省 token，但连人看的历史记录也一起没了，我没法回去翻之前做了什么。」** — [#70846](https://github.com/NousResearch/hermes-agent/issues/70846)
> 上下文压缩机制只考虑模型视角，未保留用户可读的完整记录，影响文档整理与长会话回溯。

> **「我的命令明明是合法的，却报‘embedded null byte’被拒了。」** — [#81322](https://github.com/NousResearch/hermes-agent/issues/81322)
> `lifecycle_guard` 对 ELF 二进制的误报让用户感到校验逻辑不可理喻，且错误信息不具可操作性。

> **「后台跑着的训练任务，会话一压缩就被 SIGTERM 杀掉了，退出码 -15。」** — [#41225](https://github.com/NousResearch/hermes-agent/issues/41225)
> 长时后台任务用户是重灾区，压缩/会话切换不应杀死独立后台进程。

### 🤔 困惑与不一致

> **「memory status 说 disabled，但注入和工具都开着，doctor 也说健康——到底信谁？」** — [#81430](https://github.com/NousResearch/hermes-agent/issues/81430)
> 状态报告与医生诊断结果矛盾，暴露了配置读取链路的不一致。

> **「TTY 上我能正常用，但 Telegram 语音回复要等好几秒才出文字，整个对话像卡住了一样。」** — [#81162](https://github.com/NousResearch/hermes-agent/issues/81162)
> 多平台网关下的响应时序问题，慢 TTS 不应阻塞主文本通道。

**整体用户情绪**：**更新可靠性是当前最大的信任赤字点**。#81969 和 #75778 占据了 P1 两天花板，社区的不满集中且有具体复现路径。好消息是 #82143 已直接回应 Windows 更新问题，建议发布时高调说明以重建信任。

---

## 8. 待处理积压

以下为长期开放、超过 1 个月未解决的重要 Issue，或在关键路径上停留过久的 PR，提醒维护者优先关注：

### ⏳ 超 2 个月未关闭的 P2 级缺陷

| Issue | 创建时间 | 搁置天数 | 说明 |
|---|---|---|---|
| [#39245](https://github.com/NousResearch/hermes-agent/issues/39245) | 2026-06-04 | 66 天 | ACP prompt 挂起影响所有 ACP 客户端接入体验 |
| [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) | 2026-06-06 | 64 天 | Cron 路径守卫回归，6 条评论仍无结论 |
| [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) | 2026-06-07 | 63 天 | 后台进程被误杀，影响自动化/长任务场景；标记 `needs-repro` |

### ⏳ 1-2 个月未关闭

| Issue | 创建时间 | 搁置天数 | 说明 |
|---|---|---|---|
| [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) | 2026-05-30 | 71 天 | ToolCallStormBreaker RFC，2 条评论后无维护者回应 |
| [#49103](https://github.com/NousResearch/hermes-agent/issues/49103) | 2026-06-19 | 51 天 | Cmd+K 统一搜索需求，社区期待度高 |
| [#57752](https://github.com/NousResearch/hermes-agent/issues/57752) | 2026-07-03 | 37 天 | 会话 DB 自动清理默认关闭且无警告，运维隐患 |
| [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | 2026-07-12 | 28 天 | macOS state.db FTS 索引损坏，影响搜索与 handoff |

### 🕘 近期待关注的安全 Issue（< 7 天）

| Issue | 创建时间 | 说明 |
|---|---|---|
| [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) | 2026-08-07 | ANSI 序列绕过密钥掩码，**建议优先处理** |
| [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) | 2026-08-04 | 默认开放 agent 生成技能进入 system prompt，无内容扫描 |

### 📌 PR 积压提醒

- [#53040](https://github.com/NousResearch/hermes-agent/pull/53040)（6/26 创建）— 桌面更新时保留上一个可用构建（rename 替代 delete），已等待 44 天，直接关系 #44225 更新破坏问题。

---

**日报总结**：Hermes Agent 过去 24 小时处于**高产出修复周期**——无新版本但 43 条 PR 积压，其中 P0/P1 级修复达 3 条。核心风险集中在**更新链路可靠性**（Windows/macOS 双平台均有 P1）与 **安全默认值**（#78515、#81012）。建议维护者优先合入 #82143、#82162、#82152 三个修复，并在下个 release notes 中明确回应用户对更新稳定性的信任诉求。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-09**
**数据来源：sipeed/picoclaw GitHub**


## 1. 今日速览

过去24小时内，PicoClaw 项目保持中等活跃度：Issues 端有 3 条更新（2 条活跃、1 条关闭），PR 端有 4 条更新但均处于待合并状态，无新版本发布。值得关注的是，社区连续提出两项针对通信协议层（IRC 长消息、OAuth 2.1 for MCP）的增强需求，同时出现了两个来自同一贡献者的高质量修复 PR（WhatsApp 客户端过期、Agent 前缀缓存优化）。整体健康度良好，但需留意 4 个待合并 PR 中 2 个已挂起超过一个月，存在维护响应延迟信号。


## 2. 版本发布

**无新版本发布。**


## 3. 项目进展

今日 **0 个 PR 被合并或关闭**，项目核心主干合并节奏暂缓。但以下 4 个 PR 处于待合并状态，值得关注：

- **[#3321](https://github.com/sipeed/picoclaw/pull/3321) fix(agent): move dynamic context after history to preserve prefix caching** — 调整了动态上下文在系统消息中的位置，以保留前缀缓存。此修复对 LLM 调用的 token 成本和响应速度有实际优化意义，合并后有望降低 API 开销。
- **[#3320](https://github.com/sipeed/picoclaw/pull/3320) fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"** — 升级 whatsmeow 依赖，解除 WhatsApp 通道因客户端版本过旧导致的连接失效问题，是恢复 WhatsApp 渠道可用性的关键修复。
- **[#3222](https://github.com/sipeed/picoclaw/pull/3222) refactor(deltachat): cleanup implementation, documentation -200LOC** — DeltaChat 通道实现清理，减少约 200 行代码，移除遗留特性和硬编码中继列表。
- **[#3193](https://github.com/sipeed/picoclaw/pull/3193) Added simplex channel type** — 新增 Simplex 频道类型支持。

尽管今日无合并动作，上述 PR 中的 #3320 和 #3321 若进入主线，将直接修复 WhatsApp 连接问题并优化 LLM 调用效率，对项目整体体验有明显推进。


## 4. 社区热点

今日讨论最活跃的是 **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)：Better support long messages in IRC**（4 条评论，持续活跃中）。

该 Issue 指出 IRC 协议默认 512 字节的消息长度限制，以及换行符被当作消息分隔符的问题。用户期望 PicoClaw 能将 IRCv3 中自动拆分的长消息视为一条完整消息处理。这一诉求指向了 PicoClaw 作为多平台网关在 IRC 协议适配上的真实体验缺陷，属于实际使用中会遇到的协议边界问题，且已持续活跃近三周（创建于 7 月 22 日，最近更新于 8 月 8 日），说明社区关注度较高。


## 5. Bug 与稳定性

按严重程度排列：

1. **[PR #3320](https://github.com/sipeed/picoclaw/pull/3320)：WhatsApp 客户端过期（405）** — 严重。当前钉住的 whatsmeow 库版本被 WhatsApp 官方拒绝，导致原生 WhatsApp 通道完全无法连接（连接约 5 秒后被丢弃且不重试）。**已有修复 PR**，等待维护者合并。

2. **[Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)：聊天界面输入框选中时 CPU 占用过高** — 一般。此 Bug 今日已被标记为 **已关闭**，但关闭原因未明确（可能为已解决或重复报告）。该问题影响 Web 端（Firefox 浏览器）的交互体验，提交者环境为 PicoClaw 0.3.1 + Go 1.26 + deepseek-v4-flash 模型。

> 注：#3292 虽已关闭，但未在数据中看到关联的 fix commit，建议维护者确认关闭原因是否合理。


## 6. 功能请求与路线图信号

今日 Issues 中提出两个功能请求：

- **[#3287](https://github.com/sipeed/picoclaw/issues/3287)：IRC 长消息支持** — 将 IRCv3 拆分后的长消息合并为单一语义消息。这是对现有 IRC 通道能力的实质性增强，难度中等，涉及消息聚合逻辑，可能进入下一迭代。

- **[#3302](https://github.com/sipeed/picoclaw/issues/3302)：MCP servers 支持 OAuth 2.1** — 引用 #2546 的同类需求。提交者将其标记为 "Nice-to-Have / Enhancement"（非核心功能），优先级信号偏弱。

结合 PR 队列来看，**[#3193](https://github.com/sipeed/picoclaw/pull/3193)（Simplex 通道）** 若合并，将新增一个全新的 IM 通道类型，属于功能性扩展；**[#3222](https://github.com/sipeed/picoclaw/pull/3222)（DeltaChat 清理）** 则更多是技术债清理。这些功能/重构与上述 Issue 需求互不冲突，且均未在此前发布的版本中出现，有潜力被纳入下一版本。


## 7. 用户反馈摘要

从今日活跃的 Issue 评论中可提炼出以下真实用户反馈：

- **IRC 使用痛点（#3287）**：用户使用 IRCv3 时，长消息被客户端自动拆分后，PicoClaw 无法识别其为一个完整消息。这暴露了在 IRC 这类旧协议适配上的消息完整性处理不足，直接影响机器人消息的语义解析质量。

- **CPU 资源占用问题（#3292）**：用户报告在 Firefox 中聚焦聊天输入框时 CPU 占用异常升高。尽管该 Issue 已关闭，但此类性能问题是 Web 前端体验的关键指标，值得后续跟进验证。

- **WhatsApp 通道不可用（#3320 PR）**：虽然该条目来自 PR 描述，但反映了一个实际运维痛点：WhatsApp 官方协议变更导致自建通道全面失效，且 PicoClaw 不自动重连。这说明对第三方协议的依赖具有脆弱性，社区期望项目方能及时跟进上游依赖更新。


## 8. 待处理积压

以下条目长期未获维护者响应，建议关注：

- **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)：Added simplex channel type** — 创建于 2026-06-27，已挂起 **43 天**，处于 stale 状态且无评论。

- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)：refactor(deltachat)** — 创建于 2026-07-03，已挂起 **37 天**，处于 stale 状态且无评论。

- **[Issue #3302](https://github.com/sipeed/picoclaw/issues/3302)：OAuth 2.1 for MCP servers** — 创建于 2026-07-30，已 **10 天** 未获维护者回应，虽标记为 Nice-to-Have，但社区期望明确其是否可能被排入后续迭代。

> 建议：上述 PR 已超过常规响应窗口，尤其 #3193 的 Simplex 通道功能若是完整实现，长时间搁置可能导致分支冲突和合并成本上升。建议维护者尽快给出评审意见或明确处理计划。


## 项目健康度总结

| 维度 | 状态 |
|------|------|
| 社区活跃度 | 🟡 中等 — Issue/PR 有持续讨论，但无新版本 |
| 合并节奏 | 🟡 今日无合并，存在 2 个超 1 个月的待审 PR |
| 修复响应 | 🟢 WhatsApp 修复已到位（待合并），Bug 处理及时 |
| 功能创新 | 🟢 社区积极提出新协议支持与协议适配改进 |

**总体评价**：PicoClaw 项目社区参与度稳定，修复类 PR 质量较高，但维护者需加快积压 PR 的处理速度，以避免功能分支过期产生不必要的合并冲突。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-09

## 1. 今日速览

过去 24 小时 NanoClaw 项目维持了健康的社区活跃度：新开/活跃 5 个 Issue、关闭 3 个；PR 方面 3 个待合并、3 个已合并/关闭。**社区核心关注点集中在 Discord 审批流缺陷及修复方案**（Issue #3201 / PR #3185），同时 **Mattermost 频道集成**（PR #3202/#3199）与 **Strava MCP**（PR #2777）等新功能代码已落地待审。今日无新版本发布，但多线程 bug 修复及功能推进的节奏显示项目处于持续迭代状态。有两个较早期（6 月）的 PR 也在今日被关闭，可能为维护者集中清理，整体项目健康度良好。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

**#2777 — `feat: add /add-strava skill for official Strava MCP`** （已关闭 | 6/15 创建 → 8/8 关闭）
新增官方 Strava MCP 接入能力，包含宿主侧 OAuth 流程和自动刷新 token 模块，扩展了渠道/集成生态。
🔗 https://github.com/nanocoai/nanoclaw/pull/2777

**#2776 — `feat: support remote HTTP/SSE MCP servers`** （已关闭 | 6/15 创建 → 8/8 关闭）
扩展 `McpServerConfig` 为 union 类型，支持 stdio（现有）与远程 HTTP/SSE 两类 MCP 服务器，并更新 `ncl groups config add-mcp-server` CLI 参数。
🔗 https://github.com/nanocoai/nanoclaw/pull/2776

**#3199 — `Add Mattermost channel integration (v2 ChannelAdapter)`** （已关闭 | 8/7 创建 → 8/8 关闭）
基于新一代 `ChannelAdapter`/`channel-registry.ts` 架构实现 Mattermost 集成，替代了指向已废弃 v1 架构的旧 PR #546。注意：**新 PR #3202 与 #3199 内容高度雷同，可能为同一作者重复提交**，维护者需要协调去重。
🔗 https://github.com/nanocoai/nanoclaw/pull/3199

**综合评估**：远程 MCP 支持与 Strava 技能被关闭，标志本轮代码审查完成（关闭原因待确认是否为合并或放弃）；Mattermost 与 Telegram 等渠道扩展正在推进。考虑到远程 MCP 是此前多期被提及的基础设施级能力，**其落地预计将显著增强项目在“多 agent、多工具”生态中的扩展性**。

---

## 4. 社区热点

**🔥 #3201 — Discord approval button clicks not registering**（已关闭，评论 2，👍 0）
这是今日讨论最集中的 Issue：Discord 审批卡片点击 Approve 后卡片仍显示 “0 by [user]”，请求随后被拒绝。用户在评论中提供了完整复现步骤与预期行为分析。同一问题已有对应修复 PR **#3185**，该 PR 指出根因是 Chat SDK bridge 的 webhook 路径在解析 `custom_id` 时按 `:` 分割，且未剥离 `\n` 分隔符。**社区诉求很强：审批流是多人协作的关键路径，必须尽快修复并回归测试。**
🔗 https://github.com/nanocoai/nanoclaw/issues/3201 | PR: https://github.com/nanocoai/nanoclaw/pull/3185

**辅助热点：#2528 Signal channel: image/PDF attachments unreachable from agent container**（评论 0，但已存活近 3 个月，8/8 有更新时间）
近期被触碰但未获回应，暗示 Signal 渠道在 v2 安装中的附件可达性问题仍未解决。
🔗 https://github.com/nanocoai/nanoclaw/issues/2528

---

## 5. Bug 与稳定性

按严重程度排序（🔴 高 / 🟡 中 / 🟢 低）：

### 🔴 高

**#3201 — Discord 审批按钮点击无效，owner 无法批准配置更新**（已关闭，有 PR #3185）
审批卡片始终显示 “0 by [user]”，所有请求实际被拒绝。直接影响多用户协作核心流程。**修复 PR 已于 8/4 提交，当前状态 OPEN 待合并。**
🔗 https://github.com/nanocoai/nanoclaw/issues/3201 | 修复: https://github.com/nanocoai/nanoclaw/pull/3185

**#3203 — `codex` provider 发出未声明的 `file` ProviderEvent**（OPEN）
`/add-codex` 在 main 上直接导致容器类型检查失败；即使编译通过，codex 生成的图片也因无人消费该事件而静默丢弃。**目前无关联 PR**。
🔗 https://github.com/nanocoai/nanoclaw/issues/3203

### 🟡 中

**#3206 — 入站附件在消息 ID 含路径分隔符的频道（如 Google Chat）上被静默丢弃**（OPEN）
`isSafeAttachmentName(messageId)` 拒绝任何含 `/` 或 `\` 的 ID，导致附件不出现在 agent 上下文中。**暂无对应 PR**。
🔗 https://github.com/nanocoai/nanoclaw/issues/3206

**#3177 — Docker 跨挂载文件系统上会话数据库锁竞争**（已关闭，PR 未关联）
VirtioFS 挂载场景下 SQLite DELETE journal 模式传播异常，导致 29,000+ readonly errors 与间歇性投递失败。**Issue 已关闭，但关闭原因未明示**（修复 commit 未在本次数据中体现），建议确认修复是否已合入 main。
🔗 https://github.com/nanocoai/nanoclaw/issues/3177

### 🟢 低 / 需维护者确认

**#3200 — 非典型 “Cartographer” 认知架构描述 Issue**（已关闭）
内容疑似与项目功能无关（更像外部系统提示词注入），已关闭。**无需处理**，但可留意是否有后续异常账号活动。
🔗 https://github.com/nanocoai/nanoclaw/issues/3200

---

## 6. 功能请求与路线图信号

**#3205 — 支持持久化的组级 OneCLI 密钥分配**（OPEN，无评论）
用户指出 NanoClaw 多用户场景下，agent 在 spawn 时获得哪些 vault 密钥存在两个相互矛盾的开放设计方向，且缺少持久化 per-group 模型。**这是非常关键的架构级反馈**，说明密钥隔离模型尚未定型，影响信任边界设计。建议纳入下一版本路线图讨论。
🔗 https://github.com/nanocoai/nanoclaw/issues/3205

**#3202 / #3199 — Mattermost 频道集成**（OPEN / CLOSED）
两个 PR 指向同一特性，需去重评审。Mattermost 是企业自托管团队的高频 IM 之一，该特性有助于吸引政企用户。
🔗 https://github.com/nanocoai/nanoclaw/pull/3202 | https://github.com/nanocoai/nanoclaw/pull/3199

**#2877 — Telegram 原生富渲染（sendRichMessage）**（OPEN，已挂起 6 周末合并）
基于 Bot API 10.1 实现 Telegram 富文本卡片。若与 Mattermost 同批合入，将显著补强 IM 渠道覆盖。
🔗 https://github.com/nanocoai/nanoclaw/pull/2877

**#2777/#2776 — Strava MCP 与远程 HTTP/SSE MCP 支持**（已关闭）
虽然 PR 已关闭，但底层能力（远程 MCP）仍应是路线图重要节点，建议在文档中明确状态（已合并/已废弃）。

---

## 7. 用户反馈摘要

- **审批流是最大痛点**（#3201）：用户明确描述“点了 Approve 实际被拒绝”的现象，说明 Discord 渠道的交互可靠性直接影响日常运营，此类问题优先级别最高。
- **Docker 环境的稳定性受到关注**（#3177）：VirtioFS 挂载下的 SQLite 锁竞争导致上万级错误，说明容器化部署的用户基数不小，对环境适配问题的敏感度高。
- **开发者体验需改善**（#3203）：`/add-codex` 在 main 上无法通过类型检查属于明显的回归风险，开发者在 Issue 中明确指出了事件类型未声明的问题，说明项目需要强化 CI 对 provider 事件的类型检查覆盖。
- **渠道附件一致性**（#2528/#3206）：Signal 与 Google Chat 的附件不可达问题分别来自不同的根因（容器内不可访问 vs. 路径审查静默丢弃），显示多渠道附件处理缺少统一抽象层。

---

## 8. 待处理积压

**#2528 — Signal 频道：图片/PDF 附件在 agent 容器内不可达**（5/18 创建，至今 OPEN，评论 0）
已存活近 3 个月且无维护者回应，Signal 用户无法分析图片/PDF 内容。若 Signal 不在支持优先级前列，建议明确标注 roadmap 位置或关闭原因，回应用户诉求。
🔗 https://github.com/nanocoai/nanoclaw/issues/2528

**#2877 — Telegram 原生富渲染 PR**（6/28 创建，至今 OPEN，挂起 6 周）
该 PR 带 `[follows-guidelines]` 标签，说明贡献者遵循了贡献指南，但仍未被 review。长时间挂起容易打击贡献者积极性，建议维护者安排评审或明确反馈。
🔗 https://github.com/nanocoai/nanoclaw/pull/2877

**#3203 — codex provider `file` 事件未声明**（8/8 创建，无 fix PR）
类型检查失败会阻断引入 codex 的用户，属于较新的高优 bug，**尚未有开发者指派或认领**，需尽快响应。
🔗 https://github.com/nanocoai/nanoclaw/issues/3203

---

*日报生成时间：2026-08-09 | 数据统计周期：2026-08-08 ~ 2026-08-09 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-09

## 1. 今日速览

过去 24 小时 IronClaw 保持高强度迭代：30 条 Issue 更新（新开/活跃 6 条，关闭 24 条），50 条 PR 更新（待合并 18 条，合并/关闭 32 条），无新版本发布。Issue 关闭速度（24:6）与 PR 合并速度（32:18）均显著快于新增，且大量 Reborn v1 迁移 tracking issue 批量关闭，标志着架构迁移主体已进入收尾阶段。合并队列中仍有多个 XL 级功能 PR（Web Push 通知、Slack/Telegram 共享会话、渐进式预览）等待合入，是 v1.1.0 的主要候选。需警惕的是，P1 token 估算 Bug 仍未修复，且安全层关键函数无调用者的问题今日被提出。

| 指标 | 数值 |
|---|---|
| Issue 更新 | 30（新开/活跃 6，关闭 24） |
| PR 更新 | 50（待合并 18，合并/关闭 32） |
| 版本发布 | 0 |
| 未修复 P1 Bug | 1（[#6989](https://github.com/nearai/ironclaw/issues/6989)） |

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 与 Issue 数量大，以下为影响面最广的几项：

**架构与安全语义**
- **[#7377](https://github.com/nearai/ironclaw/pull/7377) 已合并 — feat!: a run acts as its invoker — remove shared-route subject binding**：这是对 [#7157](https://github.com/nearai/ironclaw/issues/7157) 的全面跟进，在三个仍存在“运行者 ≠ 调用者”拆分的路径上统一应用“运行以调用者身份行动”的决策，同时纳入 2026-08-08 多智能体审计的全部 must-fix 与 follow-up 项。该 PR 是产品权限模型与 multi-tenant 安全语义的关键修正。

**测试与质量基建**
- **[#7382](https://github.com/nearai/ironclaw/pull/7382) 已合并 — feat(stress): scripted tool-call workload with durable write read-back**：落实 [#7360](https://github.com/nearai/ironclaw/issues/7360) Phase 1，mock LLM sidecar 现在可以驱动确定性 builtin/memory 工具序列，并通过生产路径验证 durable write 读回。填补了压力测试不覆盖内置 capability 写路径的空白。
- **[#7393](https://github.com/nearai/ironclaw/pull/7393) 已合并 — test(disclosure): measure the Core delivery pair**：在 wide-catalog 披露基准中加入 `outbound_deliver` 与 `outbound_delivery_targets_list` 的测量，巩固 [#7390](https://github.com/nearai/ironclaw/pull/7390) 的 Core-tier 分层决策。
- **[#7280](https://github.com/nearai/ironclaw/pull/7280) 已合并 — test(inspector): add browser, security, and operator coverage**：为 Web Debug Inspector 补齐跨作用域隔离、认证上下文缺失、连接上限、verbose 数据流排除等安全覆盖，并给每个浏览器 tab 分配稳定连接标识。

**技能系统语义变更**
- **[#6938](https://github.com/nearai/ironclaw/pull/6938) 已合并 — fix(skills): the model chooses the skill, not a keyword scorer**：技能激活从主机侧关键词评分改为模型显式通过 `builtin.skill_activate` 选择。消除“双路径激活但只有一条留痕”的隐性问题，是 [#6941](https://github.com/nearai/ironclaw/issues/6941) 史诗的重要一步。

**稳定性修复**
- **[#7389](https://github.com/nearai/ironclaw/pull/7389) 已合并 — fix(live-qa): verify triggered Slack delivery through the two-lane contract**：修复 `reborn-webui-v2-live-qa` lane 自 #7157 合并后持续失败的问题（交付用例仍依赖已退役的 completion-driver push record）。
- **[#7029](https://github.com/nearai/ironclaw/pull/7029) 已合并 — fix(product): restore durable delivery claim**：恢复 `Prepared -> Sending` CAS 作为 vendor-egress 所有权唯一仲裁，修复投递持久性 claim 的回归。

**Reborn 迁移 tracking 批量关闭**

超过 20 个 Reborn v1 parity tracking issue 于今日关闭，包括：**[#3280](https://github.com/nearai/ironclaw/issues/3280)**（M2 inbound workflow facade）、**[#3285](https://github.com/nearai/ironclaw/issues/3285)**（外部 channel 适配器迁移）、**[#3286](https://github.com/nearai/ironclaw/issues/3286)**（agent 命令行为保留）、**[#3287](https://github.com/nearai/ironclaw/issues/3287)**（memory/workspace 产品面迁移）、**[#3288](https://github.com/nearai/ironclaw/issues/3288)**（capability 生命周期管理）、**[#3410](https://github.com/nearai/ironclaw/issues/3410)**（v2 engine driver 模型适配器）、**[#4059](https://github.com/nearai/ironclaw/issues/4059)**（运行时错误恢复上下文）、**[#4118](https://github.com/nearai/ironclaw/issues/4118)**（CLI provider add/login parity）、**[#4539](https://github.com/nearai/ironclaw/issues/4539)**（approvals parity）等。这表明 Reborn v2 不是“能用”，而是已跨越与 v1 的产品/操作员级功能对齐门槛。

**整体判断**：Re 架构迁移的主体能力补齐工作已基本完成，项目重心转向质量加固（压力测试、浏览器覆盖、审计修复）与新功能扩展（Inspector、通知渠道）。

---

## 4. 社区热点

- **[Issue #6989](https://github.com/nearai/ironclaw/issues/6989) — P1 token accounting Bug（5 条评论）**：今日讨论最集中的 issue。核心矛盾在于 `ModelWorkRequest::for_assistant` 从 `content_ref` 的 **字符串引用** 长度估算 token，而非引用内容的实际长度，导致 token 计量失真。评论围绕混合 provider-usage + tail estimate 的修复方向展开，属于直接影响用户成本可见性的高敏感问题。

- **[PR #7398](https://github.com/nearai/ironclaw/pull/7398) — feat(web-push): browser push notifications + PWA**：XL 级、risk: medium。将 Web 应用升级为第一方通知渠道，支持 W3C Web Push（RFC 8030/8291/8292）。背后诉求是让 Web 端在自动化通知矩阵中获得与 Slack/Telegram 对等的地位，预计会收到较多社区反馈。

- **[PR #7397](https://github.com/nearai/ironclaw/pull/7397) — Presence-based shared conversations for Slack & Telegram**：直接构建在今日已合并的 #7377 的 acting-identity ladder 之上，使“owner ≠ actor”成为安全的日常运行形态。配合 **[#7396](https://github.com/nearai/ironclaw/pull/7396)**（Slack 渐进式预览），说明团队正在多用户共享会话与通知体验上做深度创新。

- **[PR #7373](https://github.com/nearai/ironclaw/pull/7373) — Gate & ratchet audit（OPEN）**：对全部 37 个架构测试 gate 文件、5 个 in-crate module-charter gate、约 80 个 CI 脚本进行全面审计，修复 5 个 fail-open 并删除死 gate。这是对 #7157 六连红 CI 的体系性回应，值得关注最终合并。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| P1 | **[#6989](https://github.com/nearai/ironclaw/issues/6989)** — token 估算从引用字符串长度而非实际内容计算，影响成本计量 | OPEN，5 条评论 | 无 |
| 安全 | **[#7391](https://github.com/nearai/ironclaw/issues/7391)** — `SafetyLayer::validate_input` / `scan_inbound_for_secrets` 在实时 Reborn turn 路径上无调用者；安全文档描述的数据流与实际代码不符 | OPEN，新报告 | 无 |
| 回归 | **[#7341](https://github.com/nearai/ironclaw/pull/7341)** — 修复 WebUI scoped attachment 读取回归，并还原 SSE 测试 | OPEN（修复 PR） | 同左 |
| 并发 | **[#7395](https://github.com/nearai/ironclaw/pull/7395)** — 修复 outbound send-claim TOCTOU 竞态，允许失败行重新打开 | OPEN（修复 PR） | 同左 |
| CI | **[#7394](https://github.com/nearai/ironclaw/pull/7394)** — 修复 `SANDBOX_DOCKER_EXACT_PATHS` crate 前缀硬编码问题 | OPEN（修复 PR） | 同左 |
| 已修复 | **#7377** 多智能体审计 must-fix（含 fail-open gate、权限拆分等） | 已合并 | — |
| 已修复 | **#7389** live-qa lane 持续失败 | 已合并 | — |

**重点关注**：#7391 若属实，意味着“Validate, Sanitize, Detect Leaks”安全链路在 Reborn 生产路径上未实际生效，属于文档-实现漂移，建议维护者尽快确认并给出回应。

---

## 6. 功能请求与路线图信号

- **向 v1.1.0 靠拢的功能**：
  - **[#7218](https://github.com/nearai/ironclaw/issues/7218) — Web Debug Inspector 史诗**：虽然 epic 仍 OPEN，但其子任务 [#7226](https://github.com/nearai/ironclaw/issues/7226)（浏览器/安全/文档覆盖）与 [#7225](https://github.com/nearai/ironclaw/issues/7225)（bounded verbose tool details）均已关闭，配套 PR [#7280](https://github.com/nearai/ironclaw/pull/7280) 与 **[#7291](https://github.com/nearai/ironclaw/pull/7291)**（stats/导航/本地化，OPEN）接近完成。该功能大概率进入下一版本。
  - **渠道体验三件套（均为 OPEN PR）**：Web Push 通知（[#7398](https://github.com/nearai/ironclaw/pull/7398)）、Slack/Telegram presence 共享会话（[#7397](https://github.com/nearai/ironclaw/pull/7397)）、Slack 渐进式预览（[#7396](https://github.com/nearai/ironclaw/pull/7396)）。三者共同勾勒出 v1.1.0 在“多用户协作 + 通知闭环 + 实时交互”方向的产品意图。

- **新提出的路线图信号**：
  - **[#7392](https://github.com/nearai/ironclaw/issues/7392) — Replace first-party coding tools with pinned omp tool surface（新 epic）**：将模型可见的 coding 工具替换为 oh-my-pi 固定 commit 的精确契约，通过现有 always-on host-owned 路径交付。这是对工具面标准化的重要信号。
  - **[#6939](https://github.com/nearai/ironclaw/issues/6939) — 迁移工具**：用户明确提出的从 Hermes/Openclaw 迁移配置/记忆的需求，仍无 assignee。考虑到这直接影响用户采用门槛，建议纳入路线图评估。

---

## 7. 用户反馈摘要

- **迁移成本高（来自 [#6939](https://github.com/nearai/ironclaw/issues/6939) 的 user feedback）**：现有 Hermes/Openclaw 用户面临高切换成本，无法携带既有配置和记忆到 IronClaw。反馈原文称“Several users would resist starting over with a clean slate”。这是 adoption 层面的真实摩擦点，目前无迁移工具或迁移路径的回应。

- **安全文档与实现不一致（来自 [#7391](https://github.com/nearai/ironclaw/issues/7391)）**：贡献者/审计者指出 `docs.ironclaw.com/security` 中“用户输入 → Validate, Sanitize, Detect Leaks → LLM”的数据流，在代码中对应的函数没有出现在实时 Reborn turn path 上。这类文档-代码漂移会直接影响用户对安全承诺的信任。

- **Token 计量不准确（来自 [#6989](https://github.com/nearai/ironclaw/issues/6989)）**：`ModelWorkRequest::for_assistant` 从引用字符串长度估算输入 token，导致用户看到的 token 消耗与实际不符。对于按 token 计费/监控的用户来说，这是成本可见性问题，评论中已有修复方向讨论。

- **测试覆盖盲区被开发者主动指出（来自 [#7360](https://github.com/nearai/ironclaw/issues/7360)）**：nightly 压力测试的 mock 模型始终返回无工具调用的最终回答，导致 built-in capability 写路径回归可能在压力测试中逃逸。#7382 的合并已部分解决该问题，这种主动补盲区的行为是项目质量文化的正面信号。

---

## 8. 待处理积压

按优先级排列，提醒维护者关注：

1. **[#6989](https://github.com/nearai/ironclaw/issues/6989) — P1 token 估算 Bug**：已 OPEN 8 天，5 条评论，无 fix PR。作为 P1 且直接影响成本计量，建议尽快分配 owner。

2. **[#7391](https://github.com/nearai/ironclaw/issues/7391) — SafetyLayer 无调用者**：安全相关，新报告。若确认是回归则需立即修复；若是文档过时则需更新文档，避免误导用户。

3. **[#6939](https://github.com/nearai/ironclaw/issues/6939) — 迁移工具需求**：已 OPEN 9 天，无 assignee、无维护者回应。属于明确的用户呼声，长期沉默会积累负面口碑。

4. **[PR #7048](https://github.com/nearai/ironclaw/pull/7048) — fix(wasm): sanitize guest diagnostics**：XL 级，20 个 owned commits，依赖 [#7063](https://github.com/nearai/ironclaw/pull/7063)。已 OPEN 6 天，需确认依赖状态并推动 review。

5. **[PR #7028](https://github.com/nearai/ironclaw/pull/7028) — fix(outbound): preserve terminal status during recovery**：S 级，其下游依赖 #7029 已合并，但 #7028 本身仍 OPEN。建议尽快合入，避免依赖栈长期分叉。

6. **[#7343](https://github.com/nearai/ironclaw/pull/7343) — LLM settings reset（bot 提交）**：由 `ironloopai[bot]` 提交，experienced 贡献者署名，已 OPEN 2 天。包含配置清除保护与 API route 鉴权，建议补充 human review。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-09

## 今日速览

项目过去24小时整体活跃度**偏低**，仅有1条Issue更新与3条PR更新，且均带有 `stale` 标记，说明这些条目长期缺乏实质维护响应，只是因近期评论或编辑被重新激活。**无新版本发布**。目前处于待合并状态的2个PR分别涉及SQLite性能优化和文档徽章，核心功能开发节奏放缓。社区层面，唯一有评论的是用户请求“硬编码工具默认配置”的Issue #1192，反映出用户对模型指令跟随不稳定、希望增加确定性控制的需求。整体判断：项目进入维护平稳期，但**积压的stale PR/Issue值得维护者及时处理**，以避免贡献者流失。

---

## 版本发布

近24小时内**无新版本发布**，亦无 Release 预发布信息。项目近期版本迭代可能处于间歇期。

---

## 项目进展

今日**无PR被合并**，仅1个PR被关闭（#2193，非合并关闭，状态为CLOSED）。

| PR | 状态 | 内容 | 影响 |
|---|---|---|---|
| [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193) | **CLOSED** (未合并) | feat: add LiteLLM as AI gateway provider | 原计划通过复用现有 `chatWithOpenAICompatible` handler 接入 LiteLLM，提供100+ LLM提供方兼容接入，且零新依赖。该PR未获合并即关闭，**LiteLLM 集成暂未落地** |

该PR关闭原因未在数据中说明，可能因设计变更、重复实现或维护者未及时跟进。若该功能对路线图有意义，建议维护者给出明确说明，避免贡献者困惑。

另外有1个PR在今日保持开放但处于 **stale** 状态：

- [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) [OPEN] perf(sqlite): eliminate write amplification with debounce + batch transactions — 解决每次行变更都触发整个内存数据库 `export()` + `fs.writeFileSync()` 的写放大问题。该PR从2026-04-01创建至今已4个多月未合并，是**重要的性能优化候选**。

**项目整体进展评估**：今日无代码合并，项目功能面推进速度为0，但性能优化基础设施仍在等待决策，未来若能合并#1193将显著提升存储层效率。

---

## 社区热点

今日最活跃的讨论集中在[Issue #1192: 自定义已有工具的默认配置](https://github.com/netease-youdao/LobsterAI/issues/1192)，这是**唯一有评论的条目**（1条评论，更新于2026-08-08）。

**用户诉求**：希望为内置工具（如browser）提供“写死”的默认配置，例如强制以无头模式启动，而不是依赖大模型每次通过记忆/指令遵循来执行。用户反映“大模型的指令跟随经常不好”，即使加入了记忆仍不可靠。

**分析**：这触及当前Agent工具调用的一个核心痛点——**工具行为的不确定性**。当工具参数由LLM动态生成时，即使用户明确指定偏好，模型仍可能忽略或改变。用户希望引入**声明式强制默认配置**，确保关键偏好（如无头模式）不被模型覆盖。这不仅是功能请求，更是对Agent可预期性/可控性的深层需求。

热度点评：参与度低（仅1评论），但信号明确，且与Agent可靠性直接相关，值得产品团队重视。

---

## Bug 与稳定性

今日**无新报告的Bug、崩溃或回归**。

但存在一个未合并的**性能缺陷修复PR**，值得关注：

- **[#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) [OPEN] perf(sqlite): eliminate write amplification with debounce + batch transactions**
  - 严重程度：**中高**（性能类，非崩溃，但长期运行会导致存储 I/O 成倍放大，影响大数据库场景）
  - 根因：`sql.js` 将整个数据库驻留内存，`SqliteStore.save()` 每次行写入都执行完整 `db.export()` + `fs.writeFileSync()`，导致写入放大
  - 方案：引入 debounce + 批量事务，降低持久化频率
  - 状态：自2026-04-01 起开放，已 stale，**尚无 fix PR 代替**

若该项目用户量大或数据量大，该问题可能导致 UI 卡顿或磁盘寿命折损。建议维护者评估合并此PR或提供替代方案。

---

## 功能请求与路线图信号

### 1. 工具默认配置硬编码（Issue #1192）
- **来源**：[#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)
- **需求**：允许为内置工具写死默认参数，绕过LLM的指令跟随不可靠问题
- **可能纳入版本**：如果路线图强调 Agent 可控性，该功能可能在后续版本中实现（例如增加 `tools.customDefaults` 配置项）

### 2. LiteLLM AI 网关接入（PR #2193，已关闭）
- **来源**：[#2193](https://github.com/netease-youdao/LobsterAI/pull/2193)
- **需求**：允许用户通过 LiteLLM proxy 连接100+ LLM提供商，单一 OpenAI 兼容端点即可
- **状态**：已关闭，未能合并。但需求真实存在，若未来有多个用户请求，维护者可能重新开放

### 3. TakoAPI 目录徽章（PR #2294）
- **来源**：[#2294](https://github.com/netease-youdao/LobsterAI/pull/2294)
- **需求**：在 README 添加 TakoAPI 开放目录的徽章，提升项目在 AI-agent 生态中的曝光度
- **性质**：文档/社交信号，不涉及核心功能，合并成本极低

### 路线图信号小结
- **短期优先级**：性能优化（#1193）、工具确定性（#1192）是用户价值最高的两个方向
- **中期可能性**：若希望扩大模型兼容性，LiteLLM 集成值得重新考虑
- **生态曝光**：TakoAPI 徽章合并成本低，且有助项目被发现

---

## 用户反馈摘要

从 Issue #1192 的评论中提炼真实用户声音：

**场景**：用户在无人值守或后台运行时使用 browser 工具，不希望每次弹出浏览器窗口打扰自己。用户已在记忆中加入“以无头模式启动”的指令，但大模型经常不遵循。

**痛点**：
1. **大模型指令遵循不稳定**：即使写入记忆，模型仍可能忽略或改变操作参数，导致用户意图无法稳定执行
2. **缺少确定性逃逸舱口**：用户希望不依赖模型智能，而是用配置“硬锁”某些行为，确保 100% 执行
3. **工具使用体验受损**：由于无法保证无头模式，用户在自动化场景中被工具打断，降低了对整体产品的信任

**用户情绪**：礼貌但带有一定的无奈（“谢谢！”），表明用户仍希望项目改进，但对当前模型上限感到沮丧。

**深层信号**：Agent 工具层的“可配置默认值”是刚需，用户的耐心有限。如果多个人工智能代理项目都能提供静态工具配置，而 LobsterAI 不能，用户可能迁移。

---

## 待处理积压

以下为长期未获响应的条目，建议维护者优先处理，以保持社区健康度和贡献者积极性：

### P0 — 重要功能PR停滞（4个月+）

| 条目 | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) perf(sqlite): eliminate write amplification | 2026-04-01 | OPEN + stale | 尽快 review；若合并有价值，给予明确时间表；若不合并，关闭并说明原因，避免贡献者等待 |

### P1 — 用户期望未闭环

| 条目 | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) 自定义已有工具的默认配置 | 2026-04-01 | OPEN + stale | 该 Issue 已被标记 stale，但今日仍有用户更新讨论。建议维护者回应是否接受该需求，或给出临时 workaround（如提供 `browserHeadless` config 字段） |

### P2 — 低风险高收益

| 条目 | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294) docs: add TakoAPI directory badge | 2026-07-08 | OPEN + stale | README 徽章，合并几乎零成本，可快速完成或直接关闭 |

### ⚠️ Stale 风险提示

目前所有活跃条目均标记为 `stale`，说明项目维护响应周期已超过社区预期（通常 stale 标记出现在30天无活动后）。长期不处理会导致：
- 贡献者失去动力，不再提交 PR
- 新用户认为项目不活跃，降低采用意愿
- 旧 PR 累积 merge conflict，增加未来合并成本

***建议***：安排一次维护者集中处理（triage day），逐条回应以上积压条目，明确“合并 / 关闭 / 下一步行动”，并在 Issue 中公开说明。这将对项目健康度产生直接且可见的正面影响。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-09

## 1. 今日速览

过去 24 小时 Moltis 仓库共产生 3 项动态：新开 Issue 1 条、关闭 Issue 1 条、关闭/合并 PR 1 条，无新版本发布。整体活跃度中等，但事件高度聚焦——PR #1105（Docker 沙箱文件系统工具 fallback 修复）与 Issue #1096（Docker 下 `Read`/`Write`/`Edit` 工具不可用）同日关闭，标志着一个持续两个月的容器环境兼容性问题完成修复闭环。与此同时，新上报的 Issue #1185 将同类问题延伸到 Apple Container 1.x 场景，提示沙箱能力在不同容器运行时的兼容性仍有空缺。项目总体处于常规维护节奏，健康度良好，但需关注修复方案的边界覆盖。

## 2. 版本发布

过去 24 小时无新版本发布，此部分省略。

## 3. 项目进展

**Docker 沙箱文件系统工具修复闭环（PR #1105 + Issue #1096）**

PR [#1105](https://github.com/moltis-org/moltis/pull/1105) “Fix Docker sandbox filesystem tool fallback” 于 2026-08-08 关闭。该 PR 由贡献者 penso 提交，主要工作包括：

- 为沙箱化 `Read`/`Write`/`Edit`/`MultiEdit` 工具补充了对 `/home/sandbox` 和 `workspace/data` 路径的回归测试覆盖；
- 当 gateway 进程无法访问宿主机挂载时，实现从「翻译后的 Docker 宿主机路径」到「容器内操作」的自动回退；
- 保留直接宿主机场景下缺失列表（missing-list）的既有语义，避免行为回归。

与之对应的 Issue [#1096](https://github.com/moltis-org/moltis/issues/1096)（`Read`/`Write`/`Edit` 工具在 Docker 中无法工作，2026-06-03 创建）也在同日被关闭。这标志着自 6 月以来社区反馈的容器内文件工具不可用问题已正式解决，是 Moltis 在容器化部署可用性上的一个明确里程碑。

## 4. 社区热点

过去 24 小时内所有 Issue/PR 的评论数均为 0，无高讨论度高互动的热点议题。但以下动态值得关注：

- 新 Bug [#1185](https://github.com/moltis-org/moltis/issues/1185) 刚刚提交（2026-08-08），是社区当前最新的声音。虽然尚无评论，但标题直指 Apple Container 1.x 沙箱运行状态误判，属于功能性障碍，预计会引发后续讨论；
- Issue [#1096](https://github.com/moltis-org/moltis/issues/1096) 从 6 月初创建到 8 月 8 日关闭，生命周期长达两个月。从时间线可以推断社区对 Docker 环境下的文件操作有真实且持续的需求，关闭后将直接改善这部分用户的体验。

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 状态 | 说明 |
|---|---|---|---|
| 高 | [#1185](https://github.com/moltis-org/moltis/issues/1185) Apple Container 1.x sandbox 启动但 Moltis 误判为未运行 | OPEN | 新上报 Bug。沙箱实际已启动但被上层误判，可能导致沙箱功能不可用、重复初始化或状态管理混乱。作者 mikz 已确认使用最新版本，目前无关联 fix PR，需维护者复现并确认是否与 #1105 的回退逻辑边界场景有关。 |
| 已解决 | [#1096](https://github.com/moltis-org/moltis/issues/1096) Docker 下 `Read`/`Write`/`Edit` 工具失效 | CLOSED | 由 [#1105](https://github.com/moltis-org/moltis/pull/1105) 修复并关闭。 |

**风险提示**：#1105 的修复聚焦 Docker 宿主机挂载路径回退，而 #1185 在 Apple Container 1.x 上出现类似「运行状态误判」现象，说明容器启动检测与文件系统路径处理可能需要更通用的抽象机制，而非逐个容器运行时打补丁。

## 6. 功能请求与路线图信号

过去 24 小时无新功能请求提交。

从 PR [#1105](https://github.com/moltis-org/moltis/pull/1105) 的内容来看，维护者对沙箱文件系统工具补充了系统性的回归测试（覆盖 `/home/sandbox`、`workspace/data` 等关键路径），这是项目增强测试基础设施、提升长期稳定性的信号。结合新 Bug #1185 的上下文，「多容器运行时兼容」很可能成为下一迭代的质量主线，建议关注后续是否会出现面向 Apple Container、Docker、直接宿主机三种模式的统一沙箱检测方案。

## 7. 用户反馈摘要

受限于 24 小时内所有 Issue/PR 评论数均为 0，以下结论主要基于 Issue 正文与动作推断：

- **正面反馈（可预期）**：#1096 作者 IlyaBizyaev 报告的「Docker 下文件工具不可用」被修复并关闭。该用户清理勾选了 Preflight Checklist 且创建于 6 月初，是典型的真实使用场景报障，修复后此类用户的容器内文件操作流程将恢复正常；
- **新痛点反馈**：#1185 作者 mikz 在使用最新版 Moltis 时遇到 Apple Container 1.x 沙箱状态误判，说明在非 Docker 容器环境中仍有体验缺口。该用户同样遵循了规范的问题报告流程，反馈质量高；
- **贡献者行为**：PR #1105 作者 penso 的提交包含回归测试与语义保留说明，工程规范良好，反映出贡献者社区具备较高的协作水准。

## 8. 待处理积压

- **[#1185](https://github.com/moltis-org/moltis/issues/1185)（OPEN，2026-08-08 创建）**：全新 Bug，尚无维护者响应。涉及 Apple Container 1.x 沙箱状态误判，影响沙箱功能正常使用，请维护者尽快纳入排查队列；
- **PR 评审周期提示**：[#1105](https://github.com/moltis-org/moltis/pull/1105) 从 2026-06-05 创建到 2026-08-08 关闭，历时约 2 个月。虽然最终合入，但评审/合并周期偏长可能影响贡献者积极性，建议关注维护带宽或引入更多社区维护者参与评审。

---
*报告基于 GitHub 公开数据生成，统计窗口为 2026-08-08 至 2026-08-09。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 开源项目动态日报

**日期：2026-08-09** | 数据窗口：过去 24 小时 | 数据源：GitHub

---

## 1. 今日速览

过去 24 小时项目活跃度处于高位：**19 条 Issue 更新**（17 条活跃 / 2 条关闭），**50 条 PR 更新**（47 条待合并 / 3 条合并关闭），未发布新版本。社区贡献流充沛，但 47 条待合并 PR 已形成一定审阅积压，合并通道可能成为瓶颈。最值得关注的是 2.1.0b2 版本集中暴露了一组回归类问题：MCP 断连后对话永久阻塞（#6822）、macOS 打开 SQLite 崩溃（#6814）、OpenAI Responses 续聊摘要异常（#6811），这些直接影响核心对话可用性，建议优先处理。与此同时，社区功能诉求（删除对话清理临时文件、审批描述、国产模型 Provider 接入）与已有 PR 形成呼应，项目正处于功能迭代与稳定性修复并行的活跃期。

---

## 2. 版本发布

**无新版本发布。** 当前社区讨论背景主要为 2.0.1（稳定版）与 2.1.0b2（测试版）并存使用的状态。

---

## 3. 项目进展

过去 24 小时内共有 **3 个 PR 被合并或关闭**，但均未进入评论热度 Top 20 列表，具体内容未能从本次数据中获取。从仍在活跃流转的高质量 PR 来看，以下工作正在实质性推进：

| PR | 方向 | 状态 | 价值 |
|---|---|---|---|
| [#5861](https://github.com/agentscope-ai/CoPaw/pull/5861) | fix(desktop): 修复 macOS 打包后 login-shell PATH 丢失 | Under Review | 直接关系 #6831 的 Whisper ffmpeg 不可用问题，Homebrew/nvm 等工具链可被发现 |
| [#6767](https://github.com/agentscope-ai/CoPaw/pull/6767) | fix(config): 共享文件系统上 agent 持久化加固（原子写入、设备/inode 级缓存键） | ready-for-human-review | 降低多机/共享存储环境下的配置文件损坏风险 |
| [#6536](https://github.com/agentscope-ai/CoPaw/pull/6536) | fix(chats): 删除对话时清理持久化数据 | OPEN | 回应 #6299 与今日 #6827，补齐文件垃圾治理能力 |
| [#6779](https://github.com/agentscope-ai/CoPaw/pull/6779) | refactor(context): 将 Scroll 收敛为唯一上下文协议，与 AgentScope 2.0 生命周期对齐 | OPEN | 减少 Native/Scroll 双分支带来的状态恢复与记忆不一致 |
| [#6719](https://github.com/agentscope-ai/CoPaw/pull/6719) | feat(chat): 对话轮次内持久化展示工作区产物卡片 | OPEN | 提升 Agent 工作区产物的可观测性 |
| [#6764](https://github.com/agentscope-ai/CoPaw/pull/6764) | feat(ci): 用测试结果作为 main 合并门禁 | OPEN | 消除"测试红了也能合入"的流程缺口（需要管理员导入 ruleset） |
| [#6398](https://github.com/agentscope-ai/CoPaw/pull/6398) | feat: ReMe 记忆检索引入 reranker 重排序 | Under Review | 提升记忆召回精度，over-fetch + rerank 方案 |
| [#6238](https://github.com/agentscope-ai/CoPaw/pull/6238) | perf(drivers): 并发初始化 Driver 处理器（8 路并发） | Under Review | 缩短多 MCP 场景下的启动时间 |

整体判断：**项目未停滞，但"待合并/已合并"比例（47:3）显示进入维护者审阅阶段的工作较多**，下一步的合并速度将直接决定这些功能何时落地。

---

## 4. 社区热点

**[#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) — docker 版插件市场/应用市场始终提示"维护中"（9 条评论）**
今日讨论热度最高。2.0.1 docker 版本的市场服务不可用，涉及插件与应用的正常获取，属于阻塞日常使用的回归问题。用户等待回复中，说明容器化部署场景（与桌面端独立）需要单独验证。

**[#6811](https://github.com/agentscope-ai/CoPaw/issues/6811) — OpenAI Responses 续聊摘要异常（5 条评论）**
Scroll 淘汰旧回合并触发主模型摘要时，`disable_thinking` 参数被忽略，且 60 秒取消被错误报告为"畸形输出"。评论关注点在于错误信息误导排障，以及长对话下摘要调用对主对话的同步阻塞。

**[#6490](https://github.com/agentscope-ai/CoPaw/issues/6490) — 请求新增 Volcengine Agent Plan 与小米 MiMo 标准 API Provider（5 条评论）**
社区对国内云厂商/模型端点接入的需求持续存在，希望开箱即用地配置火山引擎订阅版与小米 MiMo 端点。该 Issue 自 07-27 以来一直活跃，与 PR [#6293](https://github.com/agentscope-ai/CoPaw/pull/6293)（阿里云 qwen3.8-max-preview 接入）共同构成"国产模型快速接入"的明确信号。

**[#6820](https://github.com/agentscope-ai/CoPaw/issues/6820) — 前端 UI 直到全部完成才显示模型输出/思考/工具调用（4 条评论）**
用户反馈流式输出体验严重缺失：思考过程、工具调用和模型输出全部生成完毕后才一次性渲染。这不是数据缺失而是渲染时序问题，对 Console 的"AI 进行中"感知影响较大。

---

## 5. Bug 与稳定性

按严重程度降序排列，并标注 fix PR 情况：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#6814](https://github.com/agentscope-ai/CoPaw/issues/6814) | macOS 打开 Scroll history.db（SQLite WAL）时 `SIGBUS (FS pagein 22)` 崩溃，位于 `sqlite3WalFindFrame` | 未发现 |
| 🔴 高 | [#6822](https://github.com/agentscope-ai/CoPaw/issues/6822) | streamable HTTP MCP 瞬时断连，自动重连后当前对话永久阻塞 | 未发现 |
| 🔴 高 | [#6811](https://github.com/agentscope-ai/CoPaw/issues/6811) | OpenAI Responses 续聊摘要忽略 `disable_thinking`，60s 取消误报为 malformed output | 未发现 |
| 🔴 高 | [#6821](https://github.com/agentscope-ai/CoPaw/issues/6821) | thinking-mode 模型（DeepSeek V4 系列）多轮对话抛 400，要求回传 `reasoning_content` | 未发现 |
| 🟠 中 | [#6812](https://github.com/agentscope-ai/CoPaw/issues/6812) | Google Gemini API 拒绝带 `$schema` 字段的工具 schema，报 "Model 'unknown' execution failed" | 未发现（已定位根因） |
| 🟠 中 | [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) | docker 2.0.1 插件/应用市场提示"维护中" | 未发现 |
| 🟠 中 | [#6813](https://github.com/agentscope-ai/CoPaw/issues/6813) | 聊天自动标题生成遇 agentscope 2.x ChatResponse 抛 `KeyError: '__aiter__'`，功能持续失败 | 未发现 |
| 🟠 中 | [#6810](https://github.com/agentscope-ai/CoPaw/issues/6810) | Windows 安装/更新时浏览器扩展 NM host 锁文件导致 NSIS "无法打开要写入的文件"多次报错 | 未发现 |
| 🟠 中 | [#6828](https://github.com/agentscope-ai/CoPaw/issues/6828) | Console 空闲时因无限 CSS 动画（ai-copilot-blink + antd spinner）持续重绘，CPU 约 20% | 未发现（根因已定位） |
| 🟠 中 | [#6826](https://github.com/agentscope-ai/CoPaw/issues/6826) | 助手消息结束时间显示异常（实际思考 2 分钟，页面仅显示几秒） | 未发现 |
| 🟠 中 | [#6831](https://github.com/agentscope-ai/CoPaw/issues/6831) | macOS 本地 Whisper 报 "ffmpeg: disabled"，因 PATH 未包含 `/opt/homebrew/bin` | [#5861](https://github.com/agentscope-ai/CoPaw/pull/5861) 可能覆盖 |
| 🟡 低 | [#6820](https://github.com/agentscope-ai/CoPaw/issues/6820) | 前端 UI 不流式展示输出/思考/工具调用，全部完成后才渲染 | 未发现 |
| ⚪ 已关闭 | [#6756](https://github.com/agentscope-ai/CoPaw/issues/6756) | `run_tool_batch` 报 "No toolkit available"（2.1.0b1） | 已关闭，原因未披露 |
| ⚪ 已关闭 | [#4558](https://github.com/agentscope-ai/CoPaw/issues/4558) | 长文本输出时 CPU 异常升高（怀疑前端渲染） | 已关闭，原因未披露 |

**稳定性观察：** 今日报告的高严重度 Bug 集中在 **连接生命周期**（MCP 重连、OpenAI 续聊摘要、reasoning_content 回传）与 **macOS 本地数据链路**（SQLite WAL、PATH）。这类问题会造成对话不可用或应用崩溃，对用户信任影响最大；且目前均无对应 fix PR 进入合并队列，需要维护者优先分配资源。

---

## 6. 功能请求与路线图信号

| Issue/PR | 诉求 | 路线图信号 |
|---|---|---|
| [#6832](https://github.com/agentscope-ai/CoPaw/issues/6832) | AI 提交审批时附带一句话用途描述，而非只展示 PowerShell 代码 | 权限审批透明化，涉及 Core + Console，适宜下个迭代 |
| [#6827](https://github.com/agentscope-ai/CoPaw/issues/6827) | 删除对话时可选清理该对话产生的临时文件 | 与 [#6536](https://github.com/agentscope-ai/CoPaw/pull/6536) 直接对应，落地可能性较高 |
| [#6838](https://github.com/agentscope-ai/CoPaw/issues/6838) | 子代理：自动切换模型、共享 workspace 目录、web 端配置显示混乱 | Agent 编排/多模型工作流方向 |
| [#6490](https://github.com/agentscope-ai/CoPaw/issues/6490) | 内置 Volcengine Agent Plan 与小米 MiMo 标准 API | 国产 Provider 接入信号明确，与 [#6293](https://github.com/agentscope-ai/CoPaw/pull/6293) 形成呼应 |
| PR [#6771](https://github.com/agentscope-ai/CoPaw/pull/6771) | Embedding 模型配置中英文指南（OpenAI-compatible / DashScope / Gemini / Ollama） | 记忆功能文档补全 |
| PR [#6719](https://github.com/agentscope-ai/CoPaw/pull/6719) | 对话内持久化工作区产物卡片 | 类 WorkBuddy 的可观测体验 |
| PR [#6398](https://github.com/agentscope-ai/CoPaw/pull/6398) | ReMe 记忆检索接 reranker | 记忆质量增强方向 |

**判断：** 路线图上有三条主线：① **记忆/上下文工程**（#6779、#6398、#6771）；② **Provider 生态扩展**（#6490、#6293）；③ **会话体验与治理**（#6536、#6719、#6832）。其中 #6536、#6771 已具备可合并条件，预期会较快进入主线。

---

## 7. 用户反馈摘要

- **安装部署痛点跨平台蔓延：** docker 用户遇到市场永续"维护中"（#6782），Windows 用户被浏览器扩展 NM host 锁文件卡死安装（#6810），macOS 用户遭遇 Whisper ffmpeg 因 PATH 缺失而不可用（#6831）。三个平台均有安装/环境链路问题，安装器健壮性需要统一治理。

- **"对话永久卡死"打击信任：** 用户 BLUE0818 连续提交 #6811 与 #6822，分别对应 OpenAI Responses 摘要阻塞和 MCP 断连后阻塞。这类一旦发生就必须强杀进程的问题被反复报告，是最影响用户信心的稳定性问题。

- **流式渲染是 Console 核心短板：** #6820 反映输出、思考、工具调用都在全部完成才显示，用户无法感知 Agent 实时进度。这是体验层面的高频反馈。

- **审批与工具调用不透明：** #6832 要求审批时附一句话描述，#6819 指出 Channel 工具在需要审批时没有任何提示，用户无法判断工具是卡住还是在等待批准。控制/审批链路的可见性不足。

- **透明度与细节问题：** #6826 时间显示倒挂（思考 2 分钟显示几秒）、#6827 删除对话后工作区遗留孤立文件——都属于"小问题、大感知"的用户体验细节。

- **社区贡献质量较高：** 多个用户附有完整复现步骤、截图和根因分析（#6812 直接给出 `$schema` 字段诊断、#6828 定位到具体 CSS 动画、#6814 定位到 `sqlite3WalFindFrame`），降低了维护者排查成本。其中 BLUE0818、jackicy9736 多次提交高质量反馈，值得认可。

---

## 8. 待处理积压

**需要优先响应的新 Bug：**
- [#6814](https://github.com/agentscope-ai/CoPaw/issues/6814)（SIGBUS 崩溃）、[#6822](https://github.com/agentscope-ai/CoPaw/issues/6822)（MCP 会话阻塞）、[#6811](https://github.com/agentscope-ai/CoPaw/issues/6811)（OpenAI 摘要阻塞）、[#6821](https://github.com/agentscope-ai/CoPaw/issues/6821)（thinking-mode 400）——四个高严重度问题目前均无 fix PR，建议维护者在本周内完成 triage 并指定处理人。

**长期开放的有效 Feature：**
- [#6490](https://github.com/agentscope-ai/CoPaw/issues/6490)（07-27 创建，已开放 13 天）：Volcengine / 小米 Provider 请求，建议与 #6293 PR 合并排期，明确答复用户。

**在 Review 阶段滞留较久的 PR（按滞留时长排序）：**

| PR | 首次提交 | 滞留时长 | 建议 |
|---|---|---|---|
| [#5823](https://github.com/agentscope-ai/CoPaw/pull/5823) | 07-07 | 33 天 | 飞书图片发送修复，功能完整，建议尽快 review |
| [#5861](https://github.com/agentscope-ai/CoPaw/pull/5861) | 07-08 | 32 天 | 可连带解决 #6831，价值明确 |
| [#6238](https://github.com/agentscope-ai/CoPaw/pull/6238) | 07-18 | 22 天 | 启动性能优化，Under Review 中 |
| [#6293](https://github.com/agentscope-ai/CoPaw/pull/6293) | 07-21 | 19 天 | Provider 接入，依赖方在等 |
| [#6398](https://github.com/agentscope-ai/CoPaw/pull/6398) | 07-23 | 17 天 | reranker 功能，属于记忆主线 |

**首贡献者 PR 关注：**
- [#6041](https://github.com/agentscope-ai/CoPaw/pull/6041)（doom loop 误判修复）、[#6102](https://github.com/agentscope-ai/CoPaw/pull/6102)（测试隔离 meta-test）、[#5861](https://github.com/agentscope-ai/CoPaw/pull/5861)（desktop PATH）均来自初次贡献者。若暂不合并，建议给出明确 review 意见或关闭理由，以保护贡献者持续参与意愿。

**流程警示：** 47 条待合并 PR 对照 3 条已合并/关闭，合并速度远低于提交速度。长期看会形成技术债和贡献者流失风险，建议维护者审视 CI 门禁（#6764 已在推进）与 review 容量。

---

*本报告由 AI 生成，数据基于 2026-08-09 过去 24 小时 GitHub 公开动态。链接指向 agentscope-ai/CoPaw 仓库对应 Issue/PR。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-09

## 1. 今日速览

过去 24 小时 ZeroClaw 仓库保持**高活跃度**：50 条 Issue 更新（47 条活跃 / 3 条关闭），50 条 PR 更新（48 条待合并 / 2 条关闭），无新版本发布。当前焦点集中在三大方向：**安全边界加固**（审批权限、路径隔离、泄露检测误报）、**SOP/headless 自动化链路修复**（#9841 接替 #9494 进入审阅）、以及 **RFC 流程与架构治理**（#8692 决策队列、#9496 流程精简讨论热度持续）。值得注意的是，累计 48 条 PR 处于待合并状态，合并效率可能成为短期瓶颈；P1 级 bug 数量偏多，稳定性打磨仍在进行中。

## 2. 版本发布

本期无新版本发布。

---

## 3. 项目进展

过去 24 小时共有 **2 个 PR 关闭**，其中最重要的是 SOP 自动化链路的关键推进：

- **[#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)（open）— fix(sop): drive headless SOP runs, and close the five defects found reviewing #9494**：这是昨日最重要的进展。该 PR 公开接替 #9494（已关闭），携带原作者的 4 个提交不变并 rebase 到最新 master，同时修复了 review 中发现的 **5 个阻断性问题**，外加 1 个自行发现的缺陷。这直接回应了 #9805（SOP auto 模式 headless 卡死）和 #9340（CLI 创建的 cron 任务输出被丢弃）两个 P1 问题。
- **[#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494)（closed）— fix(sop): drive cron-started headless runs**：被 #9841 正式取代而关闭，其提交已完整继承到 #9841，cron 触发 SOP 运行的核心修复没有丢失。
- **[#9798](https://github.com/zeroclaw-labs/zeroclaw/pull/9798)（closed）— docs(sop)**：临时性文档补丁，被 #9841 取代（所述行为将被运行时修复移除）。

**整体判断**：虽然合并数量不多，但 SOP 自动化方向从"文档描述当前行为"到"运行时真正驱动 headless 执行"迈出了实质性一步。待合入后，长期存在的 cron/SOP 任务"看似成功实则无输出/永久卡死"问题将得到根治。

---

## 4. 社区热点

今日讨论最活跃的议题集中在**安全边界**与**治理流程**两个主题：

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（11 评论）— Maintainer decision queue for RFCs and design issues**：作为 RFC 和设计问题的维护者决策队列 tracker，高评论数表明大量架构决策等待维护者拍板。这是观察项目决策效率的一扇窗口。
- **[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)（11 评论）— RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore**：用户强烈要求增加类 `.gitignore` 的 `.zeroclawignore` 机制，以保护 workspace 内的敏感文件（`.env`、`config.yaml` 等）不被 agent 读取。这是 AI agent 访问控制的关键需求。
- **[#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)（11 评论，已关闭）— RFC: Retire the standalone aardvark-sys crate**：硬件支持代码集中化重构的又一案例，与 #9803（zeroclaw-robot-kit 退役）呼应，显示维护者在推进 crate 结构精简。
- **[#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)（10 评论）— System prompt tool-availability mismatch across entry points**：核心 bug 已在 #8053 修复，但同一类问题仍存在于网关、WebSocket、多模态、`/think` 等入口，属于深层次架构一致性问题。

**诉求分析**：社区当前最在意的是「AI agent 的权限边界」（哪些文件能读、哪些人可审批、哪些工具可见）和「决策流程效率」（RFC 积压）两件事。

---

## 5. Bug 与稳定性

过去 24 小时活跃的 Bug 中，**P1 级数量较多**，按严重程度整理如下：

### P0 / 高危安全（已在处理中）
- **[#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)（P1, in-progress）— 任意聊天成员可响应交互式审批**：Telegram、Slack、Lark、Matrix 四个渠道的审批响应未校验发起人身份。这是权限绕过类安全漏洞，需优先关注。

### P1 高危
- **[#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)（P1, accepted）— `forbidden_paths` 对 `allowed_roots` 下所有路径失效**：`is_path_allowed` 在 allowed-root 检查时直接返回 true，跳过 forbidden-path 循环。安全配置形同虚设，暂无对应 PR。
- **[#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)（P1, accepted）— Anthropic 成本恒为 $0.00，预算上限永不触发**：直接后果是 daily/monthly budget 保护机制失效，生产环境费用失控风险高。暂无对应 PR。
- **[#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)（P1, in-progress）— 系统提示工具可用性与实际工具不一致**：多个入口仍存在"推理模型被告知无工具可用"的同类问题。核心路径已修复，剩余为 gateway/WebSocket/多模态入口的收尾工作。
- **[#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)（P1, in-progress）— 退出 Web 聊天窗口即中断代理任务**：用户离开 dashboard 后 agent 循环被当作"用户中断"处理，S1 级工作流阻断。
- **[#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805)（P1, in-progress）— SOP auto 模式从渠道触发后永远卡在 running**：占用并发槽位、跨重启存活。**已有修复 PR #9841**。
- **[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)（P1, in-progress）— CLI 创建的 cron 任务投递被硬编码为 none**：任务运行显示 ok 但输出丢失。**已有修复 PR #9841**。
- **[#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390)（P1, in-progress）— 紧急停止仅写入 CLI 状态文件，运行时无路径读取**：紧急停止功能实际不生效，审计发现的问题。
- **[#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)（P1, in-progress）— stdio MCP 服务器进程未被回收，积累僵尸进程**：长时间运行后资源泄漏。
- **[#9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573)（P1, accepted）— 同一 provider 类型多别名时成本定价查找失败**：配置的 token 价格被忽略。

### P2 中危
- **[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)（P2, in-progress）— 高熵检测误伤 Solana 钱包地址，且配置无法关闭**：俄语用户报告实际使用被阻断。
- **[#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656)（P2, in-progress）— 审批等待期间打字指示器持续运行**：阻塞中的 turn 看起来像正常工作，造成误导。**已有修复 PR #9823**。
- **[#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)（P2, in-progress）— Docker Compose 网关保持 loopback 绑定导致端口不可达**：S1 级用户工作流受阻但优先级为 P2。
- **[#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)（P2, accepted）— 渠道任务缺少"有意不回复"的一等公民结果**：条件任务"有新邮件才通知"仍然发出可见响应。

**稳定性总结**：安全相关 bug（审批越权、路径绕过、泄露误报）和自动化链路（cron/SOP 输出丢失）是当前两大痛点。好消息是 SOP 链路已有 #9841 在途，Telegram 审批体验修复有 #9823/#9822 在途。

---

## 6. 功能请求与路线图信号

今日新提交或高热度功能请求：

- **[#9845](https://github.com/zeroclaw-labs/zeroclaw/issues/9845)（新，accepted）— 支持非 ASCII 字符的 agent 别名（如 `[agents."审核助手"]`）**：中文/日文用户的直接需求，当前 `validate_alias_key` 仅允许小写字母，可能影响国际化采用。
- **[#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)（P1, in-progress）— 简化默认 web 工具面为 `web_fetch` + `web_research` + `http_request`**：安全导向的默认工具精简，原始 `web_search_tool` 将移入 research 子代理，浏览器自动化改为显式 opt-in。方向与安全加固主线一致。
- **[#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)（P2, in-progress）— OpenAI 兼容 chat completions 端点**：社区呼声高，Open WebUI / LobeChat 等生态工具可直接接入，有望纳入近期路线图。
- **[#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)（RFC）— 统一包/能力/配置/运行时状态目录契约**：为插件生态（CLI、gateway、dashboard 三类视图）定义统一产品级目录，属于插件化架构的中长期方向。

**路线图判断**：安全加固（工具面精简、审批权限收敛）和生态集成（OpenAI 兼容端点、国际化别名）是下一版本最可能纳入的方向。配套 PR 中，[#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828)（agent 配置编写 + operator 审批预览）和 [#9854](https://github.com/zeroclaw-labs/zeroclaw/pull/9854)（context-window 家族注册表推导）已进入审阅/可测试状态，其中 #9854 直接修正了 provider 识别的手写列表问题，修复面较明确。

---

## 7. 用户反馈摘要

- **Telegram 渠道体验问题集中**：用户反馈媒体组被拆分为多条独立请求（[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)）；审批等待期间一直显示"typing"状态，让用户误以为代理在正常工作（[#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656)）；工具执行期间 draft 消息无进度可见（[#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)）。这些反馈指向渠道层交互细节的打磨需求。
- **安全误报影响真实使用**：俄罗斯用户报告其 Solana 钱包地址在 Telegram 上被替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，支付请求 URL 无法投递（[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)、[#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)）。用户理解这是检测器设计使然，但认为**公开区块链地址不应被脱敏**，需要白名单机制。
- **后台任务模型与用户预期不符**：Web dashboard 用户反馈"退出聊天窗口即中断 agent"（[#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)）——用户期望关闭界面后代理继续在后台执行任务，但当前会话生命周期将离开视为中断。
- **静默失败打击信任**：cron 任务显示 `ok` 但输出无处投递（[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)）、anthropic 成本显示恒为 $0（[#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)），这类"看似成功实则无效"的问题最影响用户信任。
- **贡献者对流程的意见**：[#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) 直言 RFC 流程"比决策本身还慢"，7 天讨论期 + 全票一致 + 人工计票的组合让贡献者感到 cumbersome。

---

## 8. 待处理积压

以下问题长期未获足够响应，建议维护者重点关注：

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（07-04 创建，11 评论）— 维护者决策队列 tracker**：本身即 Request For Decisions 的积压清单。若该队列长期未消化，会影响后续 RFC 的周转效率。
- **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)（04-08 创建）— Telegram 媒体组批处理**：已积压约 4 个月，in-progress 状态但无进展信号。Telegram 渠道的核心体验问题。
- **[#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)（05-14 创建）— Telegram 部分流式工具进度**：积压近 3 个月，今日已有对应 PR [#9822](https://github.com/zeroclaw-labs/zeroclaw/pull/9822) 提交，建议借此机会推进合并。
- **[#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099)（06-02 创建，P3）— `zeroclaw status` 输出接入 i18n**：低优但已长期无人响应。
- **[#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)（06-26 创建）— herdr agent 集成 PR**：一个多月未合并，需维护者确认是否仍有意向。
- **[#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571)（P0 标记）— 移除 WATI 频道的 XL 级 chore PR**：涉及面广（channel、CI、容器、installer、web proxy 多处删除），且被打上 `needs-author-action`，需要维护者投入审阅资源。
- **[#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)（07-31 创建）— network guard 原语迁至 `zeroclaw-infra::net_guard`**：ADR-013 方向的 Stage 1，是插件网络策略的前置工作，同样处于 `needs-author-action`。

---

**健康度总评**：ZeroClaw 当前处于**高强度迭代期**，社区活跃、反馈质量高，安全与自动化意识明显增强。需要警惕的是 P1 bug 积压数较多（约 10 个活跃）以及 48 条待合并 PR 带来的"产出→合入"延迟。建议维护者优先处理审批越权（#9387）与成本预算失效（#9816）两项安全问题，并推进 #9841 的合入以解决 SOP/cron 链路长期存在的功能性缺陷。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*