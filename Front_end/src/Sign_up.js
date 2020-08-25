import React, { Component } from "react";
import * as model from "./model";
import firebase from "./firebase/index";

export default class Sign_up extends Component {
  constructor(props) {
    super(props);
    this.state = new model.User();
    // this.state = {
    //   fName: "",
    //   lName: "",
    //   email: "",
    //   address: "",
    //   password: "",
    //   citizenID: "",
    //   phone: "",
    //   childID: [],
    //   nursI: [],
    // };

    // console.log(this.state);
    // console.log()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("ADD NEW USER");
    event.preventDefault();
    const db = firebase.db;
    const newUser = db.collection("User").doc();
    newUser.set(this.state);
  }

  // addUser = (e) => {
  //   e.preventDefault();
  //   const db = firebase.db;
  //   console.log("active!!");
  //   const userForm = document.querySelector(".userForm");
  //   const name = userForm.querySelector(".fName").Value;
  //   console.log(name);
  // const email = userForm.querySelector(".email").value;
  // const password = userForm.querySelector(".password").value;
  // const citizenID = userForm.querySelector(".address").value;
  // const phone = userForm.querySelector(".phone").value;
  // const userData = new model.User(
  //   name,
  //   email,
  //   password,
  //   citizenID,
  //   phone,
  //   [],
  //   []
  // );

  // const newUser = db.collection("User").doc();
  // newUser.set(userData);
  // };
  // componentDidMount() {
  //   document
  //     .querySelector(".userForm")
  //     .addEventListener("submit", this.addUser);
  // }
  // componentWillUnmount() {
  //   document
  //     .querySelector(".userForm")
  //     .removeEventListener("submit", this.addUser);
  // }
  render() {
    return (
      <div>
        <header
          id="gtco-header"
          className="gtco-cover gtco-cover-md"
          role="banner"
          style={{ backgroundImage: "url(images/img_bg_1.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-left">
                <div className="row row-mt-15em">
                  <div
                    className="col-md-5 mt-text animate-box"
                    data-animate-effect="fadeInUp"
                  >
                    <h1 className="cursive-font">Build for</h1>
                    <h1 className="cursive-font">Nursery and Guardian</h1>
                  </div>
                  <div
                    className="col-md-6 col-md-push-1 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="form-wrap">
                      <div className="tab">
                        <div className="tab-content">
                          <div
                            className="tab-content-inner active"
                            data-content="signup"
                          >
                            <form
                              name="userForm"
                              action="#"
                              onSubmit={this.handleSubmit}
                            >
                              <div className="row form-group">
                                <div className="col-md-6">
                                  <label htmlFor="activities">First Name</label>
                                  <input
                                    name="fName"
                                    type="text"
                                    id="activities"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label htmlFor="activities">LastName</label>
                                  <input
                                    name="lName"
                                    type="text"
                                    id="activities"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label htmlFor="date-start">Email</label>
                                  <input
                                    name="email"
                                    type="text"
                                    id="date"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label htmlFor="date-start">Address</label>
                                  <input
                                    name="address"
                                    type="text"
                                    id="time"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label htmlFor="date-start">
                                    Phone Number
                                  </label>
                                  <input
                                    name="phone"
                                    type="text"
                                    id="time"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-6">
                                  <label htmlFor="activities">Password</label>
                                  <input
                                    name="password"
                                    type="password"
                                    id="activities"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label htmlFor="activities">
                                    Confirm Password
                                  </label>
                                  <input
                                    type="password"
                                    id="activities"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <input
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    Value="Sign up for Sunerry"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
