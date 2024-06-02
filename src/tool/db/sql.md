---

order: 1
title:  SQL核心技能

---


## SQL语言基础

SQL：Structured Query Language（结构化查询语言），是用来操作关系型数据库的一门语言。

SQL是一个关系型数据库的通用操作语言，也成为标准SQL，也叫SQL-92。

==**Create, Read, Update, and Delete 通常称为CRUD操作**==


### SQL语句分类
1. **数据查询语言 (DQL - Data Query Language)**
   - 主要用于从数据库中检索数据，最核心的关键词是`SELECT`，通常与`FROM`、`WHERE`、`ORDER BY`、`GROUP BY`等子句一起使用。

2. **数据操作语言 (DML - Data Manipulation Language)**
   - 用于对数据库表中的数据进行增删改操作。
   - **插入数据**: `INSERT INTO`
   - **更新数据**: `UPDATE`
   - **删除数据**: `DELETE`

3. **数据定义语言 (DDL - Data Definition Language)**
   - 用于定义和管理数据库对象（如表、视图、索引等）的结构。
   - **创建**: `CREATE`
   - **修改**: `ALTER`
   - **删除**: `DROP`

4. **数据控制语言 (DCL - Data Control Language)**
   - 用于管理数据库的安全性和用户权限。
   - **授权**: `GRANT`
   - **撤销权限**: `REVOKE`

5. **事务控制语言 (TCL - Transaction Control Language)**
   - 用于管理数据库事务，保证数据的一致性和完整性。
   - **提交事务**: `COMMIT`
   - **回滚事务**: `ROLLBACK`
   - **保存点设置**: `SAVEPOINT`



	





## 2. DDL库表操作

DDL（Data Definition Language），数据定义语言，用来**定义数据库对象：库、表、列** 

### 1) 库的操作

**创建新的数据库** ：

```sql
create database 数据库名 set 编码方式 collate 排序规则
```

​	注：可以使用 `SHOW CHARACTER SET;` 查看所有的编码方式

```sql
# 创建名为mydb的数据库，并指定字符编码为utf8
create database mydb character set utf8;

# 创建名为mydb1的数据库，并指定字符编码为gbk, 排序规则为gbk_chinese_ci
create database mydb1 character set gbk collate gbk_chinese_ci;

# 查看所有的字符编码
show character set;
```

字符集和校对规则：符集就是一组字符和编号、校对规则是指字符集内字符的排序规则。

常见的字符集：utf8、gbk、utf8mb4、latin1（不支持中文）

与之对应的校对规则：utf8_bin（区分大小写）、utf8_general_ci（不区分大小写的）



<br/>



**查看、切换数据库**

```sql
SHOW VARIABLES LIKE 'character%';  # 查看数据库字符集相关设置信息

show databases;                    # 查看当前数据库服务器中的所有数据库

show create database mydb1;        # 查看mydb1数据库的定义信息(字符集)

select database();                 # 查看当前使用的数据库 
       
use mydb;                          # 切换数据库到mydb数据库
```

<br/>

**修改数据库（字符集）**

```sql
# 将mydb1的字符集修改为utf8mb4，排序规则改为utf8mb4_bin
alter database mydb1 character set utf8mb4 collate utf8mb4_bin;
```

<br/>

**删除数据库** 

```sql
drop database mydb1;
```

<br/>

小结：

1、修改数据库**只能修改数据库的字符编码**

2、在MySQL中**utf字符编码之间没有横杆**： utf8

<br/>



### 2) 表的操作

**新建、删除数据表** 

```sql
create table [if not exists] `表名`(
    `字段名` 数据类型 [null|not null] [default] [auto_increment] [primary key] [comment],
    `字段名` 数据类型 …
)[engine=存储引擎] [charset=字符编码]


drop table [if exists] 表1，表2,… 
```

<br/>

```sql
# 1. 新建、删除数据表
create table if not exists stu1(
    id int auto_increment primary key comment '主键',
    name varchar(20) not null comment '姓名',
    `add` varchar(50) not null default '地址不详' comment '地址',
    score int comment '成绩'
)engine=innodb charset=utf8mb4;


drop table if exists stu1;

```



<br/>

**查看表信息** 

```sql
# 2. 查看表信息
# 2.1 显示所有表
show tables;

# 2.2 查看表结构
describe stu1;
desc stu1;

# 2.3 查看表的创建信息
show create table stu1;

```

<br/>

**修改表信息** 

