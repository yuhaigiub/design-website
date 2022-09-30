import React from "react";
import "./Services.css";

const content =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ";

const ContentBox = ({ header, content, link }) => {
	return (
		<div className="services-content-box">
			<h3>{header}</h3>
			<div>{content}</div>
			<div>{link}</div>
		</div>
	);
};

const Services = () => {
	return (
		<div className="services">
			<h2>Services</h2>
			<div className="services-flexbox-container">
				<ContentBox header="Graphic Design" content={content} />
				<ContentBox header="Product Design" content={content} />
				<ContentBox header="Web Design" content={content} />
				<ContentBox header="Video Editing" content={content} />
			</div>
		</div>
	);
};

export default Services;
