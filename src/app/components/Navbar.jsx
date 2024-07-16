"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
	const [active, setActive] = useState(0);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", latest => {
		console.log(latest)
		const previous = scrollY.getPrevious();
		if (previous < latest && latest > 150) setIsHidden(true);
		else setIsHidden(false);

		if (latest <= 768) setActive("#home");
		else if (latest<=1896) setActive("#about");
		else if (latest<=3120) setActive("#skills");
		else if(latest<=4596) setActive("#projects");
		else setActive("#contact");
	})
	return (
		<motion.div
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={isHidden ? "hidden" : "visible"}
			transition={{ duration: 0.45, ease: "easeInOut" }}
			className="sticky top-0 border-b border-zinc-800 bg-[#030303]"
		>
			{/* Navbar */}
			<motion.div className={`flex items-center px-5 py-4 sm:px-10 lg:px-20`}>
				<div className="text-2xl font-bold text-[#ff014f] sm:text-3xl">
					<Link href="/">PRB</Link>
				</div>
				<div className="menu" onClick={toggleExpand}>
					<span className="material-symbols-outlined">
						{isExpanded ? "expand_more" : "menu"}
					</span>
				</div>
				<div className="mx-auto ml-auto hidden space-x-1 font-light text-white md:flex md:space-x-2">
					<Link
						href="#home"
						className={active === "#home" ? "nav-btn-active" : "nav-btn"}
					>
						Home
					</Link>

					<Link
						href="#about"
						className={active === "#about" ? "nav-btn-active" : "nav-btn"}
					>
						About
					</Link>

					<Link
						href="#skills"
						className={active === "#skills" ? "nav-btn-active" : "nav-btn"}
					>
						Skills
					</Link>

					<Link
						href="#projects"
						className={active === "#projects" ? "nav-btn-active" : "nav-btn"}
					>
						Projects
					</Link>

					<Link
						href="#contact"
						className={active === "#contact" ? "nav-btn-active" : "nav-btn"}
					>
						Contact
					</Link>
				</div>

				<Link
					href="https://flowcv.com/resume/0v3ha21gv8"
					className="resume abel-regular-thin text-xl"
				>
					Resume
				</Link>
			</motion.div>
			{/* Menu */}
			{/* <div
				className={`fixed w-full bg-slate-300 ${isExpanded ? "block" : "hidden"} opacity-95 md:hidden`}
			>
				<Link href="/">
					<div className="dropdown">Home</div>
				</Link>
				<Link href="/about">
					<div className="dropdown">About</div>
				</Link>
				<Link href="/skills">
					<div className="dropdown">Skills</div>
				</Link>
				<Link href="/contact">
					<div className="dropdown">Contact</div>
				</Link>
			</div> */}
		</motion.div>
	);
};

export default Navbar;
