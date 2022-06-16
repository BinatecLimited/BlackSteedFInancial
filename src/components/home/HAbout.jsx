import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/services.png' style={{ paddingTop: '50px' }} alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='OUR SERVICES' title='WHAT WE HAVE TO OFFER' />
            <h4 style={{ fontWeight: 'normal', lineHeight: '33px' }}>
              Black Steed Financial is a Cryptocurrency Arbitrage Platform that helps its users find the best arbitrage oppurtunity
              and make the trade as directed by the user. This is a prop content. Check our dervices Page for more info.
            </h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default HAbout



//<section className='homeAbout'>
  //      <div className='container'>
    //      <Heading subtitle='our Services' title='explore our services' />
//
  //        <div className='coursesCard'>
    //        {/* copy code form  coursesCard */}
      //      <div className='grid2'>
        //      {coursesCard.slice(0, 3).map((val) => (
          //      <div className='items'>
            //      <div className='content flex'>
              //      <div className='left'>
             //         <div className='img'>
              //          <img src={val.cover} alt='' />
               //       </div>
                 //   </div>
                   // <div className='text'>
                     // <h1>{val.coursesName}</h1>
                      //<div className='rate'>
                        //<i className='fa fa-star'></i>
                        //<i className='fa fa-star'></i>
                        //<i className='fa fa-star'></i>
  //                      <i className='fa fa-star'></i>
    //                    <i className='fa fa-star'></i>
      //                  <label htmlFor=''>(5.0)</label>
        //              </div>
          //            <div className='details'>
            //            {val.courTeacher.map((details) => (
              //            <>
                //            <div className='box'>
                  //            <div className='dimg'>
                    //            <img src={details.dcover} alt='' />
                      //        </div>
                        //      <div className='para'>
                          //      <h4>{details.name}</h4>
                           //   </div>
                           // </div>
                            //<span>{details.totalTime}</span>
                          //</>
                    //    ))}
           //           </div>
             //       </div>
               //   </div>
                 // <div className='price'>
                   // <h3>
          //            {val.priceAll} / {val.pricePer}
            //        </h3>
              //    </div>
                //  <button className='outline-btn'>ENROLL NOW !</button>
    //            </div>
      //        ))}
        //    </div>
          //</div>
      //  </div>
       // <OnlineCourses />
  //    </section>
