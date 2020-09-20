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

const styles = (theme) => ({
  ...theme,
});

class signup extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      errors: {},
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
      email: this.state.email,
      address: this.address,
      phoneNumber: this.phoneNumber,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
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

    return (
      <Grid container className={classes.form}>
        <Grid item xs={12} sm={7} />
        <Grid item sm>
          <img src={AppIcon} alt="monkey" className={classes.image} />
          <Typography
            variant="h1"
            class="cursive-font"
            className={classes.pageTitle}
          >
            Sign Up to Sunerry
          </Typography>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              id="First Name"
              name="First Name"
              type="First Name"
              label="First Name"
              className={classes.textField}
              helperText={errors.fName}
              error={errors.fName ? true : false}
              value={this.state.fName}
              onChange={this.handleChange}
              halfWidth
            />
            <TextField
              id="Last Name"
              name="Last Name"
              type="Last Name"
              label="Last Name"
              className={classes.textField}
              helperText={errors.lName}
              error={errors.lName ? true : false}
              value={this.state.lName}
              onChange={this.handleChange}
              halfWidth
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="Address"
              name="Address"
              type="Address"
              label="Address"
              className={classes.textField}
              helperText={errors.address}
              error={errors.address ? true : false}
              value={this.state.address}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="Phone Number"
              name="Phone Number"
              type="Phone Number"
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              <Link to="/login">Sign Up to Sunerry</Link>
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              Already have an account ? Sign in <Link to="/login">Here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signup.propTypes = {
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
  withStyles(styles)(signup)
);
