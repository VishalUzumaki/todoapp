import React,{Component} from 'react';
import shortid from 'shortid';

class TodoComponentClass extends Component{

    constructor(){
        super();
        this.state={
            message:''
        }
        this.keyPress=this.keyPress.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    keyPress=(event)=>{
        this.setState({message:event.target.value})
    }


    handleSubmit=(event)=>{
    event.preventDefault();

    this.props.onSubmit({
        id:shortid.generate(),
        activity: this.state.message,
        complete:false
    });

    }

    render(){
        return(
                <div>

                        Enter Name<input type={'text'} onChange={this.keyPress}/>
                        <button onClick={this.handleSubmit}>Add Todo</button>

                </div>
        );
    }
}

export default TodoComponentClass;