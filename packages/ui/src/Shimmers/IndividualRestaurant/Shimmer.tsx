const Shimmer = () => {
  return (
    <>
      <div>
        <div className="rounded-lg mx-24 my-16 p-10">
          <div className="flex">
            <div className="w-1/2 m-4">
              <img
                className="object-cover animate-pulse object-center w-full bg-gray-200 h-72 rounded-lg"
                alt=""
              />
            </div>
            <div className="flex flex-col mx-20 mt-4">
              <div className="bg-gray-200 h-10 w-full px-40 mb-6"></div>
              <div className="bg-gray-200 h-20 w-full px-40 mb-6"></div>
              <div className="bg-gray-200 h-10 w-full px-40 mb-6"></div>
              <div className="bg-gray-200 h-14 w-full px-40"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex prose md:flex-grow prose-md ">
            <div className="flex flex-col mx-4 w-full sm:flex-row">
              <img className="object-cover object-center w-full h-20 animate-pulse bg-gray-200 mx-20 p-12 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
