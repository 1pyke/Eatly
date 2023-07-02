import React, { useState } from "react";
import styles from "./Section3.module.css";

const Section3Cards = ({ benfit }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => {
        setSelected(!selected);
      }}
      className={`border border-gray-200 pt-16 pb-12 px-8 rounded-[40px] text-start relative shadow-xl ${
        selected ? "bg-white" : styles.selectedCardBackground
      }`}
    >
      <div
        className={`justify-center flex rounded-2xl mr-5 items-center w-16 h-16 border border-gray-200 absolute -top-7 ${
          selected ? styles.selectedCardIcon : styles.cardIconColor
        }`}
      >
        {benfit.icon ? (
          <benfit.icon color={selected ? "white" : "#f4ce6b"} size={35} />
        ) : null}
      </div>
      <h1
        className={`text-3xl font-bold mb-4 ${
          selected ? styles.selectedCardText : styles.cardText
        }`}
      >
        {benfit.title}
      </h1>
      <h1 className={`text-2xl mb-6 ${styles.benfit}`}>{benfit.description}</h1>
    </div>
  );
};

export default Section3Cards;
