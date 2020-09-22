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
import NavbarNursery from "./components/layout/NavbarNursery";
import themeObject from "./util/theme";
import AuthRoute from "./util/AuthRoute";

////////////////////// Pages //////////////////////
// No User
import indexGuardian from "./pages/NoUser/indexGuardian";
import login from "./pages/NoUser/login";
import signup from "./pages/NoUser/signup";
import signUpNurseryPackage from "./pages/NoUser/signUpNurseryPackage";
import signupNursery from "./pages/NoUser/signUpNursery";
// Parent
import landing from "./pages/Parent/landing";
import inbox from "./pages/Parent/inbox";
import childManager from "./pages/Parent/childmanager";
import search from "./pages/Parent/search";
import editChild from "./pages/Parent/editChild";
import addchild from "./pages/Parent/addchild";
import nurseryInfo_parent from "./pages/Parent/nurseryInfo";

// Nusery
import home from "./pages/home";
import user from "./pages/user";
import overviewChild from "./pages/overviewChild";
import assessment from "./pages/assessment";
// import landing from "./pages/landing";



import axios from "axios";
import AssResults from "./pages/assResults";

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

const LabelNavbar = Navbar;
const FilterNavbar = () =>{
  //Get path only
  var pathname = window.location.pathname; 
  // console.log(pathname);
  var noLogin = ["/", "/signIn", "/signup", "/signUpNurseryPackage", "/signupNursery"];
  var parent = ["/landing", "/inbox", "/childManager", "/search", "/editChild", "/addChild", "/nurseryInfo_parent", "/estimation", "/result_parent"];
  var nursery = ["/childrenList", "/parentList", "/teacher", "/nurseryInfo_nursery", "/request", "/result_nursery", "/reviewPage", "/calendar"];
  
  // console.log(noLogin.indexOf(pathname));
  console.log("This user: "+AuthRoute);

};

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
                {/* No User */}
                <Route exact path="/" component={indexGuardian} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/signupnurserypackage" component={signUpNurseryPackage} />
                <Route exact path="/signupnursery" component={signupNursery} />
                
                {/* Parent */}
                <AuthRoute exact path="/landing" component={landing} />
                <AuthRoute exact path="/inbox" component={inbox} />
                <AuthRoute exact path="/childmanager" component={childManager} />
                <AuthRoute exact path="/search" component={search} />
                <AuthRoute exact path="/editchild" component={editChild} />
                <AuthRoute exact path="/nurseryInfo" component={nurseryInfo_parent} />

                {/* Nusery */}
                
                <AuthRoute exact path="/assessment" component={assessment} />
                <AuthRoute exact path="/assResults" component={AssResults} />
                <Route exact path="/home" component={home} />
                <AuthRoute
                  exact
                  path="/indexGuardian"
                  component={indexGuardian}
                />
                
                <AuthRoute
                  exact
                  path="/overviewChild"
                  component={overviewChild}
                />
                <AuthRoute exact path="/addchild" component={addchild} />
                
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
