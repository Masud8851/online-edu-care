import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import banner from "../../images/blogs/blog.jpg";

const Blogs = () => {
	return (
		<div>
			<Header></Header>
			<div>
				<img src={banner} alt="" className="w-100" height="500" />
			</div>
			<div className="row"></div>
			<Footer></Footer>
		</div>
	);
};

export default Blogs;
