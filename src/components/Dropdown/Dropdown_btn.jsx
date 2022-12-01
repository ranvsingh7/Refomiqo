import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { on, off } from './dropdownSlice'
import { active, notActive } from './subBtnSlice'
import { NavLink } from "react-router-dom";
import item from "../../assets/Images/bxs-cube.png";
import "./Dropdown_btn.scss";

const Dropdown_btn = ({ name, img, arrow, dropdown_items }) => {
  const isActive = useSelector((state) =>state.dropdownBtn.isActive)
  const dropdownActive = useSelector((state) =>state.subBtn.active)
  const dispatch = useDispatch()
  // console.log(dropdownActive)
  function handleClick(event) {
    dispatch(on())
    event.target.querySelector("span").classList.toggle("down");
    

  }

  const [prevId, setPrevId] = useState("");
  function handleActive(event) {
   
  }
  const [subButton,SetSubButton]=useState(false)
  function handleSubButtonClick(){
    // SetSubButton(true)
    dispatch(active())
    ('.dropdown_item').has( "#btn_container" ).toggleClass("active"); 
  }

 

  return (
    <>
      <div className={`btn_container `}>
        <div className="dropdown_title" onClick={handleClick}>
          <div className="dropdown_btn_icon">
            <img src={img} alt="dropdown_btn" />
          </div>
          <span>
            {name}{" "}
            <span className="rotate">
              <img
                src="./images/sidebar_icons/icon-arrow-right.svg"
                alt="arrow_right"
              />
            </span>
          </span>
        </div>
        <div className="btn_right_border"></div>
      </div>
      {isActive && (
        <div className="dropdown_content">
          {dropdown_items.map((item) => {
            return (
              <NavLink to={item.split(" ").join("")}>
                <div key={item} className="dropdown_item" onClick={handleSubButtonClick}>
                <div
                  className="dropdown_item_title"
                  id={item}
                  onClick={handleActive}>
                  <div className="bullet_box">
                  <div className="bullet_container">
                    <div className="bullet"></div>
                  </div>
                  </div>
                  {item}
                </div>
              </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Dropdown_btn;
