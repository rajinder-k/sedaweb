import React from 'react'

export default function header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light">
           <div className="container">
              <a className="navbar-brand" href="#">
              <img className="img-fluid lg-img" src="images/logo.jpg"/>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                       <a className="nav-link" href="#">Features <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="product.html">Roadmap</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="business.html">Pricing</a>
                    </li>
                    <li className="nav-item">
                       <a className="btn btn-danger log" href="login.html">Sign up</a>
                    </li>
                 </ul>
              </div>
           </div>
        </nav>

    )
}
