# OpenClaw 生态日报 2026-11-12

> Issues: 483 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-12 18:21 UTC

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

# OpenClaw 项目日报 · 2026-11-12

> 数据来源：openclaw/openclaw GitHub 过去 24 小时动态（Issues 483 条 / PR 500 条 / 1 个 prerelease）。所有条目均基于所提供材料，未补充外部信息。

---

## 1. 今日速览

项目处于**高活跃、高维护压力**状态：24 小时内 Issues 更新 483 条（新开/活跃 279、关闭 204），PR 更新 500 条（待合并 279、已合并/关闭 221），维护团队（以 @steipete、@obviyus 为代表）持续高频提交修复。发布节奏延续 prerelease 通道（v2026.11.5-beta.2），主要围绕长会话可浏览性与密钥持久化。**风险面集中在稳定性**：仍有 2 个 P0/P1 级钻石龙虾评级 Issue 未关闭（Gateway 事件循环阻塞、配置热重载中断进行中回合），以及多个 SQLite WAL/事务相关回归。整体看项目**交付节奏健康，但内部状态一致性与 Gateway 长尾稳定性仍是短板**。

---

## 2. 版本发布

### v2026.11.5-beta.2（prerelease）

**Highlights（材料所列）：**
- **长会话双向分页历史**：支持双向翻页、可见的历史边界、有界的归档读取，大对话保持可浏览。相关 PR：#188450、#188483、#188557、#188372、#190690；作者 @steipete，致谢 @xydt-tanshanshan。
- **macOS 应用保留已保存的密钥**（材料中该条描述被截断，未提供完整细节，不进一步展开）。

**迁移注意：**
- 该版本为 **beta.2 prerelease**，非稳定通道；材料中未提供破坏性变更说明。
- 交叉信息：Issue #141474 的作者更新确认历史状态恢复修复（#164445）已进入 `v2026.11.5-beta.1` 与 `beta.2`，但**不在 `latest`**——使用稳定通道的用户暂时拿不到该修复。

---

## 3. 项目进展

> 材料仅提供 PR 标题/摘要，未提供具体合并清单；以下为"已合并/关闭"或"今日提交且状态明确"的重点项。

**已关闭 PR（材料标注 CLOSED）：**
- **#197835** fix(agents): keep the session system prompt stable across completion wakes（@obviyus）— 修复同一 session 的系统提示词随回合触发源变化的问题，从而保住 Anthropic prompt caching 的整段会话缓存，对长会话成本与延迟有直接收益。
  https://github.com/openclaw/openclaw/pull/197835

**今日提交、状态为 ready / 待审的高价值修复：**
- **#197510** fix: move session path checks off the Gateway thread（@steipete，XL）— 将 session 读写、凭据更新、语音会话准备、周期性 Git 维护中的同步文件系统查找移出 Gateway 主线程，直指"单次卡顿拖垮无关请求"的架构级问题，与今日 P0 Issue #160959（Gateway 阻塞）同源方向。
  https://github.com/openclaw/openclaw/pull/197510
- **#197856** fix(agents): preserve steering refusal reasons（@steipete）
  https://github.com/openclaw/openclaw/pull/197856
- **#194890** fix(cron): agent-less automations cannot be added or edited on multi-agent gateways（@DasX，proof: sufficient）
  https://github.com/openclaw/openclaw/pull/194890
- **#197851** fix(update): roll back activated releases that fail Doctor or Gateway startup（@obviyus）— 补上"激活后回滚缺失基线"的缺口。
  https://github.com/openclaw/openclaw/pull/197851
- **#197833** fix(update): old updater runtimes pile up while the Gateway is running — 每个约 640 MiB、44,500 文件的旧 updater runtime 在 Gateway 运行期间无法回收。
  https://github.com/openclaw/openclaw/pull/197833
- **#197801** fix(memory): reduce constrained Gateway startup pressure（@vincentkoc）
  https://github.com/openclaw/openclaw/pull/197801

**评估**：今日推进以"拆解 Gateway 主线程阻塞 + 更新/回滚可靠性 + 资源回收"为主轴，方向务实，但多数仍停在 review 阶段，尚未形成稳定性拐点。

---

## 4. 社区热点

| 议题 | 状态/评级 | 评论 | 诉求核心 |
|---|---|---|---|
| **#160959** Gateway 采集大型外部插件时事件循环阻塞数分钟（2026.9.6 回归） | OPEN / **P0** / 🦞 | 81 | 插件生成物采集（#144252 引入）导致启动期主线程长阻塞，属可用性致命项 |
| #164294 Gateway state DB 的 WAL auto-checkpoint 从未完成（被进程内 reader 钉住） | OPEN / P2 | 40 | 每轮 checkpoint 均 `blocked by a reader`，长期不收敛 |
| #166634 崩溃恢复后延迟回收 commit checkpoint 失败致 agent 不可用 | CLOSED（not-repro-on-main）/ 🦪 | 28 | 已判定主分支不可复现后关闭 |
| **#191944** macOS 上 `gateway stop` 与 `stop --force` 均失败（`Process ancestry could not be fully inspected`） | OPEN / P2 | 27 | 平台特定运维路径断裂，影响日常启停 |
| #120385 Code Mode 工具目录在 cron / memory-flush 回合构建不完整，MCP 工具缺失 | OPEN / stale / 🦐 | 26 | 作者多次修正结论，仍在定位；`Unknown tool id` 仅以 `Exec failed` 暴露 |

- https://github.com/openclaw/openclaw/issues/160959
- https://github.com/openclaw/openclaw/issues/164294
- https://github.com/openclaw/openclaw/issues/166634
- https://github.com/openclaw/openclaw/issues/191944
- https://github.com/openclaw/openclaw/issues/120385

**分析**：热点高度集中于 **Gateway 进程内的阻塞源与 SQLite 状态机**——评论最多的四条里有三条是"某处同步/锁等待把 Gateway 卡住"。这说明用户痛点已从功能缺失转向**运行时长尾稳定性**。同时 #160959 评论 81 条却 `👍: 0`，说明它靠维护者与报告者的深度排查推动，而非社区投票。

---

## 5. Bug 与稳定性（按严重程度）

**P0 / P1**
1. **#160959** [OPEN / P0 / 🦞 diamond lobster] Gateway 因大型外部/workspace 插件采集而阻塞数分钟，启动期与运行期均触发。**有 fix PR 迹象**：同日的 #197510 与 #197801 指向同一线程阻塞/启动压力方向，但材料未标注为直接 fix PR。
   https://github.com/openclaw/openclaw/issues/160959
2. **#144291** [OPEN / **P1** / 🦞 / impact: message-loss] 任意 `openclaw config set` 触发热重载，导致所有进行中的 agent 回合被中止（"prepared model runtime plugin generation was superseded"）。**无明确 fix PR**（`no-new-fix-pr`），且需安全审查与产品决策。
   https://github.com/openclaw/openclaw/issues/144291
3. **#181432** [OPEN / P1] 2026.10.5 基线 RSS 从约 300 MB 升至约 1.89 GB，并伴随 SQLite 事务超时（Linux ARM64）。**无 fix PR**。
   https://github.com/openclaw/openclaw/issues/181432
4. **#144809** [OPEN / P1] claude-cli 后端回合超过 `RUN_STALE_TAKEOVER_MS` 时整段回复丢失（"no active tool authority snapshot"）。**无 fix PR**。
   https://github.com/openclaw/openclaw/issues/144809

**P2 / 回归与状态一致性**
- **#162585** [OPEN] Windows 上插件源采集反复把自身包写入 `package-0/node_modules/<self>`，npm 依赖树线性放大（290 MB → 612 MB+ / 24 分钟），Gateway 永不健康。
  https://github.com/openclaw/openclaw/issues/162585
- **#164294** [OPEN] WAL checkpoint 永不完成（见热点）。
- **#101929** [OPEN] 上下文溢出预估器相较计费用量高估约 2.3–2.6 倍；材料提及主分支修复 PR #168338 已合并（commit `45c7bc9e9ca9`），Issue 仍开放。
  https://github.com/openclaw/openclaw/issues/101929
- **#141172** [OPEN] 首个 session commit 前死亡的 run 永久泄漏 `agent.run.started`，trajectory flush 外键失败，无 `agent.run.finished`。
  https://github.com/openclaw/openclaw/issues/141172
- **#167609** [OPEN] Code Mode 将 guest 脚本 TypeError 报为 `code internal_error`，与宿主故障仅靠 `failurePhase` 区分；作者已确认 2026-11-12 在主分支 `7b3c6edf59c` 仍可复现。
  https://github.com/openclaw/openclaw/issues/167609
- **#165041** [OPEN] 会话恢复时内部系统上下文注入块被渲染为可见聊天消息。
  https://github.com/openclaw/openclaw/issues/165041
- **#183479** [OPEN / extended-stable 2026.9.34] `openclaw update repair` 仍被保留包恢复流程阻塞。
  https://github.com/openclaw/openclaw/issues/183479

**今日新增待审修复 PR（尚无合并）**：
- **#197853** fix(acp): Claude CLI 与 MCP 工具调用 ID 不一致时中继 exec 审批 —— 修复 ACP 客户端无限等待审批（`security-review-required`）。https://github.com/openclaw/openclaw/pull/197853
- **#197832** fix(telegram): 富文本草稿降级为纯文本时限制为单块 —— 修复超过 4,096 字符后本轮后续预览停止更新。https://github.com/openclaw/openclaw/pull/197832
- **#197852** fix(ui): 窗口失焦时保留听写文本。https://github.com/openclaw/openclaw/pull/197852
- **#197842** fix(agents): 允许健康代理流超过 16 MiB（标注 `merge-risk: compatibility`）。https://github.com/openclaw/openclaw/pull/197842

---

## 6. 功能请求与路线图信号

**较可能进入下一版本（已有对应 PR 在审）：**
- **跨 App 保留输入草稿**：#197846 feat(chat): keep composer drafts across app restarts（iOS + macOS，材料指出草稿原本仅存内存 `draftsBySession`）。https://github.com/openclaw/openclaw/pull/197846
- **CLI 检视 workspace 文档**：#197814 新增 `openclaw agents files list` / `get`，复用 Control UI 既有 RPC。https://github.com/openclaw/openclaw/pull/197814
- **每 agent 独立实时通话语音**：#197773，当前 Voice Call 只读 provider 级 `realtime.providers.<provider>.v…`。https://github.com/openclaw/openclaw/pull/197773
- **可信代理请求头协作署名**：#196867 feat(identity): accept co-author credit from trusted-proxy headers（XL，`security-review-required`）。https://github.com/openclaw/openclaw/pull/196867

**需求已明确但无对应 PR：**
- **#192009** [OPEN] 显式授权跨 provider 的 cron 回退账户（OpenAI 主 + xAI 回退场景）。https://github.com/openclaw/openclaw/issues/192009
- **#131457** [OPEN] Feishu/Lark 频道支持 `streaming.mode: "progress"`，与 Slack、Discord、Telegram、Matrix、Mattermost、MS Teams 对齐。https://github.com/openclaw/openclaw/issues/131457
- **#170562** [OPEN] 为卡在终态子 agent run 上的 requester settle wake 提供 Doctor 恢复手段，避免手工改状态库。https://github.com/openclaw/openclaw/issues/170562

**今日被关闭、短期内大概率不会推进的需求**（stale + `needs-product-decision`）：
- #67413 per-agent dreaming 配置（17 评论 / 👍5，本批最高赞）；#44309 A2A 单向派发模式。说明产品决策队列正在清理积压而非落地新特性。

---

## 7. 用户反馈摘要

