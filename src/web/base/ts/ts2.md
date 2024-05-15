---

order: 10
title: TypeScript进阶

---


## 类(Class)和面向对象
TypeScript 中的类是对 ECMAScript 6 (ES6) 类的一个超集，它在 ES6 类的基础上增加了一些额外的类型安全和功能特性。

### 类的定义和继承
TS中类的定义和继承等与ES6最大的区别就是TypeScript 允许在类的属性、方法参数和返回值上添加类型注解，提供静态类型检查
```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog('Rex');
dog.bark();
dog.move(10);
```
TypeScript 不支持从多个类继承（无多重继承），但你可以通过接口来模拟这个功能。一个类可以实现多个接口


### 访问修饰符
TypeScript 提供了三种访问修饰符，用于在类内部控制成员的可访问性。

- `public`（默认）：成员是从类的外部可访问的。
- `private`：成员只能从类的内部访问。
- `protected`：成员能被派生类中访问。

```typescript
class Person {
  public name: string;
  private age: number;
  protected email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
```

### 抽象类和抽象方法
抽象类（Abstract Classes）和抽象方法（Abstract Methods）主要用于声明基类，它们提供了一种方式来定义必须由派生类实现的方法。

- 抽象类不能被实例化
- 抽象方法只能存在于抽象类中
- 抽象类可以包含非抽象成员
- 抽象类不能直接实例化，但仍可以拥有构造函数。这个构造函数用于被派生类的构造函数调用

```typescript
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // 构造函数中调用 super
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}
```



### 接口实现
在 TypeScript 中，接口（interface）用于定义对象或类的形状（shape），即它们需要具备的属性和方法。当一个类实现（implements）一个接口时，这个类就必须提供接口中所定义的所有属性和方法的实现。

```typescript
// 定义接口
interface InterfaceName {
  property1: type1;
  method1(param1: type2, param2: type3): returnType;
  // ...更多属性和方法
}

// 实现接口的类
class ClassName implements InterfaceName {
  property1: type1;

  constructor(param1: type2) {
    this.property1 = param1;
  }

  method1(param1: type2, param2: type3): returnType {
    // 方法实现
  }
  // ...实现接口中的其他方法
}
```

**注意事项**：

1. **必选与可选成员**：
   - 接口中可以定义必选成员和可选成员。必选成员在类中必须被实现，而可选成员则不一定。可选成员后面需加上 `?` 符号。
   ```typescript
   interface OptionalInterface {
     requiredMethod(): void;
     optionalMethod?: () => void; // 可选方法
   }
   ```
   
2. **公共访问修饰符**：
   - 当实现接口时，类中的相应成员需要是公共的（使用 `public` 关键字或隐式公共，即不指定访问修饰符），因为接口只关注公有部分。
   
3. **接口继承**：
   - 接口之间可以继承，实现类需要满足所有基接口的要求。
   ```typescript
   interface BaseInterface {
     baseMethod(): void;
   }
   
   interface DerivedInterface extends BaseInterface {
     derivedMethod(): void;
   }
   
   class MyClass implements DerivedInterface {
     baseMethod() { /*...*/ }
     derivedMethod() { /*...*/ }
   }
   ```
   
4. **多重实现**：
   - 一个类可以实现多个接口，只需在 `implements` 后面列出所有接口名，用逗号分隔。
   ```typescript
   interface InterfaceA { /*...*/ }
   interface InterfaceB { /*...*/ }
   
   class MyClass implements InterfaceA, InterfaceB {
     // 实现所有接口中定义的方法和属性
   }
   ```


## 高级类型
联合类型和交叉类型
类型保护和区分类型
类型断言
映射类型
条件类型

## 泛型
泛型介绍
泛型函数、接口、类
泛型约束
使用泛型创建可重用的组件

## 模块和命名空间
模块的导入和导出
使用命名空间组织代码
使用外部模块


## 装饰器
装饰器基础
类装饰器
方法装饰器
属性装饰器
参数装饰器



