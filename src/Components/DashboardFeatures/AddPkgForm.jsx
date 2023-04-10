import React from 'react';
import TextField from '@mui/material/TextField';
import '../Sign/Sign.css'
import { Link } from 'react-router-dom'


const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
export default function AddPkgForm() {
    return (
        <>

            <div className="container my-1 ">
                <div className="row">
                    <h1
                        className="display-2 fw-bold text-dark text-loweruppercase m-3"
                        style={{ fontSize: 25 }}
                    >
                        Add Package<br />
                        <span style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}>
                            The most important feature in the package, editing section is the feature adding part. When adding package here, do not ignore to fill in all the required fields completely and follow the package adding rules.
                        </span>
                    </h1>


                    <form className="row g-4 m-3 form" method='POST'>
                        <div className="col-auto">
                            <label>Package Name</label>
                            <br />
                            <TextField className='input2'
                                label="Cloud..  "
                                variant="outlined"
                            />
                        </div>
                        <div className="col-auto">
                            <label>Packages Price</label>
                            <br />
                            <TextField className='input2'
                                label="10 - 50 $  "
                                variant="outlined"

                            />
                        </div>
                        <div className="col-auto">
                            <label>Categories</label>
                            <br />
                            <TextField className='input2'
                                id="outlined-select-currency"
                                select
                                defaultValue="EUR"


                            />


                        </div>
                        <div className="col-auto">
                            <label>Brand</label>
                            <br />
                            <TextField className='input2'
                                id="outlined-select-currency"
                                select
                                defaultValue="EUR"
                                placeholder='AWS'

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
                            <label>Select Attribute</label>
                            <br />
                            <TextField className='input2'
                                id="outlined-select-currency"
                                select
                                defaultValue="EUR"
                                placeholder='AWS'

                            />
                        </div>
                        <div className="col-auto">
                            <label>Value</label>
                            <br />
                            <TextField className='input2'
                                id="outlined-select-currency"
                                select
                                defaultValue="5"
                                placeholder='AWS'
                            />
                        </div>
                        <div className="col-auto">
                            <Link to='#'>
                                <button type="submit" className="btn btn-primary mb-3" style={{ backgroundColor: "#36bbf7" }}>
                                    Add
                                </button></Link>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Attribute & Value
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div className="col-auto">
                            <Link to='#'>
                                <button type="submit" className="btn btn-primary mb-3" style={{ backgroundColor: "#36bbf7" }}>
                                    Save
                                </button></Link>
                        </div>
                    </form>



                </div>
            </div>




        </>
    )
}
