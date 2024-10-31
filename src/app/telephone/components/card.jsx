import dynamic from "next/dynamic";

const Modal = dynamic (()=> import("@/app/telephone/components/modal"))

const Card =()=>{
    return(
        <div className="p-10 bg-white max-w-md">
            <h1>Nama Agent : Gunadi</h1>
            <h1>L1/L2 : L1</h1>
            <div className="my-5">
            <Modal />
            </div>
        </div>
    )
}
export default Card