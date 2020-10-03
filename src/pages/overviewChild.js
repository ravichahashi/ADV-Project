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
  const [nursery, setNursery] = useState([
    {
      nurseryName: "",
      city: "เชียงใหม่",
      district: "เมือง"
    }
  ]);
  const [Name, setName] = useState("รักษ์พงศ์ ทอหุล");
  return (
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
              <div className="container" align="center">
                <div className="col-md-11 col-lg-ุ5">
                  <div className="box">
                    <div className="row">
                      <h4 className="title">Nursery ใกล้บ้าน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                      <h4 className="title">จังหวัด<a>&nbsp;</a></h4>
                      <option></option>
                      <form>
                        <select name="position">
                          <option></option><option value="city">{nursery[0].city}</option><option value="Accounting">Accounting</option>
                        </select>&nbsp;&nbsp;&nbsp;&nbsp;
                      </form>
                      <h4 className="title">อำเภอ&nbsp;</h4>
                      <option></option>
                      <form>
                        <select name="position">
                          <option></option><option value="district">{nursery[0].district}</option><option value="Accounting">Accounting</option>
                        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </form>
                      <section><option></option></section>
                      <section id="search">
                        <div class="form">
                          {/* <form action="" method="post" role="form" class="contactForm"> */}
                          <div class="text-center"><button type="submit" title="Search">ค้นหา</button></div>
                          {/* </form> */}
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <header className="section-header">
              <h3>ครอบครัวของฉัน</h3>
              <p></p>
            </header>
            <div className="row">
              <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-analytics-outline" style={{ color: '#ff689b' }} /></div>
                  <h4 className="title"><a>{Name}</a></h4>
                  <p className="description">เพศ :</p>
                  <p className="description">อายุ :</p>
                  <p className="description">น้ำหนัก :</p>
                  <p className="description">ส่วนสูง :</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-bookmarks-outline" style={{ color: '#e9bf06' }} /></div>
                  <h4 className="title"><a>รักษ์พงศ์ ทอหุล</a></h4>
                  <p className="description">เพศ :</p>
                  <p className="description">อายุ :</p>
                  <p className="description">น้ำหนัก :</p>
                  <p className="description">ส่วนสูง :</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-analytics-outline" style={{ color: '#ff689b' }} /></div>
                  <h4 className="title"><a>รักษ์พงศ์ ทอหุล</a></h4>
                  <p className="description">เพศ :</p>
                  <p className="description">อายุ :</p>
                  <p className="description">น้ำหนัก :</p>
                  <p className="description">ส่วนสูง :</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-bookmarks-outline" style={{ color: '#e9bf06' }} /></div>
                  <h4 className="title"><a>รักษ์พงศ์ ทอหุล</a></h4>
                  <p className="description">เพศ :</p>
                  <p className="description">อายุ :</p>
                  <p className="description">น้ำหนัก :</p>
                  <p className="description">ส่วนสูง :</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="img-size"><a href="/addchild"><img src="./add.png" /></a></div>&nbsp;
                  <h5 align="center"><a href="/addchild">Add Child</a></h5>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #services */}
      </main>

    </div>

  );
};

export default Index;