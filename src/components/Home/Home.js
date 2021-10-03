import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import C from "../../images/course-images/c-carousel.png";

const Home = () => {
	return (
		<div>
			<Header></Header>
			<div className="row">
				<div className="col-md-6">
					<img src={C} width="100%" alt="" />
				</div>
				<div className="col-md-6">
					<img src="../../images/course-images/c-carousel.png" alt="" />
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
