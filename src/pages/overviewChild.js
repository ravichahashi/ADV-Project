import React, { useEffect, useState } from "react";

// Redux stuff
import { connect } from 'react-redux';

// CSS
import "../components/NewBiz/lib/bootstrap/css/bootstrap.min.css"
import "../components/NewBiz/lib/font-awesome/css/font-awesome.min.css"
import "../components/NewBiz/lib/animate/animate.min.css"
import "../components/NewBiz/lib/ionicons/css/ionicons.min.css"
import "../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css"
import "../components/NewBiz/lib/lightbox/css/lightbox.min.css"
import "../components/NewBiz/css/style.css"

const Index = () => {
    const [emil , setemail] = useState("");
    return(
<div>
  {/* ==========================
    Intro Section
  ============================*/}
  {/* <section id="intro" className="clearfix">
    <div className="container">
      <div className="intro-img">
        <img src="./sunerry1.png" alt className="img-fluid" />
      </div>
      <div className="intro-info">
        <h2>We provide<br /><span>solutions</span><br />for your Nursery!</h2>
      </div>
    </div>
  </section>{/* #intro */}
  <main id="main">
    {/*==========================
Services Section
    ============================*/}
    <section id="services" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>Overview Child</h3>
        </header>
        <div className="row">
          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
              <h4 className="title"><a>รักษ์พงศ์ ทอหุล</a></h4>
              <p className="description">เพศ :</p>
              <p className="description">อายุ :</p>
              <p className="description">น้ำหนัก :</p>
              <p className="description">ส่วนสูง :</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-bookmarks-outline" style={{color: '#e9bf06'}} /></div>
              <h4 className="title"><a>รักษ์พงศ์ ทอหุล</a></h4>
              <p className="description">เพศ :</p>
              <p className="description">อายุ :</p>
              <p className="description">น้ำหนัก :</p>
              <p className="description">ส่วนสูง :</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
              <h4 className="title"><a>รักษ์พงศ์ ทอหุล</a></h4>
              <p className="description">เพศ :</p>
              <p className="description">อายุ :</p>
              <p className="description">น้ำหนัก :</p>
              <p className="description">ส่วนสูง :</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-bookmarks-outline" style={{color: '#e9bf06'}} /></div>
              <h4 className="title"><a>รักษ์พงศ์ ทอหุล</a></h4>
              <p className="description">เพศ :</p>
              <p className="description">อายุ :</p>
              <p className="description">น้ำหนัก :</p>
              <p className="description">ส่วนสูง :</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
              <h4 className="title"><a>รักษ์พงศ์ ทอหุล</a></h4>
              <p className="description">เพศ :</p>
              <p className="description">อายุ :</p>
              <p className="description">น้ำหนัก :</p>
              <p className="description">ส่วนสูง :</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
            <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>{/* #services */}
  </main>
  
  <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
</div>

    );
};

export default Index;