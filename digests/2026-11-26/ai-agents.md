# OpenClaw 生态日报 2026-11-26

> Issues: 386 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-26 19:39 UTC

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

# OpenClaw 项目日报 — 2026-11-26

## 1. 今日速览

项目维持极高活跃度：过去 24 小时 Issues 更新 386 条（新开/活跃 275、关闭 111），PR 更新 500 条（待合并 242、合并/关闭 258），并发布 1 个稳定通道版本。但稳定性压力仍然突出——网关内存泄漏是贯穿今日讨论的主线，多个 P0/P1 级内存与崩溃问题（#91588、#159662、#153426、#158912、#89278）继续开放且评论活跃，尚无关联 fix PR 合入。PR 侧今日以 UI、平台渠道、Codex/模型目录的修补为主，多项小修复已关闭或进入维护者待看状态，显示日常修复节奏正常。综合看：社区规模与维护吞吐量健康，但网关核心稳定性是当前项目健康度的主要风险点。

## 2. 版本发布

**v2026.10.34**（gateway-only `extended-stable` 通道，项目当前的 LTS 等价通道）
- 内容：基于 2026 年 10 月底的 OpenClaw，叠加关键安全更新、可靠性与性能修复，以及新模型支持等功能。
- 破坏性变更：发布说明中未提及。
- 迁移注意事项：该版本为 gateway-only 的稳定通道版本，供偏好长期稳定而非最新功能的部署使用。注意同期 beta/stable 用户报告的更新路径问题（见下）尚未在发布说明中确认修复。

## 3. 项目进展

今日合并/关闭的重要 PR：
- **#206110（closed）** 减少会话回忆时 Gateway 的工作量：转录 worker 批量授权时不再为每批构建排序会话列表投影。 https://github.com/openclaw/openclaw/pull/206110
- **#206091（closed）** 修复 `skills workshop changes --limit 501` 在 Gateway 运行时返回校验错误的问题。 https://github.com/openclaw/openclaw/pull/206091
- **#206105（closed）** 清理冗余的呈现层测试排列，保留功能、转义、隐私与边界守卫。 https://github.com/openclaw/openclaw/pull/206105
- 另有 Issue #182891（prompt cache 不再复用，每次请求 `cache read` 掉为 0）与 #177094（Control UI webchat 系统通知镜像错位显示）今日已关闭。

整体评价：今日合并以性能削减、CLI 边界修复和测试精简为主，属于稳健的维护性推进；但重量级的内存/会话状态问题仍停留在开放状态，项目在核心稳定性上向前推进幅度有限。

## 4. 社区热点

| Issue/PR | 讨论 | 诉求分析 |
|---|---|---|
| #91588 P0 网关内存泄漏，RSS 350MB→15.5GB，反复 OOM | 42 条评论 | 最热的长期话题。用户已提交复现细节，标签显示 `needs-maintainer-review` / `needs-info`，社区期待官方定位。https://github.com/openclaw/openclaw/issues/91588 |
| #182891 prompt cache 从不复用（已关闭，29 条） | 29 | 涉及 Envelope 重写、runtimeContextCarrier 变化与回合内丢失，直接关系推理成本。https://github.com/openclaw/openclaw/issues/182891 |
| #159662 `prepared-model-catalog.worker.js` 约 4-5 GB/h 无界泄漏 | 29 | 用户做了冷重启+provider 二分定位，标签为 `not-repro-on-main`，说明主分支与发布版仍存在差异。https://github.com/openclaw/openclaw/issues/159662 |
| #153426 MEMORY.md/USER.md 被 provenance ratchet 静默永久排除出 bootstrap 注入 | 27（👍3） | 涉及记忆与安全，用户强调「无诊断、无 CLI、无恢复手段」。https://github.com/openclaw/openclaw/issues/153426 |
| #204775 发布更新路径设计（状态、归属与计划） | 23 | 维护者协调用的共享参考，反映更新系统正被重构。https://github.com/openclaw/openclaw/issues/204775 |
| #204816 2026.11.4→2026.11.8 stable 更新校验通过但回滚 | 11 | 近两周最棘手的更新回归之一，标签含 `queueable-fix`。https://github.com/openclaw/openclaw/issues/204816 |

## 5. Bug 与稳定性

按严重程度：

**P0**
- #91588 网关内存泄漏至 15.5GB、反复 OOM 崩溃 — **无 fix PR**（`no-new-fix-pr`）。https://github.com/openclaw/openclaw/issues/91588
- #153426 `MEMORY.md`/`USER.md` 被静默排除出 bootstrap 注入，含安全影响 — **无 fix PR**，需产品/安全决策。https://github.com/openclaw/openclaw/issues/153426
- #89278 Codex OAuth 刷新成功但 cron/heartbeat 以 10 秒超时失败 — **已有开放关联 PR**（`linked-pr-open`）。https://github.com/openclaw/openclaw/issues/89278
- #158912 2026.9.6 起 `MEMORY.md` 不再在 bootstrap 注入，文档与行为不一致 — 无 fix PR。https://github.com/openclaw/openclaw/issues/158912

**P1**
- #159662 `prepared-model-catalog.worker.js` 持续泄漏约 4-5 GB/h — 无 fix PR，主分支未复现。https://github.com/openclaw/openclaw/issues/159662
- #196199 自 2026.10.10 起原生 Codex helper 完成后无法恢复父代理，导致目标暂停 — 无 fix PR。https://github.com/openclaw/openclaw/issues/196199
- #181432 升级 2026.10.5 后基线 RSS 约 1.9GB、SQLite 事务超时 — `needs-info`。https://github.com/openclaw/openclaw/issues/181432
- #154812 V8 堆外 RSS 失控导致主机 OOM 与关停超时 — 无 fix PR。https://github.com/openclaw/openclaw/issues/154812
- #182369 堆外 RSS 约 0.1 GiB/h 增长，内部 `rss_threshold` 监控从不触发 — 无 fix PR。https://github.com/openclaw/openclaw/issues/182369
- #171831 Windows 2026.10.2 相较 2026.9.4 性能回归（启动 320s vs 55s，每回合事件循环阻塞 112s） — 无 fix PR。https://github.com/openclaw/openclaw/issues/171831
- #203442 更新后 Doctor 报 "Plugin deepseek Doctor source must be prepared before loading" — 无 fix PR。https://github.com/openclaw/openclaw/issues/203442
- #204816 稳定通道更新通过校验后回滚（doctor-failed / Invalid config） — `queueable-fix`。https://github.com/openclaw/openclaw/issues/204816
- #196820 Control UI 在 `Element.getAnimations()` 循环中约 100% CPU 卡死 — 无 fix PR。https://github.com/openclaw/openclaw/issues/196820

**P2（选择性）**
- #123792 CLI 后端（claude-cli）下助手回合渲染两次。https://github.com/openclaw/openclaw/issues/123792
- #161379 模型目录刷新循环永久占满一个 CPU 核。https://github.com/openclaw/openclaw/issues/161379
- #200781 Control UI 2026.11.5 会话侧边栏只显示代理标题 — 无修复。https://github.com/openclaw/openclaw/issues/200781
- #200756 Windows beta.2→beta.4 在 package-swap 阶段失败回滚。https://github.com/openclaw/openclaw/issues/200756

**今日相关修复 PR（待合并）**
- #206122 `changedOnly` 模型目录发现收敛与过期退避（P1，需安全评审）https://github.com/openclaw/openclaw/pull/206122
- #205945 修复 2026.9.37 Git 更新期间数据库捕获受阻 https://github.com/openclaw/openclaw/pull/205945
- #206124 清除更新遗留的 updater 副本目录（每个 0.6–3.7 GiB）https://github.com/openclaw/openclaw/pull/206124
- #206089 / #206126 跨版本升级时保留 Codex 本地/原生线程 https://github.com/openclaw/openclaw/pull/206089 / https://github.com/openclaw/openclaw/pull/206126

## 6. 功能请求与路线图信号

- **更新系统重构**：#204775 设计文档已公开，配套 #206124（残留副本清理）、#205945（更新期 DB 捕获）已提交 PR，显示下一版重点在更新路径的可靠性与磁盘占用。
- **会话命名与子代理生命周期**：#103067 提议集中化会话命名并定义 ACP/子代理会话的寿命与跨渠道持久化；与今日 Codex 线程保留 PR（#206089/#206126）方向一致，具备进入路线图的条件。
- **语义化更新错误码**：#127195 指出 16 处调用点抛出完全相同的「changed while starting work」错误，要求加原因码——可观测性诉求强烈，尚无 PR。
- **Doctor 恢复能力**：#170562 请求可列出并清理「卡住的 requester settle wake」，当前只能手动改状态库。
- **通知与模板增强**：#143387（Android 通知按会话区分/跨设备抑制，作者已声明不再推进实现）、#169428（`/usage full` 页脚暴露认证配置）。
- **Signal 群聊图片**：#202586 提议在 @ 提及场景纳入近期群内图片，PR 已有充分证明，待维护者审阅。
- **本地化**：#206130 自动同步 Control UI 语言包。
- **语音输入结构化**：#205791 在应用前识别口述中的段落与列表，属新 UX 方向，等待作者。

## 7. 用户反馈摘要

- **痛点集中在网关内存**：多位自托管用户给出具体场景——systemd 用户服务、单用户、约 50 个 cron、Discord 常驻、ARM64/1GiB 受限主机；共同描述为启动后 RSS 持续单调上涨，且内部 `rss_threshold` 监控不生效（#182369、#192547）。
- **升级体验不稳**：npm-global 与 Windows 用户报告「候选校验通过 → 激活阶段回滚」的失败模式（#204816、#203442、#200756），并要求清理更新遗留的大体积目录（#206124）。用户对更新机制的信任是当前最敏感的体验问题。
- **记忆功能失望**：#153426、#158912 的反馈强调文档说「会话开始加载」而实际未注入，且无诊断/CLI/恢复路径；用户指出普通网页搜索回合即可触发该状态。
- **成本与缓存**：#182891 用户在实际使用中观察到 cache read 掉为 0，说明 prompt 缓存未复用，直接影响 API 花费。
- **平台差异**：Windows 性能回归、Control UI 卡死、Android 通知体验是跨平台用户最集中的抱怨；Telegram 在渲染类问题中反而未受影响（#123792）。
- **正面信号**：Codex/Claude 订阅用户持续提交流程化修复 PR（如 #194860 将 Claude Code 会话/5 小时限制提示视为限流），说明集成层用户黏性较高。

## 8. 待处理积压

