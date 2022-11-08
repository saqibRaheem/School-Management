import React from 'react'
import './header.css'
import school from "../../images/school.png"
// import logoimg from '../../images/emg.png'
export default function Header() {
  return (
  <><header>
   <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                              <a href="index.html"><img src={school} alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav class="navigation navbar navbar-expand-lg navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item active">
                                 <a class="nav-link" href="index.html">Home</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="about.html">About</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="glasses.html">Our Glasses</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="shop.html">Shop</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="contact.html">Contact Us</a>
                              </li>
                              <li class="nav-item d_none login_btn">
                                 <a class="nav-link" href="#">Login</a>
                              </li>
                              <li class="nav-item d_none">
                                 <a class="nav-link" href="#">Register</a>
                              </li>
                              <li class="nav-item d_none sea_icon">
                                 <a class="nav-link" href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i><i class="fa fa-search" aria-hidden="true"></i></a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
  </>


   /* <header className='primary-header flex'>
     <div>
        <img src={logoimg} alt="" className='logo' />
     </div>

     <nav>
        <ul className='primary-navegation flex'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
     </nav>
      
</header> */




    // <div className="container">
    //       <div className="logo">
    //        <img src={logoimg} alt="" />
    //       </div>
    //       <div className="nav">
    //         <ul className='menu'>
    //             <li>Home</li>
    //             <li>About</li>
    //             <li>Contact us</li>
    //             <li>Addmission</li>
    //         </ul>
    //       </div>
    // </div>
  )
}
