import React, { Component } from 'react';
import './App.css';
import { inject,observer} from 'mobx-react'

@inject('todoItemStore')
@observer
class TodoFunction extends Component {
  todoItem=this.props.todoItemStore.getItem()
  state={
    editing: false,
    title: '',
    content:'',
  }
    handleToggleEdit=()=>{
      this.setState({
        editing: !this.state.editing,
        title : this.todoItem.itemTitle,
        content: this.todoItem.itemContent
      })
    }
    updateInfo=()=>{
      this.setState({
        editing: !this.state.editing
      })
        this.props.updateInfo(this.todoItem.itemId,this.state.title,this.state.content)
        
      }
    
    deleteInfo=()=>{
    let id = this.todoItem.itemId
    this.props.deleteInfo(id)
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  render(){
    const {editing} = this.state
    return (
      <div className="App">
      {
        editing ? (
          <div>
          <div>
          제목: <input name="title" value ={this.state.title} onChange={this.handleChange}></input>
          </div>
          <div>
          내용: <input name="content" value = {this.state.content} onChange={this.handleChange}></input>
          </div>
          <div>
          <button onClick={this.updateInfo}> 수정완료 </button>
          </div>
          </div>
        ) :(
          <div>
          <div>
        제목: {this.todoItem.itemTitle}
        </div>
        <div>
        내용: {this.todoItem.itemContent}
        </div>
          <button onClick={this.handleToggleEdit}>수정</button>
        </div>
        )
      }
    
      <input type='button' value='삭제' onClick={this.deleteInfo}></input>
      </div>
    );
      
  }
}

export default TodoFunction;
