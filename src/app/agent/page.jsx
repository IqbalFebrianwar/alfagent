import dynamic from "next/dynamic";
import Link from "next/link";

import Table from "./components/table"
import FilterTime from "./components/filterTime"

export default function Agent() {
  return (
    <main className="p-10 rounded-md bg-white">
      <div>
        <div className="flex space-x-4">
          <Link href="/agent/add" className="btn btn-primary text-white">
            + Tambah Agent
          </Link>
          <FilterTime />
        </div>
        <Table />
      </div>
    </main>
  );
}
