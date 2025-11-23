import React, {useState} from "react";
import Popup from "../UIComponentUtils/Popup.jsx"
import UITable from "../UIComponentUtils/UITable.jsx"


const Items = () => {

   const [showPopup, setShowPopup] = useState(false);
   const openPopup = () => setShowPopup(true);
   const closePopup = () => setShowPopup(false);
  

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
                            <span><i class="fa fa-list-ul" aria-hidden="true"></i> Current Stock Items</span>
                            <button className="export-btn" onClick={openPopup} >Export</button>
                        </div>

                        <div className="box-body">
                            <UITable/>
                        </div>

                     {showPopup && (
                        <Popup  closePopup={closePopup} />        
                        )}

                    </div>
                </div>
    );
}    

export default Items;