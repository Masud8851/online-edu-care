import React from "react";
import "./NotFound.css";

const NotFound = () => {
	return (
		<div className="text-center error">
			<div className="d-flex flex-column align-items-center">
				<i class="fas fa-bomb fs-1"></i>
				<p>404</p>
				<p>Not Found</p>
			</div>
		</div>
	);
};

export default NotFound;
