import React, { useState } from "react";
import DataTable from "react-data-table-component";
import TableStyle from "../UIComponentUtils/TableStyle.jsx"

const loans = [
    { id: 1, name: "Personal Loan", amount: 5000 },
    { id: 2, name: "Home Loan", amount: 20000 },
    { id: 3, name: "Car Loan", amount: 10000 },
];



const columns = [
    { name: "ID", selector: row => row.id, sortable: true },
    { name: "Name", selector: row => row.name, sortable: true },
    { name: "Amount", selector: row => row.amount, sortable: true },
   
];


const UITable = ({data}) => {
    return (
        <div className="row">
            <div className="container mt-4">
                {console.log("i am rendering ...")}
                <DataTable
                    columns={columns}
                    data={loans}
                    pagination
                    striped
                    highlightOnHover                    
                    responsive
                    customStyles={TableStyle}
                />
            </div>
        </div>
    );
}

export default UITable;
