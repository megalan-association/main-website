import LandingScreen from "./screens/LandingScreen";
import SocGrid from "./components/SocGrid";
import SupportGrid from "./components/SupportGrid";
import EventGrid from "./components/EventGrid";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full bg-neutral-700">
      <div className="min-h-screen w-full">
        <LandingScreen />
      </div>

      <div className="flex  justify-center bg-neutral-700">
        <div className="w-full md:container ">
          {/* <EventGrid /> */}
          <SocGrid />
        </div>
      </div>
      {/* <div className="flex justify-center bg-neutral-700">
        <div className="w-full md:container ">
          <SupportGrid />
        </div>
      </div> */}
    </main>
  );
}
