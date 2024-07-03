import React from 'react'

const About = () => {
  return (
    <div>
      <div className="heading">About Me</div>
      <div className="flex px-40 space-x-14 text-justify abel-regular-thin text-2xl text-white">
        <div className="w-1/2">
          <div className="text-gray-400 abel-reguler text-3xl pb-1 w-fit border-b-2 border-[#ff014f]">Languages:</div>
          <div className="pt-2 pb-10 text-red-300"> C, C++,Java, JavaScript, Python, HTML5, CSS3</div>
          <div className="text-gray-400 abel-reguler text-3xl pb-1 w-fit border-b-2 border-[#ff014f]">Databases:</div>
          <div className="pt-2 pb-10 text-red-300"> SQL, MySQL, MongoDB</div>
          <div className="text-gray-400 abel-reguler text-3xl pb-1 w-fit border-b-2 border-[#ff014f]">Frameworks:</div>
          <div className="pt-2 pb-10 text-red-300"> React JS, Node JS, Express JS</div>
          <div className="text-gray-400 abel-reguler text-3xl pb-1 w-fit border-b-2 border-[#ff014f]">Tools & Technologies:</div>
          <div className="pt-2 pb-10 text-red-300"> Git, Github</div>
        </div>
        <div className="w-1/2">
          <div className="pb-5">
            I am an undergrad student at Techno Main Salt Lake pursuing btech in the field of Information Technology.I have started my web development journey and created several websites using ReactJS, NextJS and other JS frameworks alongwith some CSS frameworks like Tailwind.
          </div>
          <div className="pb-5">
            I am always ready to learn new stuffs. Always strive to bring 100% to the work I do. Besides being a tech enthusiast I have a good grasp in painting landscapes, sketching portraits.
          </div>
          <div className="pb-5">
            Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.
          </div>
          <div className="mb-52"></div>
        </div>
      </div>
    </div>
  )
}

export default About   
