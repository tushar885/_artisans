import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import store from "../utils/store";
import Navbar from "./Navbar";
import { signIN } from "../utils/slices/user";
import ThemeSelected from "../utils/ThemeSelected";

const AppLayout = () => {
  const userData = useSelector((store) => store.User);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(signIN({ jwtToken: user.jwtToken, user: user.user }));
    }
    setChecked(true);
  }, []);

  if (!checked) return <div></div>;

  if (userData.user === null) {
    return (
      <div className=" flex flex-col gap-16 w-screen min-h-screen justify-center items-center px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-gray-900 font-bold text-5xl leading-[2.5rem] tracking-normal font-founder">
              Hi there,
            </div>
            <div className="text-gray-900 font-bold text-2xl leading-[1rem] tracking-normal font-founder">
              How are you doing today.
            </div>
          </div>
          <p className="text-indigo-600 font-semibold text-3xl tracking-normal font-founder">
            Sorry, but we could not identify you, please choose:
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-fit sm:w-full items-center justify-center sm:gap-16">
          <Link
            to={"/signin"}
            className="flex w-full sm:w-fit justify-center rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign In
          </Link>
          <Link
            to={"/signup"}
            className="flex w-full sm:w-fit justify-center rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ThemeSelected.Provider value={{ theme, setTheme }}>
      <div>
        <Navbar />
        <div className="px-8">
          <Outlet />
        </div>
      </div>
    </ThemeSelected.Provider>
  );
};

export default AppLayout;
