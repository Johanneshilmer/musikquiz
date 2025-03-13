"use client";

import React, { useState } from "react";
import ItemList from "./components/ItemList";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simulate authentication process
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="container main-header">
        <h1>Hello</h1>
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Routes>
              <Route path="/" element={<ItemList />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}
