import MedicalNews from './MedicalNews';  // Import the new component for medical news
import "./Hero.css"

const Hero = () => {
  const apiKey = '5fb747e6027d4694bf1d851b1e935ad1'; // Replace with your actual NewsAPI key
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* First Part: Hero Banner */}
        <div className="hero-banner">
          <h1>Kanmed</h1>
          <p>
            Empowering healthcare professionals with the latest updates, courses, and tools to improve patient care.
          </p>
          <a href="#courses" className="btn hero-btn">
            Explore Courses
          </a>
        </div>

        {/* Second Part: Medical News */}
        <MedicalNews />
      </div>
    </section>
  );
};

export default Hero;
