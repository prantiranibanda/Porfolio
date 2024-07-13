import React from "react";
import ContactIcon from "./ContactIcon";

const Home = () => {
	return (
		<div>
			<div className="abel-regular px-14 pb-10 pt-40 text-8xl text-zinc-700">
				Welcome to my world!
			</div>
			<div className="flex items-center md:flex">
				<div className="w-full md:flex">
					<div className="px-14">
						<div className="abel-regular text-7xl text-gray-400">
							Hello, I&#39;m
							<span className="abel-regular py-5 text-7xl text-[#ff014f]">
								Pranti Rani Banda
							</span>
						</div>
						<div className="abel-regular-thin pt-7 text-3xl text-white">
							I like coding and enjoy building websites. I have <br />a keen
							interest in UI/UX design.
						</div>
					</div>
				</div>
			</div>
			<ContactIcon />
			<div className="pb-60"></div>
		</div>
	);
};

export default Home;
