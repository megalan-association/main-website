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

      <div
        className="h-screen w-full flex flex-col"
        id="strawpoll_bVg8oMG13nY"
        // style="height: 1028px; max-width: 640px; width: 100%; margin: 0 auto; display: flex; flex-direction: column;"
      >
        <iframe
          title="StrawPoll Embed"
          id="strawpoll_iframe_bVg8oMG13nY"
          className="static visible block w-full h-screen "
          src="https://strawpoll.com/embed/bVg8oMG13nY"
          // style="position: static; visibility: visible; display: block; width: 100%; flex-grow: 1;"
          // frameborder="0"
          // allowfullscreen
          // allowtransparency
        >
          Loading...
        </iframe>
        <script
          async
          src="https://cdn.strawpoll.com/dist/widgets.js"
          // charset="utf-8"
        ></script>
      </div>
      <div className="flex flex-row min-h-screen justify-center bg-neutral-700">
        <div className="w-full md:container ">
          <SocGrid />
        </div>
      </div>
    </main>
  );
}
