import {useEffect} from "react";

export default function Sidebar(){


    return(
    
        <>


{/* Sidebar */}
<ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon">
      <img src="img/logo/logo2.png" />
    </div>
    <div className="sidebar-brand-text mx-3">Worktracker</div>
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