import React from 'react'
import TextField from '@mui/material/TextField';
import {Link } from 'react-router-dom';
export default function AccForm() {
  return (
    <>

    <div className="container my-1 ">
        <div className="row">
            <h1
                className="display-2 fw-bold text-dark text-loweruppercase m-3"
                style={{ fontSize: 25 }}
            >
                Account Settings<br />
               
            </h1>


            <form className="row g-2 m-1 form" method='POST'>
                <div className="col-auto">
                    <label>First Name</label>
                    <br />
                    <TextField className='input2'
                        label="First Name"
                        variant="outlined"
                    />
                </div>
                <div className="col-auto">
                    <label>Last Name</label>
                    <br />
                    <TextField className='input2'
                        label="Last Name"
                        variant="outlined"

                    />
                </div>
                   <div className="col-auto">
                    <label>Email</label>
                    <br />
                    <TextField className='input2'
                        label="Email"
                        variant="outlined"

                    />
                </div>
                    <div className="col-auto">
                    <label>Phone</label>
                    <br />
                    <TextField className='input2'
                        label="Phone"
                        variant="outlined"

                    />
                </div>
               <div className="col-auto">
                    <label>Comp</label>
                    <br />
                    <TextField className='input2'
                        label="Spurce Cloud inc"
                        variant="outlined"

                    />
                </div>

                    <div className="col-auto">
                    <label>Location</label>
                    <br />
                    <TextField className='input2'
                        label="Location"
                        variant="outlined"

                    />
                </div>
                <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Description
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={4}
                                defaultValue={""}
                                style={{ height: "90px" }}
                            />
                        </div>
                        <div className="col-auto">
                            <Link to='#'>
                                <button type="submit" className="btn btn-primary mb-3" style={{ backgroundColor: "#36bbf7" }}>
                                    Update
                                </button></Link>
                                <Link to='#'>
                                <button type="submit" className="btn btn-secondry mb-3  m-3" style={{ backgroundColor:"lightgray" }}>
                                    Cencel
                                </button></Link>
                        </div>
            </form>

      

        </div>
    </div>




</>
  )
}
