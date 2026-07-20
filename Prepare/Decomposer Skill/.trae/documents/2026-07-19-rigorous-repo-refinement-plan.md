# Decomposer Skill 严苛标准完善计划

> 基于 `项目反思.md` 和 `skill研发的对话启发.md` 两份反思文件，结合当前仓库已完成状态，用最严苛标准制定的最终完善方案。

---

## 一、摘要

上一轮改进（2026-07-18）已实现 12 项改进，覆盖了反思文件识别的五个关键弱点：学术价值缺失、填表黑箱、执行成本不可控、MIT 学者角色缺失、无实证验证框架。但存在以下问题：

1. **验证未执行**：旧计划的 Phase 4（反空壳自检、路径完整性、内容一致性）从未执行
2. **未提交**：所有修改处于未提交状态（8 个修改文件 + 5 个新文件）
3. **概念有壳无实**：协议中提及的多个关键概念（Falsifiability Whitepaper、Error Budget Specification、Zero-Code Validation、7-Day Test Chain、Decision Cards）没有对应的独立模板，用户仍处于"知道概念但不知如何下笔"的状态
4. **关键洞见未纳入**：反思文件中的"认知债务 vs 工程债务"区分、"数据坟场协议"等概念未在协议中体现
5. **无快速参考**：协议约 500 行，缺少单页速查卡

本计划分四个阶段执行，最终通过协议自身的反空壳自检后才能提交。

---

## 二、当前状态分析

### 2.1 已完成（上一轮 12 项改进）

| 改进 | 状态 | 备注 |
|------|------|------|
| PROTOCOL.md — Probe Toolkit | 已完成 | 三种探针技术（Boundary Puncture, Reverse Interrogation, Legacy Presumption） |
| PROTOCOL.md — MIT Scholar 框架 | 已完成 | 四层分解框架（实验装置/理论先行/层级化仿真/误差预算） |
| PROTOCOL.md — 三张决策卡 | 已完成 | Fatal Assumption, Resource Leverage, Minimum Sellable Unit |
| PROTOCOL.md — Scale Adaptation | 已完成 | 项目规模适配决策矩阵 |
| PROTOCOL.md — 实证验证框架 | 已完成 | 三个实验方案 |
| MANIFEST.md — Epistemic Status | 已完成 | 学术诚实声明 |
| VALIDATION.md | 新文件 | 实证验证路线图 |
| TUTORIAL.md | 新文件 | 零基础教程（咖啡店场景） |
| references/SCALE_GUIDE.md | 新文件 | 规模适配指南 |
| references/COMMON_PITFALLS.md | 新文件 | 10 个常见错误 |
| adapters/ 更新 | 已完成 | trae/human/team 三个适配器 |
| README.md | 已完成 | 新文件引用和文件列表更新 |
| docs/index.html | 已完成 | 网站更新（s6/s7/s8 导航 + 实证验证 + 教程章节） |

### 2.2 未完成

| 事项 | 状态 | 备注 |
|------|------|------|
| 反空壳自检 | 未执行 | 对 8 个修改文件执行 Step 5 五项检查 |
| 路径完整性 | 未执行 | 确认所有新文件存在，所有相对路径引用可解析 |
| 内容一致性 | 未执行 | 确认 MIT Scholar 框架在所有文件中一致 |
| 跨文件引用链 | 未执行 | 确认 PROTOCOL.md -> references/ -> adapters/ 引用链完整 |
| 网站渲染测试 | 未执行 | 确认 docs/index.html 正确渲染 |
| Git 提交 | 未提交 | 8 个修改 + 5 个新文件（含计划文件） |

### 2.3 仍存在的缺口

| 缺口 | 来源 | 严重程度 |
|------|------|---------|
| Falsifiability Whitepaper 无模板 | MIT Scholar Layer 0 提及但无工具 | 高 |
| Error Budget Specification 无模板 | MIT Scholar Layer 3 提及但无工具 | 高 |
| Zero-Code Validation 无模板 | 非技术创始人场景提及但无工具 | 高 |
| 7-Day Test Chain 无模板 | 非技术创始人 Step 4 提及但无工具 | 中 |
| Decision Cards 无工作表 | 决策者场景提及但无工具 | 中 |
| "认知债务 vs 工程债务"未纳入 | 反思文件核心洞见 | 高 |
| "数据坟场协议"未纳入 | MIT Scholar 框架核心概念 | 中 |
| 无单页速查卡 | 协议 500 行缺乏快速参考 | 中 |
| Probe Toolkit 仅存在于 PROTOCOL.md | 无法独立引用 | 低 |

---

## 三、改进方案

### Phase 1: 验证（反空壳自检 + 完整性检查）

目标：确保所有已有修改通过协议自身的质量门。

#### 1.1 反空壳自检

对以下 8 个修改文件执行 Step 5 的五项检查：

