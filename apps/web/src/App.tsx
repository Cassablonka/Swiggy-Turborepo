import { Outlet } from "react-router-dom";
import { Header, Login } from "ui";
import { Provider } from "react-redux";
import { UserContext, appStore } from "utils";
import { useState } from "react";

const App = () => {
  const [userAuth, setUserAuth] = useState({
    name: "",
    location: "",
    isLoggedIn: false,
  });

  return (
    <UserContext.Provider value={{ auth: userAuth, callBackFunc: setUserAuth }}>
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
