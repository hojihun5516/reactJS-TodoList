import React, { Component } from 'react';
import './App.css';
class TodoItem extends Component {
  deleteInfo=()=>{
    this.props.deleteInfo(this.props.info.id)
  }
  render() {    
    console.log(this.props.info)
    return (
      <div className="App">
          {this.props.info.id}
          {this.props.info.content}
          <input type='button' value='삭제' onClick={this.deleteInfo}></input>
      </div>
    );
  }
}

export default TodoItem;
