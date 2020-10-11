import React, { useEffect, useState } from "react";
import { addChild } from "../redux/actions/dataActions";

// Redux stuff
import { connect } from "react-redux";

// CSS
import "../../components/NewBiz/lib/bootstrap/css/bootstrap.min.css";
import "../../components/NewBiz/lib/font-awesome/css/font-awesome.min.css";
import "../../components/NewBiz/lib/animate/animate.min.css";
import "../../components/NewBiz/lib/ionicons/css/ionicons.min.css";
import "../../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../components/NewBiz/lib/lightbox/css/lightbox.min.css";
import "../../components/NewBiz/css/style.css";

const AddChild = (props) => {
  const [child, setChild] = useState({
    fName: "",
    lName: "",
    nickname: "",
    sex: "",
    year: "",
    month: "",
    date: "",
    religion: "",
    weigth: "",
    height: "",
  });

  const handleSubmit = (event) => {
    const newChild = {
      fName: child.fName,
      lName: child.lName,
      nickname: child.nickname,
      sex: child.sex,
      birthDate: {
        year: child.year,
        month: child.month,
        date: child.date,
      },
      religion: child.religion,
      weigth: child.weigth,
      height: child.height,
    };
    event.preventDefault();
    props.addChild(newChild, props.history);
  };
  const handleChange = (event) => {
    setChild({
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <main id="main">
        <section id="contact" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Add Child</h3>
            </header>
            <div class="col-lg-12">
              <div class="form" align="center">
                <div className="img-size">
                  <img src="./suriya.png" />
                </div>
                <section id="op"></section>
                <div class="col-lg-10">
                  <div class="form">
                    <div class="text-center">
                      <button type="submit" title="Send Message">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div class="form">
                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" class="contactForm">
                  <div class="form-row">
                    <div class="form-group col-lg-6">
                      <input
                        type="text"
                        name="fName"
                        class="form-control"
                        id="name"
                        placeholder="First Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        onChange={handleChange}
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-lg-6">
                      <input
                        type="text"
                        name="lName"
                        class="form-control"
                        id="name"
                        placeholder="Last Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        onChange={handleChange}
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-lg-6">
                      <input
                        type="text"
                        name="nickname"
                        class="form-control"
                        id="name"
                        placeholder="Nickname"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        onChange={handleChange}
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-lg-6">
                      <input
                        type="text"
                        name="sex"
                        class="form-control"
                        id="name"
                        placeholder="Sex"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        onChange={handleChange}
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-lg-6">
                      <input
                        type="text"
                        name="birthDate"
                        class="form-control"
                        id="name"
                        placeholder="Date of Birth"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        onChange={handleChange}
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-lg-6">
                      <input
                        type="text"
                        class="form-control"
                        name="religion"
                        id="email"
                        placeholder="Religion"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                        onChange={handleChange}
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-lg-6">
                      <input
                        type="number"
                        class="form-control"
                        name="weigth"
                        id="email"
                        placeholder="Weigth"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                        onChange={handleChange}
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-lg-6">
                      <input
                        type="number"
                        class="form-control"
                        name="height"
                        id="email"
                        placeholder="Height"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                        onChange={handleChange}
                      />
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div className="row" class="text-right">
                    <p>
                      <button type="submit" title="Send Message">
                        <a href="/childmanager">Cancel</a>
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        type="submit"
                        title="Send Message"
                        onClick={handleSubmit}
                      >
                        <a href="/childmanager">Add Child</a>
                      </button>
                    </p>
                  </div>
                </form>
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
  UI: state.UI,
});

const mapDispatchToProps = {
  addChild: addChild,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddChild);
