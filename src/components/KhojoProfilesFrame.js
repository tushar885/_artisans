import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { BASE_URL, TEMPLATE_1, TEMPLATE_2 } from "../utils/constants";
// import TEMPLATE_1 from "../../template_1.html";
import { useRef, useEffect } from "react";
import axios from "axios";

const KhojoProfilesFrame = ({ user }) => {
  const { jwtToken } = useSelector((store) => store.User);
  const [originalHTML, setOriginalHTML] = useState(null);
  console.log(originalHTML);

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
  console.log(user);

  const iframeRef = useRef(null);

  // async function getTemplate() {
  //   const resBody = await fetch(template.cloudinaryLink, {
  //     method: "GET",
  //     headers: {
  //       authorization: `bearer ${jwtToken}`,
  //     },
  //     mode: 'cors',
  //   });
  //   const resData = await resBody.json();
  //   console.log(resBody);
  //   console.log(resData);

  //   // const resBody = axios.get()
  // }

  useEffect(() => {
    async function getTemplate() {
      const cloudinaryLink = template.cloudinaryLink.replace(
        "http://res.cloudinary.com",
        ""
      );
      console.log(`${BASE_URL}cloudinary` + cloudinaryLink);
      const resBody = await axios.get(
        `${BASE_URL}cloudinary` + cloudinaryLink,
        {
          // method: "GET",
          headers: {
            authorization: `bearer ${jwtToken}`,
          },
          mode: "cors",
        }
      );
      // const resData = await resBody.json();
      // console.log(resBody);
      if (resBody.status === 200) {
        setOriginalHTML(resBody.data);
      } else new Error("NOT Found");
    }

    getTemplate();
  }, [user, jwtToken]);

  useEffect(() => {
    // Function to remove double quotes and update iframe content
    const updateIframeContent = () => {
      const iframe = iframeRef.current;
      let cleanedHtmlString;
      if (iframe) {
        // if (user.theme_id === "template_1") {
        cleanedHtmlString = originalHTML
          .replaceAll("{{name}}", profile1.name)
          .replaceAll("{{businessAddress}}", profile1.businessAddress)
          .replaceAll("{{businessDetails}}", profile1.businessDetails)
          .replaceAll("{{businessName}}", profile1.businessName)
          .replaceAll("{{pfp}}", profile1.pfp)
          .replaceAll("{{instagram}}", profile1.socialLinks.instagram)
          .replaceAll("{{twitter}}", profile1.socialLinks.twitter)
          .replaceAll("{{facebook}}", profile1.socialLinks.facebook);
        // .replace(/"/g, "");
        // } else if (user.theme_id === "template_2") {
        //   cleanedHtmlString = TEMPLATE_2.replaceAll("{{name}}", profile1.name)
        //     .replaceAll("{{businessAddress}}", profile1.businessAddress)
        //     .replaceAll("{{businessDetails}}", profile1.businessDetails)
        //     .replaceAll("{{businessName}}", profile1.businessName)
        //     .replaceAll("{{pfp}}", profile1.pfp)
        //     .replaceAll("{{instagram}}", profile1.socialLinks.instagram)
        //     .replaceAll("{{twitter}}", profile1.socialLinks.twitter)
        //     .replaceAll("{{facebook}}", profile1.socialLinks.facebook);
        //   // .replace(/"/g, "");
        // }

        // console.log(cleanedHtmlString);

        iframe.contentDocument.open();
        iframe.contentDocument.write(cleanedHtmlString);
        iframe.contentDocument.close();
      }
    };

    // Call the function to remove double quotes when the component mounts
    updateIframeContent();
  }, [originalHTML]);

  if (!user.theme_id) return;

  // if (originalHTML === null) return;

  if (originalHTML === null) return <div></div>;
  return (
    <div className="flex flex-wrap justify-center py-4 pt-0">
      <iframe
        width={"450px"}
        height={"650px"}
        ref={iframeRef}
        className="rounded-lg"
      >
        {}
      </iframe>
    </div>
  );
};

export default KhojoProfilesFrame;
