import logo from './Container/logo.svg';
import './Container/App.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CardList from './Component/cardList';
import SearchBox from './Component/Searchbox'
import ErrorBoundary from './Component/ErrorBoundary'
class app extends Component{
  constructor(props){
    super(props);
    this.state={
      //state variables can use all around of app with unique name
      robots:[],
      searchfield:""
    }
    this.onSearchChange=this.onSearchChange.bind(this);
  }


  componentDidMount(){
   
      fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
        return response.json();
     }) .then(user=>{
      this.setState({robots:user})
    });
   
  }

  onSearchChange(event){
    this.setState({searchfield:event.target.value})
  }
  

render(){
  
  //it can't be function for some sort of map (like filteredRobots(searchfield,etc) we should just return an array)
  const filteredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    

return(
  <div>
    <ErrorBoundary >
  <SearchBox searching={this.onSearchChange} />
  <CardList robots={filteredRobots}/>
  </ErrorBoundary>
</div>

)}}

export default app;
