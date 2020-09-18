import React, { useEffect, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const Estimation = () => {
    return (
        <div>
            <div section id="services" className="section-bg">
                <div className="container">
                    <div className="col-md-10 col-lg-ุ6 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-paper-outline" style={{ color: '#3fcdc7' }} /></div>
                            <h4 className="title"><a href>ชื่อ............................ อายุ.................. ชื่อเล่น.................</a></h4>
                        </div>
                    </div>
                </div>
            </div>

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
    )
};

export default Estimation;