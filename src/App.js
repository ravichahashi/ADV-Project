import React, { Component } from "react";
import Header from "./Header";
import Sign_up from "./Sign_up";
import Sign_in from "./Sign_in";
import Add_children from "./Add_children";
//import Menu from './Menu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signSel: 1,
      signIn: false,
      user: {},
    };

    this.handleHeader = this.handleHeader.bind(this);
    this.displayPage = this.displayPage.bind(this);
  }

  handleHeader(sel) {
    this.setState({
      signSel: sel,
    });
  }

  handleSignIn(user) {
    this.setState({
      signIn: true,
      user: user,
    });
  }

  displayPage() {
    if (this.state.signIn) {
      return <Add_children user={this.state.user} />;
    } else if (this.state.signSel === 1) {
      return <Sign_up />;
    } else {
      return <Sign_in notifySignIn={(user) => this.handleSignIn(user)} />;
    }
  }

  render() {
    return (
      <div>
        <Header notifySign={(sel) => this.handleHeader(sel)} />
        {this.displayPage()}
      </div>
    );
  }
}
