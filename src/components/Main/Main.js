import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import { Animated } from "react-animated-css";
import banner from "../../images/services-banner.jpg";

const Main = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("./course.JSON")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
	return (
		<div>
			<Header></Header>

			<div>
				<img src={banner} alt="" className="w-100" height="400" />
			</div>

			<Animated animationIn="zoomIn" animationOut="tada" isVisible={true}>
				<div className="text-center mt-5">
					<h1 className="text-primary fs-1">[ Available Courses ]</h1>
				</div>
			</Animated>

			<div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
				{courses.map((course) => (
					<Services
						key={course.key}
						course={course}
						// handleInvitation = {handleInvitation}
					></Services>
				))}
			</div>

			<Footer></Footer>
		</div>
	);
};

export default Main;
