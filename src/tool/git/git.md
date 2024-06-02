---

order: 1
title:  Git版本控制

---



## 一 Git常用命令

Git教程-GitHub：https://github.com/geeeeeeeeek/git-recipes 

learn git branching: https://learngitbranching.js.org/

![](../vx_images/20201108160139770_24883.png)

### 1. install

Git官网：https://git-scm.com 

Windows下载地址：https://git-scm.com/download/win

Linux 下载安装：https://git-scm.com/download/linux

::: tabs
@tab:active Linux
Linux 用户(以Ubuntu为例) : 
```bash
sudo apt-get install git
```

@tab Windows
安装后如果希望在全局的 cmd 中使用 Git，需要把 git.exe 加入 PATH 环境变量中

或在 Git Bash 中使用 Git 

@tab MacOS
Mac 用户：Xcode Command Line Tools 自带 Git
```bash
xcode-select --install
```

:::

<br/>

### 2. git config

**【Git配置】**: 在使用 git 前，需要告诉 git 你是谁，在向 git 仓库中提交时需要用到。

全局配置：

```bash
git config --global user.name 提交人姓名  # 1. 配置提交人姓名
git config --global user.email 提交人邮箱 # 2. 配置提交人姓名
git config --list                        # 3. 查看git配置信息

# 如果要对配置信息进行修改，重复上述命令即可。配置只需要执行一次。

git config --global core.editor vim     # 选择你喜欢的文本编辑器
git config --global --edit              # 用文本编辑器打开全局配置文件，手动编辑
```

解决频繁输入账户名和密码的问题：

```bash
git config --global credential.helper store  
```
使用上述的命令配置好之后，再操作一次git pull，它会提示你输入账号密码，之后就不需要再输入密码了

<br/>

::: info git config
所有配置项都储存在纯文本文件中， `git config` 命令其实只是一个提供便捷的命令行接口。

Git 将配置项保存在三个单独的文件中，允许你分别对单个仓库、用户和整个系统设置。

- `/.git/config` – 特定仓库的设置。`git config --local user.name 提交人姓名`
- `~/.gitconfig` – 特定用户的设置。这也是 `--global` 标记的设置项存放的位置。
- `$(prefix)/etc/gitconfig` – 系统层面的设置。

当这些文件中的配置项冲突时，本地仓库设置覆盖用户设置，用户设置覆盖系统设置。
:::

<br/>


### 3. git init

`git init` 命令创建一个新的 Git 仓库。它用来将已存在但还没有版本控制的项目转换成一个 Git 仓库，或者创建一个空的新仓库(当前的目录下会增加一个 `.git` 目录，记录项目版本相关信息)

```bash
git init 
```
在指定目录创建一个空的 Git 仓库。运行这个命令会创建一个名为 `directory`、只包含 `.git` 子目录的空目录
```bash
git init <directory>
```
<br>

::: tip
`git init` 最常见的使用情景就是用于创建中央仓库
:::

实际开发过程中，你会先使用SSH连入存放中央仓库的服务器。然后，来到任何你想存放项目的地方，最后，使用 `--bare` 标记来创建一个中央存储仓库`my-project.git` 、其余开发者会将其克隆到本地的开发环境中进行开发

```bash
ssh <user>@<host>

cd path/above/repo

git init --bare my-project.git
```

<br>

::: info 裸仓库
共享的仓库应该总是用 `--bare` 标记创建 (初始化一个裸的 Git 仓库，但是忽略工作目录)
```bash
git init --bare <directory>
```
- 一般来说，用 `--bare` 标记初始化的仓库以 `.git` 结尾。
    比如，一个叫`my-project`的仓库，它的空版本应该保存在 `my-project.git` 目录下。
- 裸库的目录下没有.git目录，也就是说我们并不能在这个目录下执行我们一般使用的 Git 命令。
     一般将其作为远端备份或公共版本库
:::



<br/>

### 4. git clone

在已存在远程仓库时，使用 `git clone` 创建项目的本地拷贝更为方便

 将位于 `<repo>` 的仓库克隆到本地机器: (原仓库可以在本地文件系统中，或是通过 HTTP 或 SSH 连接的远程机器)

```bash
git clone <repo>
```

将位于 `<repo>` 的仓库克隆到本地机器上的 `<directory>` 目录: 

```bash
git clone <repo> <directory>
```

::: tip
注意 远程仓库的 `.git` 拓展名克隆到本地时会被去除。它表明了本地仓库的非裸状态
:::

