import React from "react";
import Section3Image from "../../images/Section3Image.png";
import { IoDiamond } from "react-icons/io5";
import Section3Cards from "./Section3Cards";
import styels from "./Section3.module.css";

const Section3 = () => {
  const benfits = [
    {
      icon: "",
      title: "Becomes Healthier ",
      description: "immune will\nstronger if the body is Healthier",
    },
    {
      icon: "",
      title: "Increase Energy",
      description: "Have enough energy can help carry out a routine",
    },
    {
      icon: "",
      title: "Controlling Weight",
      description: "Body will feel lighter and will not be easily tired",
    },
    {
      icon: "",
      title: "Becomes Happier",
      description: "Living a healthy life aslo increase self-confidence",
    },
  ];
  return (
    <div id="news" className="flex mt-24">
      <div className={`flex-1 drop-shadow-2xl `}>
        <img
          src={Section3Image}
          className={`bg-cover rounded-t-full ${styels.imageShadow}`}
          alt="Logo"
        />
      </div>
      <div className="flex-1 w-full">
        <div className="justify-start flex pl-6 mb-7">
          <div
            className={`justify-center flex rounded-2xl mr-5 items-center w-16 h-16 border border-gray-200 ${styels.card}`}
          >
            <IoDiamond color="#f4ce6b" size={35} />
          </div>
          <div
            style={{ color: "#6d539d" }}
            className={`flex items-center font-bold text-5xl ${styels.boxText}`}
          >
            Our Value To Help You
          </div>
        </div>
        <h2 className="pl-6 text-2xl text-gray-500 opacity-95">
          We always want to provide the best value for you
          <br /> and your health, join us to maximize the benefits
        </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-20 grid-rows-2 mt-24 flex-wrap ">
          {benfits.map((benfit, i) => (
            <Section3Cards key={i} benfit={benfit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
