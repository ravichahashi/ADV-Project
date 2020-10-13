import React, { useEffect, useState } from "react";
import { getChildren } from "../redux/actions/dataActions";

// Redux stuff
import { connect } from "react-redux";

// CSS
import "../components/NewBiz/lib/bootstrap/css/bootstrap.min.css";
import "../components/NewBiz/lib/font-awesome/css/font-awesome.min.css";
import "../components/NewBiz/lib/animate/animate.min.css";
import "../components/NewBiz/lib/ionicons/css/ionicons.min.css";
import "../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css";
import "../components/NewBiz/lib/lightbox/css/lightbox.min.css";
import "../components/NewBiz/css/style.css";

let start = 2;

const OverviewChild = (props) => {
  const { getChildren } = props;
  useEffect(() => {
    getChildren();
  }, [getChildren]);
  const { children, loading } = props.data;

  const [nursery, setNursery] = useState([
    {
      nurseryName: "",
      city: "เชียงใหม่",
      district: "เมือง",
    },
  ]);
  const [numChild, setnumChild] = useState(4);
  const [Child, setChild] = useState([]);

  if (start === 0) {
    setChild(children);
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

  let item = [];
  for (let key in Child) {
    console.log(Child.length);
    item.push(
      <div
        className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
        data-wow-duration="1.4s"
        align="center"
      >
        <div className="box">
          <table>
            <tr>
              <td>
                <div className="img-over">
                  <a href="/addchild">
                    <img src="./child.jpg" />
                  </a>
                </div>
              </td>
              <td>
                <div className="row">
                  <h4 className="title">
                    <a>&nbsp;&nbsp;{Child[key].name}</a>
                  </h4>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="img-overr">
                    {/* <a href="/editChild"> */}
                    <img src="./pencil.png" />
                    {/* </a> */}
                  </div>
                </div>
                <p className="description">เพศ :{Child[key].sex}</p>
                <p className="description">
                  วันเกิด :{Child[key].birthDate.date} /{" "}
                  {Child[key].birthDate.month} / {Child[key].birthDate.year}
                </p>
                <p className="description">น้ำหนัก :{Child[key].weigth}</p>
                <p className="description">ส่วนสูง :{Child[key].height}</p>
                <br></br>
                <section id="more">
                  <div class="form">
                    <div align="center">
                      {/* <a href="/assResults"> */}
                      <a href={`/assResults?${Child[key].name}`}>
                        <button type="submit">เพิ่มเติม</button>
                      </a>
                    </div>
                  </div>
                </section>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div>
      <main id="main">
        <section id="services" className="section-bg">
          <div className="container">
            <div className="container" align="center">
              <div className="col-md-11 col-lg-ุ5">
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
            <header className="section-header">
              <h3>ครอบครัวของฉัน</h3>
              <p></p>
            </header>
            <div className="row">
              {item}
              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="img-size">
                    <a href="/addchild">
                      <img src="./add.png" />
                    </a>
                  </div>
                  &nbsp;
                  <h5 align="center">
                    <a href="/addchild">เพิ่มเด็ก</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #services */}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  getChildren: getChildren,
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewChild);
