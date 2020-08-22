import React, { Component } from 'react'

export default class Sign_up extends Component {
    render() {
        return (
            <div>
  <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" style={{backgroundImage: 'url(images/img_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="gtco-container">
      <div className="row">
        <div className="col-md-12 col-md-offset-0 text-left">
          <div className="row row-mt-15em">
            <div className="col-md-5 mt-text animate-box" data-animate-effect="fadeInUp">
              <h1 className="cursive-font">Build for</h1>
              <h1 className="cursive-font">Nursery and Guardian</h1>	
            </div>
            <div className="col-md-6 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
              <div className="form-wrap">
                <div className="tab">
                  <div className="tab-content">
                    <div className="tab-content-inner active" data-content="signup">
    
                      <form action="#">
                        <div className="row form-group">
                          <div className="col-md-6">
                            <label htmlFor="activities">First Name</label>
                            <input type="text" id="activities" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="activities">LastName</label>
                            <input type="text" id="activities" className="form-control" />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label htmlFor="date-start">Email</label>
                            <input type="text" id="date" className="form-control" />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label htmlFor="date-start">Address</label>
                            <input type="text" id="time" className="form-control" />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label htmlFor="date-start">Phone Number</label>
                            <input type="text" id="time" className="form-control" />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-6">
                            <label htmlFor="activities">Password</label>
                            <input type="password" id="activities" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="activities">Confirm Password</label>
                            <input type="password" id="activities" className="form-control"/>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <input type="submit" className="btn btn-primary btn-block" Value="Sign up for Sunerry" />
                          </div>
                        </div>
                      </form>	
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>


        )
    }
}
