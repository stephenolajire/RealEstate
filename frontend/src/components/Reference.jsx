import React, { useEffect } from 'react'
import { references } from '../constant/reference'
import AOS from 'aos'
import style from '../css/Reference.module.css'
import 'aos/dist/aos.css'
import ReferenceCard from '../cards/ReferenceCard'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const Reference = () => {

  useEffect (() => {
    AOS.init ({
        easing: 'ease-in-out',
        delay: 500,
        duration:500,
    })
  }, [])

  const teamGroups = [];
    for (let i = 0; i < references.length; i += 2) {
      teamGroups.push(references.slice(i, i + 2));
    }

  return (
    <section className={style.referenceSection} data-aos="fade-up">
      <div className={style.container}>
        <h2 className={style.title}>References</h2>
        <div className={style.referenceContent}>
          <p className={style.text}>
            Our clients' stories speak volumes about the exceptional service we
            provide. From smooth transactions to finding the perfect fit for
            every lifestyle, each testimonial highlights our dedication to
            making dreams come true.
          </p>
        </div>
      </div>
      <div className="container">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          showIndicators={true}
          useKeyboardArrows={true}
          swipeable={false}
          emulateTouch={true}
        >
          {teamGroups.map((group, index) => (
            <div key={index} className={style.slideContainer}>
              <div className={style.gridContainer} key={index}>
                {group.map((reference, index) => (
                  <div key={index} className={style.cardWrapper}>
                    <ReferenceCard reference={reference} key={index}/>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Reference
