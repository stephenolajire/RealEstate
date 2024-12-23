import React, { useEffect } from 'react'
import style from '../css/About.module.css'
import about from '../assets/Mask Group.jpg'
import AOS from 'aos'

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 500,
            easing: 'ease-in-out',
        })
    }, [])
  return (
    <section className={style.aboutSection} data-aos="fade-up">
      <div className={style.container}>
        <img className={style.aboutImg} src={about} alt="about" />
      </div>
      <div>
        <h2 className={style.aboutTitle}>About Us</h2>
        <p className={style.aboutText}>
          We are a company that connects the world of real estate and finance.
          We provide a complete service for the sale, purchase or rental of real
          estate. Our advantage is more than 15 years of experience and soil in
          attractive locations in Slovakia with branches in Bratislava and
          Košice. We have a connection to all banks on the Slovak market, so we
          can solve everything under one roof. By constantly innovating our
          business activities, we move forward and we are able to offer truly
          above-standard services that set us apart from the competition.
        </p>
      </div>
    </section>
  );
}

export default About
