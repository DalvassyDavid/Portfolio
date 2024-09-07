import React from "react";
import profilePic from "../images/profile.png";
import backgroundimage from "../images/backgroundimage.jpg";
import { FaReact,FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdOutlineHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa6";
import { BsFiletypeSql } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => (
  <div style={{ display: "flex" }}>
    <div
      className="home-container"
      style={{ width: "60%", marginLeft: "20px" ,marginTop:"100px"}}
    >
      {/* <img src={profilePic} alt="Profile" className="profile-pic" /> */}
      <h1>
        Hi<span style={{ color: "#FF4F00" }}>,</span> I'm David K<span style={{ color: "#FF4F00" }}>.</span>
      </h1>
      <p className="home-container-title">Frontend & Backend developer
      </p>
      <p
        style={{ fontFamily: "'Poppins', sans-serif", color: "#000080" }}
      >
        Turning ideas into real life products is my calling. I Transform Ideas into Seamless Experiences with Expertise in Front-End Design and Back-End Architecture
      </p>
      <h3 className="home-container-title">Frontend</h3>
      <div style={{ display: "flex" }}>
        <div className="revolving-image-container">
          <FaReact
          size={50}
          color="#000080"
            className="revolving-image"
          />
        </div>
        <div className="non-revolving-image-container">
          <TbBrandJavascript
            size={50}
            color="#FFD700"
            className="non-revolving-image"
          />
        </div>
        <div className="revolving-image-container">
          <MdOutlineHtml
          size={50}
           color="#FF4F00"
            className="non-revolving-image"
          />
        </div>
        <div className="revolving-image-container">
          <MdCss
          size={50}
         color="blue"
            className="non-revolving-image"
          />
        </div>
      </div>
      <br/>
      <h3 className="home-container-title">Backend + Database
      </h3>
      <div style={{ display: "flex" }}>
        <div className="revolving-image-container">
          <FaNodeJs
          size={50}
          color="#228B22"
            className="non-revolving-image"
          />
        </div>
        <div className="non-revolving-image-container">
          <BsFiletypeSql
            size={50}
            color="#0D98BA"
            className="non-revolving-image"
          />
        </div>
        <div className="revolving-image-container">
          <FaPython
          size={50}
          color="#FFD700"
            className="non-revolving-image"
          />
        </div>
        
      </div>
      <div style={{ paddingTop: "50px", marginLeft:"10px" }}>
        
        <a href="#" class="next">
          <Link to="/projects" style={{color:"white"}}>Projects</Link> &raquo;
        </a>
      </div>
    </div>
    <div style={{ marginTop: "100px", width: "70%" }}>
      <img src={backgroundimage} alt="Loading" style={{ width: "90%" }} />
    </div>
    
  </div>
);

export default Home;
