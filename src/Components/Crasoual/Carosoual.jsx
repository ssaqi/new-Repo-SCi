import React from 'react';
import'./Carosoual.css';
import Slider from '../Images/slider.jpg';
export default function Carosoual() {
  return (
    <>
    <div
  id="carouselExampleControls"
  className="carousel slide"
  data-mdb-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src={Slider} 
        className="d-block w-100 slideImg"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item">
      <img
       src={Slider} 
        className="d-block w-100 h-80"
        alt="Camera"
      />
    </div>
    <div className="carousel-item">
      <img
          src={Slider} 
        className="d-block w-100 h-80"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
    
    
    </>
  )
}
