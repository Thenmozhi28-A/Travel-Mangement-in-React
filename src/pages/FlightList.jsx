import React from "react";
import Logo from "../assets/Logo.png";
import img1 from "..//assets/img1.png";
import { useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";

  const FlightList = () => {

  const navigate = useNavigate();

  const Flight = () =>  navigate("/flight");

  return (

    <div className="p-5" style={{ height: "100vh" }}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between items-start">
          <div className="w-30 md:w-40 cursor-pointer" onClick={Flight}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <FiBell className=" w-6 h-6" />
            </div>
            <div className="w-15 md:w-15">
              <img src={img1} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <hr className="border-gray-200" />
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
                <div className="border border-[rgba(115,115,115,0.2)] rounded-lg  rounded-tl-none text-xs md:text-xs lg:text-sm flex flex-col md:flex-row p-4 items-start md:items-center justify-between gap-5 md:gap-0">
                  <div className="flex flex-col gap-1 md:gap-3.5">
                    <p>Fly From</p>
                    <p className="text-[#737373] flex flex-row gap-2 items-center">
                      <FaPlaneDeparture />
                      Chennai
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 md:gap-3.5">
                    <p>Fly To</p>
                    <p className="text-[#737373] flex flex-row gap-2 items-center">
                      <FaPlaneArrival />
                      Mumbai
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 md:gap-3.5">
                    <p>Travel Date</p>
                    <p className="text-[#737373] flex flex-row gap-2 items-center">
                      {" "}
                      <FaCalendarAlt />
                      12 July 2025
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 md:gap-3.5">
                    <p>Passenger</p>
                    <p className="text-[#737373] flex flex-row gap-2 items-center">
                      <FaUsers />
                      1
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-2 border border-[rgba(115,115,115,0.2)] rounded-sm p-5 flex flex-col gap-5">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-base">Filter By</p>
                        <FaChevronDown className="text-black/70 "style={{width:"10px"}} />
                    </div>
                    <div className="flex flex-col gap-3">
                    <div>
                        <p className="text-base text-black/80">Departure Time</p>

                    </div>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <div className="border border-[rgba(115,115,115,0.4)] rounded-sm p-2 w-50 flex flex-col gap-1">
                            <p className="text-sm text-black/60 text-center">Morning</p>
                            <p className="text-[10px] text-center text-black/60">00.00-11:59 am</p>
                        </div>
                         <div className="border border-[rgba(115,115,115,0.4)] rounded-sm p-2 w-50 flex flex-col gap-1">
                            <p className="text-sm text-black/60 text-center">Noon</p>
                            <p className="text-[10px] text-center text-black/60">12:00-14:59 pm</p>
                        </div>
                    </div>
                     <div className="flex flex-row items-center justify-between gap-3">
                        <div className="border border-[rgba(115,115,115,0.4)] rounded-sm p-2 w-50 flex flex-col gap-1">
                            <p className="text-sm text-black/60 text-center">AfterNoon</p>
                            <p className="text-[10px] text-center text-black/60">15:00-17:59 pm</p>
                        </div>
                         <div className="border border-[rgba(115,115,115,0.4)] rounded-sm p-2 w-50 flex flex-col gap-1">
                            <p className="text-sm text-black/60 text-center">Night</p>
                            <p className="text-[10px] text-center text-black/60">18:00-23:59 pm</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-base text-black/80">Price</p>
                        <div className="flex flex-row items-center justify-between">
                        <p className="text-xs text-[rgba(115,115,115,0.8)]">$50</p>
                        <p className="text-xs text-[rgba(115,115,115,0.8)]">$1200</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-base text-black/80">Airlines</p>
                        <div className="flex flex-col gap-2">
                            <p className="flex flex-row text-sm items-center gap-2 text-[rgba(115,115,115,0.8)]"><FaRegSquare className="text-[rgba(115,115,115,0.8)]" /> All</p>
                             <p className="flex flex-row text-sm items-center gap-2 text-[rgba(115,115,115,0.8)]"><FaRegSquare className="text-[rgba(115,115,115,0.8)]" /> Sun Country Airlines</p>
                              <p className="flex flex-row text-sm items-center gap-2 text-[rgba(115,115,115,0.8)]"><FaRegSquare className="text-[rgba(115,115,115,0.8)]" /> Avelo Airlines</p>
                               <p className="flex flex-row text-sm items-center gap-2 text-[rgba(115,115,115,0.8)]"><FaRegSquare className="text-[rgba(115,115,115,0.8)]" /> iAero Airways</p>

                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                         <p className="text-base text-black/80">Rating</p>
                         <div className="flex flex-row gap-2 text-xs text-[rgba(115,115,115,0.8)] ">
                            <p className="border border-[rgba(115,115,115,0.4)] p-2 rounded-sm w-10 items-center justify-center">1+</p>
                            <p className="border border-[rgba(115,115,115,0.4)] p-2 rounded-sm w-10 items-center justify-center">2+</p>
                            <p className="border border-[rgba(115,115,115,0.4)] p-2 rounded-sm w-10 items-center justify-center">3+</p>
                            <p className="border border-[rgba(115,115,115,0.4)] p-2 rounded-sm w-10 items-center justify-center">4+</p>

                         </div>
                    </div>
                </div>
                <div className="col-span-10 border border-[rgba(115,115,115,0.2)] rounded-sm p-3">
                     <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center justify-between">
                             <div className="text-sm text-bold">
                            Showing 4 of 25 <span className="text-[#FF556E]">Flights</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-black/60 border border-[#7373734D] rounded-sm p-1">
                            Sort By <FaChevronDown className="text-black/60"style={{width:"10px"}} />
                        </div>
                        </div>
                        <div>
                            <div className="bg-[#F5F7F9] border-0 rounded-sm p-4">
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                       
                     </div>
                </div>
              </div>
      </div>
         
    </div>
  );
};

export default FlightList;
