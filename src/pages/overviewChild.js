import React, { useEffect, useState } from "react";

// Redux stuff
import { connect } from "react-redux";

// CSS
import "../components/NewBiz/lib/bootstrap/css/bootstrap.min.css";
import "../components/NewBiz/lib/font-awesome/css/font-awesome.min.css";
import "../components/NewBiz/lib/animate/animate.min.css";
import "../components/NewBiz/lib/ionicons/css/ionicons.min.css";
import "../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css";
import "../components/NewBiz/lib/lightbox/css/lightbox.min.css";
import "../components/NewBiz/css/style.css";

const Index = () => {
  const [nursery, setNursery] = useState([
    {
      nurseryName: "",
      city: "เชียงใหม่",
      district: "เมือง",
    },
  ]);
  const [numChild, setnumChild] = useState(4);
  const [Child, setChild] = useState([
    { name: "รักษ์พงศ์ ทอหุล", gender: "ชาย", age: "12/02/2541", weight: 20, high: 50 },
    { name: "suriya ", gender: "หญิง", age: "20/05/2560", weight: 100, high: 250 },
  ]);

  const item = [];
  for (const key in Child) {
    console.log(Child.length);
    item.push(
      <div
        className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
        data-wow-duration="1.4s"
        align="center"
      >
        <div className="box">
          <table>
            <tr>
              <td>
                <div className="img-over">
                  <a href="/addchild">
                    <img src="./suriya.png" />
                  </a>
                </div>
              </td>
              <td>
                <div className="row">
                  <h4 className="title">
                    <a>&nbsp;&nbsp;{Child[key].name}</a>
                  </h4>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="img-overr">
                    <a href="/editChild">
                      <img src="./pencil.png" />
                    </a>
                  </div>
                </div>
                <p className="description">เพศ :{Child[key].gender}</p>
                <p className="description">อายุ :{Child[key].age}</p>
                <p className="description">น้ำหนัก :{Child[key].weight}</p>
                <p className="description">ส่วนสูง :{Child[key].high}</p>
                <br></br>
                <section id="more">
                  <div class="form">
                    <div align="center">
                      <button type="submit" title="More">
                        <a href="/assResults">เพิ่มเติม</a>
                      </button>
                    </div>
                  </div>
                </section>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

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
        <section id="services" className="section-bg">
          <div className="container">
            <div className="container" align="center">
              <div className="col-md-11 col-lg-ุ5">
                <div className="box">
                  <div className="row">
                    <h4 className="title">
                      Nursery ใกล้บ้าน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h4>
                    <h4 className="title">
                      จังหวัด<a>&nbsp;</a>
                    </h4>
                    <option></option>
                    <form>
                      <select name="position">
                        <option></option>
                        <option value="city">{nursery[0].city}</option>
                        <option value="Accounting">Accounting</option>
                      </select>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </form>
                    <h4 className="title">อำเภอ&nbsp;</h4>
                    <option></option>
                    <form>
                      <select name="position">
                        <option></option>
                        <option value="district">{nursery[0].district}</option>
                        <option value="Accounting">Accounting</option>
                      </select>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </form>
                    <section>
                      <option></option>
                    </section>
                    <section id="search">
                      <div class="form">
                        {/* <form action="" method="post" role="form" class="contactForm"> */}
                        <div class="text-center">
                          <button type="submit" title="Search">
                            ค้นหา
                          </button>
                        </div>
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
              {item}
              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="img-size">
                    <a href="/addchild">
                      <img src="./add.png" />
                    </a>
                  </div>
                  &nbsp;
                  <h5 align="center">
                    <a href="/addchild">Add Child</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #services */}
      </main>
    </div>
  );
};

export default Index;
