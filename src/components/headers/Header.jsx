import { useState } from 'react'
import './header.css'

const Header = () => {
    
    window.addEventListener("scroll", function(){
        const header = document.querySelector('.header')
        if (this.scrollY>=80){
         header.classList.add("scroll-header");
        }else{header.classList.remove("scroll-header")}


        if(this.scrollY>=0 && this.scrollY<420){
            setActiveNav("#home")
        }else if(this.scrollY>=420 && this.scrollY<1100){
            setActiveNav("#about")
        }else if(this.scrollY>=1100 && this.scrollY<1670){
            setActiveNav("#skills")
        }else if(this.scrollY>=1670 && this.scrollY<2400){
            setActiveNav("#services")
        }else if(this.scrollY>=3000 && this.scrollY<4500){
            setActiveNav("#portfolio")
        } else if(this.scrollY>=4500 ){
            setActiveNav("#contact")
        }else{
            setActiveNav("#")
        }
    })


    const [toggleNav, setToggleNav] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>Sujal</a>

            <div className={toggleNav? "nav__menu show-menu":"nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav_item">
                        <a href="#home" onClick={()=> setActiveNav("#home")} className={activeNav==="#home"?"nav__link active_link":"nav__link "}>
                            <i className="uil uil-estate nav__icon">
                            </i>
                                Home
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav==="#about"?"nav__link active_link":"nav__link "}>
                            <i className="uil uil-user nav__icon">
                            </i>
                                About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#skills" onClick={()=> setActiveNav("#skills")} className={activeNav==="#skills"?"nav__link active_link":"nav__link "}>
                            <i className="uil uil-file-alt nav__icon">
                            </i>
                                Skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#services" onClick={()=> setActiveNav("#services")} className={activeNav==="#services"?"nav__link active_link":"nav__link "}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                            Services
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav==="#portfolio"?"nav__link active_link":"nav__link "}>
                            <i className="uil uil-scenery nav__icon"></i>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav==="#contact"?"nav__link active_link":"nav__link "}>
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" onClick={()=>{setToggleNav(!toggleNav)}}></i>
            </div>
            <div className="nav__toggle" onClick={()=>{setToggleNav(!toggleNav)}}>
                <i className="uil uil-apps"></i>

            </div>
        </nav>
    </header>
  )
}

export default Header