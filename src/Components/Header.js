export default function Header(props){

    return(
    
        <>
        
{/* TopBar */}
<nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
  <button id="sidebarToggleTop" className="btn btn-link rounded-circle mr-3">
    <i className="fa fa-bars" />
  </button>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item dropdown no-arrow">
      <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-search fa-fw" />
      </a>
      <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
        <form className="navbar-search">
          <div className="input-group">
            <input type="text" className="form-control bg-light border-1 small" placeholder="What do you want to look for?" aria-label="Search" aria-describedby="basic-addon2" style={{borderColor: '#3f51b5'}} />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    <li className="nav-item dropdown no-arrow mx-1">
      <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-bell fa-fw" />
        <span className="badge badge-danger badge-counter">3+</span>
      </a>
      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
        <h6 className="dropdown-header">
          Alerts Center
        </h6>
        <a className="dropdown-item d-flex align-items-center" href="#">
          <div className="mr-3">
            <div className="icon-circle bg-primary">
              <i className="fas fa-file-alt text-white" />
            </div>
          </div>
       
        </a>
        <a className="dropdown-item d-flex align-items-center" href="#">
          <div className="mr-3">
            <div className="icon-circle bg-success">
              <i className="fas fa-donate text-white" />
            </div>
          </div>
        
        </a>
        <a className="dropdown-item d-flex align-items-center" href="#">
          <div className="mr-3">
            <div className="icon-circle bg-warning">
              <i className="fas fa-exclamation-triangle text-white" />
            </div>
          </div>
         
        </a>
        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
      </div>
    </li>
    
  
    <div className="topbar-divider d-none d-sm-block" />
    <li className="nav-item dropdown no-arrow">
      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img className="img-profile rounded-circle" src="img/boy.png" style={{maxWidth: 60}} />
        <span className="ml-2 d-none d-lg-inline text-white small"> {props.username} </span>
      </a>
      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
        <a className="dropdown-item" href="#">
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
          Profile
        </a>    
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#logoutModal">
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
          Logout
        </a>
      </div>
    </li>
  </ul>
</nav>
{/* Topbar */}

        
        </>
    
    )
    
    }