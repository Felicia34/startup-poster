# AI Startup 活动物料

为「AI 初创公司扶持计划」准备的报名表单与海报，方便 BD 在各大网站发帖、收集潜在客户信息。

## 文件说明

| 文件 | 说明 |
|------|------|
| `form.html` | 报名表单页面，含必填项：公司名、First Name、Last Name、工作邮箱、电话 |
| `poster.html` | 海报页：输入表单链接可生成带二维码的海报，截图即可发帖 |
| `ai-startup-poster.png` | 静态海报图（中心为二维码占位区，可自行叠加二维码后使用） |

## 使用步骤

### 1. 配置表单收集（Formspree）

1. 打开 [Formspree 创建表单](https://formspree.io/create)
2. 用你的邮箱注册/登录，创建一个新表单
3. 记下表单 ID（例如 `xyzabcde`）
4. 在 `form.html` 里把 `https://formspree.io/f/YOUR_FORM_ID` 中的 `YOUR_FORM_ID` 替换成你的表单 ID

之后所有提交会发到你的 Formspree 收件箱，可在后台查看、导出 CSV、筛选有潜力的团队。

### 2. 部署表单页面（获得可扫码的链接）

**方式一：Railway（推荐，你已有账号）**

1. 在项目目录执行：`git init` → 添加所有文件 → 推送到 GitHub 仓库
2. 打开 [Railway](https://railway.app)，用 GitHub 登录，New Project → Deploy from GitHub repo，选这个仓库
3. 部署完成后在项目里点 **Settings → Networking → Generate Domain**，会得到类似 `xxx.up.railway.app` 的域名
4. 你的表单链接即为：`https://xxx.up.railway.app/form.html`，海报页：`https://xxx.up.railway.app/poster.html`（根路径 `/` 也会打开表单页）

**方式二：其他托管**

- **GitHub Pages**：建仓库上传文件，开启 Pages，得到 `https://你的用户名.github.io/仓库名/form.html`
- **Netlify / Vercel**：拖拽文件夹上传，得到分配的子域名
- 或你们自己的官网子路径

得到链接后，可用短链缩短再生成二维码。

### 3. 生成带二维码的海报

1. 用浏览器打开本地的 `poster.html`
2. 在输入框里粘贴上一步的表单页面链接
3. 点击「生成海报二维码」
4. 对整张海报区域截图（或浏览器右键 → 打印 → 另存为 PDF），即得到可发帖的海报图

若使用 `ai-startup-poster.png`：用设计工具（Figma / 创客贴 / 稿定等）在中心「扫码」区域贴上你生成的二维码图即可。

### 4. 发帖与收集

- 将海报发到目标网站/社群
- 用户扫码 → 打开表单 → 填写并提交
- 你在 Formspree 收件箱中查看提交，按公司名、邮箱、电话等筛选有潜力的初创团队并跟进

## 表单必填字段（已包含）

- **Company Name** 公司名称  
- **First Name** 名  
- **Last Name** 姓  
- **Work Email** 工作邮箱  
- **Phone Number** 电话  

以上字段在 `form.html` 中均已设为必填，提交前会做前端校验。
