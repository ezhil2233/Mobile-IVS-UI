import React, { useState } from "react";
import ItemAdd from "../childpages/items/ItemAdd.jsx";
import ItemStock from "../childpages/items/ItemStock.jsx";


const Items = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleDataInsert = () => {
        setRefreshKey(old => old + 1);
    }

    return (
        <div className="page-grid">
            <ItemAdd onSuccess={handleDataInsert} />
            <ItemStock refreshKey={refreshKey} />
        </div>
    );
}

export default Items;