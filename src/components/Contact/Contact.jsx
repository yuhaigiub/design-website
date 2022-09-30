import React from "react";
import "./Contact.css";

const contactWebsites = [
	{ label: "Twitter", link: "#" },
	{ label: "LinkedIn", link: "#" },
	{ label: "Dribble", link: "#" },
	{ label: "Youtube", link: "#" },
	{ label: "Instagram", link: "#" },
	{ label: "Facebook", link: "#" },
];

const Contact = () => {
	return (
		<>
			<h2>Contact</h2>
			<div id="contact-website">contact@website.com</div>
			<div id="contact-phone">+0 0000 0000</div>
			<div id="contact-social">
				{contactWebsites.map((site) => {
					return (
						<a key={site.label} href={site.link}>
							{site.label}
						</a>
					);
				})}
			</div>
		</>
	);
};

export default Contact;
