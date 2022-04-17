import React, { Component } from "react";
import './Item.css'

export default class Item extends Component {

  state={mouse:false}

  handleMouse = (flag) => {
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾选，取消勾选的回调
  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked);
    }
  }

  handleDelete = (id) => {
    if(window.confirm('确定删除该计划吗？')){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor:mouse?'#ddd':''}}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display:mouse?'block':"none" }} onClick={()=>{this.handleDelete(id)}}>
          删除
        </button>
      </li>
    );
  }
}
