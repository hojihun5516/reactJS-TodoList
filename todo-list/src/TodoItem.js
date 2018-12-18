import React, { Component } from 'react';
import './App.css';
class TodoItem extends Component {
  selectInfo=()=>{
    this.props.selectInfo(this.props.info.id,this.props.info.title,this.props.info.content)
  }
  render() {    
    console.log(this.props.info)
    return (
      <div className="App">
          {this.props.info.id}
          {this.props.info.title}
          <input type='button' value='선택' onClick={this.selectInfo}></input>
      </div>
    );
  }
}

export default TodoItem;
