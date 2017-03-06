// import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


// Containers
import Full from '../containers/Full';

import Dashboard from '../views/Dashboard'
import Employees from '../views/Employees'



const WelcomeComponent = ({name}) => (<p>Hello, {name}</p>);


FlowRouter.route('/', {
	name: "home",
	action: () => {
		mount(Full, { content: <Dashboard /> });
	}
});


FlowRouter.route('/employees', {
	name: "employees",
	action: () => {
		mount(Full, { content: <Employees /> });
	}
});







// ============================================================================

// import MainLayout from '../layouts/MainLayout';
// import App from '../App';
// import NotFound from '../404';


// FlowRouter.route('/', {
// 	action: () => {
// 		mount( MainLayout, { content: <App /> });
// 	},

// 	triggersEnter: [
// 		function() { console.log(1); },
// 		function() { console.log(2); }
// 	]
	
// });

// FlowRouter.route('/dashboard', {
// 	action: () => {
		
// 	},

// 	triggersEnter: [
// 		function() { console.log(1); },
// 		function() { console.log(2); }
// 	]
	
// });

// // Users
// let users = FlowRouter.group({
// 	prefix: '/users',
// 	name: 'users',
// 	triggersEnter: [
// 		function() {}  // Do something
// 	], 
// 	triggersExit: [
// 		function() {}  // Do something
// 	]
// });

// users.route('/', {
// 	action: (params, queryParams) => {
// 		console.log('Lists all users');
// 	}
// });

// // 404 route
// FlowRouter.notFound = {
// 	action: (params) => {
// 		mount( MainLayout, { content: <NotFound /> });
// 	}
// };