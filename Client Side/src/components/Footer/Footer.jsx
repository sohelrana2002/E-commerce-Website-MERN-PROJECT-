import { NavLink } from "react-router-dom";
import { BsFacebook, BsGithub  } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <>
      <section>
        <div className="container contact__short">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink className="btn" to="/">Get Started</NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer__container">
                <div>
                    <h3>Modern Ecommerce Website</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                </div>
                <div>
                    <h3>Subscribe to get important updates</h3>
                    <form action="">
                        <input type="text" placeholder="Email" />
                        <button className="btn">SUBSCRIBE</button>
                    </form>
                </div>
                <div className="social__media">
                    <h3>Follow Us</h3>
                    <div>
                        <BsFacebook className="social__icon" />
                        <BsGithub className="social__icon" />
                        <AiFillInstagram className="social__icon" />
                        <AiFillTwitterCircle className="social__icon" />
                    </div>
                </div>
                <div>
                    <h3>Call Us</h3>
                    <span>+972535-88236</span>
                </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
