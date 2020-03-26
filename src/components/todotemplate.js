import React,{Component} from 'react';
import '../App.css';

class Todotemplate extends Component{
    render(){
        return(
            <div className={'todotemplate'}>
                {this.props.text}
            </div>
        );
    }
}

export default Todotemplate;