import React, { Component } from 'react';
import './App.css';
import CreateTodo from './CreateTodo'
import TodoItemList from './TodoItemList'
class App extends Component {
  id=0
  state = {
    information: []
  }
  addInfo=(content)=>{
    this.id++
    this.setState({
      information: this.state.information.concat({id: this.id, content: content})
    })
  }
  deleteInfo=(id)=>{
    this.setState({information: this.state.information.filter(info => info.id !== id)})
  }
  render() {
    
    return (
      <div className="App">
        <CreateTodo addInfo={this.addInfo}></CreateTodo>   
        <TodoItemList
          data={this.state.information}
          deleteInfo={this.deleteInfo}
        />
      </div>
    );
  }
}

export default App;
