import React from 'react'
import style from '../css/ReferenceCard.module.css'

const ReferenceCard = ({reference}) => {
  return (
    <div className={style.container}>
      <div>
        <p className={style.referenceText}>
          {reference.text}
        </p>
      </div>
      <div className={style.nameOffer}>
        <p className={style.referenceName}>
          {reference.name}
        </p>
        <p className={style.referenceOffer}>
          {reference.apartment}
        </p>
      </div>
    </div>
  )
}

export default ReferenceCard
