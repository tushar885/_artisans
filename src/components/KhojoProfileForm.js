import React, { useContext, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Formik, ErrorMessage } from "formik";
import { CREATE_USER, DISTRICTS } from "../utils/constants";
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
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log(values);

        // const boundary = "YOUR_UNIQUE_BOUNDARY_STRING";

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

        // console.log(imagePfp);

        // const reqBody = {
        //   name: values.name,
        //   pfp: imagePfp,
        //   businessName: values.businessName,
        //   businessAddress: values.businessAddress,
        //   businessDetails: values.businessDetails,
        //   district: values.district,
        //   socialLinks: {
        //     instagram: values.instagram,
        //     twitter: values.twitter,
        //     facebook: values.facebook,
        //   },
        // };

        console.log(reqBody);
        try {
          const response = await axios.post(CREATE_USER, reqBody, {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: `bearer ${userStore.jwtToken}`,
            },
          });
          console.log(response);
          setSubmitting(false);
          resetForm();

          if (response.status === 201) {
            dispatch(
              updateKhojoProfile(
                response.data.userWithProfiles.khojoUserProfiles
              )
            );

            navigate("/");
          }
        } catch (error) {
          console.error(error);
        }

        // const resBody = await fetch(CREATE_USER, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": `multipart/form-data; boundary=${boundary}`,
        //     authorization: `bearer ${userStore.jwtToken}`,
        //   },
        //   body: reqBody,
        // });

        // const resData = await resBody.json();
        // console.log(resBody);
        // console.log(resData);
      }}
    >
      {(formik) => {
        return (
          <div className="flex justify-center">
            <form
              className="max-w-5xl"
              onSubmit={formik.handleSubmit}
              // action={}
              // enctype="multipart/form-data"
              // action={CREATE_USER}
              // method="POST"
              // enctype="multipart/form-data"
              encType="multipart/form-data"
            >
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
                          // type="file"
                          // id="pfp"
                          // name="pfp"
                          // accept="image/*"
                          style={{
                            display: "none",
                          }}
                          // onChange={(e) => {
                          //   formik.setFieldValue(
                          //     "pfp",
                          //     e.currentTarget.files[0]
                          //   );

                          //   // const formData = new FormData();
                          //   // formData.append('file', e.currentTarget.files[0]);

                          //   // formik.setFieldValue("pfp", reader.result);
                          //   const reader = new FileReader();
                          //   reader.readAsDataURL(e.currentTarget.files[0]);
                          //   reader.onload = (evt) => {
                          //     setImage(reader.result);
                          //   };
                          // }}

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