<br/>

### 5. git status

`git status` 命令显示工作目录和缓存区的状态。你可以看到哪些更改被缓存了，哪些还没有，以及哪些还未被 Git 追踪

`git status` 是一个相对简单的命令。 它告诉你 `git add` 和 `git commit` 的进展

```bash
git status -s         # 以精简的方式显示文件状态

git status            # 输出的命令很详细，但有些繁琐
```
::: info 

如果用 `git status -s` 或 `git status --short` 命令，会得到更为紧凑的格式输出，标记的具体含义如下：

    - 新添加的未跟踪文件前面有 ?? 标记，
    - 新添加到暂存区中的文件前面有 A 标记，
    - 修改过的文件前面有 M标记。M 有两个可以出现的位置:
        出现在右边的 M 表示该文件被修改了但是还没放入暂存区
        出现在靠左边的 M 表示该文件被修改了并放入了暂存区

    输出标记会有两列,第一列是对staging区域而言,第二列是对working目录而言
:::

<br>



### 6. git log

`git log` 命令显示已提交的快照。你可以列出项目历史，筛选，以及搜索特定更改。

`git status` 查看的是工作目录和缓存区，而 `git log` 只作用于提交的项目历史。

```bash
# 使用默认格式显示完整地项目历史。如果输出超过一屏，你可以用 `空格键` 来滚动，按 `q` 退出。
git log

# 用 `<limit>` 限制提交的数量。比如 `git log -n 3` 只会显示 3 个提交
git log -n <limit>
```
查找（搜索）log ：
```bash
# 只显示包含特定文件的提交。查找特定文件的历史这样做会很方便
git log <file>

# 搜索特定作者的提交。`<pattern>` 可以是字符串或正则表达式
git log --author="<pattern>"

# 搜索提交信息匹配特定 `<pattern>` 的提交。`<pattern>` 可以是字符串或正则表达式
git log --grep="<pattern>"

# 只显示发生在 `<since>` 和 `<until>` 之间的提交。两个参数可以是提交ID、分支名、`HEAD`或是任何一种引用
git log <since>..<until>
```

显示简短/详细的log：
```bash
git log --oneline    # 将每个提交压缩到一行

# 除了 `git log` 信息之外，包含哪些文件被更改了，以及每个文件相对的增删行数
git log --stat

# 显示代表每个提交的一堆信息。显示每个提交全部的差异（diff），这也是项目历史中最详细的视图
git log -p
```

::: info 一些有用的选项

```bash
git log --graph --decorate --oneline
`--graph` 标记会绘制一幅字符组成的图形，左边是提交，右边是提交信息
`--decorate` 标记会加上提交所在的分支名称和标签
`--oneline` 标记将提交信息显示在同一行，一目了然

# 可以将很多选项用在同一个命令中
git log --author="John Smith" -p hello.py
```
:::

<br>

### 7. git add

`git add` 命令将工作目录中的变化添加到暂存区。它告诉 Git 你想要在下一次提交时包含这个文件的更新。但是，`git add` 不会实质上地影响你的仓库——在你运行 `git commit` 前更改都还没有真正被记录。通常使用这些命令的同时，需要结合使用 `git status` 来查看工作目录和暂存区的状态

```bash
git add <file>        # 将 `<file>` 中的更改加入下次提交的缓存
git add <directory>   # 将 `<directory>` 下的更改加入下次提交的缓存

git add .    # 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件
git add -u   # 提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)
git add -A   # 提交所有变化
```

::: note 交互式的add
开始交互式的缓存，你可以选择文件的一部分加入到下次提交缓存。它会向你展示一堆更改，等待你输入一个命令。
```bash
git add -i
    `y` 将这块更改加入缓存，
    `n` 忽略这块更改，
    `s` 将它分割成更小的块，
    `e` 手动编辑这块更改，
    `q` 退出
```
:::

<br/>

### 8. git commit

`git commit`命令将缓存的快照提交到本地仓库。提交的快照可以认为是项目安全的版本。

提交已经缓存的快照、将 `<message>` 作为提交信息: 

```bash
git commit -m "<message>"  
```

提交一份包含工作目录所有更改的快照。它只包含跟踪过的文件的更改（那些之前已经通过 `git add` 添加过的文件）

```bash
git commit -a
```

提交已经缓存的快照。它会运行文本编辑器，等待你输入提交信息。当你输入信息之后，保存文件，关闭编辑器，创建实际的提交

