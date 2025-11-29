import React from "react";
import SupplierAdd from "../childpages/supplier/SupplierAdd.jsx"
import SupplierList from "../childpages/supplier/SupplierList.jsx"


const Supplier = () => {

    return(
       <div className="page-grid">
            <SupplierAdd />
            <SupplierList  />
        </div>
    );
}    

export default Supplier;