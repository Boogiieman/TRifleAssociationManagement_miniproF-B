import React from "react";
import Header from "../../Navbaru";
import Uform from "../../Uform";
function Updateform(){
    return (
        <div className="container-fluid" style={{maxwidth:"0px",padding:"0px"}}>
            <div className="row-fluid" style={{marginLeft:"10px",marginRight:"10px"}}><Header/></div>
        <div class="container-fluid" style={{padding:"10px"}}>
        <div class="row-md" style={{marginTop:"50px"}}>
        <h1 className="main-heading text-center">Profile</h1>


        

        <Uform />

        </div>
        </div>
        </div>
    );
}
export default Updateform;