import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c,b as e,d as s,a as t,e as n}from"./app-BqinhWG9.js";const d="/notebook/assets/image-20220406222111262-CETqN1lR.png",r="/notebook/assets/image-20220406223751075-Cp9Zk7E0.png",o="/notebook/assets/image-20220407104919963-shl3jROR.png",m={},u=n('<h2 id="一-web及网络基础" tabindex="-1"><a class="header-anchor" href="#一-web及网络基础"><span>一 Web及网络基础</span></a></h2><h3 id="网络模型-分层" tabindex="-1"><a class="header-anchor" href="#网络模型-分层"><span>网络模型(分层)</span></a></h3><figure><img src="'+d+`" alt="image-20220406222111262" tabindex="0" loading="lazy"><figcaption>image-20220406222111262</figcaption></figure><p>OSI(Open System Interaction)七层模型</p><p>TCP/IP 模型</p><p>无论哪种模型，都是将网络进行分层，上者将网络分为7层；下者将网络分为5层（4层）</p><p><strong>分层是逻辑上面的概念</strong>，并不是指的是物理网络中被拆分了若干层。</p><br><p>为什么要分层？</p><p>目的主要是为了解耦。比如传输层有TCP、UDP两种传输方式。</p><p>分层最大的好处就是今后如果希望将传输方式从TCP转换成UDP，只需要变更传输层即可，其他层不需要变化</p><br><h3 id="http的诞生" tabindex="-1"><a class="header-anchor" href="#http的诞生"><span>HTTP的诞生</span></a></h3><p><strong>如果希望客户端和服务器之间能够进行正常的通讯，双方在传递数据时只需要遵守固定的格式即可</strong> 这个格式其实就是协议。</p><p>HTTP协议：客户端和服务器在进行通讯时，发送的HTTP请求和响应应当具有的特定的格式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
HTTP:Hyper Text Transfer Protocol.

HTML:Hyper Text Markup Language.

html、http均是由同一个人发明的。tim berners lee。科研人员。做实验、写论文、做分享、听分享

论文如何排版？html

论文如何传输给其他人？http

http诞生之初主要就是为了传递html的。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="http工作流程" tabindex="-1"><a class="header-anchor" href="#http工作流程"><span>HTTP工作流程</span></a></h3><p><strong>域名解析</strong>（把字符变成ip地址）</p><figure><img src="`+r+`" alt="image-20220406223751075" tabindex="0" loading="lazy"><figcaption>image-20220406223751075</figcaption></figure><p>其中有一个常识性知识：127.0.0.1 localhost永远指向的是本机</p><br><p><strong>TCP三次握手</strong>：</p><p>进行三次握手，建立一个可靠的TCP连接。访问网站时，<strong>一般都是使用TCP</strong>，游戏中一般使用UDP。</p><p>TCP连接建立之后，其实就是形成了一个socket。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
整个访问流程：

<span class="token number">1</span>.用户在浏览器地址栏输入对应的网络地址，首先进行域名解析（浏览器缓存、操作系统缓存、hosts文件、DNS服务器）

<span class="token number">2</span>.进行TCP三次握手，建立TCP连接

<span class="token number">3</span>.浏览器会帮助用户生成HTTP请求，首先向下经过TCP（拆包、加上tcp头部），经过ip层，加上ip头部标签

<span class="token number">4</span>.再次向下经过链路层，网卡从客户端机器出去，在网络中中转传输，到达服务器主机机器

<span class="token number">5</span>.到达服务器网络层，将数据包的ip头部去掉，经过tcp层，将tcp头部去掉，并且同时将数据包进行合并，到达应用层之后，取出里面的请求报文，加以解析（能够正常进行解析的前提是通讯双方遵守同样的格式、准则），识别出客户端需要请求的资源，对其做出响应，主要是生成HTTP响应，将文件的内容写入到响应中。

<span class="token number">6</span>.HTTP响应经过tcp，进行拆包，加上tcp头部标签，经过ip，加上ip头部标签，经由链路层出去，在网络中中转传输，到达客户端机器

<span class="token number">7</span>.客户端机器接收到数据之后，经由链路层进入主机，经过ip，脱去ip标签、经过网络层、脱去tcp标签，同时进行合并数据包，合并之后，得到完整的HTTP响应

<span class="token number">8</span>.浏览器拿到HTTP响应之后，对其进行解析（双方同样遵守着一个原则），浏览器取出HTML部分进行解析，如果此时遇到了css标签、js标签、img标签等，此时会自行再次往对应的地址去发起新的HTTP请求，整个过程和上述完全一致<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token number">9</span>.当浏览器拿到了当前页面所需要的全部资源时，将页面进行渲染，将完整的页面呈现在用户的面前。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="二-http协议" tabindex="-1"><a class="header-anchor" href="#二-http协议"><span>二 HTTP协议</span></a></h2><figure><img src="`+o+`" alt="image-20220407104919963" tabindex="0" loading="lazy"><figcaption>image-20220407104919963</figcaption></figure><h3 id="http协议介绍" tabindex="-1"><a class="header-anchor" href="#http协议介绍"><span>HTTP协议介绍</span></a></h3><p>超文本传输协议（英文：HyperText Transfer Protocol，缩写：HTTP）是⼀种⽤于分布式、协作式和 超媒体信息系统的<strong>应用层协议</strong></p><p>（TCP/UDP为运输层协议）</p><p>HTTP 请求/响应的步骤：</p><ol><li><p>客户端（浏览器）连接到Web服务器：与Web服务器的HTTP端⼝（默认为80）建立⼀个TCP Socket连接</p></li><li><p>发送HTTP请求：客户端通过socket向Web服务器发送⼀个请求报文（由请求行、请求头部、 空⾏和请求数据4部分组成）</p></li><li><p>服务器接受请求并返回HTTP响应：Web服务器解析请求、同样通过socket响应数据到客户端</p></li><li><p>释放TCP连接：</p><p>在HTTP/1.0中默认使⽤短连接（每次HTTP操作均建立一次连接、任务结束就中断连接）</p><p>从HTTP/1.1起，默认使用长连接，用以保持一段时间的连接</p><p>HTTP协议的长连接和短连接，实质上是TCP协议的长连接和短连接</p></li><li><p>客户端浏览器解析HTML内容：客户端浏览器读取响应数据HTML，根据HTML的语法 对其进行格式化，并在浏览器窗口中显示</p><p>客户端浏览器⾸先解析状态行，查看表明请求是否成功的状态代码</p><p>然后解析每⼀个响应头，响应头告 知以下为若干字节的HTML文档和文档的字符集</p></li></ol><table><thead><tr><th>HTTP请求方法</th><th>描述</th></tr></thead><tbody><tr><td>GET</td><td>向指定的资源发出“显示”请求、使用GET方法应该只用在读取数据</td></tr><tr><td>HEAD</td><td>同上、但只获取其中“关于该资源的信息”（元信息或称元数据）</td></tr><tr><td>POST</td><td>向指定资源提交数据，请求服务器进行处理（例如提交表单或者上传⽂件）</td></tr><tr><td>PUT</td><td>向指定资源位置上传其最新内容</td></tr><tr><td>DELETE</td><td>请求服务器删除 Request-URI 所标识的资源</td></tr><tr><td>TRACE</td><td>回显服务器收到的请求，主要⽤于测试或诊断</td></tr><tr><td>OPTIONS</td><td>使服务器传回该资源所⽀持的所有HTTP请求⽅法</td></tr></tbody></table><h3 id="http请求报文" tabindex="-1"><a class="header-anchor" href="#http请求报文"><span>HTTP请求报文</span></a></h3><p>一般情况下，客户端发送的HTTP请求，以及服务器返回的HTTP响应，一般情况下，我们也称之为HTTP请求报文、HTTP响应报文</p><p>HTTP协议对于HTTP请求报文的格式要求是：</p><p><strong>请求行：请求方法 请求资源 版本协议</strong></p><p><strong>请求头</strong></p><p><strong>空行</strong></p><p><strong>请求体</strong></p><h4 id="请求行" tabindex="-1"><a class="header-anchor" href="#请求行"><span>请求行</span></a></h4><h5 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法"><span>请求方法</span></a></h5><p>发送当前HTTP请求时，使用的是何种请求方法。常用的请求方法有GET、POST</p><p><strong>1.GET和POST之间何种区别呢？</strong></p><p>主要是语义的区别。<strong>千万不要去谈请求参数的位置。</strong></p><p>GET的语义是获取数据。查询某个商品、加载某个页面</p><p>POST的语义是提交数据。登录、注册。这些场景需要将本地的数据提交到服务器，所以必须使用POST方法。</p><p>注意：get和post的区别不是请求参数的位置不同。get请求参数会在地址栏，post方法时，请求参数不在地址栏。</p><p>上述的差异只是浏览器的行为，不是get和post的区别。这两者的区别永远只是语义的区别。</p><p><strong>2.如何发送GET、POST请求？</strong></p><p>表单。在浏览器地址栏输入一个网址，默认情况下就是GET请求。</p><p>可以使用表单，设置method=post来发送post请求。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.cskaoyan.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击submit按钮，表示的是将表单进行提交到指定的action地址，通俗的说就是往action地址发起一个HTTP请求，使用的请求方法就是method设置的方法，同时会将input里面的请求参数给携带过去</p><p>可以使用fiddler来进行抓包。</p><p>注意事项：</p><p>1.默认情况下，fiddler不可以抓取https，所以主流的网站不要使用fiddler去抓取</p><p>2.如果fiddler抓取不到浏览器的报文，那么确认一下浏览器是否开启了代理</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>POST http://www.cskaoyan.com/ HTTP/1.1
Host: www.cskaoyan.com
Connection: keep-alive
Content-Length: 13
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
Origin: http://localhost:63342
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Referer: http://localhost:63342/
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: __yjs_duid=1_60a5e1f39f75d56f1f84eb254e87926c1649216598688; cZBD_2132_sid=GQEGCM; cZBD_2132_lastact=1649216599%09forum.php%09; Hm_lpvt_5f3c4e32676aacc710ede84276010d9b=1649216603

username=lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>get:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET http://www.cskaoyan.com/?username=lisi&amp;password=admin&amp;gender=female&amp;hobby=java&amp;hobby=c%2B%2B&amp;hobby=python HTTP/1.1
Host: www.cskaoyan.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Referer: http://localhost:63342/
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: cZBD_2132_saltkey=M4A45q43; cZBD_2132_lastvisit=1649206943; Hm_lvt_5f3c4e32676aacc710ede84276010d9b=1649210547; __yjs_duid=1_60a5e1f39f75d56f1f84eb254e87926c1649216598688; cZBD_2132_sid=I5Rhmw; cZBD_2132_lastact=1649216843%09forum.php%09; Hm_lpvt_5f3c4e32676aacc710ede84276010d9b=1649216847


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="请求资源" tabindex="-1"><a class="header-anchor" href="#请求资源"><span>请求资源</span></a></h5><p>​ 服务器会利用该字段来判断客户端希望访问哪个资源文件</p><p>​ 访问两个不同的页面，观察请求报文</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET http://www.cskaoyan.com/forum-280-1.html HTTP/1.1
Host: www.cskaoyan.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Referer: http://www.cskaoyan.com/forum.php
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: cZBD_2132_saltkey=M4A45q43; cZBD_2132_lastvisit=1649206943; Hm_lvt_5f3c4e32676aacc710ede84276010d9b=1649210547; __yjs_duid=1_60a5e1f39f75d56f1f84eb254e87926c1649216598688; cZBD_2132_sid=TRP03R; cZBD_2132_lastact=1649226920%09home.php%09misc; cZBD_2132_sendmail=1; Hm_lpvt_5f3c4e32676aacc710ede84276010d9b=1649226924


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET http://www.cskaoyan.com/forum-279-1.html HTTP/1.1
Host: www.cskaoyan.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Referer: http://www.cskaoyan.com/forum.php
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: cZBD_2132_saltkey=M4A45q43; cZBD_2132_lastvisit=1649206943; Hm_lvt_5f3c4e32676aacc710ede84276010d9b=1649210547; __yjs_duid=1_60a5e1f39f75d56f1f84eb254e87926c1649216598688; cZBD_2132_sendmail=1; cZBD_2132_sid=O31TXH; cZBD_2132_lastact=1649227065%09forum.php%09forumdisplay; cZBD_2132_st_t=0%7C1649227065%7C7212ba724b8945d82339e779ffaa98c5; cZBD_2132_forum_lastvisit=D_280_1649227065; Hm_lpvt_5f3c4e32676aacc710ede84276010d9b=1649227096


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="版本协议" tabindex="-1"><a class="header-anchor" href="#版本协议"><span>版本协议</span></a></h5><p>HTTP/1.1</p><p>HTTP协议发展历程：0.9、1.0、1.1版本</p><p><strong>1.0和1.1版本之间最大的区别在于一个TCP连接内是否允许发送多个HTTP请求</strong></p><p><strong>在1.0版本，一个TCP连接内，只允许发送一个HTTP请求</strong></p><p><strong>在1.1版本，一个TCP连接内，可以发送多个HTTP请求，也就是我们所说的支持长连接。</strong></p><h4 id="请求头" tabindex="-1"><a class="header-anchor" href="#请求头"><span>请求头</span></a></h4><p>Accept:浏览器可接受的 MIME类型 <em>/</em> (大类型)/(小类型)</p><p>​ MIME：指的是将互联网上面的资源进行分类。通过大类型/小类型的方式将所有的资源进行划分类别。</p><p>​ 比如文本类型、音频类型、视频类型、图片类型</p><p>​ text/html、text/txt、audio/mp3、video/mp4、image/jpeg、image/png等</p><p>​ 为什么需要这个东西呢？因为文本的渲染和图片的渲染肯定不是一个原理。</p><p>Accept-Charset: 浏览器通过这个头告诉服务器，它支持哪种字符集<br> Accept-Encoding:浏览器能够进行解码的数据编码方式，比如gzip.服务器返回响应数据时，如果需要用到数据的压缩，那么应当使用客户端可以支持的压缩格式。<br> Accept-Language: 浏览器所希望的语言种类，当服务器能够提供一种以上的语言版本时要用到,<br> 可以在浏览器中进行设置。<br> Host:初始URL中的主机和端口。每个HTTP请求报文中必有该字段。<br> Referer:包含一个URL，用户从该URL代表的页面出发访问当前请求的页面 （防盗链）</p><p>用户直接访问2.html，用户通过访问1.html，然后通过点击表单，跳转到2.html，这两种方式，在HTTP请求报文上面有没有区别</p><p>通过页面进行跳转：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET http://www.cskaoyan.com/?username=lisi&amp;password=asdas&amp;gender=female&amp;hobby=c%2B%2B HTTP/1.1
Host: www.cskaoyan.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Referer: http://localhost:63342/
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: cZBD_2132_saltkey=M4A45q43; cZBD_2132_lastvisit=1649206943; Hm_lvt_5f3c4e32676aacc710ede84276010d9b=1649210547; __yjs_duid=1_60a5e1f39f75d56f1f84eb254e87926c1649216598688; cZBD_2132_sid=O31TXH; cZBD_2132_st_t=0%7C1649227100%7C9a8be8f402f61615d23b48c485b3f8f0; cZBD_2132_forum_lastvisit=D_280_1649227065D_279_1649227100; Hm_lpvt_5f3c4e32676aacc710ede84276010d9b=1649227183; cZBD_2132_lastact=1649228311%09forum.php%09ajax


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接访问页面：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET http://www.cskaoyan.com/ HTTP/1.1
Host: www.cskaoyan.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cookie: cZBD_2132_saltkey=M4A45q43; cZBD_2132_lastvisit=1649206943; Hm_lvt_5f3c4e32676aacc710ede84276010d9b=1649210547; __yjs_duid=1_60a5e1f39f75d56f1f84eb254e87926c1649216598688; cZBD_2132_sid=O31TXH; cZBD_2132_st_t=0%7C1649227100%7C9a8be8f402f61615d23b48c485b3f8f0; cZBD_2132_forum_lastvisit=D_280_1649227065D_279_1649227100; cZBD_2132_sendmail=1; Hm_lpvt_5f3c4e32676aacc710ede84276010d9b=1649228344; cZBD_2132_lastact=1649228342%09forum.php%09misc


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有什么应用场景？</p><p>卖货。 投放广告。抖音、快手 qq空间防盗链。 搭建个人博客。引入谷歌的广告。</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>Content-Type:内容类型。更多的是用在**响应头中**。就会使用MIME类型来表示资源的类型。text/html;  image/jpeg

If-Modified-Since: Wed, 02 Feb 2011 12:04:56 GMT 服务器利用这个头与服务器的文件进行比对，如果一致，则告诉浏览器从缓存中直接读取文件。
User-Agent:浏览器类型.
Content-Length:表示请求消息正文的长度。**请求体的长度**。
Connection:表示是否需要持久连接。如果服务器看到这里的值为“Keep -Alive”，或者看到请求使用的是HTTP 1.1（HTTP 1.1默认进行持久连接 
Cookie:这是最重要的请求头信息之一 
Date: Mon, 22 Aug 2011 01:55:39 GMT请求时间GMT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="请求体" tabindex="-1"><a class="header-anchor" href="#请求体"><span>请求体</span></a></h4><p>一般情况下，用来传输大量的数据。比如文件上传。</p><h3 id="http响应报文" tabindex="-1"><a class="header-anchor" href="#http响应报文"><span>HTTP响应报文</span></a></h3><h4 id="响应行" tabindex="-1"><a class="header-anchor" href="#响应行"><span>响应行</span></a></h4><h5 id="版本协议-1" tabindex="-1"><a class="header-anchor" href="#版本协议-1"><span>版本协议</span></a></h5><h5 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码"><span>状态码</span></a></h5><p>200 ok</p><p>301、302、307 重定向（当前的资源不可用，服务器给你一个指引，你去新的地址再去发起请求）</p><p>重定向状态码一定会搭配着一个Location响应头来一起使用。</p>`,98),v={href:"http://www.bing.com",target:"_blank",rel:"noopener noreferrer"},h=n(`<p>使用chrome抓包，看到的内容和fiddler略有不同，原因在于chrome显示的并不是原始的报文格式，重新组织了显示的形式。</p><p>响应体在Response标签栏</p><p>304 未修改</p><p>404 没有找到 注意和<strong>failed</strong>区别</p><p>500 服务器异常 服务器有bug</p><h5 id="原因短语" tabindex="-1"><a class="header-anchor" href="#原因短语"><span>原因短语</span></a></h5><h4 id="响应头" tabindex="-1"><a class="header-anchor" href="#响应头"><span>响应头</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Location: http://www.cskaoyan.com/指示新的资源的位置 。搭配着重定向状态码一起使用的。
Server: apache tomcat 指示服务器的类型
Content-Encoding: <span class="token function">gzip</span> 服务器发送的数据采用的编码类型
Content-Length: <span class="token number">80</span> 告诉浏览器正文的长度。响应体的长度。
Content-Language: zh-cn服务发送的文本的语言
Content-Type: text/html<span class="token punctuation">;</span>  服务器发送的内容的MIME类型
Last-Modified: Tue, <span class="token number">11</span> Jul <span class="token number">2000</span> <span class="token number">18</span>:23:51 GMT文件的最后修改时间
Refresh: <span class="token number">1</span><span class="token punctuation">;</span><span class="token assign-left variable">url</span><span class="token operator">=</span>http://www.cskaoyan.com指示客户端刷新频率。单位是秒

Content-Disposition: attachment<span class="token punctuation">;</span> <span class="token assign-left variable">filename</span><span class="token operator">=</span>aaa.zip指示客户端保存文件
Set-Cookie: <span class="token assign-left variable">SS</span><span class="token operator">=</span>Q0<span class="token operator">=</span>5Lb_nQ<span class="token punctuation">;</span> <span class="token assign-left variable">path</span><span class="token operator">=</span>/search服务器端发送的Cookie
Expires: <span class="token number">0</span>
Cache-Control: no-cache <span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span>  
Connection: close/Keep-Alive   
Date: Tue, <span class="token number">11</span> Jul <span class="token number">2000</span> <span class="token number">18</span>:23:51 GMT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="空行" tabindex="-1"><a class="header-anchor" href="#空行"><span>空行</span></a></h4><h4 id="响应体" tabindex="-1"><a class="header-anchor" href="#响应体"><span>响应体</span></a></h4><p>响应体里面一般情况下主要是返回了一个html文档。<strong>该部分数据会显示在浏览器的正文中（主窗口）。</strong></p><h2 id="三-https协议" tabindex="-1"><a class="header-anchor" href="#三-https协议"><span>三 HTTPS协议</span></a></h2><p>主流的网站基本都是使用的是https，特征 锁</p><p>https = http + secure</p><p>http协议有什么问题？</p><p>1.通讯过程完全明文传输，不加密</p><p>2.不验证通讯另一方的身份</p><p>3.没有完整性的校验</p><p>https针对上述三点，分别去做了对应的解决方案</p><p>1.加密。对称加密（加密解密用的是同一把秘钥（字符串），安全性略低、<strong>速度很快</strong>）、非对称加密（公钥加密，只可以用私钥来进行解密、安全性很高，速度很慢）</p><p>​ https采用的是混合加密</p><p>1234</p><p>客户端 public ------1234加密----------------------------------&gt; 服务器，使用私钥来进行解密，得到1234，服务器使用1234作为秘钥来对接下来传输的内容进行加密，传输给客户端之后，客户端使用1234来进行解密</p><p>2.验证通讯另一方的身份，也就是验证服务器的真实身份。证书。一般情况下是由一些证书的权威机构颁发给某个域名网站的。</p>`,24),b={href:"https://www.jd.com/",target:"_blank",rel:"noopener noreferrer"},g=n(`<p>jd.com----归属于A</p><p>sub.jd.com----能不能归属于B？不能。</p><p>3.完整性校验</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SHA1
C71D49A6144772F352806201EF564951BE55EDD5

下载完成后务必进行SHA1校验（推荐使用iHasher），与网站核对一致后再使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function T(k,_){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,e("p",null,[e("a",v,[s("http://www.bing.com"),t(a)])]),h,e("p",null,[e("a",b,[s("https://www.jd.com/"),t(a)])]),g])}const H=i(m,[["render",T],["__file","http.html.vue"]]),P=JSON.parse('{"path":"/java/Javaee/http.html","title":"Web及网络基础","lang":"en-US","frontmatter":{"order":1,"title":"Web及网络基础","shortTitle":"Http协议","description":"一 Web及网络基础 网络模型(分层) image-20220406222111262image-20220406222111262 OSI(Open System Interaction)七层模型 TCP/IP 模型 无论哪种模型，都是将网络进行分层，上者将网络分为7层；下者将网络分为5层（4层） 分层是逻辑上面的概念，并不是指的是物理网络中被拆分了...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/java/Javaee/http.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"Web及网络基础"}],["meta",{"property":"og:description","content":"一 Web及网络基础 网络模型(分层) image-20220406222111262image-20220406222111262 OSI(Open System Interaction)七层模型 TCP/IP 模型 无论哪种模型，都是将网络进行分层，上者将网络分为7层；下者将网络分为5层（4层） 分层是逻辑上面的概念，并不是指的是物理网络中被拆分了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-15T09:06:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-04-15T09:06:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Web及网络基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T09:06:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"一 Web及网络基础","slug":"一-web及网络基础","link":"#一-web及网络基础","children":[{"level":3,"title":"网络模型(分层)","slug":"网络模型-分层","link":"#网络模型-分层","children":[]},{"level":3,"title":"HTTP的诞生","slug":"http的诞生","link":"#http的诞生","children":[]},{"level":3,"title":"HTTP工作流程","slug":"http工作流程","link":"#http工作流程","children":[]}]},{"level":2,"title":"二 HTTP协议","slug":"二-http协议","link":"#二-http协议","children":[{"level":3,"title":"HTTP协议介绍","slug":"http协议介绍","link":"#http协议介绍","children":[]},{"level":3,"title":"HTTP请求报文","slug":"http请求报文","link":"#http请求报文","children":[]},{"level":3,"title":"HTTP响应报文","slug":"http响应报文","link":"#http响应报文","children":[]}]},{"level":2,"title":"三 HTTPS协议","slug":"三-https协议","link":"#三-https协议","children":[]}],"git":{"createdTime":1713172018000,"updatedTime":1713172018000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":13.29,"words":3986},"filePathRelative":"java/Javaee/http.md","localizedDate":"April 15, 2024","autoDesc":true}');export{H as comp,P as data};
