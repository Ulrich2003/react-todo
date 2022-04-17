// 引入react核心库
import React from 'react';
// 引入reactDOM
import ReactDOM from 'react-dom'; 
// 引入App组件
import App from './App'

// 渲染App到页面

ReactDOM.render(<App/>,document.getElementById('root'))

/*
    1. 拆分组件，实现静态组件，注意className，style的写法
    2. 动态初始化列表：如何确定将数据放在哪个组件的state中
            - 某个组件使用：放在自身的state中
            - 某些组件使用：放在他们共同的父组件的state中（状态提升）
    3. 关于父子之间的通讯
        1. 「父组件」给「子组件」传递数据：通过props
        2. 「子组件」给「父组件」传递数据：通过props传递，要求父提前给子传递一个函数
    4. 状态在哪里，操作状态的方法就在哪里
*/