**真实痛点（按主题）：**
1. **Gateway 单点阻塞**——用户反复报告"一次卡顿导致无关请求全部停摆"，并自行定位到插件采集、session 同步文件查找、启动期内存压力等具体来源（#160959、#197510 摘要、#197801）。
2. **崩溃恢复后状态不可修复**——#136311（memory-core 每次启动重取 reindex 锁，19 GB 孤儿 `memory-reindex-*` 临时库）、#141172（run 永久泄漏）、#166634（回滚 checkpoint 失败后 agent 永久拒绝 `chat.history` 等调用）。用户明确表达"只能手工改状态库"的无奈（#170562）。
3. **升级与更新链路脆弱**——#181432 升级后内存暴涨 6 倍、#183479 `update repair` 被阻塞、#197833 旧 updater runtime 残留约 640 MiB/44,500 文件。升级被视为高风险操作。
4. **平台差异**——macOS 启停失败（#191944）、Windows 插件目录爆炸（#162585）、Linux ARM64 内存回归（#181432）。
5. **UI 纯净度**——#165041 内部上下文注入泄漏为可见消息、#149153（已关闭）WebChat 重复渲染最终回复——用户对"内部状态外泄"敏感。

**满意迹象**：报告者与维护者形成高质量闭环，多条 Issue 带有精确复现、commit 指纹（如 `7b3c6edf59c`、`45c7bc9e9ca9`）与版本对比，并主动撤回错误结论（#120385、#167609）——社区协作意愿强。**不满**集中在"诊断信息不足"（`Exec failed`、`runtime_rejected`、`code internal_error` 等笼统错误）与"无官方恢复工具"。

**使用场景**：单 Gateway 多 agent 部署（systemd 系统级 unit）、cron/自动化调度、Telegram/Discord/Feishu 多频道接入、claude-cli 订阅后端、Code Mode 工具编排。

---

## 8. 待处理积压

**长期未决、需维护者优先关注：**

| 项 | 积压时长 | 说明 |
|---|---|---|
| **#160959** P0 | 创建 2026-09-29，已 44 天 | 唯一 P0，81 条评论，仍 OPEN；`clawsweeper:needs-maintainer-review` |
| **#144291** P1 | 创建 2026-09-10，已 63 天 | 配置热重载中止在途回合，`no-new-fix-pr`，需产品 + 安全双重决策 |
| **#120385** P2 stale | 创建 2026-08-08，已 96 天 | Code Mode 工具目录不完整，标记 `needs-info`，结论多次自我修订 |
| **#141474** P2 | 创建 2026-09-07，已 66 天 | `sessions_yield` 导致 `agents_wait` 永久挂起、`outputSchema` 静默失效；作者已确认修复仅在 beta 通道 |
| **#125314 / #121232 / #143640 / #125311** | 均创建于 2026-08 至 09 | 本批以 CLOSED 收尾但在 `stale` + `needs-product-decision` 下关闭 |
| **#197334** PR（XL） | 2026-11-11 起 | 保留上下文重置后的会话名称，`merge-risk: compatibility / session-state`，状态 `needs proof`，影响 Telegram topics 与 Dashboard |
| **#164439** PR（P1） | 创建 2026-10-03，已 40 天 | Discord Activity 从 npm 安装时 SDK 资源 404，状态 `needs proof` |
| **#156969** PR | 创建 2026-09-24，已 49 天 | QA Lab 测试断言强化，长期停在 ready for maintainer look |

**提醒**：#160959 与 #144291 已分别积压 44 天与 63 天，且均为最高评级（🦞 diamond lobster），建议本周内明确负责人或给出明确的延期说明——这两项直接决定"长时运行可靠性"这一当前最集中的用户信任问题。

---

*注：材料中部分字段标注为 `undefined`（PR 评论数）或文本被截断（beta.2 第二条 Highlight），本报告未做推断性补全。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向分析报告

> 数据来源：2026-11-12 各项目 GitHub 24 小时动态摘要。所有数字与结论均以所供材料为限，材料未覆盖处标注"材料未涉及"。

---

## 1. 生态全景

当前生态呈现明显的**"一大 + 多强 + 长尾静默"**格局：OpenClaw 以单日 483 条 Issue、500 条 PR 的体量构成事实上的核心参照，其痛点已从功能缺失转向长时运行稳定性；NanoBot、CoPaw、ZeroClaw、Hermes Agent 处于中高强度迭代，但普遍面临**评审带宽瓶颈**；PicoClaw 出现社区公开 fork 的治理信号，多个项目（NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw）24 小时零活动。技术层面，**渠道插件化、多 Profile/多租户隔离、Gateway 单点阻塞、沙箱安全边界**成为横跨各项目的共性矛盾。整体判断：生态进入"从能跑到可长期稳定运行"的拐点，稳定性债务与维护者产能是下一阶段的核心约束。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃 · 关闭） | PR 更新（待合并 · 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 483（279 · 204） | 500（279 · 221） | v2026.11.5-beta.2（prerelease） | 高活跃、高维护压力；2 个 P0/P1 🦞 未闭环，Gateway 阻塞为最大短板 |
| **ZeroClaw** | 50（49 · 1） | 50（46 · 4） | **v0.9.0**（117 commits / 22 贡献者） | 高活跃；评审吞吐慢（46:4），安全项 #8279（S0）无 fix PR |
| **Hermes Agent** | 50（44 · 6） | 50（49 · 1） | 无 | 社区响应活跃但**交付承压**，PR 队列"只进不出"，积压扩大 |
| **CoPaw** | 24（17 · 7） | 50（37 · 13） | 无（2.3.0 于 11-11 发布） | 报告-修复链路短（当日多条修复 PR），但 37 条待合并、鉴权绕过 #8695 无 fix |
| **NanoBot** | 4（3 · 1） | 23（9 · 14） | 无 | 健康度良好，集中清理与重构；CRITICAL #5798 已关闭但无明确 fix PR |
| **LobsterAI** | 0 | 16（1 · 15） | 无 | PR 侧高活跃（合并率约 94%）、Issue 侧静默；收敛修复阶段 |
| **NanoClaw** | 3（3 · 0） | 11（8 · 3） | v2026.11.0-beta.2（beta） | 良好；bug 与 fix PR 几乎同步，但安装类 PR 积压（最早 10-20） |
| **PicoClaw** | 4 | 9（4 · 5，多为 stale） | 无 | **风险**：社区公开声明"无人维护"并另建 fork（#3417）；待合并队列全为 dependabot |
| **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** | 无活动 | 无活动 | 无 | 静默 |

**要点**：Issues 与 PR 规模上 OpenClaw（483/500）约为第二梯队（ZeroClaw、Hermes、CoPaw 均 50/50 量级）的 10 倍；合并效率上 LobsterAI（94%）与 NanoBot（61%）领先，Hermes（2%）与 ZeroClaw（8%）垫底。

---

## 3. OpenClaw 在生态中的定位

**规模优势**
- 单日 Issue 更新 483 条、PR 更新 500 条，约为同梯队项目的 10 倍；热点 Issue #160959 单条 81 条评论，是材料中评论数最高的条目。
- 具备其他项目未见的体系化要素：钻石龙虾/牡蛎评级、`clawsweeper` 维护流程、extended-stable 通道、Doctor 恢复工具、Code Mode、ACP 协议、Control UI。

**技术路线差异**
- **Gateway 中心化架构**：以单一 Gateway 承载多 agent、多频道、cron、语音、身份，代价是"单次阻塞拖垮无关请求"（#160959、#197510、#197801 同日指向同一线程阻塞）。
- **状态持久化重依赖 SQLite**：WAL checkpoint、事务超时、外键失败等状态机问题占据稳定性议题主体（#164294、#141172、#181432），这在其他项目中很少以同等密度出现。

**社区规模对比**
- 社区协作质量高：报告者提供 commit 指纹（`7b3c6edf59c`、`45c7bc9e9ca9`）、主动撤回错误结论；但 #160959 评论 81 条而 👍 为 0，说明推动力来自维护者深度排查而非社区投票，**参与面窄、深度高**。
- 相较之下，ZeroClaw v0.9.0 汇聚 22 位贡献者、CoPaw 出现多位首次贡献者，OpenClaw 材料未提供贡献者广度数据，难以直接比较。

**定位判断**：OpenClaw 是生态中**功能面最广、工程体系最完整、同时也是稳定性债务最重**的项目；它的问题清单（Gateway 阻塞、升级链脆弱、状态恢复无官方工具）正在被其他项目以更小规模重演。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **渠道插件化 / 多频道适配** | OpenClaw、CoPaw、Hermes、NanoBot、NanoClaw、ZeroClaw | CoPaw 2.3.0 升级后 Matrix/飞书/微信集体故障（#8538、#8669、#8693、#8684）；Hermes 平台适配器"最后一公里"参数缺失（#95670、#46947）；NanoBot Discord 线程历史回填（#6632）；NanoClaw Telegram 渲染误判（#4340） |
| **多 Profile / 多租户隔离** | Hermes、ZeroClaw、OpenClaw、CoPaw | Hermes #77464 默认 Profile 的 config 与 vault 泄漏进所有 Profile（HIGH），单网关复用约 21 个 Profile（#142296）；ZeroClaw #5982 per-sender RBAC、v0.9.0 scoped chat；OpenClaw 多 agent 网关 cron 编辑缺陷（#194890） |
| **升级/更新链路可靠性** | Hermes、OpenClaw、CoPaw、NanoClaw、LobsterAI | Hermes："更新后网关宕机却提示已重启"（#132645）、每次更新残留约 0.9 GB（#129300）、macOS TCC 弹窗复发（#85345）；OpenClaw 升级后 RSS 涨 6 倍（#181432）、旧 updater runtime 残留 640 MiB/44,500 文件（#197833）；NanoClaw Node 升级后 credential helper 指向旧路径（#4342）；CoPaw `uv venv --seed` 缺镜像致安装中断（#8698） |
| **沙箱与安全边界** | ZeroClaw、Hermes、CoPaw、OpenClaw | ZeroClaw #6996 应用层与 OS 沙箱策略漂移、#8279 delegate 绕过父级白名单（S0）、#6916 子进程无内存上限致 OOM；Hermes #147647 绕过 tools-only 契约写库；CoPaw #8695 反向代理绕过 API 鉴权、#8048 Office COM 未沙箱执行 |
| **上下文 / 长会话管理** | OpenClaw、NanoBot、CoPaw、LobsterAI、ZeroClaw | OpenClaw beta.2 双向分页历史、#197835 稳定 system prompt 以保 Anthropic prompt caching；NanoBot 子代理历史按轮次读取缓解 7.3 MB JSON 加载（#6634）；LobsterAI 支持显式选择最高 1M 上下文（#3059）；CoPaw #8236 Ollama 应按 `num_ctx` 而非 128k 云窗口计算 |
| **记忆子系统稳健性** | CoPaw、OpenClaw、NanoBot | CoPaw 记忆标签索引无法重建（#8580）、同轮重复 `memory_search`（#8361）；OpenClaw memory-core 重启重取 reindex 锁（#136311）；NanoBot WebUI token 用量统计（#6638） |
| **状态一致性 / 错误可诊断性** | OpenClaw、CoPaw、Hermes、NanoClaw | OpenClaw 笼统错误（`Exec failed`、`code internal_error`）与"只能手工改状态库"（#170562）；CoPaw DoomLoopGate 双向误判（#8184 误杀 / #8700 从不触发）；NanoClaw 容器步骤缺 `await`（#4345） |
| **本地模型兼容** | Hermes、CoPaw、LobsterAI | Hermes #153255 llama.cpp / vLLM 下工具调用被写成纯文本；CoPaw #8236 Ollama 上下文窗口；LobsterAI 模型选择继承逻辑（#3064） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | CoPaw | NanoBot | NanoClaw | LobsterAI | PicoClaw |
|---|---|---|---|---|---|---|---|---|
| **功能侧重** | 全栈个人助手平台（Gateway + 多频道 + Code Mode + 语音 + cron） | 安全优先的自主智能体（沙箱策略、OIDC、多租户） | 多平台工作流 + 专家体系（Kanban、A2A RFC） | 渠道插件化 + 记忆 + 控制台 | WebUI 中台 + 提供商集成 | 轻量容器化 sandbox + 多渠道审批卡 | 桌面端协作会话（cowork）+ macOS 打包 | 边缘/旧硬件部署（Android API 19） |
| **目标用户** | 单/多 agent 自托管高级用户（systemd 部署） | 多租户自托管、自有 IdP 的组织 | 多账号并行的团队 / 生产用户 | 多工作区容器化部署用户 | 需要 WebUI 观测的开发者 | 追求安装即可用的个人用户 | Mac 桌面用户 | 低成本/旧设备场景 |
| **技术栈信号** | TypeScript 生态、SQLite 状态库、ACP 协议 | Rust（cargo-audit、wasmtime-wasi、reqwest）、Wire Protocol | 多平台适配器、插件目录（0.50.x 固定版本） | Python（PyPI、uv venv、Ollama、OpenViking） | SQLite、WebUI、Telegram 别名映射 | Docker hardened image、Baileys/iMessage、xml 转义 | Electron（electron-builder、公证钩子）、OpenClaw 集成 | Go（discordgo fork、Makefile、go1.25.10） |
| **治理信号** | 评级体系 + Doctor + extended-stable 多通道 | release tracker（v0.9.1）+ RFC 流程 | RFC（#132248 Trusted Agent Contacts） | 插件市场与版本守卫（PR #8699） | 集中 refactor 清理 | beta 周期 + core-team 快速 fix | 内部团队收敛式合并 | **社区 fork 分叉** |

