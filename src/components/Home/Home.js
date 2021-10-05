import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import banner from "../../images/Mentor/home.jpg";

const Home = (props) => {
	// console.log(props.courses);
	const Courses = props?.courses?.slice(0, 4);
	return (
		<div>
			<Header></Header>
			<div>
				<img src={banner} alt="" className="w-100" height="400" />
			</div>
			<div className="text-center m-4">
				<h1 className="text-success">Most Wanted Course</h1>
			</div>
			<div className="row p-4 d-flex justify-content-around">
				{Courses.map((course) => (
					<div className="col p-2">
						<div className="card p-2">
							<img
								src={course.image}
								className="card-img-top w-100"
								height="150"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title"> {course.name}</h5>
								<hr />
								<h6>Review Rate : {course.reviewRate}</h6>
								<h6>Price : {course.price}</h6>
							</div>
						</div>
					</div>
				))}
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
