import LandingScreen from "./screens/LandingScreen";
import SocGrid from "./components/SocGrid";
import SupportGrid from "./components/SupportGrid";
import EventGrid from "./components/EventGrid";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full ">
      <div className="min-h-screen w-full">
        <LandingScreen />
      </div>

      {/* <div className="flex  justify-center bg-neutral-700">
        <div className="w-full md:container "> */}
          {/* <EventGrid /> */}
          {/* <SocGrid /> */}
          <div className="w-full h-full flex flex-col justify-center mt-3">
            <span className="text-4xl text-black text-center">MegaLAN Gaming Poll</span>
            <p className="text-center text-lg">This poll shows the games interest amongst people interested or going to MegaLAN. Put your vote in to ensure your favourite games are represented!</p>
            <div
              className="mt-2 w-full h-full flex flex-col"
              id="strawpoll_bVg8oMG13nY"
            >
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
