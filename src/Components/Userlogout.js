import React from 'react'
import { useNavigate } from 'react-router-dom'


function Userlogout() {
  
  const navigate = useNavigate()  


  const logout = ()=>{
    
    console.log(sessionStorage.getItem('username'))

    sessionStorage.removeItem('username');
    
    const modal = document.getElementById('logoutModal');
    
     // Close the modal
     const closeButton = document.querySelector('#logoutModal .close');
     if (closeButton) {
       closeButton.click();
     }

     window.location.reload(); 

    navigate("/")


  }

  return (
    <>
    
    <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabelLogout" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabelLogout">Ohh No!</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to logout?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                  <a onClick={logout} className="btn btn-primary">Logout</a>
                </div>
              </div>
            </div>
          </div>
   
    </>
  )
}

export default Userlogout