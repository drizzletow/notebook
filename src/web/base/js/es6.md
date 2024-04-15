---

order: 10
title: ECMAScript6+

---


【注】此处ES6+泛指ES6（ES5）之后所有版本的新特性

## 一 ES6基础语法

[ECMAScript2015~2020语法全解析](http://es.xiecheng.live/)

### 1. 变量及解构赋值

|  关键字  |   类型    |    定义     |   可变性   |   作用域    |
|:-----:|:-------:|:---------:|:-------:|:--------:|
|  var  |  变量（旧）  |  可以重复定义   | 不能限制修改  |  函数级作用域  |
|  let  |   变量    |  不能重复定义   |  可以修改   |  块级作用域   |
| const |   常量    |  不能重复定义   |  不可修改   |  块级作用域   |


```javascript
// 解构赋值:
// 两边结构必须一样 
let [a,b,c]=[33,21,45];        //数组
let {a,b,c}={a:12,b:33,c:22};  //json

```

**【小结】**

- 解构赋值就是把数据结构分解，然后给变量进行赋值
- 如果结构不成功，变量跟数值个数不匹配的时候，变量的值为undefined
- 数组解构用中括号包裹，多个变量用逗号隔开，对象解构用花括号包裹，多个变量用逗号隔开
- 利用解构赋值能够让我们方便的去取对象中的属性跟方法

**剩余参数**

剩余参数语法允许我们将一个不定数量的参数表示为一个数组，不定参数定义方式，这种方式很方便的去声明不知道参数情况下的一个函数

```javascript
function sum (first, ...args) {
     console.log(first); // 10
     console.log(args); // [20, 30] 
 }
 sum(10, 20, 30)

```

**剩余参数和解构配合使用**

```javascript
let students = ['wangwu', 'zhangsan', 'lisi'];
let [s1, ...s2] = students; 
console.log(s1);  // 'wangwu' 
console.log(s2);  // ['zhangsan', 'lisi']

```



### 2. 函数及参数展开

**（1）箭头函数** （简化，修正this）

```javascript
function a() { }  //常规写法
() => { }       //箭头函数

//箭头函数：
// 表达式在右侧
let sum = (a, b) => a + b;  //省略return

// 或带 {...} 的多行语法，此处需要 return：
let sum = (a, b) => {
  // ...
  return a + b;
}

// 没有参数
let sayHi = () => alert("Hello");

// 有一个参数
let double = n => n * 2;  //省略括号和return
```


**（2）参数展开**
```javascript
//作为函数形参时：
function show(a, b , ...args){
    console.log(a, b, args)      
}
show(11,2,3,43,22,41,6,8,44,66,33) // 11 2 [3, 43, 22, 41, 6, 8, 44, 66, 33]

//作为函数实参时：
let arr1 = [12, 33, 21]
function print(a, b, c){
    console.log(a, b, c)
}
print(...arr1)              // 12 33 21

// 数组替换场景
let arr2 = [2, 4, 61]
let arr = [...arr1, ...arr2] // 本质上就是简单的替换
console.log(arr)             //[12, 33, 21, 2, 4, 61]

//对象中同样可以应用
let json1 = {a: 11, b: 33, c: 66}
let json2 = {...json1, d: 88}
console.log(json2)      //{a: 11, b: 33, c: 66, d: 88}
```

### 3. 迭代（ES5）

|  运算符  | 描述   |
| :-----: |:----------------------------|
|   map   | 映射：一 一对应                    |
| reduce  | n => 1, 如：sum(1, 2, 3) => 6 |
| filter  | 过滤                          |
| forEach | 遍历                          |

**（1）map**
```javascript
let arr = [56, 45, 76, 88, 99, 38] 
let arr1 = arr.map(function(item){
    if (item >= 60){
        return "及格"
    }else{
        return "不及格"
    }
})
console.log(arr)
console.log(arr1)  // ["不及格", "不及格", "及格", "及格", "及格", "不及格"]
```

**（2）reduce**

```javascript
let average = arr.reduce((tmp, item, index)=>{
    if (index == arr.length - 1){  //数组共6个数，执行5次
        return (tmp + item) / arr.length
    }else{
        return tmp + item
    }
})
console.log(average)  //67
```
**（3）filter**
```javascript
//filter
arr = [56, 45, 76, 88, 99, 38] 
let arr2 = arr.filter((item)=>{  //过滤掉奇数
    return (item % 2 == 1) ? false : true    //可简写为 return item % 2 == 0
})
console.log(arr2)  //[56, 76, 88, 38]
```
**（4）forEach**
```javascript
let arr = [56, 45, 76, 88, 99, 38] 
arr.forEach((item, index)=>{
    console.log(`第${index}个：值为：${item}`)  // 第0个：值为：56   第1个：值为：45   ......
})  //使用了模板字符串，反单引号 ` `
```


### 4. JSON和数组
**（1）json和字符串的相互转换**
```javascript
// JSON 序列化（JSON->string） 和 解序列化(string->JSON)
let json = {name: "Bob", age: 16, sex: "male"}
console.log(json)                      //{ name: 'Bob', age: 16, sex: 'male' }
console.log(JSON.stringify(json))      //{"name":"Bob","age":16,"sex":"male"}

let str = '{"name":"Bob","age":16,"sex":"male"}'
console.log(JSON.parse(str))           // 等于 json
```

**（2）伪数组转换为数组**

```javascript
let oDivs = document.getElementsByTagName('div'); 
oDivs = [...oDivs];
```
Array.from() 将伪数组或可遍历对象转换为真正的数组

```javascript
//定义一个集合
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}; 
//转成数组
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

方法还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组

```javascript
 let arrayLike = { 
     "0": 1,
     "1": 2,
     "length": 2
 }
 let newAry = Array.from(arrayLike, item => item *2)//[2,4]

```

**（3）其他数组方法**
find() 用于找出第一个符合条件的数组成员，如果没有找到返回undefined

```javascript
let ary = [{
     id: 1,
     name: '张三'
 }, { 
     id: 2,
     name: '李四'
 }]; 
 let target = ary.find((item, index) => item.id == 2);//找数组里面符合条件的值，当数组中元素id等于2的查找出来，注意，只会匹配第一个

```

findIndex() 用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1

```javascript
let ary = [1, 5, 10, 15];
let index = ary.findIndex((value, index) => value > 9); 
console.log(index); // 2
```

includes()  判断某个数组是否包含给定的值，返回布尔值。

```javascript
[1, 2, 3].includes(2) // true 
[1, 2, 3].includes(4) // false

```






### 5. 类和对象
```js
//以下代码是对对象的复习，es6之前的对象
//字面量创建对象
var ldh = {
    name: '刘德华',
    age: 18
}
console.log(ldh);

//构造函数创建对象
  function Star(name, age) {
    this.name = name;
    this.age = age;
 }
var ldh = new Star('刘德华', 18)//实例化对象
console.log(ldh);	
```

- 在 ES6 中新增加了类的概念，可以使用 class 关键字声明一个类，之后以这个类来实例化对象。


1. 语法:

```js
//步骤1 使用class关键字
class name {
  // class body
}     
//步骤2使用定义的类创建实例  注意new关键字
var xx = new name();     
```

1. 示例

```js
 // 1. 创建类 class  创建一个 明星类
 class Star {
   // 类的共有属性放到 constructor 里面
   constructor(name, age) {
   this.name = name;
   this.age = age;
   }
 }
   // 2. 利用类创建对象 new
   var ldh = new Star('刘德华', 18);
   console.log(ldh);
```

**类创建添加属性和方法**

```js
 // 1. 创建类 class  创建一个类
class Star {
    // 类的共有属性放到 constructor 里面 constructor是 构造器或者构造函数
    constructor(uname, age) {
      this.uname = uname;
      this.age = age;
    }//------------------------------------------->注意,方法与方法之间不需要添加逗号
    sing(song) {
      console.log(this.uname + '唱' + song);
    }
}
// 2. 利用类创建对象 new
var ldh = new Star('刘德华', 18);
console.log(ldh); // Star {uname: "刘德华", age: 18}
ldh.sing('冰雨'); // 刘德华唱冰雨
```

**注意:**

1. 通过class 关键字创建类, 类名我们还是习惯性定义首字母大写
2. 类里面有个constructor 函数,可以接受传递过来的参数,同时返回实例对象
3. constructor 函数 只要 new 生成实例时,就会自动调用这个函数, 如果我们不写这个函数,类也会自动生成这个函数
4. 多个函数方法之间不需要添加逗号分隔
5. 生成实例 new 不能省略
6. 语法规范, 创建类 类名后面不要加小括号,生成实例 类名后面加小括号, 构造函数不需要加function



**类的继承**

1. 语法

```js
// 父类
class Father{   
} 

// 子类继承父类
class  Son  extends Father {  
}       
```

1. 示例

```js
class Father {
      constructor(surname) {
        this.surname= surname;
      }
      say() {
        console.log('你的姓是' + this.surname);
       }
}

class Son extends Father{  // 这样子类就继承了父类的属性和方法
}
var damao= new Son('刘');
damao.say();      //结果为 你的姓是刘
```

- 子类使用super关键字访问父类的方法

```js
  //定义了父类
  class Father {
     constructor(x, y) {
     this.x = x;
     this.y = y;
     }
     sum() {
     console.log(this.x + this.y);
  	}
   }
  //子元素继承父类
      class Son extends Father {
     		 constructor(x, y) {
      		super(x, y); //使用super调用了父类中的构造函数
      	}
      }
      var son = new Son(1, 2);
      son.sum(); //结果为3
```

  **注意:** 

  1. 继承中,如果实例化子类输出一个方法,先看子类有没有这个方法,如果有就先执行子类的

  2. 继承中,如果子类里面没有,就去查找父类有没有这个方法,如果有,就执行父类的这个方法(就近原则)

  3. 如果子类想要继承父类的方法,同时在自己内部扩展自己的方法,利用super 调用父类的构造函数,super 必须在子类this之前调用

```js
      // 父类有加法方法
      class Father {
        constructor(x, y) {
        this.x = x;
        this.y = y;
        }
        sum() {
        console.log(this.x + this.y);
        }
      }
      // 子类继承父类加法方法 同时 扩展减法方法
      class Son extends Father {
        constructor(x, y) {
        // 利用super 调用父类的构造函数 super 必须在子类this之前调用,放到this之后会报错
        super(x, y);
        this.x = x;
        this.y = y;

       }
       subtract() {
       console.log(this.x - this.y);
       }
     }
     var son = new Son(5, 3);
     son.subtract(); //2
     son.sum();//8
```

























