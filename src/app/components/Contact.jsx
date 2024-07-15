import React from "react";

export default function Contact() {
	return (
		<div className="pb-52">
			<div className="heading mt-40">Contact</div>
			<div className="flex items-center justify-center">
				<div className="grid grid-cols-2 gap-10 px-80">
					<div className="space-y-4 p-10">
						<div>
							<div className="abel-regular-thin py-1 text-xl text-[#ff014f]">
								Your Name :
							</div>
							<input
								className="rounded-[4px] border border-gray-700 bg-gradient-to-r from-[#000000] to-[#1e1d1d] p-3 text-sm font-light text-white sm:mb-0 sm:w-72 md:w-80"
								placeholder="name"
								type="text"
							/>
						</div>
						<div>
							<div className="abel-regular-thin py-1 text-xl text-[#ff014f]">
								Email Address :
							</div>
							<input
								className="rounded-[4px] border border-gray-700 bg-gradient-to-r from-[#000000] to-[#1e1d1d] p-3 text-sm font-light text-white sm:mb-0 sm:w-72 md:w-80"
								placeholder="email"
								type="text"
							/>
						</div>
						<div>
							<div className="abel-regular-thin py-1 text-xl text-[#ff014f]">
								Mobile No :
							</div>
							<input
								className="rounded-[4px] border border-gray-700 bg-gradient-to-r from-[#000000] to-[#1e1d1d] p-3 text-sm font-light text-white sm:mb-0 sm:w-72 md:w-80"
								placeholder="mobile no"
								type="text"
							/>
						</div>
					</div>

					<div className="flex flex-col justify-between p-10 text-white">
						<div>
							<div className="abel-regular-thin py-1 text-xl text-[#ff014f]">
								Message :
							</div>
							<textarea
								className="h-40 w-[20rem] rounded-[4px] border border-gray-700 bg-gradient-to-r from-[#000000] to-[#1e1d1d] p-3 text-sm font-light text-white"
								placeholder="message me..."
								type="text"
							/>
						</div>
						<button className="abel-regular-thin w-fit rounded-md bg-[#ff014f] px-8 py-2 text-xl text-white">
							Send Me
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
