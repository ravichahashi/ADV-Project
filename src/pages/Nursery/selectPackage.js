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
        <section id="package" className="wow fadeIn">
          {/* <div className="container"> */}
          <header className="section-header">
            <h3>Choose Packages</h3>
            <p></p>
          </header>
          <div className="row row-eq-height justify-content-center">
            <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <div className="card-body">
                  <div className="box-s">
                    <h5 className="card-title">Sliver</h5>
                  </div>
                  <br></br>
                  <ul class="b">
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Coca Cola</li>
                    <li>Honey</li>
                    <li>Green Tea</li>
                    <li>Suriya</li>
                    <li>Rakpong</li>
                    <li>Ravicha</li>
                    <li>Radit</li>
                  </ul>
                  <div class="text-center"><button type="submit" title="Buy">Buy</button></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <div className="card-body">
                  <div className="box-g">
                    <h5 className="card-title">Gold</h5>
                  </div>
                  <br></br>
                  <ul class="b">
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Coca Cola</li>
                    <li>Honey</li>
                    <li>Green Tea</li>
                    <li>Suriya</li>
                    <li>Rakpong</li>
                    <li>Ravicha</li>
                    <li>Radit</li>
                  </ul>
                  <div class="text-center"><button type="submit" title="Buy">Buy</button></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <div className="card-body">
                  <div className="box-p">
                    <h5 className="card-title">Platinum</h5>
                  </div>
                  <br></br>
                  <ul class="b">
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Coca Cola</li>
                    <li>Honey</li>
                    <li>Green Tea</li>
                    <li>Suriya</li>
                    <li>Rakpong</li>
                    <li>Ravicha</li>
                    <li>Radit</li>
                  </ul>
                  <div class="text-center"><button type="submit" title="Buy">Buy</button></div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </main>
    </div>


  );
};

export default Index;
