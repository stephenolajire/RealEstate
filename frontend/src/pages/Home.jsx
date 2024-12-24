import React from 'react'
import Hero from '../components/Hero'
import TopOffer from '../components/TopOffer'
import style from '../css/Home.module.css'
import About from '../components/About'
import OurTeam from '../components/OurTeam'
import Reference from '../components/Reference'

const Home = () => {
  return (
    <section className={style.home}>
      <Hero />
      <TopOffer />
      <About />
      <OurTeam />
      <Reference />
    </section>
  )
}

export default Home
