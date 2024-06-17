---

order: 10
title: Annotation
shortTitle: Annotation注解

---


Java 注解（Annotation）又称 Java 标注，是 JDK5.0 引入的一种注释机制、 Java 语言中的类、方法、变量、参数和包等都可以被标注

- 和注释不同，Java 标注可以通过反射获取标 注内容
- 在编译器生成类文件时，标注可以被嵌入到字节码中、Java 虚拟机可以保留标注内容，在运行 时可以获取到标注内容
- 当然它也支持自定义 Java 标注（注解）

## 1. 内置注解

Java中有三种常用的内置注解，这些注解用来为编译器提供指令（ java7和java8又新增了三种）

| Java内置注解               | 说明                                           |
| ---------------------- | -------------------------------------------- |
| `@Override`            | 检查该方法是否是重写方法。如果发现其父类，或者是引用的接口中并没有该方法时，会报编译错误 |
| `@Deprecated`          | 标记过时方法。如果使用该方法，会报编译警告                        |
| `@SuppressWarnings`    | 指示编译器去忽略注解中声明的警告                             |
| `@SafeVarargs`         | 忽略任何使用参数为泛型变量的方法或构造函数调用产生的警告（ Java 7 ）       |
| `@FunctionalInterface` | 标识一个匿名函数或函数式接口 （ Java 8 ）                    |
| `@Repeatable`          | 标识某注解可以在同一个声明上使用多次 （ Java 8）                 |

SuppressWarnings：抑制编译时的警告信息、常用使用方式：

```java
@SuppressWarnings("unchecked")            // 抑制单类型的警告 

@SuppressWarnings("unchecked","rawtypes") // 抑制多类型的警告

@SuppressWarnings("all")                  // 抑制所有类型的警告
```

| SuppressWarnings的参数      | 用途                                      |
| ------------------------ | --------------------------------------- |
| all                      | 抑制所有警告                                  |
| boxing                   | 抑制装箱、拆箱操作时候的警告                          |
| cast                     | 抑制映射相关的警告                               |
| dep-ann                  | 抑制启用注释的警告                               |
| deprecation              | 抑制过期方法警告                                |
| fallthrough              | 抑制确在switch中缺失breaks的警告                  |
| finally                  | 抑制finally模块没有返回的警告                      |
| hiding                   | 抑制相对于隐藏变量的局部变量的警告                       |
| incomplete-switch        | 忽略没有完整的switch语句                         |
| nls                      | 忽略非nls格式的字符                             |
| null                     | 忽略对null的操作                              |
| rawtypes                 | 使用generics时忽略没有指定相应的类型                  |
| restriction              | 抑制禁止使用劝阻或禁止引用的警告                        |
| serial                   | 忽略在serializable类中没有声明serialVersionUID变量 |
| static-access            | 抑制不正确的静态访问方式警告                          |
| synthetic-access         | 抑制子类没有按最优方法访问内部类的警告                     |
| unchecked                | 抑制没有进行类型检查操作的警告                         |
| unqualified-field-access | 抑制没有权限访问的域的警告                           |
| unused                   | 抑制没被使用过的代码的警告                           |

## 2. 元注解

meta-annotation（元注解）：用来对注解类型进行注解的注解

| Java元注解                               | 说明                                                |
| ------------------------------------- | ------------------------------------------------- |
| `@Retention(RetentionPolicy.RUNTIME)` | 表示注解信息保留到什么时候，是只在代码中，还是编入class文件中，或者是在运行时可以通过反射访问 |
| `@Documented`                         | 标记这些注解是否包含在用户文档中                                  |
| `@Target(ElementType.TYPE)`           | 标记这个注解适用于哪种 Java 成员                               |
| `@Inherited`                          | 标记这个注解是继承于哪个注解类 (默认 注解并没有继承于任何子类)                 |

