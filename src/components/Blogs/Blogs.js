import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import banner from "../../images/blogs/blog.jpg";
import blog1 from "../../images/blogs/blog-1.jpg";

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
				<div className="col-md-5 p-3"></div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Blogs;
