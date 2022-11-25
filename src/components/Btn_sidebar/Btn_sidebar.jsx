import React from "react";

import item from "../../assets/Images/bxs-cube.png";
import "./Btn_sidebar.scss";

const Btn_sidebar = ({ name, img, arrow }) => {
  return (
    <div className="dashborad_btn">
        <img src={item} alt="dashboard_btn" />
        <span>
          {name} <span>{arrow}</span>
        </span>
    </div>
  );
};

export default Btn_sidebar;
