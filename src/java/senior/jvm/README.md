--- 

dir:
    order: 10
index: false
title: Java虚拟机

---



Java虚拟机（JVM）是运行Java字节码的虚拟计算机。它的设计目标是提供一种跨平台的执行环境，使得Java程序“一次编写，到处运行”。

Java Virtual Machine，JAVA程序的**运行环境**（JAVA二进制字节码的运行环境）

- 一次编写，到处运行
- 自动内存管理，垃圾回收机制
- 数组下标越界检查

::: info jdk、jre和jvm

- **JDK (Java Development Kits)** -- Java 开发工具集
  
  JDK 是整个 JAVA 的核心，包括了 Java 运行环 境（Java Runtime Environment），一堆 Java 工具（javac/java/jdb 等）和 Java 基的类库（即 Java API 包括 rt.jar），它不提供具体的开发软件，它提供的是无论你用何种开发软件写 Java 程序都必须用到的类库和 Java 语言规范。

- **JRE (Java Runtime Environment)** --Java 运行时环境

- **JVM （Java Virtual Machine）**-- Java虚拟机
  
  JVM 可以理解成一个可运行 Java 字节码的虚拟计算机系统， 它有一个解释器组件，可以实现 Java 字节码和计算机操作系统之间的通信 ，对于不同的运行平台，有不同 的 JVM，JVM 屏蔽了底层运行平台的差别，实现了“一次编译，随处运行”。
:::

![JVM](vx_images/image-20220215135414096.png)

值得注意的是：Java 虚拟机不和包括Java 在内的任何语言绑定，它只与“Class 文件”这种特定的二进制文件格式所关联。
无论使用何种语言进行软件开发，只要能将源文件编译为正确的Class文件，那么这种语言就可以在Java虚拟机上执行。可以说，统一而强大的Class文件结构，就是Java虚拟机的基石、桥梁。


### JVM体系结构

JVM体系结构主要包括以下核心组件：

::: tip JVM体系结构
1. **类加载器子系统**：负责查找并加载类文件的二进制数据，转换为JVM可以理解的内部表示形式。
2. **运行时数据区**：包括方法区、堆、Java虚拟机栈、本地方法栈、程序计数器等，用于存储程序运行时的数据和控制信息。
3. **执行引擎**：负责解释或编译字节码至机器码，并执行这些代码。
4. **本地接口**：允许Java代码调用本地方法库，实现与操作系统交互的能力。
5. **垃圾收集器**：自动管理内存的分配和回收，主要针对堆区。
:::


#### JVM执行引擎工作原理
JVM执行引擎是JVM的核心组件之一，负责将字节码转换为机器码并执行。其工作流程大致可以分为三个阶段：

1. **加载与验证**：类加载器加载类文件后，执行引擎会对字节码进行验证，确保其符合JVM规范。
2. **准备与解析**：为类变量分配内存并初始化为默认值，同时解析符号引用转为直接引用。
3. **执行**：这是执行引擎的核心步骤，可以通过两种方式执行字节码：
   - **解释执行**：逐条解释字节码指令，每遇到一条指令就解释并执行。
   - **即时编译（JIT）**：将频繁执行的热点代码编译成本地机器码，以提高执行效率。

JVM的体系结构和执行引擎设计确保了Java程序的跨平台运行能力、安全性以及高性能，通过字节码解释和JIT编译的结合，实现了执行效率与灵活性的平衡。


### 字节码解释器
- **字节码**：Java源代码被编译成一种中间格式——字节码（.class文件），它是平台无关的，便于跨平台运行。
- **字节码解释器**：JVM的一部分，用于读取字节码并逐条转换为对应平台的机器指令执行。这一过程降低了执行速度，但带来了高度的平台兼容性。

::: info Just-In-Time (JIT) 编译与热点代码识别
- **Just-In-Time (JIT) 编译**：JVM监测并识别出经常被执行的“热点”代码区域，将其从字节码转换为高度优化的本地机器码。这种动态编译技术显著提升了程序的运行效率。
- **热点代码识别**：JVM通过统计方法的调用频率和循环执行次数来确定哪些代码是热点。一旦某段代码被标识为热点，JIT编译器就会介入，将其编译为本地代码，并缓存起来供后续直接使用。这一步骤是自动进行的，无需开发者干预。
:::



### 常见虚拟机

除了广为人知的HotSpot虚拟机之外，还有多种其他的Java虚拟机（JVM）实现，每种都有其独特的特点和应用场景。以下是一些常见的Java虚拟机：

1. **JRockit** - 由BEA Systems开发，后来被Oracle收购。JRockit设计用于高性能和高可用性，特别适合企业级服务器应用。它包含了一些高级特性，如实时垃圾回收（RTGC）和自适应大小的年轻代（Adaptive Young Generation）。

2. **IBM J9** - IBM的Java虚拟机，广泛应用于IBM的产品中，如WebSphere Application Server。J9支持广泛的平台，包括嵌入式设备，并且在性能和可靠性方面进行了优化。

3. **Dalvik** - 谷歌为Android平台开发的虚拟机，基于寄存器架构而非栈架构。虽然现在已经被ART（Android Runtime）取代，Dalvik在早期的Android设备上非常流行。

4. **ART (Android Runtime)** - 取代了Dalvik，ART采用了提前编译（AOT, Ahead-Of-Time Compilation）技术，改善了应用程序的启动速度和运行时性能。

5. **Azul Zing** - Azul Systems的JVM实现，专注于低延迟和大规模的内存支持。Zing的垃圾收集器设计用于超大规模的堆内存环境，可以支持高达数TB的堆。

6. **Azul Zulu** - Azul提供的开源JVM实现，基于OpenJDK，但包含了Azul的一些高级特性，如可预测的暂停时间垃圾回收。

7. **OpenJ9** - 由IBM贡献给Eclipse基金会的一个开源项目，基于IBM J9的技术。OpenJ9被用作Eclipse OpenJ9项目的JVM基础，并且在IBM的Semeru Runtimes中使用。

8. **GraalVM** - 一个高性能的JVM，由Oracle Labs开发，旨在支持多种语言，并且包含了一个高效编译器和运行时环境。GraalVM支持AOT编译，可以生成原生镜像，从而减少了运行时的启动时间和资源消耗。

9. **Microsoft VisualVM** - 虽然不是一个独立的JVM，但VisualVM是一个强大的工具，用于监视和分析JVM的性能。它是Java开发者调试和优化应用程序的有用工具。

10. **Kotlin/Native** - 不是传统的JVM，但值得一提的是，Kotlin/Native允许Kotlin代码在没有JVM的情况下运行，通过直接编译成本地代码。



### JVM参考文档

https://docs.oracle.com/javase/specs/

HTML：https://docs.oracle.com/javase/specs/jvms/se8/html/index.html

PDF：https://docs.oracle.com/javase/specs/jvms/se8/jvms8.pdf