import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class NotFound extends Component {
	render() {
		return (
			<div className="error-template">
	            <h1>
	                Oops!</h1>
	            <h2>
	                404 Not Found</h2>
	            <div className="error-details">
	                Sorry, an error has occured, Requested page not found!
	            </div>
	            <div className="error-actions">
	                <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
	                    Take Me Home </a>
	            </div>
	        </div>
		);
	}
}

export default NotFound;