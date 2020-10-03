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
  const [Name, setName] = useState("เด็กชายสุริยา เตชะบุญ");
  return (
    <div>
      <main id="main">
        <section id="your-fam">
          <div className="container" align-text="center">
              <header className="section-header">
                <h3><a href="/childmanager">ครอบครัวของคุณ</a></h3>
                <section id="more">
                <div class="form">
                  <div align="center"><button type="submit" title="More"><a href="/childmanager">เพิ่มเติม</a></button></div>
                </div>
              </section>
              <p></p>
              </header>
            <div className="row row-eq-height justify-content-center">
              <div className="col-lg-3.5 mb-4">
                <div className="card wow bounceInUp">
                  {/* <i className="fa fa-diamond" /> */}
                  <div className="img-size"><img src="./suriya.png" /></div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="/childinfo">{Name}</a></h5>
                    <p className="card-text">4 ขวบ</p>
                    {/* <a href="#" className="readmore">Read more </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="testimonials" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item">
                    <img src="./suriya.png" className="testimonial-img" alt />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img src="img/testimonial-2.jpg" className="testimonial-img" alt /> 
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img src="img/testimonial-3.jpg" className="testimonial-img" alt />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                   </p>
                  </div>
                  <div className="testimonial-item">
                    <img src="img/testimonial-4.jpg" className="testimonial-img" alt />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img src="img/testimonial-5.jpg" className="testimonial-img" alt />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                   </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>#testimonials */}

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