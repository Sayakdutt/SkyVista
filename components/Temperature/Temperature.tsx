"use client";
import React, { useEffect, useState } from "react";
import { useWeatherContext } from "@/context/weatherContext";
import {
  clearSky,
  cloudy,
  drizzleIcon,
  navigation,
  rain,
  snow,
} from "@/utils/Icons";
import { kelvinToCelsius } from "@/utils/misc";
import moment from "moment";
import { Skeleton } from "../ui/skeleton";

function Temperature() {
  const { forecast } = useWeatherContext();

  const { main, timezone, name, weather } = forecast;

  if (!forecast || !weather) {
    return (
      <section className="rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:h-[25rem]">
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-24 bg-zinc-400" />
          <Skeleton className="h-8 w-24 bg-zinc-400" />
        </div>
        <div className="pt-2 font-bold flex gap-1">
          <Skeleton className="w-40 h-8 bg-zinc-400" />
        </div>
        <div className="py-10 text-9xl self-center">
          <Skeleton className="w-60 h-20 bg-zinc-400" />
        </div>
        <div>
          <span>
            <Skeleton className="w-32 h-10 bg-zinc-400" />
          </span>
          <div className="pt-2 flex flex-col gap-2 font-medium">
            <Skeleton className="w-32 h-8 bg-zinc-400" />
            <Skeleton className="w-32 h-8 bg-zinc-400" />
          </div>
        </div>
      </section>
    );
  }

  const temp = kelvinToCelsius(main?.temp);
  const minTemp = kelvinToCelsius(main?.temp_min);
  const maxTemp = kelvinToCelsius(main?.temp_max);

  // State
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");

  const { main: weatherMain, description } = weather[0];

  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };

  // Live time update
  useEffect(() => {
    // update time every second
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      // custom format: 24 hour format
      const formatedTime = localMoment.format("HH:mm:ss");
      // day of the week
      const day = localMoment.format("dddd");

      setLocalTime(formatedTime);
      setCurrentDay(day);
    }, 1000);

    // clear interval
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <section
      className="pt-6 pb-5 px-4 border rounded-lg flex flex-col 
        justify-between dark:bg-card shadow-sm dark:shadow-none"
    >
      <p className="flex justify-between items-center">
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="pt-2 font-bold flex gap-1">
        <span>{name}</span>
        <span>{navigation}</span>
      </p>
      <p className="py-10 text-9xl font-bold self-center">{temp}°</p>

      <div>
        <div>
          <span>{getIcon()}</span>
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p className="flex items-center gap-2">
          <span>Low: {minTemp}°</span>
          <span>High: {maxTemp}°</span>
        </p>
      </div>
    </section>
  );
}

export default Temperature;
