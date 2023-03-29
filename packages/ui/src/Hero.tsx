import { useState } from "react";

export const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <section className="w-full bg-gradient-to-b from-orange-300 to-rose-300 dark:bg-wickeddark">
        <div className="relative items-center w-full px-2 py-6 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="pb-4 text-center">
                <h1 className="max-w-5xl text-2xl font-semibold leading-none tracking-tighter text-black md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Start ordering delicious food
                  <br className="hidden lg:block" />
                  at your doorsteps
                </h1>
                <div className="p-2 mt-12 transition duration-500 ease-in-out bg-white transform border2 md:mx-auto rounded-xl sm:max-w-lg sm:flex">
                  <div className="flex-1 min-w-0 revue-form-group">
                    <input
                      value={searchInput}
                      className="block w-full mt-1.5 px-5 py-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
                      placeholder="Find restaurants near you"
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                    <button className="block w-full px-5 py-3 text-base font-medium text-gray-700 border border-transparent rounded-lg shadow hover:bg-gray-50 sm:px-10">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
