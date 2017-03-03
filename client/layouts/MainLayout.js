import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({content}) => {
	return (
		<div id="app">
			<Header />
			<Grid fluid id="wrapper">
				<Row>
					<Col xs={12} md={3} id="sidebar-wrapper">
						<div id="sidebar">
						                <ul className="nav list-group">
						                    <li>
						                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 1</a>
						                    </li>
						                    <li>
						                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 2</a>
						                    </li>
						                    <li>
						                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 9</a>
						                    </li>
						                    <li>
						                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 10</a>
						                    </li>
						                    <li>
						                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 11</a>
						                    </li>
						                </ul>
						            </div>
					</Col>
					<Col xs={12} md={9} id="main-wrapper" >
						<main>{content}</main>
					</Col>
				</Row>
			</Grid>
			<Grid fluid>
				<Row>
					<Col>
						<Footer />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default MainLayout;