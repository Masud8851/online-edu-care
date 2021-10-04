import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import banner from "../../images/Mentor/home.jpg";

const Home = () => {
	return (
		<div>
			<Header></Header>
			<div>
				<img src={banner} alt="" className="w-100" height="400" />
			</div>
			<div className="row">
				<div className="col md-6">H1</div>
				<div className="col md-6">H2</div>
			</div>
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
