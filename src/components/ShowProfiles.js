import React, { useState } from "react";
import { useSelector } from "react-redux";
import KhojoProfilesFrame from "./KhojoProfilesFrame";

const ShowProfiles = () => {
  const userStore = useSelector((store) => store.User);
  console.log(userStore);
  //   const profile1 = userStore.user.khojoUserProfiles[0];
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
        return <KhojoProfilesFrame user={profile} />;
      })}
    </div>
  );
};

export default ShowProfiles;
