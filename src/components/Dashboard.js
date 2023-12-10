import React from "react";
import Attendence from "./Attendance";
import './Dashboard.css'
import { Link, Route } from "react-router-dom";

function Dashboad(){
    return(
    <div>
       
  <div class="dashboard">
    <nav class="sidebar">
      <div class="logo">Student management system</div>
      <ul>
        <li><a href="#"></a>Dashboard</li><br/>
        <li><a href="#">Student</a></li><br/>
        <li><a href="#">Courses</a></li><br/>
       <li><a href="#">Attendance</a></li><br/>
        
      </ul>
    </nav>

    <div class="main-content">
      <header>
      
      </header>
      <div class="card mb-3 card-1">
  <div class="card-body">
    <h5 class="card-title">Total Students</h5>
    <p class="card-text card-2">10</p>
    
  </div>
</div>


<div class="card card-1">
  <div class="card-body">
    <h5 class="card-title">Total Course</h5>
    <p class="card-text card-2">3</p>
    
  </div>
</div>
<br/>

<div class="card card-1">
  <div class="card-body">
    <h5 class="card-title"> Total Attendance</h5>
    <p class="card-text card-2">60%</p>
    
  </div>
</div>


      <div class="content">
        <p>This is the main content area of your dashboard.</p>
      </div>
    </div>
  </div>
    </div>
    )};
export default Dashboad;