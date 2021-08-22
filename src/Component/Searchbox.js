import React from 'react';

const Searchbox=({searchfield,searching})=>{
    return(
    <section className="searchbox-space"> 
    <h1>Welcome To Robo App!</h1>
        <input className="searchBox" type="search" placeholde="Something to search?..." value={searchfield} onChange={searching}/>
    </section>
    )
}
export default Searchbox;