# AI CLI 工具社区动态日报 2026-07-13

> 生成时间: 2026-07-13 03:35 UTC | 覆盖工具: 9 个

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

好的，各位技术决策者和开发者，以下是对2026年7月13日主流AI CLI工具社区动态的横向对比分析报告。

---

### **AI CLI 工具生态横向分析报告 (2026-07-13)**

#### **1. 生态全景**

当前AI CLI工具的开发者社区正经历从“尝鲜期”向“生产期”过渡的阵痛与繁荣。核心矛盾集中在三个方面：**一是基础稳定性与性能**（如卡死、崩溃、日志风暴）成为所有工具的通病，直接影响工作流信任度；**二是对新模型与平台（特别是GPT-5.6系列）的适配滞后**，导致兼容性Bug频发，暴露出工具架构对新模型的快速响应能力不足；**三是Agent系统的自治性与可控性之间的平衡**，社区既要求Agent（子代理/多智能体）更智能，又对行为黑盒（如假性成功、不遵循配置）感到困扰。整体来看，社区活跃度极高，技术迭代速度与用户对稳定性的期待之间存在显著鸿沟。

#### **2. 各工具活跃度对比**

| 工具名称 | 今日精选 Issues (条) | 重要 PR 进展 (条) | 版本发布 | 社区参与度 (👍/💬 热度参考) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 3 | 无 | 极高 (单个Issue获645👍) |
| **OpenAI Codex** | 10 | 5 | 无 | 高 (多个Issue获100+👍，讨论深入) |
| **Gemini CLI** | 10 | 10 | 1 (Nightly) | 中等偏高 (EPIC讨论活跃) |
| **GitHub Copilot CLI** | 10 | 1 | 无 | 高 (特定Bug关注度高，如#4069) |
| **Kimi Code CLI** | 1 | 2 | 无 | 低 (社区活跃度较低) |
| **OpenCode** | 10 | 10 | 无 | 极高 (50+ Issue/PR更新，讨论热烈) |
| **Pi** | 10 | 10 | 无 | 高 (技术讨论深入，涉及架构底层) |
| **Qwen Code** | 10 | 10 | 无 | 中等 (核心技术讨论多，CI问题突出) |
| **DeepSeek TUI** | 3 | 7 | 无 | 中等 (活跃度集中于特定修复和扩展) |

**分析**:
*   **Claude Code** 和 **OpenCode** 是今日社区声量最大的两个工具，前者因一个高票功能需求（多账户）引爆社区，后者则因大量长期Bug被集中关闭而活跃。
*   **OpenAI Codex** 和 **GitHub Copilot CLI** 的Bug报告更具“杀伤力”，直指核心功能（模型兼容、TUI假死）的稳定性问题。
*   **Pi** 和 **Gemini CLI** 的讨论技术深度较高，涉及Agent会话管理和架构重构。
*   **Kimi Code CLI** 和 **DeepSeek TUI** 虽然更新数量不多，但内容均指向关键的兼容性和平台适配问题，属于小而精的迭代。

#### **3. 共同关注的功能方向**

多工具社区同时涌现出以下共性需求，说明这些是当前AI CLI工具的通用痛点：

*   **性能与稳定性（“杀手级”Bug）**
    *   **Claude Code**: VS Code扩展周期性卡顿90秒。
    *   **OpenAI Codex**: SQLite日志写入量过大，消耗SSD寿命。
    *   **GitHub Copilot CLI**: TUI输入假死，会话恢复导致文件损坏。
    *   **Qwen Code**: 终端退出后乱码，CI测试稳定性问题。
    *   **Pi**: TUI双重复渲染问题。
    *   **Gemini CLI**: Agent卡死、Shell命令执行后无响应。
    *   **共识**: 社区对“能用”的标准已从功能完善转向极致稳定。任何卡顿、崩溃或资源泄漏都会被视为严重缺陷。

*   **IDE环境集成与稳定性**
    *   **Claude Code**: VS Code、IntelliJ、Chrome扩展的一系列连接、性能BUG。
    *   **OpenAI Codex**: VS Code扩展在大型工作区耗尽inotify监控资源。
    *   **GitHub Copilot CLI**: Windows下因VS Code句柄锁定导致插件更新失败。
    *   **共识**: 开发者对IDE深度集成的依赖日益加深，集成层的稳定性是工具进入生产环境的前提。

*   **认证、权限与配置管理**
    *   **Claude Code**: 多账户切换呼声极高（645👍）；Bedrock会话令牌失效。
    *   **OpenAI Codex**: PAT认证模式下的安全性修复。
    *   **Gemini CLI**: (未直接体现，但其子代理忽视配置的问题与此相关)。
    *   **Kimi Code CLI**: 组织级TPD速率限制错误。
    *   **共识**: 从个人使用到企业级部署，账户管理、权限隔离和配置一致性成为新的刚需。

*   **多模型/多平台兼容性**
    *   **OpenAI Codex**: GPT-5.6系列在Azure和第三方后端大量失败。
    *   **Pi**: 针对Bedrock、Grok、自定义OpenAI兼容端点的适配。
    *   **DeepSeek TUI**: 修复Anthropic API的`tool_use`兼容性问题。
    *   **共识**: 随着模型厂牌增加，用户期望工具能无缝对接不同Provider。硬编码和协议僵化成为主要阻碍。

#### **4. 差异化定位分析**

| 工具 | 核心定位 | 差异化优势 | 主要瓶颈 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **最“人类友好”的开发副驾** | 社区驱动，高度关注用户声音（如快速响应多账户需求）；功能设计上强调自然交互（Cowork功能）和IDE无缝体验。 | 性能优化（卡顿）和平台稳定性（IDE扩展）亟待加强，以支撑其庞大的用户基数和功能复杂度。 |
| **OpenAI Codex** | **前沿模型的“试验场”与“压力测试平台”** | 对最新模型（GPT-5.6）支持最快，需求强烈；议题集中在多智能体、Agent架构等前沿方向。 | 承受巨大的新模型兼容性压力，企业级用户（Azure）和通用平台（macOS）的稳定性Bug频发，略显“激进”。 |
| **Gemini CLI** | **“半自动驾驶”的代码库探索者** | 强调子代理（Subagent）系统的自主性（如`codebase_investigator`）；对代码质量（AST感知、组件评估）有前瞻性布局。 | 子代理的自主性与可控性（假成功、卡死）存在严重矛盾，离“靠谱”的自动驾驶还有距离。 |
| **GitHub Copilot CLI** | **最“保守”的生产级伙伴** | 依托GitHub生态，稳定性相对较好；功能全面（语音模式、TUI）但迭代谨慎。 | 核心TUI稳定性问题（假死、输入bug）是其阿喀琉斯之踵；平台交互一致性（如Esc键、第三方MCP）有待打磨。 |
| **Kimi / Qwen / DeepSeek** | **中国本土化生态的“破局者”** | 对国产模型（Kimi、Qwen、MiniMax）原生支持；积极解决Windows和中文编码等本地化痛点。 | 社区活跃度相对较低（除Qwen外），国际影响力有限；功能迭代多围绕兼容性和Bug修复，创新性功能较少。 |
| **OpenCode / Pi** | **高阶开发者的“技术乐高”** | 功能激进，架构设计前瞻（如Pi的Compaction、OpenCode的daemon架构）；对MCP、ExtensionAPI等开放生态探索深入。 | 用户门槛较高，社区属于技术爱好者；稳定性风险和功能Bug较多，不适合追求开箱即用的开发者。 |

#### **5. 社区热度与成熟度**

*   **高度活跃/成熟期**: **Claude Code** 和 **GitHub Copilot CLI** 社区活跃度最高，用户体量大，反馈体系相对成熟，既有对核心功能的高调需求，也有对稳定性的普遍抱怨。OpenAI Codex 紧随其后，讨论技术深度高。
*   **快速迭代/成长期**: **Pi**, **OpenCode** 和 **Qwen Code** 处于快速迭代期，议题广泛，从底层架构到UI细节均有涉及，社区贡献者活跃，但整体成熟度（尤其是稳定性）低于第一梯队。
*   **探索/追赶期**: **Kimi Code CLI** 和 **DeepSeek TUI** 目前仍处于功能补全和基础平台适配阶段，社区规模较小，声音集中，但在其特定领域（国产模型、本土化支持）有独特价值。
*   **特殊案例**: **Gemini CLI** 社区活跃度中等偏上，但其话题高度集中在Agent系统的世界观和架构层面，显示出其目标用户群是技术前沿的深度开发者，而非大众用户。

#### **6. 值得关注的趋势信号**

1.  **稳定性是第一生产力，也是最大软肋**: 几乎每个工具的Top Issue都包含“卡死”、“崩溃”、“内存泄漏”等问题。这表明，在AI能力“内卷”的当下，**工具的稳定性和可靠性已成为影响开发者选择的关键因素**。任何无法提供“开箱即用”稳定体验的工具，都将面临用户流失的风险。
2.  **“Agent自治”与“用户可控”的矛盾加剧**: 无论是Gemini的子代理“假成功”，还是OpenAI Codex的多智能体v2隐藏模型选择，都指向一个核心矛盾：社区希望Agent更自主，但前提是行为必须**透明、可预测、可干预**。未来的Agent设计必须增加“可解释性”和“用户否决权”。
3.  **第三方集成与多模型支持成为“新标配”**: MCP生态的兴起、对非官方API（如自托管OpenAI兼容端、Azure、Grok）的支持需求，都标志着工具正从“专有生态”走向“平台生态”。**谁能更好地解决跨平台、跨模型的兼容性和成本核算问题，谁就能赢得更广泛的开发者基础。**
4.  **从“单点工具”到“开发环境OS”的野心**: Pi的ExtensionAPI、OpenCode的daemon架构、Claude Code的Cowork功能，无不显示出工具正试图从单一的对话界面，演变为**集成了文件管理、版本控制、任务编排和团队协作的“开发环境操作系统”**。这将是下一阶段竞争的制高点。
5.  **本土化与全球化并行**: 以Kimi、Qwen为代表的国产工具，专注于解决中国开发者在Windows、中文环境下的痛点；而DeepSeek TUI、OpenCode等则通过国际化（韩语等）降低门槛。这表明AI CLI工具的竞争已进入全球化与本地化并重的阶段。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-07-13）

基于官方仓库 `anthropics/skills` 的 Pull Requests（按评论数排序前20）及 Issues（按评论数排序前15）数据，从 Skill 热度、社区需求、待合并 PR 及生态趋势四个维度进行深度分析。

---

## 1. 热门 Skills 排行

以下为社区评论/关注度最高的 5~8 个 Skills（PR），涵盖功能、讨论热点及当前状态。

| 排名 | PR # | 名称 | 功能摘要 | 社区讨论热点 | 状态 |
|------|------|------|----------|-------------|------|
| 1 | #1298 | fix(skill-creator): run_eval.py always reports 0% recall | 修复评估脚本在触发检测、Windows 流读取、并行 worker 等方面的多个 Bug | **核心痛点**：skill‑creator 的 `run_eval.py` 在所有查询下输出 0% recall，导致优化循环无法正常工作；此 PR 试图根本解决 #556 等十几个独立复现报告。 | open |
| 2 | #514 | Add document-typography skill | 对 AI 生成文档进行排版质检（防止孤字、孤行、段落悬挂） | 用户高度认可其直接价值——每个文档生成都会受益；讨论焦点在于规则是否覆盖所有排版场景及与现有排版技能的冲突。 | open |
| 3 | #538 | fix(pdf): case-sensitive file references | 修复 PDF 技能中 SIZE.md 对大写文件名的错误引用（8处） | 虽是小修复，但跨平台兼容性问题（Linux 大小写敏感）引发对 Skills 文件命名规范的广泛讨论。 | open |
| 4 | #486 | Add ODT skill | 创建、填充、读取和转换 ODT/ODS/ODF 格式文档 | 响应 LibreOffice/OpenDocument 用户群的强烈需求；与 docx 技能的功能重叠和协调是讨论焦点。 | open |
| 5 | #210 | Improve frontend-design skill | 重写前端设计技能，使其指令清晰、可执行、适合单次对话 | 讨论集中于“如何定义可跟踪的指令”以及避免抽象指导；用户希望技能能真正约束 Claude 的行为。 | open |
| 6 | #1367 | feat(skills): add self-audit (v1.3.0) | 交付前自动审计：机械文件验证 + 四维度推理质量门（按损伤严重度排序） | 新颖的“元技能”方向，引起对 AI 输出质量保障的讨论；但部分观点认为太复杂可能增加 token 开销。 | open |
| 7 | #83 | Add skill-quality-analyzer & skill-security-analyzer | 提供两个元技能：质量分析（5维度评分）和安全分析（潜在风险检测） | 社区对“技能评估技能”高度感兴趣，但担心安全分析可能被滥用；同时其评分标准是否客观存在争议。 | open |
| 8 | #1302 | Add color-expert skill | 全面的颜色专业知识（命名体系、色彩空间、对比度计算、调色板生成） | 艺术/设计领域用户积极支持；讨论涉及如何平衡广泛涵盖与 token 效率。 | open |

所有热门 PR 均为 **open** 状态，尚无合并版本。

---

## 2. 社区需求趋势

从 Issues（按评论数排序）中可提炼出以下最受关注的新 Skill 方向：

### 🔐 安全与信任边界
- **#492**（34 评论）：社区制作的 Skills 被分发在 `anthropic/` 命名空间下，造成信任边界滥用。用户要求官方建立 Skill 签名、来源认证和权限控制机制。
- **#1175**（4 评论）：处理 SharePoint Online 文档时安全与上下文窗口的担忧，需要 Skill 级别的访问控制。

### 🏢 组织级共享与协作
- **#228**（14 评论）：Skills 无法在组织内直接共享，用户不得不用文件传输 + 手动上传；期望官方提供共享库或一键分享功能。

### 🛠 Skill 创建工具稳定性
- **#556**（12 评论）、**#202**（8 评论）、**#1169**（3 评论）、**#1061**（3 评论）：集中报告 `run_eval.py` 和 `run_loop.py` 的 0% recall 问题、Windows 兼容性、以及优化循环失效。社区强烈需求：官方尽快修复 skill‑creator 使其可用。

### 🧠 高级推理与治理
- **#412**（6 评论）：提出 agent‑governance 技能，涵盖策略执行、威胁检测、信任评分和审计追踪，填补当前技能集合在 AI agent 安全方面的空白。
- **#1329**（9 评论）：提案 compact‑memory 技能——用符号化标记缩短长时 agent 的上下文占用，提升 token 效率。
- **#1385**（3 评论）：推理质量门流水线（预任务校准 → 对抗审查 → 交付验证），与 #1367 self‑audit 思路互补。

### 📄 文档格式扩展
- **#189**（6 评论）：`document-skills` 和 `example-skills` 存在重复内容，反映用户对清晰、非冗余的文档技能集合的期望。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃且尚未合并，技术方案成熟，近期有望落地：

| PR | 名称 | 为何高潜力 | 合并阻塞因素 |
|----|------|-----------|-------------|
| #514 | document-typography | 直接解决文档生成中普遍存在的排版问题，社区认可度极高 | 需要与已有排版技能（如 docx）协调避免冲突；正在细化规则边界 |
| #486 | ODT skill | 填补开放文档格式空白，LibreOffice 用户基础庞大 | 需补充测试用例（尤其是模板合并和 HTML 转换）；与 docx 技能的集成方案待确认 |
| #210 | frontend-design（改进版） | 原技能被多次批评“太抽象”，重写后可操作性大幅提升 | 社区要求提供更多示例和断言（assertions）确保 Claude 正确执行 |
| #1367 | self-audit（v1.3.0） | 首创“交付前自审”模式，可通用化到任何项目；机械验证 + 推理审计的层次化设计 | 部分用户认为步骤过多（2阶段），希望精简为可选开关；需要与现有的 skill‑creator 集成 |
| #1302 | color-expert | 知识体系完整，覆盖常见色彩标准；对设计/数据可视化场景有直降浪费能力 | token 消耗较高（约 2000+），建议增加 `lite` 版本 |

此外，**#83**（skill‑quality‑analyzer）虽话题度高，但已停滞较久（最后更新 2026‑01‑07），需作者跟进才能推进合并。

---

## 4. Skills 生态洞察

**一句话总结**：当前社区在 Skills 层面最集中的诉求是**“让技能创建工具真正可用”** —— `run_eval.py` 的 0% recall 问题已产生超过 15 个独立复现报告和一系列修复 PR（#1298、#1099、#1050、#1261、#1323），该障碍直接阻塞了用户自主开发新技能的反馈闭环；与此同时，安全治理和组织共享的基础设施缺失正在成为技能生态规模化发展的主要瓶颈。

---

好的，请查收 2026 年 7 月 13 日的 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-07-13

## 今日速览

今日社区动态主要集中在功能需求与 Bug 报告的提交。核心热点是 **多账户管理功能** 的高票需求（645 👍），以及 ChatGPT 风格的多轮对话问题、MCP 插件兼容性及 IDE 集成的稳定性问题。此外，针对 **VS Code 扩展卡顿** 和 **macOS 下 Chrome 扩展侧面板异常关闭** 的讨论热度较高。

## 社区热点 Issues

1.  **【功能需求】 Claude Desktop 多账户切换管理 #18435**
    - **链接:** [Issue #18435](https://github.com/anthropics/claude-code/issues/18435)
    - **重要性:** 这是今日社区呼声最高的需求，获得 645 个 👍 和 128 条评论。用户迫切需要在一个桌面应用中方便地管理个人、工作等多个 Claude 账户，并实现一键切换。
    - **社区反应:** 多数评论支持该功能，并讨论了安全性与账户隔离的细节。

2.  **【Bug】 VS Code 扩展周期性卡顿 90 秒 #75571**
    - **链接:** [Issue #75571](https://github.com/anthropics/claude-code/issues/75571)
    - **重要性:** 影响 macOS ARM64 用户的严重性能问题。扩展每 30-40 分钟就会无响应超过 90 秒，直接中断开发流程。
    - **社区反应:** 用户提交了详细的日志和 `kevent64` 分析报告，证明原生子进程处于空闲状态，问题在扩展端。

3.  **【Bug】macOS Chrome 扩展：切换标签页时侧面板关闭 #30873**
    - **链接:** [Issue #30873](https://github.com/anthropics/claude-code/issues/30873)
    - **重要性:** 影响浏览器扩展核心使用体验的 Bug。用户在使用 Microsoft Edge 时，切换或打开新标签页会导致 Claude 侧面板意外关闭。
    - **社区反应:** 28 条评论表明这是影响效率的常见痛点，用户期待尽快修复。

4.  **【Bug】 GitHub MCP 插件返回 HTTP 400 错误 #64654**
    - **链接:** [Issue #64654](https://github.com/anthropics/claude-code/issues/64654)
    - **重要性:** 关键 MCP 插件故障。GitHub 集成因发送了缺少版本标签的错误 JSON-RPC 载荷而失败。
    - **社区反应:** 开发者社区高度关注，正在追溯是插件代码还是 MCP 协议解析层的问题。

5.  **【Bug】 IntelliJ IDEA 插件 MCP 连接失败 #56872**
    - **链接:** [Issue #56872](https://github.com/anthropics/claude-code/issues/56872)
    - **重要性:** 阻碍 JetBrains 生态用户使用核心 IDE 集成功能的 Bug。插件启动时 MCP 连接立即失败。
    - **社区反应:** 用户正在积极提供重现步骤和日志，以协助定位。

6.  **【Bug】 Cowork 功能：信任文件夹验证回归 #76254**
    - **链接:** [Issue #76254](https://github.com/anthropics/claude-code/issues/76254)
    - **重要性:** 影响团队协作的回归 Bug。更新后，应用无法将共享驱动器的根目录和第一级文件夹设为信任文件夹，只能信任深层文件夹。
    - **社区反应:** 用户已标记为回归问题并提交日志。

7.  **【Bug】 Bedrock API 会话令牌无效 #76701**
    - **链接:** [Issue #76701](https://github.com/anthropics/claude-code/issues/76701)
    - **重要性:** 影响使用 Bedrock 的企业用户。即使用户持有有效的凭证，交互式请求仍会报“Session token not found or invalid”错误。
    - **社区反应:** 该问题被标记为回归，社区正在探讨是否与最近的认证模块更新有关。

8.  **【Bug】 VS Code 扩展 `claude --resume` 后卡死 #76633 (已关闭)**
    - **链接:** [Issue #76633](https://github.com/anthropics/claude-code/issues/76633)
    - **重要性:** 一个已确认的 Bug，用户在 Windows 上使用 `--resume` 恢复会话时，VS Code 扩展会停滞在“Reloading...”状态。
    - **社区反应:** 该 Issue 已被快速关闭，可能已找到修复或临时方案。

9.  **【功能需求】 代理视图(Agent View)应显示项目名称 #69449**
    - **链接:** [Issue #69449](https://github.com/anthropics/claude-code/issues/69449)
    - **重要性:** 提升 `claude agents` (FleetView) 命令的可用性。当前列表不显示会话所在的仓库/项目，在多项目管理时容易混淆。
    - **社区反应:** 3 个 👍 支持，用户认为这是一个直观但影响工作流效率的改进。

10. **【功能需求】 浏览器扩展：不要混淆“Browser 1/2” #70542**
    - **链接:** [Issue #70542](https://github.com/anthropics/claude-code/issues/70542)
    - **重要性:** 解决浏览器连接稳定性与一致性问题。用户分配给浏览器的名称被匿名化为“Browser 1/2”，导致模型很难区分多个浏览器实例。
    - **社区反应:** 用户认为保留用户设置的名称是更合理的行为。

## 重要 PR 进展

1.  **修复脚本：自动关闭重复 Issue 时保留已有标签 #76986 (OPEN)**
    - **链接:** [PR #76986](https://github.com/anthropics/claude-code/pull/76986)
    - **内容:** 修复了 `auto-close-duplicates.ts` 脚本在关闭重复 Issue 时，会错误地用 `['duplicate']` 替换掉 Issue 的**所有**已有标签（如 `bug`、`has repro`）的问题。
    - **重要性:** 维护仓库标签健康度，保留 `bug`、`enhancement` 等关键标签，便于后续检索。

2.  **修复插件开发脚本：支持多行描述解析 #76985 (OPEN)**
    - **链接:** [PR #76985](https://github.com/anthropics/claude-code/pull/76985)
    - **内容:** 修复了 `validate-agent.sh` 脚本中仅读取 agent 描述第一行的问题，使其能正确读取多行描述。
    - **重要性:** 完善插件开发工具链，允许开发者编写更详细、跨行的插件描述。

3.  **文档更新：修复失效链接 #15165 (CLOSED)**
    - **链接:** [PR #15165](https://github.com/anthropics/claude-code/pull/15165)
    - **内容:** 更新 README 文档中的链接，将过期链接指向正确的地址。
    - **重要性:** 虽然是简单修复，但保证了新用户和开发者能够正常访问文档。

## 功能需求趋势

- **多账户管理与身份切换:** 用户在桌面应用中管理多个 Claude 账户（个人/工作）的呼声达到顶峰，这可能是目前最迫切的功能需求。
- **IDE 集成稳定性:** VS Code 扩展周期性卡死、IntelliJ 插件连接失败等问题的报告增多，社区对 IDE 集成稳定性的要求极高。
- **MCP 插件系统健壮性:** MCP 插件（如 GitHub）的错误、插件开发脚本的修复，都指向社区正在积极探索和构建插件生态，对基础框架的健壮性提出了更高要求。
- **浏览器扩展一致性:** 多个浏览器实例的识别、侧面板在不同浏览器上的稳定性，成为浏览器扩展的关键体验优化点。
- **使用量监控与代理视图:** 用户希望更精细的管理工具，例如能区分项目会话的代理视图（FleetView），以及更准确的使用量监控（`/usage`）。
- **UI/UX 细节打磨:** 如代码块的固定复制按钮、`AskUserQuestion` 按钮的响应速度等，体现了用户对交互细节的更高要求。

## 开发者关注点

- **性能瓶颈:** VS Code 扩展的周期性卡顿是 macOS 开发者的核心痛点，严重影响了日常工作的流畅性。
- **认证与授权问题:** Bedrock 凭证失效、CLI 未发送正确 OAuth 令牌、以及多账户切换的需求，表明认证层是用户面临问题的重灾区。
- **功能回归:** Cowork 文件夹验证、密码激活流程等功能的回归问题，说明新版本对已有功能的破坏是开发者最担心的问题之一。
- **多个浏览器实例支持:** 无法区分和管理多个 Chrome 浏览器配置文件是使用浏览器扩展功能的一大障碍，用户希望工具能理解并操作多实例环境。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-07-13

## 今日速览

1. GPT-5.6 系列模型（Sol、Luna、Terra）在 Azure 和第三方后端上出现大量兼容性问题，社区紧急反馈其硬编码的 `multi_agent_version` 和 `use_responses_lite` 导致 400 错误及工具调用失败。  
2. 此前备受关注的“SQLite 日志写入量过大” bug 已于本日由官方 PR #29432 / #29457 合入并关闭，可减少 85% 的日志写入。  
3. 多智能体 v2 界面中 `spawn_agent` 的模型覆盖逻辑被指存在严重 UX 回归，子代理模型选择失效，开发者强烈要求修复。

---

## 社区热点 Issues（10 条）

### 1. [#28224 🔒 CLOSED] SQLite 日志写入量可高达 640 TB/年，快速消耗 SSD 寿命
- **重要性**：社区呼声最高的性能 bug，获 434 👍，153 条评论。官方已通过 3 个 PR 缓解 85% 的日志写入。  
- **状态**：已关闭。  
- **链接**：[Issue #28224](https://github.com/openai/codex/issues/28224)

### 2. [#31814 🔴 OPEN] GPT-5.6 Sol 子代理无法指定模型，强制所有子代理也使用 Sol
- **重要性**：多智能体 v2 默认 `hide_spawn_agent_metadata=true`，导致子代理模型选择被隐藏，社区反应强烈（123 👍）。  
- **链接**：[Issue #31814](https://github.com/openai/codex/issues/31814)

### 3. [#31870 🔴 OPEN] 通过 Azure 使用 GPT-5.6 Sol 时，每次交互都因 `X-OpenAI-Internal-Codex-Responses-Lite` 失败
- **重要性**：暴露 Azure 后端与 Codex 内部头的兼容性问题，直接影响企业用户，39 👍，40 评论。  
- **链接**：[Issue #31870](https://github.com/openai/codex/issues/31870)

### 4. [#29532 🔴 OPEN] macOS 升级至 rust-v0.142.0 后 SQLite TRACE 日志依然持续刷写
- **重要性**：虽然 #29432 有所改善，但 #29457 未能完全修复，macOS 用户仍受日志写入困扰。  
- **链接**：[Issue #29532](https://github.com/openai/codex/issues/29532)

### 5. [#31882 🔴 OPEN] gpt-5.6-sol/terra/luna 硬编码 `use_responses_lite` 与 `multi_agent_version`，导致 Azure 及其他非 ChatGPT 后端返回 400
- **重要性**：直指模型元数据硬编码的设计缺陷，第三方 API 用户普遍受影响。  
- **链接**：[Issue #31882](https://github.com/openai/codex/issues/31882)

### 6. [#18115 🔴 OPEN] 仓库级插件市场与项目配置中的插件作用域
- **重要性**：当前 `config.toml` 支持项目配置，但插件配置仍是用户级作用域，团队协作需求高（47 👍）。  
- **链接**：[Issue #18115](https://github.com/openai/codex/issues/18115)

### 7. [#23200 🔴 OPEN] 支持 Codex 移动端无桌面客户端时直接连接固定 Linux 远程主机
- **重要性**：开发者希望移动端能直接控制始终在线的 Linux 服务器，而非依赖个人桌面机在线（31 👍）。  
- **链接**：[Issue #23200](https://github.com/openai/codex/issues/23200)

### 8. [#16717 🔒 CLOSED] 配置 Windows 代理 Shell（PowerShell / git-bash）
- **重要性**：Windows 用户长期受 PowerShell 语法限制，26 👍。提案已被标记为 closed（可能已实现），但社区仍希望保持讨论。  
- **链接**：[Issue #16717](https://github.com/openai/codex/issues/16717)

### 9. [#23574 🔴 OPEN] VS Code 扩展在大型工作区中可分配约 100 万个 inotify 监控
- **重要性**：Linux 上文件监控资源耗尽，影响 IDE 扩展稳定性。  
- **链接**：[Issue #23574](https://github.com/openai/codex/issues/23574)

### 10. [#32031 🔴 OPEN] [关键 UX 回归] 多智能体 v2 spawn_agent 隐藏模型覆盖并拒绝默认调用形状
- **重要性**：直接导致子代理模型选择不可用，尤其影响使用 gpt-5.6-sol/terra 的用户。  
- **链接**：[Issue #32031](https://github.com/openai/codex/issues/32031)

---

## 重要 PR 进展（全部 5 条）

### 1. [#32672 ✅ CLOSED] release/0.144 分支：回退“自动审查提示”更新
- **内容**：完全回退 `c27a9095` 提交，恢复原来的 Guardian 策略模板和测试。原因是该改动引起自动审查行为异常。  
- **链接**：[PR #32672](https://github.com/openai/codex/pull/32672)

### 2. [#32668 ✅ CLOSED] 回退“自动审查提示”更新（主分支）
- **内容**：与 #32672 对应，在主分支上回退 PR #31480。  
- **链接**：[PR #32668](https://github.com/openai/codex/pull/32668)

### 3. [#29898 ✅ CLOSED] 防止 PAT 认证模式下主机令牌注入
- **内容**：拒绝在 PAT 认证激活时使用 `chatgptAuthTokens`；新增端到端回归测试和文档。提升安全性。  
- **链接**：[PR #29898](https://github.com/openai/codex/pull/29898)

### 4. [#30504 🔄 OPEN] 功能：通过会话分支编辑历史提示（TUI）
- **内容**：替换现有的破坏性 `thread/rollback` 机制，改为创建分支来编辑此前提示，避免历史丢失。仍在开放。  
- **链接**：[PR #30504](https://github.com/openai/codex/pull/30504)

### 5. [#32628 ✅ CLOSED] 改进 Composer 补全目标解析
- **内容**：优化 `@` 和 `$` 补全目标的边界识别，处理文件、技能、插件候选冲突时优先选择最近的可编辑提及。  
- **链接**：[PR #32628](https://github.com/openai/codex/pull/32628)

---

## 功能需求趋势

从近期 Issues 中可以提炼出社区最关注的四个功能方向：

| 方向 | 说明 | 代表 Issue |
|------|------|------------|
| **GPT-5.6 模型全平台适配** | Sol、Luna、Terra 在 Azure、第三方 API、IDE 扩展中频繁出现兼容性问题，急需官方统一适配。 | #31814, #31870, #31882, #32412, #32499 |
| **多智能体 v2 UX 完善** | `spawn_agent` 的模型覆盖逻辑被隐藏，默认行为破坏性大，社区强烈要求恢复可选性。 | #31814, #32031, #25341 |
| **Windows 平台稳定性** | 大量 Windows 专属 bug：Sandbox 路径错误、SSH 工作树分组、计算机使用插件不可用等。 | #26562, #29365, #29797, #32082, #32690 |
| **远程/移动端支持** | 期望移动端直接连接远程 Linux 主机、支持 SSH 认证的交互方式。 | #23200, #23037 |

---

## 开发者关注点

- **Azure / 第三方后端兼容性**：GPT-5.6 硬编码内部 API 头与模型元数据，导致非 ChatGPT 后端直接 400 错误。这是当前最集中的痛点。
- **子代理模型强制限定**：多智能体 v2 默认隐藏了模型选择功能，开发者无法为子代理指定不同模型（如 Luna 或 Terra），严重影响复杂任务的性能优化。
- **SQLite 日志写入**：虽然主要问题已关闭，但 macOS 上仍有余留，部分用户反馈升级后日志刷写并未完全停止。
- **IDE 扩展滞后**：GPT-5.6 模型未在 VS Code 扩展模型选择器中显示，且 open-vsx 发布滞后于 Marketplace，导致 Cursor 等替代 IDE 用户无法使用新模型。
- **桌面应用网络连接不稳定**：多用户报告桌面版几乎每次交互后都需要手动恢复网络连接（#32670），影响基本使用体验。
- **Windows Sandbox / 脚本执行**：生成的 `apply_patch.bat` 调用 `WindowsApps` 路径下的 `codex.exe`，而不是本地配置的 `CODEX_CLI_PATH`，导致执行失败（#29365）。

---

*日报数据截止时间：2026-07-13 24:00 UTC。数据来源：[github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，各位开发者，以下是 2026 年 7 月 13 日的 Gemini CLI 社区动态日报。

---

## Gemini CLI 社区动态日报 | 2026-07-13

### 1. 今日速览

今日社区动态主要集中在**提升子代理（Subagent）系统的稳健性和透明度**上。一个关于子代理在触达最大交互轮次后误报“成功”状态的 Bug（#22323）引发了广泛讨论，揭示了深层逻辑缺陷。同时，开发者对**Nix 包管理器的兼容性**、**会话控制（Shell 命令卡死）** 以及**AST 感知能力**的呼声依然很高。安全方面，项目正积极修复 CVE-2026-47429 等高危漏洞。

### 2. 版本发布

- **[v0.52.0-nightly.20260713.gf354eebaf](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260713.gf354eebaf)**
    - **修复**: 当用户账户没有 Code Assist 层级时，现在会显示清晰的提示消息（由 @ompatel-aiml 在 [PR #28304](https://github.com/google-gemini/gemini-cli/pull/28304) 中修复）。

### 3. 社区热点 Issues (Top 10)

1.  **[#22323] [BUG] 子代理在触达 MAX_TURNS 后误报为 GOAL 成功，隐藏了中断**
    - **Why it matters**: 这是一个非常关键的逻辑 Bug。`codebase_investigator` 子代理在因达到最大交互轮次而被强制中断后，仍然向上层报告“目标达成（GOAL）”，这完全掩盖了真实的“中断”原因，可能导致用户收到错误或有遗漏的分析结果。该问题获得了 10 条评论，社区对其严重性普遍关注。
    - **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[#21409] [BUG] 通用代理卡死**
    - **Why it matters**: 这是一个严重影响用户体验的 Bug。当 Gemini CLI 将任务委托给通用代理（Generalist agent）时，会无限期地卡住，即便是简单的创建文件夹操作也会如此。该 Issue 有 8 个 👍，说明大量用户深受其扰。目前的已知缓解方法是“禁止模型使用子代理”，但这背离了设计初衷。
    - **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[#24353] [EPIC] 稳健的组件级评估**
    - **Why it matters**: 这是一个跟踪子任务的大型 EPIC，旨在建立更细粒度的评估体系。该 Issue 表明团队正在系统性地提升子代理质量，从“行为评估”走向“组件级评估”，这对于保证未来版本的核心稳定性至关重要。
    - **链接**: [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

4.  **[#22745] [EPIC] 评估 AST 感知的文件读取、搜索和映射的影响**
    - **Why it matters**: 这是一个前沿方向。AST（抽象语法树）感知可以使工具理解代码结构，从而更精确地读取方法体或导航代码库。如果成功，将大幅减少 Token 消耗，并避免因读错代码范围而导致的错误交互。这是提升代码理解和分析能力的关键尝试。
    - **链接**: [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

5.  **[#28358] [BUG] 关于“EMP 探测/量子物理”危险脚本的创建**
    - **Why it matters**: 该 Issue 设计模型生成了可能具有危险性的脚本。虽然描述有些模糊，但这触及了 AI Agent 的安全性核心：如何防止模型在没有充分上下文和安全检查的情况下执行潜在危险的命令。社区对此类安全边界问题非常敏感。
    - **链接**: [Issue #28358](https://github.com/google-gemini/gemini-cli/issues/28358)

6.  **[#25166] [BUG] Shell 命令执行完成后卡在“等待输入”**
    - **Why it matters**: 一个非常常见的“卡死”场景。简单命令执行完后，终端状态错误地显示为等待用户输入，导致 Agent 停止工作。该 Issue 有 3 个 👍，表明这不是偶发情况，严重影响自动化流程。
    - **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

7.  **[#21968] [BUG] Gemini 未能充分使用自定义技能和子代理**
    - **Why it matters**: 反馈了 Agent 的自主性问题。即使定义了明确的技能（如 Gradle、Git），Agent 在处理相关任务时仍不会主动调用。这削弱了“自定义技能”这一核心功能的价值。
    - **链接**: [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

8.  **[#26522] [BUG] 阻止 Auto Memory 在低信号会话上无限重试**
    - **Why it matters**: Auto Memory 功能在提取“低价值”信息时会陷入无限循环，导致资源浪费。该 Issue 旨在引入跳过机制，避免无效计算，是优化自动记忆模块效率的关键需求。
    - **链接**: [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

9.  **[#22672] [BUG] 代理应阻止/劝阻破坏性行为**
    - **Why it matters**: 社区对 Agent 的“手滑”风险感到担忧。当模型执行 `git reset --force` 等破坏性命令时，缺乏预警或阻拦机制。该 Issue 呼吁增加更智能的风险评估和安全约束。
    - **链接**: [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **[#22267] [BUG] 浏览器代理忽略 settings.json 的覆盖配置**
    - **Why it matters**: 这是配置管理的 Bug。用户在 `settings.json` 中设置的最大交互轮次（maxTurns）等参数，对 `browser_agent` 无效，导致个性化配置无法生效，影响深层调试和自定义。
    - **链接**: [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### 4. 重要 PR 进展 (Top 10)

1.  **[#28368] [CRITICAL] 修复 CVE-2026-47429：升级 vitest 至 4.1.0**
    - **Content**: 这是一个直接修复高危漏洞的安全更新。`vitest` 测试框架已被发现存在严重漏洞（CVE-2026-47429），此 PR 立刻将其升级至修复版本。
    - **链接**: [PR #28368](https://github.com/google-gemini/gemini-cli/pull/28368)

2.  **[#28367] [CRITICAL] 修复 CVE-2026-9277：升级 shell-quote 至 1.8.4**
    - **Content**: 同样是高危安全漏洞修复。`shell-quote` 是解析 Shell 命令的关键库，此 PR 修复了命令注入风险，对 Agent 安全性至关重要。
    - **链接**: [PR #28367](https://github.com/google-gemini/gemini-cli/pull/28367)

3.  **[#28256] 支持 Nix 包管理器：添加 /nix/store 至信任路径**
    - **Content**: 针对 NixOS 用户的痛点修复。Nix 包管理器下的二进制文件路径（如 `/nix/store/.../rg`）此前被错误地判定为不信任路径，此 PR 解决了该兼容性问题。
    - **链接**: [PR #28256](https://github.com/google-gemini/gemini-cli/pull/28256)

4.  **[#28385] Bump google-auth-library 版本至 10.9.0**
    - **Content**: 这是一个关键的依赖升级，用于修复一个上游的 Bug。对于企业内部使用 GCP 身份认证的场景十分重要。
    - **链接**: [PR #28385](https://github.com/google-gemini/gemini-cli/pull/28385)

5.  **[#28275] 使 GCP 遥测导出器可选**
    - **Content**: 一项重要的架构改进。将 Google Cloud 的监控、日志和追踪导出器从核心运行时依赖中剥离，有助于减少核心库的体积和潜在冲突。
    - **链接**: [PR #28275](https://github.com/google-gemini/gemini-cli/pull/28275)

6.  **[#28268] 重构：清理配置文件选择器逻辑**
    - **Content**: 一次重要的代码清扫。移除了遗留的配置选择逻辑，简化了配置管理流程，这通常与更好的可维护性和更少的 Bug 相关联。
    - **链接**: [PR #28268](https://github.com/google-gemini/gemini-cli/pull/28268)

7.  **[#28262] 优化斜杠命令解析性能**
    - **Content**: 通过预计算 Map 将斜杠命令查找的复杂度优化为 O(1)，这在大规模使用或复杂会话中能显著提升 UI 响应速度。
    - **链接**: [PR #28262](https://github.com/google-gemini/gemini-cli/pull/28262)

8.  **[#28377] 批量升级 npm 依赖包**
    - **Content**: 一次包含 74 个更新的批量依赖升级，涵盖了核心库、类型定义和工具链，是保持项目相关依赖最新、减少隐患的例行但重要操作。
    - **链接**: [PR #28377](https://github.com/google-gemini/gemini-cli/pull/28377)

9.  **[#28383] Bump @types/node 至 26.1.0**
    - **Content**: 将 Node.js 类型定义大幅升级。这通常意味着对最新 Node.js 特性的支持，以及更准确的类型检查。
    - **链接**: [PR #28383](https://github.com/google-gemini/gemini-cli/pull/28383)

10. **[#28275] (提及) 核心架构重构**
    - **Content**: (重复条目，已在上方 #5 列出，此处占位强调其重要性) 使团队能以更轻量的方式复用 Gemini CLI 核心。
    - **链接**: [PR #28275](https://github.com/google-gemini/gemini-cli/pull/28275)

### 5. 功能需求趋势

根据今日的 Issues 和 PRs 分析，社区最关注的功能方向是：

- **子代理（Agent）系统的稳健性与透明度**：用户不再满足于“能用”，而是要求子代理行为可预测、可调试。核心诉求包括：1) 错误报告精准（如区分“目标达成”与“被中断”）；2) 行为轨迹可分享/审查（`/chat share`）；3) 配置参数（如 `maxTurns`）必须生效。
- **前端 UI / Core 体验改进**：命令卡死、终端闪烁、编辑器退出后界面损坏等问题被频繁提及。社区对流畅、稳定的命令行交互体验有极高要求。
- **Nix / 非标准 Linux 环境支持**：Nix 相关的兼容性 Issue 开始出现，表明开发者社区中 Nix 用户群体正在增长，且对 CLI 工具的开箱即用有强烈需求。
- **安全与隐私**：修复 CVE 的 PR、关于危险脚本的 Issue 以及 Auto Memory 的隐私日志问题，都指向了社区对安全性和数据隐私的高要求。

### 6. 开发者关注点

开发者在反馈中遇到的痛点和高频需求集中在：

- **“假成功”问题**：子代理系统在失败时（如超时、出错）反馈错误信息，是当前令开发者最困扰的问题（#22323）。
- **卡死与不可用**：通用代理卡死（#21409）和 Shell 命令执行后卡死（#25166）是两大“杀手级” Bug，严重影响了开发者对 Agent 的信任。
- **配置不生效或忽略**：自定义配置（如 `settings.json`， `maxTurns`）被忽略，导致开发者无法精确控制 Agent 行为，影响调试和定制化需求。
- **Tool 使用过多**：当 Agent 可用的 Tool 超过 128 个时，会出现 400 错误（#24246），这表明 Agent 的 Tool 选择和上下文管理能力存在瓶颈。
- **提交/工作区杂乱**：Agent 喜欢在项目各处创建临时脚本（#23571），导致代码库混乱，给后续提交和清理带来额外负担。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报  
**2026-07-13**  

---

## 今日速览

过去24小时内，Copilot CLI仓库活跃度较高，共收到16条更新议题及1条PR。最关键的问题集中在**终端渲染/键盘输入死锁**（TUI 假死）、**语音模式全线ASR模型静默失败**、以及**会话恢复导致事件文件损坏**等三个方向。此外，Windows环境下插件更新因VS Code句柄锁定而失败，以及第三方MCP服务器工具在CLI会话中不可见的问题也引起社区关注。

---

## 版本发布

过去24小时无新版本发布。

---

## 社区热点 Issues（10 条精选）

### 1. TUI 假死：输入无响应，Ctrl+C/Ctrl+\ 均无效  
**#4069** — WSL2 + Windows Terminal 环境下，助手正在流式输出时屏幕突然清空，输入完全僵死，stdout 写 EIO 后 Rust JSON-RPC 传输报 EPIPE。影响版本 `1.0.70-0`，模型 `claude-opus-4.7`。社区反响强烈（👍8），此问题直接导致用户无法继续工作。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4069)

### 2. 语音模式：全部内置 ASR 模型静默失败  
**#4024** — `/voice` 功能可正常录音（PulseAudio 确认），但三种可选模型（nemotron-3.5-asr-streaming-0.6b、nemotron-speech-streaming...）均返回空白转录。定位为 `MultiModalProcessor` 路由 bug。跨平台潜在影响大（Linux/Foundry Local Core 用户无法使用语音）。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4024)

### 3. 会话恢复产生截断/拼接事件 JSONL  
**#4098** — 恢复的会话中 `events.jsonl` 出现三行“不完整事件前缀 + 完整 JSON 事件”的拼接记录，导致该会话无法二次恢复。社区怀疑 `write_agent` 或 `apply_patch` 工具调用在并发输出时未做行级保护。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4098)

### 4. `/tasks` 覆盖层中 Esc 键误触底层问题提示框  
**#3430** — 当 `/tasks` 覆盖层打开且代理正在提问时，按 Esc 关闭任务菜单会同时取消底层问题提示，用户丢失输入。此问题存在1个月以上，开发组已标记但未修复。  
[🔗 链接](https://github.com/github/copilot-cli/issues/3430)

### 5. 原生二进制在工具密集型回合或恢复会话时 V8 数组长度崩溃  
**#4102** — Linux x64 原生二进制在 active 阶段因 V8 内部数组长度检查异常 abort，即使禁用自动恢复也会触发。属于运行时稳定性严重缺陷。开发组已打 `[triage]` 标签。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4102)

### 6. 插件市场克隆禁用 Git 凭据助手，私有 HTTPS 仓库无法克隆  
**#4103** — 自 v1.0.70 引入“市场插件 git auth 失败时快速失败”后，克隆私有 Azure DevOps HTTPS 仓库始终失败（手动克隆正常）。影响所有使用私有 Git 插件的用户。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4103)

### 7. `write_agent` 调用可能阻塞，导致新用户输入排队  
**#4101** — 向空闲后台代理发送消息时，`write_agent` 工具直到目标代理真正开始处理才返回控制权。此期间用户新输入会被加入队列，造成交互延迟。多代理场景下体验极差。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4101)

### 8. 高亮复制时输入行出现垃圾文本  
**#4070** — 在终端中选中输出文本复制（Ctrl+C）后，输入行会插入大量无意义字符，污染用户输入。影响复制粘贴等基本操作。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4070)

### 9. Windows 下插件更新因 VS Code 句柄锁定失败  
**#4095** — 当 VS Code 正在运行（Copilot 扩展持有 watcher 句柄）时，`copilot plugin update` 或桌面应用触发更新会报“Access is denied (os error 5)”。Windows 专用问题。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4095)

### 10. 第三方 MCP 服务器显示“已连接”但工具在 CLI 会话中不可见  
**#4096** — 通过 Copilot App UI 登录第三方 OAuth MCP 服务器（如 Atlassian Remote MCP）后，服务器状态为绿色“Connected”，但 CLI 会话中从未出现该服务器提供的工具。疑似 OAuth Token 未正确桥接到会话上下文。  
[🔗 链接](https://github.com/github/copilot-cli/issues/4096)

---

## 重要 PR 进展（仅 1 条）

### #4100 — shangti0168  
作者提交了一条标题为“shangti0168”的 PR，摘要仅写“安全性”。该 PR 缺乏描述、变更内容及审查记录，目前无法判断其实际意图或价值。社区暂未评论。  
[🔗 链接](https://github.com/github/copilot-cli/pull/4100)

---

## 功能需求趋势

从近期议题中可以提炼出社区聚焦的四个方向：

1. **终端渲染与键盘输入稳定性** — 大量 issue 集中在 TUI 卡死、垃圾文本、Esc 键误触等问题，用户对终端交互体验的可靠性要求极高。  
2. **语音交互基础完善** — #4024 显示语音模式几乎不可用，ASR 模型全部失败，表明该功能仍处于早期阶段，离生产可用还有距离。  
3. **会话管理与持久化** — 会话恢复损坏、会话删除不彻底、事件文件过大导致超限等问题显示会话系统存在结构性缺陷。  
4. **插件与外部集成** — 私有 Git 认证、MCP 工具桥接、Windows 句柄锁定等集成问题暴露了跨平台、第三方服务的兼容性短板。

---

## 开发者关注点

- **高频痛点**：TUI 假死（#4069）、语音 ASR 全线失败（#4024）是当前最影响核心使用的 Bug，分别有 8 和 0 个 👍（前者反映出社区关注度，后者可能因语音用户基数较少但问题致命）。  
- **体验倒退**：v1.0.70 引入的 Git 凭据助手改动破坏了私有仓库插件安装，属于典型的功能回归（#4103）。  
- **运行时可靠性**：V8 数组崩溃（#4102）直接导致 binary abort，开发者可能需要在稳定版本前回退到旧版。  
- **多代理工具交互**：`write_agent` 阻塞（#4101）和 Esc 误触（#3430）表明 agent 间的控制逻辑需要更细粒度的事件隔离。  
- **Windows 生态特殊问题**：句柄锁定、WSL2 输入死锁、垃圾文本等问题频发，Windows 用户为第二大受影响群体。

---

*以上内容基于 2026-07-13 00:00~24:00 UTC 的社区公开数据整理，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# 2026-07-13 Kimi Code CLI 社区动态日报

## 今日速览
过去24小时内，Kimi Code CLI 无新版本发布，但有两项 PR 更新和一条 Issue 更新。社区主要关注 **组织级 TPD 速率限制** 的严重 bug（Issue #2318），同时有两个修复性 PR 在推进：`he-yufeng` 提交了 Windows 二进制版本信息注入（#2181）和 worker 输出非 UTF-8 编码兼容性处理（#2350）。整体而言，Windows 兼容性是企业级用户当前最核心的痛点。

---

## 版本发布
（过去 24 小时内无新 Release）

---

## 社区热点 Issues

| 编号 | 标题 | 状态 | 点赞 | 更新时间 | 说明 |
|------|------|------|------|----------|------|
| [#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318) | [bug] request reached organization TPD rate limit, current: 1505241 | OPEN | 1 | 2026-07-12 | **关键 bug**：用户使用 kimi 2.6 CLI 连接 moonshot.ai 平台时，遭遇组织级 TPD（每日请求次数）限制错误，当前限制值为 1,505,241。该 issue 已存在近两个月，说明企业用户对配额管理非常敏感，但未获得官方明确回复或修复。该 Bug 直接导致 CLI 无法正常调用模型，严重影响生产环境。 |

> 注：今日仅此一条 Issue 有更新，其余 0 评论，社区讨论热度较低，但该问题的严重性较高。

---

## 重要 PR 进展

| 编号 | 标题 | 状态 | 作者 | 更新时间 | 摘要 |
|------|------|------|------|----------|------|
| [#2181](https://github.com/MoonshotAI/kimi-cli/pull/2181) | fix: add Windows binary version info | OPEN | he-yufeng | 2026-07-12 | **为 Windows 可执行文件注入版本信息**：通过 PyInstaller 的 version-info 文件从 `pyproject.toml` 生成版本资源，并应用到 one-file 和 one-dir 两种构建方式；同时增加 CI 断言确保发布物包含非空 `FileVersionInfo`。修复 #2178。测试方式：`uv run ruff ...` |
| [#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) | fix: tolerate non-utf8 worker output | OPEN | he-yufeng | 2026-07-12 | **解决 Windows 下非 UTF-8 编码导致 worker 崩溃隐藏的问题**：Web 会话运行器在解码 worker 的 stdout/stderr 时使用严格 UTF-8，导致子进程输出本地编码（如 cp1252）时抛出 `UnicodeDecodeError`，从而隐藏真正的 worker 故障。本 PR 改用更宽容的编码策略，确保真正的错误能被上报。修复 #2313。 |

> 两项 PR 均由 `he-yufeng` 提交，聚焦 Windows 平台稳定性，反映出团队正在积极解决企业用户在 Windows 上遇到的常见问题。

---

## 功能需求趋势

从近期 Issues 和 PR 内容可以提炼以下社区关注的功能方向：

1. **组织级配额管理**  
   - Issue #2318 表明用户对 TPD 限制的透明度、错误提示准确性以及配额上限的调整机制有强烈需求。企业用户希望 CLI 能主动报告配额剩余量，或提供自动退避重试逻辑。

2. **Windows 兼容性**  
   - 两个 PR 均直接针对 Windows 环境：版本信息（便于软件管理、杀软误报识别）和编码处理（解决中文系统下常见的 cp1252/cp936 输出乱码）。这表明 Windows 用户占比在增长，且对 CLi 的本地化运行体验有更高要求。

3. **错误信息可读性**  
   - 过去类似的 Issue 中，用户多次抱怨错误信息过于原始（如直接暴露内部 HTTP 限流响应）。社区希望 CLI 能够对 API 返回的错误进行人性化翻译，并建议重试策略或提供 `--quota` 命令查看配额。

---

## 开发者关注点

- **痛点 1：TPD 限制错误无法自主恢复**  
  用户在使用 kimi 2.6 时，一旦触发组织级 TPD 限制，CLI 没有自动重试机制，也没有明确的等待时间提示，需要手动等待或联系平台扩容。企业用户希望 CLI 能集成指数退避或至少给出预期恢复时间。

- **痛点 2：Windows 下 worker 进程的编码问题**  
  在非 UTF-8 区域设置的 Windows 系统（如中文简体 cp936、西欧 cp1252）中，子进程输出的非 UTF-8 字节会导致 CLI 抛出 `UnicodeDecodeError`，掩盖真正的 worker 错误。用户需要手动设置环境变量或更改区域设置才能正常使用。PR #2350 正在解决此问题，但尚未合并。

- **痛点 3：二进制发行版缺少版本信息**  
  Windows 用户反馈从 GitHub Releases 下载的 `.exe` 文件没有 `FileVersionInfo`，导致系统无法识别版本、杀毒软件可能误判。PR #2181 已提交，有望在下一个版本中解决。

- **高频需求**：社区反复提及希望 CLI 支持 **多模型切换时保留上下文**、**流式输出支持 Markdown 渲染**、以及 **代理配置** 等，均在更早的 Issues 中有讨论，今日数据中未出现新进展。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-07-13）

## 📌 今日速览

- **多起长期悬而未决的 Bug 今日被标记为已关闭**，包括 iTerm2 滚动异常、Windows PowerShell 技能加载失败、macOS 签名崩溃等高频问题，社区反馈积极。
- **功能侧重点转向 TUI 稳定性和 MCP 标准化**：多个 PR 修复了重连后表单/权限状态不同步、MCP 开关 UI 不更新等问题，同时开始统一 MCP 术语。
- **提交热度维持高位**：过去 24 小时有 50 条 Issue 更新、50 条 PR 更新，开发活跃度稳定。

## 📦 版本发布

今日无新版本发布。过去 24 小时仅上线了三条 CI 验证产物（PR #36567 证据、#36567 行内证据、#36516 视觉证据），均为自动构建工件。

## 🔥 社区热点 Issues（10 条）

以下为评论数或关注度最高的代表性 Issue，按影响面排序：

1. **[#6209] Cannot scroll on opencode when using iterm**  
   - **评论数：** 23｜👍 19  
   - **摘要：** iTerm2 下无法滚动 TUI 历史输出，仅输入框可滚动。长期影响大量 macOS 用户。  
   - **状态：** 已关闭（解决）  
   - 🔗 https://github.com/anomalyco/opencode/issues/6209

2. **[#15225] Model config openrouter/auto not reflected in TUI**  
   - **评论数：** 5｜👍 13  
   - **摘要：** 配置文件设定 `"model": "openrouter/auto"` 后，TUI 仍显示旧模型（MiniMax M2.5 Free），配置未生效。  
   - **状态：** 已关闭  
   - 🔗 https://github.com/anomalyco/opencode/issues/15225

3. **[#20307] Granular permissions not working (or documentation bad?)**  
   - **评论数：** 5｜👍 6  
   - **摘要：** 细粒度权限配置（`src/*` 允许、`*` 询问）未按预期工作，用户质疑文档或实现有误。  
   - **状态：** 已关闭  
   - 🔗 https://github.com/anomalyco/opencode/issues/20307

4. **[#23457] Expand-Archive error on Windows PowerShell when loading skills in v1.14.18**  
   - **评论数：** 7｜👍 4  
   - **摘要：** Windows PowerShell 下加载 skill 时因 `Expand-Archive` 参数校验失败而崩溃，影响 CI 脚本使用。  
   - **状态：** 已关闭  
   - 🔗 https://github.com/anomalyco/opencode/issues/23457

5. **[#15124] OpenCode Binary Killed by macOS Due to Code Signature Error**  
   - **评论数：** 6｜👍 2  
   - **摘要：** macOS 内核 SIGKILL 终止 opencode 进程（信号 9），原因推测为代码签名问题。  
   - **状态：** 已关闭  
   - 🔗 https://github.com/anomalyco/opencode/issues/15124

6. **[#25769] z.ai - Coding plan shows only 5 models**  
   - **评论数：** 6｜👍 0  
   - **摘要：** z.ai 厂商的编程套餐模型列表突然从十多个缩减至 5 个（仅剩 GLM-4.5Air ~ GLM5V-Turbo），旧模型消失。  
   - **状态：** 已关闭  
   - 🔗 https://github.com/anomalyco/opencode/issues/25769

7. **[#26153] MCP无法关闭/开启**  
   - **评论数：** 5｜👍 2  
   - **摘要：** 启动后尝试切换 MCP 开关无反应，UI 与后端状态不同步。  
   - **状态：** 已关闭  
   - 🔗 https://github.com/anomalyco/opencode/issues/26153

8. **[#26156] bug: Kimi/Moonshot provider crashes with 'undefined is not an object'**  
   - **评论数：** 5｜👍 0  
   - **摘要：** 自 v1.14.23 起，使用 Moonshot AI 模型时立即崩溃，错误为 `$.annotations` 未定义。  
   - **状态：** 已关闭  
   - 🔗 https://github.com/anomalyco/opencode/issues/26156

9. **[#14508] Duplicate file references when using slash commands**  
   - **评论数：** 4｜👍 1  
   - **摘要：** 使用 `/` 命令并 `@` 引用文件时，同一文件被重复追加到 prompt 中，导致 token 浪费。  
   - **状态：** 已关闭  
   - 🔗 https://github.com/anomalyco/opencode/issues/14508

10. **[#7486] Only return tool_call parameters but cannot run the tool with local LLM**  
    - **评论数：** 4｜👍 2  
    - **摘要：** 断网环境下使用 Qwen3-32B 等本地 LLM 时，模型仅返回 tool_call 参数却未实际执行工具。  
    - **状态：** 已关闭  
    - 🔗 https://github.com/anomalyco/opencode/issues/7486

此外今日新开 Issue **#36600**（西班牙语，代理无视指令范围修改无关文件）也值得关注。

## 🚀 重要 PR 进展（10 条）

1. **[#36567] fix(tui): restore clicked reverted prompt**  
   - **摘要：** 修复点击历史消息的「撤销」后，被撤销内容未回到输入框的问题。  
   - **状态：** 已合入  
   - 🔗 https://github.com/anomalyco/opencode/pull/36567

2. **[#36579] fix(core): merge model.request.headers into SDK options**  
   - **摘要：** 修复自定义头部（如 `User-Agent`、`x-api-key`）在传递给 AI SDK 前被静默丢弃的 Bug。  
   - **状态：** 已合入  
   - 🔗 https://github.com/anomalyco/opencode/pull/36579

3. **[#36603] fix(tui): rehydrate pending permissions & questions on reconnect**  
   - **摘要：** SSE 重连后，之前等待用户确认的权限/问题提示不会丢失，避免 TUI 卡死。  
   - **状态：** 开放  
   - 🔗 https://github.com/anomalyco/opencode/pull/36603

4. **[#36606] feat(tui): add settings dialog**  
   - **摘要：** 新增 `/settings` 对话框，支持即时配置更新、主题发现与切换，宽屏下双栏布局。  
   - **状态：** 开放  
   - 🔗 https://github.com/anomalyco/opencode/pull/36606

5. **[#36598] fix: standardize MCP server copy**  
   - **摘要：** 统一 UI 中 MCP 相关术语：配置端点称「MCP servers」，能力称「MCP tools」，消除歧义。  
   - **状态：** 已合入  
   - 🔗 https://github.com/anomalyco/opencode/pull/36598

6. **[#36560] refactor(core): replace deferred tool option with codemode**  
   - **摘要：** 将工具注册属性 `deferred` 重命名为 `codemode`（默认 true = 进入 CodeMode），`codemode: false` 的工具留在原生列表。MCP 工具自动使用 `CODEMODE_ENABLED`。  
   - **状态：** 已合入  
   - 🔗 https://github.com/anomalyco/opencode/pull/36560

7. **[#36563] fix(core): use catalog small model for session titles**  
   - **摘要：** 会话标题生成时，若标题代理未指定模型，优先使用供应商的 small 模型（如 GLM-4.5Air），降低 token 开销。  
   - **状态：** 开放  
   - 🔗 https://github.com/anomalyco/opencode/pull/36563

8. **[#36589] fix(core): bound compaction request size**  
   - **摘要：** 限制自动压缩时的请求体大小不超过 10 MiB，防止超大会话因超限而永久卡死。  
   - **状态：** 开放  
   - 🔗 https://github.com/anomalyco/opencode/pull/36589

9. **[#36591] fix(tui): dismiss stale forms after failed reply**  
   - **摘要：** 提交表单返回 `FormNotFoundError` 时自动关闭该表单，避免后台服务重启后用户被困。  
   - **状态：** 开放  
   - 🔗 https://github.com/anomalyco/opencode/pull/36591

10. **[#34173] fix(tui): search files inside reference directory with @alias/**  
    - **摘要：** 修复 `@docs/xxx` 形式搜索参考目录内文件时无结果的问题。  
    - **状态：** 已合入  
    - 🔗 https://github.com/anomalyco/opencode/pull/34173

## 📊 功能需求趋势

从近期 Issue 和 PR 中可提炼出社区最关注的三个方向：

- **MCP 生态标准化**：MCP 开关、术语统一、插件日志接入、重连后状态同步等需求集中爆发，表明 MCP 集成已进入精细化打磨阶段。  
- **TUI 交互与稳定**：滚动异常、Keybinding 失效、表单卡死、文件树自动刷新等“手感”问题频现，用户对输入/输出流畅度要求极高。  
- **多模型与供应商兼容**：Kimi/Moonshot 崩溃、z.ai 模型列表骤减、OpenRouter/auto 配置不生效等案例说明供应商适配仍需持续投入。

此外，**异步压缩不阻塞输入**（#27359）、**实时代码预览**（#24897）、**AGENTS.md 自动执行**（#21978）等特色功能呼声渐涨。

## ⚠️ 开发者关注点（高频痛点）

1. **终端/TUI 兼容性**：iTerm2 滚动异常、Ghostty/Terminal.app 下渲染问题、TUI 被 `node_modules` 大量文件拖慢——开发者投入更多精力在终端环境适配。  
2. **Windows 平台体验**：PowerShell 解压错误、文件系统变化不自动刷新、`Expand-Archive` 参数校验等问题持续困扰 Windows 用户。  
3. **配置与权限一致性**：`model` 配置不生效、细粒度权限规则不按预期工作、`CLAUDE_CODE_SIMPLE` 模式导致空工具定义——开发者希望配置行为可预测、文档同步更新。  
4. **崩溃与闪退**：macOS 签名错误、Kimi/Moonshot 解析崩溃、Web 端 MCP 开关状态不联动——稳定性仍是最高优先级。  
5. **本地/离线模型支持**：本地 LLM 仅返回 tool_call 而不执行、模型列表显示不全，说明本地供应商集成仍不成熟。

> 以上所有数据截止于 2026-07-13 20:00 UTC，数据来源：GitHub [anomalyco/opencode](https://github.com/anomalyco/opencode)。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，这是为您生成的2026年7月13日 Pi 社区动态日报。

---

## Pi 社区动态日报 | 2026-07-13

### 今日速览

近期Pi社区活跃度极高，开发重点聚焦于适配最新模型（如OpenAI Codex的GPT-5.6系列）、优化核心Agent会话管理机制（特别是Compaction和会话续接），以及扩展API的完善。今日有多项针对特定Provider（如Bedrock, Grok）的Bug修复和功能增强PR被合并，同时社区关于多分支会话下的工具调用结果归属问题（Issue #6558）引发了对会话一致性的讨论。

### 版本发布

*无*

### 社区热点 Issues（10条）

1.  **[[bug] Compaction summary requests omit the session ID, breaking compaction on some OpenAI-Codex models (#6477)](https://earendil-works/pi/issues/6477)**
    - **热度：** 👍 8 | 💬 5
    - **重要性：** 高。该问题直接导致在使用最新的OpenAI Codex模型（如GPT-5.6系列）时，Compaction功能完全失效，提示“Model not found”。这对于依赖长对话的用户是一个关键阻塞点。
    - **社区反应：** 确认问题存在，并已定位到Session ID未传递是根因。

2.  **[[bug] Clamping to context window prevents artificial context limits (#6206)](https://earendil-works/pi/issues/6206)**
    - **热度：** 💬 10
    - **重要性：** 中高。该Bug是关于`max_tokens`被强制限制在模型声明的`context window`内，导致用户无法设置一个比理论最大值更小的、人为的上下文限制（用于成本或性能控制）。这是一个设计理念上的冲突。
    - **社区反应：** 讨论集中在如何区分“硬限制”（模型无法超越）和“软限制”（用户偏好）。

3.  **[[pkg:agent, pkg:coding-agent] AgentSession settlement/continuation and assistant-tail lifecycle bugs (#5886)](https://earendil-works/pi/issues/5886)**
    - **热度：** 👍 2 | 💬 6
    - **重要性：** 高。这是一个元问题，汇总了关于Agent会话结算、续接以及最终`assistant`消息生命周期管理的系列Bug。这直接关系到Agent能否在长时间运行中稳定工作。
    - **社区反应：** 作为多个相关问题的集结地，社区期望得到一个系统性的修复方案，而非零散打补丁。

4.  **[[bug] TUI drops image blocks from user messages (#6563)](https://earendil-works/pi/issues/6563)**
    - **热度：** 💬 4
    - **重要性：** 中。TUI界面在渲染用户消息时，会丢失附带的图片内容。虽然模型已经接收到图片，但在对话历史中不可见，影响了用户体验和会话回溯的准确性。
    - **社区反应：** 相关PR已在处理中，社区关注其对多模态支持体验的提升。

5.  **[[bug] Auto-compaction after final turn throws error (#5463)](https://earendil-works/pi/issues/5463)**
    - **热度：** 👍 5 | 💬 5
    - **重要性：** 中高。自动Compaction在Assistant完成最后一次回复后触发会报错，这是一个典型的边界情况Bug。这对于开启自动Compaction的用户影响较大。
    - **社区反应：** 根因已定位，是Agent在尝试从一条Assistant消息继续对话时逻辑错误。

6.  **[[bug] /tree branch summarization throws "No API key found" (#6324)](https://earendil-works/pi/issues/6324)**
    - **热度：** 👍 2 | 💬 3
    - **重要性：** 中。对于使用AWS Bedrock、Google Vertex AI等“环境凭据”认证的Provider，`/tree`命令的分支总结功能会无效。
    - **社区反应：** 该问题暴露了Pi在认证机制抽象上的一个漏洞，即硬编码了“API Key”的获取逻辑。

7.  **[[ExtensionAPI] Allow non-OAuth tokens with custom baseUrl in openai-codex-responses (#6564)](https://earendil-works/pi/issues/6564)**
    - **热度：** 💬 2
    - **重要性：** 中。当用户使用自定义API代理（而非官方ChatGPT后端）时，Pi强制要求OAuth JWT，而无法使用普通的API Key。这限制了对自托管或第三方OpenAI兼容服务的接入。
    - **社区反应：** 该请求获得了社区支持，认为应该根据`baseUrl`是否更改来灵活处理认证方式。

8.  **[[bug] Tool result attaches to wrong branch after tree navigation (#6558)](https://earendil-works/pi/issues/6558)**
    - **热度：** 💬 2
    - **重要性：** 高。在使用`/tree`进行分支切换时，正在运行的工具返回的结果可能会被错误地附加到新的分支上，导致Provider端的会话历史不一致，并拒绝后续请求。
    - **社区反应：** 这是一个非常关键的会话数据一致性问题，社区正密切关注其修复进展。

9.  **[[bug] openai-completions: missing tool schema `required` crashes Grok backends (#6587)](https://earendil-works/pi/issues/6587)**
    - **热度：** 💬 1
    - **重要性：** 中。当使用Grok等对Schema校验严格的API时，Pi生成的工具调用Schema中若缺少`required`字段，会导致400错误。
    - **社区反应：** 该问题在加载扩展工具后出现，迅速被识别并修复。

10. **[[RFE] Honor Anthropic x-should-retry in agent retries (#6586)](https://earendil-works/pi/issues/6586)**
    - **热度：** 💬 1
    - **重要性：** 低中。一个来自第三方代理提供者的功能请求，希望Pi能遵循Anthropic API返回的`x-should-retry`头来决定是否重试，而非仅依赖HTTP状态码。
    - **社区反应：** 一个小的改进点，但体现了对上游Provider最佳实践的支持。

### 重要 PR 进展（10条）

1.  **[ai: OpenAI and Codex forced tool calls (#6588)](https://earendil-works/pi/pull/6588)**
    - **状态：** OPEN
    - **内容：** 旨在支持强制工具调用（forced tool calls），即使模型被告知不要调用工具。这对于需要执行特定行为的Agent工作流很重要。
    - **看点：** 核心特性增强，直接关系到Agent的可控性。

2.  **[fix: forward provider options to summary requests (#6584)](https://earendil-works/pi/pull/6584)**
    - **状态：** OPEN
    - **内容：** 修复Compaction/Summarization请求未正确传递Provider选项（如API Key, 模型参数）的问题。Closes #6555。
    - **看点：** 对修复Compaction在多Provider场景下的兼容性至关重要。

3.  **[feat(tui): v2 in-Pi full-history pager over Ledger snapshot (#6580)](https://earendil-works/pi/pull/6580)**
    - **状态：** CLOSED
    - **内容：** 为TUI v2实验性模式添加了内置的全历史查看器/分页器，允许用户浏览超过终端回滚限制的历史记录。
    - **看点：** 显著提升TUI v2的用户体验，有利于高级用户进行会话回溯。

4.  **[fix(ai): respect forceAdaptiveThinking for Bedrock models (#6582)](https://earendil-works/pi/pull/6582)**
    - **状态：** CLOSED
    - **内容：** 修复了Bedrock Provider忽略`forceAdaptiveThinking`配置项的问题。当通过`models.json`注册的模型未在硬编码列表中时，该配置不生效。
    - **看点：** 修复了一个重要的配置不兼容问题，提升了Bedrock用户的体验。

5.  **[fix(coding-agent): coerce numeric read ranges (#6577)](https://earendil-works/pi/pull/6577)**
    - **状态：** CLOSED
    - **内容：** 修复`read`工具在处理数字字符串偏移量和限制参数时，显示范围错误的Bug。例如`offset: "380"`被错误解释。
    - **看点：** 一个典型的类型转换Bug，修复后提升了文件读取工具显示的准确性。

6.  **[Render image blocks in interactive user messages (#6572)](https://earendil-works/pi/pull/6572)**
    - **状态：** CLOSED
    - **内容：** 修复TUI在用户交互消息中渲染图片块的问题，改进了剪贴板图片粘贴的处理流程。
    - **看点：** 直接回应用户热点Issue #6563，增强了多模态交互能力。

7.  **[fix(tui): disable terminal auto-wrap to prevent double rendering (#6561)](https://earendil-works/pi/pull/6561)**
    - **状态：** CLOSED
    - **内容：** 通过禁用终端的自动换行（DECAWM）功能，解决了因行宽恰好匹配终端宽度导致的渲染重复和光标不同步问题。
    - **看点：** 一个“小而美”的修复，解决了长期存在的TUI渲染瑕疵，提升了视觉稳定性。

8.  **[fix(ai): send responses prompts as instructions (#5859)](https://earendil-works/pi/pull/5859)**
    - **状态：** CLOSED (近期更新)
    - **内容：** 关键API适配。OpenAI Responses API要求系统提示词放在顶层`instructions`字段，而非作为对话输入`input`的一部分。此PR修复了此兼容性问题。
    - **看点：** 如果没有这个修复，基于Responses API的模型将无法正确处理系统提示词。

9.  **[feat(pi-zai): Z.AI extension with quota, resilience, and cache benchmark (#6565)](https://earendil-works/pi/pull/6565)**
    - **状态：** CLOSED
    - **内容：** 新增了一个针对Z.AI平台的原生扩展包，包含配额管理、连接弹性、缓存性能基准等功能。
    - **看点：** 展示了Pi扩展系统的强大能力，为特定云服务提供商提供了深度集成范例。

10. **[fix(tui): TUI double rendering on lines matching terminal width (#6562)](https://earendil-works/pi/pull/6562)**
    - **状态：** CLOSED
    - **内容：** 与PR #6561类似，但更详细地分析了双重复渲染问题。
    - **看点：** 社区对同一个TUI问题进行深入分析和多路径修复，体现了解决问题的严谨性。

### 功能需求趋势

1.  **模型兼容性深度适配：** 社区最关注的是对新模型（特别是OpenAI Codex的GPT-5.6系列）的快速适配，包括Compaction、Thinking Blocks显示、强制工具调用等核心功能的兼容。
2.  **扩展生态与API完善：** 对`ExtensionAPI`的需求持续增长，包括安全的会话替换API（#5952）、请求重载能力（#6552）、更灵活的Provider认证（#6564）等，旨在让扩展能做更多“真正有用”的事情。
3.  **会话一致性与稳定性：** 围绕Agent会话的生命周期管理（#5886）、多分支下的数据一致性（#6558）、Compaction的边界情况（#5463）等问题，凸显了社区对长稳运行和复杂操作场景下可靠性的强烈需求。
4.  **性能与资源管理：** 用户对`scale up`时的性能瓶颈，如300秒超时（#2257），以及更精细的上下文控制，如人工设置上下文限制（#6206）表现出持续关注。
5.  **第三方Provider集成：** 出现了针对Scaleway（#6165）、改进对Grok（#6587）和Anthropic（#6586）等Provider支持的具体请求，表明Pi的Provider生态正在多元化发展。

### 开发者关注点

1.  **多Provider认证机制的割裂：** 不同Provider（如OpenAI vs Bedrock vs 自定义代理）的认证方式差异给使用带来障碍，尤其是在使用`/tree`分支总结等功能时，需要更统一的认证处理逻辑。
2.  **Agent会话状态的复杂性：** Agent的结算、续接、以及多分支下的数据一致性，是当前开发中最棘手的痛点之一。开发者需要更清晰的会话状态机和数据流控制。
3.  **TUI与用户交互体验的磨平：** 尽管“无头模式”是主要场景，但TUI的BUG（如渲染错误、图片丢失）依然被频繁报告，说明开发者仍期望一个稳定的交互UI，特别是用于调试和快速任务。
4.  **扩展开发的隐藏陷阱：** 扩展开发者在实际开发中会遇到诸多潜规则和BUG，例如`sendUserMessage`的调度问题（#6574）、Provider子路径在扩展中的导入错误（#6573）等，这表明扩展开发文档和基础设施有待加强。
5.  **Compaction逻辑的微妙性：** Compaction是长对话的基石，但它的触发时机（#6339）、传递参数（#6477）以及与Provider特定API的交互，是BUG高发区，开发者需要更可预测和透明的Compaction策略。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-07-13）

---

## 今日速览

社区对**多工作区支持（RFC #6378）**的讨论最为热烈（20条评论），这是daemon架构的一次重要扩展。与此同时，**CI稳定性问题出现反复**，多次E2E测试失败（#6781、#6778、#6773），并且一次夜间发布因质量门禁失败（#6786）。多个重要PR合并，包括daemon通道运行时控制（#6741）、桌面版发布版式修复（#6792）以及Web Shell持久化分页边界控制（#6769）。

---

## 社区热点 Issues（10条）

1. **[#6378] RFC: Support multiple workspaces in one qwen serve daemon**  
   P2 / feature-request / 20条评论  
   ⭐ 当前daemon模型为“1 daemon = 1 workspace × N sessions”，此RFC提议支持多工作区共存同时保持向后兼容，涉及会话管理和ACP协议扩展。社区讨论积极，尚未达成最终方案。  
   https://github.com/QwenLM/qwen-code/issues/6378

2. **[#5472] Restore real-time full-pane thinking streaming**  
   P3 / feature-request / 6条评论  
   ⭐ 用户要求在推理过程中实时展开思考链（类似v0.18.2的 `/think` 行为），当前 `Ctrl+O` 仅在结束后显示，实时性缺失。社区有1个赞，多人反馈此体验退化。  
   https://github.com/QwenLM/qwen-code/issues/5472

3. **[#6721] Keep deferred tool discovery from invalidating prompt cache prefixes**  
   P2 / bug / 6条评论  
   🐞 延迟工具被搜索时，会触发真实工具schema解析并调用 `setTools()`，导致prompt缓存前缀失效，影响性能。需要优化工具发现流程避免频繁刷新缓存。  
   https://github.com/QwenLM/qwen-code/issues/6721

4. **[#6762] Feature Request: Skill Context Lifecycle Management**  
   P2 / feature-request / 4条评论  
   🔧 当前SKILL.md内容作为tool results永久留在上下文中，无法卸载或压缩。提议引入技能上下文生命周期管理（卸载、压缩、标记完成），属于上下文性能路线图的一部分。  
   https://github.com/QwenLM/qwen-code/issues/6762

5. **[#6755] Devlog + Living Spec: background agents for cross-session project persistence**  
   P3 / feature-request / 4条评论  
   🤖 提议两个后台代理：devlog（自动记录跨会话历史）和living-spec（维护项目状态），为长期项目提供持久层逻辑。属于背景自动化路线图。  
   https://github.com/QwenLM/qwen-code/issues/6755

6. **[#6776] When using Ctrl-C to exit can end up with garbled terminal**  
   P2 / bug / 3条评论  
   🐞 多次按 Ctrl-C 退出后，终端按键映射残留（如 `Ctrl+C` 输出 `9;5u`），需确保退出时彻底恢复终端状态。影响日常使用体验。  
   https://github.com/QwenLM/qwen-code/issues/6776

7. **[#6791] auto模式对三方api兼容异常**  
   P2 / bug / 3条评论  
   🐞 auto模式下的请求分类器对基于NewAPI封装的DeepSeek以及MiniMax官方模型不兼容：前者传递了 `<think>` 标签导致超时，后者缺少 `tool_choice` 导致返回纯文本无法解析。第三方兼容性需加强。  
   https://github.com/QwenLM/qwen-code/issues/6791

8. **[#6781] Main CI failed: E2E Tests on 417d30584df6**  
   P1 / bug / 2条评论  
   🚨 主分支CI E2E测试失败，已自动创建跟踪Issue并标记为 `ready-for-agent`。基础设施稳定性需重点关注。  
   https://github.com/QwenLM/qwen-code/issues/6781

9. **[#6775] Expose tool-call preparation events before arguments are complete**  
   P2 / feature-request / 2条评论  
   📡 在流式工具调用中，当provider产生稳定的tool_call_id和tool_name时，立即暴露一个 `pending` 状态的工具调用生命周期事件，便于ACP消费者实时展示。  
   https://github.com/QwenLM/qwen-code/issues/6775

10. **[#6770] feat(web-shell): Add safe read-only transcript viewer**  
    P2 / feature-request / 2条评论  
    🖥️ 为不可信次要工作区添加只读持久化会话查看页面，防止任意脚本执行。属于Web Shell安全增强。  
    https://github.com/QwenLM/qwen-code/issues/6770

---

## 重要 PR 进展（10条）

1. **[#6741] feat(cli): Add runtime daemon channel control**  
   ✅ 已合并  
   为daemon添加完整的通道运行时生命周期控制：支持在启动后通过HTTP端点、TypeScript SDK或CLI命令启用、替换、查询、重载和停止通道。  
   https://github.com/QwenLM/qwen-code/pull/6741

2. **[#6506] fix(cli): optimize large paste performance and add progress indicator**  
   🔄 审核中  
   拦截括号粘贴标记，绕过readline逐字符事件处理（260K字符→1个事件），将粘贴处理时间从~1.7s降至接近0，并增加进度指示器。  
   https://github.com/QwenLM/qwen-code/pull/6506

3. **[#6745] feat(serve): support runtime workspace removal**  
   🔄 审核中  
   支持在daemon运行时移除工作区，完善了多工作区管理能力。  
   https://github.com/QwenLM/qwen-code/pull/6745

4. **[#6792] fix(ci): avoid oversized desktop release notes**  
   ✅ 已合并  
   桌面版发布改用简短正文+完整changelog链接，避免因monorepo发布笔记过大导致CI失败。  
   https://github.com/QwenLM/qwen-code/pull/6792

5. **[#6638] feat(serve): add extension management v2**  
   🔄 审核中  
   引入扩展管理V2：扩展安装保持用户级共享，激活策略支持全局默认和工作区精确覆盖。  
   https://github.com/QwenLM/qwen-code/pull/6638

6. **[#6606] fix(core): Sanitize internal daemon secrets from shell subprocess environments**  
   🔄 审核中  
   清理shell子进程环境中的内部daemon密钥，防止敏感信息泄漏。  
   https://github.com/QwenLM/qwen-code/pull/6606

7. **[#6771] feat(review): capture untracked files, resolve anchors from snippets, and gate posting in code**  
   🔄 审核中  
   `/review` 技能修复：捕获未跟踪文件、从片段解析锚点、并在代码中控制帖子发布逻辑，提升代码审查准确性。  
   https://github.com/QwenLM/qwen-code/pull/6771

8. **[#6703] feat(web-shell): add session created callback**  
   🔄 审核中  
   为Web Shell添加可选的异步会话创建回调，在会话创建后、附加会话前应用模型或审批模式设置。  
   https://github.com/QwenLM/qwen-code/pull/6703

9. **[#6769] feat(serve): Bound persisted transcript pages**  
   ✅ 已合并  
   为已持久化会话查看页面添加资源边界：每页最多4MiB源数据、单个聚合记录大小限制、序列化响应上限32MiB，防止OOM。  
   https://github.com/QwenLM/qwen-code/pull/6769

10. **[#6766] feat(ci): add stale failure patrol**  
    🔄 审核中  
    新增定时（每10分钟）PR CI失败巡逻工作流，自动处理针对 `main` 的陈旧失败，减少人工干预。  
    https://github.com/QwenLM/qwen-code/pull/6766

---

## 功能需求趋势

从当日Issue和PR来看，社区最关注的功能方向包括：

- **多工作区/Daemon架构扩展**：`#6378` RFC提出单一daemon支持多工作区，配套PR有运行时工作区移除（#6745）和通道控制（#6741）。
- **上下文性能与生命周期管理**：`#6721`（缓存前缀失效）、`#6762`（技能上下文生命周期）、`#6788`（微压缩包含技能结果）均围绕如何更高效管理模型上下文。
- **后台持久化与自动化**：`#6755` 提出devlog和living-spec后台代理，跨会话保持项目状态；`#6770` 安全只读视图则是对Web Shell的实用增强。
- **第三方模型兼容性**：`#6791` 暴露auto模式对DeepSeek/MiniMax的兼容问题，同类诉求还包括Grok模型支持（#6774）、内联模型切换（#5967）。
- **用户交互体验**：实时思考流回归（#5472）、大粘贴性能优化（#6506）、终端退出乱码修复（#6776）反映用户对交互流畅度的高要求。

---

## 开发者关注点

- **CI稳定性**：当日出现多次E2E测试失败（#6781、#6773、#6778）和一次发布失败（#6786），开发者对CI可靠性高度关注，已提PR增加失败自动巡逻（#6766）。
- **安全与认证**：Feishu通道因无效凭据错误报告就绪（#6779）、daemon密钥泄漏风险（#6606）提示用户对安全验证有明确需求。
- **工具调用与缓存**：延迟工具发现导致缓存失效（#6721）、工具调用事件过早暴露（#6775）是agent框架层面的高频痛点，直接影响响应速度。
- **配置与兼容**：用户期望可调节agent超时（#5838）、工具可见性配置（#6368）、自定义会话组颜色（#6744），以及第三方API的顺畅集成（#6791）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，各位开发者，早上好。以下是基于 GitHub 仓库 `Hmbown/DeepSeek-TUI` 数据生成的2026年7月13日社区动态日报。

---

### **DeepSeek TUI 社区动态日报 | 2026-07-13**

#### **1. 今日速览**

今日社区无新版本发布，但开发活动依然活跃。核心动态是社区正集中精力解决 **Anthropic API 集成中的兼容性问题**（#4329），通过 #4346 和 #4348 两个 PR 从根源上修复了 `tool_use` 和缓存计费错误。同时，**计费系统向 provider 路由的迁移**（#4351）和 **MiniMax 模型的支持**（#4352）也在推进中，标志着项目在 API 兼容性和成本核算准确性上迈出重要一步。

#### **2. 版本发布**

无

#### **3. 社区热点 Issues**

由于过去24小时内仅更新了3条 Issue，以下逐一进行分析：

1.  **#4329 [已关闭] Anthropic API 错误 (`tool_use` 缺失 `tool_result`)**
    *   **链接**: [Issue #4329](https://github.com/Hmbown/CodeWhale/issues/4329)
    *   **重要性**: ⭐⭐⭐⭐⭐ 这是导致用户在使用 Anthropic 模型时请求被拒的 **核心 bug**，影响所有深度使用工具调用的用户。
    *   **社区反应**: 已关闭，通过修复方式 (#4346) 解决，将 issue 标记为 `bug` 和 `enhancement`，表明这是一个需要同时修复漏洞和增强健壮性的问题。

2.  **#3915 [开放] UX (技能): `$skill <task>` 和 `/<skill> <task>` 会静默丢弃任务文本**
    *   **链接**: [Issue #3915](https://github.com/Hmbown/CodeWhale/issues/3915)
    *   **重要性**: ⭐⭐⭐⭐ 这是一个长期存在的 **UX 痛点**。用户期望像 Claude Code 那样的自然语言技能调用，但当前实现会静默失败，导致用户需要重试，严重影响使用流畅度。
    *   **社区反应**: 社区反应一般（1条评论），但作者 (Hmbown) 将其标记为 `bug`, `documentation`, `enhancement`, `question`，说明问题复杂且严重，是未来 UI 改进的重点方向。

3.  **#4335 [开放] 功能: 让离线评分卡支持 Provider 感知**
    *   **链接**: [Issue #4335](https://github.com/Hmbown/CodeWhale/issues/4335)
    *   **重要性**: ⭐⭐⭐⭐⭐ **直接影响成本计算的准确性**。当前离线评分卡只根据模型名称计算价格，无法区分来自不同 Provider（如 OpenRouter 与直接 API）的成本，导致成本报告失真。
    *   **社区反应**: 已有一个对应的修复 PR (#4351)，说明团队已着手解决，这是计费系统的一次重要增强。

#### **4. 重要 PR 进展**

由于过去24小时内仅更新了7个 PR，以下进行核心分析：

1.  **#4351 [开放] 修复: 将成本绑定到 Provider 路由**
    *   **链接**: [PR #4351](https://github.com/Hmbown/CodeWhale/pull/4351)
    *   **内容**: 这是对 Issue #4335 的直接回应。它将离线评分卡的价格绑定到`(provider, wire_model_id)`的精确组合上，解决了不同路由下成本计算错误的问题。同时，它还会在 `turn_end` 记录中携带 Provider 信息。**这是本次日报中最具价值的修复之一**。

2.  **#4353 [已合并] 文档: 为 `AGENTS.md` 添加 Cursor Cloud 开发环境说明**
    *   **链接**: [PR #4353](https://github.com/Hmbown/CodeWhale/pull/4353)
    *   **内容**: 为在 Cursor Cloud 上搭建开发环境的开发者提供了专用指导。虽然是非代码变更，但对降低新贡献者的上手门槛有实际帮助。

3.  **#4347 [已合并] 国际化: 添加韩语 (ko) 支持**
    *   **链接**: [PR #4347](https://github.com/Hmbown/CodeWhale/pull/4347)
    *   **内容**: 由社区贡献者 `moduvoice` 提交，为 TUI 添加了完整的韩语翻译（共计752个键）。体现了项目社区的国际化和包容性。

4.  **#4346 [已合并] 修复: 清理 Anthropic 适配器的工具输入模式 (`input_schema`)**
    *   **链接**: [PR #4346](https://github.com/Hmbown/CodeWhale/pull/4346)
    *   **内容**: 这是对 Issue #4329 的 **根本修复**。它解决了当工具的 `input_schema` 包含 `oneOf`/`anyOf`/`allOf` 等复杂 JSON Schema 时，请求被 Anthropic API 拒绝的问题。

5.  **#4349 [已合并] 构建: 允许在 NetBSD 上构建**
    *   **链接**: [PR #4349](https://github.com/Hmbown/CodeWhale/pull/4349)
    *   **内容**: 扩展了项目的平台支持，为 NetBSD 系统生成了缺少的绑定文件。这是对构建系统的一次友好改进。

6.  **#4348 [已合并] 修复(TUI): 按官方费率计费 Anthropic 缓存写入 Token**
    *   **链接**: [PR #4348](https://github.com/Hmbown/CodeWhale/pull/4348)
    *   **内容**: 这是对 Issue #4318 的修复。它正确地分离了 `cache_creation_input_tokens`，将其作为独立的 `cache_write` 类别计费，而不是混淆在缓存未命中中，使得计费更加精确。

7.  **#4352 [开放] 功能: 添加 MiniMax Messages 兼容路由**
    *   **链接**: [PR #4352](https://github.com/Hmbown/CodeWhale/pull/4352)
    *   **内容**: 新增了对国产模型提供商 **MiniMax**（MiniMax-M3, MiniMax-M2.7）的全面支持，覆盖 Provider 注册、配置、CLI、TUI 及请求客户端。这是项目向更多模型供应商开放的重要一步。

#### **5. 功能需求趋势**

从今日的 Issue 和 PR 中可以提炼出以下核心趋势：

*   **Provider 兼容性与计费准确性**：这是当前最强烈的趋势。社区不仅要求支持更多 Provider（如 MiniMax），还要求计费系统能够区分不同 Provider 的价格策略（#4335, #4351, #4348）。这表明项目正在从“单一模型支持”向“多 Provider 统一平台”演进。
*   **原生模型支持的扩展**：除了持续修复主流 API（Anthropic）的 bug，社区也在积极引入新模型。MiniMax 路由的加入（#4352）是这一趋势的明证。
*   **国际化与本土化**：韩语翻译的完整支持（#4347）表明项目正在积极降低非英语用户的使用门槛，扩大全球影响力。
*   **UX 与 IDE 工作流的深度整合**：尽管 #3915 解决缓慢，但它揭示了用户对于类似 Claude Code 的“自然语言技能调用”体验的强烈期望。同时，为 Cursor Cloud 添加文档（#4353）也体现了项目与 IDE 生态结合的趋势。

#### **6. 开发者关注点**

*   **Anthropic API 集成的稳定性是高频痛点**：从 #4329 到修复它的 #4346、#4348，再到计费问题的 #4318，可以看出 Anthropic 相关的集成问题（尤其是工具调用和缓存计费）是社区开发者最常遇到且最头疼的问题。
*   **计费透明度与准确性**：开发者不仅需要知道用了多少 Token，更希望了解每个 Token 花了多少钱，特别是在使用不同 Provider 或缓存策略时。Issue #4335 和 PR #4351 的提出，反映了开发者对成本核算的硬性需求。
*   **跨平台构建的兼容性**：PR #4349 为 NetBSD 添加构建支持，虽然小众，但说明社区中存在对特定平台、复杂环境下的构建需求，开发者希望项目能覆盖更广的基础设施。
*   **技能调用的可用性（UX 问题）**：虽然讨论热度不高，但 Issue #3915 描述的“静默丢弃文本”问题对日常使用体验的破坏性极大。开发者期待一个更直观、更不易出错的技能调用方式。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*