import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <Link style={{ marginRight: "20px", fontSize: "23px" }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: "20px", fontSize: "23px" }} to="/users">
          Users
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
