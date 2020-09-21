import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const click = (e) => {
  console.log(e);
};

const ChangeType = (e) => {
  console.log(e);
};

const Assessment = () => {
  const [child, setchild] = useState([
    {
      name: "Suriya Techalue",
      age: "2",
      nickname: "ฟลุ๊ค",
    },
  ]);

  const [assessment, setassessment] = useState([
    {
      ques: "คำถามข้อที่ 1",
      assType: "GM",
      detail: "รายละเอียดการทดสอบ",
      passCond: "รายละเอียดการผ่าน",
      nopassCond: "รายละเอียดการไม่ผ่าน",
      comment: "",
    },
  ]);

  return (
    <div>
      <div section id="services" className="section-bg">
        <div className="container">
          <div
            className="col-md-10 col-lg-ุ6 offset-lg-1 wow bounceInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1.4s"
          >
            <div className="box2">
              <div className="icon">
                <i
                  className="ion-ios-paper-outline"
                  style={{ color: "#000000" }}
                />
              </div>
              <h4 className="title">
                <a>
                  {" "}
                  ชื่อ {child[0].name} อายุ {child[0].age} ปี ชื่อเล่น{" "}
                  {child[0].nickname}{" "}
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <section id="assessment">
        <div class="container">
          <div className="row about-extra">
            <div className="col-lg-6 wow fadeInUp">
              <h1>{assessment[0].ques}</h1>
              <img src="./suriya.png" className="img-fluid" alt />
              <p>
                <b>{assessment[0].assType}</b> <br></br>
                {assessment[0].detail}
              </p>
            </div>
            <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <div className="box">
                <div
                  class="card wow bounceInUp"
                  onClick={(e) => {
                    e.preventDefault();
                    click(1);
                  }}
                >
                  <Button type="pass">
                    <h1>ผ่าน</h1>
                  </Button>
                </div>
                <h5 class="title">{assessment[0].passCond}</h5>
              </div>
              <div>
                <br />
                <br />
              </div>
              <div className="box">
                <div
                  class="card wow bounceInUp"
                  onClick={(e) => {
                    e.preventDefault();
                    click(0);
                  }}
                >
                  <Button type="notpass">
                    <h1>ไม่ผ่าน</h1>
                  </Button>
                </div>
                <h5 class="title">{assessment[0].nopassCond}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container-fluid">
          <div className="section-header">
            <h3>ความคิดเห็นผู้ประเมิน</h3>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <form action method="post" role="form" className="contactForm">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Comment"
                    defaultValue={""}
                  />
                  <div className="validation" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="assessment">
        <div class="row row-eq-height justify-content-center">
          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <Button
                type="ChangeType"
                onChick={(e) => {
                  e.preventDefault();
                  ChangeType(10);
                }}
              >
                <h1>Previous</h1>
              </Button>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <Button
                type="ChangeType"
                onChick={(e) => {
                  e.preventDefault();
                  ChangeType(11);
                }}
              >
                <h1>Next</h1>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assessment;
