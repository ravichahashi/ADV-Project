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
        <section id="nurserybar" className="section-bg">
          <div className="container" align="center">
            <div className="col-md-10 col-lg-ุ5">
              <div className="box">
                <div className="row">
                  <h4 className="title">Nursery ใกล้บ้าน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                  <h4 className="title">จังหวัด<a>&nbsp;</a></h4>
                  <option></option>
                  <form>
                    <select name="position">
                      <option></option><option value="city">{nursery[0].city}</option><option value="Accounting">Accounting</option>
                    </select>&nbsp;&nbsp;&nbsp;&nbsp;
                  </form>
                  <h4 className="title">อำเภอ&nbsp;</h4>
                  <option></option>
                  <form>
                    <select name="position">
                      <option></option><option value="district">{nursery[0].district}</option><option value="Accounting">Accounting</option>
                    </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </form>
                  <section><option></option></section>
                  <section id="search">
                    <div class="form">
                      <div class="text-center"><button type="submit" title="Search">ค้นหา</button></div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
