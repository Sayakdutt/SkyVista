import AirPollution from "@/components/AirPollution/AirPollution";
import Navbar from "@/components/Navbar";
import Sunset from "@/components/Sunset/Sunset";
import Temperature from "@/components/Temperature/Temperature";
import Wind from "@/components/Wind/Wind";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full m-auto min-w-[20rem] md:w-1/2">
          <Temperature />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full min-w-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <Sunset />
            <Wind />
          </div>
        </div>
      </div>
    </main>
  );
}
