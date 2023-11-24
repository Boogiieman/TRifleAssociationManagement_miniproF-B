import React, { useState } from "react";

import { Navbar } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';


function Login(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleLogin() {
    // Simulated login logic (Replace with actual logic)
    if (formData.email === 'usr' && formData.password === 'pass') {
      navigate('/user_profile');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

  return (
    
    <div className="d-flex justify-content-center align-items-center vh-100" style={{background: 'linear-gradient(to right, rgba(23, 162, 179, 0.7) 0%, transparent 100%)'}}>
      <form className="w-25 text-center">
        <h1 style={{ paddingBottom: '20px', color: 'grey' }}>Login</h1>
        <div className="form-outline mb-4">
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="User Name" 
            className="form-control" 
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-outline mb-4">
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Password" 
            className="form-control" 
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              {/* <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label> */}
            </div>
          </div>

          <div className="col">
            <Link to="/forgot_pass" style={{ textDecoration : "none" }}>Forgot password?</Link>
          </div>
        </div>

        <button 
          type="button" 
          className="btn btn-info btn-block mb-4" 
          onClick={handleLogin}
          style={{color:"white",fontWeight:"bold"}}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>Not a member ? <Link to='/user_registration' style={{ textDecoration : "none" }} >Register</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
