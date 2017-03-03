import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {
	ButtonToolbar,
	Button
} from 'react-bootstrap';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			greet: 'Hello'
		};
	}

	componentDidMount() {
		console.log('Mounted')
	}
	
	render() {
		return (
			<div id="main">

			 <div className="page-header">
                <h3>Admin</h3>
              </div>

            <div className="row">
            <div className="col-lg-6">
            <div className="card">
            <div className="card-header">
            <i className="fa fa-align-justify"></i>
            </div>

            <div className="card-block">
            <table className="table">
            <thead><tr><th>Username</th>
            <th>Date registered</th>
            <th>Role</th>
            <th>Status</th>
            </tr>
            </thead>
            <tbody>
	            <tr>
		            <td>Samppa Nori</td>
		            <td>2012/01/01</td>
		            <td>Member</td>
		            <td><span className="badge badge-success">Active</span></td>
	            </tr>
	            <tr>
		            <td>Estavan Lykos</td>
		            <td>2012/02/01</td>
		            <td>Staff</td>
		            <td><span className="badge badge-danger">Banned</span></td></tr><tr>
		            <td>Chetan Mohamed</td>
		            <td>2012/02/01</td>
		            <td>Admin</td>
		            <td><span className="badge badge-default">Inactive</span></td></tr><tr>
		            <td>Derick Maximinus</td><td>2012/03/01</td>
		            <td>Member</td>
		            <td><span className="badge badge-warning">Pending</span></td>
	            </tr>
            <tr>
            <td>Friderik Dávid</td>
            <td>2012/01/21</td>
            <td>Staff</td>
            <td><span className="badge badge-success">Active</span></td>
            </tr>
            </tbody>
            </table>
            <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Prev</a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
            </div>
            </div>
            </div>
            <div className="col-lg-6">
            <div className="card">
            	<div className="card-header"><i className="fa fa-align-justify"></i></div>
            	<div className="card-block">
            <table className="table table-striped">
            <thead>
            <tr><th>Username</th><th>Date registered</th>
            <th>Role</th>
            <th>Status</th>
            </tr></thead>
            <tbody>
            <tr>
            <td>Yiorgos Avraamu</td>
            <td>2012/01/01</td>
            <td>Member</td>
            <td><span className="badge badge-success">Active</span></td></tr><tr>
            <td>Avram Tarasios</td>
            <td>2012/02/01</td>
            <td>Staff</td>
            <td><span className="badge badge-danger">Banned</span></td></tr><tr>
            <td>Quintin Ed</td>
            <td>2012/02/01</td>
            <td>Admin</td>
            <td><span className="badge badge-default">Inactive</span></td></tr><tr>
            <td>Enéas Kwadwo</td>
            <td>2012/03/01</td>
            <td>Member</td>
            <td><span className="badge badge-warning">Pending</span></td></tr><tr>
            <td>Agapetus Tadeáš</td>
            <td>2012/01/21</td>
            <td>Staff</td>
            <td><span className="badge badge-success">Active</span></td></tr></tbody></table>
            <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Prev</a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li></ul></div></div></div></div>

			  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget magna et ante suscipit lacinia. Aenean porttitor velit id pretium blandit. Aenean ut sodales ante. Ut faucibus ornare venenatis. Duis sit amet arcu eros. Mauris volutpat vestibulum congue. Nam volutpat, urna eu varius dapibus, velit nisl bibendum lorem, sit amet dapibus sem dolor eu felis.

			Nulla tincidunt augue vel dolor convallis lobortis. Nunc nibh dolor, tincidunt elementum lorem id, porta imperdiet neque. Quisque egestas lacus nec magna mattis aliquam. Nunc eget orci odio. Quisque neque odio, lobortis a orci ut, tempus feugiat tortor. Quisque et tincidunt arcu. Sed vel accumsan risus. Quisque enim ipsum, luctus vitae ultrices at, vulputate eu lorem. Curabitur at nibh sagittis, lobortis odio nec, sodales velit. Aenean interdum, magna nec molestie congue, magna nisi sodales dolor, at mattis ipsum nisi at nibh. Aenean quis dictum lacus. Vivamus commodo sit amet nibh eget scelerisque. Duis consequat fringilla mollis. Sed eros risus, sodales in porttitor bibendum, vulputate ut est.

			Mauris in ullamcorper sapien. Morbi imperdiet consequat luctus. Donec vestibulum dapibus libero elementum posuere. Quisque posuere ipsum turpis, nec porttitor eros lobortis vel. Proin porttitor consequat adipiscing. Proin posuere orci odio, in pellentesque elit dapibus eu. Sed aliquam mollis hendrerit. Sed quis sapien nisl. Duis a bibendum tortor, nec malesuada justo. Sed luctus lorem nec velit consequat, vel ultricies lorem pulvinar. Mauris leo sapien, fermentum vel eleifend at, cursus quis massa. Ut sit amet venenatis orci, a dictum elit. Praesent a feugiat risus, non venenatis urna. Curabitur nisi sapien, facilisis vitae scelerisque nec, lacinia vel ante. Fusce tristique justo vitae mi lacinia, non interdum erat ultrices. Proin nec tempus odio, suscipit consequat lacus.

			Cras aliquet tempus libero, quis mattis ipsum. Nam justo odio, mollis at bibendum in, condimentum nec mi. Ut auctor consectetur erat, eget bibendum erat tristique ac. Nullam nisl sapien, pretium at enim nec, tincidunt molestie lacus. Mauris venenatis augue velit, eu malesuada velit faucibus id. Suspendisse ac suscipit magna. Integer elit risus, rutrum a mi vitae, pharetra tristique mi. Ut semper euismod lacus vel dignissim. Maecenas quis erat eget dui vehicula aliquam.

			Praesent sed dolor euismod, condimentum ante quis, molestie orci. Ut vel venenatis nunc, ut porta lacus. Donec ligula felis, tristique ut sollicitudin eget, commodo vel augue. Maecenas quis enim ac elit bibendum tristique. Suspendisse a vestibulum dui. Donec molestie enim vel ornare fermentum. Etiam suscipit, velit et dapibus dapibus, metus tellus convallis nulla, sit amet pharetra magna nunc id mauris. In eget nunc eleifend, aliquet urna sed, viverra ipsum. Quisque fringilla non eros vitae sollicitudin. Pellentesque non nisl est. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget magna et ante suscipit lacinia. Aenean porttitor velit id pretium blandit. Aenean ut sodales ante. Ut faucibus ornare venenatis. Duis sit amet arcu eros. Mauris volutpat vestibulum congue. Nam volutpat, urna eu varius dapibus, velit nisl bibendum lorem, sit amet dapibus sem dolor eu felis.

			Nulla tincidunt augue vel dolor convallis lobortis. Nunc nibh dolor, tincidunt elementum lorem id, porta imperdiet neque. Quisque egestas lacus nec magna mattis aliquam. Nunc eget orci odio. Quisque neque odio, lobortis a orci ut, tempus feugiat tortor. Quisque et tincidunt arcu. Sed vel accumsan risus. Quisque enim ipsum, luctus vitae ultrices at, vulputate eu lorem. Curabitur at nibh sagittis, lobortis odio nec, sodales velit. Aenean interdum, magna nec molestie congue, magna nisi sodales dolor, at mattis ipsum nisi at nibh. Aenean quis dictum lacus. Vivamus commodo sit amet nibh eget scelerisque. Duis consequat fringilla mollis. Sed eros risus, sodales in porttitor bibendum, vulputate ut est.

			Mauris in ullamcorper sapien. Morbi imperdiet consequat luctus. Donec vestibulum dapibus libero elementum posuere. Quisque posuere ipsum turpis, nec porttitor eros lobortis vel. Proin porttitor consequat adipiscing. Proin posuere orci odio, in pellentesque elit dapibus eu. Sed aliquam mollis hendrerit. Sed quis sapien nisl. Duis a bibendum tortor, nec malesuada justo. Sed luctus lorem nec velit consequat, vel ultricies lorem pulvinar. Mauris leo sapien, fermentum vel eleifend at, cursus quis massa. Ut sit amet venenatis orci, a dictum elit. Praesent a feugiat risus, non venenatis urna. Curabitur nisi sapien, facilisis vitae scelerisque nec, lacinia vel ante. Fusce tristique justo vitae mi lacinia, non interdum erat ultrices. Proin nec tempus odio, suscipit consequat lacus.

			Cras aliquet tempus libero, quis mattis ipsum. Nam justo odio, mollis at bibendum in, condimentum nec mi. Ut auctor consectetur erat, eget bibendum erat tristique ac. Nullam nisl sapien, pretium at enim nec, tincidunt molestie lacus. Mauris venenatis augue velit, eu malesuada velit faucibus id. Suspendisse ac suscipit magna. Integer elit risus, rutrum a mi vitae, pharetra tristique mi. Ut semper euismod lacus vel dignissim. Maecenas quis erat eget dui vehicula aliquam.

			Praesent sed dolor euismod, condimentum ante quis, molestie orci. Ut vel venenatis nunc, ut porta lacus. Donec ligula felis, tristique ut sollicitudin eget, commodo vel augue. Maecenas quis enim ac elit bibendum tristique. Suspendisse a vestibulum dui. Donec molestie enim vel ornare fermentum. Etiam suscipit, velit et dapibus dapibus, metus tellus convallis nulla, sit amet pharetra magna nunc id mauris. In eget nunc eleifend, aliquet urna sed, viverra ipsum. Quisque fringilla non eros vitae sollicitudin. Pellentesque non nisl est. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget magna et ante suscipit lacinia. Aenean porttitor velit id pretium blandit. Aenean ut sodales ante. Ut faucibus ornare venenatis. Duis sit amet arcu eros. Mauris volutpat vestibulum congue. Nam volutpat, urna eu varius dapibus, velit nisl bibendum lorem, sit amet dapibus sem dolor eu felis.

			Nulla tincidunt augue vel dolor convallis lobortis. Nunc nibh dolor, tincidunt elementum lorem id, porta imperdiet neque. Quisque egestas lacus nec magna mattis aliquam. Nunc eget orci odio. Quisque neque odio, lobortis a orci ut, tempus feugiat tortor. Quisque et tincidunt arcu. Sed vel accumsan risus. Quisque enim ipsum, luctus vitae ultrices at, vulputate eu lorem. Curabitur at nibh sagittis, lobortis odio nec, sodales velit. Aenean interdum, magna nec molestie congue, magna nisi sodales dolor, at mattis ipsum nisi at nibh. Aenean quis dictum lacus. Vivamus commodo sit amet nibh eget scelerisque. Duis consequat fringilla mollis. Sed eros risus, sodales in porttitor bibendum, vulputate ut est.

			Mauris in ullamcorper sapien. Morbi imperdiet consequat luctus. Donec vestibulum dapibus libero elementum posuere. Quisque posuere ipsum turpis, nec porttitor eros lobortis vel. Proin porttitor consequat adipiscing. Proin posuere orci odio, in pellentesque elit dapibus eu. Sed aliquam mollis hendrerit. Sed quis sapien nisl. Duis a bibendum tortor, nec malesuada justo. Sed luctus lorem nec velit consequat, vel ultricies lorem pulvinar. Mauris leo sapien, fermentum vel eleifend at, cursus quis massa. Ut sit amet venenatis orci, a dictum elit. Praesent a feugiat risus, non venenatis urna. Curabitur nisi sapien, facilisis vitae scelerisque nec, lacinia vel ante. Fusce tristique justo vitae mi lacinia, non interdum erat ultrices. Proin nec tempus odio, suscipit consequat lacus.

			Cras aliquet tempus libero, quis mattis ipsum. Nam justo odio, mollis at bibendum in, condimentum nec mi. Ut auctor consectetur erat, eget bibendum erat tristique ac. Nullam nisl sapien, pretium at enim nec, tincidunt molestie lacus. Mauris venenatis augue velit, eu malesuada velit faucibus id. Suspendisse ac suscipit magna. Integer elit risus, rutrum a mi vitae, pharetra tristique mi. Ut semper euismod lacus vel dignissim. Maecenas quis erat eget dui vehicula aliquam.

			Praesent sed dolor euismod, condimentum ante quis, molestie orci. Ut vel venenatis nunc, ut porta lacus. Donec ligula felis, tristique ut sollicitudin eget, commodo vel augue. Maecenas quis enim ac elit bibendum tristique. Suspendisse a vestibulum dui. Donec molestie enim vel ornare fermentum. Etiam suscipit, velit et dapibus dapibus, metus tellus convallis nulla, sit amet pharetra magna nunc id mauris. In eget nunc eleifend, aliquet urna sed, viverra ipsum. Quisque fringilla non eros vitae sollicitudin. Pellentesque non nisl est. Suspendisse potenti.</p>
			


			</div>
			

			
		);
	}


}

export default App;