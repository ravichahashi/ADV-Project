import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../../images/sunerry1.png";
import { Link } from "react-router-dom";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
// Redux stuff
import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/userActions";

// CSS
import "../../components/NewBiz/lib/bootstrap/css/bootstrap.min.css";
import "../../components/NewBiz/lib/font-awesome/css/font-awesome.min.css";
import "../../components/NewBiz/lib/animate/animate.min.css";
import "../../components/NewBiz/lib/ionicons/css/ionicons.min.css";
import "../../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../components/NewBiz/lib/lightbox/css/lightbox.min.css";
import "../../components/NewBiz/css/style.css";
import { Box } from "@material-ui/core";

// What package
const packageName = window.location.search;

const styles = (theme) => ({
  ...theme.spreadThis,
});

class signupnersery extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      fName: "",
      lName: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      errors: {},
      type: "Nursery",
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      fName: this.state.fName,
      lName: this.state.lName,
      username: this.state.username,
      email: this.state.email,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      type: this.state.type,
    };
    this.props.signupUser(newUserData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

    const iconpackage = [];
    if (packageName == "?Sliver") {
      iconpackage.push(
        <div className="box-s">
          <h5 className="card-title">Sliver</h5>
        </div>
      );
    } else if (packageName == "?Gold") {
      iconpackage.push(
        <div className="box-g">
          <h5 className="card-title">Gold</h5>
        </div>
      );
    } else if (packageName == "?Platinum") {
      iconpackage.push(
        <div className="box-p">
          <h5 className="card-title">Platinum</h5>
        </div>
      );
    }

    return (
      <Grid container className={classes.form} style={{ padding: 100 }}>
        <Grid item xs={12} sm={7} />
        <Grid item sm>
          <Typography
            variant="h1"
            class="cursive-font"
            className={classes.pageTitle}
          >
            Sign Up to Sunerry
          </Typography>
          {/* <div className="box-g">
            <h5 className="card-title">Gold</h5>
          </div> */}
          {iconpackage}
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            {/* <TextField
              id="fName"
              name="fName"
              type="fName"
              label="First Name"
              className={classes.textField}
              helperText={errors.fName}
              error={errors.fName ? true : false}
              value={this.state.fName}
              onChange={this.handleChange}
              halfWidth
            />
            <a>&nbsp;&nbsp;</a>
            <TextField
              id="lName"
              name="lName"
              type="lName"
              label="Last Name"
              className={classes.textField}
              helperText={errors.lName}
              error={errors.lName ? true : false}
              value={this.state.lName}
              onChange={this.handleChange}
              halfWidth
            /> */}
            <TextField
              id="username"
              name="username"
              type="username"
              label="User name"
              className={classes.textField}
              helperText={errors.username}
              error={errors.username ? true : false}
              value={this.state.username}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="E-mail"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="address"
              name="address"
              type="address"
              label="Address"
              className={classes.textField}
              helperText={errors.address}
              error={errors.address ? true : false}
              value={this.state.address}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              type="phoneNumber"
              label="Phone Number"
              className={classes.textField}
              helperText={errors.phoneNumber}
              error={errors.phoneNumber ? true : false}
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              className={classes.textField}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                <small>
                  I agree to Sunerry's <Link to="#">Terms of Use</Link> and{" "}
                  <Link to="#">Cookie &amp; Privacy Policy.</Link>
                </small>
              </label>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Sign Up to Sunerry
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signupnersery.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(
  withStyles(styles)(signupnersery)
);
