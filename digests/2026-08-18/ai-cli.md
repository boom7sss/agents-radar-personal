# AI CLI 工具社区动态日报 2026-08-18

> 生成时间: 2026-08-18 10:57 UTC | 覆盖工具: 9 个

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

## 横向对比

# AI CLI 开发工具生态横向分析报告（2026-08-18）

---

## 1. 生态全景

当前 AI CLI 工具已进入**功能深化与稳定性博弈**阶段：各工具已度过"能否用"的基础期，社区反馈集中于 Windows/WSL 平台稳定性、MCP/OAuth 生态兼容、代理可靠性、权限模型精细化等"可用性"问题。多工具同步出现跨会话/多智能体协作基础设施的投入（Claude Code 跨会话消息、Qwen Code 多会话协作、Codex 权限持久化），预示下一阶段竞争焦点从单会话能力转向多会话编排。与此同时，计费透明性（OpenCode 配额异常）与成本优化（Pi 提示缓存 2.5 倍成本差）开始成为社区敏感议题，反映工具正从早期采用者向主流开发者渗透。

---

## 2. 各工具活跃度对比

| 工具 | 活跃 Issues | 重要 PR | Release | 社区热度指标（👍 最高） | 整体活跃度 |
|---|---|---|---|---|---|
| **Claude Code** | 10（当日热点） | 3 | v2.1.234 ✅ | 138（GitHub Connector bug） | ★★★★★ 极高，单 Issue 138 👍 |
| **OpenAI Codex** | 10 | 10 | rust-v0.148.0-alpha.21 ✅ | 64（TUI 多行状态栏） | ★★★★★ 极高，PR 密度最大 |
| **Gemini CLI** | 10 | 10 | v0.56.0-nightly ✅ | 35（新模型支持请求） | ★★★★☆ 高 |
| **GitHub Copilot CLI** | 10 | 1 | 无 | 17（SHIFT+ENTER 换行） | ★★★☆☆ 中等，PR 活跃度低 |
| **Qwen Code** | 10 | 10 | v0.21.11-nightly ✅ | 未提供 | ★★★★☆ 高，多会话协作密集迭代 |
| **Pi** | 10 | 10 | 无（0.84.x 为当前版本） | 46（Linux XDG 规范） | ★★★★☆ 高 |
| **OpenCode** | 10 | 10 | 无 | 28（/resume 与 /pause） | ★★★★☆ 高，PR 量大 |
| **Kimi Code CLI** | 2 | 2 | 无 | — | ★★☆☆☆ 低，活跃度明显低于其他工具 |
| **DeepSeek TUI** | 12 | 12 | v0.9.9 ✅ | — | ★★★★☆ 中高，CI 基建大幅加固 |

> 注：Claude Code 与 Codex 社区声量显著领先；Kimi Code 当日活跃度最低（2 Issue / 2 PR）。

---

## 3. 共同关注的功能方向

### 3.1 Windows / WSL 平台支持（最集中的痛点）
- **Claude Code**：Windows 桌面端崩溃后无法启动（#53247）、GPU 进程崩溃（#81840）、消息静默丢弃（#86298）
- **OpenAI Codex**：WSL Git 仓库误判（#35119）、PTY 启动失败（#37104）、unified_exec 路径解析失败（#22185）、底部面板消失（#25256）
- **Pi**：Windows 使用体验专题调查（#7547，28 评论）
- **Gemini CLI**：无直接 Windows 报告，但有沙箱网络问题（#28869）

### 3.2 MCP / OAuth 生态兼容性
- **Claude Code**：OAuth loopback 使用 127.0.0.1 破坏仅允许 localhost 的提供商（#86233）
- **Copilot CLI**：RFC 8414 issuer 校验导致 GitLab/Atlassian MCP 认证失败（#4439、#4480）、BigInt 序列化失败（#4211）
- **Codex**：MCP 工具包装为 `type:"namespace"` 导致自定义 Provider 无法调用（#23186，18 👍）
- **Pi**：Copilot 登录 429 限流反复（#7850、#8121）

### 3.3 权限模型精细化与安全
- **Claude Code**：Skills 重放导致意外 git push（#85138）、团队代理不触发权限 hooks（#82418）
- **Codex**：动态 shell 词要求审批（#39159）、线程恢复时权限配置丢失修复（#39153/#39145）
- **Gemini CLI**：Auto Memory 脱敏时机问题（#26525）
- **DeepSeek TUI**：批准结果持久化（#5491）

### 3.4 多会话 / 多智能体协作
- **Claude Code**：跨会话消息丢失回归（#86298、#86671）
- **Qwen Code**：跨会话消息传递（#8724）、独立会话协作设计文档（#9399）、live-session registry
- **Codex**：agents dashboard 快捷键（#39142）
- **Gemini CLI**：generalist agent 挂起（#21409）、子代理轮次误报（#22323）

### 3.5 会话 / 上下文生命周期管理
- **Copilot CLI**：指令文件热更新、AGENTS.md 重载、/resume 与 /pause（OpenCode #7226，28 👍）
- **Qwen Code**：/compress 后 UI 不刷新（#6806）
- **Pi**：冷恢复重放已清除消息（#7724）
- **OpenCode**：模型选择静默还原（#34207）

### 3.6 TUI / 交互体验优化
- **Codex**：多行状态栏（#21653，64 👍，全生态最高）
- **Copilot CLI**：SHIFT+ENTER 键盘习惯争议（#1481，28 评论）
- **OpenCode**：选中即复制与鼠标滚动解耦（#34063）
- **Pi**：主题切换颜色残留（#8212）、光标闪烁重置（#8155）
- **Qwen Code**：取消 prompt 后输入内容丢失（#8316，10 评论）

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 | 当前最大短板 |
|---|---|---|---|---|
| **Claude Code** | 全功能 Agent 开发平台（Cowork、Connector、Skills） | 企业开发者、深度 Agent 用户 | 功能面最广，横向扩展（桌面端、协作、技能系统） | Windows 桌面端稳定性 |
| **OpenAI Codex** | 轻量级 CLI + 桌面端 + 云端一体化 | API 生态开发者、ChatGPT 用户 | 与 OpenAI 模型深度绑定，Python SDK 同步发版、Guardian 审批机制 | WSL 生态支持、登录流 |
| **Gemini CLI** | 面向 Google 生态的 Agent 工具 | Google Cloud / Workspace 开发者 | 重视沙箱（gVisor）、ACP 协议、Auto Memory；迭代快（nightly） | 模型版本滞后、代理可靠性 |
| **Copilot CLI** | 企业级 Copilot 的 CLI 前端 | GitHub / Copilot Business 客户 | 与 GitHub 与 VS Code 生态绑定，MCP 整合积极 | MCP/OAuth 回归频繁、维护节奏慢 |
| **Qwen Code** | 自主 Agent + 自动化评审工作流 | CI/CD 重度用户、多智能体协作场景 | 自举开发（dogfooding），Autofix//review 管线极深，多会话协作推进最激进 | 自动化管线复杂度带来自身稳定性问题 |
| **OpenCode** | 多 Provider 聚合 CLI + Go 订阅服务 | 多模型混合用户、成本敏感用户 | 聚合中继（OpenCode Go）+ 本地 TUI 双轨 | 计费计量错误、文档与实际不一致 |
| **Pi** | 高性能开源 Rust TUI | 终端极客、多 Provider 高级用户 | Rust 单二进制、极致终端体验、配置灵活 | 原生 Linux 规范缺失、Windows 碎片化 |
| **Kimi Code CLI** | Kimi 生态的编码工具 | 中文开发者、量化/金融场景 | 社区生态小而美，Web UI 与多 Provider 支持在完善 | 活跃度低、多 Provider 渲染缺陷 |
| **DeepSeek TUI** | 轻量高性能 TUI 客户端 | 自托管/长上下文模型用户（DeepSeek V4） | Rust + 自托管优先，预算可配置、自动路由 | CI 红色、子 Agent 超时死锁 |

---

## 5. 社区热度与成熟度

| 阶段 | 工具 | 判断依据 |
|---|---|---|
| **成熟期（功能广、社区大、问题以深度优化为主）** | **Claude Code** | 单 Issue 138 👍，功能覆盖面最广，但 Windows 稳定性回归暴露维护压力 |
| | **OpenAI Codex** | PR 密度最大（10 个重要 PR/日），权限体系与安全加固方向成熟，TUI 需求反映用户长期使用后的精细化诉求 |
| **快速迭代期（版本频繁、基础设施持续加固）** | **Gemini CLI** | nightly 每日发版，大量 P1/P2 bug 修复并行，但代理可靠性仍是核心短板 |
| | **Qwen Code** | 多会话协作、/review 管线均在密集建设期，自举开发模式产生大量内部工具链议题 |
| | **OpenCode** | PR 量大、功能扩展活跃（RPC 重构、标签页、i18n），但计费问题侵蚀信任 |
| | **Pi** | 稳定迭代（0.84.x），议题集中在细节打磨与多 Provider 兼容 |
| **中等活跃（社区有量但迭代速度一般）** | **Copilot CLI** | 单日仅 1 个 PR，Issues 集中在 MCP 回归与配置管理，维护节奏偏慢 |
| | **DeepSeek TUI** | 社区活跃（12 Issue + 12 PR），但大量资源投入 CI 修复与 i18n，功能创新节奏一般 |
| **低活跃（生态尚在早期）** | **Kimi Code CLI** | 单日仅 2 Issue / 2 PR，社区声量远低于其他工具 |

---

## 6. 值得关注的趋势信号

**① Windows + WSL 是所有工具的"阿喀琉斯之踵"**
从 Claude Code 桌面端崩溃、Codex 的 WSL 系列问题到 Pi 的 Windows 体验调查，Windows 生态不是单一工具的短板，而是**全行业的系统性缺口**。对开发者：若你的团队以 Windows/WSL 为主，当前没有哪个 AI CLI 提供了无痛体验，选型时需重点验证目标工具在 Windows 下的具体表现。

**② MCP 标准还未成熟，兼容性问题成高频故障源**
Copilot CLI 的 RFC 8414 issuer 回归、Claude Code 的 loopback 地址问题、Codex 的 MCP 工具包装格式不兼容——三个工具在同一天出现不同类型的 MCP 生态问题。MCP 的"事实标准"地位已确立（所有主流工具都在整合），但实现层面的碎片化仍会让生态集成方（尤其是企业自建 MCP 服务器的团队）付出真金白银的适配成本。

**③ 多会话/多智能体协作是下一竞争焦点，但稳定性远未达标**
Claude Code 的跨会话消息连续回归（#86298、#86671）、Qwen Code 的多会话协作刚起步（#8724、#9399）、Gemini CLI 的 generalist agent 挂起（#21409）——各家都在押注这个方向，但用户体验仍处在"demo 可跑、生产不可靠"的阶段。对开发者的启示：**当前依赖跨会话协作特性的生产工作流需要额外冗余设计**（如状态检查与超时兜底）。

**④ 权限模型与安全边界将决定企业采用速度**
Claude Code 的 Skill 重放导致意外 git push、Codex 的线程恢复后权限丢失、Copilot CLI 的 `allowed_directories` 不生效——这些不只是 bug，而是**安全边界不可预测**的信号。企业选型时，工具的权限模型透明度和可预测性应被提为与编码能力同等重要的评估维度。

