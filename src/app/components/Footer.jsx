import React from "react";

export default function Footer() {
	return (
		<div className="abel-regular-thin h-54 flex items-center justify-between space-x-2 bg-zinc-900 px-40 py-10 mt-24 text-xl text-zinc-400">
			<div className="w-80 space-y-3 px-16 py-2">
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
			<div className="flex w-80 flex-col items-center">
				<div className="text-[#ff014f]">
					<span className="material-symbols-outlined">home_pin</span>
				</div>
				<div className="px-3 text-center">
					Manirupa Appt, Harmozvilla, Sodepur Road, Madhyamgram, PIN-700129,
					North 24 Parganas, West Bengal, India
				</div>
			</div>
			<div className="flex w-80 flex-col justify-center space-y-3 px-10 py-5">
				<div className="flex space-x-4">
					<a href="https://github.com/prantiranibanda">
						<i className="fi fi-brands-github text-xl text-[#ff014f]"></i>
					</a>
					<a
						href="https://github.com/prantiranibanda"
						className="hover:underline"
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
						className="hover:underline"
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
						className="hover:underline"
					>
						instagram.com/prantiranibanda
					</a>
				</div>
			</div>
		</div>
	);
}
