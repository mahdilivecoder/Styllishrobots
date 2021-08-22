import React,{Component} from 'react';

const card=(props)=>{
    const {name,email,id,username}=props; 
return(
    
<div>
    <img src={`https://robohash.org/${id}?200x200`}/>
    <h1 className="robo-name">{name}</h1>
    <h2 className="robo-username">{username}</h2>
    <h3 className="robo-email">{email}</h3>
</div>

)
}
export default card;