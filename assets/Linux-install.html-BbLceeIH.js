import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as u,c as v,d as a,w as l,a as n,b as s,e as t}from"./app-D_MzZNfF.js";const m="/notebook/assets/2467802020864-B5TgQfG3.png",b="/notebook/assets/1721139220770-BdlE1y55.png",h="/notebook/assets/4608247249196-DsNh5Bte.png",k={},g=t('<h1 id="vmware-linux安装" tabindex="-1"><a class="header-anchor" href="#vmware-linux安装"><span>VMware/Linux安装</span></a></h1><h2 id="一-vmware虚拟机" tabindex="-1"><a class="header-anchor" href="#一-vmware虚拟机"><span>一 VMware虚拟机</span></a></h2><h3 id="_1-nat与桥接网络模式" tabindex="-1"><a class="header-anchor" href="#_1-nat与桥接网络模式"><span>1. NAT与桥接网络模式</span></a></h3><p>vmware为我们提供了三种网络工作模式，它们分别是：Bridged(桥接模式)、NAT(网络地址转换模式)、Host-Only(仅主机模式)。</p><p>所有的虚拟系统是可以相互通信的，但虚拟系统和真实的网络是被隔离开的。 理解：<strong>VM中</strong>所有虚拟机可相互通信，但真实机器与虚拟机之间不能<strong>相互</strong>访问</p><h4 id="vmware相关虚拟设备" tabindex="-1"><a class="header-anchor" href="#vmware相关虚拟设备"><span>VMware相关虚拟设备</span></a></h4><p>VMnet0：这是VMware用于虚拟 <code>桥接网络</code> 下的虚拟交换机;</p><p>VMnet1：这是VMware用于虚拟 <code>Host-Only</code> 网络下的虚拟交换机;</p><p>VMnet8：这是VMware用于虚拟 <code>NAT网络</code> 下的虚拟交换机;</p><p>VMware Network Adapter VMnet1：这是Host用于与Host-Only虚拟网络进行通信的虚拟网卡;</p><p>VMware Network Adapter VMnet8：这是Host用于与NAT虚拟网络进行通信的虚拟网卡;</p><p>在主机中CMD 命令提示符的情况下，输入ipconfig便可以查询到 <code>VMware Network Adapter VMnet1</code>、<code>VMware Network Adapter VMnet8</code> 的IP地址，win10系统直接搜索 <code>网络连接</code> 即可查看相关网卡信息</p><br><h4 id="桥接网络模式及设置" tabindex="-1"><a class="header-anchor" href="#桥接网络模式及设置"><span>桥接网络模式及设置</span></a></h4><p>在桥接模式下，VMware虚拟出来的操作系统就像是局域网中的一独立的主机，它可以访问该类网段内任何一台机器。</p><p>桥接网络环境下需要做到：</p><p>1.为虚拟机系统配置IP地址、子网掩码。</p><p>2.在桥接的模式下虚拟机必须与物理机处于同一网段，(举个例子,物理机IP:192.168.1.2，虚拟机IP:192.168.1.3)这样虚拟系统才能和真实主机进行通信。</p><p>关于桥接网络的小知识：</p><p>当你想利用VMware在局域网内新建一个虚拟服务器，为局域网用户提供网络服务，就应该选择桥接模式。可将虚拟机模拟接入主机所在的局域网。桥接网络，相当于，虚拟机与主机同接在一台交换机上，同时上网，虚拟机对物理机网络的直接影响较小~</p><br><h4 id="nat网络模式及设置" tabindex="-1"><a class="header-anchor" href="#nat网络模式及设置"><span>NAT网络模式及设置</span></a></h4><p>在NAT网络中，会使用到VMnet8虚拟交换机，物理机上的 <code>VMware Network Adapter VMnet8 虚拟网卡</code> 将会和 <code>VMnet8交换机</code>相连接，来实现物理机与虚拟机之间的通信。</p><p>注意：<code>VMware Network Adapter VMnet8 虚拟网卡</code> 仅仅是用于主机和VMnet8网段通信使用，它并不为VMnet8网段提供路由功能，处于虚拟NAT网络下的Guest是使用虚拟的NAT服务器连接的Internet的。</p><p>VMware Network Adapter VMnet8虚拟网卡它仅仅是为Host和NAT虚拟网络下的Guest通信提供一个接口，所以，即便去掉这块虚拟网卡，虚拟机仍然是可以上网的，只是物理机将无法再访问VMnet8网段而已。</p><p><strong>NAT网络环境下需要做到</strong>：</p><p>1.主机需要开启vmdhcp和vmnat服务。(服务的开启，在我的电脑当中右键“管理”可以设置)</p><p>2.NAT模式下的虚拟机的TCP/IP配置信息将由VMnet8(NAT)虚拟网络的DHCP服务器自动分配，需要开启DHCP功能。</p><p><strong>关于NAT网络的小知识</strong>：</p><p>使用NAT模式，就是让虚拟系统借助NAT(网络地址转换)功能，通过物理机所在的网络来访问外网。NAT 模式下的网络，相当于说虚拟机是通过接入物理机连接上的网络，等于物理机是个路由器，申请到一个上网名额，带着隐藏在它下面的虚拟机上网。自然所有虚拟机使用的网络总和都限制在实机一个网络通道内。虚拟机会抢占物理机的网络~对物理机上网会有很大的影响!</p><br><h3 id="_2-设置虚拟机静态网络ip" tabindex="-1"><a class="header-anchor" href="#_2-设置虚拟机静态网络ip"><span>2. 设置虚拟机静态网络IP</span></a></h3><p>NAT模式下虚拟机IP可能会变，我们可以通过设置静态 IP ，这样的话 IP 就不会发生改变</p><p>VMware 点击 编辑 ——&gt; 虚拟网络编辑器 (如图：)</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',35),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"ip"),s(` addr
`),n("span",{class:"token function"},"vim"),s(` /etc/sysconfig/network-scripts/ifcfg-ens33
`),n("span",{class:"token function"},"service"),s(" network restart  "),n("span",{class:"token comment"},"# 刷新网络服务 centos8使用: ifup  ens33"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"vim"),s(" /etc/netplan/00-installer-config.yaml   "),n("span",{class:"token comment"},"# 文件名可能会不同"),s(`
`),n("span",{class:"token function"},"sudo"),s(" netplan apply                               "),n("span",{class:"token comment"},"# 应用更改"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=t(`<details class="hint-container details"><summary>ifcfg-ens33</summary><p>Centos下的网络配置文件内容参考：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">TYPE</span><span class="token punctuation">=</span><span class="token value attr-value">Ethernet</span>
<span class="token key attr-name">PROXY_METHOD</span><span class="token punctuation">=</span><span class="token value attr-value">none</span>
<span class="token key attr-name">BROWSER_ONLY</span><span class="token punctuation">=</span><span class="token value attr-value">no</span>
<span class="token key attr-name">BOOTPROTO</span><span class="token punctuation">=</span><span class="token value attr-value">static</span>
<span class="token key attr-name">DEFROUTE</span><span class="token punctuation">=</span><span class="token value attr-value">yes</span>
<span class="token key attr-name">IPV4_FAILURE_FATAL</span><span class="token punctuation">=</span><span class="token value attr-value">no</span>
<span class="token key attr-name">IPV6INIT</span><span class="token punctuation">=</span><span class="token value attr-value">yes</span>
<span class="token key attr-name">IPV6_AUTOCONF</span><span class="token punctuation">=</span><span class="token value attr-value">yes</span>
<span class="token key attr-name">IPV6_DEFROUTE</span><span class="token punctuation">=</span><span class="token value attr-value">yes</span>
<span class="token key attr-name">IPV6_FAILURE_FATAL</span><span class="token punctuation">=</span><span class="token value attr-value">no</span>
<span class="token key attr-name">IPV6_ADDR_GEN_MODE</span><span class="token punctuation">=</span><span class="token value attr-value">stable-privacy</span>
<span class="token key attr-name">NAME</span><span class="token punctuation">=</span><span class="token value attr-value">ens33</span>
<span class="token key attr-name">UUID</span><span class="token punctuation">=</span><span class="token value attr-value">ee4084e5-a3b6-43f0-8b06-80a20d647a10</span>
<span class="token key attr-name">DEVICE</span><span class="token punctuation">=</span><span class="token value attr-value">ens33</span>
<span class="token key attr-name">ONBOOT</span><span class="token punctuation">=</span><span class="token value attr-value">yes</span>
<span class="token key attr-name">IPADDR</span><span class="token punctuation">=</span><span class="token value attr-value">192.168.42.10</span>
<span class="token key attr-name">NETMASH</span><span class="token punctuation">=</span><span class="token value attr-value">255.255.255.0</span>
<span class="token key attr-name">GATEWAY</span><span class="token punctuation">=</span><span class="token value attr-value">192.168.42.2</span>
<span class="token key attr-name">DNS1</span><span class="token punctuation">=</span><span class="token value attr-value">192.168.42.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>00-installer-config.yaml</summary><p>Ubuntu下网络配置文件参考：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># This is the network config written by &#39;subiquity&#39;</span>
<span class="token key atrule">network</span><span class="token punctuation">:</span>
  <span class="token key atrule">ethernets</span><span class="token punctuation">:</span>
    <span class="token key atrule">ens33</span><span class="token punctuation">:</span>
      <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.42.11/24<span class="token punctuation">]</span>
      <span class="token key atrule">gateway4</span><span class="token punctuation">:</span> 192.168.42.2
      <span class="token key atrule">nameservers</span><span class="token punctuation">:</span>
              <span class="token key atrule">addresses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>8.8.8.8<span class="token punctuation">,</span> 1.1.1.1<span class="token punctuation">]</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2),y={class:"hint-container note"},w=n("p",{class:"hint-container-title"},"主机连不上虚拟机",-1),M=n("br",null,null,-1),V={href:"http://blog.iis7.com/article/33159.html",target:"_blank",rel:"noopener noreferrer"},A=t(`<br><h3 id="_3-linux虚拟机硬盘扩容" tabindex="-1"><a class="header-anchor" href="#_3-linux虚拟机硬盘扩容"><span>3. Linux虚拟机硬盘扩容</span></a></h3><p>给VMware下的Linux扩展磁盘空间（以CentOS7为例）</p><div class="hint-container info"><p class="hint-container-title">扩容步骤</p><p>一 关闭虚拟机，删除快照，按如下步骤扩容 ：</p><p><code>VM -&gt; Settings... -&gt; Hardware -&gt; Hard Disk -&gt; Utilities -&gt; Expand</code></p><p>输入你想要扩展到多少G。（本次新增加了 30G）</p><br><p>二 对新增加的硬盘进行分区、格式化</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-h</span>              <span class="token comment"># 查看硬盘信息和挂载点</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span>           <span class="token comment"># 查看磁盘信息</span>

<span class="token function">fdisk</span> /dev/sda　　   <span class="token comment"># 操作 /dev/sda 的分区表</span>
<span class="token builtin class-name">:</span> p　　　　　　　     <span class="token comment"># 查看已分区数量（我看到有两个 /dev/sda1 /dev/sda2）</span>
<span class="token builtin class-name">:</span> n　　　　　　　     <span class="token comment"># 新增加一个分区</span>
<span class="token builtin class-name">:</span> p　　　　　　　     <span class="token comment"># 分区类型我们选择为主分区</span>
<span class="token builtin class-name">:</span> <span class="token number">3</span>　　　　　　　     <span class="token comment"># 分区号选3（因为1,2已经用过了，见上）</span>
<span class="token builtin class-name">:</span> 回车　　　　　      <span class="token comment"># 默认（起始扇区）</span>
<span class="token builtin class-name">:</span> 回车　　　　　      <span class="token comment"># 默认（结束扇区）</span>
<span class="token builtin class-name">:</span> t　　　　　　　     <span class="token comment"># 修改分区类型</span>
<span class="token builtin class-name">:</span> <span class="token number">3</span>　　　　　　　     <span class="token comment"># 选分区3</span>
<span class="token builtin class-name">:</span> 8e　　　　　　      <span class="token comment"># 修改为LVM（8e就是LVM）</span>
<span class="token builtin class-name">:</span> w　　　　　　       <span class="token comment"># 写分区表</span>
<span class="token builtin class-name">:</span> q　　　　　　       <span class="token comment"># 完成，退出fdisk命令</span>

<span class="token comment"># 系统提示你重启，重启系统即可</span>

mkfs.ext3 /dev/sda3  <span class="token comment"># 开机后，格式化sda3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>三 添加新LVM到已有的LVM组，实现扩容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lvm　　　　　　　　　　　　　　　　　　       <span class="token comment">#进入lvm管理</span>

lvm<span class="token operator">&gt;</span> pvcreate /dev/sda3　　　　　　　　　    <span class="token comment">#这是初始化刚才的分区，必须的</span>
lvm<span class="token operator">&gt;</span> vgextend centos /dev/sda3　　　        <span class="token comment">#将初始化过的分区加入到虚拟卷组vg_dc01</span>
lvm<span class="token operator">&gt;</span> lvextend <span class="token parameter variable">-L</span> +29.9G /dev/centos/root　　<span class="token comment">#扩展已有卷的容量（实际大小会比30G略小）</span>
lvm<span class="token operator">&gt;</span> pvdisplay　　　　　　　　　　　　　　    <span class="token comment">#查看卷容量，这时你会看到一个很大的卷了</span>
lvm<span class="token operator">&gt;</span> quit　　　　　　　　　　　　　　　　　    <span class="token comment">#退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>以上只是卷扩容了，下面是文件系统的真正扩容，输入以下命令：</p>`,5),T=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`resize2fs /dev/centos/root
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`xfs_growfs /dev/centos/root
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),L=t(`<br><h3 id="_4-虚拟机自启动设置" tabindex="-1"><a class="header-anchor" href="#_4-虚拟机自启动设置"><span>4. 虚拟机自启动设置</span></a></h3><h4 id="创建启动-关闭脚本" tabindex="-1"><a class="header-anchor" href="#创建启动-关闭脚本"><span>创建启动/关闭脚本</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在系统的某个安静的盘中创建一个vm_start.bat文件，然后使用编辑器打开。写入: </span>
<span class="token string">&quot;C:\\Program Files (x86)\\VMware\\VMware Workstation<span class="token entity" title="\\v">\\v</span>mrun.exe&quot;</span> start <span class="token string">&quot;D:\\VirtualMachines\\DevMachines\\DevMachines.vmx&quot;</span> nogui


<span class="token comment"># 再次创建一个vm_stop.bat文件</span>
<span class="token string">&quot;C:\\Program Files (x86)\\VMware\\VMware Workstation<span class="token entity" title="\\v">\\v</span>mrun.exe&quot;</span> stop <span class="token string">&quot;D:\\VirtualMachines\\DevMachines\\DevMachines.vmx&quot;</span>

<span class="token comment">#测试运行文件: 双击启动文件vm_start.bat，如果弹出dos窗口且虚拟机启动则无误,双击停止文件vm_stop.bat，如果弹出dos窗口且虚拟机停止则无误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="添加到自启动任务" tabindex="-1"><a class="header-anchor" href="#添加到自启动任务"><span>添加到自启动任务</span></a></h4><p><code>Win+ R</code> -&gt; <code>gpedit.msc</code> -&gt; 用户配置 -&gt; windows设置 -&gt; 鼠标双击脚本(登录/注销) -&gt; 鼠标双击“登录”或“注销”分别添加启动、关闭脚本</p><p>【Q】主机访问不到虚拟机的服务的解决办法: 检查防火墙状态</p><br><h3 id="_5-linux防火墙设置" tabindex="-1"><a class="header-anchor" href="#_5-linux防火墙设置"><span>5. Linux防火墙设置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --query-port<span class="token operator">=</span><span class="token number">9200</span>/tcp                           <span class="token comment">#查看端口号是否开启,如果是no，就说明没有开放</span>

firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">6379</span>/tcp <span class="token parameter variable">--permanent</span>   <span class="token comment">#开通6379端口(redis)</span>

firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8848</span>/tcp <span class="token parameter variable">--permanent</span>   <span class="token comment">#开通8848端口(nacos)</span>

firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>   <span class="token comment">#开通3306端口(mysql)</span>



firewall-cmd <span class="token parameter variable">--reload</span>                                        <span class="token comment">#重启防火墙，端口正常开启</span>

systemctl restart <span class="token function">docker</span>                                     <span class="token comment">#如果是docker容器的化则要重启下docker服务 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="二-vagrant安装" tabindex="-1"><a class="header-anchor" href="#二-vagrant安装"><span>二 vagrant安装</span></a></h2><h3 id="_1-安装准备" tabindex="-1"><a class="header-anchor" href="#_1-安装准备"><span>1. 安装准备</span></a></h3><p><strong>virtualbox + vagrant 安装</strong>：</p>`,15),N={href:"https://www.virtualbox.org/",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"主程序",-1),P=n("code",null,"拓展包",-1),j=n("br",null,null,-1),q={href:"https://www.vagrantup.com/",target:"_blank",rel:"noopener noreferrer"},H=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vagrant version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置vagrant (虚拟机镜像文件存储目录，默认为：C:\\Users\\用户名.vagrant.d) —— <code>VAGRANT_HOME</code></li></ul><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br>',4),E={start:"3"},I=n("br",null,null,-1),S={href:"https://app.vagrantup.com/boxes/search",target:"_blank",rel:"noopener noreferrer"},C={href:"http://cloud.centos.org/centos/",target:"_blank",rel:"noopener noreferrer"},D={href:"http://cloud.centos.org/centos/7/vagrant/x86_64/images/CentOS-7.box",target:"_blank",rel:"noopener noreferrer"},U={href:"http://cloud-images.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://mirror.tuna.tsinghua.edu.cn/ubuntu-cloud-images/",target:"_blank",rel:"noopener noreferrer"},G=n("br",null,null,-1),R=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
添加 box ：接下来我们需要将下载后的 .box 文件添加到 vagrant 中：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 如果这是第一次运行，此时 VAGRANT_HOME 目录下会自动生成若干的文件和文件夹，其中有一个 boxes 文件夹，</span>
<span class="token comment"># 这就是要存放 box 文件的地方。</span>

vagrant box list

<span class="token comment">#执行 vagrant box add 命令添加 box: (命令后面跟着的是镜像文件的路径，通过 --name centos-7 为这个 box 指定名字)</span>
vagrant box <span class="token function">add</span> E:<span class="token punctuation">\\</span>Package<span class="token punctuation">\\</span>VM<span class="token punctuation">\\</span>VirtualBox<span class="token punctuation">\\</span>CentOS-7.box <span class="token parameter variable">--name</span> centos-7

vagrant box list        <span class="token comment">#再次查询，可以看到有了一个 box</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-安装虚拟机" tabindex="-1"><a class="header-anchor" href="#_2-安装虚拟机"><span>2. 安装虚拟机</span></a></h3><p>Vagrant新建虚拟机</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment">#先进入vagrant工作目录（Vagrantfile所在的目录）再执行命令</span>
vagrant init centos-7

<span class="token comment">#首次执行会先安装再启动，之后就是启动的功能（注意要在Vagrantfile所在的目录执行）</span>
vagrant up

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 常用命令</span>
vagrant status         <span class="token comment">#查看虚拟机状态</span>
vagrant <span class="token function">ssh</span>            <span class="token comment">#以 vagrant 用户直接登入虚拟机中，使用 exit; 退出</span>

vagrant <span class="token function">halt</span>           <span class="token comment">#关闭虚拟机</span>
vagrant <span class="token function">suspend</span>        <span class="token comment">#暂停虚拟机</span>
vagrant resume         <span class="token comment">#恢复虚拟机</span>
vagrant reload         <span class="token comment">#重载虚拟机(可能会重启失败，需要重启宿主机才能开机虚拟机)</span>
vagrant destroy        <span class="token comment">#删除虚拟机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>配置私有网络：</p><p>上述创建的虚拟机网络默认使用的是 <code>网络地址转换（NAT）+ 端口转发</code> 的方式，</p><p>我们需要修改 <code>Vagrantfile</code>，为虚拟机设置指定的私有网络地址：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 取消改行的注释，根据下图宿主机的IP地址，修改前三段地址一致即可</span>
config.vm.network <span class="token string">&quot;private_network&quot;</span>, ip: <span class="token string">&quot;192.168.56.10&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ipconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 修改Vagrantfile文件后，需要重启虚拟机，若重启失败可删除重装，先修改Vagrantfile，再vagrant up</span>
vagrant reload

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,19),$={href:"https://www.vagrantup.com/docs/providers/virtualbox/configuration",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>config.vm.provider <span class="token string">&quot;virtualbox&quot;</span> <span class="token keyword">do</span> <span class="token operator">|</span><span class="token function">v</span><span class="token operator">|</span>
v.memory <span class="token operator">=</span> <span class="token number">4096</span>
v.cpus <span class="token operator">=</span> <span class="token number">4</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【注意】修改Vagrantfile可能会导致虚拟机无法启动，可在安装前先修改好Vagrantfile文件。系统用户密码均为 ：vagrant</p></blockquote><br><h2 id="三-ubuntu" tabindex="-1"><a class="header-anchor" href="#三-ubuntu"><span>三 Ubuntu</span></a></h2>`,4),Y={href:"https://ubuntu.com/",target:"_blank",rel:"noopener noreferrer"},W=n("h3",{id:"_1-vm-tools",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-vm-tools"},[n("span",null,"1. vm tools")])],-1),X={href:"https://docs.vmware.com/cn/VMware-Tools/11.3.0/com.vmware.vsphere.vmwaretools.doc/GUID-C48E1F14-240D-4DD1-8D4C-25B6EBE4BB0F.html",target:"_blank",rel:"noopener noreferrer"},J=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
请确保已更新软件包索引：
<span class="token function">sudo</span> <span class="token function">apt-get</span> update

如果虚拟机具有 GUI（X11 等），请安装或升级 open-vm-tools-desktop：
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> open-vm-tools-desktop

否则，请使用以下命令安装 open-vm-tools：
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> open-vm-tools

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-语言和输入法" tabindex="-1"><a class="header-anchor" href="#_2-语言和输入法"><span>2. 语言和输入法</span></a></h3><br><br><h2 id="四-manjaro" tabindex="-1"><a class="header-anchor" href="#四-manjaro"><span>四 Manjaro</span></a></h2><h3 id="_1-vm-tools-1" tabindex="-1"><a class="header-anchor" href="#_1-vm-tools-1"><span>1. vm tools</span></a></h3><p>Manjaro原版中的open-vm-tools与VMware不匹配</p>`,8),Z={href:"https://github.com/rasa/vmware-tools-patches",target:"_blank",rel:"noopener noreferrer"},Q=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token number">1</span>、卸载open-vm-tools
<span class="token function">sudo</span> pacman <span class="token parameter variable">-R</span> open-vm-tools

<span class="token number">2</span>、下载vmwaretools补丁
<span class="token function">git</span> clone https://github.com/rasa/vmware-tools-patches.git

<span class="token number">3</span>、进入vmware-tools-patches目录
<span class="token builtin class-name">cd</span> vmware-tools-patches

<span class="token number">4</span>、运行补丁
<span class="token function">sudo</span> ./patched-open-vm-tools.sh

<span class="token number">5</span>、重启
<span class="token function">reboot</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-aur助手" tabindex="-1"><a class="header-anchor" href="#_2-aur助手"><span>2. AUR助手</span></a></h3><p>Yay (Yet another Yogurt) 是一个 AUR 助手，它允许用户在 Manjaro 上安装和管理软件包系统。<br> 在安装过程中，它会自动从 PKGBUIDS 安装软件包。Yay 取代了早已停产的 Aurman 和 Yaourt。<br> 自发布以来，Yay 已被证明是出色的帮手，并且是原生 Pacman 包管理器的完美替代品。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Syu</span>                      <span class="token comment"># 更新系统</span>

<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> yay                    <span class="token comment"># 下载yay</span>


yay <span class="token parameter variable">-S</span> 软件名                          <span class="token comment"># 安装软件</span>
yay <span class="token parameter variable">-R</span> 软件名                          <span class="token comment"># 卸载软件</span>
yay <span class="token parameter variable">-Ss</span> 软件模糊名（或者精确的名字）     <span class="token comment"># 搜索软件</span>


yay <span class="token parameter variable">-S</span> google-chrome                  <span class="token comment"># 安装Chrome</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-安装deb包" tabindex="-1"><a class="header-anchor" href="#_3-安装deb包"><span>3. 安装deb包</span></a></h3><p>arch 系列如果要安装 dep 软件包，需要通过 deptap 工具转换后才能安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token number">1</span>、安装debtap：使用yay安装debtap，

<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> yay   <span class="token comment"># 如果没有yay，需要使用pacman安装yay：</span>

<span class="token function">sudo</span> yay <span class="token parameter variable">-S</span> debtap   <span class="token comment"># 安装debtap：</span>


<span class="token number">2</span>、deb包转换arch包，需要先运行下述命令，否则会出错：

<span class="token function">sudo</span> debtap <span class="token parameter variable">-u</span>

<span class="token function">sudo</span> debtap <span class="token parameter variable">-q</span> xxxxx.deb   <span class="token comment">#使用debtap将deb包转换为arch包</span>

<span class="token comment"># 在转换过程中会提示是否需要编辑相关信息，直接按回车即可，转换完成后，将会生成一个后缀为.pkg.tar.rst的文件。</span>


<span class="token number">3</span>、安装，使用pacman安装转换的arch包：

<span class="token function">sudo</span> pacman <span class="token parameter variable">-U</span> xxxx.pkg.tar.rst

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="五-常用linux设置" tabindex="-1"><a class="header-anchor" href="#五-常用linux设置"><span>五 常用Linux设置</span></a></h2><h3 id="_1-解压安装jdk" tabindex="-1"><a class="header-anchor" href="#_1-解压安装jdk"><span>1. 解压安装jdk</span></a></h3>`,12),K={href:"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://www.oracle.com/java/technologies/oracle-java-archive-downloads.html",target:"_blank",rel:"noopener noreferrer"},sn=t(`<ul><li>先检查是否已经安装jdk</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> openjdk <span class="token parameter variable">-i</span>   <span class="token comment"># 检查系统安装的openjdk</span>

<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> XXX<span class="token punctuation">(</span>需要删除的软件名<span class="token punctuation">)</span> <span class="token comment">#如果存在openjdk,就用这个命令逐一删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建jdk安装目录和软件包存储目录，并上传jdk文件。将文件解压剪贴到jdk安装目录后配置环境变量即可。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /usr/java
<span class="token function">mkdir</span> /home/software

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-8u191-linux-x64.tar.gz
<span class="token function">mv</span> jdk1.8.0_191/ /usr/java/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置环境变量，（修改profile文件）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile  <span class="token comment">#配置环境变量，加入如下信息：(按esc退出插入模式后 :wq 保存退出)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export JAVA_HOME=/usr/java/jdk1.8.0_191
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$JAVA_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>刷新profile，使其生效</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="_2-http-proxy" tabindex="-1"><a class="header-anchor" href="#_2-http-proxy"><span>2. http proxy</span></a></h3><p>Windows + Linux虚拟机的 代理设置：</p><ul><li>为避免Linux配置<code>clash</code>的一些麻烦，只在Windows上装有<code>clash</code>，并已有可用的服务</li><li>虚拟机采用桥接模式（似乎也有不采用桥接模式而成功的例子，但是我没有成功）</li><li><code>clash</code>开启<code>allow LAN</code>，并开启代理</li></ul><br><p>linux下通过图形界面设置的代理，终端和浏览器一般不使用该代理，需要分别设置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 终端设置(Linux 终端设置 HTTP 代理、注意只对当前终端有效)：</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://192.168.5.64:7890
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span>http://192.168.5.64:7890

$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>socks5://127.0.0.1:1080
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span>socks5://127.0.0.1:1080

$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>http://192.168.5.64:7890


<span class="token comment"># Linux 终端中取消代理设置：</span>
$ <span class="token builtin class-name">unset</span> http_proxy
$ <span class="token builtin class-name">unset</span> https_proxy
$ <span class="token builtin class-name">unset</span> ALL_RPOXY

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：ping 使用的是 ICMP 协议，不支持代理。可以执行 <code>curl -vv https://www.google.com </code> 看看有没有走代理。</p><p>永久代理设置：将代理命令写入配置文件 ~/.profile 或 ~/.bashrc 或 ~/.zshrc 中</p><br><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># Git 设置代理：</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy http://192.168.5.79:7890
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy http://192.168.5.79:7890

<span class="token comment"># Git 取消代理设置：</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-终端配色方案" tabindex="-1"><a class="header-anchor" href="#_3-终端配色方案"><span>3. 终端配色方案</span></a></h3><h4 id="原生shell配色" tabindex="-1"><a class="header-anchor" href="#原生shell配色"><span>原生Shell配色</span></a></h4><p>更改到 centos 的 /etc/bashrc 中即可永久生效： <code>vim /etc/bashrc </code> # 填入如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${-<span class="token operator">#</span>*i}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;$-&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token comment"># interactively shell</span>
    <span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&quot;[\\[<span class="token entity" title="\\033">\\033</span>[01;31m\\]\\u\\[<span class="token entity" title="\\033">\\033</span>[00m\\]@\\[<span class="token entity" title="\\033">\\033</span>[36;36m\\]\\h\\[<span class="token entity" title="\\033">\\033</span>[00m\\] \\[<span class="token entity" title="\\033">\\033</span>[01;34m\\]\\w\\[<span class="token entity" title="\\033">\\033</span>[00m\\]]$ &quot;</span>
    <span class="token builtin class-name">trap</span> <span class="token string">&#39;echo -ne &quot;\\e[0m&quot;&#39;</span> DEBUG
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在/etc/profile中也去加载/etc/bashrc：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
if [ -f /etc/bashrc ]; then 
    . /etc/bashrc
fi
EOF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新即永久生效： <code>source /etc/profile</code></p><br><p>参数说明--&gt;PS1的定义中个常用的参数的含义如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">\\</span>d ：<span class="token comment">#代表日期，格式为weekday month date，例如：&quot;Mon Aug 1&quot;</span>
<span class="token punctuation">\\</span>H ：<span class="token comment">#完整的主机名称</span>
<span class="token punctuation">\\</span>h ：<span class="token comment">#仅取主机的第一个名字</span>
<span class="token punctuation">\\</span>T ：<span class="token comment">#显示时间为24小时格式，如：HH：MM：SS</span>
<span class="token punctuation">\\</span>t ：<span class="token comment">#显示时间为12小时格式 , 如：HH：MM：SS</span>
<span class="token punctuation">\\</span>A ：<span class="token comment">#显示时间为12小时格式：HH：MM</span>
<span class="token punctuation">\\</span>u ：<span class="token comment">#当前用户的账号名称</span>
<span class="token punctuation">\\</span>v ：<span class="token comment">#BASH的版本信息</span>
<span class="token punctuation">\\</span>w ：<span class="token comment">#完整的工作目录名称</span>
<span class="token punctuation">\\</span>W ：<span class="token comment">#利用basename取得工作目录名称，所以只会列出最后一个目录</span>
<span class="token comment">#  ：#下达的第几个命令</span>
$  ：<span class="token comment">#提示字符，如果是root时，提示符为：\`#\` ，普通用户则为：\`$\`</span>


设置颜色: 在<span class="token environment constant">PS1</span>中设置字符颜色的格式为：<span class="token punctuation">[</span><span class="token punctuation">\\</span>e<span class="token punctuation">[</span>F<span class="token punctuation">;</span>Bm<span class="token punctuation">]</span>
F为字体颜色，编号为30-37
B为背景颜色，编号为40-47

格式：<span class="token punctuation">[</span><span class="token punctuation">\\</span>e<span class="token punctuation">[</span>F<span class="token punctuation">;</span>Bm<span class="token punctuation">]</span>需要改变颜色的部分<span class="token punctuation">[</span><span class="token punctuation">\\</span>e<span class="token punctuation">[</span>0m<span class="token punctuation">]</span> , F B 值分别对应的颜色

<span class="token number">30</span> <span class="token number">40</span> 黑色

<span class="token number">31</span> <span class="token number">41</span> 红色

<span class="token number">32</span> <span class="token number">42</span> 绿色

<span class="token number">33</span> <span class="token number">43</span> 黄色

<span class="token number">34</span> <span class="token number">44</span> 蓝色

<span class="token number">35</span> <span class="token number">45</span> 紫红色

<span class="token number">36</span> <span class="token number">46</span> 青蓝色

<span class="token number">37</span> <span class="token number">47</span> 白色

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-on-my-zsh" tabindex="-1"><a class="header-anchor" href="#_4-on-my-zsh"><span>4. On-my-zsh</span></a></h3>`,33),an={href:"https://blog.csdn.net/lovedingd/article/details/124128721",target:"_blank",rel:"noopener noreferrer"},en=n("br",null,null,-1),tn=t(`<p>具体表现为其作用是用户输入一条命令，shell 就立即解释执行一条。不局限于系统、语言等概念、操作方式和表现方式等。比如：我们使用的cd、wget、curl和mount等命令。</p><p>传统的shell（如：bash），命令和显示的文字以单色为主；而zsh不仅支持彩色字体，还支持命令填充：</p><p>一般情况下，Linux是不自带zsh的，你可以使用命令查看，终端输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/shells 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正常情况下，应该是没有/bin/zsh的, 解决方法很简单，使用apt-get或者yum安装即可</p>`,5),ln=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("yum "),n("span",{class:"token function"},"install"),s(),n("span",{class:"token function"},"zsh"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),cn=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"apt-get"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token function"},"zsh"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),on=t(`<p>安装后，重新使用<code>cat /etc/shells</code>命令查看，最后，设置为默认shell并重启终端：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>chsh <span class="token parameter variable">-s</span> /bin/zsh

<span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,3),rn={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},pn=t(`<p>官方配置非常简单，但是因为项目官方脚本在GitHub的原因，国内访问可能有点困难</p><p>官方安装--&gt;Linux/Mac打开终端，输入官方提供的脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了保证脚本能顺利运行，你的Linux/Mac服务器需要：</p><ul><li>提前安装git、curl</li><li>可以成功连接GitHub</li><li>如果有~/.zshrc文件，最好提前备份</li></ul><br><p>脚本安装, 考虑到官方的方法，需要连接GitHub；如果你的设备无法有效访问GitHub。可以使用下列的脚本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
zsh -c &quot;$(curl -fsSL &#39;https://api.host.mintimate.cn/fileHost/public/download/1P0R&#39;)&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了保证脚本能顺利运行，你的Linux/Mac服务器需要：</p><ul><li>提前安装curl、unzip</li><li>如果有~/.zshrc文件，最好提前备份，否则本脚本自动更改原本的.zshrc文件为zshrcBak</li></ul><br>`,11),dn=n("ul",null,[n("li",null,"在oh-my-zsh的github主页，手动将zip包下载下来。"),n("li",null,"将zip包解压，拷贝至~/.oh-my-zsh目录。"),n("li",null,[s("执行cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc"),n("br"),s(" 或手动复制"),n("sub",null,"/.oh-my-zsh/templates/zshrc.zsh-template内文件内容到"),s("/.zshrc内。"),n("br"),s(" （如果没有~/.zshrc文件，可以手动创建）")]),n("li",null,"重启终端或终端输入source ~/.zshrc使配置生效")],-1),un=n("br",null,null,-1),vn=n("ul",null,[n("li",null,[n("p",null,"自带填充：主要使用到zsh的Tab功能")]),n("li",null,[n("p",null,[s("粘贴自动转义："),n("br"),s(" 使用Oh-my-zsh，默认是使用自动粘贴转义。但是这样容易出差错。"),n("br"),s(" 为此，如果需要关闭自动转义，可以打开~/.zshrc文件，添加DISABLE_MAGIC_FUNCTIONS=true字段")])])],-1),mn=n("br",null,null,-1),bn={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"};function hn(kn,gn){const r=o("CodeTabs"),e=o("ExternalLinkIcon"),p=o("Tabs");return u(),v("div",null,[g,a(r,{id:"99",data:[{id:"Centos"},{id:"Ubuntu"}],"tab-id":"shell"},{title0:l(({value:i,isActive:c})=>[s("Centos")]),title1:l(({value:i,isActive:c})=>[s("Ubuntu")]),tab0:l(({value:i,isActive:c})=>[_]),tab1:l(({value:i,isActive:c})=>[x]),_:1}),f,n("div",y,[w,n("p",null,[s("注意虚拟机IP和VMnet8需要在同一个网段上，可通过 ping 命令测试"),M,s(" 参考："),n("a",V,[s("http://blog.iis7.com/article/33159.html"),a(e)])])]),A,a(p,{id:"158",data:[{id:"Centos6"},{id:"Centos7+"}]},{title0:l(({value:i,isActive:c})=>[s("Centos6")]),title1:l(({value:i,isActive:c})=>[s("Centos7+")]),tab0:l(({value:i,isActive:c})=>[T]),tab1:l(({value:i,isActive:c})=>[z]),_:1}),L,n("ol",null,[n("li",null,[n("p",null,[s("下载安装 "),n("a",N,[s("Virtual box"),a(e)]),s(" 的"),O,s("和"),P,s("，安装后修改虚拟机存放位置（需要cpu开启虚拟化）")]),j]),n("li",null,[n("p",null,[s("下载安装 "),n("a",q,[s("Vagrant"),a(e)]),s(" （ Vagrant 是没有图形界面的，安装程序会自动把安装路径加入到 PATH 环境变量 ）")])])]),H,n("ol",E,[n("li",null,[s("下载虚拟机镜像"),I,s(" 使用 Vagrant 创建虚机时，需要指定一个镜像，也就是 box。开始这个 box 不存在，所以 Vagrant 会先从网上（"),n("a",S,[s("镜像网站"),a(e)]),s("）下载，然后缓存在本地目录中。但默认下载往往会比较慢，我们可以自己下载镜像文件。常用的两个 Linux 操作系统镜像的下载地址：")])]),n("ul",null,[n("li",null,[n("p",null,[s("CentOS "),n("a",C,[s("官网下载"),a(e)]),s(" ，"),n("a",D,[s("CentOS-7.box （点击下载）"),a(e)]),s(" 列表中有一个 vagrant 目录，选择其中的 .box 后缀的文件下载即可。")])]),n("li",null,[n("p",null,[s("Ubuntu "),n("a",U,[s("官网下载"),a(e)]),s(" ，"),n("a",B,[s("清华大学镜像站下载"),a(e)]),s(" ，同样选择针对 vagrant 的 .box 文件即可。")]),G])]),R,n("p",null,[s("更改虚拟机配置（"),n("a",$,[s("Provider配置"),a(e)]),s("）")]),F,n("p",null,[s("官网："),n("a",Y,[s("https://ubuntu.com/"),a(e)])]),W,n("p",null,[n("a",X,[s("安装 Open VM Tools"),a(e)])]),J,n("p",null,[s("Github地址："),n("a",Z,[s("https://github.com/rasa/vmware-tools-patches"),a(e)])]),Q,n("p",null,[n("a",K,[s("jdk 8u202之前的版本下载地址"),a(e)]),s("   "),n("a",nn,[s("jdk全版本下载地址"),a(e)])]),sn,n("p",null,[s("什么是zsh: "),n("a",an,[s("https://blog.csdn.net/lovedingd/article/details/124128721"),a(e)]),en,s(" 和bash一样，zsh也是终端内的一个命令行解释器，简称：shell。顾名思义就是机器外面的一层壳，用于人机交互。接收用户或其他程序的命令，把这些命令转化成内核能理解的语言。")]),tn,a(r,{id:"456",data:[{id:"Centos"},{id:"Ubuntu"}],"tab-id":"shell"},{title0:l(({value:i,isActive:c})=>[s("Centos")]),title1:l(({value:i,isActive:c})=>[s("Ubuntu")]),tab0:l(({value:i,isActive:c})=>[ln]),tab1:l(({value:i,isActive:c})=>[cn]),_:1}),on,n("p",null,[s("Oh-my-zsh十分简单，可以看看项目地址："),n("a",rn,[s("https://github.com/ohmyzsh/ohmyzsh"),a(e)])]),pn,s(" 手动安装 其实，手动配置重复的内容就是我写的脚本配置： "),dn,un,s(" On-my-zsh的功能和使用简介： "),vn,n("p",null,[s("zsh的强大不仅仅如此，还可以安装更多强大插件，感兴趣可以自己进行探索。"),mn,s(" 而Oh-my-zsh的使用也不仅仅如此，可以自行阅读开发者文档："),n("a",bn,[s("https://github.com/ohmyzsh/ohmyzsh"),a(e)])])])}const fn=d(k,[["render",hn],["__file","Linux-install.html.vue"]]),yn=JSON.parse('{"path":"/tool/Linux/Linux-install.html","title":"VMware/Linux安装","lang":"en-US","frontmatter":{"order":1,"title":"VMware/Linux安装","shortTitle":"Linux安装","icon":"application","description":"VMware/Linux安装 一 VMware虚拟机 1. NAT与桥接网络模式 vmware为我们提供了三种网络工作模式，它们分别是：Bridged(桥接模式)、NAT(网络地址转换模式)、Host-Only(仅主机模式)。 所有的虚拟系统是可以相互通信的，但虚拟系统和真实的网络是被隔离开的。 理解：VM中所有虚拟机可相互通信，但真实机器与虚拟机之间...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/tool/Linux/Linux-install.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"VMware/Linux安装"}],["meta",{"property":"og:description","content":"VMware/Linux安装 一 VMware虚拟机 1. NAT与桥接网络模式 vmware为我们提供了三种网络工作模式，它们分别是：Bridged(桥接模式)、NAT(网络地址转换模式)、Host-Only(仅主机模式)。 所有的虚拟系统是可以相互通信的，但虚拟系统和真实的网络是被隔离开的。 理解：VM中所有虚拟机可相互通信，但真实机器与虚拟机之间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-15T09:06:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-04-15T09:06:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VMware/Linux安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T09:06:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"一 VMware虚拟机","slug":"一-vmware虚拟机","link":"#一-vmware虚拟机","children":[{"level":3,"title":"1. NAT与桥接网络模式","slug":"_1-nat与桥接网络模式","link":"#_1-nat与桥接网络模式","children":[]},{"level":3,"title":"2. 设置虚拟机静态网络IP","slug":"_2-设置虚拟机静态网络ip","link":"#_2-设置虚拟机静态网络ip","children":[]},{"level":3,"title":"3. Linux虚拟机硬盘扩容","slug":"_3-linux虚拟机硬盘扩容","link":"#_3-linux虚拟机硬盘扩容","children":[]},{"level":3,"title":"4. 虚拟机自启动设置","slug":"_4-虚拟机自启动设置","link":"#_4-虚拟机自启动设置","children":[]},{"level":3,"title":"5. Linux防火墙设置","slug":"_5-linux防火墙设置","link":"#_5-linux防火墙设置","children":[]}]},{"level":2,"title":"二 vagrant安装","slug":"二-vagrant安装","link":"#二-vagrant安装","children":[{"level":3,"title":"1. 安装准备","slug":"_1-安装准备","link":"#_1-安装准备","children":[]},{"level":3,"title":"2. 安装虚拟机","slug":"_2-安装虚拟机","link":"#_2-安装虚拟机","children":[]}]},{"level":2,"title":"三 Ubuntu","slug":"三-ubuntu","link":"#三-ubuntu","children":[{"level":3,"title":"1. vm tools","slug":"_1-vm-tools","link":"#_1-vm-tools","children":[]},{"level":3,"title":"2. 语言和输入法","slug":"_2-语言和输入法","link":"#_2-语言和输入法","children":[]}]},{"level":2,"title":"四 Manjaro","slug":"四-manjaro","link":"#四-manjaro","children":[{"level":3,"title":"1. vm tools","slug":"_1-vm-tools-1","link":"#_1-vm-tools-1","children":[]},{"level":3,"title":"2. AUR助手","slug":"_2-aur助手","link":"#_2-aur助手","children":[]},{"level":3,"title":"3. 安装deb包","slug":"_3-安装deb包","link":"#_3-安装deb包","children":[]}]},{"level":2,"title":"五 常用Linux设置","slug":"五-常用linux设置","link":"#五-常用linux设置","children":[{"level":3,"title":"1. 解压安装jdk","slug":"_1-解压安装jdk","link":"#_1-解压安装jdk","children":[]},{"level":3,"title":"2. http proxy","slug":"_2-http-proxy","link":"#_2-http-proxy","children":[]},{"level":3,"title":"3. 终端配色方案","slug":"_3-终端配色方案","link":"#_3-终端配色方案","children":[]},{"level":3,"title":"4. On-my-zsh","slug":"_4-on-my-zsh","link":"#_4-on-my-zsh","children":[]}]}],"git":{"createdTime":1713172018000,"updatedTime":1713172018000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":16.13,"words":4838},"filePathRelative":"tool/Linux/Linux-install.md","localizedDate":"April 15, 2024","autoDesc":true}');export{fn as comp,yn as data};
