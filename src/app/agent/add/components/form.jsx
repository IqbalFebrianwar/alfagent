const Form = () => {
  return (
    <form className="my-10 ">
      <div className="grid lg:grid-cols-2 lg:gap-2">
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
      </div>

      <div className="my-5">
        <h1 className="text-xl font-semibold">Agent Telephone</h1>
        <div className="grid lg:grid-cols-2 lg:gap-2">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Total Persenan*</span>
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Bulan ini"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Bulan kemarin"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </label>
          <div>
            <h1 className="text-xl font-semibold">Kategori Telephone</h1>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">System & Procedure*</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Bulan ini"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Bulan kemarin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Enjoying*</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Bulan ini"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Bulan kemarin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Hard Skill*</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Bulan ini"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Bulan kemarin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Soft Skill*</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Bulan ini"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Bulan kemarin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-xl font-semibold">Agent Email</h1>
        <div className="grid lg:grid-cols-2 lg:gap-2">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Total Persenan*</span>
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Bulan ini"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Bulan kemarin"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </label>
          <div>
            <h1 className="text-xl font-semibold">Kategori Email</h1>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Service Level*</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Bulan ini"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Bulan kemarin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Hard Skill*</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Bulan ini"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Bulan kemarin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Soft Skill*</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Bulan ini"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Bulan kemarin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
          </div>
        </div>
      </div>

      <button className="btn btn-primary text-white w-32 my-5">Simpan</button>
    </form>
  );
};
export default Form;
