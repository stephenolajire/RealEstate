import React from "react";
import style from "../css/Hero.module.css";

const Btn = ({ content }) => {
  return <button className={style.heroButton}>{content}</button>;
};

export default Btn;
