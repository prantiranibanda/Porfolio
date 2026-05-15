"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact({ setActive }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [mssg, setMssg] = useState("");

	return (
		<motion.div
			onViewportEnter={() => {
				setActive("#contact");
			}}
			id="contact"
		>
			<div className="heading mb-10 mt-20 md:mb-16 md:mt-44">Contact Me</div>
			<div className="flex items-center justify-center px-5 sm:px-10 md:px-8 lg:px-80">
				<div className="grid w-full max-w-4xl grid-cols-1 gap-6 border border-zinc-400 md:grid-cols-2 md:gap-10">
					<div className="space-y-4 p-6 md:p-10">
						<div>
							<div className="abel-regular-thin py-1 text-xl text-[#ff014f] md:text-2xl">
								Your Name :
							</div>
							<input
								className="w-full rounded-[4px] border border-gray-700 bg-gradient-to-r from-[#000000] to-[#1e1d1d] p-3 text-sm font-light text-white sm:w-72 lg:w-80"
								placeholder="name"
								type="text"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div>
							<div className="abel-regular-thin py-1 text-xl text-[#ff014f] md:text-2xl">
								Email Address :
							</div>
							<input
								className="w-full rounded-[4px] border border-gray-700 bg-gradient-to-r from-[#000000] to-[#1e1d1d] p-3 text-sm font-light text-white sm:w-72 lg:w-80"
								placeholder="email"
								type="text"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<div className="abel-regular-thin py-1 text-xl text-[#ff014f] md:text-2xl">
								Mobile No :
							</div>
							<input
								className="w-full rounded-[4px] border border-gray-700 bg-gradient-to-r from-[#000000] to-[#1e1d1d] p-3 text-sm font-light text-white sm:w-72 lg:w-80"
								placeholder="mobile no"
								type="text"
								value={phone}
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
					</div>

					<div className="flex flex-col justify-between space-y-4 p-6 text-white md:space-y-0 md:p-10">
						<div>
							<div className="abel-regular-thin py-1 text-xl text-[#ff014f] md:text-2xl">
								Message :
							</div>
							<textarea
								className="h-40 w-full rounded-[4px] border border-gray-700 bg-gradient-to-r from-[#000000] to-[#1e1d1d] p-3 text-sm font-light text-white lg:w-[20rem]"
								placeholder="message me..."
								type="text"
								value={mssg}
								onChange={e => setMssg(e.target.value)}
							/>
						</div>
						<button
							onClick={async () => {
								emailjs.init("cfjgvwMEtOKjzUCS_");
								const resp = await emailjs.send(
									"service_325cdow",
									"portfolio_template",
									{ name, email, phone, message: mssg },
								);
								console.log(resp);
								setEmail("");
								setMssg("");
								setName("");
								setPhone("");
							}}
							className="abel-regular-thin w-fit rounded-md bg-[#ff014f] px-8 py-2 text-xl text-white md:text-2xl"
						>
							Send Me
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
