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
        <li className="drop-down"><a>Nursery</a>
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
};

export default Nevbar
