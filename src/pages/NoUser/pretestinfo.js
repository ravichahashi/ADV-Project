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
  const [nursery, setNursery] = useState([
    {
      nurseryName: "",
      city: "เชียงใหม่",
      district: "เมือง"
    }
  ]);
  return (
    <div>
      <main id="main">
        {/*==========================
Services Section
    ============================*/}
        <section id="servicesNew" className="section-bg">
          <div className="container" align="center">
            <div className="col-md-10 col-lg-ุ5">
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
        </section>

        <section id="why-uss" className="section-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-ุ6 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-paper-outline" style={{ color: '#3fcdc7' }} /></div>
                  <h4 className="title"><a href="">ลงทะเบียน Nursery</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>


  );
};

export default Index;
