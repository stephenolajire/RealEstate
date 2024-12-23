import React from "react";
import style from "../css/Footer.module.css";
import svg from "../assets/Vector.svg";
import svg2 from "../assets/Vector2.svg";
import Btn from "./Buttons";

const Footer = () => {
  return (
    <div className={style.footerSection}>
      <div className={style.footerUp}>
        <div className={style.container}>
          <img src={svg2} alt="logo" />
        </div>
        <div className={style.container2}>
          <h6>Subscribe to newsletter</h6>
          <div>
            <p className={style.p}>Get the latest news and interesting offers and real estate</p>
            <div className={style.inputContainer}>
              <input
                className={style.input}
                type="email"
                placeholder="Enter your email"
              />
              <Btn content="Subscribe" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.footerDown}>
        <div className={style.footer}>
          <img src={svg} alt="logo" />
          <p>Real Estate</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
