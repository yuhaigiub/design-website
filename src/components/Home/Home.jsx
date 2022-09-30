import React from "react";
import "./Home.css";

const content =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

const Home = () => {
	return (
		<>
			<h1>Creative Innovative Design Agency</h1>
			<div id="home-content">{content}</div>
		</>
	);
};

export default Home;
