const Count = () => {
  return (
    <div className="flex p-10 space-x-20">
      <div className="flex items-start space-x-3">
        <div className="w-5 h-5 bg-blue-400 rounded"></div>
        <div>
          <h1 className="font-semibold text-md">Agents</h1>
          <h1 className="font-semibold text-6xl">91</h1>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-5 h-5 bg-green-400 rounded"></div>
        <div>
          <h1 className="font-semibold text-md">Email</h1>
          <h1 className="font-semibold text-6xl">2432</h1>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-5 h-5 bg-pink-400 rounded"></div>
        <div>
          <h1 className="font-semibold text-md">Recording</h1>
          <h1 className="font-semibold text-6xl">1241</h1>
        </div>
      </div>
    </div>
  );
};
export default Count;
