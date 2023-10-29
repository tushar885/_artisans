import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { BASE_URL, LOADER_GIF_URL } from "../utils/constants";
// import TEMPLATE_1 from "../../template_1.html";
import { useRef, useEffect } from "react";
import axios from "axios";

const KhojoProfilesFrame = ({ user = {} }) => {
  const [originalHTML, setOriginalHTML] = useState(null);

  const {
    name,
    businessAddress,
    businessDetails,
    businessName,
    pfp,
    socialLinks,
    template,
  } = user;

  const profile1 = user;

  const iframeRef = useRef(null);

  useEffect(() => {
    async function getTemplate() {
      const cloudinaryLink = template.cloudinaryLink.replace(
        "http://res.cloudinary.com",
        ""
      );
      const resBody = await axios.get(
        `${BASE_URL}cloudinary` + cloudinaryLink,
        {
          // headers: {
          //   authorization: `bearer ${jwtToken}`,
          // },
          mode: "cors",
        }
      );
      if (resBody.status === 200) {
        setOriginalHTML(resBody.data);
      } else new Error("NOT Found");
    }

    getTemplate();
  }, [user]);

  useEffect(() => {
    // Function to remove double quotes and update iframe content
    const updateIframeContent = () => {
      const iframe = iframeRef.current;
      let cleanedHtmlString;
      if (iframe) {
        cleanedHtmlString = originalHTML
          .replaceAll("{{name}}", profile1.name)
          .replaceAll("{{businessAddress}}", profile1.businessAddress)
          .replaceAll("{{businessDetails}}", profile1.businessDetails)
          .replaceAll("{{businessName}}", profile1.businessName)
          .replaceAll("{{pfp}}", profile1.pfp)
          .replaceAll("{{instagram}}", profile1.socialLinks.instagram)
          .replaceAll("{{twitter}}", profile1.socialLinks.twitter)
          .replaceAll("{{facebook}}", profile1.socialLinks.facebook);

        iframe.contentDocument.open();
        iframe.contentDocument.write(cleanedHtmlString);
        iframe.contentDocument.close();
      }
    };

    updateIframeContent();
  }, [originalHTML]);

  if (!user.theme_id) return;

  // if (originalHTML === null) return <div></div>;
  return (
    <div className="flex flex-wrap justify-center py-4 pt-0">
      {originalHTML ? (
        <iframe
          width={"450px"}
          height={"650px"}
          ref={iframeRef}
          className="rounded-lg"
        >
          {}
        </iframe>
      ) : (
        <img src={LOADER_GIF_URL} alt="loader_gif" className="w-24 h-auto" />
      )}
    </div>
  );
};

export default KhojoProfilesFrame;
