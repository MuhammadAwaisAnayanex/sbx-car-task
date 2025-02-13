"use client"; // Required for Next.js App Router
import Card from "./components/Card/Card";
import Header from "./components/header/Header";
import SwiperSlider from "./components/swiperSlider/SwiperSlider";
import { TopBar } from "./components/topBar/TopBar";
import carImg1 from "./assets/card-img-1.jpg";
import carImg2 from "./assets/card-img-2.jpg";
import carImg3 from "./assets/card-img-3.jpg";
import carImg4 from "./assets/card-img-4.jpg";
import carImg5 from "./assets/card-img-5.jpg";
import carImg6 from "./assets/card-img-6.jpg";
import carImg7 from "./assets/card-img-7.jpg";
import carImg8 from "./assets/card-img-8.jpg";
import carImg9 from "./assets/card-img-9.jpg";
import carImg10 from "./assets/card-img-10.jpg";
import carImg11 from "./assets/card-img-11.jpg";
import carImg12 from "./assets/card-img-12.jpg";
import carImg13 from "./assets/card-img-13.jpg";
import carImg14 from "./assets/card-img-14.jpg";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import siteLogo from "./assets/sbx-site-logo.svg";
import deleteIcon from "./assets/delete.svg"
import Image from "next/image";
export default function Home() {
  const carData = [
    {
      image: carImg1, name: "Mercedes-Benz",
      year: "2012",
      model: "SLS AMG Gullwing",
      location: "Seattle, Washington, USA",
      bid: "US$90,000",
      time: "6 days",
      star: "48"
    },
    {
      image: carImg2,
      name: "BMW",
      year: "2024",
      model: "BMW M850i xDrive Gran Coupe, The 8 X Jeff Koons, 1 of 99",
      location: "Apeldoorn, Gelderland, Netherlands",
      bid: "€107,000",
      time: "6 days",
      star: "29"
    },
    {
      image: carImg3,
      name: "Mclaren",
      year: "2022",
      model: "Mclaren 720s Spider",
      location: "Olympia, Washington, USA",
      bid: "US$132,000",
      time: "7 days",
      star: "32"
    },
    {
      image: carImg4,
      name: "Porsche ",
      year: "2023",
      model: "911 Carrera T",
      location: "Dubai, United Arab Emirates",
      bid: "20,000 AED",
      time: "7 days",
      star: "30"
    },
    {
      image: carImg5,
      name: "Aston Martin",
      year: "2013",
      model: "V12 Zagato - 1 of 18 RHD Spec",
      location: "Cobham, United Kingdom",
      bid: "£16,900",
      time: "8 days",
      star: "30"
    },
    {
      image: carImg6,
      name: "Land Rover",
      year: "1995",
      model: `Defender 90 300Tdi "Brooklyn Coachworks"`,
      location: "Jessup, Maryland, USA",
      bid: "US$15,500",
      time: "9 days",
      star: "14"
    },
    {
      image: carImg7,
      name: "Ferrari",
      year: "2008",
      model: "F430",
      location: "Dubai, United Arab Emirates",
      bid: "2,000 AED",
      time: "13 days",
      star: "30"
    },
    {
      image: carImg8,
      name: "Aston Martin",
      year: "2021",
      model: "DB5 Continuation Goldfinger Ed.",
      location: "Zug, Switzerland",
      bid: "€250,000",
      time: "13 days",
      star: "191"
    },
    {
      image: carImg9,
      name: "Range Rover",
      year: "2021 ",
      model: "SV Autobiography LWB",
      location: "Dubai, United Arab Emirates",
      bid: "US$90,000",
      time: "15 days",
      star: "17"
    },
    {
      image: carImg10,
      name: "Lamborghini",
      year: "2022",
      model: "Huracan EVO Coupe",
      location: "North York, Ontario, Canada",
      bid: "US$90,000",
      time: "6 days",
      star: "35"
    },
    {
      image: carImg11,
      name: "Brabus",
      year: "2022",
      model: "KTM 1300r",
      location: "Bielsko-Biala, Poland",
      bid: "US$90,000",
      time: "6 days",
      star: "27"
    },
    {
      image: carImg12,
      name: "Mercedes-Benz",
      year: "2014",
      model: "SLS AMG Roadster",
      location: "Seattle, Washington, USA",
      bid: "US$90,000",
      time: "6 days",
      star: "8"
    },
    {
      image: carImg13,
      name: "Lamborghini",
      year: "2010",
      model: "Gallardo LP560-4 - VF Engineering Supercharged",
      location: "Longwood, Florida, USA",
      bid: "US$90,000",
      time: "6 days",
      star: "11",
    },
    {
      image: carImg14,
      name: " Aston Martin",
      year: "2018",
      model: "DB4 GT Continuation - #10 of 25",
      location: "Zug, Switzerland",
      bid: "US$90,000",
      time: "6 days",
      star: "88"
    },
  ]

  const [selectedCountry, setSelectedCountry] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique country names
  const countries = ["ALL", ...new Set(carData.map(car => car.location.split(", ").pop()))];
  // Filter cars based on selected country
  const filteredCars = selectedCountry === "ALL"
    ? carData
    : carData.filter(car => car.location.includes(selectedCountry));
  return (
    <>
      <TopBar />
      <Header />
      <section className="hero-section">
        <SwiperSlider />
      </section>
      {/* Car Card Section */}
      <section className="car-card-section">
        <div className="container mx-auto px-3">
          <div className="auctions py-5 lg:py-8">
            <span className="me-2 auction-text">Auctions:</span>
            <button onClick={() => setIsModalOpen(true)}>Country: <span className="underline">{selectedCountry}</span></button>
          </div>

          {/* Filtered Car List */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {filteredCars.map((item, index) => (
              <div className="grid-item" key={index}>
                <Card carData={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Box */}
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="modal-body">
            <div className="model-header flex justify-between">
              <div className="site-logo">
                <Image src={siteLogo} alt={siteLogo} />
              </div>
              <div className="close-btn flex justify-end">
                <button onClick={() => setIsModalOpen(false)}><Image src={deleteIcon} title="delete icon" /></button>
              </div>
            </div>
            <div className="modal-content">
            <div className="modal-heading py-3 md:py-5 lg:py-7">
              <h2 className="">Select Country</h2>
              <p>Filter vehicles by country</p>
            </div>
            <ul>
              {countries.map((country, index) => (
                <li key={index}>
                  <button
                    className={` ${selectedCountry === country ? "active" : ""
                      }`}
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsModalOpen(false);
                    }}
                  >
                    {country}
                  </button>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </>
  );
}
