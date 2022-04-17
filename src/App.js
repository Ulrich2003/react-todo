import React from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import "./App.css";

// 创建App组件
class App extends React.Component {
  state = {
    todos:[
      // {id:'001',name:'吃饭',done:true},
      // {id:'002',name:'睡觉',done:false},
      // {id:'003',name:'打代码',done:true},
    ]
  }

  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodo = [todoObj,...todos]
    this.setState({todos:newTodo})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  updateTodo = (id,done)=>{
    const {todos} = this.state
    const newTodo = todos.map((todoObj)=>{
      if(todoObj.id === id)return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodo})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
}
export default App;
