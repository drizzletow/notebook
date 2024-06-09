import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as t,c as o,b as n,d as s,a as e,e as i}from"./app-B05z7mYU.js";const r={},p=i('<h1 id="docker容器技术" tabindex="-1"><a class="header-anchor" href="#docker容器技术"><span>Docker容器技术</span></a></h1><h2 id="一-docker-introduction" tabindex="-1"><a class="header-anchor" href="#一-docker-introduction"><span>一 Docker Introduction</span></a></h2><h3 id="_1-docker-install" tabindex="-1"><a class="header-anchor" href="#_1-docker-install"><span>1. Docker Install</span></a></h3>',3),d={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},m=i(`<h4 id="docker的快速安装" tabindex="-1"><a class="header-anchor" href="#docker的快速安装"><span>Docker的快速安装</span></a></h4><p><strong>Uninstall old versions</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>install using the repository</strong> :</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment">#Set up the repository</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils

<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment">#install</span>
yum makecache fast <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io <span class="token operator">&amp;&amp;</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment">#start</span>
systemctl start <span class="token function">docker</span>     <span class="token comment">#启动</span>
systemctl restart <span class="token function">docker</span>   <span class="token comment">#重启</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>    <span class="token comment">#自启动</span>

<span class="token function">docker</span> version

<span class="token function">sudo</span> <span class="token function">docker</span> run hello-world

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>配置阿里云镜像加速器</strong>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker <span class="token operator">&amp;&amp;</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://puqyip19.mirror.aliyuncs.com&quot;]
}
EOF</span>

systemctl daemon-reload <span class="token operator">&amp;&amp;</span> systemctl restart <span class="token function">docker</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="安装指定版本docker" tabindex="-1"><a class="header-anchor" href="#安装指定版本docker"><span>安装指定版本docker</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment">#找到所有可用docker版本列表</span>
yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>

<span class="token comment"># 安装指定版本，用上面的版本号替换&lt;VERSION_STRING&gt;</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span>.x86_64 docker-ce-cli-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span>.x86_64 containerd.io

<span class="token comment">#例如：</span>
<span class="token comment">#yum install docker-ce-3:20.10.5-3.el7.x86_64 docker-ce-cli-3:20.10.5-3.el7.x86_64 containerd.io</span>

<span class="token comment">#注意加上 .x86_64 大版本号</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-docker常用命令" tabindex="-1"><a class="header-anchor" href="#_2-docker常用命令"><span>2. Docker常用命令</span></a></h3>`,14),v={href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> version

<span class="token function">docker</span> info

<span class="token function">docker</span> xxx  <span class="token parameter variable">--help</span>     <span class="token comment"># 命令</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="images-commands" tabindex="-1"><a class="header-anchor" href="#images-commands"><span>Images commands</span></a></h4><p>镜像是怎么做成的? 基础环境+软件 （例如 ：redis的完整镜像应该是： linux系统 + redis软件）</p><ul><li>alpine：超级经典版的linux 5mb；+ redis = 29.0mb</li><li>没有alpine3的：就是centos基本版</li></ul><p>以后自己选择下载镜像的时候尽量使用 alpine 和 slim</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> images                            <span class="token comment">#查看本地主机上的所有镜像</span>

<span class="token comment">#搜索镜像</span>
    <span class="token function">docker</span> search xxx                        <span class="token comment">#搜索镜像：如 mysql,redis......</span>
<span class="token function">docker</span> search redis <span class="token parameter variable">--filter</span><span class="token operator">=</span>STARS<span class="token operator">=</span><span class="token number">100</span>   <span class="token comment">#过滤掉STARS小于100以下的</span>


<span class="token comment">#下载镜像</span>
<span class="token function">docker</span> pull xxx                          <span class="token comment">#下载镜像，默认为最新版本</span>
<span class="token function">docker</span> pull redis <span class="token operator">==</span> <span class="token function">docker</span> pull redis:latest（最新版）

<span class="token function">docker</span> pull mysql:5.7                    <span class="token comment">#也可指定docker官网可查询到的版本</span>


<span class="token comment">#删除镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> imageID                    <span class="token comment">#根据镜像ID删除镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>       <span class="token comment">#删除所有镜像</span>

<span class="token function">docker</span> image prune   <span class="token comment">#移除游离镜像 dangling：游离镜像（没有镜像名字的）</span>


<span class="token comment">#重命名</span>
<span class="token function">docker</span> tag 原镜像:标签 新镜像名:标签 


<span class="token function">docker</span> container inspect 容器名 <span class="token operator">=</span> <span class="token function">docker</span> inspect 容器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="containers-commands" tabindex="-1"><a class="header-anchor" href="#containers-commands"><span>Containers commands</span></a></h4><p>从镜像创建容器，有两个命令：docker run的立即启动，docker create得稍后自己手动启动</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> pull centos              <span class="token comment">#要创建容器，必须先下载镜像</span>
<span class="token function">docker</span> <span class="token function">ps</span>                       <span class="token comment">#查看运行中的容器（-a查看全部，-q只显示id）</span>

<span class="token comment">#创建一个新的容器并运行一个命令</span>
<span class="token function">docker</span> run xxx
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> centos /bin/bash <span class="token comment">#启动并进入容器（使用exit停止并退出，也可以使用Ctrl+P+Q不停止退出）</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos            <span class="token comment">#【问题】发现centos停止了！？原因：docker容器使用后天运行必须要有一个前台进程</span>


<span class="token comment">#启动和停止</span>
<span class="token function">docker</span> start   container_id     <span class="token comment">#启动容器</span>
<span class="token function">docker</span> stop    container_id     <span class="token comment">#停止正在运行的容器（优雅停机）</span>
<span class="token function">docker</span> <span class="token function">kill</span>    container_id     <span class="token comment">#强制停止正在运行的容器（kill是强制kill -9，约等于直接拔电源）</span>
<span class="token function">docker</span> restart container_id     <span class="token comment">#重启容器</span>


<span class="token comment">#删除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 86fe3bcb173e          <span class="token comment">#删除指定id的容器（不能删除正在运行的容器，如需强制删除需添加-f）</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>   <span class="token comment">#删除全部容器</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="others-commands" tabindex="-1"><a class="header-anchor" href="#others-commands"><span>Others commands</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> logs                              <span class="token comment">#日志</span>
<span class="token function">docker</span> <span class="token function">top</span> container_id                  <span class="token comment">#查看指定容器中的进程信息</span>
<span class="token function">docker</span> inspect NAME<span class="token operator">|</span>ID                   <span class="token comment">#获取容器/镜像的元数据</span>


<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> container_id /bin/bash   <span class="token comment">#进入运行的容器中执行命令</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-u</span> <span class="token number">0</span>:0 <span class="token parameter variable">--privileged</span> container_id /bin/bash  <span class="token comment"># 以特权方式进入容器 （0表示用户）</span>

<span class="token function">docker</span> attach <span class="token parameter variable">-it</span> container_id <span class="token comment">#连接到正在运行中的容器（绑定的是控制台. 可能导致容器停止。不要用这个）</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>docker volume 数据卷</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> volume create xxx   <span class="token comment"># 创建数据卷</span>

<span class="token function">docker</span> volume <span class="token function">ls</span>           <span class="token comment"># 列出所有的数据卷</span>

<span class="token function">docker</span> volume inspect xxx  <span class="token comment"># 查看数据卷的详细信息</span>


<span class="token function">docker</span> volume pause        <span class="token comment"># 删除所有的未使用的数据卷</span>

<span class="token function">docker</span> volume <span class="token function">rm</span> xxx       <span class="token comment"># 删除指定的数据卷</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-docker常用镜像安装" tabindex="-1"><a class="header-anchor" href="#_3-docker常用镜像安装"><span>3. Docker常用镜像安装</span></a></h3><p>如何使用Docker部署组件：<br> 1、先去找组件的镜像<br> 2、查看镜像文档，了解组件的可配置内容<br> 3、docker run进行部署</p><h4 id="mysql安装与配置" tabindex="-1"><a class="header-anchor" href="#mysql安装与配置"><span>MySql安装与配置</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment">#下载镜像(指定版本)</span>
<span class="token function">docker</span> pull mysql:5.7

<span class="token comment">#创建实例并启动mysql （5.7）</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7

<span class="token comment"># 创建mysql的配置文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /docker/data/mysql/conf/mysql.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
init_connect=&#39;SET collation_connection=utf8_unicode_cli&#39;
init_connect=&#39;SET NAMES utf8&#39;
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshark
skip-name-resolve
secure_file_priv=/var/lib/mysql
EOF</span>

<span class="token function">docker</span> restart mysql                    <span class="token comment">#修改完要重启mysql</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql /bin/bash         <span class="token comment">#进入mysql</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 创建实例并启动mysql（ 8.0 ）</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql8 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:8.0

<span class="token comment">#启动两个mysql</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3307</span>:3306 <span class="token parameter variable">--name</span> mysql_gmall <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql_gmall/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql_gmall/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/mysql_gmall/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="redis安装与配置" tabindex="-1"><a class="header-anchor" href="#redis安装与配置"><span>Redis安装与配置</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#下载镜像</span>
<span class="token function">docker</span> pull redis

<span class="token comment">##创建实例并启动redis</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/data/redis/conf <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> /docker/data/redis/conf/redis.conf

<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /docker/data/redis/conf/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /docker/data/redis/data:/data <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> redis redis-server /etc/redis/redis.conf


<span class="token comment">#配置（持久化）</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /docker/data/redis/conf/redis.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
appendonly yes
EOF</span>

<span class="token function">docker</span> restart redis                    <span class="token comment">#修改完要重启redis</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment">#测试持久化配置是否生效</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis redis-cli
<span class="token operator">&gt;</span>set name alice                     <span class="token comment"># ok</span>
<span class="token operator">&gt;</span>get name                           <span class="token comment"># &quot;alice&quot;</span>
<span class="token operator">&gt;</span>exit

<span class="token function">docker</span> restart redis
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis redis-cli
<span class="token operator">&gt;</span>get name                           <span class="token comment"># &quot;alice&quot;   成功保存到硬盘，重启数据依旧存在</span>
<span class="token operator">&gt;</span>exit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="elasticsearch部署" tabindex="-1"><a class="header-anchor" href="#elasticsearch部署"><span>Elasticsearch部署</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载镜像</span>
<span class="token function">docker</span> search elasticsearch
<span class="token function">docker</span> pull elasticsearch:7.16.3

<span class="token comment"># 创建数据、数据和日志的挂载目录</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/data/elk/es/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>


<span class="token comment"># 赋予权限, docker中elasticsearch的用户UID是1000.</span>
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token number">1000</span>:1000 /docker/data/elk/es


<span class="token comment"># 创建配置文件</span>
<span class="token builtin class-name">cd</span> /docker/data/elk/es/config
<span class="token function">sudo</span> <span class="token function">vim</span> elasticsearch.yml
<span class="token comment">#-----------------------配置内容----------------------------------</span>
cluster.name: <span class="token string">&quot;my-es&quot;</span>
network.host: <span class="token number">0.0</span>.0.0
http.port: <span class="token number">9200</span>


<span class="token comment"># 运行elasticsearch</span>
通过镜像，启动一个容器，并将9200和9300端口映射到本机（elasticsearch的默认端口是9200，我们把宿主环境9200端口映射到Docker容器中的9200端口）。此处建议给容器设置固定ip，我这里没设置。

<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token parameter variable">--name</span> es <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms1g -Xmx1g&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span>  <span class="token parameter variable">-v</span> /docker/data/elk/es/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token parameter variable">-v</span> /docker/data/elk/es/data:/usr/share/elasticsearch/data <span class="token parameter variable">-v</span> /docker/data/elk/es/logs:/usr/share/elasticsearch/logs elasticsearch:7.16.3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),b={href:"http://localhost:9200",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"curl http://localhost:9200",-1),f=i(`<br><p>IK中文分词器：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将Linux 中的 ik 目录复制到es容器中</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> /home/drizzle/Software/elk/ik es:/usr/share/elasticsearch/plugins/

<span class="token comment"># 重启容器即可</span>
<span class="token function">sudo</span> <span class="token function">docker</span> restart es

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="kibana安装与配置" tabindex="-1"><a class="header-anchor" href="#kibana安装与配置"><span>kibana安装与配置</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载镜像</span>
<span class="token function">sudo</span> <span class="token function">docker</span> pull kibana:7.16.3

<span class="token comment"># 获取elasticsearch容器ip: 172.17.0.6</span>
<span class="token function">sudo</span> <span class="token function">docker</span> inspect <span class="token parameter variable">--format</span> <span class="token string">&#39;{{ .NetworkSettings.IPAddress }}&#39;</span> es

<span class="token comment"># 新建配置文件</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /docker/data/elk/kibana
<span class="token function">sudo</span> <span class="token function">touch</span> /docker/data/elk/kibana/kibana.yml
<span class="token function">sudo</span> <span class="token function">vim</span> /docker/data/elk/kibana/kibana.yml

<span class="token comment">#Default Kibana configuration for docker target</span>
server.name: kibana
server.host: <span class="token string">&quot;0&quot;</span>
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">&quot;http://172.17.0.6:9200&quot;</span><span class="token punctuation">]</span>
xpack.monitoring.ui.container.elasticsearch.enabled: <span class="token boolean">true</span>


<span class="token comment"># run kibana</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always --log-driver json-file --log-opt max-size<span class="token operator">=</span>100m --log-opt max-file<span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">--name</span> kibana <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 <span class="token parameter variable">-v</span> /docker/data/elk/kibana/kibana.yml:/usr/share/kibana/config/kibana.yml kibana:7.16.3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),g={href:"http://localhost:5601",target:"_blank",rel:"noopener noreferrer"},_=i(`<br><h4 id="nginx安装与配置" tabindex="-1"><a class="header-anchor" href="#nginx安装与配置"><span>Nginx安装与配置</span></a></h4><p>创建配置文件目录：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/data/nginx/conf/conf.d
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/data/nginx/html
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/data/nginx/logs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>conf 和conf.d 分别 用于保存配置文件<br> html 用于放置静态文件<br> logs 用于保存日志</p><br><p>下载镜像，先随便启动一个容器，复制相关配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">docker</span> pull nginx

<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx-test <span class="token parameter variable">-p</span> <span class="token number">8088</span>:80 <span class="token parameter variable">-d</span> nginx 


<span class="token comment"># 复制相关文件</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> <span class="token number">622</span>:/etc/nginx/nginx.conf /docker/data/nginx/conf/nginx.conf
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> <span class="token number">622</span>:/etc/nginx/conf.d /docker/data/nginx/conf
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> <span class="token number">622</span>:/usr/share/nginx/html /docker/data/nginx/


<span class="token comment"># 停止、并删除原来的容器</span>
<span class="token function">sudo</span> <span class="token function">docker</span> stop <span class="token number">622</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token number">622</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>指定配置文件及数据保存位置、并启动Nginx：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/nginx/html/:/usr/share/nginx/html/ <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/nginx/logs/:/var/log/nginx/ <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/nginx/conf/conf.d/:/etc/nginx/conf.d/ <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-d</span> nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="nacos安装与配置" tabindex="-1"><a class="header-anchor" href="#nacos安装与配置"><span>nacos安装与配置</span></a></h4>`,13),x={href:"https://nacos.io/zh-cn/docs/what-is-nacos.html",target:"_blank",rel:"noopener noreferrer"},y=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> pull nacos/nacos-server

<span class="token comment"># 创建本地的映射文件：custom.properties</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/data/nacos/<span class="token punctuation">{</span>init.d,logs<span class="token punctuation">}</span>
<span class="token function">touch</span> /docker/data/nacos/init.d/custom.properties

<span class="token function">cat</span> <span class="token operator">&gt;</span> /docker/data/nacos/init.d/custom.properties <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
management.endpoints.web.exposure.include=*
EOF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,2),q=n("code",null,"nacos_config",-1),D={href:"https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql",target:"_blank",rel:"noopener noreferrer"},S=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 创建容器并启动(开机自启动)</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token parameter variable">--name</span> nacos <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">PREFER_HOST_MODE</span><span class="token operator">=</span>ip <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">SPRING_DATASOURCE_PLATFORM</span><span class="token operator">=</span>mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_HOST</span><span class="token operator">=</span><span class="token number">192.168</span>.5.106 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_PORT</span><span class="token operator">=</span><span class="token number">3306</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_DB_NAME</span><span class="token operator">=</span>nacos_config <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_USER</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE_NUM</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/nacos/init.d/custom.properties:/home/nacos/init.d/custom.properties <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/data/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
nacos/nacos-server

