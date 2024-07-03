import React from 'react'
import ContactIcon from './ContactIcon'


const Home = () => {
  return (
    <div>
      <div className="pt-40 pb-10 px-14 text-8xl abel-regular text-zinc-700">Welcome to my world!</div>
      <div className="flex md:flex items-center">
        <div className="md:flex w-full">          
            <div className="px-14">
              <div className="text-7xl abel-regular text-gray-400">
                Hello, I'm <span className="text-7xl abel-regular py-5 text-[#ff014f]">Pranti Rani Banda</span>
              </div>
              <div className="text-3xl abel-regular-thin pt-7 text-white pb-60">
                I like coding and enjoy building websites. I have <br />a keen
                interest in UI/UX design.
              </div>
            </div>
        </div>
      </div>
      <ContactIcon/>
    </div>
  )
}

export default Home
