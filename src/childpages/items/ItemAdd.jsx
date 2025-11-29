       import React ,{ useState } from "react";
import { axiosAPI } from "../../utils/AxiosCtx.js";

const AddItem = ({ onSuccess }) => {

    const [formData, setFormData] = useState({
        itemName: "",
        category: "",
        supplier: "",
        quantityInStock: "",
        purchasePrice: "",
        sellingPrice: "",
        description: "",
    });

    const handleSubmit = async () => {
        try {
            const res = await axiosAPI.post("/createProduct", formData);
            console.log("Success:", res.data);
            alert("Item saved successfully!");
            onSuccess();
        } catch (err) {
            console.error(err);
            alert("Error saving item");
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="box">
            <div className="box-header">
                <span><i className="fa fa-plus-circle" aria-hidden="true"></i>Add New Item</span>
            </div>

            <div className="box-body">
                <form id="userForm" onSubmit={handleSubmit}>

                    <div className="row">
                        <label htmlFor="itemName">Item Name</label>
                        <input
                            id="itemName"
                            name="itemName"
                            type="text"
                            required
                            value={formData.itemName}
                            onChange={handleChange}
                            placeholder="e.g., iPhone 15 Pro Max 256GB"
                        />
                    </div>

                    <div className="row">
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Mobile Cover">Mobile Cover</option>
                            <option value="Head Set">Head Set</option>
                        </select>
                    </div>

                    <div className="row">
                        <label htmlFor="supplier">Supplier</label>
                        <select
                            name="supplier"
                            value={formData.supplier}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Supplier</option>
                            <option value="Techno Karnataka">Techno Karnataka</option>
                            <option value="Xiaomi Bangalore">Xiaomi Bangalore</option>
                        </select>
                    </div>

                    <div className="row">
                        <label htmlFor="quantityInStock">Quantity in Stock</label>
                        <input
                            id="quantityInStock"
                            name="quantityInStock"
                            type="number"
                            required
                            value={formData.quantityInStock}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <label htmlFor="purchasePrice">Purchase Price</label>
                        <input
                            id="purchasePrice"
                            name="purchasePrice"
                            type="number"
                            required
                            value={formData.purchasePrice}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <label htmlFor="sellingPrice">Selling Price</label>
                        <input
                            id="sellingPrice"
                            name="sellingPrice"
                            type="number"
                            required
                            value={formData.sellingPrice}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            required
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="export-btn" type="submit">Save item</button>
                </form>

            </div>
        </div>
    );
}

export default AddItem;
