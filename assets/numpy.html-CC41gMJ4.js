import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as n}from"./app-BFz7dQV9.js";const l={},h=n(`<h2 id="numpy图像处理基础" tabindex="-1"><a class="header-anchor" href="#numpy图像处理基础"><span>Numpy图像处理基础</span></a></h2><h3 id="为什么numpy可以处理图像" tabindex="-1"><a class="header-anchor" href="#为什么numpy可以处理图像"><span>为什么Numpy可以处理图像</span></a></h3><p>计算机图像基础回顾：</p><ul><li>计算机图像是由像素组成的二维或三维数据结构。每个像素表示图像中的一个点，具有特定的位置和颜色信息。在二维图像中，每个像素包含了纵向和横向的位置信息以及对应的颜色值。而在三维图像中，还会包含深度或通道信息，用于表示颜色的不同分量（如红、绿、蓝）或其他特征。</li><li>对于彩色图像，通常使用RGB（红、绿、蓝）颜色模型，其中每个像素的颜色由三个通道的强度值表示。对于灰度图像，只有一个通道，表示像素的亮度或灰度级别。</li></ul><p>Numpy库简介：</p><ul><li>NumPy是一个用于科学计算的强大库，提供了高效的多维数组操作和数值计算功能。其核心数据结构是多维数组（ndarray），它是一个能够存储同类型数据的连续块。Numpy还提供了高效的内存管理和向量化操作，使得对大型图像进行高性能的数值计算和图像处理变得更加简单和高效。</li></ul><p>为什么Numpy可以处理图像的原因：</p><ul><li>由于图像数据本质上是多维数组，可以将图像数据表示为NumPy数组。NumPy提供了丰富的数组操作函数和方法，使得图像处理任务变得更加方便和灵活。使用NumPy，我们可以轻松地对图像进行裁剪、调整大小、旋转、滤波、亮度调整等操作，而无需编写冗长的循环或逐像素操作。</li><li>此外，NumPy还与其他图像处理库（如Pillow和OpenCV）紧密结合，可以轻松地进行图像数据的转换、交互和集成。</li></ul><div class="hint-container tip"><p class="hint-container-title">总结</p><p>NumPy之所以能够成为图像处理任务的理想选择，是因为其高效的多维数组操作能力和与其他图像处理库的良好集成性，使得图像处理变得更加便捷和高效。</p></div><h3 id="加载图片资源到内存" tabindex="-1"><a class="header-anchor" href="#加载图片资源到内存"><span>加载图片资源到内存</span></a></h3><p>Numpy本身并不能直接读取图片资源，要使用NumPy进行图像处理，可以使用Pillow库（也称为PIL）加载硬盘中的图像，并将其转换为NumPy数组。下面是详细步骤：</p><ol><li><p>安装Pillow库（如果尚未安装），可以使用以下命令在命令行中进行安装：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>pip install Pillow</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>导入所需的库：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> PIL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用Pillow库打开图像文件：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>将图像转换为NumPy数组：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(image)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>完成上述步骤后，<code>image_array</code> 就是包含图像数据的NumPy数组。可以使用NumPy数组的各种功能和函数对图像进行处理和分析。</p><p>以下是完整的代码示例：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> PIL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 打开图像文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 将图像转换为NumPy数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(image)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 打印图像数组的形状和数据类型</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;图像数组的形状:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, image_array.shape)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;图像数组的数据类型:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, image_array.dtype)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请确保将 <code>&#39;image.jpg&#39;</code> 替换为实际的图像文件路径。这样就可以将硬盘中的图像加载到内存，并将其转换为NumPy数组，以便后续使用NumPy进行图像处理操作。</p><h3 id="数组和常用图像对象的转换" tabindex="-1"><a class="header-anchor" href="#数组和常用图像对象的转换"><span>数组和常用图像对象的转换</span></a></h3><p>要在NumPy数组和常用图像对象之间进行相互转换，可以使用Pillow（PIL）、OpenCV和pywin32库中提供的相应方法。下面是各个库之间相互转换的示例：</p><ol><li>NumPy数组和PIL图像对象之间的转换：</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> PIL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># NumPy数组转为PIL图像对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]], </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">dtype</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">np.uint8)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">pil_image </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">fromarray</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(image_array)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># PIL图像对象转为NumPy数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(pil_image)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>NumPy数组和OpenCV图像对象之间的转换：</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> cv2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># NumPy数组转为OpenCV图像对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]], </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">dtype</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">np.uint8)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">opencv_image </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> cv2.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">cvtColor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(image_array, cv2.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">COLOR_RGB2BGR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># OpenCV图像对象转为NumPy数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> cv2.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">cvtColor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(opencv_image, cv2.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">COLOR_BGR2RGB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>NumPy数组和pywin32中的位图对象之间的转换：</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> win32ui</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># NumPy数组转为pywin32位图对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]], </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">dtype</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">np.uint8)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">bitmap </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> win32ui.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">CreateBitmapFromBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(image_array.shape[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], image_array.shape[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], image_array.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">tobytes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># pywin32位图对象转为NumPy数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">frombuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(bitmap.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">GetBitmapBits</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">dtype</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">np.uint8).</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">reshape</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">((bitmap.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">GetHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(), bitmap.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">GetWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，在转换过程中，可能需要考虑颜色通道顺序、数据类型以及形状等因素，以确保转换正确无误。</p><h2 id="numpy图像处理示例" tabindex="-1"><a class="header-anchor" href="#numpy图像处理示例"><span>Numpy图像处理示例</span></a></h2><h3 id="使用numpy裁剪图像" tabindex="-1"><a class="header-anchor" href="#使用numpy裁剪图像"><span>使用Numpy裁剪图像</span></a></h3><p>使用NumPy进行图像裁剪的步骤和实现方式如下(以下是完整的代码示例)：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> PIL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 打开图像并转换为NumPy数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(image)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 定义裁剪区域</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">x_start, y_start </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # 裁剪区域的左上角坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">x_end, y_end </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 300</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # 裁剪区域的右下角坐标</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 裁剪图像</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">cropped_image </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> image_array[y_start:y_end, x_start:x_end]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 将裁剪后的图像保存为文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">cropped_image_pil </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">fromarray</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(cropped_image)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">cropped_image_pil.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;cropped_image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意事项</p><ul><li>裁剪区域的坐标需要在图像的尺寸范围内，否则会导致索引错误。</li><li>使用NumPy进行裁剪时，裁剪区域的索引顺序是 <code>(y_start:y_end, x_start:x_end)</code>，其中 <code>y</code> 表示行（纵向）， <code>x</code> 表示列（横向）。</li><li>裁剪后的图像将保留原始图像的数据类型和颜色通道顺序。</li><li>如果需要保存裁剪后的图像，请确保保存前将NumPy数组转换为PIL图像对象，然后使用 <code>save()</code> 方法保存为文件。</li><li>在裁剪图像时，本质是对Numpy数组进行索引和切片，并不会创建图像的副本，而是直接返回裁剪后的图像视图。如果对裁剪后的图像进行修改，会影响到原始图像。</li></ul></div><h3 id="使用numpy调整图片尺寸" tabindex="-1"><a class="header-anchor" href="#使用numpy调整图片尺寸"><span>使用Numpy调整图片尺寸</span></a></h3><p>NumPy提供了resize函数，可以用于调整数组的尺寸。 下面是使用NumPy实现图像尺寸调整的示例代码：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> PIL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 打开图像并转换为NumPy数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">image_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(image)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 定义目标尺寸</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">target_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 800</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # 新的目标宽度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">target_height </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # 新的目标高度</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 调整图像尺寸</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">resized_image </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">resize</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(image_array, (target_height, target_width, image_array.shape[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 将调整后的图像保存为文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">resized_image_pil </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Image.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">fromarray</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(resized_image)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">resized_image_pil.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;resized_image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意事项和建议</p><ol><li><p>使用NumPy的resize函数进行图像尺寸调整时，会直接修改数组的形状，可能会引起图像内容的拉伸或压缩。确保目标尺寸与原始图像的宽高比一致，以避免图像失真。 调整尺寸后的数组可以比原始数组的尺寸大或小</p><ul><li>如果调整后的新形状大于原始数组的大小，数组将会扩展并填充额外的元素。这可能会导致数据的重复或扩展。</li><li>如果调整后的新形状小于原始数组的大小，数组将会缩小，丢失一些元素。这可能会导致数据的丢失或压缩。</li></ul></li><li><p>虽然NumPy的resize函数可以实现简单的图像尺寸调整，但Pillow库提供了更多的调整选项和插值方法，可以更精确地控制图像的质量和效果。因此，建议使用Pillow库的resize方法进行图像尺寸调整，以获得更好的结果。</p></li></ol></div><h3 id="通道和颜色模式调整" tabindex="-1"><a class="header-anchor" href="#通道和颜色模式调整"><span>通道和颜色模式调整</span></a></h3>`,35),t=[h];function e(k,p){return a(),s("div",null,t)}const y=i(l,[["render",e],["__file","numpy.html.vue"]]),g=JSON.parse('{"path":"/python/Project/image/numpy.html","title":"NumPy图像处理","lang":"en-US","frontmatter":{"order":7,"title":"NumPy图像处理","icon":"engine","description":"Numpy图像处理基础 为什么Numpy可以处理图像 计算机图像基础回顾： 计算机图像是由像素组成的二维或三维数据结构。每个像素表示图像中的一个点，具有特定的位置和颜色信息。在二维图像中，每个像素包含了纵向和横向的位置信息以及对应的颜色值。而在三维图像中，还会包含深度或通道信息，用于表示颜色的不同分量（如红、绿、蓝）或其他特征。 对于彩色图像，通常使用...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/python/Project/image/numpy.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"NumPy图像处理"}],["meta",{"property":"og:description","content":"Numpy图像处理基础 为什么Numpy可以处理图像 计算机图像基础回顾： 计算机图像是由像素组成的二维或三维数据结构。每个像素表示图像中的一个点，具有特定的位置和颜色信息。在二维图像中，每个像素包含了纵向和横向的位置信息以及对应的颜色值。而在三维图像中，还会包含深度或通道信息，用于表示颜色的不同分量（如红、绿、蓝）或其他特征。 对于彩色图像，通常使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-03T10:40:35.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-04-03T10:40:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NumPy图像处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-03T10:40:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"Numpy图像处理基础","slug":"numpy图像处理基础","link":"#numpy图像处理基础","children":[{"level":3,"title":"为什么Numpy可以处理图像","slug":"为什么numpy可以处理图像","link":"#为什么numpy可以处理图像","children":[]},{"level":3,"title":"加载图片资源到内存","slug":"加载图片资源到内存","link":"#加载图片资源到内存","children":[]},{"level":3,"title":"数组和常用图像对象的转换","slug":"数组和常用图像对象的转换","link":"#数组和常用图像对象的转换","children":[]}]},{"level":2,"title":"Numpy图像处理示例","slug":"numpy图像处理示例","link":"#numpy图像处理示例","children":[{"level":3,"title":"使用Numpy裁剪图像","slug":"使用numpy裁剪图像","link":"#使用numpy裁剪图像","children":[]},{"level":3,"title":"使用Numpy调整图片尺寸","slug":"使用numpy调整图片尺寸","link":"#使用numpy调整图片尺寸","children":[]},{"level":3,"title":"通道和颜色模式调整","slug":"通道和颜色模式调整","link":"#通道和颜色模式调整","children":[]}]}],"git":{"createdTime":1712140835000,"updatedTime":1712140835000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":6.37,"words":1911},"filePathRelative":"python/Project/image/numpy.md","localizedDate":"April 3, 2024","autoDesc":true}');export{y as comp,g as data};