**关键差异**：ZeroClaw 是唯一把"安全/多租户/身份"作为首发主线（v0.9.0 OIDC）的项目；Hermes 与 CoPaw 均以插件化扩展渠道，但 CoPaw 因 2.3.0 渠道插件重构而集中暴露迁移成本；LobsterAI 明确集成 OpenClaw 相关模块（`openclaw` 领域标签、身份保护），属生态内的下游/封装层。

---

## 6. 社区热度与成熟度

**第一层｜高活跃 + 高压力（规模领先，稳定性承压）**
- **OpenClaw**：交付节奏健康，但 P0 积压 44 天、P1 积压 63 天（#160959、#144291），长尾稳定性未现拐点。

**第二层｜快速迭代（功能推进与评审瓶颈并存）**
- **ZeroClaw**：v0.9.0 落地身份能力，但 46 条待合并、S0 安全项无 fix。
- **Hermes Agent**：50 条 PR 仅 1 条流转，属"发现问题远快于解决问题"。
- **CoPaw**：报告-修复链路最短（当日 4 条修复 PR 对应同日 Bug），但净积压扩大，安全类 XL PR 在审逾一个半月（#8018、#8048）。
- **NanoClaw**：beta 周期正常推进，bug 与 fix 几乎同步，属最健康的迭代节奏之一。

**第三层｜质量巩固 / 收敛修复**
- **NanoBot**：14 条 PR 合并/关闭，以 p2 打磨与重构为主，无架构级改动。
- **LobsterAI**：15/16 合并，集中于 cowork 体验与 macOS 签名链路，Issue 侧零活动。
- **OpenClaw（部分维度）**：当日 PR 主轴为"拆解 Gateway 阻塞 + 更新回滚 + 资源回收"，方向务实但多停在 review。

**第四层｜静默 / 风险**
- **PicoClaw**：无功能增量，关闭多为 stale 后处理、合并状态不透明，社区已 fork 自助维护（#3417 超一个月无官方表态）。
- **NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw**：24 小时零活动。

---

## 7. 值得关注的趋势信号

1. **稳定性取代功能成为首要竞争维度。** 多个项目的最高评论 Issue 均为"卡住/串扰/丢消息"而非"缺功能"（OpenClaw #160959、Hermes #145022/#131578、NanoBot #5798、CoPaw #8669）。对开发者的含义：**长时运行的一致性、可恢复性、错误可诊断性，比新增能力更影响用户留存**。

2. **升级链路正成为信任分水岭。** Hermes、OpenClaw、CoPaw、NanoClaw 四项目同日均有升级相关缺陷，用户对 `update` 的心理预期已转为"更新即有副作用"。**回滚机制、原子激活、残留资源回收**应作为 release 工程的一等公民（OpenClaw #197851 的"激活后回滚"即正面回应）。

3. **渠道插件化是双刃剑。** CoPaw 2.3.0 与 Hermes 的插件目录扩张表明：插件化能快速扩面，但**启动时序、runtime key 冲突、环境变量传递、版本守卫**是必答题。CoPaw PR #8699（渠道插件更新 + 版本守卫 + 官方市场）可能是该问题的标准化解法方向。

4. **多身份/多租户从边缘走向主流。** Hermes 单网关 21 个 Profile、ZeroClaw per-sender RBAC 与 OIDC、OpenClaw 多 agent 网关——个人助手正被推向**企业化部署形态**，隔离失效（#77464 vault 泄漏）即是安全事件。

5. **沙箱安全的一致性是未解难题。** ZeroClaw #6996 指出"应用层路径准入与 OS 沙箱后端长期漂移"，#8279 的 delegate 越权与 Hermes #147647 的 tools-only 契约绕过共同说明：**策略定义与执行点分散**是越权的结构性来源，需要统一的策略裁决层。

6. **错误可诊断性成为体验短板。** OpenClaw 的 `Exec failed` / `code internal_error`、NanoClaw 的安装竞态、PicoClaw 的静默断连——用户反复要求"可定位的失败"。**结构化错误码 + 官方恢复工具**（OpenClaw Doctor 方向、CoPaw #8697 原生错误对话框）是低成本高回报投入。

7. **上下文与缓存经济学。** OpenClaw #197835 通过稳定 system prompt 保住 Anthropic 整段会话缓存，CoPaw #8236 要求本地模型按 `num_ctx` 计算，LobsterAI 开放 1M 上下文选择——**上下文窗口的精细计费与缓存复用**正成为成本优化的主战场。

8. **治理可持续性风险显性化。** PicoClaw 的社区 fork 是材料中唯一的治理级告警。对生态的整体提示：**响应速度本身即是项目资产**，stale 关停与无官方表态会直接触发分叉。

9. **评审带宽是普遍瓶颈。** Hermes（49 待合并 / 1 流转）、ZeroClaw（46 / 4）、CoPaw（37 / 13）三项目同日印证。**集中评审窗口、贡献者分层、自动化预审**可能是缓解方向（ZeroClaw 多名 PR 由同一作者反复 rebase，提示贡献者疲劳风险）。

---

*说明：本报告仅基于所供 2026-11-12 各项目摘要生成。各项目贡献者广度、v0.9.0 完整 release notes、OpenClaw 合并 PR 明细、LobsterAI Issue #639 状态等材料未覆盖内容，均未作推断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报（2026-11-12）

## 1. 今日速览

项目今日高度活跃：23 条 PR 更新中 14 条已合并/关闭，9 条待合并，且绝大多数 PR 集中在同日，说明维护者处于集中清理与重构阶段。Issues 侧更新 4 条，其中 1 条关闭、3 条新开/活跃，主要为功能请求与一处会话路由 Bug。今日无新版本发布。整体健康度良好，但存在积压时间超过三个月的待合并 PR（#5234）及一处 CRITICAL 级别 Bug（#5798），需持续关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 以 **WebUI 修复与内部重构（refactor）** 为主线，项目在稳定性与代码整洁度上明显推进：

- **#6638** WebUI 设置页展示完整 token 使用情况（30 天窗口、输入拆分、模型下钻），复用已有 SQLite 数据，无 schema 变更。链接: HKUDS/nanobot PR #6638
- **#6640** 修复空流导致的"幻影推理"显示问题，避免误导性的"思考过程"展示。链接: HKUDS/nanobot PR #6640
- **#6636** 历史重校验时保留 session 缓存（7 文件，+67/-42）。链接: HKUDS/nanobot PR #6636
- **#6617** 关联聊天请求并取消过期重连，修复重连期间建/分叉话题打开错误话题的问题。链接: HKUDS/nanobot PR #6617
- **#6639** 调整外观设置顺序并精简预览。链接: HKUDS/nanobot PR #6639
- **#6634** 子代理历史改为按已加载轮次读取，缓解长会话一次性加载 7.3 MB JSON 的性能问题。链接: HKUDS/nanobot PR #6634
- **#6644 / #6643 / #6641** 三项重构：删除无引用死代码、Telegram 命令正则改为由别名映射派生、理清 run-local 输入与 checkpoint 归属。链接: HKUDS/nanobot PR #6644 / PR #6643 / PR #6641

整体看，今日合并以中低优先级（p2）的打磨类改动为主，未涉及架构级功能落地。

## 4. 社区热点

- **PR #5234**（Meta-Search 提供商集成，2026-08-03 创建，今日仍更新）——项目中最"长寿"的待合并 PR，聚合 DuckDuckGo/Google/Brave/Bing 等结果并用 RRF 融合。链接: HKUDS/nanobot PR #5234
- **Issue #6632**（Discord 回填线程历史 + 可选启动在线状态，评论 1）——反映 Discord 频道每线程全新会话、无法读取历史消息的真实使用痛点。链接: HKUDS/nanobot Issue #6632
- **Issue #5798**（回复串会话 Bug，评论 3，唯一已关闭 Issue）——讨论相对活跃，且用户明确指出 0.3.0 无此问题、0.3.5 出现，属版本回归。链接: HKUDS/nanobot Issue #5798

诉求共性：多会话/多渠道下的**上下文隔离与连续性**是当前社区关注的核心。

## 5. Bug 与稳定性

1. **#5798 [已关闭] 会话回复串扰（CRITICAL）**——一个会话运行中，其他会话的消息被串入并在错误会话中回复；用户报告 0.3.0 正常、0.3.5 回归。今日已关闭，但**未见对应 fix PR 明确关联**。链接: HKUDS/nanobot Issue #5798
2. **#6620 [OPEN] 内部轮次（heartbeat）中被抑制的 message 工具调用返回"成功"语义 ack（MEDIUM）**——抑制消息投递却回传成功确认，可能导致调用方误判。尚无 fix PR。链接: HKUDS/nanobot Issue #6620
3. **#6040 [OPEN, conflict] WebUI 重新认证期间的客户端关闭被覆盖（MEDIUM）**——异步重认证完成后仍会重开已关闭的客户端；PR 标记存在冲突，需先解决合并冲突。链接: HKUDS/nanobot PR #6040

## 6. 功能请求与路线图信号

- **#6635 MiniMax H3-Image 图像生成支持**（OPEN，今日新开）——当前 MiniMax 图像客户端仅对接旧版 `image-01`，请求支持 `MiniMax-H3-Image` / `MiniMax-H3-Image-Highspeed`。属明确的提供商适配类需求，落地成本较低，**较可能纳入下一版本**。链接: HKUDS/nanobot Issue #6635
- **#6632 Discord 线程历史回填**——与已有 PR #6616（集中化 scoped 文件操作）、#6637（共享有界 HTTP 重定向）同属渠道/工具层增强，具备纳入后续版本的技术铺垫。链接: HKUDS/nanobot Issue #6632
- **#5234 Meta-Search 提供商**——功能完整但长期未合并，是搜索能力扩展的候选。链接: HKUDS/nanobot PR #5234