<span class="token function">docker</span> <span class="token function">ps</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="zookeeper安装" tabindex="-1"><a class="header-anchor" href="#zookeeper安装"><span>Zookeeper安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> pull zookeeper:3.4.13

<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token parameter variable">--name</span> zookeeper <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/zookeeper/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> zookeeper:3.4.13

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-docker-run-命令详解" tabindex="-1"><a class="header-anchor" href="#_4-docker-run-命令详解"><span>4. docker run 命令详解</span></a></h3><p>常用关键参数OPTIONS 说明：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
-d:   <span class="token comment"># 后台运行容器，并返回容器ID；</span>
-P:   <span class="token comment"># 随机端口映射，容器内部端口随机映射到主机的端口</span>
-p:   <span class="token comment"># 指定端口映射，格式为：主机(宿主)端口:容器端口</span>

-i:   <span class="token comment"># 以交互模式运行容器，通常与 -t 同时使用；</span>
-t:   <span class="token comment"># 为容器重新分配一个伪输入终端，通常与 -i 同时使用</span>

<span class="token parameter variable">--restart</span> ,      <span class="token comment"># 指定重启策略，可以写--restart=awlays 总是故障重启</span>
<span class="token parameter variable">--volume</span> , -v:   <span class="token comment"># 绑定一个卷。一般格式 主机文件或文件夹:虚拟机文件或文件夹</span>


