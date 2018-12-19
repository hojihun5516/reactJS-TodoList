import { action, observable } from "mobx"

class TodoItemStore {
  @observable
  item = { itemId: "0",  itemTitle:"" ,itemContent: ""}

  @action
  setItem = (itemId, itemTitle,itemContent) => {
    this.item.itemId = itemId
    this.item.itemTitle = itemTitle
    this.item.itemContent = itemContent 
    console.log(itemId,itemTitle,itemContent)
  }
  @action
  invalidateItem=()=>{
    this.item.itemId = ''
    this.item.itemTitle = ''
    this.item.itemContent = '' 
  }
  @action
  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  @action
  getItem = () => {
    return this.item
  }
}
export default TodoItemStore
