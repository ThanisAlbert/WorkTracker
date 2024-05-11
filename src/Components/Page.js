import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Container from "./Container";
import { useNavigate } from 'react-router-dom';

export default function Page() {
  const [username, setUsername] = useState(sessionStorage.getItem('username'));
  const navigate = useNavigate();

  useEffect(() => {
    const loadScripts = () => {
      if (!username || username.trim() === "") {
        console.log("No session")
        navigate("/");
        return;
      }

      const scripts = [
        "vendor/jquery/jquery.min.js",
        "vendor/bootstrap/js/bootstrap.bundle.min.js",
        "vendor/jquery-easing/jquery.easing.min.js",
        "vendor/select2/dist/js/select2.min.js", 
        "js/ruang-admin.min.js"
      ];

      const loadScript = (index) => {
        if (index >= scripts.length) return;

        const script = document.createElement("script");
        script.src = scripts[index];
        script.async = true;
        script.onload = () => loadScript(index + 1);

        document.body.appendChild(script);
      };

      loadScript(0);
    };

    loadScripts();
  }, [username, navigate]);

  return (
    <>
      <div>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header username={username} />
              <Container />
            </div>
            <Footer />
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    </>
  );
}





/*

 // Cleanup function to remove the scripts when the component unmounts
      return () => {
        const scripts = document.querySelectorAll("script");
        console.log("unmount")
  
        scripts.forEach(script => {
          if (
            script.src.includes("vendor/jquery/jquery.min.js") ||
            script.src.includes("vendor/bootstrap/js/bootstrap.bundle.min.js") ||
            script.src.includes("vendor/jquery-easing/jquery.easing.min.js") ||
            script.src.includes("vendor/select2/dist/js/select2.min.js") ||
            script.src.includes("js/ruang-admin.min.js") 
          ) {
            console.log("unmounting")
            document.body.removeChild(script);
            navigate("/")
          }
        });
      };

*/