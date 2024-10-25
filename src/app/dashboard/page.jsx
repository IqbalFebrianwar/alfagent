import dynamic from "next/dynamic";

const LineChart = dynamic(() => import("@/app/components/lineChart"));
const DoughnutChart = dynamic(() => import("@/app/components/doughnutChart"));
const Count = dynamic(() => import("@/app/components/count"));
const Filter = dynamic(() => import("@/app/components/filterTime"));

export default function Dashboard() {
  return (
    <>
    <div className="mb-10">
      <Filter />
    </div>
      <div className="p-10 rounded-md bg-white">
      <h1 className="font-semibold text-2xl">Dashboard</h1>
      <div className="flex w-full justify-center py-5">
        <Count />
      </div>
      <div className="grid grid-cols-2 p-5 w-full justify-center">
        <div className="max-w-4xl">
          <LineChart />
        </div>
        <div className="max-w-sm">
          <DoughnutChart />
        </div>
      </div>
    </div>
    </>
  );
}
