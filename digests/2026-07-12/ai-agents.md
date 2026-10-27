# OpenClaw 生态日报 2026-07-12

> Issues: 450 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-12 03:32 UTC

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

# OpenClaw 项目日报 — 2026-07-12

---

## 1. 今日速览

过去24小时项目保持高度活跃：Issue 更新 450 条（新开/活跃 227，关闭 223），PR 更新 500 条（待合并 258，已合并/关闭 242），并发布了 `v2026.7.1-beta.5` 测试版本。社区讨论集中在跨平台桌面端需求、Agent 会话稳定性及安全增强，多个 P0/P1 级别的 Bug 和回归问题被报告或修复，整体项目健康状况良好但稳定性挑战依然突出。

---

## 2. 版本发布

**新版本：`v2026.7.1-beta.5`**

- **主要亮点**：  
  - **对话式引导（Conversational Onboarding）**：Crestodian 现在在 CLI、Web 安装和 macOS 应用中运行真正的 Agent 循环，提供 AI 引导的提供商设置、基于模型评判的审批绑定、脱敏凭据提示，以及在无模型可用时的确定性回退。
  - 更多细节可查看 [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.5)。

*注：该版本为 beta 测试版，暂未标注破坏性变更或迁移注意事项，建议用户参考更新日志谨慎升级。*

---

## 3. 项目进展

以下为本日合并或关闭的重要 PR，显示了项目在稳定性、兼容性和功能完善方面的持续推进：

