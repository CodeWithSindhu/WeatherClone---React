import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

import {
  UilTemperatureThreeQuarter,
  UilEye,
  UilWater,
  UilWind,
} from "@iconscout/react-unicons";
import React, { useState } from "react";

const InputFrom = ({ Data, setLocation, Loading, errMssg }) => {
  const [InputValue, setInputValue] = useState();
  const [Animate, setAnimate] = useState(false);
  // const [Loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (InputValue !== "") {
      setLocation(InputValue);
      setInputValue("");
    }
    const input = document.querySelector("input");

    if (input.value === "") {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
  };

  //

  let Icon;
  // Set the all icons according to weather
  switch (Data.weather[0].main || Data.weather[0].icon) {
    case "Clear":
      if (Data.weather[0].icon === "01n") {
        Icon = (
          <img
            style={{ height: 64 }}
            src="./src/weater-icons/amcharts_weather_icons_1.0.0/animated/night.svg"
          />
        );
        break;
      } else if (Data.weather[0].main) {
        Icon = (
          <img
            className="text-2xl"
            style={{ height: 64 }}
            // src="./src/weater-icons/amcharts_weather_icons_1.0.0/animated/day.svg"
            src="./src/weater-icons/Clear.svg"
          />
        );
        break;
      }

    case "Haze":
      Icon = (
        <img
          style={{ height: 64 }}
          src="./src/weater-icons/Night-miniclouds.svg"
        />
      );
      break;

    case "Rain":
      if (Data.weather[0].icon === "10n") {
        Icon = (
          <img style={{ height: 64 }} src="./src/weater-icons/Night-rain.svg" />
        );
        break;
      } else if (Data.weather[0].main) {
        Icon = (
          <img style={{ height: 64 }} src="./src/weater-icons/Rainy.svg" />
        );
        break;
      }

    case "Drizzle":
      Icon = (
        <img style={{ height: 64 }} src="./src/weater-icons/Clouds-rain.svg" />
      );
      break;

    case "Clouds":
      if (Data.weather[0].icon === "02n") {
        Icon = (
          <img
            style={{ height: 64 }}
            src="./src/weater-icons/Night-clouds.svg"
          />
        );
        break;
      } else if (Data.weather[0].main) {
        Icon = (
          <img style={{ height: 64 }} src="./src/weater-icons/Cloudy.svg" />
        );
        break;
      }

    case "Thunderstrom":
      Icon = (
        <img
          style={{ height: 64 }}
          src="./src/weater-icons/Heavyrain-strom.svg"
        />
      );
      break;
  }

  const date = new Date();
  return (
    <>
      <div className="flex justify-center h-screen items-center flex-col">
        {errMssg && (
          <div className=" flex gap-2 w-full max-w-[90vw] lg:max-w-[450px] bg-white text-black absolute top-2 lg:top-2 p-4 capitalize rounded-md">
            <ExclamationTriangleIcon className="h-6 w-6 text-black" />
            {`${errMssg.response.data.message}`}
          </div>
        )}
        <form
          className={` ${
            Animate
              ? "animate-infinite animate-shake border-red-700 bg-white"
              : "animate-none"
          } h-16  border  bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-4`}
        >
          <div className="h-full relative flex items-center justify-between p-2 ">
            <input
              className={`${
                Animate
                  ? "flex-1 first-letter:capitalize bg-transparent placeholder:font-semibold placeholder:text-red-700 text-white text-[15px] font-light pl-6 h-full"
                  : "flex-1 first-letter:capitalize bg-transparent  placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
              } `}
              type="text"
              placeholder={`${
                Animate ? "Enter City..." : "Search by city or country..."
              }`}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className={`${
                Animate
                  ? "bg-red-600 w-20 h-12 rounded-full flex justify-center items-center"
                  : "bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center"
              }`}
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </form>
        <div className="w-full border min-w-[450px] bg-black/25 max-h-[400px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6 ">
          {/* Card Header */}

          {Loading ? (
            <div className="w-full h-full flex justify-center items-center gap-2">
              <ArrowPathIcon className="h-6 w-6 animate-spin" />
              Loading...
            </div>
          ) : (
            <>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center  ">
                    <div>{Icon}</div>
                  </div>
                  <div>
                    <div className="text-1xl font-semibold">
                      {Data.name}, {Data.sys.country}
                    </div>
                    <div className="font-extralight">
                      {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                      {date.getFullYear()}
                    </div>
                  </div>
                </div>
                {/* Card Body */}

                <div className="text-8xl flex justify-center items-center my-1">
                  {parseInt(Data.main.temp)}
                  <div className="text-[16px]">{"\u2103"}</div>
                </div>

                <div className="text-md text-center capitalize mr-3 my-2">
                  {Data.weather[0].description}
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex justify-between gap-x-2 mt-5">
                  <div className="flex items-center gap-2">
                    <UilEye className="h-6 w-6 text-white" />
                    <div className="flex gap-2">
                      Visibility
                      <span className="">{Data.visibility / 1000} km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <UilTemperatureThreeQuarter className="h-6 w-6 text-white" />

                    <div className="flex gap-2">
                      Feels like
                      <span className=" gap-1">
                        {`${parseInt(Data.main.feels_like)} \u2103 `}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-x-2 mt-5">
                  <div className="flex items-center gap-2">
                    <UilWater className="h-6 w-6 text-white" />
                    <div className="flex gap-2">
                      Humidity
                      <span className="">{Data.main.humidity} %</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <UilWind className="h-6 w-6 text-white " />
                    <div className="flex gap-2 ">
                      Wind
                      <span className=" gap-1">{`${Data.wind.speed} m/s`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default InputFrom;
