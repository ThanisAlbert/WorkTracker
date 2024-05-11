import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Myform() {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>


<div className="card mb-4">
  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
   
  </div>
  <div className="card-body">
    <form>
      <div className="form-group row">
         
        <div className="col-sm-3">   
        <label >Date</label>
        </div>

        <div className="col-sm-6">
  
             <div className="input-group date">
               <div className="input-group-prepend">
               <span className="input-group-text"><i className="fas fa-calendar" /></span>
               </div>
         
               <DatePicker selected={startDate} onChange={(e) => setStartDate(e)} />
             </div>
        </div>

      </div>

   

      <div className="form-group row">

        <div className="col-sm-3">   
        <label >Language</label>
        </div>
       
        <div className="col-sm-6">
        <select class="form-control" id="exampleFormControlSelect1">
            <option></option>            
            <option>VBA</option>
            <option>Django</option>
            <option>React</option>
            <option>Idle</option>
        </select>
        </div>

      </div>


      <div className="form-group row">

        <div className="col-sm-3">   
        <label >From Time</label>
        </div>
       
        <div className="col-sm-6">
        <select class="form-control" id="exampleFormControlSelect1">
            <option></option>
            <option>05:00 Am</option>
            <option>05:30 Am</option>
            <option>06:00 Am</option>
            <option>06:30 Am</option>
            <option>07:00 Am</option>
            <option>07:30 Am</option>
            <option>08:00 Am</option>
            <option>08:30 Am</option>
            <option>09:00 Am</option>
            <option>09:30 Am</option>
            <option>10:00 Am</option>
            <option>10:30 Am</option>
            <option>11:00 Am</option>
            <option>11:30 Am</option>
            <option>12:00 Pm</option>
            <option>12:30 Pm</option>
            <option>01:00 Pm</option>
            <option>01:30 Pm</option>
            <option>02:00 Pm</option>
            <option>02:30 Pm</option>
            <option>03:00 Pm</option>
            <option>03:30 Pm</option>
            <option>04:00 Pm</option>
            <option>04:30 Pm</option>
            <option>05:00 Pm</option>
            <option>05:30 Pm</option>
            <option>06:00 Pm</option>
            <option>06:30 Pm</option>
            <option>07:00 Pm</option>
            <option>07:00 Pm</option>
            <option>07:30 Pm</option>
            <option>08:00 Pm</option>
            <option>08:30 Pm</option>
            <option>09:00 Pm</option>
            <option>09:30 Pm</option>
            <option>10:00 Pm</option>
            <option>10:30 Pm</option>
            <option>11:00 Pm</option>
            <option>11:30 Pm</option>
          
        </select>
        </div>

      </div>
     

      <div className="form-group row">

<div className="col-sm-3">   
<label >To Time</label>
</div>

<div className="col-sm-6">
<select class="form-control" id="exampleFormControlSelect1">
    <option></option>
    <option>05:00 Am</option>
    <option>05:30 Am</option>
    <option>06:00 Am</option>
    <option>06:30 Am</option>
    <option>07:00 Am</option>
    <option>07:30 Am</option>
    <option>08:00 Am</option>
    <option>08:30 Am</option>
    <option>09:00 Am</option>
    <option>09:30 Am</option>
    <option>10:00 Am</option>
    <option>10:30 Am</option>
    <option>11:00 Am</option>
    <option>11:30 Am</option>
    <option>12:00 Pm</option>
    <option>12:30 Pm</option>
    <option>01:00 Pm</option>
    <option>01:30 Pm</option>
    <option>02:00 Pm</option>
    <option>02:30 Pm</option>
    <option>03:00 Pm</option>
    <option>03:30 Pm</option>
    <option>04:00 Pm</option>
    <option>04:30 Pm</option>
    <option>05:00 Pm</option>
    <option>05:30 Pm</option>
    <option>06:00 Pm</option>
    <option>06:30 Pm</option>
    <option>07:00 Pm</option>
    <option>07:00 Pm</option>
    <option>07:30 Pm</option>
    <option>08:00 Pm</option>
    <option>08:30 Pm</option>
    <option>09:00 Pm</option>
    <option>09:30 Pm</option>
    <option>10:00 Pm</option>
    <option>10:30 Pm</option>
    <option>11:00 Pm</option>
    <option>11:30 Pm</option>
  
</select>
</div>

</div>



<div className="form-group row">
  <div className="col-sm-3">   
    <label>Total Time Spend (Mins)</label>
  </div>
  <div className="col-sm-6">   
    <input className="form-control" type="text"  id="exampleFormControlReadonly" />
  </div>
</div>


<div className="form-group row">
  <div className="col-sm-3">   
    <label>Reason</label>
  </div>
  <div className="col-sm-6">   
    <input className="form-control" type="text"  id="Reason" />
  </div>
</div>



     
      <div className="form-group row">
        <div className="col-sm-5 offset-sm-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>

    
    </>
  )
}

export default Myform