| PR | 描述 | 意义 |
|---|------|------|
| [#104883](https://github.com/openclaw/openclaw/pull/104883) | `test: tolerate bounded usage-cost retries` | 修复 CI 中计时抖动导致的测试断言不稳定 |
| [#104915](https://github.com/openclaw/openclaw/pull/104915) | `test(sessions): seed SQLite transcript freshness` | 统一 SQLite 转录时间戳，修复集成测试确定性失败 |
| [#104859](https://github.com/openclaw/openclaw/pull/104859) | `improve(sqlite): harden state lifecycle and snapshots` | 加固 SQLite 状态生命周期，解决检查点失败、备份腐败等问题（待合并） |
| [#104930](https://github.com/openclaw/openclaw/pull/104930) | `fix(ui): avoid splitting UTF-16 surrogate pairs in session display peer-id tail` | 修复 Web UI 中表情符号导致显示乱码 |
| [#104919](https://github.com/openclaw/openclaw/pull/104919) | `fix(channels): make nack callbacks idempotent` | 使频道消息 nack 回调幂等，避免重复失败处理 |
| [#104835](https://github.com/openclaw/openclaw/pull/104835) | `fix(openrouter): apply request policy to music generation requests` | 将用户请求策略（自定义 header / 代理）应用到 OpenRouter 音乐生成 |
| [#104836](https://github.com/openclaw/openclaw/pull/104836) | `fix(xai): apply request policy to video generation requests` | 同上，针对 xAI 视频生成 |

此外，多份 PR 尚在待合并状态（waiting on author / needs proof），表明维护者正在积极对话但部分改动仍在等待作者确认。

---

## 4. 社区热点

以下 Issues 和 PRs 获得了最多评论或反应，反映了当前社区的核心关注方向：

- **[#75](https://github.com/openclaw/openclaw/issues/75) [OPEN] [enhancement, help wanted] Linux/Windows Clawdbot Apps**  
  **评论 110，👍 81**  
  用户强烈呼吁为 Linux 和 Windows 提供与 macOS 同等功能的桌面客户端。该 issue 自2026年初创建，至今仍处于开放状态，且被标记为 `help wanted`，是社区最热切的功能请求之一。

- **[#88838](https://github.com/openclaw/openclaw/issues/88838) [CLOSED] Track core session/transcript SQLite migration via accessor seam**  
  **评论 37**  
  核心架构改进，将会话和转录存储从 JSONL 迁移到 SQLite，标志着基础数据层的重大进步，对后续性能优化至关重要。

- **[#99241](https://github.com/openclaw/openclaw/issues/99241) [OPEN] Tool outputs sometimes render as image attachments and become unreadable to the agent**  
  **评论 21**  
  严重可用性问题：在长运行或 ANSI 丰富的工具工作流中，工具输出被替换为 `(see attached image)` 占位符，导致 Agent 无法读取原文本。用户 @dennisd-hub 在 [#104721](https://github.com/openclaw/openclaw/issues/104721) 中进一步报告了完全断裂的回归（P0）。

- **[#10659](https://github.com/openclaw/openclaw/issues/10659) [OPEN] Feature Request: Masked Secrets**  
  **👍 4，评论 14**  
  请求实现“掩码密钥”机制，使 Agent 能用而不能直接看到 API Key，防止提示注入泄露。该议题与安全增强高度相关。

---

## 5. Bug 与稳定性

按严重程度排列，涵盖今日报告或活跃的 Bug：

| 严重性 | Issue | 摘要 | 是否已有 Fix PR |
|--------|-------|------|----------------|
| **P0** | [#104721](https://github.com/openclaw/openclaw/issues/104721) | **回归**：所有工具结果返回 `(see attached image)` 字面字符串，而非实际输出。完全不可用。 | 未标注 fix PR，但关联 [#99241] |
| **P1** | [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式提示缓存跨房间事件、策略、队列等边界失效，导致缓存丢失、输入重复计费。 | [#102189](https://github.com/openclaw/openclaw/pull/102189) (待合并) |
| **P1** | [#103917](https://github.com/openclaw/openclaw/issues/103917) | Gateway 崩溃：当子 Agent 的 workspace 目录被删除后，触发 `FsSafeError: root dir not found` 未处理。 | 无 |
| **P1** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook 产生 CPU 密集型进程，阻塞 Gateway RPC。 | 无 |
| **P1** | [#40001](https://github.com/openclaw/openclaw/issues/40001) | `write` 工具缺少追加模式，隔离的 cron 会话会覆写共享文件，导致数据丢失。 | 无 |
| **P2** | [#104783](https://github.com/openclaw/openclaw/issues/104783?)（隐含于 PR #104904） | Groq Llama 模型默认 TPM 限制导致 HTTP 413。 | [#104904](https://github.com/openclaw/openclaw/pull/104904) (待合并) |
| **P2** | [#90213](https://github.com/openclaw/openclaw/issues/90213) | 升级到 2026.6.1 后，旧状态迁移警告持续出现，即使运行 `openclaw doctor --fix` 也不消失。 | 无 |

**总体趋势**：多个回归与会话状态、文件系统、提示缓存相关，核心架构转向 SQLite 可能是根源之一，但多数已有修复 PR 在途。

---

## 6. 功能请求与路线图信号

- **[#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows 桌面应用**：呼声最高，但至今没有明确 PR。标记为 `help wanted`，可能依赖社区贡献。
- **[#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source**：通过来源标记记忆可信度，防止投毒。已进入 `needs-product-decision`，有望进入路线图。
- **[#42026](https://github.com/openclaw/openclaw/issues/42026) — 分布式 Agent 运行时**：将控制平面与计算分离的 RFC，社区讨论热烈，但暂无实现 PR。
- **[#8355](https://github.com/openclaw/openclaw/issues/8355) — 流式 TTS 管道**：提升语音通话体验的请求，目前仍处于讨论阶段。
- **[#6615](https://github.com/openclaw/openclaw/issues/6615) — exec-approvals 拒绝列表**：已有较高赞同（👍7），`fix-shape-clear` 状态，可能进入下一版本。
- **[#104742](https://github.com/openclaw/openclaw/pull/104742) — MCP Apps Phase 0**：新 PR 添加通用 MCP 客户端和 UI 集成，使任何 MCP 服务器可通过 `ui://` 资源暴露工具。这是 OpenClaw 在应用生态上的重要一步。

**信号**：安全相关（密钥掩码、审批拒绝列表）和生态扩展（MCP Apps、多平台客户端）是路线图优先方向。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

- **“工具输出变成图片占位符”** (#99241, #104721)：严重影响工作流，Agent 无法读取关键文本输出，用户称“完全不可用”。
- **“写工具覆盖共享文件”** (#40001)：多会话协同时数据丢失，用户希望 `write` 支持 `append` 模式。
- **“Webhook 多轮会话无效”** (#11665)：文档声称支持多轮，但实际行为是每次新建会话，破坏集成场景。
- **“提醒模型超出上下文时无回退”** (#9986)：当前仅对 API 错误触发 fallback，上下文溢出时直接报错，用户期望自动切换至更大上下文模型。
- **“子 Agent 宣布信息无法抑制”** (#8299)：唯一方法是让模型回复特定字符串，但模型常不遵守，用户需要配置开关。
- **“语音通话全程批处理”** (#8355)：用户期望 sentence-level 流式 TTS 降低延迟。
- **“Gateway 内存泄漏（中文用户报告）”** (#87109)：中文用户报告 heap 持续增长至 1GB+，cron 任务静默失败，重启可缓解但未根治。

总体用户情绪：对核心功能（会话、文件工具、语音）的稳定性和可用性存在较多不满，但对功能丰富性（MCP、安全、桌面端）有较高期待。

---

## 8. 待处理积压

以下为长期未响应或处于关键状态但进展缓慢的重要 Issue 和 PR，提请维护者关注：

| 项目 | 状态 | 问题/原因 |
|------|------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows 客户端 | OPEN, 2026-01-01 | 社区呼声极高，110 评论，无维护者明确时间线 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — 记忆信任标签 | OPEN, 2026-02-03 | `needs-product-decision`，已等待5个月 |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) — 子 Agent 宣布抑制开关 | OPEN, 2026-02-03 | 用户痛点明确，`needs-product-decision` |
| [#8355](https://github.com/openclaw/openclaw/issues/8355) — 流式 TTS | OPEN, 2026-02-03 | 功能设计复杂，无实质进展 |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) — 工具输出全为图片占位符 | OPEN (P0), 2026-07-11 | 严重回归，尚无标记 fix PR，但关联 [#99241] 有讨论 |
| [#104859](https://github.com/openclaw/openclaw/pull/104859) — SQLite 状态生命周期加固 | OPEN, 2026-07-12 | PR 大且复杂度高，标注 `waiting on author`，需维护者加速 |
| [#102189](https://github.com/openclaw/openclaw/pull/102189) — 稳定嵌入式提示缓存 | OPEN, 2026-07-08 | 覆盖多个边界，`waiting on author`，对高频用户至关重要 |

---

*数据来源：openclaw/openclaw GitHub 仓库，截止 2026-07-12 24:00 UTC。*

---

## 横向生态对比

好的，作为资深技术分析师，我将基于您提供的2026-07-12各项目动态数据，为您输出一份横向对比分析报告。

---

### 个人AI助手与自主智能体开源生态：2026-07-12 横向对比分析报告

#### 1. 生态全景

截至2026年7月12日，个人AI助手与自主智能体开源生态呈现出 **“核心项目高速迭代，但稳定性与安全性成为普遍阵痛”** 的特征。以 OpenClaw、ZeroClaw 和 CoPaw 为首的项目保持着极高的代码和社区活跃度，正全力冲刺新版本。然而，这种高歌猛进也伴随着显著的代价：**多项目普遍报告了严重的回归问题（P0/P1）、数据竞争、以及由审计暴露的系统性安全漏洞**。这暗示了整个生态正从“功能创新”的早期阶段，快速过渡到以 **“稳定、安全、企业级可靠”** 为主题的硬仗期。社区对本地模型优化、多平台支持（尤其是Linux桌面端）和MCP生态整合的需求，成为推动下一阶段发展的主流声音。

#### 2. 各项目活跃度对比

| 项目名称 | Issues 更新 (活跃/新开) | PRs 更新 (待合并/已合并) | 版本发布 | 关键 Bug/P0级问题 | 社区健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 227 | 258 / 242 | ✅ v2026.7.1-beta.5 | 是 (工具输出变图片占位符) | **极高度活跃**，核心生态主导者 |
| **NanoBot** | 19 | 17 / 5 | ❌ | 是 (多个P1级DoS/安全漏洞) | **高度活跃**，安全审计引爆热点 |
| **Hermes Agent** | 50 | 48 / 2 | ❌ (桌面端更新合并) | 是 (文件写入静默失败/安全绕过) | **高度活跃**，但合并率极低，积压严重 |
| **ZeroClaw** | ~50 | ~50 / 1 | ❌ (冲刺 v0.8.3) | 是 (子进程panic/Provider 400错误) | **极高度活跃**，冲刺Pre-Release阶段 |
| **CoPaw** | 24 | 5 / 5 | ❌ (v2.0.0 后修复期) | 是 (沙箱递归爆炸/上下文损坏) | **高度活跃**，v2.0.0发布后Bug修复压力大 |
| **PicoClaw** | 1 | 3 / 1 | ❌ | 是 (Matrix同步静默死亡) | **中等活跃**，存在长期未解决的严重Bug |
| **NullClaw** | 2 | 0 | ❌ | 是 (Telegram空闲后不响应) | **低活跃**，社区反馈少，开发停滞 |
| **IronClaw** | 1 | 50 / 13 | ❌ | 是 (Windows兼容性/本地MCP连接) | **高度活跃** (PR多)，但存在流程阻塞 |
| **NanoClaw** | 2 | 5 / 0 | ❌ | 是 (Windows编译失败) | **中等活跃**，核心PR进入最后审查阶段 |
| **LobsterAI** | 0 | 0 | ❌ | 是 (定时任务UI缺陷) | **极低活跃**，stale问题堆积，健康度堪忧 |
| **Moltis** | 0 | 1 / 0 | ❌ | 否 (有CalDAV Bug修复PR) | **低活跃**，静默迭代期 |
| **TinyClaw** | 0 | 0 | ❌ | 无 | **无活动** |
| **ZeptoClaw** | 0 | 0 | ❌ | 无 | **无活动** |

#### 3. OpenClaw 在生态中的定位

- **生态核心与参照系**：OpenClaw 无论从PR/Issue数量（四百余条）、社区讨论热度（#75桌面端请求获110评论）还是新版本发布的频率来看，都**稳坐生态头把交椅**。其 `v2026.7.1-beta.5` 版本引入的对话式引导（Crestodian）是其独特的竞争优势，将安全配置（脱敏凭据、审批绑定）与Agent循环深度整合，这比 Hermes Agent 的“Tirith审批门”和 NanoBot 的安全审计设计更进了一步，强调原生AI引导的安全体验。
- **技术路线差异**：
    - **vs. ZeroClaw / Hermes Agent**：OpenClaw正全面推进**SQLite作为核心数据引擎**（会话/转录迁移），而其他项目更多依赖JSONL或混合存储。这一基础架构变革旨在提升长会话场景的性能和可靠性，但也是近期多个回归问题的根源（#99241）。
    - **vs. CoPaw**：CoPaw 专注于Windows沙箱和微信等中国本地化集成，而 OpenClaw 更强调**跨平台（CLI/Web/macOS）**和**MCP应用生态（MCP Apps Phase 0 PR）**。两者在生态扩展路径上有明显差异。
    - **社区规模与成熟度**：OpenClaw 的项目治理更规范，有明确的 `P0/P1/P2` 分级和 `Release Notes`。相比 NanoBot 因单次审计爆发42个问题，OpenClaw 的Bug是系统性回归，修复更有组织性。它代表了生态中最**成熟和稳健**的一极。

#### 4. 共同关注的技术方向

多个项目呈现出的共同技术需求，揭示了当前生态的共识与痛点：

- **安全与权限控制的“硬固化”**：这是今日最强烈的共同信号。
    - **涉及项目**：OpenClaw, NanoBot, Hermes Agent, ZeroClaw, NanoClaw
    - **具体诉求**：
        1.  **API Key 保护**：OpenClaw（Masked Secrets）、NanoBot（Provider间Key泄漏）、Hermes（CLI子进程继承环境变量），三方从不同角度提出了对密钥生命周期管理的需求。
        2.  **操作审批与审计**：Hermes Agent（Tirith审批门绕过）、NanoClaw（Guarded Actions和审计Skill），都旨在将敏感操作（写文件、执行命令等）置于统一的安全决策点之下。
        3.  **输入验证与资源隔离**：NanoBot（WebFetch URL发送、CLI App注册表签名）、CoPaw（沙箱递归爆炸），反映了社区对Agent行为可解释和可控性的普遍关切。

- **本地模型体验与成本优化**：
    - **涉及项目**：NanoBot, OpenClaw, ZeroClaw
    - **具体诉求**：NanoBot 的 #4867 问题（Ollama缓存缺失导致60秒延迟）是本地部署性能瓶颈的一个典型案例。OpenClaw和ZeroClaw也都有与上下文预算、缓存策略相关的讨论。**“如何让本地模型跑得更快、更省”** 是从云端向边缘迁移的核心挑战。

- **多平台桌面端诉求**：
    - **涉及项目**：OpenClaw, IronClaw, CoPaw (Windows)
    - **具体诉求**：OpenClaw 的 #75 (Linux/Windows客户端) 是当日社区热度最高的功能请求之一。IronClaw 则暴露了 Windows 上路径兼容的严重缺点。这表明社区已不满足于 CLI 或 Web 界面，希望获得原生级的桌面集成体验。

- **MCP 生态的标准化与易用性**：
    - **涉及项目**：OpenClaw, NanoBot, Hermes Agent, ZeroClaw
    - **具体诉求**：从OpenClaw的`MCP Apps Phase 0`，到NanoBot修复MCP重连崩溃，再到Hermes Agent的MCP服务器管理CLI，都指向一个方向：**MCP正成为AI Agent连接外部世界的“标准协议”**，而当前最大的痛点是连接的稳定性、管理的便捷性和生态的丰富度。

#### 5. 差异化定位分析

| 项目 | 核心定位与功能侧重 | 目标用户 | 技术架构关键差异 | 核心优势与短板 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型AI Agent平台**，强调安全、跨平台与MCP生态 | 开发者、技术爱好者 | SQLite核心数据层，AI引导的Crestodian安全框架 | **优势**：生态最全、社区最大、治理规范。**短板**：近期回归问题多，功能庞大导致稳定性挑战。 |
| **NanoBot** | **安全为先、审计驱动的Agent框架** | 安全敏感型组织/个人 | 社区安全审计后快速迭代，多项默认配置改为安全模式 | **优势**：安全响应极快，符合生产环境对0信任的要求。**短板**：审计暴露问题多，性能优化（Ollama）是软肋。 |
| **Hermes Agent** | **企业级LLM Agent**，注重自主评估与协作 | 企业用户、高级玩家 | 多进程架构，Tirith安全门，正在构建HAEE自主评估引擎 | **优势**：功能丰富，企业级特性(定时任务、多Profile)。**短板**：项目管理混乱，PR积压严重，跨进程数据竞争问题显著。 |
| **ZeroClaw** | **面向“运行环境”Agent管控平台** | 运维/管理者（Operator） | 目标模式（Goal Mode），看板视图，强大Cron调度 | **优势**：Agent治理和运维视角独特，适合跑复杂自动化任务。**短板**：用户门槛高，默认配置不够“开箱即用”。 |
| **CoPaw**| **中国本地化与Windows沙箱深度整合的Agent** | 中国开发者、Windows用户 | 深度集成Windows沙箱，AgentScope框架，v2.0.0架构大改 | **优势**：本土场景贴合度高，沙箱机制独特。**短板**：v2.0.0版本引发大量兼容性和数据迁移Bug，稳定性受损。 |
| **PicoClaw / NullClaw / LobsterAI / Moltis** | **特定领域轻量化Agent或前端** | 寻求特定功能（如Matrix/Lightweight CalDAV）的用户 | 架构更轻量，功能聚焦 | **共同短板**：社区不活跃、贡献者流失风险高、Bug长期未解决。 |

#### 6. 社区热度与成熟度

- **第一梯队（快速迭代与质量巩固并存）**：**OpenClaw、ZeroClaw、CoPaw**。它们是当前生态的核心引擎，代码提交和社区讨论均极其活跃。虽然都面临着发布后修复Bug的压力，但整体项目推进力强，治理结构相对清晰。OpenClaw 的治理最为成熟，CoPaw 处于高强度的发布后修复期。

- **第二梯队（快速迭代但Bug/安全压力巨大）**：**NanoBot、Hermes Agent**。它们同样活跃，但面临着更多“基础不牢”的挑战。NanoBot 因安全审计暴露出大量系统性漏洞，正进行大规模修复；Hermes Agent PR积压严重，合并率极低，表明其项目管理流程可能成为瓶颈。

- **第三梯队（低活跃度，处于维护或停滞窗口期）**：**PicoClaw, NullClaw, LobsterAI, Moltis**。这些项目日活极低，仅有零星的重要Bug报告或PR提交。若无维护者投入，存在项目停滞或技术债务累积的风险。LobsterAI 的状态尤为堪忧，是唯一一个“stale”问题成为常态的项目。

#### 7. 值得关注的趋势信号

1.  **“多模态上下文污染”成为新常态Bug**：OpenClaw的`(see attached image)`占位符和NanoBot的`.strip()`崩溃，都指向同一个问题：Agent在处理混合了文本、图像、工具调用的多模态内容时，存在边界不清的解析逻辑。这将是未来复杂Agent应用的首要稳定性挑战。

2.  **“沙箱安全”从概念走向实战**：CoPaw的Windows沙箱递归爆炸和NanoBot的容器隔离配置问题（SYS_ADMIN），表明开发者社区不再仅停留在理论讨论，而是开始在实际环境中部署和测试沙箱，并发现了具体的安全与可用性缺陷。**生产级的沙箱设计是Agent走向企业的必经之路**。

3.  **“子进程/内存管理”是稳定性的头号杀手**：Hermes Agent (MCP进程泄漏)、ZeroClaw (SIGSEGV)、NanoBot (内存OOM) 和 CoPaw (20GB内存封顶) 都提到了进程崩溃或内存溢出。这表明**Agent框架在处理不可预测的第三方工具或脚本时，其稳态能力还远未达标**。开发者需要在语言运行时（如Go/Rust）选择和进程隔离策略上做更深入的权衡。

4.  **用户对“默认配置”的容忍度极低**：ZeroClaw (32k上下文预算)、CoPaw (硬编码60秒超时)、OpenClaw (Beta版升级警告) 表明，一个“不太完美”的默认配置足以摧毁新用户的初次体验。**在产品早期，优先保证一个稳定、安全的默认设置，比提供海量功能但处处是坑要有价值得多**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-12)

**数据来源**: GitHub 仓库 HKUDS/nanobot  
**统计周期**: 2026-07-11 至 2026-07-12 (过去24小时)

---

## 1️⃣ 今日速览

过去 24 小时项目保持高活跃度：共处理 21 条 Issue（其中 19 个新开/活跃、2 个已关闭）和 22 条 PR（其中 5 个已合并/关闭）。值得注意的是，由社区安全审计用户 @hamb1y 提交的 **42 项审计结论**（#4815）引发连锁反应，今日新增 6 个相关 Issue（#4881–#4887）以及 4 个修复型 PR（#4888–#4891），项目安全加固进入密集实施阶段。同时，关于**精确前缀保留**的长期架构问题（#2463、#4867）讨论持续升温，社区对本地模型（Ollama）缓存性能的关注达到新高。

---

## 2️⃣ 版本发布

无新版本发布。

---

## 3️⃣ 项目进展

### 🚀 已合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 说明 |
|--------|------|------|------|
| [#4764](https://github.com/HKUDS/nanobot/pull/4764) | fix(mcp): isolate reconnect cancel scopes to prevent gateway crash | 已合并 | 修复 MCP 流式 HTTP 超时重连导致的网关崩溃，替代了之前的临时方案。 |
| [#4844](https://github.com/HKUDS/nanobot/pull/4844) | refactor(agent): gate sustained goals behind explicit /goal | 已合并 | 将持续目标功能（long_task/complete_goal）重构为显式的 `/goal` 命令，阻断后台自动运行对用户交互的干扰。 |
| [#4891](https://github.com/HKUDS/nanobot/pull/4891) | refactor(agent): make runtime context opt-in and prefix-stable | 已合并 | 默认不再向每次用户提示注入时间、频道、ID 等运行时上下文，改为可选提供机制，为前缀缓存（#4371）铺平道路。 |

**整体进展**: 核心 Agent 循环的持续目标机制已被重构为更可控的显式命令；运行时上下文的注入方式得到优化，为后续缓存提升性能奠定基础；MCP 重连稳定性问题获得实质性修复。

---

## 4️⃣ 社区热点

### 🔥 最活跃 Issue

1. **[#2463](https://github.com/HKUDS/nanobot/issues/2463) – 架构问题：未保留精确 prompt 前缀**  
   - 评论: 14 | 👍: 0 | 创建: 2026-03-25 | 最后更新: 2026-07-11  
   - 背景：该问题自三月提出，至今仍是讨论焦点。核心矛盾在于 `nanobot` 持久化的对话历史与**实际发送给模型的 prompt 前缀不一致**，导致无法利用 OpenAI / Ollama 等 Provider 的 prompt 缓存。  
   - 诉求：社区期待一个能按原样保留历史并开启缓存的方案，这直接影响本地模型的推理速度和用户体验。

2. **[#4867](https://github.com/HKUDS/nanobot/issues/4867) – 增强：保留精确前缀以启用 Ollama 等缓存**  
   - 评论: 4 | 👍: 0 | 创建: 2026-07-10 | 最后更新: 2026-07-11  
   - 背景：作为 #2463 的跟进，用户 @The-Markitecht 指出当前每次调用 Ollama 会**额外增加 60 秒延迟**，即使简单问答也无法避免。用户拥有 32GB VRAM 仍“完全不可用”。  
   - 关联 PR： [#4371](https://github.com/HKUDS/nanobot/pull/4371)（在 Recent History 前添加断点以实现稳定系统前缀缓存）  
   - 分析：这两个 Issue 成为过去 24 小时社区最关心的性能瓶颈，直接关系到本地部署场景的可用性。

### 📌 讨论密集的 PR

- [#4855](https://github.com/HKUDS/nanobot/pull/4855) – **feat(webui): add guided setup flows**  
  作者 @Re-bin 提出产品化的频道引导设置流程，包含验证、官方链接、QR 交接及安全密钥处理等。该 PR 获得积极反馈，表明社区对 WebUI 易用性有强烈需求。

---

## 5️⃣ Bug 与稳定性

### 🔴 严重级 (P1)

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Ollama 缓存缺失导致每轮额外60秒延迟 | OPEN | 关联 [#4371](https://github.com/HKUDS/nanobot/pull/4371) |
| [#4782](https://github.com/HKUDS/nanobot/issues/4782) | DoS: API 无速率限制，可耗尽 Provider 费用 | OPEN | 暂无 |
| [#4781](https://github.com/HKUDS/nanobot/issues/4781) | DoS: WebSocket 无连接数限制，文件描述符耗尽 | OPEN | 暂无 |
| [#4780](https://github.com/HKUDS/nanobot/issues/4780) | DoS: 消息队列无背压，内存耗尽 | OPEN | 暂无 |
| [#4779](https://github.com/HKUDS/nanobot/issues/4779) | Security: `process_direct()` 绕过频道授权检查 | OPEN | 暂无 |
| [#4777](https://github.com/HKUDS/nanobot/issues/4777) | Security: `/stop` 可取消其他用户任务 | OPEN | [#4889](https://github.com/HKUDS/nanobot/pull/4889) 已提交 |
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Security: Provider API Key 在 Provider 间泄漏 | OPEN | 暂无 |
| [#4783](https://github.com/HKUDS/nanobot/issues/4783) | Security: CLI 子进程继承全部环境变量，泄露 Key | OPEN | 暂无 |
| [#4785](https://github.com/HKUDS/nanobot/issues/4785) | Bug: `read_file` 先加载全文件再截断，大文件 OOM | OPEN | 暂无 |
| [#4888](https://github.com/HKUDS/nanobot/pull/4888) | **新增 Fix** | 已提交 | 序列化工作区写操作（#4798） |
| [#4889](https://github.com/HKUDS/nanobot/pull/4889) | **新增 Fix** | 已提交 | 授权破坏性优先级命令（/restart, /stop） |
| [#4880](https://github.com/HKUDS/nanobot/pull/4880) | **新增 Fix** | 已提交 | 默认将 `restrict_to_workspace` 设为 True（#4796） |

### 🟡 中等 (P2)

| Issue | 描述 | 状态 |
|-------|------|------|
| [#4887](https://github.com/HKUDS/nanobot/issues/4887) | 测试 setup: dev extra 缺少飞书依赖 lark-oapi | OPEN |
| [#4886](https://github.com/HKUDS/nanobot/issues/4886) | Security: Docker Compose 禁用容器隔离（SYS_ADMIN, apparmor） | OPEN |
| [#4885](https://github.com/HKUDS/nanobot/issues/4885) | Security: CLI App 注册表是未签名代码安装供应链 | OPEN |
| [#4884](https://github.com/HKUDS/nanobot/issues/4884) | Security: WebFetch 将完整用户 URL 发送给 Jina | OPEN |
| [#4883](https://github.com/HKUDS/nanobot/issues/4883) | Security: API session 锁映射无限增长 | OPEN，[#4890](https://github.com/HKUDS/nanobot/pull/4890) 已提交 |
| [#4882](https://github.com/HKUDS/nanobot/issues/4882) | Bug: Dream 内容差异将未变的空文件视为修改 | OPEN |
| [#4881](https://github.com/HKUDS/nanobot/issues/4881) | Bug: Windows ExecTool 损坏 PowerShell UTF-16 输出 | OPEN |
| [#4813](https://github.com/HKUDS/nanobot/pull/4813) | fix(loop): 对多模态 list 内容调用 `.strip()` 崩溃 | PR 待合并 |
| [#4837](https://github.com/HKUDS/nanobot/pull/4837) | fix: 同上 + 记录 prepare_call 异常 | PR 待合并 |

**分析**: 由 @hamb1y 发起的全面安全审计结果（#4815）仍在快速产出新 Issue，同时社区贡献者已迅速提交多个 P1 关键修复 PR。项目安全防护水平有望在未来几天显著提升。

---

## 6️⃣ 功能请求与路线图信号

### 📌 可能纳入下一版本的功能

| 请求 | 对应 PR / 关联 | 优先级 |
|------|----------------|--------|
| 精确前缀缓存（Ollama/OpenAI） | #2463, #4867 → [#4371](https://github.com/HKUDS/nanobot/pull/4371) | P1 |
| WebUI 引导设置流程 | [#4855](https://github.com/HKUDS/nanobot/pull/4855) | P1 |
| 会话绑定模型预设 | [#4866](https://github.com/HKUDS/nanobot/pull/4866) | P1 |
| 提取 MCP 工具提供者生命周期 | [#4875](https://github.com/HKUDS/nanobot/pull/4875) | P2 |
| 可持续目标显式开关（已合并 #4844） | 已完成 | — |
| 运行时上下文可选机制（已合并 #4891） | 已完成 | — |

### 🧭 路线图信号

- **安全加固成为当前主线**：审计输出 42 项问题，社区已迅速响应提交 4 个修复 PR，预计后续版本会将默认安全配置（如 `restrict_to_workspace=True`）纳入。
- **本地模型性能优化**：Ollama 缓存问题连续引发两个热门 Issue，表明大量用户正在使用本地部署场景（32GB VRAM 等），这是 NanoBot 区别于纯云端助手的重要差异化方向。
- **开发体验改进**：测试依赖缺失（#4887）和 Windows UTF-16 编码问题（#4881）提醒维护者需加强跨平台和 CI 测试覆盖。

---

## 7️⃣ 用户反馈摘要

> 以下内容提取自过去 24 小时 Issue 评论，反映真实用户痛点。

- **“完全不可用”** – @The-Markitecht 在[#4867](https://github.com/HKUDS/nanobot/issues/4867) 中描述 Ollama 调用时每轮额外 60 秒延迟，即使简单问答也如此，导致“拥有 32GB VRAM 也跑不动”。
- **“文档与命令行不符”** – @justTravis 在[#4860](https://github.com/HKUDS/nanobot/issues/4860) 反映网站提到的 `onboard` 、`webui` 命令实际不存在，使用 `-h` 看不到，导致新用户困惑。
- **“MCP 重连崩溃”** – @tjc0726 在[#4302](https://github.com/HKUDS/nanobot/issues/4302) 报告 MCP 会话超时后网关崩溃，该问题已由 PR #4764 修复。
- **“测试环境难以搭建”** – @hamb1y 在[#4887](https://github.com/HKUDS/nanobot/issues/4887) 指出 `uv sync --extra dev && uv run pytest` 会因为缺少 `lark-oapi` 而失败，导致飞书相关测试在本地无法运行。
- **“安全顾虑”** – @hamb1y 在多个 Issue 中强调 API Key 泄漏、未授权命令执行、未经限制的 API 端口等风险，社区反响积极，已有多位贡献者开始提交修复。

---

## 8️⃣ 待处理积压

### ⏳ 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 说明 |
|-------|----------|------|------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 2026-03-25 | 活跃讨论中 | 架构级 prefix 保留问题，虽已有 PR #4371，但尚未合并，已存在近4个月。 |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | 2026-05-27 | OPEN (PR) | OpenAI Codex Provider 去重修复，因冲突长期未合，依赖该功能的用户可能受影响。 |
| [#4145](https://github.com/HKUDS/nanobot/pull/4145) | 2026-06-01 | OPEN (PR) | 天气技能示例 PR，存在冲突，搁置超过1个月。 |
| [#4371](https://github.com/HKUDS/nanobot/pull/4371) | 2026-06-16 | OPEN (PR) | 缓存断点 PR，与 #2463 / #4867 高度相关，可能是本地性能问题的关键解决方案。 |
| [#4616](https://github.com/HKUDS/nanobot/pull/4616) | 2026-07-01 | OPEN (PR) | 子代理结果路由修复，冲突待解决。 |
| [#4650](https://github.com/HKUDS/nanobot/pull/4650) | 2026-07-02 | OPEN (PR) | 重构 turn 历史恢复，冲突待解决。 |

**建议维护者优先关注**：
- 合并或推进 **#4371**（前缀缓存），以解决社区最强烈的性能痛点。
- 处理 **#4021**（Codex 去重），减少 API 调用报错。
- 解决 **#4616**、**#4650** 等冲突，避免 PR 长时间积压。

---

*本报告由 AI 智能体与个人 AI 助手领域开源项目分析师自动生成，数据截止于 2026-07-12 07:00 UTC。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的 Hermes Agent 项目数据，为您生成了2026年7月12日的项目动态日报。

---

### **Hermes Agent 项目日报 | 2026-07-12**

#### **1. 今日速览**

今日项目整体态势**高度活跃**，社区参与度极高，但同时也暴露出项目在稳定性和效率方面面临的挑战。过去24小时内，项目产生了50个Issue和50个PR，但**合并/关闭率极低**（Issue关闭率16%，PR合并率4%），显示出大量工作处于“待处理”状态，可能形成积压。虽然暂无可供用户安装的新版本，但多个旨在提升核心体验（如会话管理、桌面端修复、安全机制）的PR已进入讨论阶段，表明项目正在向更成熟的方向演进。值得关注的是，社区对**安全绕过**、**跨进程数据竞争**以及**关键功能静默失效**等问题表现出高度关切，这些Bug的严重性（如P1/P2级）需要维护团队优先响应。

#### **2. 版本发布**
*   **无**：过去24小时内无新版本发布。

#### **3. 项目进展**

尽管公开的合并/关闭动作不多，但部分关键Issue和PR的闭合标志着项目在特定领域的进展。

*   **桌面端发布 (Desktop Release):** PR [#62966](https://github.com/NousResearch/hermes-agent/pull/62966) 已合并，发布了桌面端 v0.16.8 版本（macOS/Windows），这是一个纯版本更新，整合了从 `hc-511` 到 `hc-517` 的桌面修复。

*   **MCP服务器进程泄漏修复:** 重要的 Bug Issue [#60385](https://github.com/NousResearch/hermes-agent/issues/60385) 已被关闭，该问题描述了MCP服务器`stdio`进程在重连后未被清理，导致进程积累。此修复对于长时间运行的门控服务稳定性至关重要。

*   **关键P1级Bug修复:** 两个P1级别的问题得到闭环：
    *   Issue [#62948](https://github.com/NousResearch/hermes-agent/issues/62948) 描述的 **`write_file`工具静默失败**问题已被标记为 `sweeper:implemented-on-main`，表明修复已在主分支完成。
    *   Issue [#62916](https://github.com/NousResearch/hermes-agent/issues/62916) 请求的 **OpenCode Go提供商**支持，同样已标记为 `implemented`。

*   **功能快速跟进:** 多个新功能PR（如 [#61645](https://github.com/NousResearch/hermes-agent/pull/61645) 自主评估引擎）在7月9日创建后仍在持续更新，表明开发团队正在积极迭代新特性的实现。

#### **4. 社区热点**

今日最引人关注的讨论并非单一问题，而是围绕**系统安全性**和**核心功能稳定性的广泛担忧**。

*   **🔥 安全绕过高亮: Issue [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) -“Tirith审批门无法覆盖非Shell工具”** (6条评论)
    *   **核心诉求:** 用户 `salem221094` 指出项目的核心安全机制“Tirith”仅对终端/shell命令生效，但 `send_message`, `write_file` 等同样具备破坏性的非Shell工具及MCP工具均可绕过“人类介入” (Human-in-the-Loop) 审批，直接执行。这是一个严重的设计缺陷。
    *   **分析:** 这一问题触及项目作为“AI Agent”的安全信任基石。若无法实现全工具链的审批审计，其作为可部署生产环境的主体将存在巨大风险。社区的6条评论反映了对此安全组件完整性的高度关注。

*   **🔥 数据竞争/稳定性: Issue [#8040](https://github.com/NousResearch/hermes-agent/issues/8040) -“凭据池的TOCTOU问题”** (3条评论)
    *   **核心诉求:** 用户 `tomqiaozc` 报告了一个难以追踪的跨进程数据竞争问题：凭据池使用进程内锁，但CLI、网关、代理可以同时读写同一个文件，导致旧数据和丢失更新。
    *   **分析:** 这是典型的并发陷阱。多进程架构是Hermes Agent的核心设计，此Bug反映出在共享状态治理上存在系统性缺陷。

#### **5. Bug 与稳定性**

今日报告的Bug集中在**静默失败**、**数据丢失**和**安全逻辑缺失**方面，严重程度较高。

*   **🔴 严重 (P1/P2):**
    *   **Config静默丢失: Issue [#62723](https://github.com/NousResearch/hermes-agent/issues/62723) (P1):** 配置迁移 (v30→v32) 在多Profile设置中静默删除了`platforms`段，导致9个Profile的飞书机器人失效。**尚未有对应的修复PR。**
    *   **小文件写入静默失败: Issue [#62948](https://github.com/NousResearch/hermes-agent/issues/62948) (P1):** `write_file`在内容超约8KB时静默失败，工具调用被替换为空对象。此问题已被标记为 `sweeper:implemented-on-main`，表明修复可能已集成。
    *   **MCP进程泄漏: Issue [#60385](https://github.com/NousResearch/hermes-agent/issues/60385) (P2):** 问题已关闭，但指出运行数小时后MCP服务器进程数会无限制增长，最终导致资源耗尽。
    *   **跨进程数据竞争: Issue [#8040](https://github.com/NousResearch/hermes-agent/issues/8040) (P2):** 凭据池存在进程间锁竞争问题，可能导致认证凭据丢失或错乱。
    *   **安全绕过: Issue [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) (P3):** 但实际影响为P1级的安全合规问题。

*   **🟡 中等 (P2/P3):**
    *   **新Bug: 属性错误: Issue [#62914](https://github.com/NousResearch/hermes-agent/issues/62914) (P2):** `AIAgent`对象缺少 `_emit_pending_fallback_notice` 属性，导致回滚成功时整个API调用崩溃。**尚未有对应的修复PR。**
    *   **新Bug: Telegram上传超时: Issue [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) (P2):** 大于15MB的文件上传恒超时，且环境变量 `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` 无效。**尚未有对应的修复PR。**
    *   **Gemini并行调用解析失败: Issue [#62940](https://github.com/NousResearch/hermes-agent/issues/62940) (P2):** 通过OpenAI兼容层使用Gemini时，并行工具调用会被合并，导致参数丢失。问题已关闭，可能临时解决。
    *   **`write_file` 在 Windows 上静默假成功: Issue [#52267](https://github.com/NousResearch/hermes-agent/issues/52267) (P2):** 工具返回成功但文件未写入磁盘。**尚未有对应的修复PR。**

#### **6. 功能请求与路线图信号**

新功能请求继续指向**核心体验**、**企业级管理**和**自主性**。

*   **高潜力/短期可能采纳:**
    *   **多Profile会话复制: PR [#61630](https://github.com/NousResearch/hermes-agent/pull/61630) (P3):** 提供了在不同Profile间复制会话的能力，可满足高级用户切换工作流的场景需求。
    *   **Slack频道自动绑定与热加载: PR [#61635](https://github.com/NousResearch/hermes-agent/pull/61635):** 改善了企业级协作场景的集成体验。
    *   **WebUI推理模式选择器: PR [#61625](https://github.com/NousResearch/hermes-agent/pull/61625):** 专门为OpenAI Codex提供更细粒度的推理能力控制。

*   **下一版本潜力信号:**
    *   **自主评估引擎 (HAEE): PR [#61645](https://github.com/NousResearch/hermes-agent/pull/61645) (P3):** 旨在为Hermes建立内建的“自我验证”能力，与“自改进”的宣传口号对齐，是迈向更高级Agent的重要一步，很可能被纳入核心路线图。
    *   **MCP服务器管理CLI: Issue [#690](https://github.com/NousResearch/hermes-agent/issues/690):** 用户希望有类似 `hermes mcp` 的CLI来发现、选择和更新MCP服务器，替代原始的YAML编辑。多个相关PR（如#61637）显示出此方向是社区共识。
    *   **定价覆盖和合约功能: Issue [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) (P3):** 用户 `NewTurn2017` 提出了更完善的企业级计费支持，包括用户覆盖、合约定价和同步CLI，这是项目商业化能力的潜在方向。

#### **7. 用户反馈摘要**

从今日的Issue和PR中，可以提炼出几个核心的用户痛点：

*   **“我无法信任它的反馈”:**
    *   `write_file` 静默假成功、凭据更新竞争、Git仓库状态被误改，这些都让用户难以信任Agent输出和行为的真实性。用户 `Evodepala` 直言工具“返回成功但什么都没写”，这严重破坏了使用体验。
    *   用户 `salem221094` 指出安全绕过漏洞，**核心诉求是：“我希望我的重要操作，无论通过什么工具，都能经过我审批。”**

*   **“你们的用户界面/体验不够友好”:**
    *   多名用户在请求更好的模型管理和切换体验 (如 Issue [#38975](https://github.com/NousResearch/hermes-agent/issues/38975), PR [#61637](https://github.com/NousResearch/hermes-agent/pull/61637))。此外，**“被”自动更改配置（如模型修改全局、会话丢失）** 是高频不满点。
    *   **新用户引导待优化:** `hermes update` 命令的回归和静默行为（Issue [#3523](https://github.com/NousResearch/hermes-agent/issues/3523)）令许多用户困惑，反应了CLI作为用户主要触点的用户体验问题。

*   **“平台/提供商集成有断点”:**
    *   Telegram (多上下文问题、超大文件上传) 和 Slack (集成失败) 的体验不佳仍是主要反馈点。用户 `banjo` 描述 Telegram “似乎认为我的最后一条消息是唯一的上下文”，这反映了消息历史管理在非终端平台上的实现不一致。

*   **“我无法前进”:**
    *   **重大Bug阻塞:** 对于依赖Cron、WhatsApp桥、Feishu等特定功能的用户来说，这些组件失效（如 Issue [#2788](https://github.com/NousResearch/hermes-agent/issues/2788), [#2975](https://github.com/NousResearch/hermes-agent/issues/2975)）意味着他们无法完成日常自动化任务，形成“阻塞级”反馈。

#### **8. 待处理积压**

以下是一些长期存在或高价值但未被解决的Item，需要维护团队注意。

*   **🔴 长期未解决的重大Bug:**
    *   Issue [#2788](https://github.com/NousResearch/hermes-agent/issues/2788) - “Cron jobs never run or when it failed, no useful information is recorded” (创建于2026-03-24，最后更新于2026-07-12)。一个用户不信任的、失灵的定时任务系统是项目声誉的巨大风险。
    *   Issue [#2765](https://github.com/NousResearch/hermes-agent/issues/2765) - “Hindsight plugin silently skips tool registration” (2026-03-24)。插件未如预期工作，且没有任何错误日志，这会让高度依赖此功能的高级用户感到沮丧。

*   **🟡 待评估的集成/功能:**
    *   Issue [#2228](https://github.com/NousResearch/hermes-agent/issues/2228) - “System error messages injected with dynamic role, can appear as role=user” (2026-03-20)。系统错误消息伪装成用户消息，这是一个高风险的XSS/信息污染问题。
    *   Issue [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) - “Feat(pricing): add pricing overrides... and sync CLI” (2026-04-14)。来自核心贡献者的明确路线图建议，但似乎未被优先处理。

*   **⚠️ 已提议但未推进的PR:**
    *   PR [#61645](https://github.com/NousResearch/hermes-agent/pull/61645) - “Autonomous Evaluation and Self-Improvement Engine (HAEE)” 尽管引起广泛讨论，但至今仍为`Open`状态。此PR若被合并，将是项目能力的显著跃升，其搁置状态可能让社区感到困惑。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报  
**日期：2026-07-12**  
**数据来源：**[sipeed/picoclaw](https://github.com/sipeed/picoclaw)  

---

## 1. 今日速览  
过去24小时项目活跃度中等偏低。**无新版本发布**，但社区提交了1个新Issue（严重级别Bug）和3个Pull Request（其中1个已合并）。主要关注点集中在Matrix同步循环的静默崩溃问题（#3203），该Bug已持续存在10天且无修复PR关联。另外两个开放PR分别涉及Agent运行时覆盖和DeltaChat重构，均已超过一周未获后续处理，社区活跃度呈下降趋势。  

---

## 2. 版本发布  
无 （最新Release未更新）  

---

## 3. 项目进展  
- **已合并/关闭 PR：**  
  - [#3249 Skill enable/disable state + cron RunNow](https://github.com/sipeed/picoclaw/pull/3249) — 由 `m4n3z40` 提交，支持UI中Skill的启用/禁用状态以及cron的暂停功能。该PR基于Ethos P6.6 fork，通过 `workspace/skills/.skills-state.json` 持久化状态，利用mtime追踪自动触发缓存无效化，无需重启即可动态控制skill可见性。  
- **待合并 PR（2条）：**  
  - [#3225 Support agent-specific runtime overrides](https://github.com/sipeed/picoclaw/pull/3225) — 允许在 `agents.list` 条目中定义 `max_tokens`、summarization阈值等运行时覆盖，按代理应用以构建 `AgentInstance`；同时清理了未使用的openai_compat导入。  
  - [#3222 refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222) — 大幅精简DeltaChat模块：移除遗留特性、过时测试和硬编码的relay列表；删除基于密码的邮件配置（改为JSONRPC密钥）；重构API，重命名 `invite_link` 为 `join_invite_link` 并新增 `show_invite_link`。  

**总体评价：** 项目仅向前推进了1个小型功能合并（Skill开关），另两个实质性改进（Agent覆盖、DeltaChat重构）仍处于停滞状态。  

---

## 4. 社区热点  
- **Issue #3203**（[链接](https://github.com/sipeed/picoclaw/issues/3203)）— 拥有2条评论，是过去24小时内唯一活跃的讨论话题。  
  **诉求分析：** 用户 `weissfl` 报告Matrix `/sync` 长轮询在发生网络中断或HomeServer重启后永久死亡，无自动重连机制。由于主进程仍然存活，systemd的 `Restart=on-failure` 无法触发，导致机器人彻底失去Matrix通道却无人察觉。该问题影响聊天式AI应用的可靠性，属于**生产环境关键缺陷**。评论中可能包含复现步骤或讨论临时修复方案，但尚未有维护者明确回应。  

---

## 5. Bug 与稳定性  
| 严重程度 | Issue | 描述 | 是否有Fix PR |
|---------|-------|------|-------------|
| 🔴 严重 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync循环无重连逻辑，网络/服务器中断后静默死亡 | 无 |
| 🟡 中等 | 无 | 过去24小时未报告其他Bug | — |

**分析：** 唯一活跃的Bug具有高隐蔽性和破坏性，且已存在10天（标记为stale）。如果用户依赖Matrix作为通信后端，该Bug会持续导致服务不可用，亟需优先处理。  

---

## 6. 功能请求与路线图信号  
- **Agent-specific运行时覆盖**（PR #3225）— 允许为不同智能体单独配置 `max_tokens`、摘要阈值等参数。该功能可提升多Agent场景下的灵活性，社区期待度较高（无评论），但提交7天后仍未合并。  
- **DeltaChat重构**（PR #3222）— 减少200行代码并清理API，引入官方relay列表引用、移除密码明文配置等。符合安全性和可维护性原则，可能被纳入下一版本。  
- **Skill开关+CRON暂停**（PR #3249，已合并）— 已确认进入主分支，预计下一个版本将支持UI级别的技能管理。  

**路线图信号：** 上述两个开放PR均属于 “Q3 2026” [Github Milestone](https://github.com/sipeed/picoclaw/milestones) 的候选特性，但维护者响应速度偏慢，可能影响版本发布节奏。  

---

## 7. 用户反馈摘要  
- **正向反馈（来自PR #3249）**：用户 `m4n3z40` 提供的Skill开关方案被合并，表明社区对UI级技能控制有明确需求，且实现获得了认可。  
- **负面痛点（来自Issue #3203）**：用户 `weissfl` 描述了生产环境中Matrix通道的无声故障场景，强调“systemd无法感知失败”导致被动监控失效。该反馈直击PicoClaw作为“AI Agent”的通信可靠性短板。  
- **等待反馈**：PR #3225 和 #3222 未产生评论，可能因维护者未响应导致社区暂时观望。  

---

## 8. 待处理积压  
以下任务长期未获响应，建议维护者优先关注：  
1. **Issue #3203**（创建于2026-07-02，更新于2026-07-12，已标记stale）— Matrix重连Bug，直接影响服务可用性。  
2. **PR #3225**（创建于2026-07-04，更新于2026-07-11，无维护者评论）— Agent运行时覆盖功能，代码结构清晰且有测试通过，仅需代码审核。  
3. **PR #3222**（创建于2026-07-03，更新于2026-07-11，无维护者评论）— DeltaChat重构，-200LOC干净利落，建议尽快Review。  

**提醒：** 若持续忽略以上条目，可能导致社区贡献者积极性下降，甚至项目活跃度进一步衰退。  

---  
*📝 注：所有数据均来自过去24小时（含stale标记）的GitHub公开活动。报告生成于2026-07-12 00:00 UTC。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 NanoClaw 项目 (github.com/qwibitai/nanoclaw) 2026年7月11日至12日的数据生成的每日项目动态。

---

## NanoClaw 项目动态日报 | 2026-07-12

### 1. 今日速览

今日项目活跃度较高，社区贡献者提交了多个关键修复和功能特性。核心团队在「守卫动作」和「任务系统」两条主线上推动 **两个核心 PR** 的合并，标志着项目安全性和架构设计进入关键阶段。同时，**两个用户报告的 Bug 获得了快速响应 PR**，体现了对社区反馈的重视。但值得关注的是，issue 与 PR 的评论互动较少，沟通主要集中于技术实现而非广泛讨论。

-   **活跃度评估**: **高**。 PR 数量多且在关键领域有重要推进，Bug 修复响应迅速。

### 2. 版本发布

-   今日无新版本发布。

### 3. 项目进展

今日虽未有 PR 合并到主分支，但多个重要 PR 处于开放最后阶段，为后续的里程碑推进奠定了坚实基础。

-   **守卫动作 (Guarded Actions) 推进**: PR #2986 (`[core-team] Guard seam: one decision function for every privileged action`) 和 PR #2987 (`feat: /add-audit skill`) 是项目的核心安全工作。前者架构性地为所有特权操作（如文件系统访问、网络请求）创建了统一的决策点 (`guard()`)，后者则基于此架构实现了可选审计日志，为安全性和可观测性提供了基础。这标志项目从功能实现转向**安全治理**。
    -   [PR #2986 链接](https://github.com/nanocoai/nanoclaw/pull/2986)
    -   [PR #2987 链接](https://github.com/nanocoai/nanoclaw/pull/2987)

-   **任务系统 (Scheduled Tasks) 收尾**: PR #2988 (`[core-team] Tasks: one-door delivery`) 是「计划任务」系列的第三部分。它简化了任务系统的消息输出路径，强制所有发送行为都必须指定明确的目标 (`to`)，消除了默认回复路径，这使得任务系统更加清晰和可控。
    -   [PR #2988 链接](https://github.com/nanocoai/nanoclaw/pull/2988)

### 4. 社区热点

-   **PR #3020**: `fix(agent-runner): rescue undelivered unwrapped replies...`  该 PR 旨在修复一个长久以来的痛点：**模型在长工具调用链后忘记包裹回复内容，导致消息静默丢失**。此问题同时关联了 #2369, #2393 和 #2404，说明是影响面较广的回归问题，引发了核心开发者的重点关注。
    -   [PR #3020 链接](https://github.com/nanocoai/nanoclaw/pull/3020)

-   **PR #3018**: RFC: `temporal (incognito) sessions`  这是一个概念性的功能倡议，提出了「临时/匿名会话」的设想。虽然不被视为可合并的特性，但它提出了一个重要且可能广受社区欢迎的方向，为项目未来的路线图提供了有价值的讨论素材。
    -   [PR #3018 链接](https://github.com/nanocoai/nanoclaw/pull/3018)

### 5. Bug 与稳定性

今日报告了两个 Bug，且均已获得快速响应并有对应的修复 PR 提交。

-   **[严重] Windows 编译失败**: Issue #3017 报告了在最新 Visual Studio 2026 和 Node.js 环境下，编译 `better-sqlite3` v11.10.0 失败的问题。该问题直接影响 Windows 平台的开发者和用户，优先级极高。**目前暂无关联的修复 PR**。
    -   [Issue #3017 链接](https://github.com/nanocoai/nanoclaw/issues/3017)

-   **[中等] 误报配额错误日志**: Issue #3016 报告了 #2965 提交引入的回归问题：即使在 API 调用成功的情况下，`agent-runner` 也会错误地将每次 `rate_limit_event` 记录为配额（quota）错误。这会产生大量无用日志，干扰问题排查。
    -   **已有关联 PR**: 该问题与 PR #3020 的修复范围高度相关，可能已在其中得到解决。
    -   [Issue #3016 链接](https://github.com/nanocoai/nanoclaw/issues/3016)

-   **[严重] Agent Runner 30分钟无响应**: PR #3019 `fix(agent-runner): stall watchdog to recover from hung in-flight tools` 报告并修复了一个在生产环境中发现的关键问题：当有问题的工具调用挂起时，会导致整个 Agent 进程长达30分钟无任何 SDK 活动，最终被宿主系统杀死。此 PR 增加了进程内看门狗来主动恢复此类挂起工具。
    -   [PR #3019 链接](https://github.com/nanocoai/nanoclaw/pull/3019)

### 6. 功能请求与路线图信号

-   **临时/匿名会话**: PR #3018 以 RFC 形式提出的 `temporal (incognito) sessions`，是一种用完即弃、无记忆的 DM 会话模式。这符合一些隐私敏感或单次交互场景的需求。虽然作者声明这只是愿景分享，但其概念可能影响未来「计划任务」或「沙箱」功能的设计方向。
    -   [PR #3018 链接](https://github.com/nanocoai/nanoclaw/pull/3018)

-   **持久化记忆系统**: PR #3012 (`feat(memory): add provider-agnostic persistent memory`) 提供了一个与具体 AI 提供商无关的持久记忆框架。这是 Agent 实现长期上下文和个人化能力的基础设施，对提升用户体验至关重要。后续版本可能会与此整合。
    -   [PR #3012 链接](https://github.com/nanocoai/nanoclaw/pull/3012)

### 7. 用户反馈摘要

-   **用户痛点 (Bug 报告)**:
    -   **Windows 开发者**: 受 Issue #3017 影响，无法在最新的 Windows 开发环境上编译项目，阻碍了开发或部署工作。
    -   **生产环境用户**: 受 Issue #3016 影响，遭遇严重的日志污染。用户 “glifocat” 反映在一周内记录了 82 次误报，虽然不影响功能，但给运维带来了困扰。

-   **使用场景**:
    -   **审计合规**: 用户 “moshe-nanoco” 提交的 PR #2987 表明，企业或个人可能需要对 Agent 的敏感操作（如执行命令、访问文件）进行审计，这符合合规与安全需求。

### 8. 待处理积压

-   **Windows 编译问题 (#3017)**: 目前最紧迫的待处理积压项。该问题直接阻塞了 Windows 平台上的开发和用户使用，尚未有任何公开的修复进展或 PR。维护者应优先响应此问题。

-   **关键修复 PR 待合入**: PR #3020 (回复丢失修复)、PR #3019 (挂起工具修复) 和 PR #3012 (持久记忆) 均处于开放状态且已准备就绪，它们的合入对提升项目稳定性和功能完整性至关重要，应尽快完成审查与合并。

---
*数据截止于 2026-07-12 00:00 UTC。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为 **NullClaw** 项目生成的 2026 年 7 月 12 日动态日报。

---

# NullClaw 项目动态日报 | 2026-07-12

## 1. 今日速览

今日 NullClaw 项目处于一个相对安静的维护与功能讨论阶段。**活跃度指数：★★☆☆☆** (低)。过去 24 小时内，没有新的代码合并（PR）或版本发布，整体开发节奏放缓。社区活动集中在两个新增的 Issue 上：一个涉及关键性功能退化（Telegram Channel 空闲后不响应），另一个则是对新 Provider（Grok CLI）的呼声。这表明项目在稳定性和扩展性两个方向上收到了用户的实际反馈。

## 2. 版本发布

*无新版本发布。*

## 3. 项目进展

*无新的 Pull Request 被合并或关闭。*
项目核心代码库在过去 24 小时内处于静默期，未引入新的功能或修复。这表明开发团队可能正专注于其他优先级更高的事务，或处于下一个版本的开发周期中。

## 4. 社区热点

- **[热点 Issue #972] [Bug] Telegram channel stop respond after some idle time** ([链接](nullclaw/nullclaw Issue #972))
    - **评论数**: 3
    - **分析**: 这是当日最受关注的 Issue，累计获得了 3 条评论。用户反馈了严重的可靠性问题：Telegram 频道在空闲一夜后完全停止响应，但后端 `nullclaw` 进程仍显示运行正常。用户的痛点在于对项目“后台稳定、前端故障”的割裂体验感到困惑，这直接影响了其作为个人 AI 助手的可靠性。社区围绕此问题进行了讨论，但尚未形成明确的解决方案或临时工作区。

- **[备受讨论 Issue #975] Add grok-cli provider** ([链接](nullclaw/nullclaw Issue #975))
    - **分析**: 该功能请求提出后，迅速获得了 1 条评论（可视为初期讨论）。它反映了社区用户希望充分利用本地算力和现有订阅资源，通过复用项目已成熟的 `claude-cli` 模式来集成 Grok 服务。这本质上是用户对“低成本、无限量使用”的高质量 AI 模型接入的渴望。

## 5. Bug 与稳定性

| 严重程度 | Bug 描述 | Issue 链接 | 状态 | Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **高** | **Telegram Channel 空闲后停止响应，后端进程看似正常。** 可能导致用户错过重要通知或无法与助手交互。 | [#972](nullclaw/nullclaw Issue #972) | `OPEN` | 无 |
| 低 | 无其他功能性 Bug 报告。 | - | - | - |

**分析**：今日报告的 #972 是一个典型的“假死”或连接异常问题，可能涉及 Telegram Bot API 的长轮询机制、网络 keep-alive、或空连接数限制。尽管优先级高，但目前未有修复 PR 提交，维护团队需优先跟进。

## 6. 功能请求与路线图信号

- **功能请求**: **Grok CLI Provider** (Issue [#975](nullclaw/nullclaw Issue #975))
    - **用户诉求**: 利用本地 `grok` CLI 登录会话，实现不计量、免费的 AI 模型接入。
    - **路线图信号**: 该请求的成功模式（复用 `claude-cli`、`codex-cli` 的子进程模式）使实现难度较低。考虑到用户对低成本 Provider 的强烈兴趣，该功能有较大概率被纳入下一个小版本中。这符合 NullClaw 作为“代理型”工具，聚合多种模型源的核心定位。

## 7. 用户反馈摘要

- **痛点 (Bug 反馈)**: 用户 `i11010520` 报告了 Telegram 集成在长期运行时的不稳定问题（[#972](nullclaw/nullclaw Issue #972)），表明项目在长时间无人值守（“空闲”）场景下的可靠性有待提升。用户的核心不满在于后端无报错，但前端失联，排查难度高。
- **需求 (功能请求)**: 用户 `yanggf8` 提出增加 Grok 的支持（[#975](nullclaw/nullclaw Issue #975)），反映了两个关键用户画像：1) 对成本敏感，希望利用现有订阅的开发者；2) 偏好本地化、非计费模型接口的用户。此类需求与 `claude-cli` 等功能一脉相承，是社区生态扩展的积极信号。

## 8. 待处理积压

- **无新的严重积压 Issue**。项目维护者对新增的两个 Issue 都已做出响应（留有评论）。当前最值得关注的是 Issue #972 的修复进展，它直接影响核心功能的稳定性。建议维护者在下一个工作周期优先投入资源对此 Bug 进行定位和修复，以避免用户流失。

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域的开源项目分析师，根据您提供的IronClaw GitHub数据，我为您生成了2026年7月12日的项目动态日报。

---

### IronClaw 项目日报 — 2026年7月12日

---

#### 1. 今日速览

今日项目活动极为活跃，尤其在 Pull Request 方面，共有50条更新。然而，高活跃度下也暴露出一些关键挑战：大量PR（37条）处于待合并状态，表明项目在推进新功能（如扩展运行时、CI优化）的同时，代码审查和合并流程可能成为瓶颈。社区方面，用户反馈集中在开发者体验痛点上，包括安全性报告渠道缺失、Windows平台兼容性问题以及本地服务集成困难。**总体来看，项目处于高速迭代期，但技术债和用户体验问题需要优先关注。**

---

#### 2. 版本发布

今日无新版本发布。

---

#### 3. 项目进展

今日有13个PR被合并或关闭，主要推进了以下方面：

- **CI/CD 稳定性与自动化**：通过 `#6006` 和 `#6005` 修复了主分支 libSQL 覆盖检查的稳定性，并解决了 Slack 集成测试的竞态条件。`#6003` 虽然是一个误开启的PR，但已由维护者关闭。
- **测试与错误处理增强**：`#5997` 针对 E2E 测试的审查反馈进行了修复，提升了测试鲁棒性。`#5951` 修复了流式工具调用参数丢失的问题，对改善与特定模型的兼容性至关重要。
- **核心架构文档与功能**：`#6001` 将核心代理指南 (`AGENTS.md`) 重写为基于 Reborn 新架构的版本，是文档现代化的重要一步。

项目整体在**提升CI可靠性、修复关键Bug、以及文档现代化**方面迈出了坚实一步，但大量“待合并”的PR（如扩展运行时、新功能）仍是项目进展的最大不确定性因素。

#### 4. 社区热点

今日最受关注的议题集中在**安全性和跨平台兼容性**：

- **#6000 [OPEN] - 安全报告渠道缺失** [🔗](https://github.com/nearai/ironclaw/issues/6000)
    - **诉求**：贡献者 `Anubhav-Koul` 发现了一个潜在的运行时安全漏洞，但苦于项目没有 `SECURITY.md` 且禁用了GitHub私有漏洞报告功能，无法安全地私下报告。这直接影响了社区安全研究者的参与意愿和项目自身的信誉。
- **#5999 [OPEN] - Windows 平台路径兼容性** [🔗](https://github.com/nearai/ironclaw/issues/5999)
    - **诉求**：同样是 `Anubhav-Koul` 报告，`local-dev-yolo` 环境在 Windows 上完全无法启动，原因是代码中使用了 Unix 风格的 POSIX 路径假设。这暴露了项目在跨平台支持上的严重缺口。

> **分析师点评**：这两条Issue均来自同一位社区成员，且都直指项目的核心基础设施问题。缺乏安全报告渠道和跨平台支持是开源项目的重大隐患，亟需回应。

#### 5. Bug 与稳定性

今日报告的Bug主要集中在开发者体验和平台兼容性上，按严重程度排列如下：

| 严重程度 | Issue # | 摘要 | 是否有Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **高** | #5999 | Windows下 `local-dev-yolo` 因路径格式问题无法启动 | 无 | 阻止所有Windows开发者本地贡献，影响极大。 |
| **高** | #5998 | Reborn运行时无法连接本地 (on-device) MCP服务器 | 无 | 限制了代理在本地集成第三方服务的能力。 |
| **中** | #5968 | HTTP工具连接无MCP第三方接口（如Attio）时失败 | 无 | 降低了通用HTTP工具的实用性。 |
| **低** | #5969 | **已关闭**。GLM-5.2模型未默认列入opencode列表 | 已关闭 | 问题已通过手动配置解决，但建议加回默认列表。 |

#### 6. 功能请求与路线图信号

今日的新功能请求和已存在的PR共同指向了未来版本的几个方向：

- **更完善的API与原生集成能力**：`#5990` 提出了对 `Responses API` 的多项改进（语义保真度、生命周期安全等），`#6001` 和 `#5996` 则展示了项目正在构建强大的“扩展运行时”。这表明项目正致力于超越基础模型调用，构建更复杂的代理编排生态。
- **简化开发者体验的工具化**：`#5987` 请求一个本地代理服务，以简化安全证明流程，方便开发者进行私有推理。这与 `#5998` 对本地MCP支持的需求形成了呼应，说明社区不满于复杂的配置，期望获得“开箱即用”的本地开发工具。
- **秘密管理与安全性**：`#5934` 试图将管理员配置的秘密作用域限定在默认代理上，这是一个增强安全性和治理的信号。

#### 7. 用户反馈摘要

从今日的Issues和评论中，可以提炼出用户的主要反馈：

- **痛点：文档与实践之间的鸿沟**：用户（`sergeiest`）认为NEAR AI的证明文档“太复杂”，他们需要一个简单的本地代理服务来实现安全链接 (`#5987`)。
- **挫折：不完善的开箱即用体验**：模型不在默认列表 (`#5969`)、HTTP工具无法直接调用第三方API (`#5968`)、Windows环境无法启动 (`#5999`) 等问题，都指向了项目在易用性和平台覆盖度上的不足。
- **担忧：安全社区信任基础薄弱**：发现安全漏洞但无法私下报告 (`#6000`)，是社区对项目安全治理的直接质疑。
- **不满足：受限的本地开发能力**：无法与同机的MCP服务器通信 (`#5998`)，限制了开发者构建本地集成和测试的能力。

#### 8. 待处理积压

以下为长期未得到响应或解决，可能对项目健康度产生影响的议题：

- **#5639 [OPEN] - 主CI检查暂存版发布流程** [🔗](https://github.com/nearai/ironclaw/pull/5639) (创建于 2026-07-04)
    - 一个关于CI核心流程的大型PR，已存在8天，仍在待合并状态，可能阻塞其他CI相关任务。
- **#5598 [OPEN] - 发布新版本 (Chore)** [🔗](https://github.com/nearai/ironclaw/pull/5598) (创建于 2026-07-03)
    - 一个包含多个包（包括`ironclaw_common`和`ironclaw`）API破坏性变更的发行版PR，已搁置9天。拖延版本发布意味着社区无法获取这些破坏性变更，可能阻碍了其他依赖更新的工作。
- **#6000 [OPEN] - 安全报告渠道缺失** [🔗](https://github.com/nearai/ironclaw/issues/6000) (创建于 2026-07-11)
    - 此问题应被视为“待处理”中的最高优先级。缺少安全报告机制不仅会吓阻安全研究员，也可能导致0-day漏洞无法被及时修复。**项目维护者应立即添加 `SECURITY.md` 并启用私有漏洞报告功能。**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI 项目动态日报 — 2026-07-12

### 1. 今日速览

过去24小时内，项目未收到新提交的Issue或PR，也无版本发布。3条原有Issue和1条PR均被标记为“stale”，且仅在7月11日进行了状态更新（可能由自动化机器人触发），真实社区互动近乎停滞。整体活跃度处于极低水平，长期未响应的功能请求和Bug反馈仍未得到维护者关注，项目健康度需引起警惕。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

过去24小时内，无任何PR被合并或关闭。唯一处于打开状态的PR #1327（批量展开/折叠工具调用块）仍为待合并状态，项目核心功能推进未有实质进展。

---

### 4. 社区热点

由于过去24小时无新增讨论，主要热点仍为长期存在的功能增强请求。以下两个Issue获得了用户评论（各1条），反映了社区对交互效率的普遍诉求：

- **#1326 功能增强：ToolUse 工具调用块批量展开/折叠**  
  要求在一次AI回复包含多个工具调用时提供“展开/折叠全部”按钮，以替代逐个点击的繁琐操作。与PR #1327直接关联，但三个多月未合并。  
  [Issue #1326](https://github.com/netease-youdao/LobsterAI/issues/1326)

- **#1330 功能增强：会话列表错误状态红点徽标**  
  提出在侧边栏会话列表中为 `error` 状态添加红色圆点指示器，便于快速定位出错会话。  
  [Issue #1330](https://github.com/netease-youdao/LobsterAI/issues/1330)

两位用户（@MaoQianTu 和 @gongfen0121）均给出了详细方案，但维护方未在评论中回应，社区诉求长期悬而未决。

---

### 5. Bug 与稳定性

过去24小时内未报告新的Bug，仅有一条历史Bug仍处于打开状态：

- **#1329 新建的定时任务通知渠道没有选项，只能选不通知** (严重程度：中等)  
  用户反馈在v2026.4.1版本中，创建定时任务时通知渠道下拉菜单为空，无法选择通知方式。该问题影响功能完整性，至今已超3个月未修复，且无关联的fix PR。  
  [Issue #1329](https://github.com/netease-youdao/LobsterAI/issues/1329)

---

### 6. 功能请求与路线图信号

过去24小时内无新功能请求，但两个历史Issue（#1326、#1330）属于明确的UI/UX改进需求，且#1326已有对应PR #1327，若合并将显著提升Cowork会话中的工具使用体验。这些特性可能被纳入下一版本的候选清单，但当前缺乏维护者明确的时间表。

- **批量工具调用控制**（#1326 / PR #1327）：重构 `ToolCallGroup` 组件，新增 `forceExpanded` 属性，实现“展开/折叠全部”切换。  
- **错误状态可视化**（#1330）：在会话列表侧边栏为 `error` 状态添加红色圆点+光晕指示器，与现有运行/未读指示器保持视觉一致性。

---

### 7. 用户反馈摘要

从Issue评论中提取的用户痛点如下：

- @MaoQianTu（#1326）：“当AI回合包含多个工具调用块时，用户需要逐个点击每个工具块才能展开或折叠，操作繁琐，效率低下。”  
- @gongfen0121（#1329）：“新建的定时任务通知渠道没有选项，只能选不通知”，并附截图证实UI缺陷。  
- @MaoQianTu（#1330）：“侧边栏没有任何可视化提示，用户无法一眼识别哪个会话发生了错误，需要逐一点开查看，影响问题排查效率。”

三位用户均表达了具体的使用场景和明确改进建议，但均未获得维护者回复，反映出社区反馈链路存在阻塞。

---

### 8. 待处理积压

以下Issue和PR已长期未响应（创建于2026-04-02，标记为`stale`），建议维护者优先关注：

| 编号 | 类型 | 标题 | 状态 | 最后更新 | 链接 |
|------|------|------|------|----------|------|
| #1326 | Issue | 功能增强：ToolUse 工具调用块批量展开/折叠 | OPEN / stale | 2026-07-11 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1326) |
| #1327 | PR | 功能增强：ToolUse 工具调用块批量展开/折叠 (关联#1326) | OPEN / stale | 2026-07-11 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1327) |
| #1329 | Issue | Bug：新建的定时任务通知渠道没有选项 | OPEN / stale | 2026-07-11 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1329) |
| #1330 | Issue | 功能增强：会话列表错误状态红点徽标 | OPEN / stale | 2026-07-11 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1330) |

这些积压项均超过3个月未获实质性处理，且#1327的PR代码已就绪但未合并，可能成为社区信任度下降的风险点。

---

*注：本报告基于2026-07-11 23:59 UTC的数据生成。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-07-12

## 1. 今日速览
在过去的 24 小时内（数据截至 2026-07-11），Moltis 项目整体处于 **低活跃度** 状态：未产生任何新 Issue，无版本发布，唯一的活动是 **1 条待合并的 Pull Request**（编号 #1147）。该 PR 旨在修复 CalDAV 客户端 `list_events` 中时间范围参数失效的严重问题，表明项目仍在进行关键功能的可靠性改进，但社区互动和问题反馈量较低，整体节奏平稳偏缓。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无已合并或已关闭的 PR，项目推进主要集中在 **1 条开放中的 PR**：
- **#1147 (OPEN)** — `fix(caldav): honor time range in list_events via server-side calendar‑query`
  - **作者**: thoscut
  - **摘要**: 修复了 `CalDavClient::list_events` 中 `_range` 参数被绑定后未使用的错误。此前无论传入的 `start/end` 参数如何，客户端都会拉取日历中的所有资源，导致文档中声明的筛选功能完全失效。现在改为使用 CalDAV 的 `calendar-query` 协议在服务端过滤，正确实现了时间范围。
  - **意义**: 该修复直接提升了 CalDAV 集成的核心功能可靠性，解决了用户在使用 `list_events` 工具时可能因无法按时间筛选而导致的性能与数据污染问题。虽未合并，但已为下一版本的功能合规性铺平了道路。

## 4. 社区热点
今日 **唯一讨论对象** 即为 PR #1147，但该 PR 目前无任何评论反应（评论数: 0），未形成社区讨论热度。尽管如此，该 PR 的长期价值值得关注——它修正了文档与实现不一致的“静默 Bug”，触及对 CalDAV 协议的正确实现，可能吸引后续测试与反馈。

## 5. Bug 与稳定性
仅监测到 **1 个 Bug 修复**（位于 PR #1147），严重程度较高：
- **问题**：`list_events` 的 `start` 和 `end` 参数完全无效，客户端每次都会获取整个日历的所有事件，导致无论是性能（大数据量时）还是功能性（无法获取指定时段）均与实际需求不符。
- **当前状态**：已提交修复 PR（#1147），待审查合并。
- **影响范围**：所有使用 CalDAV 同步功能的用户，尤其是拥有大型日历或依赖时间筛选的场景。

无其他新报告的崩溃或回归问题。

## 6. 功能请求与路线图信号
今日未发现新的功能请求。PR #1147 本质属于 **协议合规性修复**，而非新功能需求。但可预见的是，在修复合并后，开发者可以更可靠地依赖 `list_events` 的时间筛选能力，这将为未来基于时间范围的高级功能（如日程重叠检测、周期性事件优化）奠定基础。

## 7. 用户反馈摘要
今日无用户评论或 Issue 反馈，故无法提炼真实用户痛点。建议后续关注 PR #1147 合并后的用户测试反馈，尤其是对大型日历服务（如 Apple、Nextcloud CalDAV）的实际效果。

## 8. 待处理积压
目前项目无长期未回应的 Issue 或 PR。唯一待处理项：
- **PR #1147**（[链接](https://github.com/moltis-org/moltis/pull/1147)）：已开放 1 天，无任何评论或指派。建议维护者尽快审查，此事关核心数据查询功能的正确性，避免因滞后导致更多用户困惑。

---
**项目健康度评估**：今日指标显示项目处于 **静默迭代期**，虽无活跃社区互动，但关键 Bug 的修复表明核心开发工作仍在持续。建议适当增加 Issue 引导或发布候选版本以激活社区测试。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，我已根据 CoPaw (github.com/agentscope-ai/CoPaw) 提供的 GitHub 数据，为您生成了 2026-07-12 的项目动态日报。

---

# CoPaw 项目动态日报 (2026-07-12)

## 1. 今日速览

今日 CoPaw 项目社区活跃度极高，但主要集中在报告和讨论 v2.0.0 版本引入的严重 Bug 上。过去 24 小时内，共有 24 条 Issue 更新，其中无一关闭，表明大量新问题被提出但尚未解决。虽然修复 UI 问题的 PR 尝试频繁（5 次关闭/合并，3 次为同一问题的重复修复），但核心的稳定性、兼容性和数据迁移问题依然严峻。此外，一个背景内存总结任务的模块缺失 Bug 和沙箱无限递归问题得到多位用户报告和确认，表明这些是高优先级问题。总体来看，项目处于 **高活跃、高压力** 的“发布后修复”阶段。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有多项修复工作通过 PR 推进，其中 4 个 PR 已被合并或关闭：
- **暗黑模式对比度修复**: 贡献者 **Marlin-Phone** 提交了多个针对暗黑模式下文字看不清的修复 PR（#5970, #5971, #5973, #5974 最终合并）。虽然多次尝试修复同一问题表明可能存在反复或代码审查的挑战，但最终成果已经落地，改善了前端 UI 体验。
- **技能列表滚动加载修复**: 贡献者 **feng183043996** 提交了 PR [#5968](https://github.com/agentscope-ai/QwenPaw/pull/5968)，修复了技能页面首次加载后无法滚动加载更多的问题，这对于拥有大量技能的用户至关重要。
- **工具结果截断标准化**: 贡献者 **niceIrene** 提交了 PR [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953)，旨在标准化对超大工具结果的处理方式，通过将其持久化到文件来避免上下文膨胀，这是提升 Agent 长期运行稳定性的关键改进。

尽管核心 Bug 修复进度稍慢，但社区贡献者正在积极填补空白。

## 4. 社区热点

今日讨论最热烈、影响面最广的 Issue 来自 v2.0.0 版本的严重稳定性问题：

- **#5951 [Bug] Windows 沙箱问题**: [链接](https://github.com/agentscope-ai/QwenPaw/issues/5951)
    - **热度**: 7 条评论，问题中详细列出了 pwsh 窗口递归爆炸、内存封顶 20GB、沙箱无法关闭等骇人症状，并被作者诊断为“不可用”，吸引了大量关注。
- **#5960 [Bug] 上下文压缩导致 API 400 错误**: [链接](https://github.com/agentscope-ai/QwenPaw/issues/5960)
    - **热度**: 2 条评论，但引发了“连锁反应”，被其他用户报告为 WeChat 和 heartbeat 恢复问题的根本原因（#5962, #5972）。这表明一个深层的代码缺陷正在影响多个功能模块。

**分析**: 社区的核心诉求已从功能请求转向 **稳定性和兼容性**。用户对 v2.0.0 版本寄予厚望，但发布后暴露出的严重 Bug（尤其是沙箱和上下文处理）正在消耗社区信任。开发者需要优先处理这些“热”问题。

## 5. Bug 与稳定性

今日报告的 Bug 数量较多，且严重程度较高，多数指向 v2.0.0 版本的回归或新引入问题。按严重程度排列如下：

- **严重 (系统不可用/数据损坏)**:
    - **#5951 - Windows 沙箱递归爆炸、内存泄漏**: 导致工具完全不可用，无关闭途径。严重性: **P0**。无 fix PR。
    - **#5961 - v2.0.0 循环执行问题**: 智能体重复写入/删除文件，无法完成简单任务。严重性: **P0**。无 fix PR。
    - **#5960/#5962 - 上下文压缩拆散 tool_call/tool_result 配对**: 导致 API 400 错误。严重性: **P0**。PR #5953 可能有帮助，但并非直接修复。
    - **#5980 - v2.0.0 缺失 SSH 离线、Profiles 404**: 从 v1.1.12 升级后核心功能丢失。严重性: **P1**。无 fix PR。
    - **#5964 - 升级后聊天列表映射关系丢失**: 导致 Web UI 点击会话返回 500 错误。严重性: **P1**。无 fix PR。
- **中等 (功能异常)**:
    - **#5952 - 自动内存模块缺失**: `No module named 'agentscope.tool._builtin._scripts'`。同样情况在 #5965 中也被报告为 `qwenpaw-backend.exe` 打包缺失。严重性: **P1**。已有认领。
    - **#5963 - `execute_shell_command` 硬编码 60秒超时**: 自定义 `shell_command_timeout` 配置被忽略。严重性: **P1**。无 fix PR。
    - **#5979 - Electron CLI 无法以 root 运行**: 沙箱映射机制与 Electron 安全策略冲突。严重性: **P2**。无 fix PR。
    - **#5977 - 插件 HTTP 路由在热重载后丢失**: 全局单例状态管理不当导致。严重性: **P2**。无 fix PR。
    - **#5981 - 模型搜索字段自动填充用户名**: 身份验证字段值错误地填入了模型搜索框。严重性: **P2**。无 fix PR。
- **低严重 (体验/兼容性问题)**:
    - **#5967 - 升级后 Pydantic 数据兼容性问题**: `parse_legacy_memory_state` 报错。严重性: **P1**。无 fix PR。
    - **#5969 - 暗黑模式文字看不清**: 多页面受影响。严重性: **P2**。**已有修复 PR 被合并**。
    - **#5978 - 自动内存因 session_id 包含非法字符失败**: 对特定渠道名（如 "telegram:xxx"）处理不当。严重性: **P2**。无 fix PR。

## 6. 功能请求与路线图信号

今日收到的功能请求数量不多，但体现了用户对精细控制和易用性的追求：

- **#5976 [Feature] 可分开设置 Channel 工具调用参数和结果信息的发送**: [链接](https://github.com/agentscope-ai/QwenPaw/issues/5976)
    - 用户希望单独控制工具调用结果的发送，并支持截断显示。这表明在工具调用频繁的场景下，信息过于冗长影响用户体验。
- **#4124 [Feature Request] 支持 OAuth 登录**: [链接](https://github.com/agentscope-ai/QwenPaw/issues/4124)
    - 虽然创建较早，但今日仍有更新，表明企业用户对基于 OAuth 的身份验证登录有持续需求。

**路线图信号**: 当前项目重点显然在于 **稳定 v2.0.0**。因此，除了解决现有 Blocking Bug，功能请求可能不会被优先考虑，但 `#5976` 这类提升可配置性的需求值得在后续版本中纳入设计讨论。`#4124` 的 OAuth 需求若与企业版规划相关，应重新评估优先级。

## 7. 用户反馈摘要

从今日的 Issues 和评论中，可以提炼出以下真实用户声音：

- **升级之痛**: “升级到 v2.0.0 后，XXX 功能完全不可用/报错。” 多位用户表达了对从 v1.x 升级到 v2.0.0 后遇到数据不兼容、功能丢失（#5964, #5967, #5980）的强烈不满。这是目前最大的用户痛点。
- **对沙箱机制的恐惧**: “没有任何途径关闭这个沙箱”、“pwsh 窗口无限递归弹出，关都关不掉”、“内存瞬间吃满”。用户对 #5951 描述得非常仔细，情绪焦虑，这是开箱即崩溃的体验。
- **对框架行为的困惑**: “智能体总会在反反复复的写入、删除、写入、删除，很长时间也不能完成一个简单任务！” (#5961)、“heartbeat 会恢复旧 session 状态，导致 tool 消息孤儿化” (#5972)。用户对 Agent 的异常行为感到困惑，并依赖开发者解释。
- **配置不生效的挫败感**: “shell_command_timeout 明明设置了，但命令还是 60 秒被杀死” (#5963)。用户对配置项失效感到沮丧。
- **安装/升级指导不清晰**: “我用了脚本安装升级，启动后还是 v1.1.12” (#5959)。官方提供的升级工具/脚本可能需要更清晰的指引或修复。
- **社区互助与引导**: 在 #5957 中，一位用户（AL-Mint）主动帮助遇到内部错误的用户收集诊断信息，体现了社区互助精神，但也反映出官方支持渠道可能需要更顺畅。

## 8. 待处理积压

以下 Issue 虽非今日创建，但近期的更新表明问题仍未解决或对当前版本有重要影响，提醒维护者关注：

1.  **#2664 - [Question] 支持 Intel Mac？** [链接](https://github.com/agentscope-ai/QwenPaw/issues/2664)
    - **状态**: 创建于 2026-03-31，今日仍有更新。
    - **提醒**: 这是一个积压了近 3 个半月的用户诉求。随着 v2.0.0 发布，用户群体扩大，这个问题可能再次被提起。项目需要明确是否支持或给出官方回应。
2.  **#5788 - [Question] 技能列表滚动加载无效** [链接](https://github.com/agentscope-ai/QwenPaw/issues/5788)
    - **状态**: 创建于 2026-07-05，今日有 PR #5968 提交修复。
    - **提醒**: 虽然已有修复 PR，但尚未合并。考虑到这是一个影响所有用户的基础功能，建议在下一个补丁版本中优先合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 ZeroClaw 项目数据生成的日报。

---

# ZeroClaw 项目动态日报 | 2026-07-12

## 1. 今日速览

ZeroClaw 项目今日处于高活跃度的冲刺状态。过去 24 小时内，Issue 和 PR 更新量均达到 50 条，社区和核心开发者都在密集推进工作。**关键信号**是：虽然活跃的 Issue/PR 数量庞大（接近 100），但当天无新版本发布，且仅有 1 个 PR 被合并/关闭，大量工作处于审查或待合并阶段，表明项目正为一次集中的稳定性和功能集成做准备。团队当前重心明确指向 **v0.8.3 里程碑**的发布，这从多个 `v0.8.3` 系列跟踪器（Tracker）和大量待合并的 PR 可以清楚看出。

## 2. 版本发布

**无**。今日无新版本发布。当前所有活跃的开发工作均指向 `v0.8.3` 里程碑。

## 3. 项目进展

今日项目进展主要体现在**关键 Bug 的修复代码已被提交**，但尚未合并。这表明修复工作已进入尾声，即将集成进入主分支。

- **核心运行时稳定性**：
    - 一个重大的运行时错误修复已提交 PR：**[#9007]** 修复了结构化的 Agent 历史（Structured History）修剪逻辑，防止因一次工具调用过多的回合导致上下文被意外截断，或出现孤立的函数调用结果。该修复采用“按完整回合”进行修剪，是提升长期对话稳定性的关键。
    - 另一个高优先级 Bug 的修复 PR **[#8654]** 也已提交，该 Bug 导致后台技能审查（skill-review）进程在工具密集型交互后发生 panic 并崩溃（SIGSEGV）。此问题直接影响 Agent 的稳定性，尤其在处理复杂任务时。
- **架构与治理**：
    - 核心贡献者开始关注项目管理流程的规范化。PR **[[#8986]](https://zeroclaw-labs/zeroclaw/pull/8986)** 提出了一个明确的里程碑生命周期策略，旨在通过设置软上限和领域专用里程碑来提升项目管理效率。

虽然今日没有功能被合并，但大量关键修复 PR 的提交 (`feat/` 和 `fix/` 分支) 标志着项目正从前期的功能开发转向**集成、测试和稳定性巩固**阶段，这对于发布 v0.8.3 版本至关重要。

## 4. 社区热点

今日社区讨论集中在两个核心领域：**多入口点的一致性**和**大型功能实现的分割与合并**。

- **热点 Issue #1：跨入口点工具可用性一致性问题**
    - **[Issue #8054]** 获得了 9 条评论。该 Issue 讨论的是一个核心 bug：系统提示（System Prompt）告诉推理模型“没有可用工具”，但实际请求中包含了原生/MCP 工具。虽然直接的运行时路径已修复，但该问题在 WebSocket、多模态等多个入口点仍然存在。这反映出社区对 Agent 行为在不同接入方式下的**一致性和可靠性**有较高要求，是影响用户体验的根本性问题。
- **热点 Issue #2：目标模式（Goal Mode）实现大任务拆分**
    - **[Issue #8681]** (9 条评论) 是一个大型功能实现的跟踪器。此举体现了项目在处理大型复杂功能时的成熟度：将 `feat/goal-mode` 分支中的大量代码拆分为多个可审查的 PR。这有助于提高代码审查质量，降低集成风险，是大型项目健康运作的标志。

## 5. Bug 与稳定性

今日报告的 Bug 中，高优先级（`priority:p1`）问题仍有数个，但大多已有修复 PR 或正在解决中。

| 严重程度 | Issue # | 问题描述 | 是否有 Fix PR | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **严重 (S1)** | **[#8654](https://zeroclaw-labs/zeroclaw/issues/8654)** | 技能审查子进程 panic 导致主进程 SIGSEGV 崩溃 | 是 (待合并) | `in-progress` |
| **严重 (S1)** | **[#8675](https://zeroclaw-labs/zeroclaw/issues/8675)** | 原生工具调用参数格式错误，导致 OpenRouter 等提供商返回 400 错误 | 否 | `accepted` (待认领) |
| **严重 (S1)** | **[#8563](https://zeroclaw-labs/zeroclaw/issues/8563)** | SOP 文件在 Web 仪表盘聊天会话中不可用 | 否 | `accepted` (待认领) |
| **严重 (S1)** | **[#5808](https://zeroclaw-labs/zeroclaw/issues/5808)** | 默认 32k 上下文预算被首次交互的系统提示和工具定义耗尽，导致持续被截断 | 否 | `in-progress` |
| **高 (P1)** | **[#8654](https://zeroclaw-labs/zeroclaw/issues/8654)** | 运行时崩溃 | 已修复 (待合并) | `in-progress` |
| **高 (P1)** | **[#8675](https://zeroclaw-labs/zeroclaw/issues/8675)** | Provider 通信错误 | 否 | `accepted` |

**总结**：稳定性方面，**技能审查子进程崩溃 (SIGSEGV)** 和 **提供者通信 400 错误** 是最紧迫的两个问题。值得关注的是，**默认上下文预算不足** (`#5808`) 是一个长期存在的架构问题，任何新安装的 ZeroClaw 用户都可能第一个交互就遇到体验问题，这会严重影响用户的初始印象，建议优先处理。

## 6. 功能请求与路线图信号

今日没有全新的功能请求，但一些已存在的功能请求进入了讨论活跃期，反映了社区对以下方面的持续兴趣：

- **多通道体验增强**：
    - **[Issue #8445]** ：为 Telegram 通道增加“每条 Agent 回复发送单独消息”的模式。这直接回应了用户对阅读体验的反馈，尤其是长回复场景。
    - **[Issue #8442]** ：为 Matrix 通道实现“单消息流式草稿”模式。此功能允许在草稿中流式展示思维链和工具调用过程，最终回复以独立消息发送。这表明社区在追求更精细的消息控制和更沉浸的交互体验。
- **运维与管理工具**：
    - **[Issue #8832]** 提出了一个“看板（Kanban）”视图，用于在 Web 仪表盘上可视化和管理 Agent 工作。这表明运行环境的用户（Operator）希望获得更像“工作台”而非简单聊天的管理体验，是产品走向成熟的一个标志。
- **Cron 调度能力**：
    - **[Issue #8409]** 要求 Cron 支持输出原始 stdout。这反映了高级用户将 Agent 作为自动化脚本引擎（而非纯聊天机器人）的需求。

这些功能请求可能会在 v0.8.3 之后的下一个迭代周期，或被纳入到诸如“Operator UX” (`#9009`) 等计划中被统筹考虑。

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中，可以提炼出一些真实的用户痛点：

- **“默认配置即陷阱”的挫败感**：**[Issue #5808]** 和 **[Issue #8054]** 的讨论表明，用户对于**开箱即用体验**的期待很高。默认的 32k 上下文预算让新用户上手即面临性能/行为异常的问题，而系统提示的不一致则让用户对 Agent 的行为感到困惑。这揭示了一个根本问题：默认配置需要更好地适配大多数场景。
- **“功能可用但缺文档”的困扰**：**[Issue #7762]** 明确指出 Cron 功能文档缺失，且用户无法配置 Cron 使用特定模型（低成本模型）。这表明，即使功能已被实现，但**不完善的文档和缺失的关键配置选项**会严重阻碍用户采用。
- **“单一通道实现不够灵活”的抱怨**：**[Issue #8445]** 的诉求表明，用户认为目前 Telegram 通道将所有 Agent 思维过程整合成一条消息的方式不够好。他们更希望分离“思考过程”和“最终输出”，这反映了**用户对信息处理方式的精细化控制需求**。

## 8. 待处理积压

以下 Issue/PR 长期未得到足够响应，可能成为项目进度的潜在阻塞点，建议维护者关注：

- **待决策的功能请求**：
    - **[Issue #7952]** (2026-06-19)：请求发布完整的“全通道（channels-full）”预构建资产。该请求已提交近一个月，标记为 `needs-maintainer-review`。这是一个关乎下游用户部署选择的议题，需要团队给出明确方向。
    - **[Issue #8134]** (2026-06-22)：请求实现 `session_ttl_hours` 配置参数以自动截断过期会话。同样标记为 `needs-maintainer-review`。此功能对需要7x24小时运行的生产环境用户至关重要。
- **待作者回应的 Bug 修复 PR**：
    - 大量标记为 `needs-author-action` 的 PR（如 **[#8838]**、**[#8866]**、**[#8848]** 等）正在等待作者回应审查意见或更新代码。这些 PR 大多修复高/中风险 Bug，其长期搁置会增加主分支的 Bug 累积风险。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*