```bash
git commit
```

<br>

有时你提交过代码之后，发现commit message的描述有误，这时候你可以使用这个命令：

```bash
git commit --amend    # 修改提交描述信息
```

::: danger 记录快照，而不是记录差异

SVN 和 Git 除了使用上存在巨大差异，它们底层的实现同样遵循截然不同的设计哲学。SVN 追踪文件的 *变化* ，而 Git 的版本控制模型基于 *快照* 。

比如说，一个 SVN 提交由仓库中原文件相比的差异（diff）组成。而 Git 在每次提交中记录文件的 *完整内容* 。这让很多 Git 操作比 SVN 来的快得多，因为文件的某个版本不需要通过版本间的差异组装得到 —— 每个文件完整的修改能立刻从 Git 的内部数据库中得到。
:::

::: tip
Git 的快照模型对它版本控制模型的方方面面都有着深远的影响，从分支到合并工具，再到协作工作流，以至于影响了所有特性
:::

<br/>

## 二 工作区和暂存区

### 1. 忽略文件
用户的工作区（也称工作树）内部的内容既可以被Git跟踪，也可以不被它跟踪。被跟踪文件，顾名思义，Git将会跟踪该文件的一系列变更记录。未被追踪的文件, 通常有两类:
::: info 未被追踪的文件
- 它们要么是项目新增但还未提交的文件

- 要么是像 `.pyc`、`.obj`、`.exe` 等编译后的二进制文件。
:::

显然前者应该出现在 `git status` 的输出中，而后者一般没什么用

因此，Git 允许你完全忽略这些文件，只需要将路径放在一个特定的 ==`.gitignore`== 文件中。

所有想要忽略的文件应该分别写在单独一行，`*` 字符用作通配符, 如：

```bash
index.html     # 文件名
*.class        # 以.class 结尾的文件
target         # 目录名
```

在提交更改前检查仓库状态是一个良好的实践，这样你就不会不小心提交什么奇怪的东西。

::: tip
gitignore文件中的每一行都代表一种UNIX的glob模式，即shell通配符
:::

<br/>


<br/>

## 三 远程仓库管理

### 1. git remote

`git remote` 命令允许你创建、查看和删除和其它仓库之间的连接。远程连接更像是书签，而不是直接跳转到其他仓库的链接。

它用方便记住的别名引用不那么方便记住的 URL，而不是提供其他仓库的实时连接。

```shell
git remote -v                            #列出你和其他远程仓库之间的连接（-v 同时显示每个连接的 URL）
git remote add <name> <url>              #创建一个新的远程仓库连接。在添加之后，你可以将 <name> 作为 <url> 便捷的别名在其他 Git 命令中使用

git remote rm <name>                     #删除名为<name>的远程仓库连接
git remote rename <old-name> <new-name>  #将远程连接从 <old-name> 重命名为 <new-name>

git remote show origin                      # 查看远端主机详细配置信息
git branch --set-upstream-to origin/分支名  # 修改关联

#需要将代码同时推送到多个远程仓库的情形：
git remote add origin https://gitee.com/drizzletowne/develop.git
git remote set-url --add origin https://github.com/drizzletowne/Develop.git
```

<br/>

### 2. git fetch

`git fetch` 命令将提交从远程仓库导入到你的本地仓库。

拉取下来的提交储存为远程分支，而不是我们一直使用的普通的本地分支。因此可以在整合进本地仓库之前查看更改

```bash
# 拉取仓库中所有的分支。同时会从另一个仓库中下载所有需要的提交和文件 (它会显示被下载的分支)
git fetch <remote>


# 和上一个命令相同，但只拉取指定的分支
git fetch <remote> <branch>


# 查看远程分支
git branch -r
# origin/master
# origin/develop
# origin/some-feature


# 查看添加到上游 master 上的提交，用 `origin/master` 过滤：
git log --oneline master..origin/master

# 用下面这些命令接受更改并并入本地 `master` 分支
git checkout master
git log origin/master

git merge origin/master  # origin/master 和 master 分支现在指向了同一个提交，你已经和上游的更新保持了同步
```

远程分支拥有 remote 的前缀，所以你不会将它们和本地分支混起来。

可以用寻常的 `git checkout` 和 `git log` 命令来查看这些分支。

如果你接受远程分支包含的更改，你可以使用 `git merge` 将它并入本地分支。

同步你的本地仓库和远程仓库事实上是一个分两步的操作：先 fetch，然后 merge。`git pull` 命令是这个过程的快捷方式。

