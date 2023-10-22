import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_IN_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { signIN } from "../../utils/slices/user";
import store from "../../utils/store";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector((store) => store.User);
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (userStore.user) navigate("/");
  }, []);

  // console.log(userStore);

  async function handleSignIn(e) {
    e.preventDefault();
    setSubmitting(true);
    const reqBody = {
      email,
      password,
    };

    const resBody = await fetch(SIGN_IN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const resData = await resBody.json();
    if (resBody.ok) {
      dispatch(
        signIN({ jwtToken: resData.token, user: resData.userWithProfiles })
      );
      navigate("/");
    } else {
      setEmail("");
      setPassword("");
      setSubmitting(false);
      setError(resData.message);
    }
    console.log(resData);
  }

  return (
    <div className={`${isSubmitting ? "opacity-50" : ""}`}>
      {" "}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {error !== null ? (
              <div className="flex justify-between">
                <p className="text-red-700 text-xl font-semibold font-founder">
                  {error}
                </p>
                <p
                  className="text-red-700 text-xl font-bold font-founder hover:cursor-pointer"
                  onClick={() => {
                    setError(null);
                  }}
                >
                  ❌
                </p>
              </div>
            ) : null}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have a account?{" "}
            <Link
              to={"/signup"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
