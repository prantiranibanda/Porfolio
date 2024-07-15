import React from "react";

export default function Copyright() {
	return (
		<div className="flex items-center justify-between border-t border-zinc-400 bg-[#ff014f] px-10 py-3 text-white">
			<div className="great-vibes-regular text-xl text-[#e7b3c9]">
				Pranti Rani Banda
			</div>
			<div className="pr-24 text-[#f873aa]">
				copyright &#169; made with &#9829;
			</div>
			<div>
				<a href="https://github.com/prantiranibanda/pranti" target="_blank">
					<i className="fi fi-brands-github text-2xl text-[#f873aa]"></i>
				</a>
			</div>
		</div>
	);
}
