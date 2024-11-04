import Link from "next/link";
import React from "react";

const ContactIcon = () => {
	return (
		<div className="space-x-8 pt-8 text-white">
			<Link href="https://github.com/prantiranibanda" target="_blank"> 
				<i className="fi fi-brands-github inline-block text-2xl text-red-300 hover:animate-bounce hover:cursor-pointer hover:text-[#ff014f]"></i>
			</Link>
			<Link href="https://www.linkedin.com/in/prantiranibanda/">
				<i className="fi fi-brands-linkedin inline-block text-2xl text-red-300 hover:animate-bounce hover:cursor-pointer hover:text-[#ff014f]"></i>
			</Link>
			<Link href="https://www.instagram.com/prantiranibanda" target="_blank">
				<i className="fi fi-brands-instagram inline-block text-2xl text-red-300 hover:animate-bounce hover:cursor-pointer hover:text-[#ff014f]"></i>
			</Link>
			<Link href="https://www.facebook.com/prantiranibanda" target="_blank">
				<i className="fi fi-brands-facebook inline-block text-2xl text-red-300 hover:animate-bounce hover:cursor-pointer hover:text-[#ff014f]"></i>
			</Link>
			<Link href="https://x.com/prantiranibanda" target="_blank">
				<i className="fi fi-brands-twitter-alt inline-block text-2xl text-red-300 hover:animate-bounce hover:cursor-pointer hover:text-[#ff014f]"></i>
			</Link>
		</div>
	);
};

export default ContactIcon;
