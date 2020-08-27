import React, { Component } from "react";
import * as model from "./model";
import firebase from "./firebase/index";

export default class Add_children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      address: "",
      password: "",
      citizenID: "",
      phone: "",
      userID: this.props.user.id,
      nursID: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    // this.setState((prevState) => {
    //   let child = { ...prevState.child };
    //   child[name] = value;
    //   return { child };
    // });

    // this.setState((prevState) => ({
    //   child: {
    //     ...prevState.child,
    //     [name]: value,
    //   },
    // }));
  }

  handleSubmit(event) {
    console.log("ADD CHILD");
    event.preventDefault();
    const db = firebase.db;
    const newChild = db.collection("Children").doc();
    newChild.set(this.state);
  }

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
                    <h1 className="cursive-font">ADD</h1>
                    <h1 className="cursive-font">CHILD</h1>
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
                            <form action="#" onSubmit={this.handleSubmit}>
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
