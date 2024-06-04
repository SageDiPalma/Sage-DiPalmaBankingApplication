import { useMemo } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import AllData from "../pages/AllData";

export default function BaseRouter() {
    const router = useMemo(() => [
        {
            path: "/",
            element: <Layout><Home /></Layout>,
        },
        {
            path: "/CreateAccount",
            element: <Layout><CreateAccount /></Layout>,
        },
        {
            path: "/login",
            element: <Layout><Login /></Layout>,
        },
        {
            path: "/deposit",
            element: <Layout><Deposit /></Layout>,
        },
        {
            path: "/withdraw",
            element: <Layout><Withdraw /></Layout>,
        },
        {
            path: "/alldata",
            element: <Layout><AllData /></Layout>,
        },
    ], []);

    return (
        <RouterProvider router={createBrowserRouter([...router])} />
    );
}