import React from "react";
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

const Skills = () => {
	return (
		<div>
			<div className="heading">Skills</div>
			<div className="space-y-10 px-40 py-10">
				<div className="rounded-[5px] border border-gray-600 bg-gradient-to-tr from-[#000000] via-[#1e1d1d] to-[#000000] px-5 shadow-lg shadow-zinc-700/40">
					<div className="abel-regular-thin border-b border-gray-500 p-5 text-4xl text-[#ff014f]">
						Languages and Stylesheet
					</div>
					<div className="flex space-x-20 p-10">
						<COriginal className="text-7xl" />
						<CplusplusOriginal className="text-7xl" />
						<JavaOriginal className="text-7xl" />
						<JavascriptOriginal className="text-7xl" />
						<Html5Original className="text-7xl" />
						<Css3Original className="text-7xl" />
					</div>
				</div>
				<div className="rounded-[5px] border border-gray-600 bg-gradient-to-tr from-[#000000] via-[#1e1d1d] to-[#000000] px-5 shadow-lg shadow-zinc-700/40">
					<div className="abel-regular-thin border-b border-gray-500 p-5 text-4xl text-[#ff014f]">
						Frameworks, Runtime Environment and Databases
					</div>
					<div className="flex space-x-20 p-10">
						<ReactOriginal className="text-7xl" />
						<NextjsOriginal className="text-7xl" />
						<TailwindcssPlain className="text-7xl" />
						<Image
							alt="nodejs"
							width={70}
							height={70}
							src="https://devicon-website.vercel.app/api/nodejs/original.svg"
						></Image>
						<MysqlOriginal className="text-7xl" />
						<MongodbOriginal className="text-7xl" />
					</div>
				</div>
				<div className="rounded-[5px] border border-gray-600 bg-gradient-to-tr from-[#000000] via-[#1e1d1d] to-[#000000] px-5 shadow-lg shadow-zinc-700/40">
					<div className="abel-regular-thin border-b border-gray-500 p-5 text-4xl text-[#ff014f]">
						Other Tools and Technologies
					</div>
					<div className="flex space-x-20 p-10">
						<GithubOriginal color="#FFFFFF" className="text-7xl" />
						<GitOriginal className="text-7xl" />
						<LinuxOriginal className="text-7xl" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