<span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;nginx-lb&quot;</span><span class="token builtin class-name">:</span>         <span class="token comment"># 为容器指定一个名称；</span>
<span class="token parameter variable">--dns</span> <span class="token number">8.8</span>.8.8:             <span class="token comment"># 指定容器使用的DNS服务器，默认和宿主一致；</span>
--dns-search example.com:  <span class="token comment"># 指定容器DNS搜索域名，默认和宿主一致；</span>
<span class="token parameter variable">-h</span> <span class="token string">&quot;mars&quot;</span><span class="token builtin class-name">:</span>                 <span class="token comment"># 指定容器的hostname；</span>

<span class="token parameter variable">-e</span> <span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">&quot;ritchie&quot;</span><span class="token builtin class-name">:</span>     <span class="token comment"># 设置环境变量；</span>
--env-file<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>:             <span class="token comment"># 从指定文件读入环境变量；</span>

<span class="token parameter variable">--cpuset</span><span class="token operator">=</span><span class="token string">&quot;0-2&quot;</span> or <span class="token parameter variable">--cpuset</span><span class="token operator">=</span><span class="token string">&quot;0,1,2&quot;</span><span class="token builtin class-name">:</span>   <span class="token comment"># 绑定容器到指定CPU运行；</span>

<span class="token parameter variable">-m</span> <span class="token builtin class-name">:</span>             <span class="token comment"># 设置容器使用内存最大值；</span>
<span class="token parameter variable">--net</span><span class="token operator">=</span><span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span>  <span class="token comment"># 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；</span>

