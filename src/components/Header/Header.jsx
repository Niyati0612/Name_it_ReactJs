import React from "react";
import './Header.css';
const Header = ({headerTitle,headerexpanded})=>{
    return (
        <div className="header-container">
            <img src="https://imgs.search.brave.com/w4l7JgbPJk7kx-uMfM6A1aBnf9b8sjZepqDSgqCHeZw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sYW5kc2NhcGUt/cGhvdG8tbGFrZV82/NjUyODAtMjc2MjMu/anBnP3NpemU9NjI2/JmV4dD1qcGc" 
            className={`header-image ${
                 headerexpanded
                 ?'header-image-expanded'
                 :'header-image-contracted'}`
                 }/>
        <h1 className={`header-text ${
                 headerexpanded
                 ?'header-text-expanded'
                 :'header-text-contracted'}`
                 }>{headerTitle}</h1>
        </div>
    );
};
export default Header;