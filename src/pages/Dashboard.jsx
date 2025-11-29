import React from "react";

const Dashboard = () => {

  return (
    <div className="dash-wrap">

      <h2 className="page-title">Dashboard Overview</h2>
      <div className="cards">
        <div className="card">
          <div className="card-icon green"><i class="fa fa-inr" aria-hidden="true"></i></div>
          <div className="card-content">
            <h3>₹ 122,000.00</h3>
            <p>Total Sales Amount</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon red"><i class="fa fa-university" aria-hidden="true"></i></div>
          <div className="card-content">
            <h3>3</h3>
            <p>Total Sales Transactions</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon blue"><i class="fa fa-th-large" aria-hidden="true"></i></div>
          <div className="card-content">
            <h3>967</h3>
            <p>Total Items in Stock</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon yellow"><i className="fa fa-users" aria-hidden="true"></i></div>
          <div className="card-content">
            <h3>3</h3>
            <p>Unique Customers</p>
          </div>
        </div>
      </div>


      <div className="grid-2">


        <div className="panel">
          <div className="panel-header red-bg">
            <h4><i class="fa fa-line-chart" aria-hidden="true"></i> Sale Tren (Last 7 Days)</h4>
          </div>
          <div className="panel-body chart-box">

            <p>Chart Placeholder</p>
          </div>
        </div>


        <div className="panel">
          <div className="panel-header red-bg">
            <h4><i class="fa fa-trophy" aria-hidden="true"></i> Top 5 Selling Items</h4>
          </div>
          <div className="panel-body chart-box">

            <p>Chart Placeholder</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;