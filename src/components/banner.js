import React from 'react'

function banner() {
    return (
        <section class="banner_section">
           <div id="carouselExample" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                 <div class="carousel-item active">
                    <div class="container">
                       <div class="row def_pad">
                          <div class="col-lg-6 col-md-6 col-sm-12 left_sec">
                             <h1>Generate intelligent demand for your business using our real time marketing technology</h1>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus est ac nunc gravida dapibus. Ut tempusneque vitae volutpat faucibus. Quisque euismod purus noneros molestie, non feugiat justo consequat. Phasellus ut felisvehicula, viverra diam non, faucibus est.
                             </p>
                             <button type="button" class="btn btn-danger">Get Started Today &rarr;</button>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
    )
}

export default banner
