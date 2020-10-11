import React, { useEffect, useState } from "react";
import { addChild } from "../../redux/actions/dataActions";

// Redux stuff
import { connect } from "react-redux";

// CSS
import "../../components/NewBiz/lib/bootstrap/css/bootstrap.min.css";
import "../../components/NewBiz/lib/font-awesome/css/font-awesome.min.css";
import "../../components/NewBiz/lib/animate/animate.min.css";
import "../../components/NewBiz/lib/ionicons/css/ionicons.min.css";
import "../../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../components/NewBiz/lib/lightbox/css/lightbox.min.css";
import "../../components/NewBiz/css/style.css";

const AddChild = (props) => {
    const [child, setChild] = useState({
        Name: "",
        nickname: "",
        sex: "",
        year: "",
        month: "",
        date: "",
        weigth: "",
        height: "",
    });

    const handleSubmit = (event) => {
        const newChild = {
            Name: child.Name,
            nickname: child.nickname,
            sex: child.sex,
            birthDate: {
                year: child.year,
                month: child.month,
                date: child.date,
            },
            weigth: child.weigth,
            height: child.height,
        };
        event.preventDefault();
        props.addChild(newChild, props.history);
    };
    const handleChange = (event) => {
        setChild({
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div>
            <main id="main">
                <section id="contact" className="section-bg">
                    <div className="container">
                        <div className="box">
                            <div>
                                <table>
                                    <tr>
                                        <td>
                                            <div className="img-size">
                                                <img src="./suriya.png" />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form">
                                                <div class="text-center">
                                                    <button type="submit" title="Send Message">
                                                        เลือกรูป
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <br></br>
                            <form>
                                <div class="row">
                                    <div class="col">
                                        <table width="70%" align="center">
                                            <td width="20%"><label>ชื่อ</label></td>
                                            <td width="80%"><input type="text" class="form-control" placeholder=""></input></td>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <table width="70%" align="center">
                                            <td width="20%"><label>ชื่อเล่น</label></td>
                                            <td width="80%"><input type="text" class="form-control" placeholder=""></input></td>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <table width="70%" align="center">
                                            <td width="20%"><label>เพศ</label></td>
                                            <td width="80%"><select class="custom-select">
                                                <option selected></option>
                                                <option value="ชาย">ชาย</option>
                                                <option value="หญิง">หญิง</option>
                                            </select></td>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <table width="70%" align="center">
                                            <td width="20%"><label>วันเกิด</label></td>
                                            <td><input type="text" class="form-control" placeholder="วัน"></input></td>
                                            <td><input type="text" class="form-control" placeholder="เดือน"></input></td>
                                            <td><input type="text" class="form-control" placeholder="ปี"></input></td>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <table width="70%" align="center">
                                            <td width="20%"><label>ส่วนสูง</label></td>
                                            <td width="70%"><input type="text" class="form-control" placeholder=""></input></td>
                                            <td width="10%"><label>เซนติเมตร</label></td>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <table width="70%" align="center">
                                            <td width="20%"><label>น้ำหนัก</label></td>
                                            <td width="70%"><input type="text" class="form-control" placeholder=""></input></td>
                                            <td width="10%"><label>กิโลกรัม</label></td>
                                        </table>
                                    </div>
                                </div>
                                <div className="row" class="text-right">
                                    <p>

                                        <button
                                            type="submit"
                                            title="Send Message"
                                            onClick={handleSubmit}
                                        >
                                            <a href="/childmanager">เพิ่มเด็ก</a>
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* #services */}
            </main>
        </div>
    );
};

const mapStateToProps = (state) => ({
    UI: state.UI,
});

const mapDispatchToProps = {
    addChild: addChild,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddChild);
