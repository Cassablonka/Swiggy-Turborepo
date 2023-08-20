import { useContext, useState } from "react";
import { UserContext, locationPreferences } from "utils";

export const Login = () => {
  const { callBackFunc } = useContext(UserContext);
  const [name, setName] = useState("");
  const [selectLocation, setSelectedLocation] = useState("");

  function handleClick() {
    const selectedLocation = locationPreferences.filter(
      (d) => d.area === selectLocation
    );
    callBackFunc({
      name: name,
      location: selectedLocation[0],
      isLoggedIn: true,
    });
  }

  return (
    <section>
      <div className="px-4 py-12 mx-auto bg-gradient-to-b from-orange-300 to-rose-300 sm:px-6 md:px-12 lg:px-24 lg:py-20 my-20">
        <div className="justify-center mx-auto text-left align-bottom transition-all transhtmlForm bg-white rounded-xl sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-2xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-8 py-2">
              <div className="my-10">
                <div className="text-left bg-white">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-black l eading-6 lg:text-5xl">
                      FitChef4u
                    </h3>
                  </div>
                  <div className="mt-1 text-base font-light text-gray-400">
                    <p>Flavors on Wheels, Delivered Daily.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-5 py-3 my-3 text-base font-normal text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <select
                    value={selectLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="block w-full px-4 py-3 mb-3 text-base font-normal text-neutral-400 placeholder-gray-400 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100"
                  >
                    <option value="">Browse an area</option>
                    {locationPreferences.map((d) => {
                      return (
                        <option key={d.area} value={d.area}>
                          {d.area}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="flex flex-col mt-4 lg:space-y-4">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="flex items-center justify-center w-full tracking-wider px-20 py-3 mt-2 text-base font-semibold text-center text-white hover:text-black transition duration-500 ease-in-out transform bg-black rounded-md hover:bg-orange-300"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
            <div className="order-first hidden w-full bg-white lg:block">
              <img
                className="object-cover h-8/12 bg-cover rounded-l-lg"
                src="https://images.unsplash.com/photo-1659480150417-25f9f0d5ca2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
