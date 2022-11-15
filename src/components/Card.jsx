import React from 'react';
import { Spinner } from './Spinner';
import city from '../assets/image/image-weather.jpeg';

export const Card = ({ showData, loadingData, weather, forecast }) => {

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = `${day}/${month}/${year}`;

  if (loadingData) {
    return <Spinner />
  }

  return (
    <div className="mt-5">
      { showData === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="card-title">{weather.name}</h3>
                <p className="card-date">{date}</p>
                <img 
                  src={city} 
                  alt="city"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start mt-2">

                </div>
              </div>
            </div>
          </div>
        </div>
      ): (
        <h2 className="text-light">Sin datos</h2>
      ) }
    </div>
  )
};
