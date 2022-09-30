import React from "react";
import "./App.css";

import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import OurTeam from "./components/OurTeam/OurTeam";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

const App = () => {
	return (
		<>
			<Home />
			<Work />
			<Services />
			<OurTeam />
			<Contact />
		</>
	);
};

export default App;
