import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c,b as n,d as s,a as e,e as t}from"./app-C9pIHXR3.js";const o="/notebook/assets/image-20220402194342248-hy48wwS-.png",d="/notebook/assets/image-20220402202046595-AAGCGpH7.png",u="/notebook/assets/image-20220403131502350-DqufVUII.png",r="/notebook/assets/image-20220404121522026-CuZyJF4-.png",m={},v=n("h2",{id:"一-redis安装与配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-redis安装与配置"},[n("span",null,"一 Redis安装与配置")])],-1),k={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gitee.com/qishibo/AnotherRedisDesktopManager/releases",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),g=n("h3",{id:"_1-redis的安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-redis的安装"},[n("span",null,"1. Redis的安装")])],-1),f={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 下载解压</span>

<span class="token function">wget</span> http://download.redis.io/releases/redis-6.2.6.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.6.tar.gz


<span class="token comment"># 安装  （Ubuntu下最好在国外源下安装 gcc ，否则可能出错）</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gcc         <span class="token comment"># 需要先安装编译环境 （ centos: yum install gcc-c++  ）</span>

<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> redis-6.2.6/   <span class="token comment"># ubuntu可能存在权限问题，先赋予权限再安装</span>

<span class="token builtin class-name">cd</span> redis-6.2.6/                  <span class="token comment"># 进入redis目录进行安装</span>

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>不报错的话就已经在 /usr/local/bin/ 目录下生成了 redis-server 执行文件</p><p>如果是普通 (非root用户) 应该会报下面错误:</p><figure><img src="`+o+`" alt="image-20220402194342248" tabindex="0" loading="lazy"><figcaption>image-20220402194342248</figcaption></figure><br><p>这时需要手动复制一些文件到指定目录</p><p>这里暂且为了多熟悉下Redis和linux，就不使用其默认的位置了，而是将执行文件和配置文件全放在了自定义的文件夹下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/redis/bin/      <span class="token comment"># sudo mkdir -p /usr/local/redis/bin/   </span>

<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/redis/conf/     <span class="token comment"># 存放配置文件目录</span>


<span class="token comment"># 然后将Redis src下的编译好的可执行文件拷贝到 /usr/local/redis/bin/</span>
<span class="token comment">#                           配置文件拷贝到 /usr/local/redis/conf/</span>

<span class="token builtin class-name">cd</span> /usr/local/redis/redis-6.2.6/src

<span class="token function">sudo</span> <span class="token function">cp</span> redis-server redis-cli /usr/local/redis/bin/
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token punctuation">..</span>/redis.conf /usr/local/redis/conf/



<span class="token comment"># 此时已经可以启动Redis了</span>

<span class="token builtin class-name">cd</span> /usr/local/redis
./bin/redis-server ./conf/redis.conf <span class="token operator">&amp;</span>      <span class="token comment"># ctrl+c正常会中断程序,加上&amp;之后ctrl+c程序也不会退出</span>

^C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动客户端连接试试：</p><figure><img src="`+d+`" alt="image-20220402202046595" tabindex="0" loading="lazy"><figcaption>image-20220402202046595</figcaption></figure><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 这里先关闭 redis-server, 因为下面需要修改其配置文件</span>

<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> redis 

<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-redis基础配置" tabindex="-1"><a class="header-anchor" href="#_2-redis基础配置"><span>2. Redis基础配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 修改配置文件之前别忘了先备份 </span>

<span class="token function">sudo</span> <span class="token function">cp</span> /usr/local/redis/conf/redis.conf /usr/local/redis/conf/redis.conf.backup


<span class="token comment"># 修改redis.conf</span>

<span class="token function">sudo</span> <span class="token function">vim</span> /usr/local/redis/conf/redis.conf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis.conf :</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
daemonize <span class="token function">yes</span>                       <span class="token comment"># 让redis启动后在后台运行</span>

<span class="token function">dir</span> /usr/local/redis/db             <span class="token comment"># 修改redis的工作目录 (持久化文件的路径) sudo mkdir db</span>

<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0                        <span class="token comment"># 0.0.0.0 表示所有的IP地址都可以连接并访问Redis服务器</span>

requirepass itdrizzle               <span class="token comment"># 设置密码</span>


<span class="token comment"># 当客户端闲置多长时间后关闭连接,0表示不关闭连接</span>
<span class="token function">timeout</span> <span class="token number">300</span>

<span class="token comment"># 端口,一般不建议更改</span>
port <span class="token number">6379</span>

<span class="token comment"># 日志级别  DEBUG | VERBOSE | NOTICE | WARNING</span>
loglevel DEBUG

<span class="token comment"># Redis默认有16个数据库</span>
database <span class="token number">16</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 此时再启动即可使用远程密码连接</span>

./bin/redis-server ./conf/redis.conf


<span class="token comment"># 测试完后同样 kill 掉 Redis 服务，下面还要进行自启动等服务配置</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-redis服务启动" tabindex="-1"><a class="header-anchor" href="#_3-redis服务启动"><span>3. Redis服务启动</span></a></h3><p>redis安装包的 utils 目录下有一些便捷的服务脚本，如：<code>redis_init_script</code> , <code>systemd-redis_server.service</code></p><p>分别为 <code>/etc/init.d/xxx</code> 脚本 , 和 systemctl 的脚本，</p><br><p><strong>systemd的方式</strong> （未配置成功，待解决......）:</p><blockquote><p>注：（ 个人查看Ubuntu下的目录是 <code>/lib/systemd/system</code>， 但很多资料说的是 /usr/lib/systemd/system ）</p><p>对于那些支持 Systemd 的软件，安装的时候，会自动在<code>/usr/lib/systemd/system</code>目录添加一个配置文件。</p><p>如果你想让该软件开机启动，就执行下面的命令（以<code>httpd.service</code>为例）。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>上面的命令相当于在<code>/etc/systemd/system</code> 目录添加一个符号链接，指向<code>/usr/lib/systemd/system</code> 里面的<code>httpd.service</code>文件。</p><p>这是因为开机时，<code>Systemd</code>只执行<code>/etc/systemd/system</code>目录里面的配置文件。</p><p>这也意味着，如果把修改后的配置文件放在该目录，就可以达到覆盖原始配置的效果</p><p>systemd有系统和用户区分：</p><p><strong>系统（/user/lib/systemd/system/）</strong>、<strong>用户（/etc/lib/systemd/user/）</strong></p><p>一般系统管理员手工创建的单元文件建议存放在/etc/systemd/system/目录下面。</p><p>/usr/lib/systemd/system目录自动存放启动文件的配置位置，里面一般包含有XXXXX.service</p></blockquote><br><p>下面使用 systemd 的方式创建 Redis 的开机自启服务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 先将安装包下的 systemd 服务文件复制到 上述所说的位置</span>

<span class="token function">sudo</span> <span class="token builtin class-name">cd</span> /usr/local/redis/redis-6.2.6/utils/

<span class="token function">sudo</span> <span class="token function">cp</span> systemd-redis_server.service /usr/lib/systemd/user/redis-server.service



<span class="token comment">#修改配置文件位置</span>
 
<span class="token function">sudo</span> <span class="token function">vim</span> /usr/lib/systemd/user/reids-server.service

	<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/redis/bin/redis-server /usr/local/redis/conf/redis.conf <span class="token parameter variable">--supervised</span> systemd <span class="token parameter variable">--daemonize</span> <span class="token function">yes</span>
   
   

<span class="token comment"># 开机自启动</span>

<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> redis-server.service

<span class="token function">sudo</span> systemctl start redis-server.service         <span class="token comment"># 启动</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>init方式</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 复制 init 脚本到 /etc/init.d/ 下</span>

<span class="token builtin class-name">cd</span> /usr/local/redis/redis-6.2.6/utils/

<span class="token function">sudo</span> <span class="token function">cp</span> ./redis_init_script /etc/init.d/redis-server.service


<span class="token comment"># 修改脚本内容</span>

<span class="token function">sudo</span> <span class="token function">vim</span> /etc/init.d/redis-server.service 

    <span class="token assign-left variable">EXEC</span><span class="token operator">=</span>/usr/local/redis/bin/redis-server
    <span class="token assign-left variable">CLIEXEC</span><span class="token operator">=</span>/usr/local/redis/bin/redis-cli

    <span class="token assign-left variable">CONF</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/redis/conf/redis.conf&quot;</span>


update-rc.d redis-server.service defaults <span class="token number">90</span>       <span class="token comment">#开启自启动 </span>


/etc/init.d/redis-server.service start             <span class="token comment"># 启动</span>
         

<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> redis

<span class="token function">sudo</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> pid                                   <span class="token comment"># 关闭</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>启动redis客户端： <code>redis-cli</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
redis-cli                         <span class="token comment"># 启动</span>

redis-cli <span class="token parameter variable">-a</span> password <span class="token function">shutdown</span>    <span class="token comment"># 关闭</span>

redis-cli <span class="token parameter variable">-a</span> password <span class="token function">ping</span>        <span class="token comment"># 查看是否存活 PONG表示正常</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><code>redis-cli</code>的基本使用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token operator">&gt;</span> auth password    <span class="token comment"># 类似登录（必须输入密码）</span>

<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> name tom     <span class="token comment"># OK          设置name的值为tom</span>
<span class="token operator">&gt;</span> get name         <span class="token comment"># &quot;tom&quot;       获取name的值</span>

<span class="token operator">&gt;</span> del name         <span class="token comment"># (integer)1  返回删除的数量</span>
<span class="token operator">&gt;</span> get name         <span class="token comment"># (nil)       删除后再获取为空</span>

<span class="token operator">&gt;</span> <span class="token builtin class-name">type</span> age         <span class="token comment"># string      返回age的类型</span>
<span class="token operator">&gt;</span> keys *           <span class="token comment"># 查看所有的key(不建议再生产上使用，有性能影响)</span>

<span class="token operator">&gt;</span> mset             <span class="token comment"># 连续设值 如：MSET key1 &quot;Hello&quot; key2 &quot;World&quot;</span>
<span class="token operator">&gt;</span> mget             <span class="token comment"># 连续取值</span>
<span class="token operator">&gt;</span> msetnx           <span class="token comment"># 连续设置,如果存在则不设置 </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-redis命令中心" tabindex="-1"><a class="header-anchor" href="#_4-redis命令中心"><span>4. Redis命令中心</span></a></h3><p>Redis命令十分丰富，包括的命令组有Cluster、Connection、Geo、Hashes、HyperLogLog、Keys、Lists、Pub/Sub、Scripting、Server、Sets、Sorted Sets、Strings、Transactions一共14个redis命令组两百多个redis命令</p>`,42),_={href:"http://redis.cn/commands.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://redis.io/commands/",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),S=n("thead",null,[n("tr",null,[n("th",null,"命令组"),n("th",null,"描述"),n("th",null,"文档地址")])],-1),F=n("td",null,"Connection",-1),q=n("td",null,"connection(连接) 相关的命令",-1),T={href:"http://redis.cn/commands.html#connection",target:"_blank",rel:"noopener noreferrer"},A=n("td",null,"Keys",-1),O=n("td",null,"操作 key 的通用命令",-1),D={href:"http://redis.cn/commands.html#generic",target:"_blank",rel:"noopener noreferrer"},j=n("td",null,"Strings",-1),z=n("td",null,"string 类型相关的命令",-1),w={href:"http://redis.cn/commands.html#string",target:"_blank",rel:"noopener noreferrer"},B=n("td",null,"Lists",-1),E=n("td",null,"list 类型相关的命令",-1),L={href:"http://redis.cn/commands.html#list",target:"_blank",rel:"noopener noreferrer"},H=n("td",null,"Hashes",-1),I=n("td",null,"hash 类型相关的命令",-1),C={href:"http://redis.cn/commands.html#hash",target:"_blank",rel:"noopener noreferrer"},M=n("td",null,"Sets",-1),G=n("td",null,"set 类型相关的命令",-1),P={href:"http://redis.cn/commands.html#set",target:"_blank",rel:"noopener noreferrer"},N=n("td",null,"Sorted Sets",-1),K=n("td",null,"sorted set 类型相关的命令",-1),V={href:"http://redis.cn/commands.html#sorted_set",target:"_blank",rel:"noopener noreferrer"},Z=n("td",null,"HyperLogLog",-1),J=n("td",null,"基数统计 相关的命令",-1),U={href:"http://redis.cn/commands.html#hyperloglog",target:"_blank",rel:"noopener noreferrer"},X=n("td",null,"Geo",-1),W=n("td",null,"地理位置信息 相关的命令",-1),Y={href:"http://redis.cn/commands.html#geo",target:"_blank",rel:"noopener noreferrer"},Q=n("td",null,"Steams",-1),$=n("td",null,"stream 相关的命令",-1),nn={href:"http://redis.cn/commands.html#streams",target:"_blank",rel:"noopener noreferrer"},sn=n("td",null,"Transactions",-1),an=n("td",null,"redis 事务的相关命令",-1),en={href:"http://redis.cn/commands.html#transactions",target:"_blank",rel:"noopener noreferrer"},tn=n("td",null,"Scripting",-1),ln=n("td",null,"redis 脚本常用命令",-1),pn={href:"http://redis.cn/commands.html#scripting",target:"_blank",rel:"noopener noreferrer"},cn=n("td",null,"Pub/Sub",-1),on=n("td",null,"发布订阅 (pub/sub) 相关的命令",-1),dn={href:"http://redis.cn/commands.html#pubsub",target:"_blank",rel:"noopener noreferrer"},un=n("td",null,"Server",-1),rn=n("td",null,"用于管理 redis 服务",-1),mn={href:"http://redis.cn/commands.html#server",target:"_blank",rel:"noopener noreferrer"},vn=n("td",null,"Cluster",-1),kn=n("td",null,"Redis Cluster集群相关的命令",-1),bn={href:"http://redis.cn/commands.html#cluster",target:"_blank",rel:"noopener noreferrer"},hn=t('<br><h2 id="二-redis持久化配置" tabindex="-1"><a class="header-anchor" href="#二-redis持久化配置"><span>二 Redis持久化配置</span></a></h2><p>Redis持久化存储有两种持久化方案：RDB（Redis DataBase）和AOF（Append-Only File）。</p><p>RDB是将内存中数据的快照（指定的时间间隔存储数据集的时间点快照）存储到磁盘内，</p><p>AOF则是通过日志记录Redis内的所有操作。redis服务重启时通过这些操作重建原始数据集</p><img src="'+u+`" alt="image-20220403131502350" style="zoom:50%;"><br><p>Redis 4之后支持AOF+RDB混合持久化的方式，结合了两者的优点，</p><p>可以通过aof-use-rdb-preamble配置项开启混合持久化功能的开关。</p><br><h3 id="_1-rdb持久化" tabindex="-1"><a class="header-anchor" href="#_1-rdb持久化"><span>1. RDB持久化</span></a></h3><p>RDB（Redis DataBase）是将Redis内存中数据的快照写⼊到⼆进制⽂件中，是Redis的默认持久化方案。</p><p>触发RDB持久化的方式分别为：正常关闭redis、根据配置文件设置的次数定时触发、save和bgsave命令</p><ul><li><p>以一段时间内达到指定修改的次数为规则来触发快照操作（在redis.conf中配置，快照文件名为dump.rdb）</p><p>每当Redis服务重启的时候都会从该文件中把数据加载到内存中。</p></li><li><p>使用save和bgsave命令手动来触发</p><p>save会阻塞服务器进程。在执行save命令的过程中，服务器不能处理任何请求</p><p>bgsave（background save，后台保存）命令会通过一个子进程在后台处理数据RDB持久化</p><blockquote><p>本质上save和bgsave调用的都是rdbSave函数，所以Redis不允许save和bgsave命令同时执行，</p><p>当然这也是为了避免RDB文件数据出现不一致性的问题。</p></blockquote></li></ul><br><p>RDB持久化的配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 默认定时持久化规则</span>
save <span class="token number">900</span> <span class="token number">1</span>
save <span class="token number">300</span> <span class="token number">10</span>
save <span class="token number">60</span> <span class="token number">10000</span>

<span class="token comment"># 关闭：</span>
<span class="token comment">#	1）注释掉所有save point 配置可以关闭 RDB 持久化。</span>
<span class="token comment">#	2）在所有 save point 配置后增加：save &quot;&quot;，该配置可以删除所有之前配置的 save point。</span>


<span class="token comment"># 默认值为yes，当启用了RDB且最后一次在后台保存数据失败，Redis是否停止接收数据：</span>
<span class="token comment"># yes代表可以继续写入数据；no代表不会写入成功，通知用户持久化出现错误</span>
stop-writes-on-bgsave-error <span class="token function">yes</span>


<span class="token comment"># 持久化的数据是否进行压缩</span>
rdbcompression <span class="token function">yes</span>


<span class="token comment"># 存储的快照是否进行CRC64算法的数据校验，如果希望获取到最大的性能提升，可以关闭此功能</span>
Rdbchecksum <span class="token function">yes</span>


<span class="token comment"># 设置快照的文件名，默认是dump.rdb</span>
dbfilename dump.rdb

<span class="token function">dir</span> /usr/local/redis/db     <span class="token comment"># dump.rdb的存储位置</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>RDB默认持久化策略默认有三种方式：</p><p>​ 第一种：在60秒内有10000次操作即触发RDB持久化。</p><p>​ 第二种：没有满足第一种条件时，在300秒内有10次操作即触发RDB持久化。</p><p>​ 第三种：没有满足第二种条件时，在900秒内有1次操作即触发RDB持久化。</p><br><p>Redis有一个周期性操作函数，默认每隔100ms执行一次，其中的一项工作就是检查自动触发bgsave命令的条件是否成立</p><br><p>RDB全量备份总是非常耗时的，而且不能提供强一致性（Strict Consistency），即</p><ul><li><p>如果Redis进程崩溃，那么在最近一次RDB备份之后的数据也会随之消失。</p><p>（⼩内存机器不适合使⽤，RDB机制符合要求才会照快照，可能会丢失数据）</p></li><li><p>在默认情况下，RDB数据持久化实时性比较差，而配置为高时效性时，频繁操作的成本则会很高</p></li></ul><p>适⽤于容灾备份 、全量复制</p><br><h3 id="_2-aof持久化" tabindex="-1"><a class="header-anchor" href="#_2-aof持久化"><span>2. AOF持久化</span></a></h3><p>AOF（Append Only File）以独立日志的方式记录每次的写命令，可以很好地解决了数据持久化的实时性。</p><p>系统重启时可以重新执行AOF文件中的命令来恢复数据。AOF会先把命令追加在AOF缓冲区，然后根据对应策略写入硬盘。</p><br><p>AOF持久化的相关配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 开启AOF持久化</span>
appendonly <span class="token function">yes</span>

<span class="token comment"># AOF文件名</span>
appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>

<span class="token comment"># AOF文件存储路径 （与rdb的一致）</span>
<span class="token function">dir</span> <span class="token function">dir</span> /usr/local/redis/db 


<span class="token comment"># aof文件比上次重写时增长100%(配置可以大于100%)时触发重写</span>
auto-aof-rewrite-percentage <span class="token number">100</span> 

<span class="token comment"># aof文件大小超过64MB时触发重写</span>
auto-aof-rewrite-min-size 64mb 


// aof 持久化策略，任选一个，默认是everysec
<span class="token comment"># appendfsync always</span>
appendfsync everysec
<span class="token comment"># appendfsync no</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
使用AOF持久化可以根据不同的fsync策略来备份数据，因为AOF采用的是追加的日志方式，
因此即使断电也不会出现磁盘寻道或磁盘被损坏的问题。

如果由于某种原因（磁盘已满或其他原因）日志只记录了一半，那么可以使用redis-check-aof工具轻松修复。

当数据量太大时，Redis能够在后台自动重写AOF，并生成一个全新的文件，其中包含创建当前数据集所需的最少操作集，
一旦准备好新的文件，Redis就会切换新的文件并开始把日志追加到新的文件。


AOF文件包含了所有操作的日志，而且很容易看懂，当用户不小心使用了flushall命令，flushall会把所有的数据删除，
但是可以根据AOF文件找到错误的命令，把这些错误的指令删除，然后重新启动Redis，就可以恢复对应的业务数据。
但是在此期间，AOF文件不能被重写，重写之后的AOF文件不再是可以让用户理解的内容。

AOF文件会以文本格式保存所有写操作命令，且未经压缩，因此对于同一数据集，AOF文件通常大于等效的RDB文件。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-混合持久化" tabindex="-1"><a class="header-anchor" href="#_3-混合持久化"><span>3. 混合持久化</span></a></h3><p>RDB和AOF持久化的区别：</p><table><thead><tr><th>特性 \\ 方式</th><th>RDB（Redis DataBase）</th><th>AOF（Append Only File）</th></tr></thead><tbody><tr><td>启动优先级</td><td>低</td><td>高</td></tr><tr><td>文件体积</td><td>小</td><td>大</td></tr><tr><td>恢复性能</td><td>速度快</td><td>速度慢</td></tr><tr><td>数据安全性</td><td>丢失上次保存点之后的数据</td><td>因配置策略而不同</td></tr></tbody></table><br><p>使用RDB持久化会有数据丢失的风险，但是数据恢复的速度快；使用AOF持久化可以保证数据的完整性，但数据恢复的速度慢。</p><p>在Redis 4之后的版本新增了AOF+RDB混合模式，先使用RDB存储快照，然后使用AOF持久化记录所有的写操作，当满足重写策略或手动触发重写的时候，将最新的数据存储为新的RDB记录。</p><p>重启服务时会从RDB和AOF两部分恢复数据，既保证了数据的完整性，又提高了数据恢复的性能。</p><p>开启AOF+RDB混合模式持久化的配置命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># redis.conf</span>

aof-use-rdb-preamble <span class="token function">yes</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要在redis.conf配置文件中写入上面这行代码就可以开启AOF+RDB混合模式。(注意此模式在Redis 4及以上版本才支持)</p><p>在 redis 4 刚引入时，默认是关闭混合持久化的，但是在 redis 5 中默认已经打开了。</p><br><p>混合持久化并不是一种全新的持久化方式，而是对已有方式的优化。混合持久化只发生于 AOF 重写过程。</p><p>使用了混合持久化，重写后的新 AOF 文件前半段是 RDB 格式的全量数据，后半段是 AOF 格式的增量数据。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
开启混合模式后，在bgrewriteaof命令之后会在AOF文件中以RDB格式写入当前最新的数据，之后的写操作继续以AOF的追加形式追加写命令。
当Redis重启的时候，先加载RDB的部分再加载剩余的AOF部分。

混合持久化本质是通过 AOF 后台重写（bgrewriteaof 命令）完成的，不同的是当开启混合持久化时，fork 出的子进程
先将当前全量数据以 RDB 方式写入新的 AOF 文件，然后再将 AOF 重写缓冲区（aof_rewrite_buf_blocks）的
增量命令以 AOF 方式写入到文件，写入完成后通知主进程将新的含有 RDB 格式和 AOF 格式的 AOF 文件替换旧的的 AOF 文件。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：结合 RDB 和 AOF 的优点, 更快的重写和恢复。</p><p>缺点：AOF 文件里面的 RDB 部分不再是 AOF 格式，可读性差。</p><br><h3 id="_4-持久化选择" tabindex="-1"><a class="header-anchor" href="#_4-持久化选择"><span>4. 持久化选择</span></a></h3><p>RDB、AOF、混合持久，我应该用哪一个？</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
一般来说， 如果想尽量保证数据安全性， 你应该同时使用 RDB 和 AOF 持久化功能，同时可以开启混合持久化。

如果你非常关心你的数据， 但仍然可以承受数分钟以内的数据丢失， 那么你可以只使用 RDB 持久化。

如果你的数据是可以丢失的，则可以关闭持久化功能，在这种情况下，Redis 的性能是最高的。


使用 Redis 通常都是为了提升性能，而如果为了不丢失数据而将 appendfsync  设置为 always 级别时，
对 Redis 的性能影响是很大的，在这种不能接受数据丢失的场景，其实可以考虑直接选择 MySQL 等类似的数据库。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>服务启动时如何加载持久化数据?</p><p>简单来说，如果同时启用了 AOF 和 RDB，Redis 重新启动时，会使用 AOF 文件来重建数据集，因为通常来说，AOF 的数据会更完整。</p><p>而在引入了混合持久化之后，使用 AOF 重建数据集时，会通过文件开头是否为“REDIS”来判断是否为混合持久化</p><p>具体流程如下图所示：</p><figure><img src="`+r+'" alt="image-20220404121522026" tabindex="0" loading="lazy"><figcaption>image-20220404121522026</figcaption></figure><br><h2 id="三-redis数据类型" tabindex="-1"><a class="header-anchor" href="#三-redis数据类型"><span>三 Redis数据类型</span></a></h2><p>Redis⽀持五种数据类型：String（字符串），hash（哈希），list（列表），set（集合）以及 zset（sorted set：有序集合） 等</p>',68),gn={href:"http://redis.cn/topics/data-types-intro.html",target:"_blank",rel:"noopener noreferrer"},fn=t(`<br><p>Redis数据类型相关的通用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 通常用SET command 和 GET command来设置和获取字符串值</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> mykey somevalue 
<span class="token operator">&gt;</span> get mykey


<span class="token comment"># SET 命令有些有趣的操作，例如，当key存在时SET会失败，或相反的，当key不存在时它只会成功</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> mykey newval nx    <span class="token comment">#(nil)</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> mykey newval xx    <span class="token comment"># OK</span>


<span class="token comment"># 使用MSET和MGET命令, 一次存储或获取多个key对应的值 (MGET 命令返回由值组成的数组)</span>
<span class="token operator">&gt;</span> mset a <span class="token number">10</span> b <span class="token number">20</span> c <span class="token number">30</span>
<span class="token operator">&gt;</span> mget a b c            


<span class="token comment"># 使用EXISTS命令返回1或0标识给定key的值是否存在，使用DEL命令可以删除key对应的值</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> mykey hello
<span class="token operator">&gt;</span> exists mykey                 <span class="token comment"># (integer)1</span>
<span class="token operator">&gt;</span> del mykey                    <span class="token comment"># (integer)1</span>
<span class="token operator">&gt;</span> exists mykey                 <span class="token comment"># (integer)0</span>


<span class="token comment"># TYPE命令可以返回key对应的值的存储类型：</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> mykey x                  <span class="token comment"># OK</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">type</span> mykey                   <span class="token comment"># string</span>
<span class="token operator">&gt;</span> del mykey                    <span class="token comment"># (integer) 1</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">type</span> mykey                   <span class="token comment"># none</span>


<span class="token comment"># Redis超时:数据在限定时间内存活 （可以对key设置一个超时时间，当这个时间到达后会被删除）</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> key some-value           <span class="token comment"># OK</span>
<span class="token operator">&gt;</span> expire key <span class="token number">5</span>                 <span class="token comment"># (integer) 1     设置过期时间（默认单位为seconds）</span>
<span class="token operator">&gt;</span> get key <span class="token punctuation">(</span>immediately<span class="token punctuation">)</span>        <span class="token comment"># &quot;some-value&quot;</span>
<span class="token operator">&gt;</span> get key <span class="token punctuation">(</span>after some <span class="token function">time</span><span class="token punctuation">)</span>    <span class="token comment"># (nil)</span>

<span class="token comment"># 也可以再次调用这个命令来改变超时时间，使用PERSIST命令去除超时时间 （TTL命令用来查看key对应的值剩余存活时间）</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> key <span class="token number">100</span> ex <span class="token number">10</span>            <span class="token comment"># OK  设置带过期时间的数据 或 改变超时时间 （默认单位为seconds）</span>
<span class="token operator">&gt;</span> ttl key                      <span class="token comment"># (integer) 9  查看剩余时间, -1永不过期, -2过期</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-redis-strings" tabindex="-1"><a class="header-anchor" href="#_1-redis-strings"><span>1. Redis Strings</span></a></h3>`,5),yn={href:"https://redis.io/commands/?group=string",target:"_blank",rel:"noopener noreferrer"},_n=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> rekey data              <span class="token comment"># 设置已经存在的key ,会覆盖</span>
<span class="token operator">&gt;</span> setnx rekey data            <span class="token comment"># 设置已经存在的key ,不会覆盖</span>

<span class="token operator">&gt;</span> append key value            <span class="token comment"># 合并字符串,将value合并到key对应的值上</span>
<span class="token operator">&gt;</span> strlen key                  <span class="token comment"># 字符串长度</span>

<span class="token operator">&gt;</span> incr key                    <span class="token comment"># 累加1 (类似 a+=1 的效果)</span>
<span class="token operator">&gt;</span> decr key                    <span class="token comment"># 累减1</span>
<span class="token operator">&gt;</span> incrby key num              <span class="token comment"># 累加给定数值</span>
<span class="token operator">&gt;</span> decrby key num              <span class="token comment"># 累减给定数值</span>

<span class="token operator">&gt;</span> getrange key start end      <span class="token comment"># 截取数据, end=-1代表到最后</span>
<span class="token operator">&gt;</span> setrange key start newdata  <span class="token comment"># 从start位置开始替换数据</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：</p><ul><li><p>缓存 token （或类似的单个值的缓存）</p></li><li><p>作为计数器：如统计网站的访问量（日访问量 = 日pv，page view），通过incr这个指令来做</p><p>还有用户的总点赞数、关注数、粉丝数、帖子的评论数、热度、文章的阅读数和收藏数等</p></li><li><p>其他所有的数据结构最后都可以使用String来实现</p></li></ul><br><h3 id="_2-redis-hashes" tabindex="-1"><a class="header-anchor" href="#_2-redis-hashes"><span>2. Redis Hashes</span></a></h3>`,5),Rn={href:"http://redis.cn/topics/data-types-intro.html#hashes",target:"_blank",rel:"noopener noreferrer"},xn=t(`<p>Redis hash ：由field和关联的value组成的map。field和value都是字符串的。</p><p>Redis hash 看起来就像一个 “hash” 的样子，由键值对组成，类似map ,存储结构化数据结构,比如存储一个对象 (不能有嵌套对象)</p><p>Hash 便于表示 <em>objects</em>，实际上，你可以放入一个 hash 的域数量实际上没有限制（除了可用内存以外）</p><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># \`HMSET\` 指令设置 hash 中的多个域：</span>
<span class="token operator">&gt;</span> hmset user:1001 username zhangsan birthday <span class="token number">1999</span> verified <span class="token number">1</span>
OK

<span class="token operator">&gt;</span> <span class="token builtin class-name">type</span> user:1001                    <span class="token comment"># hash</span>

<span class="token operator">&gt;</span> hget user:1001 username           <span class="token comment">#  &quot;zhangsan&quot;   \`HGET\` 取回单个域。</span>

<span class="token operator">&gt;</span> hmget user:1001 username other    <span class="token comment"># \`HMGET\` 和 \`HGET\` 类似，但返回一系列值：</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>


<span class="token operator">&gt;</span> hgetall user:1001
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;username&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;birthday&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;1999&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;verified&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>


<span class="token operator">&gt;</span> hincrby user age <span class="token number">2</span>             <span class="token comment">#累加属性</span>
<span class="token operator">&gt;</span> hincrbyfloat user age2.2       <span class="token comment">#累加属性</span>

<span class="token operator">&gt;</span> hlen user                      <span class="token comment">#有多少个属性</span>
<span class="token operator">&gt;</span> hexists user age               <span class="token comment">#判断属性是否存在</span>
<span class="token operator">&gt;</span> hkeys user                     <span class="token comment">#获得所有属性</span>
<span class="token operator">&gt;</span> hvals user                     <span class="token comment">#获得所有值</span>
<span class="token operator">&gt;</span> hdel user field1 field2        <span class="token comment">#删除指定的对象属性</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：</p><ul><li><p>hash这种数据结构，可以天然的帮助我们存储对象</p><p>例如登录之后，存储用户这个对象的信息，电商应用中，缓存购物车信息</p></li></ul><br><h3 id="_3-redis-lists" tabindex="-1"><a class="header-anchor" href="#_3-redis-lists"><span>3. Redis lists</span></a></h3>`,9),Sn={href:"http://redis.cn/topics/data-types-intro.html#lists",target:"_blank",rel:"noopener noreferrer"},Fn=t(`<p>list 按插入顺序排序的字符串元素的集合。 Redis lists基于Linked Lists实现。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
这意味着即使在一个list中有数百万个元素，在头部或尾部添加一个元素的操作，其时间复杂度也是常数级别的。
用LPUSH 命令在十个元素的list头部添加新元素，和在千万元素list头部添加新元素的速度相同。

那么，坏消息是什么？在数组实现的list中利用索引访问元素的速度极快，而同样的操作在linked list实现的list上没有那么快。

Redis Lists用linked list实现的原因是：对于数据库系统来说，至关重要的特性是：能非常快的在很大的列表上添加元素。
另一个重要因素是，正如你将要看到的：Redis lists能在常数时间取得常数长度。

如果快速访问集合元素很重要，建议使用可排序集合(sorted sets)。可排序集合我们会随后介绍。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
lpush list1 pig cow sheep chicken duck
lpush userList <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>         <span class="token comment">#构建一个list ,从左边开始存入数据(最后存入的数据在最左面)</span>
rpush userList <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>         <span class="token comment">#构建一个list ,从右边开始存入数据(最后存入的数据在最右面)</span>


llen list                        <span class="token comment">#list长度</span>
lindex list index                <span class="token comment">#获取list指定下标的值</span>
lset list index value            <span class="token comment">#把某个下标的值替换</span>

lrange list start end            <span class="token comment">#获得数据 (-1表示最后一个元素，-2表示list中的倒数第二个元素，以此类推)</span>


lpop                             <span class="token comment">#从左侧开始拿出(并删除)一个数据</span>
rpop                             <span class="token comment">#从右侧开始拿出(并删除)一个数据 </span>

lrem list num value              <span class="token comment">#删除num个相同的value</span>

ltrim list start end             <span class="token comment">#把list从左边截取指定长度,并赋值给原来的list</span>


linsert list before/after value newValue  <span class="token comment">#在value的前/后插入一个新的值</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：</p><ul><li>可以用作消息队列</li><li>可以用作消息未读清单（例如：bilibili）</li></ul><br><p><strong>key 的自动创建和删除</strong> :</p><p>目前为止，在我们的例子中，我们没有在推入元素之前创建空的 list，或者在 list 没有元素时删除它。在 list 为空时删除 key，并在用户试图添加元素（比如通过 <code>LPUSH</code>）而键不存在时创建空 list，是 Redis 的职责。</p><p>这不光适用于 lists，还适用于所有包括多个元素的 Redis 数据类型 – Sets, Sorted Sets 和 Hashes。</p><p>基本上，我们可以用三条规则来概括它的行为：</p><ol><li>当我们向一个聚合数据类型中添加元素时，如果目标键不存在，就在添加元素前创建空的聚合数据类型。</li><li>当我们从聚合数据类型中移除元素时，如果值仍然是空的，键自动被销毁。</li><li>对一个空的 key 调用一个只读的命令，比如 <code>LLEN</code> （返回 list 的长度），或者一个删除元素的命令，将总是产生同样的结果。该结果和对一个空的聚合类型做同个操作的结果是一样的。</li></ol><p>规则 1 示例：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token operator">&gt;</span> del mylist                       <span class="token comment"># (integer) 1</span>

<span class="token operator">&gt;</span> lpush mylist <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>               <span class="token comment"># (integer) 3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，我们不能对存在但类型错误的 key 做操作：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> foo bar 
OK 

<span class="token operator">&gt;</span> lpush foo <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> 
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> WRONGTYPE Operation against a key holding the wrong kind of value 

<span class="token operator">&gt;</span> <span class="token builtin class-name">type</span> foo 
string

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>规则 2 示例:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token operator">&gt;</span> lpush mylist <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>         <span class="token comment"># (integer) 3</span>

<span class="token operator">&gt;</span> exists mylist              <span class="token comment"># (integer) 1</span>

<span class="token operator">&gt;</span> lpop mylist                <span class="token comment"># &quot;3&quot;</span>
<span class="token operator">&gt;</span> lpop mylist                <span class="token comment"># &quot;2&quot;</span>
<span class="token operator">&gt;</span> lpop mylist                <span class="token comment"># &quot;1&quot;</span>

<span class="token operator">&gt;</span> exists mylist              <span class="token comment"># (integer) 0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有的元素被弹出之后， key 不复存在。</p><p>规则 3 示例:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token operator">&gt;</span> del mylist            <span class="token comment"># (integer) 0</span>

<span class="token operator">&gt;</span> llen mylist           <span class="token comment"># (integer) 0</span>

<span class="token operator">&gt;</span> lpop mylist           <span class="token comment"># (nil)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-redis-sets" tabindex="-1"><a class="header-anchor" href="#_4-redis-sets"><span>4. Redis Sets</span></a></h3>`,23),qn={href:"http://redis.cn/topics/data-types-intro.html#sets",target:"_blank",rel:"noopener noreferrer"},Tn=t(`<p>set 集合, Redis Set 是 String 的无序排列 (不重复且无序的字符串元素的集合)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># SADD 指令把新的元素添加到 set 中</span>
sadd set1 cow sheep pig duck sheep     <span class="token comment">#新建集合并向其中添加不重复的元素</span>

srandmember set1 <span class="token number">2</span>                     <span class="token comment">#随机获取集合中的两个元素</span>
smembers set1                          <span class="token comment">#查看全部集合元素</span>

scard set1                             <span class="token comment">#统计个数</span>
sismember set1 pig                     <span class="token comment">#判断pig是否为set1的元素 (一个特定的元素是否存在？)</span>

srem set1 pig                          <span class="token comment">#删除set1中的pig</span>
spop set1 <span class="token number">2</span>                            <span class="token comment">#随机删除两个元素</span>

smove set2 set1 <span class="token number">10</span>                     <span class="token comment">#将set2中的10转移到set1中</span>


<span class="token comment"># 求差集 （即剔除set1 中 set1和set2交集 的那部分）</span>
<span class="token comment"># 也可以说返回set1中存在而set2中不存在的元素 </span>
<span class="token function">sdiff</span> set1 set2                        

sinter set1 set2                       <span class="token comment">#求交集</span>
sunion set1 set2                       <span class="token comment">#求并集</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：</p><ul><li>利用随机的特性，可以帮助我们 抽奖、点名、投票等等</li><li>利用set的并集特性，求共同的好友，进行好友推荐等业务</li></ul><br><h3 id="_5-redis-sorted-sets" tabindex="-1"><a class="header-anchor" href="#_5-redis-sorted-sets"><span>5. Redis Sorted sets</span></a></h3>`,6),An={href:"http://redis.cn/topics/data-types-intro.html#sorted-sets",target:"_blank",rel:"noopener noreferrer"},On=t(`<p>Sorted sets are a data type which is similar to a mix between a Set and a Hash.</p><p>Like sets, sorted sets are composed of unique, non-repeating string elements, so in some sense a sorted set is a set as well.</p><p>every element in a sorted set is associated with a floating point value, called <em>the score</em> (this is why the type is also similar to a hash, since every element is mapped to a value).</p><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
zadd zset <span class="token number">10</span> value1 <span class="token number">20</span> value2 <span class="token number">30</span> value3            <span class="token comment">#设置member和对应的分数</span>

zrange zset <span class="token number">0</span> <span class="token parameter variable">-1</span>                                   <span class="token comment">#查看所有zset中的内容</span>
zrange zset <span class="token number">0</span> <span class="token parameter variable">-1</span> withscores                        <span class="token comment">#...带有分数</span>

zrank zset value                                   <span class="token comment">#获得对应的下标、The rank (or index) is 0-based</span>
zscore zset value                                  <span class="token comment">#获得对应的分数</span>

zcard zset                                         <span class="token comment">#统计个数</span>
zcount zset 分数1 分数2                             <span class="token comment">#统计个数[包含边界]</span>


zrangebyscore zset分数1 分数2                       <span class="token comment">#查询分数之间的member(包含分数1 分数2)</span>
zrangebyscore zset <span class="token punctuation">(</span>分数1 <span class="token punctuation">(</span>分数2                    <span class="token comment">#查询分数之间的member (不包含分数1和分数2 )</span>

<span class="token comment"># 查询分数之间的member(包含分数1 分数2) ,获得的结果集再次根据下标区间做查询</span>
zrangebyscore zset 分数1 分数2 limit start end      

zrem zset value                                    <span class="token comment">#删除member</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：</p><ul><li>积分排行榜、新闻排行榜、直播打赏排名等</li></ul><br><h2 id="六-java操作redis" tabindex="-1"><a class="header-anchor" href="#六-java操作redis"><span>六 Java操作redis</span></a></h2><h3 id="_1-java-for-redis" tabindex="-1"><a class="header-anchor" href="#_1-java-for-redis"><span>1. Java for Redis</span></a></h3><p>引入依赖：</p>`,11),Dn={href:"https://mvnrepository.com/artifact/redis.clients/jedis",target:"_blank",rel:"noopener noreferrer"},jn=t(`<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>
<span class="token comment">&lt;!-- https://mvnrepository.com/artifact/redis.clients/jedis --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SortedSetDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.5.150&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">&quot;itdrizzle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> ssk <span class="token operator">=</span> <span class="token string">&quot;sorted_set_key&quot;</span><span class="token punctuation">;</span>

        jedis<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span>ssk<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span> <span class="token number">88.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user2&quot;</span><span class="token punctuation">,</span> <span class="token number">56.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user3&quot;</span><span class="token punctuation">,</span> <span class="token number">75.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user4&quot;</span><span class="token punctuation">,</span> <span class="token number">85.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user5&quot;</span><span class="token punctuation">,</span> <span class="token number">68.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        jedis<span class="token punctuation">.</span><span class="token function">zadd</span><span class="token punctuation">(</span>ssk<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>ssk<span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;jedis.zrange(ssk, 0, -1) = &quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">zrange</span><span class="token punctuation">(</span>ssk<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;jedis.zrangeWithScores(ssk, 0, 2) = &quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">zrangeWithScores</span><span class="token punctuation">(</span>ssk<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;jedis.zrank(ssk, \\&quot;user2\\&quot;) = &quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">zrank</span><span class="token punctuation">(</span>ssk<span class="token punctuation">,</span> <span class="token string">&quot;user2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;jedis.zscore(ssk, \\&quot;user2\\&quot;) = &quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">zscore</span><span class="token punctuation">(</span>ssk<span class="token punctuation">,</span> <span class="token string">&quot;user2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;jedis.zcard(ssk) = &quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">zcard</span><span class="token punctuation">(</span>ssk<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;jedis.zcount(ssk, 60, 80) = &quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">zcount</span><span class="token punctuation">(</span>ssk<span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-springboot" tabindex="-1"><a class="header-anchor" href="#_2-springboot"><span>2. springboot</span></a></h3><ul><li>引入redis依赖，完成redis相关配置（pom文件和application.yaml）</li></ul><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--  引入 redis 依赖   --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 139.155.174.119
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>redisTemplate的基本使用</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">StringRedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                                   <span class="token comment">//判断是否有key所对应的值</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                        <span class="token comment">//取出key值所对应的值</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiGet</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span>                  <span class="token comment">//批量查询，对应mget</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>                 <span class="token comment">//设置当前的key以及value值</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> unit<span class="token punctuation">)</span>  <span class="token comment">//设置当前的key以及value值并且设置过期时间</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                                   <span class="token comment">//删除单个key值</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span>                                  <span class="token comment">//批量删除key,其中keys:Collection&lt;K&gt; keys</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">dump</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                                     <span class="token comment">//将当前传入的key值序列化为byte[]类型</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> unit<span class="token punctuation">)</span>                    <span class="token comment">//设置过期时间</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                                <span class="token comment">//返回剩余时间</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> increment<span class="token punctuation">)</span>       <span class="token comment">//设置自增</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//批量查询，管道pipeline</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">executePipelined</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RedisCallback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">doInRedis</span><span class="token punctuation">(</span><span class="token class-name">RedisConnection</span> connection<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">DataAccessException</span> <span class="token punctuation">{</span>
		<span class="token class-name">StringRedisConnection</span> src <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">StringRedisConnection</span><span class="token punctuation">)</span>connection<span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> k <span class="token operator">:</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			src<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Hash类型：是一个string类型的field和value的映射表，hash特别适合用于存储对象。</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> field<span class="token punctuation">)</span>                   <span class="token comment">//查看hash表中指定字段是否存在</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                            <span class="token comment">//获取所有hash表中字段</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                         <span class="token comment">//对应命令：HGETALL key，返回哈希表 key中，所有的域和值</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> field<span class="token punctuation">)</span>                      <span class="token comment">//获取变量key中的指定field</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> field<span class="token punctuation">,</span> value<span class="token punctuation">)</span>               <span class="token comment">//新增hash值</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putIfAbsent</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> field<span class="token punctuation">,</span> value<span class="token punctuation">)</span>       <span class="token comment">//新增hash值(仅当hashKey不存在时才设置)</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> maps<span class="token punctuation">)</span>                    <span class="token comment">//map集合的形式添加键值对</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> field<span class="token punctuation">,</span> increment<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//给哈希表key中的指定字段的整数值加上增量increment</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> fields<span class="token punctuation">)</span>                  <span class="token comment">//删除一个或者多个hash表字段</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List 类型</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                            <span class="token comment">//获取当前key的List列表长度</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span>                    <span class="token comment">//获取指定位置的值</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>               <span class="token comment">//获取列表指定范围内的元素(start开始位置, 0是开始位置，end 结束位置, -1返回所有)</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>                 <span class="token comment">//存储在list的头部，即添加一个就把它放在最前面的索引处</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>              <span class="token comment">//把多个值存入List中(value可以是多个值，也可以是一个Collection value)</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPushIfPresent</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>        <span class="token comment">//List存在的时候再加入</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> pivot<span class="token punctuation">,</span> value<span class="token punctuation">)</span>          <span class="token comment">//如果pivot存在则在pivot前面添加</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>               <span class="token comment">//设置指定索引处元素的值</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPop</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                        <span class="token comment">//移除并获取列表最后一个元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Set类型</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                             <span class="token comment">//获取集合的大小</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isMember</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>                  <span class="token comment">//判断集合是否包含value</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span>                      <span class="token comment">//添加元素</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span>                   <span class="token comment">//移除元素(单个值、多个值)</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>                              <span class="token comment">//删除并且返回一个随机的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Zset类型，ZSetOperations提供了一系列方法对有序集合进行操作(有序集合是按照元素的score值由小到大进行排列)</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForZSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> score<span class="token punctuation">)</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForZSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForZSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">incrementScore</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> delta<span class="token punctuation">)</span>                <span class="token comment">//增加元素的score值，并返回增加后的值</span>

redisTemplate<span class="token punctuation">.</span><span class="token function">opsForZSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rank</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>                                 <span class="token comment">//返回元素在集合的排名,有序集合是按照元素的score值由小到大排列</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForZSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverseRangeWithScores</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> start<span class="token punctuation">,</span>end<span class="token punctuation">)</span>           <span class="token comment">//获取集合中给定区间的元素(start 开始位置，end 结束位置)</span>
redisTemplate<span class="token punctuation">.</span><span class="token function">opsForZSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverseRangeByScore</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span>   <span class="token comment">//获取分数在最小和最大值之间的元素,在此基础上再返回指定区间的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function zn(wn,Bn){const a=l("ExternalLinkIcon");return p(),c("div",null,[v,n("p",null,[s("Redis官网："),n("a",k,[s("https://redis.io/"),e(a)])]),n("p",null,[s("AnotherRedisDesktopManager Gitee："),n("a",b,[s("https://gitee.com/qishibo/AnotherRedisDesktopManager/releases"),e(a)])]),h,g,n("p",null,[s("通过"),n("a",f,[s("redis官网"),e(a)]),s("下载上传至服务器，或通过wget直接下载")]),y,n("p",null,[s("Redis 命令中心："),n("a",_,[s("http://redis.cn/commands.html"),e(a)])]),n("p",null,[s("Redis Commands："),n("a",R,[s("https://redis.io/commands/"),e(a)])]),x,n("table",null,[S,n("tbody",null,[n("tr",null,[F,q,n("td",null,[n("a",T,[s("connection"),e(a)])])]),n("tr",null,[A,O,n("td",null,[n("a",D,[s("generic"),e(a)])])]),n("tr",null,[j,z,n("td",null,[n("a",w,[s("string"),e(a)])])]),n("tr",null,[B,E,n("td",null,[n("a",L,[s("list"),e(a)])])]),n("tr",null,[H,I,n("td",null,[n("a",C,[s("hash"),e(a)])])]),n("tr",null,[M,G,n("td",null,[n("a",P,[s("set"),e(a)])])]),n("tr",null,[N,K,n("td",null,[n("a",V,[s("sorted set）"),e(a)])])]),n("tr",null,[Z,J,n("td",null,[n("a",U,[s("hyperloglog"),e(a)])])]),n("tr",null,[X,W,n("td",null,[n("a",Y,[s("geo"),e(a)])])]),n("tr",null,[Q,$,n("td",null,[n("a",nn,[s("streams"),e(a)])])]),n("tr",null,[sn,an,n("td",null,[n("a",en,[s("transactions"),e(a)])])]),n("tr",null,[tn,ln,n("td",null,[n("a",pn,[s("scripting"),e(a)])])]),n("tr",null,[cn,on,n("td",null,[n("a",dn,[s("pubsub"),e(a)])])]),n("tr",null,[un,rn,n("td",null,[n("a",mn,[s("server"),e(a)])])]),n("tr",null,[vn,kn,n("td",null,[n("a",bn,[s("cluster"),e(a)])])])])]),hn,n("p",null,[s("REDIS data-types-intro："),n("a",gn,[s("http://redis.cn/topics/data-types-intro.html"),e(a)])]),fn,n("p",null,[s("二进制安全的字符串、Commands："),n("a",yn,[s("https://redis.io/commands/?group=string"),e(a)])]),_n,n("p",null,[s("REDIS data-types-intro："),n("a",Rn,[s("http://redis.cn/topics/data-types-intro.html#hashes"),e(a)])]),xn,n("p",null,[s("REDIS data-types-intro："),n("a",Sn,[s("http://redis.cn/topics/data-types-intro.html#lists"),e(a)])]),Fn,n("p",null,[s("REDIS data-types-intro："),n("a",qn,[s("http://redis.cn/topics/data-types-intro.html#sets"),e(a)])]),Tn,n("p",null,[s("REDIS data-types-intro："),n("a",An,[s("http://redis.cn/topics/data-types-intro.html#sorted-sets"),e(a)])]),On,n("p",null,[s("Maven Repository: redis.clients » jedis ："),n("a",Dn,[s("https://mvnrepository.com/artifact/redis.clients/jedis"),e(a)])]),jn])}const Hn=i(m,[["render",zn],["__file","redis.html.vue"]]),In=JSON.parse('{"path":"/tool/db/redis.html","title":"Redis数据缓存","lang":"en-US","frontmatter":{"order":-1,"title":"Redis数据缓存","description":"一 Redis安装与配置 Redis官网：https://redis.io/ AnotherRedisDesktopManager Gitee：https://gitee.com/qishibo/AnotherRedisDesktopManager/releases 1. Redis的安装 通过redis官网下载上传至服务器，或通过wget直接下载 不...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/tool/db/redis.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"Redis数据缓存"}],["meta",{"property":"og:description","content":"一 Redis安装与配置 Redis官网：https://redis.io/ AnotherRedisDesktopManager Gitee：https://gitee.com/qishibo/AnotherRedisDesktopManager/releases 1. Redis的安装 通过redis官网下载上传至服务器，或通过wget直接下载 不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-02T17:12:36.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-06-02T17:12:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis数据缓存\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-02T17:12:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"一 Redis安装与配置","slug":"一-redis安装与配置","link":"#一-redis安装与配置","children":[{"level":3,"title":"1. Redis的安装","slug":"_1-redis的安装","link":"#_1-redis的安装","children":[]},{"level":3,"title":"2. Redis基础配置","slug":"_2-redis基础配置","link":"#_2-redis基础配置","children":[]},{"level":3,"title":"3. Redis服务启动","slug":"_3-redis服务启动","link":"#_3-redis服务启动","children":[]},{"level":3,"title":"4. Redis命令中心","slug":"_4-redis命令中心","link":"#_4-redis命令中心","children":[]}]},{"level":2,"title":"二  Redis持久化配置","slug":"二-redis持久化配置","link":"#二-redis持久化配置","children":[{"level":3,"title":"1. RDB持久化","slug":"_1-rdb持久化","link":"#_1-rdb持久化","children":[]},{"level":3,"title":"2. AOF持久化","slug":"_2-aof持久化","link":"#_2-aof持久化","children":[]},{"level":3,"title":"3. 混合持久化","slug":"_3-混合持久化","link":"#_3-混合持久化","children":[]},{"level":3,"title":"4. 持久化选择","slug":"_4-持久化选择","link":"#_4-持久化选择","children":[]}]},{"level":2,"title":"三 Redis数据类型","slug":"三-redis数据类型","link":"#三-redis数据类型","children":[{"level":3,"title":"1. Redis Strings","slug":"_1-redis-strings","link":"#_1-redis-strings","children":[]},{"level":3,"title":"2. Redis Hashes","slug":"_2-redis-hashes","link":"#_2-redis-hashes","children":[]},{"level":3,"title":"3. Redis lists","slug":"_3-redis-lists","link":"#_3-redis-lists","children":[]},{"level":3,"title":"4. Redis Sets","slug":"_4-redis-sets","link":"#_4-redis-sets","children":[]},{"level":3,"title":"5. Redis Sorted sets","slug":"_5-redis-sorted-sets","link":"#_5-redis-sorted-sets","children":[]}]},{"level":2,"title":"六 Java操作redis","slug":"六-java操作redis","link":"#六-java操作redis","children":[{"level":3,"title":"1.  Java for Redis","slug":"_1-java-for-redis","link":"#_1-java-for-redis","children":[]},{"level":3,"title":"2. springboot","slug":"_2-springboot","link":"#_2-springboot","children":[]}]}],"git":{"createdTime":1717348356000,"updatedTime":1717348356000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":24.54,"words":7361},"filePathRelative":"tool/db/redis.md","localizedDate":"June 2, 2024","autoDesc":true}');export{Hn as comp,In as data};
