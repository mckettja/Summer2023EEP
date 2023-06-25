import React from 'react';
import './home.css';

import profilePic from './constantData/people/6.jpg';
import feedProfile1 from './constantData/people/2.jpg';
import feedProfile2 from './constantData/people/3.jpg';
import feedProfile3 from './constantData/people/4.jpg';
import feedProfile4 from './constantData/people/5.jpg';
import feedProfile5 from './constantData/people/1.jpg';
import feedProfile6 from './constantData/people/7.jpg';

import feedPost1 from './constantData/posts/1.jpg';
import feedPost2 from './constantData/posts/2.jpg';
import feedPost3 from './constantData/posts/3.jpg';
import feedPost4 from './constantData/posts/4.jpg';
import feedPost5 from './constantData/posts/5.jpg';
import feedPost6 from './constantData/posts/6.jpg';

import {BiSearch, BiCamera, BiHomeAlt2, BiMessageDetail, BiGlobe, BiPencil, BiClipboard, BiPin, BiCollection, BiTime, BiLike, BiDislike } from "react-icons/bi";

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
                <div className="homeLeft">                  {/* <----------- home left div -----------> */}
                    <div className="usefulLinksContainer">
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
                </div>
                <div className="homeCenter">                    {/* <----------- home center div -----------> */}
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
                        <div className="feedTopLeft">                                   {/* post 1 */}
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
                        <div className="feedTopLeft">                                   {/* post 2 */}
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
                    <div className="feed">
                        <div className="feedTopLeft">                                   {/* post 3 */}
                            <img className="feedProfilePic" src={feedProfile3} alt="profile"/>
                            <span className="username">Lindsey Davis</span>
                            <BiTime className="timeIcon"/>
                            <span className="timeFeed">7 hours ago</span>
                        </div>
                        <div className="feedContent">
                            <span className="feedCaption">View from the office <strong style={{color: 'rgb(179, 209, 255)'}}>#NewYorkCity</strong></span>
                            <img className="feedPost" src={feedPost3} alt="feed"/>
                        </div>
                        <div className="feedOptions">
                            <span className="like">Like this content</span>
                            <BiLike className="likeButton" />
                            <span className="dislike">Avoid this content</span>
                            <BiDislike className="dislikeButton"/>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="feedTopLeft">                                   {/* post 4 */}
                            <img className="feedProfilePic" src={feedProfile4} alt="profile"/>
                            <span className="username">David Klein</span>
                            <BiTime className="timeIcon"/>
                            <span className="timeFeed">13 hours ago</span>
                        </div>
                        <div className="feedContent">
                            <span className="feedCaption">This took me hours, but it was well worth it! Happy birthday to me!</span>
                            <img className="feedPost" src={feedPost4} alt="feed"/>
                        </div>
                        <div className="feedOptions">
                            <span className="like">Like this content</span>
                            <BiLike className="likeButton" />
                            <span className="dislike">Avoid this content</span>
                            <BiDislike className="dislikeButton"/>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="feedTopLeft">                                   {/* post 5 */}
                            <img className="feedProfilePic" src={feedProfile5} alt="profile"/>
                            <span className="username">Ashley Micheals</span>
                            <BiTime className="timeIcon"/>
                            <span className="timeFeed">1 day ago</span>
                        </div>
                        <div className="feedContent">
                            <span className="feedCaption">A well deserved vacation</span>
                            <img className="feedPost" src={feedPost5} alt="feed"/>
                        </div>
                        <div className="feedOptions">
                            <span className="like">Like this content</span>
                            <BiLike className="likeButton" />
                            <span className="dislike">Avoid this content</span>
                            <BiDislike className="dislikeButton"/>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="feedTopLeft">                                   {/* post 6 */}
                            <img className="feedProfilePic" src={feedProfile6} alt="profile"/>
                            <span className="username">Kyle Wesley</span>
                            <BiTime className="timeIcon"/>
                            <span className="timeFeed">3 days ago</span>
                        </div>
                        <div className="feedContent">
                            <span className="feedCaption">My favorite photo from <strong style={{color: 'rgb(179, 209, 255)'}}>#TheGreatWallOfChina</strong></span>
                            <img className="feedPost" src={feedPost6} alt="feed"/>
                        </div>
                        <div className="feedOptions">
                            <span className="like">Like this content</span>
                            <BiLike className="likeButton" />
                            <span className="dislike">Avoid this content</span>
                            <BiDislike className="dislikeButton"/>
                        </div>
                    </div>
                </div>
                <div className="homeRight">                 {/* <----------- home right div -----------> */}
                    <div className="birthdayContainer">
                        <img className="birthdayIcon" src="" alt="none" />
                        <span className="birthdayMessage">
                        <strong style={{color: 'rgb(242, 120, 33)'}}>Today</strong> is <strong style={{color: 'rgb(242, 120, 33)'}}>David Klein's</strong> birthday! Send them a message!
                        </span>
                    </div>
                    <div className="friendsContainer">
                        <span className="friendsTitle">Friends List</span>
                        <ul className="friendsList">
                            <li className="friend">
                                <img className="feedProfilePic" src={feedProfile1} alt="profile"/>
                                <span className="friendName">Jason McDonald</span>
                            </li>
                            <li className="friend">
                                <img className="feedProfilePic" src={feedProfile2} alt="profile"/>
                                <span className="friendName">Janet Li</span>
                            </li>
                            <li className="friend">
                                <img className="feedProfilePic" src={feedProfile3} alt="profile"/>
                                <span className="friendName">Lindsey Davis</span>
                            </li>
                            <li className="friend">
                                <img className="feedProfilePic" src={feedProfile4} alt="profile"/>
                                <span className="friendName">David Klein</span>
                            </li>
                            <li className="friend">
                                <img className="feedProfilePic" src={feedProfile5} alt="profile"/>
                                <span className="friendName">Ashley Micheals</span>
                            </li>
                            <li className="friend">
                                <img className="feedProfilePic" src={feedProfile6} alt="profile"/>
                                <span className="friendName">Kyle Wesley</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
