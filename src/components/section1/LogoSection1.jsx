import React from "react";
import HealthLogo from "../../images/logo1.png";
import EatingLogo from "../../images/logo2.png";
import styles from "./section1.module.css";
const LogoSection1 = () => {
  return (
    <div
      className={`${styles.logoBackground} h-[200px] flex items-center mb-16`}
    >
      <div className="flex">
        <img
          src={HealthLogo}
          className="bg-cover w-[220px] flex-1"
          alt="HealthLogo1"
        />
        <img
          src={EatingLogo}
          className="bg-cover w-[270px] flex-1"
          alt="EatingLogo"
        />
      </div>
    </div>
  );
};

export default LogoSection1;
