import WhatsOnScreen from "../screens/WhatsOnScreen";
import EventGrid from "../components/EventGrid";

export default function Page() {
  return (
    <main className="flex flex-col h-full w-full bg-neutral-700 pt-8">
      <div className="w-full">
        <WhatsOnScreen />
      </div>
      <div className="flex h-full justify-center bg-neutral-700">
        <div className="w-full md:container ">
          <EventGrid />
        </div>
      </div>
    </main>
  )
}