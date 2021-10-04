import React from "react";
import "../Header/Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			{/* MenuBar */}
			<nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
				<div>
					<img src={logo} alt="" />
				</div>
				<div class="container-fluid ">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link
									class="nav-link active fs-4"
									aria-current="page"
									to="/home"
								>
									Home
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link fs-4" aria-current="page" to="/about">
									About
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link fs-4" aria-current="page" to="/services">
									Services
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link fs-4" aria-current="page" to="/blogs">
									Blogs
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>


		</div>
	);
};

export default Header;
