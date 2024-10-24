import dynamic from "next/dynamic";
import Link from "next/link";

const Form = dynamic (()=> import ("@/app/agent/edit/components/form"))

export default function AddAgent() {
  return (
    <main className="p-10 rounded-md bg-white">
      <div>
        <Link href="/agent" className="btn btn-primary text-white">
          Kembali
        </Link>
        <div className="py-10">
          <h1 className="text-2xl font-semibold text-black">Edit Agent</h1>
          <h1 className="text-sm text-gray-500">
            Tanda * wajib di isi dan sesuaikan
          </h1>
          <Form />
        </div>
      </div>
    </main>
  );
}
