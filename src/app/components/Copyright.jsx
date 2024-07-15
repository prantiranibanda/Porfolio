import React from "react";

export default function Copyright() {
	return (
		<div className="flex items-center justify-between border-t border-zinc-400 bg-[#ff014f] px-10 py-3 text-white">
			<div className="great-vibes-regular text-2xl text-[#e7b3c9]">
				Pranti Rani Banda
			</div>
			<div className="text-[#f873aa]">copyright ©</div>
			<div>
				<a href="https://github.com/prantiranibanda/pranti" target="_blank">
					<i className="fi fi-brands-github text-2xl text-[#f873aa]"></i>
				</a>
			</div>
		</div>
	);
}
