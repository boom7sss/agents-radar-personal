# 掌上超声产品与交互 · 2026-11-12

> 只收录对界面、扫查工作流、AI 引导或工程集成有明确价值的新变化；没有强信号时本栏不生成。

1. **OHIF 阅片器修复影像数据源绝对地址处理** · `工程集成`
   **这是什么：** OHIF 是开源的浏览器端医学影像阅片器，本次修复 DICOMweb 数据源对绝对 BulkDataURI 未应用 transform 的问题
   **和你的项目有什么关系：** 掌超若通过浏览器或 WebView 加载 PACS 图像、像素数据走 BulkDataURI，可避免拉图失败或路径错误
   **建议：** 进入 PACS/Web 阅片集成阶段再评估，并验证该版本；当前仍属 beta
   [查看版本说明](https://github.com/OHIF/Viewers/releases/tag/v3.14.0-beta.85) · 来源：OHIF Viewer
