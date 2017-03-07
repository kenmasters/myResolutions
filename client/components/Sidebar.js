import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          
         <div className="user-panel">
             <div className="image">
                 <img src="img/user_male.png" className="img-circle" alt="User Image" />
             </div>
             <div className="info">
                 <p>Howdie Jones</p>
                 <span>Administrator</span>
             </div>
         </div>
          
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="/"><i className="icon-puzzle"></i> Admin</a></li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Employees</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="/employees"><i className="icon-puzzle"></i> Employees</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/employees"><i className="icon-puzzle"></i> Event Management</a>

                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/employees"><i className="icon-puzzle"></i> Work History</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/employees"><i className="icon-puzzle"></i> Health and Safety Records</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/employees"><i className="icon-puzzle"></i> Warning and Disciplinary</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/employees"><i className="icon-puzzle"></i> Documents Management</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/employees"><i className="icon-puzzle"></i> Form 201& PDS Report</a>
                </li>
                
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
