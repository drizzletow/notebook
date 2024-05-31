import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as d,c as u,b as n,a as s,d as e,w as a,e as l}from"./app-DsZR3byf.js";const v={},m=n("p",null,"常用代码质量与格式化工具 (Code Quality & Formatting Tools)",-1),k={href:"https://zh-hans.eslint.org/docs/latest/use/getting-started",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"ESLint",-1),h={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"Prettier",-1),S=n("li",null,[n("p",null,[n("strong",null,"Stylelint"),e(" - 类似于ESLint，但专用于CSS和SCSS等样式文件的静态分析和格式化。")])],-1),_=n("li",null,[n("p",null,[n("strong",null,"EditorConfig"),e(" - 跨编辑器的配置文件标准，帮助开发者在不同的编辑器中保持一致的代码风格。")])],-1),f=l(`<div class="hint-container tip"><p class="hint-container-title">推荐方案</p><p>在开发中，最常用的代码质量和格式化工具方案可能是ESLint与Prettier的结合。</p><ul><li><p>ESLint：用于检查代码质量，即确保代码没有错误或潜在的问题。ESLint非常灵活，可以通过配置文件自定义规则，或者使用一些现有的配置集（如 Airbnb、Google、Standard 等）。ESLint主要关注的是代码的质量问题，比如未使用的变量，丢失的分号等。</p></li><li><p>Prettier：用于代码格式化，以确保代码风格的一致性。Prettier配置简单，函数的换行、箭头函数括号的使用、字符串使用单引号还是双引号等这些格式问题，Prettier都能统一处理，使你的代码风格看起来更整洁一致。</p></li></ul><p>这两个工具可以并行使用，在许多项目中你会看到这两个工具同时存在。ESLint 检查你的代码质量，Prettier 负责代码的格式。</p><p>ESLint与Prettier可以很好地集成在VSCode等常用的开发环境中，可以在你保存文件时自动修复和格式化你的代码，大大提高开发效率。</p></div><h2 id="eslint-prettier" tabindex="-1"><a class="header-anchor" href="#eslint-prettier"><span>EsLint+Prettier</span></a></h2><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint"><span>EsLint</span></a></h3><p>首先需要安装ESLint。在项目中安装是推荐的做法，因为这样可以确保每个项目都有自己的ESLint版本和配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在项目中设置一个基本的配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx eslint <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，ESLint会询问几个关于你的代码风格和配置的问题，然后生成一个配置文件（ <code>.eslintrc.*</code> ）。</p><p>接下来就可以开始使用ESLint来检查你代码了：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx eslint yourfile.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令会让ESLint检测 <code>yourfile.js</code> 文件，并在控制台输出报告。</p><p>在真实的项目中，可能想要为所有的JavaScript文件配置一个检查命令，你可以在 <code>package.json</code> 的 &quot;scripts&quot; 部分添加一个 &quot;lint&quot; 命令，如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint .&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以通过下列命令运行ESLint：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> run lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),y={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},E=n("h3",{id:"eslint-prettier-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint-prettier-1"},[n("span",null,"EsLint+Prettier")])],-1),L={href:"https://github.com/prettier/eslint-config-prettier#installation",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"eslint-config-prettier",-1),P=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"eslint-config-prettier"),n("p",null,[n("code",null,"eslint-config-prettier"),e("是一个 ESLint 配置，它会禁用所有和 Prettier 冲突的 ESLint 规则。当同时使用 ESLint 和 Prettier 时，有些 ESLint 的规则可能会与 Prettier 的格式化设置产生冲突，这时候就可以使用 "),n("code",null,"eslint-config-prettier"),e(" , 它会自动关闭那些与Prettier冲突的ESLint规则，让你的代码更容易管理。")]),n("p",null,"Prettier 的目标是自动化代码格式化，而 ESLint 旨在帮助你发现代码中的问题。虽然一些 ESLint 规则也涵盖了代码格式，但 Prettier 可以提供更多的格式定制，并且与 ESLint 结合使用可以让你同时享受到自动化代码格式化和发现代码问题的好处。")],-1),x=n("p",null,[e("以下是一个配置ESLint以使用"),n("code",null,"eslint-config-prettier"),e("的基本步骤示例：")],-1),j=n("p",null,[n("strong",null,"安装所需依赖"),e("："),n("br"),e(" 首先需要安装"),n("code",null,"eslint"),e("、"),n("code",null,"prettier"),e("、"),n("code",null,"eslint-plugin-prettier"),e("以及"),n("code",null,"eslint-config-prettier"),e("。可以通过npm或yarn进行安装：")],-1),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(),n("span",{class:"token function"},"install"),e(` eslint prettier eslint-plugin-prettier eslint-config-prettier --save-dev
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(" eslint prettier eslint-plugin-prettier eslint-config-prettier "),n("span",{class:"token parameter variable"},"--dev"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),T=l(`<li><p><strong>创建或修改ESLint配置文件</strong>：<br> 通常需要在项目根目录下创建或编辑<code>.eslintrc.*</code>文件（可能是<code>.eslintrc.js</code>、<code>.eslintrc.yml</code>或<code>.eslintrc.json</code>）。下面以<code>.eslintrc.js</code>为例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 指定环境，以便ESLint可以理解你代码的上下文（比如浏览器环境、Node.js环境）</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 扩展基本的规则集，比如eslint:recommended</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加对Prettier规则的支持，注意将其放在最后以确保其规则优先级最高</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 如果你的项目中还使用了特定的框架，比如Vue或React，还可以添加对应的eslint配置</span>
    <span class="token comment">// 例如：&#39;plugin:vue/essential&#39;, &#39;@vue/prettier&#39;, &#39;@vue/typescript/recommended&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件列表，这里我们需要使用prettier插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 自定义规则，如果有的话</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里可以添加或覆盖特定的规则，但使用&#39;prettier/recommended&#39;时，</span>
    <span class="token comment">// 大部分格式相关的规则都会由Prettier接管，所以通常不需要额外配置格式规则</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>配置Prettier</strong>：<br> 除了在ESLint中配置外，还需要一个<code>.prettierrc</code>文件来指定Prettier的格式化规则。例如：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>      <span class="token comment">// 使用单引号</span>
  <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// 尾随逗号风格</span>
  <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>             <span class="token comment">// 语句结尾使用分号</span>
  <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>            <span class="token comment">// Tab缩进宽度</span>
  <span class="token property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>          <span class="token comment">// 使用空格代替Tab</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),w=l(`<p>完成以上步骤后，当运行ESLint时，它将会自动应用Prettier的格式化规则，并且避免与Prettier的格式化产生冲突。同时，你也可以通过编辑器插件或命令行工具单独使用Prettier进行格式化。</p><h3 id="vscode插件" tabindex="-1"><a class="header-anchor" href="#vscode插件"><span>VSCode插件</span></a></h3><div class="hint-container info"><p class="hint-container-title">在VSCode中结合使用Prettier和ESLint插件</p><h4 id="安装必要的vscode插件" tabindex="-1"><a class="header-anchor" href="#安装必要的vscode插件"><span>安装必要的VSCode插件</span></a></h4><p>首先，确保安装了以下VSCode插件：</p><ul><li><strong>ESLint</strong>: 用于识别并修复JavaScript和TypeScript代码中的潜在错误和不符合编码规范的地方。</li><li><strong>Prettier</strong>: 用于自动格式化代码，使其风格一致。</li><li><strong>Vetur</strong>（仅针对Vue项目）: 如果你的项目使用Vue，Vetur提供了对Vue文件的支持，包括ESLint和Prettier的集成。</li></ul><h4 id="vscode设置" tabindex="-1"><a class="header-anchor" href="#vscode设置"><span>VSCode设置</span></a></h4><ul><li>打开VSCode的设置（File &gt; Preferences &gt; Settings 或快捷键 <code>Ctrl + ,</code>）。</li><li>确保Prettier和ESLint插件被正确启用。</li><li>在设置中搜索<code>Editor: Default Formatter</code>，选择<code>Prettier - Code formatter</code>作为默认格式化程序。</li><li>开启保存时自动格式化：找到<code>Editor: Format On Save</code>，勾选此选项。</li><li>如果有需要，可以在<code>settings.json</code>中手动添加或调整相关设置，例如：<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onSave&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="解决冲突" tabindex="-1"><a class="header-anchor" href="#解决冲突"><span>解决冲突</span></a></h4><p>如果遇到ESLint和Prettier的规则冲突，优先考虑按照Prettier的规则调整ESLint配置，避免在<code>.eslintrc.*</code>中直接规定与Prettier相矛盾的格式规则。</p><p>完成上述步骤后，每次保存文件时，VSCode会自动运用ESLint检查代码质量并使用Prettier格式化代码，确保代码既符合编码规范又风格统一。</p></div>`,3);function N(F,A){const t=r("ExternalLinkIcon"),p=r("CodeTabs");return d(),u("div",null,[m,n("ol",null,[n("li",null,[n("p",null,[n("a",k,[b,s(t)]),e(" - 非常强大的JavaScript代码静态分析工具，用于发现潜在错误和不符合代码规范的地方，支持丰富的规则和插件系统。")])]),n("li",null,[n("p",null,[n("a",h,[g,s(t)]),e(" - 代码格式化工具，自动格式化代码，确保团队间代码风格一致。")])]),S,_]),f,n("p",null,[e("以上就是ESLint的基本使用方式。对于更详细的配置和规则，可以查阅ESLint的官方文档。ESLint的官方网站是："),n("a",y,[e("https://eslint.org/"),s(t)]),e("。")]),E,n("p",null,[e("在项目中通常同时使用Prettier和ESLint, 此时可以使用 "),n("a",L,[q,s(t)])]),P,x,n("ol",null,[n("li",null,[j,s(p,{id:"105",data:[{id:"npm"},{id:"yarn"}],active:0,"tab-id":"shell"},{title0:a(({value:i,isActive:o})=>[e("npm")]),title1:a(({value:i,isActive:o})=>[e("yarn")]),tab0:a(({value:i,isActive:o})=>[C]),tab1:a(({value:i,isActive:o})=>[V]),_:1})]),T]),w])}const z=c(v,[["render",N],["__file","format.html.vue"]]),M=JSON.parse('{"path":"/web/core/tool/format.html","title":"代码质量与格式化","lang":"en-US","frontmatter":{"order":20,"title":"代码质量与格式化","description":"常用代码质量与格式化工具 (Code Quality & Formatting Tools) ESLint - 非常强大的JavaScript代码静态分析工具，用于发现潜在错误和不符合代码规范的地方，支持丰富的规则和插件系统。 Prettier - 代码格式化工具，自动格式化代码，确保团队间代码风格一致。 Stylelint - 类似于ESLint，但...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/web/core/tool/format.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"代码质量与格式化"}],["meta",{"property":"og:description","content":"常用代码质量与格式化工具 (Code Quality & Formatting Tools) ESLint - 非常强大的JavaScript代码静态分析工具，用于发现潜在错误和不符合代码规范的地方，支持丰富的规则和插件系统。 Prettier - 代码格式化工具，自动格式化代码，确保团队间代码风格一致。 Stylelint - 类似于ESLint，但..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-31T06:27:16.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-05-31T06:27:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码质量与格式化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-31T06:27:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"EsLint+Prettier","slug":"eslint-prettier","link":"#eslint-prettier","children":[{"level":3,"title":"EsLint","slug":"eslint","link":"#eslint","children":[]},{"level":3,"title":"EsLint+Prettier","slug":"eslint-prettier-1","link":"#eslint-prettier-1","children":[]},{"level":3,"title":"VSCode插件","slug":"vscode插件","link":"#vscode插件","children":[]}]}],"git":{"createdTime":1717136836000,"updatedTime":1717136836000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":5.86,"words":1757},"filePathRelative":"web/core/tool/format.md","localizedDate":"May 31, 2024","autoDesc":true}');export{z as comp,M as data};
