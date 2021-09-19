import React from 'react'

export default function news() {
    return (
    <section class="newss_section py-5">
        <div class="container">
                <div class="row new_sec">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <h1>Get important Updates</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna </p>			
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="input-group mt-4 email_inp">
                            <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2">Send Message</span>
                            </div>
                            </div>
                    </div>
                </div>			 
        </div>
    </section>
    )
}
