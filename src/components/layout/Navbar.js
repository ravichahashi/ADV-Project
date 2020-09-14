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

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
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