- **#91588**（创建 2026-06-09，今日仍活跃）：P0 内存泄漏，42 条评论，`needs-maintainer-review`、`needs-info` 长期挂起，是当前最需维护者介入的项。https://github.com/openclaw/openclaw/issues/91588
- **#89278**（创建 2026-06-02）：P0 Codex OAuth 超时导致的定时/心跳失败，关联 PR 开放但未合入。https://github.com/openclaw/openclaw/issues/89278
- **#154812**（2026-09-21）/ **#159662**（2026-09-27）：内存类 P1，久未推进，且 #159662 主分支无法复现，需要更系统的诊断手段。https://github.com/openclaw/openclaw/issues/154812 / https://github.com/openclaw/openclaw/issues/159662
- **#103067**（2026-07-09）：会话命名与子代理寿命的产品决策，13 条评论仍待定。https://github.com/openclaw/openclaw/issues/103067
- **#112638**（2026-07-22，`stale`）：`session.maintenance enforce` 模式无法约束存储上限，线程/渠道条目被豁免回收。https://github.com/openclaw/openclaw/issues/112638
- **#127195**（2026-08-21）：错误信息缺少原因码，15 条评论无 fix PR。https://github.com/openclaw/openclaw/issues/127195
- **#170562**（2026-10-13，`stale`）：Doctor 恢复卡住的子代理 wake。https://github.com/openclaw/openclaw/issues/170562
- **PR #201971**（2026-11-19，XL，「waiting on author」）：在工具渲染器加载时保持聊天响应，跨 7 天仍待作者处理。https://github.com/openclaw/openclaw/pull/201971
- **PR #202586**（2026-11-20，Signal 群内图片，`waiting on maintainer`），以及 #205791、#194860 等待作者或维护者响应。

---
*说明：本报告仅基于提供的 GitHub 数据。PR 评论数在数据中未提供（显示为 undefined），故社区热点以 Issue 讨论量为主。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告
**数据日期：2026-11-26**

---

## 1. 生态全景

今日生态系统呈现**"头部高负荷、中腰部精细打磨、尾部静默"**的典型分层格局：OpenClaw 以日均 886 条 Issue/PR 更新和稳定版本发布遥遥领先，但核心网关内存泄漏问题长期未解，暴露"规模换不来稳定性"的隐忧。中腰部项目（Hermes Agent、CoPaw、ZeroClaw、LobsterAI）活跃度相近但方向分化——分别聚焦多 profile 隔离、渠道渲染与记忆语义、安全架构收敛、DSH 迁移收尾。NanoBot、NanoClaw、Moltis 处于小步增量修复阶段，响应链路通畅但讨论热度低。整体看，**输入通道健壮性（附件/多模态/渠道语义）、多会话隔离、上下文与成本可控性、安全边界收紧**是贯穿全生态的四大共性诉求，而非单一项目的孤立问题。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/关闭） | PR 更新（待合/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 386（275/111） | 500（242/258） | v2026.10.34（extended-stable） | 规模健康，**核心稳定性为最大风险**（P0 内存泄漏无 fix PR） |
| **Hermes Agent** | 50（49/1） | 50（15/35） | 无 | 吞吐健康但关闭多为插件 pin 更新，核心修复有限；多 profile 性能问题突出 |
| **CoPaw** | 25（11/14） | 50（30/20） | 无 | 高活跃、响应快（新 Bug 当日有 fix PR）；30 条待合并中巨型 PR 积压 |
| **ZeroClaw** | 13（8/5） | 50（47/3） | 无 | 开发强度高但**合并吞吐偏低**，47 条待合并 + 多个高危大 PR 叠积 |
| **LobsterAI** | 0（0/0） | 21（1/20） | 无 | 单日 20 条合并，积压消化快；但 Issues 零活动，缺用户侧独立信号 |
| **NanoClaw** | 2（0/2） | 15（8/7） | 无 | 中高活跃、修复导向明确，安全治理规范（转私密漏洞流程） |
| **NanoBot** | 7（6/1） | 3（2/1） | 无 | 中偏高活跃，报告—修复—关闭闭环通畅；多模态/网络层健壮性短板 |
| **Moltis** | 1（1/0） | 3（3/0） | 无 | 低活跃，单一贡献者连续攻关，**3 PR 零评审互动为瓶颈** |
| **PicoClaw** | 0 | 6（2/4） | 无 | 低活跃，仅依赖升级 + 清理 8 个月前的批量 PR，修复落地不明 |
| **NullClaw / IronClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 无活动 |

> 注：CoPaw 数据源自 `agentscope-ai/QwenPaw` 链接，与标题仓库命名不一致，按原数据引用。

---

## 3. OpenClaw 在生态中的定位

**社区规模：绝对第一梯队，量级差距悬殊**
- 今日 Issue 更新 386、PR 更新 500，约为第二名 Hermes Agent（50/50）的 **8–10 倍**；LobsterAI、ZeroClaw 等仅为其十分之一量级。
- 唯一保持稳定通道版本发布（v2026.10.34，gateway-only `extended-stable` LTS 等价通道）的项目，说明已进入"长期稳定 + 功能并行"的双轨发布节奏，其他项目多处于无版本滚动状态。

**优势**
- **生态纵深**：同时存在核心参照（OpenClaw）、迁移衍生项目（LobsterAI 的 `migrate-openclaw-to-dsh` 线）、同名家族（NanoBot/NanoClaw/ZeroClaw/TinyClaw 等 Claw 系），已形成事实上的"Claw 生态圈"。
- **贡献者黏性高**：Codex/Claude 订阅用户持续提交流程化修复 PR，集成层用户黏性显著。
- **维护吞吐量健康**：单日合并/关闭 258 条 PR，日常小修复节奏正常。

**技术路线差异**
- 其他项目多聚焦**单一维度**（Hermes 的 profile 隔离、ZeroClaw 的安全架构、Moltis 的沙箱输入通道），OpenClaw 则以**全栈平台化**（Gateway + Control UI + CLI + 多渠道 + 模型目录 + 更新系统）承载最大复杂度，因此其稳定性问题（内存泄漏、更新回滚、prompt cache 不复用）也最系统化。

**隐忧**：规模未转化为核心稳定性——P0 内存泄漏 #91588（42 条评论、`needs-maintainer-review` 长期挂起）、#153426 记忆静默排除等高风险项均无 fix PR，是当前项目健康度的主要短板。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **输入通道健壮性** | NanoBot（#6801 飞书误唤醒、#6805 大图静默失败）、Moltis（#1330 Discord 附件、#1328 沙箱 PDF）、CoPaw（#8945 飞书代码块误渲染）、LobsterAI（#3211 钉钉空卡片） | 附件全类型接入、失败可见性、通道语义与策略匹配，避免"静默失败/误触发" |
| **多会话/多 profile 隔离** | Hermes（#29531 会话 cwd、#160510 profile 模型路由）、OpenClaw（#103067 会话命名与子代理寿命） | 共享进程下的配置与状态隔离正确性 |
| **上下文与成本可控** | OpenClaw（#182891 prompt cache 不复用）、Hermes（#160281 闲置高 CPU）、LobsterAI（#3220 上下文用量可视化）、CoPaw（#8705 cron 用量不入账单）、ZeroClaw（#10635 成本上限语义） | 用量可观测、缓存复用、预算语义一致 |
| **记忆语义与完整性** | OpenClaw（#153426/#158912 MEMORY.md 静默排除）、CoPaw（#8882 引用计数归档、"Never forgets"落差）、LobsterAI（#3220 DSH 记忆守卫） | 记忆行为与文档承诺一致、无静默丢失、可诊断可恢复 |
| **跨 provider 语义一致性** | CoPaw（#8727 推理开关、#8776 错误分类导致 fallback 失效、#8093 多模态能力判定）、OpenClaw（#206122 模型目录发现） | 不同 provider 行为差异导致上层逻辑误判 |
| **安全边界收紧** | ZeroClaw（#12167 自主等级与 action budget、#12707 OIDC 设备会话）、NanoClaw（私密漏洞流程）、OpenClaw（#153426 记忆安全影响） | 权限对 agent 间消息同样生效、凭据安全 |
| **更新/安装体验** | OpenClaw（#204816 校验通过后回滚、#206124 残留目录）、NanoClaw（#4525 detached HEAD）、LobsterAI（#3217 Windows 覆盖安装） | 更新可靠性、错误信息友好、磁盘占用 |
| **WebRouter 作为可选 provider** | NanoBot（#6812）、CoPaw（#8947） | 第三方生态主动对接，减少单一带密钥 provider 的失败绑定 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键特征 |
|---|---|---|---|
| **OpenClaw** | 全栈平台：Gateway + Control UI + 多渠道 + 更新系统 | 自托管重度用户、多平台部署 | gateway-only LTS 双轨发布、模型目录 worker、provenance ratchet 安全机制 |
| **Hermes Agent** | 多 profile / Kanban / 插件目录 | 重负载多环境运营者（10 profile、9.6k 会话） | Python 侧 GIL 争用问题显现，state.db 为中心 |
| **CoPaw** | Desktop/Platform 互联、渠道渲染、插件生态 | 本地部署 + 云端互联、多 IM 渠道 | Tauri 桌面、llama.cpp 本地模型、video_memory/creator 插件组 |
| **ZeroClaw** | 安全架构、V5 provider 注册表、原生 Rust 通道 | 安全敏感部署、多连接多模型 | Rust 实现（XMPP OMEMO、rusqlite）、堆叠式 XL PR、ADR 驱动 |
| **LobsterAI** | Cowork/DSH 会话体验、连接器市场 | 桌面协作 + IM 自动化 | DSH 迁移收尾、MCP 连接器（网易邮箱）、实时模型发现 |
| **NanoBot / NanoClaw / Moltis / PicoClaw** | 轻量个人助手 + 特定通道 | 个人自托管、企业 IM、内网 Docker | WebUI + WebSocket 共享通道，增量修复导向 |

**架构分野**：OpenClaw、Hermes、CoPaw 走"大而全平台化"；ZeroClaw 走"Rust + 安全优先"；Moltis/PicoClaw 等走"单点能力深挖"（沙箱输入、依赖维护）。LobsterAI 因 DSH 迁移而与 OpenClaw 存在直接血缘关系。

---

## 6. 社区热度与成熟度

**第一层 · 快速迭代（功能与风险并存）**
- **OpenClaw**：平台化迭代 + 稳定通道发布，但核心稳定性债未清。
- **LobsterAI**：单日 20 条合并，DSH 迁移收尾期，推进幅度大但用户侧信号缺失。
- **CoPaw**：高活跃、报告—修复当日闭环，但巨型 PR 积压需评审带宽。
- **ZeroClaw**：路线图与安全架构收敛期，合并吞吐是瓶颈。

**第二层 · 质量巩固（修复导向，小步增量）**
- **Hermes Agent**：吞吐健康但多为插件维护，多 profile 性能问题为主线。
- **NanoClaw**：无新增回归、安全治理规范，待合并队列含核心路径修复待消化。
- **NanoBot**：闭环通畅，多模态与网络层健壮性待补。

**第三层 · 低活跃 / 待激活**
- **Moltis**：单一贡献者连续攻关，零评审互动。
- **PicoClaw**：仅依赖升级与历史积压清理。
- **NullClaw / IronClaw / TinyClaw / ZeptoClaw**：静默。

---

## 7. 值得关注的趋势信号

1. **"规模不等于稳定"** — OpenClaw 以十倍社区规模仍受困于 P0 内存泄漏与更新回滚，提示平台化项目需为**可观测性（内存阈值监控失效、错误原因码缺失）**投入与功能同等的工程资源。对开发者的启示：早期建立结构化错误码（如 OpenClaw #127195 的 16 处同质错误）与内存诊断管线，比事后定位更经济。

2. **通道语义成为企业 IM 落地的关键门槛** — 飞书误唤醒、钉钉空卡片、Signal 健康检查空 body、Matrix `:server` 后缀静默失效等，说明**"未被真正点名就不响应""失败必须可见"**是 agent 进入真实群聊的硬约束。开发者应将通道层视为一等公民做 CI 覆盖。

