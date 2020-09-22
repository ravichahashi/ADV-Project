import React, { Component, Fragment } from 'react';

// CSS
import "../NewBiz/lib/bootstrap/css/bootstrap.min.css"
import "../NewBiz/lib/font-awesome/css/font-awesome.min.css"
import "../NewBiz/lib/animate/animate.min.css"
import "../NewBiz/lib/ionicons/css/ionicons.min.css"
import "../NewBiz/lib/owlcarousel/assets/owl.carousel.min.css"
import "../NewBiz/lib/lightbox/css/lightbox.min.css"
import "../NewBiz/css/style.css"

var noLogin = ["/", "/login", "/signup", "/signUpNurseryPackage", "/signupNursery"];
var parent = ["/landing", "/inbox", "/childManager", "/search", "/editChild", "/addChild", "/nurseryInfo", "/assessment", "/assResults"];
var nursery = ["/childrenList", "/parentList", "/teacher", "/nurseryInfo_nursery", "/request", "/result_nursery", "/reviewPage", "/calendar"];

const Nevbar = () => {
  var pathname = window.location.pathname; 
  if(parent.indexOf(pathname) >= 0){
    
    return(
      <header id="header" className="fixed-top">
        {/* <div className="container"> */}
          <div className="logo float-left">
            <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <a href="#intro" className="scrollto"><img src="./sunerry1.png" alt className="img-fluid" /></a>
          </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active"><a href="/">Home</a></li>
            <li className="drop-down"><a href>Nursery</a>
            <ul>
              <li><a href="#">Map</a></li>
              <li><a href="#">Favorites</a></li>
            </ul>
          </li>
          <li><a href="#team">Inbox</a></li>
          <li><a href="#team">Notifications</a></li>
          <li className="drop-down"><a>Account</a>
          <ul>
              <li><a href="#">Profile Setting</a></li>
              <li><a href="#">Manage Child</a></li>
              <li><a href="#">Language</a></li>
              <li><a href="#">Log out</a></li>
            </ul>
          </li>
          <li><a></a></li>
          </ul>
        </nav>
        {/* </div> */}
      </header>
  
    )
    }
    else if(nursery.indexOf(pathname) >= 0)
    {
      return(
        <header id="header" className="fixed-top">
          {/* <div className="container"> */}
            <div className="logo float-left">
              <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a href="#intro" className="scrollto"><img src="./sunerry1.png" alt className="img-fluid" /></a>
            </div>
          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              <li className="active"><a href="/">Home</a></li>
              <li className="drop-down"><a href>Nursery</a>
              <ul>
                <li><a href="#">Map</a></li>
                <li><a href="#">Favorites</a></li>
              </ul>
            </li>
            <li><a href="#team">Inbox</a></li>
            <li><a href="#team">Notifications</a></li>
            <li className="drop-down"><a>Parent</a>
            <ul>
                <li><a href="#">Profile Setting</a></li>
                <li><a href="#">Manage Child</a></li>
                <li><a href="#">Language</a></li>
                <li><a href="#">Log out</a></li>
              </ul>
            </li>
            <li><a></a></li>
            </ul>
          </nav>
          {/* </div> */}
        </header>
    
      )
      }else{
        return(
          <header id="header" className="fixed-top">
            {/* <div className="container"> */}
              <div className="logo float-left">
                <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="#intro" className="scrollto"><img src="./sunerry1.png" alt className="img-fluid" /></a>
              </div>
            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                <li className="active"><a href="/">ลงทะเบียน Nursery กับ Sunnery</a></li>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/login">Sign in</a></li>
              <li><a></a></li>
              </ul>
            </nav>
            {/* </div> */}
          </header>
      
        )
      }

};

export default Nevbar
