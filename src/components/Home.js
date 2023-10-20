import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { upCount } from "../utils/slices/user";
import { useContext } from "react";
import ThemeSelected from "../utils/ThemeSelected";
import { Link } from "react-router-dom";

const Home = () => {
  const userStore = useSelector((store) => store.User);

  const { theme, setTheme } = useContext(ThemeSelected);
  console.log(theme);

  console.log(userStore);
  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <div className="max-w-6xl flex flex-col justify-center items-center text-left gap-4 w-fit">
        <div className="text-gray-900 font-bold text-5xl leading-[2.5rem] tracking-normal font-founder w-full">
          Hi there,
        </div>
        <p className="text-indigo-600 font-semibold text-6xl tracking-normal font-founder w-full">
          {userStore.user.name}
        </p>
        <div className="text-gray-900 font-bold text-2xl leading-[1rem] tracking-normal font-founder w-full">
          How are you doing today.
        </div>
      </div>

      <div className="w-full max-w-xl flex flex-col gap-6">
        <p className="text-xl text-gray-900 font-bold">Create Profile : </p>
        <div className="flex w-full gap-4 flex-col sm:flex-row">
          <Link to={"/form"} className="w-full">
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-8 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                setTheme(1);
              }}
            >
              Template : 1
            </button>
          </Link>
          <Link to="/form" className="w-full">
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-8 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                setTheme(2);
              }}
            >
              Template : 2
            </button>
          </Link>
        </div>

        <div>
          <button className="flex w-full justify-center rounded-md bg-[#f0d7d7] px-3 py-8 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link to="/profiles" className="text-gray-900 font-bold text-lg">
              Show Previous Profiles
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
