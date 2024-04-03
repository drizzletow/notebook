---

order: 15

---

# Reflection反射

The Reflection API：[Trail: The Reflection API (The Java&trade; Tutorials)](https://docs.oracle.com/javase/tutorial/reflect/index.html)

Reflection is commonly used by programs which require the ability to examine or modify the runtime behavior of applications running in the Java virtual machine.

## 1. Class类

在java中，一个普通事物、如人类可以用一个Person类来表示，那么众多的java类用什么来表示呢？其实所有的java类同样属于一类事物，而描述这类事物的java类就是 Class .

在一个普通类中，如Person代表一个类，我们通过new获得该类的对象，那Class类又如何获得其对象呢？

其实，我们不妨将Class类的实例对象理解为一个类在内存中的字节码文件（一个类被类加载器加载到内存中，占用了一定的内存空间，而这片内存空间存储的内容就是该类的字节码，而不同的类具有不同的字节码文件，这些就是一个个Class类的实例对象）

想要获得一个类的 Class类型 （即Class实例对象、或者说内存中代表该类的字节码文件），通常有以下三种方式：

- Object.getClass()
- The .class Syntax
- Class.forName() ： This cannot be used for primitive types

```java
public class ClassDemo {
    public static void main(String[] args) throws ClassNotFoundException {
        // 通过对象的 getClass() 方法获取
        Date date = new Date();
        Class class1 = date.getClass();

        // 通过类的class属性获取
        Class class2 = Date.class;

        // 通过Class类提供的 forName() 方法将指定的类加载到内存中
        Class class3 = Class.forName("java.util.Date");

        System.out.println(class1 == class2);  //true
    }
}
```

我们不妨通过debug的方式看一看这三个Class类的实例对象是否相同（指向同一内存空间）：

我们再了解一下基本数据类型、包装类、普通类和数组的Class类型有何不同：

包装类的 TYPE 属性表示其对应的基本数据类型、注意不要与class属性相混淆

注意官方文档关于类型的定义：即Java中只有基本数据类型和引用数据类型，引用数据类型包括：类、枚举、数组和接口

Every type is either a reference or a primitive.

Classes, enums, and arrays (which all inherit from [`java.lang.Object`](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)) as well as interfaces are all reference types.

## 2. 构造方法

Constructor类代表某个类中的一个构造方法、可以通过反射获取指定类的构造方法：

```java
public class ConstructorDemo {
    public static void main(String[] args) throws NoSuchMethodException {
        Class stringClass = String.class;

        // 获取指定参数类型、且访问权限是public的构造器
        Constructor constructor = stringClass.getConstructor(StringBuffer.class);

        // 获取所有公有（public）构造方法
        Constructor[] constructors = stringClass.getConstructors();

        // 获取所有的构造方法，包含private修饰的构造方法
        Constructor[] declaredConstructors = stringClass.getDeclaredConstructors();

        System.out.println(stringClass.getDeclaredConstructor(StringBuilder.class));
    }
}
```

使用反射的方式创建实例对象的两种方式：

```java
public class ConstructorDemo {
    public static void main(String[] args) throws Exception{
        Class dateClass = Date.class;
        Constructor constructor = dateClass.getConstructor(long.class);

        // 通过Constructor类的方法创建实例对象
        Date date = (Date) constructor.newInstance(3600000L);
        System.out.println(date); // Thu Jan 01 09:00:00 CST 1970  3600000毫秒为一小时

        // 通过Class类的方法创建实例对象
        Object DateInstance = Class.forName("java.util.Date").newInstance();
        System.out.println((Date) DateInstance); // Sat Nov 06 15:40:19 CST 2021
    }
}
```

## 3. 成员变量

**Field ** 提供有关类或接口的单个字段的信息，以及对它的动态访问权限。反射的字段可能是一个类（静态）字段或实例字段

`java.lang.reflect.Field` 为我们提供了获取当前对象的成员变量的类型，和重新设值的方法

```java
public class FieldDemo {
    public static void main(String[] args) throws Exception {
        Class personClass = Class.forName("com.example.Person");

        // 获取类的属性
        Field[] fields = personClass.getFields();
        Field[] declaredFields = personClass.getDeclaredFields();
        Field nameField = personClass.getField("name");
        Field ageField = personClass.getDeclaredField("age");

        // 获取实例对象的值
        Person tom = new Person("tom", 18);
        String name = (String)nameField.get(tom);
        System.out.println(name);
        // 访问private修饰的属性
        ageField.setAccessible(true);
        ageField.set(tom, 16);
        System.out.println(ageField.get(tom));
    }
}
```

## 4. 成员方法

getDeclaredMethod()获取方法，然后invoke执行实例对应的方法：

- ```java
  getDeclaredMethod(String name, Class<?>... parameterTypes)
  ```

- ```java
  MethodName.invoke(Object obj, Object... args)
  ```

```java
public class MethodDemo {
    public static void main(String[] args) throws Exception {
        Class personClass = Class.forName("com.example.Person");
        // 获取指定类的方法
        Method say = personClass.getDeclaredMethod("say", String.class);
        Method[] methods = personClass.getDeclaredMethods();

        // Method 执行方法
        say.setAccessible(true);
        say.invoke(new Person(), "method");
        System.out.println(say.getName());
    }
}
```

| Method类的方法               | 作用                                   |
| ------------------------ | ------------------------------------ |
| `getName()`              | 获取方法名                                |
| `isVarArgs()`            | 如果该方法声明为采用可变数量的参数，则返回true; 否则返回false |
| `getModifiers()`         | 获取权限修饰符                              |
| `getReturnType()`        | 获取返回类型                               |
| `getExceptionTypes()`    | 获取所有抛出的异常类型                          |
| `getGenericReturnType()` | 返回Type类型                             |
| `getParameterTypes()`    | 获取所有参数的类型                            |
| `getParameterCount()`    | 获取所有参数的个数                            |
| `getAnnotations()`       | 获取方法级别的注解                            |
| `getDeclaringClass ()`   | 获取方法所在的类信息                           |

## 5. 注意事项

`setAccessible()` 并不是在Field中的，而是在AccessibleObject中, AccessibleObject 类是 Field Method Constructor 类的基类。

- 它提供反射对象绕过Java语言 **权限控制检查** 的权限。
  
  当Fields Methods Constructors被用来set get 对象域，调用方法或者产生初始化对象实例的时候会践行权限检查（public default(package) protected private）

- **将反射对象中的 accessible 标志位设置为 true，就意味着允许客户端拥有超级权限，比如Java对象序列化 或者 其他持久化机制等通常禁止的机制**

**带declared跟不带的API有什么区别**？

> 以Field为例：
> 
> ​ 带declared能无视访问权限获取自身类的全部属性（包括private、static修饰的属性），但只能获取本类的成员
> 
> ​ 不带的只能获取自身public所修饰的属性（但还能获取继承自父类的public所修饰的属性、同样包括静态属性）

## 6. 反射的应用

下WEB开发中，有很多技术和框架底层都用到了反射，例如：

- JSP中的 `<jsp:useBean>` 、`<jsp:setProperty>` 、`<jsp:getProperty>` 标签的底层实现
