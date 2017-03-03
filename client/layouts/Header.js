import React, { Component } from 'react';
import { Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const Header = () => {
	return (
		<Navbar inverse fluid fixedTop>
			<Col xs={12} sm={3} className="separator">
				<Navbar.Header>
				  <Navbar.Brand>
				    <a href="#">ABC Company</a>
				  </Navbar.Brand>
				</Navbar.Header>
			</Col>
			<Col xs={12} sm={9}>
				<Nav>
				
				  <NavItem eventKey={1} href="/"><img alt="Home" src="images/navbar/Home2.png" /> Home</NavItem>
				</Nav>

				<Nav pullRight>
					<NavItem eventKey={1} href="#"><img alt="Home" src="images/navbar/Home2.png" /></NavItem>
					<NavItem eventKey={2} href="#"><img alt="Home" src="images/navbar/Home2.png" /></NavItem>
				</Nav>
			</Col>
		</Navbar>
	);
};

export default Header;