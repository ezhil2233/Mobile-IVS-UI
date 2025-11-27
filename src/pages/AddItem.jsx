import React from "react";
import {axiosAPI} from "../utils/AxiosCtx.js";

const AddItem = ({onSuccess}) =>{

    const handleSubmit =async() => {
        try{
            //await axiosAPI.post('',itemFormData);
            onSuccess();
        }catch(err){
            console.error(err);
        }
    }

    return(
         <div className="box">
                        <div className="box-header">
                            <span><i className="fa fa-plus-circle" aria-hidden="true"></i>Add New Item</span>
                        </div>

                        <div className="box-body">
                            <form id="userForm" onSubmit={handleSubmit}>
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
                                     <button className="export-btn" type="submit">Save item</button>
                            </form>
                        </div>
                    </div>
    );
}

export default AddItem;