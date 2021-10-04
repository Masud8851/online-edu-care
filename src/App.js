import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/about">
						<About></About>
					</Route>
					<Route exact path="/services">
						<Services></Services>
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
