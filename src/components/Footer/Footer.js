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
				<div className="d-flex flex-column pt-1">
					<p className="text-center fs-2">For any query please send us email</p>
					<div className="d-flex justify-content-center">
						<input
							type="text"
							placeholder="Query, you want to know"
							className="p-1"
						/>
						<button className="btn btn-success">
							<i class="fas fa-paper-plane"></i> Send
						</button>
					</div>
					<div className="d-flex justify-content-center">
						<div className="p-2">
							<i class="fab fa-facebook fs-1"></i>
						</div>
						<div className="p-2">
							<i class="fab fa-instagram fs-1"></i>
						</div>
						<div className="p-2">
							<i class="fab fa-twitter fs-1"></i>
						</div>
						<div className="p-2">
							<i class="fab fa-linkedin fs-1"></i>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
