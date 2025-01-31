import React from "react";

const CardDash = () => {
  return (
    <div className="flex flex-col items-center gap-4 border-2 border-gray-200 p-6 rounded-lg bg-white">
      <h2 className="text-lg font-semibold">Grafico 1</h2>
      <RenderLineChart />
    </div>
  );
};

export default CardDash;
