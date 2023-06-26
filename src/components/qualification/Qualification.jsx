import { useState } from 'react'
import './qualification.css'


const Qualification = () => {

    const [toggleQ, setToggleQ ] = useState(1);

    const toggleTab = (index) =>{
        setToggleQ(index)
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal Journey</span>
        
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleQ===1? "qualification__button qualification__active  button--flex":"qualification__button button--flex"}
                onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
                </div>

                <div className={toggleQ===2? "qualification__button qualification__active  button--flex":"qualification__button button--flex"}
                onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleQ===1?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">Mumbai University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020-Present
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>

                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Mumbai University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020-Present
                            </div>
                        </div>
                        
                    </div>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Mumbai University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020-Present
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>

                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">UX expert</h3>
                            <span className="qualification__subtitle">Mumbai University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020-2024
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={toggleQ===2?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">Product Design</h3>
                            <span className="qualification__subtitle">Amazon</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020-Present
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>

                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Microsoft</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020-Present
                            </div>
                        </div>
                        
                    </div>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Figma</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020-Present
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


    </section>
  )
}

export default Qualification