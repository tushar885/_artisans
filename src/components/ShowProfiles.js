import React, { useState } from "react";
import { useSelector } from "react-redux";
import KhojoProfilesFrame from "./KhojoProfilesFrame";

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
    <div className="flex flex-wrap gap-2 justify-center items-center">
      {userStore.user.khojoUserProfiles.map((profile) => {
        return <KhojoProfilesFrame user={profile} key={profile._id} />;
      })}
    </div>
  );
};

export default ShowProfiles;
