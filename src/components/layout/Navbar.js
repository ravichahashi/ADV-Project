import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Icons
import HomeIcon from '@material-ui/icons/Home';

// CSS
import "../NewBiz/lib/bootstrap/css/bootstrap.min.css"
import "../NewBiz/lib/font-awesome/css/font-awesome.min.css"
import "../NewBiz/lib/animate/animate.min.css"
import "../NewBiz/lib/ionicons/css/ionicons.min.css"
import "../NewBiz/lib/owlcarousel/assets/owl.carousel.min.css"
import "../NewBiz/lib/lightbox/css/lightbox.min.css"
import "../NewBiz/css/style.css"


const Nevbar = () => {
  return(
    <header id="header" className="fixed-top">
      {/* <div className="container"> */}
        <div className="logo float-left">
          <a href="#intro" className="scrollto"><img src="img/logo.png" alt className="img-fluid" /></a>
        </div>
      <nav className="main-nav float-right d-none d-lg-block">
        <ul>
          <li className="active"><a href="#intro">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li className="drop-down"><a href>Drop Down</a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="drop-down"><a href="#">Drop Down 2</a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
            <li><a href="#">Drop Down 5</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      {/* </div> */}
    </header>

  )
};

export default Nevbar