3. **成本与上下文焦虑从"功能"升级为"刚需"** — prompt cache 不复用、cron 用量不入账单、上下文用量可视化、预算语义不一致多点爆发，反映用户已从"能跑就行"转向**成本归因可信**。

4. **记忆是承诺，不是特性** — CoPaw "Never forgets" 与 #7571 的落差、OpenClaw MEMORY.md 静默排除，共同指向：记忆系统需要**引用计数/状态标记替代删除 + 诊断与恢复路径**，否则信任崩塌成本极高。

5. **安全治理正在规范化** — NanoClaw 将加固 PR 转入私密漏洞流程、ZeroClaw 的 ADR-017/OIDC 设备会话、OpenClaw 的 provenance ratchet，显示头部项目开始用**流程而非补丁**处理安全。

6. **多 profile 重负载被低估** — Hermes 用户 10 profile / state.db 2.36 GB / 9.2k cron 会话的负载画像远超"个人助手"典型假设，性能设计需按**运营级**而非单用户基准。

7. **社区贡献者高度集中** — Moltis 全部 4 条由单一贡献者提交、NanoClaw 由两位核心贡献者主导、PicoClaw 仅依赖机器人，提示生态广度背后**核心维护者带宽**才是可持续性的真实瓶颈；建议维护者对 XL/堆叠 PR 建立合并窗口与 deadline（ZeroClaw V5 系列、CoPaw #8719/#8770 是典型风险点）。

---

*本报告严格基于 2026-11-26 提供的各项目 GitHub 动态摘要，未补充数据源之外的信息；PR 评论数在多数数据中缺失，热点分析以 Issue 讨论量为主。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-26

## 1. 今日速览

项目今日维持中等偏高的社区活跃度：过去 24 小时共 7 条 Issue 更新（6 条新开/活跃，1 条关闭）、3 条 PR 更新（2 条待合并，1 条关闭），无新版本发布。今日活动集中在 WebUI 与通道层（Feishu、WebSocket）的细节问题，以及部署环境（Docker 内网、代理）的兼容性缺陷。唯一合并/关闭的 PR #6804 解决了对应 Issue #6803，形成了一次完整的"报告—修复—关闭"闭环，说明响应链路通畅。整体健康度良好，但多条新 Issue 指向多模态与网络层的健壮性短板，值得关注。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

- **[CLOSED] PR #6804 — fix(webui): render bare HTML line breaks in Markdown**（作者 IndigoC）
  https://github.com/HKUDS/nanobot/pull/6804
  修复 WebUI 在 Markdown 表格单元格中把裸 `<br>` 标签当作字面文本显示的问题（如 `Draft<br>Ready` 未换行），做法是对无属性的 `<br>` 做归一化处理。该 PR 关闭 Issue #6803，是一次范围明确、影响面小的渲染修复。

- **[OPEN] PR #6810 — fix(agent): add a math format hint for WebSocket replies**（作者 IndigoC）
  https://github.com/HKUDS/nanobot/pull/6810
  在 `nanobot/templates/agent/identity.md` 的 Format Hint 段新增 `websocket` 分支，建议行内数学用 `\(...\)`、独立公式用 `\[...\]`，并置于行内代码与代码块之外，对应 Issue #6809。属提示词层面的低风险改动，待合并。

今日推进幅度总体较小：完成 1 项 WebUI 渲染修复并新增 1 项待合并提示词修复，均属增量打磨，无架构级演进。

## 4. 社区热点

按评论数排序：

- **Issue #6801 [OPEN] Feishu: broadcast-only @all wakes the bot and produces a spurious reply**（2 条评论，今日最高）
  https://github.com/HKUDS/nanobot/issues/6801
  飞书群聊中仅广播性质的 `@所有人`（`@_all`）被当作对群内所有 bot 的提及，在 `group_policy: "mention"` 下机器人会被无关公告唤醒并产生多余的回复。这是典型的"通道语义与群策略不匹配"问题，直接关系到企业 IM 场景下的可用性与打扰控制，是今日最受关注的话题。

- **Issue #6806 [OPEN] [enhancement] WebUI: option to auto-convert long pasted text into a workspace file**（1 条评论）
  https://github.com/HKUDS/nanobot/issues/6806
  长文本（日志、文章、配置文件、命令输出）粘贴后整体内联进消息，污染对话记录并使上下文膨胀，希望可自动转为工作区文件。

- **Issue #6805 [OPEN] [enhancement] Vision: large inbound images fail silently**（1 条评论）
  https://github.com/HKUDS/nanobot/issues/6805
  ~4032×3024、约 4 MB 的 iPhone 照片在 WebUI 上传成功后，因 provider 返回 502 而触发不带图片的静默重试，用户得不到任何错误提示；请求增加可配置的最大图片尺寸或更强的降采样。

其余 4 条（#6812、#6811、#6809、#6803）今日均无评论，👍 计数全部为 0。整体看，社区诉求集中在两点：通道/会话边界行为要可预期（避免误唤醒、避免静默失败），以及 WebUI 输入体验的工程化改进。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 条目 | 状态 | 是否有 fix PR |
|---|---|---|---|
| 高 | **Issue #6805** 大图入站静默失败：provider 502 后静默重试且不带图片，用户侧无任何错误反馈，多模态链路实际失效 | OPEN | 无（仅为 enhancement 形式的需求） |
| 高 | **Issue #6811** 内网隔离 Docker 环境下 `web_fetch` 与 HTTP MCP 不可用：SSRF 预检查要求本地 DNS 解析，共享代理忽略 `NO_PROXY`（nanobot 0.4.2 / Python 3.12 / httpx 0.28.1，Docker Compose + `internal: true` 网络 + HTTP 代理） | OPEN | 无 |
| 中 | **Issue #6801** 飞书广播 `@所有人` 误唤醒 bot 并产生多余回复 | OPEN | 无 |
| 低 | **Issue #6809** WebSocket 回复缺少可渲染数学公式的默认提示，模型可能把公式放进行内代码或代码块 | OPEN | 是，PR #6810 待合并 |
| 低 | **Issue #6803** WebUI 在 Markdown 表格单元格中把 `<br>` 显示为字面文本（流式、完成、刷新后均可复现） | **已关闭** | 是，PR #6804 已关闭 |

观察：#6805 的"静默失败 + 无提示"模式与 #6801 的"误触发"同属可观测性与行为边界问题，建议维护者作为一组稳定性议题统筹处理。

## 6. 功能请求与路线图信号

- **WebRouter 作为免密钥可选的 `web_search` provider**（Issue #6812）
  https://github.com/HKUDS/nanobot/issues/6812
  动机：默认的 DuckDuckGo 无需密钥，但会在 ddgs 歧义错误或限流时失败；而每个带密钥的 provider 绑定单一厂商，出错即搜索失败。对持有多家密钥的用户价值明确，但当前无对应 PR。

- **WebUI 长文本自动转工作区文件**（Issue #6806）
  https://github.com/HKUDS/nanobot/issues/6806
  涉及 WebUI 合成器与工作区文件写入两侧改动，目前无 PR。

- **可配置最大图片尺寸 / 更强降采样**（Issue #6805）
  https://github.com/HKUDS/nanobot/issues/6805
  与既有配置体系亲和度高，落地成本可控，但尚无 PR。

- **HTTP MCP 与 `web_fetch` 的代理/DNS 策略可配置**（隐含于 Issue #6811）
  该条以 bug 形式提出，实质需要 SSRF 预检查与 `NO_PROXY` 遵循方面的策略调整，未见 PR。

纳入下一版本的可能性判断：#6809 已有 PR #6810 且改动仅在提示词模板，最有可能随近期版本落地；#6803 已闭环。其余三项均无对应 PR，短期进入版本的概率较低。

## 7. 用户反馈摘要

- **企业 IM 场景（#6801，m11y）**：飞书群公告使用广播 `@所有人` 时 bot 被唤醒并回复，对在群内长期运行的个人助手是明显打扰，用户期望"未被真正点名就不响应"。
- **多模态可靠性（#6805，schadocalex）**：以 iPhone 原图（约 4 MB JPEG）为典型输入，上传成功但模型侧因 502 降级为无图重试，用户感知为"答非所问"且无错误信息，反映对失败可见性的不满。
- **输入体验与上下文成本（#6806，schadocalex）**：粘贴日志/配置/命令输出会污染对话记录并使消息膨胀，用户希望对长文本有落盘选项。schadocalex 今日连提两条，是当前反馈最密集的用户。
- **自托管/内网部署（#6811，rybkin-me）**：在仅挂载 `internal: true` 网络的 Compose 部署中，出网依赖 HTTP 代理，`web_fetch` 与 HTTP MCP 均不可用，指向自托管用户的实际使用场景被忽视。
- **客户端渲染一致性（#6809 / #6803，IndigoC）**：WebUI 与原生 TUI 共用 `websocket` 通道，用户期待数学公式与 Markdown 表格在两端的呈现一致且正确；#6803 已获修复，反馈得到正向回应。

## 8. 待处理积压

- **PR #6323 [OPEN] [conflict] feat(webui): edit and resend messages in the same session**（作者 chengyongru）
  https://github.com/HKUDS/nanobot/pull/6323
  创建于 2026-10-20，至今日已逾一个月仍在开启状态，且带有 `conflict` 标签；当前 head 为 `e8b8a1466`（基于 `main` 的 `c360a10e8`），20 项 CI 检查全部通过（含 `CI required`），作者明确表示暂不请求 review，原因是 fixed-main 的 Windows 对比尚未完成。该 PR 对应一项高价值的 WebUI 会话内编辑/重发能力，建议维护者主动跟进冲突解决与 Windows 验证进度，避免长期悬置后失效。

其余今日活跃 Issue 均为 1 日内新建，不构成积压。今日数据中未提供更早的未响应条目，故不作推断。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-26

## 1. 今日速览

项目今日维持高频运转：过去 24 小时 Issues 更新 50 条（49 条新开/活跃、1 条关闭），PR 更新 50 条（15 条待合并、35 条已合并/关闭），无新版本发布。合并/关闭量显著高于待合并量，说明维护吞吐健康，但 35 条关闭 PR 中相当比例是 plugin-catalog 的版本 pin 更新，而非核心代码修复。新增 Bug 集中在 gateway 多 profile 场景（路由配置失效、闲置高 CPU、重启不中断任务），性能与状态一致性问题成为今日主线。社区层面，Buzz 消息平台支持（#68871）以 21 条评论、16 个 👍 关闭，是今日热度最高的条目。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭的 PR 以插件目录维护和细节修复为主：

- **#158942 [CLOSED]** `hermes-session-reset-policy` 由 0.3.0 升至 0.4.2，新增 `session_reset.daily_min_idle_minutes` 等配置项。https://github.com/NousResearch/hermes-agent/pull/158942
- **#160500 [CLOSED]** `aisecuritywarden` 升至 0.7.16（作者自提交）。https://github.com/NousResearch/hermes-agent/pull/160500
- **#160498 [CLOSED]** 家谱研究配方目录更新至 v3.0.0（365 个配方，152 新增 / 212 更新）。https://github.com/NousResearch/hermes-agent/pull/160498
- **#160486 [CLOSED]** 新增 `squeezevid` 视频压缩 MCP 插件。https://github.com/NousResearch/hermes-agent/pull/160486
- **#160475 [CLOSED]** 新增 Eden AI 的模型 provider 插件。https://github.com/NousResearch/hermes-agent/pull/160475
- **#158945 [CLOSED]** 新增 `makemancer` 图像/视频/音频生成插件。https://github.com/NousResearch/hermes-agent/pull/158945

