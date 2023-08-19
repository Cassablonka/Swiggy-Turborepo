import { createContext } from "react";

type UserContextProps = {
  auth: {
    name: string;
    location: {
      area: string;
      lat: number;
      lon: number;
    };
    isLoggedIn: boolean;
  };
  callBackFunc: any;
  addItemNotification: any;
  removeItemNotification: any;
};

export const UserContext = createContext<UserContextProps>({
  auth: {
    name: "",
    location: {
      area: "",
      lat: 0,
      lon: 0,
    },
    isLoggedIn: false,
  },
  callBackFunc: () => null,
  addItemNotification: () => null,
  removeItemNotification: () => null,
});
