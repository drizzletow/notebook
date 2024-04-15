import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as d,a as n,b as s,d as a,e as i}from"./app-D_MzZNfF.js";const o="/notebook/assets/image-20220314140009085-DW4SZpDl.png",r="/notebook/assets/image-20220314141234604-DBmydAyD.png",p="/notebook/assets/image-20220314220906574-Bb0wZbJS.png",u="/notebook/assets/image-20220401102014938-C6gIPmu1.png",m="/notebook/assets/image-20220401105626927-DOxS9D-T.png",v="/notebook/assets/image-20220401110013639-C1aKy5sL.png",b="/notebook/assets/image-20220314221359831-Cn-64NvT.png",k="/notebook/assets/image-20220314222403039-CR6-XNJk.png",h="/notebook/assets/image-20220401204409112-6PLPS42j.png",g={},f=n("h2",{id:"一-linux简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-linux简介"},[n("span",null,"一 Linux简介")])],-1),y=n("p",null,"一些在线网站：",-1),x={href:"http://cn.linux.vbird.org/linux_server/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://cn.linux.vbird.org/linux_basic/linux_basic.php",target:"_blank",rel:"noopener noreferrer"},q=i(`<br><h3 id="_1-命令行提示符" tabindex="-1"><a class="header-anchor" href="#_1-命令行提示符"><span>1. 命令行提示符</span></a></h3><p>Linux命令行结尾的提示符有 “#” 和 “$” 两种不同的符号</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hostname ~<span class="token punctuation">]</span><span class="token comment">#        # &lt;==这是超级管理员root用户对应的命令行。</span>
<span class="token punctuation">[</span>hostname@hostname ~<span class="token punctuation">]</span>$    <span class="token comment"># &lt;==这是普通用户oldboy对应的命令行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>命令行提示符@前面的字符代表当前登录的用户（可用whoami查询）</p><p>@后面的为主机名（可用hostname查询）</p></blockquote><br><p>Linux命令提示符由PS1环境变量控制</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token environment constant">PS1</span>            <span class="token comment"># 注意PS要大写</span>

<span class="token operator">&gt;</span> <span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;[\\u@\\h \\W]\\$ &#39;</span>   <span class="token comment"># 可以通过全局配置文件/etc/bashrc或/etc/profile进行按需配置和调整</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-查看命令帮助" tabindex="-1"><a class="header-anchor" href="#_2-查看命令帮助"><span>2. 查看命令帮助</span></a></h3><p><mark>使用 man 或 --help 获取命令帮助信息</mark>：</p><p>man命令是Linux系统中最核心的命令之一，因为通过它可以查看其他Linux命令的使用信息。</p><p>当然了，man命令不仅可以查看命令的使用帮助，还可以查看软件服务配置文件、系统调用、库函数等的帮助信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">man</span> <span class="token function">ls</span>                        <span class="token comment"># 使用man 产看 ls 相关的信息</span>

<span class="token function">ls</span> <span class="token parameter variable">--help</span>                     <span class="token comment"># --help 虽然有时这个输出很简单，但是相应地查看起来也会更方便</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工作中建议结合使用，“命令--help”获取的是常用的帮助信息，“man命令”获取的是更多更复杂的帮助信息</p><br><p><mark>使用help命令</mark>：</p><p>在Linux系统里有一些特殊的命令，它们就是bash程序的内置命令，例如 <code>cd、history、read</code> 等，这些命令在系统目录里不存在真实的程序文件（存在于bash程序里），对于这部分命令，查看帮助的方法就是使用help命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">help</span> <span class="token builtin class-name">cd</span>            <span class="token comment"># 如果使用man cd，那么通常是查不到帮助信息的，而是会进入bash的帮助页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p><mark>使用info获取帮助信息</mark>：</p><p>Linux系统中的info命令是一个查看程序对应文档信息的命令，可以作为man及help命令的帮助补充，不过一般在企业运维工作中，很少会有机会需要使用info去查询命令的使用帮助，因此，知道有这个命令就可以了，普通读者无需关注太多。使用info命令查看命令帮助的语法操作和man类似</p><br><h3 id="_3-关机重启注销" tabindex="-1"><a class="header-anchor" href="#_3-关机重启注销"><span>3. 关机重启注销</span></a></h3><p><mark>重启或关机命令：shutdown</mark></p><p>shutdown是一个用来安全关闭或重启Linux系统的命令，系统在关闭之前会通知所有的登录用户，系统即将关闭，此时所有的新用户都不可以登录，与shutdown功能类似的命令还有init、halt、poweroff、reboot。</p><p>1）注意shutdown命令和后面的选项之间至少要有一个空格。</p><p>2）通常情况下，我们执行的shutdown命令为 <code>shutdown -h now</code> 或 <code>shutdown -r now</code>。</p><figure><img src="`+o+'" alt="image-20220314140009085" tabindex="0" loading="lazy"><figcaption>image-20220314140009085</figcaption></figure><blockquote><p>shutdown命令的工作过程就是当用户执行了对应参数并附带关机时间的命令之后，</p><p>通知所有用户即将关机的信息，并且在这个时间段内禁止新用户登录，</p><p>仅当到了指定的关机时间时，shutdown命令才会根据所接收的参数选项，发送请求给系统的init进程，请求将系统调整到对应参数的状态（例如-h参数），系统关机状态实际上对应的是Linux系统里的运行级别0。</p><p>和系统关机相关的运行级别有：0（关机运行级别）-halt，6（重启运行级别）-reboot，更多相关内容可查看/etc/inittab文件。</p></blockquote><br><p><mark>关机与重启命令：halt/poweroff/reboot</mark>：</p><p>从RedHat或CentOS 6开始，你会发现halt、poweroff、reboot这三个命令对应的都是同一个man帮助文档，而halt和poweroff命令是reboot命令的链接文件，通常情况下，我们执行这三个命令时都不带任何参数。</p><blockquote><p>为什么halt、poweroff命令是reboot命令的链接文件，但是分别执行命令后效果不一样呢？</p><p>查看一下reboot命令的man帮助，可以发现reboot命令有2个参数--halt和--power-off，作用分别和halt、poweroff命令一样。</p></blockquote><br><figure><img src="'+r+`" alt="image-20220314141234604" tabindex="0" loading="lazy"><figcaption>image-20220314141234604</figcaption></figure><br><h3 id="_4-查看系统信息" tabindex="-1"><a class="header-anchor" href="#_4-查看系统信息"><span>4. 查看系统信息</span></a></h3><p>linux查看cpu、内存、版本信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看CPU信息</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> name <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f2</span> -d: <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> 
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> physical <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> 


getconf LONG_BIT   
<span class="token comment">#32 (说明当前CPU运行在32bit模式下, 但不代表CPU不支持64bit) </span>

<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> flags <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39; lm &#39;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>  
<span class="token comment"># 8 (结果大于0, 说明支持64bit计算. lm指long mode, 支持lm则是64bit) </span>


dmidecode <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;Product Name&quot;</span>    <span class="token comment"># 查看机器型号 </span>

lsb_release <span class="token parameter variable">-a</span>  <span class="token comment"># 查看操作系统版本</span>


<span class="token comment"># 查看内存信息</span>
<span class="token function">free</span>
<span class="token function">cat</span> /proc/meminfo  <span class="token comment"># 查看详细内存信息 </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_5-linux语言设置" tabindex="-1"><a class="header-anchor" href="#_5-linux语言设置"><span>5. Linux语言设置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
locale                  <span class="token comment"># 查看当前使用的语言</span>

locale <span class="token parameter variable">-a</span>               <span class="token comment"># 查看系统中可以使用的语言</span>


<span class="token function">vi</span> /etc/locale.conf     <span class="token comment"># 修改以下内容（LANG=&quot;zh_CN.UTF-8&quot; ==&gt; LANG=&quot;en_US.UTF-8&quot; ）</span>

<span class="token comment">#LANG=&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="二-文件与目录管理" tabindex="-1"><a class="header-anchor" href="#二-文件与目录管理"><span>二 文件与目录管理</span></a></h2><p><mark>ls：显示目录下的内容及相关属性信息</mark>：</p><p>ls 命令是Linux下最常用的指令之一。</p><p>ls命令可以理解为英文单词list的缩写，其功能是列出目录的内容及其内容属性信息（list directory contents）。</p><p>该命令有点类似于DOS系统下的dir命令，有趣的是，Linux下其实也有dir命令，但我们更习惯于使用ls。</p><br><p><strong>常用参数：</strong></p><table><thead><tr><th style="text-align:center;">常用参数</th><th>参数说明</th></tr></thead><tbody><tr><td style="text-align:center;">-a</td><td>显示所有文件及目录 (包括以“.”开头的隐藏文件)</td></tr><tr><td style="text-align:center;">-l</td><td>使用长格式列出文件及目录信息</td></tr><tr><td style="text-align:center;">-r</td><td>将文件以相反次序显示(默认依英文字母次序)</td></tr><tr><td style="text-align:center;">-t</td><td>根据最后的修改时间排序</td></tr><tr><td style="text-align:center;">-A</td><td>同 -a ，但不列出 “.” (当前目录) 及 “..” (父目录)</td></tr><tr><td style="text-align:center;">-S</td><td>根据文件大小排序</td></tr><tr><td style="text-align:center;">-R</td><td>递归列出所有子目录</td></tr></tbody></table><br><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
stat命令：用于显示文件的状态信息。stat命令的输出信息比ls命令的输出信息要更详细

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><mark>pwd：显示当前所在的位置</mark> ：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
pwd命令是 “print working directory” 中每个单词的首字母缩写，其功能是显示当前工作目录的绝对路径。

在实际工作中，我们在命令行操作命令时，经常会在各个目录路径之间进行切换，此时可使用pwd命令快速查看当前我们所在的目录路径。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><mark>cd：切换目录</mark>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># cd命令是 “change directory” 中每个单词的首字母缩写，其功能是从当前工作目录切换到指定的工作目录。</span>

<span class="token builtin class-name">cd</span> -                 <span class="token comment"># 返回当前用户上一次所在的目录</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>                <span class="token comment"># 切换到当前目录的上一级目录</span>
<span class="token builtin class-name">cd</span> ~                 <span class="token comment"># 进入当前用户的家目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-mkdir和touch" tabindex="-1"><a class="header-anchor" href="#_1-mkdir和touch"><span>1. mkdir和touch</span></a></h3><p><mark>mkdir：创建目录</mark>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># mkdir命令是“make directories”中每个单词的粗体字母组合而成，其功能是创建目录，</span>
<span class="token comment"># 默认情况下，如果要创建的目录已存在，则会提示此文件已存在；而不会继续创建目录。</span>

<span class="token function">mkdir</span> dir1 dir2                <span class="token comment"># mkdir命令可以同时创建多个目录</span>


<span class="token comment"># 使用-p参数递归创建目录, 加-v参数显示创建目录的过程(其实这个-v没有什么实际用途)</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> dir/test
<span class="token function">mkdir</span> <span class="token parameter variable">-pv</span> dir/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用mkdir创建多级目录时，建议直接使用-p参数，可以避免出现“No such file or directory”这样没有文件或目录的报错了，不会影响已存在的目录。</p><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 同时创建多个目录及多级子目录 (注意大括号内不能有空格)</span>

<span class="token function">mkdir</span> <span class="token parameter variable">-pv</span> dir/<span class="token punctuation">{</span>dir_1,dir_2<span class="token punctuation">}</span>/<span class="token punctuation">{</span>dir_a,dir_b<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><mark>touch：创建空文件或改变文件的时间戳属性</mark>：</p><p>touch命令有两个功能：一是创建新的空文件；二是改变已有文件的时间戳属性。</p><p>特别说明：</p><p>1）注意区分touch和mkdir命令的功能，mkdir命令是创建空目录，而touch是创建空文件。</p><p>2）在Linux中，一切皆文件。虽然touch命令不能创建目录，但是可以修改目录的时间戳。</p><figure><img src="`+p+`" alt="image-20220314220906574" tabindex="0" loading="lazy"><figcaption>image-20220314220906574</figcaption></figure><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">touch</span> a.txt b.txt          <span class="token comment"># 创建多个文件</span>

<span class="token function">touch</span> log<span class="token punctuation">{</span>01<span class="token punctuation">..</span>05<span class="token punctuation">}</span>          <span class="token comment"># log01  log02  log03  log04  log05  (注意是两个点)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-修改文件时间" tabindex="-1"><a class="header-anchor" href="#_2-修改文件时间"><span>2. 修改文件时间</span></a></h3><p><mark>文件时间</mark>：</p><ul><li><p><strong>modifiy time (mtime)</strong>：</p><p>当该文件的『内容』变更时，就会升级这个时间！内容数据指的是文件的内容，而不是文件的属性或权限喔！</p></li><li><p><strong>changetime (ctime)</strong>：</p><p>当该文件的『状态 (status)』改变时，就会升级这个时间，举例来说，像是权限与属性被更改了，都会升级这个时间啊。</p></li><li><p><strong>access time (atime)</strong>：</p><p>当『该文件的内容被读取』时，就会升级这个读取时间 (access)。</p><p>举例来说，我们使用 cat 去读取 /etc/man_db.conf， 就会升级该文件的 atime 了。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 查看 文件时间</span>

<span class="token function">ls</span> <span class="token parameter variable">-l</span> 文件名                      <span class="token comment"># 查看 mtime</span>

<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">--time</span><span class="token operator">=</span>ctime 文件名         <span class="token comment"># 查看 ctime</span>

<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">--time</span><span class="token operator">=</span>atime 文件名         <span class="token comment"># 查看 atime</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><figure><img src="`+u+`" alt="image-20220401102014938" tabindex="0" loading="lazy"><figcaption>image-20220401102014938</figcaption></figure><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">touch</span> 这个命令的两个常见功能：

<span class="token number">1</span>. 创建一个空的文件；

<span class="token number">2</span>. 将某个文件的所有日期更新为系统当前时间， 或将<span class="token punctuation">(</span>mtime 与 atime<span class="token punctuation">)</span>修改为指定时间 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><figure><img src="`+m+'" alt="image-20220401105626927" tabindex="0" loading="lazy"><figcaption>image-20220401105626927</figcaption></figure><br><figure><img src="'+v+`" alt="image-20220401110013639" tabindex="0" loading="lazy"><figcaption>image-20220401110013639</figcaption></figure><br><p>change time 只能通过修改系统时间来自定义（但是一般情况下修改系统时间需要root权限）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@DevMachine temp<span class="token punctuation">]</span><span class="token comment"># date -s 06/06/2022 &gt;&gt; a.bash</span>

<span class="token comment"># 文件的atime和mtime已经改变，但是ctime时间没变</span>
<span class="token punctuation">[</span>root@DevMachine temp<span class="token punctuation">]</span><span class="token comment"># stat a.bash</span>
  File: ‘a.bash’
  Size: <span class="token number">29</span>              Blocks: <span class="token number">8</span>          IO Block: <span class="token number">4096</span>   regular <span class="token function">file</span>
Device: fd00h/64768d    Inode: <span class="token number">67415159</span>    Links: <span class="token number">1</span>
Access: <span class="token punctuation">(</span>0644/-rw-r--r--<span class="token punctuation">)</span>  Uid: <span class="token punctuation">(</span>    <span class="token number">0</span>/    root<span class="token punctuation">)</span>   Gid: <span class="token punctuation">(</span>    <span class="token number">0</span>/    root<span class="token punctuation">)</span>
Context: unconfined_u:object_r:admin_home_t:s0
Access: <span class="token number">2022</span>-03-03 <span class="token number">23</span>:23:00.000000000 +0800
Modify: <span class="token number">2022</span>-06-06 00:00:00.000000000 +0800
Change: <span class="token number">2022</span>-06-06 00:00:00.000000000 +0800
 Birth: -
 
<span class="token comment">#此时系统时间已经改变</span>
<span class="token punctuation">[</span>root@DevMachine temp<span class="token punctuation">]</span><span class="token comment"># date &quot;+%F %T&quot;</span>
<span class="token number">2022</span>-06-06 00:00:56

<span class="token comment"># 更新系统时间为正常时间</span>
<span class="token punctuation">[</span>root@DevMachine temp<span class="token punctuation">]</span><span class="token comment"># /usr/sbin/ntpdate ntp.api.bz</span>
 <span class="token number">1</span> Apr <span class="token number">11</span>:21:35 ntpdate<span class="token punctuation">[</span><span class="token number">1803</span><span class="token punctuation">]</span>: step <span class="token function">time</span> server <span class="token number">114.118</span>.7.161 offset <span class="token parameter variable">-5661630.439834</span> sec

<span class="token comment"># 系统时间已经更新正常</span>
<span class="token punctuation">[</span>root@DevMachine temp<span class="token punctuation">]</span><span class="token comment"># date &quot;+%F %T&quot;</span>
<span class="token number">2022</span>-04-01 <span class="token number">11</span>:21:44

<span class="token comment"># 系统时间已经还原，ctime修改已完成</span>
<span class="token punctuation">[</span>root@DevMachine temp<span class="token punctuation">]</span><span class="token comment"># stat a.bash</span>
  File: ‘a.bash’
  Size: <span class="token number">29</span>              Blocks: <span class="token number">8</span>          IO Block: <span class="token number">4096</span>   regular <span class="token function">file</span>
Device: fd00h/64768d    Inode: <span class="token number">67415159</span>    Links: <span class="token number">1</span>
Access: <span class="token punctuation">(</span>0644/-rw-r--r--<span class="token punctuation">)</span>  Uid: <span class="token punctuation">(</span>    <span class="token number">0</span>/    root<span class="token punctuation">)</span>   Gid: <span class="token punctuation">(</span>    <span class="token number">0</span>/    root<span class="token punctuation">)</span>
Context: unconfined_u:object_r:admin_home_t:s0
Access: <span class="token number">2022</span>-03-03 <span class="token number">23</span>:23:00.000000000 +0800
Modify: <span class="token number">2022</span>-06-06 00:00:00.000000000 +0800
Change: <span class="token number">2022</span>-06-06 00:00:00.000000000 +0800
 Birth: -
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-复制移动删除" tabindex="-1"><a class="header-anchor" href="#_3-复制移动删除"><span>3. 复制移动删除</span></a></h3><p><mark>cp：复制文件或目录</mark>:</p><p>cp命令可以理解为英文单词copy的缩写，其功能为复制文件或目录。</p><figure><img src="`+b+`" alt="image-20220314221359831" tabindex="0" loading="lazy"><figcaption>image-20220314221359831</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">cp</span> /etc/ssh/sshd_config /etc/ssh/sshd_config.ori

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><mark>mv：移动或重命名文件</mark>:</p><p>mv命令可以理解为英文单词move的缩写，其功能是移动或重命名文件（move/rename files）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">mv</span> a.txt b.txt             <span class="token comment"># 若b.txt 不存在，则将 a.txt 重命名为 b.txt</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><mark>rm：删除文件或目录</mark>:</p><p>rm命令可以理解为英文单词remove的缩写，其功能是删除一个或多个文件或目录（remove files or directories）。</p><p>这是Linux系统里最危险的命令之一，请慎重使用。</p><figure><img src="`+k+`" alt="image-20220314222403039" tabindex="0" loading="lazy"><figcaption>image-20220314222403039</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token function">dir</span>                   <span class="token comment"># 递归强制删除dir目录及其内部文件和目录</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><mark>rmdir：删除空目录</mark>:</p><p>rmdir命令用于删除空目录（remove empty directories），当目录不为空时，命令不起作用</p><p>rmdir命令在实际工作中使用的极少</p><br><h3 id="_4-查看文件内容" tabindex="-1"><a class="header-anchor" href="#_4-查看文件内容"><span>4. 查看文件内容</span></a></h3><p><mark>cat、tac、nl 直接查看文件内容</mark> :</p><ul><li>cat 由第一行开始显示文件内容，cat 是 Concatenate （连续）的简写</li><li>tac 从最后一行开始显示，可以看出 tac 是 cat 的倒著写！</li><li>nl 显示的时候，顺道输出行号！</li></ul><p>这些命令在文件行数较多时使用并不方便、推荐使用下面介绍的 more 和 less</p><br><p><mark>more、less 分页查看文件</mark> :</p><ul><li><p>more 一页一页的显示文件内容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>空白键 <span class="token punctuation">(</span>space<span class="token punctuation">)</span>  ：代表向下翻一页；
Enter          ：代表向下翻『一行』；
/字串           ：代表在这个显示的内容当中，向下搜寻『字串』这个关键字；
:f             ：立刻显示出档名以及目前显示的行数；
q              ：代表立刻离开 <span class="token function">more</span> ，不再显示该文件内容。
b 或 <span class="token punctuation">[</span>ctrl<span class="token punctuation">]</span>-b  ：代表往回翻页，不过这动作只对文件有用，对管线无用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br></li><li><p>less 与 more 类似，但是比 more 更好的是，他可以往前翻页！</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>空白键       ：向下翻动一页；
[pagedown]  ：向下翻动一页；
[pageup]    ：向上翻动一页；
/字串        ：向下搜寻『字串』的功能；
?字串        ：向上搜寻『字串』的功能；
n           ：重复前一个搜寻 (与 / 或 ? 有关！)
N           ：反向的重复前一个搜寻 (与 / 或 ? 有关！)
q           ：退出 less 这个程序；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><br><p><mark>head、tail 从头（尾）查看文件（指定行数）</mark> :</p><ul><li>head 只看头几行 （若没有加上 -n 这个选项时，默认只显示十行）</li><li>tail 只看尾巴几行 （默认也是显示十行，若要显示非十行，就加 -n number 的选项即可）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> /etc/my.cnf            <span class="token comment"># 查看第一行文件</span>

<span class="token function">tail</span> <span class="token parameter variable">-n</span> +100 /etc/man_db.conf    <span class="token comment"># 代表该文件从100行以后都会被列出来</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 例题：假如我想要显示 /etc/man.config 的第 11 到第 20 行呢？</span>

<span class="token comment"># 答：先取前 20 行，再取后十行，所以结果就是：</span>

<span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">20</span> /etc/man_db.conf <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_5-压缩和解压缩" tabindex="-1"><a class="header-anchor" href="#_5-压缩和解压缩"><span>5. 压缩和解压缩</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>在Linux操作系统中，默认支持两种压缩格式
	<span class="token number">1</span>   .tar.gz
	<span class="token number">2</span>   .zip
	
	
不同的压缩格式可以使用不同的软件来解压与压缩

 <span class="token number">1</span>  .tar.gz  这种压缩格式其实是Linux比较传统的压缩格式，需要借助于tar命令
   
     <span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> name.tar.gz <span class="token builtin class-name">test</span>            <span class="token comment"># 压缩</span>
  
     <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> name.tar.gz <span class="token parameter variable">-C</span> targetDir    <span class="token comment"># 解压   -C 表示解压到指定的路径下</span>
 
   
 <span class="token number">2</span>   .zip
 
    <span class="token function">zip</span> name.zip fileName                   <span class="token comment"># 压缩</span>
  
    <span class="token function">unzip</span> name.zip                          <span class="token comment"># 解压</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_6-追加与重定向" tabindex="-1"><a class="header-anchor" href="#_6-追加与重定向"><span>6. 追加与重定向</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
重定向：可以把控制台输出的内容重定向到文件中。
	   如果文件不存在，那么会创建文件
	   如果文件已经存在，那么会覆盖文件中的内容
	   <span class="token builtin class-name">echo</span> <span class="token string">&#39;bob&#39;</span> <span class="token operator">&gt;</span> <span class="token number">1</span>.txt
	   ll <span class="token operator">&gt;</span> <span class="token number">2</span>.txt
	   
	   
追加： 其实就是在指定文件的末尾追加控制台输出的内容
	  不会覆盖原来文件中的内容
	  如果文件不存在，依然会创建文件
	  ll <span class="token operator">&gt;&gt;</span> <span class="token number">2</span>.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="三-用户与权限管理" tabindex="-1"><a class="header-anchor" href="#三-用户与权限管理"><span>三 用户与权限管理</span></a></h2><h3 id="_1-用户和组管理" tabindex="-1"><a class="header-anchor" href="#_1-用户和组管理"><span>1. 用户和组管理</span></a></h3><p>用户管理：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash username         <span class="token comment"># 创建 \`username\` 用户</span>
<span class="token comment">#  useradd     创建用户的命令</span>
<span class="token comment">#  -m          指创建用户逇同时给这个用户创建一个家目录</span>
<span class="token comment">#  -s          指定shell的版本为bash</span>
<span class="token comment">#  username：  用户名称</span>


<span class="token function">sudo</span> <span class="token function">userdel</span> <span class="token punctuation">[</span>-r<span class="token punctuation">]</span> username                    <span class="token comment"># 删除用户</span>
<span class="token comment">#  userdel     删除用户的命令</span>
<span class="token comment">#  -r          指删除用户的同事，还要删除用户的家目录</span>
<span class="token comment">#  username：  用户名</span>


<span class="token function">sudo</span> <span class="token function">passwd</span> username                          <span class="token comment"># 给用户设置密码</span>


<span class="token function">su</span> username                                   <span class="token comment"># 切换用户</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>组管理：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 添加组</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> groupName

<span class="token comment"># 添加用户的时候指定组</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash <span class="token parameter variable">-g</span> groupName username

<span class="token comment"># 查询用户所属的组的信息</span>
<span class="token function">id</span> username

<span class="token comment"># 修改组</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-g</span> groupName username

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-文件权限管理" tabindex="-1"><a class="header-anchor" href="#_2-文件权限管理"><span>2. 文件权限管理</span></a></h3><p>Linux里面，任何一个文件都具有『User, Group及Others』三种身份的权限</p><figure><img src="`+h+`" alt="image-20220401204409112" tabindex="0" loading="lazy"><figcaption>image-20220401204409112</figcaption></figure><br><p>rwx这三个参数对文件和目录的意义是不同的，如下：</p><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">文件</th><th style="text-align:center;">目录</th><th style="text-align:center;">权限分数</th></tr></thead><tbody><tr><td style="text-align:center;">r</td><td style="text-align:center;">可读(read)</td><td style="text-align:center;">r (read contents in directory)</td><td style="text-align:center;">4</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">可写(write)</td><td style="text-align:center;">w (modify contents of directory)</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">x</td><td style="text-align:center;">可执行(execute)</td><td style="text-align:center;">x (access directory)</td><td style="text-align:center;">1</td></tr></tbody></table><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
r <span class="token punctuation">(</span>read<span class="token punctuation">)</span>：     可读取此一文件的实际内容，如读取文本文件的文字内容等；
w <span class="token punctuation">(</span>write<span class="token punctuation">)</span>：    可以编辑、新增或者是修改该文件的内容<span class="token punctuation">(</span>但不含删除该文件<span class="token punctuation">)</span>；
x <span class="token punctuation">(</span>execute<span class="token punctuation">)</span>：  该文件具有可以被系统执行的权限。


r <span class="token punctuation">(</span>read contents <span class="token keyword">in</span> directory<span class="token punctuation">)</span>：
表示具有读取目录结构列表的权限，所以当你具有读取<span class="token punctuation">(</span>r<span class="token punctuation">)</span>一个目录的权限时，表示你可以查询该目录下的文件名数据。 
所以你就可以利用 <span class="token function">ls</span> 这个指令将该目录的内容列表显示出来！

w <span class="token punctuation">(</span>modify contents of directory<span class="token punctuation">)</span>：
可写入权限对目录来说表示你具有操作该目录结构列表的权限，也就是底下这些权限：
    - 建立新的文件与目录；
    - 删除已经存在的文件与目录<span class="token punctuation">(</span>不论该文件的权限为何！<span class="token punctuation">)</span>
    - 将已存在的文件或目录进行更名；
    - 移动该目录内的文件、目录位置。

x <span class="token punctuation">(</span>access directory<span class="token punctuation">)</span>：
目录不可以被执行，目录的x代表的是用户能否进入该目录成为工作目录的用途！ 
所谓的工作目录<span class="token punctuation">(</span>work directory<span class="token punctuation">)</span>就是你目前所在的目录！
举例来说，当你登入Linux时， 你所在的家目录就是你当下的工作目录。而变换目录的指令是『cd』<span class="token punctuation">(</span>change directory<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><mark>chmod：修改文件的权限</mark>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 方式一：</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rw,o<span class="token operator">=</span>r fileName
<span class="token comment"># u：表示文件拥有者</span>
<span class="token comment"># g：表示同组的成员</span>
<span class="token comment"># o：表示其他组的成员</span>


<span class="token comment"># 方式二：通过数字来指代权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">764</span> fileName

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 一些常见情景例：</span>

如果要将该文件变成可执行文件，并且不让其他人修改的话， 那么就需要 -rwxr-xr-x 这样的权限，即 <span class="token function">chmod</span> <span class="token number">755</span> test.sh 

如果有些文件你不希望被其他人看到，那么应该将文件的权限设定为： -rwxr----- ， 即 <span class="token function">chmod</span> <span class="token number">740</span> filename 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="四-进程与服务管理" tabindex="-1"><a class="header-anchor" href="#四-进程与服务管理"><span>四 进程与服务管理</span></a></h2><h3 id="_1-linux进程管理" tabindex="-1"><a class="header-anchor" href="#_1-linux进程管理"><span>1. Linux进程管理</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 查看进程</span>
<span class="token function">ps</span>
<span class="token comment"># -e 显示所有的进程</span>
<span class="token comment"># -f 全格式</span>

<span class="token comment"># a 表示显示终端上所有的进程</span>
<span class="token comment"># u 以用户的格式来显示进程信息</span>
<span class="token comment"># x 显示后台运行的进程</span>


<span class="token comment"># 一般查询进程，分为两种方式 ps -ef 、 ps aux</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span>  可以显示父进程的信息
<span class="token function">ps</span> aux  可以显示进程占用的资源信息


<span class="token comment"># 搜索进程（常用）</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> 进程名或进程id
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> 进程名或进程id


<span class="token comment"># 关闭进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid      <span class="token comment"># 强制关闭进程，从操作系统内核级别杀死进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-15</span> pid     <span class="token comment"># 让内核通知应用主动关闭</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-linux服务管理" tabindex="-1"><a class="header-anchor" href="#_2-linux服务管理"><span>2. Linux服务管理</span></a></h3><br><h2 id="五-ssh和网络管理" tabindex="-1"><a class="header-anchor" href="#五-ssh和网络管理"><span>五 SSH和网络管理</span></a></h2><h3 id="_1-常用网络工具" tabindex="-1"><a class="header-anchor" href="#_1-常用网络工具"><span>1. 常用网络工具</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 安装网络管理工具</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> net-tools

<span class="token comment"># 查看ip</span>
<span class="token function">ifconfig</span>

<span class="token comment"># 通过网络中的心跳机制查看网络是否正常</span>
<span class="token function">ping</span> <span class="token function">ip</span>


<span class="token comment"># 端口号查询</span>
<span class="token function">netstat</span> <span class="token parameter variable">-anp</span> <span class="token operator">|</span> <span class="token function">grep</span> port

<span class="token function">lsof</span> <span class="token parameter variable">-i:port</span>

<span class="token comment"># windows下</span>
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> findstr port

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-ssh远程连接" tabindex="-1"><a class="header-anchor" href="#_2-ssh远程连接"><span>2. SSH远程连接</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 首先需要给远程服务器（Linux服务器）安装ssh</span>

<span class="token comment">## 搜索ssh是否已经安装</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>


<span class="token comment"># 假如没有搜索到，则需要安装ssh服务</span>
<span class="token function">apt</span> update

<span class="token comment"># 安装ssh</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openssh-server

<span class="token comment"># 重启ssh</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">ssh</span> restart 

<span class="token comment"># 执行完了以上指令之后，我们可以搜索ssh服务是否已经启动</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>阿里云、华为云、腾讯云等云服务器会默认安装好ssh服务。</p><br><h3 id="_3-linux防火墙" tabindex="-1"><a class="header-anchor" href="#_3-linux防火墙"><span>3. Linux防火墙</span></a></h3><p>Centos7默认是开启防火墙的：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 1、查看防火墙的配置</span>
firewall-cmd <span class="token parameter variable">--state</span>
firewall-cmd --list-all

<span class="token comment"># 开启防火墙</span>
systemctl start firewalld


<span class="token comment"># 开放某个端口 （ 以80端口为例 ）</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp
firewall-cmd <span class="token parameter variable">--reload</span>    <span class="token comment">#重新加载防火墙配置才会起作用</span>

<span class="token comment"># 移除以上规则</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp
firewall-cmd <span class="token parameter variable">--reload</span>


<span class="token comment"># 放通某个端口段</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">1000</span>-2000/tcp
firewall-cmd <span class="token parameter variable">--reload</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>IP限制：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 放通某个IP访问，默认允许</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=ipv4 source address=192.168.1.169 accept&#39;</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 禁止某个IP访问</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=ipv4 source address=10.0.0.42 drop&#39;</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 放通某个IP访问某个端口</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=ipv4 source address=192.168.1.169 port protocol=tcp port=6379 accept&#39;</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 移除以上规则</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --remove-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=&quot;ipv4&quot; source address=&quot;192.168.1.169&quot; port port=&quot;6379&quot; protocol=&quot;tcp&quot; accept&#39;</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 放通某个IP段访问</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=ipv4 source address=10.0.0.0/24 accept&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="六-系统工具systemd" tabindex="-1"><a class="header-anchor" href="#六-系统工具systemd"><span>六 系统工具Systemd</span></a></h2><p>Systemd 是 Linux 系统工具，用来启动守护进程， 已成为大多数发行版的标准配置。</p><p>历史上，Linux 的启动一直采用 <code>init</code> 进程、下面的命令用来启动服务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
$ <span class="token function">sudo</span> /etc/init.d/apache start

<span class="token comment"># 或者</span>
$ <span class="token function">service</span> apache start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法有两个缺点</p><ul><li><p>一是启动时间长。<code>init</code>进程是串行启动，只有前一个进程启动完，才会启动下一个进程。</p></li><li><p>二是启动脚本复杂。<code>init</code>进程只是执行启动脚本，不管其他事情。脚本需要自己处理各种情况，这往往使得脚本变得很长。</p></li></ul><br><p>Systemd 就是为了解决这些问题而诞生的。它的设计目标是，为系统的启动和管理提供一套完整的解决方案。</p><p>根据 Linux 惯例，字母<code>d</code>是守护进程（daemon）的缩写。 Systemd 这个名字的含义，就是它要守护整个系统.</p><br><p><strong>Systemd 架构图</strong>：</p><img src="https://www.ruanyifeng.com/blogimg/asset/2016/bg2016030703.png" alt="img" style="zoom:150%;"><br><p>使用了 Systemd，就不需要再用<code>init</code>了。</p><p>Systemd 取代了<code>initd</code>，成为系统的第一个进程（PID 等于 1），其他进程都是它的子进程。</p><p>Systemd 的优点是功能强大，使用方便，缺点是体系庞大，非常复杂。</p><p>Systemd 并不是一个命令，而是一组命令，涉及到系统管理的方方面面.</p><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
$ systemctl <span class="token parameter variable">--version</span>             <span class="token comment"># 查看 Systemd 的版本</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-systemd系统管理" tabindex="-1"><a class="header-anchor" href="#_1-systemd系统管理"><span>1. Systemd系统管理</span></a></h3><p><strong>systemctl</strong>：<code>systemctl</code>是 Systemd 的主命令，用于管理系统。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 重启系统</span>
$ <span class="token function">sudo</span> systemctl <span class="token function">reboot</span>

<span class="token comment"># 关闭系统，切断电源</span>
$ <span class="token function">sudo</span> systemctl poweroff

<span class="token comment"># CPU停止工作</span>
$ <span class="token function">sudo</span> systemctl <span class="token function">halt</span>

<span class="token comment"># 暂停系统</span>
$ <span class="token function">sudo</span> systemctl <span class="token function">suspend</span>

<span class="token comment"># 让系统进入冬眠状态</span>
$ <span class="token function">sudo</span> systemctl hibernate

<span class="token comment"># 让系统进入交互式休眠状态</span>
$ <span class="token function">sudo</span> systemctl hybrid-sleep

<span class="token comment"># 启动进入救援状态（单用户状态）</span>
$ <span class="token function">sudo</span> systemctl rescue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>systemd-analyze</strong>：<code>systemd-analyze</code>命令用于查看启动耗时。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看启动耗时</span>
$ systemd-analyze                                                                                       

<span class="token comment"># 查看每个服务的启动耗时</span>
$ systemd-analyze blame

<span class="token comment"># 显示瀑布状的启动过程流</span>
$ systemd-analyze critical-chain

<span class="token comment"># 显示指定服务的启动流</span>
$ systemd-analyze critical-chain atd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>hostnamectl</strong>：<code>hostnamectl</code>命令用于查看当前主机的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前主机的信息</span>
$ hostnamectl

<span class="token comment"># 设置主机名。</span>
$ <span class="token function">sudo</span> hostnamectl set-hostname rhel7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>localectl</strong>：<code>localectl</code>命令用于查看本地化设置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看本地化设置</span>
$ localectl

<span class="token comment"># 设置本地化参数。</span>
$ <span class="token function">sudo</span> localectl set-locale <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_GB.utf8
$ <span class="token function">sudo</span> localectl set-keymap en_GB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>timedatectl</strong>：<code>timedatectl</code>命令用于查看当前时区设置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前时区设置</span>
$ timedatectl

<span class="token comment"># 显示所有可用的时区</span>
$ timedatectl list-timezones                                                                                   

<span class="token comment"># 设置当前时区</span>
$ <span class="token function">sudo</span> timedatectl set-timezone America/New_York
$ <span class="token function">sudo</span> timedatectl set-time YYYY-MM-DD
$ <span class="token function">sudo</span> timedatectl set-time HH:MM:SS

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>loginctl</strong>：<code>loginctl</code>命令用于查看当前登录的用户。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 列出当前session</span>
$ loginctl list-sessions

<span class="token comment"># 列出当前登录用户</span>
$ loginctl list-users

<span class="token comment"># 列出显示指定用户的信息</span>
$ loginctl show-user username

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-systemd系统资源" tabindex="-1"><a class="header-anchor" href="#_2-systemd系统资源"><span>2. Systemd系统资源</span></a></h3><p><strong>Unit</strong> 含义：Systemd 可以管理所有系统资源。不同的资源统称为 Unit（单位）。Unit 一共分成12种。</p><ul><li>Service unit：系统服务</li><li>Target unit：多个 Unit 构成的一个组</li><li>Device Unit：硬件设备</li><li>Mount Unit：文件系统的挂载点</li><li>Automount Unit：自动挂载点</li><li>Path Unit：文件或路径</li><li>Scope Unit：不是由 Systemd 启动的外部进程</li><li>Slice Unit：进程组</li><li>Snapshot Unit：Systemd 快照，可以切回某个快照</li><li>Socket Unit：进程间通信的 socket</li><li>Swap Unit：swap 文件</li><li>Timer Unit：定时器</li></ul><br><p><code>systemctl list-units</code> 命令可以查看当前系统的所有 Unit</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 列出正在运行的 Unit</span>
$ systemctl list-units

<span class="token comment"># 列出所有Unit，包括没有找到配置文件的或者启动失败的</span>
$ systemctl list-units <span class="token parameter variable">--all</span>

<span class="token comment"># 列出所有没有运行的 Unit</span>
$ systemctl list-units <span class="token parameter variable">--all</span> <span class="token parameter variable">--state</span><span class="token operator">=</span>inactive

<span class="token comment"># 列出所有加载失败的 Unit</span>
$ systemctl list-units <span class="token parameter variable">--failed</span>

<span class="token comment"># 列出所有正在运行的、类型为 service 的 Unit</span>
$ systemctl list-units <span class="token parameter variable">--type</span><span class="token operator">=</span>service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-unit状态和管理" tabindex="-1"><a class="header-anchor" href="#_3-unit状态和管理"><span>3. Unit状态和管理</span></a></h3><p><code>systemctl status</code>命令用于查看系统状态和单个 Unit 的状态。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示系统状态</span>
$ systemctl status

<span class="token comment"># 显示单个 Unit 的状态</span>
$ sysystemctl status bluetooth.service

<span class="token comment"># 显示远程主机的某个 Unit 的状态</span>
$ systemctl <span class="token parameter variable">-H</span> root@rhel7.example.com status httpd.service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>除了<code>status</code>命令，<code>systemctl</code>还提供了三个查询状态的简单方法，主要供脚本内部的判断语句使用。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示某个 Unit 是否正在运行</span>
$ systemctl is-active application.service

<span class="token comment"># 显示某个 Unit 是否处于启动失败状态</span>
$ systemctl is-failed application.service

<span class="token comment"># 显示某个 Unit 服务是否建立了启动链接</span>
$ systemctl is-enabled application.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>Unit 管理</strong>：对于用户来说，最常用的是下面这些命令，用于启动和停止 Unit（主要是 service）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 立即启动一个服务</span>
$ <span class="token function">sudo</span> systemctl start apache.service

<span class="token comment"># 立即停止一个服务</span>
$ <span class="token function">sudo</span> systemctl stop apache.service

<span class="token comment"># 重启一个服务</span>
$ <span class="token function">sudo</span> systemctl restart apache.service

<span class="token comment"># 杀死一个服务的所有子进程</span>
$ <span class="token function">sudo</span> systemctl <span class="token function">kill</span> apache.service

<span class="token comment"># 重新加载一个服务的配置文件</span>
$ <span class="token function">sudo</span> systemctl reload apache.service


<span class="token comment"># 重载所有修改过的配置文件</span>
$ <span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># 显示某个 Unit 的所有底层参数</span>
$ systemctl show httpd.service

<span class="token comment"># 显示某个 Unit 的指定属性的值</span>
$ systemctl show <span class="token parameter variable">-p</span> CPUShares httpd.service

<span class="token comment"># 设置某个 Unit 的指定属性</span>
$ <span class="token function">sudo</span> systemctl set-property httpd.service <span class="token assign-left variable">CPUShares</span><span class="token operator">=</span><span class="token number">500</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-unit的配置文件" tabindex="-1"><a class="header-anchor" href="#_4-unit的配置文件"><span>4. Unit的配置文件</span></a></h3><p>每一个 Unit 都有一个配置文件，告诉 Systemd 怎么启动这个 Unit 。</p><p>Systemd 默认从目录 <code>/etc/systemd/system/</code> 读取配置文件。</p><p>但是，里面存放的大部分文件都是符号链接，指向目录<code>/usr/lib/systemd/system/</code>，真正的配置文件存放在那个目录。</p><br><p><code>systemctl enable</code> 命令用于在上面两个目录之间，建立符号链接关系。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> clamd@scan.service

<span class="token comment"># 等同于</span>
$ <span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;/usr/lib/systemd/system/clamd@scan.service&#39;</span> <span class="token string">&#39;/etc/systemd/system/multi-user.target.wants/clamd@scan.service&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>如果配置文件里面设置了开机启动，<code>systemctl enable</code> 命令相当于激活开机启动。</p><p>与之对应的，<code>systemctl disable</code>命令用于在两个目录之间，撤销符号链接关系，相当于撤销开机启动。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl disable clamd@scan.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>配置文件的后缀名，就是该 Unit 的种类，比如<code>sshd.socket</code>。</p><p>如果省略，Systemd 默认后缀名为<code>.service</code>，所以<code>sshd</code>会被理解成 <code>sshd.service</code>。</p><br><h4 id="配置文件的状态" tabindex="-1"><a class="header-anchor" href="#配置文件的状态"><span>配置文件的状态</span></a></h4><p><code>systemctl list-unit-files</code>命令用于列出所有配置文件。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有配置文件</span>
$ systemctl list-unit-files

<span class="token comment"># 列出指定类型的配置文件</span>
$ systemctl list-unit-files <span class="token parameter variable">--type</span><span class="token operator">=</span>service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>这个命令会输出一个列表。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ systemctl list-unit-files

UNIT FILE              STATE
chronyd.service        enabled
clamd@.service         static
clamd@scan.service     disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>这个列表显示每个配置文件的状态，一共有四种。</p><blockquote><ul><li>enabled：已建立启动链接</li><li>disabled：没建立启动链接</li><li>static：该配置文件没有<code>[Install]</code>部分（无法执行），只能作为其他配置文件的依赖</li><li>masked：该配置文件被禁止建立启动链接</li></ul></blockquote><p>注意，从配置文件的状态无法看出，该 Unit 是否正在运行。这必须执行前面提到的<code>systemctl status</code>命令。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ systemctl status bluetooth.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>一旦修改配置文件，就要让 SystemD 重新加载配置文件，然后重新启动，否则修改不会生效。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl restart httpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><br><h4 id="配置文件的格式" tabindex="-1"><a class="header-anchor" href="#配置文件的格式"><span>配置文件的格式</span></a></h4><p>配置文件就是普通的文本文件，可以用文本编辑器打开。</p><p><code>systemctl cat</code> 命令可以查看配置文件的内容。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ systemctl <span class="token function">cat</span> atd.service

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>ATD daemon

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/atd

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>从上面的输出可以看到，配置文件分成几个区块。每个区块的第一行，是用方括号表示的区别名，比如<code>[Unit]</code>。</p><p>注意，配置文件的区块名和字段名，都是大小写敏感的。</p><p>每个区块内部是一些等号连接的键值对。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Section<span class="token punctuation">]</span>
<span class="token assign-left variable">Directive1</span><span class="token operator">=</span>value
<span class="token assign-left variable">Directive2</span><span class="token operator">=</span>value

<span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>注意，键值对的等号两侧不能有空格。</p><br><h4 id="配置文件的区块" tabindex="-1"><a class="header-anchor" href="#配置文件的区块"><span>配置文件的区块</span></a></h4><p><code>[Unit]</code>区块通常是配置文件的第一个区块，用来定义 Unit 的元数据，以及配置与其他 Unit 的关系。它的主要字段如下。</p><blockquote><ul><li><code>Description</code>：简短描述</li><li><code>Documentation</code>：文档地址</li><li><code>Requires</code>：当前 Unit 依赖的其他 Unit，如果它们没有运行，当前 Unit 会启动失败</li><li><code>Wants</code>：与当前 Unit 配合的其他 Unit，如果它们没有运行，当前 Unit 不会启动失败</li><li><code>BindsTo</code>：与<code>Requires</code>类似，它指定的 Unit 如果退出，会导致当前 Unit 停止运行</li><li><code>Before</code>：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之后启动</li><li><code>After</code>：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之前启动</li><li><code>Conflicts</code>：这里指定的 Unit 不能与当前 Unit 同时运行</li><li><code>Condition...</code>：当前 Unit 运行必须满足的条件，否则不会运行</li><li><code>Assert...</code>：当前 Unit 运行必须满足的条件，否则会报启动失败</li></ul></blockquote><br><p><code>[Service]</code>区块用来 Service 的配置，只有 Service 类型的 Unit 才有这个区块。它的主要字段如下。</p><blockquote><ul><li><code>Type</code>：定义启动时的进程行为。它有以下几种值。</li><li><code>Type=simple</code>：默认值，执行<code>ExecStart</code>指定的命令，启动主进程</li><li><code>Type=forking</code>：以 fork 方式从父进程创建子进程，创建后父进程会立即退出</li><li><code>Type=oneshot</code>：一次性进程，Systemd 会等当前服务退出，再继续往下执行</li><li><code>Type=dbus</code>：当前服务通过D-Bus启动</li><li><code>Type=notify</code>：当前服务启动完毕，会通知<code>Systemd</code>，再继续往下执行</li><li><code>Type=idle</code>：若有其他任务执行完毕，当前服务才会运行</li><li><code>ExecStart</code>：启动当前服务的命令</li><li><code>ExecStartPre</code>：启动当前服务之前执行的命令</li><li><code>ExecStartPost</code>：启动当前服务之后执行的命令</li><li><code>ExecReload</code>：重启当前服务时执行的命令</li><li><code>ExecStop</code>：停止当前服务时执行的命令</li><li><code>ExecStopPost</code>：停止当其服务之后执行的命令</li><li><code>RestartSec</code>：自动重启当前服务间隔的秒数</li><li><code>Restart</code>：定义何种情况 Systemd 会自动重启当前服务，可能的值包括<code>always</code>（总是重启）、<code>on-success</code>、<code>on-failure</code>、<code>on-abnormal</code>、<code>on-abort</code>、<code>on-watchdog</code></li><li><code>TimeoutSec</code>：定义 Systemd 停止当前服务之前等待的秒数</li><li><code>Environment</code>：指定环境变量</li></ul></blockquote><br><p><code>[Install]</code>通常是配置文件的最后一个区块，用来定义如何启动，以及是否开机启动。它的主要字段如下。</p><blockquote><ul><li><code>WantedBy</code>：它的值是一个或多个 Target，当前 Unit 激活时（enable）符号链接会放入<code>/etc/systemd/system</code>目录下面以 Target 名 + <code>.wants</code>后缀构成的子目录中</li><li><code>RequiredBy</code>：它的值是一个或多个 Target，当前 Unit 激活时，符号链接会放入<code>/etc/systemd/system</code>目录下面以 Target 名 + <code>.required</code>后缀构成的子目录中</li><li><code>Alias</code>：当前 Unit 可用于启动的别名</li><li><code>Also</code>：当前 Unit 激活（enable）时，会被同时激活的其他 Unit</li></ul></blockquote><br>`,275),S={href:"https://www.freedesktop.org/software/systemd/man/systemd.unit.html",target:"_blank",rel:"noopener noreferrer"},$=i(`<br><h3 id="_5-target-unit-组" tabindex="-1"><a class="header-anchor" href="#_5-target-unit-组"><span>5. Target(Unit 组)</span></a></h3><p>启动计算机的时候，需要启动大量的 Unit。如果每一次启动，都要一一写明本次启动需要哪些 Unit，显然非常不方便。</p><p>Systemd 的解决方案就是 Target。</p><p>简单说，Target 就是一个 Unit 组，包含许多相关的 Unit 。启动某个 Target 的时候，Systemd 就会启动里面所有的 Unit。</p><p>从这个意义上说，Target 这个概念类似于&quot;状态点&quot;，启动某个 Target 就好比启动到某种状态。</p><p>传统的<code>init</code>启动模式里面，有 RunLevel 的概念，跟 Target 的作用很类似。</p><p>不同的是，RunLevel 是互斥的，不可能多个 RunLevel 同时启动，但是多个 Target 可以同时启动。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 查看当前系统的所有 Target</span>
$ systemctl list-unit-files <span class="token parameter variable">--type</span><span class="token operator">=</span>target

<span class="token comment"># 查看一个 Target 包含的所有 Unit</span>
$ systemctl list-dependencies multi-user.target

<span class="token comment"># 查看启动时的默认 Target</span>
$ systemctl get-default

<span class="token comment"># 设置启动时的默认 Target</span>
$ <span class="token function">sudo</span> systemctl set-default multi-user.target

<span class="token comment"># 切换 Target 时，默认不关闭前一个 Target 启动的进程，</span>
<span class="token comment"># systemctl isolate 命令改变这种行为，</span>
<span class="token comment"># 关闭前一个 Target 里面所有不属于后一个 Target 的进程</span>
$ <span class="token function">sudo</span> systemctl isolate multi-user.target

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><br><p>Target 与 传统 RunLevel 的对应关系如下。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Traditional runlevel      New target name     Symbolically linked to<span class="token punctuation">..</span>.

Runlevel <span class="token number">0</span>           <span class="token operator">|</span>    runlevel0.target -<span class="token operator">&gt;</span> poweroff.target
Runlevel <span class="token number">1</span>           <span class="token operator">|</span>    runlevel1.target -<span class="token operator">&gt;</span> rescue.target
Runlevel <span class="token number">2</span>           <span class="token operator">|</span>    runlevel2.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">3</span>           <span class="token operator">|</span>    runlevel3.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">4</span>           <span class="token operator">|</span>    runlevel4.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">5</span>           <span class="token operator">|</span>    runlevel5.target -<span class="token operator">&gt;</span> graphical.target
Runlevel <span class="token number">6</span>           <span class="token operator">|</span>    runlevel6.target -<span class="token operator">&gt;</span> reboot.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><br><p>它与<code>init</code>进程的主要差别如下。</p><blockquote><p><strong>（1）默认的 RunLevel</strong>（在<code>/etc/inittab</code>文件设置）现在被默认的 Target 取代，</p><p>​ 位置是<code>/etc/systemd/system/default.target</code>，通常符号链接到<code>graphical.target</code>（图形界面）</p><pre><code>    或者\`multi-user.target\`（多用户命令行）。
</code></pre><p><strong>（2）启动脚本的位置</strong>，以前是<code>/etc/init.d</code>目录，符号链接到不同的 RunLevel 目录 （比如<code>/etc/rc3.d</code>、<code>/etc/rc5.d</code>等），</p><p>​ 现在则存放在<code>/lib/systemd/system</code>和<code>/etc/systemd/system</code>目录。</p><p><strong>（3）配置文件的位置</strong>，以前<code>init</code>进程的配置文件是<code>/etc/inittab</code>，各种服务的配置文件存放在<code>/etc/sysconfig</code>目录。</p><p>​ 现在的配置文件主要存放在<code>/lib/systemd</code>目录，在<code>/etc/systemd</code>目录里面的修改可以覆盖原始设置。</p></blockquote><br><h3 id="_6-systemd日志管理" tabindex="-1"><a class="header-anchor" href="#_6-systemd日志管理"><span>6. Systemd日志管理</span></a></h3><p>Systemd 统一管理所有 Unit 的启动日志。</p><p>带来的好处就是，可以只用<code>journalctl</code>一个命令，查看所有日志（内核日志和应用日志）。</p><p>日志的配置文件是<code>/etc/systemd/journald.conf</code>。</p><p><code>journalctl</code>功能强大，用法非常多。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有日志（默认情况下 ，只保存本次启动的日志）</span>
$ <span class="token function">sudo</span> journalctl

<span class="token comment"># 查看内核日志（不显示应用日志）</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-k</span>

<span class="token comment"># 查看系统本次启动的日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-0</span>

<span class="token comment"># 查看上一次启动的日志（需更改设置）</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-1</span>

<span class="token comment"># 查看指定时间的日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;2012-10-30 18:17:16&quot;</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;20 min ago&quot;</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span> yesterday
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;2015-01-10&quot;</span> <span class="token parameter variable">--until</span> <span class="token string">&quot;2015-01-11 03:00&quot;</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span> 09:00 <span class="token parameter variable">--until</span> <span class="token string">&quot;1 hour ago&quot;</span>

<span class="token comment"># 显示尾部的最新10行日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-n</span>

<span class="token comment"># 显示尾部指定行数的日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-n</span> <span class="token number">20</span>

<span class="token comment"># 实时滚动显示最新日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-f</span>

<span class="token comment"># 查看指定服务的日志</span>
$ <span class="token function">sudo</span> journalctl /usr/lib/systemd/systemd

<span class="token comment"># 查看指定进程的日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 查看某个路径的脚本的日志</span>
$ <span class="token function">sudo</span> journalctl /usr/bin/bash

<span class="token comment"># 查看指定用户的日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token assign-left variable">_UID</span><span class="token operator">=</span><span class="token number">33</span> <span class="token parameter variable">--since</span> today

<span class="token comment"># 查看某个 Unit 的日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-u</span> nginx.service
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-u</span> nginx.service <span class="token parameter variable">--since</span> today

<span class="token comment"># 实时滚动显示某个 Unit 的最新日志</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-u</span> nginx.service <span class="token parameter variable">-f</span>

<span class="token comment"># 合并显示多个 Unit 的日志</span>
$ journalctl <span class="token parameter variable">-u</span> nginx.service <span class="token parameter variable">-u</span> php-fpm.service <span class="token parameter variable">--since</span> today

<span class="token comment"># 查看指定优先级（及其以上级别）的日志，共有8级</span>
<span class="token comment"># 0: emerg</span>
<span class="token comment"># 1: alert</span>
<span class="token comment"># 2: crit</span>
<span class="token comment"># 3: err</span>
<span class="token comment"># 4: warning</span>
<span class="token comment"># 5: notice</span>
<span class="token comment"># 6: info</span>
<span class="token comment"># 7: debug</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-p</span> err <span class="token parameter variable">-b</span>

<span class="token comment"># 日志默认分页输出，--no-pager 改为正常的标准输出</span>
$ <span class="token function">sudo</span> journalctl --no-pager

<span class="token comment"># 以 JSON 格式（单行）输出</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-u</span> nginx.service <span class="token parameter variable">-o</span> json

<span class="token comment"># 以 JSON 格式（多行）输出，可读性更好</span>
$ <span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-u</span> nginx.serviceqq
 <span class="token parameter variable">-o</span> json-pretty

<span class="token comment"># 显示日志占据的硬盘空间</span>
$ <span class="token function">sudo</span> journalctl --disk-usage

<span class="token comment"># 指定日志文件占据的最大空间</span>
$ <span class="token function">sudo</span> journalctl --vacuum-size<span class="token operator">=</span>1G

<span class="token comment"># 指定日志文件保存多久</span>
$ <span class="token function">sudo</span> journalctl --vacuum-time<span class="token operator">=</span>1years
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><br><h2 id="七-systemd使用场景" tabindex="-1"><a class="header-anchor" href="#七-systemd使用场景"><span>七 Systemd使用场景</span></a></h2><h3 id="_1-开机自启动" tabindex="-1"><a class="header-anchor" href="#_1-开机自启动"><span>1. 开机自启动</span></a></h3><p>对于那些支持 Systemd 的软件，安装的时候，会自动在<code>/usr/lib/systemd/system</code>目录添加一个配置文件。</p><p>如果你想让该软件开机启动，就执行下面的命令（以<code>httpd.service</code>为例）。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>上面的命令相当于在<code>/etc/systemd/system</code> 目录添加一个符号链接，指向<code>/usr/lib/systemd/system</code> 里面的<code>httpd.service</code>文件。</p><p>这是因为开机时，<code>Systemd</code>只执行<code>/etc/systemd/system</code>目录里面的配置文件。</p><p>这也意味着，如果把修改后的配置文件放在该目录，就可以达到覆盖原始配置的效果。</p><br><h3 id="_2-启动停止服务" tabindex="-1"><a class="header-anchor" href="#_2-启动停止服务"><span>2. 启动停止服务</span></a></h3><p>设置开机启动以后，软件并不会立即启动，必须等到下一次开机。</p><p>如果想现在就运行该软件，那么要执行<code>systemctl start</code>命令。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl start httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>执行上面的命令以后，有可能启动失败，因此要用<code>systemctl status</code>命令查看一下该服务的状态。</p><br><p>终止正在运行的服务，需要执行<code>systemctl stop</code>命令。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl stop httpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>有时候，该命令可能没有响应，服务停不下来。这时候就不得不&quot;杀进程&quot;了，向正在运行的进程发出<code>kill</code>信号。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl <span class="token function">kill</span> httpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>此外，重启服务要执行<code>systemctl restart</code>命令。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl restart httpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><br><h3 id="_3-服务配置文件" tabindex="-1"><a class="header-anchor" href="#_3-服务配置文件"><span>3. 服务配置文件</span></a></h3><p>配置文件主要放在<code>/usr/lib/systemd/system</code>目录，也可能在<code>/etc/systemd/system</code>目录。</p><p>找到配置文件以后，使用文本编辑器打开即可。</p><br><p><code>systemctl cat</code> 命令可以用来查看配置文件，</p><p>下面以<code>sshd.service</code>文件为例，它的作用是启动一个 SSH 服务器，供其他用户以 SSH 方式登录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
$ systemctl <span class="token function">cat</span> sshd.service

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>OpenSSH server daemon
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>man:sshd<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> man:sshd_config<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target sshd-keygen.service
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>sshd-keygen.service

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>/etc/sysconfig/sshd
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/sshd <span class="token parameter variable">-D</span> <span class="token variable">$OPTIONS</span>
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-HUP</span> <span class="token variable">$MAINPID</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">KillMode</span><span class="token operator">=</span>process
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>42s

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以看到，配置文件分成几个区块，每个区块包含若干条键值对。 下面依次解释每个区块的内容。</p><br><h4 id="_1-unit-区块" tabindex="-1"><a class="header-anchor" href="#_1-unit-区块"><span>1) [Unit] 区块：</span></a></h4><p>启动顺序与依赖关系</p><p><code>Unit</code>区块的<code>Description</code>字段给出当前服务的简单描述，<code>Documentation</code>字段给出文档位置。</p><p>接下来的设置是启动顺序和依赖关系，这个比较重要。</p><blockquote><p><code>After</code>字段：表示如果<code>network.target</code>或<code>sshd-keygen.service</code>需要启动，那么<code>sshd.service</code>应该在它们之后启动。</p></blockquote><p>相应地，还有一个<code>Before</code>字段，定义<code>sshd.service</code>应该在哪些服务之前启动。</p><p>注意，<code>After</code>和<code>Before</code>字段只涉及启动顺序，不涉及依赖关系。</p><p>举例来说，某 Web 应用需要 postgresql 数据库储存数据。在配置文件中，它只定义要在 postgresql 之后启动，而没有定义依赖 postgresql 。上线后，由于某种原因，postgresql 需要重新启动，在停止服务期间，该 Web 应用就会无法建立数据库连接。</p><p>设置依赖关系，需要使用<code>Wants</code>字段和<code>Requires</code>字段。</p><blockquote><p><code>Wants</code>字段：表示<code>sshd.service</code>与<code>sshd-keygen.service</code>之间存在&quot;弱依赖&quot;关系，即如果&quot;sshd-keygen.service&quot;启动失败或停止运行，不影响<code>sshd.service</code>继续执行。</p></blockquote><p><code>Requires</code>字段则表示&quot;强依赖&quot;关系，即如果该服务启动失败或异常退出，那么<code>sshd.service</code>也必须退出。</p><p>注意，<code>Wants</code>字段与<code>Requires</code>字段只涉及依赖关系，与启动顺序无关，默认情况下是同时启动的。</p><h4 id="_2-service-区块" tabindex="-1"><a class="header-anchor" href="#_2-service-区块"><span>2) [Service] 区块：</span></a></h4><p><code>Service</code>区块定义如何启动当前服务。</p><h4 id="启动命令" tabindex="-1"><a class="header-anchor" href="#启动命令"><span>启动命令</span></a></h4><p>许多软件都有自己的环境参数文件，该文件可以用<code>EnvironmentFile</code>字段读取。</p><blockquote><p><code>EnvironmentFile</code>字段：指定当前服务的环境参数文件。</p><p>该文件内部的<code>key=value</code>键值对，可以用<code>$key</code>的形式，在当前配置文件中获取。</p></blockquote><p>上面的例子中，sshd 的环境参数文件是<code>/etc/sysconfig/sshd</code>。</p><br><p>配置文件里面最重要的字段是<code>ExecStart</code>。</p><blockquote><p><code>ExecStart</code>字段：定义启动进程时执行的命令。</p></blockquote><p>上面的例子中，启动<code>sshd</code>，执行的命令是<code>/usr/sbin/sshd -D $OPTIONS</code>，</p><p>其中的变量<code>$OPTIONS</code>就来自<code>EnvironmentFile</code>字段指定的环境参数文件。</p><br><p>与之作用相似的，还有如下这些字段。</p><blockquote><ul><li><code>ExecReload</code>字段：重启服务时执行的命令</li><li><code>ExecStop</code>字段：停止服务时执行的命令</li><li><code>ExecStartPre</code>字段：启动服务之前执行的命令</li><li><code>ExecStartPost</code>字段：启动服务之后执行的命令</li><li><code>ExecStopPost</code>字段：停止服务之后执行的命令</li></ul></blockquote><br><p>请看下面的例子。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/bin/echo execstart1
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/bin/echo execstart2
<span class="token assign-left variable">ExecStartPost</span><span class="token operator">=</span>/bin/echo post1
<span class="token assign-left variable">ExecStartPost</span><span class="token operator">=</span>/bin/echo post2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面这个配置文件，第二行<code>ExecStart</code>设为空值，等于取消了第一行的设置，运行结果如下。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>execstart2
post1
post2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>所有的启动设置之前，都可以加上一个连词号（<code>-</code>），表示&quot;抑制错误&quot;，即发生错误的时候，不影响其他命令的执行。</p><p>比如，<code>EnvironmentFile=-/etc/sysconfig/sshd</code>（注意等号后面的那个连词号），</p><p>就表示即使<code>/etc/sysconfig/sshd</code>文件不存在，也不会抛出错误。</p><br><h5 id="启动类型" tabindex="-1"><a class="header-anchor" href="#启动类型"><span>启动类型</span></a></h5><p><code>Type</code>字段定义启动类型。它可以设置的值如下。</p><blockquote><ul><li>simple（默认值）：<code>ExecStart</code>字段启动的进程为主进程</li><li>forking：<code>ExecStart</code>字段将以<code>fork()</code>方式启动，此时父进程将会退出，子进程将成为主进程</li><li>oneshot：类似于<code>simple</code>，但只执行一次，Systemd 会等它执行完，才启动其他服务</li><li>dbus：类似于<code>simple</code>，但会等待 D-Bus 信号后启动</li><li>notify：类似于<code>simple</code>，启动结束后会发出通知信号，然后 Systemd 再启动其他服务</li><li>idle：类似于<code>simple</code>，但是要等到其他任务都执行完，才会启动该服务。一种使用场合是为让该服务的输出，不与其他服务的输出相混合</li></ul></blockquote><p>下面是一个<code>oneshot</code>的例子，笔记本电脑启动时，要把触摸板关掉，配置文件可以这样写。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Switch-off Touchpad

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>oneshot
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/touchpad-off

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面的配置文件，启动类型设为<code>oneshot</code>，就表明这个服务只要运行一次就够了，不需要长期运行。</p><p>如果关闭以后，将来某个时候还想打开，配置文件修改如下。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Switch-off Touchpad

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>oneshot
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/touchpad-off start
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/bin/touchpad-off stop
<span class="token assign-left variable">RemainAfterExit</span><span class="token operator">=</span>yes

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面配置文件中，<code>RemainAfterExit</code>字段设为<code>yes</code>，表示进程退出以后，服务仍然保持执行。这样的话，一旦使用<code>systemctl stop</code>命令停止服务，<code>ExecStop</code>指定的命令就会执行，从而重新开启触摸板。</p><br><h5 id="重启行为" tabindex="-1"><a class="header-anchor" href="#重启行为"><span>重启行为</span></a></h5><p><code>Service</code>区块有一些字段，定义了重启行为。</p><blockquote><p><code>KillMode</code>字段：定义 Systemd 如何停止 sshd 服务。</p></blockquote><p>上面这个例子中，将<code>KillMode</code>设为<code>process</code>，表示只停止主进程，不停止任何sshd 子进程，</p><p>即子进程打开的 SSH session 仍然保持连接。</p><p>这个设置不太常见，但对 sshd 很重要，否则你停止服务的时候，会连自己打开的 SSH session 一起杀掉。</p><p><code>KillMode</code>字段可以设置的值如下。</p><blockquote><ul><li>control-group（默认值）：当前控制组里面的所有子进程，都会被杀掉</li><li>process：只杀主进程</li><li>mixed：主进程将收到 SIGTERM 信号，子进程收到 SIGKILL 信号</li><li>none：没有进程会被杀掉，只是执行服务的 stop 命令。</li></ul></blockquote><p>接下来是<code>Restart</code>字段。</p><blockquote><p><code>Restart</code>字段：定义了 sshd 退出后，Systemd 的重启方式。</p></blockquote><p>上面的例子中，<code>Restart</code>设为<code>on-failure</code>，表示任何意外的失败，就将重启sshd。</p><p>如果 sshd 正常停止（比如执行<code>systemctl stop</code>命令），它就不会重启。</p><p><code>Restart</code>字段可以设置的值如下。</p><blockquote><ul><li>no（默认值）：退出后不会重启</li><li>on-success：只有正常退出时（退出状态码为0），才会重启</li><li>on-failure：非正常退出时（退出状态码非0），包括被信号终止和超时，才会重启</li><li>on-abnormal：只有被信号终止和超时，才会重启</li><li>on-abort：只有在收到没有捕捉到的信号终止时，才会重启</li><li>on-watchdog：超时退出，才会重启</li><li>always：不管是什么退出原因，总是重启</li></ul></blockquote><p>对于守护进程，推荐设为<code>on-failure</code>。对于那些允许发生错误退出的服务，可以设为<code>on-abnormal</code>。</p><p>最后是<code>RestartSec</code>字段。</p><blockquote><p><code>RestartSec</code>字段：表示 Systemd 重启服务之前，需要等待的秒数。上面的例子设为等待42秒。</p></blockquote><br><h4 id="_3-install-区块" tabindex="-1"><a class="header-anchor" href="#_3-install-区块"><span>3) [Install] 区块</span></a></h4><p><code>Install</code>区块，定义如何安装这个配置文件，即怎样做到开机启动。</p><blockquote><p><code>WantedBy</code>字段：表示该服务所在的 Target。</p></blockquote><p><code>Target</code>的含义是服务组，表示一组服务。<code>WantedBy=multi-user.target</code>指的是，sshd 所在的 Target 是<code>multi-user.target</code>。</p><p>这个设置非常重要，因为执行<code>systemctl enable sshd.service</code>命令时，<code>sshd.service</code>的一个符号链接，就会放在<code>/etc/systemd/system</code>目录下面的<code>multi-user.target.wants</code>子目录之中。</p><p>Systemd 有默认的启动 Target。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ systemctl get-default
multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面的结果表示，默认的启动 Target 是<code>multi-user.target</code>。在这个组里的所有服务，都将开机启动。这就是为什么<code>systemctl enable</code>命令能设置开机启动的原因。</p><p>使用 Target 的时候，<code>systemctl list-dependencies</code>命令和<code>systemctl isolate</code>命令也很有用。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看 multi-user.target 包含的所有服务</span>
$ systemctl list-dependencies multi-user.target

<span class="token comment"># 切换到另一个 target</span>
<span class="token comment"># shutdown.target 就是关机状态</span>
$ <span class="token function">sudo</span> systemctl isolate shutdown.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,127),w=n("code",null,"multi-user.target",-1),U=n("code",null,"graphical.target",-1),T=n("code",null,"multi-user.target",-1),L={href:"https://www.freedesktop.org/software/systemd/man/bootup.html#System",target:"_blank",rel:"noopener noreferrer"},D=i(`<br><h3 id="_4-target配置文件" tabindex="-1"><a class="header-anchor" href="#_4-target配置文件"><span>4. Target配置文件</span></a></h3><p>Target 也有自己的配置文件。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ systemctl <span class="token function">cat</span> multi-user.target

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Multi-User System
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>man:systemd.special<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token assign-left variable">Requires</span><span class="token operator">=</span>basic.target
<span class="token assign-left variable">Conflicts</span><span class="token operator">=</span>rescue.service rescue.target
<span class="token assign-left variable">After</span><span class="token operator">=</span>basic.target rescue.service rescue.target
<span class="token assign-left variable">AllowIsolate</span><span class="token operator">=</span>yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>注意，Target 配置文件里面没有启动命令。</p><br><p>上面输出结果中，主要字段含义如下。</p><blockquote><p><code>Requires</code>字段：要求<code>basic.target</code>一起运行。</p><p><code>Conflicts</code>字段：冲突字段。如果<code>rescue.service</code>或<code>rescue.target</code>正在运行，<code>multi-user.target</code>就不能运行，反之亦然。</p><p><code>After</code>：表示<code>multi-user.target</code>在<code>basic.target</code> 、 <code>rescue.service</code>、 <code>rescue.target</code>之后启动，如果它们有启动的话。</p><p><code>AllowIsolate</code>：允许使用<code>systemctl isolate</code>命令切换到<code>multi-user.target</code>。</p></blockquote><br><h3 id="_5-修改配置文件后重启" tabindex="-1"><a class="header-anchor" href="#_5-修改配置文件后重启"><span>5. 修改配置文件后重启</span></a></h3><p>修改配置文件以后，需要重新加载配置文件，然后重新启动相关服务。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 重新加载配置文件</span>
$ <span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># 重启相关服务</span>
$ <span class="token function">sudo</span> systemctl restart foobar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,12);function E(R,z){const e=t("ExternalLinkIcon");return c(),d("div",null,[f,y,n("ul",null,[n("li",null,[n("a",x,[s("鸟哥的 Linux 私房菜 服务器架设篇"),a(e)])]),n("li",null,[n("a",_,[s("鸟哥的 Linux 私房菜 基础学习篇"),a(e)])])]),q,n("p",null,[s("Unit 配置文件的完整字段清单，请参考"),n("a",S,[s("官方文档"),a(e)])]),$,n("p",null,[s("一般来说，常用的 Target 有两个：一个是"),w,s("，表示多用户命令行状态；另一个是"),U,s("，表示图形用户状态，它依赖于"),T,s("。官方文档有一张非常清晰的 [Target 依赖关系图]("),n("a",L,[s("https://www.freedesktop.org/software/systemd/man/bootup.html#System"),a(e)]),s(" Manager Bootup)。")]),D])}const I=l(g,[["render",E],["__file","Linux.html.vue"]]),N=JSON.parse('{"path":"/tool/Linux/Linux.html","title":"Linux常用命令","lang":"en-US","frontmatter":{"order":10,"title":"Linux常用命令","shortTitle":"Linux命令","icon":"linux01","description":"一 Linux简介 一些在线网站： 鸟哥的 Linux 私房菜 服务器架设篇 鸟哥的 Linux 私房菜 基础学习篇 1. 命令行提示符 Linux命令行结尾的提示符有 “#” 和 “$” 两种不同的符号 命令行提示符@前面的字符代表当前登录的用户（可用whoami查询） @后面的为主机名（可用hostname查询） Linux命令提示符由PS1环境变...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/tool/Linux/Linux.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"Linux常用命令"}],["meta",{"property":"og:description","content":"一 Linux简介 一些在线网站： 鸟哥的 Linux 私房菜 服务器架设篇 鸟哥的 Linux 私房菜 基础学习篇 1. 命令行提示符 Linux命令行结尾的提示符有 “#” 和 “$” 两种不同的符号 命令行提示符@前面的字符代表当前登录的用户（可用whoami查询） @后面的为主机名（可用hostname查询） Linux命令提示符由PS1环境变..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-15T09:06:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-04-15T09:06:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T09:06:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"一 Linux简介","slug":"一-linux简介","link":"#一-linux简介","children":[{"level":3,"title":"1. 命令行提示符","slug":"_1-命令行提示符","link":"#_1-命令行提示符","children":[]},{"level":3,"title":"2. 查看命令帮助","slug":"_2-查看命令帮助","link":"#_2-查看命令帮助","children":[]},{"level":3,"title":"3. 关机重启注销","slug":"_3-关机重启注销","link":"#_3-关机重启注销","children":[]},{"level":3,"title":"4. 查看系统信息","slug":"_4-查看系统信息","link":"#_4-查看系统信息","children":[]},{"level":3,"title":"5. Linux语言设置","slug":"_5-linux语言设置","link":"#_5-linux语言设置","children":[]}]},{"level":2,"title":"二 文件与目录管理","slug":"二-文件与目录管理","link":"#二-文件与目录管理","children":[{"level":3,"title":"1. mkdir和touch","slug":"_1-mkdir和touch","link":"#_1-mkdir和touch","children":[]},{"level":3,"title":"2. 修改文件时间","slug":"_2-修改文件时间","link":"#_2-修改文件时间","children":[]},{"level":3,"title":"3. 复制移动删除","slug":"_3-复制移动删除","link":"#_3-复制移动删除","children":[]},{"level":3,"title":"4. 查看文件内容","slug":"_4-查看文件内容","link":"#_4-查看文件内容","children":[]},{"level":3,"title":"5. 压缩和解压缩","slug":"_5-压缩和解压缩","link":"#_5-压缩和解压缩","children":[]},{"level":3,"title":"6. 追加与重定向","slug":"_6-追加与重定向","link":"#_6-追加与重定向","children":[]}]},{"level":2,"title":"三 用户与权限管理","slug":"三-用户与权限管理","link":"#三-用户与权限管理","children":[{"level":3,"title":"1. 用户和组管理","slug":"_1-用户和组管理","link":"#_1-用户和组管理","children":[]},{"level":3,"title":"2. 文件权限管理","slug":"_2-文件权限管理","link":"#_2-文件权限管理","children":[]}]},{"level":2,"title":"四 进程与服务管理","slug":"四-进程与服务管理","link":"#四-进程与服务管理","children":[{"level":3,"title":"1. Linux进程管理","slug":"_1-linux进程管理","link":"#_1-linux进程管理","children":[]},{"level":3,"title":"2. Linux服务管理","slug":"_2-linux服务管理","link":"#_2-linux服务管理","children":[]}]},{"level":2,"title":"五 SSH和网络管理","slug":"五-ssh和网络管理","link":"#五-ssh和网络管理","children":[{"level":3,"title":"1. 常用网络工具","slug":"_1-常用网络工具","link":"#_1-常用网络工具","children":[]},{"level":3,"title":"2. SSH远程连接","slug":"_2-ssh远程连接","link":"#_2-ssh远程连接","children":[]},{"level":3,"title":"3. Linux防火墙","slug":"_3-linux防火墙","link":"#_3-linux防火墙","children":[]}]},{"level":2,"title":"六 系统工具Systemd","slug":"六-系统工具systemd","link":"#六-系统工具systemd","children":[{"level":3,"title":"1. Systemd系统管理","slug":"_1-systemd系统管理","link":"#_1-systemd系统管理","children":[]},{"level":3,"title":"2. Systemd系统资源","slug":"_2-systemd系统资源","link":"#_2-systemd系统资源","children":[]},{"level":3,"title":"3. Unit状态和管理","slug":"_3-unit状态和管理","link":"#_3-unit状态和管理","children":[]},{"level":3,"title":"4. Unit的配置文件","slug":"_4-unit的配置文件","link":"#_4-unit的配置文件","children":[]},{"level":3,"title":"5. Target(Unit 组)","slug":"_5-target-unit-组","link":"#_5-target-unit-组","children":[]},{"level":3,"title":"6. Systemd日志管理","slug":"_6-systemd日志管理","link":"#_6-systemd日志管理","children":[]}]},{"level":2,"title":"七 Systemd使用场景","slug":"七-systemd使用场景","link":"#七-systemd使用场景","children":[{"level":3,"title":"1. 开机自启动","slug":"_1-开机自启动","link":"#_1-开机自启动","children":[]},{"level":3,"title":"2. 启动停止服务","slug":"_2-启动停止服务","link":"#_2-启动停止服务","children":[]},{"level":3,"title":"3. 服务配置文件","slug":"_3-服务配置文件","link":"#_3-服务配置文件","children":[]},{"level":3,"title":"4. Target配置文件","slug":"_4-target配置文件","link":"#_4-target配置文件","children":[]},{"level":3,"title":"5. 修改配置文件后重启","slug":"_5-修改配置文件后重启","link":"#_5-修改配置文件后重启","children":[]}]}],"git":{"createdTime":1713172018000,"updatedTime":1713172018000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":37.56,"words":11267},"filePathRelative":"tool/Linux/Linux.md","localizedDate":"April 15, 2024","autoDesc":true}');export{I as comp,N as data};
