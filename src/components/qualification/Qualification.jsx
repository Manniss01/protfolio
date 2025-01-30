import React, { useState } from "react";
import "./qualification.css"

const Qualification = () =>{

    const[toggleState , setToggleState]= useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    };

    return (
        <section className="qualification section"id="qualification">

            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex":"qualification__button  button--flex"} onClick = {()=> toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{""} Education
                    </div>

                    <div  className={toggleState === 2 ? "qualification__button qualification__active button--flex":"qualification__button  button--flex"} onClick = {()=> toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{""} Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active ": "qualification__content"}>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">BSc.( Honours in Computer Science)</h3>
                                <span className="qualification__subtitle">University of Wolverhampton</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 – 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">School Leaving Certificate (S.L.C)</h3>
                                <span className="qualification__subtitle">St. Lawrence High School </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 – 2019
                                </div>
                            </div>


                        </div>


                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Secondary Education Examination (S.E.E)</h3>
                                <span className="qualification__subtitle">Pragati High School</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                        </div>
                        
                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active ": "qualification__content"}>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">IT Assistant</h3>
                                <span className="qualification__subtitle">The Nepal Distilleries PVT.LTD</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 07/2020 – 10/2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">CEO</h3>
                                <span className="qualification__subtitle">Aura High-Tech Technology </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>


                        </div>

                    </div>




                    
                </div>
            </div>

        </section>
    )
    
}

export default Qualification;