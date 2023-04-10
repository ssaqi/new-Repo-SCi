import React from 'react';
import DashNav from '../Dashboard/DashNav';
import LOGO from '../Images/LGO.png'
import AddPkgForm from './AddPkgForm';
export default function Dashhboard() {
    return (
        <>
            <div className="card mb-4" style={{ boxShadow: "none", }} >
                <div className="row g-0">
                    <div className="col-md-4" style={{ width: "280px", height: "550px", }}>
                        <center>

                            <img src={LOGO} style={{ width: "180px", height: "50px", margin: "10px" }} />
                        </center>
                        <div className='line'></div>
                        <DashNav />
                    </div>
                    <div className="col-md-6">

                        <div className="row g-2">

                            <div className='container-fuild my-2' style={{ width: "auto", height: "500px" }}>

                                <AddPkgForm />

                            </div>




                        </div>


                    </div>
                </div>
            </div>




        </>
    )
}