"use client";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
	const [active, setActive] = useState("#home");
	return (
		<div>
			<Navbar setActive={setActive} active={active} />
			<Home setActive={setActive} />
			<About setActive={setActive} />
			<Skills setActive={setActive} />
			<Projects setActive={setActive} />
			<Contact setActive={setActive} />
			<Footer setActive={setActive} />
			<Copyright setActive={setActive} />
		</div>
	);
}
