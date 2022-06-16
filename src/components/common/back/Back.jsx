import React from "react"
import { useLocation } from "react-router-dom"
import "./back.css"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>/
      <section className='back'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1 style={{ paddingTop: '50px', color: '#1eb2a6 ' }}>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
