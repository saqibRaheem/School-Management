import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import imag from '../images/iim.png'
export default function Common(props) {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justiyf-content-center flex-column">
                  <h1> Grow Your Speaking with <strong className='brand-name'> World English Intitute </strong> </h1>
                  <h2 className="my-3">
                  <Typewriter
            words={['IMPROVE YOUR ENGLISH', '- Reading Writing Listening Speaking']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000} />
                  </h2> 
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 ease-in duration-300 header-img">
                     <img width={500} src={imag} className='img-fluid  ' alt="homeimg" />
                 </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}