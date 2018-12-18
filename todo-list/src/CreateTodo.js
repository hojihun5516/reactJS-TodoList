import React, { Component } from 'react';
import './App.css';

class CreateTodo extends Component {
  state={
    text:''
  }
  
  addContent=()=>{
    this.props.addInfo(this.state.text)
    this.setState({
      text:''
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
      <input name ="text" type="text" value={this.state.text}  onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
        <input type="submit" onClick={this.addContent} />
      </div>
    );
  }
}

export default CreateTodo;
