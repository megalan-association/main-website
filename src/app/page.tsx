import Image from "next/image";
import Header from "./components/Header";
import LandingScreen from "./screens/LandingScreen";
import SocGrid from "./components/SocGrid";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full bg-neutral-700">
      <div className="min-h-screen w-full">
        <LandingScreen />
      </div>
      <div className="flex flex-row min-h-screen justify-center bg-neutral-700">
        <div className="w-full md:container ">
          <SocGrid />
        </div>
      </div>
    </main>
  );
}
