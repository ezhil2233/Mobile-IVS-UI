import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <div className="breadgrum-content">
                    <h3>
                        <span className="title-text">Mobile Shop</span>
                    </h3>
                </div>

                <div className="navbar-nav">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <NavLink to="/" end className="nav-link" >
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i><span className="link-text">items</span>
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to="/supplier" end className="nav-link" >
                                <i className="fa fa-truck" aria-hidden="true"></i> <span className="link-text">Supplier</span>
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to="/category" end className="nav-link" >
                                <i className="fa fa-tags" aria-hidden="true"></i> <span className="link-text">Category</span>
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to="/selling" end className="nav-link" >
                                <i className="fa fa-paper-plane" aria-hidden="true"></i> <span className="link-text">Selling</span>
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to="/dashboard" end className="nav-link" >
                                <i className="fa fa-line-chart" aria-hidden="true"></i> <span className="link-text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to="/logout" end className="nav-link" >
                                <i className="fa fa-sign-out" aria-hidden="true"></i> <span className="link-text">Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;