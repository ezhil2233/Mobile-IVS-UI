import React from "react";

const Items = () => {

    return(
             <div className="page-grid">
                    <div className="box">
                        <div className="box-header">
                            <span><i className="fa fa-plus-circle" aria-hidden="true"></i>Add New Item</span>
                        </div>

                        <div className="box-body">
                            <form id="userForm" novalidate>
                                    <div className="row">
                                        <label for="email">Email</label>
                                        <input id="email" name="email" type="email" required
                                            placeholder="you@example.com"/>
                                    </div>

                                    <div className="row">
                                        <label for="phone">Phone</label>
                                        <input id="phone" name="phone" type="tel" pattern="[0-9+\-\s]{7,20}"
                                            placeholder="+91 98765 43210"/>
                                    </div>
                            </form>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-header">
                            <span>📋 Current Stock Items</span>
                            <button className="export-btn">Export</button>
                        </div>

                        <div className="box-body">
                            Content goes here...
                        </div>
                    </div>
                </div>
    );
}    

export default Items;