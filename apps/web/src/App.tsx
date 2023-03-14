import { Outlet } from "react-router-dom";
import { Header } from "ui";

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;
