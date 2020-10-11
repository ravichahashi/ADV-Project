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
import themeObject from "./util/theme";
import AuthRoute from "./util/AuthRoute";

// CSS
import "./components/NewBiz/css/style.css"

////////////////////// Pages //////////////////////
// No User
import indexGuardian from "./pages/NoUser/indexGuardian";
import login from "./pages/NoUser/login";
import signup from "./pages/NoUser/signup";
import signUpNurseryPackage from "./pages/NoUser/signUpNurseryPackage";
import signupNursery from "./pages/NoUser/signUpNursery";
import pretestinfo from "./pages/NoUser/pretestinfo";

// Parent
import landing from "./pages/Parent/landing";
import inbox from "./pages/Parent/inbox";
import overviewChild from "./pages/overviewChild";
import search from "./pages/Parent/search";
import editChild from "./pages/Parent/editChild";
import addchild from "./pages/Parent/addchild";
import nurseryInfo_parent from "./pages/Parent/nurseryInfo";

// Nusery
import home from "./pages/home";
import user from "./pages/user";
import assResultsNursery from "./pages/Nursery/assResultsNursery";
import dashboardNursery from "./pages/Nursery/dashboardNursery";
import assessment from "./pages/assessment";
// import landing from "./pages/landing";



import axios from "axios";
import AssResults from "./pages/Parent/assResults";

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


class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div> {/*className ="paddingtop"*/}
              <Switch>
                {/* No User */}
                <AuthRoute exact path="/" component={indexGuardian} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
                <AuthRoute exact path="/signupnurserypackage" component={signUpNurseryPackage} />
                <AuthRoute exact path="/signupnursery" component={signupNursery} />
                <AuthRoute exact path="/pretestinfo" component={pretestinfo} />
                {/* <AuthRoute exact path="/assessment" component={assessment} /> */}

                <Route exact path="/" component={indexGuardian} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/signupnurserypackage" component={signUpNurseryPackage} />
                <Route exact path="/signupnursery" component={signupNursery} />

                
                {/* Parent */}
                <Route exact path="/landing" component={landing} />
                <Route exact path="/inbox" component={inbox} />
                <Route exact path="/childmanager" component={overviewChild} />
                <Route exact path="/search" component={search} />
                <Route exact path="/editchild" component={editChild} />
                <Route exact path="/addchild" component={addchild} />
                <Route exact path="/nurseryInfo" component={nurseryInfo_parent} />
                {/* Nusery */}
                
                <Route exact path="/assessment" component={assessment} />
                <Route exact path="/assResults" component={AssResults} />
                <Route exact path="/assResultsNursery" component={assResultsNursery} />
                <Route exact path="/dashboardNursery" component={dashboardNursery} />
                <Route exact path="/home" component={home} />
                <Route
                  exact
                  path="/indexGuardian"
                  component={indexGuardian}
                />
                
                <Route
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
