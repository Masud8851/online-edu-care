import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";

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
			<div className="row mt-0">
				<div className="col-md-12">
					<div className="pt-0 ps-2">
						{courses.map((course) => (
							<Services
								key={course.key}
								course={course}
								// handleInvitation = {handleInvitation}
							></Services>
						))}
					</div>
				</div>
			</div>

			<Footer></Footer>
		</div>
	);
};

export default Main;
