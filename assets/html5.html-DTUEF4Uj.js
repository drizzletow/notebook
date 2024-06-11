import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as t}from"./app-BFz7dQV9.js";const l={},h=t(`<h2 id="html5新增标签" tabindex="-1"><a class="header-anchor" href="#html5新增标签"><span>HTML5新增标签</span></a></h2><div class="hint-container tip"><p class="hint-container-title">HTML5新增特性</p><p>HTML5带来了许多新特性和改进，以下是一些主要的：</p><ul><li><p>离线存储：通过Application Cache（应用程序缓存）和Web Storage API（Web存储API），HTML5允许网页在用户的设备上存储数据，使得网页能在离线状态下工作。</p></li><li><p>多媒体支持：HTML5引入了 <code>&lt;audio&gt;</code> 和 <code>&lt;video&gt;</code> 标签，使得开发者可以直接在网页上嵌入音频和视频内容，而无需依赖第三方插件。</p></li><li><p>Web Sockets：Web Sockets API 提供了一种在用户的浏览器与服务器之间建立持久连接的方式，使得实时通信和双向数据传输成为可能。</p></li><li><p>语义化标签：HTML5引入了许多新的语义化标签，如 <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> 等，这些标签有助于搜索引擎更好地理解网页内容，同时提高了代码的可读性。</p></li><li><p>Canvas绘图：通过 <code>&lt;canvas&gt;</code> 元素和Canvas API，开发者可以在网页上绘制图形、制作动画等。</p></li><li><p>拖放API：HTML5的拖放API允许用户通过拖放操作来与网页元素进行交互。</p></li></ul></div><h3 id="_1-语义化标签" tabindex="-1"><a class="header-anchor" href="#_1-语义化标签"><span>1. 语义化标签</span></a></h3><p>HTML语义化是指使用具有明确含义的标签来构建网页内容。这样做的好处包括：</p><ul><li><p>易于理解：语义化标签使得代码更易于人类阅读和理解。</p></li><li><p>对搜索引擎友好：搜索引擎能够更好地解析语义化标签，从而提高网页在搜索结果中的排名。</p></li><li><p>对辅助技术友好：语义化标签使得屏幕阅读器等辅助技术能够更准确地解析网页内容，从而帮助残障人士更好地使用网页。</p></li></ul><p>常见的语义化标签包括 <code>&lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;</code> 等</p><p>新增语义化标签</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;:   头部标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;:       导航标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">article</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;:  内容标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">section</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;:  块级标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;:    侧边栏标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;:   尾部标签</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><ul><li>这种语义化标准主要针对搜索引的</li><li>这些新标签页面中可以使用多次的</li><li>在E9中,需要把这些元素转换为块级元素</li><li>移动端更喜欢使用这些标签</li></ul><br><h3 id="_2-多媒体标签" tabindex="-1"><a class="header-anchor" href="#_2-多媒体标签"><span>2. 多媒体标签</span></a></h3><p><strong>① 音频 audio</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">audio</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> controls</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;controls&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;song.ogg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;audio/ogg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;song.mp3&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;audio/mpeg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">audio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table class="dataintable"><tbody><tr><th style="width:20%;">属性</th><th style="width:16%;">值</th><th>描述</th></tr><tr><td class="html5_new"><a href="/tags/att_audio_autoplay.asp" title="HTML5 &lt;audio&gt; autoplay 属性">autoplay</a></td><td>autoplay</td><td>如果出现该属性，则音频在就绪后马上播放。</td></tr><tr><td class="html5_new"><a href="/tags/att_audio_controls.asp" title="HTML5 &lt;audio&gt; controls 属性">controls</a></td><td>controls</td><td>如果出现该属性，则向用户显示控件，比如播放按钮。</td></tr><tr><td class="html5_new"><a href="/tags/att_audio_loop.asp" title="HTML5 &lt;audio&gt; loop 属性">loop</a></td><td>loop</td><td>如果出现该属性，则每当音频结束时重新开始播放。</td></tr><tr><td class="html5_new"><a href="/tags/att_audio_preload.asp" title="HTML5 &lt;audio&gt; preload 属性">preload</a></td><td>preload</td><td>如果出现该属性，则音频在页面加载时进行加载，并预备播放如果使用 &quot;autoplay&quot;，则忽略该属性。</td></tr><tr><td class="html5_new"><a href="/tags/att_audio_src.asp" title="HTML5 &lt;audio&gt; src 属性">src</a></td><td><i>url</i></td><td>要播放的音频的 URL。</td></tr></tbody></table><p><strong>② 视频</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;movie.ogg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> controls</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;controls&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 静音播放 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;320&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;240&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> autoplay</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;autoplay&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> muted</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;muted&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> loop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;loop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;movie.ogg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;video/ogg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;movie.mp4&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;video/mp4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="html5表单新特性" tabindex="-1"><a class="header-anchor" href="#html5表单新特性"><span>HTML5表单新特性</span></a></h2><p>HTML 和 HTML5 在表单方面的主要区别在于 HTML5 引入了一系列新的表单元素和属性，这些改进增强了表单的交互性、可用性和数据验证能力。下面将详细解释这些区别，并给出相应的示例。</p><h3 id="_1-新的表单输入类型" tabindex="-1"><a class="header-anchor" href="#_1-新的表单输入类型"><span>1. 新的表单输入类型</span></a></h3><p>HTML5 为 <code>&lt;input&gt;</code> 标签引入了一些新的 type 属性值，这些值提供了不同的输入控件，使得收集数据更加便捷。例如：</p><ul><li>email：用于电子邮件地址的输入。</li><li>date：用于选择日期的输入。</li><li>number：用于数字的输入，可以通过 min、max、step 等属性进行范围限制和步长设置。</li><li>range：用于一定范围内的数字输入，通常显示为滑动条。</li><li>color：用于颜色选择。</li><li>search：用于搜索字段，在某些浏览器中显示为圆角框。</li><li>tel：用于电话号码的输入，虽然不会进行电话号码格式的验证，但提供了语义化的提示。</li></ul><p>示例：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;电子邮件:&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;email&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;email&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;email&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> required</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;birthdate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;出生日期:&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;date&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;birthdate&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;birthdate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;quantity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;数量:&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;quantity&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;quantity&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> min</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;10&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> step</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-表单验证" tabindex="-1"><a class="header-anchor" href="#_2-表单验证"><span>2. 表单验证</span></a></h3><p>HTML5 提供了原生的表单验证功能，通过在表单控件上添加 required 属性，可以确保用户在提交表单前填写了必填字段。此外，新的输入类型如 email 会自动验证输入内容是否符合相应的格式。</p><p>示例：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;username&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;用户名:&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;username&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;username&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> required</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;电子邮件:&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;email&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;email&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;email&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> required</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;submit&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;提交&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-新的表单属性" tabindex="-1"><a class="header-anchor" href="#_3-新的表单属性"><span>3. 新的表单属性</span></a></h3><ul><li>autofocus：此属性规定在页面加载时，哪个表单元素应自动获得焦点。</li><li>placeholder：此属性提供了一种在表单元素中显示提示信息的机制，通常显示为灰色的占位文本。</li><li>form：此属性允许你将表单控件与表单本身分离，使得布局更加灵活。</li><li>novalidate：将此属性添加到 <code>&lt;form&gt;</code> 标签可以禁用浏览器的默认验证。</li></ul><p>示例：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;fname&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;名字:&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;fname&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;fname&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;请输入你的名字&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> autofocus</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;submit&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;提交&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-进度和度量" tabindex="-1"><a class="header-anchor" href="#_4-进度和度量"><span>4. 进度和度量</span></a></h3><p>HTML5 引入了 <code>&lt;progress&gt;</code> 和 <code>&lt;meter&gt;</code> 元素，分别用于表示任务的进度和特定范围的度量。</p><p>示例：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">progress</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;70&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;70%&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">progress</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">meter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;0.8&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> min</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;80%&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">meter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-表单输出" tabindex="-1"><a class="header-anchor" href="#_5-表单输出"><span>5. 表单输出</span></a></h3><p>HTML5 的 <code>&lt;output&gt;</code> 元素表示计算结果或用户操作的结果。</p><p>示例：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> oninput</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">result</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">parseInt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">parseInt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">b</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; +  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;b&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; =  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">output</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">output</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),n=[h];function k(e,p){return a(),s("div",null,n)}const g=i(l,[["render",k],["__file","html5.html.vue"]]),B=JSON.parse('{"path":"/web/base/html/html5.html","title":"HTML5新特性","lang":"en-US","frontmatter":{"order":10,"title":"HTML5新特性","description":"HTML5新增标签 HTML5新增特性 HTML5带来了许多新特性和改进，以下是一些主要的： 离线存储：通过Application Cache（应用程序缓存）和Web Storage API（Web存储API），HTML5允许网页在用户的设备上存储数据，使得网页能在离线状态下工作。 多媒体支持：HTML5引入了 <audio> 和 <video> 标签...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/web/base/html/html5.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"HTML5新特性"}],["meta",{"property":"og:description","content":"HTML5新增标签 HTML5新增特性 HTML5带来了许多新特性和改进，以下是一些主要的： 离线存储：通过Application Cache（应用程序缓存）和Web Storage API（Web存储API），HTML5允许网页在用户的设备上存储数据，使得网页能在离线状态下工作。 多媒体支持：HTML5引入了 <audio> 和 <video> 标签..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-26T15:08:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-05-26T15:08:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML5新特性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-26T15:08:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"HTML5新增标签","slug":"html5新增标签","link":"#html5新增标签","children":[{"level":3,"title":"1. 语义化标签","slug":"_1-语义化标签","link":"#_1-语义化标签","children":[]},{"level":3,"title":"2. 多媒体标签","slug":"_2-多媒体标签","link":"#_2-多媒体标签","children":[]}]},{"level":2,"title":"HTML5表单新特性","slug":"html5表单新特性","link":"#html5表单新特性","children":[{"level":3,"title":"1. 新的表单输入类型","slug":"_1-新的表单输入类型","link":"#_1-新的表单输入类型","children":[]},{"level":3,"title":"2. 表单验证","slug":"_2-表单验证","link":"#_2-表单验证","children":[]},{"level":3,"title":"3. 新的表单属性","slug":"_3-新的表单属性","link":"#_3-新的表单属性","children":[]},{"level":3,"title":"4. 进度和度量","slug":"_4-进度和度量","link":"#_4-进度和度量","children":[]},{"level":3,"title":"5. 表单输出","slug":"_5-表单输出","link":"#_5-表单输出","children":[]}]}],"git":{"createdTime":1713172018000,"updatedTime":1716736124000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":2}]},"readingTime":{"minutes":5.2,"words":1560},"filePathRelative":"web/base/html/html5.md","localizedDate":"April 15, 2024","autoDesc":true}');export{g as comp,B as data};
