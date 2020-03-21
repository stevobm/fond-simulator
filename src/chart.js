import React from "react";
import ReactEcharts from "echarts-for-react";
import data from "./data.js";
import { sellPoints, buyPoints } from "./myData";

export default function App() {
  const xData = data.map((e, i) => i);
  const sellPointsData = sellPoints.map(e => ({
    coord: [e, data[e]]
  }));
  const buyPointsData = buyPoints.map(e => ({
    coord: [e, data[e]]
  }));
  // console.info(xData);
  const option = {
    xAxis: {
      type: "category",
      data: xData
    },
    yAxis: {
      type: "value"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["origin", "my1"]
    },
    series: [
      {
        name: "origin",
        data: data,
        type: "line"
      },
      {
        name: "my",
        type: "line",
        markPoint: {
          data: buyPointsData,
          symbol: "circle",
          symbolSize: 5,
          itemStyle: {
            color: "red"
          }
        }
      },
      {
        name: "my",
        type: "line",
        markPoint: {
          data: sellPointsData,
          symbol: "circle",
          symbolSize: 5,
          itemStyle: {
            color: "orange"
          }
        }
      }
    ]
  };
  return <ReactEcharts option={option} />;
}