<br/>

### 3. git pull

上面使用 `git fetch` 拉去远程仓库的代码，然后使用 `git merge` 合并到本地仓库， `git pull` 则是将将这两个命令合二为一

```bash
# 拉取当前分支对应的远程副本中的更改，并立即并入本地副本。效果和 `git fetch` 后接 `git merge origin/.` 一致
git pull <remote>


# 和上一个命令相同，但使用 `git rebase` 合并远程分支和本地分支，而不是使用 `git merge`
git pull --rebase <remote>
```

git pull 强制覆盖本地代码：https://blog.csdn.net/yaoyutian/article/details/119105728

<br/>

### 4. git push

```shell
git push <远程主机名> <本地分支名>:<远程分支名>   #将本地分支的更新，推送到远程主机(这里的:前后是必须没有空格)

#将本地的master分支推送到origin主机的master分支,如果后者不存在，则会被新建
git push -u origin master      #-u选项指定一个默认主机，这样后面就可以不加任何参数使用git push

git push origin                #如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略
git push                       #如果当前分支只有一个追踪分支，那么主机名都可以省略
```

<br/>

```shell
#慎用！删除远程仓库的分支
git push origin :master          #推送一个空的本地分支到远程分支,等同于:
git push origin --delete master

git push -f origin master        #强制用本地的代码去覆盖掉远程仓库的代码 (-f为force，意为：强行、强制)
```

<br/>

### 5. 解决冲突

示例：

现有这样一个项目（共有两次提交）：

![image-20220405210353835](../vx_images/image-20220405210353835.png)

共有两个项目成员（Neil 和 itdrizzle）进行开发：

![image-20220406075626394](../vx_images/image-20220406075626394.png)

Neil 先对 demo.txt 文件进行了修改：

```bash
git
test
Neil change file  # 新增的内容
```

然后进行了提交，并push到了 远程仓库

![image-20220405211134031](../vx_images/image-20220405211134031.png)

现在 itdrizzle 还不知道有人 进行了提交，他也想对 demo.txt 文件进行一些修改：

![image-20220405211313552](../vx_images/image-20220405211313552.png)

同样，他也进行了 提交 并push 到远程仓库：

![image-20220405211609524](../vx_images/image-20220405211609524.png)

显然，结果不尽人意，冲突已经发生，需要解决

itdrizzle 这时先将远程仓库的代码拉取到本地，而且使用了 git pull ，希望能自动合并

![image-20220405211756542](../vx_images/image-20220405211756542.png)

结果显然不行，需要 itdrizzle 手动解决冲突再进行提交：

![image-20220405212307678](../vx_images/image-20220405212307678.png)

解决冲突后，itdrizzle 再次进行了提交：

![image-20220405212658423](../vx_images/image-20220405212658423.png)

此时 Neil 再去 git pull 即可获取最新的项目信息：

![image-20220405212819760](../vx_images/image-20220405212819760.png)

<br>

## 四 撤销与删除

### 1. git checkout

`git checkout` 这个命令有三个不同的作用：检出文件、检出提交和检出分支（这里只关心前两种用法）

