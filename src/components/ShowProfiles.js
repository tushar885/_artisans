import React, { useState } from "react";
import { useSelector } from "react-redux";
import KhojoProfilesFrame from "./KhojoProfilesFrame";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const ShowProfiles = () => {
  const userStore = useSelector((store) => store.User);

  if (userStore.user.khojoUserProfiles.length === 0) {
    return (
      <div>
        <p>NO PROFILES AVAILABLE </p>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center mb-4">
      {userStore.user.khojoUserProfiles.map((profile) => {
        return (
          <div key={profile._id}>
            <KhojoProfilesFrame user={profile} />
            <Link
              // target="_blank"
              to={`/profiles/${profile._id}`}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {" "}
              VIEW
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProfiles;
