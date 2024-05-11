import { useNavigate } from 'react-router-dom';
import React,{ useEffect, useState } from "react";

export default function Footer(){

  const navigate = useNavigate();
  const [username, setUsername] = useState(sessionStorage.getItem('username'));

  useEffect(() => {
    console.log("I am footer")
  }, []);


    return(
    
        <>


{/* Footer */}
<footer className="sticky-footer bg-white">
  <div className="container my-auto">
    <div className="copyright text-center my-auto">
      <span>copyright ©  - developed by
        <b><a href="https://indrijunanda.gitlab.io/" target="_blank"> ITSupport</a></b>
      </span>
    </div>
  </div>
</footer>
{/* Footer */}

        
        
        </>
    
    )
    
    }