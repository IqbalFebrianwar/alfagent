const Form = () => {
  return (
    <form className="my-10">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Username*</span>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Password*</span>
        </div>
        <input
          type="text"
          placeholder="Password"
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

      <button className="btn btn-primary text-white w-32 my-5">Ubah</button>
    </form>
  );
};
export default Form;
