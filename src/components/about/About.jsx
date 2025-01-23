import aboutImg from "../../images/education.webp"
import Title from '../Title';
import "./About.css"

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='our ' subTitle="commitment"  />


      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='medical professionals' />
        </div>
        <article className='about-info'>
          <h3>Empowering Health Through Knowledge</h3>
          <p>
            At Kanmed, we are dedicated to providing reliable, up-to-date medical information to empower individuals and healthcare professionals alike. Our mission is to ensure that medical knowledge is accessible to everyone, making healthcare better for all.
          </p>
          <p>
            We believe that education is the key to improving global health outcomes. Whether you’re seeking the latest medical news, educational resources, or expert advice, Kanmed is here to guide you on your journey to better health.
          </p>
          <a href='#' className='btn'>
            Learn More
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