| 文件 | 检查内容 |
|------|---------|
| `PROTOCOL.md` | 所有新增节点是否有生存条件？有无术语充数？黄+红 >= 30%？有无明确"我不知道"？能否命名第一步行动？ |
| `MANIFEST.md` | Epistemic Status 是否诚实？有无空壳表述？ |
| `VALIDATION.md` | 假设是否可证伪？实验设计是否完整？ |
| `TUTORIAL.md` | 教程步骤是否可行动？是否包含纠错机制？ |
| `references/SCALE_GUIDE.md` | 建议是否可操作？有无模糊表述？ |
| `references/COMMON_PITFALLS.md` | 每个陷阱是否有具体修正方法？ |
| `adapters/trae/SKILL.md` | 引用路径是否正确？文件列表是否完整？ |
| `docs/index.html` | 新章节内容是否与源文件一致？ |

**输出**：为每个文件输出 pass/fail 清单。对失败项进行修正，重新检查，直到全部通过。

#### 1.2 路径完整性验证

确认以下路径可解析：

- `PROTOCOL.md` -> `references/COGNITIVE_POSITIONS.md`
- `PROTOCOL.md` -> `references/ANTI_SHELL_CHECKLIST.md`
- `PROTOCOL.md` -> `references/SCALE_GUIDE.md`
- `PROTOCOL.md` -> `references/COMMON_PITFALLS.md`
- `PROTOCOL.md` -> `VALIDATION.md`
- `adapters/trae/SKILL.md` -> 所有 `../../` 引用
- `.trae/skills/decomposer/SKILL.md` -> 所有引用

#### 1.3 内容一致性检查

确认 MIT Scholar 框架在所有文件中一致：

- `PROTOCOL.md` Step 1/3/4 Manifestation -> MIT Scholar 的表述一致
- `references/COGNITIVE_POSITIONS.md` -> MIT Scholar 的检测条件和输出形状一致
- `MANIFEST.md` -> "The Shape of the Output" 中 MIT Scholar 的描述一致
- `adapters/trae/SKILL.md` -> 认知位置检测包含 MIT Scholar

#### 1.4 跨文件引用链完整性

确认引用链完整：
- PROTOCOL.md 引用 -> references/ 文件存在并正确
- references/ 文件引用 -> adapters/ 文件存在并正确
- 所有文件引用 -> 新文件（VALIDATION.md, TUTORIAL.md, SCALE_GUIDE.md, COMMON_PITFALLS.md）存在并正确

#### 1.5 网站渲染测试

- 打开 `docs/index.html`，确认导航栏 s6/s7/s8 链接正确
- 确认"7.0 EMPIRICAL VALIDATION"章节渲染正确
- 确认"8.0 TUTORIAL"章节渲染正确
- 确认 GitHub Pages 链接可访问

---

### Phase 2: 新增独立模板（填补"有壳无实"缺口）

目标：协议中提及的每个概念都提供对应的可填写模板。

#### 2.1 新增 `references/FALSIFIABILITY_WHITEPAPER_TEMPLATE.md`

**做什么**：为 MIT Scholar Layer 0 提供可填写的 Falsifiability Whitepaper 模板。

**为什么**：MIT Scholar 框架强调"先写《可证伪性白皮书》"，但没有提供白皮书应该长什么样。用户知道了概念，但不知道如何下笔。

**内容**：
- 主定理（Master Theorem）定义模板："[产品]要验证的核心命题是[一句话]，如果该命题为假，则[后果]"
- 摧毁条件（Destruction Condition）定义模板："当观测到[具体指标]时，整个方向立即判定为无效"
- 时间尺度定义模板："[快变量描述] / [中变量描述] / [慢变量描述]"
- 完整示例（使用"Build the Next TikTok"或"Open a Coffee Shop"）

#### 2.2 新增 `references/ERROR_BUDGET_SPEC_TEMPLATE.md`

**做什么**：为 MIT Scholar Layer 3 提供可填写的 Error Budget Specification 模板。

**为什么**：MIT Scholar 的误差预算概念是协议的精华之一，但没有模板，用户不知道如何将理论容忍度转化为可外包的规格。

**内容**：
- 子系统误差预算分配表模板
- 工程层 vs 理论层的误差容忍度映射
- "如果工程层无法达到理论层要求的精度，修改理论而非强迫工程"的决策流程
- 完整示例

#### 2.3 新增 `references/ZERO_CODE_VALIDATION_TEMPLATE.md`

**做什么**：为非技术创始人提供零代码验证方案模板。

**为什么**：非技术创始人是协议的主要用户群体之一，但协议只提供了概念（人工高仿、Wizard-of-Oz），没有提供具体的验证方案模板。

