import React, { useEffect, useState } from "react";

// Redux stuff
import { connect } from "react-redux";

// CSS
import "../../components/NewBiz/lib/bootstrap/css/bootstrap.min.css";
import "../../components/NewBiz/lib/font-awesome/css/font-awesome.min.css";
import "../../components/NewBiz/lib/animate/animate.min.css";
import "../../components/NewBiz/lib/ionicons/css/ionicons.min.css";
import "../../components/NewBiz/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../components/NewBiz/lib/lightbox/css/lightbox.min.css";
import "../../components/NewBiz/css/style.css";

const Adertise = () => {
  const [Nursery, setNursery] = useState([
    {
      nurseryName: "TechalueNursery",
      address: "เชียงใหม่",
      phone: "0948957469",
    },
    {
      nurseryName: "Superkid",
      address: "เชียงใหม่",
      phone: "0945587469",
    },
    {
      nurseryName: "TechalueNursery",
      address: "เชียงใหม่",
      phone: "0948957469",
    },
    {
      nurseryName: "Superkid",
      address: "เชียงใหม่",
      phone: "0945587469",
    },
    {
      nurseryName: "TechalueNursery",
      address: "เชียงใหม่",
      phone: "0948957469",
    },
    {
      nurseryName: "Superkid",
      address: "เชียงใหม่",
      phone: "0945587469",
    },
  ]);

  let item = [];
  for (let key in Nursery) {
    item.push(
      <div className="col-lg-4 mb-4">
        <div className="card wow bounceInUp">
          <i className="fa fa-diamond" />
          <div className="card-body">
            <h5 className="card-title">{Nursery[key].nurseryName}</h5>
            <p className="card-text">Address {Nursery[key].address}</p>
            <p className="card-text">Phone {Nursery[key].phone}</p>
            <a href="/registerChild" className="readmore">
              ลงทะเบียน{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <main id="main">
        <section id="why-us" className="wow fadeIn">
          <div className="container">
            <header className="section-header">
              <h3>แนะนำ เนอสเซอรี่</h3>
              <p></p>
            </header>
            <div className="row row-eq-height justify-content-center">
              {item}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Adertise;
