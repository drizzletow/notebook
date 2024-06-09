import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c,b as n,d as s,a as e,e as i}from"./app-B05z7mYU.js";const r="/notebook/assets/image-20220513193605094-BHLUMKqf.png",o="/notebook/assets/image-20220513195335164-BEsXqEVv.png",d={},v=n("h2",{id:"一-nginx安装和介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-nginx安装和介绍"},[n("span",null,"一 Nginx安装和介绍")])],-1),u={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"},b=i('<br><p>Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。</p><p>Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。Nginx是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在BSDlike协议下发行。</p><p>其特点是占有内存少，并发能力强</p><br><h3 id="_1-nginx的核心功能" tabindex="-1"><a class="header-anchor" href="#_1-nginx的核心功能"><span>1. Nginx的核心功能</span></a></h3><p>Nginx最核心的两个功能：</p><ol><li>高性能的静态web服务器</li><li>反向代理</li></ol><figure><img src="'+r+`" alt="image-20220513193605094" tabindex="0" loading="lazy"><figcaption>image-20220513193605094</figcaption></figure><p>正向代理：代理服务器是代表用户客户端去访问后端服务器，代理的对象是用户<br> 反向代理：代理服务器是代表后端服务器供客户端去访问，对于用户来说是无感知的，代理的对象是后台服务器</p><br><p><strong>Nginx的优势</strong>：</p><ol><li>高并发、高性能（一个进程可以处理多个请求）</li><li>扩展性好（模块化设计）</li><li>异步非阻塞的事件驱动模型</li><li>高可靠性（热部署、7*24）</li></ol><br><h3 id="_2-nginx的编译安装" tabindex="-1"><a class="header-anchor" href="#_2-nginx的编译安装"><span>2. Nginx的编译安装</span></a></h3><p>下载Nginx安装包并解压 ：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">wget</span> <span class="token parameter variable">-c</span> https://nginx.org/download/nginx-1.20.1.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.20.1.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>安装依赖环境 — 需要前置环境 <code>gcc，PCRE pcre-devel，zlib，OpenSSL</code></p><blockquote><p>gcc环境<br> PCRE库，用于解析正则表达式<br> zlib压缩和解压缩依赖<br> SSL 安全的加密的套接字协议层，用于HTTP安全传输，也就是https</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
yum <span class="token function">install</span> gcc-c++
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> pcre pcre-devel
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zlib zlib-devel
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> openssl openssl-devel

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>编译安装 — 编译之前，先创建nginx临时目录,并进行相关配置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">mkdir</span> /var/temp/nginx <span class="token parameter variable">-p</span>
<span class="token builtin class-name">cd</span> nginx-1.20.1/


./configure <span class="token punctuation">\\</span>
<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token punctuation">\\</span>
--pid-path<span class="token operator">=</span>/var/run/nginx/nginx.pid <span class="token punctuation">\\</span>
--lock-path<span class="token operator">=</span>/var/lock/nginx.lock <span class="token punctuation">\\</span>
--error-log-path<span class="token operator">=</span>/var/log/nginx/error.log <span class="token punctuation">\\</span>
--http-log-path<span class="token operator">=</span>/var/log/nginx/access.log <span class="token punctuation">\\</span>
--with-http_gzip_static_module <span class="token punctuation">\\</span>
--http-client-body-temp-path<span class="token operator">=</span>/var/temp/nginx/client <span class="token punctuation">\\</span>
--http-proxy-temp-path<span class="token operator">=</span>/var/temp/nginx/proxy <span class="token punctuation">\\</span>
--http-fastcgi-temp-path<span class="token operator">=</span>/var/temp/nginx/fastcgi <span class="token punctuation">\\</span>
--http-uwsgi-temp-path<span class="token operator">=</span>/var/temp/nginx/uwsgi <span class="token punctuation">\\</span>
--http-scgi-temp-path<span class="token operator">=</span>/var/temp/nginx/scgi <span class="token punctuation">\\</span>
--with-http_ssl_module

<span class="token function">make</span>

<span class="token function">make</span> <span class="token function">install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><table><thead><tr><th align="left">命令</th><th align="left">解释</th></tr></thead><tbody><tr><td align="left">–prefix</td><td align="left">指定nginx安装目录</td></tr><tr><td align="left">–pid-path</td><td align="left">指向nginx的pid</td></tr><tr><td align="left">–lock-path</td><td align="left">锁定安装文件，防止被恶意篡改或误操作</td></tr><tr><td align="left">–error-log</td><td align="left">错误日志</td></tr><tr><td align="left">–http-log-path</td><td align="left">http日志</td></tr><tr><td align="left">–with-http_gzip_static_module</td><td align="left">启用gzip模块，在线实时压缩输出数据流</td></tr><tr><td align="left">–http-client-body-temp-path</td><td align="left">设定客户端请求的临时目录</td></tr><tr><td align="left">–http-proxy-temp-path</td><td align="left">设定http代理临时目录</td></tr><tr><td align="left">–http-fastcgi-temp-path</td><td align="left">设定fastcgi临时目录</td></tr><tr><td align="left">–http-uwsgi-temp-path</td><td align="left">设定uwsgi临时目录</td></tr><tr><td align="left">–http-scgi-temp-path</td><td align="left">设定scgi临时目录</td></tr></tbody></table><br><p>启动和停止 — 进入安装目录启动nginx (<code>/usr/local/nginx/sbin</code>)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./nginx

./nginx <span class="token parameter variable">-s</span> stop

./nginx <span class="token parameter variable">-s</span> reload

./nginx <span class="token parameter variable">-V</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-ubuntu安装nginx" tabindex="-1"><a class="header-anchor" href="#_3-ubuntu安装nginx"><span>3. Ubuntu安装Nginx</span></a></h3><p>Ubuntu安装Nginx 非常方便，可以直接使用apt源来安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> add-apt-repository ppa:nginx/stable
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx

nginx <span class="token parameter variable">-v</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>/etc/nginx</code> 目录下可以看到nginx的配置文件nginx.conf</p><br><h3 id="_4-基本配置及常见问题" tabindex="-1"><a class="header-anchor" href="#_4-基本配置及常见问题"><span>4. 基本配置及常见问题</span></a></h3><p><strong>Nginx 默认配置文件</strong> （<code>nginx.conf</code>）</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code>
<span class="token key attr-name">worker_processes</span> <span class="token value attr-value"> 1;</span>

<span class="token key attr-name">events</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    worker_connections</span> <span class="token value attr-value"> 1024;</span>
}

