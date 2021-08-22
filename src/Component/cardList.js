import React,{Component} from 'react';
import Card from './card';
//import {robots} from './robots.js';
class cardList extends Component{

    constructor(props){
        super(props);
        
    }
    render(){
        //const {robots}=this.props;
        // if(true)
        // throw new Error("OOOPS!");
//making our robofirends in cardlist 
        const robofriends=this.props.robots.map((user,i)=>{
           
            return( <div className="robo-grid"><Card key={i} id={this.props.robots[i].id} name={this.props.robots[i].name} email={this.props.robots[i].email} username={this.props.robots[i].username}/>
            </div>
                )
        })
            //return final Card
        return(
        <div className="base-robo-grid">
        {robofriends}
   
    </div>
)
   


}

}
export default cardList;