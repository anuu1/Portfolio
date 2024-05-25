import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            {/* <span className="icon">
                                <img src={hand} />
                            </span> */}
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Anamika Gupta</span>
                    </h1>
                    <p className="title">
                        Hello,my name is Anamika Gupta.I am from Kanpur.Currently I'm pursuing Master's
                        degree in Computer Application at NATIONAL INSTITUTE OF TECHNOLOGY,RAIPUR(NITRR).
                        I completed my Bachelor's degree in Computer Application with First Division at 
                        BND College.I am dedicated to enhancing my problem-solving skills by engaging in
                        daily DSA practice on plateforms like Leetcode and GeeksforGeeks. One of my 
                        strengths is my adaptability and quick learning.I'm proactive in learning 
                        and always eager to acquire new skills.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello I am Anamika Gupta"
                    />

                    {/* <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div> */}

               <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div> 
                         {/* <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
