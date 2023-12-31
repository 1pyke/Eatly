import React from "react";
import logoImage from "../../images/Logo.png";
import ReusableButton from "../reusableComponents/ReusableButton";
import styles from "./mainHeader.module.css";
import { Link } from "react-scroll";

// MainHeader component represents the header section of the website
const MainHeader = () => {
  const navDetails = [
    { label: "Programs", to: "programs" },
    { label: "Services", to: "services" },
    { label: "News", to: "news" },
    { label: "About Us", to: "aboutUs" },
  ];

  // Event handler for the "Let's Talk" button
  const handleButtonClick = () => {
    console.log("Let's Talk");
  };
  return (
    // Use a semantic <header> element to represent the header section
    <header className="mt-4 bg-transparent">
      <nav className="flex justify-between h-[80px] z-10">
        <div className="w-80 flex items-center justify-center">
          {/* Use an <img> tag for the logo */}
          <img src={logoImage} className="bg-cover max-h-[70px]" alt="Logo" />
          {/* Apply scoped CSS class for the header text */}
          <h1 className={`text-3xl font-bold ${styles.mainHeaderLogo}`}>
            Eatly
          </h1>
        </div>

        <div className="flex flex-1 items-center justify-center mr-[-24px]">
          {/* Map over navigation details and generate links */}
          {navDetails.map((link, index) => (
            <Link
              offset={-40}
              spy={true}
              smooth={true}
              to={link.to}
              key={index}
              className="relative cursor-pointer flex items-center h-full mr-16 text-gray-300 hover:text-gray-400 text-xl transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="w-80 flex items-center justify-center">
          {/* ReusableButton component with appropriate props */}
          <ReusableButton
            text="Let's Talk"
            size="lg"
            event={handleButtonClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
