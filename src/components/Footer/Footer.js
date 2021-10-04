import React from "react";
import "../Footer/Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
	return (
		<div>
			<footer className="row" id="footer">
				<div>
					<img src={logo} alt="" />
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quam
						fugit, repudiandae earum assumenda qui maiores provident praesentium
						consectetur? Impedit pariatur, hic excepturi velit labore quas?
						Optio quia sapiente, nobis quam ipsum cumque facilis.
					</p>
					<div className="location">
						<i class="fas fa-map-marked-alt"></i>
						<p>Dhaka, Bangladesh</p>
					</div>
					<div className="location">
						<i class="far fa-envelope"></i>
						<p>edu-online.care@gmail.com</p>
					</div>
					<div className="location">
						<i class="fas fa-phone-alt"></i>
						<p>+880 1231434</p>
					</div>
				</div>
				<div>
					<h3>For any query please send us email</h3>
					<input
						type="text"
						placeholder="Query , you want to know"
						className="p-1"
					/>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
