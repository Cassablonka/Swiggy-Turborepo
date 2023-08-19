import { Outlet } from "react-router-dom";
import { Header, Login } from "ui";
import { Provider } from "react-redux";
import { UserContext, appStore } from "utils";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [userAuth, setUserAuth] = useState({
    name: "",
    location: {
      area: "",
      lat: 0,
      lon: 0,
    },
    isLoggedIn: false,
  });

  const showAddNotification = () => {
    toast.success("Item is added in the cart !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  };

  const showRemoveNotification = () => {
    toast.error("Item is removed from the cart !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1500,
    });
  };

  return (
    <UserContext.Provider
      value={{
        auth: userAuth,
        callBackFunc: setUserAuth,
        addItemNotification: showAddNotification,
        removeItemNotification: showRemoveNotification,
      }}
    >
      <ToastContainer />
      {userAuth.isLoggedIn ? (
        <Provider store={appStore}>
          <Header />
          <Outlet />
        </Provider>
      ) : (
        <Login />
      )}
    </UserContext.Provider>
  );
};

export default App;
