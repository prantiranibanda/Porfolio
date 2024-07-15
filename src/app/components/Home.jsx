import React from "react";
import ContactIcon from "./ContactIcon";
import MyPhoto from "@/../public/myphoto.png"
import Image from "next/image";

const Home = () => {
	return (
		<div className="flex items-center justify-between px-24">
			<div className="">
				<div className="abel-regular pb-10 pt-40 text-8xl text-zinc-700">
					Welcome to my world!
				</div>
				<div className="flex items-center md:flex">
					<div className="w-full md:flex">
						<div className="">
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
			<div className=" pb-20">
				<div className="border-8 border-[#ff014f] rounded-full">
					<Image
						src={MyPhoto}
						alt="my photo"
						height={400}
						width={400}
						className="sticky z-10 rounded-full border-8 border-black bg-gradient-to-bl from-black via-zinc-900 to-zinc-600"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
