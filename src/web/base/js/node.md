---

order: -1
title: Node运行环境

---

## Node.js和包管理器

### Node的安装和使用

Node.js 是一个基于 Chrome V8 JavaScript 引擎构建的开源、跨平台的 JavaScript 运行环境。它允许在服务器端执行 JavaScript，使得开发者可以使用同一种语言编写前后端代码，Node.js 以其非阻塞 I/O 和事件驱动的架构而闻名，特别适合于构建高并发、高性能的实时应用、API 服务器、微服务、工具脚本等。

**特点与优势**：

1. **异步非阻塞I/O**：Node.js采用事件循环和回调函数，能高效处理并发请求，特别适合I/O密集型应用。
2. **单线程模型**：尽管JavaScript是单线程，但Node.js通过事件循环和异步处理，能够有效利用系统资源。
3. **庞大的生态系统**：npm（Node Package Manager）是世界上最大的软件注册表，提供了海量的开源库和工具。
4. **跨平台**：Node.js可在多种操作系统上运行，包括Windows、Linux和macOS。
5. **轻量级**：相比传统的Java、PHP等服务器端技术，Node.js启动速度快，资源消耗少。


#### 在 Windows 或 macOS 上安装

1. **下载安装程序**：访问 Node.js 官方网站 [https://nodejs.org/](https://nodejs.org/)，根据你的操作系统下载对应的安装包。
2. **安装**：双击下载的安装程序，跟随向导完成安装过程。通常情况下，安装程序会自动添加 Node.js 到系统的 PATH 环境变量中，使你能在命令行直接使用 `node` 和 `npm` 命令。

#### 在 Linux 上安装

对于 Ubuntu 或 Debian 系统，可以使用 apt 包管理器安装，对于 CentOS 或 RHEL，则使用 yum 或 dnf：

::: tabs#Linux

@tab:active Ubuntu 或 Debian
```bash
sudo apt update
sudo apt install nodejs npm
```

@tab CentOS 或 RHEL
```bash
sudo yum install nodejs npm
# 或者对于较新的 CentOS/RHEL 使用 dnf
sudo dnf install nodejs npm
```
:::


#### 使用 Node.js运行 JavaScript 文件

1. **创建文件**：用文本编辑器创建一个名为 `app.js` 的文件。
2. **编写代码**：在 `app.js` 中输入简单的 JavaScript 代码，例如：
   ```javascript
   console.log("Hello, Node.js!");
   ```
3. **运行代码**：打开终端，进入该文件所在的目录，然后运行：
   ```bash
   node app.js
   ```
   你会在终端看到输出 “Hello, Node.js!”。

#### 安装和使用 npm 包

1. **初始化项目**：在项目根目录下运行 `npm init`，按照提示填写信息，生成 `package.json` 文件。
2. **安装包**：例如安装 Express，运行：
   ```bash
   npm install express
   ```
3. **在代码中使用**：在 `app.js` 中引入并使用 Express：
   ```javascript
   const express = require('express');
   const app = express();
   app.get('/', (req, res) => res.send('Hello World!'));
   app.listen(3000, () => console.log('Example app listening on port 3000!'));
   ```
4. **运行服务器**：再次通过 `node app.js` 启动服务器，然后在浏览器访问 `http://localhost:3000`，可以看到 "Hello World!"。



### Node包管理器-npm
npm（Node Package Manager） 是随 Node.js 一起安装的包管理器，它让开发者能够轻松地安装、管理和共享 Node.js 应用程序及其依赖关系。npm 提供了一个巨大的公开注册表，其中包含数百万个开源软件包，这些软件包可以通过简单的命令行操作进行安装和管理。

**npm 的特点**：
1. **包生态丰富**：npm 是目前世界上最大的软件包生态系统，覆盖了从Web框架、数据库驱动到实用工具等各类库。
2. **依赖管理**：自动处理依赖关系，确保安装的包及其依赖版本兼容，通过 `package.json` 和 `package-lock.json` 文件管理项目的依赖。
3. **脚本执行**：支持定义和执行自定义脚本，便于自动化构建、测试和部署任务。
4. **版本控制**：支持语义化版本控制，方便管理包的不同版本以及升级。
5. **全球镜像**：除了官方源，还有众多地区性镜像源可用，比如淘宝 NPM 镜像，可提高下载速度。


由于 Node.js 安装时会自动包含 npm，所以安装 Node.js 即安装了 npm。不过，有时候你可能需要更新 npm 到最新版本：

```bash
npm install -g npm
```


为了加快下载速度，特别是对于中国用户，可以配置使用淘宝 NPM 镜像：

1. **临时使用**：
   ```bash
   npm --registry=https://registry.npmmirror.com install <package-name>
   ```

2. **永久配置**：
   - 在命令行设置（仅限当前用户）：
     ```bash
     npm config set registry https://registry.npmmirror.com
     ```
   - 修改全局配置文件（所有用户）：
     找到 npm 的配置文件（通常是 `~/.npmrc` 或 `/etc/npmrc`），添加或修改 `registry=https://registry.npmmirror.com`。
     即便使用nvm安装了多个版本的node，所有的版本都适用于此配置文件


npm（Node Package Manager）是 Node.js 的默认包管理器，用于安装、管理和发布 Node.js 应用的依赖包。以下是 npm 的一些基本使用方法和常用命令：

#### 初始化项目

- `npm init`: 创建一个新的 `package.json` 文件，引导你填写项目信息。使用 `-y` 跳过提示并接受默认值，快速创建：

  ```bash
  npm init -y
  ```

#### 安装依赖

- `npm install <package>`: 安装指定的包到当前项目的 `node_modules` 目录，并添加到 `package.json` 的 `dependencies` 或 `devDependencies`（使用 `--save-dev`）。

- `npm i` 或 `npm install`: 无参数时，安装 `package.json` 中列出的所有依赖。

- `npm install --save`: 安装的同时将包添加到 `dependencies`。

- `npm install --save-dev`: 安装开发依赖，添加到 `devDependencies`。

#### 更新依赖

- `npm update`: 更新所有依赖到最新版本（不改变大版本号）。

- `npm update <package>`: 更新指定包到最新版本。

#### 卸载依赖

- `npm uninstall <package>`: 卸载指定包，并从 `package.json` 中移除记录。

#### 查看依赖

- `npm list`: 列出当前项目安装的所有依赖包。

- `npm list --global`: 查看全局安装的包。

#### 脚本执行

- `npm run <script>`: 执行 `package.json` 中 `scripts` 部分定义的脚本。

#### 发布包

- `npm login`: 登录 npm 账户。

- `npm publish`: 发布当前目录下的包到 npm 仓库。

#### 其他常用命令

- `npm cache clean --force`: 清理 npm 缓存。

- `npm view <package> versions`: 查看包的所有版本。

- `npm view <package> dependencies`: 查看包的依赖。

- `npm outdated`: 检查哪些依赖包有新版本可用。

- `npm help <command>`: 获取特定命令的帮助信息。

- `npm search <keyword>`: 搜索 npm 仓库中的包。

::: tip nvm环境下的注意事项
在使用 nvm 管理多个 Node.js 版本时，每个版本的全局安装路径是独立的，这意味着全局安装的 npm 包（包括 `pnpm`）也是版本独立的。然而，全局的 `.npmrc` 配置文件通常是共用的，位于用户主目录下（例如，`~/.npmrc`），影响所有 Node.js 版本下的 npm 和 pnpm 的行为，除非在特定 Node.js 版本的环境变量中指定了不同的配置。局部 `.npmrc` 文件则按项目隔离，只影响当前项目的包管理操作。
:::


::: info NPM 与 Maven 的区别
**Maven** 主要用于 Java 生态系统，而 **npm** 服务于 JavaScript 和 Node.js 生态系统。以下是它们之间的一些主要区别：
1. **语言与平台**：Maven 是 Java 开发的标准构建工具，而 npm 专注于 JavaScript 和 Node.js。
2. **依赖管理**：虽然两者都管理依赖，Maven 使用 pom.xml 文件定义依赖和构建过程，而 npm 使用 package.json 和 lock 文件。
3. **构建与生命周期**：Maven 有一套固定的构建生命周期和阶段，比如 compile、test、package 等，而 npm 更侧重于包管理，构建过程灵活性更高，可通过自定义脚本来实现。
4. **仓库**：Maven 默认使用 Maven Central，而 npm 使用 npmjs.com，两者都有广泛的社区支持和企业级镜像解决方案。
5. **脚本与插件**：Maven 依赖于外部插件来扩展功能，npm 则通过 npm 脚本和直接在 JavaScript 中调用模块来实现自动化任务。

总的来说，npm 更加灵活且轻量，特别是在前端和Node.js项目中，而 Maven 更适用于传统的Java后端项目，提供了更复杂的构建生命周期和标准化的项目结构。
:::

### Node包管理器-pnpm
pnpm 是一种快速且高效的 Node.js 包管理器，它通过利用硬链接和归档文件来显著减少磁盘空间占用和提高安装速度。

**安装**: pnpm 可以通过 npm 安装为全局包：
```bash
npm install -g pnpm
```
或者使用其他平台特定的包管理器，如 Homebrew（macOS）或 Chocolatey/Scoop（Windows）。

pnpm 使用 npm 配置文件（`.npmrc`）来指定下载源，格式与 npm 相同。例如，更改为淘宝镜像源：
```
registry=https://registry.npmmirror.com/
```

pnpm 除了使用 `.npmrc` 外，还可以使用 `.pnpmfile.cjs` 进行更高级的配置，比如自定义生命周期脚本。

<br/>

**pnpm常见命令的使用**：

- **清理缓存**：`pnpm cache clean` 或 `pnpm cache clear`
- **查看版本**：`pnpm -v` 或 `pnpm version`

#### 初始化项目

进入你的项目目录，使用 `pnpm init` 来创建一个新的 `package.json` 文件，这个命令与 npm 的 `npm init` 类似：

```bash
pnpm init
```

在交互式提示中填写项目信息，或者使用 `-y` 参数跳过提示，接受默认设置：

```bash
pnpm init -y
```

#### 安装依赖

安装项目所需的依赖。`pnpm install` 会安装 `package.json` 文件中列出的所有依赖，同时也会读取 `package-lock.json` 或 `pnpm-lock.yaml` 文件来保证依赖的精确版本安装：

```bash
pnpm install
```

安装单个依赖包，并将其添加到 `dependencies` 或 `devDependencies`：

```bash
pnpm add <package-name>
```

安装依赖到开发环境（即添加到 `devDependencies`）：

```bash
pnpm add --save-dev <package-name>
```

#### 更新依赖

更新所有依赖到最新兼容版本：

```bash
pnpm update
```

更新特定包到最新版本：

```bash
pnpm update <package-name>
```

#### 卸载依赖

从项目中移除依赖包，并从 `package.json` 中删除相应的条目：

```bash
pnpm remove <package-name>
```

#### 查看依赖

查看已安装的依赖：

```bash
pnpm ls
```

查看具体包的依赖树：

```bash
pnpm ls <package-name>
```

#### 执行脚本

运行 `package.json` 中定义的脚本，类似于 npm：

```bash
pnpm run <script-name>
```

pnpm 使用 `pnpm-lock.yaml` 文件来锁定依赖版本和描述依赖关系图，这与 npm 使用的 `package-lock.json` 类似，但格式和机制有所不同。



::: tip 在 nvm 多版本 Node.js 环境下的配置设置影响
- **pnpm依赖于npm**: 在使用nvm切换版本后，如果对应版本下没有安装过pnpm，需要重新安装，每个node版本都对应一个独立的pnpm
- **共享全局 .npmrc**：所有通过 nvm 管理的 Node.js 版本共享一个全局的 `.npmrc` 文件，因此在此文件中设置的下载源适用于所有版本的 pnpm。
- **局部 .npmrc**：每个项目可以有自己独立的 `.npmrc` 文件，覆盖全局设置，这种配置是隔离的，不随 Node.js 版本变化。
- **环境变量**：通过环境变量（如 `NPM_CONFIG_REGISTRY`）设置的下载源也会影响所有 Node.js 版本下的 pnpm。
:::


::: info npm与pnpm
**npm与pnpm 的共同点**
- **包管理目的相同**：两者都用于管理 Node.js 项目的依赖，支持安装、更新、卸载包等操作。
- **使用 .npmrc 配置文件**：都使用 `.npmrc` 文件来配置包源和其他设置。

**npm与pnpm的区别**
- **依赖管理方式**：pnpm 采用“内容可寻址的文件系统”，避免了重复的依赖包，通过硬链接和快照机制节省磁盘空间和提高安装速度，而 npm 通常会为每个依赖包的每个版本复制所有文件到项目目录。
- **下载源配置**：虽然两者都可以通过 `.npmrc` 配置下载源，但 pnpm 在处理依赖时的优化机制使得它在某些场景下能更高效地使用这些源。
- **配置文件扩展**：pnpm 支持 `.pnpmfile.cjs`，提供比 npm 更多的自定义选项。
:::


### Node包管理器-yarn

Yarn 是 Facebook 推出的一个快速、可靠、安全的依赖管理工具，与 npm 类似，用于 Node.js 项目中管理依赖包。下面是 Yarn 的一些基本使用方法和常用命令：

#### 安装 Yarn

- **通过 npm 安装**:
  
  ```bash
  npm install -g yarn
  ```

- **官方推荐安装方法**（因地区网络环境差异，请访问 [Yarn官网](https://yarnpkg.com) 获取最新安装指令）:

  通常包括使用 curl 或者 wget 下载安装脚本直接安装。

#### 初始化项目

- `yarn init`: 生成一个新的 `package.json` 文件，与 `npm init` 类似，通过交互式提问收集项目信息。

#### 安装依赖

- `yarn add <package>`: 安装并添加依赖到 `dependencies`。
- `yarn add <package> --dev`: 添加到 `devDependencies`。
- `yarn add <package>@<version>`: 安装特定版本的包。
- `yarn`: 或 `yarn install`, 安装 `package.json` 中列出的所有依赖。

#### 更新依赖

- `yarn upgrade <package>`: 更新指定包。
- `yarn upgrade <package>@<version>`: 更新到指定版本。
- `yarn upgrade-interactive`: 交互式地升级依赖。

#### 移除依赖

- `yarn remove <package>`: 从项目中移除依赖并更新 `package.json`。

#### 查看依赖

- `yarn list`: 列出所有已安装的依赖。
- `yarn info <package>`: 显示包的详细信息。

#### 运行脚本

- `yarn run <script>`: 执行 `package.json` 中定义的脚本。

#### 配置文件

- Yarn 使用 `yarn.lock` 文件来锁定依赖版本，确保每次安装时获得相同的依赖树。

::: info Yarn 与 npm 和 pnpm 的异同
**相同点**:
- 都是 Node.js 的包管理工具，用于解决项目依赖管理问题。
- 支持 `package.json` 文件来管理依赖信息。
- 都可以通过命令行安装、更新和管理依赖。

**不同点**:
- **性能与安装速度**:
  - Yarn 使用并行下载和缓存机制，提高安装速度；npm 在较新版本中也有所改进，但Yarn在并发下载上仍有一定的优势。
  - pnpm 通过共享依赖和快照机制进一步优化了速度和磁盘使用。

- **依赖管理**:
  - Yarn 使用 `yarn.lock` 文件来锁定依赖，保证一致性；npm 使用 `package-lock.json` 达到类似效果。
  - pnpm 使用 `pnpm-lock.yaml`，并实现了一种更高效的依赖管理策略，避免了重复的包副本。

- **安全性**:
  - Yarn 和 npm 都有检查依赖安全性的功能，如 Yarn 的 `yarn audit` 类似于 npm 的 `npm audit`。
  - pnpm 同样关注安全性，但具体实现和报告可能有所不同。

- **配置与兼容性**:
  - Yarn 和 npm 都支持 `.npmrc` 配置文件，具有较高的兼容性。
  - pnpm 除了支持 `.npmrc`，还提供了额外的 `.pnpmfile.cjs` 自定义配置。
:::

总的来说，Yarn、npm 和 pnpm 都是强大的包管理工具，各有侧重。Yarn 强调速度和一致性，npm 是 Node.js 官方默认工具，生态丰富，而 pnpm 在空间效率和一致性方面表现出色。选择哪一个取决于个人或团队的具体需求和偏好。


## Node.js基础及应用

### 事件驱动和非阻塞I/O

**Node.js 的事件驱动模型**

Node.js 的核心特性之一是其事件驱动的架构，这一模型主要依赖于事件循环（Event Loop）和回调函数（Callback）。事件驱动编程允许程序响应外部事件，而不是仅仅按照预定的顺序执行代码。在 Node.js 中，这一机制使得它能够高效地处理大量的并发请求，特别适合构建高吞吐量的网络应用。

1. **事件循环**：Node.js 的事件循环不断地检查是否有待处理的事件（比如网络请求、文件读写完成等），如果有，它就会取出对应的事件及其回调函数并执行。这种机制让 Node.js 能够在单个线程中处理多个并发任务，无需为每个请求创建新的线程或进程。

2. **回调函数**：当某个事件发生时，与之关联的回调函数会被放入事件队列等待执行。一旦当前正在执行的代码（包括之前的回调）完成，事件循环就会从队列中取出下一个回调执行。

3. **异步I/O**：Node.js 中的大多数I/O操作（如文件读写、网络通信）都是异步的，意味着它们不会阻塞主线程，而是在操作完成后通过回调通知事件循环。

**非阻塞I/O**

非阻塞I/O是事件驱动模型的基础。在传统的阻塞I/O模型中，当一个请求发出后，程序会暂停当前执行，直到请求完成并返回结果，这期间不能处理其他任务。而Node.js采用的非阻塞I/O则允许程序在等待I/O操作完成的同时继续执行其他任务。

1. **如何提高性能**：非阻塞I/O避免了线程在等待I/O操作时的空闲，充分利用CPU时间。在高并发场景下，由于Node.js使用单线程处理请求，没有线程上下文切换的开销，可以处理更多的并发连接，减少了内存消耗，提升了整体性能。

2. **libuv**：Node.js 的底层依赖于 libuv 库来实现跨平台的异步I/O和事件循环机制。libuv负责管理一个线程池来处理实际的I/O操作，而主线程（事件循环所在的线程）则专注于执行JavaScript代码和调度事件。

**事件循环处理并发请求**

当Node.js接收到多个请求时，它并不会为每个请求分配一个单独的线程，而是将请求的处理逻辑（主要是I/O操作）注册为事件监听器，并立即返回，继续处理下一个请求。当某个I/O操作完成时，事件循环会触发相应的事件，执行与之关联的回调函数，完成请求处理。因此，即使在处理大量并发请求时，Node.js也能保持低延迟和高吞吐量，因为它总是准备好去处理下一个事件，而不是等待某个操作完成。

总结来说，尽管Node.js在处理I/O时可能会在LibUV层使用线程池，但这与为每个请求或任务创建新线程的概念不同。Node.js通过异步I/O和事件循环机制，在单个主线程中实现了对多个并发任务的高效处理，减少了线程创建和切换的开销，提高了应用的整体性能。


### Node核心模块的使用

Node.js 的模块系统是其设计的核心特性之一，它允许开发者将代码组织成独立的模块，便于复用和维护。Node.js 的模块系统遵循“CommonJS”规范，这使得每个模块都有自己的作用域，避免了全局变量的污染。

#### Node.js 模块的分类

1. **核心模块**：这些模块是Node.js的一部分，直接由Node.js提供，无需安装即可使用。例如`fs`（文件系统）、`http`（HTTP服务器）、`path`（路径处理）、`os`（操作系统相关的实用功能）等。

2. **文件模块**：当导入一个以`.js`、`.json`或编译后的`.node`（C++扩展）结尾的本地文件时，Node.js会将其视为文件模块。文件模块的路径可以是相对的或绝对的。

3. **第三方模块**：这些是通过npm（Node.js包管理器）安装的外部库。使用前需要先通过`npm install`命令安装。

#### 核心模块的使用示例

#### 示例1：使用`fs`模块读取文件

```javascript
// 引入fs模块
const fs = require('fs');

// 异步读取文件
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

#### 示例2：使用`http`模块创建一个简单的HTTP服务器

```javascript
const http = require('http');

// 根据req.url判断客户端请求的路径，返回不同的响应内容
const server = http.createServer((req, res) => {
  // 可以使用 req.method 判断请求方式，进行不同的处理
  // if (req.method === 'POST' && req.url === '/submit') { ... }  
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('欢迎来到首页\n');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('关于我们的信息...\n');
  } else {
    res.statusCode = 404;
    res.end('页面未找到\n');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

#### 模块的导出与导入

- **导出模块成员**：在模块文件中，使用`module.exports`或`exports`对象来导出函数、对象或变量。

```javascript
// exampleModule.js
const greeting = 'Hello, module!';
const sayHello = (name) => `${greeting}, ${name}!`;

module.exports = { sayHello };
```

- **导入模块成员**：在其他文件中，使用`require()`函数导入模块，并访问其导出的成员。

```javascript
// app.js
const { sayHello } = require('./exampleModule');
console.log(sayHello('User')); // 输出: Hello, module!, User!
```

Node.js的模块系统通过清晰的导入导出机制，使得代码组织结构更加合理，易于管理和维护。核心模块作为Node.js的一部分，提供了处理文件、网络、系统交互等基本功能，是构建Node.js应用的基石。通过理解和有效利用模块系统，开发者能够构建出高效、可维护的服务器端应用程序。

