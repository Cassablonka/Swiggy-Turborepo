import { createContext } from "react";

type UserContextProps = {
  auth: {
    name: string;
    location: string;
    isLoggedIn: boolean;
  };
  callBackFunc: any;
  toastNotification: any;
};

export const UserContext = createContext<UserContextProps>({
  auth: {
    name: "",
    location: "",
    isLoggedIn: false,
  },
  callBackFunc: () => null,
  toastNotification: () => null,
});
