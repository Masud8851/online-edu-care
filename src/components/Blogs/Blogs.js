import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import banner from "../../images/blogs/blog.jpg";
import blog1 from "../../images/blogs/blog-1.jpg";
import blog3 from "../../images/blogs/blog-3.jpg";
import "../Blogs/Blog.css";
import { Animated } from "react-animated-css";

const Blogs = () => {
	return (
		<div>
			<Header></Header>
			<div>
				<img src={banner} alt="" className="w-100" height="400" />
			</div>

			<Animated animationIn="zoomIn" animationOut="tada" isVisible={true}>
				<div className="text-center m-2">
					<h1 className="text-primary"> [ Blogs ]</h1>
				</div>
			</Animated>

			<div className="row">
				<div className="col-md-7 p-3">
					<div>
						<div>
							<img src={blog1} alt="" className="w-100" />
						</div>
						<div>
							<p className="text-success">
								Ratione omnis consequuntur placeae consol fugit eaque vitae hic.
								Sequi obcaecati possimus repudiandae sit omnis accusantium
							</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="fs-5">
								<i class="fas fa-chalkboard-teacher fs-6"></i> Marina Sances
							</p>
							<p className="fs-5">
								<i class="far fa-calendar-alt fs-6"></i> April 23,2021
							</p>
							<p className="fs-5">
								<i class="fas fa-book-open fs-6"></i> 200
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-5 p-3 border border-3 pb-0 mt-3 border-success">
					<div className="mb-5">
						<p className="fs-4 border-bottom border-2 border-success mb-3">
							Search Blogs
						</p>
						<input
							type="text"
							placeholder="search blogs"
							className="w-75 fs-5"
							height="300"
						/>
					</div>
					<div>
						<p className="fs-4 border-bottom border-2 border-success mb-3">
							Blogs Tag
						</p>
						<button className="btn btn-primary m-1">C</button> <br />
						<button className="btn btn-primary m-1">C++</button>
						<button className="btn btn-primary m-1">R</button> <br />
						<button className="btn btn-primary m-1">Java</button>
						<button className="btn btn-primary m-1">Ruby</button>
						<button className="btn btn-primary m-1">goLang</button> <br />
						<button className="btn btn-primary m-1">Python</button>
						<button className="btn btn-primary m-1">JavaScript</button>
					</div>
				</div>
				<div className="row mb-5">
					<div className="col-md-7 p-3">
						<div>
							<div>
								<img src={blog3} alt="" className="w-100" />
							</div>
							<div>
								<p className="text-success">
									Ratione omnis consequuntur placeae consol fugit eaque vitae
									hic. Sequi obcaecati possimus repudiandae sit omnis
									accusantium
								</p>
							</div>
							<div className="d-flex justify-content-between">
								<p className="fs-5">
									<i class="fas fa-chalkboard-teacher fs-6"></i> Marina Sances
								</p>
								<p className="fs-5">
									<i class="far fa-calendar-alt fs-6"></i> April 23,2021
								</p>
								<p className="fs-5">
									<i class="fas fa-book-open fs-6"></i> 200
								</p>
							</div>
						</div>
					</div>
				</div>
				<button className="btn btn-warning" id="blog-btn">
					See More
				</button>
			</div>

			{/* Pagination */}
			<div className="pt-5">
				<nav aria-label="Page navigation example pt-5">
					<ul class="pagination justify-content-center">
						<li class="page-item disabled">
							<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
								Previous
							</a>
						</li>
						<li class="page-item">
							<a class="page-link active" href="#">
								1
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								2
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								3
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								Next
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Blogs;
