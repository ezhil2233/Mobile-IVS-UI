import React from "react";

const CategoryAdd = () => {

    return(
        <div className="box">
            <div className="box-header"> 
                <span><i className="fa fa-paw" aria-hidden="true"></i>Add New Category</span>
            </div>

            <div className="box-body">
                <form id="userForm" >

                    <div className="row">
                        <label htmlFor="itemName">Item Name</label>
                        <input
                            id="itemName"
                            name="itemName"
                            type="text"
                            required
                            placeholder="e.g., iPhone 15 Pro Max 256GB"
                        />
                    </div>

                    <div className="row">
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            required
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Mobile Cover">Mobile Cover</option>
                            <option value="Head Set">Head Set</option>
                        </select>
                    </div>

                   

                    <button className="export-btn" type="submit">Save item</button>
                </form>

            </div>
        </div>
    );
}    

export default CategoryAdd;