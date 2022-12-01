import React from "react";

import item from "../../assets/Images/bxs-cube.png";
import "./Btn_sidebar.scss";

import { useSelector, useDispatch } from 'react-redux';
import { on, off } from '../Dropdown/dropdownSlice'

const Btn_sidebar = ({ name, img, arrow }) => {

  const isActive = useSelector((state) =>state.dropdownBtn.isActive)
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(off())
  }
  return (
    <div className="sidebar_btn_container" onClick={handleClick}>
      <div className="sidebar_btn">
        <img src={img} className="sidebar_btn_icon" alt="sidebar_btn" />
        <span>
          {name} <span>{arrow}</span>
        </span>
      </div>
      <div className="btn_right_border"></div>
    </div>
  );
};

export default Btn_sidebar;
