#redux是什么？

是一种解决方案
主要解决javascript中各组件传递数据日趋复杂的问题


######应用场景

适用于Vue React 原生js，是一种解决问题的思想逻辑

例子：在React中数据的流动是单向的，数据从上自下父组件流向子组件，由于这个特征，两个非父子关系的组件之间的通信就比较麻烦

![20200212142726](http://f.shudong.wang/starkwang/20200212142726.png)



######设计思想

只有一个状态树，整个应用的状态都存到一个地方 称为store

组件必须通过派发dispatch行为action去改变store里的状态

其他组件需要通过订阅store的方式来获知状态的改变


######Redux哲学

只有一颗state tree，且只存在于唯一一个store中

state是只读的，唯一改变state的方法就是触发action，action是一个用于编写逻辑的纯对象，使用纯函数来执行修改，为了描述action如何改变state tree 需要编写reducers

单一数据源的设计让React的组件通信更加方便，便于状态的统一管理

![20200212181405](http://f.shudong.wang/starkwang/20200212181405.png)



###一个redux的原生例子

第一步

![20200213111756](http://f.shudong.wang/starkwang/20200213111756.png)


新建一个状态纯对象 appState，appState就是我们要维护的状态树

然后通过状态去页面上渲染两个元素


第二步

![20200213112915](http://f.shudong.wang/starkwang/20200213112915.png)

引入dispatch（管理员）的概念，要求我们如果要修改appState中的状态时必须通过dispatch进行修改，dispatch 只认几个固定的动作，如果不符合要求，dispatch不会执行


第三步

![20200213142803](http://f.shudong.wang/starkwang/20200213142803.png)

从上一步我们可以看到，我们的初始状态树放在全局作用域里依然是很不安全的，所以我们要放到新建的createStore函数作用域里，然后把dispath也放进来，再新增一个getState函数，这样我们的初始state就变成了闭包变量


第四步

![20200213145734](http://f.shudong.wang/starkwang/20200213145734.png)

什么是reducer？

我们可以思考一下，我们使用redux的时候，是不是希望自己去编写业务逻辑，也就是自己去写管理员函数，那些操作可以执行那些不可以我们需要自己控制。

reducer就接过了管理员的角色，在reducer里我们可以获取到两个参数，一个是初始的state，一个是我们通过dispatch传入的action。通过reducer的逻辑最后更新我们的state


第五步

![20200213152729](http://f.shudong.wang/starkwang/20200213152729.png)


我们需要设置一个初始状态方便reducer调用，正常情况我们应该把规则常量与初始状态值分文件存放，demo里方便演示所以放到了一个文件中。

![20200213162958](http://f.shudong.wang/starkwang/20200213162958.png)
初始化时我们需要默认调用一次dispatch函数，用于保证我们的初始state是有值的

第六步

![20200213163122](http://f.shudong.wang/starkwang/20200213163122.png)

我们现在还需要手动去renderApp更新视图，我们需要一个订阅函数，只需要我们调用一次renderApp函数就可以更新视图

同时我们还要返回一个终止自动更新的函数以便与随时停止更新
