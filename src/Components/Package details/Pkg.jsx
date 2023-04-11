import React from 'react';
import '../Crasoual/Carosoual.css';
import Slider2 from '../Images/slider2.jpg';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import Nav from '../Nav/Nav';
import PkgDetails from './PkgDetails.jsx';
export default function Pkg() {
    return (
        <>
            <Nav />
            <div className='container'>
                <div className="card mb-3 m-2" style={{ maxWidth: "100%", height: "440px", boxShadow: "none" }}>
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={Slider2}
                                className="img-fluid rounded-start slideImg"
                                alt="..."
                                style={{ width: "530px", height: "450px" }}

                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title text-dark">S3-COMPATIBLE OBJECT STORAGE</h5>
                                <h6 className='card-title text-dark mt-3'>Object Storage at a Fraction of What Others Charge</h6>
                                <div className='line1'></div>
                                <p className="card-text mt-2" style={{ fontSize: 12, textAlign: "justify" }}>
                                    Our storage is a cheap alternative with unlimited free transfer
                                    to AWS S3 and other vendors. Billing is simple and month-to-month
                                    at all-inclusive rate,and you can easily migrate from S3. Our S3 API
                                    makes it easy to move your data to and from S3 (our API follows the
                                    well-established S3 standard). All you have to do is change credentials and
                                    URLs in your applications. our files and data are secured with guaranteed
                                    confidentiality. You decide where you want your data stored (at any of our
                                    three Object Storage Regions), and you can move your files with our S3 API.
                                    Note that we will never move your data to another country without your explicit,
                                    written consent.
                                </p>
                                <div className='line1'></div>
                                <p className="card-text">
                                    <small className="text-dark" style={{ fontWeight: "bold" }}>key</small>
                                </p>
                                <div className='line1'></div>
                                <p className="card-text">
                                    <small className="text-dark" style={{ fontWeight: "bold" }}>bucket</small>
                                </p>
                                <div className='line1'></div>
                                <p className="card-text">
                                    <small className="text-dark" style={{ fontWeight: "bold" }}>S3 API</small>
                                </p>

                                <div className='btnn'>
                                    <Button variant="outlined" startIcon={<FilterListIcon />}
                                        className="btn text-white"
                                        style={{ backgroundColor: "#55acee", border: "none" }}
                                    >
                                        Add Filter
                                    </Button>
                                    <Button variant="outlined" startIcon={<FilterListIcon />}
                                        className="btn text-dark"
                                        style={{ backgroundColor: "lightgray", border: "none", margin: "20px", }}
                                    >
                                        Add Filter
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <PkgDetails/>
                <hr/>
            </div>


        </>
    )
}
