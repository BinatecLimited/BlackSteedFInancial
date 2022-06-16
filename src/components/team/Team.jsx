import React from "react"
import Header from "../common/header/Header"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Footer from "../common/footer/Footer"

const Team = () => {
  return (
    <>
      <Header />
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Team
