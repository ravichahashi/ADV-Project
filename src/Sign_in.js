import React, { Component } from "react";
import * as model from "./model";
import firebase from "./firebase/index";

export default class Sign_in extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

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
    event.preventDefault();
    const db = firebase.db;
    db.collection("User")
      .where("email", "==", this.state.email)
      .get()
      .then((users) => {
        if (users.size > 0) {
          console.log("SIGN IN");
          users.forEach((user) => {
            if (user.data().password === this.state.password) {
              alert("Sign In");
            } else {
              alert("Password wrong");
            }
          });
        } else {
          console.log("Not found email");
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
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
                            <h2 class="cursive-font">Sign in to Sunerry</h2>
                            <form action="#" onSubmit={this.handleSubmit}>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label htmlFor="activities">Email</label>
                                  <input
                                    name="email"
                                    type="text"
                                    id="activities"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label htmlFor="activities">Password</label>
                                  <input
                                    name="password"
                                    type="password"
                                    id="activities"
                                    className="form-control"
                                    onChange={this.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <input
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    Value="Sign in"
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
