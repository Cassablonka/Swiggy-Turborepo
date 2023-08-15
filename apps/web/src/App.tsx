import { Outlet } from "react-router-dom";
import { Header } from "ui";
import { Provider } from "react-redux";
import { appStore } from "utils";

const App = () => (
  <Provider store={appStore}>
    <Header />
    <Outlet />
  </Provider>
);

export default App;
