import axios from "axios";
import React, { useEffect, useState } from "react";
import InputFrom from "./InputFrom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const API_KEY = "f603b2469b6160751de4bcafa3430a48";

const Weatherservice = () => {
  const [Data, setData] = useState(null);
  const [Location, setLocation] = useState("Surat");
  const [Loading, setLoading] = useState(false);
  const [errMssg, seterrMssg] = useState(false);

  useEffect(() => {
    setLoading(true);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=metric&appid=${API_KEY}`;
    axios
      .get(URL)
      .then((res) => {
        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        seterrMssg(err);
      });
  }, [Location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      seterrMssg("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [errMssg]);

  console.log(Data);

  if (!Data) {
    return (
      <>
        <div className="text-white flex gap-2 ">
          <ArrowPathIcon className="h-6 w-6  animate-spin" />
          Wait a sec...
        </div>
      </>
    );
  } else {
    return (
      <InputFrom
        Data={Data}
        Loading={Loading}
        errMssg={errMssg}
        setLocation={setLocation}
      />
    );
  }
};

export default Weatherservice;