## 7. 用户反馈摘要

- **痛点：会话隔离失效**（#5798）——"固定回复固定会话，在该回复的地方回复"，用户对跨会话串扰明确表达不满，并指出这是 0.3.5 相对 0.3.0 的退化。
- **场景：Discord 多线程协作**（#6632）——线程早于机器人存在或网关重启后，agent"盲答"，看不到此前决策、被回复消息等上下文。
- **场景：心跳等内部轮次**（#6620）——用户关注工具调用返回值的语义正确性，说明存在依赖 ack 做判断的上层逻辑。
- **场景：图像生成模型迭代**（#6635）——用户希望及时跟进 MiniMax 新模型族。

## 8. 待处理积压

- **PR #5234**（Meta-Search 提供商）——自 2026-08-03 挂起逾三个月，今日仍在更新但未合并，建议维护者给出明确取舍结论。链接: HKUDS/nanobot PR #5234
- **PR #6040**（WebUI 重认证修复）——自 2026-10-04 起挂起且标记 `conflict`，建议优先解冲突或关闭。链接: HKUDS/nanobot PR #6040
- **PR #6616 / #6637**（scoped 文件操作、共享有界 HTTP 重定向）——均自 2026-11-09 起待合并，今日有更新，属可推进的重构项。链接: HKUDS/nanobot PR #6616 / PR #6637

---

**数据说明**：PR 评论数字段在原始数据中为 `undefined`，故社区热度以创建/更新时间与标签判断；Issue #5798 已关闭但未在数据中显示关联 fix PR，结论以可见材料为限。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-12

## 1. 今日速览

项目今日维持高强度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 44、关闭 6），PR 更新 50 条（待合并 49、合并/关闭 1），无新版本发布。合并吞吐极低，积压持续扩大，PR 队列几乎处于"只进不出"状态。当日 PR 明显集中于安全加固（多条 `sec-marathon` 标签）与多 Profile 隔离问题，呼应 Issue #77464 的高危诉求。Windows 与 macOS 平台相关回归仍是 Bug 报告的主线，长期未闭环的网关/会话状态类问题占据了讨论热度榜首。整体判断：社区参与度高，但维护者审阅带宽成为明显瓶颈。

## 2. 版本发布

今日无新版本发布。（注：PR #154622 将插件目录中的 hermes-stage 版本固定从 0.50.38 提升到 0.50.39，属于插件目录版本固定，而非主项目发布。）

## 3. 项目进展

今日合并/关闭量极低，实质性推进有限：

- **PR 更新 50 条中仅 1 条为合并/关闭**，其余 49 条均待合并，说明代码评审环节拥堵。
- **Issue 关闭 6 条**，其中可见 #131578（P1，网关子代理后台进程完成事件错误地把聊天路由切换到子代理会话，导致聊天卡住 30 分钟并丢失委派结果）已关闭——这是会话状态类高优先级问题的阶段性收敛。
  链接：NousResearch/hermes-agent Issue #131578
- **#151241 已关闭**（P2，`hermes acp` 将 Anthropic 401 诊断信息打印到 stdout，污染 ACP JSON-RPC 通道）。
  链接：NousResearch/hermes-agent Issue #151241

整体而言，项目今日在"问题发现"上的推进远大于"问题解决"，健康度体现为社区响应活跃、但交付节奏承压。

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| #97065 Keet 网关初始化崩溃（TypeError） | 30 评论，P3 | 三方插件接入网关的兼容性 |
| #145022 Kanban 工作进程崩溃 | 22 评论，P1 | 并发场景下会话状态一致性 |
| #131578 子代理路由错误导致聊天卡死 | 12 评论，P1（已关闭） | 多平台委派结果可靠送达 |
| #95670 Discord 交接线程类型缺失 | 7 评论 / 1 👍 | 平台适配器参数正确性 |
| #132645 Windows 更新后网关掉线 | 7 评论，P2 | 更新链路可靠性 |

- #97065：NousResearch/hermes-agent Issue #97065
- #145022：NousResearch/hermes-agent Issue #145022
- #95670：NousResearch/hermes-agent Issue #95670
- #132645：NousResearch/hermes-agent Issue #132645

**分析**：讨论热度集中在网关（`comp/gateway`）——插件接入、并发 worker、子代理路由、平台适配器四条链路同时爆发问题，说明网关作为核心中枢的耦合面已过宽，用户对"一次配置、多平台稳定运行"的期待与实际稳定性存在落差。值得注意的是 #97065 为 P3 却获得 30 条评论，反映第三方插件生态的接入摩擦正成为社区情绪聚集点。

## 5. Bug 与稳定性

按严重程度排列：

**P1（严重）**
- **#145022** 多 Kanban worker 并发时崩溃（"Kanban execution unknown; retained by owner"），进行中的工作丢失。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #145022
- **#77464** 多 Profile 隔离失效：默认 Profile 的 config 与 vault 值泄漏进所有 Profile 的环境变量（标注 HIGH）。**已有相关测试 PR #154619**（作者称在 main 上无法复现，先加防护测试）。
  链接：NousResearch/hermes-agent Issue #77464 ｜ PR：NousResearch/hermes-agent PR #154619
- **#147647** 安全：业务渠道 bot 通过 `execute_code` 绕过 skill 的 tools-only 契约，直接写入应用数据库。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #147647

**P2（重要）**
- **#142296** Windows Desktop 多路复用网关冷启动固定 60 秒超时，21 个 Profile 场景下每次冷启动都需手动重试。无 fix PR。
- **#131864 / #129300** Windows 更新收尾缺陷：无 unit 的 serve/dashboard 无法重启且每次更新退出码 1；`hermes pm gc` 因 `.pyd` 硬链接 PermissionError 回收为零、每次更新残留约 0.9 GB。均无 fix PR。
- **#132645** Windows 命名 Profile 生效时，每次 `hermes update` 后宿主网关实际处于宕机状态但提示已重启。无 fix PR。
- **#85345** macOS 每次更新后 TCC 权限弹窗复发（授权绑定在 uv 管理的解释器路径而非 app bundle）。无 fix PR。
- **#148380** Anthropic 原生 provider 下插件 `json_mode=True` 恒定 400（缺 `additionalProperties`）。无 fix PR。
- **#151519** macOS Desktop 配置远程 primary 后仍每次启动本地网关，无法禁用。

**已有 fix PR 的条目**
- **#154620**（P2，auth）修复桌面端复用 refresh token 导致云会话每天被吊销登出。链接：NousResearch/hermes-agent PR #154620
- **#154608**（P2，email）保留原生查看器回复时的入站邮件线程。
- **#153255**（P2，本地模型）当工具调用被写成文本落在 reasoning/content 中时重新提示（针对 llama.cpp / vLLM 等 chat_completions 路由）。

**P3**
- #97065 Keet 网关初始化崩溃、#95670 Discord 交接线程缺 type、#46947 外发邮件无法设置主题、#47767 Windows MSYS 路径被拒、#100052 Desktop 侧栏不显示活动会话、#153018 多路复用下 Discord 语义线程重命名被跳过——均无 fix PR。

## 6. 功能请求与路线图信号

- **#132248 [RFC] Trusted Agent Contacts**（P3，`needs-decision`，5 评论）：将跨所有者 A2A 对话的可信人机交互层做成独立插件。项目已具备 A2A 传输（发现、出站调用、持久会话、入站任务、对等认证、编排），缺的是产品化工作流。结合当日多条插件目录 PR（#152920 coursebook、#153943 alchemy-task、#153991 hermes-agent-radio、#154058 surviving-the-static），**插件化路线信号明确**，该 RFC 有较高概率被采纳为插件形态。
  链接：NousResearch/hermes-agent Issue #132248
- **#65303 ESC 键中断 Agent 响应**（P3，5 评论，自 2026-07-16 挂起）：当前仅 Ctrl+C / Ctrl+Q 可中断。交互体验类小改动，实施成本低，但有被长期搁置的风险。
  链接：NousResearch/hermes-agent Issue #65303
- **PR #152168 桌面端重构 Agent 工作区**（P3，含经典界面回退开关）：体量较大的 UI 方向性变更，今日仍在更新，属于下一版本可能的重点特性。
  链接：NousResearch/hermes-agent PR #152168
- **PR #144331 api-fuzzing 安全技能**：为 API 安全测试提供结构化流程，契合当日安全主题。

## 7. 用户反馈摘要

- **更新链路是最大信任缺口**：Windows 用户反复报告"更新后网关宕机却提示已重启""每次更新残留约 0.9 GB""更新退出码 1"；macOS 用户报告权限弹窗每次更新复发。用户对 `hermes update` 的心理预期已转为"更新即有副作用"。
- **多 Profile / 多路复用是真实生产用法**：#142296 提到单网关复用约 21 个 Profile，#77464 与 PR #154617/#154619 均围绕多路复用下的隔离缺陷。个人助手场景正被推向多身份、多账号并行的实际部署。
- **平台适配器广度带来碎片化成本**：涉及 Discord、Telegram、Slack、飞书、WhatsApp、邮件、WeCom、Matrix、QQBot 等；问题多为参数缺失、路径校验、线程类型等"最后一公里"细节。
- **本地模型用户在用**：#153255 反映 llama.cpp / vLLM 等 OpenAI 兼容本地服务下工具调用被写成纯文本的兼容性痛点。
- **安全边界诉求上升**：#147647（绕过 tools-only 契约写库）、#77464（vault 泄漏）显示用户在把 Agent 用于业务场景，权限收敛与凭证隔离已成为刚性需求。
- **正面信号**：#131578 与 #151241 在当日被关闭，且多条安全类 PR 同日提交，说明维护方对高风险报告有响应。

## 8. 待处理积压

以下条目创建时间久、优先级不低、且长期无明确结论，建议维护者优先分流：

| 条目 | 创建 | 滞留 | 状态 |
|---|---|---|---|
| #46947 外发邮件无法设置主题（`needs-decision`） | 2026-06-16 | 约 5 个月 | P2，无 fix PR |
| #47767 Windows MSYS 路径被 `validate_media_delivery_path()` 拒绝 | 2026-06-17 | 约 5 个月 | P2，无 fix PR |
| #65303 ESC 键中断响应 | 2026-07-16 | 约 4 个月 | P3，无 fix PR |
| #77464 多 Profile 隔离（HIGH 安全） | 2026-08-03 | 约 3 个月 | 仅部分测试 PR |
| #85345 macOS TCC 权限绑定解释器路径 | 2026-08-13 | 约 3 个月 | P2，无 fix PR |

链接：#46947｜#47767｜#65303｜#77464｜#85345（格式：NousResearch/hermes-agent Issue #编号）

**健康度提示**：今日 50 条 PR 更新中 49 条待合并、仅 1 条完成流转，而同期新增/活跃 Issue 达 44 条。若不提升评审吞吐，#77464、#142296 这类高危/高频问题将持续延长滞留，并进一步放大网关层的稳定性债务。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-12

## 1. 今日速览

PicoClaw 今日无新版本发布，过去 24 小时共有 4 条 Issue 和 9 条 PR 更新，整体活动量偏低，且以例行清理为主。9 条 PR 中，有 5 条被关闭或合并，但其中多条被标记为 `stale`（长期未处理），另有一条 PR 来自 2026 年 2 月、一条来自 2026 年 4 月。最值得注意的是 Issue #3417：有社区成员声明该仓库“似乎已无人维护”，并另建 fork 继续维护项目，这是本次周期内风险最高的信号，涉及项目治理与可持续性，而非代码层面。在待合并的 4 条 PR 中，全部是 dependabot 依赖升级，因此功能推进基本停滞。

---

## 2. 版本发布

