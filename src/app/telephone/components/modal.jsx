"use client";

import dynamic from "next/dynamic";

const RecordingChart = dynamic(() => import("@/app/telephone/components/recordingChart"));
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
            <p>Nama Agent : Gunadi</p>
            <p>L1/L2 : L1</p>
            <p>Kesalahan : -</p>
          </div>
          <h1 className="font-bold">Presensi Telephone Kategori</h1>
          <div className="grid grid-cols-2 gap-2 my-5">
            <p>System & Procedure : 15%</p>
            <p>Enjoying : 25%</p>
            <p>Hard Skill : 20%</p>
            <p>Soft Skill : 10%</p>
          </div>
          <p className="font-semibold">Presensi Telephone :</p>
          <div className="max-w-[250px] my-5">
            <RecordingChart />
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Modal;
