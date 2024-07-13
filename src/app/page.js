"use client";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Skills from "./components/Skills";

export default function App() {
	return (
		<div>
			<Home />
			<About />
			{/* <Skills /> */}
			<Projects />
			<Skill />
		</div>
	);
}
