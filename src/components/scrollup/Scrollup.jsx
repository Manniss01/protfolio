import React from "react";
import "./scrollup.css";
const Scrollup = () =>{
    window.addEventListener("scroll", function() {
        const scrollup = document.querySelector(".scrollup");
        //When the scroll is higher than 500 viweport  hight of the screen , ADD the show-scroll class tag with the scroll-top class
        if (this.scrollY >=500) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll")
        
    });
    return(
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default Scrollup;