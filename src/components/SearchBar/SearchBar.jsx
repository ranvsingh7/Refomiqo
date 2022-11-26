import React from "react";

import "./SearchBar.scss";

import search_logo from "../../assets/Images/Combined Shape.png";

const SearchBar = () => {
  return (
    <div className="search_bar">
      <img src={search_logo} className="search_logo" alt="" />
      <input type="text" name="search_bar" />

      <div className="profile_btn">
        <img src={search_logo} alt="" />
        <img src={search_logo} alt="" />
        <img src={search_logo} alt="" />
      </div>
    </div>

    
  );
};

export default SearchBar;
