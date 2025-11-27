import React, { useState } from "react";
import AddItem from "../pages/AddItem.jsx";
import CurrentStockItem from "../pages/CurrentStockItem.jsx";


const Items = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleDataInsert = () => {
        setRefreshKey(old => old + 1);
    }

    return (
        <div className="page-grid">
            <AddItem onSuccess={handleDataInsert} />
            <CurrentStockItem refreshKey={refreshKey} />
        </div>
    );
}

export default Items;