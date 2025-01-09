import React from "react";
import AdminTitle from "../AdminTitle/AdminTitle";
import { Link } from "react-router-dom";

const PortfolioList = () => {
  return (
    <div className="admin_margin_box">
      <div className="admin_titles">
        <AdminTitle label1=" Portfolio List" />
        <div className="Dashboard_title">
          <h1>Portfolio List</h1>
          <div>
            <Link to="/admin/portfolio_add">
              <button className="edit_btn">Add Portfolio</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="gallery_grid">
        
      </div>
    </div>
  );
};

export default PortfolioList;
