"use client";

import dynamic from "next/dynamic";

const AgentChart = dynamic(() => import("@/app/agent/components/agentChart"));
const Modal = () => {
  return (
    <>
      <button
        className="btn bg-primary text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Lihat
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Detail Agent</h3>
          <div className="grid grid-cols-2 gap-2 my-5">
            <p>Nomor : AGN192</p>
            <p>Nama : Gunadi</p>
            <p>Email : gunadi@agent.alfa.com</p>
            <p>No Telp : 086273721228</p>
          </div>
          <p className="font-semibold">Detail Report Email & Recording :</p>
          <div className="max-w-[250px] my-5">
            <AgentChart />
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Modal;
