import Navbar from "./components/Navbar"
import desktopHero from './assets/images/image-hero-desktop.png'
import mobileHero from './assets/images/image-hero-mobile.png'
import clientAudiophile from './assets/images/client-audiophile.svg'
import clientDatabiz from './assets/images/client-databiz.svg'
import clientMeet from './assets/images/client-meet.svg'
import clientMaker from './assets/images/client-maker.svg'

function App() {

  return (
    <div>
      <Navbar />
      <div className="md:flex md:flex-row-reverse md:mx-28">
        <img className="md:hidden" src={mobileHero} alt="hero image" />
        <img className="hidden md:block w-1/2 object-scale-down" src={desktopHero} alt="" />
        <div className="md:flex md:flex-col md:justify-between md:items-start md:mt-32 md:px-8 md:mx-8">
          <div className="flex flex-col md:gap-14">
            <h1 className="font-bold text-3xl text-center my-5 md:text-start md:text-6xl">Make remote work</h1>
            <p className="m-4 text-center text-sm text-medium-gray md:m-0 md:text-start md:text-[0.9rem] md:w-[90%] md:leading-relaxed">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className="block m-auto bg-almost-black text-almost-white px-4 py-3 rounded-2xl md:m-0 md:w-1/3 hover:text-almost-black hover:bg-almost-white hover:border-[1px] hover:border-almost-black">Learn more</button>
          </div>
          <ul className="flex gap-5 items-center px-4 mt-7 md:mt-5 md:justify-around">
            <li>
              <img className="object-contain" src={clientDatabiz} alt="databiz logo" />
            </li>
            <li>
              <img className="object-contain" src={clientAudiophile} alt="audiophile logo" />
            </li>
            <li>
              <img  src={clientMeet} alt="meet logo" />
            </li>
            <li>
              <img  src={clientMaker} alt="maker logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
