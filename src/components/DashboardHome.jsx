import React from "react";
import RenderLineChart from "./renderLineChart";
import RenderBarChart from "./RenderBarChart";

const DashboardHome = () => {
  return (
    <div className="p-4 flex flex-col gap-4 w-1/2 col-span-2">
      <h1 className="text-lg font-semibold">Estadísticas</h1>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col items-center gap-4 border-2 border-gray-200 p-6 rounded-lg bg-white">
          <h2 className="text-lg font-semibold">Grafico 1</h2>
          <RenderLineChart />
        </div>
        <div className="flex flex-col items-center gap-4 border-2 border-gray-200 p-6 rounded-lg bg-white">
          <h2 className="text-lg font-semibold">Grafico 2</h2>
          <RenderBarChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
