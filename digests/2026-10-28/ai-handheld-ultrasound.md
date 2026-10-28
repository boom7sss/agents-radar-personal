# 掌上超声产品与交互 · 2026-10-28

> 只收录对界面、扫查工作流、AI 引导或工程集成有明确价值的新变化；没有强信号时本栏不生成。

1. **dcmjs 1.0.0-beta.5：全部包同时支持 require 与 import 加载** · `工程集成`
   **这是什么：** dcmjs 是 JS 里读写 DICOM 数据的工具库，本次修复使所有发布包在 require 和 import 下都能加载
   **和你的项目有什么关系：** 掌超配套的 Web 或 Node 端若要在同一后端里导入不同加载方式，可能影响 DICOM 解析与测量标注存取流程
   **建议：** 进入 DICOM 数据处理模块开发时再评估，目前仍是 beta 版，不建议上生产
   [查看版本说明](https://github.com/dcmjs-org/dcmjs/releases/tag/v1.0.0-beta.5) · 来源：dcmjs