**内容**：
- 手动流程 vs 自动化流程的映射模板
- Wizard-of-Oz 实验设计模板（"假装系统是人"的具体操作步骤）
- 人工验证指标模板（"多少用户参与才算验证通过"）
- 完整示例（使用咖啡店场景或 TikTok 场景）

#### 2.4 新增 `references/SEVEN_DAY_TEST_CHAIN_TEMPLATE.md`

**做什么**：为非技术创始人提供 7 天致死测试链模板。

**为什么**：PROTOCOL.md 中 Step 4 的非技术创始人 Manifestation 提到了 7 天测试链，但没有独立的可执行模板。

**内容**：
- 第 1-2 天：致命前提验证（具体操作步骤）
- 第 3-4 天：人工 MVP 构建（具体操作步骤）
- 第 5-7 天：数据回收与方向判断（具体操作步骤）
- 每个阶段的可执行条件（"做到什么程度算通过"）
- 每个阶段的终止条件（"什么信号出现就停止"）

#### 2.5 新增 `references/DECISION_CARDS_WORKSHEET.md`

**做什么**：为决策者提供三张决策卡的可填写工作表。

**为什么**：三张决策卡是决策者认知位置的核心输出，但 PROTOCOL.md 只描述了概念，没有提供可填写的表格。

**内容**：
- 卡 1：致命前提验证卡（Fatal Premise Validation Card）—— 带填空模板
- 卡 2：资源杠杆卡（Resource Leverage Card）—— 带填空模板
- 卡 3：最小可卖单位卡（Minimum Sellable Unit Card）—— 带填空模板
- 每张卡附带一个完整示例

#### 2.6 新增 `references/QUICK_REFERENCE_CARD.md`

**做什么**：创建单页协议速查卡。

**为什么**：PROTOCOL.md 约 500 行，不适合快速参考。一个单页速查卡可以大幅降低使用门槛，让用户在 30 秒内理解协议全貌。

**内容**：
- 五步协议的一行摘要
- 三步测试（Zone Classification / Dependency Test / Survival Condition）
- 五步检查清单
- 70% 规则
- 关键术语表（Element, Survival Condition, Zone, Lethality, Error Budget）
- 认知位置快速检测

---

### Phase 3: 协议增强（纳入反思文件关键洞见）

目标：将反思文件中的核心洞见显式纳入协议体系。

#### 3.1 PROTOCOL.md — 新增"认知债务与工程债务的区分"

**做什么**：在 Protocol Constraints 部分新增子章节，明确定义 "Cognitive Debt vs Engineering Debt" 的区分。

**为什么**：反思文件中最核心的认知迭代之一是"认知债务必须保留在内部，工程债务可以外包"。这个区分是协议实用性的关键，但对协议读者来说这是隐式的，需要显式化。

**内容**：
- 定义：认知债务是需要亲自思考才能解决的问题；工程债务是可以通过外包/工具/代码自动解决的问题
- 区分规则：如果一个问题可以交给一个完全不了解项目背景的人执行，它是工程债务；否则是认知债务
- 协议的角色：协议只处理认知债务的分解，工程债务的分配留给外部工具
- 示例对比

#### 3.2 PROTOCOL.md — 新增"数据坟场协议"（Data Graveyard Protocol）

**做什么**：在 MIT Scholar 的 Step 3 Manifestation 中扩展"遗产路径"概念，或新增独立子章节。

**为什么**：反思文件中 MIT Scholar 的四层框架包含"遗产路径"——预设 90% 的研究型项目会失败，但失败的残骸应具有学术价值。这个洞见是 MIT Scholar 区别于其他认知位置的核心之一。

**内容**：
- 定义：Data Graveyard Protocol 是一套在项目启动时就预设的"数据回收协议"
- 三个要素：全链路埋点、对照组设计、失败模式文档化
- 为什么这能转化未知：因为"如果项目失败，我能从中学到什么"本身就是一个已知的未知
- 与 Step 4 的集成：在 Error Budget 中预留"失败分析预算"

#### 3.3 新增 `references/PROBE_TOOLKIT.md` — 提取 Probe Toolkit 为独立文件

**做什么**：将 PROTOCOL.md 中的 Probe Toolkit 三个技术提取为独立的参考文件。

**为什么**：Probe Toolkit 是解决"填表是黑箱"问题的核心工具，目前仅存在于 PROTOCOL.md 内部，无法被其他文件独立引用。提取后可以提高可发现性和可复用性。

**内容**：
- 直接复制 PROTOCOL.md 中的 Probe Toolkit 内容（三种技术 + 示例）
- 添加"何时使用每种技术"的决策指南
- 添加"组合使用"的建议
- 在 PROTOCOL.md 中保留核心内容，添加指向 `references/PROBE_TOOLKIT.md` 的引用

#### 3.4 更新文件引用

**做什么**：在所有相关文件中添加新模板文件的引用。

