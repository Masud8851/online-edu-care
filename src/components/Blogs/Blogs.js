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
					</div>
				</div>
				<div className="col-md-5 p-3"></div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Blogs;
