export const productColumns = [
    { name: "ID", selector: row => row.id, sortable: true },
    { name: "Item Name", selector: row => row.itemName, sortable: true },
    { name: "Category", selector: row => row.category, sortable: true },
    { name: "Supplier", selector: row => row.supplier, sortable: true },
    { name: "Quantity In Stock", selector: row => row.quantityInStock, sortable: true },
    { name: "Selling Price", selector: row => row.sellingPrice, sortable: true },
    { name: "Description", selector: row => row.description, sortable: true },
];