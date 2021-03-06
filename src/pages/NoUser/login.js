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
import { loginUser } from "../../redux/actions/userActions";

// CSS
import "../../components/NewBiz/css/style.css";

const styles = (theme) => ({
  ...theme.spreadThis,
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      type: "nursery",
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
      type: this.state.type,
    };
    this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isParent = false;
  selectParent = () => {
    this.isParent = true;
    this.setState({
      type: "parent",
    });
    this.forceUpdate();
  };

  selectNursery = () => {
    this.isParent = false;
    this.setState({
      type: "nursery",
    });
    this.forceUpdate();
  };

  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

    return (
      <Grid container className={classes.form} style={{ padding: 100 }}>
        <Grid item xs={12} sm={7} />
        <Grid item sm>
          <img src={AppIcon} alt="monkey" className={classes.image} />
          <Typography
            variant="h1"
            class="cursive-font"
            className={classes.pageTitle}
          >
            Sign in to Sunerry
          </Typography>

          <form noValidate onSubmit={this.handleSubmit}>
            {/* {toggleType} */}
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                className={`${
                  this.isParent
                    ? `btn btn-primary active`
                    : `btn btn-secondary active`
                }`}
                onClick={this.selectParent}
              >
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autoComplete="off"
                  defaultChecked
                />{" "}
                Parent
              </label>
              <label
                className={`${
                  !this.isParent
                    ? `btn btn-primary active`
                    : `btn btn-secondary active`
                }`}
                onClick={this.selectNursery}
              >
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autoComplete="off"
                />{" "}
                Nursery
              </label>
            </div>

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
              Sign in
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              Don't have an account ? sign up <Link to="/signup">here</Link>
            </small>
          </form>
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
