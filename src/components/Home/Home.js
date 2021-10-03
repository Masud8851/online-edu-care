import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("./course.json")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
	return (
		<div>
			<Header></Header>
			<div className="row">{courses.map((course) => console.log(course))}</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;

/* {courses.map((course) => (
					<Services>
						key={course.id}
						course={course}
					</Services>
				))} */
