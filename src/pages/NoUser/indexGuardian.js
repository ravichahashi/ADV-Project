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
        {/*==========================
Services Section
    ============================*/}
        <section id="services" className="section-bg">
          <div className="container" align="center">
            <div className="col-md-10 col-lg-ุ5">
              <div className="box">
                <div className="row">
                  <h4 className="title">Nursery ใกล้บ้าน</h4>
                  <h4 className="title">จังหวัด<a>&nbsp;</a></h4>
                  <option></option>
                  <form>
                    <select name="position">
                      <option></option><option value="System Engineer ">System Engineer </option><option value="Accounting">Accounting</option>
                    </select>
                  </form>
                  <h4 className="title">อำเภอ&nbsp;</h4>
                  <option></option>
                  <form>
                    <select name="position">
                      <option></option><option value="System Engineer ">System Engineer </option><option value="Accounting">Accounting</option>
                    </select>
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
        </section>{/* #services */}
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>อยากรู้พัฒนาการของลูกคุณหรือเปล่า?</h3>
              <h3>ลองประเมินด้วยตนเองดูสิ</h3>
            </header>
            <div className="row">
              <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-analytics-outline" style={{ color: '#ff689b' }} /></div>
                  <h4 className="title"><a href="/assessment">ทดลองทำการประเมิน</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-bookmarks-outline" style={{ color: '#e9bf06' }} /></div>
                  <h4 className="title"><a href="">สมัครสมาชิก</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #services */}

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
        </section>{/* #services */}

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
