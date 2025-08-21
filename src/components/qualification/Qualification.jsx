import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const modalItems = {
        msc: {
            title: "MSc. (Artificial Intelligence and Human Factors) - Coventry University",
            duration: "2024 – 2025",
            contributions: [
                "Gained expertise in AI systems and user-centered design.",
                "Completed a thesis on empathetic health chatbots using LLMs.",
                "Used Python, TensorFlow, and LangChain extensively."
            ]
        },
        bsc: {
            title: "BSc. (Honours in Computer Science) - University of Wolverhampton",
            duration: "2019 – 2022",
            contributions: [
                "Studied core computer science principles including data structures and algorithms.",
                "Built projects with JavaScript, React, and MySQL.",
                "Graduated with honors and distinction."
            ]
        },
        itd: {
            title: "Information Technology Assistant - The Nepal Distilleries PVT.LTD",
            duration: "Jul 2020 – Oct 2020",
            contributions: [
                "Provided IT support for daily operations.",
                "Handled system maintenance and inventory tracking.",
                "Supported ERP upgrades and network monitoring."
            ]
        },
        thi: {
            title: "Software Engineer - The High Innovations",
            duration: "Feb 2021 – Dec 2023",
            contributions: [
                "Developed and maintained enterprise-level software solutions.",
                "Led team in transitioning to a microservices architecture.",
                "Integrated APIs and implemented CI/CD pipelines."
            ]
        },
        ct: {
            title: "Software Engineer - Code Tara Pvt Ltd",
            duration: "Jan 2024 – Jun 2024",
            contributions: [
                "Developed scalable web applications using React and Flask.",
                "Contributed to chatbot integrations using LangChain and Hugging Face models.",
                "Worked in agile teams on microservices and CI/CD pipelines."
            ]
        }
    };

    const renderModal = () => (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h3>{modalContent.title}</h3>
                <p><strong>Duration:</strong> {modalContent.duration}</p>
                <p><strong>Key Contributions:</strong></p>
                <ul>
                    {modalContent.contributions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button className="modal-close" onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
        </div>
    );

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
               <div className={`qualification__tabs ${toggleState === 1 ? "education-active" : "experience-active"}`}>
    <div
        className={toggleState === 1
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"}
        onClick={() => toggleTab(1)}
    >
        <i className="uil uil-graduation-cap qualification__icon"></i> Education
    </div>

    <div
        className={toggleState === 2
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"}
        onClick={() => toggleTab(2)}
    >
        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
    </div>
</div>

                <div className="qualification__sections">
                    {/* Education */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data" onClick={() => openModal(modalItems.msc)} style={{ cursor: "pointer" }}>
                            <div>
                                <h3 className="qualification__title">MSc. (Artificial Intelligence and Human Factors)</h3>
                                <span className="qualification__subtitle">Coventry University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 – 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data" onClick={() => openModal(modalItems.bsc)} style={{ cursor: "pointer" }}>
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">BSc. (Honours in Computer Science)</h3>
                                <span className="qualification__subtitle">University of Wolverhampton</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 – 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data" onClick={() => openModal(modalItems.itd)} style={{ cursor: "pointer" }}>
                            <div>
                                <h3 className="qualification__title">Information Technology Assistant</h3>
                                <span className="qualification__subtitle">The Nepal Distilleries PVT.LTD</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 07/2020 – 10/2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data" onClick={() => openModal(modalItems.thi)} style={{ cursor: "pointer" }}>
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">The High Innovations</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 02/2021 – 12/2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data" onClick={() => openModal(modalItems.ct)} style={{ cursor: "pointer" }}>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Code Tara Pvt Ltd</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 01/2024 – 06/2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && modalContent && renderModal()}
        </section>
    );
};

export default Qualification;
