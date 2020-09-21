import React, { useEffect, useState } from "react";

// Redux stuff
import { connect } from 'react-redux';

// CSS
import "../../components/NewBiz/lib/bootstrap/css/bootstrap.min.css"
import "../../components/NewBiz/lib/font-awesome/css/font-awesome.min.css"
import "../../components/NewBiz/lib/animate/animate.min.css"
import "../../components/NewBiz/lib/ionicons/css/ionicons.min.css"
import "../../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css"
import "../../components/NewBiz/lib/lightbox/css/lightbox.min.css"
import "../../components/NewBiz/css/style.css"

const Index = () => {
    const [emil, setemail] = useState("");
    return (
        <div>
            <main id="main">
                <section id="contact" className="section-bg">
                    <div className="container">
                        <header className="section-header">
                            <h3>Add Child</h3>
                        </header>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-md-10 info">
                                    <img src="./suriya.png" />
                                </div>
                                <div class="col-lg-10">
                                <div class="form">
                                    <div class="text-center"><button type="submit" title="Send Message">Upload</button></div>
                                </div>
                            </div>
                            </div>
                            <br></br>
                            <div class="form">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>
                                <form action="" method="post" role="form" class="contactForm">
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="First Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Last Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Nickname" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Sex" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Date of Birth" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Religion" data-rule="email" data-msg="Please enter a valid email" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Weight" data-rule="email" data-msg="Please enter a valid email" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Height" data-rule="email" data-msg="Please enter a valid email" />
                                            <div class="validation"></div>
                                        </div>
                                    </div>
                                    <div class="text-right"><button type="submit" title="Send Message"><a href="/overviewChild">Add Child</a></button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>{/* #services */}
            </main>

        </div>

    );
};

export default Index;