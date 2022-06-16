import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Register.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"


function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({name: "", email: "", password: "", confirmpassword: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <>
      <Header />
      <form className='LoginForm' onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2 className='LoginTitle'>Register</h2>
            {(error != "") ? ( <div className="error">{error}</div> ) : ""}
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />  
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <input type="password" name='confirmpassword' id="password" onChange={e => setDetails({...details, confirmpassword: e.target.value})} value={details.confirmpassword} />
            </div>
                <input type="submit" value="SIGN UP" />
            <div style={{ alignItems: '50%', justifyContent: 'center' }}>
              <h5 style={{ paddingTop: '20px' }}>have an account already?</h5>
              <li>
              <Link to='/Login'>
                <div style={{ color: '#ffffff' }} className='button'>
                  <button>
                    LOGIN
                  </button>
                </div>
              </Link>
            </li>
            </div>
        </div>
      </form>
      <Footer />
    </>
  )
}

export default LoginForm;