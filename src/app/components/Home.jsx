import React from "react";
import ContactIcon from "./ContactIcon";
import MyPhoto from "@/../public/myphoto.png";
import Image from "next/image";
import { motion } from "framer-motion";
const Home = ({ setActive }) => {
	return (
		<motion.div
			onViewportEnter={() => {
				setActive("#home");
			}}
			id="home"
			className="flex min-h-[calc(100vh-4.75rem)] flex-col-reverse items-center justify-center px-5 sm:px-10 md:flex-row md:space-x-10 lg:space-x-20 lg:px-24"
		>
			<div className="flex flex-col items-center text-center md:items-start md:text-left">
				<div className="abel-regular pb-5 pt-10 text-4xl text-zinc-700 sm:text-5xl md:pb-10 md:pt-0 lg:text-8xl">
					Welcome to my world!
				</div>
				<div className="flex items-center">
					<div className="w-full">
						<div className="">
							<div className="abel-regular text-2xl text-gray-400 sm:text-3xl md:text-5xl lg:text-7xl">
								Hello, I&#39;m&#160;
								<span className="abel-regular py-5 text-2xl text-[#ff014f] sm:text-3xl md:text-5xl lg:text-7xl">
									Pranti Rani Banda
								</span>
							</div>
							<div className="abel-regular-thin pt-5 text-lg text-white sm:text-xl md:pt-7 md:text-2xl lg:text-3xl">
								I like coding and enjoy building websites. I have <br className="hidden sm:block" />a keen
								interest in UI/UX design.
							</div>
						</div>
					</div>
				</div>
				<ContactIcon />
			</div>
			<div className="hidden flex-shrink-0 items-center md:flex">
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
		</motion.div>
	);
};

export default Home;
