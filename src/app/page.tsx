import Image from 'next/image'
import Header from './components/Header'
import LandingScreen from './screens/LandingScreen'

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full">
      <div className='h-full w-full'>
      <LandingScreen />
      </div>
    </main>
  )
}
