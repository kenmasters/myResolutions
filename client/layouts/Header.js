import React, { Component } from 'react';
import { Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const Header = () => {
	// return (
	// 	<Navbar inverse fluid fixedTop>
	// 		<Col xs={12} sm={2} className="separator">
	// 			<Navbar.Header>
	// 			  <Navbar.Brand>
	// 			    <a href="#">ABC Company</a>
	// 			  </Navbar.Brand>
	// 			</Navbar.Header>
	// 		</Col>
	// 		<Col xs={12} sm={10}>
	// 			<Nav>
	// 			  <NavItem eventKey={1} href="/"><img alt="Home" src="images/navbar/Home2.png" /> Home</NavItem>
	// 			</Nav>

	// 			<Nav pullRight>
	// 				<NavItem eventKey={1} href="#"><img alt="Home" src="images/navbar/Home2.png" /></NavItem>
	// 				<NavItem eventKey={2} href="#"><img alt="Home" src="images/navbar/Home2.png" /></NavItem>
	// 			</Nav>
	// 		</Col>
	// 	</Navbar>
	// );


	return (
		<header className="app-header navbar">
		<button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" type="button">☰</button>
		<a className="navbar-brand" href="#">{/* logo name here */}</a>
		<ul className="nav navbar-nav hidden-md-down"><li className="nav-item"><a className="nav-link navbar-toggler sidebar-toggler" href="#">☰</a></li><li className="nav-item px-1"><a className="nav-link" href="#">Dashboard</a></li><li className="nav-item px-1"><a className="nav-link" href="#">Users</a></li><li className="nav-item px-1"><a className="nav-link" href="#">Settings</a></li></ul>
		<ul className="nav navbar-nav ml-auto">
			<li className="nav-item px-1"><a className="nav-link" href="#">Link</a></li>
			<li className="nav-item px-1"><a className="nav-link" href="#">Link</a></li>
		</ul>
		</header>
	);
};

export default Header;