**⑤ 成本透明性与计费逻辑开始影响用户信任**
OpenCode 的配额显示偏差（4 倍差异）与重复扣款、Pi 的 2.5 倍成本差（缓存缺失）正在成为社区讨论热点。当 AI CLI 从"技术尝鲜"转向"每天付费使用"，**用量计量即产品的信任底座**。使用聚合订阅（如 OpenCode Go、GitHub Copilot Business）的团队应建立自己的用量核对机制。

**⑥ 自动化评审/CI 管线开始"自我工业化"**
Qwen Code 的 /review 与 Autofix 管线一天内 5+ 个 PR 落地、DeepSeek TUI 为全部 CI 任务添加超时上限——头部工具正在**用 AI Agent 测试和修复自身的 CI/CD**。这既是工具能力的展示，也反映一个行业趋势：CI/CD 自动化的下一轮升级将由 AI Agent 驱动，而非传统的脚本与插件。

**⑦ 中文语言市场正在成为新增长极**
DeepSeek TUI 全量中文化 EPIC（#5482）、Qwen Code 与 Kimi Code 的中文社区活跃、Pi 的 /settings 增加中英文切换（PR #8295）——中文开发者的 CLI 使用需求正在推动工具做本地化适配。对全球工具厂商而言，**中文语言支持不再是加分项，而是获取增量市场的必要条件**。

---

*报告基于 2026-08-18 各工具 GitHub 社区公开数据整理，链接均指向原始 Issue/PR 页面。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据截止：2026-08-18

---

## 1. 热门 Skills 排行（按社区关注度及讨论深度排序）

1. **skill-creator 评测机制修复**（PR #1298，OPEN）  
   修复 `run_eval.py` 在所有环境下恒报 0% recall 的严重缺陷（关联 Issue #556，10+ 独立复现）。这是 skill-creator 核心评测链路的根因问题，被 #1099、#1050 等多个 PR 分别从 Windows 管道、编码、触发检测等多角度围攻修复，社区投入最大。  
   https://github.com/anthropics/skills/pull/1298

2. **document-typography 排版质检 Skill**（PR #514，OPEN）  
   针对 AI 生成文档的排版质量问题（孤行、寡行、页脚悬空段落、编号错位），实用性强、通用性高，讨论热度居前。  
   https://github.com/anthropics/skills/pull/514

3. **testing-patterns 测试模式 Skill**（PR #723，OPEN）  
   覆盖完整测试技术栈：Testing Trophy 模型、单元测试 AAA 模式、测试命名规范、纯函数与边界场景等，回应社区对系统性测试能力的需求。  
   https://github.com/anthropics/skills/pull/723

4. **ServerNow 平台 Skill**（PR #568，OPEN）  
   面向企业级 ServiceNow 全平台助理，覆盖 ITSM/ITOM/ITAM/FSM/SPM/CSDM/IntegrationHub 等，更新至 2026-08-12 仍在迭代，关注度高但范围庞大。  
   https://github.com/anthropics/skills/pull/568

5. **ODT OpenDocument 处理 Skill**（PR #486，OPEN）  
   支持 .odt/.ods 的创建、读取、模板填充及 ODT→HTML 转换，补齐文档生态缺口。  
   https://github.com/anthropics/skills/pull/486

6. **skill-quality-analyzer & skill-security-analyzer 元 Skill 对**（PR #83，OPEN）  
   面向 Skills 自身的质量审计（五维评估）与安全审计，聚焦开发生态的自举与治理，反响持续。  
   https://github.com/anthropics/skills/pull/83

---

## 2. 社区需求趋势（从 Issue 提炼）

| 需求方向 | 代表 Issue | 说明 |
|---|---|---|
| **安全与信任治理** | #492（43 评论，最高）、#1175 | 社区最高声浪：anthropic/ 命名空间下分发社区 Skill 造成信任边界滥用，需官方鉴权/签名机制 |
| **组织内 Skill 共享协作** | #228（16 评论） | Chant.ai 内组织级 Skill 库/直接共享，替代手动下载 .skill 文件 |
| **Skill 评测与质量体系** | #556、#202 | run_eval.py 0% 触发率缺陷、skill-creator 更像文档而非可执行指令 |
| **运行时健壮性** | #62（Skill 消失报错）、#1487（claude-api 注入 156k token 撑爆上下文）、#1362（pnpm ≥10.1 构建失败） | 安装、注入体积、构建链路稳定性持续被诟病 |
| **能力扩展与治理论** | #1329（compact-memory 符号化压缩状态）、#1385（推理质量门流水线）、#412（agent-governance 治理模式） | 长上下文压舱、输出质量门、Agent 策略治理是领先用户预研方向 |
| **集成与标准化** | #16（Skills 暴露为 MCP）、#29（AWS Bedrock 用量） | Skills 与 MCP 协议统一、非 Claude 平台可移植性是长期呼声 |

---

## 3. 高潜力待合并 Skills（评论活跃、尚未合并）

- **document-typography**（#514）：修复 AI 文档排版通病，场景覆盖面最广，合并可直接服务大量普通用户。
- **testing-patterns**（#723）：测试方法论结构化输出，与主流工程实践高度契合，大概率被吸收进 example-skills 或官方集合。
- **skill-quality-analyzer + skill-security-analyzer**（#83）：为生态提供自检工具，是官方近期安全治理方向（对比 Issue #492）的自然呼应。
- **ServerNow 平台 Skill**（#568）：范围大但持续活跃，若拆分为子模块更易落地；企业用户关注度高。
- **service 生态修复类**（#538 pdf 文件名大小写、#541 docx w:id 冲突）：单点修复类 PR 评审成本低，合并速度快，近期落地概率高。

---

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是 **"从能用到可信"** ——一方面要求官方修复 skill-creator 评测与运行时稳定性等根基缺陷，另一方面强烈呼吁解决社区 Skill 在 anthropic/ 命名空间下的信任边界滥用问题，安全性话题现在是生态治理的头号优先级。

---

# Claude Code 社区动态日报 — 2026-08-18

## 今日速览

今日社区讨论热度集中于 Windows 桌面端跨会话消息丢失与显示异常问题（#86298、#86671），以及 GitHub Connector 在 Desktop 中不被识别的长期高赞 bug（#32479，86 评论 / 138 👍）。同时发布了 v2.1.234，新增 `CLAUDE_CODE_PROJECT_DIR_NAME` 环境变量和 `selection:clear` 键位绑定。

## 版本发布

**v2.1.234**
- 新增可选环境变量 `CLAUDE_CODE_PROJECT_DIR_NAME`：为每个会话分配独立配置目录的主机可为项目级 transcript 目录设置短名称
- 新增 `selection:clear` 键位绑定动作，可将某按键绑定为清除应用内选区

## 社区热点 Issues

