"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
	return (
		<div>
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
			<Copyright />
		</div>
	);
}
