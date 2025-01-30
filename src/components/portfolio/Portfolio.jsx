import React from "react";
import "./portfolio.css";
import { Data } from "./Data";
import ImgProject from "../../assets/testimonial1.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Portfolio = () => {
    return(
        <section className="Portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My Work</span>

            <Swiper className="row"
        loop={true}
        spaceBetween = {24}
        pagination ={{
            clickable: true
        }}
        breakpoints={{
            576:{
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
                 
            },
        }}
        modules={[Pagination]}

        >

            { Data.map(({id, image, title, description,link}) => {
                return(
                    <SwiperSlide className="card" key={id} >
                <div className="face face1">
                    <div className="content">
                    <img src={image} alt="" className="testimonial__img"/>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                    <h3 className="testimonial__name">{title}</h3>
                    <p className="testimonial__description">{description}</p>
                    <a href="" className="home__social-icon" target="blank">Demo</a>
                    <a href={link} className="home__social-icon" target="blank">
                        <i class="uil uil-github-alt">Github</i>
        </a>
                    </div>
                </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
        </section>

    )

}
export default Portfolio;