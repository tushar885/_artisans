import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [time, setTime] = useState(5000);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
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

  if (!isAdmin) {
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
      <p className="text-indigo-600 font-bold text-5xl tracking-normal font-Josefin text-center w-full sm:text-left">
        Dashboard
      </p>
    </div>
  );
};

export default Admin;
