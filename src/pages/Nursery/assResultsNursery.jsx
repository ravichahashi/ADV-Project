import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const click = (e) => {
  console.log(e);
};

const AssResultsNursery = () => {
  const DSPM_data = [
    {
      data: {
        GM: 0.84,
        FM: 0.8,
        RL: 0.9,
        EL: 0.67,
        PS: 0.8,
      },
      meta: { color: "blue" },
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

  const [child, setchild] = useState({
    name: "Suriya Techalue",
    age: "2",
    nickname: "ฟลุ๊ค",
    gender: "ชาย",
    weight: "80",
    high: "200",
    Nursery: "SuperKid",
    GM: 0.84,
    FM: 0.8,
    RL: 0.9,
    EL: 0.67,
    PS: 0.8,
  });

  const [isParent, setParent] = useState(false);

  return (
    <div>
      <section id="assResults" className="section-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-ุ6 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
              <section id="goback">
                <div class="form">
                  <div><button type="submit" title="Go back"><a href="/childmanager">ย้อนกลับ</a></button></div>
                </div>
              </section>
              <br></br>
              <div className="box">
                <div className="img-sizee"><a href="/editChild"><img src="./pencil.png" /></a></div>
                <table>
                  <tr>
                    <td>
                      <div className="img-size"><a href="/addchild"><img src="./suriya.png" /></a></div>&nbsp;
                    </td>
                    <td>
                      <header className="section-content">
                        <h3>ผลการประเมิน</h3>
                        <h5>
                          ชื่อ: {child.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; อายุ: {child.age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ชื่อเล่น: {child.nickname}
                        </h5>
                        <h5>
                          เพศ: {child.gender}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; น้ำหนัก: {child.weight}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ส่วนสูง: {child.high}
                        </h5>
                        <h5>
                          Nursery: {child.Nursery}
                        </h5>
                      </header>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="assResults2">
        <div className="container-fluid">
          <table>
            <tr>
              <td width="75%">
                <div className="box-n">
                  <div className="row wow fadeInUp">
                    <div className="col-lg-6">
                      <div className="map mb-4 mb-lg-0">
                        <div className="row">
                          <div className="col-sm" style={{ padding: 0 }}>
                            {" "}
                            <div className="card text-center bg-info text-white">
                              Nursery
                            </div>
                            <br></br>
                          </div>
                        </div>
                        <table>
                          <tr>
                            <td>
                              <div className="box">
                                <h3>DSPM</h3>
                                <RadarChart size={550} captions={DSPM_captions} data={DSPM_data} />
                                <div className="col-lg-6">
                                  <div className="container">
                                    <div className="row about-container">
                                      <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                        <h4 className="title">
                                          <a>ผลการประเมิน:</a>
                                        </h4>
                                        <p className="description">GM: {child.GM}</p>
                                        <p className="description">FM: {child.FM}</p>
                                        <p className="description">EL: {child.EL}</p>
                                        <p className="description">RL: {child.RL}</p>
                                        <p className="description">PS: {child.PS}</p>
                                      </div>
                                      <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                        <h4 className="title">
                                          <a>คำแนะนำด้านพัฒนาการ:</a>
                                        </h4>
                                        <p className="description">
                                          ..............................................................................................................
                                          ..............................................................................................................
                                          ..............................................................................................................
                                          ..............................................................................................................
                            </p>
                                      </div>

                                      <button onClick={() => click(10)} className="btn btn-info btn-lg">
                                        <a href="/assessment">ทำแบบประเมิน</a>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="box">
                                <h3>อนามัย 49</h3>
                                <RadarChart size={550} captions={A49_captions} data={A49_data} />
                                <div className="col-lg-6">
                                  <div className="container">
                                    <div className="row about-container">
                                      <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                        <h4 className="title">
                                          <a>ผลการประเมิน:</a>
                                        </h4>
                                        <p className="description">GM: {child.GM}</p>
                                        <p className="description">FM: {child.FM}</p>
                                        <p className="description">EL: {child.EL}</p>
                                        <p className="description">RL: {child.RL}</p>
                                        <br></br>
                                      </div>
                                      <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                        <h4 className="title">
                                          <a>คำแนะนำด้านพัฒนาการ:</a>
                                        </h4>
                                        <p className="description">
                                          ..............................................................................................................
                                          ..............................................................................................................
                                          ..............................................................................................................
                                          ..............................................................................................................
                            </p>
                                      </div>
                                      {/* <div className="vertical-center"> */}
                                      <button onClick={() => click(10)} className="btn btn-info btn-lg">
                                        <a href="">ทำแบบประเมิน</a>
                                      </button>
                                      {/* </div> */}

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
                  <table width="100%">
                    <h3>บันทึกประจำวัน : </h3>
                    <tr>
                      <td>
                        <div className="box">
                          <div className="row">
                            <h4>&nbsp;&nbsp;อาหาร</h4>
                            <div align="right" className="img-edit"><a href="/editChild"><img src="./pencil.png" /></a></div>
                          </div>
                          <br></br>
                          <h5>เช้า: </h5>
                          <br></br>
                          <h5>กลางวัน: </h5>
                          <br></br>
                          <h5>เย็น: </h5>
                        </div>
                      </td>
                      <td>
                        <div className="box">
                          <h4>การขับถ่าย</h4>
                          <br></br>
                          <h5>กินกี่ครั้งในวันนี้ </h5>
                          <br></br>
                          
                        </div>
                      </td>
                      <td>
                        <div className="box" >
                          <div className="row">
                            <h4>พฤติกรรม</h4>
                            <div align="right" className="img-edit"><a href="/editChild"><img src="./pencil.png" /></a></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
              <td width="25%">
                <div className="box">
                  <section id="more">
                    <div class="form">
                      <div align="right"><button type="submit" title="Update"><a href="">Update</a></button></div>
                    </div>
                  </section>
                  <br></br>
                  <h5>น้ำหนัก: </h5>
                  <br></br>
                  <h5>ส่วนสูง: </h5>
                  <br></br>
                  <h5>โดยรวม: </h5>
                </div>
              </td>
            </tr>
          </table>


        </div>
      </section>
    </div>
  );
};

export default AssResultsNursery;
