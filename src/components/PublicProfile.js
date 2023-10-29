import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KhojoProfilesFrame from "./KhojoProfilesFrame";
import { GET_KHOJOPROFILE_BY_ID } from "../utils/constants";

const PublicProfile = () => {
  const { profile_id } = useParams();
  const [profile, setProfile] = useState(null);
  const [err, setErr] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function getProfile() {
      const resBody = await fetch(`${GET_KHOJOPROFILE_BY_ID}${profile_id}`, {
        method: "GET",
      });

      const resData = await resBody.json();
      if (resBody.ok) {
        setProfile(resData);
      } else {
        setErr(resData.message);
        setStatus(resBody.status);
      }
      console.log(resBody);
    }

    getProfile();
  }, []);

  if (err !== null)
    return (
      <div className="flex justify-center items-center min-h-screen flex-col gap-2">
        <p className="text-red-700 text-6xl sm:text-8xl font-semibold font-fira">
          {status}
        </p>
        <p className="text-red-700  text-3xl sm:text-5xl font-semibold font-founder">
          {err}
        </p>
      </div>
    );
  if (profile === null) return <div></div>;

  return (
    <div className="min-h-screen flex items-center justify-center py-4">
      <KhojoProfilesFrame user={profile} />
    </div>
  );
};

export default PublicProfile;
