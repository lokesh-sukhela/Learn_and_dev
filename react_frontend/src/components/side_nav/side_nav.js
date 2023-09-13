import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import { json, useNavigate } from 'react-router-dom';
import './side_nav.css'

function LearningAndDev() {
 

    return (
      <div>

        <div className="container">

          <div className="sidenav">

            <div className="logo">

    

            </div>

            <div className="Dashboard" style={{ paddingTop: '20px' }}>
            <a href='#'></a>
            <a href="/Profile">Profile</a>


              <a href="#">Dashboard</a>

              <a href="#">Timesheet</a>

              <a href="#">Projects</a>



              <button className="dropdown-btn">Leave

                <i className="fa fa-caret-down"></i>

              </button>

              <div className="dropdown-container">

                <a href="#">Link 1</a>

                <a href="#">Link 2</a>

                <a href="#">Link 3</a>

              </div>

              <a href="#">Work From Home</a>

              <button className="dropdown-btn">Approvals

                <i className="fa fa-caret-down"></i>

              </button>

              <a href="#">Survey</a>

              <a href="#">Service Desk</a>

              <a href="#">Forms</a>

              <a href="#">Travel</a>

              <a href="#">Expenses</a>

              <button className="dropdown-btn">Settings

                <i className="fa fa-caret-down"></i>

              </button>

              <button className="dropdown-btn">Control Panel

                <i className="fa fa-caret-down"></i>

              </button>

              <a href="#">Resourcing</a>

              <a href="#">Access Control</a>
              <a href="/Learn">L&D</a>
              {/* <a href="/"><button type="button" id = "logoutbtn"class="btn btn-danger">Logout</button></a> */}




            </div>

          </div>

         </div>


      </div>
    );
  }

  export default LearningAndDev;

  