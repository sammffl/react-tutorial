# 开发中遇到的一些坑和想法

1. 不要在render方法里面去改变state或者调用action
2. setState 是异步执行的， 所以不要在componentWillMount 使用setState
3. 做为2的延伸 使用定时器内部的setState会变成同步执行
4. 如果回调太多试着去重新封装组件
5. 划分组件最小颗粒