# 个人日报迁移

此仓库基于 duanyytop/agents-radar，迁入 boom7sss/agents-radar 的定制代码和历史日报；保留原项目许可证。代码基线为 fd456d4，以快照导入；旧提交历史保留在原仓库。

新仓库： https://github.com/boom7sss/agents-radar-personal

## 启用前配置

在 Settings → Secrets and variables → Actions → New repository secret 添加：

- `DEEPSEEK_API_KEY`：从 DeepSeek 平台复制。旧仓库的 Secret 无法读回。
- `FEISHU_WEBHOOK_URLS`：从飞书机器人设置复制 Webhook；多个地址以逗号分隔。

不要将密钥写入代码、提交记录或聊天。

日报、周报、月报在迁移验证期间保持禁用；密钥配置完成后，先手动生成当天日报并验证飞书送达，再恢复每日定时任务。周报、月报根据需要单独开启。

代码检查和 Actions access check 不调用 DeepSeek，也不发送飞书消息。

原仓库保留，其 GitHub Actions 限制原因继续通过支持工单 #4873260 核查。
