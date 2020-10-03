import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const click = (e) => {
  console.log(e);
};

const AssResults = () => {
  const data = [
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
    {
      data: {
        GM: 0.9,
        FM: 0.6,
        RL: 0.7,
        EL: 0.3,
        PS: 0.75,
      },
      meta: { color: "red" },
    },
  ];

  const captions = {
    // columns
    GM: "Gross Motor",
    FM: "Fine Motor",
    RL: "Receptive Language",
    EL: "Expressive Language",
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
                  <div><button type="submit" title="Go back">ย้อนกลับ</button></div>
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
          <div className="row wow fadeInUp">
            <div className="col-lg-6">
              <div className="map mb-4 mb-lg-0">
                <div className="row">
                  <div className="col-sm" style={{ paddingRight: 0 }}>
                    {" "}
                    <div
                      className={`card text-center ${
                        isParent ? `bg-dark text-white` : ""
                        }`}
                    >
                      Parent
                    </div>
                  </div>
                  <div className="col-sm" style={{ padding: 0 }}>
                    {" "}
                    <div
                      className={`card text-center ${
                        !isParent ? `bg-dark text-white` : ""
                        }`}
                    >
                      Nursery
                    </div>
                    <button onClick={() => setParent(!isParent)}>Toggle</button>
                  </div>
                </div>

                <RadarChart size={550} captions={captions} data={data} />
              </div>
            </div>
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
        </div>
      </section>
    </div>
  );
};

export default AssResults;
