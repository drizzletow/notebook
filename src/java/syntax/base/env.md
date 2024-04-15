--- 

order: 13
title: Java环境安装

---

## 下载JDK

到 [oracle官网](https://www.oracle.com/java/technologies/downloads/) 下载适合的JDK安装包，注意要选择自己系统对应的版本

## 安装JDK

根据提示依次点击下一步即可完成安装

```bash
# 安装完成后我们测试一下是否正确完成安装
java -version
```

## 配置环境变量

Windows中直接编辑环境变量即可，
MacOS中配置JAVA_HOME和环境变量的方法如下：

```bash
# 查看JAVA所在的路径 最后一行即为路径
/usr/libexec/java_home -V

# 当前用户目录下查看一下是否有.bash_profile文件
ls -a
# 若没有则需要新建此文件
touch .bash_profile

# 打开文件
open -e .bash_profile
```

若文件是空的，直接复制下面的内容进去即可，若原本有内容，加在直接末尾即可

```bash
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home
PATH=$JAVA_HOME/bin:$PATH:.
CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
export JAVA_HOME
export PATH
export CLASSPATH
```
其中JAVA_HOME 的地址为前面 通过 `/usr/libexec/java_home -V` 命令查看的最后一行内容

```bash
# 保存文件后 需要刷新配置文件
source .bash_profile

# 查看 JAVA_HOME
echo $JAVA_HOME
```


