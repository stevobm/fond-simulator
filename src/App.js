import React from "react";
import "./styles.css";
import getChart from "./chart.js";

export default function App() {
  return <div className="App">{getChart()}</div>;
}
