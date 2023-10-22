import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../utils/store";
import DashboardaTableItem from "./DashboardaTableItem";
import { GET_ALL_USERS } from "../utils/constants";
import { populate_allUsers } from "../utils/slices/admin";
import axios from "axios";
import { UPLOAD_TEMPLATE } from "../utils/constants";

const Admin = () => {
  // const [isAdmin, setIsAdmin] = useState(false);
  const { user, jwtToken } = useSelector((store) => store.User);
  const { allUsers } = useSelector((store) => store.Admin);
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [themeId, setThemeId] = useState("");

  const [selectedFile, setFile] = useState(null);

  // const {user} = userStore;
  const [time, setTime] = useState(5000);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  async function submitHandler(e) {
    e.preventDefault();
    setSubmitting(true);
    const reqBody = new FormData();
    reqBody.append("template", selectedFile);
    reqBody.append("theme_id", themeId);

    try {
      const response = await axios.post(UPLOAD_TEMPLATE, reqBody, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `bearer ${jwtToken}`,
        },
      });
      console.log(response);
      // resetForm();
      // setImage(null);
      setSubmitting(false);

      if (response.status === 200) {
        // dispatch(
        //   updateKhojoProfile(
        //     response.data.userWithProfiles.khojoUserProfiles
        //   )
        // );
        // navigate("/profiles");
        setMessage("Template Successfully Uploaded.");
      } else {
        setMessage("Not Uploaded");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

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

  async function fetchAllUsersRequest() {
    try {
      if (!user.isAdmin) return;
      const resBody = await fetch(GET_ALL_USERS, {
        method: "GET",
        headers: {
          authorization: `bearer ${jwtToken}`,
        },
      });

      const resData = await resBody.json();

      console.log(resData);

      if (resBody.ok) {
        dispatch(populate_allUsers(resData));
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAllUsersRequest();
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
    <div className={`flex flex-col ${isSubmitting ? "opacity-50" : ""}`}>
      <p className="text-gray-900 font-bold text-5xl tracking-wider font-founder text-center w-full sm:text-left py-4">
        DASHBOARD
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-l min-w-fit font-bold text-indigo-600 uppercase tracking-normal border-b-2 border-r-2">
                Username
              </th>
              <th className="px-6 py-3 text-left text-l min-w-min font-bold text-indigo-600 uppercase tracking-normal border-b-2 border-r-2">
                E-mail
              </th>
              <th className="px-6 py-3 text-left text-l min-w-fit font-bold text-indigo-600 uppercase tracking-normal border-b-2 ">
                District
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 not-last:border-b-2">
            {allUsers.map((ele) => {
              return <DashboardaTableItem key={ele._id} {...ele} />;
            })}
          </tbody>
        </table>
      </div>

      <div>
        {error !== null ? (
          <div className="flex justify-between w-fit">
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
        {message !== null ? (
          <div className="flex justify-between w-fit">
            <p
              className="text-indigo-600
                 text-xl font-semibold font-founder"
            >
              {message}
            </p>
            <p
              className="text-indigo-600
                   text-xl font-bold font-founder hover:cursor-pointer"
              onClick={() => {
                setMessage(null);
              }}
            >
              ✔👌
            </p>
          </div>
        ) : null}
        <form onSubmit={submitHandler} encType="multipart/form-data">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            <div className="flex gap-4 justify-between items-center min-h-fit  ">
              <div>
                <div className="border-2 px-8 py-6 rounded-lg mb-4">
                  <label
                    htmlFor="template"
                    className="block text-lg font-medium leading-6 text-gray-900 self-start mb-4"
                  >
                    Upload Themes :
                  </label>
                  <input
                    style={{
                      display: "none",
                    }}
                    type="file"
                    id="template"
                    name="template"
                    accept=".html"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="template"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Select File (.html file)
                  </label>
                  <div className="mt-2">
                    <label
                      htmlFor="theme_id"
                      className="block text-lg font-semibold leading-6 text-gray-900"
                    >
                      Theme Id :
                    </label>
                    <div className="mt-2">
                      <input
                        value={themeId}
                        onChange={(e) => {
                          setThemeId(e.target.value);
                        }}
                        id="theme_id"
                        name="theme_id"
                        type="text"
                        autoComplete="theme_id"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-bold tracking-widest text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
