import React, { useEffect, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const Assessment = () => {
    return (
        <div>
            <div section id="services" className="section-bg">
                <div className="container">
                    <div className="col-md-10 col-lg-ุ6 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-paper-outline" style={{ color: '#ffffff' }} /></div>
                            <h4 className="title"><a href>ชื่อ............................ อายุ.................. ชื่อเล่น.................</a></h4>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about">
                <div class="container">
                    <div className="row about-extra">
                        <div className="col-lg-6 wow fadeInUp">
                            <h1>ชื่อการทดสอบ</h1>
                            <img src="images/suriya.svg" className="img-fluid" alt />
                            <p>
                                รายละเอียดการทดสอบ บลาๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ
                    </p>
                        </div>
                        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                            <h2>อุปกรณ์</h2>
                            <img src="img/about-extra-1.svg" className="img-fluid" alt />
                            <p>อุปกรณ์1</p>
                            <img src="img/about-extra-1.svg" className="img-fluid" alt />
                            <p>อุปกรณ์2</p>
                            <img src="img/about-extra-1.svg" className="img-fluid" alt />
                            <p>อุปกรณ์3</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why-us" class="wow fadeIn">
                <div class="container">
                    <div class="row row-eq-height justify-content-center">
                        <div class="col-lg-4 mb-4">
                            <div class="card wow bounceInUp">
                                <Button variant="contained" color="primary">
                                    <h1>ผ่าน</h1>
                                </Button>
                                <div class="card-body">
                                    <h5 class="card-title">รายละเอียดการผ่าน</h5>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card wow bounceInUp">
                                <Button variant="contained" color="secondary">
                                    <h1>ไม่ผ่าน</h1>
                                </Button>
                                <div class="card-body">
                                    <h5 class="card-title">รายละเอียดการไม่ผ่าน</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container-fluid">
                    <div className="section-header">
                        <h3>ความคิดเห็นผู้ประเมิน</h3>
                    </div>
                    <div className="row wow fadeInUp">
                        <div className="col-lg-12">
                            {/* <div className="form"> */}
                            <form action method="post" role="form" className="contactForm" >
                                <div className="form-group" >
                                    <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Comment" defaultValue={""} />
                                    <div className="validation" />
                                </div>
                            </form>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <div class="row row-eq-height justify-content-center">
                <div class="col-lg-4 mb-4">
                    <div class="card wow bounceInUp">
                        <Button variant="contained" color="primary">
                            <h1>Previous</h1>
                        </Button>
                    </div>
                </div>

                <div class="col-lg-4 mb-4">
                    <div class="card wow bounceInUp">
                        <Button variant="contained" color="secondary">
                            <h1>Next</h1>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Assessment;