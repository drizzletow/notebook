--- 

dir:
    order: 30
index: false
title: TypeScript

---

<Catalog hideHeading/>

### 1. TypeScript基础
- **TypeScript简介**
  - TypeScript与JavaScript的关系
  - TypeScript的优势
- **安装与配置**
  - 如何安装TypeScript
  - 设置TS编译器及配置tsconfig.json
- **基础类型**
  - 布尔、数字、字符串、数组、元组、枚举
  - 任意类型`any`与未知类型`unknown`
  - `null`与`undefined`
  - 类型推断
- **变量声明与接口**
  - `let`, `const`, `var`
  - 接口（Interfaces）基础
- **函数**
  - 函数声明与类型注解
  - 可选参数、默认参数、剩余参数
  - 函数重载
- **类与面向对象编程**
  - 类的定义与继承
  - 访问修饰符（public, private, protected）
  - 抽象类与接口的对比使用
  - static关键字与类的静态成员

### 2. 进阶类型概念
- **高级类型**
  - 联合类型（Union Types）
  - 交叉类型（Intersection Types）
  - 类型别名（Type Aliases）
  - 字面量类型（Literal Types）
  - 索引类型与映射类型
- **泛型**
  - 泛型基础知识与使用场景
  - 泛型接口与泛型类
  - 泛型约束
- **命名空间与模块**
  - 命名空间的定义与使用
  - ES6模块导入导出与类型声明文件`.d.ts`

### 3. 工具与实践
- **IDE与TypeScript**
  - 配置VSCode或其他IDE支持TypeScript
  - 利用智能提示和错误检查
- **项目实践**
  - 将现有JavaScript项目转换为TypeScript
  - 使用TypeScript开发小型应用或库
- **测试与调试**
  - 使用Jest或Mocha进行单元测试
  - TypeScript与调试工具的集成

### 4. 高级与进阶话题
- **装饰器**
  - 装饰器的基本概念与使用
  - 类装饰器、方法装饰器、属性装饰器
- **编译选项与优化**
  - 了解并配置TypeScript编译选项
  - 代码优化与生产环境配置
- **与现有框架/库的集成**
  - Angular、React、Vue等框架中的TypeScript应用
  - 第三方库的类型声明管理

### 5. TypeScript生态与社区
- **npm与TypeScript**
  - 发布和使用TypeScript编写的npm包
- **社区资源与最佳实践**
  - TypeScript风格指南
  - 社区支持与常见问题解决方案
  - 跟踪TypeScript的新特性和发展




=======================================================================


### 1. TypeScript基础

#### 1.1 引言
- TypeScript简介
- 为什么选择TypeScript
- TypeScript与JavaScript的区别

#### 1.2 安装和配置
- 安装TypeScript
- 配置`tsconfig.json`
- 编译TypeScript到JavaScript

#### 1.3 基本类型
- 数字、字符串、布尔值
- 数组和元组
- Any、Void、Null和Undefined
- Enum类型
- Never类型

#### 1.4 类型注解和推断
- 为变量添加类型注解
- TypeScript的类型推断
- 函数的参数和返回类型注解

#### 1.5 接口
- 定义接口
- 可选属性和只读属性
- 函数类型的接口
- 继承接口
- 类型别名vs接口

### 2. TypeScript进阶

#### 2.1 类
- 类的定义和继承
- 访问修饰符（public、private、protected）
- 抽象类和接口
- 属性和方法装饰器

#### 2.2 泛型
- 泛型介绍
- 泛型函数、接口、类
- 泛型约束
- 使用泛型创建可重用的组件

#### 2.3 高级类型
- 联合类型和交叉类型
- 类型保护和区分类型
- 类型断言
- 映射类型
- 条件类型

#### 2.4 模块和命名空间
- 模块的导入和导出
- 使用命名空间组织代码
- 使用外部模块

#### 2.5 装饰器
- 装饰器基础
- 类装饰器
- 方法装饰器
- 属性装饰器
- 参数装饰器

### 3. TypeScript与现代JavaScript开发

#### 3.1 集成开发环境
- TypeScript与Visual Studio Code
- 使用TypeScript在Node.js中开发
- 在浏览器中使用TypeScript

#### 3.2 构建工具
- 使用Webpack构建TypeScript应用
- 使用Gulp和TypeScript

#### 3.3 测试
- 单元测试与TypeScript
- 使用Jest和Mocha进行测试

#### 3.4 使用TypeScript开发大型应用
- 项目结构和管理
- 使用TypeScript开发React、Vue、Angular应用

### 4. TypeScript实战项目
- 实战项目简介
- 项目需求分析
- 项目设计与规划
- 代码实现与测试
- 项目部署
