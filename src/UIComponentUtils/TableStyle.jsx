import React from "react";

const TableStyle = {
  headCells: {
    style: {
      fontWeight: "bold",   // makes header bold
      fontSize: "15px",
    },
  },
   rows: {
    style: {
      minHeight: "45px",
      backgroundColor: "#fff", // default row color (very light grey)
    },
    stripedStyle: {
      backgroundColor: "#e6e6e6", // striped row (light black / dark grey)
    },
  },
};

export default TableStyle

