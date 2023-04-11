import React from 'react';
import C1 from '../Images/aws.png';
import C2 from '../Images/cloud-zero.jpg';
import C3 from '../Images/sematext-cloud.jpg';
import C4 from '../Images/lace.jpg';
import C5 from '../Images/c4.png';
import C6 from '../Images/c5.png';
import C7 from '../Images/c6.jpg';
import C8 from '../Images/c7.png';
import C9 from '../Images/c8.jpg';
import C10 from '../Images/c9.png';
export default function PkgDetails() {
  return (

    <>
      <div className='container'>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <img src={C1} className="card-img-top" alt="..." style={{ height: 200 }} />

            </div>
          </div>
          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <img src={C2} className="card-img-top" alt="..." style={{ height: 200 }} />
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <img src={C3} className="card-img-top" alt="..." style={{ height: 200 }} />
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <img src={C4} className="card-img-top" alt="..." style={{ height: 200 }} />

            </div>
          </div>
        </div>
        <hr />

        <div className="row row-cols-1 row-cols-md-6 g-4">
          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <img src={C5} className="card-img-top" alt="..." style={{ height: 200 }} />

            </div>
          </div>
          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <br />
              <center>
                <img src={C6} className="card-img-top" alt="..." style={{ height: 180, width: 120 }} />
              </center>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <img src={C7} className="card-img-top" alt="..." style={{ height: 200 }} />
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <br /><br />
              <img src={C8} className="card-img-top" alt="..." style={{ height: 80 }} />

            </div>
          </div>

          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <br /><br />
              <img src={C9} className="card-img-top" alt="..." style={{ height: 80 }} />

            </div>
          </div>

          <div className="col">
            <div className="card" style={{ boxShadow: "none" }}>
              <br /><br />
              <center>
                <img src={C10} className="card-img-top" alt="..." style={{ height: 80, width: 60 }} />
              </center>
            </div>
          </div>
        </div>


      </div>



    </>


  )
}
