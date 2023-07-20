import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sujal</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://twitter.com/SujalPa90094497" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://github.com/Sujaljp/" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sujal-patil-7459b8215/" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Sujaljp. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer