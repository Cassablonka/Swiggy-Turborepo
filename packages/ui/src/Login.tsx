import { useContext, useState } from "react";
import { UserContext } from "utils";

export const Login = () => {
  const { callBackFunc } = useContext(UserContext);
  const [name, setName] = useState("");
  function handleClick() {
    callBackFunc({
      name: name,
      location: "Pune",
      isLoggedIn: true,
    });
  }

  return (
    <>
      <input
        type="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Login
      </button>
    </>
  );
};
