import { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState ,setToggleState]= useState(0)

    const toggleTab = (index) =>{
        console.log(index)
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">I can work on the following topics for your project.</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div className="">
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Frontend <br/> Development</h3>
                </div>
                
                <span className="services__button" onClick={()=>{toggleTab(1)}}>View More  
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState==1 ? "active-modal services__modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
                        <h3 className="services__modal-title">Frontend Development</h3>
                        <p className="services__modal-description">
                            Looking for someone to work on your React or Nextjs.13 frontend, then I am happy to help.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I give Proper code structure to the site.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I work with modern Best Practices</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I make sites faster for user interaction.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Backend <br/> Development</h3>
                </div>
                <span className="services__button" onClick={()=>{toggleTab(2)}}>View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState==2 ? "active-modal services__modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
                        <h3 className="services__modal-title">Backend Development</h3>
                        <p className="services__modal-description">
                            Looking for backends in Djangoe and Express.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I develop the web servers.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">RESTfull APIs.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Containerization</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Deploying on AWS.</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div className="">
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Blockchain <br/> Development</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState=== 3 ? "active-modal services__modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
                        <h3 className="services__modal-title">Blockchain Development</h3>
                        <p className="services__modal-description">
                            I love to work in Web3 space and build the decentralized future.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I develop smart contracts in Solidiy.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Frontend connection with smart contracts.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Deploying private blockchain using Hyperledger Fabric.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Developing and deploying contracts on Fabric.</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services