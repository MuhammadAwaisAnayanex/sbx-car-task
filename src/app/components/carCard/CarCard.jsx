import React from 'react'
import cardImage from "../../assets/card-img-1.jpg"
import Image from 'next/image'
import "./CarCard.css"
import starIcon from "../../assets/star.png"
const CarCard = () => {
  return (
    <>
    <div className="card">
        <div className="card-wrapper" style={{position:"relative",width:"100%"}}>
        <div className="card-img" style={{position:"absolute",top:"0px"}}>
            <a href="#"><Image src={cardImage} title={cardImage}/></a>
        </div>
       <div className="card-body">
        <div className="black-box">
        <Image src={starIcon} title='star-icon' />
        <span>190</span>
        </div>
        <div className="card-content">
          
        </div>
       </div>
        </div>
    </div>
    </>
  )
}

export default CarCard