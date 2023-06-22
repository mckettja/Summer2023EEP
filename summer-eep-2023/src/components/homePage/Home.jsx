import React from 'react';
import './home.css';

import profilePic from './constantData/people/1.jpg';
import feedProfile1 from './constantData/people/2.jpg';
import feedProfile2 from './constantData/people/3.jpg';
import feedProfile3 from './constantData/people/4.jpg';
import feedProfile4 from './constantData/people/5.jpg';
import feedProfile5 from './constantData/people/6.jpg';
import feedProfile6 from './constantData/people/7.jpg';

import feedPost1 from './constantData/posts/1.jpg';
import feedPost2 from './constantData/posts/2.jpg';

import { BiSearch, BiCamera, BiHomeAlt2, BiMessageDetail, BiGlobe, BiPencil, BiClipboard, BiPin, BiCollection, BiTime, BiLike, BiDislike } from "react-icons/bi";

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
                    <input className="searchBar" placeholder="Search for users, hashtags, or images..."></input>
                </div>
                <div className="navbarRight">
                    <img src={profilePic} alt="profile" className="profilePic" />
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
                    <div className="post">
                        <div className="postTop">
                            <img className="postProfilePic" src={profilePic} alt="profile"/>
                            <input placeholder="Caption your photo..." className="postInput"></input>
                        </div>
                        <hr className="postHR" />
                        <div className="postBottom">
                            <div className="sharePhoto">
                                <BiCamera className="shareIcon"/>
                                <span className="sharePhotoText">Add your photo</span>
                                <BiPin className="pinIcon"/>
                                <span className="sharePhotoText">Location</span>
                                <BiCollection className="draftIcon"/>
                                <span className="sharePhotoText">Drafts</span>
                                <button className="submitPost">Post</button>
                            </div>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="feedTopLeft">
                            <img className="feedProfilePic" src={feedProfile1} alt="profile"/>
                            <span className="username">Jason McDonald</span>
                            <BiTime className="timeIcon"/>
                            <span className="timeFeed">7 minutes ago</span>
                        </div>
                        <div className="feedContent">
                            <span className="feedCaption">Took this on my beautiful morning hike! <strong style={{color: 'rgb(179, 209, 255)'}}>#RockyMountains</strong></span>
                            <img className="feedPost" src={feedPost1} alt="feed"/>
                        </div>
                        <div className="feedOptions">
                            <span className="like">Like this content</span>
                            <BiLike className="likeButton" />
                            <span className="dislike">Avoid this content</span>
                            <BiDislike className="dislikeButton"/>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="feedTopLeft">
                            <img className="feedProfilePic" src={feedProfile2} alt="profile"/>
                            <span className="username">Janet Li</span>
                            <BiTime className="timeIcon"/>
                            <span className="timeFeed">18 minutes ago</span>
                        </div>
                        <div className="feedContent">
                            <span className="feedCaption">I'm the queen of the world!</span>
                            <img className="feedPost" src={feedPost2} alt="feed"/>
                        </div>
                        <div className="feedOptions">
                            <span className="like">Like this content</span>
                            <BiLike className="likeButton" />
                            <span className="dislike">Avoid this content</span>
                            <BiDislike className="dislikeButton"/>
                        </div>
                    </div>
                </div>
                <div className="homeRight">
                    <h1>right</h1>
                </div>
            </div>
        </div>
    )
}
