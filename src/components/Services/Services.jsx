import React from "react";
import "./Services.css";

const content =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ";

const ContentBox = ({ header, content, link, price }) => {
	return (
		<div className="services-content-box">
			<div className="box-content">
				<h3>{header}</h3>
				<div class="content">{content}</div>
				<a class="link" href={link}>
					See more
				</a>
			</div>
			<div class="box-price">Starting at ${price}</div>
		</div>
	);
};

const Services = () => {
	return (
		<>
			<div id="services"></div>
			<div className="services">
				<h2>Services</h2>
				<div className="services-grid-container">
					<ContentBox
						header="Graphic Design"
						content={content}
						link="#"
						price={350}
					/>
					<ContentBox
						header="Product Design"
						content={content}
						link="#"
						price={400}
					/>
					<ContentBox
						header="Web Design"
						content={content}
						link="#"
						price={500}
					/>
					<ContentBox
						header="Video Editing"
						content={content}
						link="#"
						price={450}
					/>
				</div>
			</div>
		</>
	);
};

export default Services;
