# 超声课题精读 · 2026-11-23

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **REPA-E: Unlocking VAE for End-to-End Tuning of Latent Diffusion Transformers** · `ICCV · 2025 · 方法借鉴（未在超声验证）`
   **做什么：** 生成任务中用表征对齐损失联合调优 VAE tokenizer 与扩散 Transformer；证据限于图像生成，非修复或去噪。
   **为什么读：** 可迁移假设：在扩散 token 上加结构表征对齐损失，做消融看边缘保真；前提是需有可靠结构特征教师，且未在超声验证。
   [阅读论文](https://openaccess.thecvf.com/content/ICCV2025/html/Leng_REPA-E_Unlocking_VAE_for_End-to-End_Tuning_of_Latent_Diffusion_Transformers_ICCV_2025_paper.html)
