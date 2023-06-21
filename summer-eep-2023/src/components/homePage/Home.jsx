import React from 'react';
import './navBar.css';
import { BiSearch, BiCamera } from "react-icons/bi";

export const Home = (props) => {
    return (
        <div>
            <div className="navbar">
                <div className="navbarLeft">
                    <BiCamera className="logoIcon"/>
                    <span>Image Social</span>
                </div>
                <div className="navbarCenter">
                    <BiSearch className="searchIcon"/>
                    <input className="searchBar" placeholder="Search for users"></input>
                </div>
                <div className="navbarRight">
                    <img className="profilePic" src=""/>
                </div>
            </div>
        </div>
    )
}