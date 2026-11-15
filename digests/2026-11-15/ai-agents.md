# OpenClaw 生态日报 2026-11-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-15 17:13 UTC

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

# OpenClaw 项目日报 · 2026-11-15

## 1. 今日速览

项目维持极高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 446、关闭 54），PR 更新 500 条（待合并 335、已合并/关闭 165），并发布 v2026.11.5-beta.3。发布主题集中在大型会话的内存与可靠性优化，说明核心团队正优先处理规模化稳定性。但 P0 级 Windows 服务安装/更新失稳问题集中涌现，评论数最高的多条 Issue 均指向重启与升级链路。待合并 PR 数量（335）显著高于已处理量，审阅侧压力持续累积。

## 2. 版本发布

**v2026.11.5-beta.3**（源码版本号 2026.11.5-beta.3）

- **更新重点：大型会话可靠性**——降低转写索引、裁剪与压缩过程中的内存压力；仅流式加载被选中的 hydration 载荷；支持可配置的摘要长度限制（#194099、#194066、#194536、#196207；致谢 @vincentkoc、@aniruddhaadak80）。
- **破坏性变更**：发布说明中未提及。
- **迁移注意事项**：发布说明中未提及。需注意：Issue #193962（已关闭）指出，2026.10.10 环境下的 `openclaw update` 仍会运行已安装更新器的 10 秒探测，导致无法升级到包含 SQLite header-probe 修复的 2026.11.5-beta.1——从旧版本升级的用户可能受此路径影响。

## 3. 项目进展

今日数据仅提供 PR 标题与描述，未提供明确的合并状态。以下为当日更新中指向明确修复方向的重点 PR：

- **更新机制性能重构** PR #199688：以运行时契约检查替代候选版本金丝雀演练，避免完整复制 SQLite 状态与插件载荷进行预演（标注兼容性与可用性风险）。https://github.com/openclaw/openclaw/pull/198268
- **更新交接输出编码修复** PR #199688：拒绝托管更新交接输出中的有损 UTF-8 解码，防止 JSON 诊断被 U+FFFD 破坏。https://github.com/openclaw/openclaw/pull/199667
- **子代理投递语义修正** PR #199695：如实上报子代理等待请求方与消费状态，修复误导性投递记录和误报失败。https://github.com/openclaw/openclaw/pull/199695
- **状态读取准入复核** PR #199668（关闭 #184738）：读取值返回前重新确认准入，防止在被撤销的权限范围内消费结果。https://github.com/openclaw/openclaw/pull/199668
- **备份磁盘回收** PR #199666（关联 #183094）：删除暂存数据库时释放磁盘空间。https://github.com/openclaw/openclaw/pull/199666
- **沙箱复用优化** PR #199687：避免首次复用未变更工作区时对整个客户机树重新哈希。https://github.com/openclaw/openclaw/pull/199687
- **转写字符串分配优化** PR #199686：避免分离短转写字符串，降低分配与 CPU 开销。https://github.com/openclaw/openclaw/pull/199686

**整体评估**：推进方向与 beta.3 的内存/可靠性主题一致，但 335 个待合并 PR 表明吞吐瓶颈在审阅而非开发。

## 4. 社区热点

- **#170956（P0，33 条评论，仍开放）** Windows 启动缓慢、插件关闭不干净、schtasks 权限错误，使重启/更新频繁失败。标记 ux-release-blocker。https://github.com/openclaw/openclaw/issues/170956
- **#193962（P0，26 条评论，已关闭）** SQLite header-probe 超时修复无法通过 `openclaw update` 抵达受影响安装。https://github.com/openclaw/openclaw/issues/193962
- **#121661（P1，18 条评论）** CLI 支撑的子代理 announce-wake 轮次无工具运行，模型编造工具调用及其输出（claude-cli）。https://github.com/openclaw/openclaw/issues/121661
- **#143017（P2，17 条评论）** 持久会话重写前缀的五种路径，实测 21.3M 缓存写入 token。https://github.com/openclaw/openclaw/issues/143017
- **#163739（P2，15 条评论，👍1）** Control UI 的 Ctrl+Shift+A 归档快捷键与浏览器快捷键冲突。https://github.com/openclaw/openclaw/issues/163739
- **#192632（P2，15 条评论）** 请求新增 Claude 服务端 web_search 提供商。https://github.com/openclaw/openclaw/issues/192632

**诉求分析**：热度集中在两类——(a) 安装/更新/重启链路的可靠性（Windows 尤为突出）；(b) 提示缓存与前缀复用的成本效率（多个独立报告相互印证）。二者均直接关系到日常可用性与使用成本。PR 侧今日评论数显著偏低（多为当日新提交），社区注意力主要在 Issues。

## 5. Bug 与稳定性

**P0 / 发布阻断**
- #170956 Windows schtasks 权限错误、插件关闭不干净、启动慢，致重启/更新不可靠 — 未见 fix PR。https://github.com/openclaw/openclaw/issues/170956
- #146860 Windows 托管更新交接在 LogonType InteractiveToken 下无法获取进程启动身份，卡在 activating — 未见 fix PR。https://github.com/openclaw/openclaw/issues/146860
- #193094 托管更新在 validating 阶段耗时 3414 秒（超 1800 秒预算 190%）后被 SIGKILL — 未见 fix PR。https://github.com/openclaw/openclaw/issues/193094
- #161800 iOS 嵌入式 Dashboard 每次页面加载生成新浏览器设备身份，配对请求循环（安全相关）— 未见 fix PR。https://github.com/openclaw/openclaw/issues/161800
- #193962 旧版本无法通过 update 到达 header-probe 修复 — **已关闭**。

**P1**
- #121661 子代理编造工具调用与输出 — 未见 fix PR。
- #121558 Cron 隔离运行将 claude-cli 运行叙述混入播报消息（session-state / 数据丢失）— 未见 fix PR。
- #196199 自 2026.10.10 起的回归：原生 Codex helper 完成无法恢复父会话，暂停目标并锁住用户 — 未见 fix PR。
- #181120 macOS Gateway 主线程阻塞于关闭 worker MessagePort，间歇无响应 — 未见 fix PR。
- #194403 helper 完成续跑自行失效并阻塞后续对话 — 未见 fix PR。
- #162637 Codex 完成交接在源提交前报 SESSION_WORK_START_CHANGED — 未见 fix PR。
- #84662 Codex app-server 将每轮运行上下文写入原生用户历史，导致 response.create 输入膨胀 — 未见 fix PR。
- #185111 大会话上下文读取在应用模型上下文限制前扫描完整转写（231,865 事件会话，19–25 秒）— 未见 fix PR（但 beta.3 的高亮方向与此相关）。

**P2 重点**
- #182891 提示缓存从不复用，每次请求 `cache read dropped N -> 0` — 未见 fix PR。https://github.com/openclaw/openclaw/issues/182891
- #150081 sessions_yield/announce 时 Ollama 缓存前缀由约 25.4k 降至约 14.3k token — 未见 fix PR。https://github.com/openclaw/openclaw/issues/150081
- #180941 代理在 nothing_pending 后重复调用 sessions_yield 形成无进展循环 — 未见 fix PR。https://github.com/openclaw/openclaw/issues/180941
- #197083 安装后 Doctor WAL 发布校验失败，11.3 更新部分定型且拒绝回滚 — 未见 fix PR。https://github.com/openclaw/openclaw/issues/197083
- #187917 更新失败：updater-runtime-retention（2026.10.8）。https://github.com/openclaw/openclaw/issues/187917

**提示**：当日列出 PR 中未见直接对应上述 P0 的修复提交；#199667、#199695 等仅覆盖更新交接编码与子代理投递语义等局部路径。

## 6. 功能请求与路线图信号

- **Claude web_search 提供商** #192632：通过独立 Messages 调用返回带引用答案，与 Gemini/Perplexity 提供商形态对齐。诉求成熟，具备落地条件。https://github.com/openclaw/openclaw/issues/192632
- **不可绕过的出站策略强制（发送前保证）** #56349：要求所有出站消息经过单一可强制校验边界。属安全架构级需求，需安全评审。https://github.com/openclaw/openclaw/issues/56349
- **多用户网关的按用户密钥保险库** #197297：让代理使用当前用户自己的 token 执行 CLI/API。与多租户场景强相关。https://github.com/openclaw/openclaw/issues/197297
- **可配置/可替换的 Talk 任务回执播报** #184803：实时语音 agent consult 场景下的体验优化。https://github.com/openclaw/openclaw/issues/184803
- **Control UI 快捷键可配置** #163739：解决与浏览器快捷键冲突。https://github.com/openclaw/openclaw/issues/163739
- **会话命名集中化与子代理会话生命周期定义** #103067：涉及 ACP/子代理会话命名、寿命与跨渠道持久化。https://github.com/openclaw/openclaw/issues/103067

**下一版本可能性判断**：#192632 与 #184803 属边界清晰的功能增量，最可能被纳入；#197297、#56349 因涉及安全评审，短期进入稳定版的可能性较低；#163739 体量小、诉求明确，适合作为快捷修复。以上均需结合维护者排序，当前数据未提供承诺信息。

## 7. 用户反馈摘要

- **更新与安装是最大痛点**：Windows 托管服务用户反馈必须反复重试才能重启或升级（#170956 原话“pas na veel proberen”），且更新在 validating 阶段可长时间挂起直至被强杀（#193094）。用户希望更新链路可预测、可回滚（#197083、#187917）。
- **成本敏感**：多条独立报告以生产流量或线上抓包为证据，量化提示缓存未复用造成的浪费（#143017：21.3M 缓存写入 token；#182891；#150081），显示用户在用实际账单成本驱动反馈。
- **代理可信度担忧**：用户指出模型会编造工具调用与输出（#121661），以及将运行叙述混入对外播报（#121558），影响对自动化结果的信任。
- **通道与平台细节摩擦**：iPad 回车换行而非发送、IME 确认误发草稿、上传视频需在外部打开等体验问题被逐项提出，并已出现对应 PR（#199681、#199638、#197589）。
- **大会话性能**：231,865 事件会话出现 19–25 秒上下文快照读取（#185111），用户提供了具体的规模与耗时数据，反馈质量较高。
- **正面信号**：多名用户提交了带复现步骤、抓包数据与环境信息的结构化报告，并提出具体修复验证请求（如 #160719 要求核对模式与外键结果），表明核心用户群技术参与度高。

## 8. 待处理积压

- **#103067**（2026-07-09 创建，stale，10 条评论）：会话命名与子代理生命周期定义，悬置逾四个月，影响面涉及 ACP、Copilot 等多条链路，且缺产品决策。https://github.com/openclaw/openclaw/issues/103067
- **#56349**（2026-03-28 创建，8 条评论）：出站策略不可绕过保证，属安全类需求，长期等待产品与安全评审。https://github.com/openclaw/openclaw/issues/56349
- **#84662**（2026-05-20 创建，P1，9 条评论）：Codex app-server 运行上下文污染原生历史，导致输入膨胀；标记 fix-shape-clear 但无新修复 PR。https://github.com/openclaw/openclaw/issues/84662
- **#127195**（2026-08-21 创建，12 条评论）：十一文件十六处调用点抛出字节相同的错误串，无原因码，标记 fix-shape-clear，适合作为低成本可观测性改进。https://github.com/openclaw/openclaw/issues/127195
- **#121558 / #121661**（均为 2026-08-10 创建，P1）：claude-cli 相关长期缺陷，均标记 linked-pr-open 或需产品决策，需明确归属责任人。https://github.com/openclaw/openclaw/issues/121558 https://github.com/openclaw/openclaw/issues/121661
- **#160494 / #160719 / #166964**：均为 stale 状态且围绕会话轮换、删除、权限撤销等状态一致性问题，多条带详细复现数据，等待维护者确认。https://github.com/openclaw/openclaw/issues/160494 https://github.com/openclaw/openclaw/issues/160719 https://github.com/openclaw/openclaw/issues/166964
- **PR 侧**：#198268（更新机制重构，标注兼容性/可用性风险，XL 体量）与 #192232（iOS 会话渲染，XL 体量）属高影响大改动，处于等待维护者查看状态，建议优先排期评审。https://github.com/openclaw/openclaw/pull/198268 https://github.com/openclaw/openclaw/pull/192232

