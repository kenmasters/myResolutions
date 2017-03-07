import React, { Component } from 'react';

class Employees extends Component {

	render() {
		return(

	<div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i>Employees
              </div>
              <div className="card-block">
                <table className="table table-striped table-condensed">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vishnu Serghei</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Zbyněk Phoibos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Einar Randall</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Félix Troels</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Aulus Agmundr</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav>
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

		);
	}


}

export default Employees;