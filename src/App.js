import React,{Component} from 'react';
import TodocomponentClass from './components/todoClasscomponent';
import Todotemplate from './components/todotemplate';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
                    todos:[]
                }
                this.handleClick=this.handleClick.bind(this);
                this.deleteItem = this.deleteItem.bind(this);
  }

  handleClick=(todo)=>{
      if(todo.activity!=="") {
          const newtodos = [todo, ...this.state.todos]
          this.setState({todos: newtodos})
      }
      }


  deleteItem=(key)=>{

      console.log(key);
      const filteredItems= this.state.todos.filter(item =>
            item.id!==key);
        this.setState({
            todos: filteredItems
        })
  console.log(this.state.todos);
  }

  render() {
      let heading=''
      if (this.state.todos.length===0)
      {
          heading=<div>No Activity</div>
      }else {
          heading=<div>Number of Todo {this.state.todos.length}</div>
      }
        return (
            <div className="App">
                <div className={'counter'}>
                    {heading}
                </div>
                <TodocomponentClass onSubmit={this.handleClick}/>
                {this.state.todos.map(todo=> (
                    <Todotemplate key={todo.id} text={todo.activity} deletetodo={()=>this.deleteItem(todo.id)}/>
                ))
                }
            </div>
        )
    }
}

export default App;
