import React, { Component, Fragment } from "react";
//Redux
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../../redux/actions/userActions';

// CSS
import "../NewBiz/lib/bootstrap/css/bootstrap.min.css";
import "../NewBiz/lib/font-awesome/css/font-awesome.min.css";
import "../NewBiz/lib/animate/animate.min.css";
import "../NewBiz/lib/ionicons/css/ionicons.min.css";
import "../NewBiz/lib/owlcarousel/assets/owl.carousel.min.css";
import "../NewBiz/lib/lightbox/css/lightbox.min.css";
import "../NewBiz/css/style.css";

var noLogin = [
  "/",
  "/login",
  "/signup",
  "/signUpNurseryPackage",
  "/signupNursery",
];
var parent = [
  "/landing",
  "/inbox",
  "/childmanager",
  "/overviewChild",
  "/search",
  "/editchild",
  "/addchild",
  "/nurseryInfo",
  "/assessment",
  "/assResults",
];
var nursery = [
  "/childrenList",
  "/parentList",
  "/teacher",
  "/nurseryInfo_nursery",
  "/request",
  "/result_nursery",
  "/reviewPage",
  "/calendar",
];

class Nevbar extends Component {
  
  handleLogout = () => {
  this.props.logoutUser();
  };

  render(){
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
      }
    } = this.props;

    var pathname = window.location.pathname;
  if (parent.indexOf(pathname) >= 0) {
    return (
      <header id="header" className="fixed-top">
        {/* <div className="container"> */}
        <div className="logo float-left">
          <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a href="/landing" className="scrollto">
            <img src="./sunerry2.png" alt className="img-fluid" />
          </a>
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li>
              <a href="/landing">
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 1 20 20"
                  class="bi bi-house-door"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href>
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 1 20 20"
                  class="bi bi-chat-dots"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                  />
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href>
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 1 20 20"
                  class="bi bi-bell"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                  />
                </svg>
              </a>
            </li>
            <li className="drop-down">
              <a>{handle}</a>
              <ul>
                <li>
                  <a href>บัญชีของฉัน</a>
                </li>
                <li>
                  <a href>ครอบครัวของฉัน</a>
                </li>
                <li>
                  <a href>Nursery</a>
                </li>
                <li>
                  <a href="/" onClick={this.handleLogout}>Log out</a>
                </li>
              </ul>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </nav>
        {/* </div> */}
      </header>
    );
  } else if (nursery.indexOf(pathname) >= 0) {
    return (
      <header id="header" className="fixed-top">
        {/* <div className="container"> */}
        <div className="logo float-left">
          <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a href="/landing" className="scrollto">
            <img src="./sunerry1.png" alt className="img-fluid" />
          </a>
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li>
              <a href="/landing">
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 1 20 20"
                  class="bi bi-house-door"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href>
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 1 20 20"
                  class="bi bi-chat-dots"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                  />
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href>
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 1 20 20"
                  class="bi bi-bell"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                  />
                </svg>
              </a>
            </li>
            <li className="drop-down">
    <a>{handle}</a>
              <ul>
                <li>
                  <a href>บัญชีของฉัน</a>
                </li>
                <li>
                  <a href>ครอบครัวของฉัน</a>
                </li>
                <li>
                  <a href>Nursery</a>
                </li>
                <li>
                  <a href="/" onClick={this.handleLogout}>Log out</a>
                </li>
              </ul>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </nav>
        {/* </div> */}
      </header>
    );
  }
  // NO login
  else {
    return (
      <header id="header" className="fixed-top">
        {/* <div className="container"> */}
        <div className="logo float-left">
          <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a href="/" className="scrollto">
            <img src="./sunerry2.png" alt className="img-fluid" />
          </a>
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="/signupnurserypackage">ลงทะเบียน Nursery กับ Sunnery</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Sign in</a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </nav>
        {/* </div> */}
      </header>
    );
  }
  }

}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {logoutUser};

export default connect(mapStateToProps, mapActionsToProps)(Nevbar);
