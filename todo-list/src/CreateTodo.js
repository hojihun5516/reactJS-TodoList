import React, { Component } from 'react';
import './App.css';

class CreateTodo extends Component {
  state={
    content:'',
    title:''
  }
  
  addContent=()=>{
    this.props.addInfo(this.state.title,this.state.content)
    this.setState({
      title:'',
      content:''
    })
  }
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.addContent()
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <input name ="title" type="text" value={this.state.title} onChange={this.handleChange} />
      <input name ="content" type="textarea" value={this.state.content}  onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
        <input type="submit" onClick={this.addContent} />
      </div>
    );
  }
}

export default CreateTodo;
