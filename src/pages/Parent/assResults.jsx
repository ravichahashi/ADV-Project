import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import { connect } from "react-redux";
import { getChild } from "../../redux/actions/dataActions";

const childName = window.location.search.substring(1);
const click = (e) => {
  console.log(e);
};
let start = 3;

const AssResults = (props) => {
  const { getChild } = props;
  useEffect(() => {
    getChild(childName);
  }, [getChild]);
  const resChild = props.data.child;
  const loading = props.data.loading;

  const [child, setChild] = useState({
    name: "xxxxx xxxxx",
    month: 0,
    nickname: "xxxxx",
    birthDate: {
      date: 0,
      month: 0,
      year: 0,
    },
    sex: "xxx",
    weigth: 0,
    height: 0,
    nurseryName: "xxxxx",
    score: {
      DSPM: {
        parent: {
          GM: 0,
          FM: 0,
          RL: 0,
          EL: 0,
          PS: 0,
        },
        nursery: {
          GM: 0,
          FM: 0,
          RL: 0,
          EL: 0,
          PS: 0,
        },
      },
    },
  });

  const DSPM_data = [
    {
      data: {
        GM: child.score.DSPM.parent.GM,
        FM: child.score.DSPM.parent.FM,
        RL: child.score.DSPM.parent.RL,
        EL: child.score.DSPM.parent.EL,
        PS: child.score.DSPM.parent.PS,
      },
      meta: { color: "blue" },
    },
    {
      data: {
        GM: child.score.DSPM.nursery.GM,
        FM: child.score.DSPM.nursery.FM,
        RL: child.score.DSPM.nursery.RL,
        EL: child.score.DSPM.nursery.EL,
        PS: child.score.DSPM.nursery.PS,
      },
      meta: { color: "red" },
    },
  ];

  const A49_data = [
    {
      data: {
        GM: 0.84,
        FM: 0.8,
        UL: 0.67,
        PS: 0.8,
      },
      meta: { color: "blue" },
    },
    {
      data: {
        GM: 0.9,
        FM: 0.6,
        UL: 0.7,
        PS: 0.75,
      },
      meta: { color: "red" },
    },
  ];

  const DSPM_captions = {
    // columns
    GM: "Gross Motor",
    FM: "Fine Motor",
    RL: "Receptive Language",
    EL: "Expressive Language",
    PS: "Personal and Social",
  };

  const A49_captions = {
    // columns
    GM: "Gross Motor",
    FM: "Fine Motor",
    UL: "Using Language",
    PS: "Personal and Social",
  };

  const [isParent, setParent] = useState(false);
  const check = {
    islow_h: false,
    ismedium_h: true,
    islow_w: false,
    ismedium_w: true,
    islow_t: false,
    ismedium_t: true,
  };
  const calMonth = (year, month) => {
    return (
      (new Date().getFullYear() - year) * 12 +
      (new Date().getMonth() + 1 - month)
    );
  };
  const calWeigth = (age, weigth) => {
    if (age <= 4 && weigth < 2 + age * 0.75) {
      // set is low
      check.islow_w = true;
      check.ismedium_w = false;
    } else if (age <= 4 && weigth > 4 + age * 0.75) {
      // set is High
      check.islow_w = false;
      check.ismedium_w = false;
    }
    if (age <= 12 && weigth < 4.5 + (age - 4) * 0.375) {
      // set is low
      check.islow_w = true;
      check.ismedium_w = false;
    } else if (age <= 12 && weigth > 7.5 + (age - 4) * 0.375) {
      // set is High
      check.islow_w = false;
      check.ismedium_w = false;
    }
    if (age > 12 && weigth < 5 + age * 0.167) {
      // set is low
      check.islow_w = true;
      check.ismedium_w = false;
    } else if (age > 12 && weigth > 11 + age * 0.167) {
      // set is High
      check.islow_w = false;
      check.ismedium_w = false;
    }
  };

  const calHeight = (age, height) => {
    if (age <= 4 && height < 46 + age * 2.5) {
      // set is low
      check.islow_h = true;
      check.ismedium_h = false;
    } else if (age <= 4 && height > 54 + age * 2.5) {
      // set is High
      check.islow_h = false;
      check.ismedium_h = false;
    }
    if (age <= 12 && height < 55 + (age - 4) * 1.5) {
      // set is low
      check.islow_h = true;
      check.ismedium_h = false;
    } else if (age <= 12 && height > 65 + (age - 4) * 1.5) {
      // set is High
      check.islow_h = false;
      check.ismedium_h = false;
    }
    if (age > 4 && height < 70 + age * 0.5) {
      // set is low
      check.islow_h = true;
      check.ismedium_h = false;
    } else if (age > 4 && height > 80 + age * 0.5) {
      // set is High
      check.islow_h = false;
      check.ismedium_h = false;
    }
  };
  // call calHeight and calWeigth before call calTotal
  const calTotal = () => {
    if (
      check.islow_h == true &&
      check.ismedium_h == false &&
      check.islow_w == true &&
      check.ismedium_w == false
    ) {
      check.islow_t = true;
      check.ismedium_t = false;
    } else if (
      check.islow_h == false &&
      check.ismedium_h == false &&
      check.islow_w == false &&
      check.ismedium_w == false
    ) {
      check.islow_t = false;
      check.ismedium_t = false;
    }
  };

  if (start === 1) {
    setChild({
      ...resChild,
      month: calMonth(resChild.birthDate.year, resChild.birthDate.month),
    });
  } else if (start === 0) {
    calWeigth(child.month, child.weigth);
    calHeight(child.month, child.height);
    calTotal();
    start--;
  }
  if (start > 0) {
    start--;
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>Loading...
      </div>
    );
  }

  return (
    <div>
      <section id="assResults" className="section-bg">
        <section id="services" className="section-bg">
          <div className="container" align="center">
            <div className="col-md-10 col-lg-ุ5">
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
                      <option value="city">อ.เมือง</option>
                      <option value="Accounting">Accounting</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </form>
                  <h4 className="title">อำเภอ&nbsp;</h4>
                  <option></option>
                  <form>
                    <select name="position">
                      <option></option>
                      <option value="district">เชียงใหม่</option>
                      <option value="Accounting">Accounting</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </form>
                  <section>
                    <option></option>
                  </section>
                  <section id="search">
                    <div class="form">
                      <div class="text-center">
                        <a href="/advertise">
                          <button type="submit" title="Search">
                            ค้นหา
                          </button>
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 col-lg-ุ6 offset-lg-1 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <section id="goback">
                <div class="form">
                  <div>
                    <button type="submit" title="Go back">
                      <a href="/childmanager">ย้อนกลับ</a>
                    </button>
                  </div>
                </div>
              </section>
              <br></br>
              <div className="box">
                <div className="img-sizee">
                  <a href="/editChild">
                    <img src="./pencil.png" />
                  </a>
                </div>
                <table>
                  <tr>
                    <td>
                      <div className="img-size">
                        <img src="./child.jpg" />
                      </div>
                      &nbsp;
                    </td>
                    <td>
                      <header className="section-content">
                        <h3>ผลการประเมิน</h3>
                        <h5>
                          ชื่อ: {child.name}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          ชื่อเล่น: {child.nickname}
                        </h5>
                        <h5>
                          เพศ: {child.gender}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h5>
                        <h5>
                          วันเกิด :{child.birthDate.date} /{" "}
                          {child.birthDate.month} / {child.birthDate.year}
                        </h5>
                        <h5>
                          อายุ: {child.month}
                          &nbsp;ปี&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h5>
                        <h5>
                          เพศ: {child.sex}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          น้ำหนัก: {child.weigth}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          ส่วนสูง: {child.height}
                        </h5>
                        <h5>Nursery: {child.nurseryName}</h5>
                      </header>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="box">
                <table width="100%">
                  <tr>
                    <td width="30%" align="center">
                      <tr>
                        <h3>น้ำหนัก : </h3>
                      </tr>
                      <tr>
                        <div
                          className={`${
                            check.islow_w
                              ? `box-low`
                              : check.ismedium_w
                              ? `box-medium`
                              : `box-high`
                          }`}
                        >
                          {`${
                            check.islow_w
                              ? `ต่ำกว่าเกณฑ์`
                              : check.ismedium_w
                              ? `ตามเกณฑ์`
                              : `สูงกว่าเกณฑ์`
                          }`}
                        </div>
                      </tr>
                    </td>
                    <td width="30%" align="center">
                      <tr>
                        <h3>ส่วนสูง : </h3>
                      </tr>
                      <tr>
                        <div
                          className={`${
                            check.islow_h
                              ? `box-low`
                              : check.ismedium_h
                              ? `box-medium`
                              : `box-high`
                          }`}
                        >
                          {`${
                            check.islow_h
                              ? `ต่ำกว่าเกณฑ์`
                              : check.ismedium_h
                              ? `ตามเกณฑ์`
                              : `สูงกว่าเกณฑ์`
                          }`}
                        </div>
                      </tr>
                    </td>
                    <td width="30%" align="center">
                      <tr>
                        <h3>โดยรวม : </h3>
                      </tr>
                      <tr>
                        <div
                          className={`${
                            check.islow_t
                              ? `box-low`
                              : check.ismedium_t
                              ? `box-medium`
                              : `box-high`
                          }`}
                        >
                          {`${
                            check.islow_t
                              ? `ต่ำกว่าเกณฑ์`
                              : check.ismedium_t
                              ? `ตามเกณฑ์`
                              : `สูงกว่าเกณฑ์`
                          }`}
                        </div>
                      </tr>
                    </td>
                  </tr>
                </table>
              </div>
              <table>
                <tr>
                  <td>
                    <div className="box-n">
                      <div className="row wow fadeInUp">
                        <div className="col-lg-6">
                          <div className="map mb-4 mb-lg-0">
                            <div className="row">
                              <div
                                className="col-sm"
                                style={{ paddingRight: 0 }}
                              >
                                {" "}
                                <div className="card text-center bg-info text-white">
                                  Parent
                                </div>
                                <br></br>
                              </div>
                              <div className="col-sm" style={{ padding: 0 }}>
                                {" "}
                                <div className="card text-center bg-danger text-white">
                                  Nursery
                                </div>
                              </div>
                            </div>
                            <table>
                              <tr>
                                <td>
                                  <div className="box">
                                    <h3>DSPM</h3>
                                    <RadarChart
                                      size={430}
                                      captions={DSPM_captions}
                                      data={DSPM_data}
                                    />
                                    <div className="col-lg-6">
                                      <div className="container">
                                        <div className="row about-container">
                                          <a href={`/assessment?${child.name}`}>
                                            <button
                                              onClick={() => click(10)}
                                              className="btn btn-info btn-lg"
                                            >
                                              ทำแบบประเมิน
                                            </button>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="box">
                                    <h3>อนามัย 49</h3>
                                    <RadarChart
                                      size={430}
                                      captions={A49_captions}
                                      data={A49_data}
                                    />
                                    <div className="col-lg-6">
                                      <div className="container">
                                        <div className="row about-container">
                                          <button
                                            onClick={() => click(10)}
                                            className="btn btn-info btn-lg"
                                          >
                                            ทำแบบประเมิน
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  getChild: getChild,
};

export default connect(mapStateToProps, mapDispatchToProps)(AssResults);
