export const Error = () => {
  return (
    <>
      <div className="bg-white py-6 my-16 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src="https://cdn.pixabay.com/photo/2021/04/21/01/59/chef-6195247_1280.png"
                loading="lazy"
                alt="Photo by Theo Crazzolara"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
                Error 404
              </p>
              <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                We are serving nothing here
              </h1>
              <p className="text-gray-500 md:text-lg text-center sm:text-left mb-4 md:mb-8">
                The page you’re looking for doesn’t exist.
              </p>
              <nav className="flex sm:block gap-4 sm:space-y-1 md:space-y-2">
                <div>
                  <a
                    href="/"
                    className="inline-block text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm md:text-base transition duration-100"
                  >
                    Home
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
