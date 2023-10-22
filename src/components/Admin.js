import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../utils/store";

const Admin = () => {
  // const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useSelector((store) => store.User);
  console.log(user);
  // const {user} = userStore;
  const [time, setTime] = useState(5000);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAdmin) {
      const timer = setTimeout(() => {
        navigate("/");
      }, time);
      const interval = setInterval(() => {
        setTime((time) => time - 1000);
      }, 1000);

      return function () {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, []);

  if (!user.isAdmin) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-full px-8 gap-4">
        <p className="text-gray-900 font-bold text-2xl leading-[1.5rem] tracking-normal font-fira w-full text-center">
          You are not authorized to access this endpoint.
        </p>
        <p className="text-indigo-600 font-semibold text-xl tracking-normal font-founder text-center w-full">
          redirecting in {time / 1000} sec...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <p className="text-indigo-600 font-bold text-5xl tracking-normal font-founder text-center w-full sm:text-left">
        DASHBOARD
      </p>
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-stretch items-stretch">
          <div>
            <p>Username</p>
          </div>
          <div>
            <p>E-mail Address</p>
          </div>
          <div>
            <p>District</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
