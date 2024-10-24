import dynamic from "next/dynamic"
import Link from "next/link"

const Modal = dynamic (()=> import ("@/app/agent/components/modal"))

const Table =()=>{
    return(
        <div className="overflow-x-auto my-5">
            <table className="table w-full">
                <thead>
                    <tr className="text-black">
                        <th></th>
                        <th>Username</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <th></th>
                            <td>admin</td>
                            <td>admin@admin</td>
                            <td>
                                <div className="space-x-2">
                                    <Link href="/user/edit" className="btn bg-green-500 text-white">Edit</Link>
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