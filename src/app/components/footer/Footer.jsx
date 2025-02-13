import React from 'react'
import footerSiteLogo from "../../assets/footer-site-logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter-x.svg";
import youtube from "../../assets/youtube.svg";
import tiktok from "../../assets/tiktok.svg";
import linkedin from "../../assets/linkedin.svg";
import Image from 'next/image'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <div className="container mx-auto px-3">
        <div className="top-footer">
        <div className="lg:grid lg:grid-cols-4 lg:gap-14 gap-5 flex flex-wrap justify-between  items-center">
            <div className="grid-item flex flex-wrap justify-center lg:flex-col lg:gap-7 gap-5 sm:justify-between lg:justify-start basis-full">
                <div className="site-logo">
                    <a href="#"><Image src={footerSiteLogo} title='footer site logo'/></a>
                </div>
                <div className="social-icon">
                    <ul className='flex items-center'>
                        <li><a href="#"><Image src={facebook} title={facebook}/></a></li>
                        <li><a href="#"><Image src={instagram} title={instagram}/></a></li>
                        <li><a href="#"><Image src={youtube} title={youtube}/></a></li>
                        <li><a href="#"><Image src={twitter} title={twitter}/></a></li>
                        <li><a href="#"><Image src={tiktok} title={tiktok}/></a></li>
                        <li><a href="#"><Image src={linkedin} title={linkedin}/></a></li>
                    </ul>
                </div>
            </div>
            <div className="grid-item flex flex-col lg:gap-7 gap-5  basis-full md:basis-[40%] ">
                <div className="text-content">
                <p>Get the latest updates by subscribing to our newsletter.</p>
                </div>
                <div className="input flex gap-4">
                    <input type="text" placeholder='Email Adress'/> <button>Subscribe</button>
                </div>
            </div>
            <div className="grid-item footer-menu flex lg:justify-end justify-center md:basis-[25%]  basis-50 ">
                <ul>
                    <li><a href="#">Auctions</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Sell your vehicle</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Auction Results</a></li>
                </ul>
            </div>
            <div className="grid-item footer-menu flex lg:justify-center justify-center md:basis-[25%] basis-50">
            <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Cookie declaration</a></li>
                </ul>
            </div>
        </div>
        </div>
        <div className="bottom-footer">
            <p>© Copyright 2025 All rights reserved SB Media USA Inc</p>
        </div>
    </div>
    </>
  )
}

export default Footer