<span class="token key attr-name">http</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    include</span> <span class="token value attr-value">      mime.types;</span>
<span class="token key attr-name">    default_type</span> <span class="token value attr-value"> application/octet-stream;</span>
<span class="token key attr-name">    sendfile</span> <span class="token value attr-value">       on;</span>
<span class="token key attr-name">    keepalive_timeout</span> <span class="token value attr-value"> 65;</span>

<span class="token key attr-name">    server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        listen</span> <span class="token value attr-value">      80;</span>
<span class="token key attr-name">        server_name</span> <span class="token value attr-value"> localhost;</span>
<span class="token key attr-name">        location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">            root</span> <span class="token value attr-value">  html;</span>
<span class="token key attr-name">            index</span> <span class="token value attr-value"> index.html index.htm;</span>
        }

<span class="token key attr-name">        error_page</span> <span class="token value attr-value">  500 502 503 504  /50x.html;</span>
<span class="token key attr-name">        location</span> <span class="token punctuation">=</span> <span class="token value attr-value">/50x.html {</span>
<span class="token key attr-name">            root</span> <span class="token value attr-value">  html;</span>
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>搭建动静分离、具备HTTPS安全访问的反向代理服务器架构</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">user</span> <span class="token value attr-value">root;</span>
<span class="token key attr-name">worker_processes</span> <span class="token value attr-value"> 3;</span>

<span class="token key attr-name">events</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    worker_connections</span> <span class="token value attr-value"> 4096;</span>
}

<span class="token key attr-name">http</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    include</span> <span class="token value attr-value">      mime.types;</span>
<span class="token key attr-name">    default_type</span> <span class="token value attr-value"> application/octet-stream;</span>

<span class="token key attr-name">    sendfile</span> <span class="token value attr-value">       on;</span>
<span class="token key attr-name">    keepalive_timeout</span> <span class="token value attr-value"> 65;</span>

<span class="token comment">    #监听80端口，重定向到443端口</span>
<span class="token key attr-name">    server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        listen</span> <span class="token value attr-value">      80;</span>
<span class="token key attr-name">        server_name</span> <span class="token value attr-value"> qmt.ink;</span>
<span class="token key attr-name">        rewrite</span> <span class="token value attr-value">^(.*)$ https://qmt.ink:443/$1 permanent;</span>

