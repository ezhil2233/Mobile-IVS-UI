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
                                <i className="fa fa-mobile" aria-hidden="true"></i> <span className="link-text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to="/item" end className="nav-link" >
                                <i className="fa fa-truck" aria-hidden="true"></i><span className="link-text">item</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;