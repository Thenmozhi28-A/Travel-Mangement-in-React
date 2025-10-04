import React from "react";
import Logo from "../assets/Logo.png";
import Email from "../components/Email";
import Password from "../components/Password";
import Button from "../components/Button";
import Google from "../assets/Google.png";
import FaceBook from "../assets/FaceBook.png";
import Twitter from "../assets/Twitter.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Schema";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  
  const onSubmit = () => {
    alert(`Login Successfull !`);
    navigate("/selection");
  };

  const navigate = useNavigate();

  return (

    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar start */}

      <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col justify-center items-center bg-[rgba(219,219,219,0.3)]">
        <div className="flex flex-col justify-center items-center gap-1 m-3 md:0">
          <p className="font-bold text-sm md:text-base lg:text-2xl">
            Your Automated Travel
            <span className="text-[#FF556E]"> Booking Solution</span>
          </p>

          <p className="text-xs md:text-xs lg:text-base text-[#737373] text-center">
            Effortless Booking for Flights, Hotels, Cars, and Trains All
            <br />
            in One Place
          </p>
        </div>
      </div>

      {/* Sidebar end */}

      {/* login form start */}

      <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center overflow-x-hidden overflow-y-scroll hide-scrollbar h-screen p-12 md:p-12 xl:p-30 2xl:p-52">
        <div
          className="flex flex-col items-center justify-center gap-[16px] md:gap-[24px] lg:gap-[32px] pt-0 md:pt-24 "
          style={{ width: "-webkit-fill-available" }}
        >
          <img src={Logo} alt="Logo" className="h-10 w-50 lg:h-20 lg:w-90" />

          <hr className="border-gray-300 w-60 md:w-70 lg:w-100" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "-webkit-fill-available" }}
          >
            <div className="w-100 flex mb-[24px] ">
              <p className="text-sm md:text-base lg:text-2xl font-bold text-start w-100">
                Login
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Email {...register("email")} />

              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.email?.message}
              </p>

              <Password {...register("password")} />

              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.password?.message}
              </p>
            </div>

            <div className="mt-6 flex gap-6 flex-col">
              <Button type="submit" />

              <p className="text-[#737373] text-xs md:text-xs lg:text-sm text-center cursor-pointer">
                or continue with
              </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-6 mt-5">
              <div className="cursor-pointer p-3 border-1 rounded-lg border-gray-300 border-soild">
                <img
                  className="w-3 lg:w-5 h-3 lg:h-5"
                  src={Google}
                  alt="Goole"
                ></img>
              </div>

              <div className="cursor-pointer p-3 border-1 rounded-lg border-gray-300 border-soild">
                <img
                  className="w-3 lg:w-5 h-3 lg:h-5"
                  src={FaceBook}
                  alt="Goole"
                ></img>
              </div>

              <div className="cursor-pointer p-3 border-1 rounded-lg border-gray-300 border-soild">
                <img
                  className="w-3 lg:w-5 h-3 lg:h-5"
                  src={Twitter}
                  alt="Goole"
                ></img>
              </div>
            </div>
          </form>

          <hr className="border-gray-300  w-60 md:w-70 lg:w-100" />

          <p className="text-[#737373] text-xs md:text-xs lg:text-sm cursor-pointer ">
            Skip Login
          </p>
        </div>
      </div>

      {/* login end */}
    </div>
  );
};

export default Login;
