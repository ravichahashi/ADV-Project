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

import CanvasJSReact from "./../../components/canvasjs-3.1/canvasjs.react";
import RadarChart from "react-svg-radar-chart";
import Calendar from 'react-calendar';

var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

///////////// Data chart ///////////
const DSPM_data = [
  {
    data: {
      GM: 0.84,
      FM: 0.8,
      RL: 0.9,
      EL: 0.67,
      PS: 0.8,
    },
    meta: { color: "blue" },
  },
];

const A49_data = [
  {
    data: {
      GM: 0.84,
      FM: 0.8,
      UL: 0.67,
      PS: 0.8,
    },
    meta: { color: "red" },
  },
];

const DSPM_captions = {
  // columns
  GM: "Gross Motor",
  FM: "Fine Motor",
  RL: "Receptive Language",
  EL: "Expressive Language",
  PS: "Personal and Social",
};

const A49_captions = {
  // columns
  GM: "Gross Motor",
  FM: "Fine Motor",
  UL: "Using Language",
  PS: "Personal and Social",
};

class DashboardNursery extends Component {

  constructor() {
		super();
		this.addSymbols = this.addSymbols.bind(this);
	};
  
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;

		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;	
	};
	
	render() {
    /////////// Data student ///////////
		const student = {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title: {
				text: ""
			},
			axisY: {
				title: "จำนวนนักเรียน",
				labelFormatter: this.addSymbols,
				scaleBreaks: {
				autoCalculate: true
			}
			},
			axisX: {
				title: "อายุ",
				labelAngle: 0
			},
			data: [{
				type: "column",
				dataPoints: [
					{ label: "0-1", y: 2},
					{ label: "1-2", y: 4},
					{ label: "2-3", y: 6},
					{ label: "3-4", y: 8},
					{ label: "4-5", y: 1},
					{ label: "5-6", y: 5}
				]
			}]
		}
    
    /////////// Data teacher ///////////
    const teacher = {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title: {
				text: ""
			},
			axisY: {
				title: "จำนวนบุคลากร",
				labelFormatter: this.addSymbols,
				scaleBreaks: {
				autoCalculate: true
			}
			},
			axisX: {
				title: "ตำแหน่ง",
				labelAngle: 0
			},
			data: [{
				type: "column",
				dataPoints: [
					{ label: "ครูพี่เลี้ยง", y: 2},
					{ label: "แม่บ้าน", y: 4},
					{ label: "ภารโรง", y: 6}
				]
			}]
    }
    
    /////////// Data parent ///////////
    const parent = {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title: {
				text: ""
			},
			axisY: {
				title: "จำนวนผู้ปกครอง",
				labelFormatter: this.addSymbols,
				scaleBreaks: {
				autoCalculate: true
			}
			},
			axisX: {
				title: "เดือน",
				labelAngle: 0
			},
			data: [{
				type: "column",
				dataPoints: [
					{ label: "ม.ค.", y: 1},
					{ label: "ก.พ.", y: 4},
          { label: "มี.ค.", y: 6},
          { label: "เม.ย.", y: 2},
					{ label: "พ.ค.", y: 4},
          { label: "มิ.ย.", y: 6},
          { label: "ก.ค.", y: 2},
					{ label: "ส.ค.", y: 4},
          { label: "ก.ย.", y: 6},
          { label: "ต.ค.", y: 2},
					{ label: "พ.ย.", y: 4},
					{ label: "ธ.ค.", y: 6},
				]
			}]
    }
    
    

  return (
    <div>
      <main id="main">
      <section id="tap"></section>
        <section id="tab" className="section-bg-white">
          <table width="100%">
            <div className="btn-group btn-group-toggle btn-group-lg" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" name="options" id="option1" defaultChecked /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;นักเรียน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ครูพี่เลี้ยง&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option3" /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้ปกครอง&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option4"/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option5" /> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;กิจกรรม&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
            </div>
          </table>
        </section>

        <section id="dashboard">
          <table width="100%" align="center">
            <tr>
              <td width="27%">
                <div className="box">
                  <h4>นักเรียน</h4>
                  <div>
			              <CanvasJSChart options = {student} onRef={ref => this.chart = ref}/>
			              {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		              </div>
                </div>
              </td>
              <td width="27%">
                <div className="box">
                  <h4>ครูพี่เลี้ยง</h4>
                  <div>
			              <CanvasJSChart options = {teacher} onRef={ref => this.chart = ref}/>
			              {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		              </div>
                </div>
              </td>
              <td width="27%">
                <div className="box">
                  <h4>ผู้ปกครอง</h4>
                  <div>
			              <CanvasJSChart options = {parent} onRef={ref => this.chart = ref}/>
			              {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		              </div>
                </div>
              </td>
              <td width="19%">
                <div className="box">
                  <h4>เรทติ้ง</h4>

                  <h1></h1>
                  <div style={{textAlign: 'center'}}>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                  </svg>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                  </svg>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                  </svg>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1.314C3.562-3.248-7.534 4.735 8 15V1.314z"/>
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                  </div>
                  
                  <div style={{textAlign: 'center'}}>
                    <h1></h1>
                    <h2>3.5</h2>
                    <h2>__________</h2>
                  </div>

                  <div><a>Lorem</a></div>
                  <div><a>Lorem</a></div>
                  <div><a>Lorem</a></div>
                  <div><a>Lorem</a></div>
                  <div><a>Lorem</a></div>
                  <div><a>Lorem</a></div>

                  <div style={{textAlign: 'center'}}>
                    <h2>__________</h2>
                    <a> </a>
                    <button type="button" class="btn btn-warning" href="#">รีวิว</button>
                  </div>
                  

                </div>
              </td>
            </tr>
          </table>
          <table width="100%" align="center">
          <tr>
              <td width="65%">
                <div className="box">
                  <h4>พัฒนาการเด็กโดยรวม</h4>
                  <RadarChart size={390} captions={DSPM_captions} data={DSPM_data} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <RadarChart size={390} captions={A49_captions} data={A49_data} />
                </div>
              </td>
              <td width="35%">
                <div className="box">
                  <h4>กิจกรรม</h4>
                  <div>
                    <Calendar
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </section>
      </main>
    </div>
  );
  };
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNursery);

// export default DashboardNursery;
