import React from "react";
import { ImFlag } from "react-icons/im";
import ReusableButton from "../reusableComponents/ReusableButton";
import styles from "./section4.module.css";

const Section4 = () => {
  return (
    <div className={`mt-24 p-6 rounded-[60px] shadow-xl ${styles.border}`}>
      <div
        className={`flex flex-col justify-center items-center h-[480px] rounded-[40px] ${styles.box}`}
      >
        <div
          className={`justify-center flex rounded-2xl mr-5 items-center w-16 h-16 border border-gray-400 mb-6 ${styles.iconBox}`}
        >
          <ImFlag color="#f4ce6b" size={35} />
        </div>
        <h1 className="text-5xl text-white font-bold mb-6">
          Get Started With <span className={styles.span}>Eatly</span>
        </h1>
        <h2 className="pl-6 text-3xl text-gray-300 text-center opacity-95 mb-8">
          Discover tips & news for your health from experts <br /> and get the
          best discounts by getting started
        </h2>
        <ReusableButton
          text={"Get Started"}
          size={"lg"}
          event={() => {
            console.log("Get Started");
          }}
        />
      </div>
    </div>
  );
};

export default Section4;
