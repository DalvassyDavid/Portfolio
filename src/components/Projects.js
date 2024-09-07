import React, { useState } from "react";

import lpt_frontendphoto from "../images/lpt_frontend.png";
import lpt_backendphoto from "../images/lpt_backend.png";
import lpt_clientphoto from "../images/lpt_client.png";
import lpt_adminphoto from "../images/lpt_admin.png";

import lpt_frontendvideo from "../images/lpt_frontend_video.mp4";
import lpt_backendvideo from "../images/lpt_backend_video.mp4";
import lpt_clientsidevideo from "../images/lpt_client_side.mp4";
import lpt_adminsidevideo from "../images/lpt_admin_side.mp4";

import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

import VideoPopUpPage from "./VideoPage";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Church Website",
      photo: lpt_frontendphoto,
    },
    {
      id: 2,
      title: "Church Webapp",
      photo: lpt_backendphoto,
    },
    {
      id: 3,
      title: "Church Website",
      photo: lpt_frontendphoto,
    },
    {
      id: 4,
      title: "Church Webapp",
      photo: lpt_backendphoto,
    },
  ];
  const imgDivStyle = {
    padding: "5px",
    textAlign: "center",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "boxShadow 0.3s ease, transform 0.3s ease",
  };
  const imgStyle = {
    padding: "10px",
    width: "260px",
    height: "140px",
  };
  const webdevH1 = {
    padding: "10px",
    color: "#FF4F00",
    fontFamily: "Poppins', sans-serif",
  };
  const webdevDiv2 = {
    padding: "5px",
    fontFamily: "Poppins', sans-serif",
    color: "#000080",
  };
  const CloseVideoPageButton=()=>{
    return(
      <div
      style={{
        cursor: "pointer",
        height: "0px",
        width: "40px",
        marginTop: "20px",
        marginLeft: "928px",
        marginBottom: "-31px",
        position: "relative",
        zIndex: "2",
      }}
    >
      <button
        className="closeButtonVideo"
        onClick={() => {
          setviewvideoPopUpPage("")
          setviewcloseVideoPageButton("")
        }}
      >
        X
      </button>
    </div>
    )
  }
  const [viewvideoPopUpPage, setviewvideoPopUpPage] = useState("");
  const[viewcloseVideoPageButton,setviewcloseVideoPageButton]=useState("")

  const handleViewVideoPageFrontendVideo = () => {
    console.log("dfdfd");
    setviewvideoPopUpPage(<VideoPopUpPage lpt_frontendvideo={lpt_frontendvideo} />);
    setviewcloseVideoPageButton(<CloseVideoPageButton/>)
  };
  const handleViewVideoPageBackendVideo = () => {
    console.log("dfdfd");
    setviewvideoPopUpPage(<VideoPopUpPage lpt_frontendvideo={lpt_backendvideo} />);
    setviewcloseVideoPageButton(<CloseVideoPageButton/>)
  };
  const handleViewVideoPageClientVideo = () => {
    console.log("dfdfd");
    setviewvideoPopUpPage(<VideoPopUpPage lpt_frontendvideo={lpt_clientsidevideo} />);
    setviewcloseVideoPageButton(<CloseVideoPageButton/>)
  };
  const handleViewVideoPageAdminVideo = () => {
    console.log("dfdfd");
    setviewvideoPopUpPage(<VideoPopUpPage lpt_frontendvideo={lpt_adminsidevideo} />);
    setviewcloseVideoPageButton(<CloseVideoPageButton/>)
  };
 
  return (
    <div className="projects-container">
     {viewcloseVideoPageButton}
      <div>
        <h1 className="projects-container-title">New Projects</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={imgDivStyle}
          onClick={handleViewVideoPageFrontendVideo}
          className="projects_each_div"
        >
          <div style={webdevH1}>Web Development</div>

          <div style={webdevDiv2}>
            The church website has a new look and feel
          </div>
          <img src={lpt_frontendphoto} style={imgStyle} alt="Loading..." />
        </div>
        <div
          style={imgDivStyle}
          onClick={handleViewVideoPageBackendVideo}
          className="projects_each_div"
        >
          <div style={webdevH1}>Web Development</div>
          <div style={webdevDiv2}>
            The church can track members, events, posts and many more
          </div>
          <img src={lpt_backendphoto} style={imgStyle} alt="Loading..." />
        </div>
        <div
          style={imgDivStyle}
          onClick={handleViewVideoPageClientVideo}
          className="projects_each_div"
        >
          <div style={webdevH1}>Web Development</div>
          <div style={webdevDiv2}>
            The church can track members, events, posts and many more
          </div>
          <img src={lpt_clientphoto} style={imgStyle} alt="Loading..." />
        </div>
        <div
          style={imgDivStyle}
          onClick={handleViewVideoPageAdminVideo}
          className="projects_each_div"
        >
          <div style={webdevH1}>Web Development</div>
          <div style={webdevDiv2}>
            The church can track members, events, posts and many more
          </div>
          <img src={lpt_adminphoto} style={imgStyle} alt="Loading..." />
        </div>
      </div>
      {viewvideoPopUpPage}
      <div style={{ paddingTop: "5px" }}>
        <a href="#" class="previous">
          &laquo; <Link to="/">Home</Link>
        </a>
        <a href="#" class="next">
          <Link to="/contact">Contact</Link> &raquo;
        </a>
      </div>
    </div>
  );
};

export default Projects;
