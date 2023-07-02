import React from "react";
import Section1Image from "../../images/EatingEtiquette.jpg";
import ReusableButton from "../reusableComponents/ReusableButton";
import { IconButton } from "@material-tailwind/react";
import { AiFillCaretRight } from "react-icons/ai";
import styles from "./section1.module.css";

const Section1 = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="flex mt-12 pl-32 pr-32 relative">
      {/* Left Section */}
      <div className={`h-full flex-1 flex-wrap ${styles.typewriter}`}>
        <h1 className="text-white text-9xl font-bold relative">
          Changing
          <br />
          your{" "}
          {/* i was unable to achieve the desired effect using div outside the h1 so i placeed the div element inside the h1 element
           for this specific use case While it's not ideal from a semantic perspective, it can be a workaround to achieve the desired
           visual effect*/}
          {/* Dropping Text Animation */}
          <div className={styles.droppingTexts}>
            <div>Eating</div>
            <div>Lifestyle</div>
            <div>Sleeping</div>
          </div>
          <br />
          habits
        </h1>
        <h3 className="text-gray-300 text-4xl mt-8 opacity-95">
          Always take care of your health starting from the food menu that you
          consume every day
        </h3>
        {/* Buttons */}
        <div className="flex justify-start mt-14">
          <div className="mr-14">
            <ReusableButton
              text="Explore Menu"
              size="lg"
              event={handleButtonClick}
            />
          </div>
          <div className="flex items-center">
            <IconButton
              size="lg"
              color="amber"
              className={`rounded-full ${styles.iconButton}`}
            >
              <AiFillCaretRight color="#fdb90e" size="xl" />
            </IconButton>
            <h2 className="ml-4 text-gray-300 text-xl">Watch Video</h2>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 h-full relative top-40">
        <img
          src={Section1Image}
          className="bg-cover rounded-t-full"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Section1;
