import React from "react";
import HealthLogo from "../../images/logo1.png";
import EatingLogo from "../../images/logo2.png";

const LogoSection1 = () => {
  return (
    <div className="h-[100px] flex items-center my-16">
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
