import React, { Component } from "react";

export default class Hearder extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i, e) {
    e.preventDefault();
    this.props.notifySign(i);
  }

  render() {
    return (
      <div>
        <nav class="gtco-nav" role="navigation">
          <div class="gtco-container">
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <div id="gtco-logo">
                  <a href="index.html">
                    Sunerry <em>.</em>
                  </a>
                </div>
              </div>
              <div class="col-xs-8 text-right menu-1">
                <ul>
                  <li class="btn-cta">
                    <a href="#" onClick={(e) => this.handleClick(0, e)}>
                      <span>Sign-in</span>
                    </a>
                  </li>
                  <li class="btn-cta">
                    <a href="#" onClick={(e) => this.handleClick(1, e)}>
                      <span>Sign-up</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
