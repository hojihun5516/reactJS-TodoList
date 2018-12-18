import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'
class TodoItemList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data , deleteInfo } = this.props
    const item = data.map((info)=>(
      <TodoItem info={info} deleteInfo={deleteInfo} ></TodoItem>
    ))
    return (
      <div className="App">
        {item}  
      </div>
    );
  }
}

export default TodoItemList;