---

**健康度小结**：开发侧产出稳健，发布节奏正常，社区提供了高质量、可量化的复现报告；主要风险集中于 Windows 安装/更新链路的多条 P0 长期未解，以及待合并 PR 库存（335）对审阅通道的持续压力。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析
**数据日期：2026-11-15｜样本：11 个项目（其中 4 个当日无活动）**

---

## 1. 生态全景

个人 AI 助手类开源项目已进入“规模交付期”：头部项目（OpenClaw、ZeroClaw、Hermes Agent、NanoClaw）单日 Issues+PR 更新量均达数十至上百条，但**合并吞吐普遍落后于问题发现速度**（OpenClaw 待合并 PR 335、ZeroClaw 49:1、Hermes 40:10、CoPaw 13:0），评审能力成为共同瓶颈。技术焦点已从“能不能跑”转向**规模化稳定性（大会话内存、上下文压缩）、计费准确性（token 缓存复用、模型定价）与安装/更新链路可靠性（Windows 尤甚）**。同时，通道生态（Slack、WhatsApp、Mattermost、飞书、微信、Telegram）与多用户/多智能体隔离成为差异化竞争主战场。安全类议题（审批门绕过、密钥明文、端口暴露）在多个项目中集中爆发，并出现了“安全专项冲刺”式治理（Hermes 的 `sec-marathon`）。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃·关闭） | PR（待合并·已合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（446·54） | 500（335·165） | v2026.11.5-beta.3 | 开发稳健，审阅积压严重；多条 Windows P0 长期未解 |
| **ZeroClaw** | 28（27·1） | 50（49·1） | 无 | 投入旺盛、合并停滞；XL 大 PR 堆积，含 S0 安全绕过未修 |
| **Hermes Agent** | 50（41·9） | 50（40·10） | v0.23.1+canary | 安全治理有实质进展，长龄 `needs-decision` 议题制约 |
| **NanoClaw** | 6（4·2） | 50（27·23） | v2026.11.0-beta.3 | 闭环短、响应快；跨 6 个月的高优安全 Issue 未落地 |
| **CoPaw (QwenPaw)** | 16（11·5） | 13（13·0） | 无 | 活跃度高、合并吞吐为 0；v2.3.0 升级回归密集 |
| **NanoBot** | 2 | 10（5·5） | 无 | 小步快跑，Issue→修复当日闭环；存在多月积压 PR |
| **IronClaw** | 1 | 1（1·0） | 无 | 低活跃；两个动态均指向计费准确性 |
| **ZeptoClaw** | 1 | 0 | 无 | 平静期；定价数据过时未修 |
| **LobsterAI** | 0 | 1（1·0） | 无 | 低活跃维护期；单 PR 挂起约一个月（stale） |
| **PicoClaw** | 1 | 7（2·5） | 无 | 以清理历史积压为主；`skills install` Bug 未修 |
| **NullClaw / TinyClaw / Moltis** | 无活动 | 无活动 | 无 | — |

> 注：OpenClaw 的 500/500 为数据源给出的上限值口径，其余项目为实际计数，横向比较时需注意量纲差异。

---

## 3. OpenClaw 在生态中的定位

**规模优势明显。** 单日 Issues/PR 更新量（各 500）比第二位项目高一个数量级，且是样本中**唯一同时具备稳定发布节奏（beta.3）、规模化性能优化主题与结构化社区反馈**的项目：用户提交的是带抓包数据、token 计量（#143017 的 21.3M 缓存写入 token）与 231,865 事件会话耗时（19–25 秒）的量化报告。

**技术路线差异**：OpenClaw 自建完整运行时（SQLite 状态、hydration 载荷、沙箱复用、托管更新交接、子代理投递语义、Control UI），是“平台型”而非“通道拼装型”项目。其代价是**内部复杂度外溢为可靠性问题**——Windows schtasks 权限、托管更新 validating 阶段超 1800 秒被 SIGKILL、header-probe 修复无法通过 update 抵达旧版本，均属此列。

**社区规模对比**：以评论深度衡量，OpenClaw 单 Issue 最高 33 条评论（#170956），远超 Hermes（39 条，#141346 为样本最高）、CoPaw（4 条）、ZeroClaw（6 条）；但 PR 侧当日评论普遍偏低，说明**注意力高度集中在 Issues 而非代码评审**——这正是 335 条待合并积压的成因，也是与 NanoClaw（PR 主导、审查跟进链密集）最显著的差异。

**定位判断**：OpenClaw 是生态中的“参照实现”，其架构选择（大而全 + 自建更新链路）被其他项目部分继承（LobsterAI PR 带 `area: openclaw` 标签即为佐证），但其审阅吞吐与 Windows 可靠性正在成为相对短板。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **成本与计费准确性** | OpenClaw、IronClaw、ZeptoClaw、ZeroClaw、Hermes | 提示缓存从不复用（OpenClaw #182891、#150081）；`model_cost()`/`default_pricing()` 硬编码价格过时（IronClaw #8171：Opus 4.5 记 $15/$75 实际 $5/$25；ZeptoClaw #724 同型号同偏差）；Anthropic 花费恒为 $0.00 致预算失效（ZeroClaw #9816）；统一遥测/延迟/成本统计（Hermes #6642） |
| **安装与更新链路可靠性** | OpenClaw、Hermes、NanoClaw、NanoBot | Windows 服务安装/重启失稳（OpenClaw #170956、#146860）；更新后半安装无产品内恢复（Hermes #125437）；Node 升级后 credential helper 失效（NanoClaw #4342）；`openclaw update` 无法抵达修复版本（OpenClaw #193962） |
| **大会话/长任务可靠性** | OpenClaw、Hermes、ZeroClaw | 大会话内存与压缩优化（OpenClaw beta.3）；记忆容量默认值偏小、需压力提示（Hermes #5320）；压缩风险时自动切换新会话（Hermes #20372）；`keep_tool_context_turns` 触发 thinking-signature 400（ZeroClaw #12401） |
| **多用户 / 多智能体隔离** | CoPaw、OpenClaw、ZeroClaw、NanoClaw | 单用户设计无法创建多账号（CoPaw #8751）；共享实例下凭据重复、仅一通道可运行（CoPaw #8755）；按用户密钥保险库（OpenClaw #197297）；多智能体消息归属错标（NanoClaw #4392）；委派中的工具级审批语义（ZeroClaw #11138） |
| **安全边界与审批门** | Hermes、ZeroClaw、NanoClaw、OpenClaw | 后台命令绕过审批门（Hermes #90789，已关）；`cmd.exe` 白名单绕过（ZeroClaw #12118，S0，未修）；管理 API/Postgres 绑非回环网卡（NanoClaw #2433，挂 6 个月）；出站策略不可绕过（OpenClaw #56349，挂 7 个月+） |
| **通道能力补齐** | NanoBot、NanoClaw、CoPaw、ZeroClaw | Office365/Outlook 强制 OAuth2（NanoBot #5609，兼容性刚需）；按收件人别名过滤（NanoBot #5606）；飞书文件名百分号编码与重连 supervisor 永久退出（CoPaw #8752、#8748）；Matrix 按线程隔离历史（ZeroClaw #8541） |
| **静默失败可观测性** | CoPaw、ZeroClaw、NanoClaw、Hermes | 任务被静默吞掉、无日志（CoPaw #8746）；shell 非零退出返回空错误串（ZeroClaw #12390）；`<internal>` 标签致回复被扣留或漏推且无提醒（NanoClaw #4385/#4386）；错误卡片隐藏一行根因（Hermes #147620） |

**观察**：成本与更新可靠性两条线在四个以上项目中以**独立报告相互印证**的方式出现，说明它们源自架构共性问题，而非单项目缺陷。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | ZeroClaw / Hermes | NanoClaw / NanoBot / PicoClaw | CoPaw (QwenPaw) | IronClaw / ZeptoClaw |
|---|---|---|---|---|---|
| **功能侧重** | 全栈平台：会话、沙箱、Control UI、托管更新、子代理 | ZeroClaw：WebUI 凭据、SSH 传输、浏览器语音、provider 矩阵；Hermes：安全加固 + Desktop + A2A | Nano* 系：通道渲染正确性、provider 接入、WebUI 体验；PicoClaw：skills registry 与 fork 同步 | 中文场景 + 企业 PoC：飞书/微信通道、控制台、Cron、MCP 市场 | 计费与成本治理内核（定价表、USD 预算层级） |
| **目标用户** | 高级自托管用户、需要完整控制面的团队 | ZeroClaw：多通道/多用户部署；Hermes：Desktop 桌面用户 + 安全敏感场景 | 轻量部署、单机个人助手、快速接通道 | 中文企业内网、共享实例家庭场景 | 成本敏感的多租户/任务编排方 |
| **技术架构特征** | 自建运行时 + SQLite 状态 + 托管更新交接 | ZeroClaw：Rust（原生 task broker、Seatbelt 沙箱）；Hermes：审批门 + hook + profile 体系 | 从上游 fork / 增量演进（PicoClaw 同步 1095 提交后前向移植 6 个自定义提交） | 前端共享 + 多 agent 实例 + `QWENPAW_AUTH_ENABLED` 单账号模型 | 聚焦计费函数与预算传递链（user→project→mission→thread） |

**关键结论**：生态已出现明显分工——OpenClaw 走“平台化”，ZeroClaw/Hermes 走“安全与通道纵深”，Nano* 系走“轻量 + 快速接通道”，CoPaw 走“中文企业落地”，IronClaw/ZeptoClaw 则在成本维度做垂直切口。值得注意的是 **IronClaw #8171 与 ZeptoClaw #724 报告了完全相同的 Opus 4.6 定价偏差（$15/$75 vs $5/$25）**，提示多个项目可能共享同源定价数据或设计模式，定价同步机制或可跨项目复用。

---

## 6. 社区热度与成熟度

**第一梯队｜快速迭代期（高活跃、高积压）**
- **OpenClaw**：开发产出稳健、发布正常，但 335 条待合并 PR 与多条未解的 Windows P0 使其处于“迭代速度 > 收敛速度”阶段。
- **ZeroClaw**：49:1 的待合并/已合并比例为本样本最失衡，且含 S0 安全绕过未修，属高速扩张但质量风险累积。
- **CoPaw**：当日合并数为 0，v2.3.0 升级回归密集，但 fix PR 供给良好（当日 4 个新 Bug 中 3 个已配套），处于“快速响应、待集中评审”状态。

**第二梯队｜质量巩固期（活跃但以修复/加固为主）**
- **Hermes Agent**：安全专项有实质进展（多条 P2/P3 安全项关闭），合并吞吐偏低（10 vs 40），`needs-decision` 长龄议题待决。
- **NanoClaw**：审查跟进链密集（同日多条 review 跟进 PR），闭环最短；但 #2433 高优安全问题挂 6 个月，成熟度受单点拖累。
- **NanoBot**：Issue→修复当日闭环，积压清理有正面案例（#3654 挂 6 个月后关闭），整体最为“平稳”。

