import React, { useEffect, useState } from "react";

// Redux stuff
import { connect } from 'react-redux';

// CSS
import "../../components/NewBiz/lib/bootstrap/css/bootstrap.min.css"
import "../../components/NewBiz/lib/font-awesome/css/font-awesome.min.css"
import "../../components/NewBiz/lib/animate/animate.min.css"
import "../../components/NewBiz/lib/ionicons/css/ionicons.min.css"
import "../../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css"
import "../../components/NewBiz/lib/lightbox/css/lightbox.min.css"
import "../../components/NewBiz/css/style.css"

const Index = () => {
  const [nursery, setNursery] = useState([
    {
    }
  ]);
  return (
    <div>
      <main id="main">
      <section id="tap"></section>
        <section id="tab" className="section-bg">
          <table width="100%">
            <tr>
              <td width="20%" align="center">
              <button><h3><a>Students</a></h3></button>
              </td>
              <td width="20%" align="center">
              <button><h3><a>Teachers</a></h3></button>
              </td>
              <td width="20%" align="center">
              <button><h3><a>Customers</a></h3></button>
              </td>
              <td width="20%" align="center">
              <button><h3><a>My page</a></h3></button>
              </td>
              <td width="20%" align="center">
              <button><h3><a>Calendar</a></h3></button>
              </td>
            </tr>
          </table>
        </section>
        <section id="dashboard">
          <table width="80%" align="center">
            <tr>
              <td width="27%">
                <div className="box">
                  <h4>Students</h4>
                </div>
              </td>
              <td width="27%">
                <div className="box">
                  <h4>Teachers</h4>
                </div>
              </td>
              <td width="27%">
                <div className="box">
                  <h4>Customers</h4>
                </div>
              </td>
              <td width="19%">
                <div className="box">
                  <h4>Rating</h4>
                </div>
              </td>
            </tr>
          </table>
          <table width="80%" align="center">
          <tr>
              <td width="65%">
                <div className="box">
                  <h4>พัฒนาการเด็กโดยรวม</h4>
                </div>
              </td>
              <td width="35%">
                <div className="box">
                  <h4>Events</h4>
                </div>
              </td>
            </tr>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Index;
