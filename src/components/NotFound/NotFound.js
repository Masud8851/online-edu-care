import React from "react";
import "./NotFound.css";

const NotFound = () => {
	return (
			<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<a href="#">Go To Homepage</a>
		</div>
	</div>
		// <div className="text-center error">
		// 	<div className="d-flex flex-column align-items-center">
		// 		<i class="fas fa-bomb fs-1"></i>
		// 		<p>404</p>
		// 		<p>Not Found</p>
		// 	</div>
		// </div>
	);
};

export default NotFound;
