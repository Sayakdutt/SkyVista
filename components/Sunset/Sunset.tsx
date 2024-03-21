"use client";
import { useWeatherContext } from "@/context/weatherContext";
import { Skeleton } from "@/components/ui/skeleton";
import { unixToTime } from "@/utils/misc";
import { sunset } from "@/utils/Icons";

function Sunset() {
  const { forecast } = useWeatherContext();
  if (!forecast || !forecast?.sys || !forecast?.sys?.sunset) {
    return <Skeleton className="h-[12rem] w-full" />;
  }
  const timezone = forecast?.timezone;
  const sunsetTime = unixToTime(forecast?.sys?.sunset, timezone);
  const sunrise = unixToTime(forecast?.sys?.sunrise, timezone);
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="flex flex-col space-y-1.5 pb-4">
        <h2 className="flex flex-row items-center gap-2 text-sm font-semibold leading-none tracking-tight text-neutral-600 dark:text-neutral-400 md:text-base md:font-medium">{sunset} Sunset</h2>
        <p className="font-semibold md:text-lg">{sunsetTime}</p>
      </div>
      <p className="mt-auto flex items-center pt-0 text-xs md:text-sm">Sunrise: {sunrise}</p>
    </div>
  );
}
export default Sunset;
