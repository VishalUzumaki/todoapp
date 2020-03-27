import React,{Component} from 'react';
import '../App.css';
import cancel from '../cross.png';

class Todotemplate extends Component{
    render(){
        return(
                <div   className={'todotemplate'}>

                    {this.props.text}
                    <img onClick={this.props.deletetodo} id={'cancel'} src={cancel} alt={'X'} width={20} height={20}/>

                </div>
        );
    }
}

export default Todotemplate;