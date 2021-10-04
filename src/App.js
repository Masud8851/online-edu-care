import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";
import { useEffect, useState } from "react";
import Main from "./components/Main/Main";

function App() {
	console.log("Working");
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("./course.json")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/home">
						<Home courses={courses}></Home>
					</Route>
					<Route exact path="/about">
						<About></About>
					</Route>
					<Route exact path="/services">
						<Main courses={courses}></Main>
						{/* <Services courses={courses}></Services> */}
					</Route>
					<Route exact path="/blogs">
						<Blogs></Blogs>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
