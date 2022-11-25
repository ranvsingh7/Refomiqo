import React, { useState } from "react";

import item from "../../assets/Images/bxs-cube.png";
import "./Dropdown_btn.scss";

import { GoPrimitiveDot } from "react-icons/go";

const Dropdown_btn = ({ name, img, arrow, dropdown_items }) => {
  const [isActive, setIsActive] = useState(false);

 
  return (
    <>
      <div className="dropdown_title" onClick={()=> setIsActive(!isActive)}>
        <img src={item} alt="dashboard_btn" />
        <span>
          {name} <span>{arrow}</span>
        </span>
      </div>
      {isActive && (
        <div className="dropdown_content">
          {dropdown_items.map((item) => {
            return (
              <div key={item} className="dropdown_item">
                {" "}
                • {item}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Dropdown_btn;
