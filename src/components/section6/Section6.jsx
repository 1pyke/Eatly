import React, { useRef } from "react";
import Section6Image from "../../images/Section6.png";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineComment,
  AiTwotoneMail,
} from "react-icons/ai";
import { IconButton } from "@material-tailwind/react";
import Slider from "react-slick";
import styles from "./sectoin6.module.css";

const Section3 = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const comments = [
    {
      comment:
        "Eatly really helps me to maintain food intake, is perfect for those of you who want to diet or just make the body more healthy. In addition, Eatly helped me create a menu that is suitable for the family.",
      commentAuthor: "Rara Sanchez",
      authorJob: "Freelancer",
    },
    {
      comment:
        "I've been using Eatly for a month now, and it has completely transformed my eating habits. The personalized meal plans and recipes have made it easy for me to stay on track and make healthier choices. Highly recommended!",
      commentAuthor: "John Doe",
      authorJob: "Fitness Trainer",
    },
  ];
  return (
    <div id="aboutUs" className="flex mt-24">
      <div
        className={`flex-1 w-full drop-shadow-2xl mr-20 ${styles.imageContainer}`}
      >
        <img
          src={Section6Image}
          className="bg-cover rounded-t-full"
          alt="Logo"
        />
      </div>
      <div className="flex-1 w-full ">
        <div className="justify-start flex pl-6 mb-7">
          <div
            className={`justify-center flex rounded-2xl mr-5 items-center w-16 h-16 border border-gray-200 ${styles.aboutUsIcon}`}
          >
            <AiTwotoneMail color="#f4ce6b" size={35} />
          </div>
          <div
            className={`flex items-center font-bold text-5xl ${styles.aboutText}`}
          >
            Testimonials About Us
          </div>
        </div>
        <h2 className="pl-6 text-2xl text-gray-500 opacity-95">
          In the smallest case we always give your best, find
          <br /> out what other users have ti say about us
        </h2>
        <div className="h-[600px] justify-center flex flex-col">
          <div
            className={`border border-gray-200 pt-16 pb-12 px-8 rounded-[40px] text-start relative shadow-xl ${styles.containerComments}`}
          >
            <div
              className={`justify-center flex rounded-2xl mr-5 items-center w-16 h-16 border border-gray-200 absolute -top-7 ${styles.aboutUsIcon}`}
            >
              <AiOutlineComment color={"#f9f1fe"} size={35} />
            </div>
            <Slider
              style={{
                height: "240px",
                width: "700px",
                zIndex: 2,
              }}
              ref={sliderRef}
              {...settings}
            >
              {comments.map((comment, i) => (
                <div key={i}>
                  <div className="w-full">
                    <p
                      className={`text-xl font-bold mb-4 opacity-90 ${styles.commentText}`}
                    >
                      {comment.comment}
                    </p>
                    <div className="flex flex-col">
                      <h1
                        className={`text-2xl font-bold ${styles.commentAuthor}`}
                      >
                        {comment.commentAuthor}
                      </h1>
                      <h2
                        className={`text-2xl mb-6 font-bold  opacity-90 ${styles.commentText}`}
                      >
                        {comment.authorJob}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="flex justify-end ">
              <IconButton
                size="lg"
                color="purple"
                className="rounded-full mr-5"
                style={{ backgroundColor: "#fef7ff" }}
                onClick={previous} // make the button disabled if there is no previous slide
              >
                <AiFillCaretLeft color="#9a6ceb" size={"xl"} />
              </IconButton>
              <IconButton
                size="lg"
                color="purple"
                className="rounded-full"
                style={{ backgroundColor: "#fef7ff" }}
                onClick={next} // make the button disabled if there is no next slide
              >
                <AiFillCaretRight color="#9a6ceb" size={"xl"} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
