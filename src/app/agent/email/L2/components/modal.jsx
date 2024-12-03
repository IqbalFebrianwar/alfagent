"use client";

import dynamic from "next/dynamic";

const Form = dynamic (()=> import ("../components/form"))

const Modal = () => {
  return (
    <>
      <button
        className="btn bg-primary text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Input Agent
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Input Agent</h3>
          <div className="">
            <Form />
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Modal;
