import React from 'react';
import Placeholder from '../Images/placeholder.png';
import Button from '@mui/material/Button';
export default function HomeCard() {
  return (
    <>
      <div className='container'>
        <div className="card" style={{ width: "20rem", margin: "auto", boxShadow: "none" }}>
          <div className="card-body">
            <h5 className="card-title text-center" style={{ fontWeight: "bolder", fontSize: "28px", color: "black" }}>Features Pakages</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
          </div>
        </div>

        {/* CARD START HERE */}
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={Placeholder} className="card-img-top" alt="..." style={{ height: "240px" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="card-text text-center" style={{ fontWeight: "bold" }}>
                  1
                  <h6 className="card-title text-center">test1</h6>
                </p>
                <center>
                  <Button variant="outlined"
                    className="btn text-white"
                    style={{ backgroundColor: "#36bbf7", border: "none" }}
                  >
                    Compare
                  </Button>
                </center>
              </div>

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={Placeholder} className="card-img-top" alt="..." style={{ height: "240px" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="card-text text-center" style={{ fontWeight: "bold" }}>
                  2
                  <h6 className="card-title text-center">test1</h6>
                </p>
                <center>
                  <Button variant="outlined"
                    className="btn text-white"
                    style={{ backgroundColor: "#36bbf7", border: "none" }}
                  >
                    Compare
                  </Button>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={Placeholder} className="card-img-top" alt="..." style={{ height: "240px" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="card-text text-center" style={{ fontWeight: "bold" }}>
                  3
                  <h6 className="card-title text-center">test1</h6>
                </p>
                <center>
                  <Button variant="outlined"
                    className="btn text-white"
                    style={{ backgroundColor: "#36bbf7", border: "none" }}
                  >
                    Compare
                  </Button>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={Placeholder} className="card-img-top" alt="..." style={{ height: "240px" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Title</h5>
                <p className="card-text text-center" style={{ fontWeight: "bold" }}>
                  4
                  <h6 className="card-title text-center">test1</h6>
                </p>
                <center>
                  <Button variant="outlined"
                    className="btn text-white"
                    style={{ backgroundColor: "#36bbf7", border: "none" }}
                  >
                    Compare
                  </Button>
                </center>
              </div>
            </div>
          </div>
        </div>




      </div>
      <br /><br />
      <center>
        <Button variant="outlined"
          className="btn text-white"
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "purple",
            border: "none",
            borderRadius: "20px"
          }}
        >
          Load More
        </Button>
      </center>

    </>
  )
}
