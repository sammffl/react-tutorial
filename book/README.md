# react 基础教程

#### 什么是react 
> [React is a JavaScript library for building user interfaces.](https://reactjs.org/)

什么意思呢就是说react相对于 mvc框架`backbone` 和 mvvm框架`AngularJS`来说。它只是一个js库，专注于view层的js库

#### react解决了什么问题
在react之前，你的每次操作DOM都可能造成重绘和重排，当你频繁操作DOM时，你需要考虑页面性能的问题。而react通过给开发人员提供一个`Virtual DOM`操作，避免直接操作DOM元素。把我们从DOM操作的性能问题中解放出来。

另一方面，react的函数式编程让页面对状态被限制在一个特定的区域，只能用function来处理状态对改变。然后这些状态改变对结果会进入react的管道，被一次渲染。这种页面渲染的方式，有效解决了react之前程序中某个对象的异常导致整个页面崩溃对场景。

最后对于复杂场景多状态场景，react使你更方便对管理那些状态

#### 使用一句话总结react
react很优雅，它帮你解决了很多问题，让你可以集中在编写更优雅的代码上。网上都说react学习成本高，其实react不难，难的是react“全家桶”
