---

order: 30
title:  Spring中的设计模式

---

## 动态代理

### 1. JDK动态代理

```java

public static <T> T getProxyObject(Object target){
    T proxy = (T) Proxy.newProxyInstance(target.getClass().getClassLoader(), 
                                         target.getClass().getInterfaces(), new InvocationHandler() {
        
        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            // before invoke

            Object invoke = method.invoke(target, args);

            // after invoke

            return invoke;
        }
    });
    return proxy;
}

```



<br>

### 2. CGLIB动态代理

```xml

<dependency>
    <groupId>cglib</groupId>
    <artifactId>cglib</artifactId>
    <version>3.2.12</version>
</dependency>

```

<br>

使用InvocationHandler：

```java

public static <T> T getProxyObject(Class<T> clazz){
    T proxy = (T) Enhancer.create(clazz, new InvocationHandler() {
        @Override
        public Object invoke(Object o, Method method, Object[] objects) throws Throwable {
            //获得该类的实例
            T t = clazz.newInstance();

            // ... before invoke

            Object invoke = method.invoke(t, objects);

            // ... after invoke

            return invoke;
        }
    });
    return proxy;
}

```

使用MethodInterceptor：

```java

 public static <T> T getProxyObject(Class<T> clazz){
     T proxy = (T) Enhancer.create(clazz, new MethodInterceptor() {
         @Override
         public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy)
             throws Throwable {
             T t = clazz.newInstance();

             // before invoke

             Object invoke = method.invoke(t, objects);

             // after invoke

             return invoke;
         }
     });
     return proxy;
 }

```



<br>



## 工厂设计模式

### 4. 工厂实例化



#### 静态工厂和实例工厂

```java

// 实例工厂
public class InstanceFactory {
    public Car getInstance() {
        Car car = new Car();
        car.setType("instance");
        return car;
    }
}

// 静态工厂
public class StaticFactory {

    public static Car getInstance() {
        Car car = new Car();
        car.setType("static");
        return car;
    }
}

```

<br>

```xml

<!--静态工厂-->
<!--factory-method属性：生产方法-->
<!--如果包含了factory-method属性：组件类型并不是class属性对应的类型，而是factory-method属性对应的方法的返回值类型-->
<bean id="carFromStaticFactory" class="com.xxx.factory.StaticFactory" factory-method="getInstance"/>

<!--实例工厂-->
<bean id="instanceFactory" class="com.xxx.factory.InstanceFactory"/>
<bean id="carFromInstanceFactory" factory-bean="instanceFactory" factory-method="getInstance"/>

```



```java

@Test
public void test() {
    //静态工厂直接使用生产方法 → 类、方法
    Car car1 = StaticFactory.getInstance();

    //实例工厂需要先获得工厂的实例 
    InstanceFactory instanceFactory = new InstanceFactory();
    Car car2 = instanceFactory.getInstance();
}

```

<br>

#### FactoryBean接口

```xml

<!--  Spring内置了对FactoryBean支持 → Spring会检查类是否有实现FactoryBean接口 -->
<!-- 取出组件时取出的是FactoryBean的getObject方法的返回值 -->

<bean id="userServiceProxy" class="com.xxx.proxy.ServiceProxyFactoryBean">
    <property name="clazz" value="com.xxx.service.UserServiceImpl"/>
</bean>

```

<br>

```java

// 该类能够提供一个service的代理组件，并且从单元测试类中取出该组件能够实现事务
public class ServiceProxyFactoryBean implements FactoryBean<Object> {
    String clazz;

    @Override
    public boolean isSingleton() {
        return true;
    }

    @Override
    public Object getObject() throws Exception {
        Class<?> cls = Class.forName(clazz);
        Object obj = cls.newInstance();
        return Enhancer.create(cls, new MethodInterceptor() {
            @Override
            public Object intercept(Object o, Method method, Object[] objects, 
                                    MethodProxy methodProxy) throws Throwable {
                SqlSession sqlSession = MyBatisUtil.getSqlSession();
                Field[] declaredFields = cls.getDeclaredFields();
                for (Field field : declaredFields) {
                    if (field.getName().contains("Mapper")) {
                        field.setAccessible(true);
                        Class<?> type = field.getType();
                        Object mapper = sqlSession.getMapper(type);
                        field.set(obj, mapper);
                    }
                }
                Object invoke = method.invoke(obj, objects);
                sqlSession.commit();
                sqlSession.close();
                return invoke;
            }
        });
    }

    @Override
    public Class<?> getObjectType() {
        return UserServiceImpl.class;
    }

    public void setClazz(String clazz) {
        this.clazz = clazz;
    }
}

```

<br>

```java

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:application.xml")
public class MyTest {

    // 取出的是ServiceProxyFactoryBean提供的组件
    @Qualifier("userServiceProxy")
    @Autowired
    UserService userService;

    @Test
    public void testSelect(){
        String name = userService.queryNameById(1);
        System.out.println(name);
    }

    @Test
    public void testInsert() {
        User user = new User();
        user.setUsername("fahai");
        user.setPassword("nohair");
        user.setAge(33);
        int insert = userService.insertUser(user);
        System.out.println("insert = " + insert);
    }

}

```