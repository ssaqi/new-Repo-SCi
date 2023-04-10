import React from 'react'
import '../Dashboard/Dashboard.css';
import Button from '@mui/material/Button';
import DP from '../Images/dp.png'
import {Link} from 'react-router-dom'
export default function AccSetoption() {
  return (
    <>
           <div className='container mt-5'>
            <center>
           <img src={DP} style={{width:"100px",height:"100px"}}/>
           <h5 className='mt-3'>Michal Flinn</h5>
           </center>
           <Link to="#">
              <Button color="secondary" 
                  className="btn btn-secondary btnn1"
                  style={{ color: "#8f8e8e", border: "none", marginLeft:"15px",}}>
                  Account
              </Button></Link>
      <center>
        
          <center>
          <Link to="#">
              <Button color="secondary"     
                  className="btn btn-secondary btnn1"
                  style={{ color: "#8f8e8e", border: "none", marginLeft:"-50px",}}>
                  Password
              </Button></Link>
          </center>
          
          <center>
              <Button color="secondary" 
                  className="btn btn-secondary"
                  style={{ color: "#8f8e8e", border: "none", marginLeft:"5px" }} >
                  Security & Privacy
              </Button>
          </center>
        
          <center>
              <Button color="secondary" 
                  className="btn btn-secondary"
                  style={{ color: "#8f8e8e", border: "none", marginLeft:"-40px" }}>
                 Application
              </Button>
          </center>
    
          <center>
              <Button color="secondary" 
                  className="btn btn-secondary"
                  style={{ color: "#8f8e8e", border: "none", marginLeft:"-30px" }}>
                  Notification
              </Button>

          </center>


      </center>



  </div>
    
    </>
  )
}
