import React, { Component } from 'react';

const MainLayout = ({content}) => {
	return (
		<div className="main-wrapper">
			<header>Header</header>
			
			<section>
				<aside>Sidebar</aside>
				<main>{content}</main>
			</section>
			
			<footer>Footer</footer>
		</div>
	);
};

export default MainLayout;