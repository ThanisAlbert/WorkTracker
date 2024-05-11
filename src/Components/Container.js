import {useLayoutEffect} from "react";
import Userlogout from "./Userlogout";
import Myform from "./Myform";

export default function Container(){

    return(
    
        <>
        
         {/* Container Fluid*/}
         <div className="container-fluid" id="container-wrapper">
         
          <div className="row mb-3">
           
         
            {/* Area Chart */}
            <div className="col-xl-10 col-lg-10">
               <Myform></Myform>
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