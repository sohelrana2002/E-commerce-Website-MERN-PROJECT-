import { NavLink } from 'react-router-dom'
import AboutHeroImage from '../../assets/hero.jpg'
import './aboutHeroSection.css'

const AboutHeroSection = () => {
  return (
    <div className="container about__hero-container">
     <div className="about__hero-content">
        <div>
        <h3>Welcome to</h3>
        <h1>Modern Functional Ecommorce Webste</h1>
        </div>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam, esse nihil perferendis explicabo maiores aspernatur temporibus cumque odio nemo voluptatibus inventore provident possimus pariatur nobis alias eaque ipsa. Facere facilis veniam culpa iusto recusandae excepturi hic voluptate illo in.</h5>

        <NavLink className='btn'>Shop Now</NavLink>
     </div>

     <div className="about__hero-image">
        <img src={AboutHeroImage} alt="" />
     </div>
    </div>
  )
}

export default AboutHeroSection