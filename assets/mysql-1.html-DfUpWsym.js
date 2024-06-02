import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as d,b as n,d as s,a,e as l}from"./app-CxJd8nF7.js";const o="/notebook/assets/image-20220318112150056-DbsZMOem.png",r="/notebook/assets/image-20220318084801233-C_a4B5Oi.png",p={},m=l('<h2 id="二-安装mysql" tabindex="-1"><a class="header-anchor" href="#二-安装mysql"><span>二 安装MySQL</span></a></h2><p>MySQL是一个C/S架构的软件，我们安装的MySQL 是服务端。MySQL 的客户端有很多，有自带的，有第三方的。</p><ul><li>命令行客户端</li><li>图形化界面的客户端 <ul><li>navicat</li><li>sql yog</li><li>dbeaver</li><li>workbench</li><li>…</li></ul></li></ul><br>',4),v={href:"https://dev.mysql.com/doc/refman/5.7/en/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://dev.mysql.com/doc/refman/8.0/en/",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),k={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},_=n("figure",null,[n("img",{src:o,alt:"image-20220318112150056",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20220318112150056")],-1),y=n("br",null,null,-1),g={href:"https://blog.csdn.net/drizzletowne/article/details/120896774",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),f=n("h3",{id:"_1-压缩包方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-压缩包方式"},[n("span",null,"1. 压缩包方式")])],-1),L=n("p",null,"下为Linux通用版本下载选项（Windows类似）：",-1),q=n("figure",null,[n("img",{src:r,alt:"image-20220318084801233",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20220318084801233")],-1),M=n("br",null,null,-1),E=n("strong",null,"Linux下的安装步骤",-1),I={href:"https://dev.mysql.com/doc/refman/5.7/en/binary-installation.html",target:"_blank",rel:"noopener noreferrer"},T=l(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token number">0</span>.  目标：将 mysql5.7 安装到  /usr/local/mysql <span class="token punctuation">(</span>不建议安装到其他位置，可能会导致socket连接失败<span class="token punctuation">)</span>

	准备：在/usr/local/ 目录下创建 mysql 和 software 目录
	

<span class="token number">1</span>. 下载 mysql的压缩包 <span class="token punctuation">(</span>或上传自己已下载的压缩包到指定目录即可<span class="token punctuation">)</span>
<span class="token builtin class-name">cd</span> /usr/local/software
<span class="token function">wget</span> http://dev.MySQL.com/get/Downloads/MySQL-5.7/mysql-5.7.37-Linux-glibc2.12-x86_64.tar.gz


<span class="token number">2</span>、解压并复制到 mysql目录

<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> mysql-5.7.37-Linux-glibc2.12-x86_64.tar.gz

<span class="token function">mv</span> ./mysql-5.7.37-linux-glibc2.12-x86_64/* /usr/local/mysql/



<span class="token number">3</span>、安装依赖、创建mysql用户组及其用户

yum <span class="token function">install</span> libaio   （Ubuntu使用：sudo <span class="token function">apt-get</span> <span class="token function">install</span> libaio1）

<span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> mysql <span class="token parameter variable">-s</span> /bin/false mysql



<span class="token number">4</span>、创建相关目录、设置权限、初始化mysql 

<span class="token builtin class-name">cd</span> /usr/local/mysql/

<span class="token function">mkdir</span> mysql-files
<span class="token function">chown</span> mysql:mysql mysql-files
<span class="token function">chmod</span> <span class="token number">750</span> mysql-files

bin/mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql  <span class="token comment"># 记住末尾自动生成的root密码 如：lZw.qSdCS7pV</span>
bin/mysql_ssl_rsa_setup
bin/mysqld_safe <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token operator">&amp;</span>


<span class="token number">5</span>. 配置环境变量
<span class="token function">vim</span> /etc/profile.d/mysql.sh  <span class="token comment"># 在里面加入: </span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/mysql/bin

<span class="token builtin class-name">source</span>  /etc/profile  <span class="token comment"># 使用source命令使修改立刻生效：  </span>


<span class="token number">6</span>. 将mysql添加到启动项

<span class="token function">cp</span> support-files/mysql.server /etc/init.d/mysql.server

<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> mysql.server  （ 或 systemctl <span class="token builtin class-name">enable</span> mysql.server）


<span class="token number">7</span>. 使用 （首次使用需要先修改密码）

mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>

mysql<span class="token operator">&gt;</span> alter user user<span class="token punctuation">(</span><span class="token punctuation">)</span> identified by <span class="token string">&quot;123456&quot;</span><span class="token punctuation">;</span>


<span class="token number">8</span>. 启动、关闭和重启
/etc/init.d/mysql.server start
/etc/init.d/mysql.server stop
/etc/init.d/mysql.server restart


<span class="token number">9</span>. 其他常用命令
<span class="token operator">&gt;</span>mysql status<span class="token punctuation">;</span>                            <span class="token comment"># 查看mysql基本信息</span>
<span class="token operator">&gt;</span>mysql SHOW VARIABLES LIKE <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>  <span class="token comment"># 查看数据库字符集相关设置信息</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 简单配置mysql</span>

<span class="token function">vi</span> /etc/my.cnf   <span class="token comment"># 添加如下信息：</span>

<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>

<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character-set-server<span class="token operator">=</span>utf8
default-storage-engine<span class="token operator">=</span>INNODB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【注意】关于Linux下没有my.cnf的情形：从5.7.18开始官方不再二进制包中提供my-default.cnf文件。</p><br><p><span style="font:normal bold 22px arial,sans-serif;color:blue;">Navicat无法连接Mysql时：</span></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token number">1</span>. 打开数据库：use mysql。检索 user 和 <span class="token function">host</span> 字段
mysql<span class="token operator">&gt;</span> use mysql<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> user, <span class="token function">host</span> from user<span class="token punctuation">;</span> 

<span class="token number">2</span>. 如果没有 <span class="token assign-left variable">user</span><span class="token operator">=</span>root ，host <span class="token operator">=</span> % 的用户，则执行下面语句：
mysql<span class="token operator">&gt;</span> update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;%&#39;</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>

<span class="token number">3</span>. 给 root 授权（所有权限）, 并让赋予的权限立即生效
mysql<span class="token operator">&gt;</span> GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span> WITH GRANT OPTION<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush   privileges<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>Windows下的安装步骤</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>将压缩包解压到需要安装的目录，然后执行以下步骤：

<span class="token number">1</span>. 新建配置文件 my.ini ，存放的路径为MySQL的根目录，文件内容如下：
    <span class="token punctuation">[</span>client<span class="token punctuation">]</span>
    <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>

    <span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
    default-character-set<span class="token operator">=</span>utf8

    <span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
    character-set-server<span class="token operator">=</span>utf8
    default-storage-engine<span class="token operator">=</span>INNODB
    <span class="token assign-left variable">explicit_defaults_for_timestamp</span><span class="token operator">=</span>true
    basedir <span class="token operator">=</span> D:<span class="token punctuation">\\</span>Develop<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>mysql-5.7.37
    datadir <span class="token operator">=</span> D:<span class="token punctuation">\\</span>Develop<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>mysql-5.7.37<span class="token punctuation">\\</span>data


<span class="token number">2</span>. 配置环境变量 （最好记得设置，不然大概率要出问题）

	打开MySQL的bin目录，复制此路径，添加到环境变量


<span class="token number">3</span>. 初始化MySQL（生成data目录）
	
	命令行执行如下命令：<span class="token punctuation">(</span>以下命名全部在以管理员模式打开的<span class="token punctuation">)</span>
	
	mysqld --initialize-insecure
	
	
<span class="token number">4</span>. 注册MySQL服务
	
	mysqld <span class="token parameter variable">-install</span>
	
	
<span class="token number">5</span>. 启动MySQL服务

	net start mysql


<span class="token number">6</span>. 修改默认账户密码

	mysqladmin <span class="token parameter variable">-u</span> root password <span class="token number">123456</span>


<span class="token number">7</span>. 登录使用 
	
	mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>


卸载MySQL：

	net stop mysql
	
	mysqld <span class="token parameter variable">-remove</span> mysql
	
	最后删除MySQL目录及相关的环境变量即可

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-rpm的方式" tabindex="-1"><a class="header-anchor" href="#_2-rpm的方式"><span>2. RPM的方式</span></a></h3><p>卸载MySQL：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span> 删除Mysql

   yum remove  mysql mysql-server mysql-libs mysql-server<span class="token punctuation">;</span>

   <span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql 将找到的相关东西delete掉<span class="token punctuation">(</span>rm <span class="token parameter variable">-rf</span> /var/lib/mysql<span class="token punctuation">)</span>；

   <span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> mysql<span class="token punctuation">(</span>查询出来的东东yum remove掉<span class="token punctuation">)</span>

   <span class="token function">rm</span> /etc/my.cnf

 
查看是否还有mysql软件：如果存在的话，继续删除即可。
<span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> mysql



a）查看系统中是否以rpm包安装的mysql：

<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql


b<span class="token punctuation">)</span>卸载mysql

<span class="token function">rpm</span> <span class="token parameter variable">-e</span> MySQL-server-5.6.17-1.el6.i686
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> MySQL-client-5.6.17-1.el6.i686


c<span class="token punctuation">)</span>删除mysql服务

<span class="token function">chkconfig</span> <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
<span class="token function">chkconfig</span> <span class="token parameter variable">--del</span> mysql


d<span class="token punctuation">)</span>删除分散mysql文件夹

<span class="token function">whereis</span> mysql 或者 <span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql

清空相关mysql的所有目录以及文件
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/share/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/my.cnf


通过以上几步，mysql应该已经完全卸载干净了.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-配置文件参数" tabindex="-1"><a class="header-anchor" href="#_3-配置文件参数"><span>3. 配置文件参数</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> 
mysql --help<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;my.cnf&#39;</span>      <span class="token comment"># 查看mysql默认读取my.cnf的目录</span>

<span class="token comment"># 如果没有设置使用指定目录的my.cnf，mysql启动时会读取安装目录根目录及默认目录下的my.cnf文件</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># my.cnf</span>

<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token comment">#########################################################################</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#                         MySQL客户端配置                               #</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#########################################################################</span>
port <span class="token operator">=</span> <span class="token number">3306</span> 
<span class="token comment"># MySQL客户端默认端口号 (如果客户端链接数据库时，没有指定端口号，则默认为3306)</span>

socket <span class="token operator">=</span> /data/mysql/my3306/mysql.sock
<span class="token comment"># 用于本地连接的Unix套接字文件存放路径</span>

default-character-set <span class="token operator">=</span> utf8mb4
<span class="token comment"># MySQL客户端默认字符集</span>

<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token comment">#########################################################################</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#                         MySQL命令行配置                               #</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#########################################################################</span>
auto-rehash
<span class="token comment"># 开启tab补齐功能</span>

socket <span class="token operator">=</span> /data/mysql/my3306/mysql.sock
<span class="token comment"># 用于本地连接的Unix套接字文件存放路径</span>

default-character-set <span class="token operator">=</span> utf8mb4
<span class="token comment"># MySQL客户端默认字符集</span>

max_allowed_packet <span class="token operator">=</span> 256M
<span class="token comment"># 指定在网络传输中一次消息传输量的最大值。系统默认值 为1MB，最大值是1GB，必须设置1024的倍数。</span>

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment">#########################################################################</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#                         MySQL服务端配置                               #</span>
<span class="token comment">#                                                                       #</span>
<span class="token comment">#########################################################################</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#               General                #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
port <span class="token operator">=</span> <span class="token number">3306</span>
<span class="token comment"># MySQL服务端默认监听的TCP/IP端口</span>

socket <span class="token operator">=</span> /data/mysql/my3306/mysql.sock
<span class="token comment"># 用于本地连接的Unix套接字文件存放路径</span>

pid_file <span class="token operator">=</span> /data/mysql/my3306/mysql.pid
<span class="token comment"># 进程ID文件存放路径</span>

basedir <span class="token operator">=</span> /app/mysql
<span class="token comment"># MySQL软件安装路径</span>

datadir <span class="token operator">=</span> /data/mysql/my3306
<span class="token comment"># MySQL数据文件存放路径</span>

tmpdir <span class="token operator">=</span> /data/mysql/my3306
<span class="token comment"># MySQL临时文件存放路径</span>

character_set_server <span class="token operator">=</span> utf8mb4
<span class="token comment"># MySQL服务端字符集</span>

collation_server <span class="token operator">=</span> utf8mb4_general_ci
<span class="token comment"># MySQL服务端校对规则</span>

default-storage-engine <span class="token operator">=</span> InnoDB
<span class="token comment"># 设置默认存储引擎为InnoDB</span>

autocommit <span class="token operator">=</span> OFF
<span class="token comment"># 默认为ON，设置为OFF，关闭事务自动提交</span>

transaction_isolation <span class="token operator">=</span> READ-COMMITTED
<span class="token comment"># MySQL支持4种事务隔离级别，他们分别是：</span>
<span class="token comment"># READ-UNCOMMITTED, READ-COMMITTED, REPEATABLE-READ, SERIALIZABLE.</span>
<span class="token comment"># 如没有指定，MySQL默认采用的是REPEATABLE-READ，ORACLE默认的是READ-COMMITTED</span>

event_scheduler <span class="token operator">=</span> ON 
<span class="token comment"># 开启事件调度器event_scheduler</span>

<span class="token comment">#explicit_defaults_for_timestamp = ON</span>
<span class="token comment"># 控制TIMESTAMP数据类型的特性，默认OFF，设置为ON，update 时timestamp列关闭自动更新。（将来会被废弃）</span>

lower_case_table_names <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 库名、表名是否区分大小写。默认为0，设置1，不区分大小写，创建的表、数据库都以小写形式存放磁盘。</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#       Network &amp; Connection           #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
max_connections <span class="token operator">=</span> <span class="token number">1000</span>
<span class="token comment"># MySQL允许的最大并发连接数，默认值151，如果经常出现Too Many Connections的错误提示，则需要增大此值。</span>

max_user_connections <span class="token operator">=</span> <span class="token number">1000</span>
<span class="token comment"># 每个数据库用户的最大连接，（同一个账号能够同时连接到mysql服务的最大连接数），默认为0，表示不限制。</span>

back_log <span class="token operator">=</span> <span class="token number">500</span>
<span class="token comment"># MySQL监听TCP端口时设置的积压请求栈大小，默认50+(max_connections/5)，最大不超过900</span>

max_connect_errors <span class="token operator">=</span> <span class="token number">10000</span>
<span class="token comment"># 每个主机的连接请求异常中断的最大次数。对于同一主机，如果有超出该参数值个数的中断错误连接，则该主机将被禁止连接。如需对该主机进行解禁，执行：FLUSH HOST。</span>

interactive_timeout <span class="token operator">=</span> <span class="token number">28800</span>
<span class="token comment"># 服务器关闭交互式连接前等待活动的秒数。交互式客户端定义为在mysql_real_connect()中使用CLIENT_INTERACTIVE选项的客户端。默认值：28800秒（8小时）</span>

wait_timeout <span class="token operator">=</span> <span class="token number">28800</span>
<span class="token comment"># 服务器关闭非交互连接之前等待活动的秒数。默认值：28800秒（8小时）</span>
<span class="token comment"># 指定一个请求的最大连接时间，当MySQL连接闲置超过一定时间后将会被强行关闭。对于4GB左右内存的服务器来说，可以将其设置为5~10。</span>
<span class="token comment"># 如果经常出现Too Many Connections的错误提示，或者show processlist命令发现有大量sleep进程，则需要同时减小interactive_timeout和wait_timeout值。</span>

connect_timeout <span class="token operator">=</span> <span class="token number">28800</span>
<span class="token comment"># 在获取连接时，等待握手的超时秒数，只在登录时生效。主要是为了防止网络不佳时应用重连导致连接数涨太快，一般默认即可。</span>

open_files_limit <span class="token operator">=</span> <span class="token number">5000</span>
<span class="token comment"># mysqld能打开文件的最大个数，默认最小1024，如果出现too mant open files之类的就需要增大该值。</span>

max_allowed_packet <span class="token operator">=</span> 256M
<span class="token comment"># 指定在网络传输中一次消息传输量的最大值。系统默认值 为1MB，最大值是1GB，必须设置1024的倍数。</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#          Thread &amp; Buffer             #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
sort_buffer_size <span class="token operator">=</span> 2M
<span class="token comment"># 排序缓冲区大小，connection级参数，默认大小为2MB。如果想要增加ORDER BY的速度，首先看是否可以让MySQL使用索引，其次可以尝试增大该值。</span>

read_buffer_size <span class="token operator">=</span> 160M
<span class="token comment"># 顺序读缓冲区大小，connection级参数，该参数对应的分配内存是每连接独享。对表进行顺序扫描的请求将分配一个读入缓冲区。</span>

read_rnd_buffer_size <span class="token operator">=</span> 160M
<span class="token comment"># 随机读缓冲区大小，connection级参数，该参数对应的分配内存是每连接独享。默认值256KB，最大值4GB。当按任意顺序读取行时，将分配一个随机读缓存区。</span>

join_buffer_size <span class="token operator">=</span> 320M
<span class="token comment"># 联合查询缓冲区大小，connection级参数，该参数对应的分配内存是每连接独享。</span>

bulk_insert_buffer_size <span class="token operator">=</span> 64M   
<span class="token comment"># 批量插入数据缓存大小，可以有效提高插入效率，默认为8M</span>

thread_cache_size <span class="token operator">=</span> <span class="token number">8</span>
<span class="token comment"># 服务器线程缓冲池中存放的最大连接线程数。默认值是8，断开连接时如果缓存中还有空间，客户端的线程将被放到缓存中，当线程重新被请求，将先从缓存中读取。</span>
<span class="token comment"># 根据物理内存设置规则如下：1G  —&gt; 8，2G  —&gt; 16，3G  —&gt; 32，大于3G  —&gt; 64</span>

thread_stack <span class="token operator">=</span> 256K
<span class="token comment"># 每个连接被创建时,mysql分配给它的内存。默认192KB，已满足大部分场景，除非必要否则不要动它，可设置范围128KB~4GB。</span>

query_cache_type <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment"># 关闭查询缓存</span>

query_cache_size <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment"># 查询缓存大小，在高并发，写入量大的系统，建议把该功能禁掉。</span>

query_cache_limit <span class="token operator">=</span> 4M    
<span class="token comment"># 指定单个查询能够使用的缓冲区大小，缺省为1M</span>

tmp_table_size <span class="token operator">=</span> 1024M
<span class="token comment"># MySQL的heap（堆积）表缓冲大小，也即内存临时表，默认大小是 32M。如果超过该值，则会将临时表写入磁盘。在频繁做很多高级 GROUP BY 查询的DW环境，增大该值。</span>
<span class="token comment"># 实际起限制作用的是tmp_table_size和max_heap_table_size的最小值。</span>

max_heap_table_size <span class="token operator">=</span> 1024M
<span class="token comment"># 用户可以创建的内存表(memory table)的大小，这个值用来计算内存表的最大行数值。</span>

table_definition_cache <span class="token operator">=</span> <span class="token number">400</span>
<span class="token comment"># 表定义缓存区，缓存frm文件。表定义(global)是全局的，可以被所有连接有效的共享。</span>

table_open_cache <span class="token operator">=</span> <span class="token number">1000</span>
<span class="token comment"># 所有SQL线程可以打开表缓存的数量，缓存ibd/MYI/MYD文件。 打开的表(session级别)是每个线程，每个表使用。</span>

table_open_cache_instances <span class="token operator">=</span> <span class="token number">4</span>
<span class="token comment"># 对table cache 能拆成的分区数，用于减少锁竞争，最大值64.</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#               Safety                 #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
<span class="token comment">#sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_AUTO_VALUE_ON_ZERO,ONLY_FULL_GROUP_BY</span>
sql_mode <span class="token operator">=</span> NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER
<span class="token comment"># MySQL支持的SQL语法模式，与其他异构数据库之间进行数据迁移时，SQL Mode组合模式会有帮助。</span>

local_infile <span class="token operator">=</span> OFF
<span class="token comment"># 禁用LOAD DATA LOCAL命令</span>

plugin-load <span class="token operator">=</span> validate_password.so
<span class="token comment"># 加密认证插件，强制mysql设置复杂密码</span>

skip-external-locking
<span class="token comment">#skip-locking </span>
<span class="token comment"># 避免MySQL的外部锁定，减少出错几率，增强稳定性。</span>

skip-name-resolve 
<span class="token comment"># 禁止MySQL对外部连接进行DNS解析，消除MySQL进行DNS解析。如果开启该选项，所有远程主机连接授权都要使用IP地址方式，否则MySQL将无法正常处理连接请求！</span>

<span class="token comment">#skip-networking </span>
<span class="token comment"># 不允许CP/IP连接，只能通过命名管道（Named Pipes）、共享内存（Shared Memory）或Unix套接字（Socket）文件连接。</span>
<span class="token comment"># 如果Web服务器以远程连接方式访问MySQL数据库服务器，则不要开启该选项，否则无法正常连接！</span>
<span class="token comment"># 适合应用和数据库共用一台服务器的情况，其他客户端无法通过网络远程访问数据库</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#                 Logs                 #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>
<span class="token comment">###################   General Log  ######################</span>
general_log <span class="token operator">=</span> OFF
<span class="token comment"># 关闭通用查询日志</span>

general_log_file <span class="token operator">=</span> /data/mysql/my3306/general.log
<span class="token comment"># 通用查询日志存放路径</span>

<span class="token comment">###################     Slow Log   ######################</span>
slow_query_log <span class="token operator">=</span> ON
<span class="token comment"># 开启慢查询日志</span>

slow_query_log_file <span class="token operator">=</span> /data/mysql/my3306/slow.log
<span class="token comment"># 慢查询日志存放路径</span>

long_query_time <span class="token operator">=</span> <span class="token number">10</span>
<span class="token comment"># 超过10秒的查询，记录到慢查询日志，默认值10</span>

log_queries_not_using_indexes <span class="token operator">=</span> ON
<span class="token comment"># 没有使用索引的查询，记录到慢查询日志，可能引起慢查询日志快速增长</span>

log_slow_admin_statements <span class="token operator">=</span> ON
<span class="token comment"># 执行缓慢的管理语句，记录到慢查询日志</span>
<span class="token comment"># 例如 ALTER TABLE, ANALYZE TABLE, CHECK TABLE, CREATE INDEX, DROP INDEX, OPTIMIZE TABLE, and REPAIR TABLE.</span>

<span class="token comment">###################     Error Log   ####################</span>
log_error <span class="token operator">=</span> /data/mysql/my3306/error.log
<span class="token comment"># 错误日志存放路径</span>

log_error_verbosity <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># 全局动态变量，默认3，范围：1～3</span>
<span class="token comment"># 表示错误日志记录的信息，1：只记录error信息；2：记录error和warnings信息；3：记录error、warnings和普通的notes信息</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#           Replication                #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>

<span class="token comment">###################     Bin Log    ######################</span>
server_id <span class="token operator">=</span> <span class="token number">6</span>
<span class="token comment"># 数据库服务器ID</span>

log_bin <span class="token operator">=</span> /data/mysql/my3306/binlog
<span class="token comment"># 二进制日志存放路径</span>

log_bin_index <span class="token operator">=</span> /data/mysql/my3306/binlog.index
<span class="token comment"># 同binlog，定义binlog的位置和名称</span>

binlog_format <span class="token operator">=</span> row
<span class="token comment"># binlog格式，复制有3种模式STATEMENT，ROW，MIXED</span>

expire_logs_days <span class="token operator">=</span> <span class="token number">10</span>
<span class="token comment"># 只保留最近10天的binlog日志</span>

max_binlog_size <span class="token operator">=</span> 50M
<span class="token comment"># 每个binlog日志文件的最大容量</span>

binlog_cache_size <span class="token operator">=</span> 2M
<span class="token comment"># 每个session分配的binlog缓存大小</span>
<span class="token comment"># 事务提交前产生的日志，记录到Cache中；事务提交后，则把日志持久化到磁盘</span>

log_slave_updates <span class="token operator">=</span> ON
<span class="token comment"># 开启log_slave_updates，从库的更新操作记录进binlog日志</span>

sync_binlog <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># sync_binlog=0（默认），事务提交后MySQL不刷新binlog_cache到磁盘，而让Filesystem自行决定，或者cache满了才同步。</span>
<span class="token comment"># sync_binlog=n，每进行n次事务提交之后，MySQL将binlog_cache中的数据强制写入磁盘。</span>

binlog_rows_query_log_events <span class="token operator">=</span> ON
<span class="token comment"># 将row模式下的sql语句，记录到binlog日志，默认是0(off)</span>

<span class="token comment">###################     Relay Log  ######################</span>
relay_log <span class="token operator">=</span> /data/mysql/my3306/relaylog
<span class="token comment"># 中继日志存放路径</span>

relay_log_index <span class="token operator">=</span> /data/mysql/my3306/relaylog.index
<span class="token comment"># 同relay_log，定义relay_log的位置和名称</span>

<span class="token comment">#binlog_checksum = CRC32</span>
<span class="token comment"># Session-Thread把Event写到Binlog时，生成checksum。默认为（NONE），兼容旧版本mysql。</span>

master_verify_checksum <span class="token operator">=</span> ON
<span class="token comment"># Dump-Thread读Binlog中的Event时，验证checksum</span>

slave_sql_verify_checksum <span class="token operator">=</span> ON
<span class="token comment"># 从库的I/O-Thread把Event写入Relaylog时，生成checksum；从库的SQL-Thread从Relaylog读Event时，验证checksum</span>

master_info_repository <span class="token operator">=</span> TABLE
relay_log_info_repository <span class="token operator">=</span> TABLE
<span class="token comment"># 将master.info和relay.info保存在表中，默认是Myisam引擎，官方建议改为Innodb引擎，防止表损坏后自行修复。 </span>

relay_log_purge <span class="token operator">=</span> ON 
relay_log_recovery <span class="token operator">=</span> ON
<span class="token comment"># 启用relaylog的自动修复功能，避免由于网络之类的外因造成日志损坏，主从停止。</span>

skip_slave_start <span class="token operator">=</span> OFF
<span class="token comment"># 重启数据库，复制进程默认不启动</span>

slave_net_timeout <span class="token operator">=</span> <span class="token number">5</span>
<span class="token comment"># 当master和slave之间的网络中断，slave的I/O-Thread等待5秒，重连master</span>

sync_master_info <span class="token operator">=</span> <span class="token number">10000</span>
<span class="token comment"># slave更新mysql.slave_master_info表的时间间隔</span>

sync_relay_log <span class="token operator">=</span> <span class="token number">10000</span>
sync_relay_log_info <span class="token operator">=</span> <span class="token number">10000</span>
<span class="token comment"># slave更新mysql.slave_relay_log_info表的时间间隔</span>

gtid_mode <span class="token operator">=</span> ON
enforce_gtid_consistency <span class="token operator">=</span> ON
<span class="token comment"># GTID即全局事务ID（global transaction identifier），GTID由UUID+TID组成的。</span>
<span class="token comment"># UUID是一个MySQL实例的唯一标识，TID代表了该实例上已经提交的事务数量，并且随着事务提交单调递增。</span>
<span class="token comment"># GTID能够保证每个MySQL实例事务的执行（不会重复执行同一个事务，并且会补全没有执行的事务）。下面是一个GTID的具体形式：</span>
<span class="token comment"># 4e659069-3cd8-11e5-9a49-001c4270714e:1-77</span>

auto_increment_offset  <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 双主复制中，2台服务器的自增长字段初值分别配置为1和2，取值范围是1 .. 65535</span>

auto_increment_increment <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># 双主复制中，2台服务器的自增长字段的每次递增值都配置为2，其默认值是1，取值范围是1 .. 65535</span>

<span class="token comment">########################################</span>
<span class="token comment">#                                      #</span>
<span class="token comment">#                InnoDB                #</span>
<span class="token comment">#                                      #</span>
<span class="token comment">########################################</span>

innodb_data_home_dir <span class="token operator">=</span> /data/mysql/my3306
<span class="token comment"># innodb表的数据文件目录</span>

innodb_file_per_table <span class="token operator">=</span> ON
<span class="token comment"># 使用独立表空间管理</span>

innodb_data_file_path <span class="token operator">=</span> ibdata1:1G:autoextend
<span class="token comment"># InnoDB共享表空间磁盘文件，存放数据字典、和在线重做日志</span>

innodb_log_group_home_dir <span class="token operator">=</span> /data/mysql/my3306
<span class="token comment"># 在事务被提交并写入到表空间磁盘文件上之前，事务数据存储在InnoDB的redo日志文件里。这些日志位于innodb_log_group_home_dir变量定义的目录中</span>

innodb_buffer_pool_size <span class="token operator">=</span> 2G
<span class="token comment"># InnoDB用于缓存数据、索引、锁、插入缓冲、数据字典的缓冲池。该值越大，缓存命中率越高，但是过大会导致页交换。</span>

innodb_buffer_pool_instances <span class="token operator">=</span> <span class="token number">8</span>
<span class="token comment"># 开启8个内存缓冲池，把需要缓冲的数据hash到不同的缓冲池中，这样可以并行的内存读写，降低并发导致的内部缓存访问冲突。</span>
<span class="token comment"># InnoDB缓存系统会把参数innodb_buffer_pool_size指定大小的缓存，平分为innodb_buffer_pool_instances个buffer_pool</span>

<span class="token comment">#innodb_additional_mem_pool_size = 16M</span>
<span class="token comment"># InnoDB存储数据字典、内部数据结构的缓冲池大小，类似于Oracle的library cache</span>

innodb_log_file_size <span class="token operator">=</span> 256M
<span class="token comment"># InnoDB redo log大小，对应于ib_logfile0文件。</span>
<span class="token comment"># ib_logfile* 是Innodb多版本缓冲的一个保证，该日志记录redo、undo信息，即commit之前的数据，用于rollback操作。</span>
<span class="token comment"># 官方文档的建议设置是innodb_log_file_size = innodb_buffer_pool_size/innodb_log_files_in_group</span>

innodb_log_buffer_size <span class="token operator">=</span> 64M
<span class="token comment"># redo日志所用的内存缓冲区大小</span>

innodb_log_files_in_group <span class="token operator">=</span> <span class="token number">4</span>
<span class="token comment"># redo日志文件数，默认值为2，日志是以顺序的方式写入。</span>

innodb_max_dirty_pages_pct <span class="token operator">=</span> <span class="token number">90</span>
<span class="token comment"># 缓存池中脏页的最大比例，默认值是75%，如果脏页的数量达到或超过该值，InnoDB的后台线程将开始缓存刷新。</span>
<span class="token comment"># “缓存刷新”是指InnoDB在找不到干净的可用缓存页或检查点被触发等情况下，InnoDB的后台线程就开始把“脏的缓存页”回写到磁盘文件中。</span>

innodb_flush_log_at_trx_commit <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#设置为0 ，每秒 write cache &amp; flush disk</span>
<span class="token comment">#设置为1 ，每次commit都 write cache &amp; flush disk</span>
<span class="token comment">#设置为2 ，每次commit都 write cache，然后根据innodb_flush_log_at_timeout（默认为1s）时间 flush disk</span>

innodb_lock_wait_timeout <span class="token operator">=</span> <span class="token number">10</span>
<span class="token comment"># InnoDB 有其内置的死锁检测机制，能导致未完成的事务回滚。但是，如果结合InnoDB使用MyISAM的lock tables语句或第三方事务引擎,则InnoDB无法识别死锁。</span>
<span class="token comment"># 为消除这种可能性，可以将innodb_lock_wait_timeout设置为一个整数值，指示MySQL在允许其他事务修改那些最终受事务回滚的数据之前要等待多长时间(秒数)。</span>

innodb_sync_spin_loops <span class="token operator">=</span> <span class="token number">40</span>
<span class="token comment"># 自旋锁的轮转数，可以通过show engine innodb status来查看。</span>
<span class="token comment"># 如果看到大量的自旋等待和自旋轮转，则它浪费了很多cpu资源。浪费cpu时间和无谓的上下文切换之间可以通过该值来平衡。</span>

innodb_support_xa <span class="token operator">=</span> ON
<span class="token comment"># 第一，支持多实例分布式事务（外部xa事务），这个一般在分布式数据库环境中用得较多。</span>
<span class="token comment"># 第二，支持内部xa事务，即支持binlog与innodb redo log之间数据一致性。</span>

<span class="token comment">#innodb_file_format = barracuda</span>
<span class="token comment"># InnoDB文件格式，Antelope是innodb-base的文件格式，Barracude是innodb-plugin后引入的文件格式，同时Barracude也支持Antelope文件格式。</span>

innodb_flush_method <span class="token operator">=</span> O_DIRECT
<span class="token comment"># 设置innodb数据文件及redo log的打开、刷写模式，fdatasync(默认)，O_DSYNC，O_DIRECT</span>
<span class="token comment"># 默认是fdatasync，调用fsync()去刷数据文件与redo log的buffer</span>
<span class="token comment"># 设置为为O_DSYNC时，innodb会使用O_SYNC方式打开和刷写redo log,使用fsync()刷写数据文件</span>
<span class="token comment"># 设置为O_DIRECT时，innodb使用O_DIRECT打开数据文件，使用fsync()刷写数据文件跟redo log</span>

innodb_strict_mode <span class="token operator">=</span> ON
<span class="token comment"># 开启InnoDB严格检查模式，在某些情况下返回errors而不是warnings，默认值是OFF</span>

innodb_checksum_algorithm <span class="token operator">=</span> strict_crc32
<span class="token comment"># checksum函数的算法，默认为crc32。可以设置的值有:innodb、crc32、none、strict_innodb、strict_crc32、strict_none</span>

innodb_status_file <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 启用InnoDB的status file，便于管理员查看以及监控</span>

innodb_open_files <span class="token operator">=</span> <span class="token number">3000</span>
<span class="token comment"># 限制Innodb能打开的表的数据，默认为300，数据库里的表特别多的情况，可以适当增大为1000。  </span>

innodb_thread_concurrency <span class="token operator">=</span> <span class="token number">8</span>
<span class="token comment"># 同时在Innodb内核中处理的线程数量。服务器有几个CPU就设置为几，建议默认值。</span>

innodb_thread_sleep_delay <span class="token operator">=</span> <span class="token number">500</span>

<span class="token comment">#innodb_file_io_threads = 16</span>
<span class="token comment"># 文件读写I/O数，这个参数只在Windows上起作用。在LINUX上只会等于４，默认即可。</span>

innodb_read_io_threads <span class="token operator">=</span> <span class="token number">16</span>
<span class="token comment"># 设置read thread(读线程个数，默认是4个)</span>

innodb_write_io_threads <span class="token operator">=</span> <span class="token number">16</span>
<span class="token comment"># 设置write thread(写线程个数，默认是4个)</span>

innodb_io_capacity <span class="token operator">=</span> <span class="token number">2000</span>
<span class="token comment"># 磁盘io的吞吐量，默认值是200.对于刷新到磁盘页的数量，会按照inodb_io_capacity的百分比来进行控制。</span>

log_bin_trust_function_creators <span class="token operator">=</span> <span class="token number">1</span>                   
<span class="token comment"># 开启log-bin后可以随意创建function，存在潜在的数据安全问题。</span>

innodb_purge_threads <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 使用独立线程进行purge操作。</span>
<span class="token comment"># 每次DML操作都会生成Undo页，系统需要定期对这些undo页进行清理，这称为purge操作。</span>

innodb_purge_batch_size <span class="token operator">=</span> <span class="token number">32</span>
<span class="token comment"># 在进行full purge时，回收Undo页的个数，默认是20，可以适当加大。</span>

innodb_old_blocks_pct <span class="token operator">=</span> <span class="token number">75</span>
<span class="token comment"># LRU算法，默认值是37，插入到LRU列表端的37%，差不多3/8的位置。</span>
<span class="token comment"># innodb把midpoint之后的列表称为old列表，之前的列表称为new列表，可以理解为new列表中的页都是最为活跃的热点数据。</span>

innodb_change_buffering <span class="token operator">=</span> all
<span class="token comment"># 用来开启各种Buffer的选项。该参数可选的值为：inserts、deletes、purges、changes、all、none。</span>
<span class="token comment"># changes表示启用inserts和deletes，all表示启用所有，none表示都不启用。该参数默认值为all。</span>

<span class="token punctuation">[</span>mysqldump<span class="token punctuation">]</span>                        
max_allowed_packet <span class="token operator">=</span> 256M

quick
<span class="token comment"># mysqldump导出大表时很有用，强制从服务器查询取得记录直接输出，而不是取得所有记录后将它们缓存到内存中。</span>

<span class="token punctuation">[</span>mysqlhotcopy<span class="token punctuation">]</span>
interactive-timeout

<span class="token punctuation">[</span>mysqld_safe<span class="token punctuation">]</span>
<span class="token comment">#ledir = /app/mysql/bin</span>
<span class="token comment"># 包含mysqld程序的软件安装路径，用该选项来显式表示服务器位置。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_1-dcl用户权限" tabindex="-1"><a class="header-anchor" href="#_1-dcl用户权限"><span>1. DCL用户权限</span></a></h2><p>DCL（Data Control Language）， 数据控制语言，用来定义<strong>访问权限和安全级别</strong> ，下为常用的一些用户管理命令：</p><p><strong>创建、删除用户</strong>:</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code># 创建用户
create user 用户名@指定ip identified by 密码;
# 例：（ % 表示任意IP均可登陆）
create user test123@localhost IDENTIFIED by &#39;123123&#39;;
create user test456@10.4.10.18 IDENTIFIED by &#39;123123&#39;;
create user test789@&#39;%&#39; IDENTIFIED by &#39;123123&#39;;

# 删除用户
drop user 用户名@IP;
# 例：
drop user test123@localhost;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>用户权限设置</strong>:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># 用户授权：(给指定用户授予指定指定数据库指定权限)</span>
<span class="token keyword">grant</span> 权限<span class="token number">1</span><span class="token punctuation">,</span>权限<span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">on</span> 数据库名<span class="token punctuation">.</span><span class="token operator">*</span>  <span class="token keyword">to</span>  用户名<span class="token variable">@IP</span><span class="token punctuation">;</span> 
<span class="token comment"># 例：</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span><span class="token punctuation">,</span><span class="token keyword">insert</span><span class="token punctuation">,</span><span class="token keyword">update</span><span class="token punctuation">,</span><span class="token keyword">delete</span><span class="token punctuation">,</span><span class="token keyword">create</span> <span class="token keyword">on</span> student<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;user1&#39;</span><span class="token variable">@&#39;127.0.0.1&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;user2&#39;</span><span class="token variable">@&#39;127.0.0.1&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 用户权限查询：</span>
<span class="token keyword">show</span> grants <span class="token keyword">for</span> 用户名<span class="token variable">@IP</span><span class="token punctuation">;</span>
<span class="token comment"># 例：</span>
<span class="token keyword">show</span> grants <span class="token keyword">for</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 撤销用户权限：</span>
<span class="token keyword">revoke</span> 权限<span class="token number">1</span><span class="token punctuation">,</span>权限<span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>权限n <span class="token keyword">on</span> 数据库名<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> 用户名<span class="token variable">@IP</span><span class="token punctuation">;</span>
<span class="token comment"># 例：</span>
<span class="token keyword">REVOKE</span> <span class="token keyword">SELECT</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_8-常用数据类型" tabindex="-1"><a class="header-anchor" href="#_8-常用数据类型"><span>8. 常用数据类型</span></a></h3><table><thead><tr><th style="text-align:center;">常用数据类型</th><th style="text-align:center;">大小（bytes）</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">int</td><td style="text-align:center;">4</td><td>整型 （-2 147 483 648，2 147 483 647）±21亿</td></tr><tr><td style="text-align:center;">double</td><td style="text-align:center;">8</td><td>浮点型，例如double(5,2)表示最多5位，其中必须有2位小数，即最大值为 999.99</td></tr><tr><td style="text-align:center;">char</td><td style="text-align:center;">0-255</td><td>固定长度字符串类型； <code>char(10) &#39;aaa&#39; </code> 占10个字符的位置</td></tr><tr><td style="text-align:center;">varchar</td><td style="text-align:center;">0-65535</td><td>可变长度字符串类型； <code>varchar(10) &#39;aaa&#39;</code>占3字符</td></tr><tr><td style="text-align:center;">text</td><td style="text-align:center;">0-65535</td><td>字符串类型，比如小说信息</td></tr><tr><td style="text-align:center;">blob</td><td style="text-align:center;">0-65535</td><td>字节类型，保存文件信息(视频，音频，图片)</td></tr><tr><td style="text-align:center;">date</td><td style="text-align:center;">3</td><td>日期类型，格式为：yyyy-MM-dd</td></tr><tr><td style="text-align:center;">time</td><td style="text-align:center;">3</td><td>时间类型，格式为：hh:mm:ss</td></tr><tr><td style="text-align:center;">timestamp</td><td style="text-align:center;">4</td><td>时间戳类型 yyyy-MM-dd hh:mm:ss 会自动赋值</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">8</td><td>日期时间类型 yyyy-MM-dd hh:mm:ss</td></tr></tbody></table><br><p>MySQL支持的数据类型非常多，选择正确的数据类型对于获得高性能至关重要。</p><p>不管存储哪种类型的数据，下面几个简单的原则都有助于做出更好的选择。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token number">1.</span> 更小的通常更好。
一般情况下，应该尽量使用可以正确存储数据的最小数据类型<span class="token punctuation">.</span> 
更小的数据类型通常更快，因为它们占用更少的磁盘、内存和CPU缓存，并且处理时需要的CPU周期也更少。
<span class="token punctuation">(</span>如果无法确定哪个数据类型是最好的，就选择你认为不会超过范围的最小类型。<span class="token punctuation">)</span>

<span class="token number">2.</span> 简单就好
简单数据类型的操作通常需要更少的CPU周期。
例如，整型比字符操作代价更低，因为字符集和校对规则（排序规则）使字符比较比整型比较更复杂。
这里有两个例子：
一个是应该使用MySQL内建的类型而不是字符串来存储日期和时间，
另外一个是应该用整型存储IP地址

<span class="token number">3.</span> 尽量避免<span class="token boolean">NULL</span>
很多表都包含可为<span class="token boolean">NULL</span> （空值）的列，即使应用程序并不需要保存<span class="token boolean">NULL</span> 也是如此，这是因为可为<span class="token boolean">NULL</span> 是列的默认属性 。
通常情况下最好指定列为 <span class="token operator">NOT</span> <span class="token boolean">NULL</span> ，除非真的需要存储<span class="token boolean">NULL</span> 值。
通常把可为<span class="token boolean">NULL</span> 的列改为<span class="token operator">NOT</span> <span class="token boolean">NULL</span> 带来的性能提升比较小，所以（调优时）没有必要首先在现有<span class="token keyword">schema</span>中查找并修改掉这种情
况，除非确定这会导致问题。但是，如果计划在列上建索引，就应该尽量避免设计成可为<span class="token boolean">NULL</span>的列。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>DATETIME 和TIMESAMP 列都可以存储相同类型的数据：时间和日期，精确到秒。
然而TIMESTAMP 只使用DATETIME 一半的存储空间，并且会根据时区变化，具有特殊的自动更新能力。
另一方面，TIMESTAMP 允许的时间范围要小得多，有时候它的特殊能力会成为障碍。

MySQL为了兼容性支持很多别名，例如INTEGER、BOOL ，以及NUMERIC 。
它们都只是别名。这些别名可能令人不解，但不会影响性能。
如果建表时采用数据类型的别名，然后用SHOW CREATE TABLE 检查，会发现MySQL报告的是基本类型，而不是别名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-数字类型" tabindex="-1"><a class="header-anchor" href="#_1-数字类型"><span>1) 数字类型</span></a></h3><p>有两种类型的数字：整数（whole number）和实数（real number）</p><br><p><strong>整数类型</strong>：TINYINT，SMALLINT，MEDIUMINT，INT，BIGINT 。分别使用 8，16，24，32，64位存储空间</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>整数类型有可选的<span class="token keyword">UNSIGNED</span> 属性，表示不允许负值，这大致可以使正数的上限提高一倍。
例如 <span class="token keyword">TINYINT</span> <span class="token keyword">UNSIGNED</span> 可以存储的范围是<span class="token number">0</span>～<span class="token number">255</span>，而 <span class="token keyword">TINYINT</span> 的存储范围是 −<span class="token number">128</span>～<span class="token number">127</span>。

有符号和无符号类型使用相同的存储空间，并具有相同的性能，因此可以根据实际情况选择合适的类型

你的选择可以决定MySQL是怎么在内存和磁盘中保存数据的。
然而，整数计算一般使用<span class="token number">64</span>位的<span class="token keyword">BIGINT</span> 整数，即使在<span class="token number">32</span>位环境也是如此（一些聚合函数是例外，它们使用 <span class="token keyword">DECIMAL</span> 或 <span class="token keyword">DOUBLE</span> 进行计算）


MySQL可以为整数类型指定宽度，例如<span class="token keyword">INT</span>（<span class="token number">11</span>） ，对大多数应用这是没有意义的：
它不会限制值的合法范围，只是规定了MySQL的一些交互工具（例如MySQL命令行客户端）用来显示字符的个数。
对于存储和计算来说，<span class="token keyword">INT</span>（<span class="token number">1</span>） 和<span class="token keyword">INT</span>（<span class="token number">20</span>） 是相同的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>实数类型</strong>：实数是带有小数部分的数字。</p><p>然而，它们不只是为了存储小数部分；也可以使用DECIMAL 存储比BIGINT 还大的整数。MySQL既支持精确类型，也支持不精确类型。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">FLOAT</span> 和 <span class="token keyword">DOUBLE</span> 类型支持使用标准的浮点运算进行近似计算。
<span class="token comment">-- 如果需要知道浮点运算是怎么计算的，则需要研究所使用的平台的浮点数的具体实现。</span>

<span class="token keyword">DECIMAL</span> 类型用于存储精确的小数。在MySQL <span class="token number">5.0</span>和更高版本，<span class="token keyword">DECIMAL</span> 类型支持精确计算。
<span class="token comment">-- MySQL 4.1以及更早版本则使用浮点运算来实现DECIAML 的计算，这样做会因为精度损失导致一些奇怪的结果。</span>
<span class="token comment">-- 在这些版本的MySQL中，DECIMAL 只是一个“存储类型”。</span>

因为CPU不支持对<span class="token keyword">DECIMAL</span> 的直接计算，所以在MySQL <span class="token number">5.0</span>以及更高版本中，MySQL服务器自身实现了<span class="token keyword">DECIMAL</span> 的高精度计算。
相对而言，CPU直接支持原生浮点计算，所以浮点运算明显更快。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>
有多种方法可以指定浮点列所需要的精度，这会使得MySQL悄悄选择不同的数据类型，或者在存储时对值进行取舍。
这些精度定义是非标准的，所以我们建议只指定数据类型，不指定精度。

浮点类型在存储同样范围的值时，通常比<span class="token keyword">DECIMAL</span> 使用更少的空间。
<span class="token keyword">FLOAT</span> 使用<span class="token number">4</span>个字节存储。<span class="token keyword">DOUBLE</span> 占用<span class="token number">8</span>个字节，相比<span class="token keyword">FLOAT</span>有更高的精度和更大的范围。和整数类型一样，能选择的只是存储类型；


MySQL使用 <span class="token keyword">DOUBLE</span> 作为内部浮点计算的类型。
因为需要额外的空间和计算开销，所以应该尽量只在对小数进行精确计算时才使用 <span class="token keyword">DECIMAL</span> <span class="token comment">-- 例如存储财务数据。</span>

但在数据量比较大的时候，可以考虑使用 <span class="token keyword">BIGINT</span> 代替 <span class="token keyword">DECIMAL</span> ，将需要存储的货币单位根据小数的位数乘以相应的倍数即可。
<span class="token comment">-- 假设要存储财务数据精确到万分之一分，则可以把所有金额乘以一百万，然后将结果存储在 BIGINT 里，</span>
<span class="token comment">-- 这样可以同时避免 浮点存储计算不精确 和 DECIMAL 精确计算代价高 的问题。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-字符串类型" tabindex="-1"><a class="header-anchor" href="#_2-字符串类型"><span>2) 字符串类型</span></a></h3><p>VARCHAR 和 CHAR 是两种最主要的字符串类型。</p><p>不幸的是，很难精确地解释这些值是怎么存储在磁盘和内存中的，因为这跟存储引擎的具体实现有关。</p><br><p>先看看 InnoDB 或者MyISAM 通常 怎么存储 VARCHAR 和 CHAR 值在磁盘上 ：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">VARCHAR</span> 类型用于存储可变长字符串，是最常见的字符串数据类型。
它比定长类型更节省空间，因为它仅使用必要的空间（例如，越短的字符串使用越少的空间）。
<span class="token comment">-- 有一种情况例外，如果MySQL表使用ROW_FORMAT=FIXED 创建的话，每一行都会使用定长存储，这会很浪费空间。</span>

<span class="token keyword">VARCHAR</span> 需要使用<span class="token number">1</span>或<span class="token number">2</span>个额外字节记录字符串的长度：
<span class="token comment">-- 如果列的最大长度小于或等于255字节，则只使用1个字节表示，否则使用2个字节。</span>
<span class="token comment">-- 假设采用latin1字符集，一个VARCHAR（10） 的列需要11个字节的存储空间。</span>
<span class="token comment">-- VARCHAR（1000） 的列则需要1002个字节，因为需要2个字节存储长度信息。</span>


<span class="token keyword">VARCHAR</span> 节省了存储空间，所以对性能也有帮助。
但是，由于行是变长的，在<span class="token keyword">UPDATE</span> 时可能使行变得比原来更长，这就导致需要做额外的工作。
如果一个行占用的空间增长，并且在页内没有更多的空间可以存储，在这种情况下，不同的存储引擎的处理方式是不一样的。
例如，MyISAM会将行拆成不同的片段存储，<span class="token keyword">InnoDB</span>则需要分裂页来使行可以放进页内。其他一些存储引擎也许从不在原数据位置更新数据


下面这些情况下使用 <span class="token keyword">VARCHAR</span> 是合适的：
<span class="token number">1.</span> 字符串列的最大长度比平均长度大很多；
<span class="token number">2.</span> 列的更新很少，所以碎片不是问题；
<span class="token number">3.</span> 使用了像 UTF<span class="token operator">-</span><span class="token number">8</span> 这样复杂的字符集，每个字符都使用不同的字节数进行存储。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>CHAR 类型是定长的：MySQL总是根据定义的字符串长度分配足够的空间。当存储CHAR 值时，MySQL会删除所有的末尾空格

CHAR 适合存储很短的字符串，或者所有值都接近同一个长度。例如，
-- 1. CHAR 非常适合存储密码的MD5 值，因为这是一个定长的值。
-- 2. 对于经常变更的数据，CHAR 也比VARCHAR 更好，因为定长的CHAR 类型不容易产生碎片。
-- 3. 对于非常短的列，CHAR 比VARCHAR 在存储空间上也更有效率。
--    例如用CHAR（1） 来存储只有Y和N的值，如果采用单字节字符集只需要一个字节，
--    但是VARCHAR（1） 却需要两个字节，因为还有一个记录长度的额外字节。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-enum-set" tabindex="-1"><a class="header-anchor" href="#_3-enum-set"><span>3) enum&amp;set</span></a></h3><br><h3 id="_4-时间和日期" tabindex="-1"><a class="header-anchor" href="#_4-时间和日期"><span>4) 时间和日期</span></a></h3><br><h2 id="_9-备份与恢复" tabindex="-1"><a class="header-anchor" href="#_9-备份与恢复"><span>9. 备份与恢复</span></a></h2><ul><li><p>备份</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-- 直接在cmd命令下（配置环境变量，如果没有配置，那么就是在MySQL的bin目录下）
mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> dbName<span class="token operator">&gt;</span>path<span class="token punctuation">\\</span>dbName.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>恢复</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-- 连接上MySQL服务器
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>

-- 选中数据库
use dbName<span class="token punctuation">;</span>

-- 恢复数据
<span class="token builtin class-name">source</span> path<span class="token punctuation">\\</span>dbName.sql<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><br><h2 id="四-数据库设计" tabindex="-1"><a class="header-anchor" href="#四-数据库设计"><span>四 数据库设计</span></a></h2><h3 id="_1-数据完整性" tabindex="-1"><a class="header-anchor" href="#_1-数据完整性"><span>1. 数据完整性</span></a></h3><p>数据完整性是数据库制定的了一些规范，是为了防止用户错误的输入（防止数据库出现错误的数据）</p><ul><li><p><strong>数据库的完整性</strong>：保证存放到数据库中的数据是有效的,</p><p>=&gt; 在创建表时给表中添加约束</p><br></li><li><p><strong>实体完整性</strong>：标识每一行数据不重复</p><p>实体完整性指的是数据库表中存在记录应该不重复出现，是唯一的。</p><p>实体：即表中的一行(一条记录)代表一个实体（entity）</p><p>约束类型：<em>主键约束（primary key）</em>、 <em>唯一约束 (unique)</em> 、 <em>自动增长列 (auto_increment)</em></p><br></li><li><p><strong>域完整性</strong>：限制此单元格的数据正确</p><p>域完整性是指数据库表中的每一个字段都应该有自己的约束。这种约束大多数是数据类型，这句话的意思是表中的每一列都应该有自己的数据类型，还有一些关键字也可以约束。</p><p>域完整性约束：数据类型 、非空约束（not null）、 默认值约束(default）</p><br></li><li><p><strong>引用完整性（参照完整性）</strong>：指外键</p><p>外键约束：FOREIGN KEY</p></li></ul><br><p>常见约束：</p><table><thead><tr><th>约束</th><th>说明</th></tr></thead><tbody><tr><td>null / not null</td><td>字段是否可以为空</td></tr><tr><td>default</td><td>如果一个字段没有值，则使用默认值</td></tr><tr><td>auto_increment</td><td>字段值从1开始，每次递增1，不会重复</td></tr><tr><td>primary key</td><td>定义列为主键</td></tr><tr><td>unique</td><td>唯一键：不能重复，但可以为空</td></tr><tr><td>comment</td><td>注释信息</td></tr></tbody></table><br><p>语法示例：</p><p><strong>主键约束（primary key）</strong>：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code># 1. 在 CREATE TABLE 语句中，通过 PRIMARY KEY 关键字来指定主键
&lt;字段名&gt; &lt;数据类型&gt; PRIMARY KEY [默认值]

# 2. 或者是在定义完所有字段之后指定主键：
[CONSTRAINT &lt;约束名&gt;] PRIMARY KEY [字段名]

# 3. 在创建表时设置联合主键（所谓的联合主键，就是这个主键是由一张表中多个字段组成的）
PRIMARY KEY [字段1，字段2，…,字段n]

# 4. 在修改表时添加主键约束
ALTER TABLE &lt;数据表名&gt; ADD PRIMARY KEY(&lt;字段名&gt;);

# 删除主键约束
ALTER TABLE &lt;数据表名&gt; DROP PRIMARY KEY;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>唯一约束 (unique)</strong>：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code># 1. 在创建表时设置唯一约束
&lt;字段名&gt; &lt;数据类型&gt; UNIQUE

# 2. 在修改表时添加唯一约束
ALTER TABLE &lt;数据表名&gt; ADD CONSTRAINT &lt;唯一约束名&gt; UNIQUE(&lt;列名&gt;);

# 删除唯一约束
ALTER TABLE &lt;表名&gt; DROP INDEX &lt;唯一约束名&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>自动增长列 (auto_increment)</strong>：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code># 1. 给字段添加 AUTO_INCREMENT 属性来实现主键自增长
字段名 数据类型 AUTO_INCREMENT

# 2. 指定自增字段初始值
CREATE TABLE tb_student2 (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    PRIMARY KEY(ID)
)AUTO_INCREMENT=100;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>默认情况下，AUTO_INCREMENT 的初始值是 1，每新增一条记录，字段值自动加 1。</li><li>一个表中只能有一个字段使用 AUTO_INCREMENT 约束，且该字段必须有唯一索引，以避免序号重复（即为主键或主键的一部分）</li><li>AUTO_INCREMENT 约束的字段必须具备 NOT NULL 属性。</li><li>AUTO_INCREMENT 约束的字段只能是整数类型（TINYINT、SMALLINT、INT、BIGINT 等）。</li><li>AUTO_INCREMENT 约束字段的最大值受该字段的数据类型约束，如果达到上限，AUTO_INCREMENT 就会失效。</li></ul><br><p><strong>外键约束（foreign key）</strong>:</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>[CONSTRAINT &lt;外键名&gt;] FOREIGN KEY 字段名 [，字段名2，…] REFERENCES &lt;主表名&gt; 主键列1 [，主键列2，…]
#例：
constraint fk_score_sid foreign key(sid) references student(id) );

# 删除外键约束
ALTER TABLE &lt;表名&gt; DROP FOREIGN KEY &lt;外键约束名&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用外键会影响效率：</p><p>在插入子行的数据的时候，会去父表中查询。在删除父表中的数据的时候，会去子表中查询数据是否被使用。</p><p>在工作中，一般很少使用外键。外键虽然可以保证我们数据的正确性，但是会比较大程度上的影响效率。</p><br><h3 id="_2-三大范式" tabindex="-1"><a class="header-anchor" href="#_2-三大范式"><span>2. 三大范式</span></a></h3><ul><li><p>第一范式：指每一列保持 <span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>原子性</strong></span>（每一列都是不可分割的基本数据，同一列中不能有多个值）每一个属性不可再分</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token operator">/</span><span class="token operator">*</span> 所谓第一范式（<span class="token number">1</span>NF<span class="token punctuation">)</span>是指在关系模型中，对域添加的一个规范要求，所有的域都应该是原子性的，
	即数据库表的每一列都是不可分割的原子数据项，而不能是集合，数组，记录等非原子数据项。
	即当实体中的某个属性有多个值时，必须将其拆分为不同的属性。
	
	在符合第一范式（<span class="token number">1</span>NF<span class="token punctuation">)</span>表中的每个域值只能是实体的一个属性或一个属性的一部分。
	简而言之，第一范式就是无重复的域。
	
	需要注意的是，在任何一个关系型数据库中，第一范式（<span class="token number">1</span>NF）是对关系模式的设计基本要求，一般设计时都必须满足第一范式<span class="token punctuation">(</span><span class="token number">1</span>NF<span class="token punctuation">)</span>。
	不过有些关系模型中突破了<span class="token number">1</span>NF的限制，这种称为非<span class="token number">1</span>NF的关系模型。
	换句话说，是否必须满足<span class="token number">1</span>NF的最低要求，主要依赖于所使用的关系模型。
	不满足<span class="token number">1</span>NF的数据库就不是关系数据库。满足<span class="token number">1</span>NF的表必须要有主键且每个属性不可再分

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br></li><li><p>第二范式：确保数据库表中的每一列都和主键相关，而不能只与主键的某一部分相关（主要针对联合主键而言）</p><p>即指记录的<strong>唯一性</strong>。要求数据库表中的每个实例或行必须可以被唯一地区分。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token operator">/</span><span class="token operator">*</span>第二范式（<span class="token number">2</span>NF）要求数据库表中的每个实例或行必须可以被唯一地区分。
 为实现区分通常需要为表加上 一个列，以存储各个实例的唯一标识。这个唯一属性列被称为主关键字或主键、主码。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br></li><li><p>第三范式：属性不依赖于其它非主属性 [ 消除传递依赖 ]。即指<strong>字段不要冗余</strong>。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>设R是一个满足第一范式条件的关系模式，X是R的任意属性集，如果X非传递依赖于R的任意一个候选关键字，称R满足第三范式，简记为3NF. 

满足 第三范式（3NF）必须先满足第二范式（2NF）。

第三范式（3NF）要求一个数据库表中不包含已在其它表中已包含的非主关键字信息。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><br><p>注：关系实质上是一张二维表，其中每一行是一个元组，每一列是一个属性</p><p>第二范式（2NF）和第三范式（3NF）的概念很容易混淆，区分它们的关键点在于，</p><p>2NF：非主键列是否完全依赖于主键，还是依赖于主键的一部分；</p><p>3NF：非主键列是直接依赖于主键，还是直接依赖于非主键列。</p><br><p>在实际的工作中，要不要去冗余字段呢？</p><blockquote><p>适当的字段冗余可以帮助我们提高查询的效率，但是会影响到增删改的效率。</p><p>那么我们冗余字段需要看具体的业务场景，假如在这个业务场景中，</p><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>查询的需求远大于增删改的需求，我们可以考虑适当的去冗余数据</strong></span>；</p><p>假如增删改的需求比查询的需求比重要高，那么这个时候就不应该冗余数据。</p><p>冗余字段的设计：反范式化设计。</p></blockquote><br><h3 id="_3-多表设计" tabindex="-1"><a class="header-anchor" href="#_3-多表设计"><span>3. 多表设计</span></a></h3><br><h2 id="五-事务transaction" tabindex="-1"><a class="header-anchor" href="#五-事务transaction"><span>五 事务Transaction</span></a></h2><p><strong>事务（Transaction）</strong>：是由一系列对数据库中数据进⾏访问（查询）与更新（增删改）的操作所组成的⼀个程序执行逻辑单元</p><p>这些操作，要么都成功，要么都不成功。</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>-- 事务相关命令：
begin;                -- 开始，还可以使用下列语法：
start transaction; 
commit;               -- 提交：使得当前的修改确认
rollback;             -- 回滚：使得当前的修改被放弃
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-事务的acid特性" tabindex="-1"><a class="header-anchor" href="#_1-事务的acid特性"><span>1. 事务的ACID特性</span></a></h3><ul><li><p><strong>原子性（Atomicity）</strong>：事务必须是⼀个原子的操作序列单元</p><p>事务中包含的各项操作在⼀次执⾏过程中，只允许出现两种状态之一：（1）全部执行成功 （2）全部执行失败</p><p>事务开始后所有操作，要么全部做完，要么全部不做，不可能停滞在中间环节。</p><p>事务执⾏过程中出错， 会回滚到事务开始前的状态，所有的操作就像没有发⽣一样。</p><p>也就是说事务是⼀个不可分割的整体，就像化学中学过的原子，是物质构成的基本单位。</p><br></li><li><p><strong>⼀致性（Consistency）</strong> ：一个事务在执⾏之前和执行之后，数据库都必须处于⼀致性状态。</p><p>即事务必须是数据库从一个一致性状态到另外一个一致性状态。</p><p>比如：如果从A账户转账到B账户，不可能因为A账户扣了钱，⽽B账户没有加钱（两个账号的总金额要保持一致状态）</p><br></li><li><p><strong>隔离性（Isolation）</strong> ：在并发环境中，并发的事务是互相隔离的。</p><p>也就是说，不同的事务并发操作相同的数据时，每个事务都有各自完整的数据空间。</p><p>⼀个事务内部的操作及使用的数据对其它并发事务是隔离的，并发执行的各个事务是不能互相干扰的。</p><p>在事务中，有隔离级别的定义，不同的隔离级别有不同的影响的程度。</p><br></li><li><p><strong>持久性（Durability）</strong>：事务⼀旦提交后，数据库中的数据必须被永久的保存下来。</p><p>即使服务器系统崩溃或服 务器宕机等故障。只要数据库重新启动，那么一定能够将其恢复到事务成功结束后的状态</p></li></ul><br><h3 id="_2-事务的并发问题" tabindex="-1"><a class="header-anchor" href="#_2-事务的并发问题"><span>2. 事务的并发问题</span></a></h3>`,112),S={href:"https://blog.csdn.net/drizzletowne/article/details/120928779?app_version=4.17.0&code=app_1562916241&uLinkId=usr1mkqgl919blen",target:"_blank",rel:"noopener noreferrer"},A=l('<ul><li><p><strong>脏读（Dirty Read）</strong>：一个事务读取到了另外一个事务还没提交的数据。</p><p>事务A读取了事务B更新但未提交的数据（脏数据）</p><p><em>脏数据</em>：是指事务对缓冲池中行记录的修改，并且还没有被提交（commit）</p><p>脏读发生的条件是需要事务的隔离级别为 <code>READ UNCOMMITTED</code></p><br></li><li><p><strong>不可重复读（Nonrepeatable Read）</strong>：在同一个事务内，针对同一个数据，前后读取的数据不一样</p><p>可能原因：在同一个事务内，读取到了别的事务修改的数据。如：事务 A 多次读取同一数据，事务 B 在事务A 多次读取的 过程中，对数据做了更新并提交，导致事务A多次读取同一数据时，结果不一致。</p><p><em>不可重复读和脏读的区别</em> 是：脏读是读到未提交的数据，而不可重复读读到的却是已经提交的数据</p><p>有时候，不可重复读的问题是可以接受的，因为其读到的是已经提交的数据，本身并不会带来很大的问题</p><br></li><li><p><strong>幻读（Phantom Read）</strong>：在一个事务内，读取数据记录条数前后不一致 ，</p><p>可能原因：在一个事务内，读取到了别的事务插入（删除）的数据</p><p>即在重复查询的过程中，数据发⽣了量的变化（行数多了或少了）如：</p><ol><li>事务 A 里有一个条件查询的语句 <code>select * from student where age &gt; 10</code>，假设查到了 10 行数据；</li><li>然后事务 B 往里面加入了一批数据 （或者删除了一些数据）</li><li>事务 A 再查的用条件查询语句查询的时候，发现查到了15条 （如果B执行了删除，那么将会少于10条数据）</li></ol></li></ul><br><h3 id="_3-事务的隔离级别" tabindex="-1"><a class="header-anchor" href="#_3-事务的隔离级别"><span>3. 事务的隔离级别</span></a></h3><p>❑ Read Uncommitted（读未提交）：最低的隔离级别，也是唯一能读到脏数据的隔离级别</p><p>❑ Read Committed（读已提交）：只能读取已经提交的数据、解决了脏读问题，但是还是解决不了可重复读问题</p><p>❑ Repeatable Read（可重复读）：保证在事务处理理过程中，多次读取同一个数据时，该数据的值是一致的</p><p>❑ Serializable（顺序读 / 可串行化 / 序列化）：最严格的事务隔离级别、事务只能一个接一个地处理，不能并发</p><br><blockquote><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>read uncommitted 有脏读、不可重复读、虚幻读的问题</strong></span> 、read uncommitted 是最不安全的隔离级别。</p><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>read committed 隔离级别没有 脏读的问题，但是有不可重复读和虚幻读的问题。</strong></span></p><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>repeatable read 没有脏读的问题，没有不可重复读的问题，也没有虚幻读的问题。这个隔离级别也是MySQL默认的隔离级别。</strong></span></p><blockquote><p>说明：只有在MySQL中，repeatable read 这种隔离级别没有虚幻读的问题。因为MySQL的存储引擎InnoDB通过MVCC（多版本并发控制） 解决了可重复读隔离级别下虚幻读的问题。</p></blockquote><p><span style="color:red;background:yellow;font-size:文字大小;font-family:字体;"><strong>串行化这种隔离级别没有 脏读、不可重复读、虚幻读的问题。但是有效率的问题。</strong></span></p><p>串行化这种隔离级别指的是，数据库在这种隔离级别下，会一个事务、一个事务的先后执行，会严格保证事务的先后顺序，不存在多个事务同时执行情况，这种隔离级别没有事务的隔离问题，当然也没有上面的安全性问题。</p></blockquote><br><p>不同事务隔离级别下的不同的问题总结：</p><table><thead><tr><th>隔离级别 \\ 并发问题</th><th style="text-align:center;">脏读</th><th style="text-align:center;">不可重复读</th><th style="text-align:center;">虚幻读</th></tr></thead><tbody><tr><td>read uncommitted</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr><tr><td>read committed</td><td style="text-align:center;">X</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr><tr><td>repeatable read</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X(在MySQL下没有)</td></tr><tr><td>serializable</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td></tr></tbody></table><br><p><code>InnoDB</code> offers all four transaction isolation levels described by the SQL:1992 standard:</p>',14),N={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_read-uncommitted",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"READ UNCOMMITTED",-1),D={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_read-committed",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"READ COMMITTED",-1),Q={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_repeatable-read",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"REPEATABLE READ",-1),w={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_serializable",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"SERIALIZABLE",-1),B=n("code",null,"InnoDB",-1),U={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_repeatable-read",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"REPEATABLE READ",-1),F=n("p",null,[s("InnoDB存储引擎默认支持的隔离级别是 "),n("code",null,"REPEATABLE READ"),s("，但是与标准SQL不同的是，InnoDB存储引擎在"),n("code",null,"REPEATABLE READ"),s("事务隔离级别下，使用 "),n("code",null,"Next-Key Lock "),s(" 锁的算法，因此避免了幻读的产生")],-1),z=n("p",null,"MySQL数据库中的InnoDB和Falcon存储引擎通过MVCC（Multi-Version Concurrent Control，多版本并发控制）机制解决了可重复读隔离级别下虚幻读的问题。",-1),G=n("p",null,"需要注意的是，多版本只是解决不可重复读问题，而加上间隙锁（也就是它这里所谓的并发控制）才解决了幻读问题。",-1),Y=n("br",null,null,-1);function H(V,K){const e=t("ExternalLinkIcon");return c(),d("div",null,[m,n("p",null,[s("MySQL5.7文档："),n("a",v,[s("https://dev.mysql.com/doc/refman/5.7/en/"),a(e)])]),n("p",null,[s("MySQL8.0文档："),n("a",u,[s("https://dev.mysql.com/doc/refman/8.0/en/"),a(e)])]),b,n("p",null,[s("下载MySQL："),n("a",k,[s("https://dev.mysql.com/downloads/mysql/"),a(e)])]),_,y,n("p",null,[s("安装MySQL：参照blog "),n("a",g,[s("https://blog.csdn.net/drizzletowne/article/details/120896774"),a(e)])]),h,f,L,q,M,n("p",null,[E,s("："),n("a",I,[s("https://dev.mysql.com/doc/refman/5.7/en/binary-installation.html"),a(e)])]),T,n("p",null,[s("-- 详情："),n("a",S,[s("MySQL事务并发问题"),a(e)])]),A,n("p",null,[n("a",N,[R,a(e)]),s(", "),n("a",D,[x,a(e)]),s(", "),n("a",Q,[O,a(e)]),s(", and "),n("a",w,[C,a(e)]),s(".")]),n("p",null,[s("The default isolation level for "),B,s(" is "),n("a",U,[P,a(e)]),s(".")]),F,z,G,Y])}const W=i(p,[["render",H],["__file","mysql-1.html.vue"]]),j=JSON.parse('{"path":"/tool/db/mysql-1.html","title":"MySQL基础","lang":"en-US","frontmatter":{"order":10,"title":"MySQL基础","description":"二 安装MySQL MySQL是一个C/S架构的软件，我们安装的MySQL 是服务端。MySQL 的客户端有很多，有自带的，有第三方的。 命令行客户端 图形化界面的客户端 navicat sql yog dbeaver workbench … MySQL5.7文档：https://dev.mysql.com/doc/refman/5.7/en/ MyS...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/tool/db/mysql-1.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"MySQL基础"}],["meta",{"property":"og:description","content":"二 安装MySQL MySQL是一个C/S架构的软件，我们安装的MySQL 是服务端。MySQL 的客户端有很多，有自带的，有第三方的。 命令行客户端 图形化界面的客户端 navicat sql yog dbeaver workbench … MySQL5.7文档：https://dev.mysql.com/doc/refman/5.7/en/ MyS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-02T17:12:36.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-06-02T17:12:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-02T17:12:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"二 安装MySQL","slug":"二-安装mysql","link":"#二-安装mysql","children":[{"level":3,"title":"1. 压缩包方式","slug":"_1-压缩包方式","link":"#_1-压缩包方式","children":[]},{"level":3,"title":"2. RPM的方式","slug":"_2-rpm的方式","link":"#_2-rpm的方式","children":[]},{"level":3,"title":"3. 配置文件参数","slug":"_3-配置文件参数","link":"#_3-配置文件参数","children":[]}]},{"level":2,"title":"1. DCL用户权限","slug":"_1-dcl用户权限","link":"#_1-dcl用户权限","children":[{"level":3,"title":"8. 常用数据类型","slug":"_8-常用数据类型","link":"#_8-常用数据类型","children":[]},{"level":3,"title":"1) 数字类型","slug":"_1-数字类型","link":"#_1-数字类型","children":[]},{"level":3,"title":"2) 字符串类型","slug":"_2-字符串类型","link":"#_2-字符串类型","children":[]},{"level":3,"title":"3) enum&set","slug":"_3-enum-set","link":"#_3-enum-set","children":[]},{"level":3,"title":"4) 时间和日期","slug":"_4-时间和日期","link":"#_4-时间和日期","children":[]}]},{"level":2,"title":"9. 备份与恢复","slug":"_9-备份与恢复","link":"#_9-备份与恢复","children":[]},{"level":2,"title":"四 数据库设计","slug":"四-数据库设计","link":"#四-数据库设计","children":[{"level":3,"title":"1. 数据完整性","slug":"_1-数据完整性","link":"#_1-数据完整性","children":[]},{"level":3,"title":"2. 三大范式","slug":"_2-三大范式","link":"#_2-三大范式","children":[]},{"level":3,"title":"3. 多表设计","slug":"_3-多表设计","link":"#_3-多表设计","children":[]}]},{"level":2,"title":"五 事务Transaction","slug":"五-事务transaction","link":"#五-事务transaction","children":[{"level":3,"title":"1. 事务的ACID特性","slug":"_1-事务的acid特性","link":"#_1-事务的acid特性","children":[]},{"level":3,"title":"2. 事务的并发问题","slug":"_2-事务的并发问题","link":"#_2-事务的并发问题","children":[]},{"level":3,"title":"3. 事务的隔离级别","slug":"_3-事务的隔离级别","link":"#_3-事务的隔离级别","children":[]}]}],"git":{"createdTime":1717348356000,"updatedTime":1717348356000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":39.05,"words":11715},"filePathRelative":"tool/db/mysql-1.md","localizedDate":"June 2, 2024","autoDesc":true}');export{W as comp,j as data};
