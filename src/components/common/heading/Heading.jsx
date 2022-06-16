import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h3 style={{ color: '#116466'  }}>{subtitle} </h3>
        <h1 style={{ color: '#2C3531' }}>{title} </h1>
      </div>
    </>
  )
}

export default Heading
