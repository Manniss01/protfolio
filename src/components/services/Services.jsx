import React, { useState } from "react";
import "./services.css";
const Services = () =>{
    const[toggleState , setToggleState]= useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    };

    return(
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer ?</span>

            <div className="services__container container grid">
            <div className="services__content"> 

                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title"> Product <br/> Designer</h3>                    
                </div>
                <span className="services__button"  onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState ===1 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() =>toggleTab(0) } className="uil uil-times services__modal-close"></i>
                        <div className="services__modal-title">Product Designer</div>
                        <p className="services__modal-description">More than one year of experience in the services. Serving clients and businesses with high-quality work.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create the attractive user interface.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Development of modern websites.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop interactions between ux elements.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I rank your company's brand.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Product designs and mockups for businesses.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content"> 

                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/UX <br/> Designer</h3>                    
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState ===2 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() =>toggleTab(0) } className="uil uil-times services__modal-close"></i>
                        <div className="services__modal-title">UI/ UX Designer</div>
                        <p className="services__modal-description">
                            Services with more than  1 years of Experience.Providing Quality work to the Clients and Companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I develop the UI/UX of mobile, websites, and desktop.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Professional and Creative Design</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Useful design elements/icons included</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Attractive and user-friendly mobile app UI-UX.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Updated with Advanced trends of UI-UX</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content"> 

                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Software development <br /> Services</h3>                    
                </div>
                <span  onClick={() => toggleTab(3)}className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState ===3 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() =>toggleTab(0) } className="uil uil-times services__modal-close"></i>
                        <div className="services__modal-title">Software developer</div>
                        <p className="services__modal-description">
                            Services with more than  2 years of Experience.Providing Quality work to the Clients and Companies.The cost and delivery time will vary depending on how complex your required program is.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I develop the Web App, Management System, E-commerce website, Unity Game, AI Project and Desktop Application.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">High quality code, User Friendly UI/UX, Quality Work</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Fast delivery to ensure you have what you need ASAP</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Projects / Tasks / Assignments / Software</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of the prodocts for companies. </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content"> 

                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title"> IT support  <br /> Services </h3>                    
                </div>
                <span  onClick={() => toggleTab(4)}className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState ===4 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() =>toggleTab(0) } className="uil uil-times services__modal-close"></i>
                        <div className="services__modal-title">IT support</div>
                        <p className="services__modal-description">
                            Services with more than  1 years of Experience.Providing Quality work to the Clients and Companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Performed help desk troubleshooting and problem resolution for end-user application software,hardware, and remote access connectivity supporting over many personal computers.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Maintained all phone system hardware and software, as well as network and mainframe security.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Performed software updates; ensured all purchased software followed licensing requirements.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Verified all security and anti-virus checking software requirements.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Set up Network drives to allow faculty and staff the ability to share and access files.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Configure copiers and printers for network connections to allow wireless and network
printing.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content"> 

                <div>
                    <i className="uil uil-file-search-alt services__icon"></i>
                    <h3 className="services__title">Research<br />Report Writting</h3>                    
                </div>
                <span  onClick={() => toggleTab(5)}className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState ===5 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() =>toggleTab(0) } className="uil uil-times services__modal-close"></i>
                        <div className="services__modal-title">Research</div>
                        <p className="services__modal-description">
                        I create research papers for your personal or professional usage on any subject or industry of your choice.
                        I am a skilled and informed researcher, I can give you top-notch content that will meet or exceed your expectations.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i> 
                                <p className="services__modal-info"> Well researched and engaging content.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">100% Original content in English.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> References and citations.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Topic specific vocabulary</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">On time delivery</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            </div>


        </section>

    )
}
export default Services;