import React, { useState } from "react";
import DataTable from "react-data-table-component";


const loans = [
    { id: 1, name: "Personal Loan", amount: 5000 },
    { id: 2, name: "Home Loan", amount: 20000 },
    { id: 3, name: "Car Loan", amount: 10000 },
];

// Action button component
const ActionButton = ({ row }) => {
    const handleClick = () => {
        alert(`Editing ${row.name}`);
    };

    return (
        <div className="">
            <button className="export-btn" onClick={handleClick}><i class="fa fa-pencil-square" aria-hidden="true"></i>Edit</button>
        </div>
    );
};

const columns = [
    { name: "ID", selector: row => row.id, sortable: true },
    { name: "Name", selector: row => row.name, sortable: true },
    { name: "Amount", selector: row => row.amount, sortable: true },
    {
        name: "Actions",
        cell: row => <ActionButton row={row} />,
        ignoreRowClick: true,   // prevents row click when button clicked
        allowOverflow: true,
        button: true,
    },
];


const UITable = () => {
    return (
        <div class="row">
            <div className="container mt-4">
                <DataTable
                    columns={columns}
                    data={loans}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
}

export default UITable;
