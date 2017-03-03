import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../layouts/MainLayout';
import App from '../App';
import NotFound from '../404';


FlowRouter.route('/', {
	action: () => {
		mount( MainLayout, { content: <App /> });
	},

	triggersEnter: [
		function() { console.log(1); },
		function() { console.log(2); }
	]
	
});

FlowRouter.route('/dashboard', {
	action: () => {
		
	},

	triggersEnter: [
		function() { console.log(1); },
		function() { console.log(2); }
	]
	
});

// Users
let users = FlowRouter.group({
	prefix: '/users',
	name: 'users',
	triggersEnter: [
		function() {}  // Do something
	], 
	triggersExit: [
		function() {}  // Do something
	]
});

users.route('/', {
	action: (params, queryParams) => {
		console.log('Lists all users');
	}
});

// 404 route
FlowRouter.notFound = {
	action: (params) => {
		mount( MainLayout, { content: <NotFound /> });
	}
};