import React, { useState } from 'react'
import LoginForm from "./LoginForm";


function Login() {
    const adminUser = {
      email: "admin@gmail.com",
      password: "admin123"
    }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }


  return (
    <div className='Login' >
        {(user.email != "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
    </div>
  )
}

export default Login;