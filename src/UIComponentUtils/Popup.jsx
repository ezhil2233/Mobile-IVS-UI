import React, { useState } from "react";


export default function LoanPopUp({ closePopup }) {

    if (!closePopup) return null;


    return (

        <div className="overlay">
            <div className="box">
                <div className="box-header">
                    <span><i className="fa fa-plus-circle" aria-hidden="true"></i>Add New Item</span>
                </div>

                <div className="popup-body">
                    <form id="userForm">
                        <div className="row">
                            <label for="email">Email</label>
                            <input id="email" name="email" type="email" required
                                placeholder="you@example.com" />
                        </div>

                        <div className="row">
                            <label for="phone">Phone</label>
                            <input id="phone" name="phone" type="tel" pattern="[0-9+\-\s]{7,20}"
                                placeholder="+91 98765 43210" />
                        </div>
                        <div className="btn-row">
                            <button className="popup-btn" onClick={closePopup} >Export</button>
                            <button className="export-btn" onClick={closePopup} >Export</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}