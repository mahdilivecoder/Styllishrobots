import { render } from '@testing-library/react';
import React,{Component} from 'react';


class Hello extends Component{
        constructor(props){
            super(props);
            
        }
    render(){
        return(
<h1 className="hC">
{this.props.greeting}

</h1>

    )
    }
}

export default Hello; 