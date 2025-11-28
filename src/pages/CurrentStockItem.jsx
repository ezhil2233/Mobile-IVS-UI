import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import UITable from "../UIComponentUtils/UITable.jsx"
import Popup from "../UIComponentUtils/Popup.jsx";
import { axiosAPI } from "../utils/AxiosCtx.js"
import TableStyle from "../UIComponentUtils/TableStyle.jsx"
import { productColumns } from "../tables/productTable.js"


const CurrentStockItem = ({ refreshKey }) => {


    const [showPopup, setShowPopup] = useState(false);
    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res =await axiosAPI.get("/getProducts");    
        console.log(res);
        setData(res.data)
    }

    useEffect(() => {
        fetchData();
    }, [refreshKey])

 

    return (
        <div className="box">
            <div className="box-header">
                <span><i className="fa fa-list-ul" aria-hidden="true"></i> Current Stock Items</span>
                <button className="export-btn" onClick={openPopup} >Export</button>
            </div>
            <DataTable
                    columns={productColumns}
                    data={data}
                    pagination
                    striped
                    highlightOnHover                    
                    responsive
                    customStyles={TableStyle}
                />
            {showPopup && (
                <Popup closePopup={closePopup} />
            )}

        </div>
    );
}

export default CurrentStockItem;