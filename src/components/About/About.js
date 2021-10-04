import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../About/About.css";
import logo from "../../images/about-us.jpg";

const About = () => {
	return (
		<div>
			<Header></Header>
			<div className="about">
				<img src={logo} alt="" />
			</div>
			<h1>This is about</h1>
			<Footer></Footer>
		</div>
	);
};

export default About;
