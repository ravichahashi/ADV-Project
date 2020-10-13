import React, { useEffect, useState } from "react";
// import { getChildren } from "../../redux/actions/dataActions";

// Redux stuff
import { connect } from "react-redux";

// CSS
import "../../components/NewBiz/lib/bootstrap/css/bootstrap.min.css"
import "../../components/NewBiz/lib/font-awesome/css/font-awesome.min.css"
import "../../components/NewBiz/lib/animate/animate.min.css"
import "../../components/NewBiz/lib/ionicons/css/ionicons.min.css"
import "../../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css"
import "../../components/NewBiz/lib/lightbox/css/lightbox.min.css"
import "../../components/NewBiz/css/style.css"

let start = 2;

const RequestFromParent = (props) => {
    const [numChild, setnumChild] = useState(4);
    const [Parent, setParent] = useState(
        [
            {
                name: "รักษ์พงศ์ ทอหุล",
                email: "Rakpong@gmail.com",
                numberPhone: "0931452587",
                status: "รอการยืนยัน",
            },
            {
                name: "สุริยา เตชะลือ  ",
                email: "Suriya@gmail.com",
                numberPhone: "0931452587",
                status: "รอการยืนยัน",
            },
        ]
    );

    // if (!loading && start === 0) {
    //     start--;
    //     setParent(parent);
    // }
    // if (start > 0) {
    //     start--;
    // }

    let item = [];
    for (let key in Parent) {
        console.log(Parent.length);
        item.push(
            <div
                className="col-md-6 col-lg-6 offset-lg-0.5 wow bounceInUp"
                data-wow-duration="1.4s"
                align="center"
            >
                <div className="box">
                    <table width="100%">
                        <th>
                            <h4 className="title" align="left">
                                <a>&nbsp;&nbsp;{Parent[key].name}</a>
                            </h4>
                        <hr class="new4"></hr>
                        </th>
                        <tr>
                            <td align="center" vertical-align="center">
                                <div className="img-over">
                                    <img src="./user.png" />
                                </div>
                            </td>
                            <td align="left" >
                                <div text-align="left">
                                    <p className="description">อีเมลล์ :{Parent[key].email}</p>
                                    <p className="description">เบอร์โทร :{Parent[key].numberPhone}</p>
                                    <p className="description">สถานะ :{Parent[key].status}</p>
                                </div>
                                <br></br>
                            </td>
                        </tr>
                    </table>
                    <table width="100%">
                        <td width="30%"></td>
                        <td width="80%" align="center">
                        <section id="more">
                        <div class="form">
                            <div align="center">
                                {/* <a href="/assResults"> */}
                                <a href="">
                                    <button type="submit">เพิ่มเติม</button>
                                </a>
                            </div>
                        </div>
                    </section>
                        </td>
                    </table>
                </div>
            </div>
        );
    }

    return (
        <div>
            <main id="main">
                <section id="tap"></section>
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
                            <label className="btn btn-secondary active">
                                <input type="radio" name="options" id="option3" />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้ปกครอง&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id="option4" />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id="option5" />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;กิจกรรม&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                        </div>
                    </table>
                </section>
                <section id="request" className="section-bg">
                    <div className="container">
                        {/* <div className="box" align="center" width="100%"> */}

                        {/* <div className="box"> */}
                        <table width="100%">
                            <th>
                                <h4>คำขอลงทะเบียน</h4>
                            </th>
                        </table>
                        {/* </div> */}
                        <br></br>
                        <div className="row">
                            {item}
                        </div>
                        {/* </div> */}
                    </div>
                </section>
                {/* #services */}
            </main>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
});

const mapDispatchToProps = {
    // getChildren: getChildren,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestFromParent);
