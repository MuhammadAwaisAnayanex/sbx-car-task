import React from 'react';
import Image from 'next/image';
import './Card.css'; // Import the CSS file
import starImg from "../../assets/star-img.png";
const Card = ({carData}) => {
  console.log("carData => ",carData)
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-overlay">
          <div className="card-image">
            <Image src={carData.image} alt="Card Image" layout="fill" objectFit="cover" />
          </div>
          <div className="card-body">
            <div className="black-box flex items-center gap-2">
              <Image src={starImg} alt='star imge'/>
              <p>{carData.star}</p>
            </div>
            <div className="card-text-content">
              <div className="left-side">
                <p>{carData.year}</p>
                <h4>{carData.name}</h4>
                <p>{carData.model}</p>
              </div>
              <div className="right-side">
               <p>{carData.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer flex justify-between items-center">
        <div className="car-bid">
          <p>Latest bid</p>
          <h4>{carData.bid}</h4>
        </div>
        <div className="time-out">
          <p>Time left</p>
          <h3>{carData.time}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;