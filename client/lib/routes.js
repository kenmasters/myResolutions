import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../layouts/MainLayout';
import App from '../App';
import NotFound from '../404';


// Home route
FlowRouter.route('/', {
	action() {
		mount( MainLayout, { content: <App /> });
	}
});

// 404 route
FlowRouter.notFound = {
	// what will happen when we hit this route
	action(params) {
		mount( MainLayout, { content: <NotFound /> });
	}
};