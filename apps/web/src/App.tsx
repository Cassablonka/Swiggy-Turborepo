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
    location: "",
    isLoggedIn: false,
  });

  const showToastNotification = () => {
    toast.success("Item is added in the cart !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <UserContext.Provider
      value={{
        auth: userAuth,
        callBackFunc: setUserAuth,
        toastNotification: showToastNotification,
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
