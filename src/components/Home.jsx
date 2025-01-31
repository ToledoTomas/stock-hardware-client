import React from "react";
import Lateral from "./Lateral";
import DashboardHome from "./DashboardHome";
import DataTable from "./DataTable";

const Home = () => {
  return (
    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <Lateral />
      <DashboardHome />
      <DataTable />
    </div>
  );
};

export default Home;
