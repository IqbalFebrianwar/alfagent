import dynamic from "next/dynamic";
import Link from "next/link";

const Table = dynamic(() => import("@/app/user/components/table"));

export default function User() {
  return (
    <main className="p-10 rounded-md bg-white">
      <div>
        <Link href="/user/add" className="btn btn-primary text-white">+ Tambah User</Link>
        <Table />
      </div>
    </main>
  );
}
