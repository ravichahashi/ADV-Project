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
let start = 2;

const AssResults = (props) => {
  const { getChild } = props;
  useEffect(() => {
    getChild(childName);
  }, [getChild]);
  const resChild = props.data.child;
  const loading = props.data.loading;

  const [child, setchild] = useState({
    name: "xxxxx xxxxx",
    age: "999",
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
  if (!loading && start === 0) {
    start--;
    setchild(resChild);
  }
  if (start > 0) {
    start--;
  }

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

  return (
    <div>
      <section id="assResults" className="section-bg">
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
                        <a href="">
                          <img src="./suriya.png" />
                        </a>
                      </div>
                      &nbsp;
                    </td>
                    <td>
                      <header className="section-content">
                        <h3>ผลการประเมิน</h3>
                        <h5>
                          ชื่อ: {child.name}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          อายุ: {child.age}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          ชื่อเล่น: {child.nickname}
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
                      <tr>sss</tr>
                    </td>
                    <td align="center">
                      <tr>
                        <h3>สูง : </h3>
                      </tr>
                      <tr>sss</tr>
                    </td>
                    <td align="center">
                      <tr>
                        <h3>โดยรวม : </h3>
                      </tr>
                      <tr>sss</tr>
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
