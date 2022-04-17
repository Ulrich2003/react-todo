import React, { Component } from 'react'
// 引入类型限制
import PropTypes from 'prop-types';
import './Header.css'
import {nanoid} from 'nanoid'

export default class Header extends Component {
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp = (event)=>{
    const {target,keyCode} = event;
    if(keyCode !== 13)return
    if(target.value.trim()===''){
      alert("输入不能为空")
      return
    }
    const todoObj = {id:nanoid(),name:target.value.trim(),done:false}
    this.props.addTodo(todoObj );
    // 清空输入 
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
      <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
