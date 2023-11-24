import React from "react";

import { Link } from "react-router-dom";
import Header from "../../Navbaru";

function UserProfile() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row mx-auto" style={{paddingTop:"5px"}}>
          <h1 style={{color:"grey",fontWeight:"bolder"}}>Welcome...</h1>
          <div className="row">
          <center style={{padding:"150px",paddingBottom:"5px"}}>
          <Link to="/update_pform" style={{textDecoration:"none",fontWeight:"bolder"}}>
          <svg width="152px" height="152px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 661.3c-117.6 0-213.3-95.7-213.3-213.3S394.4 234.7 512 234.7 725.3 330.4 725.3 448 629.6 661.3 512 661.3z m0-341.3c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128-57.4-128-128-128z" fill="#5F6379"></path><path d="M837 862.9c-15.7 0-30.8-8.7-38.2-23.7C744.3 729.5 634.4 661.3 512 661.3s-232.3 68.1-286.8 177.9c-10.5 21.1-36.1 29.7-57.2 19.2s-29.7-36.1-19.2-57.2C217.8 662.3 357 576 512 576s294.2 86.3 363.2 225.2c10.5 21.1 1.9 46.7-19.2 57.2-6.1 3-12.6 4.5-19 4.5z" fill="#5F6379"></path><path d="M512 1002.7c-270.6 0-490.7-220.1-490.7-490.7S241.4 21.3 512 21.3s490.7 220.1 490.7 490.7-220.1 490.7-490.7 490.7z m0-896c-223.5 0-405.3 181.8-405.3 405.3S288.5 917.3 512 917.3 917.3 735.5 917.3 512 735.5 106.7 512 106.7z" fill="#3688FF"></path></g></svg>
          <br></br>
          <span style={{fontWeight:"bolder",color:"grey",fontSize:"24px"}}>Please update profile</span>
          <br></br>
          Click Here</Link>
          
         </center>
          </div>
        </div>
      </div>
    );
  }
  export default UserProfile;