import React from "react";
import "./Search.css"
const Search=({ onInputChange })=>{ 
    return (
        <div className="search-container">
            <input 
            // to see what user is typing in console
            // onChange={(event)=>console.log(event.target.value)}
            onChange={(event)=>onInputChange(event.target.value)}

            placeholder="Search" className="search-input"/>
        </div>

    )
}
export default Search;