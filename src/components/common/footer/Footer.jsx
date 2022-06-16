import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container'>
          <div>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>You're more than just an investor</span>
          </div>
          <div  style={{ paddingTop: '20px' }}>
            <input style={{ backgroundColor: '#ffffff' }} type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>BLACK STEED FINANCIAL</h1>
            <span style={{ color: '#116466' }}>MAKING MILLIONAIRES FROM CRYPTO</span>
            <p style={{ color: '#000000' }}>Get access to personalized financial advice, high-quality investments, retirement tools, and relevant market insights that help you build a future for those you love.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3 style={{ paddingLeft: '20px' }}>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='boxlink'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                phone number???
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | Black Steed Financial | Designed by BinatecLimited
        </p>
      </div>
    </>
  )
}

export default Footer


//import { blog } from "../../../dummydata"
//<h3>Recent Post</h3>
  //          {blog.slice(0, 3).map((val) => (
    //          <div className='items flexSB'>
      //          <div className='img'>
        //          <img src={val.cover} alt='' />
          //      </div>
            //    <div className='text'>
              //    <span>
                //    <i className='fa fa-calendar-alt'></i>
                  //  <label htmlFor=''>{val.date}</label>
                 // </span>
//                  <span>
  //                  <i className='fa fa-user'></i>
    //                <label htmlFor=''>{val.type}</label>
      //            </span>
        //          <h4>{val.title.slice(0, 40)}...</h4>
          //      </div>
            //  </div>
          //  ))}