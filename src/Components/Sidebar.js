import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar(){

  const navigate = useNavigate() 


  const home=()=>{
  
   window.location.reload();

   navigate("/worktracker")

  }

    return(
    
        <>


{/* Sidebar */}
<ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
  <a className="sidebar-brand d-flex align-items-center justify-content-center" onClick={home} >
    <div className="sidebar-brand-icon">
      <img src="img/logo/logo2.png" />
    </div>
    <div className="sidebar-brand-text mx-3" style={{color:"white"}}>Worktracker</div>
  </a>
  <hr className="sidebar-divider my-0" />
  <li className="nav-item active">
    <a className="nav-link" href="index.html">
      <i className="fas fa-fw fa-tachometer-alt" />
      <span>Dashboard</span></a>
  </li>
  <hr className="sidebar-divider" />
  <div className="sidebar-heading">
    Features
  </div>
 
 
 
  <li className="nav-item">
    <a className="nav-link" href="charts.html">
      <i className="fas fa-fw fa-chart-area" />
      <span>Report</span>
    </a>
  </li>

  <hr className="sidebar-divider" />
  <div className="version" id="version-ruangadmin" />
</ul>
{/* Sidebar */}
   
        
        </>
    
    )
    
    }