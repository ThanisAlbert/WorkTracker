import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'


export default function Login(){

    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const [errorMessage, setErrorMessage] = useState(""); 
  

    const navigate = useNavigate()


    const loginsubmit=(e)=>{

      e.preventDefault(); 

      Axios.post('http://172.24.3.13:81/api/validatelogin',{"username":username,"password":password}, {
        timeout: 3000 
    })
     
      .then(res => {
 
      if (res.data === "Valid") {    

        sessionStorage.setItem('username', username);


        navigate("/worktracker"); 
      } else {     
        setErrorMessage("Please Enter Correct Username and Password")  
      }

     }) 
     
     .catch(res=>{
      setErrorMessage("NetworkError") 
     })


  }

return(
    <>

<div className="container-login">
  <div className="row justify-content-center">
    <div className="col-xl-6 col-lg-12 col-md-9">
      <div className="card shadow-sm my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-form">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">WorkTracker</h1>
                </div>
                <form className="user" onSubmit={loginsubmit}>
                  <div className="form-group">
                    <input placeholder="Username" type="text" value={username} onChange={e=>setUsername(e.target.value)} className="form-control" id="Email" aria-describedby="emailHelp" placeholder="" />
                  </div>
                  <div className="form-group">
                    <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" id="Password" placeholder="" />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox small" style={{lineHeight: '1.5rem'}}>
                      <input type="checkbox" className="custom-control-input" id="customCheck" />
                      <label className="custom-control-label" htmlFor="customCheck">Remember
                        Me</label>
                    </div>
                  </div>
                  <div className="form-group">
                  <button type="submit" class="btn btn-primary btn-block">Login</button>
                  </div>
                  <hr />
                 
                </form>
                <hr />
                
                <div className="text-center">
                <p style={{color: 'red'}}>{errorMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>

)

}