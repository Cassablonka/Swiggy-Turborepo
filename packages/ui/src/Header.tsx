import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserContext } from "utils";

export const Header = () => {
  const { auth } = useContext(UserContext);

  const cartItems = useSelector((store: any) => store.cart.items);

  return (
    <>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 shadow-md">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex">
            <div>
              <Link to="/" className="flex items-center">
                <img
                  src="https://svgsilh.com/svg/2085075.svg"
                  className="h-8 mr-3 sm:h-10"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-3xl tracking-wider font-bold whitespace-nowrap">
                  FitChef4U
                </span>
              </Link>
            </div>
            <div className="px-8 py-2 text-slate-500 text-base font-semibold tracking-wide flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div className="pl-1">{auth.location.area}</div>
            </div>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link to="/">
                  <div className="flex text-base font-semibold hover:text-amber-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    <div className="px-2">Home</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"https://github.com/Cassablonka"}>
                  <div className="flex text-base font-semibold hover:text-amber-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                    <div className="px-2">Repository</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <div className="flex text-base font-semibold hover:text-amber-500">
                    {cartItems.length === 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    ) : (
                      <span className="rounded-md bg-red-600 w-5 h-6 top-5 pt-0.5 text-white font-semibold text-md leading-tight text-center">
                        {cartItems.length}
                      </span>
                    )}

                    <div className="px-2">Cart</div>
                    <div className=""></div>
                  </div>
                </Link>
              </li>
              <li>
                <div className="flex text-black text-base font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <div className="px-2">{auth.name}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
