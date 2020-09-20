import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";
// Components
import Navbar from "./components/layout/Navbar";
import NavbarGuardian from "./components/layout/NavbarGuardian";
import themeObject from "./util/theme";
import AuthRoute from "./util/AuthRoute";
// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import user from "./pages/user";
import indexGuardian from "./pages/indexGuardian";
import nurseryInfo from "./pages/nurseryInfo";
import overviewChild from "./pages/overviewChild";
// import index from "./pages/IndexGuardian";
import addchild from "./pages/addchild";
import assessment from "./pages/assessment";
import landing from "./pages/landing";

import axios from "axios";

const theme = createMuiTheme(themeObject);

axios.defaults.baseURL =
  "https://us-central1-sunerry-6cc5e.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

const LabelNavbar = NavbarGuardian;

const FilterNavbar = () =>{
  //Get path only
  var pathname = window.location.pathname; 
  console.log(pathname);
  var noLogin = ["/", "/signIn", "/signUpParent", "/signUpNurseryPackage", "/signUpNurseryPackageSelect"];
  var parent = ["/landing", "/inbox", "/childManager", "/search", "/editChild", "/addChild", "/nurseryInfo_parent", "/estimation", "/result_parent"];
  var nursery = ["/childrenList", "/parentList", "/teacher", "/nurseryInfo_nursery", "/request", "/result_nursery", "/reviewPage", "/calendar"]
  
  console.log(noLogin.indexOf(pathname))


  if(parent){

  };
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            {FilterNavbar()}
            <LabelNavbar />
            <div>
              <Switch>
                <Route exact path="/" component={indexGuardian} />
                {/* <AuthRoute exact path="/index" component={index} /> */}
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
                <AuthRoute exact path="/assessment" component={assessment} />
                <Route exact path="/home" component={home} />
                <AuthRoute
                  exact
                  path="/indexGuardian"
                  component={indexGuardian}
                />
                <AuthRoute exact path="/nurseryInfo" component={nurseryInfo} />
                <AuthRoute
                  exact
                  path="/overviewChild"
                  component={overviewChild}
                />
                <AuthRoute exact path="/addchild" component={addchild} />
                <AuthRoute exact path="/landing" component={landing} />
                <Route exact path="/users/:handle" component={user} />
                <Route
                  exact
                  path="/users/:handle/scream/:screamId"
                  component={user}
                />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
