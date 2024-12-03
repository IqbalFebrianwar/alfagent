import Link from "next/link"
import Table from "./components/table"

const LihatEmailL2 =()=>{
    return(
        <main className="p-10 rounded-md bg-white">
            <div className="pb-5 space-x-3">
                <Link href="/agent/email/L2" className="btn bg-red-500 text-white">Kembali</Link>
                <button className="btn bg-blue-500 text-white">Print</button>
            </div>
            <h1 className="font-semibold">CASE NUMBER : </h1>
            <Table />
        </main>
    )
}
export default LihatEmailL2