import React from "react";
import Logo from "../assets/Logo.png";
import img1 from "../assets/img1.png";
import flight from "../assets/flight.png";
import bus from "../assets/bus.png";
import train from "../assets/train.png";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const TravelBooking = () => {
  
  const navigate = useNavigate();

  const Selection = () => navigate("/selection");
  const Flight = () => navigate("/flight");
  const Bus = () => navigate("/bus");
  const Train = () => navigate("/train");

  return (

    <div className="p-5 min-h-screen">

      <div className="flex flex-row justify-between items-start">
        <img
          src={Logo}
          alt="Logo"
          onClick={Selection}
          className="w-40 cursor-pointer"
        />
        <img src={img1} alt="Profile" className="w-15" />
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mt-20">
        <div className="text-center">
          <p className="text-lg lg:text-2xl font-bold">
            Travel Booking - Your Gateway to Seamless Travel
          </p>
          <p className="text-xs lg:text-base text-[#737373]">
            Explore Air, Bus, and Train Options, Plus Hassle-Free Hotel <br />
            Booking and Car Rental. Your Journey Begins Here!
          </p>
        </div>

  
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Card imageSrc={flight} text="Flight" onClick={Flight} />
          <Card imageSrc={bus} text="Bus" onClick={Bus} />
          <Card imageSrc={train} text="Train" onClick={Train} />
        </div>
      </div>
    </div>
  );
};

export default TravelBooking;
