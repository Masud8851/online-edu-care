import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import banner from "../../images/blogs/blog.jpg";
import blog1 from "../../images/blogs/blog-1.jpg";
import blog2 from "../../images/blogs/blog-2.jpg";
import blog3 from "../../images/blogs/blog-3.jpg";

const Blogs = () => {
	return (
		<div>
			<Header></Header>
			<div>
				<img src={banner} alt="" className="w-100" height="500" />
			</div>
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
								<i class="far fa-clock fs-6"></i> 4.4 Hours
							</p>
							<p className="fs-5">
								<i class="fas fa-book-open fs-6"></i> 200
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-5 p-3">
					<div>
						<p className="fs-4 border-bottom border-2 border-success mb-3">
							Search Course
						</p>
						<input
							type="text"
							placeholder="search course"
							className="w-75 fs-4"
							height="300"
						/>
					</div>
					<div>
						<p className="fs-4 border-bottom border-2 border-success mb-3">
							Course Tag
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
			</div>
			<div className="row">
				<div className="col-md-7 p-3">
					<div>
						<div>
							<img src={blog2} alt="" className="w-100" />
						</div>
						<div className="d-flex justify-content-between">
							<p className="fs-5">
								<i class="fas fa-chalkboard-teacher fs-6"></i> Marina Sances
							</p>
							<p className="fs-5">
								<i class="far fa-clock fs-6"></i> 4.4 Hours
							</p>
							<p className="fs-5">
								<i class="fas fa-book-open fs-6"></i> 200
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-7 p-3">
					<div>
						<div>
							<img src={blog3} alt="" className="w-100" />
						</div>
						<div className="d-flex justify-content-between">
							<p className="fs-5">
								<i class="fas fa-chalkboard-teacher fs-6"></i> Marina Sances
							</p>
							<p className="fs-5">
								<i class="far fa-clock fs-6"></i> 4.4 Hours
							</p>
							<p className="fs-5">
								<i class="fas fa-book-open fs-6"></i> 200
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Blogs;