**整体判断**：今日推进以生态扩展（catalog 收录、pin 升级）为主，核心运行时仅有零星修复进入待合并队列，功能层面没有重大跃迁。

## 4. 社区热点

- **#68871 [CLOSED] Buzz 消息支持**（21 评论 / 16 👍）— 用户希望接入 Block 开源的本地自托管 workspace（人与 agent 共享房间）。反响最高，且今日关闭，是社区协作意愿最强的信号。https://github.com/NousResearch/hermes-agent/issues/68871
- **#29531 [OPEN] Gateway 会话级工作目录**（18 评论）— 指出 `terminal.cwd` 为进程全局，多并发会话共享一进程时相互干扰，已挂 `needs-decision`。https://github.com/NousResearch/hermes-agent/issues/29531
- **#146955 [OPEN] Windows 多 profile 下 Kanban worker 收不到 prompt**（13 评论）— 自 v0.22.2 升级到 v0.22.5 后出现，属明确回归。https://github.com/NousResearch/hermes-agent/issues/146955
- **#156660 [OPEN] Ruby 工具调用显示 💎 图标**（12 评论）— 纯展示层的小需求，但讨论热度不低，反映用户在意聊天界面的工具可视化。https://github.com/NousResearch/hermes-agent/issues/156660

**诉求归纳**：热度集中在「多会话/多 profile 场景下的隔离正确性」与「外部平台接入」，而非单机单用户功能。

## 5. Bug 与稳定性

按严重程度排列：

**P1**
- **#145215** 会话 resume 快照超过 1 MiB（websocket 默认 max_size）后，owner 转发丢 prompt，长对话直接中断。暂无 fix PR 记录。https://github.com/NousResearch/hermes-agent/issues/145215

**P2**
- **#146955** Windows v0.22.5 回归：Kanban worker 被 admit 并绑定，但 prompt 从未投递，在 `read_frame` 空转至超时。https://github.com/NousResearch/hermes-agent/issues/146955
- **#156978** 全量 gateway 路由重写在 GIL 争用下持有 state.db 写锁 20–35 秒；已结束会话的本地路由从不清理。https://github.com/NousResearch/hermes-agent/issues/156978
- **#160281** 闲置 gateway 仍占单核 50–70%、读盘约 110 MB/s（change-watcher、/board 诊断、/api/status lineage 反复重建）。https://github.com/NousResearch/hermes-agent/issues/160281
- **#160510** `/p/<profile>/` API 请求使用启动 profile 的 `model.default` 而非路由 profile 的，且 `/v1/models` 返回的模型 id 不可用。https://github.com/NousResearch/hermes-agent/issues/160510
- **#160319** `gateway restart -y/--interrupt` 不中断受管 Kanban worker，最长排空约 45 分钟。https://github.com/NousResearch/hermes-agent/issues/160319
- **#160276** Telegram 适配器 `_flush_buffered` 仅在 `CancelledError` 时回填缓冲，`handle_message` 抛其他异常即丢消息。https://github.com/NousResearch/hermes-agent/issues/160276
- **#144060** 终端回退到 `bash -l` 时，`write_file`/`patch` 实际写入成功却报 `Failed to write file:`（`_atomic_write` 的 `set -e` 泄漏进 wrapper）。https://github.com/NousResearch/hermes-agent/issues/144060
- **#148006** Kanban dispatcher 只在启动时读取 `kanban.*` 配置，调整上限需重启，而重启又会杀掉在途卡片。https://github.com/NousResearch/hermes-agent/issues/148006

**P3–P4**
- **#127468** `hermes pause` 无法停止派发：6 个 `dispatch_once` 调用点中 5 个忽略 ESTOP 哨兵（v0.21.3 上验证）。https://github.com/NousResearch/hermes-agent/issues/127468
- **#160235** 关停通知让用户「发条消息」，但下次启动会自动续跑被打断的回合，提示与行为矛盾。https://github.com/NousResearch/hermes-agent/issues/160235
- **#119261** Deepseek 持续把 DSML 标记泄漏进 Hermes Desktop（随机复现，挂 `needs-repro`）。https://github.com/NousResearch/hermes-agent/issues/119261
- **#70444** Desktop 侧栏 Projects 列表在进出会话时重排序（标为 feature 实为缺陷）。https://github.com/NousResearch/hermes-agent/issues/70444

**已进入修复队列的相关 PR**（均待合并，尚未验证）：
- **#160534** 修复 reconcile-platforms 与 platform 热启动/安装竞态的测试不稳定。https://github.com/NousResearch/hermes-agent/pull/160534
- **#160551** 防止第二个插件抢占已被其他插件注册的 slash command。https://github.com/NousResearch/hermes-agent/pull/160551
- **#66636** 保留带路径的 file glob 语义，避免退化为最终 basename。https://github.com/NousResearch/hermes-agent/pull/66636

## 6. 功能请求与路线图信号

- **会话/工作目录隔离**：#29531（per-session cwd）与 #160510（profile 模型路由）指向同一底层诉求——多会话共享进程时的配置隔离。二者均挂 `needs-decision`，短期内更可能出设计决策而非直接合入。
- **审批流可控性**：#156872 提议给审批卡片加 "hold"，用于需要先讨论再同意的场景；同日有 2 条评论，尚早期。https://github.com/NousResearch/hermes-agent/issues/156872
- **Codex 池化登录的配额上限**：#160536 要求按凭据限流，并指出原追踪 PR #87233 自 8 月起为草稿且与 main 冲突——该功能目前缺乏有效载体。https://github.com/NousResearch/hermes-agent/issues/160536
- **插件目录准入**：待合并的 #160547（holographic 0.33.0）、#160546（ziztu v1.3.0）、#153734（RedGreen 负向对照验证）、#160009（spellcheck-plus，卡在自更新检查，由 #160549 加白名单放行）显示 catalog 侧扩张意愿强烈。https://github.com/NousResearch/hermes-agent/pull/160549
- **配置文件拆分**：#90189 支持 `config.yaml` 声明 include 文件，自 8 月挂起至今，标 `sweeper:risk-compatibility`。https://github.com/NousResearch/hermes-agent/pull/90189

## 7. 用户反馈摘要

- **重负载多 profile 是主要使用场景**：#160281 报告 10 个 profile、state.db 2.36 GB / 9.6k 会话（其中 9.2k 来自 cron）、两块看板含 512 + 405 张卡片——这远超「个人助手」的典型负载，是当前性能问题的主要放大器。
- **升级即回归的挫败感**：#146955 明确指出 v0.22.2 → v0.22.5 后功能失效，用户对版本间稳定性有直接不满。
- **提示信息与实际行为不符**：#160235 中用户被迫「按提示发消息」却发现系统已自行续跑，属体验损耗型问题。
- **对界面细节有真实期待**：#156660 的 💎 图标请求虽小，但 12 条评论说明聊天界面的工具可视化被认真使用。
- **配置可维护性被反复抱怨**：#148006（改上限必须重启、重启又杀任务）与 #90189（单文件配置难以维护）共同反映配置系统的僵化。

## 8. 待处理积压

- **#29531**（创建 2026-05-20，`needs-decision`）— 已挂 6 个月，18 条评论，涉及 gateway 核心语义，建议优先给出裁决。https://github.com/NousResearch/hermes-agent/issues/29531
- **#58491**（创建 2026-07-04，`needs-repro`，P4）— agent 疑似幻觉出带外用户消息，安全相关但长期卡在复现。https://github.com/NousResearch/hermes-agent/issues/58491
- **#66636**（创建 2026-07-18，PR 待合并）— file glob 修复挂了 4 个月，标 `sweeper:risk-compatibility`。https://github.com/NousResearch/hermes-agent/pull/66636
- **#70444**（创建 2026-07-24）— Desktop Projects 列表重排序，简单问题但 4 个月无进展。https://github.com/NousResearch/hermes-agent/issues/70444
- **#90189**（创建 2026-08-19，PR 待合并）— config include 文件，兼容性风险标记下停滞。https://github.com/NousResearch/hermes-agent/pull/90189
- **#127468**（创建 2026-09-29）— ESTOP 哨兵在多数派发路径被忽略，涉及紧急停止语义，建议不要长期搁置。https://github.com/NousResearch/hermes-agent/issues/127468
- **#87233**（由 #160536 提及）— Codex 自动降级策略 PR，自 8 月起为草稿且与 main 冲突，需要明确关闭或重启。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-26）

## 1. 今日速览

今日项目活跃度偏低：过去 24 小时无新版本发布、无 Issue 更新，仅 6 条 PR 状态变化。其中 2 条为 dependabot 发起的 Go 依赖升级 PR 处于待合并状态；4 条为作者 xuwei-xy 于 2026-03-14 创建的批量合并 PR（#1555、#1558、#1559、#1560），均在今日被关闭。整体看，项目今日没有新增功能推进或缺陷修复形成进展，以依赖维护和积压 PR 清理为主。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭的 4 条 PR 均为同一作者（xuwei-xy）、同一模式的历史批量合并 PR，创建于 2026-03-14，更新并关闭于 2026-11-26：

