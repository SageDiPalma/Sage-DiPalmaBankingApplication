import { createContext, useContext } from "react";

export const UserContext = createContext({
    users: [],
    setData: (user) => user,
    setListData: (list) => list,
    token: '',
    setTokenUser: (token) => token,
    detailUser: {},
    setDetailUser: (detail) => detail,
});

export const useUserContext = () => useContext(UserContext);