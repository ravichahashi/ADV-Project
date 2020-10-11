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
                      <td width="20%">
                        <label>ชื่อ</label>
                      </td>
                      <td width="80%">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        ></input>
                      </td>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <table width="70%" align="center">
                      <td>
                        <label>ชื่อเล่น</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        ></input>
                      </td>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <table width="70%" align="center">
                      <td>
                        <label>เพศ</label>
                      </td>
                      <td>
                        <select class="custom-select">
                          <option selected></option>
                          <option value="ชาย">ชาย</option>
                          <option value="หญิง">หญิง</option>
                        </select>
                      </td>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <table width="70%" align="center">
                      <td>
                        <label>วันเกิด</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        ></input>
                      </td>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <table width="70%" align="center">
                      <td>
                        <label>ส่วนสูง</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        ></input>
                      </td>
                      <td>
                        <label>เซนติเมตร</label>
                      </td>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <table width="70%" align="center">
                      <td>
                        <label>น้ำหนัก</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                        ></input>
                      </td>
                      <td>
                        <label>กิโลกรัม</label>
                      </td>
                    </table>
                  </div>
                </div>

                {/* <div class="row">
                                    <div class="col">
                                        <label>ชื่อเล่น</label>
                                        <input type="text" class="form-control" placeholder=""></input>
                                    </div>
                                    <div class="col">
                                        <label>เพศ</label>
                                        <select class="custom-select">
                                            <option selected></option>
                                            <option value="ชาย">ชาย</option>
                                            <option value="หญิง">หญิง</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label>วันเกิด</label>
                                        <input type="text" class="form-control" placeholder=""></input>
                                    </div>
                                </div>

                                <br />
                                <div class="row">
                                    <div class="col">
                                        <label>น้ำหนัก</label>
                                        <input type="text" class="form-control" placeholder=""></input>
                                    </div>
                                    <div class="col">
                                        <label>ส่วนสูง</label>
                                        <input type="text" class="form-control" placeholder=""></input>
                                    </div>
                                </div> */}
              </form>
              {/* <div class="form">
                                <div id="sendmessage">
                                    Your message has been sent. Thank you!
                </div>
                                <div id="errormessage"></div>
                                <form action="" method="post" role="form" class="contactForm">
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <table>
                                                <td><label>ชื่อ</label></td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        class="form-control"
                                                        id="name"
                                                        placeholder=""
                                                        data-rule="minlen:4"
                                                        data-msg="Please enter at least 4 chars"
                                                        onChange={handleChange}
                                                    />
                                                    <div class="validation"></div>
                                                </td>
                                            </table>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input
                                                type="text"
                                                name="nickname"
                                                class="form-control"
                                                id="name"
                                                placeholder="Nickname"
                                                data-rule="minlen:4"
                                                data-msg="Please enter at least 4 chars"
                                                onChange={handleChange}
                                            />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input
                                                type="text"
                                                name="sex"
                                                class="form-control"
                                                id="name"
                                                placeholder="Sex"
                                                data-rule="minlen:4"
                                                data-msg="Please enter at least 4 chars"
                                                onChange={handleChange}
                                            />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input
                                                type="text"
                                                name="birthDate"
                                                class="form-control"
                                                id="name"
                                                placeholder="Date of Birth"
                                                data-rule="minlen:4"
                                                data-msg="Please enter at least 4 chars"
                                                onChange={handleChange}
                                            />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="religion"
                                                id="email"
                                                placeholder="Religion"
                                                data-rule="email"
                                                data-msg="Please enter a valid email"
                                                onChange={handleChange}
                                            />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input
                                                type="number"
                                                class="form-control"
                                                name="weigth"
                                                id="email"
                                                placeholder="Weigth"
                                                data-rule="email"
                                                data-msg="Please enter a valid email"
                                                onChange={handleChange}
                                            />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input
                                                type="number"
                                                class="form-control"
                                                name="height"
                                                id="email"
                                                placeholder="Height"
                                                data-rule="email"
                                                data-msg="Please enter a valid email"
                                                onChange={handleChange}
                                            />
                                            <div class="validation"></div>
                                        </div>
                                    </div>
                                    <div className="row" class="text-right">
                                        <p>
                                            <button type="submit" title="Send Message">
                                                <a href="/childmanager">Cancel</a>
                                            </button>
                                            &nbsp;&nbsp;&nbsp;
                      <button
                                                type="submit"
                                                title="Send Message"
                                                onClick={handleSubmit}
                                            >
                                                <a href="/childmanager">Add Child</a>
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            </div> */}
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
