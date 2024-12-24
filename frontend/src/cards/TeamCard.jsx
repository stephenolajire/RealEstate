import React from 'react'
import style from '../css/TeamCard.module.css'
import team from '../assets/Ellipse 108.jpg'

const TeamCard = ({team}) => {
  return (
    <div className={style.teamCard} key={team.index}>
      <div className={style.imgCont}>
        <img className={style.teamImage} src={team.image} alt="team" />
      </div>
      <div className={style.teamCardContent}>
        <p className={style.teamCardName}>{team.name}</p>
        <p className={style.teamCardPosition}>{team.position}</p>
      </div>
    </div>
  )
}

export default TeamCard