```sql
# 3.1 增加列： alter table 表名 add 新列名 新的数据类型
alter table stu1 add `age` int;


# 3.2 修改列  modify 只能修改列的类型、 change 可以修改列的类型和名字
alter table stu1 modify name varchar(30); -- 仅能修改类型
alter table stu1 change `add` address varchar(100);


# 3.3 删除列
alter table stu1 drop `age`;
-- 同时删除多列、或同时添加及删除
alter table `user` drop salary, drop resume;
alter table `uset` add english int ,drop job;


# 3.4 修改表名和字符集
alter table stu1 rename stu2;
alter table stu2 character set utf8mb4;

```

<br/>



## 3. DML-增删改

DML（Data Manipulation Language）, 数据操作语言，用来定义数据库记录（数据）**增删改** 

**新增记录（数据）**： 

```sql
insert into 表名 (字段名, 字段名,…) values (值1, 值1,…), (值1, 值1,…)  

# 如：
insert into stu values (6,'李白','男','四川'),(7,'杜甫','男','湖北');

```

- 插入字段名的顺序和数据表中字段名的顺序可以不一致， 但插入值的个数、顺序必须和插入字段名的个数、顺序一致

- 如果插入的值的顺序和个数与表字段的顺序个数一致，插入字段可以省略

- default关键字用来插入默认值，null用来插入空值.

  <br/>

**删除数据**：

```sql
delete from 表名 [where 条件]

# 例：
delete from stu where id=1;

```

<br/>

 **更新数据**：

```sql
update 表名 set 字段 = 值 [where 条件]      

# 如：
update stu set sex='女' where stuname='berry';

```

<br/>





## 4. DQL单表查询

DQL（Data Query Language）,   数据查询语言，用来 **查询记录（数据）** 

```sql
select [选项] 列名 [from 表名] [where 条件]  [group by 分组] [order by 排序][having 条件] [limit 限制];

```



**简单查询**: 

```SQL
# 查询所有列
SELECT * FROM stu;

# 查询指定列
SELECT sid, sname, age FROM stu;

```

<br/>



**条件查询**: （查询时给出WHERE子句，在WHERE子句中可以使用运算符）

```sql
# 查询性别为女，并且年龄50以内的记录  (and)
SELECT * FROM stu WHERE gender='female' AND age<50;

# 查询学号为S_1001，或者姓名为liSi的记录 (or)
SELECT * FROM stu WHERE sid ='S_1001' OR sname='liSi';

# 查询学号为S_1001，S_1002，S_1003的记录 (in)
SELECT * FROM stu WHERE sid IN ('S_1001','S_1002','S_1003');

# 查询学号不是S_1001，S_1002，S_1003的记录 (not in)
SELECT * FROM tab_student WHERE sid NOT IN('S1001','S1002','S_1003');

# 查询年龄为null的记录 (is null)
SELECT * FROM stu WHERE age IS NULL;

# 查询年龄在20到40之间的学生记录 （and）
SELECT * FROM stu WHERE age>=20 AND age<=40;

# 查询性别非男的学生记录 （ <> 或 != 或 not）
SELECT * FROM stu WHERE gender!='male';
SELECT * FROM stu WHERE gender<>'male';
SELECT * FROM stu WHERE NOT gender='male';

#  查询姓名不为null的学生记录 （is null、is not null ）
SELECT * FROM stu WHERE NOT sname IS NULL;
SELECT * FROM stu WHERE sname IS NOT NULL;

```

<br/>



**模糊查询**: 

通配符： _(下划线):  任意一个字符   &nbsp;     %：任意0~n个字符

```SQL
# 查询姓名由3个字构成的学生记录
SELECT * FROM stu WHERE sname LIKE '___';

# 查询姓名由5个字母构成，并且第5个字母为“i”的学生记录
SELECT * FROM stu WHERE sname LIKE '____i';

# 查询姓名中包含“a”字母的学生记录
SELECT * FROM stu WHERE sname LIKE '%a%';

```

<br/>



**去重和起别名**: 

```sql
# distinct 去除重复记录 （查询结果包含多列时，只有所有列的值都相同才算重复）
SELECT DISTINCT sal FROM emp;


# as 给列名添加别名(给列起别名时，可以省略AS关键字)
SELECT *, sal+IFNULL(comm,0) AS total FROM emp;

```

<br/>



**排序** :（ asc 升序  desc 降序 默认是升序）

```SQL
# 年龄升序排序 （可以省略 asc ）
SELECT * FROM stu ORDER BY age ASC;
SELECT * FROM stu ORDER BY age;

# 多列排序：按月薪降序排序，如果月薪相同时，按编号升序排序
SELECT * FROM emp ORDER BY sal DESC, empno ASC;

```



