import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Aiskills from "./Aiskills";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <Swiper
        className="row"   
        loop={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile default
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2, spaceBetween: 48 },
        }}
        modules={[Pagination]}
        aria-label="Skills carousel"
      >
        <SwiperSlide><Frontend /></SwiperSlide>
        <SwiperSlide><Backend /></SwiperSlide>
        <SwiperSlide><Aiskills /></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Skills;
