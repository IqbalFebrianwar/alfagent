const Form = () => {
  return (
    <form className="my-10 ">
      <div className="grid lg:grid-cols-2 lg:gap-2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pilih Agent*</span>
          </div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pilih
            </option>
            <option>Gunadi</option>
            <option>Supri</option>
          </select>
        </label>
      </div>

      <div className="my-5">
        <h1 className="text-xl font-semibold">Monitoring Agent</h1>
        <h1 className="text-md font-semibold mt-4">
          SERVICE STANDARD CONSISTENCY
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">1. SLA Response*</span>
            <span className="label-text">(Bobot 10)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">2. SLA Closed Tiket*</span>
            <span className="label-text">(Bobot 10)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>

        <h1 className="text-md font-semibold mt-4">
          SOFT SKILL - Etika Yang Baik
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              3. Email memakai penggunaan tanda baca yang baik*
            </span>
            <span className="label-text">(Bobot 5)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              4. Penulisan konten Ticket di Zendesk*
            </span>
            <span className="label-text">(Bobot 5)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Cek keterkaitan dengan case/tiket lain*
            </span>
            <span className="label-text">(Bobot 5)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Task sudah sesuai atau belum *</span>
            <span className="label-text">(Bobot 5)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Category Ticket Zendesk sudah sesuai atau belum *
            </span>
            <span className="label-text">(Bobot 5)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              5. Menggunakan etika dan bahasa Service yang baik *
            </span>
            <span className="label-text">(Bobot 15)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>

        <h1 className="text-md font-semibold mt-4">
          HARD SKILL - PRODUCT KNOWLEDGE & SOLUTION
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              6. Analisa yang benar*
            </span>
            <span className="label-text">(Bobot 20)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              7. Solusi yg diberikan lengkap dan tuntas*
            </span>
            <span className="label-text">(Bobot 20)</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </label>
      </div>

      <button className="btn btn-primary text-white w-32 my-5">Simpan</button>
    </form>
  );
};
export default Form;