**第三梯队｜低活跃 / 维护期**
- **PicoClaw**：以历史积压清理为主，未见新能力合入主干，外部贡献者 PR（两条 provider）处 stale。
- **IronClaw、ZeptoClaw、LobsterAI**：单点动态、无发布，处于低活跃状态，但 IronClaw/ZeptoClaw 暴露的定价问题具生态外溢价值。
- **NullClaw、TinyClaw、Moltis**：当日无活动，无法评估。

---

## 7. 值得关注的趋势信号

1. **“以美元计费”正在取代“以次数/时长计费”**。IronClaw #2843 提出 user→project→mission→thread 四级 USD 预算传递，ZeroClaw #12353 要求按会话显示预估成本，OpenClaw 用户以 21.3M 缓存写入 token 的实际账单驱动反馈——**成本治理正从可观测性需求升级为架构需求**。对开发者的参考：预算传递链与 token 缓存复用策略应在设计期建模，而非事后补丁。

2. **“静默失败”成为信任度第一杀手**。CoPaw #8746（消息被吞、无日志）、NanoClaw #4385/#4386（回复被扣留或漏推且无提醒）、ZeroClaw #12390（stderr 被吞没）、Hermes #147620（错误卡片隐藏根因）跨四个项目同现。**默认显式报错、保留原始错误串**是低成本高回报的设计原则。

3. **安全治理走向“专项冲刺 + 分级标签”**。Hermes 的 `sec-marathon-2026-11-13` 标签与 P2/P3 批量关闭、ZeroClaw 的 S0–S3 分级、NanoClaw 的 `priority/high`，显示头部项目已建立可复用的安全 Issue 分级与集中清理机制；反之，OpenClaw #56349（出站策略，挂 7 个月+）与 NanoClaw #2433（端口暴露，挂 6 个月）说明**安全需求若缺明确 Owner 与专项节奏，极易长期悬置**。

4. **外部平台变更正在被动驱动路线图**。Office365/Outlook 强制 OAuth2（NanoBot #5609）属兼容性刚需而非可选功能；CoPaw 已有意大利航空航天企业以内网 PoC 运行并服务意大利语用户群（#8750、#8751），显示**企业真实落地已开始反向提出多用户与 i18n 要求**。

5. **跨项目同源数据问题值得警惕**。IronClaw 与 ZeptoClaw 报告相同型号的相同定价偏差，提示硬编码定价表可能是多个项目的共同技术债；**建立定价数据的定期同步或可配置机制**（ZeptoClaw #724 隐含需求）具备跨项目复用价值。

6. **审阅吞吐是生态级瓶颈，而非单项目问题**。OpenClaw（335）、ZeroClaw（49）、Hermes（40）、NanoClaw（27）、CoPaw（13）、NanoBot（5）——**全部样本项目待合并数 ≥ 已合并数**。对维护者的直接建议：优先消化已进入人工评审的队列（CoPaw #7211、#8477），并对 XL 体量 PR（OpenClaw #198268、ZeroClaw #11869/#12438）给出明确结论或关闭，以释放评审带宽。

---

*说明：本报告仅基于所提供的各项目 2026-11-15 日报数据生成；未提供的事实（如 PR 评论正文、部分项目评论数）均按“数据未提供”处理，未作推断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-15

## 1. 今日速览

过去 24 小时 NanoBot 共发生 12 条 Issues/PR 更新（2 Issues + 10 PRs），无新版本发布。PR 活动显著高于 Issue 活动，且当日关闭/合并 5 条、待合并 5 条，其中 4 条由同一贡献者 chengyongru 在同一日内提交并关闭，呈现"快速提出—快速修复"的特征。当日工作重心集中在 WebUI 渲染正确性（Issue #6662 及其修复 PR #6670、#6672）与图像/邮件 provider 能力扩展。整体来看项目维护响应及时，但存在多条自 5–8 月起长期挂起的 PR（最长 #3654 自 2026-05-06），积压清理仍需关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日已合并/关闭的 PR 共 5 条：

- **#6670 [CLOSED] fix(webui): wrap long inline code in plain paragraphs**（IndigoC）— 针对 Issue #6662 报告的第一种行为，修复顶层普通段落中的长单行 inline code 会脱离上下文变成独立横向滚动块的问题。[链接](HKUDS/nanobot PR #6670)
- **#6672 [CLOSED] fix(webui): preserve inferred file reference text**（chengyongru）— 修复形似文件路径的 inline code 被截断为 basename 的问题，例如 `pytest tests/test_agent.py` 被错误显示为 `test_agent.py`，从而丢失目录信息。[链接](HKUDS/nanobot PR #6672)
- **#6671 [CLOSED] feat(image): support MiniMax H3 image models**（chengyongru）— 为 MiniMax 图像 provider 增加 H3 模型的生成与参考图编辑能力，同时保持既有 image-01 API 请求不变。[链接](HKUDS/nanobot PR #6671)
- **#5605 [CLOSED] fix(email): only mark \Seen on messages that are actually delivered**（tilladam）— 修正 IMAP 消息在通过过滤器（自发、SPF/DKIM、允许列表）后、实际投递前就被标记 `\Seen` 的顺序缺陷，涉及被过滤拒绝消息的已读状态误标。[链接](HKUDS/nanobot PR #5605)
- **#3654 [CLOSED] fix(provider): specify thinking_style for MIMO**（Flinn-X）— 为 MIMO provider 显式设置 `thinking_style="thinking_type"`，以正确启用扩展思考能力。[链接](HKUDS/nanobot PR #3654)

整体而言，今日推进以缺陷修复为主（4 条 fix + 1 条 feat），对核心新功能的推进有限；WebUI 渲染质量问题在当日形成"报 Issue → 提交修复 → 关闭"的完整闭环。

## 4. 社区热点

今日数据中未见高评论或高反应条目：Issue #6662 有 1 条评论，其余 Issues/PRs 评论数为 0 或未提供，所有条目 👍 均为 0。

相对最受关注的是 **Issue #6662 [CLOSED] WebUI inline code may become a scrolling block or show only a filename**（作者 IndigoC，2026-11-14 创建，2026-11-15 更新，1 条评论），[链接](HKUDS/nanobot Issue #6662)。其诉求指向 WebUI Markdown 渲染器对 inline code 的两类处理偏差，并直接在当日催生两条修复 PR（#6670、#6672），说明该问题对日常阅读/复制代码片段有实际影响。

**Issue #6673 [OPEN]**（akku1139）虽无评论，但附带截图说明 live buffer 与响应完成后的显示差异，属于可视化体验问题，值得关注后续讨论。[链接](HKUDS/nanobot Issue #6673)

## 5. Bug 与稳定性

按影响程度排列：

1. **#6673 [OPEN] [bug] live buffer 中输出文本被工具调用分隔** — 新开、无评论、无 fix PR。属于实时输出流的显示一致性问题，用户在响应完成前后看到不同结构，可能影响对工具调用过程的理解。严重程度：中（体验/可读性，非功能中断）。[链接](HKUDS/nanobot Issue #6673)
2. **#6662 [CLOSED] WebUI inline code 渲染异常** — 已关闭，有 fix PR #6670（覆盖第一种行为）与 #6672（保留文件引用完整文本）。注意 #6670 摘要明确说明仅处理第一个上报行为，若第二种行为未被 #6672 完全覆盖，可能存在残留问题，建议维护者确认。[链接](HKUDS/nanobot Issue #6662)
3. **#6672 / #6670 本身即针对上述渲染缺陷的修复**，同日闭环，回归风险需通过既有测试（标签含 `test`）验证。[#6672](HKUDS/nanobot PR #6672) [#6670](HKUDS/nanobot PR #6670)
4. **#5605 [CLOSED] 邮件 `\Seen` 误标** — 已修复，属于数据/状态一致性问题（被过滤消息被误标已读），影响邮件渠道可靠性。[链接](HKUDS/nanobot PR #5605)
5. **#5152 [OPEN] [regression] fix(subagent): mark partial completion results** — 标注为 regression，涉及子代理部分完成结果的标记；当同一父轮次仍有兄弟后台任务待公告时，结果可能被误判。该 PR 自 2026-07-28 起挂起，最新更新 2026-11-14，**尚无合并**，回归问题长期未落地，建议优先评估。[链接](HKUDS/nanobot PR #5152)

## 6. 功能请求与路线图信号

- **WebUI 自定义背景图** — PR #6674 [OPEN]（chengyongru），提出实例级背景图并保持文字可读性与跨设备一致性。属 UI 个性化需求，当日新开，纳入下一版本的可能性取决于设计评审。[链接](HKUDS/nanobot PR #6674)
- **MiniMax H3 图像模型支持** — PR #6671 已关闭（按摘要为实现新增能力），表明图像 provider 正从 legacy image-01 向 H3 世代扩展，后续版本可能体现。[链接](HKUDS/nanobot PR #6671)
- **邮件渠道：Microsoft 委托 OAuth（Office365/Outlook）** — PR #5609 [OPEN]，因 Office365/Outlook 正强制从 basic auth 迁移至 OAuth2，此为兼容性刚需而非可选功能，优先级标签为 p2。[链接](HKUDS/nanobot PR #5609)
- **邮件渠道：按收件人别名过滤** — PR #5606 [OPEN]，针对多个地址共享同一邮箱（如 `assistant@example.com` 与 `team@example.com`）的场景，当前渠道会处理全部消息。[链接](HKUDS/nanobot PR #5606)
- **MIMO 扩展思考支持** — PR #3654 已关闭，provider 侧思考参数适配已推进。[链接](HKUDS/nanobot PR #3654)

## 7. 用户反馈摘要

基于今日 Issues 与 PR 描述可提炼的真实痛点：

- **代码片段展示失真**：WebUI 中 inline code 既可能变成横向滚动块，也可能被截断为仅文件名，用户明确以 `pytest tests/test_agent.py` → `test_agent.py` 为例说明目录信息丢失会影响可读与可复制性（#6662 / #6672）。
- **实时输出可读性**：用户以截图对比 live buffer 与响应完成后的排版差异，反映对输出流稳定呈现的期待（#6673）。
- **认证方式迁移压力**：Office365/Outlook 强制 OAuth2 使现有 IMAP/SMTP 用户名密码方式面临失效，属于外部平台变更带来的被动需求（#5609）。
- **共享邮箱场景**：多别名投递到同一收件箱时缺乏按别名过滤能力，导致渠道处理无关消息（#5606）。
- **邮件状态准确性**：被过滤器拒绝的消息不应被标记为已读，否则影响用户在真实邮件客户端中的未读管理（#5605）。

今日数据中未提供评论正文，故无可归纳的满意度评价。

## 8. 待处理积压

以下条目创建时间较早且仍为 OPEN，建议维护者关注：

- **PR #3654**（Flinn-X，创建 2026-05-06，更新 2026-11-15）— 今日已关闭，积压时长约 6 个月后闭环，可作为积压清理的正面信号。[链接](HKUDS/nanobot PR #3654)
- **PR #5152**（yu-xin-c，创建 2026-07-28，更新 2026-11-14）— 标签含 `regression`，仍 OPEN，回归修复未合并，优先级应上调。[链接](HKUDS/nanobot PR #5152)
- **PR #5609**（tilladam，创建 2026-08-30，更新 2026-11-15）— Microsoft 委托 OAuth，仍 OPEN；受外部 basic auth 停用时间表驱动，延迟合并将直接影响 Office365/Outlook 用户。[链接](HKUDS/nanobot PR #5609)
- **PR #5606**（tilladam，创建 2026-08-30，更新 2026-11-15）— 收件人别名过滤，仍 OPEN。[链接](HKUDS/nanobot PR #5606)
- **PR #6194**（ZedingZhang，创建 2026-10-13，更新 2026-11-14）— 允许 CI 上持久化投递与关闭流程完成；摘要显示其原目标 #4883 涉及的独立 API server 及其测试已被 #6614 移除，分支已合入 main，需确认是否仍必要或应关闭。[链接](HKUDS/nanobot PR #6194)
- **Issue #6673**（2026-11-15 新开，0 评论）— 尚无维护者回应，建议尽快确认是否为 #6662 同源渲染问题。[链接](HKUDS/nanobot Issue #6673)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-11-15

