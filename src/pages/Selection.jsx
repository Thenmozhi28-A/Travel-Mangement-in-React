import React from "react";
import Card from "../components/Card";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import Logo from "../assets/Logo.png";
import img1 from "../assets/img1.png";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  
  const navigate = useNavigate();

  return (
    <div className="p-5 min-h-screen">
      <div className="flex flex-row justify-between items-start">
        <img src={Logo} alt="Logo" className="w-40 cursor-pointer" onClick={() => navigate("/")} />
        <img src={img1} alt="Profile" className="w-15" />
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mt-20">
        <div className="text-center">
          <p className="text-lg lg:text-2xl font-bold">
            Travel Booking - Your Gateway to Seamless Travel
          </p>
          <p className="text-xs lg:text-base text-[#737373]">
            Explore Air, Bus, Train Options, Hotel Booking and Car Rental.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Card
            imageSrc={a1}
            text="Travel Booking"
            onClick={() => navigate("/travelbooking")}
          />
          <Card
            imageSrc={a2}
            text="Hotel Booking"
            onClick={() => navigate("/hotelbooking")}
          />
          <Card
            imageSrc={a3}
            text="Car Booking"
            onClick={() => navigate("/carbooking")}
          />
        </div>
      </div>
    </div>
  );
};

export default Selection;
