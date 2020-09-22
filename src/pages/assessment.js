import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const click = (e) => {
  console.log(e);
<<<<<<< HEAD
};

const ChangeType = (e) => {
  console.log(e);
};

const Assessment = () => {
  const [child, setchild] = useState([
=======
};

const Assessment = () => {
  const ChangeType = (e) => {
    console.log(e);
  };
  const [child, setchild] = useState(
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
    {
      name: "Suriya Techalue",
      age: "2",
      nickname: "ฟลุ๊ค",
    },
<<<<<<< HEAD
  ]);

  const [assessment, setassessment] = useState([
=======
  );

  const [assessment, setassessment] = useState(
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
    {
      ques: "คำถามข้อที่ 1",
      assType: "GM",
      detail: "รายละเอียดการทดสอบ",
      passCond: "รายละเอียดการผ่าน",
      nopassCond: "รายละเอียดการไม่ผ่าน",
      comment: "",
<<<<<<< HEAD
    },
  ]);

  return (
    <div>
=======
    }
  );

  function setComment(msg){
    setassessment({...assessment,comment:msg})
  }

  return (
    <div>
      
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
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
<<<<<<< HEAD
                  ชื่อ {child[0].name} อายุ {child[0].age} ปี ชื่อเล่น{" "}
                  {child[0].nickname}{" "}
=======
                  ชื่อ {child.name} อายุ {child.age} ปี ชื่อเล่น{" "}
                  {child.nickname}{" "}
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
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
<<<<<<< HEAD
              <h1>{assessment[0].ques}</h1>
              <img src="./suriya.png" className="img-fluid" alt />
              <p>
                <b>{assessment[0].assType}</b> <br></br>
                {assessment[0].detail}
=======
              <h1>{assessment.ques}</h1>
              <img src="./suriya.png" className="img-fluid" alt />
              <p>
                <b>{assessment.assType}</b> <br></br>
                {assessment.detail}
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
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
<<<<<<< HEAD
                <h5 class="title">{assessment[0].passCond}</h5>
=======
                <h5 class="title">{assessment.passCond}</h5>
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
              </div>
              <div>
                <br />
                <br />
              </div>
              <div className="box">
<<<<<<< HEAD
                <div class="card wow bounceInUp" onClick={click(0)}>
=======
                <div
                  class="card wow bounceInUp"
                  onClick={(e) => {
                    e.preventDefault();
                    click(0);
                  }}
                >
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
                  <Button type="notpass">
                    <h1>ไม่ผ่าน</h1>
                  </Button>
                </div>
<<<<<<< HEAD
                <h5 class="title">{assessment[0].nopassCond}</h5>
=======
                <h5 class="title">{assessment.nopassCond}</h5>
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
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
<<<<<<< HEAD
=======
                    onChange={(e)=>setComment(e.target.value)}
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
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
<<<<<<< HEAD
            <div class="card wow bounceInUp" onClick={ChangeType(11)}>
              <Button type="ChangeType">
=======
            <div class="card wow bounceInUp">
              <Button type="ChangeType" onClick={() => ChangeType(10)}>
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
                <h1>Previous</h1>
              </Button>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
<<<<<<< HEAD
            <div class="card wow bounceInUp" onClick={ChangeType(10)}>
              <Button type="ChangeType">
=======
            <div class="card wow bounceInUp">
              <Button type="ChangeType" onClick={() => ChangeType(11)}>
>>>>>>> 4cc9ea9b0b4c9cf82293ca277a0c3b7e938a71cd
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
