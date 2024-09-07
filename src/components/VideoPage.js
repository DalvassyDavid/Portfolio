import React, { useState } from "react";
import lpt_frontendvideo from "../images/lpt_frontend_video.mp4";

const VideoPopUpPage = (props) => {
  return (
    <div
      style={{
        marginTop: "-380px",
        zIndex: "1",
        backgroundColor: "rgba(0, 0, 128, 0.1)",
        height: "73vh",
        position: "absolute",
        width: "100%",
      }}
    >
      
      <video width="650" height="450" controls>
        <source src={props.lpt_frontendvideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPopUpPage;
