import React from "react";
import "./OurTeam.css";

const content =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

const arr = [1, 2, 3, 4];

const OurTeam = () => {
	return (
		<>
			<div id="our-team"></div>
			<h2>Our Team</h2>
			<div id="contact-content">{content}</div>
			<div className="contact-flexbox-container">
				{arr.map((value) => {
					return (
						<img
							className="contact-image"
							key={`pp${value}`}
							src={require(`../../images/pp${value}.jpg`)}
							alt="cannot load"
						/>
					);
				})}
			</div>
		</>
	);
};

export default OurTeam;
