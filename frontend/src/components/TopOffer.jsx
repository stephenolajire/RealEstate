import React, {useEffect} from "react";
import style from "../css/TopOffer.module.css";
import Btn from "./Buttons";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";

const TopOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 500, easing: "ease-in"});
  });
  return (
    <section className={style.topOfferSection} data-aos="fade-up">
      <div className={style.Container}>
        <h2 className={style.topOffer}>Top Offers</h2>
        <div className={style.topOfferContent}>
          <p className={style.text}>
            Fulfill your career dreams, enjoy all the achievements of the <br />{" "}
            city center and luxury housing to the fullest.
          </p>
          <Btn content="View all offers" />
        </div>
        <div className={style.cardContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default TopOffer;
