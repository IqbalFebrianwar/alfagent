import dynamic from "next/dynamic";
import Link from "next/link";

const Table = dynamic(() => import("../L1/components/table"));
const FilterTime = dynamic(() => import("../L1/components/filterTime"));

export default function EmailL1() {
  return (
    <main className="p-10 rounded-md bg-white">
      <div>
        <div className="flex space-x-4">
          <Link href="/agent/email/L1/addmonth" className="btn btn-primary text-white">
            + Tambah Bulan
          </Link>
          <FilterTime />
        </div>
        <Table />
      </div>
    </main>
  );
}
