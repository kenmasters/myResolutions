import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../layouts/MainLayout';
import App from '../App';
import NotFound from '../404';


// Home route
FlowRouter.route('/', {
	action: function() {
		mount( MainLayout, { content: <App /> });
	},

	triggersEnter: [
		function() { console.log(1); },
		function() { console.log(2); }

	]
	//,() {
	// 	action_A() {
	// 		console.log(1);
	// 	}

	// 	action_B() {
	// 		console.log(2);
	// 	}
	// }
});

// 404 route
FlowRouter.notFound = {
	// what will happen when we hit this route
	action(params) {
		mount( MainLayout, { content: <NotFound /> });
	}
};