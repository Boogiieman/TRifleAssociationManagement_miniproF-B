import React from "react";
import { Link } from "react-router-dom";

function Forgotpassword(){
    return (
        <div class="d-flex justify-content-center align-items-center vh-100" style={{background: 'linear-gradient(to right, rgba(23, 162, 179, 0.7) 0%, transparent 100%)'}}>
        <form className="w-25 text-center">
          <h1 style={{ paddingBottom: '20px', color: 'grey' }}>Forgot Password</h1>  
          <div className="form-outline mb-4">
            <input type="email" id="email" placeholder="User Name (email id)" className="form-control" />
          </div>
      
          <button type="button" style={{color:"white",fontWeight:"bold"}} className="btn btn-info btn-block mb-4">Submit</button>
      
          <div className="text-center">
            <p style={{color: 'red', fontSize: '12px'}}>*please check your email for password reset option</p>
          </div>
          <div className="text-center">
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to='/' style={{ textDecoration : "none"}} >Remember Login Credentials?</Link>
          <Link to='/user_registration' style={{ textDecoration : "none"}} > New User?</Link>
          </p>
          </div>
        </form>
      </div>
    );
}
export default Forgotpassword;