<span class="token parameter variable">--link</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>:       <span class="token comment"># 添加链接到另一个容器；</span>
<span class="token parameter variable">--expose</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>:     <span class="token comment"># 开放一个端口或一组端口；</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_5-docker容器内部操作" tabindex="-1"><a class="header-anchor" href="#_5-docker容器内部操作"><span>5. Docker容器内部操作</span></a></h3><p>docker exec ：在运行的容器中执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container ID<span class="token operator">&gt;</span> /bin/bash      <span class="token comment"># 进入容器内部</span>
<span class="token builtin class-name">exit</span>                                          <span class="token comment"># 退出container (或者使用Ctrl + D)</span>

<span class="token comment"># 更改容器内系统的root密码</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>MyContainer<span class="token operator">&gt;</span> <span class="token function">bash</span>            <span class="token comment"># 进入后修改</span>
root@MyContainer:/<span class="token comment"># passwd</span>
Enter new UNIX password:
Retype new UNIX password:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_6-可视化界面-portainer" tabindex="-1"><a class="header-anchor" href="#_6-可视化界面-portainer"><span>6. 可视化界面-Portainer</span></a></h3><p>Portainer是功能强大的开源工具集，可让您轻松地在Docker，Swarm，Kubernetes和Azure ACI中构建和管理容器。</p><p>Portainer的工作原理是在易于使用的GUI后面隐藏使管理容器变得困难的复杂性。通过消除用户使用CLI，编写YAML或理解清单的需求，Portainer使部署应用程序和解决问题变得如此简单，任何人都可以做到。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">docker</span> pull portainer/portainer-ce