<span class="token key attr-name">        error_page</span> <span class="token value attr-value">  500 502 503 504  /50x.html;</span>
<span class="token key attr-name">        location</span> <span class="token punctuation">=</span> <span class="token value attr-value">/50x.html {</span>
<span class="token key attr-name">            root</span> <span class="token value attr-value">  html;</span>
        }
    }
<span class="token comment">    #后端反向代理 可拓展集群</span>
<span class="token key attr-name">    upstream</span> <span class="token value attr-value">tomcats{</span>
<span class="token key attr-name">        server</span> <span class="token value attr-value">172.17.0.15:8088;</span>
    }
<span class="token comment">    #HTTPS server</span>
<span class="token key attr-name">    server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        listen</span> <span class="token value attr-value">443 ssl;</span>
<span class="token key attr-name">        server_name</span> <span class="token value attr-value">qmt.ink;</span>
<span class="token key attr-name">        ssl_certificate</span> <span class="token value attr-value">1_qmt.ink_bundle.crt;</span>
<span class="token key attr-name">        ssl_certificate_key</span> <span class="token value attr-value">2_qmt.ink.key;</span>
<span class="token key attr-name">        ssl_session_timeout</span> <span class="token value attr-value">5m;</span>
<span class="token key attr-name">        ssl_protocols</span> <span class="token value attr-value">TLSv1 TLSv1.1 TLSv1.2;</span>
<span class="token key attr-name">        ssl_ciphers</span> <span class="token value attr-value">ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span>
<span class="token key attr-name">        ssl_prefer_server_ciphers</span> <span class="token value attr-value">on;</span>
<span class="token comment">        #配置网站路径</span>
<span class="token key attr-name">        location</span> <span class="token value attr-value">/shop {</span>
<span class="token key attr-name">            alias</span> <span class="token value attr-value">/home/website/foodie-shop/;</span>
<span class="token key attr-name">            index</span> <span class="token value attr-value">index.html index.htm;</span>
        }
<span class="token comment">        #通用请求（反向代理）</span>
<span class="token key attr-name">        location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">            proxy_pass</span> <span class="token value attr-value">http://tomcats;</span>
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>常见问题</strong>：</p><p><code>nginx: [error] open() &quot;/var/run/nginx/nginx.pid&quot; failed (2: No such file or directory)</code> ？</p><p>【原因分析】： 目录或文件不存在 （可先进入 <code>/var/run/nginx</code> 目录，验证目录是否存在，没有创建即可）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token builtin class-name">cd</span> /var/run/nginx
<span class="token function">mkdir</span> /var/run/nginx

/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>目录存在后重新加载nginx会出现 <code>nginx: [error] invalid PID number &quot;&quot; in &quot;/var/run/nginx/nginx.pid&quot;</code>，</p><p>此时需要重新指定nginx的配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf

