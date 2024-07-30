// src/components/Admin/AdminDashboard.js
import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <Link to="/admin/manage-subscriptions">Manage Subscriptions</Link>
        <Link to="/admin/manage-products">Manage Products</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