ElementType(注解的适用类型）：

```java
// ElementType 源码分析
    public enum ElementType {
    TYPE,             /* 类、接口（包括注释类型）或枚举声明 */
    FIELD,            /* 字段声明（包括枚举常量） */
    METHOD,           /* 方法声明 */
    PARAMETER,        /* 参数声明 */
    CONSTRUCTOR,      /* 构造方法声明 */
    LOCAL_VARIABLE,   /* 局部变量声明 */
    ANNOTATION_TYPE,  /* 注释类型声明 */
    PACKAGE           /* 包声明 */
}
```

RetentionPolicy（注解作用域策略、或者说保留级别）：

```java
// RetentionPolicy 源码分析：
public enum RetentionPolicy {
    SOURCE,  /* Annotation信息仅存在于编译器处理期间，编译器处理完之后就没有该Annotation信息了 */
    CLASS,   /* 编译器将Annotation存储于类对应的.class文件中（默认行为） */
    RUNTIME  /* 编译器将Annotation存储于class文件中，并且可由JVM读入 */
}
```

## 3. 自定义注解

```java
// 自定义注解格式
@Documented
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation1 {
    参数类型 参数名() default 默认值;
}
```

注意事项：

- 定义 Annotation 时，@interface 是必须的、定义的注解，自动继承了java.lang.annotation.Annotation接口

- 可以为注解定义一些参数，定义的方式是在注解内定义一些方法（返回值类型表示参数的类型）

- 注解内参数的类型不是什么都可以的，合法的类型有基本类型、String、Class、枚举、注解，以及这些类型的数组

- 参数定义时可以使用default指定一个默认值、如果定义了参数且没有提供默认值，在使用注解时必须提供具体的值，不能为null
  
  （常使用空字符串、0作为默认值，下例定义了一个包含默认值参数的注解：）
  
  ```java
  @Target({ METHOD, CONSTRUCTOR, FIELD })
  @Retention(RUNTIME)
  @Documented
  public @interface InjectAnnotation {
      boolean optional() default false;
  }
  ```

- 当只有一个参数，且名称为value时，提供参数值时可以省略 "value="
  
  ```java
  @SuppressWarnings(value={"deprecation", "unused"})
  
  // 可以省略"value=" ，如下：
  @SuppressWarnings({"deprecation", "unused"})
  ```

## 4. 查看注解信息

创建了注解，就可以在程序中使用，注解指定的目标，提供需要的参数，但这还是不会影响到程序的运行。要影响程序，我们要先能查看这些信息。我们主要考虑 `@Retention` 为 `RetentionPolicy.RUNTIME` 的注解，利用反射机制在运行时进行查看和利用这些信息。

**反射相关类中与注解有关的方法**，Class、Field、Method、Constructor中都有如下方法:

```java
//获取所有的注解
public Annotation[] getAnnotations();

//获取所有本元素上直接声明的注解，忽略inherited来的
public Annotation[] getDeclaredAnnotations();

//获取指定类型的注解，没有返回null
public <A extends Annotation> A getAnnotation(Class<A> annotationClass);

//判断是否有指定类型的注解
public boolean isAnnotationPresent(Class<? extends Annotation> annotationClass);
```

对于Method和Contructor，它们都有方法参数，而参数也可以有注解，所以它们都有如下方法：

```java
public Annotation[][] getParameterAnnotations();
```

## 5. 实现DI容器

使用注解和反射，实现简单的DI容器

- 定义两个注解，注解`@SimpleInject`修饰类中字段，表达依赖关系，`@SimpleSingleton`用于修饰类，表示类型是单例
  
  ```java
  @Retention(RetentionPolicy.RUNTIME)
  @Target(ElementType.FIELD)
  public @interface SimpleInject {
  }
  ```
  
  ```java
  /**
   * @Classname SimpleSingleton
   * @Description 修饰类，表示类型是单例
   * @Date 2022/2/26 11:30
   * @Author idrizzle
   */
  @Retention(RetentionPolicy.RUNTIME)
  @Target(ElementType.TYPE)
  public @interface SimpleSingleton {
  }
  ```

​

- 定义两个简单的服务ServiceA、ServiceB和测试类, ServiceA依赖于ServiceB
  
  ```java
  public class Demo {
      public static void main(String[] args) {
          final ServiceA serviceA = SimpleContainer.getInstance(ServiceA.class);
          serviceA.callB();
      }
  
      static class ServiceA {
          // ServiceA使用 @SimpleInject表达对ServiceB的依赖
          @SimpleInject
          ServiceB b;
  
          public void callB() {
              b.method();
          }
      }
  
      @SimpleSingleton
      static class ServiceB {
          public void method() {
              System.out.println("I'm ServiceB");
          }
      }
  }
  ```

- 创建DI容器类
  
  ```java
  public class SimpleContainer {
      private static Map<Class<?>, Object> instances = new ConcurrentHashMap<>();
  
      /***
       * @param cls Class对象
       * @author itdrizzle
       * @date 2022/2/26 11:26
       * @return {@link T}
       */
      public static <T> T getInstance(Class<T> cls) {
          try {
              boolean singleton = cls.isAnnotationPresent(SimpleSingleton.class);
              // 首先检查类型是否是单例，如果不是，就直接调用createInstance创建对象。
              if (!singleton) {
                  return createInstance(cls);
              }
  
              // 检查缓存，如果有，直接返回
              Object obj = instances.get(cls);
              if (obj != null) {
                  return (T) obj;
              }
  
              // 调用createInstance创建对象，并放入缓存中
              synchronized (cls) {
                  obj = instances.get(cls);
                  if (obj == null) {
                      obj = createInstance(cls);
                      instances.put(cls, obj);
                  }
              }
              return (T) obj;
          } catch (Exception e) {
              throw new RuntimeException(e);
          }
      }
  
      /***
       * 创建需要的对象
       * @param cls Class对象
       * @author itdrizzle
       * @date 2022/2/26 11:35
       * @return {@link T}
       */
      private static <T> T createInstance(Class<T> cls) throws Exception {
          T obj = cls.newInstance();
          Field[] fields = cls.getDeclaredFields();
          for (Field f : fields) {
              if (f.isAnnotationPresent(SimpleInject.class)) {
                  if (!f.isAccessible()) {
                      f.setAccessible(true);
                  }
                  Class<?> fieldCls = f.getType();
                  f.set(obj, getInstance(fieldCls));
              }
          }
          return obj;
      }
  }
  ```
