import React from "react";
import ContactIcon from "./ContactIcon";
import MyPhoto from "@/../public/myphoto.png";
import Image from "next/image";

const Home = () => {
	return (
		<div
			id="home"
			className="flex h-[calc(100vh-4.75rem)] items-center space-x-20 px-24"
		>
			<div className="flex flex-col">
				<div className="abel-regular pb-10 text-8xl text-zinc-700">
					Welcome to my world!
				</div>
				<div className="flex items-center md:flex">
					<div className="w-full md:flex">
						<div className="">
							<div className="abel-regular text-7xl text-gray-400">
								Hello, I&#39;m&#160;
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
			</div>
			<div className="flex items-center">
				<div className="rounded-full border-4 border-[#ff014f]">
					<Image
						src={MyPhoto}
						alt="my photo"
						height={500}
						width={420}
						className="rounded-full border-8 border-black bg-gradient-to-bl from-black via-zinc-900 to-zinc-600"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