无。

---

## 3. 项目进展

今日关闭或合并了 5 条 PR，但这些推进所涉及的功能方向较分散，且多数长期积压后才被处理：

- **#2363**（Closed，`type: bug, domain: channel`）：修复 WebSocket 认证并统一 Header 大小写。作者标注为“主要由 AI 生成、人工验证或修改”。该 PR 关联了对应的 Issue。
- **#3447**（Closed，`stale`）：修复 Anthropic 常思考（thinking-always）模型（如 `claude-haiku-5-5`）在 token 凭证下返回 400 `"temperature" is deprecated for this model` 的问题。
- **#3452**（Closed，`stale`）：修复 Discord 通道因 `discordgo` fork 固定提交中的网关握手死锁而导致的“永久失聪”（连接正常但收发全无、心跳停发、无日志）。
- **#2976**（Closed）：修复 Makefile 在 `go1.25.10` 下因 `go env GOVERSION` 返回值含空格导致编译中断的问题。
- **#649**（Closed）：优化内存与缓存性能，包括为 MemoryStore 增加内存缓存、改进 SearchCache 的 LRU 实现。

**总体评估**：今日没有对应任何新功能的 PR 被合并，5 条关闭的 PR 都是修复类或性能优化类，其中跨 Discord、Anthropic、WebSocket、构建工具链等多个模块。需要注意的是，这些关闭多发生在被标记为 `stale` 之后，且没有看到明确的“已合并”标识，无法确认是否真正落地；建议维护者补充合并状态。

---

## 4. 社区热点

