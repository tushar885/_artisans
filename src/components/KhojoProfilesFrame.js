import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { TEMPLATE_1, TEMPLATE_2 } from "../utils/constants";
// import TEMPLATE_1 from "../../template_1.html";
import { useRef, useEffect } from "react";

const KhojoProfilesFrame = ({ user }) => {
  // const userStore = useSelector((store) => store.User);
  // console.log(userStore);
  const profile1 = user;
  console.log(user);

  const iframeRef = useRef(null);

  useEffect(() => {
    // Function to remove double quotes and update iframe content
    const updateIframeContent = () => {
      const iframe = iframeRef.current;
      let cleanedHtmlString;
      if (iframe) {
        if (user.theme_id === "1") {
          cleanedHtmlString = TEMPLATE_1.replaceAll("{{name}}", profile1.name)
            .replaceAll("{{businessAddress}}", profile1.businessAddress)
            .replaceAll("{{businessDetails}}", profile1.businessDetails)
            .replaceAll("{{businessName}}", profile1.businessName)
            .replaceAll("{{pfp}}", profile1.pfp)
            .replaceAll("{{instagram}}", profile1.socialLinks.instagram)
            .replaceAll("{{twitter}}", profile1.socialLinks.twitter)
            .replaceAll("{{facebook}}", profile1.socialLinks.facebook);
          // .replace(/"/g, "");
        } else if (user.theme_id === "2") {
          cleanedHtmlString = TEMPLATE_2.replaceAll("{{name}}", profile1.name)
            .replaceAll("{{businessAddress}}", profile1.businessAddress)
            .replaceAll("{{businessDetails}}", profile1.businessDetails)
            .replaceAll("{{businessName}}", profile1.businessName)
            .replaceAll("{{pfp}}", profile1.pfp)
            .replaceAll("{{instagram}}", profile1.socialLinks.instagram)
            .replaceAll("{{twitter}}", profile1.socialLinks.twitter)
            .replaceAll("{{facebook}}", profile1.socialLinks.facebook);
          // .replace(/"/g, "");
        }

        // console.log(cleanedHtmlString);

        iframe.contentDocument.open();
        iframe.contentDocument.write(cleanedHtmlString);
        iframe.contentDocument.close();
      }
    };

    // Call the function to remove double quotes when the component mounts
    updateIframeContent();
  }, []);

  if (!user.theme_id) return;

  return (
    <div className="flex flex-wrap justify-center py-4 pt-0">
      <iframe
        width={"450px"}
        height={"650px"}
        ref={iframeRef}
        className="rounded-lg border border-2px border-black"
      >
        {}
      </iframe>
    </div>
  );
};

export default KhojoProfilesFrame;
