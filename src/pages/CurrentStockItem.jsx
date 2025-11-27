import React, { useEffect, useState } from "react";
import UITable from "../UIComponentUtils/UITable.jsx"
import Popup from "../UIComponentUtils/Popup.jsx";

const CurrentStockItem = ({ refreshKey }) => {


    const [showPopup, setShowPopup] = useState(false);
    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    const [data, setData] = useState([]);

    const fetchData = async () => {
        // const res =await axios.get("");
        //setData(res.data)
    }

    useEffect(() => {
        fetchData();
    }, [refreshKey])

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="box">
            <div className="box-header">
                <span><i className="fa fa-list-ul" aria-hidden="true"></i> Current Stock Items</span>
                <button className="export-btn" onClick={openPopup} >Export</button>
            </div>
            <UITable />
            {showPopup && (
                <Popup closePopup={closePopup} />
            )}

        </div>
    );
}

export default CurrentStockItem;