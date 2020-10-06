import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { getQuestions } from "../redux/actions/dataActions";
import { connect } from "react-redux";
// import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as ReactDom from "react-dom";

let assessmentResults = [];
let haveFail = false;
let failCount = {
  GM: 0,
  FM: 0,
  RL: 0,
  EL: 0,
  PS: 0,
};
let start = 3;

const Assessment = (props) => {
  const [child, setChild] = useState({
    name: "Suriya Techalue",
    birthDate: {
      year: "2020",
      month: "1",
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

  const calMonth = (year, month) => {
    return (
      (new Date().getFullYear() - year) * 12 +
      (new Date().getMonth() + 1 - month)
    );
  };
  const childMonth = calMonth(child.birthDate.year, child.birthDate.month);

  const findQuestion = (month) => {
    let idx = -1;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].month > month) break;
      idx = i;
    }
    return idx;
  };
  const questionIdxBase = findQuestion(childMonth);

  const findAllScore = () => {
    let countGM = 0,
      countFM = 0,
      countRL = 0,
      countEL = 0,
      countPS = 0;
    questions.forEach((question) => {
      countGM += question.GM.length;
      countFM += question.FM.length;
      countRL += question.RL.length;
      countEL += question.EL.length;
      countPS += question.PS.length;
    });
    return { GM: countGM, FM: countFM, RL: countRL, EL: countEL, PS: countPS };
  };
  const allScore = findAllScore();
  const findFullScore = () => {
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
  const fullScore = findFullScore();

  const [dataAssessment, setDataAssessment] = useState({
    ques: "คำถามข้อที่ 1",
    questionIdx: questionIdxBase,
    num: "1",
    video: "https://www.youtube.com/embed/wM2GxHbOssE",
    // month: questions[3].month,
    // tag: questions[questionIdxBase].GM[0].tag,
    month: 0,
    tag: "",
    detail: "llll",
    passCond: "รายละเอียดการผ่าน",
    nopassCond: "รายละเอียดการไม่ผ่าน",
    status: "",
    comment: "",
    haveFail: false,
  });

  const handleNext = (e) => {
    e.preventDefault();
    if (dataAssessment.status === "") {
      alert("please check...");
    } else {
      assessmentResults.push(dataAssessment);
      // console.log(assessmentResults);
      switch (dataAssessment.tag) {
        case "GM":
          if (dataAssessment.status === "notPass") {
            haveFail = true;
            failCount.GM++;
          }
          if (
            dataAssessment.num < questions[dataAssessment.questionIdx].GM.length
          ) {
            const num = dataAssessment.num;
            setDataAssessment({
              ...dataAssessment,
              num: num + 1,
              video: questions[dataAssessment.questionIdx].GM[num].video,
              detail: questions[dataAssessment.questionIdx].GM[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || dataAssessment.questionIdx === 0) {
            haveFail = false;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: questionIdxBase,
              num: 1,
              video: questions[questionIdxBase].FM[0].video,
              month: questions[questionIdxBase].month,
              tag: "FM",
              detail: questions[questionIdxBase].FM[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          } else {
            haveFail = false;
            const idx = dataAssessment.questionIdx - 1;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: idx,
              num: 1,
              video: questions[idx].GM[0].video,
              month: questions[idx].month,
              detail: questions[idx].GM[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          }
          break;
        case "FM":
          if (dataAssessment.status === "notPass") {
            haveFail = true;
            failCount.FM++;
          }
          if (
            dataAssessment.num < questions[dataAssessment.questionIdx].FM.length
          ) {
            const num = dataAssessment.num;
            setDataAssessment({
              ...dataAssessment,
              num: num + 1,
              video: questions[dataAssessment.questionIdx].FM[num].video,
              detail: questions[dataAssessment.questionIdx].FM[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || dataAssessment.questionIdx === 0) {
            haveFail = false;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: questionIdxBase,
              num: 1,
              video: questions[questionIdxBase].RL[0].video,
              month: questions[questionIdxBase].month,
              tag: "RL",
              detail: questions[questionIdxBase].RL[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          } else {
            haveFail = false;
            const idx = dataAssessment.questionIdx - 1;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: idx,
              num: 1,
              video: questions[idx].FM[0].video,
              month: questions[idx].month,
              detail: questions[idx].FM[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          }
          break;
        case "RL":
          if (dataAssessment.status === "notPass") {
            haveFail = true;
            failCount.RL++;
          }
          if (
            dataAssessment.num < questions[dataAssessment.questionIdx].RL.length
          ) {
            const num = dataAssessment.num;
            setDataAssessment({
              ...dataAssessment,
              num: num + 1,
              video: questions[dataAssessment.questionIdx].RL[num].video,
              detail: questions[dataAssessment.questionIdx].RL[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || dataAssessment.questionIdx === 0) {
            haveFail = false;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: questionIdxBase,
              num: 1,
              video: questions[questionIdxBase].EL[0].video,
              month: questions[questionIdxBase].month,
              tag: "EL",
              detail: questions[questionIdxBase].EL[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          } else {
            haveFail = false;
            const idx = dataAssessment.questionIdx - 1;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: idx,
              num: 1,
              video: questions[idx].RL[0].video,
              month: questions[idx].month,
              detail: questions[idx].RL[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          }
          break;
        case "EL":
          if (dataAssessment.status === "notPass") {
            haveFail = true;
            failCount.EL++;
          }
          if (
            dataAssessment.num < questions[dataAssessment.questionIdx].EL.length
          ) {
            const num = dataAssessment.num;
            setDataAssessment({
              ...dataAssessment,
              num: num + 1,
              video: questions[dataAssessment.questionIdx].EL[num].video,
              detail: questions[dataAssessment.questionIdx].EL[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || dataAssessment.questionIdx === 0) {
            haveFail = false;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: questionIdxBase,
              num: 1,
              video: questions[questionIdxBase].PS[0].video,
              month: questions[questionIdxBase].month,
              tag: "PS",
              detail: questions[questionIdxBase].PS[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          } else {
            haveFail = false;
            const idx = dataAssessment.questionIdx - 1;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: idx,
              num: 1,
              video: questions[idx].EL[0].video,
              month: questions[idx].month,
              detail: questions[idx].EL[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          }
          break;
        case "PS":
          if (dataAssessment.status === "notPass") {
            haveFail = true;
            failCount.PS++;
          }
          if (
            dataAssessment.num < questions[dataAssessment.questionIdx].PS.length
          ) {
            const num = dataAssessment.num;
            setDataAssessment({
              ...dataAssessment,
              num: num + 1,
              video: questions[dataAssessment.questionIdx].PS[num].video,
              detail: questions[dataAssessment.questionIdx].PS[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || dataAssessment.questionIdx === 0) {
            alert("Complete");
            let childScore = {
              GM: (fullScore.GM - failCount.GM) / allScore.GM,
              FM: (fullScore.FM - failCount.FM) / allScore.FM,
              RL: (fullScore.RL - failCount.RL) / allScore.RL,
              EL: (fullScore.EL - failCount.EL) / allScore.EL,
              PS: (fullScore.PS - failCount.PS) / allScore.PS,
            };
            console.log(childScore);
          } else {
            haveFail = false;
            const idx = dataAssessment.questionIdx - 1;
            setDataAssessment({
              ...dataAssessment,
              questionIdx: idx,
              num: 1,
              video: questions[idx].PS[0].video,
              month: questions[idx].month,
              detail: questions[idx].PS[0].text,
              status: "",
              comment: "",
              haveFail: false,
            });
          }
          break;
        default:
          break;
      }
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (assessmentResults.length > 0) {
      const prevAssessment = assessmentResults.pop();
      haveFail = prevAssessment.haveFail;
      // console.log(prevAssessment);
      setDataAssessment({
        ...prevAssessment,
      });
      if (prevAssessment.status === "notPass") {
        switch (prevAssessment.tag) {
          case "GM":
            failCount.GM--;
            break;
          case "FM":
            failCount.FM--;
            break;
          case "RL":
            failCount.RL--;
            break;
          case "EL":
            failCount.EL--;
            break;
          case "PS":
            failCount.PS--;
            break;
          default:
            break;
        }
      }
    }
  };

  // const handleSet = (e) => {
  //   e.preventDefault();
  //   setDataAssessment({
  //     ques: "คำถามข้อที่ 1",
  //     questionIdx: questionIdxBase,
  //     num: 1,
  //     video: questions[questionIdxBase].GM[0].video,
  //     month: questions[questionIdxBase].month,
  //     tag: "GM",
  //     detail: questions[questionIdxBase].GM[0].text,
  //     passCond: "รายละเอียดการผ่าน",
  //     nopassCond: "รายละเอียดการไม่ผ่าน",
  //     status: "",
  //     comment: "",
  //     haveFail: false,
  //   });
  // };

  const handleCheck = (e) => {
    const { value } = e.target;
    setDataAssessment({ ...dataAssessment, status: value });
    // console.log(dataAssessment.status === "notPass");
  };

  const handleComment = (e) => {
    const { value } = e.target;
    setDataAssessment({ ...dataAssessment, comment: value });
  };

  if (start > 0) {
    start--;
    // console.log(start);
  }
  if (!loading && start === 0) {
    start--;
    setDataAssessment({
      ques: "คำถามข้อที่ 1",
      questionIdx: questionIdxBase,
      num: 1,
      video: questions[questionIdxBase].GM[0].video,
      month: questions[questionIdxBase].month,
      tag: "GM",
      detail: questions[questionIdxBase].GM[0].text,
      passCond: "รายละเอียดการผ่าน",
      nopassCond: "รายละเอียดการไม่ผ่าน",
      status: "",
      comment: "",
      haveFail: false,
    });
  }

  let assessment = !loading ? (
    <div class="container">
      <div className="row about-extra">
        <div className="col-lg-6 wow fadeInUp">
          <h1>
            {dataAssessment.tag} อายุ {dataAssessment.month} เดือน
          </h1>
          {/* <img src="./suriya.png" className="img-fluid" alt /> */}
          <iframe width="420" height="315" src={dataAssessment.video}></iframe>
          <p>
            <b>การทดสอบที่ {dataAssessment.num}</b> <br></br>
            {dataAssessment.detail}
          </p>
        </div>
        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
          <div className="box">
            <div class="card wow bounceInUp">
              <h1>
                ผ่าน :
                <input
                  name="pass"
                  type="checkbox"
                  value="pass"
                  checked={dataAssessment.status === "pass"}
                  onChange={handleCheck}
                />
              </h1>
            </div>
            {/* <h5 class="title">{dataAssessment.passCond}</h5> */}
          </div>
          <div>
            <br />
            <br />
          </div>
          <div className="box">
            <h1>
              ไม่ผ่าน :
              <input
                name="notpass"
                type="checkbox"
                cssClass="e-success"
                value="notPass"
                checked={dataAssessment.status === "notPass"}
                onChange={handleCheck}
              />
            </h1>
            {/* <h5 class="title">{dataAssessment.nopassCond}</h5> */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div class="container">
      <div className="row about-extra">
        <div className="col-lg-6 wow fadeInUp">
          <h1>question xxxxxxxxx</h1>
          <img src="./suriya.png" className="img-fluid" alt />
          <p>
            <b>tag xxxxxxxxx</b> <br></br>
            detail xxxxxxxxx
          </p>
        </div>
        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
          <div className="box">
            <div class="card wow bounceInUp">
              <h1>
                ผ่าน :
                <input
                  name="pass"
                  type="checkbox"
                  value="pass"
                  checked={false}
                  // onChange={handleCheck}
                />
              </h1>
            </div>
            <h5 class="title">passCond xxxxxxxxx</h5>
          </div>
          <div>
            <br />
            <br />
          </div>
          <div className="box">
            <h1>
              ไม่ผ่าน :
              <input
                name="notpass"
                type="checkbox"
                cssClass="e-success"
                value="notPass"
                checked={false}
                // onChange={handleCheck}
              />
            </h1>
            <h5 class="title">nopassCond xxxxxxxxx</h5>
          </div>
        </div>
      </div>
    </div>
  );

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

      <section id="assessment">{assessment}</section>

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
                    value={dataAssessment.comment}
                    onChange={handleComment}
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
          {/* <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <Button type="ChangeType" onClick={handleSet}>
                <h1>SET</h1>
              </Button>
            </div>
          </div> */}

          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <Button type="ChangeType" onClick={handlePrev}>
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
