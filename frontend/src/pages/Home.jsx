import React from 'react'
import Hero from '../components/Hero'
import TopOffer from '../components/TopOffer'
import style from '../css/Home.module.css'

const Home = () => {
  return (
    <section className={style.home}>
      <Hero />
      <TopOffer />
    </section>
  )
}

export default Home
