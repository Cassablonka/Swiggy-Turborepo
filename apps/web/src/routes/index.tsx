import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error, RestaurantDetails } from "ui";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [{ path: "restaurant/:menuId", element: <RestaurantDetails /> }],
  },
]);
