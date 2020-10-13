import React, { useEffect, useState } from "react";
import { getChildren } from "../../redux/actions/dataActions";

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

const RegisterChild = (props) => {
    const { getChildren } = props;
    useEffect(() => {
        getChildren();
    }, [getChildren]);
    const { children, loading } = props.data;

    const [nursery, setNursery] = useState([
        {
            nurseryName: "",
            city: "เชียงใหม่",
            district: "เมือง",
        },
    ]);
    const [numChild, setnumChild] = useState(4);
    const [Child, setChild] = useState(
        [
            {
                name: "รักษ์พงศ์ ทอหุล",
                sex: "ชาย",
                birthDate: { date: "12", month: "02", year: "2541" },
                weigth: 20,
                height: 50,
            },
            {
                name: "สุริยา เตชะลือ  ",
                sex: "หญิง",
                birthDate: { date: "12", month: "02", year: "2541" },
                weigth: 100,
                height: 250,
            },
        ]
    );

    if (!loading && start === 0) {
        start--;
        setChild(children);
    }
    if (start > 0) {
        start--;
    }

    let item = [];
    for (let key in Child) {
        console.log(Child.length);
        item.push(
            <div
                className="col-md-6 col-lg-6 offset-lg-0.5 wow bounceInUp"
                data-wow-duration="1.4s"
                align="center"
            >
                <div className="box">
                    <table width="100%">
                        <tr>
                            <td align="center" vertical-align="center">
                                <input
                                    //   name="pass"
                                    type="checkbox"
                                //   value="pass"
                                //   checked={assessmentData.status === "pass"}
                                //   onChange={handleCheck}
                                />
                            </td>&nbsp;&nbsp;&nbsp;&nbsp;
              <td align="center" vertical-align="center">
                                <div className="img-over">
                                    <a href="/addchild">
                                        <img src="./child.jpg" />
                                    </a>
                                </div>
                            </td>
                            <td align="center" vertical-align="center">
                                <div className="row">
                                    <h4 className="title">
                                        <a>&nbsp;&nbsp;{Child[key].name}</a>
                                    </h4>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="img-overr">
                                        <a href="/editChild">
                                            <img src="./pencil.png" />
                                        </a>
                                    </div>
                                </div>
                                <p className="description">เพศ :{Child[key].sex}</p>
                                <p className="description">
                                    วันเกิด :{Child[key].birthDate.date} /{" "}
                                    {Child[key].birthDate.month} / {Child[key].birthDate.year}
                                </p>
                                <p className="description">น้ำหนัก :{Child[key].weigth}</p>
                                <p className="description">ส่วนสูง :{Child[key].height}</p>
                                <br></br>
                                <section id="more">
                                    <div class="form">
                                        <div align="center">
                                            <a href="/assResults">
                                                {/* <a href={`/assResults/${Child[key].name}`}> */}
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
        );
    }

    return (
        <div>
            <main id="main">
                <section id="regischild" className="section-bg">
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
                        <div className="box" align="center" width="100%">
                            <table width="100%">
                                <tr>
                                    <th text-align="center"><h4>เลือกเด็กที่จะลงทะเบียน</h4></th>
                                </tr>
                            </table>
                            <br></br>
                            <div className="row">
                                {item}
                            </div>
                        </div>
                        <div className="box">
                            <table width="100%">
                                <td width="15%" align="left">
                                    <h4>ค่าใช้จ่ายรวม :</h4>
                                </td>
                                <td width="70%"></td>
                                <td width="20%" align="right">
                                    <h4> บาท</h4>
                                </td>
                            </table>
                        </div>
                        <div className="box">
                        <h4>ข้อตกลง</h4>
                        <p className="description">_______________________________________________________________________________________________________________________</p>
                        <p className="description">_______________________________________________________________________________________________________________________</p>
                        <br></br>
                        <table align="center">
                            <td>
                              <input
                                    //   name="pass"
                                    type="checkbox"
                                //   value="pass"
                                //   checked={assessmentData.status === "pass"}
                                //   onChange={handleCheck}
                                /> 
                            </td>&nbsp;&nbsp;&nbsp;
                            <td>
                                <h5>ยอมรับข้อตกลง</h5>
                            </td>
                        </table>
                        
                        </div>
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
    getChildren: getChildren,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterChild);
