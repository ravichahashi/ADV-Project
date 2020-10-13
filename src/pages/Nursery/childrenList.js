import React from 'react';
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
import { render } from 'react-dom';
import { colors } from '@material-ui/core';

const ChildrenList = (props) =>{

    return(
        <div>
      <main id="main">
        <section id="services" className="section-bg">

        <section id="tab" className="section-bg-white">
          <table width="100%">
            <div className="btn-group btn-group-toggle btn-group-lg" data-toggle="buttons">
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option1" defaultChecked /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;นักเรียน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ครูพี่เลี้ยง&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option3" /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้ปกครอง&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option4"/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option5" /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;กิจกรรม&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
            </div>
          </table>
        </section>

          <div className="container">
            <div className="container" align="center">
              <div className="col-md-11 col-lg-ุ5">
                <div className="box">
                    <div className="row">
                    <div class="form-group row">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">ค้นหา</label>
                            <div class="col-sm-10">
                            <input type="email" class="form-control" id="colFormLabel" placeholder="ค้นหาจากรายชื่อ"></input>
                            </div>
                    </div>
                    </div>

                    <div className="row" style={{textAlign: 'center'}}>
                        <a>______________________________________________________________________________________________________</a>
                    </div>

                    <div className="row">
                        <div className="col text-success">
                            <a>ปกติ</a>
                        </div>
                        <div className="col text-warning">
                            <a>พัฒนาการบางอย่างต่ำกว่าเกณฑ์</a>
                        </div>
                        <div className="col text-danger">
                            <a>พัฒนาการต่ำกว่าเกณฑ์</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-md-6 col-lg-6 offset-lg-0.5 wow bounceInUp" data-wow-duration="1.4s" align="center">
                <div className="box-red">
                <table>
                    <tr>
                        <td>
                            <div className="img-over">
                                <a href="">
                                    <img src="./child.jpg" />
                                </a>
                            </div>
                        </td>
                    <td>
                <div className="row">
                    <h4 className="title">
                        <a>&nbsp;&nbsp;รักษ์พงศ์ ทอหุล</a>
                    </h4>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="img-overr">
                        {/* <a href="/editChild"> */}
                        <img src="./pencil.png" />
                        {/* </a> */}
                    </div>
                </div>
                <p className="description">เพศ : ชาย</p>
                <p className="description">วันเกิด :12 / 02 / 2542</p>
                <p className="description">น้ำหนัก : 50</p>
                <p className="description">ส่วนสูง : 170</p>
                <br></br>
                <section id="more">
                    <div class="form">
                        <div align="center">
                        {/* <a href="/assResults"> */}
                            <a href={`/assResults?รักษ์พงศ์%20ทอหุล`}>
                            <button type="submit">เพิ่มเติม</button>
                            </a>
                        </div>
                    </div>
                </section>
                </td>
            </tr>
            </table>
            </div>
        </div>

        <div className="col-md-6 col-lg-6 offset-lg-0.5 wow bounceInUp" data-wow-duration="1.4s" align="center">
                <div className="box-green">
                <table>
                    <tr>
                        <td>
                            <div className="img-over">
                                <a href="">
                                    <img src="./child.jpg" />
                                </a>
                            </div>
                        </td>
                    <td>
                <div className="row">
                    <h4 className="title">
                        <a>&nbsp;&nbsp;รักษ์พงศ์ ทอหุล</a>
                    </h4>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="img-overr">
                        {/* <a href="/editChild"> */}
                        <img src="./pencil.png" />
                        {/* </a> */}
                    </div>
                </div>
                <p className="description">เพศ : ชาย</p>
                <p className="description">วันเกิด :12 / 02 / 2542</p>
                <p className="description">น้ำหนัก : 50</p>
                <p className="description">ส่วนสูง : 170</p>
                <br></br>
                <section id="more">
                    <div class="form">
                        <div align="center">
                        {/* <a href="/assResults"> */}
                            <a href={`/assResults?รักษ์พงศ์%20ทอหุล`}>
                            <button type="submit">เพิ่มเติม</button>
                            </a>
                        </div>
                    </div>
                </section>
                </td>
            </tr>
            </table>
            </div>
        </div>

        <div className="col-md-6 col-lg-6 offset-lg-0.5 wow bounceInUp" data-wow-duration="1.4s" align="center">
                <div className="box-yellow">
                <table>
                    <tr>
                        <td>
                            <div className="img-over">
                                <a href="">
                                    <img src="./child.jpg" />
                                </a>
                            </div>
                        </td>
                    <td>
                <div className="row">
                    <h4 className="title">
                        <a>&nbsp;&nbsp;รักษ์พงศ์ ทอหุล</a>
                    </h4>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="img-overr">
                        {/* <a href="/editChild"> */}
                        <img src="./pencil.png" />
                        {/* </a> */}
                    </div>
                </div>
                <p className="description">เพศ : ชาย</p>
                <p className="description">วันเกิด :12 / 02 / 2542</p>
                <p className="description">น้ำหนัก : 50</p>
                <p className="description">ส่วนสูง : 170</p>
                <br></br>
                <section id="more">
                    <div class="form">
                        <div align="center">
                        {/* <a href="/assResults"> */}
                            <a href={`/assResults?รักษ์พงศ์%20ทอหุล`}>
                            <button type="submit">เพิ่มเติม</button>
                            </a>
                        </div>
                    </div>
                </section>
                </td>
            </tr>
            </table>
            </div>
        </div>

        <div className="col-md-6 col-lg-6 offset-lg-0.5 wow bounceInUp" data-wow-duration="1.4s" align="center">
                <div className="box-green">
                <table>
                    <tr>
                        <td>
                            <div className="img-over">
                                <a href="">
                                    <img src="./child.jpg" />
                                </a>
                            </div>
                        </td>
                    <td>
                <div className="row">
                    <h4 className="title">
                        <a>&nbsp;&nbsp;รักษ์พงศ์ ทอหุล</a>
                    </h4>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="img-overr">
                        {/* <a href="/editChild"> */}
                        <img src="./pencil.png" />
                        {/* </a> */}
                    </div>
                </div>
                <p className="description">เพศ : ชาย</p>
                <p className="description">วันเกิด :12 / 02 / 2542</p>
                <p className="description">น้ำหนัก : 50</p>
                <p className="description">ส่วนสูง : 170</p>
                <br></br>
                <section id="more">
                    <div class="form">
                        <div align="center">
                        {/* <a href="/assResults"> */}
                            <a href={`/assResults?รักษ์พงศ์%20ทอหุล`}>
                            <button type="submit">เพิ่มเติม</button>
                            </a>
                        </div>
                    </div>
                </section>
                </td>
            </tr>
            </table>
            </div>
        </div>

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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenList);