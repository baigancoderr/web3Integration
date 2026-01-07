import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const seriesData = [
  { label: "Income (50%)", value: "$632,662", percent: 80, color: "#FFCC66" },
  { label: "Spends (30%)", value: "$53,234", percent: 60, color: "#E6B65C" },
  { label: "Safe (20%)", value: "$21,412", percent: 40, color: "#FFFFFF" },
];

const PortfolioRadialChart = () => {
  const [series, setSeries] = useState(seriesData.map((i) => i.percent));

  const options = {
    chart: {
      id: "portfolio-chart",
      type: "radialBar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: { size: "32%" },
        track: { background: "#FFFFFF", strokeWidth: "3px", opacity: 1, margin: 10 },
        dataLabels: { show: false },
      },
    },
    colors: seriesData.map((i) => i.color),
  };

  const toggleSeries = (index) => {
    const newSeries = [...series];
    newSeries[index] = newSeries[index] === 0 ? seriesData[index].percent : 0;
    setSeries(newSeries);
  };

  return (
    <div className="flex flex-col items-center ">
      {/* CHART */}
      <div className="flex justify-center">
        <ReactApexChart options={options} series={series} type="radialBar" height={360} />
      </div>

      {/* LEGEND - GRID ROWS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-lg">
        {seriesData.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleSeries(index)}
            className="flex flex-col items-center bg-zinc-800 px-4 py-3 rounded-lg group hover:bg-zinc-700 transition"
          >
            <span className="w-3 h-3 rounded mb-2" style={{ background: item.color }} />
            <p className="text-gray-400 group-hover:text-white text-sm">{item.label}</p>
            <p className="text-white font-semibold group-hover:text-[#FFCC66] text-lg">{item.value}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioRadialChart;
