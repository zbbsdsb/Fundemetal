# Decomposer 推广视频 — HyperFrames 实现计划

> 用 HTML 动画制作 YouTube + Twitter 宣传视频，展示 Decomposer 项目及其独特设计

---

## 一、当前进度摘要

| 阶段 | 状态 | 说明 |
|------|------|------|
| Phase 1: 项目初始化 | ✅ 完成 | `npx hyperframes init`, 资产复制, config 文件 |
| Phase 2: 场景实现 | ✅ 完成 | 6 场景 + 开场, GSAP 动画, 硬杀死 |
| Phase 3: 过渡与动画打磨 | ✅ 完成 | 场景过渡, 时序调整, 缓动函数 |
| Phase 4: 1:1 适配 | ✅ 完成 | 响应式 CSS media queries |
| Phase 5: 验证与发布 | ⚠️ 进行中 | 修复已应用, check 未重新运行, 渲染失败 2 次 |

**项目位置**: `D:\github projects\Decomposer Skill\decomposer-promo\`

---

## 二、当前状态分析

### 2.1 代码修复状态 — 全部已完成

上次检查发现的 11 项 Layout 错误和 16 项 Contrast 警告已全部修复：

| 修复项 | 修改前 | 修改后 | 状态 |
|--------|--------|--------|------|
| `s1-crack-edge` 添加 `data-layout-allow-occlusion` | 缺失 | 新增 | ✅ |
| `s1-void` 添加 `data-layout-allow-occlusion` | 缺失 | 新增 | ✅ |
| `.s1-module-item .mono` | `#999` | `#666` | ✅ |
| `.s2-question` | `#666` | `#4d4d4d` | ✅ |
| `.s2-question .mono` | `#999` | `#666` | ✅ |
| `.s3-step-num` | `#999` | `#666` | ✅ |
| `.s1-void-sub` | `#888` | `#b3b3b3` | ✅ |
| `.s5-zone-item` | `#999` | `#666` | ✅ |
| `.s5-zone-unknown .s5-zone-header` | `bg: #999` | `bg: #666` | ✅ |
| `.s6-end-screen .mono` | `#999` | `#666` | ✅ |

### 2.2 渲染失败分析

两次渲染尝试均失败，捕获了 351 帧（约 11.7 秒/45 秒）后在 MP4 编码阶段失败：

| 尝试 | 时间 | 结果 | 说明 |
|------|------|------|------|
| 第 1 次 | 21:46:00 | ❌ failed | 351 帧已捕获，编码失败 |
| 第 2 次 | 21:49:39 | ❌ failed | 同上 |

**疑似原因**（需运行命令确认）：
- Docker 容器内 Chrome/Chromium 渲染超时或崩溃
- 帧捕获后 ffmpeg 编码内存不足
- 字体下载失败导致渲染阻塞

### 2.3 残留问题

- `npm run check` 尚未在修复后重新运行
- 存在 2 个孤儿 Node.js 进程（PID 18816, 30808）
- `temp-render/` 临时文件未清理
- 渲染失败原因未确认

---

## 三、剩余执行步骤

### Step 1: 清理残留进程

**操作**: 终止孤儿 Node.js 进程，清理临时文件。

```bash
# 终止孤儿进程
Stop-Process -Id 18816 -Force -ErrorAction SilentlyContinue
Stop-Process -Id 30808 -Force -ErrorAction SilentlyContinue

# 清理临时渲染文件
Remove-Item -Recurse -Force "D:\github projects\Decomposer Skill\decomposer-promo\temp-render"
```

### Step 2: 重新运行 check

验证所有修复通过 HyperFrames 检查。

```bash
cd D:\github projects\Decomposer Skill\decomposer-promo
npm run check
```

**验收标准**: Lint 0 errors, Runtime 0 errors, Layout 0 errors, Contrast 0 warnings, Motion 0 errors。

### Step 3: 诊断渲染失败

在 `npm run check` 通过后，运行渲染命令并捕获完整输出以诊断失败原因：

```bash
cd D:\github projects\Decomposer Skill\decomposer-promo
npm run render 2>&1
```

**观察要点**:
- 浏览器是否正确启动（Chromium 进程）
- 帧捕获是否顺利完成（预计 1350 帧/45 秒@30fps）
- ffmpeg 编码阶段是否有错误信息
- Docker 容器是否有 OOM 或超时错误

### Step 4: 根据诊断结果修复渲染

**预期修复方案**（根据常见失败模式）：

| 失败模式 | 修复方案 |
|---------|---------|
| Chromium 崩溃 | 增加 `--no-sandbox` 或 `--disable-gpu` 标志 |
| ffmpeg 编码失败 | 更新 hyperframes 到最新版本或检查 ffmpeg 兼容性 |
| 内存不足 | 减少分辨率或帧率，或增加 Docker 内存限制 |
| 字体问题 | 确保字体明确指定且可用 |
| 渲染超时 | 缩短总时长或增加超时限制 |

### Step 5: 渲染 16:9 MP4（YouTube）

```bash
cd D:\github projects\Decomposer Skill\decomposer-promo
npm run render
```

**输出文件**: `D:\github projects\Decomposer Skill\decomposer-promo\render\main.mp4`

**质量验收**: 文件大小 < 15MB, 1920x1080, 30fps, 无视觉故障。

### Step 6: 渲染 1:1 MP4（Twitter）

```bash
cd D:\github projects\Decomposer Skill\decomposer-promo
npx hyperframes render --config hyperframes-1x1.json
```

**输出文件**: `D:\github projects\Decomposer Skill\decomposer-promo\render\main-1x1.mp4`

**质量验收**: 文件大小 < 10MB, 1080x1080, 30fps, 无视觉故障。

### Step 7: 最终验证

- 检查两个 MP4 文件是否存在且可播放
- 验证文件大小在限制范围内
- 视觉检查：无裂帧、无闪烁、文字可读
- 信息准确性：与 PROTOCOL.md 一致

---

## 四、执行顺序（精简版）

```
Step 1: 清理进程 + 临时文件   →  Stop-Process + Remove-Item
Step 2: 重新运行 check        →  npm run check
Step 3: 诊断渲染失败原因       →  npm run render 2>&1
Step 4: 根据诊断修复渲染       →  修复配置或代码
Step 5: 渲染 16:9             →  npm run render
Step 6: 渲染 1:1              →  npx hyperframes render --config hyperframes-1x1.json
Step 7: 最终验证              →  文件大小 + 视觉检查
```

---

## 五、风险与缓解

| 风险 | 缓解措施 |
|------|---------|
| Docker 渲染环境问题 | 尝试 `npx hyperframes preview` 在本地浏览器预览后，用录屏软件捕获 |
| 渲染后裂缝动画效果不如预期 | 先用 `npx hyperframes preview` 预览效果 |
| 双格式渲染时间过长 | 渲染命令约 5-10 分钟/版本，可并行运行 |
| MP4 文件过大 | 如果 >15MB，考虑降低比特率或缩短总时长 |
| 1:1 版本布局在渲染后变形 | 响应式 CSS 已在 1:1 配置下测试通过 |
| 渲染再次失败 | 备选方案：用浏览器打开 index.html 后用 OBS/系统录屏工具录制 |