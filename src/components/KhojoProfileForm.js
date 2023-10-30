import React, { useContext, useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Formik, ErrorMessage } from "formik";
import { CREATE_USER, DISTRICTS, OCCUPATIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import axios from "axios";
import { updateKhojoProfile } from "../utils/slices/user";
import { useNavigate } from "react-router-dom";
import ThemeSelected from "../utils/ThemeSelected";

const KhojoProfileForm = () => {
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const userStore = useSelector((store) => store.User);
  const dispatch = useDispatch();

  const { theme, setTheme } = useContext(ThemeSelected);
  console.log(theme);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (theme === null) navigate("/");

    return () => {
      setTheme(null);
    };
  }, []);

  return (
    <Formik
      initialValues={{
        pfp: null,
        name: "",
        businessName: "",
        businessAddress: "",
        businessDetails: "",
        district: DISTRICTS[0],
        instagram: "",
        twitter: "",
        facebook: "",
        occupation: OCCUPATIONS[0],
        age: 0,
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const reqBody = new FormData();
        reqBody.append("pfp", values.pfp);
        reqBody.append("name", values.name);
        reqBody.append("businessName", values.businessName);
        reqBody.append("businessDetails", values.businessDetails);
        reqBody.append("businessAddress", values.businessAddress);
        reqBody.append("district", values.district);
        reqBody.append("instagram", values.instagram);
        reqBody.append("twitter", values.twitter);
        reqBody.append("facebook", values.facebook);
        reqBody.append("theme_id", theme);
        reqBody.append("age", values.age);
        reqBody.append("occupation", values.occupation);

        try {
          const response = await axios.post(CREATE_USER, reqBody, {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: `bearer ${userStore.jwtToken}`,
            },
          });
          setSubmitting(false);
          resetForm();
          setImage(null);
          console.log(response.data);

          if (response.status === 201) {
            dispatch(
              updateKhojoProfile(
                response.data.userWithProfiles.khojoUserProfiles
              )
            );

            navigate("/profiles");
          }
        } catch (error) {
          resetForm();
          setImage(null);
          setError(error.message);
        }
      }}
    >
      {(formik) => {
        return (
          <div
            className={`flex justify-center ${
              formik.isSubmitting ? "opacity-50" : ""
            }`}
          >
            <form
              className="max-w-5xl"
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
            >
              {error !== null ? (
                <div className="flex justify-between my-4  border  border-red-700 rounded-md py-4 px-4">
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
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 ">
                    <div className="flex gap-4 justify-between items-center min-h-fit ">
                      <div>
                        <label
                          htmlFor="pfp"
                          className="block text-sm font-medium leading-6 text-gray-900 self-start mb-4"
                        >
                          Profile Photo
                        </label>
                        <input
                          style={{
                            display: "none",
                          }}
                          type="file"
                          id="pfp"
                          name="pfp"
                          accept="image/*"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "pfp",
                              event.currentTarget.files[0]
                            );
                            const reader = new FileReader();
                            reader.readAsDataURL(event.currentTarget.files[0]);
                            reader.onload = (evt) => {
                              setImage(reader.result);
                            };
                          }}
                        />
                        <label
                          htmlFor="pfp"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Upload Image
                        </label>
                      </div>

                      {image && (
                        <div>
                          <img
                            src={image}
                            alt="Uploaded"
                            style={{
                              maxWidth: "10rem",
                              maxHeight: "auto",
                              display: "block",
                              margin: "0 auto",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          {...formik.getFieldProps("name")}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Business Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="businessName"
                          id="businessName"
                          {...formik.getFieldProps("businessName")}
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="businessAddress"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Business Address
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="businessAddress"
                          name="businessAddress"
                          rows={3}
                          {...formik.getFieldProps("businessAddress")}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Enter your full office address here.
                      </p>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="businessDetails"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Business Details
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="businessDetails"
                          name="businessDetails"
                          rows={3}
                          {...formik.getFieldProps("businessDetails")}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Age
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="age"
                          id="age"
                          min="0"
                          max="150"
                          {...formik.getFieldProps("age")}
                          className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="district"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Districts
                      </label>
                      <div className="mt-2">
                        <select
                          id="district"
                          name="district"
                          {...formik.getFieldProps("district")}
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          {DISTRICTS.map((district) => (
                            <option>{district}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="occupation"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Occupation
                      </label>
                      <div className="mt-2">
                        <select
                          id="occupation"
                          name="occupation"
                          {...formik.getFieldProps("occupation")}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          {OCCUPATIONS.map((occupation) => (
                            <option>{occupation}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="instagram"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Instagram
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...formik.getFieldProps("instagram")}
                          name="instagram"
                          id="instagram"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="facebook"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Facebook
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="facebook"
                          id="facebook"
                          {...formik.getFieldProps("facebook")}
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="twitter"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Twitter
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="twitter"
                          id="twitter"
                          {...formik.getFieldProps("twitter")}
                          autoComplete="postal-code"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default KhojoProfileForm;