<span class="token comment"># 服务端部署</span>

<span class="token function">sudo</span> <span class="token function">docker</span> volume create portainer_data

<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8000</span>:8000 <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">--name</span><span class="token operator">=</span>portainer <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> portainer_data:/data portainer/portainer-ce
<span class="token comment"># 访问 9000 端口即可</span>


<span class="token comment"># agent端部署</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9001</span>:9001 <span class="token parameter variable">--name</span> portainer_agent <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="二-dockerfile构建镜像" tabindex="-1"><a class="header-anchor" href="#二-dockerfile构建镜像"><span>二 Dockerfile构建镜像</span></a></h2>`,19),w={href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#dockerfile-instructions",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.runoob.com/docker/docker-dockerfile.html",target:"_blank",rel:"noopener noreferrer"},I=n("br",null,null,-1),O=n("h2",{id:"三-docker-compose",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三-docker-compose"},[n("span",null,"三 Docker Compose")])],-1),T={href:"https://docs.docker.com/compose/gettingstarted/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://docs.docker.com/samples/wordpress/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.runoob.com/docker/docker-compose.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://docs.docker.com/compose/install/#install-compose",target:"_blank",rel:"noopener noreferrer"},A=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#To install a different version of Compose, substitute 1.29.2 with the version of Compose you want to use</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.29.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose

<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>                          <span class="token comment">#Test the installation</span>


<span class="token comment">#To uninstall Docker Compose if you installed using curl:</span>
<span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function C(P,L){const a=c("ExternalLinkIcon");return t(),o("div",null,[p,n("p",null,[s("docker 官网安装教程："),n("a",d,[s("https://docs.docker.com/engine/install/centos/"),e(a)])]),m,n("p",null,[n("a",v,[s("Docker官网—常用命令"),e(a)]),s(" —— "),n("a",u,[s("Docker Hub"),e(a)])]),k,n("p",null,[s("验证安装是否成功：浏览器访问 "),n("a",b,[s("http://localhost:9200"),e(a)]),s(" ，或者命令行："),h,s(" .")]),f,n("p",null,[s("浏览器上输入："),n("a",g,[s("http://localhost:5601"),e(a)]),s("，如无法访问进容器检查配置是否生效")]),_,n("p",null,[s("注意服务器内存不足，启动后内存溢出问题（单机standalone模式默认服务器堆大小512M）"),n("a",x,[s("nacos官方文档"),e(a)])]),y,n("p",null,[s("创建数据库 "),q,s(" : 创建nacos数据库后，然后执行下面的Sql 。 "),n("a",D,[s("nacos官网的Sql"),e(a)]),s(" .")]),S,n("p",null,[s("dockerfile："),n("a",w,[s("https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#dockerfile-instructions"),e(a)])]),n("p",null,[s("菜鸟教程："),n("a",E,[s("https://www.runoob.com/docker/docker-dockerfile.html"),e(a)])]),I,O,n("p",null,[n("a",T,[s("Get started with Docker Compose"),e(a)])]),n("p",null,[n("a",R,[s("You can use Docker Compose to easily run WordPress"),e(a)])]),n("p",null,[n("a",N,[s("菜鸟教程"),e(a)]),s("  ")]),n("p",null,[n("a",M,[s("install-compose："),e(a)])]),A])}const V=l(r,[["render",C],["__file","Docker.html.vue"]]),F=JSON.parse('{"path":"/tool/Docker/Docker.html","title":"Docker","lang":"en-US","frontmatter":{"order":1,"title":"Docker","shortTitle":"docker","icon":"docker","description":"Docker容器技术 一 Docker Introduction 1. Docker Install docker 官网安装教程：https://docs.docker.com/engine/install/centos/ Docker的快速安装 Uninstall old versions： install using the repository ...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/tool/Docker/Docker.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"Docker容器技术 一 Docker Introduction 1. Docker Install docker 官网安装教程：https://docs.docker.com/engine/install/centos/ Docker的快速安装 Uninstall old versions： install using the repository ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-15T09:06:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-04-15T09:06:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T09:06:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"一 Docker Introduction","slug":"一-docker-introduction","link":"#一-docker-introduction","children":[{"level":3,"title":"1. Docker Install","slug":"_1-docker-install","link":"#_1-docker-install","children":[]},{"level":3,"title":"2. Docker常用命令","slug":"_2-docker常用命令","link":"#_2-docker常用命令","children":[]},{"level":3,"title":"3. Docker常用镜像安装","slug":"_3-docker常用镜像安装","link":"#_3-docker常用镜像安装","children":[]},{"level":3,"title":"4. docker run 命令详解","slug":"_4-docker-run-命令详解","link":"#_4-docker-run-命令详解","children":[]},{"level":3,"title":"5. Docker容器内部操作","slug":"_5-docker容器内部操作","link":"#_5-docker容器内部操作","children":[]},{"level":3,"title":"6. 可视化界面-Portainer","slug":"_6-可视化界面-portainer","link":"#_6-可视化界面-portainer","children":[]}]},{"level":2,"title":"二 Dockerfile构建镜像","slug":"二-dockerfile构建镜像","link":"#二-dockerfile构建镜像","children":[]},{"level":2,"title":"三 Docker Compose","slug":"三-docker-compose","link":"#三-docker-compose","children":[]}],"git":{"createdTime":1713172018000,"updatedTime":1713172018000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":9.13,"words":2740},"filePathRelative":"tool/Docker/Docker.md","localizedDate":"April 15, 2024","autoDesc":true}');export{V as comp,F as data};