- `git checkout <commit>` —— 更新工作目录中的所有文件，使得和某个特定提交中的文件一致。
- `git checkout <commit> <file>` —— 它将工作目录中的 `<file>`文件变成` <commit> `中那个文件的拷贝，**并将它加入缓存区**。 [更多](https://github.com/geeeeeeeeek/git-recipes/wiki/2.5-检出之前的提交)

- 将文件从暂存区中删除： `git rm --cached 文件`
- 将 git 仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录：`git rest --hard commitID` 

<br>

### 2. git revert

git revert : [git revert]()

<br>

### 3. git reset

<br/>

## 四 Git分支管理

一个项目只允许有一个主分支，通常用来合并其他开发完毕的分支的。因此我们日常的开发工作都是在其他分支下完成的。

### 1. 分支的基本使用
本地创建dev分支，然后切换到dev分支：

```bash
$ git branch dev       # 创建分支
$ git checkout dev     # 切换分支

$ git checkout -b dev  # git checkout命令加上-b参数表示创建并切换分支

$ git checkout -b dev origin/dev  # 获取远程的dev分支
```

使用git branch命令查看当前分支：（git branch命令会列出所有的分支，当前分支面前会标有一个*号）
```bash
$ git branch
* dev
  master
```

我们现在可以在dev分支上正常开发，然后提交，dev分支上的工作完成后，我们就可以切换回master分支：

```bash
$ git checkout master
Switched to branch 'master'
```

切换回master分支后，是看不到在dev分支下所修改或添加的文件的，如果想看到dev分支下的修改，把dev分支的工作成果合并到master分支上即可：（注意：当前分支是master）

```bash
$ git merge dev  # 用于合并指定分支到当前分支(这个当前分支不一定是master分支，可以是任意分支)

git branch --delete dev
```
合并完成后，就可以放心的删除dev分支了（当然你也可以选择不删除）

### 2. 分支的使用场景
在工作中的通常操作是，你为某个大的模块创建分支feature-user-v1.0.0，然后这个大的模块下又有很多小模块，你想细化的话，你可以进行如下操作：

```bash
# 1.创建并切换到feature-user-v1.0.0分支下    
git checkout -b feature-user-v1.0.0

# 2.这时候分支指针指向的就是feature-user-v1.0.0分支，然后在当前分支创建一个新的分支（小模块）
git checkout -b feature-userMoudle

# 3.在这个新分支下开发，开发完毕之后提交

# 4.然后切换回feature-user-v1.0.0分支，合并这个小模块的分支
git checkout feature-user-v1.0.0
git merge feature-userMoudle

# 5.之后删除这个小模块的分支
git branch --delete feature-userMoudle
```

### 3. 紧急Bug分支
在我们开发工作中，每个bug都可以通过一个新的临时分支来修复，修复后。合并分支，然后将临时分支删除。
情景：你接到一个修复代号为101的bug的任务时，你很自然的想创建一个分支'hotfix-issue-101'，来修复它，但是，你当前正在dev上进行的工作还没有提交，并不是你不想提交，而是工作只是进行了一般，还没发提交，预计完成还需要1天的时间，但是这个bug必须在2个小时内修复完毕，怎么办？

幸好的是，git还提供了stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：

```bash
$ git stash
Saved working directory and index state WIP on dev: f52c633 add merge
```
执行了git stash之后，再执行git status命令查看，此时的工作区是干净的（除非有没有被git管理的文件），因此可以放心的创建分支来修复bug

接着，我们就要确定在哪个分支上修复bug，假定需要在master分支上修复，就从master上创建临时分支（其他分支同理）

```bash
# 1.切换到要修改bug的分支，然后在该分支下创建一个新的分支并切换到这个新创建的分支上
$ git checkout master
$ git checkout -b issue-101

# 2.修改工作进行完毕之后，进行提交
$ git add .
$ git commit -m "fix bug 101"

# 3.然后切换到mster分支，进行合并
$ git switch master
$ git merge issue-101

# 4.然后删除这个临时创建的分支（可选，一般都会删除）
git branch --delete issue-101

# 5.现在接着回到dev分支干活
$ git switch dev

$ git status      # 此时分支是干净的

$ git stash list  
$ git stash pop     # 恢复的同时把stash内容也删了
$ git stash apply  # 恢复后，stash内容并不会删除，你需要用git stash drop来删除

# 接着就可以在dev分支上正常进行继续的开发工作了！
# 注意：在master分支上修复bug后，我们要想一想，dev分支是早期从master分支分出来的，
# 所以这个bug其实在当前dev分支上也存在
# 同样的bug，要在dev上修复，我们只需要把4c805e2 fix bug 101这个提交所做的修改“复制”到dev分支即可
$ git cherry-pick 4c805e2  # 复制一个特定的提交到当前分支
```



<br/>

## 五 Git常见问题

### 1.  ssh免登陆

生成秘钥：`ssh-keygen` 

秘钥存储目录：C:\Users\用户\\.ssh

公钥名称：id_rsa.pub

私钥名称：id_rsa

```bash
ssh-keygen -t rsa -C "msdrizzle@outlook.com"    #进入gitbash , 使用如下命令，连续三次回车

cat ~/.ssh/id_rsa.pub   #查看公钥 (然后登录Gitee,在设置中找到SSHKEY将id_rsa.pub文件的内容复制进去即可)

ssh -T git@gitee.com -y                         #测试是否成功
```

<br/>

### 2. 中文乱码问题

```bash
git config --global core.quotepath false             #git status 乱码解决方法
git config --global i18n.commitencoding utf-8        #git commit 乱码解决方法
git config --global i18n.logoutputencoding utf-8     #git status 乱码解决方法

#注意：如果是Linux系统，需要设置环境变量 export LESSCHARSET=utf-8
```