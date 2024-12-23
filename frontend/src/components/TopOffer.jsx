import React from "react";
import style from "../css/TopOffer.module.css";
import Btn from "./Buttons";

const TopOffer = () => {
  return (
    <section className={style.topOfferSection}>
      <div className={style.Container}>
        <h2 className={style.topOffer}>Top Offers</h2>
        <div className={style.topOfferContent}>
          <p className={style.text}>
            Fulfill your career dreams, enjoy all the achievements of the <br />{" "}
            city center and luxury housing to the fullest.
          </p>
          <Btn content="View all offers" />
        </div>
      </div>
    </section>
  );
};

export default TopOffer;
