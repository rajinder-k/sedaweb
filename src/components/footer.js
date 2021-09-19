import React from 'react'

function footer() {
    return (
    <footer className="footer pt-5">
      <div className="container">
         <div className="row">
            <div className="col-lg-5 col-md-3 col-sm-6">
               <img className="img-fluid" src="images/logo.png"/>
               <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Vivamus dapibus est ac nunc<br/> gravida dapibus.</p>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
               <h4>Navigation</h4>
               <a href="#">How it Work</a>
               <a href="#">About Us</a>
               <a href="#">Feature Item</a>
               <a href="#">Privacy Policy</a>
               <a href="#">contact Us</a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
               <h4>Navigation</h4>
                <a href="#">How it Work</a>
               <a href="#">About Us</a>
               <a href="#">Feature Item</a>
               <a href="#">Privacy Policy</a>
               <a href="#">contact Us</a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
               <h4>Connect With Us</h4>
               <div className="socialIcons">
                  <ul>
                     <li><a href=""><i className="fab fa-facebook"></i></a></li>
                     <li><a href=""><i className="fab fa-twitter"></i></a></li>
                     <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
					 <li><a href=""><i className="fab fa-instagram"></i></a></li>
                     <li><a href=""><i className="fab fa-facebook"></i></a></li>
                     <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
               </div>
              
            </div>
         </div>
		<div className="copy">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-sm-12 col-md-12">
                  <div className="copy-inner">
                     <p>© Copyright 2019 All rights reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
</footer>
    )
}

export default footer
