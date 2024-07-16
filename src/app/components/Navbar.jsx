"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [active, setActive] = useState("#home");
	const [isExpanded, setIsExpanded] = useState(false);
	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<div className="sticky top-0 h-20 border-b border-zinc-800 bg-[#030303]">
			{/* Navbar */}
			<div className={`flex items-center px-5 py-5 sm:px-10 lg:px-20`}>
				<div className="text-2xl font-bold text-[#ff014f] sm:text-3xl">
					<Link href="/">PRB</Link>
				</div>
				<div className="menu" onClick={toggleExpand}>
					<span className="material-symbols-outlined">
						{isExpanded ? "expand_more" : "menu"}
					</span>
				</div>
				<div className="mx-auto ml-auto hidden space-x-1 font-light text-white md:flex md:space-x-2">
					<div
						className={active === "#home" ? "nav-btn-active" : "nav-btn"}
						onClick={() => {
							setActive("#home");
						}}
					>
						<Link href="#home">Home</Link>
					</div>
					<div
						className={active === "#about" ? "nav-btn-active" : "nav-btn"}
						onClick={() => {
							setActive("#about");
						}}
					>
						<Link href="#about">About</Link>
					</div>
					<div
						className={active === "#skills" ? "nav-btn-active" : "nav-btn"}
						onClick={() => {
							setActive("#skills");
						}}
					>
						<Link href="#skills">Skills</Link>
					</div>
					<div
						className={active === "#projects" ? "nav-btn-active" : "nav-btn"}
						onClick={() => {
							setActive("#projects");
						}}
					>
						<Link href="#projects">Projects</Link>
					</div>
					<div
						className={active === "#contact" ? "nav-btn-active" : "nav-btn"}
						onClick={() => {
							setActive("#contact");
						}}
					>
						<Link href="#contact">Contact</Link>
					</div>
				</div>
				<div className="resume">
					<Link href="/resume">Resume</Link>
				</div>
			</div>
			{/* Menu */}
			<div
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
			</div>
		</div>
	);
};

export default Navbar;