/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="二-nginx的核心配置" tabindex="-1"><a class="header-anchor" href="#二-nginx的核心配置"><span>二 Nginx的核心配置</span></a></h2>`,52),k={href:"http://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"},g=n("h3",{id:"_1-nginx配置文件结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-nginx配置文件结构"},[n("span",null,"1. Nginx配置文件结构")])],-1),h={href:"http://nginx.org/en/docs/beginners_guide.html#conf_structure",target:"_blank",rel:"noopener noreferrer"},x=i('<figure><img src="'+o+`" alt="image-20220513195335164" tabindex="0" loading="lazy"><figcaption>image-20220513195335164</figcaption></figure><h4 id="main全局配置" tabindex="-1"><a class="header-anchor" href="#main全局配置"><span>main全局配置</span></a></h4><p>从配置文件开始到 events 块之间的内容，主要会设置一些影响 nginx 服务器整体运行的配置指令，主要包括配置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以及配置文件的引入等。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
user www-data<span class="token punctuation">;</span>         <span class="token comment">#运行worker子进程的用户</span>
worker_processes auto<span class="token punctuation">;</span> <span class="token comment">#子进程的个数</span>
pid /run/nginx.pid<span class="token punctuation">;</span>    <span class="token comment">#运行master的pid文件存放的路径</span>
include /etc/nginx/modules-enabled/*.conf<span class="token punctuation">;</span>  <span class="token comment">#将其他配置文件包含进来</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是 Nginx 服务器并发处理服务的关键配置，worker_processes 值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约</p><br><h4 id="events事件模型" tabindex="-1"><a class="header-anchor" href="#events事件模型"><span>events事件模型</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
events <span class="token punctuation">{</span>
	worker_connections <span class="token number">768</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process 下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 word process 可以同时支持的最大连接数等。上述例子就表示每个 work process 支持的最大连接数为 768， 这部分的配置对 Nginx 的性能影响较大，在实际中应该灵活配置。</p><br><h4 id="http模块配置" tabindex="-1"><a class="header-anchor" href="#http模块配置"><span>http模块配置</span></a></h4><p>这算是 Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。</p><ol><li>http全局块<br> http 全局块配置的指令包括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数<br> 上限等。</li><li>server块<br> 这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的<br> 产生是为了节省互联网服务器硬件成本。<br> 每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。<br> 而每个 server 块也分为全局 server 块，以及可以同时包含多个 locaton 块。</li></ol><br><h3 id="_2-nginx核心配置详解" tabindex="-1"><a class="header-anchor" href="#_2-nginx核心配置详解"><span>2. Nginx核心配置详解</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment">#user administrator administrators;  #配置用户或者组，默认为nobody nobody</span>
<span class="token comment">#worker_processes 2;                 #允许生成的进程数，默认为1</span>
<span class="token comment">#pid /nginx/pid/nginx.pid;           #指定nginx进程运行文件存放地址</span>

<span class="token comment"># 制定日志路径，级别。这个设置可以放入全局块，http块，server块，</span>
<span class="token comment"># 级别依次为：debug|info|notice|warn|error|crit|alert|emerg</span>
error_log log/error.log debug<span class="token punctuation">;</span>    

events <span class="token punctuation">{</span>
    accept_mutex on<span class="token punctuation">;</span> <span class="token comment">#设置网路连接序列化，防止惊群现象发生，默认为on</span>
    multi_accept on<span class="token punctuation">;</span> <span class="token comment">#设置一个进程是否同时接受多个网络连接，默认为off</span>
    <span class="token comment"># use epoll;     #事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>  <span class="token comment">#最大连接数，默认为512</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include mime.types<span class="token punctuation">;</span>                    <span class="token comment">#文件扩展名与文件类型映射表</span>
    default_type application/octet-stream<span class="token punctuation">;</span> <span class="token comment">#默认文件类型，默认为text/plain</span>
    <span class="token comment">#access_log off;                       #取消服务日志</span>

    log_format myFormat <span class="token string">&#39;$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">#自定义格式</span>
    access_log log/access.log myFormat<span class="token punctuation">;</span> <span class="token comment">#combined为日志格式的默认值</span>
    sendfile on<span class="token punctuation">;</span>                        <span class="token comment">#允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。</span>
    sendfile_max_chunk 100k<span class="token punctuation">;</span>            <span class="token comment">#每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。</span>
    keepalive_timeout <span class="token number">65</span><span class="token punctuation">;</span>               <span class="token comment">#连接超时时间，默认为75s，可以在http，server，location块。</span>

    upstream mysvr <span class="token punctuation">{</span>    
        server <span class="token number">127.0</span>.0.1:7878<span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.10.121:3333 backup<span class="token punctuation">;</span> <span class="token comment">#热备</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">404</span> https://www.baidu.com<span class="token punctuation">;</span>  <span class="token comment">#错误页</span>

    server <span class="token punctuation">{</span>
        keepalive_requests <span class="token number">120</span><span class="token punctuation">;</span> <span class="token comment">#单连接请求上限次数。</span>
        listen <span class="token number">4545</span><span class="token punctuation">;</span> <span class="token comment">#监听端口</span>
        server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span> <span class="token comment">#监听地址</span>

        location ~*^.+$ <span class="token punctuation">{</span>      <span class="token comment">#请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。</span>
            <span class="token comment">#root path;        #根目录</span>
            <span class="token comment">#index vv.txt;     #设置默认页</span>
            proxy_pass http://mysvr<span class="token punctuation">;</span> <span class="token comment">#请求转向mysvr 定义的服务器列表</span>
            deny <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>          <span class="token comment">#拒绝的ip</span>
            allow <span class="token number">172.18</span>.5.54<span class="token punctuation">;</span>       <span class="token comment">#允许的ip</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="nginx反向代理配置" tabindex="-1"><a class="header-anchor" href="#nginx反向代理配置"><span>Nginx反向代理配置</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
http<span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    <span class="token punctuation">..</span>.
    <span class="token comment">#这部分是nginx作为反向代理服务器的配置</span>
    server<span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>                   <span class="token comment">#nginx监听的端口</span>
        server_name <span class="token number">192.168</span>.45.151<span class="token punctuation">;</span>  <span class="token comment">#虚拟服务器的识别标记，一般配置为本机ip</span>
        
        location / <span class="token punctuation">{</span>                 <span class="token comment">#代理设置地址</span>
        	proxy_pass http://192.168.45.151:8080<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="nginx负载均衡配置" tabindex="-1"><a class="header-anchor" href="#nginx负载均衡配置"><span>Nginx负载均衡配置</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment">#负载均衡策略</span>
<span class="token comment"># 1 轮询（默认）</span>
<span class="token comment"># 2 weight</span>
<span class="token comment"># 3 ip_hash</span>
<span class="token comment"># 4 least_conn 最少连接方式</span>
<span class="token comment"># 5 fair(第三方) 响应时间</span>
<span class="token comment"># 6 url_hash (第三方)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># weight 代表权重, 默认为 1,权重越高被分配的客户端越多</span>
<span class="token punctuation">..</span>.
upstream demo<span class="token punctuation">{</span>
    server <span class="token number">192.168</span>.45.151:8080 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    server <span class="token number">192.168</span>.45.151:8081 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment">#ip_hash 每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决session 的问题。例如：</span>
<span class="token punctuation">..</span>.
upstream demo<span class="token punctuation">{</span>
    ip_hash<span class="token punctuation">;</span>
    server <span class="token number">192.168</span>.45.151:8080<span class="token punctuation">;</span>
    server <span class="token number">192.168</span>.45.151:8081<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-nginx缓存配置" tabindex="-1"><a class="header-anchor" href="#_3-nginx缓存配置"><span>3. Nginx缓存配置</span></a></h3><p>Nginx从0.7.48版本开始，支持了类似Squid的内容缓存功能。这个缓存是把URL及相关组合当作Key，用md5编码哈希后保存在硬盘上，所以它可以支持任意URL链接，同时也支持404/301/302这样的非200状态码。</p><p>nginx缓存配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token punctuation">..</span>.
http<span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    <span class="token comment">#声明一个cache缓存节点的内容，levels 在 /path/to/cache/ 设置了一个两级层次结构的目录。 </span>
    <span class="token comment">#设置Web缓存区名称为my_cache，内存缓存空间大小为200MB，1天没有被访问的内容自动清除，硬盘缓存空间大小为30GB。</span>
    proxy_cache_path /data0/my_cache <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>my_cache:200m <span class="token assign-left variable">inactive</span><span class="token operator">=</span>1d <span class="token assign-left variable">max_size</span><span class="token operator">=</span>30g<span class="token punctuation">;</span>
    server<span class="token punctuation">{</span>
        <span class="token punctuation">..</span>.
        location / <span class="token punctuation">{</span>
            proxy_cache my_cache<span class="token punctuation">;</span>
            proxy_cache_key <span class="token variable">$uri</span><span class="token punctuation">;</span>
            proxy_cache_valid <span class="token number">200</span> <span class="token number">206</span> <span class="token number">304</span> <span class="token number">301</span> <span class="token number">302</span> 10d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-nginx配置ssl证书" tabindex="-1"><a class="header-anchor" href="#_4-nginx配置ssl证书"><span>4. Nginx配置SSL证书</span></a></h3><p>前置条件：需要已备案域名，SSL证书。上传证书后配置<code>nginx.conf</code> (注意：Nginx安装时要配置<code>--with-http_ssl_module</code>)</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token comment">    #SSL 访问端口号为 443</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value">443 ssl; </span>
<span class="token comment"> #填写绑定证书的域名</span>
<span class="token key attr-name">    server_name</span> <span class="token value attr-value">cloud.tencent.com; </span>
<span class="token comment"> #证书文件名称</span>
<span class="token key attr-name">    ssl_certificate</span> <span class="token value attr-value">1_cloud.tencent.com_bundle.crt; </span>
<span class="token comment"> #私钥文件名称</span>
<span class="token key attr-name">    ssl_certificate_key</span> <span class="token value attr-value">2_cloud.tencent.com.key; </span>
<span class="token key attr-name">    ssl_session_timeout</span> <span class="token value attr-value">5m;</span>
<span class="token comment"> #请按照以下协议配置</span>
<span class="token key attr-name">    ssl_protocols</span> <span class="token value attr-value">TLSv1 TLSv1.1 TLSv1.2; </span>
<span class="token comment"> #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。</span>
<span class="token key attr-name">    ssl_ciphers</span> <span class="token value attr-value">ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; </span>
<span class="token key attr-name">    ssl_prefer_server_ciphers</span> <span class="token value attr-value">on;</span>
<span class="token key attr-name">    location</span> <span class="token value attr-value">/ {</span>
<span class="token comment">    #网站主页路径。此路径仅供参考，具体请您按照实际目录操作。</span>
<span class="token key attr-name">        root</span> <span class="token value attr-value">html; </span>
<span class="token key attr-name">        index</span> <span class="token value attr-value"> index.html index.htm;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="三-lvs与keepalived" tabindex="-1"><a class="header-anchor" href="#三-lvs与keepalived"><span>三 LVS与Keepalived</span></a></h2>`,37);function _(f,y){const a=l("ExternalLinkIcon");return p(),c("div",null,[v,n("p",null,[s("Nginx官网下载地址："),n("a",u,[s("http://nginx.org/en/download.html"),e(a)])]),n("p",null,[s("Nginx documentation："),n("a",m,[s("http://nginx.org/en/docs/"),e(a)])]),b,n("p",null,[s("nginx documentation："),n("a",k,[s("http://nginx.org/en/docs/"),e(a)])]),g,n("p",null,[s("Configuration File’s Structure: "),n("a",h,[s("http://nginx.org/en/docs/beginners_guide.html#conf_structure"),e(a)])]),x])}const S=t(d,[["render",_],["__file","nginx.html.vue"]]),T=JSON.parse('{"path":"/java/Javaee/server/nginx.html","title":"Nginx服务器","lang":"en-US","frontmatter":{"order":-1,"title":"Nginx服务器","description":"一 Nginx安装和介绍 Nginx官网下载地址：http://nginx.org/en/download.html Nginx documentation：http://nginx.org/en/docs/ Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。 Nginx是由伊...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/java/Javaee/server/nginx.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"Nginx服务器"}],["meta",{"property":"og:description","content":"一 Nginx安装和介绍 Nginx官网下载地址：http://nginx.org/en/download.html Nginx documentation：http://nginx.org/en/docs/ Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。 Nginx是由伊..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-02T17:12:36.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-06-02T17:12:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx服务器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-02T17:12:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"一 Nginx安装和介绍","slug":"一-nginx安装和介绍","link":"#一-nginx安装和介绍","children":[{"level":3,"title":"1. Nginx的核心功能","slug":"_1-nginx的核心功能","link":"#_1-nginx的核心功能","children":[]},{"level":3,"title":"2. Nginx的编译安装","slug":"_2-nginx的编译安装","link":"#_2-nginx的编译安装","children":[]},{"level":3,"title":"3. Ubuntu安装Nginx","slug":"_3-ubuntu安装nginx","link":"#_3-ubuntu安装nginx","children":[]},{"level":3,"title":"4. 基本配置及常见问题","slug":"_4-基本配置及常见问题","link":"#_4-基本配置及常见问题","children":[]}]},{"level":2,"title":"二 Nginx的核心配置","slug":"二-nginx的核心配置","link":"#二-nginx的核心配置","children":[{"level":3,"title":"1. Nginx配置文件结构","slug":"_1-nginx配置文件结构","link":"#_1-nginx配置文件结构","children":[]},{"level":3,"title":"2. Nginx核心配置详解","slug":"_2-nginx核心配置详解","link":"#_2-nginx核心配置详解","children":[]},{"level":3,"title":"3. Nginx缓存配置","slug":"_3-nginx缓存配置","link":"#_3-nginx缓存配置","children":[]},{"level":3,"title":"4. Nginx配置SSL证书","slug":"_4-nginx配置ssl证书","link":"#_4-nginx配置ssl证书","children":[]}]},{"level":2,"title":"三 LVS与Keepalived","slug":"三-lvs与keepalived","link":"#三-lvs与keepalived","children":[]}],"git":{"createdTime":1717348356000,"updatedTime":1717348356000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":9.13,"words":2739},"filePathRelative":"java/Javaee/server/nginx.md","localizedDate":"June 2, 2024","autoDesc":true}');export{S as comp,T as data};
