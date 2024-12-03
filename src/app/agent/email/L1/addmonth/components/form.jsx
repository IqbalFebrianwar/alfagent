const Form = () => {
  return (
    <form className="my-10 ">
      <div className="">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pilih Bulan*</span>
          </div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pilih
            </option>
            <option>Januari</option>
            <option>Februari</option>
          </select>
        </label>
      </div>

      <button className="btn btn-primary text-white w-32 my-5">Simpan</button>
    </form>
  );
};
export default Form;
