import React from 'react'
import style from '../css/Card.module.css'
import image from '../assets/image.png'

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img src={image} alt="image" />
      </div>
      <div className={style.textContainer}>
        <h6 className={style.title}>
          Large 4-room apartment with a beautiful terrace
        </h6>
        <div>
          <p className={style.price}>N 320 000</p>
          <p className={style.location}>Barcelona</p>
        </div>
      </div>
    </div>
  );
}

export default Card
