import LineChart from "../components/lineChart"
import DoughnutChart from "../components/doughnutChart"
import LineChartEmail from "../dashboard/components/email/chartline"
import DoughnutChartEmail from "../dashboard/components/email/chartdonat"
import LineChartTelephone from "../dashboard/components/telephone/chartline"
import DoughnutChartTelephone from "../dashboard/components/telephone/chartdonat"
import Count from "../components/count"
import Filter from "../components/filterTime"

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
      <h1 className="font-semibold text-2xl">Email Category</h1>
      <div className="grid grid-cols-2 p-5 w-full justify-center">
        <div className="max-w-4xl">
          <LineChartEmail />
        </div>
        <div className="max-w-sm">
          <DoughnutChartEmail />
        </div>
      </div>
      <h1 className="font-semibold text-2xl">Telephone Category</h1>
      <div className="grid grid-cols-2 p-5 w-full justify-center">
        <div className="max-w-4xl">
          <LineChartTelephone />
        </div>
        <div className="max-w-sm">
          <DoughnutChartTelephone />
        </div>
      </div>
    </div>
    </>
  );
}
