import dynamic from "next/dynamic"
import Link from "next/link"

const Modal = dynamic (()=> import ("../components/modal"))

const Table =()=>{
    return(
        <div className="overflow-x-auto my-5">
            <table className="table w-full">
                <thead>
                    <tr className="text-black">
                        <th></th>
                        <th>Bulan</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <th></th>
                            <td>Desember</td>
                            <td>
                                <div className="space-x-2">
                                    <Modal />
                                    <Link href="/agent/email/L1/lihat" className="btn bg-green-500 text-white">Lihat</Link>
                                    <button className="btn bg-red-700 text-white">Hapus</button>
                                </div>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Table