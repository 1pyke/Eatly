import React, { useRef } from "react";
import { IoDiamond } from "react-icons/io5";
import { Button, IconButton } from "@material-tailwind/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Scetion5Card from "./Scetion5Card";
import lowCalorie from "../../images/lowCalorie.jpeg";
import FridgeRaidFriedRice from "../../images/Fridge-raid-fried-rice-.jpg";
import healthyfood from "../../images/Pear-Apple-and-Celery-Salad_EXPS_TOHON23_273011_DR_05_12_3b.jpg";
import foodhealthyStock from "../../images/LowCalorieMeal.jpg";
import styles from "./section5.module.css";
import Slider from "react-slick";

const Section5 = () => {
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
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
  };
  const menu = [
    {
      image: "",
      name: "Breakfast Recipes",
    },
    {
      image: "",
      name: "Low-Calorie Recipes",
    },
    {
      image: "",
      name: "Holiday Recipes",
    },
    {
      image: "",
      name: "Restriction Recipes",
    },
    {
      image: "",
      name: "Vegetarian Recipes",
    },
    {
      image: "",
      name: "Gluten-Free Recipes",
    },
  ];
  const carouselData = [
    {
      image: foodhealthyStock,
      title: "Red Onions with Chopped Cabbage",
      event: "",
    },
    {
      image: FridgeRaidFriedRice,
      title: "Low Fat Cacke With White Cream",
      event: "",
    },
    {
      image: healthyfood,
      title: "Red Onions with Creamy Dressing",
      event: "",
    },
    {
      image: lowCalorie,
      title: "Flavorful Low Fat Cake with Cream",
      event: "",
    },
  ];
  return (
    <div id="services" className="flex h-[800px] mt-20 mb-15">
      <div className="flex-1">
        <div className="justify-start flex pl-6 mb-7">
          <div
            className={`justify-center flex rounded-2xl mr-5 items-center w-16 h-16 border border-gray-200 ${styles.icon}`}
          >
            <IoDiamond color="#f4ce6b" size={35} />
          </div>
          <div
            className={`flex items-center font-bold text-5xl ${styles.heading}`}
          >
            Try Our Healthy Menu
          </div>
        </div>
        <h2 className="pl-6 text-2xl text-gray-500 opacity-95">
          We provide a vairty of health recipes that have
          <br /> been curated by our best nutritionists for you
        </h2>
        <div className="h-[590px] mt-10 flex justify-start pl-6 flex-col gap-6 overflow-y-auto w-[600px] scrollBar">
          {menu.map((item, i) => (
            <Scetion5Card key={i} item={item} />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-end h-[250px] items-center mr-7">
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
        <Slider className={styles.carousel} ref={sliderRef} {...settings}>
          {carouselData.map((item, i) => (
            <div key={i}>
              <div className="flex-1 items-center justify-center flex ">
                <div
                  className={`h-[540px] w-[90%] flex items-center justify-center flex-col rounded-t-[470px] rounded-b-[20%] ${styles.carouselFirstContent}`}
                >
                  <div
                    className={`h-[55%] w-[80%] rounded-t-[50%] rounded-b-[10%] flex justify-center items-center ${styles.carouselSecondContent}`}
                  >
                    <div className="bg-transparent w-[60%] h-[60%] rounded-[50%]">
                      <img
                        src={item.image}
                        className="bg-cover rounded-t-full rounded-b-full "
                        alt="Logo"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col h-[35%] w-[60%]">
                    <h1
                      className={`mb-7 text-2xl font-bold ${styles.carouselContentText}`}
                    >
                      {item.title}
                    </h1>
                    <Button
                      color="amber"
                      size="lg"
                      className={styles.carouselContentButton}
                    >
                      Try Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section5;