<br/>



### 1) 聚合函数

- COUNT(列名)：统计指定列不为NULL的记录行数； 
- MAX(列名)：计算指定列的最大值，如果指定列是字符串类型，那么使用字符串排序运算； 
- MIN(列名)：计算指定列的最小值，如果指定列是字符串类型，那么使用字符串排序运算； 
- SUM(列名)：计算指定列的数值和，如果指定列类型不是数值类型，那么计算结果为0； 
- AVG(列名)：计算指定列的平均值，如果指定列类型不是数值类型，那么计算结果为0；

```SQL
# 查询emp表中记录数：（count）
SELECT COUNT(*) AS cnt FROM emp;
# 查询emp表中有佣金的人数：（么只统计comm列非NULL的行数），cnt为别名
SELECT COUNT(comm) cnt FROM emp;

# 统计月薪与佣金之和大于2500元的人数：
SELECT COUNT(*) AS cnt FROM emp WHERE sal+IFNULL(comm,0) > 2500;

# 查询有佣金的人数，以及有领导的人数：
SELECT COUNT(comm), COUNT(mgr)FROM emp;
```

```SQL
# 查询所有雇员月薪和：（SUM）
SELECT SUM(sal) FROM emp;
# 查询所有雇员月薪+佣金和：
SELECT SUM(sal+IFNULL(comm,0))FROM emp;

# 统计所有员工平均工资：（AVG）
SELECT AVG(sal) FROM emp;

# 查询最高工资和最低工资： （MAX和MIN）
SELECT MAX(sal), MIN(sal) FROM emp;

```

聚合函数通常来说是配合分组一起来使用



<br/>



### 2) 分组分页

分组查询时需要使用GROUP BY子句，**如果查询语句中有分组操作，则select后面能添加的只能是聚合函数和被分组的列名**

```sql
# 查询每个部门的部门编号和每个部门的工资和：
SELECT deptno, SUM(salary) FROM emp GROUP BY deptno;

# 查询每个部门的部门编号 以及每个部门的人数：
SELECT deptno,COUNT(*) FROM emp GROUP BY deptno;

# 查询每个部门的部门编号 以及每个部门工资大于1500的人数：
SELECT deptno,COUNT(*) FROM emp WHERE sal>1500 GROUP BY deptno;

```

<br/>

分组配合 `group_concat` 函数一起使用示例：

```sql
-- 按照班级进行分组
select clazz,group_concat(id) as id,group_concat(name) as name from stu group by clazz;

```

<br/>



**HAVING** 子句（having与where的区别）: 

- <span style="font:normal bold 25px;">having是在分组后对数据进行过滤, where是在分组前对数据进行过滤  </span>

  WHERE是对分组前记录的条件，如果某行记录没有满足WHERE子句的条件，那么这行记录不会参加分组；

  而HAVING是对分组后数据的约束

- having后面可以使用分组函数(统计函数)  where后面不可以使用分组函数

```SQL
# 查询工资总和大于9000的部门编号以及工资和：
SELECT deptno, SUM(sal) FROM emp
GROUP BY deptno
HAVING SUM(sal) > 9000;

# 统计出stu表中每个班级的男女生各多少人
select gradename,gender,count(*) from stu group by gradename,gender
```

<br/>



**分页：LIMIT** 用来限定查询结果的起始行，以及总行数

```SQL
# 查询5行记录，起始行从0开始 （从0开始时，0可以省略）
SELECT * FROM emp LIMIT 0, 5;
SELECT * FROM emp LIMIT 5;

# 查询10行记录，起始行从5开始
SELECT* FROM emp LIMIT 5, 10;

# 分页查询通用写法：（pageIndex表示页数 pageSize表示每页显示条数）
limit (pageindex-1)*pagesize, pagesize;

```

<br/>

总结：

查询语句书写顺序：`select – from- where- group by- having- order by-limit `

查询语句执行顺序：`from - where -group by -having - select - order by-limit` 



<br/>



## 5. DQL多表查询

### 1) 联合查询

合并结果集 的两种方式：`UNION（去重） 、 UNION ALL（不去重）` 

合并结果集就是把两个select语句的查询结果（行）合并到一起，

```SQL
SELECT * FROM t1 UNION SELECT * FROM t2；
```

-- 联合查询要求上下的两个SQL语句的结果的结构是一样的。
-- 联合查询通常情况下可以使用in查询来替代，但是也有自己独特的场景。（当in查询效率很慢的时候，我们可以考虑使用联合查询）。

<br/>



### 2) 连接查询

0.  叉联结（cross join）

