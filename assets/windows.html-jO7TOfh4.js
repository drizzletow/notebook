import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as d,a as s,b as e,d as a,e as i}from"./app-By9poVyN.js";const r="/notebook/assets/image-20220327093741984-D5QMw34i.png",c="/notebook/assets/2652424100451-D4MLaTjK.png",p="/notebook/assets/1105935118877-BYdzy9Ve.png",u={},h=i(`<h2 id="一-cmd命令" tabindex="-1"><a class="header-anchor" href="#一-cmd命令"><span>一 CMD命令</span></a></h2><h3 id="_1-目录和文件" tabindex="-1"><a class="header-anchor" href="#_1-目录和文件"><span>1. 目录和文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token builtin class-name">cd</span> directory            <span class="token comment"># 切换目录</span>

d:                      <span class="token comment"># 切换到 d 盘</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>code</p><p>explore</p><br><h3 id="_2-进程和服务" tabindex="-1"><a class="header-anchor" href="#_2-进程和服务"><span>2. 进程和服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> findstr <span class="token number">8102</span>  <span class="token comment"># 查找指定端口号的进程信息（进程ID）</span>

taskkill /pid <span class="token number">45768</span> /f       <span class="token comment"># 强杀 指定id（45768）的进程</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="二-windows-terminal" tabindex="-1"><a class="header-anchor" href="#二-windows-terminal"><span>二 Windows Terminal</span></a></h2>`,10),m={href:"https://docs.microsoft.com/zh-cn/windows/terminal/",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
schemes 数组是用来定义配色方案的。

name ：        这个配色方案的 ID 。
background ：  背景颜色。
foreground ：  输出显示字体颜色，ssh 输入命令颜色。
black ：       箭头左边三角，git 目录的 .git 目录下提示箭头背景提示文字。
red ：         <span class="token function">ssh</span> 后 <span class="token function">vim</span> 打开文本文件已输入行普通字符显示文字。
green ：       <span class="token function">git</span> 目录的 .git 目录下提示箭头背景提示。
yellow ：      <span class="token function">git</span> 目录的分支箭头背景提示。
blue ：        目录箭头本体。
purple ：      <span class="token function">ssh</span> 后 <span class="token function">vim</span> 等工具打开文件后的 <span class="token punctuation">{</span> 和 <span class="token punctuation">}</span>等符号本体，git 更新完后显示的分支箭头背景提示。
cyan ：        引号及内部字符。
white ：       未知。
brightBlack ： <span class="token builtin class-name">cd</span> 等 命令后面的 <span class="token punctuation">..</span> 和 * 等特殊符号，以及命令参数字符颜色。
brightRed ：   系统提示字符颜色：错误的命令，git status 显示。
brightGreen ： <span class="token function">ssh</span> 用户权限显示。
brightYellow ：输入的命令字符。
brightBlue ：  <span class="token function">ssh</span> 文件夹等高亮显示，ssh 目录，vim 打开文本文件未输入行 ~ 字符显示。
brightPurple ：未知。
brightCyan ：  <span class="token function">ssh</span> <span class="token function">vim</span> 等工具打开文件后的 <span class="token punctuation">{</span> 和 <span class="token punctuation">}</span> 等符号背景。
brightWhite ： 目录箭头左边和中间的提示文字。

<span class="token string">&quot;cursorColor&quot;</span><span class="token builtin class-name">:</span> 光标颜色

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_1-oh-my-posh" tabindex="-1"><a class="header-anchor" href="#_1-oh-my-posh"><span>1. Oh-My-Posh</span></a></h3>`,3),b={href:"https://www.powershellgallery.com/packages/oh-my-posh",target:"_blank",rel:"noopener noreferrer"},g={href:"https://ohmyposh.dev/docs/installation/windows",target:"_blank",rel:"noopener noreferrer"},k=i(`<br><p><strong>第一步：安装 oh-my-posh</strong> ：</p><p>以管理员方式打开 PowerShell （注意网络不好可能会安装失败）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>winget <span class="token function">install</span> JanDeDobbeleer.OhMyPosh <span class="token parameter variable">-s</span> winget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="image-20220327093741984" tabindex="0" loading="lazy"><figcaption>image-20220327093741984</figcaption></figure><br>',6),w=s("strong",null,"第二步：安装和设置字体",-1),_={href:"https://ohmyposh.dev/docs/installation/fonts",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>上述地址中介绍了 oh-my-posh 提供了在 powershell中选择安装字体的方式，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>oh-my-posh font <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是效果还不稳定，会出现字体安装不全的情形。所以字体安装还是以自行下载安装为主：</p>`,3),q={href:"https://www.nerdfonts.com/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.nerdfonts.com/font-downloads",target:"_blank",rel:"noopener noreferrer"},x=i(`<p>推荐使用 <strong>DejaVuSansMono Nerd Font</strong> 或者 <strong>Cousine Nerd Font</strong>，这两款字体比较全，适配也还不错。</p><p>下载后解压安装字体即可</p><p><strong>设置字体</strong>：（修改JSON或在terminal界面中直接设置）</p><p>用管理员身份打开Powershell(Windows Terminal)，在设置界面中打开 <code>settings.json</code> ，</p><p>在 <code>&quot;defaults&quot;：{}</code>的括号里面写Font.face的内容：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>    <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> 
        <span class="token punctuation">{</span>
            <span class="token property">&quot;font&quot;</span><span class="token operator">:</span> 
            <span class="token punctuation">{</span>
                <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MesloLGM NF&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>第三步：oh-my-posh相关配置</strong> ：</p><p>安装成功后进行初始化设置, 若想要配置永久生效，需要修改对应的配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>code <span class="token variable">$profile</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令会使用VScode打开文件，将下面的初始化命令加入其中即可 （配置后每次打开Powershell都会执行脚本文件中的命令）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>oh-my-posh init pwsh <span class="token parameter variable">--config</span> <span class="token string">&quot;<span class="token variable">$env</span>:POSH_THEMES_PATH\\kali.omp.json&quot;</span> <span class="token operator">|</span> Invoke-Expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后输入下面的命令，来让配置生效：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span> <span class="token variable">$PROFILE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面过程中kali是主题的一种，如果要其他主题的话，那么在命令行里面输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Get-PoshThemes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选一个喜欢的，比如喜欢jandedobbeleer这个主题，按上面的步骤把$PROFILE里面的<code>&quot;kali.omp.json&quot;</code>改成<code>&quot;jandedobbeleer.omp.json&quot;</code>就行了。<br> 在这个过程中很可能会出现一些图标不显示，显示一半，或者各种方框乱码，一般都是字体的问题，安装字体, 多重启windows Terminal几次即可。</p><br><p>设置命令行自动补全和提示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Set-PSReadlineKeyHandler <span class="token parameter variable">-Key</span> Tab <span class="token parameter variable">-Function</span> MenuComplete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="_2-毛玻璃特效" tabindex="-1"><a class="header-anchor" href="#_2-毛玻璃特效"><span>2. 毛玻璃特效</span></a></h3>`,22),S={href:"https://github.com/microsoft/cascadia-code/releases",target:"_blank",rel:"noopener noreferrer"},P=i(`<p>解压后安装所有 ttf 字体 （为所有用户安装）</p><p>修改 JSON 文件：</p><div class="language-JSON line-numbers-mode" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code>{
    &quot;commandline&quot;: &quot;gsudo.exe powershell.exe -nologo&quot;,
    // &quot;commandline&quot;: &quot;powershell.exe&quot;,
    &quot;guid&quot;: &quot;{61c54bbd-c2c6-5271-96e7-009a87ff44bf}&quot;,
    &quot;hidden&quot;: false,
    &quot;name&quot;: &quot;Windows PowerShell&quot;,
    // 添加如下内容
    &quot;acrylicOpacity&quot;: 0.7,
    &quot;colorScheme&quot; : &quot;Frost&quot;,
    &quot;cursorColor&quot; : &quot;#000000&quot;,
    &quot;fontFace&quot; : &quot;Cascadia Code PL&quot;,
    &quot;useAcrylic&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),O={href:"https://learn.microsoft.com/zh-cn/windows/terminal/custom-terminal-gallery/frosted-glass-theme",target:"_blank",rel:"noopener noreferrer"},T=s("br",null,null,-1),N=s("h3",{id:"_3-安装gsudo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-安装gsudo"},[s("span",null,"3. 安装gsudo")])],-1),M=s("p",null,"gsudo：管理员打开工具",-1),W={href:"https://github.com/gerardog/gsudo",target:"_blank",rel:"noopener noreferrer"},z=i(`<br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装方式：</span>

<span class="token number">1</span>. Github下载msi格式，安装即可，或下载zip格式，解压配置环境变量即可

https://github.com/gerardog/gsudo/releases/tag/v1.2.0


<span class="token number">2</span>. 通过 PowerShell 命令安装

winget <span class="token function">install</span> gsudo

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows terminal默认是非管理员打开的，安装 gsudo 后 在powershell 或cmd设置项下将命令行改为</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gsudo.exe powershell.exe <span class="token parameter variable">-nologo</span>  <span class="token comment">#或</span>

gsudo.exe cmd.exe 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-nologo</code> 参数作用是去掉启动时前面那一串版权声明等信息, 可以不加</p><p>如果不想要默认管理员打开, 上面命令行处可以不改, 在需要管理员权限的命令前加上sudo再运行就可以, 跟Linux一样</p><br><h3 id="_4-添加gitbash" tabindex="-1"><a class="header-anchor" href="#_4-添加gitbash"><span>4. 添加GitBash</span></a></h3><p>从设置 <code>打开JSON文件</code> ，在 <code> &quot;profiles&quot; --&gt; &quot;defaults&quot; --&gt; &quot;list&quot;</code> 中添加新的配置：</p><div class="language-JSON line-numbers-mode" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code>&quot;profiles&quot;: 
{
    &quot;defaults&quot;: {},
    &quot;list&quot;: 
    [
        {
            &quot;guid&quot;: &quot;{b453ae62-4e3d-5e58-b989-0a998ec441b7}&quot;,
            &quot;hidden&quot;: false,
            &quot;name&quot;: &quot;Git Bash&quot;,
            &quot;commandline&quot;: &quot;gsudo \\&quot;C:\\\\Program Files\\\\Git\\\\bin\\\\bash.exe\\&quot;&quot;,
            &quot;colorScheme&quot;:&quot;One Half Dark&quot;,
            &quot;icon&quot;: &quot;C:\\\\Program Files\\\\Git\\\\mingw64\\\\share\\\\git\\\\git-for-windows.ico&quot;
        }

    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： commandline 中 需要的是git安装目录下的 bin 下的 bash.exe，而不是 Git-Bash.exe</p><br><h3 id="_5-ssh免密自动登陆" tabindex="-1"><a class="header-anchor" href="#_5-ssh免密自动登陆"><span>5. SSH免密自动登陆</span></a></h3><p><strong>第一步 在本地生成SSH密钥对</strong>：</p><p>powershell中输入以下命令，根据提示设置密钥保存路径、密钥密码（默认为空），建议按默认设置，一直按回车成功生成密钥文件，生成的密钥文件共有两个，ssh_key对应私钥可存储在本地，ssh_key.pub对应公钥需要放在到远程服务器</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>第二步 在远程主机安装公钥</strong>：</p><p>将上面生成的公钥文件上传至远程主机即可（注意需要远程主机存在相应的目录及权限）：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sftp</span> root@192.168.10.11             <span class="token comment"># 回车输入密码</span>

<span class="token comment"># put 本地公钥文件 远程主机目录(默认以家目录开头)</span>
sftp<span class="token operator">&gt;</span> put C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator/.ssh/id_rsa.pub .ssh/  

<span class="token comment"># 上传完成后使用 exit 退出</span>
sftp<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如这里就需要在远程主机的家目录 先创建 <code>.ssh</code> 目录才能上传 ：<code>mkdir -m 700 ~/.ssh </code></p><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>连接到远程主机，修改密钥及所在文件夹权限</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">700</span> ~/.ssh        <span class="token comment">#如此文件夹已存在，也要确保权限为700</span>

<span class="token builtin class-name">cd</span> .ssh
<span class="token function">chmod</span> <span class="token number">600</span> id_rsa.pub       <span class="token comment">#cd 密钥.pub所在目录，然后设置其权限</span>

<span class="token function">sudo</span> <span class="token function">mv</span> ~/.ssh/id_rsa.pub ~/.ssh/authorized_key_from_mywindows
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三步 在远程主机打开密钥登陆功能</strong> (编辑sshd配置文件)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config

RSAAuthentication <span class="token function">yes</span>
PubkeyAuthentication <span class="token function">yes</span>
AuthorizedKeysFile .ssh/authorized_key_from_mywindows
PermitRootLogin <span class="token function">yes</span>
PasswordAuthentication no <span class="token comment">#此行会关闭密码登录功能，请确认密钥登陆功能设置好后再添加</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上内容在配置文件里都有对应行，但被注释了起来，可通过删除注释符号设置，也可直接追加到文件末尾，配置完成后重启sshd：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第四步 设置WindowsTerminal的SSH快捷方式</strong></p><p>在WindowsTerminal配置文件里增加内容，复制完之后更改配置如下，主要必须更改如下参数，其余按需修改</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-i</span>  C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator/.ssh/id_rsa root@192.168.10.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启窗口打开即可使用（无需输入密码）</p><br><h2 id="三-powershell" tabindex="-1"><a class="header-anchor" href="#三-powershell"><span>三 PowerShell</span></a></h2>`,34),C={href:"https://github.com/PowerShell/PowerShell/releases/",target:"_blank",rel:"noopener noreferrer"},H=s("p",null,"也可以直接去官网下载：",-1),D={href:"https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows",target:"_blank",rel:"noopener noreferrer"},j=i(`<br><h3 id="_1-ssh" tabindex="-1"><a class="header-anchor" href="#_1-ssh"><span>1. SSH</span></a></h3><p>使用SSH连接到远程服务器，前提是服务器已安装并启用SSH服务</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 命令格式：ssh username@hostip 如：</span>

<span class="token function">ssh</span> root@192.168.5.150          <span class="token comment"># 输入密码即可</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-new-guid" tabindex="-1"><a class="header-anchor" href="#_2-new-guid"><span>2. new-guid</span></a></h3>`,6);function F(J,G){const n=l("ExternalLinkIcon");return o(),d("div",null,[h,s("p",null,[e("Windows 终端概述 ："),s("a",m,[e("https://docs.microsoft.com/zh-cn/windows/terminal/"),a(n)])]),v,s("p",null,[e("官方文档和介绍："),s("a",b,[e("https://www.powershellgallery.com/packages/oh-my-posh"),a(n)])]),s("p",null,[e("在Windows terminal中安装Oh-My-Posh："),s("a",g,[e("https://ohmyposh.dev/docs/installation/windows"),a(n)])]),k,s("p",null,[w,e("："),s("a",_,[e("https://ohmyposh.dev/docs/installation/fonts"),a(n)])]),f,s("p",null,[e("下载地址："),s("a",q,[e("https://www.nerdfonts.com/"),a(n)]),e(" ，建议安装 "),s("a",y,[e("Nerd Font"),a(n)])]),x,s("p",null,[e("下载字体："),s("a",S,[e("https://github.com/microsoft/cascadia-code/releases"),a(n)])]),P,s("p",null,[e("详细内容参照官网："),s("a",O,[e("Windows 终端中的毛玻璃主题"),a(n)])]),T,N,M,s("p",null,[e("GitHub："),s("a",W,[e("https://github.com/gerardog/gsudo"),a(n)])]),z,s("p",null,[e("GitHub："),s("a",C,[e("https://github.com/PowerShell/PowerShell/releases/"),a(n)])]),H,s("p",null,[s("a",D,[e("https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows"),a(n)])]),j])}const L=t(u,[["render",F],["__file","windows.html.vue"]]),E=JSON.parse('{"path":"/tool/windows.html","title":"Windows命令和工具","lang":"en-US","frontmatter":{"order":-1,"title":"Windows命令和工具","shortTitle":"Windows命令","icon":"windows","description":"一 CMD命令 1. 目录和文件 code explore 2. 进程和服务 二 Windows Terminal Windows 终端概述 ：https://docs.microsoft.com/zh-cn/windows/terminal/ 1. Oh-My-Posh 官方文档和介绍：https://www.powershellgallery.co...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/tool/windows.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"Windows命令和工具"}],["meta",{"property":"og:description","content":"一 CMD命令 1. 目录和文件 code explore 2. 进程和服务 二 Windows Terminal Windows 终端概述 ：https://docs.microsoft.com/zh-cn/windows/terminal/ 1. Oh-My-Posh 官方文档和介绍：https://www.powershellgallery.co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-15T09:06:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-04-15T09:06:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows命令和工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T09:06:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"一 CMD命令","slug":"一-cmd命令","link":"#一-cmd命令","children":[{"level":3,"title":"1. 目录和文件","slug":"_1-目录和文件","link":"#_1-目录和文件","children":[]},{"level":3,"title":"2. 进程和服务","slug":"_2-进程和服务","link":"#_2-进程和服务","children":[]}]},{"level":2,"title":"二 Windows Terminal","slug":"二-windows-terminal","link":"#二-windows-terminal","children":[{"level":3,"title":"1. Oh-My-Posh","slug":"_1-oh-my-posh","link":"#_1-oh-my-posh","children":[]},{"level":3,"title":"2. 毛玻璃特效","slug":"_2-毛玻璃特效","link":"#_2-毛玻璃特效","children":[]},{"level":3,"title":"3. 安装gsudo","slug":"_3-安装gsudo","link":"#_3-安装gsudo","children":[]},{"level":3,"title":"4. 添加GitBash","slug":"_4-添加gitbash","link":"#_4-添加gitbash","children":[]},{"level":3,"title":"5. SSH免密自动登陆","slug":"_5-ssh免密自动登陆","link":"#_5-ssh免密自动登陆","children":[]}]},{"level":2,"title":"三 PowerShell","slug":"三-powershell","link":"#三-powershell","children":[{"level":3,"title":"1. SSH","slug":"_1-ssh","link":"#_1-ssh","children":[]},{"level":3,"title":"2. new-guid","slug":"_2-new-guid","link":"#_2-new-guid","children":[]}]}],"git":{"createdTime":1713172018000,"updatedTime":1713172018000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":6.14,"words":1842},"filePathRelative":"tool/windows.md","localizedDate":"April 15, 2024","autoDesc":true}');export{L as comp,E as data};