**文件**：
- `PROTOCOL.md`：在 Protocol Constraints 或相关位置添加对 `references/` 中新模板文件的引用
- `README.md`：更新文件列表，添加新模板文件
- `adapters/trae/SKILL.md`：更新参考文件表
- `.trae/skills/decomposer/SKILL.md`：更新参考文件表
- `docs/index.html`：如果需要，更新网站内容

---

### Phase 4: 最终验证与提交

#### 4.1 最终反空壳自检

对所有文件（包括 Phase 2 和 Phase 3 新增的文件）重新执行 Step 5 的五项检查。

#### 4.2 最终路径完整性验证

确认所有跨文件引用路径可解析。

#### 4.3 最终内容一致性检查

确认所有文件中使用的一致性术语（MIT Scholar、认知债务、生存条件等）。

#### 4.4 Git 提交

使用英文提交信息，包含所有变更的摘要：

```
feat: add standalone templates, protocol enhancements, and final verification

- Add 6 standalone templates (Falsifiability Whitepaper, Error Budget Spec,
  Zero-Code Validation, 7-Day Test Chain, Decision Cards, Quick Reference)
- Add Cognitive Debt vs Engineering Debt distinction to PROTOCOL.md
- Add Data Graveyard Protocol to MIT Scholar framework
- Extract Probe Toolkit as standalone reference file
- Run Anti-Shell Self-Check on all 8 modified files
- Verify path integrity, content consistency, cross-file references
- Update all reference lists in README, adapters, and TRAE skill
```

---

## 四、执行顺序与依赖关系

```
Phase 1: 验证（无依赖，立即执行）
├── 1.1 反空壳自检 — 8 个修改文件
├── 1.2 路径完整性验证
├── 1.3 内容一致性检查
├── 1.4 跨文件引用链
└── 1.5 网站渲染测试

Phase 2: 新增模板（依赖 Phase 1 完成）
├── 2.1 FALSIFIABILITY_WHITEPAPER_TEMPLATE.md
├── 2.2 ERROR_BUDGET_SPEC_TEMPLATE.md
├── 2.3 ZERO_CODE_VALIDATION_TEMPLATE.md
├── 2.4 SEVEN_DAY_TEST_CHAIN_TEMPLATE.md
├── 2.5 DECISION_CARDS_WORKSHEET.md
└── 2.6 QUICK_REFERENCE_CARD.md

Phase 3: 协议增强（依赖 Phase 1, 可与 Phase 2 并行）
├── 3.1 认知债务 vs 工程债务（PROTOCOL.md）
├── 3.2 数据坟场协议（PROTOCOL.md）
├── 3.3 PROBE_TOOLKIT.md 独立文件
└── 3.4 更新文件引用

Phase 4: 最终验证与提交（依赖 Phase 2+3 完成）
├── 4.1 最终反空壳自检
├── 4.2 最终路径完整性
├── 4.3 最终内容一致性
└── 4.4 Git 提交
```

---

## 五、潜在挑战与应对

| 挑战 | 风险等级 | 应对策略 |
|------|---------|---------|
| Phase 1 反空壳自检发现大量失败项 | 中 | 记录所有失败项，按优先级修正，重新检查。每次自检循环应减少失败项数量。 |
| 新增 6 个模板文件导致文档膨胀 | 中 | 所有模板放在 references/ 目录，不污染根目录。PROTOCOL.md 中只保留核心概念和引用指针。 |
| 认知债务 vs 工程债务的区分可能被误解 | 低 | 使用具体的示例对比（"推荐算法设计是认知债务，部署服务器是工程债务"）。 |
| 数据坟场协议可能被解读为"鼓励失败" | 低 | 明确声明"这不是鼓励失败，而是确保失败的可学习性。这是对资源的最大尊重。" |
| 大量文件改动导致引用断裂 | 中 | 每次 Phase 完成后执行一次路径验证，不等到最后。 |

---

## 六、验证标准

1. **反空壳自检全部通过**：所有文件通过 Step 5 的五项检查，无任何失败项
2. **路径完整性 100%**：所有相对路径引用解析到存在的文件
3. **内容一致性**：MIT Scholar、认知债务、生存条件等核心术语在所有文件中定义一致
4. **跨文件引用链完整**：PROTOCOL.md -> references/ -> adapters/ -> .trae/skills/ 的引用链完整
5. **网站可访问**：docs/index.html 渲染正确，所有新章节可访问
6. **Git 提交**：所有修改使用英文提交信息，包含所有变更的摘要

---

## 七、执行条件

- 本计划在获得用户批准后执行
- 执行顺序：Phase 1 -> Phase 2 + Phase 3 (并行) -> Phase 4
- 每个 Phase 完成后进行阶段性验证，不等待最后一次性验证
- Phase 1 验证的失败项需要在进入 Phase 2 前全部修正