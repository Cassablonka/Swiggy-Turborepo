const Shimmer = () => {
  return (
    <div>
      <div className="p-3 border rounded-xl shadow-lg">
        <img
          className="object-cover animate-pulse object-center w-full mb-2.5 bg-gray-200 lg:h-48 md:h-36 rounded-lg"
          alt=""
        />
        <hr className="mb-2" />
        <div className="inline-flex justify-between w-full h-4 bg-gray-200"></div>
        <div className="inline-flex justify-between h-3 bg-gray-200 w-1/2"></div>
      </div>
    </div>
  );
};

export default Shimmer;
