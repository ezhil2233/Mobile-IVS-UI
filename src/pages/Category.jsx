import React from "react";
import CategoryAdd from "../childpages/category/CategoryAdd.jsx"
import CategoryList from "../childpages/category/CategoryList.jsx"

const Category = () => {

    return(
       <div className="page-grid">
            <CategoryAdd />
            <CategoryList  />
        </div>
    );
}    

export default Category;