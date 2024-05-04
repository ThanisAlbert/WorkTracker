import React,{ useEffect, useState } from "react";

import Footer from "./Footer";
import Sidebar from "./Sidebar"
import Header from "./Header"
import Container from "./Container";
import { Routes, Route, useLocation } from 'react-router-dom';


export default function Page(){

  const username=useState(sessionStorage.getItem('username'))

 
    useEffect(() => {
      const loadScripts = () => {
        // Define an array of script URLs
        const scripts = [
          "vendor/jquery/jquery.min.js",
          "vendor/bootstrap/js/bootstrap.bundle.min.js",
          "vendor/jquery-easing/jquery.easing.min.js",
          "js/ruang-admin.min.js"
        ];
  
        // Load the scripts sequentially
        const loadScript = (index) => {
          if (index >= scripts.length) return; // Exit when all scripts are loaded  
          
          console.log( scripts[index])
          const script = document.createElement("script");
          script.src = scripts[index];
          script.async = true;
  
          // Use onload event to load the next script after this one is loaded
          script.onload = () => loadScript(index + 1);
  
          document.body.appendChild(script);
        };
  
        // Start loading the first script
        loadScript(0);
      };
  
      loadScripts();
  
      // Cleanup function to remove the scripts when the component unmounts
      return () => {
        const scripts = document.querySelectorAll("script");
        console.log("unmount")
  
        scripts.forEach(script => {
          if (
            script.src.includes("vendor/jquery/jquery.min.js") ||
            script.src.includes("vendor/bootstrap/js/bootstrap.bundle.min.js") ||
            script.src.includes("vendor/jquery-easing/jquery.easing.min.js") ||
            script.src.includes("js/ruang-admin.min.js") 
          ) {
            document.body.removeChild(script);
          }
        });
      };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  

    return(
    
        <>

<div>
  <div id="wrapper">
    {/* Sidebar */}
    
    <Sidebar></Sidebar>
    
    {/* Sidebar */}
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        
        {/* TopBar */}
        
        <Header username={username}></Header> 

        {/* Topbar */}

        {/* Container Fluid*/}
        
        <Container></Container>
 
        {/*-Container Fluid*/}
      </div>

      {/* Footer */}
      
      <Footer></Footer> 

      {/* Footer */}
    </div>
  </div>
  {/* Scroll to top */}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
</div>



        
        
        
        </>


    )
}