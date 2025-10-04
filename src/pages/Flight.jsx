import React from "react";
import Logo from "../assets/Logo.png";
import img1 from "..//assets/img1.png";
import { useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import jet from "..//assets/jet.png";
import { FaChevronDown } from "react-icons/fa";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import Button from "../components/Button";
import { FaPlane } from "react-icons/fa";

const Flight = () => {

  const navigate = useNavigate();

  const TravelBooking = () => navigate("/travelbooking");

  const FlightList = () => navigate("/flightlist");

  return (

    <div className="p-5" style={{ height: "100vh" }}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between items-start">
          <div className="w-30 md:w-40 cursor-pointer">
            <img src={Logo} alt="Logo" onClick={TravelBooking} />
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <FiBell className="w-4 md:w-6 h-6" />
            </div>
            <div className="w-15 md:w-15">
              <img src={img1} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <hr className="border-gray-300" />
        </div>

        <div className="relative">
          <img
            src={jet}
            alt="Jet"
            className="w-full md:h-[300px] lg:h-[500px] object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-xs md:text-2xl lg:text-[32px]  font-semibold mb-2">
              Plan Your Journey with Ease
            </h1>
            <p className="text-xs md:text-[12px] lg:text-sm max-w-xl text-white/70">
              Enter Your Travel Preferences and Let Us Handle the Rest. Fly{" "}
              <br />
              with Confidence!
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <p className="text-xs md:text-sm lg:text-xl">Booking a Flight</p>
          <div>
            <button className="text-xs md:text-sm lg:text-lg rounded-sm p-1 w-25 flex flex-row justify-center items-center gap-2 text-black/60 border  border-[rgba(115,115,115,0.4)] ">
              Flight <FaChevronDown className="text-black/70" style={{width:"10px"}}/>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-3 items-center">
            <div className="p-3 bg-[#FF556E] rounded-tl-xl">
              <p className="text-xs md:text-xs lg:text-sm font-bold text-white">
                One Way
              </p>
            </div>
            <div>
              <p className="text-xs md:text-xs lg:text-sm text-[#737373]">
                Round-Trip
              </p>
            </div>
            <div>
              <p className="text-xs md:text-xs lg:text-sm text-[#737373]">
                Multi-Segment
              </p>
            </div>
          </div>
          <div className="border border-[rgba(115,115,115,0.4)] rounded-lg  rounded-tl-none text-xs md:text-xs lg:text-sm flex flex-col md:flex-row p-4 items-start md:items-center justify-between gap-5 md:gap-0">
            <div className="flex flex-col gap-1 md:gap-3.5">
              <p>Fly From</p>
              <p className="text-[#737373] flex flex-row gap-2 items-center">
                <FaPlaneDeparture />
                Where
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-3.5">
              <p>Fly To</p>
              <p className="text-[#737373] flex flex-row gap-2 items-center">
                <FaPlaneArrival />
                Where
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-3.5">
              <p>Travel Date</p>
              <p className="text-[#737373] flex flex-row gap-2 items-center">
                {" "}
                <FaCalendarAlt />
                Select Date
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-3.5">
              <p>Passenger</p>
              <p className="text-[#737373] flex flex-row gap-2 items-center">
                <FaUsers />
                No. of Passengers
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex justify-end mb-3 cursor-pointer"
          onClick={FlightList}
        >
          <Button
            className="flex flex-row gap-2 items-center justify-center text-xs md:text-xs lg:text-[16px]"
            style={{ width: "150px" }}
          >
            Search Flight <FaPlane />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Flight;
