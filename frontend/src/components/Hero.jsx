import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import slide4 from "../assets/slides/slide4.jpg";
import slide5 from "../assets/slides/slide5.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Trusted Personal Loan Provider</span>

        <h1>
          Get Your Personal Loan
          <span> Approved Fast</span>
        </h1>

        <p>
          Apply online in minutes and receive quick approval with transparent
          repayment terms and secure processing.
        </p>

        <div className="hero-buttons">
          <Link to="/apply-loan">
            <button className="apply-btn">Apply Now</button>
          </Link>

          <button className="learn-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={slides[currentSlide]} alt="Loan Platform" />
      </div>
    </section>
  );
}

export default Hero;