>  *笛卡尔积* ：假设集合A={a,b}，集合B={0,1,2}，则两个集合的笛卡尔积为
>
> {
>
> ​	(a,0), (a,1), (a,2),
>
> ​	(b,0), (b,1), (b,2)
>
> }

> 返回笛卡儿积的联结，也称 叉联结（cross join）交叉连接没有实际的意义。

```sql
-- 交叉连接
select * from province cross join city;

select * from privince,city;               # ANSI SQL 89语法  , 两者等效
```



<br/>

1. **内连接** `[INNER] JOIN ON` 

   内连接查询的结果是在交叉连接的基础之上，通过连接的条件进行筛选出来的结果

   ```SQL
   # 显式内连接
   select 列名
   from 表1
   inner join 表2
   on 表1.列名=表2.列名  //外键列的关系
   where.....
   
   # 等价于：(隐式内连接: 和显式内连接的结果是完全一致的。只有写法上有区别)
   select 列名
   from 表1,表2
   where 表1.列名=表2.列名 and ...(其他条件)
   ```

   <br/>

   

2. **外连接** `OUTER JOIN ON` 

   外连接的结果是在内连接结果集之上去和左边（或者右边）的表做 **并集**。

   主表数据全部显示，次表数据匹配显示，能匹配到的显示数据，匹配不成功的显示null，如：

   - **左外连接** `LEFT [OUTER] JOIN`  

     ```SQL
     select 列名 from 主表 left join 次表 on 主表.列名=次表.列名
     ```

   - **右外连接** `RIGHT [OUTER] JOIN`  

     ```SQL
     select 列名 from 次表 right join 主表 on 主表.列名=次表.列名
     ```

   - 全外连接 `FULL JOIN`（MySQL不支持） 

   <br/>

   

3. 自然连接 `NATURAL JOIN`  ：一种特殊的等值连接

   将两个表中具有相同名称的列进行匹配

   要求两个关系表中进行连接的必须是相同的属性列（名字相同），无须添加连接条件，并且在结果中消除重复的属性列
   



<br/>



### 3) 子查询

子查询就是嵌套查询, 一个select语句中包含另一个完整的select语句

```sql
select * from employee where dep_id= (select id from department d where d.name='研发部');
```







<br/>



## 6 SQL执行顺序

单表查询时的执行顺序：

```sql
(5) SELECT column_name, ... 
(1) FROM table_name, ...
(2) [WHERE ...] 
(3) [GROUP BY ...] 
(4) [HAVING ...] 
(6) [ORDER BY ...]; 
(7) LIMIT 
```

从上面可以得知，我们的SQL语句的书写顺序是按照上述顺序来写各个关键字，如果顺序不对，那么会存在语法错误。

执行的顺序大致是按照上述的编号（1）、（2）…来执行的，

只有（5）这个顺序有和MySQL内部的优化器相关，优化器会影响MySQL执行SQL的性能。

```sql
select class, count(*) as c from t_students group by class having c>1 ;
```



<br/>



## 7. SQL运算符

**算术运算符**：MySQL 支持的算术运算符包括:

|    运算符    | 作用                          |
| :----------: | :---------------------------- |
|      +       | 加法                          |
|      -       | 减法                          |
|      *       | 乘法                          |
| /   或   DIV | 除法（如果除数为0，返回NULL） |
| %   或   MOD | 取余                          |

<br/>

**比较运算符**：通过比较运算符，可以判断表中的哪些记录是符合条件的

|   比较运算符    | 描述                             |
| :-------------: | :------------------------------- |
|        =        | 等于                             |
|     <>,  !=     | 不等于                           |
|        >        | 大于                             |
|        <        | 小于                             |
|       <=        | 小于等于                         |
|       >=        | 大于等于                         |
|     BETWEEN     | 在两值之间（小于等于且大于等于） |
|   NOT BETWEEN   | 不在两值之间                     |
|       IN        | 在集合中                         |
|     NOT IN      | 不在集合中                       |
|       <=>       | 严格比较两个NULL值是否相等       |
|      LIKE       | 模糊匹配                         |
| REGEXP 或 RLIKE | 正则式匹配                       |
|     IS NULL     | 为空                             |
|   IS NOT NULL   | 不为空                           |

<br/>



**逻辑运算符**：用来判断表达式的真假，真返回 1，假返回 0

| 运算符号  | 作用     |
| :-------- | :------- |
| NOT 或  ! | 逻辑非   |
| AND       | 逻辑与   |
| OR        | 逻辑或   |
| XOR       | 逻辑异或 |

<br/>