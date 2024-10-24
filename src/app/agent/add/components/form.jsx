const Form = () => {
  return (
    <form className="my-10 grid lg:grid-cols-2 lg:gap-2">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nomor Agent*</span>
        </div>
        <input
          type="text"
          placeholder="No Agent"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
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
          <span className="label-text">Email*</span>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">No Telp*</span>
        </div>
        <input
          type="text"
          placeholder="No Telp"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <button className="btn btn-primary text-white w-32 my-5">Simpan</button>
    </form>
  );
};
export default Form;
