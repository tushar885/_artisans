import React from "react";

const DashboardaTableItem = ({ name, email, khojoUserProfiles }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap border-r-2">{name}</td>
      <td className="px-6 py-4 whitespace-nowrap border-r-2">{email}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {khojoUserProfiles.length > 0
          ? khojoUserProfiles?.[0]?.district
          : "Unspecified"}
      </td>
    </tr>
  );
};

export default DashboardaTableItem;
