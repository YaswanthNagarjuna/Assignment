import React from "react";
import Sidenav from "../components/Sidenav";
import Dashboard from "../components/Dashboard";

export default function DashboardPage() {
  return (
    <Sidenav component={React.createElement(Dashboard)}/>
  );
}