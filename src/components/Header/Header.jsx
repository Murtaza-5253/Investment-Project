import React from "react";
import classes from "./Header.module.css";
import logo from '../../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
