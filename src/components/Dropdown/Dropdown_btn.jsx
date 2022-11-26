import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import item from "../../assets/Images/bxs-cube.png";
import "./Dropdown_btn.scss";

import { GoPrimitiveDot } from "react-icons/go";

const Dropdown_btn = ({ name, img, arrow, dropdown_items }) => {
  const [isActive, setIsActive] = useState(false);

  function handleClick(event) {
    setIsActive(!isActive);
    event.target.querySelector("span").classList.toggle("down");
  }

  return (
    <>
      <div className="btn_container">
        <div className="dropdown_title" onClick={handleClick}>
          <img src={item} alt="dropdown_btn" />
          <span>
            {name} <span className="rotate">{arrow}</span>
          </span>
        </div>
      </div>
      {isActive && (
          <div className="dropdown_content">
            {dropdown_items.map((item) => {
              return (
                <div key={item} className="dropdown_item">
                  <span>• </span>
                  {item}
                </div>
              );
            })}
          </div>
        )}
    </>
  );
};

export default Dropdown_btn;