1. **[#32479] GitHub Connector 在 Claude Desktop 中无法被识别** ⭐ 最热
   - 作者: Archibald1948 | 评论: 86 | 👍: 138
   - 创建于 3 月，至今仍开放，是近期社区关注度最高的问题之一。
   - [链接](https://github.com/anthropics/claude-code/issues/32479)

2. **[#86298] Windows 桌面端跨会话消息被静默丢弃（回归）**
   - 作者: arthurmoraesfernandes-afk | 评论: 18 | 👍: 1
   - 自 1.28929.0 起回归：消息因 UI 未提供的审批被挂起约 5 分钟后过期。含可复现步骤，属高频严重 bug。
   - [链接](https://github.com/anthropics/claude-code/issues/86298)

3. **[#53247] Claude Desktop 在 Windows 上崩溃后无法启动**
   - 作者: rnpacheco25-sudo | 评论: 19 | 👍: 12
   - 崩溃后遗留孤儿 Silo / Job Object，需注销或重启才能恢复（HRESULT 0x80070020），影响面大。
   - [链接](https://github.com/anthropics/claude-code/issues/53247)

4. **[#45480] Cowork 在 Windows ARM64 (Snapdragon X Plus) 上 VM 连接超时**
   - 作者: afram123 | 评论: 15 | 👍: 3
   - 已关闭（标记为重复）：30+ 次尝试零成功连接，说明 ARM64 平台支持仍是短板。
   - [链接](https://github.com/anthropics/claude-code/issues/45480)

5. **[#86671] 跨会话消息在目标会话中显示但模型从未收到（回归）**
   - 作者: Vincent-92 | 评论: 5 | 👍: 3
   - 与 #86298 相关但属于另一表现：消息入队失败，模型端无感知。
   - [链接](https://github.com/anthropics/claude-code/issues/86671)

6. **[#87554] `claude auth` 启动时以 100% CPU 无限旋转（Linux, Bun 运行时）**
   - 作者: dpalic | 评论: 3 | 👍: 0
   - 今日新报：疑似 `CLAUDE_CODE_OAUTH_TOKEN` 触发，`--version` 不受影响，无超时保护。
   - [链接](https://github.com/anthropics/claude-code/issues/87554)

7. **[#81840] 应用内浏览器面板导致 Desktop GPU 进程崩溃**
   - 作者: Holo-Eter | 评论: 7 | 👍: 0
   - 即使禁用硬件加速仍崩溃（exitCode 101457950），影响 Cowork 等特性使用。
   - [链接](https://github.com/anthropics/claude-code/issues/81840)

8. **[#86233] MCP OAuth loopback 使用 127.0.0.1 而非 localhost，破坏仅允许 localhost 回调的提供商**
   - 作者: alex-magill | 评论: 3 | 👍: 1
   - 实际案例（Salesforce），是 #69326 / #66511 未解决问题的重提。
   - [链接](https://github.com/anthropics/claude-code/issues/86233)

9. **[#85138] Skills 需要 frontmatter 选项来退出压缩后重放**
   - 作者: NubeBuster | 评论: 2 | 👍: 1
   - 压缩后 Skill 重放会重新执行过期的 `$ARGUMENTS`，造成真实世界的意外 git push。属安全隐患类需求。
   - [链接](https://github.com/anthropics/claude-code/issues/85138)

10. **[#82418] PermissionRequest hooks 对 agent-teams 队友不触发**
    - 作者: NubeBuster | 评论: 2 | 👍: 0
    - 同构建下子代理可触发，但团队代理进程不触发，权限体系不一致。
    - [链接](https://github.com/anthropics/claude-code/issues/82418)

## 重要 PR 进展

1. **[#79131] `validate-settings.sh` 在无小写 frontmatter 键匹配时不应中止**
   - 作者: Codeturion | 状态: OPEN
   - 修复 `grep` 返回 1 时 `set -euo pipefail` 导致脚本无诊断地退出。
   - [链接](https://github.com/anthropics/claude-code/pull/79131)

2. **[#72451] 移除 init-firewall.sh 中的 statsig.anthropic.com**
   - 作者: gmli-eu | 状态: CLOSED
   - 该主机名已不再解析，导致 devcontainer 启动时防火墙初始化失败。
   - [链接](https://github.com/anthropics/claude-code/pull/72451)

3. **[#87395] ralph-wiggum 插件使用 `disable-model-invocation` 防止模型自调用**
   - 作者: bcherny | 状态: CLOSED
   - 修正不支持的 `hide-from-slash-command-tool` frontmatter 字段，防止 Claude 自我触发 /ralph-loop。
   - [链接](https://github.com/anthropics/claude-code/pull/87395)

## 功能需求趋势

- **跨会话消息/协作基础设施**：多项 bug（#86298、#86671、#86962）围绕跨会话消息系统，说明该功能正在快速迭代但稳定性不足，社区关注度高。
- **Windows 桌面端稳定性**：启动崩溃（#53247）、GPU 进程崩溃（#81840）、跨会话消息丢失（#86298）集中指向 Windows 桌面端质量是当前最大短板。
- **安全与权限控制细化**：#85138（Skill 重放造成意外 git push）、#82418（团队代理不触发权限 hooks）反映开发者对权限边界的精细化需求。
- **MCP/Auth 生态兼容性**：#86233（OAuth loopback 地址）、#87554（认证启动挂起）显示 MCP 与 OAuth 集成仍是高频问题域。

## 开发者关注点

- **Windows 桌面端体验**：崩溃后无法恢复、消息静默丢弃（且用户无法感知直到 5 分钟后过期）、GPU 进程崩溃——社区对桌面端稳定性的反馈最强烈。
- **ARM64 支持缺口**：Windows ARM64 上 Cowork 完全不可用（#45480），新硬件用户被排除在外。
- **权限系统的可预测性**：同一构建下子代理与团队代理行为不一致、Skill 重放可能触发未预期的副作用，开发者需要更透明的权限边界控制。
- **CLAUDE_CODE_PROJECT_DIR_NAME 与 selection:clear**：环境变量细化配置和键位自定义的发布，符合社区此前对灵活配置与快捷键增强的长期期待。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-18

## 今日速览

今日社区动态主要围绕 **Windows 平台体验问题** 和 **浏览器插件信任校验失败** 两大焦点展开，相关 Issue 评论数与 👍 数持续攀升。代码方面，大量 PR 集中落地，涉及 **权限审批、TUI 稳定性、Python SDK 发布以及安全加固** 等关键方向，其中多个 PR 针对线程恢复时的权限状态丢失问题进行了系统性修复。

## 版本发布

### rust-v0.148.0-alpha.21
- 链接: https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21
- 更新内容: Release 0.148.0-alpha.21

## 社区热点 Issues

1. **Codex ChatGPT 登录流程受阻** (#24990) — 付费 ChatGPT Plus 用户无法通过官方 ChatGPT 登录流程访问 Codex（非 API Key 问题）。该 Issue 已持续近 3 个月，拥有 **27 条评论和 23 个 👍**，是当前社区声量最大的登录问题。
   https://github.com/openai/codex/issues/24990

2. **内置浏览器插件初始化失败：Trusted RPC 依赖不在信任代码路径内** (#39136) — Windows 上 Codex App 26.814.41407 的浏览器插件无法初始化，**今日创建即获得 23 条评论**，是当前最热的新 Issue，与 #21781、#39173 构成浏览器控制问题的系列反馈。
   https://github.com/openai/codex/issues/39136

3. **[WSL] 有效 WSL 仓库被标记为非 Git 仓库** (#35119) — Codex App 26.721.3404 在 WSL 环境下将有效 Git 仓库误判为非 Git 并报告 "Git is unavailable"，**21 条评论、17 个 👍**，影响 WSL 用户的核心开发流程。
   https://github.com/openai/codex/issues/35119

4. **Windows 桌面版底部面板闪烁后消失** (#25256) — 26.527.3686.0 版本中底部面板短暂闪烁后立即消失，问题持续近 3 个月仍在复现。
   https://github.com/openai/codex/issues/25256

5. **支持多行状态栏（TUI 增强）** (#21653) — 社区高票需求，**64 个 👍** 为今日所有 Issues 中最高，用户希望在 TUI 状态栏中支持换行以避免内容被截断。
   https://github.com/openai/codex/issues/21653

6. **Windows Desktop + WSL 下 unified_exec 调用 /bin/bash 失败（ENOENT）** (#22185) — WSL 工作区中工具调用因路径解析失败而中断，13 条评论、8 个 👍，波及 Pro 用户。
   https://github.com/openai/codex/issues/22185

7. **[WSL] 集成终端在 PTY/WSL 启动前静默失败；底部与侧边面板无法打开** (#37104) — 26.730.8199.0 新版回归问题，已标记 **Papercuts 2026**，12 条评论、8 个 👍。
   https://github.com/openai/codex/issues/37104

8. **zh-CN 翻译将 xhigh 与 ultra 推理强度均渲染为「极高」** (#31963) — i18n 本地化精度问题，中文用户无法区分 xhigh 与 ultra 两种推理档位，11 条评论。
   https://github.com/openai/codex/issues/31963

9. **Codex 将 MCP 工具包装为 type:"namespace" 导致自定义模型 Provider 无法调用** (#23186) — 使用自定义 `model_providers.X`（wire_api = "responses"）时，MCP 工具因包装格式不符合严格 schema 而不可用。**18 个 👍**，反映自定义模型 + MCP 组合的兼容痛点。
   https://github.com/openai/codex/issues/23186

10. **GPT-5.6 Sol 仍收到 272K max_context_window，长上下文未生效** (#39144) — 长上下文推出后 `gpt-5.6-sol` 未获得与 Terra/Luna 同等的 872K 窗口，今日新开 Issue，关注度上升中。
    https://github.com/openai/codex/issues/39144

## 重要 PR 进展

1. **Drop descendant progress updates after remote compaction** (#39176) — 远程 compaction v2 后排除子代任务的进度消息，避免无关更新残留。
   https://github.com/openai/codex/pull/39176

2. **Skip empty user messages for automatic idle turns** (#39174) — 自动空闲轮次采样时不再向输入队列添加空消息，优化空闲状态下的消息流。
   https://github.com/openai/codex/pull/39174

3. **Prevent marketplace identity spoofing** (#39165) — 安全加固：仓库清单与用户自定义源不得占用受管或远程 Marketplace 的保留名称。
   https://github.com/openai/codex/pull/39165

4. **Require approval for commands with dynamic shell words** (#39159) — 安全修复：Tree-sitter 无法区分的 brace expansion、glob、转义文本等动态 shell 词不再被视为字面 argv，将要求审批。
   https://github.com/openai/codex/pull/39159

5. **Notify clients when Guardian requires strict review** (#39157) — 新增实验性 `autoApprovalReview/strictReviewRequired` 应用服务器通知，携带 threadId、turnId 与 startedAtMs，提升审批协作透明度。
   https://github.com/openai/codex/pull/39157

6. **Prepare Python SDK 0.147.0 stable release** (#39155) — 将 `openai-codex` 固定至 0.147.0 CLI 运行时并重新生成协议模型与 lockfile，同时允许稳定版发布标签。
   https://github.com/openai/codex/pull/39155

7. **Box the TUI future to bound CLI stack usage** (#39154) — 将 TUI 启动 future 堆固定以限制 CLI dispatcher 的栈帧膨胀，并附带回归测试。
   https://github.com/openai/codex/pull/39154

8. **Restore permission profiles when resuming threads** (#39153) — 修复冷恢复和 fork 后权限配置文件丢失、回落到默认配置的问题。
   https://github.com/openai/codex/pull/39153

9. **Persist active permission profiles in turn context** (#39145) — 在 `TurnContextItem` 中新增 `active_permission_profile` 字段，持久化当前生效的内置或命名权限配置文件。
   https://github.com/openai/codex/pull/39145

10. **Add configurable shortcuts for the agents dashboard** (#39142) — 新增 `tui.keymap.global.open_agents` （默认 `alt-a`）快捷键打开共享 agents 面板，并引入 `agents` 键位上下文支持搜索、新任务、重命名、停止等操作。
    https://github.com/openai/codex/pull/39142

## 功能需求趋势

从今日 Issues 中提炼的社区关注方向：

- **Windows + WSL 支持完善**：WSL 仓库识别、PTY 启动失败、shell 路径解析等系列问题表明 Windows 生态是当前最大痛点（#35119、#22185、#37104）
- **浏览器自动化可靠性**：内置浏览器插件与 Chrome 扩展的信任校验频繁失败（#39136、#21781、#39173），社区对浏览器控制稳定性有较高期待
- **权限配置持久化**：线程恢复后审批设置丢失（#39153、#39145、#39147 对应修复）
- **TUI 可用性增强**：多行状态栏（#21653 的 64 👍）、快捷键自定义与 agents dashboard 进入（#39142）
- **自定义模型 / MCP 兼容性**：MCP 工具包装格式与命名空间的兼容问题持续成为集成障碍（#23186、#20652）
- **长上下文窗口一致性**：不同模型间上下文窗口配置存在差异（#39144），用户期望统一
- **本地化质量**：zh-CN 翻译精度需提升（#31963）

## 开发者关注点

- **WSL 环境是高频故障场景**：涉及 Git 识别、PTY 启动、shell 执行、面板显示等多个环节，建议 Codex 团队建立 WSL 专项回归测试矩阵
- **浏览器插件信任错误（Trusted RPC / browser-client is not trusted）出现模式化反馈**：多个用户在不同版本、不同插件类型上遇到同类信任校验失败，指向底层 RPC 信任机制或签名验证逻辑存在系统性问题
- **登录流体验待优化**：ChatGPT Plus 用户无法通过 ChatGPT 登录 Codex，问题持续近 3 个月未解决，严重阻碍新用户接入
- **MCP + 自定义模型组合不可用**：对于使用 OpenAI 兼容代理（Ollama、LiteLLM 等）的开发者，MCP 工具调用仍存在硬性阻塞
- **性能与资源问题**：MCP/Node 进程残留导致内存膨胀（最高 13.9 GiB）、并行 subagents 造成 token 放大和反复压缩等资源问题需要关注

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-18

## 今日速览

今日共发布 1 个 nightly 版本（v0.56.0-nightly.20260818.g194edea47），主要包含 SSR Agent 的隐私提示措辞优化及 TypeScript 严格空值错误修复。社区方面，关于 Gemini 3 新模型支持（Flash 3.5/3.6/3.7）的请求获得 35 个 👍 成为今日最受关注话题，同时有多项核心 P1 级 Bug 修复 PR 处于活跃状态。

## 版本发布

**v0.56.0-nightly.20260818.g194edea47**
- [SSR Agent] Issue Fix (26120)：澄清隐私提示措辞与选择选项
- [SSR Agent] Issue Fix (21919)：修复集成测试中的 TypeScript 严格空值错误

## 社区热点 Issues（Top 10）

### 1. [#28802](https://github.com/google-gemini/gemini-cli/issues/28802) — 请求支持最新 Gemini 模型（Flash 3.5/3.6/3.7）⭐ 35 👍
- **类型**: 功能增强（P3）
- **重要性**: 社区呼声最高，35 个 👍 表明用户对新模型接入的强烈需求
- **状态**: 开放，6 条评论

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist 代理挂起 ⚠️ P1
- **类型**: Bug（P1，8 👍）
- **重要性**: 核心稳定性问题——代理委托 generalist agent 后无限挂起，连简单操作（如创建文件夹）也会卡住，用户等了 1 小时仍无响应
- **状态**: 开放，8 条评论

### 3. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent MAX_TURNS 恢复被误报为 GOAL 成功
- **类型**: Bug（P1，2 👍）
- **重要性**: 代理结果误报问题——子代理达到最大轮次限制后仍报告成功，导致中断被隐藏，影响任务可靠性判断
- **状态**: 开放（待重测），12 条评论

### 4. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 不主动使用 skills 和 sub-agents
- **类型**: Bug（P2）
- **重要性**: 自定义技能/子代理的自动调用机制不佳，用户反馈需要显式指示才会使用
- **状态**: 开放（待重测），6 条评论

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知文件读取/搜索/映射的影响
- **类型**: 功能（P2，EPIC，1 👍）
- **重要性**: 探索 AST 感知工具是否能减少文件读取轮次、提升代码库导航效率
- **状态**: 开放，7 条评论

### 6. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令执行完成后卡在 "Waiting input" ⚠️ P1
- **类型**: Bug（P1，3 👍）
- **重要性**: 核心命令执行流程的稳定性问题，即使最简单的 shell 命令也会挂起
- **状态**: 开放，4 条评论

### 7. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 日志的确定性脱敏不足
- **类型**: Bug（P2，安全）
- **重要性**: Auto Memory 将本地对话记录发送给模型但脱敏发生在发送之后，存在敏感信息泄露风险
- **状态**: 开放，4 条评论

### 8. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 利用模型 bash 亲和力：零依赖 OS 沙箱
- **类型**: 功能增强（P2，1 👍，工作量大）
- **重要性**: Gemini 3 模型天然擅长链式使用 POSIX 工具，该提案建议通过沙箱和意图路由充分利用这一能力
- **状态**: 开放，8 条评论

### 9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 工具超过 400 个时触发 400 错误
- **类型**: Bug（P2）
- **重要性**: 工具数量上限问题，期望代理能更智能地限定启用工具范围
- **状态**: 开放（需补充信息），3 条评论

### 10. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 对低信号会话无限重试
- **类型**: Bug（P2）
- **重要性**: 后台提取代理对低价值会话反复重试，浪费资源
- **状态**: 开放，5 条评论

## 重要 PR 进展（Top 10）

### 1. [#28870](https://github.com/google-gemini/gemini-cli/pull/28870) — [已合并] 权限请求前发送 pending tool call 更新（P1，修复 #21783）
- **内容**: ACP 模式下请求用户确认前缺少 `tool_call` 更新通知，可能导致客户端状态不同步，此修复确保正确的事件顺序

### 2. [#28881](https://github.com/google-gemini/gemini-cli/pull/28881) — [开放] 修复 sendMessageStream 中内部 AbortError 的错误处理（P1，修复 #21752）
- **内容**: 超时触发的 AbortError（来自 `google-auth-library` 或 `node-fetch`）未被正确处理，可能导致请求错误被吞掉或错误终止

### 3. [#28873](https://github.com/google-gemini/gemini-cli/pull/28873) — [已合并] 防止 OAuth 回调超时时的未处理 Promise 拒绝（P1，修复 #28512）
- **内容**: OAuth 回调服务器 5 分钟超时后产生未捕获的 Promise 拒绝，影响认证流程稳定性

### 4. [#28876](https://github.com/google-gemini/gemini-cli/pull/28876) — [已合并] 处理 Cloud Shell 默认项目中缺失的 API（P2，安全，修复 #18062）
- **内容**: 在 Google Cloud Lab 账户的 Cloud Shell 中缺少默认项目 `cloudshell-gca` 时崩溃的问题

### 5. [#28883](https://github.com/google-gemini/gemini-cli/pull/28883) — [开放] 支持 symlink 形式的代理 markdown 文件（P2，修复 #20079）
- **内容**: 允许 `~/.gemini/agents/` 下的 symlink 文件被识别为自定义代理，提升配置灵活性

### 6. [#28882](https://github.com/google-gemini/gemini-cli/pull/28882) — [开放] 修复子代理交接 token 的启动回归（P2，修复 #28518）
- **内容**: 处理 `<session_context>` 头中包含 0 个输入 token 时的启动上下文设置问题

### 7. [#28884](https://github.com/google-gemini/gemini-cli/pull/28884) — [开放] 修复 rewind 与取消时 sticky 模型持久化问题（P2，修复 #23154）
- **内容**: 请求取消或回退后未清除 `currentSequenceModel` 的 sticky 状态，可能导致后续请求使用了错误的模型

### 8. [#28880](https://github.com/google-gemini/gemini-cli/pull/28880) — [开放] 退出外部编辑器后强制终端缓冲区重渲染（P2，修复 #24935）
- **内容**: 修复 terminalBuffer 模式下退出外部编辑器后终端画面损坏的问题

### 9. [#28877](https://github.com/google-gemini/gemini-cli/pull/28877) — [已合并] 防止统一流式内容上的误报循环检测（P2，修复 #18551）
- **内容**: 修复提交提示后流式响应重复内容被误判为死循环的问题

### 10. [#28869](https://github.com/google-gemini/gemini-cli/pull/28869) — [已合并] 修复 gVisor runsc 沙箱的主机网络解析（P2，修复 #21331)
- **内容**: 解决 `GEMINI_SANDBOX=runsc` 下 VSCode IDE 扩展无法连接的问题，gVisor 会限制主机 TCP 网络

## 功能需求趋势

基于今日所有 Issues 和 PR，社区最关注的方向包括：

1. **新模型支持**（#28802，35 👍）：用户对 Flash 3.5/3.6/3.7 的接入有极高需求，是当前社区最强烈的呼声
2. **代理稳定性**（#21409、#22323、#21968）：通用代理挂起、轮次上限误报、子代理/技能主动性不足等稳定性和行为问题占大量 P1/P2 条目
3. **安全与隐私**（#26525、#28873、#28876）：Auto Memory 脱敏、OAuth 回调、沙箱网络安全等问题持续受到关注
4. **沙箱与执行环境**（#19873、#28869）：gVisor 沙箱网络修复、零依赖 OS 沙箱提案，以及利用模型 bash 亲和力优化执行效率
5. **开发体验优化**（#28880、#28879）：终端渲染、上下文限制警告、外部编辑器集成等 UI/UX 细节修复
6. **扩展性**（#28883、#20079）：Agent 配置文件支持 symlink 链接，提升自定义代理的部署灵活性

## 开发者关注点

从今日社区反馈来看，开发者的核心痛点集中在以下几个方面：

1. **代理可靠性不足**：generalist agent 无限挂起、shell 命令执行后假死、子代理轮次上限误报为成功等核心稳定性问题严重影响了日常使用体验
2. **模型版本滞后**：对 Flash 3.5/3.6/3.7 等新模型的支持滞后于模型发布节奏，开发者希望第一时间体验新能力
3. **工具扩展性受限**：自定义代理/技能文件不支持 symlink、工具数量超过 400 个时出错等限制让高级用户部署自定义配置时遇到障碍
4. **安全与隐私透明性**：Auto Memory 在脱敏前发送本地对话内容、OAuth 超时兜底等安全问题引发开发者对数据安全的关注
5. **终端/IDE 集成细节**：终端缓冲区损坏、外部编辑器退出后的画面异常等细节问题虽然优先级较低，但反映了 IDE/终端集成体验仍有打磨空间

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 生成时间：2026-08-18*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-18

## 今日速览

今日无新版本发布，但社区围绕 **MCP OAuth 认证回归（1.0.79）** 的讨论持续升温，多个 Issue 指向同一根因（RFC 8414 issuer 不匹配）。此外，**模型目录缺失**（Anthropic 模型不可用）与**会话上下文管理**（指令热更新、AGENTS.md 重载）成为开发者最关心的两大方向。

---

## 社区热点 Issues（Top 10）

**1. [#4390 - 组织启用的模型在目录中缺失（Claude Sonnet 5/Opus 5 和 Kimi K3）](github/copilot-cli Issue #4390)** ⭐ 热度最高
- 状态：开放 | 评论 10 | 👍 7
- 核心：Copilot Business 组织显式启用的模型（全部 Anthropic 模型及 Kimi K3）在 CLI 目录中不可见，选择时直接失败。
- 社区反应：多条评论确认与组织策略/MCP 相关，涉及企业级部署的核心诉求。

**2. [#1481 - SHIFT + ENTER 应换行却执行提示（已关闭）](github/copilot-cli Issue #1481)** ⭐ 最老热帖
- 状态：已关闭 | 评论 28 | 👍 17
- 核心：用户期望 `SHIFT + ENTER` 换行（与主流聊天应用一致），但 CLI 用 `CTRL + ENTER` 换行、`SHIFT + ENTER` 直接执行。
- 社区反应：评论数最高，说明键盘交互习惯是高频痛点，关闭原因未明示。

**3. [#1480 - Atlassian MCP OAuth 失败：RFC 8414 不兼容（1.0.79 回归）](github/copilot-cli Issue #4480)**
- 状态：开放 | 评论 5 | 👍 6
- 核心：1.0.79 连接 Atlassian 远程 MCP 服务器时 OAuth 发现失败，报 `Incompatible authorization server`，1.0.71 正常。
- 社区反应：与 #4439（GitLab MCP 同样报错）高度相关，疑为同一 OAuth 校验逻辑回归。

**4. [#4439 - GitLab MCP OAuth 元数据被拒（RFC 8414 issuer 不匹配）](github/copilot-cli Issue #4439)**
- 状态：已关闭 | 评论 5 | 👍 3
- 核心：1.0.79 拒绝 GitLab Self-Managed MCP 服务器的 OAuth 元数据，RFC 8414 issuer 校验失败。
- 社区反应：与 #4480 互为印证，推测该版本 OAuth discovery 过于严格。

**5. [#4313 - 支持滚动浏览当前会话历史](github/copilot-cli Issue #4313)**
- 状态：开放 | 评论 8
- 核心：请求在交互界面中滚动查看历史对话内容。
- 社区反应：无反对意见，属于功能增强型诉求。

**6. [#4206 - 环境底部状态栏永久卡在 "Loading:"（组织 MCP 策略下）](github/copilot-cli Issue #4206)**
- 状态：已关闭（已 triaged） | 评论 4 | 👍 3
- 核心：1.0.73 在组织 MCP 策略下手握 GitHub MCP 握手停滞，`◎ Loading:` 永不完成。
- 社区反应：企业环境下可复现，与 #4390 可能同源（模型/策略加载失败）。

**7. [#4211 - Copilot CLI 无法处理 MCP 响应中的 BigInt](github/copilot-cli Issue #4211)**
- 状态：开放（已 triaged） | 评论 4 | 👍 2
- 核心：MCP 服务器返回大数字时，CLI 序列化失败（`Do not know how to serialize a BigInt`），所有任务中止。
- 社区反应：结构化数据兼容性问题，影响依赖数值型 MCP 工具的用户。

**8. [#4503 - SDK 服务器未认证就报就绪，Slack 会话创建失败](github/copilot-cli Issue #4503)**
- 状态：已关闭 | 评论 5
- 核心：SDK 服务器在无 `COPILOT_SDK_...` 认证信息时声称就绪，Slack DM 会话创建失败且错误信息泛化。
- 社区反应：反馈错误诊断困难，属集成场景稳定性问题。

**9. [#4438 - `disable-model-invocation: true` 技能完全不可达（非仅手动）](github/copilot-cli Issue #4438)**
- 状态：开放 | 评论 2 | 👍 2
- 核心：技能配置 `disable-model-invocation: true` 后，`skill()` 工具返回 "Not found"，与文档所述"仅手动"不符。
- 社区反应：技能系统行为与文档不一致，影响高级自定义。

**10. [#4513 - 插件市场缓存忽略 `ref`，跨项目分支冲突](github/copilot-cli Issue #4513)**
- 状态：开放 | 评论 1
- 核心：两个项目引用同一 git 市场源但 pin 不同分支时，CLI 复用同一磁盘缓存，导致版本错乱。
- 社区反应：新提交，多项目共用配置下的缓存一致性隐患。

---

## 重要 PR 进展

*注：过去 24 小时内仅 1 条 PR 更新，以下为全部内容。*

**[#4510 - 从 README 移除 GitHub Copilot CLI 文档](github/copilot-cli PR #4510)**
- 状态：开放 | 创建 2026-08-17
- 内容：删除 README 中关于 CLI 的详细安装与使用说明。
- 分析：该 PR 方向与维护者意图存疑（通常 README 是主要入口），建议关注后续讨论；若合入，用户文档入口将迁移。

---

## 功能需求趋势

从全部 Issues 中提炼出三大社区关注方向：

1. **MCP 生态兼容性**（最集中）
   - OAuth 认证（RFC 8414）在 1.0.79 出现回归，GitLab/Atlassian 均受影响（#4439、#4480）。
   - 结构化数据处理缺陷（BigInt #4211、`structuredContent` 重复暴露 #4515）。
   - 组织级 MCP 策略导致加载停滞（#4206）。

2. **会话与上下文生命周期管理**
   - 指令文件热更新：`.github/instructions` 与 `.claude/rules` 不支持会话中重载（#4508、#4440）。
   - `AGENTS.md` 启动后不重载且文档缺失（#812）。
   - 手动重命名被自动覆盖（#2622）。

3. **配置持久化与可观测性**
   - `--max-autopilot-continues` 仅限启动参数，无法在 `settings.json` 或 `/limits` 中调整（#4454）。
   - 会话 AIC（用量）显示不准（#4511）。
   - 权限目录 `allowed_directories` 未生效（#4482）。

---

## 开发者关注点（痛点与高频需求）

- **认证与 OAuth 稳定性**：1.0.79 的 RFC 8414 严格校验影响多家 MCP 服务商，优先级最高，需尽快确认修复计划。
- **键盘交互习惯**：`SHIFT + ENTER` vs `CTRL + ENTER` 的争议持续数周（#1481），反映 CLI 需对齐主流聊天工具心智模型。
- **企业部署可用性**：组织模型目录缺失、MCP 策略阻塞加载，直接影响 Copilot Business 客户的落地体验。
- **指令系统一致性**：多工具（Claude/CoPilot）指令重复维护成本高，社区期望跨工具读取 `.claude/rules`（#4440）。
- **长会话可靠性**：AIC 统计失真、指令不刷新、自动重命名覆盖，这些细节决定重度用户的留存量。
- **多项目缓存隔离**：插件市场缓存不分 `ref`，引发分支切换时配置污染（#4513）。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-18

> 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 今日速览

今日仓库动态较少，**无新版本发布**。社区活跃度主要集中在两个新提交的 Issue 上：一是 Web UI 在切换标签页或刷新后，针对非 Kimi（OpenAI 兼容）提供商的**消息渲染异常**问题；二是量化社区用户在 YouTube/B 站开源了 **K3 + Kimi Code 生成量化策略的完整基准测试报告**。此外，一个关于 **SSH 日志修复的 PR 已于今日关闭**，另有新的知识平面（knowledge plane）PR 提交。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 社区热点 Issues

过去 24 小时内更新仅 2 条，均列入下方：

### 1. [Web UI: 非 Kimi 提供商消息在页面切换/刷新后渲染异常（#2607）](https://github.com/MoonshotAI/kimi-cli/issues/2607)
- **作者**: chenxupeng1990-eng | 创建: 2026-08-18 | 💬 1 评论
- **重要性**: 高。该 Bug 影响使用自定义 OpenAI 兼容提供商的用户。问题描述：流式输出时渲染正常，但**任何页面重挂载**（如浏览器 Tab 切换后返回、刷新或重新打开会话）后，助手消息会**按行分割成碎片显示**，严重影响核心使用体验。
- **社区反应**: 目前评论数较少，但属于 Web UI 链路的基础功能缺陷，预计会引起较多使用第三方模型的用户关注。

### 2. [量化 K3 + Kimi Code 策略生成基准测试报告已开源（#2608）](https://github.com/MoonshotAI/kimi-cli/issues/2608)
- **作者**: frank-quant | 创建: 2026-08-18 | 💬 0 评论
- **重要性**: 中。作为社区应用案例，用户报告其两个视频使用 Kimi Code CLI 作为主要驱动（如 K3 + Kimi Code 编写 ETH 永续合约策略），并**开源了样本外量化策略生成的完整基准报告**。对关注 Kimi Code 实际编码能力（尤其是金融/量化场景）的开发者有参考价值。
- **社区反应**: 暂无评论，属于个人分享型议题，更像社区 Showcase 而非请求修复的 Bug。

---

## 重要 PR 进展

过去 24 小时内更新共 2 条，均列入下方：

### 1. [fix(kaos): 启用时记录 SSH 失败日志（#848）【已关闭】](https://github.com/MoonshotAI/kimi-cli/pull/848)
- **作者**: powerfooI | 创建: 2026-02-02 | 更新: 2026-08-18
- **内容**: 修复 kaos 组件在启用时 **SSH 失败未记录日志**的问题。该 PR 创建于 2 月，时隔数月后于今日合并关闭，属于**稳定性/可观测性修复**，对调试远程接入问题有帮助。

### 2. [Dev/knowledge plane（#2606）【开启中】](https://github.com/MoonshotAI/kimi-cli/pull/2606)
- **作者**: SoMiReMiReDo | 创建: 2026-08-18
- **内容**: 新提交的 PR，主题为"知识平面"（knowledge plane）。摘要中提示贡献者应先在 Issue 中与维护者讨论功能或 Bugfix 提议，目前该 PR **尚未获得维护者确认**，功能细节待进一步阅读代码或评论后确认。

---

## 功能需求趋势

基于当前更新的 Issues 样本，可以提炼出以下关注方向：

| 趋势方向 | 具体表现 | 相关 Issue |
|---|---|---|
| **Web UI / 多 Provider 兼容性** | 用户在 Web UI 中使用自定义 OpenAI 兼容端点，表现对**非 Kimi 模型的支持成熟度**有较高期待 | [#2607](https://github.com/MoonshotAI/kimi-cli/issues/2607) |
| **AI 辅助编码的实际应用评估** | 社区用户开始**系统性评测 Kimi Code CLI 在垂直领域（如量化策略）的表现**，并开源报告 | [#2608](https://github.com/MoonshotAI/kimi-cli/issues/2608) |

> 说明：由于今日 Issue 样本量极小，趋势判断主要依据单条 Issue 推断，更具代表性的趋势分析需结合更长周期数据。

---

## 开发者关注点

- **渲染稳定性问题**（高频痛点候选）：Web UI 中非 Kimi 模型的消息在组件重挂载后渲染损坏，直接关系到日常使用的**基础稳定性与可恢复性**，是当前最值得维护者优先处理的反馈。
- **远程操作可观测性**：SSH 失败无日志的问题虽已修复，但反映出部分开发者对**远程部署/执行链路掉线排障能力**要求较高，日志完整性是服务端开发者的常见诉求。
- **社区应用生态活跃**：有量化领域 KOL 主动使用 Kimi Code 制作教学视频并开源测试报告，说明 CLI 在**垂直场景的实用性**正被社区自发验证；维护者可关注此类案例并考虑建立官方 showcase 渠道。

---

*以上内容基于 GitHub 公开数据整理，链接指向原始 Issue/PR 页面。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-18

## 今日速览

今日社区讨论热度集中在 **OpenCode Go 订阅配额与实际用量严重不符** 的问题上，涉及多条高讨论量 Issue，疑似存在计费计量逻辑缺陷。同时多个关于 **DeepSeek V4 Flash 模型（含免费层）访问异常** 的反馈值得关注，此外一名贡献者提交了 **桌面端 IPC 重构为 Effect RPC** 的大改动 PR。

## 版本发布

过去 24 小时内无新版本发布。

## 社区热点 Issues

### 1. OpenCode Go 配额用量显示比 DeepSeek V4 Flash 实际成本高约 4 倍
- **链接**: [Issue #42985](https://github.com/anomalyco/opencode/issues/42985)
- **作者**: tnn226 | 评论: 13 | 👍 7
- **重要性**: 当前社区讨论度最高的 Issue，直指 OpenCode Go 用量计量与 DeepSeek V4 Flash 费用展示严重不匹配的核心计费问题，涉及用户真金白银，反馈强烈。

### 2. [WEB-UI] 无法开启新会话
- **链接**: [Issue #12627](https://github.com/anomalyco/opencode/issues/12627)
- **作者**: LeonMueller-OneAndOnly | 评论: 11 | 👍 6
- **重要性**: 长期未关闭的 Web UI 阻塞性 Bug，新会话中消息无法提交且会重复创建多个空白会话，直接影响核心使用流程。

### 3. 回答问题后模型选择被静默还原
- **链接**: [Issue #34207](https://github.com/anomalyco/opencode/issues/34207)
- **作者**: geril07 | 评论: 9 | 👍 2
- **重要性**: Agent 工作期间切换模型，在用户回答问题后被静默覆盖回原模型，属于交互状态的隐性 Bug，影响多模型协作体验。

### 4. [FEATURE] 将"选中即复制"与鼠标设置分离
- **链接**: [Issue #34063](https://github.com/anomalyco/opencode/issues/34063)
- **作者**: sporteka2 | 评论: 7 | 👍 3
- **重要性**: 当前 `mouse: true` 时选中文本自动复制无法关闭，`false` 时滚动也失效。社区需要一个独立的 `copy_on_select` 开关，属于高频编辑器交互需求。

### 5. gpt-5.6-luna 经 OpenCode Go 中继返回 403 Region 受限
- **链接**: [Issue #41518](https://github.com/anomalyco/opencode/issues/41518)
- **作者**: 123lyc5 | 评论: 7 | 👍 0
- **重要性**: 通过 OpenCode Go 代理访问 gpt-5.6-luna 返回 403 区域限制错误，反映区域策略与中继层配置的兼容性问题。

### 6. [FEATURE] 实现 /resume 与 /pause 命令
- **链接**: [Issue #7226](https://github.com/anomalyco/opencode/issues/7226)
- **作者**: zippeurfou | 评论: 7 | 👍 28
- **重要性**: 收获 28 个 👍 的长期功能请求（自今年 1 月提出），用户需要手动暂停/恢复会话以控制上下文和成本，呼声极高。

### 7. Go 套餐月度用量百分比与实际支出不一致
- **链接**: [Issue #43032](https://github.com/anomalyco/opencode/issues/43032)
- **作者**: AakashKay | 评论: 6 | 👍 2
- **重要性**: 与 #42985 同属计费异常反馈：$10/月套餐的月度用量百分比与消费面板显示不一致，进一步印证计费系统或存在系统性缺陷。

### 8. deepseek-v4-flash-free 持续 10+ 天报 429 FreeUsageLimitError
- **链接**: [Issue #42977](https://github.com/anomalyco/opencode/issues/42977)
- **作者**: paipaipai666 | 评论: 6 | 👍 1
- **重要性**: 免费模型 deepseek-v4-flash-free 连续 10 天以上对任何请求（包括最小请求）返回 429 限流错误，而其他免费模型正常，指向模型级配额状态异常。

### 9. OpenCode 不可用: Endpoint is unavailable
- **链接**: [Issue #43102](https://github.com/anomalyco/opencode/issues/43102)
- **作者**: agarbanzo | 评论: 5 | 👍 0
- **重要性**: 新会话中尝试两个模型均报上游端点不可用，疑似服务端局部故障，需排查与监控。

### 10. kimi k2.7 code 并非文档所声称的免费模型
- **链接**: [Issue #43215](https://github.com/anomalyco/opencode/issues/43215)
- **作者**: ahmoodiamorii-boop | 评论: 4 | 👍 0
- **重要性**: 文档声称可免费调用的 kimi k2.7 code 实际不可免费使用，文档与事实不符，属于误导性文档问题。

## 重要 PR 进展

### 1. refactor(desktop): 将 IPC 迁移至 Effect RPC
- **链接**: [PR #43207](https://github.com/anomalyco/opencode/pull/43207)
- **作者**: opencode-agent[bot] | 状态: OPEN
- **内容**: 使用 Effect 4 RPC（基于 MsgPack 帧的 MessagePort）替换桌面端 `ipcMain.handle`/`ipcRenderer.invoke` 通道接线，每个操作和事件流定义独立的 PascalCase `Rpc.make(...)` 对象，属于桌面端架构级重构。

### 2. fix(tui): 使用已解析的默认模型
- **链接**: [PR #43210](https://github.com/anomalyco/opencode/pull/43210)
- **作者**: tomg55555 | 状态: OPEN | Closes #43055
- **内容**: 在 TUI 中缓存服务端从 `GET /api/model/default` 返回的模型，修复默认模型解析不一致的问题。

### 3. feat(app): 添加标签页关闭操作
- **链接**: [PR #43211](https://github.com/anomalyco/opencode/pull/43211)
- **作者**: tjcafferkey | 状态: OPEN | Closes #41142
- **内容**: 为 OpenCode 标题栏标签页添加右键上下文菜单，支持关闭操作，完善桌面端多标签管理体验。

### 4. fix(tool): 跳过损坏的自定义工作区工具
- **链接**: [PR #37309](https://github.com/anomalyco/opencode/pull/37309)
- **作者**: Chewji9875 | 状态: OPEN | Fixes #37317
- **内容**: 启动时动态导入 `.opencode/tool/` 和 `.opencode/tools/` 中的自定义工具，若单个工具损坏导致整体启动失败，则优雅跳过而非崩溃。

### 5. fix(tool): 去除文件路径参数的首尾空白
- **链接**: [PR #43212](https://github.com/anomalyco/opencode/pull/43212)
- **作者**: Hexc01 | 状态: OPEN | Closes #43112
- **内容**: 本地模型有时会在文件路径参数中生成首尾空白或换行，该 PR 在传给工具前对路径做 trim，修复因路径格式导致的工具调用失败。

### 6. fix(opencode): 带抖动限制会话重试次数
- **链接**: [PR #41939](https://github.com/anomalyco/opencode/pull/41939)
- **作者**: rekram1-node | 状态: CLOSED | Closes #37076
- **内容**: 将高层会话重试策略上限设为 5 次并引入抖动，防止持久性故障下无休止重试。

### 7. feat(i18n): 跨语言环境添加 notebook memory 键
- **链接**: [PR #43066](https://github.com/anomalyco/opencode/pull/43066)
- **作者**: SaeedAqamiri | 状态: OPEN | Closes #43068
- **内容**: 为 notebook 记忆功能配套的 i18n 键独立先行合入，保证核心 PR #43058 的可审查性与可拆分性。

### 8. fix(opencode): 加速长会话 fork
- **链接**: [PR #41701](https://github.com/anomalyco/opencode/pull/41701)
- **作者**: evan-choi | 状态: OPEN | Closes #41698
- **内容**: 合成 986 条消息的会话 fork 时间从 4.3 秒降至 625 毫秒（约 7 倍提速），显著改善长会话操作体验。

### 9. fix(session): 防止成本计算遇到非数字 usage/cost 字段崩溃
- **链接**: [PR #43096](https://github.com/anomalyco/opencode/pull/43096)
- **作者**: macurandb | 状态: OPEN | Closes #43098
- **内容**: `getUsage` 将 `model.cost` 直接传给 decimal.js 计算，若上游返回非数字字段会导致崩溃，此 PR 增加守卫逻辑。

### 10. fix(client): 从消息列表查询中移除 order
- **链接**: [PR #43204](https://github.com/anomalyco/opencode/pull/43204)
- **作者**: Brendonovich | 状态: CLOSED
- **内容**: 从消息列表查询中移除排序参数，修复客户端查询问题。同日另一 PR #43191 将 Home 会话索引查询改为 query-local，避免污染共享 store。

## 功能需求趋势

- **会话生命周期管理**: `/resume` 与 `/pause` 命令获得 28 👍，是过去 24 小时内关注度最高的功能需求。用户需要暂停会话以控制上下文长度与成本，且多 worktree 场景下需要不丢失上下文的 `/cd` 目录切换（Issue #43198）。
- **精细化交互设置**: 将"选中即复制"与鼠标滚动解耦（Issue #34063），将 plan/build 模式切换恢复为 Tab 键操作（Issue #43201），反映用户对 TUI/桌面端交互的控制粒度要求更高。
- **语音输入支持**: 有人提议为 CLI 终端工具开发语音输入 MCP 服务器（Issue #41413），属于较前沿的交互方式探索。
- **账号与订阅管理**: 用户要求支持修改账户邮箱（Issue #42928），且大量配额/计费相关反馈表明需要更透明的用量管理界面。

## 开发者关注点

- **计费与配额是当前最大痛点**: OpenCode Go 订阅的用量显示与实际消费不一致（#42985、#43032、#43023、#43206），免费模型 deepseek-v4-flash-free 出现持续 10 天的 429 限流错误（#42977），甚至出现重复扣款（#43205），严重影响了用户对平台计费系统的信任。
- **模型可访问性有待加强**: gpt-5.6-luna 经 OpenCode Go 中继返回 403 区域错误（#41518）、kimi k2.7 code 文档与实际免费策略不符（#43215）、DeepSeek V4 Flash 间歇性输出乱码（#43181），多模型接入的稳定性与文档一致性需要改进。
- **会话稳定性问题频现**: Web UI 无法开启新会话（#12627）和上游端点不可用（#43102）反映出基础会话流程仍有阻塞性 Bug 需要优先修复。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-18

## 今日速览
今日 Pi 社区活跃度较高，核心热点集中在两个方向：一是 **Amazon Bedrock Mantle 新模型提供商的支持**（Issue #5363、#8232、#8302 多条相关讨论与 PR），社区对该功能呼声强烈（获得 15 👍）；二是 **GitHub Copilot 登录 429 限流问题**（Issue #7850、#8121）持续发酵，针对性的 PR #8254 已提出修复方案。此外，**主题切换后颜色残留**（#8212）、**长会话恢复后上下文错乱**（#7724）等 TUI 与上下文管理类问题也获得关注。

## 社区热点 Issues

1. **[#7547 — [Windows] How do you use Pi on windows?](https://github.com/earendil-works/pi/issues/7547)** — 28 评论
   深度调研帖，收集 Windows 用户的使用方式与问题，旨在确定修复优先级和文档优化方向。虽然 👍 数不高，但评论数高表明 Windows 平台用户基数庞大且体验痛点分散。

2. **[#5363 — Add amazon-bedrock-mantle provider for OpenAI-compatible models](https://github.com/earendil-works/pi/issues/5363)** — 16 评论，👍 15
   社区最高支持度需求之一。现有 `amazon-bedrock` 仅支持 Converse API，而 Bedrock 上的 GPT-5.x 等 Mantle 模型走 OpenAI 兼容接口，目前无法使用。

3. **[#534 — Config folder is out of place on Linux](https://github.com/earendil-works/pi/issues/534)** — 16 评论，👍 46
   长期悬而未决的规范性问题（已 CLOSED）：Pi 在 Linux 下将配置放在 `$HOME`，未遵循 XDG Base Directory 规范，引发社区广泛共鸣。

4. **[#7850 — GitHub Copilot login fails with 429 (Rate Limiting)](https://github.com/earendil-works/pi/issues/7850)** — 13 评论
   组织账户下大量激活模型导致登录限流。已 CLOSED，由 PR #8254 修复（提前获取模型目录、跳过已配置模型、限时重试）。

5. **[#3200 — Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200)** — 8 评论
   扩展 `prompt` RPC 命令，使其支持向 LLM 转发视频和音频内容（当前仅支持图片），反映多模态输入需求的增长。

6. **[#8166 — Custom message injected mid-tool-batch breaks tool_calls→tool adjacency (DeepSeek 400)](https://github.com/earendil-works/pi/issues/8166)** — 5 评论
   扩展注入的自定义消息导致后续轮次触发 DeepSeek 400 错误——`tool` 角色消息必须紧跟在 `tool_calls` 之后，属于扩展 API 的边界缺陷。

7. **[#7995 — openai-responses: no cacheControlFormat 'anthropic' support — 2.5x cost penalty](https://github.com/earendil-works/pi/issues/7995)** — 5 评论
   OpenRouter 的 870 次试验基准发现，`openai-responses` 实现缺少 Anthropic 风格提示缓存支持，导致经 OpenRouter 使用 Claude 的成本是其他 API 面的 2.5 倍。

8. **[#8121 — Getting error 429 Too Many Requests when logging in with Github Copilot](https://github.com/earendil-works/pi/issues/8121)** — 2 评论
   即使用户升级到 0.84.2（发布说明声称已修复），登录 Copilot 时仍遇到 429——原修复方案对某些场景无效，显示 #7850 的修复尚不完全。

9. **[#7724 — Cold restore replays an overflow assistant removed by live recovery](https://github.com/earendil-works/pi/issues/7724)** — 3 评论
   上下文溢出恢复后的冷重启会重新引入已被清除的溢出轮次消息，导致会话历史错乱。PR #8297 已针对性修复此问题。

10. **[#8212 — Theme switch leaves stale colors in header, tree labels, and markdown prefix](https://github.com/earendil-works/pi/issues/8212)** — 2 评论
   运行中切换主题后，页眉、树形标签和 Markdown 默认样式前缀残留旧主题色。PR #8249 已完成修复。

## 重要 PR 进展

1. **[#8254 — fix(ai): prevent copilot policy login rate limits](https://github.com/earendil-works/pi/pull/8254)** — 修复 #7850：在更新策略前拉取账号模型目录，仅更新已知且支持工具调用且未配置的模型，并在有界延迟内重试被限流的登录请求。

2. **[#8297 — fix(coding-agent): exclude superseded retry attempts from restored context](https://github.com/earendil-works/pi/pull/8297)** — 记录被成功重试替换的助手条目 ID，在 provider 上下文、压缩输入、token 预算及冷恢复中排除这些废弃条目，同时保留在 JSONL 历史中供审计。

3. **[#8302 — feat(ai): amazon bedrock mantle](https://github.com/earendil-works/pi/pull/8302)** — WIP，直接响应 #5363。修复 Mantle 模型（如 GPT-5.x）被错误路由至 Converse API 的问题，增加对 Mantle OpenAI 兼容接口的支持。

4. **[#8283 — fix(coding-agent): restore continuation after retry and compaction](https://github.com/earendil-works/pi/pull/8283)** — 修复重试流程中临时错误后新一轮重试被截断的边界情况，确保压缩与重试后能正确继续会话。

5. **[#8249 — fix(coding-agent,tui): refresh theme-derived text on invalidation](https://github.com/earendil-works/pi/pull/8249)** — 修复 #8212：UI 失效时基于当前主题重新计算顶部边框、资源板块和内置转录展示样式，同时保留展开状态与已捕获数据。

6. **[#8303 — fix(coding-agent): collapse tool result images until output is expanded](https://github.com/earendil-works/pi/pull/8303)** — 修复折叠状态下 Kitty/iTerm 图片组件仍被挂载的问题，无论 `showImages` 是否开启，折叠时不再渲染图片。

7. **[#8257 — Skip project-agent confirm when project is already trusted](https://github.com/earendil-works/pi/pull/8257)** — 修复 #8261：子代理扩展不再对已加入 `trust.json` 的仓库反复弹出信任确认对话框。

8. **[#8293 — fix(ai): keep Baseten GLM-5.2 text-only](https://github.com/earendil-works/pi/pull/8293)** — 修正 models.dev 对 Baseten GLM-5.2 / 5.2-Fast 的图像输入元数据误报，强制保持文本输入端点，避免无用图像参数。

9. **[#8287 — Replace the AI Gateway binding shim with a plain binding fetch](https://github.com/earendil-works/pi/pull/8287)** — 移除 `createGatewayBindingFetch()` shim，改用更简洁的 `createAiBindingFetch()`，简化架构并消除与 #7838 / #7901 相关的歧义。

10. **[#8295 — feat(coding-agent,tui): add locale switching via /settings](https://github.com/earendil-works/pi/pull/8295)** — 在 `/settings` 中新增语言选择子菜单（英文/简体中文），新增 `setLocale()` 持久化配置及 `supported-locales.ts` 校验模块。

## 功能需求趋势

- **新模型/提供商接入**：Amazon Bedrock Mantle（#5363）、Baseten GLM-5.2（#8293）、zai 平台 GLM-5.3 思考层级（#8190）——社区对新模型提供商的支持速度要求较高。
- **多模态内容支持**：`prompt` 命令支持视频/音频输入（#3200），反映多模态 LLM 应用的普及。
- **提示缓存优化**：`openai-responses` 缺失 `cacheControlFormat 'anthropic'` 导致成本翻倍（#7995），成本优化成为企业用户核心关注点。
- **TUI/UX 体验**：主题切换残留（#8212）、长会话滚动失效（#7043）、全屏闪烁（#8281）、光标闪烁重置（#8155）——终端界面细节打磨需求密集。
- **国际化**：/settings 中添加中英文切换（PR #8295），表明非英语用户群体正在扩大。
- **可扩展性**：AgentHarness 消息持久化前替换钩子（#8292）、可配置编辑器提示前缀（#8291）、自定义消息注入（#8166）——开发者希望在扩展 API 层面获得更多控制。

## 开发者关注点

- **Copilot 登录限流问题反复**：#7850 关闭后 0.84.2 仍复现（#8121），用户对"声称修复但实际未修复"的版本说明表达不满。
- **上下文管理与恢复可靠性**：#7724 冷恢复重放已清除消息、#8166 工具调用顺序破坏导致后续轮次 400 错误——会话一致性是核心开发体验的痛点。
- **Windows 平台体验碎片化**：#7547 暴露了大量 Windows 用户遇到的不同问题，平台支持策略需要更清晰的优先级。
- **成本敏感度上升**：#7995 中 2.5 倍成本差价的量化数据表明，企业用户对 API 成本差异十分敏感，提示缓存等优化机制成为关键需求。
- **Linux 配置规范**：#534 的高 👍 数（46）反映开发者对平台惯例（XDG 规范）的坚持，这类"小问题"长期未解决容易积累不满。
- **低质量/重复 Issue 增多**：#8286（本地回环成功但真实网络失败）、#8281（长转录全屏闪烁）等 bug 报告提交当天即被关闭，显示维护者 triage 效率高，但也侧面反映稳定性问题在 0.84.x 上仍不少见。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-18

## 今日速览

今日社区聚焦于**多会话协作（multi-session collaboration）**：nightly 版本新增 live-session registry 及 `qwen sessions ps` 命令，同时独立会话协作设计文档（PR #9399）与跨会话消息传递（Issue #8724）双双推进。此外，自动化评审（`/review`）与 Autofix 管线的健壮性修复（#9296、#9297、#9279 等）持续占据 PR 更新主力，显示社区正在系统性地硬化 CI 自动化链路。

---

## 版本发布

### v0.21.11-nightly.20260818.259951c53e

发布亮点：

- **feat(core): 新增 live-session registry 及 `qwen sessions ps` 命令**（PR #8969，作者 @qqqys）—— 为多会话管理与观测提供基础设施支撑，与今日多会话协作方向的多个 Issue/PR 形成呼应。

另有两条 EAS（End-to-end）基准验证 Release（dsw-eas-tb-smoke / dsw-eas-full 系列），基准参考版本为 v0.21.13；部分 full 验证运行状态为 **QUARANTINED**，建议关注后续结果写回。

---

## 社区热点 Issues（Top 10）

1. **#9194 — 测试固定（test-pin）缺口修补**（OPEN, P3, 评论 11）
   PR #9096 review 第 5–6 轮中，自动化评审标记了一批测试未充分固定其声明契约的问题（mutation 未能被捕获）。属非阻塞但真实存在的加固缺口，社区反应积极。
   [GitHub](https://github.com/QwenLM/qwen-code/issues/9194)

2. **#8718 — RFC: 独立 Qwen 会话的原生协调**（已关闭, P2, 评论 10, 路线图: multi-agent/background-automation）
   提议为多个独立 Qwen Code 会话增加显式的实验性协调路径：leader 可派发 2–3 个自包含 worker 并保持交互。**该 RFC 已关闭，落地成果体现于今日的 PR #9399（peer session collaboration 设计文档）与 #8724。**
   [GitHub](https://github.com/QwenLM/qwen-code/issues/8718)

3. **#7040 — RFC: 可靠的自动记忆召回（auto-memory recall）**（OPEN, P2, 评论 10, 路线图: context-performance/background-automation）
   跟踪记忆召回的时序、质量与遥测，含三阶段实施状态表（遥测已合并 #7393；首轮有界召回 + 确定性快速路径在评审 #8716）。社区对上下文性能方向持续高投入。
   [GitHub](https://github.com/QwenLM/qwen-code/issues/7040)

4. **#8724 — 跨会话消息传递**（OPEN, 评论 6, @qqqys）
   同一台机器上的两个 Qwen Code 会话可互相通信：`list_agents` 发现、`send_message` 定向发送。与 #8718 同属多会话协作方向，进一步细化交互协议。
   [GitHub](https://github.com/QwenLM/qwen-code/issues/8724)

5. **#9296 — Autofix: review-event 风暴与重复地址派发浪费 runner 容量**（OPEN, P1, 评论 4）
   实测 2026-08-16 约 3 小时内 ~500 次运行，**59% 被取消（294/500）**。发现四个效率/正确性问题：对已关闭/合并 PR 发起 review、重复地址派发等。P1 优先级，直接影响 CI 成本与可靠性。
   [GitHub](https://github.com/QwenLM/qwen-code/issues/9296)

6. **#9291 — 不支持的图片 MIME 可中止 Responses-compatible 会话**（已关闭, P2, 评论 4）
   真实 `.heic` 附件被接受并作为 `image/heic` data URI 转发至 endpoint，遭拒绝后导致整个会话中止。暴露了输入类型校验缺口，已关闭（修复完成）。
   [GitHub](https://github.com/QwenLM/qwen-code/issues/9291)

7. **#9282 — 手动团队任务分配持久化但不派发工作**（已关闭, P2, 评论 4）
   Leader 可将任务设为 `in_progress` 并指定 `owner: alice`，更新成功且持久化，但空闲的 Alice 收不到任何任务提示——唯一的派发路径只自动认领无主的 `pending` 任务。多智能体协作的派发语义存在断点。
   [GitHub](https://github.com/QwenLM/qwen-code/issues/9282)

8. **#8316 — 取消提示后输入框内容未恢复**（已关闭, 评论 10, @fantasyz）
   Ctrl+C 取消 prompt 后，已输入内容未恢复至输入框，用户需重新输入。经典交互缺陷，评论数高说明共鸣广泛，已关闭。
   [GitHub](https://github.com/QwenLM/qwen-code/issues/8316)

9. **#6806 — /compress 后状态行上下文百分比不刷新**（已关闭, P2, 评论 7, welcome-pr）
   `/compress` 或 `/compress-fast` 后，底部状态栏的上下文用量百分比未随 token 减少而更新。涉及 UI 渲染与 token 管理，已关闭。
   [GitHub](https://github.com/QwenLM/qwen-code/issues/6806)

10. **#9278 — /review 发布时收敛建议（publish-time convergence advisory）设计**（OPEN, P2, 评论 4）
    完整记录 `/review` 发布时收敛建议的设计与实测，核心问题是"失控回路"：push 触发评审 → 评审发 finding → agent 修复 → diff 变大引入新缺陷 → 下轮更大 diff 更多 finding。唯一阻尼器是 AGENTS.md 中"约 5 轮后收敛"的约定。与 #9296、多个 PR 同属评审管线硬化主题。
    [GitHub](https://github.com/QwenLM/qwen-code/issues/9278)

---

## 重要 PR 进展（Top 10）

1. **#9399 — docs: peer session collaboration design**（@yiliang114, 08-18）
   为**独立启动**（非 leader 派生）的 Qwen Code 会话间的协作添加设计文档，是 #8718 关闭后的直接落地成果。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/9399)

2. **#9027 — feat(cli): plain-prose /review comments**（@wenshao, autofix/takeover）
   `--comment` 发布的评审意见由模板口吻改为 reviewer 的自然口吻，评审文本拆分为两层，可读性成为发布标准。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/9027)

3. **#9221 — fix(review): verifier 探针移入私有 scratch worktree**（@wenshao, review/self-reported）
   评审 Step 4 的 verifier 是唯一"写"代理，此前所有探针写入共享 review worktree，现移入私有 scratch worktree，隔离副作用。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/9221)

4. **#9297 — fix(autofix): 将 BLOCKED 交接升级为一等轮次结果**（@wenshao）
   增长刹车（growth brake）触发时 `feedback.md` 指示地址代理以 `BLOCKED` 停止并交接，但轮次输出契约只接受 `address-summary.md` 或 `no-action.md`，导致遵循指令的轮次无法通过。补齐输出契约。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/9297)

5. **#9279 — feat(review): 发布边界强制执行已解析的严重级别下限**（@wenshao）
   当评审发布下限解析为 Critical-only 时，草稿集中仍携带的 Suggestion 内联评论不再被发布。与 #9259 的降级记录延期机制衔接。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/9279)

6. **#9092 — feat(review): 从磁盘状态恢复被中断的 PR 评审**（@wenshao, autofix/needs-human）
   `fetch-pr` 新增 `--resume`：自行裁决事实（上一份报告是否属于本 PR、worktree 是否仍在正确位置），基于会话台账基础恢复评审。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/9092)

7. **#9384 — feat(skills): find-simplifications 扫描技能**（@qqqys, autofix/takeover）
   仓库级 agent 技能，以慢节奏扫描无消费者的表面：死文件/组件、孤儿 locale key、无人调用的导出、无主脚手架。配套台账见 Issue #9375。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/9384)

8. **#8403 — feat(audit): 旧代码审计工作流**（@wenshao, autofix/takeover）
   实现设计于 #8397 的审计工作流：`/audit <directory> [--effort low|medium|high]`，无需 diff 或 PR 即可审计现有模块。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/8403)

9. **#8927 — feat(channels): sessionRotation 绑定会话生命周期**（@qwen-code-dev-bot, review/self-reported, autofix/needs-human）
   按通道新增 `sessionRotation` 选项，限制路由保持同一会话的时长；超限后下一条消息开启新会话。适合长连接通道的会话轮换治理。
   [GitHub](https://github.com/QwenLM/qwen-code/pull/8927)

10. **#9367 — feat(webui): HTML 导出查看器全局展开/折叠控制**（@yiliang114, 08-17）
       为 `ChatViewer` 组件添加可选"展开全部/折叠全部"工具栏，并在 `/export` HTML 模板中启用。
       [GitHub](https://github.com/QwenLM/qwen-code/pull/9367)

---

## 功能需求趋势

从今日活跃的 Issues 与 PR 中可提炼出以下核心方向：

1. **多会话协作与会话管理（最强信号）**
   - 新增 `qwen sessions ps` 命令与 live-session registry（Release v0.21.11-nightly）
   - 独立会话协作设计文档（#9399）与跨会话消息传递（#8724）同日推进
   - 多智能体任务派发语义修复（#9282）
   - 路线图标签 multi-agent / background-automation 高频出现

2. **自动化评审 / CI 管线硬化（Autofix & /review）**
   - 评审收敛回路失控的治理（#9278）
   - Runner 容量浪费与事件风暴修复（#9296，P1）
   - 评审恢复（#9092）、严重级别下限强制（#9279）、BLOCKED 交接一等化（#9297）

3. **上下文性能与记忆（context-performance）**
   - 自动记忆召回的设计与实施持续跟踪（#7040）
   - `/compress` 后 UI 刷新问题修复（#6806）

4. **UI 一致性与导出能力**
   - 跨 host 聊天记录契约预校验（#9354）
   - HTML 导出查看器全局展开/折叠（#9367）
   - 聊天面板在 web-shell / VSCode webview / desktop 三端统一（#5883）

5. **代码整洁度自动化**
   - find-simplifications 扫描技能（#9384 + #9375），以证据优先方式清理无消费者代码

---

## 开发者关注点

- **`/review` 与 Autofix 管线是当前最大的"痛点集中营"**：事件风暴、重复派发、runner 容量浪费、失控回路、BLOCKED 交接无法通过契约——多项 P1/P2 问题集中在自动化评审链路，社区（以 @wenshao、@qqqys 为主力）正高强度迭代修复。参考 #9296、#9297、#9278。

- **输入与状态恢复的交互细节**：取消 prompt 后输入内容丢失（#8316）、压缩后状态行不刷新（#6806）等 UI 细节问题评论数高，说明开发者对交互顺滑度敏感。

- **多会话/多智能体的"预期差"**：#9282 中 Leader 手动分配任务后 worker 收不到提示，暴露了派发语义与直觉不符的问题；#9291 中图片 MIME 校验缺失可致整个会话中止——输入边界校验是高频痛点。

- **文件权限与路径一致性**：#9250 指出 `qwen serve` 新建文件硬编码 0600 权限、忽略 umask 且不可配置；#9083 指出 `record_artifact` 的成功状态与底层 `status: "missing"` 不一致。这类"成功但实际未达成"的语义混乱值得关注。

- **渠道集成的长任务体验**：#9353 微信渠道在长任务中 typing 指示会过期，用户无法感知"对方正在输入"——外部渠道集成需适配平台自身的状态过期机制。

---

*数据来源：[QwenLM/qwen-code GitHub 仓库](https://github.com/QwenLM/qwen-code)，统计窗口为 2026-08-17 至 2026-08-18。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-18

## 今日速览

今日 CodeWhale（DeepSeek TUI）社区正式发布 **v0.9.9**，修复了窄终端指标显示、SSE UTF-8 分片解码错误等问题。**CI 基建显著加固**：为全部 10 个 CI 任务添加超时限制、修复发布门禁并发问题、隔离 Fleet 删除流程测试。国际化（i18n）字典主线持续推进，**中文文档本地化**成为社区新焦点（EPIC #5482）。

## 版本发布

**v0.9.9 正式发布**（PR #5499，已关闭）— 主要修复：
- 窄终端（<60 列）紧凑行指标显示问题（#5486）
- 同步根/TUI CHANGELOG 与公共贡献者鸣谢

此前一日已合并的关键修复亦随本版发布：SSE UTF-8 跨 HTTP/2 DATA 分片导致的乱码（#5374）、可配置模型可见读/工具结果预算（#5367）。

## 社区热点 Issues

1. **[#5505] `/new` 后系统提示词丢失**（已关闭，创建 2026-08-18）
   新会话后模型完全收不到系统提示词，仅收到折叠的 `<context_update>` 摘要行。直接影响项目指令传递，社区快速响应并关闭，属于高危 bug 快速修复。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5505)

2. **[#5424] v0.9.7 TUI 随机崩溃**（已关闭，评论 7）
   提示后等待输出约一分钟即自动退出。已关闭，说明已定位修复。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5424)

3. **[#5056] 验证器后台测试不稳定**（开放，评论 8）
   `run_verifiers_background_*` 两个测试在全量并行时持续 flaky，且有 12 个未分类的 `#[ignore]` 测试。测试可靠性是当前 CI 红色主因之一。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5056)

4. **[#5403] main 分支双平台全红**（开放，评论 3）
   #5395 修复 CI 互相取消后，四个已完成运行在 macOS/Windows 上均为红色：macOS 的 plugin_e2e_acceptance 与 Windows 的 NSIS provisioning 失败。发布门禁的持续性问题。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5403)

5. **[#5123] Agent 生成表面旋钮过多，builder 标签自阻塞**（开放，评论 7）
   Dogfood 实测（0.9.4）：标记为 `builder`/`gates-shell-writer` 的委托会话以只读运行并自我 BLOCKED。代理工作流 UX 设计缺陷，社区讨论活跃。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5123)

6. **[#5337] Web 字典主线收尾：消除全部 `isZh` 分支**（开放，评论 5）
   #4934 已为所有路由 locale 建立统一字典路径，剩余页面正文待迁移。社区持续推动 i18n 架构统一。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5337)

7. **[#5482] 文档全面中文化 EPIC**（开放，创建 2026-08-17）
   社区成员提出将 `docs/` 下英文文档审查、重构并完全本地化为中文——中文用户基数增长带来的真实需求。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5482)

8. **[#5350] 简化第三方模型配置，增加预制模板**（开放，评论 4）
   配置 OpenCode Zen、美团 Sensenova 等服务商时需手动填写 URL/模型名/密钥，且状态卡在 `not checked`/`cache failed`。建议内置模板 + 测试连接按钮。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5350)

9. **[#5311] v0.9.8：Kimi 级插件系统与联邦市场**（开放，评论 2）
   Codewhale 已有插件安全与安装基础，但尚未形成完整插件产品体验。社区期待插件市场生态。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5311)

10. **[#1425] 大文本处理工程后会话卡死**（开放，评论 7）
    分析 300 万字小说时，10 个子 Agent 因 `agent_wait` 超时导致会话中断。子 Agent 并发与超时机制是社区高频痛点。
    [链接](https://github.com/Hmbown/CodeWhale/issues/1425)

11. **[#5355] v0.9.8 已知问题：并行加载与配置 fixture flakes**（开放，评论 3）
    从 v0.9.7 收尾继承的调查篮：`exec_persistent_service::failed_exec_*` 并行加载 flake、`exact_turn_snapshot_restores_custom_endpoint` 等。
    [链接](https://github.com/Hmbown/CodeWhale/issues/5355)

12. **[#3957] v0.9.3 重构：拆分共享模态基础设施与独立视图**（开放，评论 4）
    `crates/tui/src/tui/views/mod.rs` 混杂通用模态基础设施、完整视图与测试，需拆分。架构清理类议题持续受关注。
    [链接](https://github.com/Hmbown/CodeWhale/issues/3957)

## 重要 PR 进展

1. **[#5504] feat(web): docs/hooks 与 docs/troubleshooting 迁移至字典主线**（开放）
   承接 #5337 系列，两个最小页面正文（各 12 个 `isZh` 分支）已完成迁移。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5504)

2. **[#5503] test(web): 解码路径启动部署预检脚本**（已关闭）
   `URL.pathname` 保持百分号编码，非 ASCII 字符检出路径下 spawn 失败。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5503)

3. **[#5500] test(ci): 加固发布门禁并发**（已关闭）
   序列化 `telemetry_contract` 进程、重试遥测 fixture 锁，消除竞态断言。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5500)

4. **[#5499] release: v0.9.9**（已关闭）
   正式发布 v0.9.9，同步根/TUI CHANGELOG 与贡献者鸣谢。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5499)

5. **[#5491] fix(tui): 执行前持久化批准结果**（开放）
   会话日志先持久化批准请求与终态，无法持久化则拒绝执行，拒绝过期决策。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5491)

6. **[#5495] ci: 全部任务添加超时上限**（已关闭）
   原 360 分钟默认超时导致死 runner 阻塞门禁长达 6 小时，现全部显式设置。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5495)

7. **[#5492] perf(skills): 保持配置技能提示词稳定**（已关闭）
   模型面目录中仅列出原生技能名称与描述，物理根路径替换为 `<configured-skills>`。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5492)

8. **[#5498] test(fleet): 删除流程与用户状态隔离**（已关闭）
   临时 `CODEWHALE_HOME` 隔离删除确认测试，避免读取维护者真实 Fleets。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5498)

9. **[#5404] fix(client): SSE UTF-8 跨 HTTP/2 DATA 分片 fail-closed**（已关闭）
   修复 macOS 上 DeepSeek Flash 流式文本乱码（U+FFFD/CJK）。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5404)

10. **[#5494] feat(config): auto-router 分类器超时可配置**（已关闭）
    `[auto.router] timeout_secs` 替代硬编码超时。
    [链接](https://github.com/Hmbown/CodeWhale/pull/5494)

11. **[#5493] fix(pricing): OrcaRouter 归类为聚合计费面**（已关闭）
    此前落至 first-party PAYG 误标，OrcaRouter 为零加价路由/聚合器。
    [链接](https://github.com/Hmbown/CodeWhale/pull/5493)

12. **[#5405] feat(tui): 可配置模型可见读/工具结果预算**（已关闭）
    自托管长上下文 DeepSeek V4 用户此前受限于保守上限（read 50 KiB、工具结果 12,000 字符）。
    [链接](https://github.com/Hmbown/CodeWhale/pull/5405)

## 功能需求趋势

- **i18n 与本地化深化**：从 Web 字典主线（#5337、#5504）到中文文档全面本地化（#5482），国际化是当前最活跃方向。
- **CI/发布可靠性基建**：超时上限（#5495）、发布门禁并发（#5500）、并发测试隔离（#5498）——测试稳定性是持续的痛点。
- **模型/路由可配置性**：auto-router 超时（#5494）、读取/工具结果预算（#5405）、第三方模型预制模板（#5350）。
- **插件生态建设**：Kimi 级插件系统与联邦市场（#5311）被明确提出。
- **Agent 工作流 UX 设计**：Agent 生成表面旋钮过多（#5123）、批准结果持久化（#5491）等。

## 开发者关注点

- **子 Agent 超时与会话卡死**（#1425）：大批量任务拆分子 Agent 时 `agent_wait` 超时导致死锁，高热度。
- **系统提示词可靠性**（#5505）：`/new` 后模型失去项目指令，核心功能信任问题。
- **测试与 CI 红色状态**（#5403、#5056）：双平台门禁持续失败，影响发布节奏。
- **配置体验**（#5350、#4683）：第三方服务商配置繁琐且状态反馈不清晰；DeepSeek completions URL 网络错误波动（#4683）。
- **SSH/沙箱网络限制**（#1829）：TUI shell 沙箱疑似阻断 TCP 22 出站导致 SSH 失败。
- **大上下文/长文本场景**（#125 系列、#5405）：300 万字级文本分析、长上下文模型预算受限，高性能场景是社区重度用户的关注重点。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*