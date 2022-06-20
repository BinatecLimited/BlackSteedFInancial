import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Register from "./components/Register/Register"
import Login from "./components/Login/LoginForm"
import Dashboard from "./components/dashboard/Dashboard"
import Wallet from "./components/dashboard/Wallet"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/courses' element={<CourseHome/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/Register' element={<Register/>} />
          <Route exact path='/Login' element={<Login/>} />
          <Route exact path='/Dashboard' element={<Dashboard />} />
          <Route exact path='/Wallet' element={<Wallet />} />
        </Routes>
        
      </Router>
    </>
  )
}

export default App
