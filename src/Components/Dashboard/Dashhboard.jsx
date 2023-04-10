import React from 'react';
import './Dashboard.css';
import DashNav from './DashNav';
import DashBoardScreen from './DashBoardScreen';
import LOGO from '../Images/LGO.png'
export default function Dashhboard() {
  return (
   <>
      <div className="card mb-3" style={{ boxShadow: "none",  }} >
        <div className="row g-0">
          <div className="col-md-3" style={{width: "280px",height: "550px",}}>
          <center>
            
      <img src={LOGO}  style={{width:"180px", height:"50px",margin:"10px"}} />
    </center>
           <div className='line'></div>
            <DashNav/>
          </div>
          <div className="col-md-9">

            <div className="row g-2">

              <div className='container-fuild my-4' style={{ width: "auto",height:"500px"  }}>

           <DashBoardScreen/>

              </div>




            </div>


          </div>
        </div>
      </div>



   
   </>
  )
}
