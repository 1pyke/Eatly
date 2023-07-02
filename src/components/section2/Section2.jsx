import { Typography, IconButton } from "@material-tailwind/react";
import { useRef } from "react";
import { FaCrown } from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Slider from "react-slick";
import styles from "./carousel.module.css";

export default function Section2() {
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
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  const carouselData = [
    {
      icon: "",
      heading: "Healthy Recipe",
      description: "Healthier Recipes, from food & nutrition experts",
    },
    {
      icon: "",
      heading: "Healthy Meals",
      description: "Learn how to become a meal-planning pro",
    },
    {
      icon: "",
      heading: "Healthy Eating",
      description: "Eat healthy with our expert & inspiration tips",
    },
    {
      icon: "",
      heading: "Healthy Lifes",
      description: "Your life is your choice, make yourself healthier",
    },
    {
      icon: "",
      heading: "Healthy Recipe",
      description: "Healthier Recipes, from food & nutrition experts",
    },
    {
      icon: "",
      heading: "Healthy Meals",
      description: "Learn how to become a meal-planning pro",
    },
    {
      icon: "",
      heading: "Healthy Eating",
      description: "Eat healthy with our expert & inspiration tips",
    },
    {
      icon: "",
      heading: "Healthy Lifes",
      description: "Your life is your choice, make yourself healthier",
    },
  ];
  return (
    <>
      <div className={`relative mt-6 w-full mb-14 h-[120px] ${styles.card}`}>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <div className="flex p-4 justify-between">
            <div className="justify-center flex">
              <div
                className={`justify-center flex rounded-xl mr-5 items-center w-12 ${styles.cardIcon}`}
              >
                <FaCrown color="#fde199" size={35} />
              </div>
              <div
                style={{ color: "#7158a2" }}
                className="flex items-center font-bold text-2xl"
              >
                Our Best Progframs
              </div>
            </div>
            <div>
              <IconButton
                size="lg"
                color="purple"
                className={`rounded-full mr-5 ${styles.carouselButtons}`}
                onClick={previous} // make the button disabled if there is no previous slide
              >
                <AiFillCaretLeft color="#9a6ceb" size={"xl"} />
              </IconButton>
              <IconButton
                size="lg"
                color="purple"
                className={`rounded-full ${styles.carouselButtons}`}
                onClick={next} // make the button disabled if there is no next slide
              >
                <AiFillCaretRight color="#9a6ceb" size={"xl"} />
              </IconButton>
            </div>
          </div>
        </Typography>
      </div>
      <div className={styles.carouselContainer}>
        <Slider className={styles.sliderClass} ref={sliderRef} {...settings}>
          {carouselData.map((card, i) => (
            <div
              key={i}
              className={`flex mr-5 items-center h-full flex-col flex-1 ${styles.cardAnimation}`}
            >
              <div className="w-full flex justify-center items-center">
                <div
                  className={`justify-center flex rounded-xl mr-5 items-center w-14 h-14 border-2 border-gray-400 mb-6 mt-10 ${styles.cardAnimation} ${styles.cardIcon}`}
                >
                  <FaCrown color="#fde199" size={35} />
                </div>
              </div>

              <>
                <h1 className="text-white text-3xl text-center mb-8">
                  {card.heading}
                </h1>
                <h3 className="text-gray-300 text-2xl text-center flex flex-col flex-wrap opacity-80 ">
                  {card.description}
                </h3>
              </>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
