import React, { useState } from "react";
import "./header.css";


const Header = () => {

    /*=============== Change Background Header ===============*/

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        //When the scroll is higher than 200 viweport  hight of the screen , ADD the scroll-header class tag with the header tag
        if (this.scrollY >=80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
        
    });

    /*=============== Toggle Menu ===============*/
    const[Toggle, ShowMenu]= useState(false);

    const [activeNav , setActiveNav] = useState("#home");

    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">lUCAS</a>

            <div className={Toggle ? "nav__menu show-menu" :"nav__menu"}>

                <ul className="nav__list grid">
                    <li className="nav_item">
                        <a href="#home" onClick={()=> setActiveNav ("#home")} className={activeNav==="#home" ? "nav_link active-link": "nav_link"}>
                            <i className="uil uil-estate nav_icon"></i> Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" onClick={()=> setActiveNav ("#about")} className={activeNav==="#about" ? "nav_link active-link": "nav_link"}>
                            <i className="uil uil-user nav_icon"></i> About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" onClick={()=> setActiveNav ("#skills")} className={activeNav==="#skills" ? "nav_link active-link": "nav_link"}>
                            <i className="uil uil-file-alt nav_icon"></i> skills
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#services" onClick={()=> setActiveNav ("#services")} className={activeNav==="#services" ? "nav_link active-link": "nav_link"}>
                            <i className="uil uil-briefcase-alt nav_icon"></i> Service
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" onClick={()=> setActiveNav ("#portfolio")} className={activeNav==="#portfolio" ? "nav_link active-link": "nav_link"}>
                            <i className="uil uil-scenery nav_icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" onClick={()=> setActiveNav ("#contact")} className={activeNav==="#contact" ? "nav_link active-link": "nav_link"}>
                            <i className="uil uil-message nav_icon"></i> Contact
                        </a>
                    </li>

                </ul>
                <i class="uil uil-times nav__close" onClick={()=> ShowMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=> ShowMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    )
}
export default Header