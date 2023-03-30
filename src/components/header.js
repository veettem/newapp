import React from "react";
import { purgeTokens } from "../services/auth";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const logOutHandler = (e) => {
    e.preventDefault();
    purgeTokens();
    history.push("/login");
  };
  return (
    <>
      <header className="flex items-center justify-between h-12 bg-blue-800	px-4">
        <h3 className="text-white">LOGO</h3>
        <div className="text-white cursor-pointer" onClick={logOutHandler}>
          Log Out
        </div>
      </header>
    </>
  );
};

export default Header;
