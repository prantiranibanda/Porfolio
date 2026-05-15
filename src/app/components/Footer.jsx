import React from "react";

export default function Footer() {
	return (
		<div className="abel-regular-thin mt-12 flex flex-col items-center space-y-8 bg-zinc-900 px-5 py-8 text-base text-zinc-400 sm:px-10 md:mt-24 md:flex-row md:items-start md:justify-between md:space-x-4 md:space-y-0 md:px-8 md:py-10 md:text-xl lg:px-20 xl:px-40">
			<div className="w-full space-y-3 px-4 md:w-80 md:px-16 md:py-2">
				<div className="flex space-x-4">
					<span className="material-symbols-outlined text-[#ff014f]">call</span>
					<div>+91-7439455739</div>
				</div>
				<div className="flex space-x-4">
					<span className="material-symbols-outlined text-[#ff014f]">mail</span>
					<div>prantibanda@gmail.com</div>
				</div>
				<div className="flex space-x-4">
					<i className="fi fi-brands-whatsapp text-xl text-[#ff014f]"></i>
					<div>+91-7439455739</div>
				</div>
			</div>
			<div className="flex w-full flex-col items-center md:w-80">
				<div className="text-[#ff014f]">
					<span className="material-symbols-outlined">home_pin</span>
				</div>
				<div className="px-3 text-center">
					Manirupa Appt, Harmozvilla, Sodepur Road, Madhyamgram, PIN-700129,
					North 24 Parganas, West Bengal, India
				</div>
			</div>
			<div className="flex w-full flex-col justify-center space-y-3 px-4 md:w-80 md:px-10 md:py-5">
				<div className="flex space-x-4">
					<a href="https://github.com/prantiranibanda">
						<i className="fi fi-brands-github text-xl text-[#ff014f]"></i>
					</a>
					<a
						href="https://github.com/prantiranibanda"
						className="hover:underline truncate"
					>
						github.com/prantiranibanda
					</a>
				</div>
				<div className="flex space-x-4">
					<a href="https://www.linkedin.com/in/prantiranibanda/">
						<i className="fi fi-brands-linkedin text-xl text-[#ff014f]"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/prantiranibanda/"
						className="hover:underline truncate"
					>
						linkedin.com/in/prantiranibanda
					</a>
				</div>
				<div className="flex space-x-4">
					<a href="https://www.linkedin.com/in/prantiranibanda/">
						<i className="fi fi-brands-instagram text-xl text-[#ff014f]"></i>
					</a>
					<a
						href="https://www.instagram.com/prantiranibanda/"
						className="hover:underline truncate"
					>
						instagram.com/prantiranibanda
					</a>
				</div>
			</div>
		</div>
	);
}
