import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "../css/OurTeam.module.css";
import AOS from "aos";
import TeamCard from "../cards/TeamCard";
import { teamData } from "../constant/constant";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 500,
      easing: "ease-in-out",
    });
  }, []);

  // Grouping the team cards into arrays of 8 cards per group
  const teamGroups = [];
  for (let i = 0; i < teamData.length; i += 8) {
    teamGroups.push(teamData.slice(i, i + 8));
  }

  return (
    <section className={style.teamSection} data-aos="fade-up">
      <div className={style.teamContainer}>
        <h1 className={style.title}>Our Team</h1>
        <p className={style.text}>
          We are a passionate and dedicated group of professionals committed to
          delivering excellence. Our team combines diverse skills, experiences,
          and perspectives to drive innovation and provide exceptional service.
          We believe in collaboration, creativity, and continuous growth,
          working together to achieve our shared goals and ensure the success of
          our clients.
        </p>
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
              <div className={style.gridContainer}>
                {group.map((team) => (
                  <div key={team.id} className={style.cardWrapper}>
                    <TeamCard team={team} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OurTeam;
