import React from "react";
import SellingDetails from "../childpages/selling/SellingDetails.jsx"
import SellingRecipt from "../childpages/selling/SellingRecipt.jsx"

const Selling = () => {

    return(
      <div className="page-grid">
            <SellingDetails />
            <SellingRecipt  />
        </div>
    );
}    

export default Selling;