- [PR #1558](https://github.com/sipeed/picoclaw/pull/1558) — 合并 #1344 #1342 #1341 #1331 中的修复
- [PR #1559](https://github.com/sipeed/picoclaw/pull/1559) — 合并 #1327 #1319 #1318 #1313 中的修复
- [PR #1555](https://github.com/sipeed/picoclaw/pull/1555) — 合并 #1390 #1389 #1383 #1381 中的修复
- [PR #1560](https://github.com/sipeed/picoclaw/pull/1560) — 合并 #1312 #1311 #1308 中的修复

这些 PR 的描述仅说明“合并若干开放 PR 中的修复”，未提供具体改动内容、测试结果或关联子 PR 的合并状态。从关闭时间和数据看，它们今日被关闭；但关闭原因（合并、拒绝或作废）在数据中未说明，是否已将对应修复真正纳入主线也无法确认。因此，今日项目在代码层面“向前迈进”的幅度无法从数据中量化，建议维护者确认这些批量 PR 关闭后，原 #1308–#1390 之间的修复是否另有落地路径。

## 4. 社区热点

今日无评论数或反应数突出的 Issue/PR：所有条目的评论字段均为 `undefined`、👍 均为 0，未形成实质讨论。

相对值得关注的是两条仍在待合并的依赖升级 PR：

- [PR #3474](https://github.com/sipeed/picoclaw/pull/3474) — `github.com/aws/aws-sdk-go-v2` 1.42.0 → 1.48.0
- [PR #3473](https://github.com/sipeed/picoclaw/pull/3473) — `github.com/Azure/azure-sdk-for-go/sdk/azcore` 1.22.0 → 1.24.0

从诉求看，这两条都来自自动化依赖维护；它们反映的是项目对 Go 生态中 AWS、Azure 云 SDK 的依赖需要保持更新，而非用户侧的功能或体验诉求。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题（Issues 更新 0 条），因此无按严重程度排列的条目，也无对应的 fix PR。

## 6. 功能请求与路线图信号

今日无新增功能请求。现有 PR 中仅有的待合并项均为依赖版本升级（#3474、#3473），不构成功能路线图信号。已关闭的 4 条批量合并 PR 可能涉及历史缺陷修复，但其子 PR 内容未在数据中披露，无法据此判断下一版本的功能走向。

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼。数据中不含用户痛点、使用场景或满意度反馈的原始内容，故不作推断。

## 8. 待处理积压

- [PR #3474](https://github.com/sipeed/picoclaw/pull/3474)（OPEN，创建于 2026-11-26）与 [PR #3473](https://github.com/sipeed/picoclaw/pull/3473)（OPEN，创建于 2026-11-26）：均为 dependabot 依赖升级，创建当日尚无评审或评论，属正常待处理状态，建议尽快审核以缩小依赖版本落后窗口。
- 历史积压信号：今日关闭的 4 条 PR 创建于 2026-03-14，至关闭时已积压约 8 个月。其描述中引用的十余个子 PR（#1308–#1390 区间）是否仍处于开放状态、其修复是否已落地，数据中无法确认。这是本日报中唯一可见的长期积压线索，建议维护者排查该区间 PR 的最终归属，避免修复丢失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-26

## 1. 今日速览

- 今日无新版本发布，项目处于 v2026.11.0 之后的持续修复与加固阶段。
- Issues 通道全部为关闭状态（2 条关闭、0 条新开），且均已有对应 fix PR，说明 bug 响应链路通畅。
- PR 活跃度显著高于 Issues：15 条更新中 8 条待合并、7 条已合并或关闭，维护者与贡献者互动频繁。
- 两位核心贡献者 glifocat 与 taslim 主导今日全部关键动作，其中 taslim 将 3 条安全相关 PR 转入私密漏洞报告流程，体现安全治理规范。
- 整体健康度：**中高活跃、修复导向明确、无新增回归**。

## 2. 版本发布

无。今日 Releases 为空。

## 3. 项目进展

今日关闭的 PR 多集中于「依赖兼容修复、安装/更新体验、品牌资产」，均为小而关键的稳定性改进：

- **#4562（已关闭）** test(agent-runner): 适配 `@types/bun` 1.4 将 `Subprocess.signalCode` 归类为数值类型的变更，解除 Dependabot 升级 #4274 的类型检查阻塞。
  https://github.com/nanocoai/nanoclaw/pull/4562
- **#4527（已关闭）** fix(update): 当安装处于 detached HEAD 时，`/update-nanoclaw` 不再抛出裸 `git symbolic-ref` 错误，改为提示 HEAD 位置与修复方法——直接对应 Issue #4525。
  https://github.com/nanocoai/nanoclaw/pull/4527
- **#4424（已关闭）** 用裁切后的吉祥物头像替换 `nanoclaw-favicon.png`，并同步至 nanoclaw.dev。
  https://github.com/nanocoai/nanoclaw/pull/4424
- **#4571（已关闭，bot）** 更新 agent 硬化镜像标签至 `v2026.11.0-20261125T0659`。
  https://github.com/nanocoai/nanoclaw/pull/4571
- **#4573 / #4574 / #4575（已关闭）** 由 taslim 提交的加固类改动，按 SECURITY.md 转入私密漏洞报告流程关闭，具体内容不外露。
  https://github.com/nanocoai/nanoclaw/pull/4573

**推进幅度评估**：今日合入以「解阻塞 + 打磨体验」为主，未触及核心架构。项目在稳定性与依赖链健康上小幅前进，但待合并队列（8 条）仍未消化，尤其是核心逻辑修复。

## 4. 社区热点

从数据看，今日**无高评论、高 👍 的热议条目**（Issues 评论均为 0，PR 评论字段缺失）。相对值得关注的是：

- **#4274** Dependabot 依赖升级（自 2026-11-06 起持续活跃，今日再度更新）——虽为自动化 PR，但它是今日多条修复的触发源，牵动类型检查链路。
  https://github.com/nanocoai/nanoclaw/pull/4274
- **#4218 / #4210** 两条长期开放的功能型 PR 今日均有更新，说明外部贡献者仍在持续维护。
  https://github.com/nanocoai/nanoclaw/pull/4218 · https://github.com/nanocoai/nanoclaw/pull/4210

**诉求分析**：当前社区互动偏冷，讨论主要发生在维护者内部的修复闭环中，外部用户参与度有限。建议在已关闭 Issue 中补充结论说明，降低后续重复报告。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 | Fix PR |
|---|---|---|---|
| 中 | [#4563] 容器 typecheck 在 `@types/bun` 1.4.4 下失败，阻塞 #4274 | 已关闭 | 有（#4562，已关闭） |
| 中 | [#4525] `/update-nanoclaw` 在 detached HEAD 下抛裸 git 错误 | 已关闭 | 有（#4527，已关闭） |
| 待评估 | #4572 空闲容器停止时消息可能丢失 | 开放 | 自身即 fix PR，待合并 |
| 待评估 | #4576 跨会话 backfill / wake context 乱序（并发到达） | 开放 | 自身即 fix PR，待合并 |

链接：
https://github.com/nanocoai/nanoclaw/issues/4563 · https://github.com/nanocoai/nanoclaw/issues/4525 · https://github.com/nanocoai/nanoclaw/pull/4572 · https://github.com/nanocoai/nanoclaw/pull/4576

**说明**：#4572 与 #4576 均为「消息丢失/顺序错乱」类核心路径问题，虽标注为 bug 修复，但尚未合入，是当前最应优先关注的稳定性风险。

## 6. 功能请求与路线图信号

- **#4218** Proton Mail 原生适配器（经 Proton Mail Bridge 的 IMAP/SMTP），属 #3726 的适配器部分，已按要求迁至 `channels` registry 分支。
  https://github.com/nanocoai/nanoclaw/pull/4218
- **#4210** 新增 llmman 本地模型支持（`/add-llmman-provider`、`/add-llmman-tool`），以 `ANTHROPIC_BASE_URL` 指向本地服务。
  https://github.com/nanocoai/nanoclaw/pull/4210

**纳入下一版本的可能性判断**：两条均为 10 月下旬提交、今日仍在更新的长期开放 PR，且横跨 channels / providers / skills 多模块，评审成本高。基于当前数据无法确认其是否进入下一版本，但从持续活跃度看仍具路线图价值，建议维护者给出明确的评审时间表。

## 7. 用户反馈摘要

本次数据中 Issues 评论数均为 0、👍 均为 0，**没有可直接提炼的用户评论内容**。仅能从 Issue 描述侧证两类真实痛点：

- **依赖升级引发的连锁构建失败**（#4563）：使用 main 分支 + 新版 `@types/bun` 的 macOS 用户会直接遭遇容器 typecheck 失败，影响开发与 Dependabot 流程。
- **非分支安装（detached HEAD）下的更新体验差**（#4525）：macOS 上以 v2026.11.0 安装的用户执行 `/update-nanoclaw` 会在 `prepare` 阶段被裸 git 报错中断，反馈指向「错误信息不友好 + 缺少修复指引」。

两者均在同日内由 fix PR 闭合，响应及时；但「零评论」也意味着缺乏用户确认与复现反馈，建议后续在关闭时征集验证结果。

## 8. 待处理积压

以下 PR 开放时间较长且今日仍有活动，建议维护者关注评审或明确结论：

- **#4146**（2026-10-19 起开放，约 38 天）test(stale): 固定 web-flow 分支使用作者日期——小型测试补充，长期挂起。
  https://github.com/nanocoai/nanoclaw/pull/4146
- **#4210**（2026-10-23 起开放，约 34 天）llmman 本地模型支持。
  https://github.com/nanocoai/nanoclaw/pull/4210
- **#4218**（2026-10-24 起开放，约 33 天）Proton Mail 适配器。
  https://github.com/nanocoai/nanoclaw/pull/4218
- **#4484**（2026-11-19 起开放）fix(update): 在停服前检查快照空间——涉及更新切换期中断服务与终止 agent 的风险，属高价值待合并项。
  https://github.com/nanocoai/nanoclaw/pull/4484
- **#4274** Dependabot 依赖升级自 11-06 挂起至今，虽 #4562 已解类型检查阻塞，仍需最终合入闭环。

**维护者提示**：待合并队列中 #4484、#4572、#4576 均涉及核心路径（更新切换、消息不丢失/不乱序），建议优先评审，避免稳定性风险在积压中累积。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-11-26

## 1. 今日速览

项目今日处于高强度合并节奏：过去 24 小时有 21 条 PR 更新，其中 20 条已合并/关闭、仅 1 条待合并，Issues 侧零新增、零关闭。全部动态集中在同一天（2026-11-26），主要围绕 `migrate-openclaw-to-dsh` 迁移线（PR 摘要多次提及该分支），推进 Cowork/DSH 会话体验、IM 通道修复、性能与安装器稳定性。无新版本发布。整体健康度良好——积压消化快、反馈闭环明显（如 #3210 → #3211 连续跟进），但 Issues 无活动也意味着本日缺乏用户侧独立信号，全部诉求均经由 PR 内部反馈通道体现。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭的 20 条 PR 可归为四条主线：

**Cowork / DSH 会话体验（核心推进）**
- [#3221](https://github.com/netease-youdao/LobsterAI/pull/3221)（CLOSED）：以右侧产物面板内的多标签侧聊（`ArtifactSpecialTab.SideChat`）取代旧浮动面板 `CoworkBtwFloatingPanel`，支持 `/btw`、`/side`、选中文本引用等。
- [#3220](https://github.com/netease-youdao/LobsterAI/pull/3220)（CLOSED）：上下文用量分解浮层与实时投影（订阅 `session/control` 的 `contextPressure` / `contextBreakdown`），并加入页面文件拖放与 DSH 记忆守卫。
- [#3219](https://github.com/netease-youdao/LobsterAI/pull/3219)（CLOSED）：新增 `ConversationTurnRail` 轮次导航与可搜索目录、跳转控制，以及会话滚动位置恢复。
- [#3215](https://github.com/netease-youdao/LobsterAI/pull/3215)（CLOSED）：DSH 插件生态支持拖拽排序、侧栏插件溢出菜单，并移除废弃的 `dragAssist` 偏好。

**模型与连接器能力**
- [#3208](https://github.com/netease-youdao/LobsterAI/pull/3208)（CLOSED）：新增 `provider:discoverModels` 实时模型发现（覆盖 OpenAI Completions/Responses、Anthropic Messages、Google Generative AI），配套 `ModelDiscoveryDialog` 与 `useModelDiscovery` hook。
- [#3209](https://github.com/netease-youdao/LobsterAI/pull/3209)（CLOSED）：接入网易邮箱 MCP 并置顶连接器市场，支持查信、读附件、草稿维护、已读/红旗；发送类操作前展示摘要并需用户确认；主进程负责 OAuth 凭据保存与热更新。
- [#3216](https://github.com/netease-youdao/LobsterAI/pull/3216)（CLOSED）：为预设智能体图像请求传递专家 preset ID，并在 DSH 中打包图像处理技能以支持固定水印移除。

**稳定性与平台修复**
- [#3213](https://github.com/netease-youdao/LobsterAI/pull/3213)（CLOSED）：在固定 DSH 运行时中跨插件共享 Zod 4.6.6，打包时校验依赖树；Windows ASAR 四次运行中，子进程启动到本地 ready URL 的中位耗时从 **4.67 s 降至 1.99 s**。
- [#3214](https://github.com/netease-youdao/LobsterAI/pull/3214)（CLOSED）：修复侧栏模型选择器被右侧栏/原生预览裁剪、自动压缩轮次切分、图像编辑状态与 IM 超时等问题。
- [#3217](https://github.com/netease-youdao/LobsterAI/pull/3217)（CLOSED）：Windows 首次覆盖安装因旧进程无法确认停止而中止的问题，改为访问被拒时按需提权停止进程。
- [#3211](https://github.com/netease-youdao/LobsterAI/pull/3211)（CLOSED）：修复钉钉 iOS 私聊卡片正文为空，投放后进入输入状态、全量写入 Markdown 并结束流，限流/断连时同卡片重试一次。
- [#3210](https://github.com/netease-youdao/LobsterAI/pull/3210)（CLOSED）：IM 与定时会话不再向模型暴露 `ask_user_question` 工具并拒绝直接调用（含恢复的旧会话）。
- [#3212](https://github.com/netease-youdao/LobsterAI/pull/3212)（CLOSED）：全新安装强制登录门禁，同时保留旧安装与企业部署（`ui.login === 'hide'`）的游客/可选登录行为。

**整体判断**：项目单日完成 20 条合并，覆盖会话 UI 重构、模型发现、邮箱连接器、启动性能与三平台安装/IM 修复，推进幅度较大，且明显处于 DSH 迁移的收尾打磨阶段。

## 4. 社区热点

数据中所有 PR 的评论数均为 `undefined`、👍 均为 0，Issues 为 0，因此**无法从数据判定今日讨论最活跃或反应最多的条目**。按数据中可见的作者分布，`fisherdaddy` 与 `btc69m979y-dotcom` 是今日主力贡献者，`Mind-Hand` 提交 1 条（[#3216](https://github.com/netease-youdao/LobsterAI/pull/3216)）。从 PR 摘要反映的诉求看，热点集中在：侧聊/多标签会话交互（#3221）、上下文用量可视化（#3220）、以及 IM 卡片投递可靠性（#3210/#3211 连续跟进）。建议维护者补采评论与反应数据以支撑后续热点分析。

## 5. Bug 与稳定性

按严重程度排列（均已在今日关闭）：

1. **（高）Windows 覆盖安装失败** — 安装器因无法确认旧进程停止而中止，阻断升级路径。[#3217](https://github.com/netease-youdao/LobsterAI/pull/3217) 已修复（按需提权）。
2. **（高）钉钉 iOS 私聊 AI 卡片正文为空** — 影响消息送达可用性。[#3211](https://github.com/netease-youdao/LobsterAI/pull/3211) 已修复并复测（修复前三行三列表格显示空白）。
3. **（中）模型选择器被右侧栏/原生预览裁剪**、自动压缩轮次切分异常、图像编辑状态与 IM 超时 — [#3214](https://github.com/netease-youdao/LobsterAI/pull/3214) 已修复。
4. **（中）DSH 视图缺失已配置智能体工作区**（#3191 的后续）、视频引用预览异常 — [#3205](https://github.com/netease-youdao/LobsterAI/pull/3205) 已修复。
5. **（中）冷启动慢** — [#3213](https://github.com/netease-youdao/LobsterAI/pull/3213) 优化，ready URL 中位耗时 4.67 s → 1.99 s。
6. **（低/待观察）Mac 打包技能缺少 `package-lock.json`** — [#3218](https://github.com/netease-youdao/LobsterAI/pull/3218) 仍为 **OPEN**，通过生成缓存 lockfile 规避，尚未合并。

## 6. 功能请求与路线图信号

今日无独立 Issues，功能信号全部来自 PR 实现本身。结合已合并内容判断下一版本可能包含：
- **多标签侧聊与轮次导航**（[#3221](https://github.com/netease-youdao/LobsterAI/pull/3221)、[#3219](https://github.com/netease-youdao/LobsterAI/pull/3219)）——会话交互层重构，已落地。
- **上下文用量可视化与记忆守卫**（[#3220](https://github.com/netease-youdao/LobsterAI/pull/3220)）——面向长会话成本与上下文管理诉求。
- **实时模型发现与模型编辑对话框**（[#3208](https://github.com/netease-youdao/LobsterAI/pull/3208)）——降低多供应商配置成本。
- **网易邮箱 MCP 连接器**（[#3209](https://github.com/netease-youdao/LobsterAI/pull/3209)）——连接器市场生态扩张的第一个强信号。
- **全新安装强制登录**（[#3212](https://github.com/netease-youdao/LobsterAI/pull/3212)）——涉及账号体系策略变更，建议在发布说明中显著标注。
未能纳入本轮：Mac 技能打包 lockfile 缓存（[#3218](https://github.com/netease-youdao/LobsterAI/pull/3218)）仍待合并。

## 7. 用户反馈摘要

今日 Issues 为 0，无独立用户评论可提炼。可间接从 PR 描述中识别以下真实痛点与场景：
- **升级路径受阻**：Windows 用户“首次覆盖安装”因旧进程未停止而中断（#3217），属阻断性体验问题。
- **移动端消息不可用**：钉钉 iOS 私聊收到卡片但正文为空（#3211），用户实际以手机阅读表格内容，修复后“三行三列表格正常”。
- **界面拥挤导致控件不可用**：右侧栏/原生预览打开时模型选择器被裁剪（#3214），反映多面板并行使用是常见工作方式。
- **长会话上下文焦虑**：新增上下文分解与投影（#3220），对应长对话中用户对上下文占用的可见性需求。
- **IM/定时会话误触发提问**：IM 与定时会话中不应出现 `ask_user_question`（#3210），说明无人值守场景下交互式提问会造成流程卡死。
满意度信号：多条 PR 含复测与单测验证描述（#3211 覆盖五步接口顺序、失败、断连重试；#3213 提供四次 Windows ASAR 运行数据），修复质量可验证。

## 8. 待处理积压

- [PR #3218](https://github.com/netease-youdao/LobsterAI/pull/3218)（**OPEN**，`platform: macos`）：为省略 `package-lock.json` 的 Mac 内置技能生成并缓存平台无关 lockfile。这是今日唯一未合并条目，涉及打包可复现性，建议优先评审合并。
- 数据中未提供长期未响应的 Issue 或 PR（Issues 总数为 0，PR 列表仅覆盖 2026-11-26 当日），**无法识别历史积压项**。建议维护者补充导出更长时间窗口的未关闭 Issue/PR 清单以便持续跟踪。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis 项目日报 · 2026-11-26

### 1. 今日速览
项目今日活跃度偏低但方向集中：无新版本发布，无 PR 合并/关闭，所有活动集中在 4 条新增条目上（1 Issue + 3 PR）。值得注意的是，全部 4 条均由同一贡献者 `clement-songis` 提交，覆盖沙箱内 PDF 读取、Discord 附件接入、Signal 健康检查修复与 Gemini 语音转写四个相邻的"输入通道"方向，呈现出明显的个人连续攻关特征。社区互动数据近乎为零（Issue/PR 评论均为 0），说明当前处于开发前置阶段而非讨论阶段。整体健康度：无回归、无合并积压突破，但**3 个 PR 全部待合并且无评审互动**，Review 响应是当前主要瓶颈。

### 2. 版本发布
今日无新版本发布，本节省略。

### 3. 项目进展
今日无 PR 合并或关闭，代码主干未发生推进。3 个新开 PR 均处于待评审状态：

- **#1330 feat(discord): ingest inbound document attachments** — 补齐 Discord 渠道的文件输入能力。此前 Discord 仅支持语音（STT）与图片（多模态），PDF、文本、Office 文件、压缩包、视频等附件被直接丢弃，Agent 只能看到 caption 或空 body。属于输入覆盖面的实质性扩展。
- **#1329 fix(signal): accept signal-cli's empty health check body** — 修复 `SignalClient::check` 将 signal-cli 守护进程 `GET /api/v1/check` 返回的 `200 OK` 空 body 按 JSON 解码导致每次调用失败的问题。
- **#1327 feat(voice): add Gemini speech-to-text provider** — 新增 `gemini` STT provider，使用专用转写模型 `gemini-3.5-transcribe` 与 Google AI Studio key，与现有面向 Google Cloud Speech 的 `google` provider 区分。

三个 PR 若合并，将分别推进 Discord 附件、Signal 连接可靠性与语音转写多 provider 化三块能力，但**今日实际前进量为 0**。

### 4. 社区热点
今日无高互动条目：所有 Issue/PR 评论数与点赞数均为 0（PR 的评论字段为 undefined）。相对最受关注的是新开 Issue #1328（唯一一条 Issue 更新），其诉求是沙箱会话中 Agent 无法读取 PDF。缺少讨论意味着该问题尚未获得社区复现或方案反馈，维护者需主动跟进。

### 5. Bug 与稳定性
按严重程度排列：

1. **中高 — Issue #1328：沙箱会话无法读取 PDF 文本**（`unsupported_in_sandbox`）
   - 链接：moltis-org/moltis Issue #1328
   - 现象：会话运行在 Docker 或 Podman 沙箱时，`Read` 工具拒绝 PDF，返回 "PDF and image processing is not available for sandboxed sessions"；文本提取仅在非沙箱路径下执行。
   - 影响：沙箱是本项目的常见部署形态，该限制直接切断沙箱场景下的文档理解能力。
   - Fix 状态：**暂无对应 fix PR**。不过 #1330 处理的是 Discord 侧附件接入，与沙箱内 PDF 处理存在功能交集，二者是否合并考虑尚不明确。

2. **中 — PR #1329 所修复的 Signal 健康检查失败**
   - 现象：`signal-cli check json: error decoding response body`，导致每次健康检查调用失败。
   - 性质：已定位根因（空 body 被按 JSON 解码）并已有 fix PR #1329，等待合并。

今日无崩溃或回归报告。

### 6. 功能请求与路线图信号
今日无独立的功能请求类 Issue，路线图信号主要来自 PR 本身：

- **多 provider 语音转写**（#1327）：引入 Gemini 专用转写模型，表明项目在 STT 层走"可插拔 provider"而非单一后端，后续可能继续接入其他厂商。
- **渠道附件全类型接入**（#1330）：从"仅语音+图片"扩展到文档/压缩包/视频，若成为统一模式，其他渠道（如 Signal）可能跟进同类改造。
- **沙箱内文档处理**（#1328 隐含需求）：Issue 描述指向"文本提取只在非沙箱路径运行"，属于架构层面的能力缺口，若要纳入下一版本需专门设计沙箱内的提取管线。

判断：**#1327 与 #1329 变更范围明确、风险低，最有可能进入下一版本**；#1330 涉及渠道行为变更，需评审确认；#1328 对应的沙箱 PDF 支持尚无 PR，短期内难以落地。

### 7. 用户反馈摘要
今日仅一条用户反馈来源（Issue #1328，作者 clement-songis，0 评论），可提炼的要点有限：

- **真实痛点**：沙箱部署下 Agent 对 PDF 完全不可读，用户明确引用错误码 `unsupported_in_sandbox` 与提示文案，说明其已在 Docker/Podman 环境实际触发该限制。
- **使用场景**：沙箱隔离会话中的文档阅读需求。
- **不满意处**：同一能力在非沙箱路径可用、沙箱路径不可用，形成体验割裂。
- 今日无正面反馈或其他用户评论可供归纳。

### 8. 待处理积压
今日数据未提供长期未响应条目的时间跨度信息，仅能基于可见状态提示：

- **PR #1327**（创建 2026-11-25，已跨日仍为 OPEN 且无评论）— 已等待超过一个自然日，建议优先安排评审。
- **PR #1329 / #1330**（创建 2026-11-26，均无评论）— 当日新开，但三条 PR 零评审互动，建议维护者集中响应，避免单一贡献者的连续提交堆积。
- **Issue #1328**（0 评论、0 👍）— 尚无维护者回应，涉及沙箱核心能力，建议至少给出是否接受的结论。

> 说明：以上内容均基于用户提供的 GitHub 数据，未补充数据源之外的信息；因数据中未包含更早的未关闭条目，本节的"长期积压"判断仅限于本次可见条目。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-11-26

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) 本日 GitHub 抓取数据。注：数据中 Issue/PR 链接均标注为 `agentscope-ai/QwenPaw`，与本日报标题所指仓库存在命名不一致，下文按原样引用。

---

## 1. 今日速览

项目维持高活跃度：过去 24 小时 Issue 更新 25 条（新开/活跃 11、关闭 14），PR 更新 50 条（待合并 30、合并/关闭 20），无新版本发布。今日关闭节奏明显，14 条 Issue 与 20 条 PR 完成关闭，集中在飞书渠道、video_memory 插件、Windows 测试兼容性与模型能力解析等方向。同时新增多条与工具调用预算、飞书代码块渲染相关的高质量 bug 报告，并已有对应小体量修复 PR 提交，响应链路顺畅。待合并 PR 仍积压 30 条，其中多条为 XL/XXXL 级长期开放的巨型改动，需要维护者投入评审带宽。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

**已合并/关闭（20 条）中值得关注的：**

- **#8100 [CLOSED] fix(agents): use resolved media capabilities at runtime**（size/M）
  https://github.com/agentscope-ai/QwenPaw/pull/8100
  修复 #8093 中"运行时拦截图片输入、但模型目录/探测结果声称支持多模态"的能力判定不一致问题，改为在运行时使用已解析的媒体能力。该问题同时以 #8093 关闭。

- **#8793 [CLOSED] feat: access local QwenPaw through the shared Platform Web App**（size/XXXL）
  https://github.com/agentscope-ai/QwenPaw/pull/8793
  为本地 QwenPaw 接入 Platform 云端 Web App：Console 连接云账号、手机扫码登录、在云端与已连接工作区之间切换。这是当日体量最大的功能推进。

- **video_memory / creator 系列缺陷关闭**：#8918（`plan_segments()` 可能产生超过 `max_scene_sec` 的分段）等插件侧缺陷进入关闭流程，同时另有多个修复 PR（#8932、#8933、#8917、#8915）仍在待合并，显示该模块正在进行一轮集中清理。

- **多渠道与工具链缺陷关闭**：#8306（原子写入拒绝合法长文件名）、#8342（引用回复导致七个渠道的控制命令路由丢失）、#8377（干净检出下裸跑 pytest 在收集阶段中断）、#8832（CLI 健康检查使用不受支持的 `HEAD /api/version`）等基础设施级问题均已关闭。

总体看，今日推进以"修稳定性、清技术债"为主，功能增量集中在 Desktop/Platform 互联与本地部署能力。

---

## 4. 社区热点

按评论数排序（均为 2–3 条评论，整体讨论深度有限）：

- **#8727 [CLOSED] Responses continuation summary 在模型默认推理耗尽 4000 token 输出预算时仍失败**（3 条评论，当日评论最多）
  https://github.com/agentscope-ai/QwenPaw/issues/8727
  用户报告 QwenPaw 2.3.0 在 OpenAI Responses 协议下，`disable_thinking=True` 未能在该协议上真正生效，导致续写摘要被推理内容挤占预算。诉求指向**跨 provider 的推理开关语义一致性**。

- **#8882 [OPEN] [Design] 长期记忆的引用计数归档：陈旧条目应转为状态变化而非删除**（2 条评论）
  https://github.com/agentscope-ai/QwenPaw/issues/8882
  作者指出 README 承诺 "Never forgets"，但 #7571（8 条评论）报告 agent "持续遗忘"重要内容、同时陈旧条目堆积。提出以引用计数与状态标记替代删除。这是**产品承诺与实际记忆行为之间的落差**，属于设计层讨论。

- **#8705 [CLOSED] cron 任务的 token 用量未写入 turns.jsonl**（2 条评论）
  https://github.com/agentscope-ai/QwenPaw/issues/8705
  控制台用量面板缺失定时任务消耗，归因口径不完整，根因是 cron 路径未复用对话路径的 `_commit_turn_usage`。

- **#8947 [OPEN] [Feature] 将 WebRouter 作为 web_search provider**（1 条评论）
  https://github.com/agentscope-ai/QwenPaw/issues/8947
  由 WebRouter（Apache 2.0）维护者提出，希望成为第四个 `web_search` 后端。属外部生态主动对接。

- **#8938 [OPEN] [Question] Composer 是否会从 textarea 迁移到 Lexical 等富编辑器**（1 条评论）
  https://github.com/agentscope-ai/QwenPaw/issues/8938
  用户在询问路线图，涉及引用回复渲染的重构计划——反映社区对**前端交互长期方向**缺乏公开信息。

---

## 5. Bug 与稳定性

**高严重度**

- **#8943 [OPEN] ToolCallBudgetGate 在每轮迭代中重复计数此前的工具调用**
  https://github.com/agentscope-ai/QwenPaw/issues/8943
  `main` @ 879d07d（qwenpaw 2.3.1b2），agentscope 2.0.10。自定义循环模式下，同一回复的后续迭代会把此前所有调用重复计入预算，导致预算被过早耗尽。**已有 fix PR：#8944**（size/S，first-time-contributor）。

- **#8945 [OPEN] 飞书表格卡片把代码块内的行当作表格与标题**
  https://github.com/agentscope-ai/QwenPaw/issues/8945
  `build_interactive_content_chunks()` 不识别围栏代码块，以 `|` 开头的代码行被渲染为原生表格，shell 管道会把代码块切断。**已有 fix PR：#8946**（size/S）。

- **#8725 [OPEN] `/model` 在渠道内无法切换会话级钉住模型**
  https://github.com/agentscope-ai/QwenPaw/issues/8725
  命令返回 "Model Switched" 但实际会话模型未变，仅修改 agent 默认值。当钉住模型故障时，用户**无法在渠道内自救**，整条会话不可用。当日仍为 OPEN，未见对应 fix PR。

**中严重度**

- **#8941 [OPEN] 12 个插件安装测试在 Windows 上失败**
  https://github.com/agentscope-ai/QwenPaw/issues/8941
  Windows 10 build 19045 / Python 3.11.6 venv。三类环境假设：符号链接权限、包初始化慢于 5s 预算、venv 启动器 pid。**已有 fix PR：#8942**（size/S）。

- **#8776 [CLOSED] classify_model_error 将 400+quota 误判为 bad_request，阻断 fallback**
  https://github.com/agentscope-ai/QwenPaw/issues/8776
  部分 provider（如 dots）额度耗尽时返回 HTTP 400 + "quota exceeded" 而非 429，被归类为 `bad_request`（`fallback_eligible=False`），`FallbackChatModel` 不会切换。已关闭。

- **#8848 [CLOSED] 压缩失败提示建议 `/clear`，易误导用户丢失上下文**
  https://github.com/agentscope-ai/QwenPaw/issues/8848
  失败分支给出的引导语可能导致用户在无预警情况下清空上下文。已关闭。

**低严重度（均已关闭）**

- #8912 飞书 `extract_json_key()` 对合法非对象 JSON 抛 AttributeError
  https://github.com/agentscope-ai/QwenPaw/issues/8912
- #8888 Console 内容高度收缩时 transcript 回跳数屏
  https://github.com/agentscope-ai/QwenPaw/issues/8888
- #8306 原子写入拒绝合法长文件名
  https://github.com/agentscope-ai/QwenPaw/issues/8306
- #8377 干净检出下裸跑 pytest 在收集阶段中断
  https://github.com/agentscope-ai/QwenPaw/issues/8377

**共性观察**：今日多个缺陷（#8943、#8945、#8941）由同日在同版本 `main` 上被报告并立即有 fix PR 跟进，说明从报告到修复的路径畅通；但也提示 **Windows 环境与渠道渲染路径长期缺乏 CI 覆盖**。

---

## 6. 功能请求与路线图信号

- **#8882 长期记忆引用计数归档**（OPEN，设计类）
  https://github.com/agentscope-ai/QwenPaw/issues/8882
  与 #7571 联动，涉及"Never forgets"承诺的实现路径。属架构级变更，短期难入版本，但可能影响后续记忆模块设计。

- **#8947 WebRouter 作为第四个 web_search provider**（OPEN）
  https://github.com/agentscope-ai/QwenPaw/issues/8947
  改动面小、有外部维护者配合，具备进入下一版本的可行性。

- **#8827 [CLOSED] 按 Telegram forum topic 隔离 agent 会话**（enhancement，Channels 组件）
  https://github.com/agentscope-ai/QwenPaw/issues/8827
  已关闭，但未在数据中体现对应合并 PR，落地状态需维护者确认。

- **#8938 Console Composer 富编辑器迁移**（OPEN，question）
  https://github.com/agentscope-ai/QwenPaw/issues/8938
  目前无对应 PR；结合 #8342（引用回复路由）已关闭，前端交互重构尚属未公开路线图。

- **相关在途 PR**：
  - #8476 为 cron 任务引入 `thinking_level` / `thinking_budget`，实现按任务粒度的推理控制（close #8439）— 与 #8727 的推理预算议题同源。
    https://github.com/agentscope-ai/QwenPaw/pull/8476
  - #8649 llama.cpp GPU 控制与运行时自动更新（三 PR 系列的第 1 个）。
    https://github.com/agentscope-ai/QwenPaw/pull/8649
  - #8444 为 Tauri 桌面构建新增 Linux deb 与 AppImage 打包。
    https://github.com/agentscope-ai/QwenPaw/pull/8444
  - #8719 Console 支持运行时 base-path 部署（fix #8714，size/XXXL，Under Review）。
    https://github.com/agentscope-ai/QwenPaw/pull/8719

---

## 7. 用户反馈摘要

**满意度较高 / 响应及时**
- 多条 10 月提出、编号在 #80xx–#83xx 的旧缺陷（#8093、#8306、#8342、#8377、#8776）在今日集中关闭，长期积压得到消化。
- 新报缺陷当日即有 fix PR（#8943→#8944、#8945→#8946、#8941→#8942），对首次贡献者友好。

**主要痛点**
1. **跨 provider 语义不一致**：推理开关（#8727）、错误分类与 fallback（#8776）、多模态能力判定（#8093）三处均表现为"不同 provider 行为差异导致上层逻辑误判"，是反复出现的模式。
2. **用量与成本口径**（#8705）：定时任务的 token 消耗不进账单，影响成本归因可信度。
3. **渠道内可操作性不足**（#8725）：命令提示成功但实际未生效，且在模型故障时缺少逃生通道，属高影响体验问题。
4. **记忆能力与宣传落差**（#8882 / #7571）：用户明确感知到"该记的记不住、该清的清不掉"。
5. **提示语引导风险**（#8848）：系统提示建议 `/clear`，可能造成不可逆的信息丢失。
6. **路线图不透明**（#8938）：用户只能通过提问确认前端方向。

**使用场景分布**：Docker/Linux 部署（#8727）、Windows 桌面与 WebView2（#8888、#8941）、飞书/钉钉/Telegram 渠道（#8342、#8827、#8912、#8945）、cron 自动化（#8705、#8476）、本地模型（#8649）。

---

## 8. 待处理积压

**长期开放的大型 PR（需评审带宽，建议排期）**

- **#8719**（2026-11-13 创建，size/XXXL，Under Review）Console 运行时 base-path 部署。
  https://github.com/agentscope-ai/QwenPaw/pull/8719
- **#8770**（2026-11-16，size/XL）运行时完全初始化前拒绝聊天请求（#8746），当前会在 workspace 仅投影 1 个工具时接受 HTTP 200 并挂起——属启动期稳定性风险。
  https://github.com/agentscope-ai/QwenPaw/pull/8770
- **#8476**（2026-10-28，first-time-contributor，size/L）cron 任务 `thinking_level`。
  https://github.com/agentscope-ai/QwenPaw/pull/8476
- **#8444**（2026-10-26，size/XL）Linux deb / AppImage 打包。
  https://github.com/agentscope-ai/QwenPaw/pull/8444
- **#8649**（2026-11-09，size/L）llama.cpp GPU 控制与自动更新，为三 PR 系列首个，需连带 #8647 一并评估。
  https://github.com/agentscope-ai/QwenPaw/pull/8649

**长期开放的重要 Issue**

- **#8725**（2026-11-13，OPEN）渠道内 `/model` 无法切换钉住模型，无 fix PR，影响故障自救。
  https://github.com/agentscope-ai/QwenPaw/issues/8725
- **#8882**（2026-11-24，OPEN）长期记忆引用计数归档，已积累 2 条评论，建议维护者给出明确取舍结论。
  https://github.com/agentscope-ai/QwenPaw/issues/8882

**积压结构提示**：待合并 PR 30 条中，10 月末至 11 月中旬创建的 XL/XXXL 改动占比偏高，且存在互相依赖的 PR 系列（#8649 系列）。建议维护者对同类巨型 PR 建立明确的合并顺序与 deadline，避免贡献者长期等待；同时为 video_memory / creator 插件一组小体量修复（#8932、#8933、#8917、#8915、#8911）安排批量评审，释放积压。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-26

## 1. 今日速览

项目今日处于**高强度开发、零发布**状态：24 小时内 50 条 PR 更新，其中 47 条仍待合并，仅 3 条合并/关闭，PR 队列积压明显；13 条 Issue 更新中新开/活跃 8 条、关闭 5 条。v1.0.0 路线图 tracker（#12712）与多项安全类 tracker（#12707、#11119）同步活跃，说明项目正处于**版本规划与安全架构收敛期**。当日新增工作多为小体量清理与修复（删除未调用代码、CI/测试修复、文档修正），而大体量 provider 注册表改造（#12450、#12457、#12452）仍悬而未决。整体活跃度高，但**合并吞吐量偏低**是当前主要健康度隐患。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭数量有限，可见进展如下：

- **PR #11934（已关闭）fix(runtime): restore agent_alias attribution on cron/gateway agent runs** — 修复 cron 与 gateway 触发的 agent 运行记录缺失 `agent_alias` 的问题，提升可观测性归因准确性。链接：zeroclaw-labs/zeroclaw PR #11934
- **Issue #11554（已关闭）** — 修复 path-marker 图片在后续 turn 中被重复发送、导致模型描述"幻影新图片"的 provider 缺陷（S2）。链接：zeroclaw-labs/zeroclaw Issue #11554
- **Issue #12167（已关闭）** — 修复 `send_message_to_peer` 不检查发送方自主等级与 action budget 的安全缺陷，`readonly` agent 无法再越权触发同级 agent 回合。链接：zeroclaw-labs/zeroclaw Issue #12167
- **Issue #11892（已关闭）** — 记忆召回查询支持可配置 embedding 前缀，适配 instruction-tuned 嵌入模型。链接：zeroclaw-labs/zeroclaw Issue #11892
- **Issue #11930（已关闭）** — gateway webhook 支持更长的同步 agent 调用。链接：zeroclaw-labs/zeroclaw Issue #11930

**评估**：当日关闭项集中在运行时正确性、安全边界与 gateway 能力，属于"稳态修补"；路线图级大改（V5 provider 注册表、XMPP 通道、OIDC 设备会话）尚未落地，项目向前推进幅度为**中等偏小**。

## 4. 社区热点

- **PR #12450 feat(providers): adopt the canonical V5 registry and runtime model bindings**（XL，risk: high，stacked 于 #12457 之后）— 解耦 V5 provider 注册表，使单个连接可服务多个独立配置模型，V4 输入在配置层迁移。链接：zeroclaw-labs/zeroclaw PR #12450
- **PR #12457 feat(config): prepare nested registry reflection and input normalization** — 为注册表编辑器提供嵌套 map CRUD 与配置反射机制。链接：zeroclaw-labs/zeroclaw PR #12457
- **PR #12452 feat(zerocode): configure and select canonical provider models** — ZeroCode 侧编辑 canonical 连接/模型注册表。链接：zeroclaw-labs/zeroclaw PR #12452
- **Issue #12712 [Tracker]: Roadmap to v1.0.0**（1 👍）— 定义 v1.0.0 各版本顺序、目标日期与用途，取代 FND-001 §6 的版本计划。链接：zeroclaw-labs/zeroclaw Issue #12712
- **Issue #11119 [Tracker]: receiver-discretionary session messaging**（RFC #11027 实现 tracker，risk: high）链接：zeroclaw-labs/zeroclaw Issue #11119

**诉求分析**：社区与维护者的注意力正集中在**多模型/多连接配置抽象**与**v1.0.0 发布节奏**两条主线上。V5 注册表系列 PR 体量巨大（XL）、相互堆叠且标记高风险，是当前最大的合并风险点；路线图 tracker 的出现表明维护者开始为 1.0 收敛范围。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 | Fix PR |
|---|---|---|---|
| P1 / risk: high | **#10635** Runtime profile 成本上限未反映有效全局日预算：profile 报告 `max_cost_per_day_cents = 4294967295`（实际无上限），但 agent 回合仍被拒绝 | OPEN，in-progress | 未见 |
| P1 / risk: high | **#11554** 历史 path-marker 图片每轮重发，模型描述"幻影新图片" | 已关闭 | 已随关闭解决 |
| security | **#12167** `send_message_to_peer` 忽略发送方自主等级与 action budget | 已关闭 | 已随关闭解决 |
| P2 / risk: medium | **#9363** 本地化 ZeroCode 与 Web 界面中配置元数据仍为英文 | OPEN，accepted | 未见 |
| 测试稳定性 | **#12719** `start_forwarder_rechecks_the_process_after_the_probe` 在 macOS runner 上因 200ms 时序窗口失败（master 已失败，非本次引入） | OPEN | 未见 |

**关注点**：#10635 属成本/配额语义不一致，牵涉计费与安全边界，仍处 in-progress 且无对应 fix PR，建议优先跟进。#12719 为 CI 环境相关 flaky 测试，可通过放宽时序窗口或平台条件跳过缓解。

## 6. 功能请求与路线图信号

- **Issue #8415（已关闭，2 👍）Telegram Bot API 10.1 Rich Messages** — 改善 Telegram bot 表格等富内容 UX；虽关闭但标注 `status:icebox`，短期内大概率不进入下一版本。
- **Issue #11892（已关闭）embedding 查询前缀** — 已关闭并已有配套文档 PR **#12735 docs(memory): explain query prefixes for embedding recall**，功能侧已基本落地。链接：zeroclaw-labs/zeroclaw PR #12735
- **Issue #11930（已关闭）gateway webhook 长同步调用** — 属网关能力扩展，关闭表明已有处理路径。
- **Issue #12707 [Tracker]: Daemon-held OIDC refresh grants for device sessions (ADR-017)** — 基于 #12496 合并的 ADR-017 修正案，高风险安全向，预示后续会有成批实现 PR。链接：zeroclaw-labs/zeroclaw Issue #12707
- **Issue #11119 receiver-discretionary session messaging** — 与 #12167 修复方向一致，第一批原生实现切片值得期待。

**下一个版本可能纳入**：V5 provider 注册表与 ZeroCode 模型选择（#12450/#12457/#12452）、OIDC 设备会话（#12707）、receiver-discretionary 消息（#11119）；**短期不太可能**：Telegram Rich Messages（icebox）。

## 7. 用户反馈摘要

- **成本控制困惑**（#10635，5 条评论）：用户观察到运行时 profile 显示"无上限"预算，但实际回合被拒绝——配置语义与实际执行不一致，是令人困惑的运维体验。
- **多渠道图片处理痛点**（#11554，5 条评论）：Signal/Telegram/Discord 保存入站图片并渲染 `[IMAGE:<path>]` 标记，历史标记未折叠导致模型反复"看到新图片"，影响多轮对话质量。
- **本地化不彻底**（#9363，5 条评论）：非英文 locale 下 ZeroCode 外壳、面板标题已翻译，但配置元数据仍为英文，破坏本地化体验一致性。
- **静默失败难排查**（#12733 PR 动机）：某按组织部署的实例因 `allowed_rooms` 条目误加 `:server` 后缀导致 Matrix 通道静默失效，耗费一天定位——用户需要默认日志级别下的隔离门丢弃可见性。
- **安全预期**（#12167、#12707）：用户明确期望自主等级与 action budget 对 agent 间消息同样生效，并对设备会话的 OIDC 令牌保管有安全诉求。

## 8. 待处理积压

- **Issue #9363**（创建 2026-07-25，已 4 个月）— P2 本地化缺陷，accepted 但长期无 fix PR，建议排期或明确降级。链接：zeroclaw-labs/zeroclaw Issue #9363
- **Issue #8415**（创建 2026-06-28，约 5 个月）— 已置 icebox，建议在路线图中明示取舍，避免重复讨论。链接：zeroclaw-labs/zeroclaw Issue #8415
- **PR #12322 fix(deps): upgrade bundled SQLite without waiving the advisory**（创建 2026-11-09，标记 needs-author-action，risk: high）— 升级至 rusqlite 0.41.1 / SQLite 3.54.1 并移除 RUSTSEC-2026-0459 豁免，涉及安全公告，建议推动作者响应。链接：zeroclaw-labs/zeroclaw PR #12322
- **PR #11847 feat(channels): native Rust XMPP with OMEMO**（创建 2026-10-19，needs-maintainer-review，XL，risk: high）— 体量大且需维护者评审，已滞留约 5 周。链接：zeroclaw-labs/zeroclaw PR #11847
- **PR #12408 feat(web): manage scoped HTTP credentials**（创建 2026-11-13，needs-author-action，risk: high）— 只写、本地加密的 HTTP Basic/API-key 别名，涉及凭据安全。链接：zeroclaw-labs/zeroclaw PR #12408

**健康度提示**：47 条待合并 PR 与多条 `needs-author-action` / `needs-maintainer-review` 高危大 PR 叠加，合并队列已成为瓶颈；建议对 V5 注册表堆叠系列明确评审负责人与合并窗口，并优先处理带安全公告的 #12322。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*