> 数据来源：Hermes Agent（github.com/nousresearch/hermes-agent）GitHub 公开数据。以下内容均基于所提供数据，未提供的事实不作推断。

---

## 1. 今日速览

今日过去 24 小时内共发生 50 条 Issue 更新（新开/活跃 41，关闭 9）与 50 条 PR 更新（待合并 40，已合并/关闭 10），并发布 1 个 canary 版本 v0.23.1+canary.20261115T064406Z。整体活跃度**高**，但以问题暴露与修复排队为主：待合并 PR 是已合并/关闭 PR 的 4 倍，积压明显。安全性话题突出，涉及审批门（approval gate）绕过、密钥明文、cron 失败戳等多条安全类 Issue/PR，并出现 `sec-marathon-2026-11-13` 标签的集中修复。合并速率偏低、长龄 Issue 占比高，是当前项目健康度的主要风险点。

---

## 2. 版本发布

**v0.23.1+canary.20261115T064406Z（2026-11-15，canary 通道）**
- 类型：每日 canary 构建。
- 提供 Hermes Desktop 下载（含 macOS Apple Silicon DMG 等，其余平台在原始发布中未完整展示）。
- 所提供数据未包含破坏性变更与迁移说明，无法确认；canary 通道本身建议非生产环境使用。
- 链接：见 Release 页（原始数据未给出完整 URL）。

---

## 3. 项目进展

今日合并/关闭的 PR 共 10 条，数据中明确可见的代表性条目：

- **#155470 [CLOSED] fix(approval): always ask a human before osascript can discard unsaved work** — 对应 #141346 的 osascript 未保存数据丢失问题，在 smart 模式下强制人工确认。属 §3.2 加固，官方明确其“非安全边界”。
  链接：https://github.com/NousResearch/hermes-agent/pull/155470
- **#125428 [CLOSED] fix(cli): mask all-digit secrets in config set/get output** — 修复纯数字密码在 `config set/get` 中明文输出的问题（与 #24868 相关，编号原文如此）。
  链接：https://github.com/NousResearch/hermes-agent/pull/125428
- **#155470 与 #155293 同属 `sec-marathon-2026-11-13`**，表明安全专项在持续收尾（#155293 仍在 OPEN，见第 8 节）。

整体推进：以安全加固与配置泄露修复为主，功能性推进有限；合并/关闭量（10）远低于新增待合并量（40），项目“修复入库速度”落后于“问题发现速度”。

---

## 4. 社区热点

- **#141346 [CLOSED] Smart 模式自动批准 osascript，导致用户未保存的 PowerPoint 被关闭并删除导出文件（不可恢复数据丢失）** — 39 条评论，今日最热。作者 cortecepedabenjamin，2026-10-19 创建。
  链接：https://github.com/NousResearch/hermes-agent/issues/141346
  诉求：智能审批对“具有破坏性副作用”的系统级脚本缺乏识别，用户要求可恢复性与更强的确认机制（对应 fix PR #155470 已关闭）。
- **#125437 [OPEN] 更新失败留下半安装状态（5 种机制、本周 15 个 Discord 帖）** — 20 条评论，teknium1。
  链接：https://github.com/NousResearch/hermes-agent/issues/125437
  诉求：更新失败后产品内无恢复路径，只能手敲修复步骤；Windows 平台尤甚。
- **#5320 [OPEN] 记忆容量默认值偏小、缺乏用量压力提示** — 14 条评论，3 个赞。
  链接：https://github.com/NousResearch/hermes-agent/issues/5320
  诉求：长会话下记忆很快打满，需自动扩容与可见的用量压力信号。
- **#20372 [OPEN] 压缩风险时自动切换全新会话** — 10 条评论，2 个赞。
  链接：https://github.com/NousResearch/hermes-agent/issues/20372
  诉求：避免多小时任务因上下文压缩反复劣化而失败。

背后共性：**长会话可靠性**与**失败可解释/可恢复**是社区最集中的两条诉求线。

---

## 5. Bug 与稳定性

按严重程度排列：

**P1 / 严重**
- **#125437 [OPEN] 更新失败导致半应用安装、无产品内恢复**（`sweeper:risk-compatibility`，Windows）— 数据中未见对应 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/125437

**P2 / 高**
- **#147619 [OPEN] 辅助通道（压缩、goal judge、vision、fallback）在自定义/本地/回退路由下调用错误模型，且报错指向错误配置** — 数据中未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/147619
- **#147620 [OPEN] 错误卡片隐藏已知的一行根因（模型未找到、SSH 后端丢失、压缩下限、fallback 401/404）** — 数据中未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/147620
- **#141822 [OPEN] 人类消息被后台进程唤醒事件挤占，共享队列上限可能丢消息（Discord 平台）** — 数据中未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/141822
- **#146278 [OPEN] cron 任务在更新栅栏（update fence）期间被拒：`Gateway draining: update_paused`** — 数据中未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/146278
- **#132508 [OPEN] Desktop SSH 连接/转发超时固定 15 秒不可覆盖，慢链路启动失败循环** — 数据中未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/132508
- **#156172 [OPEN] Desktop：clarify 等待结束后输入的答案被静默丢弃（数据丢失）** — 今日新开，数据中未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/156172
- **#132730 [OPEN] MCP OAuth：Entra 多租户 `{tenantid}` 占位符导致 Microsoft 托管 MCP 登录失败** — 相关 PR #154958 为“无 token 时不保存 oauth”的相邻修复，不直接解决该问题。
  https://github.com/NousResearch/hermes-agent/issues/132730
- **#143512 [OPEN] Desktop 实时语音聊天（chained）回复不被朗读（v0.22.5）** — 数据中未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/143512

**安全类（今日关闭或修复中）**
- **#90789 [CLOSED] `terminal(background=true)` 绕过危险命令审批门**（P2）— 已关闭。
  https://github.com/NousResearch/hermes-agent/issues/90789
- **#31682 [CLOSED] ACP 拒绝的编辑可经其他写入类工具静默重试**（P3）。
  https://github.com/NousResearch/hermes-agent/issues/31682
- **#149944 [CLOSED] Gateway 自杀式显式 PID kill 绕过 toolgate，hook 失败开放**（P3）。
  https://github.com/NousResearch/hermes-agent/issues/149944
- **#132202 [CLOSED] 新增注册表写入检测类（`reg add`/`setx`/`Set-ItemProperty`）**（P3，Windows）。
  https://github.com/NousResearch/hermes-agent/issues/132202

**有 fix PR 在途的重点项**
- osascript 数据丢失 → #155470（已关闭）
- 全数字密钥明文 → #125428（已关闭）
- cron 网络中断丢消息 → #154953（OPEN）
- 升级前残留失败戳 → #155835（OPEN）
- 单段家目录（/root）折叠 + 文件工具审批配对 → #155293（OPEN）

---

## 6. 功能请求与路线图信号

结合已有 PR 判断：

- **记忆容量自动扩容与压力提示（#5320）** — 目前无对应 PR，短期内纳入可能性偏弱，但讨论热度高，建议优先评估。
  https://github.com/NousResearch/hermes-agent/issues/5320
- **压缩风险时自动切换新会话（#20372）** — 依赖会话状态协调，无直接 PR，属中期路线图候选。
  https://github.com/NousResearch/hermes-agent/issues/20372
- **统一遥测/分析：延迟、成本、完成/失败率（#6642）** — 与 PR #156101（prompt-cache 统一时钟、`/context` 显示缓存过期）方向互补，#156101 有望先行落地。
  https://github.com/NousResearch/hermes-agent/issues/6642
  https://github.com/NousResearch/hermes-agent/pull/156101
- **后台进程完成结果在活跃回合内送达模型（#134198）** — 与 #141822 队列问题互为表里，缺直接 PR。
  https://github.com/NousResearch/hermes-agent/issues/134198
- **按平台默认模型/供应商覆盖（PR #11439，OPEN 自 2026-04-17）** — 已具备 PR 形态，若通过评审可进入下一版本。
  https://github.com/NousResearch/hermes-agent/pull/11439
- **A2A accept-then-poll 与瞬时重试（PR #141947）** — 已提交，待合并。
  https://github.com/NousResearch/hermes-agent/pull/141947
- **gateway 存活信号消费与告警/自动恢复（#112628，Windows）** — 无 PR，但与 #125437 同属可恢复性主题，具备合并考量价值。
  https://github.com/NousResearch/hermes-agent/issues/112628

---

## 7. 用户反馈摘要

- **数据安全焦虑最强**：osascript 事件（#141346）与 clarify 答案丢失（#156172）表明用户对“智能审批误伤真实工作文件”和“输入被静默吞掉”零容忍，期望默认更保守、操作可恢复。
- **更新体验是高频痛点**：`hermes update` 失败后半安装、原始错误输出、无产品内恢复（#125437），用户只能依赖 Discord 社区手写修复步骤。
- **长会话用户面临上下文与记忆压力**：#5320、#20372 反映多小时任务在压缩与记忆上限处的实际失败，用户希望系统主动提示并平滑交接。
- **可观测性缺口**：#6642 用户直接询问是否有延迟/Token/金额成本与失败率统计，说明运维与成本管理需求真实存在。
- **隐私与可识别性**：macOS LaunchAgent 显示为不透明的 `osascript` 而非 Hermes（#123118），影响用户授权判断与信任。
- **平台覆盖痛点**：Windows 网关“静默死亡”无告警无自愈（#112628）、Windows 更新问题集中，Windows 用户满意度偏弱。
- **正向信号**：多条安全类 Issue 被关闭，且修复 PR 快速跟进，社区对安全专项的响应速度有正面感知基础。

---

## 8. 待处理积压

长期未响应或长龄且重要：

- **#5320** 创建 2026-04-05，OPEN 至今（7 个月+），14 条评论，3 赞 — 记忆上限，需给出明确决策。
  https://github.com/NousResearch/hermes-agent/issues/5320
- **#20372** 创建 2026-05-05，OPEN，标记 `needs-decision` — 自动新会话交接，等待产品决策。
  https://github.com/NousResearch/hermes-agent/issues/20372
- **#31682** 2026-05-24 创建、今日关闭 — 长龄安全问题已清理，可作为积压消化的正面案例。
  https://github.com/NousResearch/hermes-agent/issues/31682
- **PR #11439** 2026-04-17 起 OPEN — 按平台默认模型覆盖，长龄待合并，建议维护者给出评审结论。
  https://github.com/NousResearch/hermes-agent/pull/11439
- **PR #127214** 2026-09-29 起 OPEN — 更新时为所有 profile 刷新 dashboard，与更新稳定性主题直接相关。
  https://github.com/NousResearch/hermes-agent/pull/127214
- **#112628** 2026-09-16 起 OPEN — Windows 网关静默死亡无告警，长期未收敛。
  https://github.com/NousResearch/hermes-agent/issues/112628
