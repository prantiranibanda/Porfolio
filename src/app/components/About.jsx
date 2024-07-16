import React from "react";

const About = () => {
	return (
		<div id="about" >
			<div className="heading mb-16">About Me</div>
			<div className="abel-regular-thin flex space-x-14 px-40 text-justify text-2xl text-white">
				<div className="w-1/2">
					<div className="abel-reguler w-fit border-b-2 border-[#ff014f] pb-1 text-3xl text-gray-400">
						Languages:
					</div>
					<div className="pb-5 pt-2 text-red-300">
						{" "}
						C, C++,Java, JavaScript, Python, HTML5, CSS3
					</div>
					<div className="abel-reguler w-fit border-b-2 border-[#ff014f] pb-1 text-3xl text-gray-400">
						Databases:
					</div>
					<div className="pb-5 pt-2 text-red-300">
						{" "}
						SQL, MySQL, MongoDB
					</div>
					<div className="abel-reguler w-fit border-b-2 border-[#ff014f] pb-1 text-3xl text-gray-400">
						Frameworks:
					</div>
					<div className="pb-5 pt-2 text-red-300">
						{" "}
						React JS, Node JS, Express JS
					</div>
					<div className="abel-reguler w-fit border-b-2 border-[#ff014f] pb-1 text-3xl text-gray-400">
						Tools & Technologies:
					</div>
					<div className="pb-5 pt-2 text-red-300"> Git, Github</div>
				</div>
				<div className="w-1/2 text-2xl">
					<div className="pb-5">
						I am an undergrad student at Techno Main Salt Lake pursuing btech in
						the field of Information Technology.I have started my web
						development journey and created several websites using ReactJS,
						NextJS and other JS frameworks alongwith some CSS frameworks like
						Tailwind.
					</div>
					<div className="pb-5">
						I am always ready to learn new stuffs. Always strive to bring 100%
						to the work I do. Besides being a tech enthusiast I have a good
						grasp in painting landscapes, sketching portraits.
					</div>
					<div className="pb-5">
						Looking for an opportunity to work in a challenging position
						combining my skills in Software Engineering, which provides
						professional development, interesting experiences and personal
						growth.
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
