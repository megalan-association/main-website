import Image from "next/image";
import Header from "./components/Header";
import LandingScreen from "./screens/LandingScreen";
import SocGrid from "./components/SocGrid";
import InfoScreen from "./screens/InfoScreen";
import SupportGrid from "./components/SupportGrid";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full bg-neutral-700">
      <div className="min-h-screen w-full">
        <LandingScreen />
      </div>

      <div className="h-screen w-full flex flex-col" id="strawpoll_bVg8oMG13nY">
        <iframe
          title="StrawPoll Embed"
          id="strawpoll_iframe_bVg8oMG13nY"
          className="static visible block w-full h-full "
          src="https://strawpoll.com/embed/bVg8oMG13nY"
        >
          Loading...
        </iframe>
        <script
          async
          src="https://cdn.strawpoll.com/dist/widgets.js"
          // charset="utf-8"
        ></script>
      </div>
      <div className="flex  min-h-screen justify-center bg-neutral-700">
        <div className="w-full md:container ">
          <SocGrid />
        </div>
      </div>
      <div className="flex justify-center bg-neutral-700">
        <div className="w-full md:container ">
          <SupportGrid />
        </div>
      </div>
    </main>
  );
}
