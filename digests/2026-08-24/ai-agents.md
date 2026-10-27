# OpenClaw 生态日报 2026-08-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-24 11:03 UTC

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

# OpenClaw 项目日报 — 2026-08-24

## 1. 今日速览

项目保持高活跃度：过去 24 小时共 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 328 条，待合并 PR 333 条，均处于高位运行。今日发布 v2026.8.1-beta.3，核心亮点为 GPT-5.6 全系推理支持、Control UI 首启流程优化及 Puppeteer 兼容的 CDP 中继。安全与稳定性是当前主线，多个"铂金级"（platinum hermit）问题集中在提示注入（#45740）、子进程泄漏（#97616）、插件静默失败（#78301）等方向，且均标注"需安全审查"，反映维护团队对安全面的持续加码。PR 侧则以 Web UI 体验修复（加载骨架屏、会话目录刷新风暴）和消息渠道可靠性（Discord 组件解析、网关消息投递）为主。

## 2. 版本发布

**v2026.8.1-beta.3** — [Releases 页面](https://github.com/openclaw/openclaw/releases)

要点：
- **GPT-5.6 全系模型支持**：Sol、Terra、Luna、Ultra 四个推理变体在 OpenClaw 与 Codex 运行时中可用。
- **Control UI 首启流程增强**：首次运行设置的已验证模型配置现在会继续进入 Custodian 及可选的渠道设置，减少用户手动步骤。
- **Puppeteer 兼容 CDP 中继**：支持与配对的 Chrome 会话通过 CDP 中继对接，扩展浏览器自动化场景。

⚠️ 迁移注意：暂无破坏性变更说明。但需留意 #124166（beta.2 遗留问题）——QQBot 插件在升级后可能被标记为不受信任并离线，建议升级后运行 `openclaw doctor --fix` 并检查插件信任状态。

## 3. 项目进展

今日关闭/合并的重要 PR：

- **#128689** feat(cli): 新增 `skills update --dry-run` 与 `--json` 输出（[PR](https://github.com/openclaw/openclaw/pull/128689)）— 为技能更新引入预检能力，服务自动化运维。
- **#126424** fix(gateway): 会话投递保持在 agent 绑定范围内（[PR](https://github.com/openclaw/openclaw/pull/126424)）— 跨 8 个渠道（Discord、iMessage、Matrix、Slack、Telegram、飞书等）的网关级修复，防止会话错发，标注"兼容性+消息投递+安全边界"三重合并风险，是今日合并中影响面最大的修复。
- **#123975** fix(scripts): tsgo 超时/信号清理进程树（[PR](https://github.com/openclaw/openclaw/pull/123975)）— 修复编译器进程残留导致的环境卡死。
- **#125471** fix(models): Control UI 中保留 Claude CLI OAuth（[PR](https://github.com/openclaw/openclaw/pull/125471)）— 修复网关重启后 OAuth 刷新所有权丢失，影响认证链路。
- **#128674** fix(deps): 修复 Claude SDK lockfile 快照（[PR](https://github.com/openclaw/openclaw/pull/128674)）。

整体上项目在持续收敛安全边界（网关消息投递、OAuth 凭证）、改善开发者体验（dry-run、进程清理），并保持高频的 UI 细节打磨。

## 4. 社区热点

- **#99551** Codex worker 失控加固冲刺（[已关闭](https://github.com/openclaw/openclaw/issues/99551)）— 17 条评论。由一次真实 incident（worker `019f...`）驱动的追踪 issue，含子任务 #99464 等。社区关注点在于：崩溃后如何不放任 worker、如何在不泄露私有转录的前提下做加固。
- **#45740** `gh-issues` 技能提示注入（[开启中](https://github.com/openclaw/openclaw/issues/45740)）— 16 条评论，铂金 Hermit 评级。原始 GitHub issue 正文直接注入子代理提示词，无消毒隔离。这是典型的供应链/技能安全风险，被标记为需要维护者+安全+产品三重复审，推测与 #99551 的加固冲刺联动。
- **#97616** 钩子/工具子进程泄漏致僵尸进程累积（[开启中](https://github.com/openclaw/openclaw/issues/97616)）— 9 条评论。被标记为回归（此前正常），影响运行时稳定性，暂无修复 PR。
- **#111857**（已关闭）与 **#45740**、**#78301**（开启中）构成今日三大"高评论+铂金"问题，集中在安全、稳定性、插件契约三大方向，反映了社区对"本地优先的 AI 助手在长跑中的健壮性"的高度敏感。

需求侧共性：用户关注的是 **长会话/长时运行场景下的稳定性**（僵尸进程、内存膨胀、上下文窗口错算），而非新功能，说明项目已进入需要"攒稳定性"的阶段。

## 5. Bug 与稳定性

按严重程度排列：

**P0 / 数据丢失**
- #107707 [开启中] Skill Workshop Apply 将提案文本原样覆写 SKILL.md（[Issue](https://github.com/openclaw/openclaw/issues/107707)）— 数据丢失风险，存在关联 PR 但已过期未更新，需尽快处理。

**P1 / 高危**
- #92415 [开启中] `/model` 切换后会话内模型快照不刷新（[Issue](https://github.com/openclaw/openclaw/issues/92415)）— 影响 contextWindow、reasoning 等 8 处读取，已 stale 但未修复。
- #106786 [开启中] gpt-5.6-* 在 ChatGPT-OAuth 路由上被宣传但实际静默回退（[Issue](https://github.com/openclaw/openclaw/issues/106786)）— 与今日 release 的 GPT-5.6 主推直接相关，需优先处理。
- #120600 [开启中] 沙箱化 Codex app-server 运行中 AGENTS.md 未送达（[Issue](https://github.com/openclaw/openclaw/issues/120600)）— 系统提示报告宣称已送达但实际未生效，有 PR 关联但需 live-repro。
- #124166 [开启中] QQBot beta.2 迁移后插件不受信任且离线（[Issue](https://github.com/openclaw/openclaw/issues/124166)）— 直接影响升级用户，有 source-repro。
- #127239 [开启中] deepseek-v4-flash 上下文窗口静默回退至 200k（[Issue](https://github.com/openclaw/openclaw/issues/127239)）— 硬编码默认值覆盖真实 1M 目录值，已有 PR。

**P2 / 回归**
- #90361 [开启中] memory_search 偶发 "index metadata is missing"（[Issue](https://github.com/openclaw/openclaw/issues/90361)）— 疑似索引/搜索竞态，用户已本地热修。
- #90787 [已关闭] memorySearch provider 升级后静默重置为 openai（[Issue](https://github.com/openclaw/openclaw/issues/90787)）— 今日已关闭，回归类修复完成。
- #125838 [开启中] QQBot 斜杠命令轻量回复未投递（[Issue](https://github.com/openclaw/openclaw/issues/125838)）— 无回复即无反馈，已列为 queueable-fix。

**修复信号**：sercada 的 #120600 有 PR 关联、isaias210 的 #127239 有 PR 关联，预计近期合入。

## 6. 功能请求与路线图信号

- **Config-free 原生 apply_patch 预变更守卫**（#116615，[Issue](https://github.com/openclaw/openclaw/issues/116615)）— 用户希望在文件写入前有同步拦截点用于策略控制。结合 #116489（安装策略警告确认）今日刚合并，说明"策略/守卫"是明确路线图方向，预计下一版本加入。
- **Webchat/Control UI 内联按钮支持**（#46656，[Issue](https://github.com/openclaw/openclaw/issues/46656)）— 消息按钮目前仅 Telegram 可用，Webchat 静默丢弃。考虑到今日有多个 Web UI 修复 PR（#128687、#128652、#128685），可能进入短期计划。
- **Post-update 钩子系统**（#79170，[Issue](https://github.com/openclaw/openclaw/issues/79170)）— 用户自定义更新后任务反复丢失，涉及产品决策，尚无明确 PR。
- **Slash 命令参数暂存**（#123356，[PR](https://github.com/openclaw/openclaw/pull/123356)）— 正在开发中的 composer UI 阶段功能，有意不关闭源 issue，保留 Gateway 端决策空间。

## 7. 用户反馈摘要

- **对静默失败的强烈不满**：#78301 中用户 debugging `@tencent-weixin/openclaw-weixin@2.4.1` 花费数小时，根本原因是插件加载器静默容忍错误契约；#106786 中模型被广告后静默回退，用户反馈"被欺骗感"；#127239 中上下文窗口静默缩水。**共性：用户要求"失败要大声"**，宁可报错也不要静默降级。
- **长会话运营者痛点**：#111857 用户报告低上下文父会话被反复压缩，浪费 token；#92415 中 `/model` 切换后分支摘要仍用旧模型参数——深度使用 CLI 的 autopilot 型用户对会话内存管理细节高度敏感。
- **QQBot 渠道多账号用户**（#125838、#124166）近期连续踩坑，集中在斜杠命令无回复、迁移后插件信任丢失，说明该渠道的升级路径文档与兼容性测试需要加强。
- **正向反馈**：#90361 用户虽遇 bug 但明确说明"本地已热修"，减少维护者复现压力，这类用户值得在社区中鼓励。

## 8. 待处理积压

以下为长期未响应或需维护者介入的重要问题，建议优先处理：

- **#45740**（开启 5+ 个月，16 评论）`gh-issues` 提示注入，铂金安全评级，需安全审查与产品决策 — 安全类问题积压过久，建议优先排期。
- **#78301**（开启 3+ 个月）插件加载器静默失败，需维护者+安全+产品三重复审。
- **#107707**（P0 数据丢失，stale 标记）Skill Workshop 覆写 SKILL.md，卡片已过期且关联 PR 状态不明。
- **#60841**（开启 4+ 个月）嵌入式 cron 中 toolsAllow 无法重新暴露核心工具，安全+产品决策悬而未决。
- **#60612**（开启 4+ 个月）doctor 警告指向 NVM node 但无法自动修复，用户体验细节问题。
- **#92415**（开启 2+ 个月）模型切换后快照不刷新，P1 但已 stale，需维护者确认修复路径。

**积压预警**：多个"需安全审查"的铂金级问题（#45740、#78301、#60841、#79170、#80699）长期无人认领，安全债有累积趋势，建议在下一冲刺中集中清理。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期**：2026-08-24  
**覆盖项目**：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**密集迭代期**：以 OpenClaw 为核心的头部项目单日处理 500+ Issue 与 PR，社区活跃度处于高位。安全与稳定性成为全生态第一优先级，提示注入（#45740）、SSRF 防护、静默降级等安全问题横跨多个项目被集中治理。用户侧的核心诉求已从"增加新功能"转向"长会话/长时运行的健壮性"——僵尸进程、内存泄漏、上下文窗口计算错误成为高频抱怨。生态正从"功能扩张期"进入"稳定性收敛期"，各项目普遍开始系统性治理技术债（依赖门控、测试补强、进程清理）。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 健康度评估 |
|------|-------------|-----------|---------|-----------|
| **OpenClaw** | 328 新开/活跃 | 333 待合并，500 更新 | ✅ v2026.8.1-beta.3 | ★★★★★ 高活跃，安全与稳定性为主线，积压需安全审查的铂金项 |
| **Hermes Agent** | 50（17 新开/33 关闭） | 50（29 待合并/21 关闭） | ❌ | ★★★★☆ 高活跃，修复效率高（33 条关闭），但 P1 问题长期未决 |
| **CoPaw** | 50 | 48 | ✅ v2.1.1-beta.2 | ★★★★☆ 高活跃，Console 会话稳定性修复推进中，多智能体体验是社区焦点 |
| **ZeroClaw** | 45 新开/活跃 | 46 待合并 | ❌ | ★★★★☆ 高活跃，测试补强密集，S0 安全漏洞未修复构成风险 |
| **NanoBot** | 1 新开 | 19（9 合并/10 待审） | ❌ | ★★★★☆ 密集迭代冲刺期，架构性重构（Provider 用量模型、配置编辑器）进行中 |
| **IronClaw** | 12 | 27（5 合并） | ❌ | ★★★☆☆ 中高活跃，沙箱持久化史诗推进中，22 个 PR 等待合并积压偏多 |
| **NanoClaw** | 3（2 新开/1 关闭） | 49（22 合并/27 待合并） | ❌（v2.3.0 发布 PR 已合入） | ★★★☆☆ 发布前维稳期，核心团队集中处理基础设施，外部 PR 等待时间延长 |
| **Moltis** | 0 新开 | 14（11 合并/3 待审） | ✅ 20260824.01 | ★★★☆☆ 健康迭代，安全加固+WhatsApp/浏览器沙箱/内存后端多线推进 |
| **PicoClaw** | 0 新开（2 stale 关闭） | 9（7 合并/2 开放） | ❌ | ★★★☆☆ 稳定迭代期，安全加固主动，无遗留 Bug |
| **LobsterAI** | 0 新开（3 stale 关闭） | 6（5 合并/1 待审） | ❌ | ★★☆☆☆ 中低活跃，长期 Issue 集中清理但未见修复方案 |
| **NullClaw** | 2 新开 | 1（Dependabot） | ❌ | ★★☆☆☆ 低活跃，配对码回归 Bug 待处理，依赖升级积压 70+ 天 |
| **ZeptoClaw** | 1 新开 | 0 | ❌ | ★★☆☆☆ 低活跃，仅 1 条 REPL UX 改进提案，无 PR 活动 |
| **TinyClaw** | — | — | — | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势**：OpenClaw 是生态的**绝对枢纽与参照系**——单日 500 条 Issue/PR 更新量是第二梯队（Hermes Agent、CoPaw、ZeroClaw 的 50 条）的 10 倍，社区规模与维护投入远超同类。在服务质量上，今日发布的 v2026.8.1-beta.3 率先支持 **GPT-5.6 全系四变体推理**，Claude CLI OAuth 保留（#125471）等认证链路修复显示其对**多模型/多渠道深度集成**的持续投入。8 渠道网关级消息投递修复（#126424）展示了其在跨平台一致性与安全边界上的高标准。

**技术路线差异**：OpenClaw 走"**全渠道+多模型运行时（OpenClaw/Codex）**"的横向平台路线，配合技能（skills）与插件生态形成扩展体系；相较之下 NanoBot 更聚焦 WebUI/TUI 与 Provider 架构统一，Hermes Agent 侧重桌面端体验与 cron 调度，IronClaw 深耕沙箱隔离与凭证代理。

**社区规模对比**：OpenClaw 的铂金级（platinum hermit）安全评级机制和"需安全审查"跨团队流转体系表明其具备成熟的社区治理架构；而同生态中 Hermes Agent 400+ 超时/挂起类 Issue 积压与 ZeroClaw S0 级安全漏洞 4 天未修复形成鲜明对比，反映出社区维护深度差距明显。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **静默失败/降级问题** | OpenClaw（#78301、#106786、#127239）、Hermes Agent（#93599）、NanoClaw（#3497）、ZeroClaw（#10068） | 用户一致要求"失败要大声"：模型被广告后静默回退、上下文窗口静默缩水、扣费异常未被感知、"安装成功但启动即挂"——宁可报错也不要静默降级 |
| **WebSocket/网关连接稳定性** | Hermes Agent（#93792 心跳协议）、CoPaw（#7231/#7011 会话串扰）、NanoClaw（#3302 OneCLI 网关地址） | 静默断连、会话身份串扰、跨渠道消息错发，普遍需要心跳机制与 socket 代数失效处理 |
| **长时运行健壮性** | OpenClaw（#97616 子进程泄漏、#111857 会话压缩浪费 token）、Hermes Agent（#58619 无界 serve 进程）、CoPaw（#5720 内存泄漏）、ZeroClaw（#10073 存储策略性能） | 僵尸进程累积、内存膨胀、上下文计算错误——用户关注的是长会话/长时运行场景的稳定性 |
| **Provider 用量与配置管理** | NanoBot（#5480/#5481 类型化用量契约）、ZeroClaw（#9812 provider 回退失效）、Hermes Agent（#93469 定价快照） | 多 Provider 的用量计费透明化、回退机制可靠性、配置持久化与同步 |
| **安全边界加固** | OpenClaw（#45740 提示注入）、ZeroClaw（#10165 delegate 绕过命令拦截）、Moltis（#1179 节点配对签名校验）、PicoClaw（#3322-3324 SSRF）、IronClaw（#7812/#7836 工具权限诚实性） | 提示注入防护、SSRF、命令拦截绕过、凭证管理——安全从"关注清单"变成"行动清单" |
| **多智能体协作与会话模型** | CoPaw（#6925/#3013/#2420 一个窗口协作、#3224 Agent Teams）、OpenClaw（#99551 Codex worker 加固） | 用户希望在同一会话内完成 Agent 间持续协作，而非频繁切换；Agent 崩溃后应可自愈而非放任 |
| **工具/技能生态的确定性与可配置性** | LobsterAI（#1192 固定默认配置）、CoPaw（#7224 Aider CLI 接入）、Moltis（#1238 共享渠道工具策略） | 从"大模型自由发挥"转向"固定默认值+可选覆盖"的确定性配置模式 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|----------------|
| **OpenClaw** | 全渠道消息平台 + 多模型运行时 + 技能/插件生态 | 广泛用户（个人到企业），追求跨平台一致性 | 多运行时（OpenClaw/Codex）、CDP 浏览器中继、铂金级安全评级体系 |
| **Hermes Agent** | 桌面端体验 + 网关连接稳定性 + cron 调度 | 重度桌面用户、macOS/Windows 跨平台 | JsonRpcGatewayClient 心跳协议、TUI 有界重连、CPython 3.14 兼容跟进 |
| **CoPaw（QwenPaw）** | 多智能体协作 + Creator 多媒体生成 + Console | Qwen 生态用户、内容创作者 | Anthropic/Gemini 协议接入、跨 UI 会话身份隔离、对话门控视频分发 |
| **ZeroClaw** | 安全优先 + 中间件生态兼容 + 测试覆盖 | 安全敏感型企业、Ops 团队 | 独立 delegate 风险配置、配对码策略统一加固、OpenAI Chat Completions 协议对接 |
| **NanoBot** | WebUI/TUI 双端体验 + Provider 架构统一 | 开发者/技术用户，追求统一配置 | 类型化 LLM 用量契约、共享配置编辑契约（#5497）、TLS 上下文复用 |
| **IronClaw** | 沙箱隔离 + 凭证代理 + 自动化前检 | 高级开发者、DevOps、自动化运维 | 持久化每用户沙箱（iron-proxy）、REST API + PTY WebSocket、Fail-closed 工具可见性 |
| **Moltis** | 安全加固 + 浏览器沙箱 + MCP 稳定性 | 多基础设施环境用户、团队协作 | Browserless v2/Obscura 无痕、Coder 工作区沙箱、节点配对签名校验 |
| **NanoClaw** | 发布维稳 + 依赖安全门控 + macOS 修复 | 轻量用户、快速部署场景 | pnpm minimumReleaseAge 门控、镜像重钉机制 |
| **PicoClaw** | 多渠道（微信/WhatsApp/QQ）+ 安全加固 | 中文互联网用户、渠道集成 | SSRF 防护、前缀缓存保留优化、Delta Chat 清理（待审） |
| **LobsterAI** | 桌面客户端交互打磨、插件安装体验 | 桌面用户（Windows/macOS） | Electron 架构、插件安装模态框改进、Unicode 文件名处理 |
| **NullClaw** | 自托管轻量部署（Zig 实现） | 自托管爱好者、最小化部署用户 | Zig 语言栈、Firecrawl 端点硬编码（待改进） |
| **ZeptoClaw** | CLI REPL 交互体验 | CLI 重度用户、终端优先 | 信号处理（Ctrl+C/Ctrl+D）安全退出、命令帮助表格 |

---

## 6. 社区热度与成熟度

```
快速迭代期（功能+稳定性并行推进）
├── OpenClaw ── 超高活跃（单日 500+ 更新），安全与功能并重
├── Hermes Agent ── 高活跃（各自 50 条），WebSocket 稳定链修复 + 架构级诉求
├── CoPaw ── 高活跃（各 50 条），多智能体体验集中打磨
├── ZeroClaw ── 高活跃（各 50 条），测试补强 + 安全 S0 修复中
├── NanoBot ── 密集迭代（19 条 PR），架构重构冲刺
└── IronClaw ── 中高活跃，沙箱持久化史诗驱动

质量巩固期（版本维稳、技术债清理）
├── NanoClaw ── 发布前维稳（v2.3.0 PR 合入），镜像 repin + 依赖门控
├── Moltis ── 健康迭代（11 PR 合并），安全+多模块稳定修复
└── PicoClaw ── 稳定迭代（7 PR 合并），安全加固 + stale 清理

低活跃/待观察（需关注社区参与度）
├── LobsterAI ── 中低活跃，长期 Issue 集中关闭但未见对应修复
├── NullClaw ── 低活跃，回归 Bug 无人响应，依赖升级积压 70+ 天
├── ZeptoClaw ── 低活跃，仅 1 条新提案
└── TinyClaw ── 无活动
```

**关键结论**：头部三大项目（OpenClaw、Hermes Agent、CoPaw）均已进入"安全性+稳定性"双主线驱动的质量巩固阶段；中腰部项目（NanoBot、IronClaw）在架构重构中寻求突破；尾部项目（NullClaw、ZeptoClaw）社区参与度不足，存在用户流失风险。

---

## 7. 值得关注的趋势信号

**1. "失败要大声"成为社区最强烈的诉求**  
OpenClaw（#78301/#106786/#127239）、NanoClaw（#3497）、ZeroClaw（#10068）中用户反复表达对静默降级/静默失败的不满。用户宁可报错也不要"看起来成功实际未执行"。**启示**：AI 智能体产品应将"失败可感知性"作为一等公民设计原则——错误码体系、诊断信息、状态同步缺一不可。

**2. 从"模型自由发挥"到"确定性优先"的配置哲学**  
LobsterAI 用户要求"固定默认值+可选覆盖"，IronClaw 要求"模型可见工具面与实际可执行能力一致"（#7836），OpenClaw 引入 `skills update --dry-run`。这说明用户对 LLM 指令跟随的可靠性信任度在下降，**可预测的确定性配置正在成为默认偏好**。

**3. 多智能体协作的会话模型亟待统一**  
CoPaw 的 #6925/#3013/#2420 与 OpenClaw 的 #99551 共同指向：跨 Agent 协作应在一个会话窗口内完成，Agent 崩溃后应自愈而非放任。多个项目的 Community 最热议题均围绕此展开，但尚无项目给出完整方案，**这是生态中最集中的架构级空缺**。

**4. 供应链安全从"门控"走向"事故驱动"**  
NanoClaw 因镜像标签比较逻辑失效导致新安装 setup 失败（PR #3496），随即启动 pnpm `minimumReleaseAge` 门控；Hermes Agent 修复 Windows 更新临时配置泄漏 19MB；Moltis 修复节点配对签名验证漏洞。依赖漂移、镜像损坏、临时文件泄漏等**供应链事故正在倒逼系统性安全治理**。

**5. 外部 CLI/工具集成成为差异化增量**  
CoPaw 用户询问将 Aider CLI 接入（#7224）、ZeroClaw 讨论 OpenAI Chat Completions 协议对接 Open WebUI/LobeChat（#8603）、ZeptoClaw 关注 REPL 交互规范。**开放协议兼容性与外部工具对接正在成为智能体平台的下一竞争维度**。

**6. 自托管体验是尚未充分满足的细分市场**  
NullClaw（Firecrawl 端点硬编码、配对码不可见）、LobsterAI（Windows 技能安装路径错误）、NanoClaw（macOS 更新器符号链接 Bug）暴露出自托管用户对**可配置性、可诊断性和平台兼容性**的明确诉求，但多数项目响应缓慢，值得认为这是尚未充分开发的差异化机会。

**7. 测试基建与工程质量成为头部项目竞争焦点**  
ZeroClaw 由 JordanTheJet 连续提交 6 个测试补强 PR（#10304–#10319），Hermes Agent 在 CI 中禁止 `test.only` 标记（#93145），CoPaw 加固 flaky 测试（#7178）。**测试覆盖率和 CI 可靠性正在成为生态头部项目分化的新标尺**。

---

*报告基于 2026-08-24 各项目公开 GitHub 数据自动生成，仅反映当日窗口内的社区动态。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-08-24）


## 1. 今日速览

NanoBot 项目今日活跃度处于**高位**。过去 24 小时内共有 19 条 PR 更新，其中 9 条已合并/关闭、10 条仍待评审，另有 1 条新 Issue 提交。PR 提交集中在 WebUI/TUI 稳定性修复、Provider 统一用量模型重构、以及配置编辑器新功能三大方向。核心维护者 **chengyongru** 贡献了绝大多数 PR，显示出对 WebUI/TUI 体验与 Provider 架构重构的集中投入。整体来看，项目正处于**密集迭代冲刺期**，Bug 修复（含 WebUI 消息排序、Ctrl+C 行为、TLS 上下文复用等）与架构性重构（Provider 用量契约、统一配置编辑）并行推进，代码审查吞吐量大，社区反馈相对平稳。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 **9 条 PR 被合并/关闭**，修复了一批重要的稳定性与回归问题：

| PR | 标题 | 类型 | 关键影响 |
|---|---|---|---|
| [#5503](https://github.com/HKUDS/nanobot/pull/5503) | fix(webui): preserve causal message order (NAN-29) | WebUI 修复 | 解决了延迟/丢失工具调用时推理、工具、回答消息乱序或丢失的问题，统一按 `turnSeq` 排序 |
| [#5502](https://github.com/HKUDS/nanobot/pull/5502) | fix(tui): preserve shell after Ctrl+C | TUI 修复 | 修复 Ctrl+C 后终端被提前销毁的回归 Bug，保留 `/exit`、Ctrl+D 等既定行为 |
| [#5501](https://github.com/HKUDS/nanobot/pull/5501) | fix(exec): disable command guard in full access | 安全修复 | 全权限模式下关闭命令护栏，受限模式下仍保留 deny/allow、SSRF、路径保护 |
| [#5500](https://github.com/HKUDS/nanobot/pull/5500) | fix(codex): reuse TLS contexts across requests | 性能修复 | 每次请求重建 TLS 上下文改为按实例缓存复用，性能提升并含并发回归测试 |
| [#5499](https://github.com/HKUDS/nanobot/pull/5499) | fix(tui): avoid saving empty sessions | TUI 修复 | 空会话不再落盘，废弃聊天不会在内存中累积 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(runtime): add user-controlled turn recovery | 新功能 | 支持 WebSocket 断线后用户主动「Continue / Dismiss」恢复，不会自动恢复执行 |

**判断**：架构性 PR（#5480 Provider 用量契约、#5481 统一用量后端、#5497 共享配置编辑契约）尚在审查中，一旦合并将为多 Provider 统一计费/用量监控与跨端配置同步奠定基础，建议重点跟进。


## 4. 社区热点

今日最受关注的是 **[#5350](https://github.com/HKUDS/nanobot/issues/5350) [OPEN] QwenCloud Provider 兼容提案**，此 Issue 创建于 2026-08-12，更新于 2026-08-24，有 2 条评论且今日仍保持活跃，是目前唯一活跃的 Issue。诉求核心：NanoBot 现已支持 DashScope 兼容路径，但 QwenCloud 是 Qwen 开发者目前的国际模型平台，作者希望新增一条**向后兼容的 QwenCloud provider 路径**，与现有 DashScope provider ID、API 密钥、端点和已保存配置并行存在。这反映了海外 Qwen 开发者对「国际平台接入」的实际刚需，建议维护者评估成本后将此纳入 roadmap。

## 5. Bug 与稳定性

今日修复的 Bug 按严重程度排列：

| 严重程度 | 问题描述 | 状态 |
|---|---|---|
| 🔴 高 | [#5496](https://github.com/HKUDS/nanobot/pull/5496) AgentRunner 的 wall-clock 超时保护只覆盖了 `_request_model()`；无工具、畸形调用恢复、空响应终结、达到最大迭代次数等场景直接调用 provider 且无超时保护 → 可能永久挂起 | ⏳ 有 PR，仍未合并 |
| 🟠 中 | [#5502](https://github.com/HKUDS/nanobot/pull/5502) TUI 中 Ctrl+C 导致 shell 被提前销毁（回归） | ✅ 已合并 |
| 🟠 中 | [#5503](https://github.com/HKUDS/nanobot/pull/5503) WebUI 工具 trace 延迟时消息丢失、乱序（回归） | ✅ 已合并 |
| 🟡 低 | [#5501](https://github.com/HKUDS/nanobot/pull/5501) 全权限模式下命令护栏误拦截合法命令 | ✅ 已合并 |
| 🟡 低 | [#5499](https://github.com/HKUDS/nanobot/pull/5499) TUI 空会话被保存导致存储膨胀 | ✅ 已合并 |

**风险提示**：[#5496](https://github.com/HKUDS/nanobot/pull/5496)（无工具请求无超时保护）仍待合并。该问题一旦触发将导致 Agent 任务永久卡死，直接影响生产环境可靠性，建议优先评审。

## 6. 功能请求与路线图信号

| 信号来源 | 功能/方向 | 可能纳入的版本窗口 |
|---|---|---|
| [#5350](https://github.com/HKUDS/nanobot/issues/5350)（Issue） | 新增 QwenCloud 国际平台 Provider 兼容路径 | 需评估工作量，暂无明显对应 PR |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) + [#5481](https://github.com/HKUDS/nanobot/pull/5481) | 类型化 LLM 用量契约 + 统一 Provider 用量后端（为统一计费/用量监控铺路） | 下一 minor 版本候选（叠栈 PR 链，待 #5480 先合入） |
| [#5497](https://github.com/HKUDS/nanobot/pull/5497) + [#5498](https://github.com/HKUDS/nanobot/pull/5498) | 全模式（WebUI/TUI/OAI）共享配置编辑器契约 + Agent TUI 统一 onboarding | 下一 minor 版本候选（叠栈 PR） |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | 原生 Linear Agent channel（OAuth + PKCE、SQLite 持久化队列） | 待评审，面向 Linear 用户的较大特性 |

**判断**：Provider 用量监控（#5480/#5481）与配置编辑统一（#5497/#5498）为两条叠栈链路，属于近期重点推进方向；Linear 频道为独立新特性。

## 7. 用户反馈摘要

- **Qwen 国际用户痛点（[#5350](https://github.com/HKUDS/nanobot/issues/5350)）**：DashScope 是国内平台，海外 Qwen 开发者需要适配 QwenCloud 的 provider ID、API 密钥与端点，希望与现有 DashScope 路径共存，互不冲突。核心诉求是「向后兼容、平滑迁移」，而非替换。
- 其余 PR/Issue 暂无实质性用户评论。

## 8. 待处理积压

| 项目 | 创建时间 | 备注 |
|---|---|---|
| [#5467](https://github.com/HKUDS/nanobot/pull/5467) fix(tui): preserve launch context in resume commands | 2026-08-21 | ⚠️ 已有 **conflict** 标签，需维护者处理冲突后合入 |
| [#5496](https://github.com/HKUDS/nanobot/pull/5496) fix(agent): time out no-tools model requests | 2026-08-23 | 高风险卡死问题修复，建议尽快评审合并 |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) fix(agent): release completed task groups | 2026-08-18 | 已等待 6 天，涉及 `_active_tasks` 会话清理，建议优先处理 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-24

## 今日速览

项目今日活跃度极高：过去 24 小时共处理 50 条 Issues（17 条新开/活跃，33 条已关闭）和 50 条 PR（29 条待合并，21 条已合并/关闭）。今日无新版本发布。核心关注点集中在三个方面：**内存工具的 new_text 参数传递缺陷**（PR #88685）、**WebSocket 静默断连的修复链**（PR #93792 整合了三个相关 PR）、以及**cron 调度器网关活性感知**（PR #93098/#93797）。值得注意的是一批由维护者（teknium1）直接"打捞"（salvage）社区贡献的修复被合并，表明项目维护者正在积极消化积压 PR。Bug 报告数量较多，但绝大多数已完成修复或有明确修复方案。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日合并/关闭的 PR 展示了几个明确的前进方向：

### 1. WebSocket 连接稳定性全面修复（重点）
- **PR #93792**（已关闭，P2）— `fix(gateway): silent socket drops heal themselves on every surface`：整合了 @100yenadmin 的三个 PR（#89958 gateway.ping 心跳协议、#90012 JsonRpcGatewayClient 心跳与 socket 代数失效、#89984 TUI 心跳与有界重连），使**桌面端和 TUI** 在面对 macOS 睡眠唤醒、网络切换导致的静默断连时，能够自动心跳检测并重建 socket。这是对长期悬而未决的"静默断连导致客户端永久挂起"问题的系统性修复。

### 2. Cron 调度器网关活性检测
- **PR #93098**（已关闭，P1）— `fix(cron): surface gateway liveness in cronjob tool results`：修复 #87033，cronjob 工具结果现在能告知模型网关是否在运行。
- **PR #93797**（开放中，P2）— `fix(cron): share gateway-liveness helper with CLI and surface it on cronjob create+list`：进一步将网关活性检测辅助函数与 CLI 共享，为 `cronjob(action="create")` 增加三态 `gateway_running` 字段并显式告警。

### 3. Windows 桌面更新体验修复
- **PR #93790**（已关闭，P3）— `fix(desktop-update): Windows splash opens in the default browser and stops leaking temp profiles`：整合了 @lorzl 的 PR #91425，Windows 更新进度窗口不再硬编码 Edge 浏览器，改用系统默认浏览器，并修复每次更新在 %TEMP% 泄漏约 19MB 临时浏览器配置的问题。

### 4. 基础设施加固
- **PR #93145**（已关闭，P3）— `test(desktop): forbid focused Playwright tests in CI`：CI 现在对提交的 `test.only` / `describe.only` 标记实行 fail-closed，防止部分测试套件"假绿"。

### 5. 待合并的关键 PR（值得关注）
- **PR #88685**（开放中，P2）— `fix(memory): forward new_text from the agent loop to memory_tool`：修复 agent 循环中调用 `memory(action="add", new_text=...)` 始终报错的问题——这是内存工具的核心功能缺陷。
- **PR #93808**（开放中，P3，needs-decision）— `feat(kanban): add fail-closed routing metadata lifecycle`：为看板功能引入原子路由元数据迁移与 fail-closed 解析器优先级，值得社区讨论。
- **PR #65182**（开放中，P1）— `fix(daemon_pool): support CPython 3.14 ThreadPoolExecutor internals`：CPython 3.14 上并发工具执行崩溃的问题，影响面较大但已开放超过一个月。

---

## 社区热点

今日评论数最多的 Issues 有两个值得关注：

### 1. Issue #85125 — 统一超时/挂起修复架构（16 条评论，Open）
- **类型**：feature/innovation，P3，needs-decision
- **链接**：https://github.com/NousResearch/hermes-agent/issues/85125
- **摘要**：针对积压的 **400+ 条** timeout/hang/stuck/wedge 相关 Issues，提出四阶段架构性修复方案。社区 triage #84047 已将 77 个标题匹配的运行时停滞问题归纳为 7 种机制。
- **诉求分析**：社区对"头痛医头"式的零散修复感到疲惫，希望从架构层面系统性消灭整个 bug 类别。此 Issue 被标记为 needs-decision，说明维护者尚未拍板。这是当前项目最重要的社区治理信号。

### 2. Issue #58619 — 桌面端重连时产生无界 serve 进程（12 条评论，Open）
- **类型**：bug，P2，sweeper:risk-session-state
- **链接**：https://github.com/NousResearch/hermes-agent/issues/58619
- **摘要**：`hermes_cli.main serve` 缺乏 `--replace` 标记（gateway run 已有），桌面端重连逻辑会启动新的 serve 进程但不终止旧进程；在持续模型 API 错误（403/网络问题）下会无界积累孤儿进程。
- **诉求分析**：这个 7 月 5 日创建的问题至今未关闭，虽然与今日合并的 WebSocket 修复链（#93792）有关联，但 serve 进程清理问题似乎仍未纳入修复范围。用户对资源泄漏的容忍度有限，建议维护者将此类问题与 #85125 的架构性修复统一考虑。

---

## Bug 与稳定性

今日 Bug 报告密集但处置效率高（33 条已关闭）。按严重程度排列：

### P1（严重）
| Issue | 标题 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#93650](https://github.com/NousResearch/hermes-agent/issues/93650) | SDK maybe_transform 可持 GIL 挂起数小时（codex_responses） | Closed | 待确认 |
| [#65182](https://github.com/NousResearch/hermes-agent/pull/65182) | CPython 3.14 ThreadPoolExecutor 崩溃（并发工具执行） | PR Open | PR #65182（开放 >1 个月） |

### P2（重要）
| Issue | 标题 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#58619](https://github.com/NousResearch/hermes-agent/issues/58619) | 桌面端重连产生无界 serve 进程 | Open（7月5日创建） | 无 |
| [#93529](https://github.com/NousResearch/hermes-agent/issues/93529) | MCP stdio 服务器在网关模式连接失败（非 fd stdin 崩溃） | Open，needs-repro | 无 |
| [#92392](https://github.com/NousResearch/hermes-agent/issues/93392) | 审批模块 mkfs 硬线模式在引用文辞上误报 | Closed | 已修复 |
| [#93469](https://github.com/NousResearch/hermes-agent/issues/93469) | Gemini 3.1 Pro 定价快照无法表达分级费率（>200k 少计） | Closed | 已修复 |
| [#93533](https://github.com/NousResearch/hermes-agent/issues/93533) | 配置迁移 _migrate_to_15 实际未持久化但报告成功 | Closed | 已修复 |
| [#93412](https://github.com/NousResearch/hermes-agent/issues/93412) | 本地上下文探测将 max_tokens 误读为上下文长度（1M → 393K） | Closed | 已修复 |
| [#93522](https://github.com/NousResearch/hermes-agent/issues/93522) | 多路复用配置下 4 个平台适配器绕过 profile 密钥作用域读取授权 | Closed | 已修复（security） |
| [#92701](https://github.com/NousResearch/hermes-agent/issues/92701) | Docker 后端：未清洗的 task_id 导致 exit 125 "too many colons" | Open，标记 duplicate | 无 |

### P3（轻微/体验）
- [#93462](https://github.com/NousResearch/hermes-agent/issues/93462) — 桌面端全局杀死 focus-visible ring（a11y 回归）→ Closed
- [#93479](https://github.com/NousResearch/hermes-agent/issues/93479) — 桌面端 workspace 面板在懒加载 syntax-diff chunk 时空白 → Closed
- [#93581](https://github.com/NousResearch/hermes-agent/issues/93581) — Windows 更新交接后控制台不返回 shell（此前 #90192 的回归）→ Closed
- [#83174](https://github.com/NousResearch/hermes-agent/issues/83174) — 桌面端更新自动重启后 session.resume 超时（8月10日创建，今日关闭）→ Closed

**健康度评估**：修复效率高，但 P1 的 CPython 3.14 兼容问题（#65182）和 P2 的多个 needs-repro 问题（#93529、#92701、#93599）仍未解决，且 #58619 已悬置近两个月，值得关注。

---

## 功能请求与路线图信号

### 已被 PR 承接的功能请求
- **cron 网关活性感知**：#93797 开放中，与此前 #93098 配合，功能正在逐步落地。
- **gateway.ping 心跳协议**：作为 TUI/桌面端连接稳定性的基础设施已合并。

### 可能纳入下一版本的方向
- **Issue #85125（统一超时/挂起修复）**：虽然目前是 P3 + needs-decision，但 400+ 同类 issue 的积压压力使其成为路线图的重要候选。若被接受，将是一次大型架构重构。
- **PR #93808（看板 fail-closed 路由元数据）**：新增功能模块，标记 needs-decision，社区可以参与讨论。

---

## 用户反馈摘要

从今日 Issues 评论中提炼的真实用户声音：

- **内存工具基础功能不可用**（PR #88685 评论）：`memory(action="add", new_text=...)` 始终报 "Content is required"——用户需要变通使用 `content` 字段才能工作。这是一个核心工具链路的缺陷，用户被迫使用非文档化参数。
- **QQ 群消息收不到**（#63761）：用户添加调试行后发现 dispatch 未被处理（`Unhandled dispatch: GROUP_MESSAGE_CREATE`）。该 Issue 自 7 月 13 日创建以来仅获得 4 条评论，仍处于开放状态。
- **"免费模型也在扣费"**（#93599）：用户称使用免费模型时积分持续被扣，即使退出应用仍在扣费，平台标记 needs-repro。这可能涉及计费系统的核心逻辑问题，需要维护者重点排查。
- **MCP 工具链配网关受阻**（#93529）：用户使用 `mcp-server-time` 和 `uvx` 在网关模式无法连接，指向 `mcp_stdio_watchdog.py` 在非 fd stdin 上崩溃。该问题影响 MCP 生态的可用性。
- **桌面端群聊中子 profile bot 不响应**（#93602）：多 profile 场景下会话级 RPC 被拒（"not in memory"），这可能是多用户/多 bot 场景的可用性瓶颈。
- **审批系统误报**（#93392）：硬线命令检测在引文或参数中误报 mkfs 命令，用户认为这"挡住了合法工作流"，已修复。

---

## 待处理积压

以下问题/PR 长期未获充分关注，提醒维护者关注：

| 项目 | 类型 | 创建时间 | 状态 | 备注 |
|------|------|----------|------|------|
| [#58619](https://github.com/NousResearch/hermes-agent/issues/58619) | Bug（serve 进程无界） | 2026-07-05 | Open | 两个月未关闭，12 条评论 |
| [#65182](https://github.com/NousResearch/hermes-agent/pull/65182) | PR（CPython 3.14 崩溃） | 2026-07-15 | Open，P1 | 影响并发工具执行，超 1 个月无进展 |
| [#63761](https://github.com/NousResearch/hermes-agent/issues/63761) | Bug（QQ 群消息不可达） | 2026-07-13 | Open，P2 | 平台集成不可用 |
| [#92701](https://github.com/NousResearch/hermes-agent/issues/92701) | Bug（Docker exit 125） | 2026-08-23 | Open，duplicate | 被标记重复但未见关联修复 |
| [#93599](https://github.com/NousResearch/hermes-agent/issues/93599) | Bug（免费模型扣费） | 2026-08-24 | Open，needs-repro | 涉及用户资金/积分，敏感度高，需尽快复现确认 |
| [#93529](https://github.com/NousResearch/hermes-agent/issues/93529) | Bug（MCP stdio 崩溃） | 2026-08-24 | Open，needs-repro | 影响 MCP 生态接入 |

---

*本日报基于 GitHub 公开数据生成，链接均为原始 Issue/PR 地址。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-24

## 1. 今日速览

PicoClaw 今日整体活跃度中等偏低：过去 24 小时无新版本发布、无新开 Issue，仅关闭 2 条 stale 标记的旧 Issue（#3302、#3325），但 PR 侧有 9 条更新，其中 7 条已合并或关闭、2 条仍处于开放状态。值得关注的是，今日合并的 PR 多集中在安全加固（SSRF 防护）、渠道兼容性（WhatsApp 版本过期修复）与性能优化（前缀缓存保留）方向，且均来自外部贡献者，说明社区维护通道运转正常。两个仍开放的 PR（#3344 新增手机配对功能、#3222 Delta Chat 重构）分别代表功能扩展与代码清理两条路线，目前尚未合并。整体判断：项目处于稳定迭代期，活跃度属正常水平，无突发问题。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 7 条 PR 合并或关闭，核心进展集中在以下三个方向：

**安全加固（SSRF 防护）** — 贡献者 SashaMIT 的三条 PR 均获合并，系统性修复了多渠道媒体下载的 SSRF 漏洞：
- [#3322](https://github.com/sipeed/picoclaw/pull/3322) fix(channels): 在 QQ / Telegram / Discord / LINE / Slack 入站附件下载中启用 `BlockPrivateTargets` 防护
- [#3323](https://github.com/sipeed/picoclaw/pull/3323) fix(wecom): 企业微信媒体下载改用 `CreateSafeHTTPClient`
- [#3324](https://github.com/sipeed/picoclaw/pull/3324) fix(weixin): 微信公众号媒体下载同步加固

**平台兼容性** — [#3320](https://github.com/sipeed/picoclaw/pull/3320) 由 grrowl 提交，升级 whatsmeow 依赖以解决 WhatsApp "client outdated (405)" 断连问题，对依赖 WhatsApp 通道的用户属直接修复。

**性能与稳定性** — [#3321](https://github.com/sipeed/picoclaw/pull/3321) 将动态上下文块（当前时间、运行时、会话信息）从系统消息前部移至历史记录之后，以保留前缀缓存能力，可显著降低长对话场景下的 token 消耗。

其他合并项包括：[#1929](https://github.com/sipeed/picoclaw/pull/1929) 修复 Web 配置保存时安全凭据校验顺序问题（Web 界面保存 `.security.yml` 中已有 token 的配置不再报错），以及 [#1551](https://github.com/sipeed/picoclaw/pull/1551) 合并了三个旧 PR 的修复内容。

## 4. 社区热点

今日最受关注的是 **[#3302](https://github.com/sipeed/picoclaw/issues/3302)（已关闭）— 为 MCP 服务器支持 OAuth 2.1**，共 4 条评论，是今日评论数最高的议题。该需求源于 #2546 的延续，用户 sunboy0523 希望 PicoClaw 的 MCP 集成能支持 OAuth 2.1 认证（当前标记为"Nice-to-Have"而非核心功能）。该 Issue 虽被 stale 自动关闭，但代表了企业级用户对标准化认证协议的需求，社区讨论热度可视为对该方向的潜在背书。另一条 Issue [#3325](https://github.com/sipeed/picoclaw/issues/3325)（Telegram 表格富文本渲染）有 2 条评论，关注 Telegram 通道的展示体验优化。

## 5. Bug 与稳定性

今日无新报告的 Bug 或崩溃。已关闭的 PR 中涉及两类稳定性修复：

- **中等级（已修复）**：WhatsApp 通道持续断连（"client outdated (405)"），已通过依赖升级（#3320）解决
- **中等级（已修复）**：Web 配置保存因凭据校验顺序错误而失败（#1929），已修复
- **低等级（已修复）**：微信/企业微信/QQ/Telegram 等渠道媒体下载存在 SSRF 风险（#3322、#3323、#3324），已加固

以上全部已有对应 fix PR 并已合并，当前无明显遗留 Bug。

## 6. 功能请求与路线图信号

- **OAuth 2.1 支持（#3302）**：虽被 stale 关闭，但该功能若落地将提升 MCP 企业部署的安全性，结合项目已有 PR 合并节奏，建议维护者将其纳入下一版本候选
- **Telegram 表格富文本渲染（#3325）**：同类需求被 stale 关闭，但属于 Telegram 用户体验的实用改进
- **Build Remote Agent 手机配对**[#3344](https://github.com/sipeed/picoclaw/pull/3344)（开放中）：新增 `gbr/1` 协议适配器，支持手机通过扫码或 8 位码配对桌面 Agent 进行远程查看，这是一个方向性较强的功能扩展，是否纳入需维护者评估协议成熟度
- **Delta Chat 代码清理**[#3222](https://github.com/sipeed/picoclaw/pull/3222)（开放中）：由 trufae 提交，删减约 200 行代码，移除遗留特性和过时测试，将密码邮箱配置迁移至 jsonrpc，属于维护性重构，合并后可降低长期维护成本

## 7. 用户反馈摘要

从今日关闭的 Issue 评论中可提炼：

- **Web 配置体验痛点**（来自 PR #1929）：用户在 Web 界面保存配置时遇到凭据校验误报——token 已正确存入 `.security.yml` 但仍提示"channels.pico.token is required"，说明配置操作的错误提示与实际状态脱节，影响使用信心
- **MCP 认证需求**（#3302）：用户明确希望 MCP 服务器接入支持 OAuth 2.1，反映出在身份认证标准化上的明确诉求，且用户自评为"Nice-to-Have"而非核心，态度理性
- **WhatsApp 集成故障**（来自 #3320）：用户遭遇"连接 5 秒后被丢弃且不重连"的持续故障，直接影响消息收发可靠性，属高频使用场景的严重体验问题

## 8. 待处理积压

> 以下为长期开放且近 30 天无实质更新的条目，需维护者关注。

**高优先级：**
- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222) refactor(deltachat)（开放 52 天）**：trufae 提交的 Delta Chat 重构，含大量删减与文档更新，长期未获评审，存在代码腐烂风险

**中优先级：**
- **[Issue #3302](https://github.com/sipeed/picoclaw/issues/3302) OAuth 2.1 支持（已关闭，可重新开启）**：需求明确且有社区讨论基础，若纳入路线图建议更新标注后重开，避免需求流失
- **[Issue #3325](https://github.com/sipeed/picoclaw/issues/3325) Telegram 表格富文本（已关闭）**：同类处理方式，建议评估合并价值

**低优先级：**
- **[PR #3344](https://github.com/sipeed/picoclaw/pull/3344) Build Remote Agent 配对（开放 1 天）**：尚属早期，但若涉及新协议需尽早进行设计评审，避免后续返工

---

**总体评估**：PicoClaw 当前项目健康度良好——安全漏洞主动修复、依赖及时升级、社区贡献渠道畅通。两个 stale 关闭的 Issue 均在 30 天无活跃后被自动清理，属正常生命周期管理。建议维护者重点跟进 #3222 的评审，避免长期积压导致贡献者流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-24

## 今日速览

NanoClaw 项目今日保持中等偏高的活跃度：过去 24 小时内有 3 条 Issue 更新（2 条新开、1 条关闭）和 49 条 PR 更新（27 条待合并、22 条已合并/关闭）。核心团队在今日完成了 **v2.3.0 发布 PR**（#3495）并提交了**紧急镜像重钉**修复（#3496），表明项目正处于版本发布前的维稳阶段。社区侧持续有外部贡献者提交修复（macOS 符号链接路径问题 #3498/#3499、OneCLI 网关绑定地址 #3302），整体协作健康度良好。需注意的是，49 条 PR 中 27 条仍处于待合并状态，积压比例偏高（55%），叠加开发分支的 stacked PR 模式，维护者合并压力较大。

- 版本状态：v2.3.0 发布 PR 已关闭，未检测到新的正式 Release
- PR 合并率：45%（22/49 已合并或关闭）
- 新 Issue 响应：2 条新开 Issue 当日即获得对应 fix PR（#3499 对应 #3498）

---

## 版本发布

今日无新版本（Release）发布。

**值得关注的发布前兆：**

- **[PR #3495 \(CLOSED\) \[core-team\] chore\(release\): v2.3\.0](https://nanocoai/nanoclaw/pr/3495)** — 由核心团队成员 gavrielc 提交的 v2.3.0 发布 PR 已关闭，版本号更新至 2.3.0，日期标注为 2026-08-24。该 PR 在 24 小时内完成合并，预示正式 Release 即将发布。
- **[PR #3496 \(CLOSED\) \[core-team\] versions: repin to hardened\-2026\-08\-23](https://nanocoai/nanoclaw/pr/3496)** — 作为"无法发布 Release 期间的临时方案"，将镜像重新钉到 hardened-2026-08-23 标签，以修复自 **2026-08-21 22:21** 起新安装部署 setup 失败的问题（根因：`container/pull.sh` 镜像标签比较逻辑失效，操作者拿到的是损坏的镜像）。该修复已合入，但正式修复需等待 v2.3.0 正式发布。

> **迁移提示**：v2.3.0 发布后，建议等待正式 Release 而非使用 repin 的临时标签。

---

## 项目进展

今日合并/关闭的 PR 主要集中在三条主线上：

### 1. 🚀 版本发布准备（核心团队）
- **[PR #3495](https://nanocoai/nanoclaw/pr/3495)** — v2.3.0 Release 发布 PR 合入，CHANGELOG 条目已整理完毕。
- **[PR #3496](https://nanocoai/nanoclaw/pr/3496)** — 镜像版本重新钉到 hardened-2026-08-23，修复 setup 流程的镜像拉取故障。

### 2. 🛡️ Telegram 消息处理修复（已关闭）
- **[PR #2338](https://nanocoai/nanoclaw/pr/2338) \(CLOSED\) fix\(telegram\): escape stray \* and _ instead of stripping** — 将遗留 Markdown 清理器从"删除奇数次 \* 和 \_" 改为"转义"处理，避免包含下划线的 URL 被截断。该 PR 与今日关闭的 **[Issue #2767](https://nanocoai/nanoclaw/issues/2767)** 相关联 —— 后者标记 @chat-adapter/telegram@4.30.0 已原生支持 MarkdownV2，使该 workaround 过时。
- **[PR #2474](https://nanocoai/nanoclaw/pr/2474) \(CLOSED\) feat\(setup\): AI\-coding\-CLI picker** — 在 setup 流程中新增 Claude Code / Codex 选择器框架，支持失败步骤的交接和无人值守工具任务委派。
- **[PR #2475](https://nanocoai/nanoclaw/pr/2475) \(CLOSED\) feat\(codex\): surface skills \+ persona to codex agents** — 让 Codex agent 与 Claude Code agent 获得相同的 persona 和技能目录。

### 3. 🔐 pnpm 依赖门控加固（核心团队，待合并）
- **[PR #3471](https://nanocoai/nanoclaw/pr/3471)** / **[PR #3470](https://nanocoai/nanoclaw/pr/3470)** — 在 `providers` 和 `channels` 分支上启用 pnpm `minimumReleaseAge` 门控，防止过新的依赖版本被拉入。主引擎侧通过 stacked PR 链（#3490 ← #3491 ← #3492）在 `main` 分支上推进。

> **总体判断**：项目正从"功能开发期"过渡到"发布维稳期"。Telegram 旧 workaround 的清理和镜像 repin 说明维护者在合并前会系统性处理技术债，这是一个健康信号。

---

## 社区热点

今日讨论热度最高、最能反映社区诉求的条目：

### 1. 🔥 macOS 更新器路径比较 Bug（新开当日即被修复）
- **[Issue #3498](https://nanocoai/nanoclaw/issues/3498) \(OPEN\)** — `update-nanoclaw` 控制器在 macOS 上静默退出（exit 0）但不执行更新。根因：macOS 的 `/var/folders` 是指向 `/private/var/folders` 的符号链接，而控制器使用 `path.resolve()` 而非 `realpath` 做路径比较。**用户明确表示这是真实环境中的阻碍性问题**。
- 社区响应速度极快：当日即有 **[PR #3499](https://nanocoai/nanoclaw/pr/3499)** 提交修复，将路径比较改为解析符号链接。
- 诉求分析：核心痛点是 **macOS 上自动化更新的可靠性**——用户在无提示的情况下得到"已成功"的错误信号。同类问题也影响 `hasSafeStatePaths` 的安全校验，说明该控制器在其他平台可能也存在隐患。

### 2. 📦 better\-sqlite3 13 在 macOS 上段错误
- **[Issue #3497](https://nanocoai/nanoclaw/issues/3497) \(OPEN\)** — `better-sqlite3@13.0.3` 在 macOS 上、Node.js 22.14.0 之前的版本会段错误。项目声明的最低 Node 版本是 `>=22`，但低于 22.14.0 的版本能通过全部检查却在运行时崩溃，属于"安装成功但启动即挂"的典型陷阱。
- 诉求分析：用户对**版本下限声明过于宽松**不满——"通过所有检查后安装仍然不可用"。建议项目将 Node 最低版本收紧至 22.14.0+，并补充 CI 中的 Node 22 早期版本测试。

### 3. 📡 OneCLI 默认网关地址修复
- **[PR #3302](https://nanocoai/nanoclaw/pr/3302) \(OPEN\)** — `setup/onecli.ts` 在安装时发现客户端访问的 `api-host`（如 `http://10.0.0.1:10254`，docker bridge 地址）并将其写入 `.env` 的 `ONECLI_*` 变量，导致默认绑定地址错误。该 PR 已开放一周，评论数较高，是当前待合并 PR 中最受关注的功能性修复之一。

---

## Bug 与稳定性

按严重程度排列：

### 🔴 高严重度

1. **better\-sqlite3@13.0.3 在 macOS 上段错误**
   - [Issue #3497](https://nanocoai/nanoclaw/issues/3497) ｜ 新开，无评论
   - 影响：任何使用 Node 22.14.0 之前版本（满足 `>=22` 声明）的 macOS 用户在打开数据库时崩溃，安装流程全部通过但运行时不可用。
   - **修复状态**：暂无对应 fix PR。建议：提升 Node 最低版本至 22.14.0+ 或降级 better-sqlite3。

2. **update\-nanoclaw 在 macOS 上静默失败**
   - [Issue #3498](https://nanocoai/nanoclaw/issues/3498) ｜ 新开
   - 影响：`update-nanoclaw` 控制器 exit code 为 0 但不执行更新，用户在 macOS 上无法获得更新且无任何提示。
   - **修复状态**：已有对应 PR **[#3499](https://nanocoai/nanoclaw/pr/3499)** 提交，待审。同日还有 **[PR #3500](https://nanocoai/nanoclaw/pr/3500)** 修复升级过程中硬编码的网关镜像标签。

### 🟡 中严重度

3. **新安装 setup 失败（镜像标签比较失效）**
   - [PR #3496](https://nanocoai/nanoclaw/pr/3496) ｜ 已修复
   - 影响：自 2026-08-21 22:21 起（commit ea1dadd8），新安装的 setup 流程失败，`container/pull.sh` 镜像标签比较逻辑失效。**该问题已通过 repin 临时修复**，正式修复需等 v2.3.0 发布。
   - **修复状态**：已合入临时修复，正式修复待发布。

### 🟢 低严重度

4. **Telegram 遗留 Markdown 清理器已过时**
   - [Issue #2767](https://nanocoai/nanoclaw/issues/2767) ｜ 已关闭
   - 影响：无功能性影响，但清理器代码已成为技术债 —— @chat-adapter/telegram@4.30.0 已原生支持 MarkdownV2 后不再需要该 workaround。关闭说明维护者已确认迁移完成。

> **稳定性总体评估**：今日报告的 2 个新问题均为平台特定（macOS）问题，且都有对应的修复 PR 在 24 小时内跟进，响应速度良好。受 repin 影响的安装问题已通过 PR #3496 解决，整体处于可控范围。

---

## 功能请求与路线图信号

### 1. 🆕 新功能信号：手机配对远端代理（第三方提交）
- **[PR #3494](https://nanocoai/nanoclaw/pr/3494) \(OPEN\) Add Build Remote Agent phone pairing \(gbr/1\)** — 新增"Build Remote Agent"配对设备适配器，允许手机旁观/查看桌面代理运行状态。使用 MIT 协议的 `gbr-agent` v0.6.0+，支持 QR 码和 8 位字符配对码。
- 路线图信号：这属于**通道/集成类新功能**，如果被接受将扩展 NanoClaw 的移动端使用场景。目前该 PR 缺少维护者回复，状态待定。

### 2. 🧩 长期开放的功能增强（skill/提供者生态）
- **[PR #2337](https://nanocoai/nanoclaw/pr/2337) \(OPEN\) feat\(providers\): surface Claude Code skill catalog to non\-Claude providers** — 将 Claude Code 的 skill 目录共享给非 Claude 提供者（Codex 等），使切换提供商成为配置变更而非内容重写。已在 PR #2475 中为 Codex 落地。
- **[PR #2361](https://nanocoai/nanoclaw/pr/2361) \(OPEN\) \[codex\] tighten codex provider contracts** — 更新 Codex 提供者的 JSON-RPC 合约，使 `CODEX_MODEL` 变为可选覆盖项。
- 路线图信号：这两条都指向**多提供者统一体验**的方向，与已合入的 #2474/#2475 形成完整闭环。从活跃度看（近 3 个月仍在更新），这是项目明确的长期方向。

### 3. 🛡️ 依赖安全门控（核心团队推动）
- **[PR #3470](https://nanocoai/nanoclaw/pr/3470)** / **[PR #3471](https://nanocoai/nanoclaw/pr/3471)** — 在 `channels` 和 `providers` 分支上启用 pnpm `minimumReleaseAge` 门控，防止过新依赖被引入。引擎侧通过 stacked PR 链（#3490 ← #3491 ← #3492）推进。
- 路线图信号：表明项目开始系统性治理**供应链安全**，结合 #3496 的镜像 repin 事件（依赖漂移导致 setup 失败），这一门控是对该事故的直接回应。

> **下一版本（v2.3.0）可能包含**：Telegram MarkdownV2 原生支持、PNPM minimumReleaseAge 门控（引擎侧）、镜像标签修复、以及 Codex skill 目录共享（若在发布窗口内合入）。

---

## 用户反馈摘要

### 来自 Issues 评论的真实用户声音

1. **macOS 用户体验痛点（Issue #3498）**
   > 用户在 Apple Silicon Mac 上运行 `update-nanoclaw`，控制器"exits 0 without running"——即返回成功状态码但实际什么都没做。用户需要准确知晓**更新是否真的执行了**。由于 `/var/folders` 和 `/private/var/folders` 的符号链接关系，`hasSafeStatePaths` 安全校验也失效，这让用户对**自动化更新的可信度产生怀疑**。

2. **Node 版本声明与实际兼容性的落差（Issue #3497）**
   > 用户按要求（`>=22`）安装了 Node 22 的早期版本，通过了所有环境检查，但在 `new Database()` 时直接段错误。用户的核心不满在于：**"通过了所有检查但仍然不可用"** —— 也就是说声明的最低版本要求与实际可运行版本之间存在隐性鸿沟。这是一个典型的依赖声明过宽的信任问题。

3. **主动贡献的社区成员（PR #3302、#3451、#3499、#3500）**
   > 多位非核心贡献者主动提交针对性修复：OneCLI 网关地址（#3302）、skill barrel import 归属（#3451）、macOS 符号链接路径（#3499）、升级中的镜像标签（#3500）。这说明社区对项目有**深度参与意愿**，且能快速定位到具体代码行级的问题。

4. **对"核心团队"标签 PR 的观察**
   > 今日 4 条标记为 `[core-team]` 的 PR（#3495、#3496、#3470、#3471）全部由核心成员提交，说明 v2.3.0 的发布窗口期核心团队正在集中处理基础设施和依赖安全问题。外部贡献者的 PR 平均等待时间可能因此延长。

---

## 待处理积压

### 需要维护者关注的重点积压

| 优先级 | 条目 | 等待时长 | 说明 |
|--------|------|----------|------|
| 🔴 高 | [PR #3302](https://nanocoai/nanoclaw/pr/3302) fix\(onecli\): 修复 OneCLI 网关默认绑定地址 | 7 天 | 功能性修复，影响 OneCLI 默认安装体验，评论数较多，仍未获得合入或明确反馈 |
| 🔴 高 | [PR #2361](https://nanocoai/nanoclaw/pr/2361) 收紧 Codex provider 合约 | 107 天 | 长期开放的功能性 PR，今天仍有更新说明作者在持续跟进，但维护者未回应 |
| 🟡 中 | [PR #2337](https://nanocoai/nanoclaw/pr/2337) 向非 Claude 提供者展示 skill 目录 | 109 天 | 与已合入的 #2475 高度相关，理论上应合并或给出明确关闭理由 |
| 🟡 中 | [Issue #3497](https://nanocoai/nanoclaw/issues/3497) better\-sqlite3 macOS 段错误 | 今日新开 | 缺少维护者回应和建议的临时 workaround（Node 升级或降级 better-sqlite3） |
| 🟢 低 | [PR #3494](https://nanocoai/nanoclaw/pr/3494) 手机配对远端代理（gbr/1） | 1 天 | 第三方功能 PR，未见维护者初审反馈 |

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-24

## 1. 今日速览

NullClaw 今日活跃度处于中等水平：24小时内产生 2 条新 Issue 和 1 条 PR 更新，均未涉及代码合并或版本发布。两条新 Issue 分别涉及自托管 Firecrawl 搜索端点的可配置性（#993）和配对码可见性回归（#992），后者指向一个早前 PR（#535）引入的用户体验退化，值得关注。唯一在更新的 PR 是 Dependabot 提交的 Alpine 基础镜像升级（#956），已等待两个多月，项目维护节奏偏慢。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，项目代码未向前推进。唯一活跃的 PR 为依赖升级：

- **[#956] [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**（[链接](https://github.com/nullclaw/nullclaw/pull/956)）— 由 dependabot[bot] 提交，将 Docker 镜像基础从 Alpine 3.23 升级至 3.24。该 PR 创建于 2026-06-15，已滞留超过两个月，建议维护者尽快审核此低风险安全/稳定性更新。

## 4. 社区热点

今日无高讨论量 Issue/PR，两条新 Issue 和一条旧 PR 均无评论。唯一有更新记录的 PR #956 是 Dependabot 自动提交的依赖升级，不代表社区活跃讨论。

## 5. Bug 与稳定性

今日报告 1 条 Bug，严重程度评估为**中**：

- **[#992] [bug] if the pairing code is hidden, and not written to disk, how can we see it?**（[链接](https://github.com/nullclaw/nullclaw/issues/992)）— 用户反馈在配置 Gateway API 时无法获取 6 位配对码。排查后发现提交 #535 停止了配对码的日志输出，而配置中若隐藏该码且不写入磁盘，用户将完全无法获取配对信息。这是一个功能性回归，直接影响自托管用户完成网关配置。**目前无对应的修复 PR**。建议尽快在文档中说明查看方式，或恢复默认输出行为。

## 6. 功能请求与路线图信号

- **[#993] [enhancement] feat: make Firecrawl search endpoint configurable for self-hosted instances**（[链接](https://github.com/nullclaw/nullclaw/issues/993)）— 请求将 `src/tools/web_search_providers/firecrawl.zig` 中硬编码的 API 端点（`https://api.firecrawl.dev/v1/search`）改为可配置，以支持自托管的 Firecrawl 实例。该需求与 #992 共同指向"自托管体验优化"这一主题，结合项目已有的 gateway 配置讨论，**此功能有较大概率被纳入下一版本**。实现成本低（将常量改为配置项），建议维护者优先考虑。

## 7. 用户反馈摘要

基于今日 Issues 内容：

- **痛点一：自托管配置不友好。** Issue #993 的作者需要将 Firecrawl 搜索指向自建实例，但代码中端点被硬编码，无法自定义。这反映了自托管用户对灵活配置的明确诉求。
- **痛点二：关键配置信息不可见。** Issue #992 的作者明确表示"困惑了好几天"，因配对码不再显示也无法从磁盘读取，导致无法完成 Gateway API 配置。用户在配置引导方面存在真实摩擦，需要更清晰的指引或默认行为优化。

## 8. 待处理积压

- **[#956] [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24**（[链接](https://github.com/nullclaw/nullclaw/pull/956)）— 自 2026-06-15 起已待合并超过 70 天，属于低风险依赖更新，积压时间过长可能引入安全风险或增加未来升级难度。
- **[#992] [bug] 配对码不可见问题**（[链接](https://github.com/nullclaw/nullclaw/issues/992)）— 今日新报的回归类 Bug，暂无修复 PR 或维护者响应，若持续无人处理可能影响自托管用户的 onboarding 体验。建议维护者尽快确认 #535 的改动意图并给出解决方案。

---

*数据来源：NullClaw GitHub 仓库（nullclaw/nullclaw），统计窗口为 2026-08-23 至 2026-08-24。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-24

## 1. 今日速览

IronClaw 项目今日保持高度活跃：24小时内产生 12 条 Issue 更新和 27 条 PR 更新，其中 5 个 PR 已合并或关闭。核心开发集中在沙箱持久化与凭证代理（iron-proxy）、CI 提速（四条并行轨道）、自动化创建前检（preflight）以及 WebUI 重构四条线上。当前有 22 个 PR 等待合并，积压偏多但多数为待评审状态。值得关注的是今日新开的 5 个产品反馈类 Issue（均来自 Slack 自动分流），以及新一轮的 Dogfooding & QA 周排期（#7843）启动。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 集中在两个方向：

**自动化前检落地** — PR #7743（`feat(automations): bound creation preflight`，[链接](https://github.com/nearai/ironclaw/pull/7743)）已关闭（合并）。该 PR 为自动化创建引入了有界的 `ready` / `needs_setup` / `needs_input` 协议，在持久化关键输入完备后立即创建，同时保留定时触发的动态能力发现。这直接回应了 Issue #7742 描述的问题——此前结构化自动化创建无法区分"编写未来运行"和"证明该运行可执行"。配套 PR #7847 进一步收尾：`trigger_create` 成功响应即终止创作流程，避免模型重试或删除已持久化的例程，并停止向模型暴露不必要的 `allowed_capability_ids`（[链接](https://github.com/nearai/ironclaw/pull/7847)）。

**代码库知识图谱刷新** — 机器人 PR #7814（`chore(agents): refresh codebase knowledge graph`，[链接](https://github.com/nearai/ironclaw/pull/7814)）已关闭，夜间工作流自动刷新了 codebase-memory 引导快照。

其余重要进展判定：CI 提速四条轨道（T1 #7821、T2 #7817、T2 探针 #7820、T3 #7819、T4 #7809）与沙箱凭证代理 PR #7810 仍在评审中，尚未合并，属于本周的核心推进方向。

## 4. 社区热点

今日讨论最活跃的 Issue：

- **#7732 — Epic: Persistent per-user sandbox with iron-proxy**（[链接](https://github.com/nearai/ironclaw/issues/7732)）：评论 9 条，项目当前最大史诗，讨论持续一周。核心诉求是推动 `builtin.shell` 从"按需创建/销毁容器"走向"持久化每用户沙箱"，配合 PR #7810 和 #7825 形成完整方案。

- **#7812 — 建议生成应尊重用户级工具权限**（[链接](https://github.com/nearai/ironclaw/issues/7812)）：评论 3 条，由用户反馈驱动。诉求是建议卡片生成时应连接用户已授权的只读工具而非仅靠内部搜索，使得建议基于用户的真实数据。对应 PR #7833 已开（见第 6 节）。

- **#7742 — 自动化创建前检**（[链接](https://github.com/nearai/ironclaw/issues/7742)）：评论 2 条，随 PR #7743 合并推进，本周应可关闭。

背景分析：社区关注点从功能堆叠转向"诚实执行"——模型可见的工具面应与其实际可执行能力一致（见 #7836 工具广告过滤），建议与自动化应基于用户真实数据和权限产生，而非隔离的默认空间。

## 5. Bug 与稳定性

按严重程度排列（今日新报 Bug 均来自产品反馈自动分流）：

| 严重程度 | Issue | 描述 | 修复状态 |
|---------|-------|------|---------|
| 中 | #7845（[链接](https://github.com/nearai/ironclaw/issues/7845)） | WebUI：激活建议任务后左侧面板不创建/渲染对应会话条目（线程本身运行正常） | 暂无 fix PR |
| 中 | #7842（[链接](https://github.com/nearai/ironclaw/issues/7842)） | 请求执行过程中出现通用"invalid result"错误，无有效诊断信息 | 暂无 fix PR |
| 中 | #7841（[链接](https://github.com/nearai/ironclaw/issues/7841)） | Telegram 配置流程在"admin must configure"处中断 | 暂无 fix PR |
| 低 | #7840（[链接](https://github.com/nearai/ironclaw/issues/7840)） | Slack 连接引导缺失，用户不知道如何连接 Slack | 暂无 fix PR |

**稳定性修复进展**：PR #7844（`fix(ci): restore main coverage and WebUI checks`，[链接](https://github.com/nearai/ironclaw/pull/7844)）修复了 WASM 测试夹具对枚举型 WIT 响应契约的兼容性，并恢复 `ironclaw_loop_host`、`ironclaw_sandbox` 和 `telegram` 的覆盖率基线，说明主干覆盖率曾出现回归。

## 6. 功能请求与路线图信号

**高置信度将纳入 v1.4.0 的功能：**

- **建议生成接入用户只读工具**（#7812 ↔ PR #7833，[Issue](https://github.com/nearai/ironclaw/issues/7812) | [PR](https://github.com/nearai/ironclaw/pull/7833)）：PR 作者 henrypark133 明确标注 "Closes #7812"，将建议生成的硬编码四能力白名单替换为用户已连接账户中"无需审批 + 只读"的工具集。这会带来实质体验提升。

- **工具广告按可用性过滤**（#7836，[链接](https://github.com/nearai/ironclaw/issues/7836)）：要求模型可见的工具面只展示"已安装 + 已激活 + 凭证就绪 + 已授权"的工具，避免模型调用注定失败的工具。这是"工具诚实性"主题下的第二项，与 #7812 同源。

- **沙箱出口认证原生化**（#7825，[链接](https://github.com/nearai/ironclaw/issues/7825)）：在 PR #7810 的 `gh` 凭证透传基础上，提出用原生 iron-proxy 配方 + 主机凭证代理替代 GitHub 专用例外逻辑，属于 #7732 史诗的后续演进。

**路线图信号：**
- 新一轮 **Dogfooding & QA** 周期（#7843，[链接](https://github.com/nearai/ironclaw/issues/7843)）已开启（08/24-08/30），上一轮 #7685 已关闭。
- Issue #7732 标记为 v1.4.0，说明持久化沙箱是下个里程碑的核心交付物。

## 7. 用户反馈摘要

今日 5 条产品反馈中 4 条为具体 Bug 或体验问题（#7845、#7842、#7841、#7840），1 条为 Slack 反馈分流汇总（#7832，[链接](https://github.com/nearai/ironclaw/issues/7832)）：

- **WebUI 会话管理**（#7845）：用户激活建议任务后，左侧会话列表不出现对应条目，需要手动刷新/导航才可见——影响"建议 → 激活 → 追踪"的闭环体验。
- **频道连接引导**（#7841、#7840）：Telegram 报错信息"admin must configure"对用户不可操作；Slack 则完全缺乏连接引导。两块都是第三方渠道接入的 onboarding 缺口。
- **错误诊断**（#7842）：用户遇到通用 "invalid result" 错误，无上下文信息，难以自助排查或向支持团队描述。

整体信号：用户在认可功能广度的同时，对**引导清晰度**和**错误可诊断性**有明确诉求。建议团队在 v1.4.0 周期内优先补齐连接配置向导和错误码体系。

## 8. 待处理积压

**[长期未合并/未响应的重要 PR]**

| PR | 持续天数 | 状态 | 备注 |
|----|---------|------|------|
| #6698（[链接](https://github.com/nearai/ironclaw/pull/6698)）— OpenWiki 文档自动刷新 | 28 天 | 待评审 | 机器人 PR，按变更管理策略需人工审批，但搁置过久会导致文档与代码脱节 |
| #7491（[链接](https://github.com/nearai/ironclaw/pull/7491)）— 编码工具统一为六工具契约 + 基准 | 13 天 | 待评审 | 影响面大（XL），涉及核心工具面重构，需要尽快安排评审以免与更多 PR 产生冲突 |

**[值得关注的未关闭 Issue]**

- **#7732**（[链接](https://github.com/nearai/ironclaw/issues/7732)）— 持久化沙箱史诗：已讨论一周（9 条评论），依赖 PR #7810 和 #7825 的合并进度，建议保持更新节奏。
- **#7742**（[链接](https://github.com/nearai/ironclaw/issues/7742)）— 自动化前检：虽 PR #7743 已合并，但 Issue 本身尚未关闭，建议维护者验证后尽快关闭以避免噪音。

---

*日报由 GitHub 数据自动聚合生成，时间为 2026-08-24。所有链接指向 nearai/ironclaw 仓库对应条目。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-24

**数据来源**：github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 项目今日整体活跃度较高，核心开发节奏稳定。过去24小时内共有 6 条 PR 更新，其中 5 条已合并/关闭（4 条为今日提交的功能修复类 PR），仅 1 条待合并；3 条 Issues 已全部关闭，均为历史遗留问题（stale 标记），无新开 Issue。今日无新版本发布，维护节奏处于正常水平。值得注意的转折信号是：超过四个月前的 3 条历史 Issue 与 1 条历史 PR 在今日被集中关闭，说明维护者正在清理积压队列，但长期未合入的 PR #1193（SQLite 性能优化）值得关注。

---

## 2. 版本发布

今日无新版本发布。最近一次已知版本信息为 2026.3.26（来自 Issue #1195 中的用户环境信息），后续版本发布动态待观察。

---

## 3. 项目进展

今日项目推进集中于**交互体验修复**与**插件/协作功能完善**，共合并 4 个功能性 PR：

| PR | 内容 | 影响范围 |
|---|---|---|
| **#2522** [修复] 文件分享与收藏交互优化 | 分享打包时保留 Unicode 文件名（仅替换不安全字符）；兼容历史版本文件名展示；优化收藏状态即时更新、筛选移除与失败回滚；避免收藏事件触发重复列表刷新；统一订阅与发布额度限制弹窗的样式与交互 | renderer、artifacts |
| **#2521** [修复] 协作消息选中态保留 | 只读文本选中后右键上下文菜单可用（仅保留 Copy）；防止助手选中文本工具栏收起时清除选中状态，确保 macOS Ctrl-click 可用 | renderer、main、cowork |
| **#2520** [修复] 插件安装弹窗可用性 | 插件安装模态框限制在视口内，内容与日志错误区独立滚动，长错误不遮挡操作按钮；新增关闭按钮与共享清理逻辑，加固 IPC 错误处理 | renderer |
| **#2523** [功能] 新增 IM 图标 | 为 IM 模块补充图标资源 | renderer、docs、main、cowork、im |

此外，**PR #1277**（electron 依赖组升级，含 electron 与 electron-builder 的 2 个更新）仍待合并，属于常规依赖维护。

整体来看，项目今日聚焦于**细节打磨与稳定性提升**，未涉及底层架构或重大功能变更，但 #2522 中对 Unicode 文件名和收藏交互的处理体现了对用户反馈的积极响应。

---

## 4. 社区热点

今日讨论活跃度较低的 Issue 均已关闭（评论 2-3 条 / 条）。最受关注的是以下两条（均为 stale 标记的历史 Issue，今日关闭）：

- **[#1187] 模型 API 上下文窗口大小设置建议** — 3 条评论，1 👍
  链接：https://github.com/netease-youdao/LobsterAI/issues/1187
  用户在使用 DeepSeek 模型时遇到 Context overflow 错误，核心诉求是为模型 API 选项增加上下文窗口大小和输出 token 的配置项。该 Issue 持续活跃 4 个月有余（2026-04-01 → 2026-08-24），今日被标记关闭。

- **[#1195] 自建 skill 安装后技能面板无显示（Bug）** — 3 条评论
  链接：https://github.com/netease-youdao/LobsterAI/issues/1195
  Windows 10 环境下自建 skill 被安装到 OpenClaw 目录但重启后技能面板不显示，必现问题。虽然标为 Bug，但关闭时未见关联的 fix PR。

**值得注意**：这 3 条 Issue 跨越 4 个多月后在今日被集中关闭（标记为 stale），但均未见附带明确解决说明。建议关注维护者是否在关闭前已有内部修复（如 PR #2520 中的插件安装改进可能部分相关）。

---

## 5. Bug 与稳定性

今日关闭的 Issues 中涉及 1 个明确 Bug：

| 严重程度 | Issue | 描述 | 是否有修复 PR |
|---|---|---|---|
| 中 | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 自建 skill 安装后重启，技能面板不显示（Windows 10，必现） | 未关联，但今日合入的 PR #2520（插件安装弹窗改进）可能部分相关 |

该 Bug 涉及技能安装路径错误（安装到 OpenClaw 目录而非 LobsterAI 自身），4 个多月未收到明确修复。今日合入的 PR #2520 虽未直接修复此问题，但改善了插件安装弹窗的可用性，使安装失败信息更可见。

无其他新报告 Bug、崩溃或回归问题。

---

## 6. 功能请求与路线图信号

今日关闭的 Issues 中包含 2 个功能请求：

| 功能请求 | 链接 | 诉求分析 | 路线图信号 |
|---|---|---|---|
| **模型上下文窗口/输出 token 配置** | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | 用户需要为不同模型 API 单独设置上下文窗口大小与输出 token 上限，以适配 DeepSeek 等模型的限制，避免 Context overflow | 未发现对应实现 PR，但该能力对多模型支持是常见刚需，建议维护者纳入规划 |
| **自定义工具默认配置（持久化覆盖）** | [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) | 用户希望直接写死工具默认配置（如 browser 使用无头模式），不依赖大模型指令跟随（因经常失败） | 未发现对应实现 PR。该需求反映了"固定配置 > 模型自由发挥"的可靠优先思路，与今日 #2521 中保留用户选择状态的思路一致 |

今日 4 个合并 PR 均以 bug 修复为主，未体现上述功能请求的推进信号。这两个功能请求已关闭，若后续无对应实现，建议维护者评估是否在路线图中补充。

---

## 7. 用户反馈摘要

从今日关闭的 Issues 评论中提炼的用户真实痛点：

- **模型上下文管理是实际痛点**（#1187）：用户在实际使用 DeepSeek 模型时频繁遭遇 Context overflow 错误，不仅影响效率，且错误提示中建议的 `/reset` 或换大上下文模型并不能从根本上解决问题——用户真正的诉求是能够自行配置适配模型能力的上下文参数。

- **指令跟随的不可靠性促使配置需求**（#1192）：用户使用浏览器工具时不想被弹窗打扰，尝试通过"记忆"让模型以无头模式启动，但大模型并不能稳定遵循该指令，"经常没法无头模式启动"。这说明在工具使用场景中，用户对确定性配置的偏好已经超过了对模型智能决策的信任，反映了真实使用场景中对"固定默认值+可选覆盖"模式的强烈需求。

- **技能生态的安装链路存在断裂**（#1195）：用户创建并安装 skill 后，重启应用技能面板无显示，且安装路径偏离预期。用户环境为 Windows 10，版本 2026.3.26，问题必现，说明技能安装链路在 Windows 平台存在稳定复现的缺陷，但长期未修复，可能影响用户对扩展生态的信心。

---

## 8. 待处理积压

以下长期项目需要维护者关注：

- **PR #1193 [stale] SQLite 写放大性能优化**（2026-04-01 创建，今日关闭但状态为 CLOSED 而非 MERGED）
  链接：https://github.com/netease-youdao/LobsterAI/pull/1193
  
  该 PR 针对 `sql.js` 每次行变更触发全量 `db.export()` + `fs.writeFileSync()` 的写放大问题，提出 debounce + 批量事务方案，是典型的性能缺陷修复。创建近 5 个月后被关闭而非合并，意味着修复方案可能被搁置或另走他途。鉴于其对应用整体响应性能的影响（频繁的整库写入），建议维护者在代码评审中重新评估此 PR 的价值，或在关闭说明中补充后续处理方案（如新 PR 替代）。

- **Issue #1187 / #1192**：两个有明确用户诉求的功能请求均已被标记关闭，但未发现对应实现。建议维护者在后续版本中考虑上下文窗口配置的持久化方案（该功能对多模型用户的日常体验影响较大），以及工具默认配置的用户自定义机制。

---

*数据统计截至 2026-08-24 24:00（UTC），数据源：LobsterAI GitHub 仓库 Issues/PRs/Releases 活动数据。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

```markdown
# Moltis 项目动态日报 — 2026-08-24

## 1. 今日速览

Moltis 项目今日活跃度较高，虽无新 Issue 提交，但 Pull Request 处理节奏密集，24 小时内共 14 条 PR 更新，其中 11 条已合并/关闭、3 条处于待合并状态。项目今日发布新版本 `20260824.01`。核心进展集中在安全加固（节点配对签名校验）、WhatsApp 文件持久化、浏览器沙箱（Browserless v2、Obscura stealth）、MCP 客户端生命周期修复及内存后端(Built-in)与本地嵌入稳定性修复。项目整体处于健康、快速迭代的维护周期。

## 2. 版本发布

**Release: 20260824.01**

- 详情：今日发布了新版本，版本号 `20260824.01`。源码页面未提供独立更新日志，版本内容应与今日合并的 11 条 PR 相关（见下节）。如需完整变更清单，建议维护者后续补充 Release Notes。

## 3. 项目进展

今日共有 11 个 PR 被合并/关闭，覆盖安全、消息平台、浏览器内核、MCP、技能与记忆模块，重点项目包括：

- **[安全加固] PR #1179 ([链接](https://github.com/moltis-org/moltis/pull/1237))**：修复网关节点配对签名验证漏洞，将 `node.pair.verify` 绑定至服务端签发的 pending request，阻止调用方自行提供 key/challenge，提升安全基线。
- **[WhatsApp 文件处理] PR #1228、#1233 ([链接](https://github.com/moltis-org/moltis/pull/1228))**：实现入站媒体文件的本地持久化(`local_path`)，并在流式传输中加入边界限制，补齐本地工具的输入能力并防止资源耗尽。
- **[浏览器沙箱] PR #1227、#1229 ([链接](https://github.com/moltis-org/moltis/pull/1227))**：默认启用 Obscura 无痕模式（含可配置开关），并新增 Browserless v2 容器协议支持（v1 仍为默认），扩展沙箱兼容性。
- **[计划任务] PR #1226 ([链接](https://github.com/moltis-org/moltis/pull/1226))**：修复定时任务输出回传问题，新增 `deliver_to_current_chat` 快捷路径，确保结果投递至原始会话。
- **[MCP 稳定性] PR #1231 ([链接](https://github.com/moltis-org/moltis/pull/1231))**：修复 MCP 服务重启后工具桥仍引用已关闭客户端的问题，避免活跃对话转向失效实例。
- **[记忆与嵌入] PR #1235、#1236 ([链接](https://github.com/moltis-org/moltis/pull/1235))**：统一内置记忆后端配置名称（`sqlite` → `builtin`），并限制本地 GGUF 嵌入编码器批次大小，防止 token 超限导致进程崩溃。
- **[技能系统] PR #1234 ([链接](https://github.com/moltis-org/moltis/pull/1234))**：修复预构建镜像中递归打包 sidecar 缺失的问题，确保 `quick_validate.py` 可读。

## 4. 社区热点

今日无新增 Issue，PR 评论区未见显著讨论。最受关注的为 3 个新开放的 PR（均无评论，但有实质内容）：

- **PR #1199 Coder 远程工作区沙箱支持 ([链接](https://github.com/moltis-org/moltis/pull/1199))**：创建于 8/15，今日更新。新增 Coder 沙箱后端，通过 REST API 与 PTY WebSocket 创建临时工作区并执行命令，支持模板、预设、TTL 等参数，是该类功能的核心扩展。
- **PR #1237 Apple 容器标识符长度限制 ([链接](https://github.com/moltis-org/moltis/pull/1237))**：修复 Apple Container 因标识符超过 64 字符导致的沙箱启动失败，采用 SHA-256 后缀生成稳定名称。
- **PR #1238 共享 Slack 渠道工具策略 ([链接](https://github.com/moltis-org/moltis/pull/1238))**：新增 `untrusted_audience`/`untrusted_tools` 配置，允许在共享渠道按策略开放工具权限，同时保持默认 fail-closed。

**诉求分析**：以上 PR 分别指向多云环境（Coder）、Apple 平台适配与团队协作安全，说明项目正覆盖更广的用户基础设施与合规场景。

## 5. Bug 与稳定性

今日修复的 Bug 均已有对应 fix PR 并已合并，按严重程度排列：

- **高危-进程崩溃**：PR #1236 ([链接](https://github.com/moltis-org/moltis/pull/1236)) — 本地 GGUF 内存嵌入中，超 512 token 的文本块或查询可导致整个进程终止。已通过绑定 `n_batch` 修复。
- **中危-任务丢失**：PR #1226 ([链接](https://github.com/moltis-org/moltis/pull/1226)) — 定时任务输出未投递至原始聊天渠道。
- **中危-会话中断**：PR #1231 ([链接](https://github.com/moltis-org/moltis/pull/1231)) — 重启 MCP 服务后，活动对话仍向已关闭客户端派发请求。
- **低危-资源与兼容**：PR #1228、#1233 ([链接](https://github.com/moltis-org/moltis/pull/1228))、PR #1227、#1229、PR #1237、PR #1234、PR #1235 — 分别修复 WhatsApp 入站文件元数据缺失、Obscura/Browserless 兼容、Apple 标识符超限、预构建 sidecar 缺失、内置记忆配置命名不一致。

## 6. 功能请求与路线图信号

当前无独立 Feature Request Issue，但新增 PR 明确了以下功能方向，很可能纳入下一版本：

- **Coder 远程工作区沙箱（PR #1199）**：面向多基础设施环境的沙箱扩展，可作为高级用户自定义执行环境的入口。
- **共享 Slack 渠道的策略化工具权限（PR #1238）**：对团队协作场景的显式支持，预示对安全策略配置的增强。
- **Apple 容器标识符稳定性（PR #1237）**：Apple 平台稳定性补丁，预期伴随 macOS/iOS 相关能力深化。

## 7. 用户反馈摘要

今日无新增 Issue，评论区亦无用户留言。来自 PR 提交者的反馈间接反映了以下痛点：

- 安全门槛：PR #1179 作者表示“想使用 Moltis，但需要先合入若干安全修复”，说明安全审计是潜在用户的核心前置条件。
- 稳定性依赖：PR #1231、#1234、#1236 均源于实际运行场景（服务重启、容器部署），表明部署环境下的稳定性是当前用户体验的关键变量。

## 8. 待处理积压

- **PR #1199 ([链接](https://github.com/moltis-org/moltis/pull/1199))**：Coder 沙箱支持，8/15 创建，已开放 9 天仍在等待合并。功能较为完整，建议维护者评估是否安排 review 以跟进其在路线图中的位置。
- **PR #1237 ([链接](https://github.com/moltis-org/moltis/pull/1237))**、**PR #1238 ([链接](https://github.com/moltis-org/moltis/pull/1238))**：今日新开，尚未获得 review，建议尽快分配 reviewer 以避免长期搁置。
- 当前无长期未响应的 Issue 积压。
```

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-24

## 1. 今日速览

CoPaw（QwenPaw）项目今日活跃度**高**：过去24小时新增/更新50条Issue、48条PR，并发布v2.1.1-beta.2。项目主要精力集中在**Console会话路由稳定性修复**（PR #7237 针对跨会话串扰问题）、**Workspace级Skill预加载策略**（Issue #7182 / PR #7183）、以及**Creator模块的规模化功能聚合**（PR #7167 已合并）。社区侧，多智能体协作体验（会话聚合、身份隔离、审批模式）仍是用户讨论最集中的方向，同时新出现了Dashboard在大规模Agent部署下的性能问题报告（#7242）。整体来看，项目正处于稳定迭代周期，Bug修复与功能增强并行推进。

## 2. 版本发布

### v2.1.1-beta.2

- **Console增强**：将工件（artifacts）添加到助手的回复卡片中（PR #7161）
- **视频修复**：在 OpenAI Responses API 上正确投递工具执行结果视频（PR #7061）
- **浏览器测试**：相关测试稳定性改进（PR #7061 配套）

破坏性变更：无明确标注。建议升级前关注 Console 会话行为的变化，特别是涉及视频消息与工具结果展示的场景。

## 3. 项目进展

今日合并/关闭的重要 PR 反映了项目在多个方向的推进：

| PR | 内容 | 状态 |
|---|---|---|
| [#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167) | **Creator 1.1.0 聚合更新**：主流图片/视频提供商、Anthropic/Gemini 协议、对话门控视频分发、扩展效果库、项目复制与重建、会话状态卡、2GB 上传、运行时可靠性加固 | ✅ 已合并 |
| [#7248](https://github.com/agentscope-ai/QwenPaw/pull/7248) | CI 改进：Docker 边界版本从包版本自动推导，移除了硬编码 | ✅ 已合并 |
| [#7245](https://github.com/agentscope-ai/QwenPaw/pull/7245) | Console 移除桌面模式提醒（chore） | ✅ 已合并 |
| [#7247](https://github.com/agentscope-ai/QwenPaw/pull/7247) | 修复 SiliconFlow 动态发现的 DeepSeek V4 模型误发媒体的问题（标注 DO NOT MERGE） | ✅ 已关闭 |
| [#7178](https://github.com/agentscope-ai/QwenPaw/pull/7178) | 加固 `test_sibling_sessions_run_without_serializing` 测试，消除 macOS runner 上的 flaky | ✅ 已合并 |

值得关注的是 **PR #7178 的合并直接对应 Issue #7121（macOS 上 flaky nightly 测试）的关闭**，测试层面的稳定性正在修复中。此外 [PR #7246](https://github.com/agentscope-ai/QwenPaw/pull/7246)（新增 39 个集成测试文件、238 个用例）与 [PR #7209](https://github.com/agentscope-ai/QwenPaw/pull/7209)（针对 Console 重新设计的 E2E 修复）仍待合并，测试基建的完善仍在进行中。

## 4. 社区热点

今日讨论最活跃的 Issue 及背后的用户诉求：

| Issue | 评论数 | 核心诉求 |
|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 11 | **多步骤任务执行中断**：用户反映 Agent 在输出类似 "Now 2.1, 3.1, 3.2. Let me do all three." 后无提示停止，必须说"继续"才恢复。这是对任务自主性的核心质疑 |
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | 9 | **Docker 2.0.1 插件/应用市场始终"维护中"**，无法使用 |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 8 | **多 UI 会话下 Console stop 请求误杀飞书活跃会话**：会话身份值交叉后出现了跨会话干扰 |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | 7 | **CoPaw Agent Teams 功能请求**：自然语言驱动的自进化多智能体协作团队，4月提出仍持续活跃 |
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 6 | **多步骤回复消息碎片化刷屏**：10 步任务弹出 10 条消息，体验差 |
| [#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) | 6 | **俄语用户询问如何将 Aider CLI 作为 Agent 接入 QwenPaw** |

**核心信号**：多智能体场景下的**会话管理与交互体验**（断点续跑、跨 Agent 消息传递、消息聚合）仍然是社区最关注的方向。同时 #7224 的出现表明外部 CLI 工具集成需求在增长。

## 5. Bug 与稳定性

按严重程度排列：

**严重（需优先处理）：**

1. **[#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) — Console 消息串会话并丢失**：两个会话并行生成时切换页面/会话后发送消息可能路由到错误的会话，导致消息丢失，影响数据一致性。已有关联 [fix PR #7237](https://github.com/agentscope-ai/QwenPaw/pull/7237)（冻结会话身份）待合并。
2. **[#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) — Console stop 请求取消活跃飞书会话**：多 UI 会话下会话身份交叉导致服务被错误取消。与 #7231 同根源，同样被 PR #7237 覆盖。
3. **[#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242) — Dashboard 加载耗时 6 分钟以上**：用户在 Docker 中启动 74 个 Agent 后，Dashboard 加载极慢。大规模部署场景下的性能回归信号。
4. **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — 多步骤任务无提示中断**：需用户手动说"继续"才恢复，影响任务自主性。当前无 fix PR。
5. **[#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) — 内存泄漏**：v1.1.12.post2 上运行约 64 分钟后内存从 150MB 涨至 580MB，疑似异步任务泄漏 + HTTP 会话未回收。当前无 fix PR。

**一般：**

6. **[#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) — daily_paper 任务 PDF 含代理字符（U+D800–U+DFFF）时崩溃**。
7. **[#6074](https://github.com/agentscope-ai/QwenPaw/issues/6074) — 切换 Agent 导致会话丢失**（已关闭，但需确认修复方案是否覆盖 #7231 的场景）。
8. **[#7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) — macOS flaky 测试**（已关闭，PR #7178 已修复）。

**积极信号**：会话串扰类问题已形成统一修复方案（PR #7237），测试 flakiness 问题也在持续治理中。

## 6. 功能请求与路线图信号

以下功能请求今日活跃度较高，结合已有 PR 可判断优先级：

| Issue | 请求内容 | 是否有对应 PR | 判断 |
|---|---|---|---|
| [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | Workspace 级 Skill 预加载策略 | [PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)（first-time contributor） | **很可能纳入下一版本**，设计参考 Claude Code 的 local/global 预加载先例 |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | 自然语言驱动的自进化多智能体协作团队（Agent Teams） | 无 | 长期路线图信号，4 月起持续活跃，社区需求强烈 |
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 多步骤回复消息聚合，避免碎片化刷屏 | 无 | 高度影响日常使用体验，值得纳入规划 |
| [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | 按频道独立配置模型 | 无 | 场景明确（钉钉/微信/控制台不同模型），但涉及架构调整 |
| [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | 智能体协作希望在一个会话窗口里完成 | 无 | 与 #3013、#2420 形成一组同方向诉求 |
| [#7179](https://github.com/agentscope-ai/QwenPaw/issues/7179) | 优化智能体切换的 UI，一次性展示更多 Agent | 无 | 轻量 UI 改进，实现成本低 |
| [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) | 会话开始前对已有文件的操作不应该触发审批 | 无 | 影响夜间无人值守场景的可用性 |
| [#7182](https://github.com/agentscope-ai/QwenPaw/pull/7182) | OAuth2 refresh_token 轮换持久化 | [PR #7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | 已有 first-time contributor 提交修复 |

**路线图信号**：多智能体协作的会话模型统一（一个窗口、通道复用、跨 Agent 消息可达）是社区最集中的诉求，项目组可能需要将其作为 2.2 或 3.0 的核心方向。Skills 预加载与 OAuth2 修复已有具体 PR，预计更快落地。

## 7. 用户反馈摘要

- **任务自主性问题突出**（#6921）："经常在输出类似'Now 2.1, 3.1, 3.2. Let me do all three.'之后无提示停止，需要我说'继续'才会继续任务。" 用户对大模型输出消息的观察表明，Agent 在陈述计划后暂停，缺乏主动执行能力。这是对 **Agent 自主性**的核心不满。
- **消息刷屏**（#5563）："一个 10 步的操作，Agent 依次弹出 10 条消息，聊天界面被刷屏。" 用户期望聚合中间步骤输出。
- **跨智能体协作体验割裂**（#6925、#3013、#2420）："智能体协作对话一次创建一次新的会话，还要切换智能体去看对话内容"；B 智能体完成后主动回复 A 会新建会话通道，A 在旧通道收不到结果。用户明确希望在 **同一会话内完成 Agent 间持续协作**。
- **夜间无人值守审批困境**（#7198）："如果夜里让 agent 干活儿，现在的'关闭模式'以外的审批模式都是一场灾难，你不可能整夜盯着弹出的审批。" 审批策略的精细化是真实用户痛点。
- **外部工具集成需求**（#7224）：俄语用户希望将 Aider CLI 接入 QwenPaw，说明开发者群体有将 QwenPaw 作为 Agent 编排中枢、对接外部 CLI 的诉求。
- **大规模部署性能**（#7242）：Docker 中 74 个 Agent 并发时 Dashboard 加载 6 分钟，多 Agent 场景下的控制平面性能需优化。

## 8. 待处理积压

以下 Issue 存在较久但仍未关闭，建议维护者关注：

| Issue | 创建时间 | 状态 | 说明 |
|---|---|---|---|
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | 2026-03-27 | OPEN | 跨智能体协作引导/触发/连贯性/身份混淆的体验反馈，已持续近 5 个月 |
| [#3013](https://github.com/agentscope-ai/QwenPaw/issues/3013) | 2026-04-07 | OPEN | 多智能体协同交互机制优化建议，与 #2420 同方向 |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | 2026-04-10 | OPEN | Agent Teams 功能请求，4 个月持续活跃，社区期待高 |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | 2026-07-02 | OPEN | 内存泄漏反馈，已包含详细根因分析（异步任务泄漏 + HTTP 会话不回收），尚未修复 |
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 2026-06-26 | OPEN | 多步骤回复消息聚合请求，影响日常体验 |
| [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | 2026-08-17 | OPEN | 按频道独立配置模型 |

长期未响应的 issues 集中在多智能体协作体验、消息聚合、内存性能三个方向。建议维护者在 roadmap 中明确对这些诉求的回应或排期。

---

*报告生成时间：2026-08-24 | 数据来源：github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-08-24

## 1. 今日速览

ZeptoClaw 今日项目活跃度处于低位：过去 24 小时内仅有 1 条新 Issue 提交，无 PR 活动，无新版本发布。项目维护节奏平稳但放缓，核心贡献集中在 CLI REPL 交互体验的改进提案上。该 Issue 于今日创建并持续开放，尚未引发社区讨论。整体项目健康度良好，无回归或崩溃报告，当前主要风险是社区参与度不足、评审积压可能为零。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

过去 24 小时内没有 PR 被合并或关闭。项目核心代码库在此窗口内无可见变更推进；唯一的实质性输入来自 [Issue #650](https://github.com/qhkm/zeptoclaw/issues/650)，其提案内容（REPL 退出行为硬化）尚未进入实现阶段，需待维护者评审后转换为具体代码改动。

## 4. 社区热点

今日唯一活跃的条目为 [Issue #650: feat(cli): REPL UX hardening - safe Ctrl+C/Ctrl+D, lone '/' command table](https://github.com/qhkm/zeptoclaw/issues/650)。虽然当前评论数为 0、点赞为 0，但其提案直指交互式命令行工具的两处核心痛点：

- **误触退出**：当前 `zeptoclaw agent` 在任何 Ctrl+C/Ctrl+D 信号下都会静默退出，导致正在进行的会话被意外销毁；
- **裸斜杠输入**：单独的 `/` 输入未被正确处理，落入通用错误分支而非命令帮助表。

该 Issue 反映了 CLI 重度用户对"防误操作"和"自解释式命令提示"的深层需求，值得维护者优先响应并邀请更多用户参与讨论验证。

## 5. Bug 与稳定性

今日无新 Bug、崩溃或回归问题报告。上述功能性缺陷位于 **Bug 与稳定性** 与 **功能请求** 的交界处——`Err(Interrupted | Eof) => Goodbye!` 的激进模式属于可用性 Bug，而是否将其修复（如改为"首次 Ctrl+C 提示确认、连续两次才退出"）需结合软件既有设计哲学进行决策。该问题严重程度为中低（数据丢失风险存在但局限于交互式会话），目前无关联 Fix PR。

## 6. 功能请求与路线图信号

[Issue #650](https://github.com/qhkm/zeptoclaw/issues/650) 是今日唯一的功能请求，含两个明确的 UX 需求：

1. 为 REPL 设计安全的 Ctrl+C/Ctrl+D 退出机制（防误触）；
2. 将孤立的 `/` 输入导向命令帮助表（快速上手引导）。

考虑到该提案以 `feat(cli)` 前缀标记且描述清晰、改动范围小（仅涉及 REPL 事件处理分支与输入分发逻辑），若获得维护者认可，有很大概率被纳入下一个 minor 版本（如 `v0.x.y` 的 CLI 体验批次）。同时，独立命令帮助表的实现可能为未来扩展 `/help`、`/quit` 等子命令铺路。

## 7. 用户反馈摘要

提交者 Suraware 在 [Issue #650](https://github.com/qhkm/zeptoclaw/issues/650) 中表达了以下来自真实使用场景的痛点：

- **场景**：长时间交互式会话中，用户可能误按 Ctrl+C 导致会话数据全部丢失——对依赖 `zeptoclaw agent` 做多轮复杂任务编排的用户而言代价高昂；
- **期待**：退出前应有确认机制或更温和的信号处理（如支持 `Ctrl+\` 或 Esc 作为替代退出路径）；
- **学习成本**：裸 `/` 输入被吞进错误分支而非给出可操作的命令清单，增加了新用户的试错成本。

整体反馈指向"CLI 应具备成熟的 REPL 交互规范"，态度积极（以 feature 而非 complaint 形式提出），表明用户愿意参与共建而非弃用。

## 8. 待处理积压

当前无超期未响应的 Issue 或 PR（近 24 小时数据中无历史遗留项）。唯一待响应条目为今日新开的 [Issue #650](https://github.com/qhkm/zeptoclaw/issues/650)，建议维护者在 48 小时内给出初步反馈（接受/拒绝/需补充信息），以保持社区贡献者的积极性。若项目有更早的长期开放 Issue 未体现在本窗口数据中，建议维护者额外检查 GitHub 的完整积压列表。

---

*数据窗口：2026-08-23 至 2026-08-24（UTC）*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-24

## 1. 今日速览

ZeroClaw 项目今日活跃度极高，24 小时内 Issues 与 PR 更新各达 50 条。新增/活跃 Issues 45 条、待合并 PR 46 条，表明社区提交与维护者响应均处于高位。当前无新版本发布，但 PR 流中密集出现由 JordanTheJet 提交的一组代码质量与测试覆盖 PR（#10304–#10319），说明项目正进行有组织的工程化收尾。安全与稳定性议题持续占据核心位置：高严重度安全问题 #10165 与安全相关 PR #10307/#10308 同时推进。整体项目健康度良好，但安全与稳定性仍是最热关注领域。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无已合并的 PR 数据可确认（过去 24 小时仅 4 个 PR 合并/关闭，未提供具体条目）。但从活跃 PR 可观察到以下重要推进方向：

- **测试体系补强**：JordanTheJet 连续提交 6 个测试类 PR，覆盖 first-run 设置 E2E（#10312）、路由 body 限制与 cron-run 超时（#10310）、Docker 镜像元数据断言（#10307 隐含）等此前无覆盖的领域。
- **配置安全模型深化**：#10308 为 `<install>/shared/` 读取增加按 agent 控制的 deny-by-default 标志，将共享工作区纳入 SecurityPolicy 只读层级。
- **架构清理**：#10309 删除孤立 SkillForge 引擎，#10311 集中化 tool-call 格式化指令（修复 loop_ 与 XML dispatcher 协议文本分歧）。
- **依赖维护**：#10291 批量更新 rust-all 组 48 个依赖包。

## 4. 社区热点

| 条目 | 类型 | 评论数 | 主题 |
|------|------|--------|------|
| [RFC: ZeroClaw Chat Completions profile (#8603)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC | 24 | 通过 OpenAI Chat Completions 协议暴露 agent 能力，接入 Open WebUI、LobeChat 等生态 |
| [[Bug]: independent delegate bypasses block_high_risk_commands (#10165)](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | Bug | 4 | S0 级安全漏洞：独立 delegate 绕过高风险命令拦截，`rm` 等命令可在风险配置下执行 |
| [[Bug]: Interactive agent session context 被锁定在 32K (#10068)](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Bug | 3 | 会话实际上下文上限与 max_context_tokens=131072 配置不符 |
| [Retire StoragePolicy::Rolling 并合并 row-count cap (#10073)](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | 增强 | 3 | 默认存储策略存在严重性能问题，建议架构调整 |

**社区诉求分析**：评论数最高的 RFC #8603 反映了用户对 OpenAI 生态互操作性的强烈期望——社区希望在标准 Chat Completions 协议下使用 ZeroClaw，以接入 Open WebUI 与 LobeChat 等主流前端。安全类 Issue #10165 获得高关注（S0 严重度）表明安全问题直接触达用户信任底线。整体来看，社区最关心中间件生态兼容性和安全边界完整性。

## 5. Bug 与稳定性

### 高严重度（S0/S1）

- **S0 安全漏洞**：[[Bug]: independent delegate bypasses `block_high_risk_commands` on its own risk profile (#10165)](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) — 高风险命令（如 `rm`）经独立 delegate 执行时可绕过其自身 `risk_profile` 中的命令拦截策略。**状态**：in-progress，暂无对应 fix PR。

### 中严重度（S2）

- [[Bug]: Provider fallback carries primary's model id (#9812)](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) — 回退 provider 被要求使用主 provider 的 model id，导致回退永不触发且被错误置入冷却。**状态**：stale，需复现。
- [[Bug]: Daemon diagnostics drop the underlying error chain (#10232)](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) — 守护进程组件返回 `anyhow` 错误时仅记录顶层消息，丢失错误上下文链。**状态**：in-progress。
- [[Bug]: daemon socket ownership error 未标识活跃所有者与恢复路径 (#10178)](https://github.com/zeroclaw-labs/zeroclaw/issues/10178) — 第二个 daemon 启动失败时无法得知谁持有 socket 及如何恢复。**状态**：in-progress。
- [[Bug]: ZeroCode 在 daemon 退出后显示 stale Connected 状态 (#10238)](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) — TUI 界面的连接状态指示与实际断开不同步。

### 已修复/关闭（今日）

- [Close: 17 个 telegram listen_* 测试断言墙钟超时 (#10251)](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) — 并行运行时的不稳定测试已关闭。
- [Closed: Concurrent models refresh 丢失缓存条目 (#9590)](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) — 并发刷新竞态问题已关闭。
- [Closed: Exact proxy selectors 拒绝 transcription 服务 (#10106)](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) — 代理选择器过度匹配问题已关闭。
- [Closed: Custom provider 5xx 错误日志重复转义 (#10224)](https://github.com/zeroclaw-labs/zeroclaw/issues/10224) — 已关闭。
- [Closed: Reasoning fallback classifier 误匹配 (#10190)](https://github.com/zeroclaw-labs/zeroclaw/issues/10190) — 已关闭。

## 6. 功能请求与路线图信号

- **OpenAI Chat Completions 协议支持（#8603）**：评论数最高（24 条），RFC 状态已标记为 accepted，是本周最明确的路线图信号。该协议将打开 Open WebUI / LobeChat 等庞大用户生态，建议维护者关注。
- **Google TTS API key 标记为敏感头（#10175）**：安全加强类改进，`x-goog-api-key` 需在日志中脱敏。
- **Alpine 非 root 镜像元数据 CI 强制（#10173）**：要求 `Dockerfile.alpine` 构建后必须验证运行用户/组为 `65534:65534`。
- **插件安装流程可恢复性（#10162）**：`plugin install` 需将包持久化与配置 seeding 合并为单一可重试操作。

**可能纳入下一版本**：从活跃 PR 看，#10307（配对码策略统一加固）、#10308（shared workspace 按 agent 门控）、#10319（zerorelay 浏览器注册前端）已完成实现并提交，正在等待合并，大概率进入下个发布。

## 7. 用户反馈摘要

- **上下文长度限制困扰用户**：#10068 中用户明确报告配置 131072 token 但实际被锁定在 32K，且观察到 `ctx: 15,538 / 32,000` 即触发压缩，这直接影响长会话场景的生产使用。
- **配置回退机制失效导致信任度下降**：#9812 中用户 Groq → Gemini 的回退配置完全失效且被错误置入冷却，用户对 provider 回退机制的可靠性产生质疑。
- **插件安装不可恢复令人挫败**：#10162 中插件安装后 config-entry seeding 失败无法重试，用户需手动清理才能再次安装。
- **安全机制被静默绕过**：#10165 中独立 delegate 执行 `rm` 未被拦截，表明用户对 `block_high_risk_commands` 的信任被打破，且该漏洞已存在数日未获修复。

## 8. 待处理积压

| 条目 | 类型 | 等待时长 | 状态 | 建议 |
|------|------|----------|------|------|
| [RFC: ZeroClaw Chat Completions profile (#8603)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC | 53 天 | accepted | 评论 24 条已具备共识基础，建议尽快进入实现排期 |
| [Provider fallback carries primary's model id (#9812)](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) | Bug | 17 天 | stale/需复现 | S2 严重度已标记 stale，建议优先复现并修复 |
| [feat(mcp): materialize resource blob with aggregate budget preflight (#9196)](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) | PR | 35 天 | needs-author-action | 核心 MCP 功能增强，等待作者响应 |
| [feat(sop): add authenticated operator cancellation (#9476)](https://github.com/zeroclaw-labs/zeroclaw/pull/9476) | PR | 27 天 | needs-author-action | SOP 作业取消能力，涉及高严重度风险标记 |
| [fix(multimodal): pixel-level image validation (#9819)](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | PR | 17 天 | needs-author-action | 阻止损坏图片导致 provider 请求失败的防御性修复 |

**风险提示**：#10165（S0 delegate 安全绕过）自 8 月 20 日创建至今 4 天仍无 fix PR，建议维护者立即响应，该漏洞可被用于执行 `rm` 等破坏性命令，构成数据丢失风险。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*