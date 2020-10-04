import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { getQuestions } from "../redux/actions/dataActions";
import { connect } from "react-redux";
// import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as ReactDom from "react-dom";

const click = (e) => {
  console.log(e);
};

const Assessment = (props) => {
  const [child, setChild] = useState({
    name: "Suriya Techalue",
    birthDate: {
      year: "2019",
      month: "10",
      date: "10",
    },
    age: "5",
    nickname: "ฟลุ๊ค",
  });

  const { getQuestions } = props;
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);
  const { questions, loading } = props.data;
  // questions.map((question) => console.log(question));

  const calMonth = (year, month) => {
    return (
      (new Date().getFullYear() - year) * 12 + (new Date().getMonth() - month)
    );
  };
  const childMonth = calMonth(child.birthDate.year, child.birthDate.month);
  const initialScore = () => {
    let countGM = 0,
      countFM = 0,
      countRL = 0,
      countEL = 0,
      countPS = 0;
    questions.forEach((question) => {
      if (question.month <= childMonth) {
        countGM += question.GM.length;
        countFM += question.FM.length;
        countRL += question.RL.length;
        countEL += question.EL.length;
        countPS += question.PS.length;
      }
    });
    return { GM: countGM, FM: countFM, RL: countRL, EL: countEL, PS: countPS };
  };
  let childScore = initialScore();

  // function findQuestions(month) {
  //   month = month.toString;
  //   let output = {};
  //   questions.forEach((question) => {
  //     if (question.month === month) {
  //       // output = question;
  //       return question;
  //     }
  //   });
  //   // return output;
  // }
  const ChangeType = (e) => {
    console.log(e);
  };

  let assessments = {};
  assessments.changeQuestions = (month)=>{
    questions.forEach((question) => {
    if (question.month === month) {
      assessments = question;
    }
  });
  }
  // questions.forEach((question) => {
  //   if (question.month === childMonth) {
  //     assessments = question;
  //   }
  // });

  const [assessment, setAssessment] = useState({
    ques: "คำถามข้อที่ 1",
    num: "1",
    // month: assessments.month,
    tag: "GM",
    detail: "รายละเอียดการทดสอบ",
    passCond: "jjjjj",
    nopassCond: "รายละเอียดการไม่ผ่าน",
    status: "",
    comment: "",
  });

  function setComment(msg) {
    setAssessment({ ...assessment, comment: msg });
  }
  let assessmentResults = [];

  const handleNext = () => {
    if (assessment.status === "") {
      alert("please check...");
    } else {
      console.log(assessments);
      console.log(childMonth);
    }
  };

  const handleCheck = (e) => {
    const { name } = e.target;
    setAssessment({ ...assessment, status: name });
  };

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
                  ชื่อ {child.name} อายุ {child.age} ปี ชื่อเล่น{" "}
                  {child.nickname}{" "}
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
              <h1>{assessment.ques}</h1>
              <img src="./suriya.png" className="img-fluid" alt />
              <p>
                <b>{assessment.tag}</b> <br></br>
                {assessment.detail}
              </p>
            </div>
            <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <div className="box">
                <div class="card wow bounceInUp">
                  <h1>
                    ผ่าน :
                    <input
                      name="pass"
                      type="radio"
                      checked={assessment.status === "pass"}
                      // onChange={(e) => {
                      //   if (e.target.value === "on") {
                      //     click(1);
                      //   } else {
                      //     click(0);
                      //   }
                      // }}
                      value="pass"
                      onChange={handleCheck}
                    />
                  </h1>
                </div>
                <h5 class="title">{assessment.passCond}</h5>
              </div>
              <div>
                <br />
                <br />
              </div>
              <div className="box">
                <h1>
                  ไม่ผ่าน :
                  <input
                    name="notPass"
                    type="radio"
                    cssClass="e-success"
                    value="notPass"
                    checked={assessment.status === "notPass"}
                    onChange={handleCheck}
                  />
                </h1>
                <h5 class="title">{assessment.nopassCond}</h5>
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
                    onChange={(e) => setComment(e.target.value)}
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
              <Button type="ChangeType" onClick={() => ChangeType(10)}>
                <h1>Previous</h1>
              </Button>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <Button type="ChangeType" onClick={handleNext}>
                <h1>Next</h1>
              </Button>
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
  getQuestions: getQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
