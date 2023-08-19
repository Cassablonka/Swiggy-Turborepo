import { createContext } from "react";

type UserContextProps = {
  auth: {
    name: string;
    location: string;
    isLoggedIn: boolean;
  };
  callBackFunc: any;
  addItemNotification: any;
  removeItemNotification: any;
};

export const UserContext = createContext<UserContextProps>({
  auth: {
    name: "",
    location: "",
    isLoggedIn: false,
  },
  callBackFunc: () => null,
  addItemNotification: () => null,
  removeItemNotification: () => null,
});
