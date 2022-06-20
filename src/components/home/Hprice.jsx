import React from "react"
import { Link } from "react-router-dom"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <div>
          <button>
            GET STARTED
          </button>
          <li>
              <Link to='/Dashboard'>
                <div style={{ color: '#ffffff' }} className='button'>
                  <button>
                    DASHBOARD
                  </button>
                </div>
              </Link>
            </li>
        </div>
      </section>
    </>
  )
}

export default Hprice


//<Heading subtitle='OUR PRICING' title='Pricing & Packages' />
  //      <div className='price container grid'>
    //      <PriceCard />
      //  </div>