import React from 'react';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import './Home.css';
export default function HomItem() {
  return (
    <>
      <br />
      <div className='container'>
        <div className="mb-2 hh" >
          <input
            type="email"
            className="form-control"
            id="form"
            placeholder="Search Here"

          />
          <div className='btnn'>
            <Button variant="outlined" startIcon={<FilterListIcon />}
              className="btn text-white"
              style={{ backgroundColor: "black", border: "none" }}
            >
              Add Filter
            </Button></div>
        </div>
        <div className='btnn1'>
          <Button variant="outlined" startIcon={<FilterListIcon />}
            className="btn text-white"
            style={{ backgroundColor: "black", border: "none" }}
          >
            Add Filter
          </Button></div>

      </div>


    </>
  )
}
