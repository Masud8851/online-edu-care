import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import banner from "../../images/Mentor/home.jpg";

const Home = (props) => {
	// console.log(props.courses);
	const Courses = props.courses.slice(0, 4);
	return (
		<div>
			<Header></Header>
			<div>
				<img src={banner} alt="" className="w-100" height="400" />
			</div>
			<div className="row p-4 d-flex justify-content-around">
				{Courses.map((course) => (
					<div className="col">
						<div className="card">
							<img src={course.image} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title"> {course.name}</h5>
								<p>
									<i class="far fa-clock"></i> {course.duration}
								</p>
								<p>
									<i class="fas fa-chalkboard-teacher"></i> {course.mentor}
								</p>
								<p>Review Rate : {course.reviewRate}</p>
								<p>Price : {course.price}</p>
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

/* {courses.map((course) => (
					<Services>
						key={course.id}
						course={course}
					</Services>
				))} */
