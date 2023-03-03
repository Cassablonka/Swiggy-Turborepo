import { createBrowserRouter } from "react-router-dom";
import { Error, Landing, RestaurantDetails } from "ui";
import App from "../App";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "restaurant/:menuId", element: <RestaurantDetails /> },
    ],
  },
]);
