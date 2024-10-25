import dynamic from "next/dynamic";

const Select = dynamic(() => import("@/app/email/components/filterTime"));
const SelectL = dynamic(() => import("@/app/email/components/filterL"));
const Card = dynamic(() => import("@/app/email/components/card"));

export default function Email() {
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
