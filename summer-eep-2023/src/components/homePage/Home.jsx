import React from 'react';
import './navBar.css';
import { BiSearch, BiCamera, BiHomeAlt2, BiMessageDetail, BiGlobe, BiPencil, BiClipboard } from "react-icons/bi";

export const Home = (props) => {
    return (
        <div className="home">
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
                    <img src="/src/constantData/people/2.jpg" alt="none" className="icons" />
                    <BiHomeAlt2 className="homeIcon"/>
                    <BiMessageDetail className="messageIcon"/>
                </div>
            </div>
            <div className="homeFeed">
                <div className="homeLeft">
                    <h1 className="listTitle">Useful Links</h1>
                    <ul>
                        <li className="usefulLinks">
                            <BiGlobe className="linkIcon" />
                            <a 
                            href="https://images.google.com/" 
                            target="_blank">Google Images
                            </a>
                        </li>
                        <li className="usefulLinks">
                            <BiPencil className="linkIcon" />
                            <a 
                            href="https://www.adobe.com/products/photoshop/landpa.html?gclid=CjwKCAjwv8qkBhAnEiwAkY-ahuzpUfd9f28KuoUeXs7gWn_ZwFg7-Z-rENDeIm_YyeOx4ixE2p1f9RoCPEgQAvD_BwE&sdid=KKQIN&mv=search&kw=photoshop&ef_id=CjwKCAjwv8qkBhAnEiwAkY-ahuzpUfd9f28KuoUeXs7gWn_ZwFg7-Z-rENDeIm_YyeOx4ixE2p1f9RoCPEgQAvD_BwE:G:s&s_kwcid=AL!3085!3!522507805137!e!!g!!adobe%20photoshop!1712238394!67643541820&mv=search" 
                            target="_blank">Adobe Photoshop
                            </a>
                        </li>
                        <li className="usefulLinks">
                            <BiClipboard className="linkIcon"/>
                            <a
                            href="https://www.pinterest.com/"
                            target="_blank">Pinterest
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="homeCenter">
                    <h1>center</h1>
                </div>
                <div className="homeRight">
                    <h1>right</h1>
                </div>
            </div>
        </div>
    )
}
