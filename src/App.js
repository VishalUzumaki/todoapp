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
  }

  handleClick=(todo)=>{
      const newtodos=[todo, ...this.state.todos]
      this.setState({todos:newtodos})
  }

  render() {
        return (
            <div className="App">

                <TodocomponentClass onSubmit={this.handleClick}/>
                {this.state.todos.map(todo=> (
                    <div key={todo.id}>
                    <Todotemplate  text={todo.activity}/>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default App;
