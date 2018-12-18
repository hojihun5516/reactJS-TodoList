import React, { Component } from 'react';
import './App.css';
import CreateTodo from './CreateTodo'
import TodoItemList from './TodoItemList'
import TodoItemStore from './TodoItemStore'
import { observer ,Provider} from 'mobx-react'
import TodoFunction from './TodoFunction'


const todoItemStore = new TodoItemStore()

@observer
class App extends Component {
  id=0
  state = {
    information: []
  }
  updateInfo=(id,title,content)=>{
    const { information } = this.state;
    console.log('update'+title+content)
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              title,
              content
            };
          }
          return info;
        }
      )
    });
  }

  addInfo=(title,content)=>{
    this.id++
    this.setState({
      information: this.state.information.concat({id: this.id, title:title, content: content})
    })
  }
  deleteInfo=(id)=>{
    this.setState({information: this.state.information.filter(info => info.id !== id)})
  }
  selectInfo=(id,title,content)=>{
    todoItemStore.setItem(id,title,content)
  }
  render() {
    
    return (
      <div className="App">
        {/* {todoItemStore.getItem().itemId} */}
        <Provider
        todoItemStore={todoItemStore}
      >
        <TodoFunction deleteInfo={this.deleteInfo} updateInfo={this.updateInfo}/>
        </Provider>
        <CreateTodo addInfo={this.addInfo}></CreateTodo>   
        <TodoItemList
          selectInfo={this.selectInfo}
          data={this.state.information}
        />
      </div>
    );
  }
}

export default App;
