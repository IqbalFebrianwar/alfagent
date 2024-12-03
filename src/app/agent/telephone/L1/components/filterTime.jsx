const Select = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        Filter
      </option>
      <option>Today</option>
      <option>Yesterday</option>
      <option>1 Week</option>
    </select>
  );
};
export default Select;
