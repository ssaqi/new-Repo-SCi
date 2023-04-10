import React from 'react';
import AccSetoption from './AccSetoption';
import AccForm from './AccForm';

export default function AccSet() {
  return (
   <>
   <h4>Account Setting</h4>
   <div className="card" style={{width: "150%",height:"115%",boxShadow:"none"}}>

   <div className="card mb-3" style={{ maxWidth: "130%",height:"100%" }}>
  <div className="row g-0">
    <div className="col-md-2 m-3">
     <AccSetoption/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <AccForm/>
      
       
      </div>
    </div>
  </div>
</div>


  </div>

   
   </>
  )
}
