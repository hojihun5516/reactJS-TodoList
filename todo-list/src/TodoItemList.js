import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'
class TodoItemList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data , selectInfo } = this.props
    const item = data.map((info)=>(
      <TodoItem selectInfo={selectInfo} info={info} ></TodoItem>
    ))
    return (
      <div className="App">
        {item}  
      </div>
    );
  }
}

export default TodoItemList;
