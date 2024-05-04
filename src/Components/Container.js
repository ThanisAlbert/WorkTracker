import {useLayoutEffect} from "react";

import Userlogout from "./Userlogout";


export default function Container(){


    return(
    
        <>
        
 
         {/* Container Fluid*/}
         <div className="container-fluid" id="container-wrapper">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h6 className="h3 mb-0 text-gray-800">WorkTracker</h6>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="./">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </div>
          <div className="row mb-3">
           
         
            {/* Area Chart */}
            <div className="col-xl-10 col-lg-10">
              <div className="card mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                 
                </div>
                <div className="card-body">
                  <div className="chart-area">
                    <canvas id="myAreaChart" />
                  </div>
                </div>
              </div>
            </div>
            {/* Pie Chart */}
         
        
          </div>
        
          {/* Modal Logout */}
          
         <Userlogout></Userlogout>
          

        </div>
        {/*-Container Fluid*/}
        
        
        </>


    )

}