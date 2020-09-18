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
/*<Button color="inherit" component={Link} to="/">
      Home
  </Button>*/

//   //Favicons
// import icon from "../components/NewBiz/img/favicon.png";
// import "../components/NewBiz/img/apple-touch-icon.png"

// // CSS
// import "../components/NewBiz/lib/bootstrap/css/bootstrap.min.css"
// import "../components/NewBiz/lib/font-awesome/css/font-awesome.min.css"
// import "../components/NewBiz/lib/animate/animate.min.css"
// import "../components/NewBiz/lib/ionicons/css/ionicons.min.css"
// import "../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css"
// import "../components/NewBiz/lib/lightbox/css/lightbox.min.css"
// import "../components/NewBiz/css/style.css"

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
  //     <div>
  //         <header id="header" className="fixed-top">
  //   <div className="container">
  //     <div className="logo float-left">
  //       {/* Uncomment below if you prefer to use an image logo */}
  //       {/* <h1 class="text-light"><a href="#header"><span>NewBiz</span></a></h1> */}
  //       <a href="#intro" className="scrollto"><img src="./sunerry1.png" center bottom no-repeat alt className="img-fluid" /></a>
  //     </div>
  //     <nav className="main-nav float-right d-none d-lg-block">
  //       <ul>
  //         <li className="active"><a href="#intro">Home</a></li>
  //         <li><a href="#about">About Us</a></li>
  //         <li><a href="#services">Services</a></li>
  //         <li><a href="#portfolio">Portfolio</a></li>
  //         <li><a href="#team">Team</a></li>
  //         <li className="drop-down"><a href>Drop Down</a>
  //           <ul>
  //             <li><a href="#">Drop Down 1</a></li>
  //             <li className="drop-down"><a href="#">Drop Down 2</a>
  //               <ul>
  //                 <li><a href="#">Deep Drop Down 1</a></li>
  //                 <li><a href="#">Deep Drop Down 2</a></li>
  //                 <li><a href="#">Deep Drop Down 3</a></li>
  //                 <li><a href="#">Deep Drop Down 4</a></li>
  //                 <li><a href="#">Deep Drop Down 5</a></li>
  //               </ul>
  //             </li>
  //             <li><a href="#">Drop Down 3</a></li>
  //             <li><a href="#">Drop Down 4</a></li>
  //             <li><a href="#">Drop Down 5</a></li>
  //           </ul>
  //         </li>
  //         <li><a href="#contact">Contact Us</a></li>
  //         <li><a href="#">Test</a></li>
  //       </ul>
  //     </nav>{/* .main-nav */}
  //   </div>
  // </header>{/* #header */}
  //     </div>
      <AppBar position="static">
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <PostScream />
              <Link to="/">
                <MyButton tip="indexGuardian">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
            </Fragment>
          ) : (
              <Fragment>
                <Button color="inherit" component={Link} to="/login">
                  Login
              </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Sign up
              </Button>
              <Button color="inherit" component={Link} to="/logout">
                  Log out
              </Button>
                {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  Open Menu
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem color="inherit" component={Link} to="/signup">Profile</MenuItem>
                  <MenuItem color="inherit" component={Link} to="/signup">My account</MenuItem>
                  <MenuItem color="inherit" component={Link} to="/signup">Logout</MenuItem>
                </Menu> */}
              </Fragment>
            )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