- **[Issue #3417](https://github.com/sipeed/picoclaw/issues/3417)（OPEN，评论 5，今日更新）** — 今日讨论最活跃，也是风险最高的信号。作者 afjcjsbx 指出仓库当前“似乎无人维护”，但社区仍有显著兴趣与需求，因此已建立并积极维护 fork（`afjcjsbx/picoclaw`）以延续项目。**背后的诉求**：项目治理与维护连续性问题。5 条评论说明社区正在回应此事，但这条 Issue 自 2026-10-06 创建以来一直处于开放状态，也没有看到维护者的官方表态。
- **[Issue #3454](https://github.com/sipeed/picoclaw/issues/3454)（OPEN，评论 3）** — 模型编辑面板在遇到非 PicoClaw 内置 provider、但属于上游命名空间的前缀（例如 `ACME/gpt-4o-mini`）时，会提示将模型标识符小写化；而上游 API 对大小写敏感，这会导致上游模型 ID 被破坏。**背后的诉求**：多 provider 场景下对模型标识符的精确处理，反映出用户已在将 PicoClaw 接入自定义或第三方模型网关。

---

## 5. Bug 与稳定性

按严重程度排列：

1. **【高】模型标识符被误判，可能导致上游调用失败 —— [Issue #3454](https://github.com/sipeed/picoclaw/issues/3454)（OPEN）**
   当 provider 前缀不属于 PicoClaw 已知 provider 时，界面提示将模型标识符小写化。由于上游 API 对大小写敏感，遵循该提示会破坏模型 ID，导致对上游大模型的调用失败。**目前没有看到对应的修复 PR。**

2. **【中】Discord 通道死锁（已有关闭 PR）—— [PR #3452](https://github.com/sipeed/picoclaw/pull/3452)（CLOSED，`stale`）**
   Bot 显示“已连接”但完全静默：收发中断、心跳停发、无日志。根因是固定的 `discordgo` fork 提交存在网关握手死锁。修复 PR 已于今日关闭，但该 PR 先被标记为 `stale` 后才处理，且无法确认是否已实际合并，因此存在修复未落地的风险。

3. **【中】WebUI 误报“需要重启” —— [Issue #3453](https://github.com/sipeed/picoclaw/issues/3453)（CLOSED，`stale`）**
   当 `gateway.hot_reload: true` 时，在 WebUI 修改默认模型后网关约 2 秒内已生效（网关日志可确认），但 UI 仍弹出“restart required”，`gateway_restart_re...` 状态也同步错误。属于状态同步层面的 UI 一致性问题，已作为 stale 关闭。

4. **【低】Anthropic 常思考模型 400 错误（已有关闭 PR）—— [PR #3447](https://github.com/sipeed/picoclaw/pull/3447)（CLOSED，`stale`）**
   对 `claude-haiku-5-5` 等模型使用 token 凭证调用时固定返回 400 `"temperature" is deprecated for this model`。修复 PR 今日关闭，同样需要确认合并状态。

5. **【低】构建失败 —— [PR #2976](https://github.com/sipeed/picoclaw/pull/2976)（CLOSED）**
   在 `go1.25.10` 环境下，Makefile 因 `go env GOVERSION` 返回值含空格而导致编译中断。已关闭。

---

## 6. 功能请求与路线图信号

- **[Issue #3451](https://github.com/sipeed/picoclaw/issues/3451)（CLOSED，`stale`）：为 Android API 19 的 x86_32 与 x86_64 架构增加支持**
  诉求：扩展对运行 Android 4.4（API 19）的旧设备与模拟器的兼容性，用户提到大量旧电视盒子、平板与单板设备。该 Issue 今日被作为 stale 关闭，且未看到对应的 PR，**短期内纳入下一版本的可能性低**；如果社区仍有需求，重新开启并附上具体设备清单会更有说服力。
- **[Issue #3454](https://github.com/sipeed/picoclaw/issues/3454)：模型标识符校验优化**
  该议题本质上是一个可直接实施的小改动：跳过对未知 provider 前缀的小写化提示。它最有可能被优先纳入修复，但目前尚无 PR。

**综合判断**：本次周期内没有出现路线图级别的功能提案，待合并队列全部为依赖升级，下一版本看不到明确的功能增量信号。

---

## 7. 用户反馈摘要

- **对维护状态的担忧是未来一段时间最主要的用户反馈**：Issue #3417 明确表示“当前仓库似乎已无人维护”，并已通过 fork 的方式自行接手维护，这说明部分用户对上游仓库的响应能力已失去信心。
- **使用场景**：
  - 多 provider 或自建网关的接入：用户会在模型编辑中填写非内置 provider 的上游命名空间（#3454），对大小写语义敏感。
  - 大量使用 Anthropic 常思考模型，并偏好以 token 凭证方式接入（#3447）。
  - 在生产环境使用 Discord 通道，并对“静默断连”这类无日志故障容忍度很低（#3452）。
  - 网关热重载（`gateway.hot_reload: true`）已被实际启用，用户依赖 WebUI 的状态反馈来决策是否重启（#3453）。
  - 在旧 Android 设备与模拟器上部署（#3451），关注低成本或旧硬件场景。
- **不满意的地方**：误报的状态提示、无日志的静默故障、以及重要 Issue/PR 被以 `stale` 方式关停，而没有看到维护者的官方表态。这些共同指向维护资源不足的问题，而不是单纯的功能缺陷。

---

## 8. 待处理积压

- **[Issue #3417](https://github.com/sipeed/picoclaw/issues/3417)（OPEN，2026-10-06 创建，已超一个月）** — 关于 fork 与持续维护的公告。这是对项目可信度影响最大的一条 Issue，建议维护者尽快正式回应，明确上游后续计划或维护权归属。
- **[Issue #3454](https://github.com/sipeed/picoclaw/issues/3454)（OPEN，2026-10-28 创建）** — 已持续约两周，没有修复 PR，且会导致上游调用失败，优先级应上调。
- **待合并 PR #3457 / #3458 / #3459 / #3460**（均为 2026-11-05 创建的 dependabot 升级，标记 `stale`）：
  - [golang.org/x/time 0.15.0 → 0.16.0](https://github.com/sipeed/picoclaw/pull/3457)
  - [modernc.org/sqlite 1.53.0 → 1.61.1](https://github.com/sipeed/picoclaw/pull/3458)
  - [line-bot-sdk-go/v8 8.20.1 → 8.23.0](https://github.com/sipeed/picoclaw/pull/3459)
  - [Azure azidentity 1.14.0 → 1.15.0](https://github.com/sipeed/picoclaw/pull/3460)

  这些依赖升级虽属低风险例行维护，但被标为 stale 后长期积压，会放大安全与兼容性风险，建议集中评审或合并。其中 `modernc.org/sqlite` 跨越多个次版本，是需要重点关注的一项。

---

**项目健康度小结**：代码层面今日没有任何功能类增量，待合并队列中全部为机器人依赖升级；修复类 PR 集中在被标记为 `stale` 之后处理，且合并状态不透明。治理层面出现社区自助 fork 的公开信号，维护响应能力是当前的主要风险点。建议下一步优先回应 #3417、解决 #3454、并清理 dependabot 积压队列以恢复节奏。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-12

## 1. 今日速览

项目今日处于**高活跃、快速迭代**状态：1 个 beta 版本发布、11 条 PR 更新（8 条待合并、3 条已合并/关闭）、3 条新 Issue。所有新 Issue 均为 `kind/bug`，但均已有一到两条对应 fix PR 在列，说明修复响应及时。核心问题集中在 **setup 安装流程与容器/凭证环节**，另有 1 条 Telegram 渲染问题。整体看，项目健康度良好：beta 周期推进正常，bug 发现与修复几乎同步，但多条安装相关 PR 长期挂起（最早可追至 2026-10-20），积压需要关注。

## 2. 版本发布

**v2026.11.0-beta.2**（第二个 beta，早期测试版，官方提示"expect rough edges"）

- **性质**：取代从未发布的稳定版 2026.10.1；其两个 release candidate 仍保持发布，相关内容已全部并入本版本。
- **构建基线**：从 `main @ 62dc0905` 切出，自 `v2026.11.0-beta.1` 以来 main 上有 16 个 PR，其中 10 个带 release note（来源：Release PR #4343）。
- **破坏性变更 / 迁移注意事项**：所供数据未提及任何破坏性变更或迁移步骤，未作说明。
- **Release PR**：https://github.com/nanocoai/nanoclaw/pull/4343 （已关闭/合并，`chore(release)`）

> 注：Release 说明原文在 "Installs on the `be" 处截断，后续安装相关细节无法确认，建议核对完整 changelog。

## 3. 项目进展

今日合并/关闭的 PR 共 3 条：

- **#4343** [CLOSED] `chore(release): v2026.11.0-beta.2` — 发布 PR，完成 2026.11.0-beta.2 版本打包，是本日版本推进的核心。
  https://github.com/nanocoai/nanoclaw/pull/4343
- **#4335** [CLOSED] `fix(router): stop holding sticky follow-ups behind a pending command gate` — 修复自 #3802 引入的回归：一个 agent 的 `/clear` 角色查找会阻塞同线程内发往另一 agent 的粘性后续消息。
  https://github.com/nanocoai/nanoclaw/pull/4335
- **#496** [CLOSED] `adds claude skill to enable things.app support` — 一个 2026-02-25 开启、标记 `Status: WIP` / `Status: Pending Closure` 的早期技能 PR 今被关闭（基于 things3-cli，仅限 Mac）。
  https://github.com/nanocoai/nanoclaw/pull/496

**评估**：本日"向前迈进"主要是版本发版节奏 + 1 个核心路由修复落地；多条实质性 fix（容器凭证、审批卡、消息转义）仍在待合并状态，尚未计入版本。

## 4. 社区热点

**今日数据所限，无高讨论度条目。** 所有 3 条 Issue 评论数均为 0、👍 为 0；所提供 PR 的评论字段为 `undefined`，无法据此判断讨论热度。仅列更新最频繁的相关 PR 供关注：

- **#4168 / #4171**（均更新于 2026-11-12，跨 host/channel 两侧）：审批卡在 host 接受点击后才改变状态，每个请求只裁决一次。#4171 是 #4168 的 channels 侧配套（WhatsApp/Baileys、iMessage、本地 web chat 不再自行应答待决问题）。
  https://github.com/nanocoai/nanoclaw/pull/4168 · https://github.com/nanocoai/nanoclaw/pull/4171
- **#4156**（更新于 2026-11-12）：转义审批卡文本；Telegram、Discord、WhatsApp Cloud 对无法完整展示的卡片选择拒绝而非截断。
  https://github.com/nanocoai/nanoclaw/pull/4156

**诉求分析**：该组 PR 共同指向"**审批/交互卡的跨渠道一致性与安全性**"——确保卡片显示与用户实际输入一致、审批状态由 host 权威裁决，反映项目在渠道适配与安全加固上的系统性打磨。

## 5. Bug 与稳定性

按严重程度排列（均为今日新开，均**已有 fix PR**）：

1. **#4342** [OPEN] `[kind/bug]` Setup 在 Node 升级后无法拉取 hardened image —— docker credential helper 指向旧 Node。
   - 影响版本：main `62dc09057`，同代码存在于 v2026.10.0 与 v2026.11.0-beta.1；平台 macOS；setup 卡在 sandbox 步骤，报 `error getting credentials`。
   - **Fix PR：#4341**（https://github.com/nanocoai/nanoclaw/pull/4341）
   - Issue：https://github.com/nanocoai/nanoclaw/issues/4342
2. **#4345** [OPEN] `[kind/bug]` Setup 的容器步骤未等待镜像 reconcile —— 调用缺少 `await`。
   - 影响版本：main `0ede4cf61`，自 v2.3.0 起直至 v2026.11.0-beta.2 均相同；平台 macOS。作者注明非 macOS 专属。
   - **未见对应 fix PR**（今日 PR 列表内无匹配项）——需重点跟进。
   - Issue：https://github.com/nanocoai/nanoclaw/issues/4345
3. **#4340** [OPEN] Telegram 渲染：以 `#<数字>`（无空格）开头的行被渲染为大标题。例：`#467 is closed...` 被显示为 heading。
   - 今日观察，属渠道展示层问题。
   - **未见对应 fix PR**；相关但不同的 #4156 处理的是审批卡文本转义。
   - Issue：https://github.com/nanocoai/nanoclaw/issues/4340

**稳定性判断**：安装/容器路径是今日最主要的不稳定来源（3 个 bug 中 2 个涉及 setup + image 拉取），且其中一个（#4345）尚无 fix。

## 6. 功能请求与路线图信号

- **Things 3 集成**：#496 曾尝试通过 claude skill + things3-cli 支持 Things.app（Mac-only）。今被关闭（WIP/Pending Closure），**短期内不太可能进入下一版本**，属被搁置而非推进的需求。
- **跨渠道审批一致性**：#4168/#4171/#4156 三件套持续推进，是当前最接近落地的方向，若在 beta 周期内合并，很可能纳入 2026.11.0 后续 beta。
- **安装健壮性**：#4341、#4316（注册登录仅用纯 https 链接、不经 `cmd.exe`，适配 WSL）表明维护者在系统性加固 setup/凭证流程，可视为隐性路线图信号。
- 数据所限，今日无用户新提的功能请求类 Issue。

## 7. 用户反馈摘要

今日 Issue 评论数均为 0，**无可提炼的评论内容**；以下从 Issue/PR 正文（用户自述）归纳：

- **痛点 1：升级带来的安装断链**（#4342）：用户升级/替换 Node 后，credential helper 首行写死旧路径，导致拉取预构建 sandbox image 失败——"装好又坏"的升级体验是真实痛点。
- **痛点 2：安装流程潜在竞态**（#4345）：setup 未等待派生的镜像 reconcile，可能造成间歇性安装问题；作者强调非平台专属，影响面可能更广。
- **痛点 3：文本格式被错误解析**（#4340）：agent 正常回复（如 `#467 is closed`）在 Telegram 里变成大标题，影响可读性与观感。
- **正向信号**：多个高优 bug 由 core-team 成员（glifocat、gavrielc）当日即提交 fix PR，显示对用户报告的响应速度快；另有消息正文被 `escapeXml` 转义导致代码显示为 `a &lt; b &amp;&amp; c` 的问题（PR #4344）也在同日修复。

## 8. 待处理积压

以下 PR 长期开启、近两日仍在更新，建议维护者优先推进：

- **#4156** [OPEN] 审批卡文本转义 + 无法展示则拒绝（2026-10-20 开启，`kind/hardening`）
  https://github.com/nanocoai/nanoclaw/pull/4156
- **#4168** [OPEN] 审批卡在 host 接受后才裁决（2026-10-21 开启）
  https://github.com/nanocoai/nanoclaw/pull/4168
- **#4171** [OPEN] #4168 的 channels 侧配套（2026-10-21 开启，与 #4168 未合并则无法独立生效）
  https://github.com/nanocoai/nanoclaw/pull/4171
- **#4316** [OPEN] setup 登录链接仅纯 https、不经 shell（2026-11-09 开启，`kind/hardening`）
  https://github.com/nanocoai/nanoclaw/pull/4316
- **#4338** [OPEN] `agent-images` 镜像刷新 `v2026.10.0-20261111T1159`（2026-11-11）——已被 #4339 的更新镜像取代，可考虑关闭以减噪。
  https://github.com/nanocoai/nanoclaw/pull/4338 · https://github.com/nanocoai/nanoclaw/pull/4339

**提示**：#4168/#4171 已挂起约三周且互相依赖，是当前积压中阻塞面最大的一组；#4345 虽为新 Issue 但尚无 fix，且影响自 v2.3.0 以来的所有版本，建议列为下一步高优。

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

# LobsterAI 项目日报 · 2026-11-12

## 1. 今日速览

今日项目保持高频代码集成节奏：过去24小时无新版本发布、无 Issue 开闭动作，但 PR 流转达 16 条，其中 15 条已合并/关闭、仅 1 条待合并，合并吞吐率约 94%。工作重心集中在 `cowork` 协作会话体验与 macOS 打包/启动链路，约占今日 PR 的主体。活跃度评估：**PR 侧高活跃、Issue 侧静默**，说明团队当前处于集中收敛修复阶段而非需求讨论阶段。今日无新 Bug 通过 Issue 渠道进入，稳定性信号整体平稳。

## 2. 版本发布

无新版本发布，略。

## 3. 项目进展

今日合并/关闭的 15 条 PR 主要推进了三条主线：

**（1）协作会话（cowork）体验修复密集落地**
- #3053 / #3060 `fix(cowork)` 停止任务的用量结算：两者均针对“任务被停止后额度不可见/未结算”问题，分别在回复控件保留与 trailing 元数据行展示耗时、模型、额度。
- #3054 `fix(cowork)` 浏览历史时的滚动跳动，保留可见消息位置以适配懒加载与分页。
- #3055 `fix(cowork)` “加入对话”后输入光标丢失，改为下一动画帧再聚焦。
- #3052 `fix(cowork)` 预取阶段空搜索布局抖动。
- #3062 `fix(cowork)` 旧会话切换模型后朗读按钮消失。

**（2）专家/模型能力增强**
- #3059 `feat(models)` 支持显式选择最高 1M 上下文窗口，未选择时沿用模型默认，重置即回退。
- #3064 `fix(experts)` 召唤专家时继承新建任务的模型选择逻辑，修复误选自定义模型。
- #3065 `fix(agents)` 修复预设专家删除后的实例 ID 身份冲突与网关同步失败，删除操作纳入配置同步队列。

**（3）macOS 构建与启动链路加固**
- #3067 `fix(mac)` 修复 codown 启动授权与签名保留问题（`Restricted entitlements not validated` / `Code=-413`）。
- #3056 `fix(packaging)` 禁用 electron-builder 内置公证以避免重复公证，由自定义 afterSign 钩子独占。

**整体推进幅度**：今日以“打磨已发布面的稳定性与一致性”为主，新增功能面有限（#3059 为最明确的功能增量），项目在技术债与平台兼容性上得到实质收敛。

## 4. 社区热点

今日数据源未提供评论数与点赞数（`评论: undefined`，👍 均为 0），因此无法据实判定讨论热度。按覆盖面与影响范围，以下 PR 涉及面最广，建议优先关注：

- [PR #3067](https://github.com/netease-youdao/LobsterAI/pull/3067) — macOS 签名/公证与启动授权，跨 `build/main/openclaw/macos` 四个领域，影响所有 Mac 用户安装与首次启动。
- [PR #3059](https://github.com/netease-youdao/LobsterAI/pull/3059) — 1M 上下文窗口选择，涉及 `renderer/docs/main/openclaw/cowork`，属用户可直接感知的能力变化。
- [PR #3065](https://github.com/netease-youdao/LobsterAI/pull/3065) — 专家删除后的身份冲突与网关同步，触及 OpenClaw 身份保护与配置同步机制。

背后的诉求共性：用户对**跨平台一致性、专家/模型选择的可预期性、以及长时间会话的可恢复性**要求上升，修复点多为“状态未对齐”类问题。

## 5. Bug 与稳定性

按影响面排序（今日无 Issue 渠道上报 Bug，以下均为 PR 修复项）：

| 严重度 | 问题 | 是否已有 fix PR |
|---|---|---|
| 高 | macOS 公证后启动被拒：`Restricted entitlements not validated` / `Code=-413 "No matching profile found"`，阻断 Mac 用户启动 | 是，#3067（已关闭） |
| 高 | macOS 重复公证（继承凭据触发 electron-builder 内置公证与自定义钩子并存） | 是，#3056（已关闭） |
| 中 | 删除预设专家后实例 ID 与历史身份记录冲突，专家无法再次召唤、图片示例不可用，并反复重试配置同步 | 是，#3065（已关闭） |
| 中 | 停止任务后额度未结算或不可见 | 是，#3053、#3060（均已关闭） |
| 中 | 会话消息元数据 JSON 损坏导致分页读取失败（关联 #639） | 是，#3061（**待合并**） |
| 低 | 历史滚动跳动、空搜索布局抖动、输入光标丢失 | 是，#3054、#3052、#3055（均已关闭） |
| 低 | 旧会话切换模型后朗读按钮消失 | 是，#3062（已关闭） |

网关闭环节无遗留高风险项，唯一未闭环的是 #3061 的损坏元数据容错，仍处 OPEN 状态。

## 6. 功能请求与路线图信号

今日数据源未包含 Issue 渠道的功能请求。基于已合并 PR 可识别的方向性信号：

- **上下文窗口可配置化**（#3059）：支持最高 1M 且可显式选择/重置，表明模型能力参数正从固定默认转向用户可控，下一版本大概率延续该模式。
- **专家与模型选择的一致性继承**（#3064）与**专家生命周期管理**（#3065）：专家体系正在补齐创建—召唤—删除的完整闭环，后续可能继续完善网关同步与身份保护策略。
- **OpenClaw 启动性能优化**（#3066，已关闭）：通过按需启用 `xai` 插件、生成精简 `dist/package.json` 减少启动开销，指向后续会继续做插件按需加载。

## 7. 用户反馈摘要

今日无 Issue 评论数据可提炼。从 PR 描述反推的真实用户痛点：

- **安装即受阻**：Mac 用户因签名/公证问题无法正常启动，属最高优先级的信任损耗点。
- **操作连续性被打断**：光标丢失、滚动跳动、布局抖动、朗读按钮消失——集中在“用户正在做的事情被界面打断”。
- **计费透明度诉求**：停止任务后额度不可见，用户对“消耗了什么、还剩多少”缺乏确定感。
- **专家复用预期**：删除后无法重新召唤、召唤时模型与新建任务不一致，说明用户把专家当作可反复使用的稳定资产。

## 8. 待处理积压

- [PR #3061](https://github.com/netease-youdao/LobsterAI/pull/3061) — **OPEN**，唯一待合并项。修复分页会话消息在元数据 JSON 损坏时的读取失败（Fixes #639），来自外部贡献者 `akshathayadav378-boop`。该问题关系会话数据健壮性，建议优先评审合入，避免外部贡献者等待过久。
- Issue #639（被 #3061 引用）— 数据源未提供该 Issue 的当前状态与停留时长，建议维护者确认是否已同步关闭或补充跟进。

**维护者提示**：今日 Issue 侧零活动，但多条 PR 描述暗示底层存在“状态未对齐/同步失败”类系统性问题（身份保护、配置同步、用量结算）。建议后续补充一个汇总性 Issue 或设计文档，避免同类问题以零散 PR 形式反复出现。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-11-12

> 数据来源：agentscope-ai/CoPaw GitHub 事件流（仓库内链接标题显示为 QwenPaw，下文沿用 Issue/PR 原始编号）

## 1. 今日速览

过去 24 小时项目保持高强度活跃：Issues 更新 24 条（新开/活跃 17、关闭 7），PR 更新 50 条（待合并 37、合并/关闭 13），无新版本发布。当日讨论重心集中在 **2.3.0 正式版升级后集中暴露的渠道插件化问题**——Matrix、飞书、微信三个渠道插件的启动时序、运行时键冲突、环境变量缺失被同日多次报告，说明渠道插件化重构（2.3.0 主线变更）仍处于磨合期。同时，DoomLoopGate 误杀与失效两条相反症状（#8184、#8700）均被提出并已有对应 PR，说明循环防护机制是第二个稳定性热点。整体看，社区反馈量大、修复响应快（当日出现多条 first-time-contributor 修复 PR），但待合并 PR 积压升至 37 条，合并吞吐是当前主要健康度风险。

## 2. 版本发布

过去 24 小时无新版本发布。据 Issue 中提及，2.3.0 已于 2026-11-11 发布（PyPI），当前社区反馈主要针对该版本及 2.3.0b1–b4 预发布版。

## 3. 项目进展

今日合并/关闭共 13 条 PR、7 条 Issue，可见的关闭条目包括：

- **#8538 [CLOSED]** Matrix 渠道插件在多工作区场景下仅首个工作区可激活（10 秒共享启动窗口问题）——渠道插件化后的首批阻塞性缺陷之一已关闭。
- **#8035 [CLOSED]** 转写设置页无法配置/更新 `transcription_model`，切换供应商会静默破坏转写功能——设置层配置一致性修复。
- **#5110 [CLOSED]** 支持引用/摘录回复文本作为后续上下文（类似 Perplexity 的引用交互）——长期功能请求落地。
- **#8605 [CLOSED]** 浏览器标签页标题跟随当前会话名，便于多标签页区分——控制台体验改进。

此外，多条当日新提交的修复 PR（#8701、#8702、#8704、#8703）直接对应同日报告的 Bug，显示出较短的“报告—修复”链路。但 13 条合并/关闭对应 50 条更新、37 条待合并，净积压仍在扩大，项目推进速度受审查带宽制约。

## 4. 社区热点

| 条目 | 状态 | 评论 | 链接 |
|---|---|---|---|
| #8538 Matrix 插件多工作区激活失败 | CLOSED | 6 | agentscope-ai/QwenPaw Issue #8538 |
| #8580 记忆标签索引无法重建，`/memory/tags` 返回 503 | OPEN | 5 | agentscope-ai/QwenPaw Issue #8580 |
| #8669 渠道插件启动竞态：初始 `disconnected` 被当作致命错误（飞书必现） | OPEN | 5 | agentscope-ai/QwenPaw Issue #8669 |
| #8184 Doom-loop gate 误杀合法轮询，cron 误记成功 | OPEN | 4 | agentscope-ai/QwenPaw Issue #8184 |
| #8361 自动记忆搜索同轮重复调用 `memory_search`，拦截后无法回复 | OPEN | 4 | agentscope-ai/QwenPaw Issue #8361 |

**诉求分析**：讨论最集中的三条均为**渠道插件架构**问题（#8538、#8669，以及评论较多的 #8693 微信 `ACCOUNT_IN_USE`），用户诉求不是新功能，而是“升级后原有渠道别坏”。#8580 与 #8361 共同指向**记忆子系统**：标签生成与索引读取脱节、自动记忆搜索触发重复调用，反映记忆功能在“开启即用”的默认路径上仍不够稳健。PR 侧评论数据缺失，无法据此判断评审热度。

## 5. Bug 与稳定性

按严重程度排序（均标注是否有对应修复 PR）：

**严重 — 安全**
- **#8695**（OPEN，2.3.0）同主机反向代理绕过 API 鉴权：loopback 白名单 + 空 `trusted_proxies` 导致经代理的请求被当作本地 CLI 请求，跳过 bearer token 校验。**目前未见对应 fix PR**，建议最高优先级处理。
- **#8048**（PR，Under Review）Windows 下 Office COM 内联自动化在未沙箱时被直接执行而非拒绝——已有修复 PR，待合并。

**高 — 渠道不可用 / 数据路径错误**
- **#8669**（OPEN，2.3.0b4 Windows）飞书渠道每次启动报 `CHANNEL_NOT_CONNECTED`，确定性复现。
- **#8693**（OPEN，2.3.0）微信官方渠道插件启动报 `ACCOUNT_IN_USE`，启动路径与工作区投影重复占用同一 runtime key。
- **#8682**（OPEN，Linux）官方渠道插件 worker 崩溃：launcher 与 bootstrap 均未传递 `HOME` / `QWENPAW_WORKING_DIR`。
- **#8655**（OPEN，beta.1 起回归，beta.3 仍复现）附件本地路径被截断为盘符根（`C:\`），文件保存正常但图片无法加载。
- **#8696**（OPEN，main 与 v2.2.2）Windows 下工作区路径含 `#` 时附件无法解析。

**中 — 逻辑/统计正确性**
- **#8184**（OPEN）Doom-loop gate 误杀合法任务授权轮询，且 cron 终止后误记成功——**已有 PR #8702**（cron 记录为 error）。
- **#8700**（OPEN，2.3.0 与 main）agentscope 将回复累积进单条 assistant message 时 DoomLoopGate 从不触发——**已有 PR #8701**。
- **#8705**（OPEN）cron 任务 token 用量未写入 `turns.jsonl`，用量面板统计缺失。
- **#8688**（OPEN）Python heredoc 中字面 `~,` 导致深度路径检查中止。
- **#8684**（OPEN，2.3.0）升级不迁移内置渠道插件，已安装 Matrix 仍停留旧源码，2.3.0 修复不生效。

**低 — 资源与体验**
- **#8674**（OPEN）查询异常反复生成完整会话 JSON 快照，无容量限制与清理策略，持续占用临时目录。
- **#8698**（OPEN）升级 2.3.0 失败：`uv venv --seed` 未使用 PyPI 镜像导致安装中断——**已有 PR #8704**（first-time-contributor）。

## 6. 功能请求与路线图信号

- **#8686** 为插件提供有文档的数据目录，并审计破坏性文件操作（起因：第三方 `event-trigger` 插件将脚本与安装目录混放）。与 **PR #8554**（插件 CLI 命令与扩展点，XXL）、**PR #8699**（渠道插件更新、版本守卫与官方市场发布，XXL）方向一致——**插件生态基础设施大概率进入后续版本主线**。
- **记忆子系统修复线索**：#8588（OpenViking 后续清理与关停修复，XXL，Under Review）若合并，可能与 #8580、#8361 一并改善记忆可用性。
- **PR #8671** 控制台自动重连外部渠道发起的会话运行——补足多渠道场景下的控制台体验。
- **PR #8697** 桌面端持久化早期启动错误并弹出原生错误对话框——正面回应“启动失败无提示”类反馈。

判断：#8686 尚无对应 PR，短期内落地概率较低；渠道插件更新与市场（#8699）尚在开放状态，能否进入下一版本取决于评审进度。

## 7. 用户反馈摘要

- **升级是最大痛点**：多条 Issue 集中在“从旧版本升到 2.3.0 后渠道坏了”（#8538、#8693、#8684、#8698），用户明确感知到插件化带来的迁移成本，而非功能收益。
- **典型部署场景**：多工作区并存（A/B/C 三工作区同时启用 Matrix）、容器化部署（Docker 镜像，securityfs 未挂载导致 Landlock 误报）、同主机反向代理前置、Windows 桌面打包版——这些“非默认环境”是缺陷高发区。
- **本地模型用户诉求**：PR #8236 指出 Ollama 本地模型应按 `num_ctx` 而非 128k 云窗口计算上下文，反映本地部署群体的实际使用差异。
- **性能敏感**：PR #8491 指出仅为探测 whisper 是否安装就导入 whisper，连带拉入 torch 与 CUDA 运行时（约 690 MB RSS）。
- **满意度信号**：用户持续提交带根因定位与代码定位的高质量 Issue（如 #8700、#8705 直接对比两条代码路径），并出现多位首次贡献者提交修复 PR，社区参与意愿良好。

## 8. 待处理积压

以下条目创建时间较早、今日仍有更新，但长期处于开放状态，建议维护者优先分诊：

- **#5110**（2026-06-11 创建，今日关闭）——三个月悬置后关闭，提示长尾功能请求的响应周期偏长。
- **PR #8018**（2026-09-29，Under Review，XL）Windows 沙箱不在卷根写入 ACE——安全相关，已评审近一个半月未合并。
- **PR #8048**（2026-09-30，Under Review，M）Office COM 自动化未沙箱执行——安全问题，同上。
- **PR #8227**（2026-10-13，S）“在浏览器中打开”在工作区外静默失败——小改动长期未合。
- **PR #8236**（2026-10-14，Under Review，XL）Ollama 上下文窗口按 `num_ctx` 计算。
- **PR #8268**（2026-10-16，M）TaskTracker 运行完成回调无界、清理缺失（#8173 清理部分）。
- **#8184**（2026-10-12 创建）Doom-loop 误杀问题，已有 PR #8702，建议尽快推进评审以闭环。

**健康度小结**：响应端活跃（当日多条修复 PR 与首次贡献者），但**合并端是瓶颈**——37 条待合并中多条为安全/XL 级长期在审条目，且当日新报告的鉴权绕过（#8695）尚无修复，建议本周内优先处理安全类积压。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-12

> 数据来源：ZeroClaw (github.com/zeroclaw-labs/zeroclaw) GitHub 过去 24 小时活动。以下内容严格基于所提供材料，未提供的信息不作推断。

---

## 1. 今日速览

- 项目维持高强度活跃：24 小时内 50 条 Issue 更新（49 新开/活跃、1 关闭）、50 条 PR 更新（46 待合并、4 已合并/关闭），并发布 1 个新版本 v0.9.0。
- 讨论热度集中在沙箱策略、跨平台测试、Wire Protocol 与 OIDC/网关等安全与架构议题，多条高评论 Issue 带 `risk:high` 标签。
- PR 侧以长期在审的大型改动为主，多名 PR 已多次 rebase 跟进 master，说明评审周期偏长、合并节奏慢于提出节奏。
- 安全与稳定性议题占比突出（如 delegate 越权、Windows 测试失败、wasmtime-wasi CVE 等），是当前健康度的主要关注点。

---

## 2. 版本发布

### v0.9.0（首个支持“非运营者登录”的版本）
- 规模：**117 commits，22 位贡献者**。
- 核心变化：
  - Dashboard 支持通过**自有 OpenID Connect 提供方**登录。
  - 非管理员账号获得**各自隔离的会话（scoped chat）**。
  - 摘要在此处被截断，材料未提供其余 release notes 内容。
- 破坏性变更 / 迁移注意事项：**所提供材料未包含**，无法确认。建议维护者在发布说明中补充迁移指引，尤其是 OIDC 配置与账号权限模型相关变更。

---

## 3. 项目进展

今日已合并/关闭的 PR 共 4 条，但**所提供材料仅列出了 OPEN 状态的 15 条 PR，未给出已合并/关闭 PR 的具体内容**，因此无法逐项说明其推进的功能。

可确认的间接进展：
- v0.9.0 的发布本身代表 OIDC 登录与账号隔离能力已落地（117 commits / 22 贡献者）。
- Issue #8289（OIDC 里程碑跟踪器）状态显示“核心 OIDC 栈已合并，该 Issue 仅剩收尾工作”，并提及 #10248、#10255、#10259、#10263、#10265 已单独合入，#11082 合并了 enrollment、gateway、private-memory 与迁移相关内容。→ https://github.com/zeroclaw-labs/zeroclaw/issues/8289

评估：项目在“多用户 / 身份与访问”方向明显前进；但 PR 队列 46:4 的待合并/已合并比例表明吞吐瓶颈在评审侧。

---

## 4. 社区热点

按评论数排序的关键讨论：

| 条目 | 评论 | 链接 |
|---|---|---|
| #6996 RFC：细粒度沙箱策略——文件系统限制 | 29 | https://github.com/zeroclaw-labs/zeroclaw/issues/6996 |
| #7462 [Bug]：Windows 上 74 个测试失败 | 19 | https://github.com/zeroclaw-labs/zeroclaw/issues/7462 |
| #8396 RFC：让 wire protocol 成为 provider 构建与 onboarding 的一等公民 | 19 | https://github.com/zeroclaw-labs/zeroclaw/issues/8396 |
| #7432 [Tracker]：Runtime、dashboard 登录与网关交付（release:v0.9.1） | 17 | https://github.com/zeroclaw-labs/zeroclaw/issues/7432 |
| #5937 重构：统一 providers 架构与 reqwest client 管理 | 12 | https://github.com/zeroclaw-labs/zeroclaw/issues/5937 |
| #5982 按发送者的 RBAC（多租户） | 12 | https://github.com/zeroclaw-labs/zeroclaw/issues/5982 |

**诉求分析：**
- 沙箱与安全边界是最大焦点：#6996 指出应用层路径准入与 OS 沙箱后端（Bubblewrap、Landlock、Seatbelt）长期“漂移”，说明用户在实际部署中感受到策略不一致带来的风险。
- 跨平台可用性是第二焦点：#7462 反映 Windows（中文、代码页 936）环境下的路径语义与控制台编码问题，说明非 Linux 用户群体真实存在且体验受损。
- Provider 层的一致性与可扩展性被反复提出（#8396、#5937），指向“接一个 provider 成本高、参数与 reqwest 用法不统一”的工程债。
- 多租户/身份是 release v0.9.1 的明确主题（#7432、#5982、#8289），社区正在围绕它集中讨论。

---

## 5. Bug 与稳定性

按材料中标注的严重程度排列：

**S0 — 数据丢失 / 安全风险**
- **#8279** `delegate` 绕过父级工具白名单，子智能体可调用父策略排除的工具。→ https://github.com/zeroclaw-labs/zeroclaw/issues/8279
  - 材料未显示对应 fix PR。

**S2 — 行为降级**
- **#7462** Windows 11 上 74 个测试失败（Unix-only 测试命令、路径语义、控制台编码）。→ https://github.com/zeroclaw-labs/zeroclaw/issues/7462
  - 关联改进项 #7461（CI 增加 macOS/Windows 测试矩阵）处于 in-progress。
- **#6105** 智能体在执行 cron 任务时缺乏对自身所发消息的上下文。→ https://github.com/zeroclaw-labs/zeroclaw/issues/6105

**P1 安全与稳定性（未标 S 级）**
- **#8519** cargo-audit 忽略项与 wasmtime-wasi CVE 的整改（audit.toml / deny.toml 漂移）。→ https://github.com/zeroclaw-labs/zeroclaw/issues/8519
- **#5869** rumqttc v0.25.1 传递依赖引发 RUSTSEC 集群（0049/0098/0099/0104/0134），状态 blocked。→ https://github.com/zeroclaw-labs/zeroclaw/issues/5869
- **#6916** shell/skill_tool 子进程缺少内存上限，可能 OOM 容器（生产环境已观测到）。→ https://github.com/zeroclaw-labs/zeroclaw/issues/6916
- **#8642** MCP/工具 schema 克隆导致 agent 循环中 RSS 无界增长（从 #5542 拆出；WSL2 重启风暴部分已由 #8633 处理）。→ https://github.com/zeroclaw-labs/zeroclaw/issues/8642

**相关修复型 PR（均在 OPEN，未合并）**
- #12250 fix(canvas)：删除空的自旋 canvas 以释放槽位。→ https://github.com/zeroclaw-labs/zeroclaw/pull/12250
- #11868 fix(agent)：在派发前阻断重复工具调用。→ https://github.com/zeroclaw-labs/zeroclaw/pull/11868
- #11859 fix(tools)：后台 send_via 要求非空消息内容。→ https://github.com/zeroclaw-labs/zeroclaw/pull/11859
- #12335 fix(web)：避免配对凭据出现在 WebSocket URL 中。→ https://github.com/zeroclaw-labs/zeroclaw/pull/12335
- #12323 fix(config)：将缓存 HTTP 客户端绑定到其 Tokio runtime。→ https://github.com/zeroclaw-labs/zeroclaw/pull/12323

结论：#8279 是最需要优先响应的安全项，目前尚无可见修复 PR。

---

## 6. 功能请求与路线图信号

**已明确挂到 v0.9.1 的**
- **#7432** Runtime、dashboard 登录与网关交付（type:tracker, release:v0.9.1）→ https://github.com/zeroclaw-labs/zeroclaw/issues/7432
- **#8289** OIDC 里程碑：canonical principals 与入站认证（close-out tracker, release:v0.9.1）→ https://github.com/zeroclaw-labs/zeroclaw/issues/8289

**高可能性进入下一版本的**
- **#5982** 按发送者 RBAC（已收窄范围，方向定为在既有机制上构建 sender roles）→ https://github.com/zeroclaw-labs/zeroclaw/issues/5982
- **#7461** CI 平台矩阵（in-progress，且 #7462 的 Windows 失败为其提供直接动机）→ https://github.com/zeroclaw-labs/zeroclaw/issues/7461

**中长期 / 依赖生态**
- **#5601** Ollama Cloud、Z.AI、Kimi Code、MiniMax 的订阅原生认证（tracker）→ https://github.com/zeroclaw-labs/zeroclaw/issues/5601
- **#6489** 统一能力目录与插件迁移路线图（tracker）→ https://github.com/zeroclaw-labs/zeroclaw/issues/6489
- **#6293** 气隙执行模式 + unix socket 伴随守护进程（RFC，status:blocked）→ https://github.com/zeroclaw-labs/zeroclaw/issues/6293

**待评审的新增能力 PR**
- **#11847** 原生 Rust XMPP 通道（可选 legacy OMEMO）→ https://github.com/zeroclaw-labs/zeroclaw/pull/11847
- **#11869** opt-in 的任务级 SSH 传输复用 → https://github.com/zeroclaw-labs/zeroclaw/pull/11869
- **#12269** 配对设备语音设置与聊天控制 → https://github.com/zeroclaw-labs/zeroclaw/pull/12269
- **#11845 / #11846** Dashboard 展示 OpenRouter 余额及其开关 → https://github.com/zeroclaw-labs/zeroclaw/pull/11845
- **#9809** 单 provider profile 支持多模型（size:XL，needs-author-action）→ https://github.com/zeroclaw-labs/zeroclaw/pull/9809

---

## 7. 用户反馈摘要

**痛点**
1. 安全边界不一致且可被绕过：应用层与 OS 沙箱两套策略漂移（#6996）；`delegate` 使子智能体逃逸父级白名单（#8279）。这是对“能放心把 shell 交给智能体”的直接不信任来源。
2. 资源失控的真实事故：生产环境中 LLM 回退到 shell 命令导致容器 OOM（#6916）；WSL2 下连续 OOM（#5542/#8642）。
3. 非 Linux / 非英文环境体验差：中文 Windows 控制台（代码页 936）下测试大面积失败，且 CI 未覆盖，问题长期不可见（#7462、#7461）。
4. 状态与上下文缺失：cron 触发的智能体不认识自己此前发出的消息（#6105）；重复工具调用造成副作用（#11868 对应 #11866）。
5. 依赖安全噪音：MQTT 客户端单条传递依赖带出 4 个 RUSTSEC 通告，且修复受上游阻塞（#5869）。

**使用场景**
- 多租户 / 多用户部署（RBAC、per-account scoped chat、sender roles）。
- 自托管 + 自有身份提供方（OIDC）。
- 通道多样化：Telegram、Slack、Discord、Matrix、WhatsApp、Lark、Mattermost、QQ、LINE、WeCom/WeChat、MQTT、XMPP。
- 定时任务与后台代理（cron 前置条件门控 #5607）。
- 高安全环境（气隙/隔离执行 #6293）。

**满意度信号**
- 反应数极低：全榜仅 #5601 有 1 个 👍，其余为 0。说明社区以“长文技术讨论”方式参与而非点赞式表态，也提示维护者反馈正反馈渠道不足。
- v0.9.0 汇聚 22 位贡献者，外部贡献者已实质性参与核心能力建设。

---

## 8. 待处理积压

**创建时间最早、长期未落地的高优先级项**

| Issue | 创建 | 状态 | 备注 |
|---|---|---|---|
| #5601 订阅原生 provider 认证 | 2026-04-10 | accepted, tracker | 逾 7 个月仍在跟踪阶段 |
| #5607 cron 确定性前置门控 | 2026-04-10 | accepted | 逾 7 个月 |
| #5869 RUSTSEC 集群（rumqttc） | 2026-04-18 | **blocked** | 依赖上游，需明确解绑计划 |
| #5937 统一 providers 架构 | 2026-04-20 | accepted | 逾 6 个月，重构债持续累积 |
| #5982 per-sender RBAC | 2026-04-22 | accepted | 范围已于 2026-09-28 收窄 |
| #6293 气隙执行模式 RFC | 2026-05-03 | **blocked** | 需要决策以解除阻塞 |
| #6489 能力目录与插件迁移 | 2026-05-06 | tracker | 跨模块协调项 |
| #6996 细粒度沙箱策略 RFC | 2026-05-28 | accepted, in-progress | 讨论最热（29 评论），宜给出里程碑 |
| #7462 Windows 74 项测试失败 | 2026-06-10 | in-progress, p1 | 与 #7461 应合并推进 |

**PR 侧提醒**
- **#9809**（feat(providers)：单 profile 多模型，size:XL）自 2026-08-07 起 OPEN，当前标为 `needs-author-action`，已逾 3 个月，是队列中体量最大的在审项。→ https://github.com/zeroclaw-labs/zeroclaw/pull/9809
- 多名 PR（#11847、#11911、#11868、#11874、#11859）均由同一作者提交并反复 rebase/冲突解决，且部分带 `needs-maintainer-review`，建议集中安排评审窗口以避免贡献者疲劳。

---

*说明：本报告仅依据所提供材料生成。已合并/关闭的 4 条 PR 明细、v0.9.0 完整 release notes 及其破坏性变更说明未包含在材料中，故相应部分标注为不可确认。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*