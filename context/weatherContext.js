"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();
const WeatherContextUpdate = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [airQuality,setAirQuality] = useState({});

  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");
      console.log(res);
      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching data", error.message);
    }
  };

  const fetchAirQuality = async () => {
    try {
      const res = await axios.get("api/pollution");
      console.log(res);
      setAirQuality(res.data);
    } catch (error) {
      console.log("Error fetching data", error.message);
    }
  }
  useEffect(() => {
    fetchForecast();
    fetchAirQuality();
  }, []);
  return (
    <WeatherContext.Provider
      value={{
        forecast,
        airQuality,
      }}
    >
      <WeatherContextUpdate.Provider>{children}</WeatherContextUpdate.Provider>
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
export const useWeatherContextUpdate = () => useContext(WeatherContextUpdate);
