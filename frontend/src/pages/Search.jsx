import React from "react";
import style from "../css/Search.module.css";
import Btn from "../components/Buttons";
import SearchCard from "../cards/SearchCard";
import cardData from "../constant/cardData";

const Search = () => {
  return (
    <main className={style.main}>
      <div className={style.textCont}>
        <h2 className={style.title}>Search for an offer</h2>
        <p className={style.text}>Choose from the most advantageous offers</p>
      </div>

      <div className={style.filter}>
        <form className={style.formOne}>
          <input
            className={style.input}
            type="search"
            placeholder="Search for a property"
          />
          <Btn content="Search" />
        </form>

        <form className={style.formTwo}>
          <input
            className={style.input}
            type="search"
            placeholder="Search for a property"
          />
          <Btn content="Search" />
        </form>
      </div>
      <div className={style.container}>
        {cardData.map((card, index) => {
          return <SearchCard key={index} card={card} />;
        })}
      </div>
    </main>
  );
};

export default Search;
