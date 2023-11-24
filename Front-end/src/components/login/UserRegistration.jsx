import React from "react";
import { Link } from "react-router-dom";


function UserRegistration(){
    return (
      
      <div class="d-flex justify-content-center align-items-center vh-100" style={{background: 'linear-gradient(to right, rgba(23, 162, 179, 0.7) 0%, transparent 100%)'}}>
      <form className="w-25 text-center">
      <h1 style={{ paddingBottom: '20px', color: 'grey' }}>New User Register</h1>
      <div className="form-outline mb-4">
        <input type="text" id="name" placeholder="Name" className="form-control" />
      </div>

      <div className="form-outline mb-4">
      <input type="tel" id="mobile" placeholder="Mobile" className="form-control" />
      </div>

      <div className="form-outline mb-4">
      <input type="email" id="email" placeholder="User Name (email id)" className="form-control" />
      </div>

      <button type="button" className="btn btn-info btn-block mb-4" style={{color:"white",fontWeight:"bold"}}>Register</button>

      <div className="text-center">
      <p style={{color: 'red', fontSize: '12px'}}>*please check your email for password reset option</p>
      </div>
      <div className="text-center">
          <p>Already a user ? <Link to='/' style={{ textDecoration : "none" }} >Login</Link></p>
      </div>
      
      </form>
      </div>
      
    );
}
export default UserRegistration;