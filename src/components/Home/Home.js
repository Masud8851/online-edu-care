import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import bannerOne from "../../images/carousel/b-1.jpg";
import bannerTwo from "../../images/carousel/b-3.jpg";
import bannerThree from "../../images/carousel/b-4.png";
import Carousel from "react-bootstrap/Carousel";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const Home = (props) => {
	// console.log(props.courses);
	const Courses = props?.courses?.slice(0, 4);
	return (
		<div>
			{/* NavBar */}
			<Header></Header>

			{/* Carousel */}
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={bannerOne}
						alt="First slide"
						height="400"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={bannerTwo}
						alt="Second slide"
						height="400"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={bannerThree}
						alt="Third slide"
						height="400"
					/>
				</Carousel.Item>
			</Carousel>

			{/* Checkout */}
			<div className="container row mb-5 pb-5 check">
				<h2 className="text-primary" id="check">
					Checkout Our Features To Know <br /> Why We Are Best In This Business
				</h2>
				<div className="checkOut">
					<div className="text-dark rounded-3 reason">
						<div>
							<h5 className="pt-2">POPULAR COURSES</h5>
						</div>
					</div>
					<div className="text-dark rounded-3 reason">
						<div>
							<h5 className="pt-2">MODERN LIBRARY</h5>
						</div>
					</div>
					<div className="text-dark rounded-3 reason">
						<div>
							<h5 className="pt-2">QUALIFIED TEACHER</h5>
						</div>
					</div>
				</div>
				<div className="checkOut mt-3">
					<div className="text-dark rounded-3 reason">
						<div>
							<h5 className="pt-2">UNLIMITED COURSES</h5>
						</div>
					</div>
					<div className="text-dark rounded-3 reason">
						<div>
							<h5 className="pt-2">MANY LOCATIONS</h5>
						</div>
					</div>
					<div className="text-dark rounded-3 reason">
						<div>
							<h5 className="pt-2">ONLINE SUPPORT</h5>
						</div>
					</div>
				</div>
			</div>
			<Animated animationIn="zoomInDown" animationOut="tada" isVisible={true}>
				<div className="text-center m-4">
					<h1 className="text-primary"> [ Most Wanted Course ]</h1>
				</div>
			</Animated>
			<div className="row p-4 d-flex justify-content-around">
				{Courses.map((course) => (
					<div className="col p-2">
						<Animated
							animationIn="fadeInLeft"
							animationOut="tada"
							isVisible={true}
						>
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
						</Animated>
					</div>
				))}
			</div>
			{/* View All Courses Button */}
			<Animated animationIn="zoomInUp" animationOut="fadeOut" isVisible={true}>
				<Link id="view-course" to="/services">
					VIEW ALL COURSES
				</Link>
			</Animated>
			<Footer></Footer>
		</div>
	);
};

export default Home;
