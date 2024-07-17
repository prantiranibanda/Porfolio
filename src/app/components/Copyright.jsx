import React from "react";

export default function Copyright() {
	return (
		<div className="flex items-center justify-between border-t border-zinc-700 bg-zinc-900 px-10 py-3 text-white">
			<div className="yellowtail-regular text-xl text-white">
				Pranti Rani Banda
			</div>
			<div className="pr-24 text-zinc-700">
				copyright &#169; made with &#9829;
			</div>
			<div>
				<a href="https://github.com/prantiranibanda/Portfolio" target="_blank">
					<i className="fi fi-brands-github text-2xl text-zinc-700"></i>
				</a>
			</div>
		</div>
	);
}
