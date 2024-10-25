const Form = () => {
  return (
    <form className="my-10 grid lg:grid-cols-2 lg:gap-2">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nama Lengkap Agent*</span>
        </div>
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Agent L1/L2*</span>
        </div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Pilih
          </option>
          <option>L1</option>
          <option>L2</option>
        </select>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Kesalahan Agent*</span>
        </div>
        <input
          type="text"
          placeholder="Kesalahan"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Presensi Email*</span>
        </div>
        <input
          type="text"
          placeholder="Contoh : 50"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Presensi Recording*</span>
        </div>
        <input
          type="text"
          placeholder="Contoh : 40"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <button className="btn btn-primary text-white w-32 my-5">Simpan</button>
    </form>
  );
};
export default Form;
