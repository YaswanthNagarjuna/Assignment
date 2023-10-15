// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./page/DashboardPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