- **PR #140155** 2026-10-16 起 OPEN — 插件暂存冲突与误报更新失败，涉及插件可靠性。
  https://github.com/NousResearch/hermes-agent/pull/140155

---

**健康度小结**：活跃度强（Issue/PR 双向高频），安全治理有实质进展（多条 P2/P3 安全项关闭，`sec-marathon` 专项在推进）；但**待合并 PR 积压（40 vs 10）** 与**长龄 `needs-decision` 议题**是主要制约，建议提升评审吞吐并优先收敛更新/恢复类 P1–P2 问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-15）

## 1. 今日速览
过去24小时项目无新版本发布，共 1 条 Issue 更新、7 条 PR 更新，活跃度偏低。PR 侧以清理为主：5 条合并/关闭，其中多为长周期积压 PR 的收尾（部分创建于 2026 年 2–5 月）。新开/活跃 Issue 仅 1 条且标记为 stale，仍有一个影响 `skills install` 的功能性 Bug 未修复。待合并 PR 为 2 条，均为新增 OpenAI 兼容 provider，同属 stale 状态，社区外部贡献推进缓慢。

## 2. 版本发布
无。

## 3. 项目进展
今日合并/关闭 5 条 PR，主要为积压清理与分支同步：
- **#2810**（CLOSED）与上游 `upstream/main` 同步约 1095 个提交，并将 6 个自定义提交前向移植到上游重构后的目录布局（agent loop 拆分为 `agent_*.go`、tools 重组）。此类 fork 同步对下游用户有参考价值，但需注意移植冲突风险。[链接](sipeed/picoclaw PR #2810)
- **#1546**（CLOSED）合并 #1480/#1479/#1478/#1473/#1467 的修复。[链接](sipeed/picoclaw PR #1546)
- **#1555**（CLOSED）合并 #1390/#1389/#1383/#1381 的修复。[链接](sipeed/picoclaw PR #1555)
- **#423**（CLOSED，WIP）多智能体协作基础框架（共享上下文池、agent handoff、发现工具），基于已合并的 #213、#131。以 WIP 状态关闭，尚不能视为功能落地。[链接](sipeed/picoclaw PR #423)
- **#2379**（CLOSED）Telegram codex orchestrator 特性分支。[链接](sipeed/picoclaw PR #2379)

整体而言，今日进展以“清账式”合并为主，未见明确的新能力合入主干。

## 4. 社区热点
- **Issue #3462**：`skills install` 报 `registry archive is not a valid skill`，1 条评论，是今日唯一有讨论的条目。[链接](sipeed/picoclaw Issue #3462)
- **PR #3464** / **PR #3431**：两条新增 OpenAI 兼容 provider 的待合并 PR（CloudGPU、Standard Compute），均标记 stale。[#3464](sipeed/picoclaw PR #3464) · [#3431](sipeed/picoclaw PR #3431)

数据中未提供任何条目的 👍 数据（均为 0），评论数除 #3462 外未明确，故不构成显著热点；但两条 provider PR 反映外部厂商希望将 PicoClaw 纳入其兼容生态的诉求。

## 5. Bug 与稳定性
| 严重程度 | 条目 | 状态 |
|---|---|---|
| 中高 | **Issue #3462**：同名校验缺陷——当已安装技能的 frontmatter `name` 与待安装技能重名时，`picoclaw skills install` 及 agent 的 `install_skill` 工具均失败，报 “registry archive is not a valid skill”。阻断技能安装主流程。 | OPEN，标记 stale，**未见 fix PR** |

除上述 1 条外，今日无其他 Bug、崩溃或回归报告。

## 6. 功能请求与路线图信号
- **新增 provider 支持**：PR #3464（`cloudgpu`）与 PR #3431（`standardcompute`）均以 OpenAI 兼容 HTTP provider 形式接入，仅需 API key 即可在 `model_list` 中使用；#3431 声明遵循 #2917 的模式。两者仍为 OPEN 且 stale，是否纳入下一版本待维护者评审。
- **多智能体协作**：PR #423 提供共享上下文池与 handoff 基座，但以 WIP 关闭，路线图信号尚不明确。

## 7. 用户反馈摘要
- **痛点**：技能安装对 `name` 冲突缺乏处理，用户在安装第三方注册表技能时被直接阻断，且报错信息不指向真实原因（#3462）。
- **使用场景**：通过公共 registry 安装技能、由 agent 自动调用 `install_skill` 扩展能力。
- **贡献者诉求**：外部云厂商希望以最小改动接入自有 OpenAI 兼容端点；下游 fork 维护者需持续跟进上游结构调整（#2810）。
- 其他条目评论内容在数据中未提供，无法进一步提炼满意度信息。

## 8. 待处理积压
- **Issue #3462**（创建 2026-11-06，已 9 天）仍为 OPEN 且 stale，无 fix PR，建议优先处理。
- **PR #3464**（创建 2026-11-07）与 **PR #3431**（创建 2026-10-15，已超一个月）均 stale，需明确接受或关闭，以免外部贡献者流失。
- 多条 2026 年 2–5 月创建的 PR 今日才被关闭（#2379、#1546、#1555、#2810、#423），显示积压清理周期偏长，建议缩短评审响应时间。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-11-15

## 1. 今日速览

NanoClaw 今日处于**高活跃状态**：50 条 PR 更新（27 条待合并、23 条已合并/关闭）是日活跃的主信号，其中多条为同日提交的审查跟进修复，说明核心团队（glifocat 为主要贡献者）响应节奏很快。Issues 侧 6 条更新，4 条新开/活跃，集中在会话删除外键失败、`<internal>` 标签相关回复异常、OneCLI 端口暴露等问题。发布了 v2026.11.0-beta.3，明确为早期测试版，并说明 2026.10.1 将不转正。整体项目健康度良好，修复闭环短，但积压中存在跨月未解决的高优安全问题需关注。

## 2. 版本发布

**v2026.11.0-beta.3**（2026.11.0 第三个 beta）

- 定位：早期测试构建，官方提示"会有粗糙边缘"，不适合作为稳定部署。
- 版本关系：11 月版本取代原本计划的 2026.10.1——后者**永远不会成为稳定版**，其两个 RC 继续保持已发布状态，所含内容均并入本版本。
- 破坏性变更：数据中未说明。
- 迁移注意：数据中未给出具体迁移步骤，仅提及安装在 beta 通道；建议非生产环境使用。

## 3. 项目进展

今日关闭/合并的重要 PR：

