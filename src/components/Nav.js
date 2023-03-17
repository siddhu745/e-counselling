import React from "react";
import logo from "../images/logo.png";
import {SearchOutlined} from "@ant-design/icons";

const Nav = () => {
  const handleSearch = () => {
    console.log("search clicked..");
  };

  return (
    <div className="navbar">
      <img className="navImage" src={logo} />

      <ul className="navlist">
        <li>Online Therapy</li>
        <li>Blog</li>
        <li>Find Therapists</li>
        <li>
          <SearchOutlined className="searchIcon"
            style={{ fontSize: 30, color: 'black' }}
            onClick={handleSearch}
          />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
