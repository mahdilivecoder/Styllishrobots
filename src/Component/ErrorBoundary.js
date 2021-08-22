import React,{Component} from 'react';


class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            message:''
        }
    }
    componentDidCatch(err,info){
        this.setState({hasError:true},{message:info})
      }
      render(){
          if(this.state.hasError==true){
          return <h1>We have an error+{this.state.message.toString()}!</h1>
        }
      
          return this.props.children;
          
        }
} 
export default ErrorBoundary; 