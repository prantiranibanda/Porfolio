"use client";
import React, { useState } from "react";
import COriginal from "react-devicons/c/original";
import CplusplusOriginal from "react-devicons/cplusplus/original";
import JavaOriginal from "react-devicons/java/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import GitOriginal from "react-devicons/git/original";
import GithubOriginal from "react-devicons/github/original";
import Css3Original from "react-devicons/css3/original";
import Html5Original from "react-devicons/html5/original";
import ReactOriginal from "react-devicons/react/original";
import NextjsOriginal from "react-devicons/nextjs/original";
import TailwindcssPlain from "react-devicons/tailwindcss/original";
import MysqlOriginal from "react-devicons/mysql/original";
import MongodbOriginal from "react-devicons/mongodb/original";
import LinuxOriginal from "react-devicons/linux/original";
import Image from "next/image";
import { motion } from "framer-motion";

const Skill = () => {
	const [slide1, setSlide1] = useState({});
	const [slide2, setSlide2] = useState({});
	const [slide3, setSlide3] = useState({});
	const [slide4, setSlide4] = useState({});
	let s = {
		x: 400,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	};
	return (
		<div>
			<div className="heading">Skills</div>
			<div className="space-y-40 px-40 py-10">
				<div className="flex justify-center">
					<motion.div
						initial={{ x: 0 }}
						animate={slide1}
						className="skills-card"
					>
						<div>Languages and Stylesheet</div>
					</motion.div>
					<motion.div
						onMouseEnter={() => {
							setSlide1(s);
						}}
						onMouseLeave={() => {
							setSlide1({});
						}}
						className="absolute flex space-x-14 rounded-xl border border-gray-600 bg-gradient-to-r from-[#0c0c0c] via-[#212020] to-[#0c0c0c] px-5 py-5 shadow-md shadow-gray-700"
					>
						<COriginal className="text-5xl" />
						<CplusplusOriginal className="text-5xl" />
						<JavaOriginal className="text-5xl" />
						<JavascriptOriginal className="text-5xl" />
						<Html5Original className="text-5xl" />
						<Css3Original className="text-5xl" />
					</motion.div>
				</div>
				<div className="flex justify-around bg-blue-800">
					<div className="flex justify-center">
						<motion.div
							initial={{ x: 0 }}
							animate={slide2}
							className="skills-card"
						>
							<div>Frameworks</div>
						</motion.div>
						<motion.div
							onMouseEnter={() => {
								setSlide2(s);
							}}
							onMouseLeave={() => {
								setSlide2({});
							}}
							className="absolute flex space-x-14 rounded-xl border border-gray-600 bg-gradient-to-r from-[#0c0c0c] via-[#212020] to-[#0c0c0c] px-5 py-5 shadow-md shadow-gray-700"
						>
							<ReactOriginal className="text-5xl" />
							<NextjsOriginal className="text-5xl" />
							<TailwindcssPlain className="text-5xl" />
						</motion.div>
					</div>
					<div className="flex justify-center">
						<motion.div
							initial={{ x: 0 }}
							animate={slide3}
							className="skills-card"
						>
							<div>Runtime Env and Databases</div>
						</motion.div>
						<motion.div
							onMouseEnter={() => {
								setSlide3(s);
							}}
							onMouseLeave={() => {
								setSlide3({});
							}}
							className="absolute flex space-x-14 rounded-xl border border-gray-600 bg-gradient-to-r from-[#0c0c0c] via-[#212020] to-[#0c0c0c] px-5 py-5 shadow-md shadow-gray-700"
						>
							<Image
								alt="nodejs"
								width={50}
								height={50}
								src="https://devicon-website.vercel.app/api/nodejs/original.svg"
							></Image>
							<MysqlOriginal className="text-5xl" />
							<MongodbOriginal className="text-5xl" />
						</motion.div>
					</div>
				</div>
				<div className="flex justify-center">
					<motion.div
						initial={{ x: 0 }}
						animate={slide4}
						className="skills-card"
					>
						<div>Other tools</div>
					</motion.div>
					<motion.div
						onMouseEnter={() => {
							setSlide4(s);
						}}
						onMouseLeave={() => {
							setSlide4({});
						}}
						className="absolute flex space-x-14 rounded-xl border border-gray-600 bg-gradient-to-r from-[#0c0c0c] via-[#212020] to-[#0c0c0c] px-5 py-5 shadow-md shadow-gray-700"
					>
						<GithubOriginal color="#FFFFFF" className="text-5xl" />
						<GitOriginal className="text-5xl" />
						<LinuxOriginal className="text-5xl" />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
