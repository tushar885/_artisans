import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import ThemeSelected from "../utils/ThemeSelected";
import { Link } from "react-router-dom";
import store from "../utils/store";
import { GET_ALL_TEMPLATES } from "../utils/constants";
import { populate_allTemplates } from "../utils/slices/admin";

const Home = () => {
  const userStore = useSelector((store) => store.User);
  const { allTemplates } = useSelector((store) => store.Admin);
  const dispatch = useDispatch();
  const { theme, setTheme } = useContext(ThemeSelected);

  async function get_allTemplates() {
    const resBody = await fetch(GET_ALL_TEMPLATES, {
      method: "GET",
      headers: {
        authorization: `bearer ${userStore.jwtToken}`,
      },
    });

    const resData = await resBody.json();
    console.log(resBody);
    console.log(resData);
    if (resBody.ok) {
      return resData;
    } else {
      return new Error("Error");
    }
  }

  useEffect(() => {
    get_allTemplates()
      .then((data) => {
        dispatch(populate_allTemplates(data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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

      <div className="w-full max-w-xl flex flex-col gap-6 ">
        <p className="text-xl text-gray-900 font-bold">Create Profile : </p>
        <div className="flex w-full gap-4 flex-col sm:flex-row flex-wrap ">
          {allTemplates.map((temp) => {
            console.log(temp);
            return (
              <Link to={"/form"} key={temp._id}>
                <div className="border-2 p-1 border-indigo-600 rounded-lg">
                  <img
                    src={temp.previewImageUrl}
                    alt={temp.theme_id}
                    className="w-24 h-auto rounded-lg"
                    onClick={() => {
                      setTheme(temp.theme_id);
                    }}
                  />
                </div>
              </Link>
            );
          })}
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
