import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pranti Rani Banda",
	description: "It is a portfolio website of Pranti",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Abel&family=Inter:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdn-uicons.flaticon.com/2.4.2/uicons-brands/css/uicons-brands.css"
				></link>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Playwrite+DK+Loopet:wght@100..400&family=Yellowtail&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
