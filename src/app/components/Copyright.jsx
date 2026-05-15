import React from "react";

export default function Copyright() {
	return (
		<div className="flex flex-col items-center gap-2 border-t border-zinc-700 bg-zinc-900 px-5 py-3 text-white sm:flex-row sm:justify-between sm:px-10">
			<div className="yellowtail-regular text-lg text-white sm:text-xl">
				Pranti Rani Banda
			</div>
			<div className="text-sm text-zinc-700 sm:text-base md:pr-24">
				copyright &#169; made with &#9829;
			</div>
			<div>
				<a href="https://github.com/prantiranibanda/Portfolio" target="_blank">
					<i className="fi fi-brands-github text-xl text-zinc-700 sm:text-2xl"></i>
				</a>
			</div>
		</div>
	);
}
