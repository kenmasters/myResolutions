import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({content}) => {
	// return (
	// 	<div className="app">
	// 		<Header />
	// 		<Grid fluid className="app-body">
	// 			<Row>
	// 				<Col xs={12} md={3} id="sidebar-wrapper">
	// 					<div id="sidebar">
	// 					                <ul className="nav list-group">
	// 					                    <li>
	// 					                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 1</a>
	// 					                    </li>
	// 					                    <li>
	// 					                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 2</a>
	// 					                    </li>
	// 					                    <li>
	// 					                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 9</a>
	// 					                    </li>
	// 					                    <li>
	// 					                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 10</a>
	// 					                    </li>
	// 					                    <li>
	// 					                        <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 11</a>
	// 					                    </li>
	// 					                </ul>
	// 					            </div>
	// 				</Col>
	// 				<Col xs={12} md={9} id="main-wrapper" >
	// 					<main>{content}</main>
	// 				</Col>
	// 			</Row>
	// 		</Grid>
	// 		<Grid fluid>
	// 			<Row>
	// 				<Col>
	// 					<Footer />
	// 				</Col>
	// 			</Row>
	// 		</Grid>
	// 	</div>
	// );

	return (
		<div className="app">
			<Header />
			<div className="app-body">
				<div className="sidebar">
				<nav className="sidebar-nav">
				<ul className="nav">
				<li className="nav-item"><a className="nav-link" href="#/dashboard"><i className="icon-speedometer"></i>Dashboard<span className="badge badge-info">NEW</span></a></li><li className="nav-title">UI Elements</li>
				<li className="nav-item nav-dropdown"><a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-puzzle"></i>Components</a>
				<ul className="nav-dropdown-items">
				<li className="nav-item"><a className="nav-link" href="#/components/buttons"><i className="icon-puzzle"></i>Buttons</a></li>
				<li className="nav-item"><a className="nav-link" href="#/components/social-buttons"><i className="icon-puzzle"></i>Social Buttons</a></li>
				<li className="nav-item"><a className="nav-link" href="#/components/cards"><i className="icon-puzzle"></i>Cards</a></li>
				<li className="nav-item"><a className="nav-link" href="#/components/forms"><i className="icon-puzzle"></i>Forms</a></li>
				<li className="nav-item"><a className="nav-link" href="#/components/modals"><i className="icon-puzzle"></i>Modals</a></li>
				<li className="nav-item"><a className="nav-link" href="#/components/switches"><i className="icon-puzzle"></i>Switches</a></li>
				<li className="nav-item"><a className="nav-link" href="#/components/tables"><i className="icon-puzzle"></i>Tables</a></li>
				<li className="nav-item"><a className="nav-link" href="#/components/tabs"><i className="icon-puzzle"></i>Tabs</a></li></ul></li>
				<li className="nav-item nav-dropdown"><a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i>Icons</a>
				<ul className="nav-dropdown-items">
				<li className="nav-item"><a className="nav-link" href="#/icons/font-awesome"><i className="icon-star"></i>Font Awesome</a></li>
				<li className="nav-item"><a className="nav-link" href="#/icons/simple-line-icons"><i className="icon-star"></i>Simple Line Icons</a></li>
				</ul>
				</li>
				<li className="nav-item"><a className="nav-link" href="#/widgets"><i className="icon-calculator"></i>Widgets<span className="badge badge-info">NEW</span></a></li>
				<li className="nav-item"><a className="nav-link" href="#/charts"><i className="icon-pie-chart"></i>Charts</a></li>
				<li className="divider"></li>
				<li className="nav-title">Extras</li>
				<li className="nav-item nav-dropdown open"><a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i>Pages</a>
					<ul className="nav-dropdown-items">
					<li className="nav-item"><a className="nav-link" href="#/pages/login"><i className="icon-star"></i>Login</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/register"><i className="icon-star"></i>Register</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/404"><i className="icon-star"></i>Error 404</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/500"><i className="icon-star"></i>Error 500</a></li>
					</ul>
				</li>
				<li className="divider"></li>
				<li className="nav-title">Extras</li>
				<li className="nav-item nav-dropdown open"><a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i>Pages</a>
					<ul className="nav-dropdown-items">
					<li className="nav-item"><a className="nav-link" href="#/pages/login"><i className="icon-star"></i>Login</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/register"><i className="icon-star"></i>Register</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/404"><i className="icon-star"></i>Error 404</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/500"><i className="icon-star"></i>Error 500</a></li>
					</ul>
				</li>
				<li className="divider"></li>
				<li className="nav-title">Extras</li>
				<li className="nav-item nav-dropdown open"><a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i>Pages</a>
					<ul className="nav-dropdown-items">
					<li className="nav-item"><a className="nav-link" href="#/pages/login"><i className="icon-star"></i>Login</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/register"><i className="icon-star"></i>Register</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/404"><i className="icon-star"></i>Error 404</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/500"><i className="icon-star"></i>Error 500</a></li>
					</ul>
				</li>
				<li className="divider"></li>
				<li className="nav-title">Extras</li>
				<li className="nav-item nav-dropdown open"><a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i>Pages</a>
					<ul className="nav-dropdown-items">
					<li className="nav-item"><a className="nav-link" href="#/pages/login"><i className="icon-star"></i>Login</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/register"><i className="icon-star"></i>Register</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/404"><i className="icon-star"></i>Error 404</a></li>
					<li className="nav-item"><a className="nav-link" href="#/pages/500"><i className="icon-star"></i>Error 500</a></li>
					</ul>
				</li>
				</ul>
				</nav>
				</div>
				<main className="main">
					<ol className="breadcrumb"><span className="breadcrumb-item">Home</span></ol>
					<div className="container-fluid">

					<div className="animated fadeIn">

					<div className="row">
					
						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>


						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4">
							<div className="card card-outline-primary">
								<div className="card-header">Card outline</div>
								<div className="card-block">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
							</div>
						</div>


					</div>


					</div>
					</div>
					
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;