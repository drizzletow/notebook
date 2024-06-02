import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as i,b as t,d as e,a as o,w as c,e as p}from"./app-CxJd8nF7.js";const r="/notebook/assets/image-20210923092957494-CEG21qMG.png",u="/notebook/assets/image-20210923102945380-xZK3Qw96.png",h="/notebook/assets/image-20210923105921460-CbsJvLOq.png",b={},m=p('<h2 id="一-机器数和真值" tabindex="-1"><a class="header-anchor" href="#一-机器数和真值"><span>一 机器数和真值</span></a></h2><p>在学习原码, 反码和补码之前, 需要先了解机器数和真值的概念.</p><h3 id="_1、机器数" tabindex="-1"><a class="header-anchor" href="#_1、机器数"><span>1、机器数</span></a></h3><p>一个数在计算机中的二进制表示形式, 叫做这个数的机器数。机器数是带符号的，在计算机用一个数的最高位存放符号, 正数为0, 负数为1.</p><p>比如，十进制中的数 +3 ，计算机字长为8位，转换成二进制就是00000011。如果是 -3 ，就是 10000011 。</p><p>那么，这里的 00000011 和 10000011 就是机器数。</p><h3 id="_2、真值" tabindex="-1"><a class="header-anchor" href="#_2、真值"><span>2、真值</span></a></h3><blockquote><p>因为第一位是符号位，所以机器数的形式值就不等于真正的数值。例如上面的有符号数 10000011，其最高位1代表负，其真正数值是 -3 而不是形式值131（10000011转换成十进制等于131）。所以，为区别起见，将带符号位的机器数对应的真正数值称为机器数的真值。</p></blockquote><p>例：0000 0001的真值 = +000 0001 = +1，1000 0001的真值 = –000 0001 = –1</p><h2 id="二-数制和码制" tabindex="-1"><a class="header-anchor" href="#二-数制和码制"><span>二 数制和码制</span></a></h2><h3 id="_1-基本单位" tabindex="-1"><a class="header-anchor" href="#_1-基本单位"><span>1. 基本单位</span></a></h3><table><thead><tr><th style="text-align:center;">单位/名词</th><th style="text-align:center;">简称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">位 (bit)</td><td style="text-align:center;">b (比特)</td><td style="text-align:left;">一个二进制位只可以表示0和1两种状态，两个位可以表示00, 01, 10, 11，4=2<sup>2</sup>种状态， 三个位可以表示8=2<sup>3</sup>种状态……以此类推</td></tr><tr><td style="text-align:center;">字节(Byte)</td><td style="text-align:center;">B</td><td style="text-align:left;">8个位就是一个字节, 一个字节单位的数据可以有2<sup>8</sup>=256种组合方式（状态）。一个字节的二进制数，最小为00000000，最大为11111111。1B（byte，字节）= 8 bit；1KB（Kibibyte，千字节）=1024B= 2<sup>10</sup> B；1MB（Mebibyte，兆字节，百万字节，简称“兆”）=1024KB= 2<sup>20</sup> B ……</td></tr><tr><td style="text-align:center;">字</td><td style="text-align:center;">/</td><td style="text-align:left;">字节是字的基本单位，所以说一个字可以包含一个字节的正整数倍。具体情况根据不同的机器而定，如果是一台16位机，那么，它的1个字就由2个字节构成。也就是说，字是用来一次性处理事务的一个固定长度的位（bit）组。</td></tr><tr><td style="text-align:center;">字长</td><td style="text-align:center;">/</td><td style="text-align:left;">顾名思义，字长就是字的长度，不过不是用字来表示，而是用位来表示。字长是用来表示字的位数的。例如一台8位机，它的1个字就等于1个字节，字长为8位。如果是一台16位机，它的1个字就由2个字节构成，字长为16位。字长被定义为CPU在单位时间内(同一时间)能一次处理的二进制数(字)的位数。</td></tr></tbody></table><h3 id="_2-数制" tabindex="-1"><a class="header-anchor" href="#_2-数制"><span>2. 数制</span></a></h3><p><strong>R进制�</strong> 逢R进一</p><img src="'+r+'" alt="image-20210923092957494" style="zoom:50%;"><h3 id="_3-进制转换" tabindex="-1"><a class="header-anchor" href="#_3-进制转换"><span>3. 进制转换</span></a></h3><ol><li><p>R进制转换为十进制（位权相加法）</p><table><thead><tr><th style="text-align:center;">R进制数值</th><th style="text-align:center;">转换过程</th><th style="text-align:center;">十进制数</th></tr></thead><tbody><tr><td style="text-align:center;">(10101.01)<sub>2</sub></td><td style="text-align:center;">(1x2<sup>4</sup>+1x2<sup>2</sup>+1x2<sup>0</sup>+1x2<sup>-2</sup>)<sub>10</sub></td><td style="text-align:center;">(21.25)<sub>10</sub></td></tr><tr><td style="text-align:center;">(37.6)<sub>8</sub></td><td style="text-align:center;">(3x8<sup>1</sup>+7x8<sup>0</sup>+6x8<sup>-1</sup>)<sub>10</sub></td><td style="text-align:center;">(31.75)<sub>10</sub></td></tr><tr><td style="text-align:center;">(3A.C)<sub>16</sub></td><td style="text-align:center;">(3x16<sup>1</sup>+10x16<sup>0</sup>+12x16<sup>-1</sup>)<sub>10</sub></td><td style="text-align:center;">(58.75)<sub>10</sub></td></tr></tbody></table></li><li><p>十进制转换为R进制（除基取余-倒序法、乘基取整-顺序法）</p></li></ol><img src="'+u+'" alt="image-20210923102945380" style="zoom:67%;"><ol start="3"><li>二进制、八进制、十六进制相互转换（位段转换法）</li></ol><table><thead><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th></tr></thead><tbody><tr><td>001</td><td>010</td><td>011</td><td>100</td><td>101</td><td>110</td><td>111</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>0001</td><td>0010</td><td>0011</td><td>0100</td><td>0101</td><td>0110</td><td>0111</td><td>1000</td><td>1001</td><td>1010</td><td>1011</td><td>1100</td><td>1101</td><td>1110</td><td>1111</td></tr></tbody></table><figure><img src="'+h+'" alt="image-20210923105921460" tabindex="0" loading="lazy"><figcaption>image-20210923105921460</figcaption></figure><h3 id="_4-补码" tabindex="-1"><a class="header-anchor" href="#_4-补码"><span>4. 补码</span></a></h3><p>在学习原码, 反码和补码之前, 需要先了解<strong>机器数</strong>和<strong>真值</strong>的概念：</p><ul><li>机器数：一个数在计算机中的二进制表示形式, 叫做这个数的机器数。如：若字长为8位，3的机器数为：0000 0011</li><li>真 值：因为第一位是符号位，所以机器数的形式值不等于真正的数值，为区别起见，将带符号位的机器数对应的真正数值称为机器数的真值。例：0000 0001的真值 = +000 0001 = +1，1000 0001的真值 = –000 0001 = –1</li></ul><p><strong>原码, 反码, 补码的基础概念和计算方法</strong></p><ol><li><p>原码就是符号位加上真值的绝对值, 即用第一位表示符号, 其余位表示值，如:</p><p>[+1]<sub>原</sub> = 0000 0001 ，[-1]<sub>原</sub> = 1000 0001</p></li><li><p>正数的反码是其本身、负数的反码是在其原码的基础上, 符号位不变，其余各个位取反</p><p>[+1] = [00000001]<sub>原</sub> = [00000001]<sub>反</sub></p><p>[-1] = [10000001]<sub>原</sub> = [11111110]<sub>反</sub></p></li><li><p>正数的补码就是其本身、负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1 (即在反码的基础上+1)</p><p>[+1] = [00000001]<sub>原</sub> = [00000001]<sub>反</sub> = [00000001]<sub>补</sub></p><p>[-1] = [10000001]<sub>原</sub> = [11111110]<sub>反</sub> = [11111111]<sub>补</sub></p></li></ol>',26),g=t("li",null,[t("p",null,"正数的原码，补码，反码相同")],-1),_=t("p",null,[e("负数的原码和补码转换规则如下："),t("br"),e(" 原码转换为补码：符号位不变，数值位按位取反,末位再加1。"),t("br"),e(" 补码转换为原码：符号位不变，数值位按位取反,末位再加1，即补码的补码等于原码。")],-1),k=p('<h2 id="三-原码-反码-补码" tabindex="-1"><a class="header-anchor" href="#三-原码-反码-补码"><span>三 原码/反码/补码</span></a></h2><p>在探求为何机器要使用补码之前, 让我们先了解原码, 反码和补码的概念.对于一个数, 计算机要使用一定的编码方式进行存储. 原码, 反码, 补码是机器存储一个具体数字的编码方式.</p><h3 id="_1-原码" tabindex="-1"><a class="header-anchor" href="#_1-原码"><span>1. 原码</span></a></h3><p>原码就是符号位加上真值的绝对值, 即用第一位表示符号, 其余位表示值. 比如如果是8位二进制:</p><blockquote><p>[+1]原 = 0000 0001</p><p>[-1]原 = 1000 0001</p></blockquote><p>第一位是符号位. 因为第一位是符号位, 所以8位二进制数的取值范围就是:</p><blockquote><p>[1111 1111 , 0111 1111]</p></blockquote><p>即</p><blockquote><p>[-127 , 127]</p></blockquote><p>原码是人脑最容易理解和计算的表示方式.</p><h3 id="_2-反码" tabindex="-1"><a class="header-anchor" href="#_2-反码"><span>2. 反码</span></a></h3><p>反码的表示方法是:</p><p>正数的反码是其本身</p><p>负数的反码是在其原码的基础上, 符号位不变，其余各个位取反.</p><blockquote><p>[+1] = [00000001]原 = [00000001]反</p><p>[-1] = [10000001]原 = [11111110]反</p></blockquote><p>可见如果一个反码表示的是负数, 人脑无法直观的看出来它的数值. 通常要将其转换成原码再计算.</p><h3 id="_3-补码" tabindex="-1"><a class="header-anchor" href="#_3-补码"><span>3. 补码</span></a></h3><p>补码的表示方法是:</p><p>正数的补码就是其本身</p><p>负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1. (即在反码的基础上+1)</p><blockquote><p>[+1] = [00000001]原 = [00000001]反 = [00000001]补</p><p>[-1] = [10000001]原 = [11111110]反 = [11111111]补</p></blockquote><p>对于负数, 补码表示方式也是人脑无法直观看出其数值的. 通常也需要转换成原码在计算其数值.</p><h3 id="为何要使用原码-反码和补码" tabindex="-1"><a class="header-anchor" href="#为何要使用原码-反码和补码"><span>为何要使用原码, 反码和补码</span></a></h3><p>在开始深入学习前, 我的学习建议是先&quot;死记硬背&quot;上面的原码, 反码和补码的表示方式以及计算方法.</p><p>现在我们知道了计算机可以有三种编码方式表示一个数. 对于正数因为三种编码方式的结果都相同:</p><blockquote><p>[+1] = [00000001]原 = [00000001]反 = [00000001]补</p></blockquote><p>所以不需要过多解释. 但是对于负数:</p><blockquote><p>[-1] = [10000001]原 = [11111110]反 = [11111111]补</p></blockquote><p>可见原码, 反码和补码是完全不同的. 既然原码才是被人脑直接识别并用于计算表示方式, 为何还会有反码和补码呢?</p><p>首先, 因为人脑可以知道第一位是符号位, 在计算的时候我们会根据符号位, 选择对真值区域的加减. (真值的概念在本文最开头). 但是对于计算机, 加减乘数已经是最基础的运算, 要设计的尽量简单. 计算机辨别&quot;符号位&quot;显然会让计算机的基础电路设计变得十分复杂! 于是人们想出了将符号位也参与运算的方法. 我们知道, 根据运算法则减去一个正数等于加上一个负数, 即: 1-1 = 1 + (-1) = 0 , 所以机器可以只有加法而没有减法, 这样计算机运算的设计就更简单了.</p><p>于是人们开始探索 将符号位参与运算, 并且只保留加法的方法. 首先来看原码:</p><p>计算十进制的表达式: 1-1=0</p><blockquote><p>1 - 1 = 1 + (-1) = [00000001]原 + [10000001]原 = [10000010]原 = -2</p></blockquote><p>如果用原码表示, 让符号位也参与计算, 显然对于减法来说, 结果是不正确的.这也就是为何计算机内部不使用原码表示一个数.</p><p>为了解决原码做减法的问题, 出现了反码:</p><p>计算十进制的表达式: 1-1=0</p><blockquote><p>1 - 1 = 1 + (-1) = [0000 0001]原 + [1000 0001]原= [0000 0001]反 + [1111 1110]反 = [1111 1111]反 = [1000 0000]原 = -0</p></blockquote><p>发现用反码计算减法, 结果的真值部分是正确的. 而唯一的问题其实就出现在&quot;0&quot;这个特殊的数值上. 虽然人们理解上+0和-0是一样的, 但是0带符号是没有任何意义的. 而且会有[0000 0000]原和[1000 0000]原两个编码表示0.</p><p>于是补码的出现, 解决了0的符号以及两个编码的问题:</p><blockquote><p>1-1 = 1 + (-1) = [0000 0001]原 + [1000 0001]原 = [0000 0001]补 + [1111 1111]补 = [0000 0000]补=[0000 0000]原</p></blockquote><p>这样0用[0000 0000]表示, 而以前出现问题的-0则不存在了.而且可以用[1000 0000]表示-128:</p><blockquote><p>(-1) + (-127) = [1000 0001]原 + [1111 1111]原 = [1111 1111]补 + [1000 0001]补 = [1000 0000]补</p></blockquote><p>-1-127的结果应该是-128, 在用补码运算的结果中, [1000 0000]补 就是-128. 但是注意因为实际上是使用以前的-0的补码来表示-128, 所以-128并没有原码和反码表示.(对-128的补码表示[1000 0000]补算出来的原码是[0000 0000]原, 这是不正确的)</p><p>使用补码, 不仅仅修复了0的符号以及存在两个编码的问题, 而且还能够多表示一个最低数. 这就是为什么8位二进制, 使用原码或反码表示的范围为[-127, +127], 而使用补码表示的范围为[-128, 127].</p><p>因为机器使用补码, 所以对于编程中常用到的32位int类型, 可以表示范围是: [-231, 231-1] 因为第一位表示的是符号位.而使用补码表示时又可以多保存一个最小值.</p><h2 id="四-原码-反码-补码-再深入" tabindex="-1"><a class="header-anchor" href="#四-原码-反码-补码-再深入"><span>四 原码/反码/补码 再深入</span></a></h2><p>计算机巧妙地把符号位参与运算, 并且将减法变成了加法, 背后蕴含了怎样的数学原理呢?</p><p>将钟表想象成是一个1位的12进制数. 如果当前时间是6点, 我希望将时间设置成4点, 需要怎么做呢?我们可以:</p><blockquote><p>\\1. 往回拨2个小时: 6 - 2 = 4</p><p>\\2. 往前拨10个小时: (6 + 10) mod 12 = 4</p><p>\\3. 往前拨10+12=22个小时: (6+22) mod 12 =4</p></blockquote><p>2,3方法中的mod是指取模操作, 16 mod 12 =4 即用16除以12后的余数是4.</p><p>所以钟表往回拨(减法)的结果可以用往前拨(加法)替代!</p><p>现在的焦点就落在了如何用一个正数, 来替代一个负数. 上面的例子我们能感觉出来一些端倪, 发现一些规律. 但是数学是严谨的. 不能靠感觉.</p><p>首先介绍一个数学中相关的概念: 同余</p><h3 id="同余的概念" tabindex="-1"><a class="header-anchor" href="#同余的概念"><span>同余的概念</span></a></h3><p>两个整数a，b，若它们除以整数m所得的余数相等，则称a，b对于模m同余</p><p>记作 a ≡ b (mod m)</p><p>读作 a 与 b 关于模 m 同余。</p><p>举例说明:</p><blockquote><p>4 mod 12 = 4</p><p>16 mod 12 = 4</p><p>28 mod 12 = 4</p></blockquote><p>所以4, 16, 28关于模 12 同余.</p><h3 id="负数取模" tabindex="-1"><a class="header-anchor" href="#负数取模"><span>负数取模</span></a></h3><p>正数进行mod运算是很简单的. 但是负数呢?</p><p>下面是关于mod运算的数学定义:</p>',63),x={href:"http://images.cnblogs.com/cnblogs_com/zhangziqiu/201103/201103302155507894.jpg",target:"_blank",rel:"noopener noreferrer"},q=t("img",{src:"https://images.cnblogs.com/cnblogs_com/zhangziqiu/201103/201103302155504514.jpg",alt:"clip_image001",tabindex:"0",loading:"lazy"},null,-1),y=t("figcaption",null,"clip_image001",-1),f=p('<p>上面是截图, &quot;取下界&quot;符号找不到如何输入(word中粘贴过来后乱码). 下面是使用&quot;L&quot;和&quot;J&quot;替换上图的&quot;取下界&quot;符号:</p><blockquote><p>x mod y = x - y L x / y J</p></blockquote><p>上面公式的意思是:</p><p>x mod y等于 x 减去 y 乘上 x与y的商的下界.</p><p>以 -3 mod 2 举例:</p><blockquote><p>-3 mod 2</p><p>= -3 - 2xL -3/2 J</p><p>= -3 - 2xL-1.5J</p><p>= -3 - 2x(-2)</p><p>= -3 + 4 = 1</p></blockquote><p>所以:</p><blockquote><p>(-2) mod 12 = 12-2=10</p><p>(-4) mod 12 = 12-4 = 8</p><p>(-5) mod 12 = 12 - 5 = 7</p></blockquote><h3 id="开始证明" tabindex="-1"><a class="header-anchor" href="#开始证明"><span>开始证明</span></a></h3><p>再回到时钟的问题上:</p><blockquote><p>回拨2小时 = 前拨10小时</p><p>回拨4小时 = 前拨8小时</p><p>回拨5小时= 前拨7小时</p></blockquote><p>注意, 这里发现的规律!</p><p>结合上面学到的同余的概念.实际上:</p><blockquote><p>(-2) mod 12 = 10</p><p>10 mod 12 = 10</p></blockquote><p>-2与10是同余的.</p><blockquote><p>(-4) mod 12 = 8</p><p>8 mod 12 = 8</p></blockquote><p>-4与8是同余的.</p><p>距离成功越来越近了. 要实现用正数替代负数, 只需要运用同余数的两个定理:</p><p>反身性:</p><blockquote><p>a ≡ a (mod m)</p></blockquote><p>这个定理是很显而易见的.</p><p>线性运算定理:</p><blockquote><p>如果a ≡ b (mod m)，c ≡ d (mod m) 那么:</p><p>(1)a ± c ≡ b ± d (mod m)</p><p>(2)a * c ≡ b * d (mod m)</p></blockquote>',23),E={href:"http://baike.baidu.com/view/79282.htm",target:"_blank",rel:"noopener noreferrer"},v=p("<p>所以:</p><blockquote><p>7 ≡ 7 (mod 12)</p><p>(-2) ≡ 10 (mod 12)</p><p>7 -2 ≡ 7 + 10 (mod 12)</p></blockquote><p>现在我们为一个负数, 找到了它的正数同余数. 但是并不是7-2 = 7+10, 而是 7 -2 ≡ 7 + 10 (mod 12) , 即计算结果的余数相等.</p><p>接下来回到二进制的问题上, 看一下: 2-1=1的问题.</p><blockquote><p>2-1=2+(-1) = [0000 0010]原 + [1000 0001]原= [0000 0010]反 + [1111 1110]反</p></blockquote><p>先到这一步, -1的反码表示是1111 1110. 如果这里将[1111 1110]认为是原码, 则[1111 1110]原 = -126, 这里将符号位除去, 即认为是126.</p><p>发现有如下规律:</p><blockquote><p>(-1) mod 127 = 126</p><p>126 mod 127 = 126</p></blockquote><p>即:</p><blockquote><p>(-1) ≡ 126 (mod 127)</p><p>2-1 ≡ 2+126 (mod 127)</p></blockquote><p>2-1 与 2+126的余数结果是相同的! 而这个余数, 正式我们的期望的计算结果: 2-1=1</p><p>所以说一个数的反码, 实际上是这个数对于一个膜的同余数. 而这个膜并不是我们的二进制, 而是所能表示的最大值! 这就和钟表一样, 转了一圈后总能找到在可表示范围内的一个正确的数值!</p><p>而2+126很显然相当于钟表转过了一轮, 而因为符号位是参与计算的, 正好和溢出的最高位形成正确的运算结果.</p><p>既然反码可以将减法变成加法, 那么现在计算机使用的补码呢? 为什么在反码的基础上加1, 还能得到正确的结果?</p><blockquote><p>2-1=2+(-1) = [0000 0010]原 + [1000 0001]原 = [0000 0010]补 + [1111 1111]补</p></blockquote><p>如果把[1111 1111]当成原码, 去除符号位, 则:</p><blockquote><p>[0111 1111]原 = 127</p></blockquote><p>其实, 在反码的基础上+1, 只是相当于增加了膜的值:</p><blockquote><p>(-1) mod 128 = 127</p><p>127 mod 128 = 127</p><p>2-1 ≡ 2+127 (mod 128)</p></blockquote><p>此时, 表盘相当于每128个刻度转一轮. 所以用补码表示的运算结果最小值和最大值应该是[-128, 128].</p><p>但是由于0的特殊情况, 没有办法表示128, 所以补码的取值范围是[-128, 127]</p>",21);function A(z,B){const s=a("RouteLink"),l=a("ExternalLinkIcon");return d(),i("div",null,[m,t("ul",null,[g,t("li",null,[_,t("p",null,[e("更多关于原码, 反码, 补码的介绍："),o(s,{to:"/java/syntax/before/detail/%E5%8E%9F%E7%A0%81%E5%8F%8D%E7%A0%81%E5%92%8C%E8%A1%A5%E7%A0%81.html"},{default:c(()=>[e("深入原码反码补码")]),_:1})])])]),k,t("figure",null,[t("a",x,[q,o(l)]),y]),f,t("p",null,[e("如果想看这个定理的证明, 请看:"),t("a",E,[e("http://baike.baidu.com/view/79282.htm"),o(l)])]),v])}const j=n(b,[["render",A],["__file","原码反码和补码.html.vue"]]),L=JSON.parse('{"path":"/java/syntax/before/%E5%8E%9F%E7%A0%81%E5%8F%8D%E7%A0%81%E5%92%8C%E8%A1%A5%E7%A0%81.html","title":"数制和码制","lang":"en-US","frontmatter":{"order":1,"title":"数制和码制","description":"一 机器数和真值 在学习原码, 反码和补码之前, 需要先了解机器数和真值的概念. 1、机器数 一个数在计算机中的二进制表示形式, 叫做这个数的机器数。机器数是带符号的，在计算机用一个数的最高位存放符号, 正数为0, 负数为1. 比如，十进制中的数 +3 ，计算机字长为8位，转换成二进制就是00000011。如果是 -3 ，就是 10000011 。 那...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/java/syntax/before/%E5%8E%9F%E7%A0%81%E5%8F%8D%E7%A0%81%E5%92%8C%E8%A1%A5%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"数制和码制"}],["meta",{"property":"og:description","content":"一 机器数和真值 在学习原码, 反码和补码之前, 需要先了解机器数和真值的概念. 1、机器数 一个数在计算机中的二进制表示形式, 叫做这个数的机器数。机器数是带符号的，在计算机用一个数的最高位存放符号, 正数为0, 负数为1. 比如，十进制中的数 +3 ，计算机字长为8位，转换成二进制就是00000011。如果是 -3 ，就是 10000011 。 那..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://images.cnblogs.com/cnblogs_com/zhangziqiu/201103/201103302155504514.jpg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-02T17:12:36.000Z"}],["meta",{"property":"article:author","content":"Mr.Topple"}],["meta",{"property":"article:modified_time","content":"2024-06-02T17:12:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数制和码制\\",\\"image\\":[\\"https://images.cnblogs.com/cnblogs_com/zhangziqiu/201103/201103302155504514.jpg\\"],\\"dateModified\\":\\"2024-06-02T17:12:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Topple\\",\\"url\\":\\"https://www.baidu.com\\"}]}"]]},"headers":[{"level":2,"title":"一 机器数和真值","slug":"一-机器数和真值","link":"#一-机器数和真值","children":[{"level":3,"title":"1、机器数","slug":"_1、机器数","link":"#_1、机器数","children":[]},{"level":3,"title":"2、真值","slug":"_2、真值","link":"#_2、真值","children":[]}]},{"level":2,"title":"二 数制和码制","slug":"二-数制和码制","link":"#二-数制和码制","children":[{"level":3,"title":"1. 基本单位","slug":"_1-基本单位","link":"#_1-基本单位","children":[]},{"level":3,"title":"2. 数制","slug":"_2-数制","link":"#_2-数制","children":[]},{"level":3,"title":"3. 进制转换","slug":"_3-进制转换","link":"#_3-进制转换","children":[]},{"level":3,"title":"4. 补码","slug":"_4-补码","link":"#_4-补码","children":[]}]},{"level":2,"title":"三 原码/反码/补码","slug":"三-原码-反码-补码","link":"#三-原码-反码-补码","children":[{"level":3,"title":"1. 原码","slug":"_1-原码","link":"#_1-原码","children":[]},{"level":3,"title":"2. 反码","slug":"_2-反码","link":"#_2-反码","children":[]},{"level":3,"title":"3. 补码","slug":"_3-补码","link":"#_3-补码","children":[]},{"level":3,"title":"为何要使用原码, 反码和补码","slug":"为何要使用原码-反码和补码","link":"#为何要使用原码-反码和补码","children":[]}]},{"level":2,"title":"四 原码/反码/补码 再深入","slug":"四-原码-反码-补码-再深入","link":"#四-原码-反码-补码-再深入","children":[{"level":3,"title":"同余的概念","slug":"同余的概念","link":"#同余的概念","children":[]},{"level":3,"title":"负数取模","slug":"负数取模","link":"#负数取模","children":[]},{"level":3,"title":"开始证明","slug":"开始证明","link":"#开始证明","children":[]}]}],"git":{"createdTime":1717348356000,"updatedTime":1717348356000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":13.04,"words":3913},"filePathRelative":"java/syntax/before/原码反码和补码.md","localizedDate":"June 2, 2024","autoDesc":true}');export{j as comp,L as data};
