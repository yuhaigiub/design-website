import React from "react";
import "./Work.css";

const arr = [1, 2, 3, 4, 5, 6];

const Work = () => {
	return (
		<>
			<h2>Work</h2>
			<div className="work-image">
				{arr.map((value) => {
					return (
						<img
							key={`img${value}`}
							src={require(`../../images/img${value}.jpg`)}
							alt="cannot load"
						/>
					);
				})}
			</div>
		</>
	);
};
export default Work;
