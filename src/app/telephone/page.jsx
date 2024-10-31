import dynamic from "next/dynamic";

const Select = dynamic(() => import("@/app/telephone/components/filterTime"));
const SelectL = dynamic(() => import("@/app/telephone/components/filterL"));
const Card = dynamic(() => import("@/app/telephone/components/card"));

export default function Telephone() {
  return (
    <main className="p-10 rounded-md">
      <div className="flex space-x-4">
        <Select />
        <SelectL />
      </div>
      <div className="my-10">
        <Card />
      </div>
    </main>
  );
}
