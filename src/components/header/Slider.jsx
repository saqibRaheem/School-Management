import React from 'react'
import img1 from '../../images/iim.png'
import img2 from '../../images/emg.png'
import './header.css'

export default function Slider() {
  return (
    <>

     <section class="banner_main">
         <div id="banner1" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#banner1" data-slide-to="0" class="active"></li>
               <li data-target="#banner1" data-slide-to="1"></li>
               <li data-target="#banner1" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu">Welcome <br/></span>To Our Sunglasses</h1>
                           <figure><img src={img2} alt="#"/></figure>
                           {/* <a class="read_more" href="#">Shop Now</a> */}
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu">Welcome <br/></span>To Our Sunglasses</h1>
                           <figure><img src={img1} alt="#"/></figure>
                           {/* <a class="read_more" href="#">Shop Now</a> */}
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu">Welcome <br/></span>To Our Sunglasses</h1>
                           <figure><img src={img2} alt="#"/></figure>
                           {/* <a class="read_more" href="#">Shop Now</a> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
            <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
         </div>
      </section>

    </>
  )
}
