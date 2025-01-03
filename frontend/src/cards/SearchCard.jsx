import React from 'react'
import style from '../css/SearchCard.module.css'
import image from '../assets/image.png'

const SearchCard = ({card}) => {
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img src={card.image} alt="image" />
      </div>
      <div className={style.textContainer}>
        <h6 className={style.title}>
          {card.title}
        </h6>
        <div>
          <p className={style.price}>{card.price}</p>
          <p className={style.location}>{card.location}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchCard
