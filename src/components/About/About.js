import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../About/About.css";
import logo from "../../images/about-us.jpg";
import mentor from "../../images/Mentor/mentor.jpg";

const About = () => {
	return (
		<div>
			<Header></Header>
			<div className="about">
				<img src={logo} alt="" />
			</div>
			<div className="row align-items-center">
				<div className="col-md-6 p-4">
					<img src={mentor} alt="" className="w-100" />
				</div>
				<div className="col-md-6">
					<h4 className="p-4 mentor">
						We Have Experienced Professionals & We Do Our Best To Achieve Your
						Goal. Your Happiness Is Our First Priority.
					</h4>
					<p className="p-4 pt-0 mentor">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
						error ut provident vel repellendus nihil atque possimus aliquam,
						mollitia tempora neque voluptate debitis illum veniam.Numquam
						blanditiis dignissimos laboriosam illum ut officia. <br /> <br />
						Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor sit,
						amet consectetur adipisicing elit. Quas nulla sequi pariatur quam
						animi ipsum molestias assumenda cumque.
					</p>
					<h4 className="p-4 mentor">Why Edulyn</h4>
					<p>
						Accusamus, iusto magnam eos quas nam neque impedit doloremque
						possimus nulla modi maxime vel facere recusandae laborum adipisci
						natus repellendus officiis quaerat obcaecati nemo sed? Provident
						dolor nobis praesentium autem unde dicta doloremque harum.
					</p>
					<div className="d-flex align-items-center">
						<div>
							<i class="far fa-check-circle ps-2 pe-4"></i>
						</div>
						<div>
							<p className="ps-3">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Necessitatibus voluptatibus ipsum cumque sed, quia fugit
								obcaecati iure temporibus perferendis ratione?
							</p>
						</div>
					</div>
					<div className="d-flex align-items-center">
						<div>
							<i class="far fa-check-circle ps-2 pe-4"></i>
						</div>
						<div>
							<p className="ps-3">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Necessitatibus voluptatibus ipsum cumque sed, quia fugit
								obcaecati iure temporibus perferendis ratione?
							</p>
						</div>
					</div>
					<div className="d-flex align-items-center">
						<div>
							<i class="far fa-check-circle ps-2 pe-4"></i>
						</div>
						<div>
							<p className="ps-3">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Necessitatibus voluptatibus ipsum cumque sed, quia fugit
								obcaecati iure temporibus perferendis ratione?
							</p>
						</div>
					</div>
					<div className="d-flex align-items-center">
						<div>
							<i class="far fa-check-circle ps-2 pe-4"></i>
						</div>
						<div>
							<p className="ps-3">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Necessitatibus voluptatibus ipsum cumque sed, quia fugit
								obcaecati iure temporibus perferendis ratione?
							</p>
						</div>
					</div>
				</div>
			</div>
			<div></div>
			<Footer></Footer>
		</div>
	);
};

export default About;
