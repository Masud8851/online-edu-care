import React from "react";
import "../Header/Header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			{/* MenuBar */}
			<nav class="navbar navbar-expand-lg  d-flex justify-content-center">
				<div>
					<img src={logo} alt="" className="w-100" />
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
								<NavLink
									class="nav-NavLink active fs-4"
									aria-current="page"
									exact
									to="/home"
									style={{
										borderRadius: "10px",
										color: "black",
										fontWeight: "500",
										padding: "10px",
										textDecoration: "none",
									}}
									activeStyle={{
										color: "blue",
									}}
								>
									Home
								</NavLink>
							</li>
							<li class="nav-item">
								<NavLink
									class="nav-NavLink fs-4"
									aria-current="page"
									to="/about"
									style={{
										borderRadius: "10px",
										color: "black",
										fontWeight: "500",
										padding: "10px",
										textDecoration: "none",
									}}
									activeStyle={{
										color: "blue",
									}}
								>
									About
								</NavLink>
							</li>
							<li class="nav-item">
								<NavLink
									class="nav-NavLink fs-4"
									aria-current="page"
									to="/services"
									style={{
										borderRadius: "10px",
										color: "black",
										fontWeight: "500",
										padding: "10px",
										textDecoration: "none",
									}}
									activeStyle={{
										color: "blue",
									}}
								>
									Services
								</NavLink>
							</li>
							<li class="nav-item">
								<NavLink
									class="nav-NavLink fs-4"
									aria-current="page"
									to="/blogs"
									style={{
										borderRadius: "10px",
										color: "black",
										fontWeight: "500",
										padding: "10px",
										textDecoration: "none",
									}}
									activeStyle={{
										color: "blue",
									}}
								>
									Blogs
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
