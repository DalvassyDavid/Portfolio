import React from 'react';
import backgroundimage from "../images/backgroundimage.jpg";


const Contact = () => (
  <div style={{display:"flex"}} >
  <div className="contact container" style={{ marginTop: "100px"}} >
    <h2>Contacts</h2>
    <p>Email : davidkahiti@gmail.com</p>
    <p>Telephone : 0728 507 671</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
    
  </div>
  <div style={{ marginTop: "60px",paddingLeft:"90px"}}>
      <img src={backgroundimage} alt="Loading" style={{ width: "69%",height:"auto" }} />
    </div>
  </div>
);

export default Contact;
