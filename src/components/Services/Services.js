import React from "react";
import "./Services.css";

const Services = (props) => {
	console.log(props.course);
	// distructuring
	const { image, name, duration, mentor, reviewRate, price } = props.course;
	return (
		<div>
			<div class="col ">
				<div class="card h-100 ">
					<img
						src={image}
						class="card-img-top w-100 img-fluid"
						height="250"
						alt=".."
					/>
					<div class="card-body">
						<h5 class="card-title">{name}</h5>
						<h6>
							<i class="far fa-clock"></i> {duration}
						</h6>
						<h6>
							<i class="fas fa-chalkboard-teacher"></i> {mentor}
						</h6>
						<h6>Review Rate : {reviewRate}</h6>
						<h6>Price : {price}</h6>
						<button className="btn btn-primary">
							<i class="fas fa-sign-in-alt"></i> Enroll Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
