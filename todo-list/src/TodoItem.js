import React, { Component } from 'react';
import './App.css';
class TodoItem extends Component {
  selectInfo=()=>{
    this.props.selectInfo(this.props.info.id,this.props.info.title,this.props.info.content)
  }
  upInfo=()=>{
    this.props.upInfo(this.props.info.id)
  }
  downInfo=()=>{
    this.props.downInfo(this.props.info.id)
  }
  render() {    
    console.log(this.props.info)
    return (
      <div className="App">
          {this.props.info.id}
          {this.props.info.title}
          <input type='button' value='올리기' onClick={this.upInfo}></input>
          <input type='button' value='내리기' onClick={this.downInfo}></input>
          <input type='button' value='선택' onClick={this.selectInfo}></input>
      </div>
    );
  }
}

export default TodoItem;