- [#4363](https://github.com/nanocoai/nanoclaw/pull/4363) `fix(channels)`: 长回复截断不再把 emoji 劈开，修复此前在 Slack 上整条消息发布失败的问题。
- [#4290](https://github.com/nanocoai/nanoclaw/pull/4290) `fix(build)`: 显式加载 `@types/node`，保证 TypeScript 6/7 下 Node 全局类型仍在。
- [#4370](https://github.com/nanocoai/nanoclaw/pull/4370) `test(mattermost)`: 为 Mattermost 打开超时的 `clearTimeout` 与 terminate 行为补测试。
- [#4365](https://github.com/nanocoai/nanoclaw/pull/4365) `test(add-mattermost)`: 固定复制清单与 `REMOVE.md` 清理逻辑。
- [#4378](https://github.com/nanocoai/nanoclaw/pull/4378) `fix(whatsapp)`: 将 PTT 语音消息标记为 voice note，便于区分音频文件。
- [#4380](https://github.com/nanocoai/nanoclaw/pull/4380) `docs`: 修正 `CLAUDE.md` 中 18 行与 main 代码不符的指引（会话目录路径、镜像 tag、Node CLI 位置、`cli_scope=global` 语义等）。

**推进评估**：合并侧以通道稳定性、构建兼容性与测试加固为主，属稳健增量，未见大功能落地；真正的功能/修复集中在待合并队列（见下节）。

## 4. 社区热点

数据中 PR 评论数均未给出（`undefined`），无法据此排序；以"当日新开、审查链条最长、问题面最广"的条目作为热点：

- [#4394](https://github.com/nanocoai/nanoclaw/pull/4394) `fix(db)`: 删除会话时级联删除其 pending questions/approvals——直接对应同日 Bug #4393，作者与报 Bug 者同为 rigved，修复响应在数小时内完成。
- [#4392](https://github.com/nanocoai/nanoclaw/pull/4392) `fix(agent-runner)`: 修复 `send_message`/`send_file` 把 A→B 的转发回复错误打上另一会话消息戳的问题，涉及多智能体互发消息的会话归属正确性。
- [#4377](https://github.com/nanocoai/nanoclaw/pull/4377) `fix(mounts)`: 拒绝额外挂载驱动保护的路径（runner 代码、skills、plugins），防止组挂载静默导致 agent 无法启动。
- 审查跟进链：[#4390](https://github.com/nanocoai/nanoclaw/pull/4390)、[#4389](https://github.com/nanocoai/nanoclaw/pull/4389)、[#4391](https://github.com/nanocoai/nanoclaw/pull/4391)、[#4388](https://github.com/nanocoai/nanoclaw/pull/4388) 均为对 #4374/#4341/#4379/#4380 审查意见的同日跟进，反映核心维护者审查密度高、迭代快。

**诉求分析**：热点集中在"多智能体/多会话场景下的数据一致性"与"安装/安全边界"，而非新功能。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 高（安全） | [#2433](https://github.com/nanocoai/nanoclaw/issues/2433) OneCLI 安装器在裸金属 Linux 上自动探测 `docker0` 桥 IP，将管理员 API `:10254` 与 Postgres `:5432` 绑定到该网卡而非回环 | OPEN，已标 priority/high、PR: Fix | 摘要提示有对应修复，具体 PR 编号未给出 |
| 高（功能回归） | [#1216](https://github.com/nanocoai/nanoclaw/issues/1216) 陈旧的 Claude Code 会话 ID 导致 resume 永久失败且无自动恢复 | CLOSED（3 月创建，今日关闭） | 已关闭，修复细节未在数据中给出 |
| 中 | [#4393](https://github.com/nanocoai/nanoclaw/issues/4393) `deleteSession()` 裸 `DELETE FROM sessions`，遇未回答问题/审批时触发 `FOREIGN KEY constraint failed`（版本 306fd1b7，Linux） | OPEN | 是，[#4394](https://github.com/nanocoai/nanoclaw/pull/4394) |
| 中 | [#4386](https://github.com/nanocoai/nanoclaw/issues/4386) 回复先"Checking…"再干活、最后只输出 `<internal>` 备注，导致用户始终得不到答案且无提醒（dad1aadf，Linux） | OPEN | 未给出 |
| 中 | [#4385](https://github.com/nanocoai/nanoclaw/issues/4385) 正常回复因提到自身 scratchpad 标签 `<internal>` 被扣留，重试被静默丢弃（dad1aadf，Linux） | OPEN | 未给出 |
| 中 | [#4342](https://github.com/nanocoai/nanoclaw/issues/4342) Node 升级后 setup 无法拉取加固镜像——docker credential helper 仍指向旧 Node（影响 main、v2026.10.0、beta.1，macOS） | CLOSED | 已关闭；跟进见 [#4389](https://github.com/nanocoai/nanoclaw/pull/4389)（含 #4341 引入的回归） |

#4385 与 #4386 成对出现，指向同一机制：`<internal>` 标签处理逻辑同时造成"误扣正常回复"和"漏推无答案回复"，建议一并设计修复。

## 6. 功能请求与路线图信号

- **本地模型工具**：[#4352](https://github.com/nanocoai/nanoclaw/pull/4352) 新增 opt-in skill，为 Apple Silicon 上的 agent 提供 Rapid-MLX 本地文本工具（模型列表、文本对话、健康检查 MCP 工具，含传输层测试），沿用现有 per-group 配置。这是今日唯一明确的功能性新增，属社区贡献（raullenchai），尚未合并。
- **通道能力补齐**：WhatsApp 语音消息区分（#4378 已关闭）、Mattermost 超时测试（#4370 已关闭），延续多通道路线。
- **判断**：#4352 若通过审查，最可能进入下一个 2026.11.0 beta；`<internal>` 相关 issue 属缺陷而非新功能，但很可能需要在下一版前修复，否则影响日常使用体验。

## 7. 用户反馈摘要

- **长期使用者稳定性诉求**：#1216 作者自述"长期把 NanoClaw 当工具使用"，对会话过期后无法 resume 且无自恢复感到困扰——这类问题对持续使用场景伤害最大，该 issue 自 3 月挂到今日才关闭。
- **安装/本地模型体验**：裸金属 Linux 上 OneCLI 端口自动绑到 `docker0`（#2433）与 macOS 上 Node 升级后镜像拉取失败（#4342）显示**跨平台安装路径仍不平稳**，尤其在意外的网络绑定与环境升级上。
- **agent 回复可靠性**：egan 报告的两个 `<internal>` 问题（#4385、#4386）说明用户在真实通道中遇到"消息不发"与"发了不应发的/该发的没发"，且**无任何通知**，属于信任度层面的痛点。
- **满意度侧**：未在数据中提供正面反馈。

## 8. 待处理积压

- [#2433](https://github.com/nanocoai/nanoclaw/issues/2433)（2026-05-12 创建，已挂 6 个月）：**高优安全问题**，OneCLI 管理 API 与 Postgres 暴露在非回环网卡，虽仍有活跃更新与 2 条评论，但须尽快落地修复。
- [#4385](https://github.com/nanocoai/nanoclaw/issues/4385) / [#4386](https://github.com/nanocoai/nanoclaw/issues/4386)：今日新开但直接关联两条待合并外键/消息归属修复之外的核心回复逻辑，建议尽快 triage。
- 待合并 PR 积压 27 条，其中 [#4377](https://github.com/nanocoai/nanoclaw/pull/4377)（保护路径挂载，安全相关）、[#4392](https://github.com/nanocoai/nanoclaw/pull/4392)（消息归属）、[#4394](https://github.com/nanocoai/nanoclaw/pull/4394)（外键修复）应优先推进队列审查。
- 数据未提供更早的长期无响应条目，无法进一步列举；PR 评论数缺失（均为 `undefined`），建议补充 API 字段以便后续量化热点。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-11-15

## 1. 今日速览

过去 24 小时内，IronClaw 项目的活动量处于低位：仅 1 条 Issue（#2843）和 1 条 PR（#8171）有更新，没有新的版本发布，也没有任何 PR 被合并或关闭。今日这两项动态分别落在成本控制与模型定价两个方向上，都直接关系到“费用”这一主题——前者是架构级的预算体系提案，后者是对 `model_cost()` 价格数据的修正。总体来看，活跃度偏低，没有出现合并动作，但讨论中的两项议题对项目计费准确性都有实质影响。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日没有 PR 被合并或关闭，也没有 Issue 关闭，项目合并进度为零。

唯一处于开放状态的 PR #8171（`fix(common): price models from the llm-prices table`，作者 Mattbusel）提出将模型定价改为从 `llm-prices` 表中读取，替换 `model_cost()` 中已经过时的硬编码价格。该 PR 指出多处价格与提供方实际报价不符（例如 gpt-5.5、gpt-5.2-pro、Opus 4.5/4.6、Haiku 4.5 等型号的输入/输出单价均存在偏差）。该 PR 尚未合并，因此今天没有实际推进的代码进展。

链接：nearai/ironclaw PR #8171

## 4. 社区热点

- **Issue #2843** [OPEN]（标签：enhancement, risk: high, scope: agent, scope: db, scope: config）——作者 ilblackdragon，创建于 2026-04-22，于 2026-11-15 更新，1 条评论，0 👍。
  提案用**基于美元的成本预算体系**替换现有的迭代次数和实际耗时上限（50 次迭代、Python VM 5 分钟超时、500 次 worker 迭代），并在 **user → project → mission → thread** 这一新的显式层级上逐级传递、分配预算。该议题自 4 月创建，到 11 月仍在更新，跨度约 7 个月，是今日唯一有讨论的 Issue。
- **PR #8171** [OPEN]——今日创建并更新，评论数为 undefined（数据未提供），0 👍。

链接：nearai/ironclaw Issue #2843

**诉求分析**：两处动态都指向同一核心痛点——**计费口径的准确性与可控性**。PR #8171 解决“单价算错了”的准确性问题；Issue #2843 解决“总量难以按成本约束”的可控性问题。两者结合在一起，说明社区关注的重点正从以运行次数和时长计量的配额体系，转向以实际美元支出计量的成本治理；由于 #2843 被标注 `risk: high`，且涉及 agent、db、config 三个 scope，因此落地难度和影响面都较大。

## 5. Bug 与稳定性

按严重程度排列：

1. **模型价格数据错误（中高）**——PR #8171 明确指出，`model_cost()` 中多个模型的价格与提供方实际报价不符，存在显著偏差（例如 Opus 4.5/4.6 记为 $15/$75，实际为 $5/$25；gpt-5.2-pro 记为 $2/$8，实际为 $21/$168）。这会导致成本估算和预算判断失真，属于数据正确性缺陷，有可能引发计费或预算决策错误。**已有 fix PR：** #8171（待合并）。

今日数据中未报告崩溃、回归或运行时故障类问题。

链接：nearai/ironclaw PR #8171

## 6. 功能请求与路线图信号

- **基于美元的成本预算体系（Issue #2843）**：用逐级传递的 USD 预算替代迭代次数和实际耗时上限，覆盖 user → project → mission → thread 四层。该提案被标记为 `risk: high` 和 `enhancement`，涉及多个模块，从创建到今天持续约 7 个月仍在活跃更新，说明议题尚未定案。
- **纳入下一版本的可能性判断**：
  - PR #8171 是一次范围明确的价格表修正，逻辑聚焦单一函数，**较容易被优先合入**，而且它天然是 #2843 预算体系的前置条件（预算核算依赖准确单价）。
  - Issue #2843 体量大、风控等级高，更可能以分阶段方式推进，而不是整体一次性进入下一版本。
  - 以上判断都是基于今日数据中给出的标签、创建时间和更新时间的推断，不代表官方排期。

## 7. 用户反馈摘要

今日可用数据有限（Issue #2843 的 1 条评论内容未提供，PR #8171 的评论数缺失），以下只基于可见摘要提炼：

- **痛点一：配额计量方式与真实成本脱节。** 迭代次数、VM 超时、worker 迭代数等上限，都是以迭代次数或时长计量的粗略代理；用户实际关心的是美元花费，因此需要把预算按层级显式分配。
- **痛点二：成本数据不可信。** `model_cost()` 中多个模型的单价与提供方报价不符，用户在使用成本估算或预算能力时无法依赖这些数字。
- **使用场景**：跨 user、project、mission、thread 的多租户或多任务编排场景，需要逐级设置费用上限。
- 今日数据中没有体现“满意”或“不满意”的评论倾向，也没有具体的用户原话，因此不作进一步推断。

## 8. 待处理积压

- **Issue #2843** [OPEN]：创建于 2026-04-22，截至 2026-11-15 仍未关闭，仅 1 条评论、0 👍，标签含 `risk: high`。该议题跨越约 7 个月仍在更新，建议维护者明确其路线图位置或给出阶段性方案。
- **PR #8171** [OPEN]：2026-11-15 创建，当日无合并动作，评论数据缺失。作为一个针对性明确的价格修正，建议尽快评审，因为它同时影响成本核算的准确性。
- 今日数据中没有提供其他长期未响应的 Issue 或 PR 信息，因此不作额外列举。

链接：nearai/ironclaw Issue #2843 · nearai/ironclaw PR #8171

---

*说明：本报告仅基于所提供的 GitHub 数据生成；评论数缺失（undefined）、评论正文未提供等信息，均已按“数据未提供”处理，未作补充推断。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-11-15

## 1. 今日速览

今日 LobsterAI 活跃度偏低：过去 24 小时无 Issues 更新、无新版本发布，仅 1 条 PR 有更新（#2875，待合并）。当日唯一动态集中在该 PR 上，其功能为在 MCP 市场新增「Lynxce Omni AI」一键入口，并抽象出通用 MCP OAuth 声明机制。需注意该 PR 创建于 2026-10-15、至今已开放约一个月，且带有 `stale` 标签，属于长期待审状态。整体判断：项目今日处于低活跃维护期，无新增缺陷报告，健康度无恶化信号，但合入节奏偏慢。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，项目功能面未发生实际推进。

- 唯一增量：#2875 当日有更新但仍为 OPEN，未进入合并阶段。
  链接: netease-youdao/LobsterAI PR #2875

## 4. 社区热点

- **PR #2875**（`area: renderer, area: docs, area: main, area: openclaw, area: skills, stale`）— 作者 alison-xx，创建 2026-10-15，更新 2026-11-15，👍 0，评论数未提供。
  链接: netease-youdao/LobsterAI PR #2875
  内容：将 Lynxce Omni AI（灵策全能AI）作为一键入口加入 MCP 市场；同时允许本地 registry 条目以通用方式声明 MCP OAuth，使后续 OAuth 条目无需额外代码。
  依赖关系：摘要显示该 PR **Depends on #2874**（原文截断）。

诉求分析：该方向指向降低 MCP 服务的接入与鉴权门槛（一键安装 + 通用 OAuth 声明），属于生态扩展类改动，涉及 renderer/main/openclaw/skills 多个模块，审阅面较宽。今日无评论数据可佐证讨论热度，暂不构成实质社区热点。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告（Issues 更新 0 条），无对应 fix PR。稳定性方面无新增风险信号。

## 6. 功能请求与路线图信号

今日无用户侧功能请求（Issues 为 0）。唯一可参考的路线图信号来自 PR #2875：

- MCP 市场的一键接入能力扩展（新增第三方 AI 服务条目）。
- 通用化 MCP OAuth 声明机制，降低未来同类集成的开发成本。

是否纳入下一版本：取决于其依赖项 #2874 的落地情况与多模块审阅进度；当前无合并迹象，不宜判断为确定进入下一版本。

## 7. 用户反馈摘要

今日无 Issues 评论，无法提炼用户痛点、使用场景或满意度信息。本期该项无有效数据。

## 8. 待处理积压

- **PR #2875** — 已开放约一个月（2026-10-15 创建，2026-11-15 更新），带 `stale` 标签，跨 renderer/docs/main/openclaw/skills 五个模块，且依赖 #2874。建议维护者明确其阻塞原因（依赖未合、审阅人力不足或设计待定），给出合入或关闭的结论。
  链接: netease-youdao/LobsterAI PR #2875
- **依赖项 #2874** — 由 #2875 摘要提及但本地无详情，建议同步跟进其状态，避免依赖链长期挂起。
  链接: netease-youdao/LobsterAI PR #2874（编号来源：#2875 摘要，详情未提供）

---

*数据说明：本期 Issues 与 Releases 均为空，评论数、👍 数等指标部分缺失（PR #2875 评论数为 undefined），相关分析仅基于现有字段，未作推断补充。*

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

# CoPaw 项目日报 · 2026-11-15

> 说明：以下内容严格基于所给数据。数据中 Issue/PR 链接均指向 `agentscope-ai/QwenPaw`，但标题与安装包名称为 `QwenPaw`，两者可能为同一项目的名称差异，日报中保留原始表述。Issue 与 PR 的评论数在 PR 数据中为 `undefined`，不参与"讨论最活跃"排序。

---

## 1. 今日速览

过去 24 小时 CoPaw 仓库保持高频维护节奏：Issues 更新 16 条（新开/活跃 11、关闭 5），PR 更新 13 条，但**合并/关闭数为 0**，全部处于待合并状态，说明修复供给集中在评审队列而非落地端。今日新报问题高度集中在 **v2.3.0 升级回归**（飞书文件上传编码、控制台检查点入口丢失、子代理完成误触发桌面通知）以及**多用户/多智能体隔离**诉求。同时社区已为当日多数新 Bug 提交了对应 fix PR，响应链较短，但历史长尾（#8744、#8477、#8295、#6325 等）仍未消化。整体评估：**活跃度高、合并吞吐偏低，评审积压是当前主要健康度风险**。

---

## 2. 版本发布

今日无新版本发布（0 个）。近期版本背景：Issues 中反馈集中在 **2.3.0**（含 Docker 镜像 `agentscope/qwenpaw:v2.3.0`）与 **2.2.2 / 2.1.0**，`main` 分支版本号为 `2.3.1b1`（据 #8736 描述）。

---

## 3. 项目进展

今日**无合并或关闭的 PR**（已合并/关闭：0），项目代码主线未发生可见推进。5 条已关闭项均为 Issue（非 PR）：

- #8361 自动记忆搜索重复调用 `memory_search`（4 评论）
- #7534 飞书会话 queue consumer 卡死
- #6608 长时 shell 命令绕过超时阻塞会话
- #4963 Cron 支持直接脚本执行
- #7408 飞书通道配置被清空

上述关闭多为长期问题（创建于 2026-06 至 2026-09）的收尾，对稳定性有正向意义，但因无对应合并 PR 记录，**无法从数据判断具体落地方式**。

---

## 4. 社区热点

按 Issue 评论数与更新频率排序（PR 评论数缺失，不列）：

| 排名 | 条目 | 评论 | 诉求分析 |
|---|---|---|---|
| 1 | [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) 自动记忆搜索重复调用 | 4 | 多轮 agent 循环中缺少重复调用的去重/熔断策略，拦截后会话无法正常回复，属"保护机制反而阻断主流程"。 |
| 2 | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) 飞书 session 静默卡死 | 4 | 长驻 queue consumer 无健康检查与重启，单会话故障静默化。 |
| 3 | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) 长命令阻塞会话 | 4 | 缺少按通道的总超时与子进程孤儿回收。 |
| 4 | [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) Cron 脚本任务类型 | 4 | 定时任务能力边界不足，需绕过 LLM 直接执行脚本。 |
| 5 | [#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) 飞书通道配置被清空 | 4 | 配置写入非原子，导致通道停用与 cron 投递 `KeyError`。 |

值得注意：**#7534、#6608、#4963、#7408 均由同一用户 feng183043996 提交**，说明存在一位高强度深度用户持续暴露飞书通道与调度链路的系统性问题；其今日又新开 #8745（PawApp 移动端体验）与 #8744（压缩归档不可达），是当前最活跃的问题发现者。

---

## 5. Bug 与稳定性

按严重程度排列（是否已有 fix PR 依据数据中 PR 标题对应关系判断）：

**高严重度**

1. **#8746** [Bug] 后台启动期间提交的任务被静默吞掉，agent 构建完成但不调用 LLM、无错误日志 — 影响 Windows 11 / 2.3.0 / Console 与飞书，多模型复现。**无 fix PR**。属"静默失败"，排查成本最高。
2. **#7534** [CLOSED] 飞书私聊 session 静默卡死 — 已关闭，数据中无对应合并 PR。
3. **#6608** [CLOSED] 长时 shell 命令阻塞会话 1.5 小时、产生孤儿进程、无按通道总超时 — 已关闭。
4. **#8748** 飞书重连 supervisor 在 disconnect 清理抛错时永久退出 — **已有 fix PR [#8749](https://github.com/agentscope-ai/QwenPaw/pull/8749)**。

**中严重度（v2.3.0 升级回归）**

5. **#8752** 飞书上传非 ASCII 文件名被百分号编码（显示 `%E9%99%84%E4%BB%B6-…docx`），已确认 `main` 代码未修复 — **已有 fix PR [#8753](https://github.com/agentscope-ai/QwenPaw/pull/8753)**。
6. **#8736** 子代理完成误触发"回复完成"桌面通知，已对 `main`（2.3.1b1）验证未修 — **已有 fix PR [#8754](https://github.com/agentscope-ai/QwenPaw/pull/8754)**。
7. **#8755** 共享前端 + 两个 agent + 两个微信账号时，升级导致凭据重复、仅一个通道可运行 — **已有 fix PR [#8756](https://github.com/agentscope-ai/QwenPaw/pull/8756)**。
8. **#8747** v2.3.0 控制台侧边栏丢失"检查点"入口，导航 `parentId` 指向已移除的 `core.agent-group` — **无 fix PR**（前端路由配置回归）。
9. **#8745** PawApp 移动端三问题：session 隔离误导、发送报错、输入法遮挡 — **无 fix PR**。

**低严重度**

10. **#7408** [CLOSED] 飞书通道配置被意外清空 — 已关闭。
11. **#8361** [CLOSED] 重复 `memory_search` — 已关闭。

**总体判断**：Bug 修复 PR 供给良好（当日 4 个新 Bug 中 3 个已配套 PR），但**均未合并**；v2.3.0 引入的前端与通道层回归密度偏高，建议对 2.3.1 做一次集中的通道/控制台回归测试。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 配套 PR | 纳入下一版本的可能性评估 |
|---|---|---|---|
| Olostep 作为 `web_search` 提供方 | [#8740](https://github.com/agentscope-ai/QwenPaw/issues/8740) | [#8741](https://github.com/agentscope-ai/QwenPaw/pull/8741)（first-time-contributor，size/M） | 中等。需求与 PR 同日提交、实现范围小，但属新第三方依赖，需 vendor 评审。 |
| 多用户支持 | [#8751](https://github.com/agentscope-ai/QwenPaw/issues/8751) | 无 | 低（短期）。报告确认 2.3 为单用户设计（`QWENPAW_AUTH_ENABLED=true` 只能创建单一账号），属架构级改动。 |
| 意大利语 UI locale | [#8750](https://github.com/agentscope-ai/QwenPaw/issues/8750) | 无 | 中等偏低。当前仅支持 zh/en，但 i18n 扩展成本较低，且有企业 PoC 场景背书。 |
| Console 查看压缩归档历史轮次 | [#8744](https://github.com/agentscope-ai/QwenPaw/issues/8744) | 无 | 中等。属信息可达性缺陷（用户会理解为"历史丢失"），与已有前端 PR 主题相近。 |
| 内置工具文档与参数展示 | 无独立 Issue | [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325)（size/XL，7 月起） | 取决于评审。体量大、挂起时间长。 |

另有两条**能力增强型历史需求**今日关闭，可能已进入或影响路线图：#4963（Cron 直接执行脚本）、#8744 相关上下文压缩可见性。

---

## 7. 用户反馈摘要

**真实痛点**

- **静默失败最伤信任**：多位用户描述"消息被接收但从不处理"（#6608、#7534、#8746），且无 Traceback、无错误日志，用户无法自助诊断。
- **升级即回归**：至少 4 个今日新报问题明确限定在 2.3.0 升级后出现（#8747、#8752、#8748、#8736），且 #8736、#8752 均主动验证 `main` 仍未修复——用户在做维护者应做的验证工作，反映对修复进度的高度关注。
- **共享实例的多身份场景**：家庭共享场景（#8755，两个成员、两个 agent、两个微信号）与多用户诉求（#8751）共同指向"单机单用户"假设与真实使用方式之间的落差。
- **企业落地已开始**：意大利航空航天工程公司以企业内网 PoC 形式运行 QwenPaw，服务小规模意大利语用户群（#8750），并已从源码层面确认单用户限制（#8751）——说明评估深度较高。
- **移动端体验未打磨**：#8745 指出 session 隔离提示误导、发送报错、输入法遮挡输入框。

**满意面（可从关闭行为间接推断）**：5 条长期 Issue 今日关闭，含两条 2026-06/07 起的老问题，说明维护者仍在推进存量清理。

---

## 8. 待处理积压

**长期挂起、建议优先关注**

| 条目 | 创建 | 最后更新 | 状态 | 说明 |
|---|---|---|---|---|
| [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) feat(tools): Console 展示内置工具文档与参数（size/XL） | 2026-07-22 | 2026-11-15 | OPEN | 挂起近 4 个月，体量最大，无评审标签。 |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) fix(runtime): 阻止注入上下文持久化（size/L） | 2026-08-21 | 2026-11-15 | OPEN，Under Review，ready-for-human-review | 已进入人工评审但近 3 个月未落地，关联 #6360/#6358；该修复与 #8295 主题相邻，宜合并评审。 |
| [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) fix(channels): 在展示边界隐藏内部脚手架（size/M） | 2026-10-17 | 2026-11-15 | OPEN | `<system-info>` 等框架注入内容直接透出给用户。 |
| [#8477](https://github.com/agentscope-ai/QwenPaw/pull/8477) perf(skills): 池技能原地重命名安装（size/L） | 2026-10-28 | 2026-11-15 | OPEN，Under Review | 属 #8013 第 4 项，性能优化。 |
| [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) fix(channels): 部分更新保留 enabled 状态 | 2026-11-08 | 2026-11-15 | OPEN | **直接对应已关闭的 #7408（配置被清空导致通道停用）**，该 PR 未合并而 Issue 已关闭，建议核实关闭依据。 |
| [#8628](https://github.com/agentscope-ai/QwenPaw/pull/8628) feat(providers): 响应中增加模型回退元数据 | 2026-11-08 | 2026-11-15 | OPEN | 静默切换模型不可见，与今日 #8746"静默不调用 LLM"的可观测性问题同源。 |

**给维护者的三点建议（基于数据）**

1. **优先消化"Under Review"队列**（#7211、#8477），它们已通过初筛但停留在人工评审阶段最久。
2. **核实 #8630 与 #7408 的关闭关系**——若 Issue 因该 PR 关闭但 PR 仍未合并，关闭时机存在风险。
3. **集中评审当日 4 个 v2.3.0 回归 fix PR（#8749/#8753/#8754/#8756）**，它们的作者均为当日新报 Issue 的同一批用户，快速合并可显著改善升级体验与贡献者留存。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-11-15

## 1. 今日速览

项目今日活跃度低：过去 24 小时无新版本发布、无 PR 更新（待合并 0，已合并/关闭 0），仅 1 条 Issue 新开。唯一动态是 Issue #724，指出 `src/utils/cost.rs` 中 `default_pricing()` 的模型定价数据过时（`claude-opus-4-6` 仍为 $15/$75 每百万 token，而官方现价为 $5/$25）。该 Issue 尚无评论、无关联修复 PR，属未处理的准确性问题。整体判断：项目处于平静期，但存在一个影响成本核算可信度的待修缺陷。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，项目功能层面无推进。

## 4. 社区热点

今日唯一活跃条目为 [Issue #724](https://github.com/qhkm/zeptoclaw/issues/724)（作者 Mattbusel，评论 0，👍 0）。虽无讨论热度，但其诉求明确：内置定价表与实际计费不一致，会导致成本估算偏高（Opus 4.6 输入约 3 倍、输出约 3 倍偏差）。作者同时提及 0.1x 缓存读取与 1.25x 相关倍数，暗示缓存计价系数也可能需要同步核对。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | [Issue #724](https://github.com/qhkm/zeptoclaw/issues/724)：`default_pricing()` 中 `claude-opus-4-6` 价格为 $15/$75，与官方 $5/$25 不符；标题同时称 gpt-5.1 价格也已过时 | OPEN，无 fix PR |

不涉及崩溃或回归，属数据准确性问题；影响依赖该函数进行成本统计或预算控制的使用者。

## 6. 功能请求与路线图信号

今日无明确的功能请求。Issue #724 隐含一项维护性需求：建立定价数据的定期同步或可配置机制，避免硬编码价格随厂商调价而失效。因无相关 PR，暂无法判断是否纳入下一版本。

## 7. 用户反馈摘要

来自 Issue #724 的真实反馈：用户关注成本核算的准确性，并主动提供官方定价链接作为依据；反馈聚焦于默认定价表滞后，且提示缓存读写倍数（0.1x / 1.25x）需一并复核。除此之外，今日无其他评论可供提炼满意度或使用场景信息。

## 8. 待处理积压

今日数据仅覆盖单条新开 Issue，未提供长期未响应条目的信息，故无法据此列出积压清单。建议维护者优先处理 [Issue #724](https://github.com/qhkm/zeptoclaw/issues/724)：改动范围小（定价常量与缓存系数），但直接影响成本统计结果的可信度。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报（2026-11-15）

## 1. 今日速览

项目今日处于高活跃状态：过去 24 小时有 28 条 Issue 更新（27 条新开或活跃，1 条关闭）、50 条 PR 更新（49 条待合并，1 条合并或关闭），且无新版本发布。PR 队列以大型功能 PR 为主（多个 `size:XL`），合并吞吐极低（仅 1 条关闭），说明评审压力正在累积。Issue 侧焦点集中在 Anthropic provider 的计费与思考签名问题、工具上下文折叠（`keep_tool_context_turns`）回归，以及配置/安全类缺陷。整体健康度：开发投入旺盛，但“提交快、合并慢”的积压风险明显。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅 1 条 PR 被合并/关闭：

- **#4257 [CLOSED] feat(agent): add runtime Vim and Emacs keybindings** — 为交互式 agent loop 增加行编辑、持久命令历史与运行时可切换的 Vim/Emacs 键位（此前为原始 stdin 读取）。该 PR 创建于 2026-03-22，历时约 8 个月才关闭，属于长期挂起项的清理。
  链接: zeroclaw-labs/zeroclaw PR #4257

整体推进幅度有限：49 条待合并 PR 中包含 SSH 任务代理、Web 凭据管理、浏览器语音、Anthropic 修复等多个大改动，均尚未落地，项目向前迈进主要体现在问题定位与方案成形，而非功能交付。

## 4. 社区热点

按评论数排序的讨论焦点：

- **#12014 [OPEN][Bug] 自定义 OpenAI 兼容 provider 未设 `context_window` 时静默假定 32,000 并本地拒绝合法请求**（6 条评论，S1）— 用户对“静默默认值 + 本地拒绝”的组合不满，诉求是显式报错或可配置默认值。
  链接: zeroclaw-labs/zeroclaw Issue #12014
- **#9816 [OPEN][Bug] anthropic provider 花费恒为 $0.00，日/月预算上限永不触发**（6 条评论，p1）— 已标记 `status:in-progress`，属高风险计费缺陷，用户关注点在预算治理失效。
  链接: zeroclaw-labs/zeroclaw Issue #9816
- **#11332 [OPEN][Bug] skill review / skill creation 在 channel、webhook、gateway（Web UI）轮次中从不运行**（5 条评论，S2）— 学习闭环仅在 CLI/cron 生效，Web/渠道用户被排除在外。
  链接: zeroclaw-labs/zeroclaw Issue #11332
- **#12401 [OPEN][Bug] `keep_tool_context_turns` 导致 Claude Opus 5.5 在数次工具调用后出现 thinking-signature 400**（4 条评论，S1，自 v0.9.0 起）— 已有对应修复方向（见第 5 节）。
  链接: zeroclaw-labs/zeroclaw Issue #12401
- **#8541 [OPEN][Feature] Matrix 渠道会话支持按线程/会话范围的历史**（4 条评论，已进 parking-lot）— 自 2026-06-30 挂起，反映多渠道部署对会话隔离的刚需。
  链接: zeroclaw-labs/zeroclaw Issue #8541
- **#11138 [OPEN][Feature] 在 bounded delegation 中定义调用方工具级审批语义**（4 条评论）— 多智能体委派场景下的安全策略缺口。
  链接: zeroclaw-labs/zeroclaw Issue #11138

## 5. Bug 与稳定性

按严重程度排列（均为今日有更新的活跃 Issue）：

**S0 / 安全**
- **#12118 cmd.exe 方言下裸命令优先从工作区解析，工作区写入的 `git.bat` 会以白名单 `git` 身份执行**（allowlist 绕过）— 尚无 fix PR。
  链接: zeroclaw-labs/zeroclaw Issue #12118

**S1 / 工作流阻塞**
- **#12014 自定义 OpenAI 兼容 provider 静默假定 32,000 上下文窗口** — 无 fix PR。
  链接: zeroclaw-labs/zeroclaw Issue #12014
- **#12401 `keep_tool_context_turns` 触发 Anthropic thinking-signature 400（v0.9.0 回归）** — 已有 fix PR：#12437（剥离折叠后残留的 `reasoning_content`）与 #12479（发送 `drop_block` 以处理被编辑的历史），另有 #12478 修正 Anthropic 回退尝试的用量计费。
  链接: zeroclaw-labs/zeroclaw Issue #12401 ｜ PR #12437 ｜ PR #12479 ｜ PR #12478
- **#10901 Mattermost 自动发现的新 DM 丢失首条消息**（v0.8.5，p1）— 无 fix PR。
  链接: zeroclaw-labs/zeroclaw Issue #10901
- **#9816 anthropic provider 花费恒为 $0.00，预算上限失效**（p1，in-progress）— 无公开 fix PR。
  链接: zeroclaw-labs/zeroclaw Issue #9816

**S2 / 功能降级**
- **#10884 流式客户端硬编码 300s 空闲超时，`timeout_secs` 无法提高**（p1，in-progress）。
  链接: zeroclaw-labs/zeroclaw Issue #10884
- **#11332 Web/渠道轮次不执行 skill review / creation**。
  链接: zeroclaw-labs/zeroclaw Issue #11332
- **#12289 已禁用（`enabled = false`）的 agent 仍可通过 operator WebSocket 聊天与受限 RPC 执行轮次** — 无 fix PR。
  链接: zeroclaw-labs/zeroclaw Issue #12289
- **#12288 Web 仪表盘“Discard all”保留表单草稿，后续分区保存会持久化已丢弃的值**。
  链接: zeroclaw-labs/zeroclaw Issue #12288
- **#12330 `zerocode-config.toml` 解析/读取失败时丢弃已保存远端连接并回退到本地 daemon**。
  链接: zeroclaw-labs/zeroclaw Issue #12330
- **#7899 OpenAI STT provider 忽略基于环境变量的凭据**（p3）。
  链接: zeroclaw-labs/zeroclaw Issue #7899
- **#12390 shell 工具非零退出时返回空错误串，stderr 被吞没** — 无 fix PR。
  链接: zeroclaw-labs/zeroclaw Issue #12390

**S3 / 次要**
- **#12236 缓存 HTTP 客户端跨测试 runtime 共享，mock 请求偶发 “dispatch task is gone”**。
  链接: zeroclaw-labs/zeroclaw Issue #12236

**已有 fix PR 的其他修复**：#12135 向 Windows shell 子进程转发 `APPDATA`/`LOCALAPPDATA`；#12150 修正 macOS Seatbelt 家目录点文件正则的多余反斜杠（导致 `~/.cargo` 等规则从未命中）；#12475 固件参数解析加入整数溢出边界检查。

## 6. 功能请求与路线图信号

- **写时可写、只写的 WebUI 凭据管理与范围化密钥引用**（#12373）— 已有草稿 PR #12402 覆盖，并有后续 PR #12408（HTTP Basic 凭据与 API Token 独立 Secrets 页），落地概率高。
  链接: Issue #12373 ｜ PR #12408
- **向工具执行投递请求用户身份（模型上下文之外）**（#12441，2026-11-14 新开）— 多用户助手场景需求，尚无 PR。
  链接: Issue #12441
- **每个会话显示累计预估成本**（#12353）— 复用现有 cost ledger，但依赖 #9816 计费准确性问题先行修复。
  链接: Issue #12353
- **浏览器语音（听写/朗读）**：PR #12269（配对设备语音设置）与 #12459（OIDC 会话启用浏览器语音）构成一条明确的功能线。
  链接: PR #12269 ｜ PR #12459
- **SSH 传输层**：PR #11869（任务级 SSH 传输复用）与 #12438（原生 Rust task broker，去除 Python/tomli/cryptography 依赖）指向同一方向。
  链接: PR #11869 ｜ PR #12438
- **新 provider 接入**：PR #12264 新增 LLMTR（OpenAI 兼容 Chat Completions 网关）一等 provider 槽位。
  链接: PR #12264

## 7. 用户反馈摘要

- **对静默默认值的反感**：多个问题（#12014 硬编码 32,000 上下文、#10884 硬编码 300s 超时、#7899 忽略环境变量凭据）共同反映“配置写了不生效、默认值不可覆盖”是核心痛点。
- **Web/渠道用户被当作二等公民**：#11332 指出学习闭环只在 CLI/cron 生效；#12107 要求 socket 重连后补显仍在运行中的轮次的答案。
  链接: Issue #12107
- **成本可观测性受阻**：#9816 使 `zeroclaw status` 恒显 `Spent today: $0.0000`，直接影响按预算工作的用户；#12353 则是对同一需求的正面诉求。
- **安全边界受质疑**：#12118（cmd.exe allowlist 绕过）、#11138（委派中的工具审批）、#12289（禁用 agent 仍执行）显示用户在多用户/沙箱部署中对权限语义的严格审视。
- **升级回归敏感**：#12401 明确标注“自 v0.9.0 起”，用户对版本升级引入的会话不可恢复失败容忍度低。

## 8. 待处理积压

- **#8541 Matrix 会话历史范围（2026-06-30 创建，已 parking-lot，4 条评论）** — 近 4.5 个月无实质推进。
  链接: zeroclaw-labs/zeroclaw Issue #8541
- **#9816 anthropic 花费恒为 $0.00（2026-08-07 创建，p1，in-progress）** — 逾 3 个月，仍无可见 fix PR，影响预算治理。
  链接: zeroclaw-labs/zeroclaw Issue #9816
- **#7899 OpenAI STT 忽略环境变量凭据（2026-06-17 创建，p3）** — 近 5 个月未决。
  链接: zeroclaw-labs/zeroclaw Issue #7899
- **#10884 流式空闲超时不可调（2026-09-15 创建，p1，in-progress）** — 2 个月，p1 仍未闭环。
  链接: zeroclaw-labs/zeroclaw Issue #10884
- **PR #11869 任务级 SSH 传输复用（2026-10-19 创建，标记 `needs-author-action`、`risk:high`、`size:XL`）** — 与 #12438、#12269（同样 `needs-author-action`）均卡在作者响应，建议维护者明确评审结论或关闭以释放队列。
  链接: PR #11869 ｜ PR #12438 ｜ PR #12269
- **#12265 文档类 PR（2026-11-06 创建，`size:XS`）** — 小体量变更长期未合并，属可快速清理项。
  链接: PR #12265

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*