import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const click = (e) => {
    console.log(e);
  };

const AssResults = () => {
  return (
    <div>
      <section id="assResults" className="section-bg">
        <div className="container">
          <header className="section-content">
            <h3>ผลการประเมิน</h3>
            <p>ชื่อ............... อายุ.... ชื่อเล่น.......</p>
            <br></br>
            <p>เพศ:.... น้ำหนัก:..... ส่วนสูง:..... Nursery:......</p>
          </header>
        </div>
      </section>

      <section id="assResults2">
        <div className="container-fluid">
          <div className="row wow fadeInUp">
            <div className="col-lg-6">
              <div className="map mb-4 mb-lg-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 312 }}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <div className="row about-container">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                    <h4 className="title">
                      <a>ผลการประเมิน:</a>
                    </h4>
                    <p className="description">
                      ..............................................................................................................
                      ..............................................................................................................
                      ..............................................................................................................
                      ..............................................................................................................
                    </p>
                  </div>
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                    <h4 className="title">
                      <a href>คำแนะนำด้านพัฒนาการ:</a>
                    </h4>
                    <p className="description">
                      ..............................................................................................................
                      ..............................................................................................................
                      ..............................................................................................................
                      ..............................................................................................................
                    </p>
                  </div>
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                    <div
                      class="card wow bounceInUp"
                      onClick={(e) => {
                        e.preventDefault();
                        click(1);
                      }}
                    >
                      <Button type="pass">
                        <h1>ทำแบบประเมิน</h1>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssResults;
