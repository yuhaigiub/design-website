import React from "react";
import "./App.css";

import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import OurTeam from "./components/OurTeam/OurTeam";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
	return (
		<>
			<div id="top-page"></div>
			<NavBar />
			<Home />
			<Work />
			<Services />
			<OurTeam />
			<Contact />
		</>
	);
};

export default App;
