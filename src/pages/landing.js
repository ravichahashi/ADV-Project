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
  const [Name, setName] = useState("เด็กชายสุริยา เตชะบุญ");
  return (
    <div>
      <main id="main">
        <section id="your-fam">
          <div className="container">
            <header className="section-header">
              <h3>ครอบครัวของคุณ</h3>
              <p></p>
            </header>
            <div className="row row-eq-height justify-content-center">
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  {/* <i className="fa fa-diamond" /> */}
                  <img src="./suriya.png" />
                  <div className="card-body">
                    <h5 className="card-title"><a href="">{Name}</a></h5>
                    <p className="card-text">4 ขวบ</p>
                    {/* <a href="#" className="readmore">Read more </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team">
          <div className="container">
            <div className="section-header">
              <h3>Team</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 wow fadeInUp">
                <div className="member">
                  <img src="img/team-1.jpg" className="img-fluid" alt />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="member">
                  <img src="img/team-2.jpg" className="img-fluid" alt />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="member">
                  <img src="img/team-3.jpg" className="img-fluid" alt />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="member">
                  <img src="img/team-4.jpg" className="img-fluid" alt />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #team */}


        <section id="why-us" className="wow fadeIn">
          <div className="container">
            <header className="section-header">
              <h3>แนะนำ</h3>
              <p></p>
            </header>
            <div className="row row-eq-height justify-content-center">
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-diamond" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-language" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-object-group" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-diamond" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-diamond" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-diamond" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-diamond" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-diamond" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-diamond" />
                  <div className="card-body">
                    <h5 className="card-title">Name Nursery love love</h5>
                    <p className="card-text">Address 123</p>
                    <p className="card-text">Phone 088-8888888</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
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