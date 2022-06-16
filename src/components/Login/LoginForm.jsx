import React, { useState } from 'react'
import "./Login.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"


function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({name: "", email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <>
      <Header />
      <form className='LoginForm' onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2 className='LoginTitle'>Login</h2>
            {(error != "") ? ( <div className="error">{error}</div> ) : ""}
            
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
                <input type="submit" value="LOGIN" />
        </div>
      </form>
      <Footer />
    </>
  )
}

export default LoginForm;