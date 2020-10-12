import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import {
  getChild,
  getQuestions,
  updateScoreChild,
} from "../redux/actions/dataActions";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
// import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as ReactDom from "react-dom";

const childName = window.location.search.substring(1);
let questionIdxBase = 0;
let assessmentResults = [];
let haveFail = false;
let failCount = {
  GM: 0,
  FM: 0,
  RL: 0,
  EL: 0,
  PS: 0,
};
let start = 4;

const Assessment = (props) => {
  const calMonth = (year, month) => {
    return (
      (new Date().getFullYear() - year) * 12 +
      (new Date().getMonth() + 1 - month)
    );
  };

  const { getChild, getQuestions } = props;
  useEffect(() => {
    getChild(childName);
    getQuestions();
  }, [getChild, getQuestions]);
  const resChild = props.data.child;
  const { questions, loading } = props.data;
  const [child, setChild] = useState({
    name: "xxxxx xxxxx",
    birthDate: {
      year: 0,
      month: 0,
      date: 0,
    },
    nickname: "xxxxx",
    caution: "xxx",
    month: 0,
  });

  const [nursery, setNursery] = useState([
    {
      nurseryName: "",
      city: "เชียงใหม่",
      district: "เมือง",
    },
  ]);

  const findQuestion = (month) => {
    let idx = -1;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].month > month) break;
      idx = i;
    }
    return idx;
  };
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
      if (question.month <= child.month) {
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

  const [assessmentData, setAssessmentData] = useState({
    questionIdx: 0,
    num: 0,
    video: "",
    month: 0,
    tag: "xx",
    detail: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    status: "",
    comment: "",
    haveFail: false,
  });

  const handleNext = (e) => {
    e.preventDefault();
    if (assessmentData.status === "") {
      alert("please check...");
    } else {
      assessmentResults.push(assessmentData);
      // console.log(assessmentResults);
      switch (assessmentData.tag) {
        case "GM":
          if (assessmentData.status === "notPass") {
            haveFail = true;
            failCount.GM++;
          }
          if (
            assessmentData.num < questions[assessmentData.questionIdx].GM.length
          ) {
            const num = assessmentData.num;
            setAssessmentData({
              ...assessmentData,
              num: num + 1,
              video: questions[assessmentData.questionIdx].GM[num].video,
              detail: questions[assessmentData.questionIdx].GM[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || assessmentData.questionIdx === 0) {
            haveFail = false;
            setAssessmentData({
              ...assessmentData,
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
            const idx = assessmentData.questionIdx - 1;
            setAssessmentData({
              ...assessmentData,
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
          if (assessmentData.status === "notPass") {
            haveFail = true;
            failCount.FM++;
          }
          if (
            assessmentData.num < questions[assessmentData.questionIdx].FM.length
          ) {
            const num = assessmentData.num;
            setAssessmentData({
              ...assessmentData,
              num: num + 1,
              video: questions[assessmentData.questionIdx].FM[num].video,
              detail: questions[assessmentData.questionIdx].FM[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || assessmentData.questionIdx === 0) {
            haveFail = false;
            setAssessmentData({
              ...assessmentData,
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
            const idx = assessmentData.questionIdx - 1;
            setAssessmentData({
              ...assessmentData,
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
          if (assessmentData.status === "notPass") {
            haveFail = true;
            failCount.RL++;
          }
          if (
            assessmentData.num < questions[assessmentData.questionIdx].RL.length
          ) {
            const num = assessmentData.num;
            setAssessmentData({
              ...assessmentData,
              num: num + 1,
              video: questions[assessmentData.questionIdx].RL[num].video,
              detail: questions[assessmentData.questionIdx].RL[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || assessmentData.questionIdx === 0) {
            haveFail = false;
            setAssessmentData({
              ...assessmentData,
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
            const idx = assessmentData.questionIdx - 1;
            setAssessmentData({
              ...assessmentData,
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
          if (assessmentData.status === "notPass") {
            haveFail = true;
            failCount.EL++;
          }
          if (
            assessmentData.num < questions[assessmentData.questionIdx].EL.length
          ) {
            const num = assessmentData.num;
            setAssessmentData({
              ...assessmentData,
              num: num + 1,
              video: questions[assessmentData.questionIdx].EL[num].video,
              detail: questions[assessmentData.questionIdx].EL[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || assessmentData.questionIdx === 0) {
            haveFail = false;
            setAssessmentData({
              ...assessmentData,
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
            const idx = assessmentData.questionIdx - 1;
            setAssessmentData({
              ...assessmentData,
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
          if (assessmentData.status === "notPass") {
            haveFail = true;
            failCount.PS++;
          }
          if (
            assessmentData.num < questions[assessmentData.questionIdx].PS.length
          ) {
            const num = assessmentData.num;
            setAssessmentData({
              ...assessmentData,
              num: num + 1,
              video: questions[assessmentData.questionIdx].PS[num].video,
              detail: questions[assessmentData.questionIdx].PS[num].text,
              status: "",
              comment: "",
              haveFail: haveFail,
            });
          } else if (!haveFail || assessmentData.questionIdx === 0) {
            // alert("Complete");
            let childScore = {
              GM: (fullScore.GM - failCount.GM) / allScore.GM,
              FM: (fullScore.FM - failCount.FM) / allScore.FM,
              RL: (fullScore.RL - failCount.RL) / allScore.RL,
              EL: (fullScore.EL - failCount.EL) / allScore.EL,
              PS: (fullScore.PS - failCount.PS) / allScore.PS,
            };
            // console.log(childScore);
            props.updateScoreChild(childScore, child, "DSPM", props.history);
          } else {
            haveFail = false;
            const idx = assessmentData.questionIdx - 1;
            setAssessmentData({
              ...assessmentData,
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
      setAssessmentData({
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

  const handleCheck = (e) => {
    const { value } = e.target;
    setAssessmentData({ ...assessmentData, status: value });
    // console.log(dataAssessment.status === "notPass");
  };

  const handleComment = (e) => {
    const { value } = e.target;
    setAssessmentData({ ...assessmentData, comment: value });
  };

  if (start === 1) {
    setChild({
      ...resChild,
      month: calMonth(resChild.birthDate.year, resChild.birthDate.month),
    });
  } else if (start === 0) {
    questionIdxBase = findQuestion(child.month);
    setAssessmentData({
      questionIdx: questionIdxBase,
      num: 1,
      video: questions[questionIdxBase].GM[0].video,
      month: questions[questionIdxBase].month,
      tag: "GM",
      detail: questions[questionIdxBase].GM[0].text,
      status: "",
      comment: "",
      haveFail: false,
    });
  }
  if (start >= 0) {
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
                    <div class="text-center">
                      <button type="submit" title="Search">
                        ค้นหา
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="col-md-10 col-lg-ุ5">
            <div className="box">
              <div className="row">
                <div className="img-size">
                  <img src="./child.jpg" />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="Vcenter">
                  <header className="section-content">
                    <h5>
                      ชื่อ: {child.name}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      อายุ: {child.month}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      ชื่อเล่น: {child.nickname}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      โรคประจำตัว: {child.caution}
                    </h5>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="assessment">
        <div class="container">
          <div className="row about-extra">
            <table width="100%" bgcolor="#cbe54e">
              <tr>
                <td
                  width="60%"
                  bgcolor="lightyellow"
                  vertical-align="center"
                  align="center"
                >
                  <h1>
                    {assessmentData.tag} อายุ {assessmentData.month} เดือน
                  </h1>
                  <ReactPlayer
                    url={assessmentData.video}
                    controls
                    width="600px"
                    height="400px"
                  />
                  <br></br>
                  <br></br>
                </td>
                <td bgcolor="lightyellow" width="40%">
                  <p>
                    <b>การทดสอบที่ {assessmentData.num}</b> <br></br>
                    <br></br>
                    <br></br>
                    {assessmentData.detail}
                  </p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <td
                    width="25%"
                    align="right"
                    bgcolor="#cbe54e"
                    vertical-align="center"
                  >
                    <input
                      name="pass"
                      type="checkbox"
                      value="pass"
                      checked={assessmentData.status === "pass"}
                      onChange={handleCheck}
                    />
                  </td>
                  <td
                    width="25%"
                    align="left"
                    bgcolor="#cbe54e"
                    vertical-align="center"
                  >
                    <h4>&nbsp;ผ่าน</h4>
                  </td>
                  <td>&nbsp;</td>
                  <td
                    width="20%"
                    align="right"
                    bgcolor="#e75869"
                    vertical-align="center"
                  >
                    <input
                      name="notpass"
                      type="checkbox"
                      value="notPass"
                      checked={assessmentData.status === "notPass"}
                      onChange={handleCheck}
                    />
                  </td>
                  <td
                    width="30%"
                    align="left"
                    bgcolor="#e75869"
                    vertical-align="center"
                  >
                    <h4>&nbsp;ไม่ผ่าน</h4>
                  </td>
                  <td>&nbsp;</td>
                  {/* <h5 class="title">{dataAssessment.passCond}</h5> */}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section id="boxname">
        <br />
        <br />
        <div class="row row-eq-height justify-content-center">
          <table width="80%" align="left">
            <tr>
              <td width="50%" align="center">
                <div class="col-lg-4 mb-4">
                  <Button type="ChangeType" onClick={handlePrev}>
                    <h1>ก่อนหน้า</h1>
                  </Button>
                </div>
              </td>
              <td width="50%" align="center">
                <div class="col-lg-4 mb-4">
                  <Button type="ChangeType" onClick={handleNext}>
                    <h1>ถัดไป</h1>
                  </Button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  UI: state.UI,
});

const mapDispatchToProps = {
  getChild: getChild,
  getQuestions: getQuestions,
  updateScoreChild: updateScoreChild,
};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
