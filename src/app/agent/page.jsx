import dynamic from "next/dynamic";
import Link from "next/link";

const Table = dynamic(() => import("@/app/agent/components/table"));

export default function Agent() {
  return (
    <main className="p-10 rounded-md bg-white">
      <div>
        <Link href="/agent/add" className="btn btn-primary text-white">+ Tambah Agent</Link>
        <Table />
      </div>
    </main>
  );
}
