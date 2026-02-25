"use client";

import React from "react";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        🛠️ Uchoice Admin Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-2xl font-bold text-green-600">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold text-purple-600">85</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="text-2xl font-bold text-orange-600">45</p>
        </div>
      </div>

      {/* Management Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Product Management</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            ➕ Add Product
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Management</h2>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            📦 View Orders
          </button>
        </div>
      </div>
    </main>
  );
}
