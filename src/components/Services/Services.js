import React from "react";

const Services = (props) => {
	console.log(props.course);
	// distructuring
	const { image, name, duration, mentor, reviewRate, price } = props.course;
	return (
		<div className="row">
			<div className="col-md-3 p-2 text-center">
				<div className="card h-100 ms-auto card-border">
					<div className="text-center">
						<img
							src={image}
							height="200"
							className="rounded p-2 w-100"
							alt=""
						/>
					</div>
					<div className="card-body">
						<h6>{name}</h6>
						<h6>
							<i class="far fa-clock"></i> {duration}
						</h6>
						<h6>
							<i class="fas fa-chalkboard-teacher"></i> {mentor}
						</h6>
						<h6>Review Rate : {reviewRate}</h6>
						<h6>Price : {price}</h6>
					</div>
					<div className=" border-0 mb-2">
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
