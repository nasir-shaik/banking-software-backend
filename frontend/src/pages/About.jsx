import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">
        <section className="about-hero">
          <div className="container">
            <h1>About NamibiaLoans</h1>

            <p>
              Empowering individuals and businesses across Namibia with
              transparent, secure, and affordable loan solutions.
            </p>
          </div>
        </section>

        <section className="about-company">
          <div className="container about-content">
            <div className="about-text">
              <h2>Who We Are</h2>

              <p>
                NamibiaLoans is a trusted financial services provider committed
                to helping individuals achieve their goals through responsible
                and accessible lending solutions.
              </p>

              <p>
                Our digital platform simplifies the borrowing process, allowing
                customers to apply online, upload documents, track applications,
                and receive timely updates.
              </p>

              <p>
                We focus on transparency, customer service, and fast approvals
                while maintaining responsible lending practices.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h3>10,000+</h3>
                <p>Loans Processed</p>
              </div>

              <div className="stat-card">
                <h3>98%</h3>
                <p>Customer Satisfaction</p>
              </div>

              <div className="stat-card">
                <h3>24 Hours</h3>
                <p>Average Approval Time</p>
              </div>

              <div className="stat-card">
                <h3>Nationwide</h3>
                <p>Coverage</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="container mission-grid">
            <div className="mission-card">
              <h2>Our Mission</h2>

              <p>
                To provide fast, reliable, and transparent lending solutions
                that help our customers achieve financial stability and growth.
              </p>
            </div>

            <div className="mission-card">
              <h2>Our Vision</h2>

              <p>
                To become Namibia's most trusted digital lending platform
                through innovation, technology, and exceptional customer
                service.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2>Why Choose NamibiaLoans</h2>

            <div className="values-grid">
              <div className="value-card">
                <h3>⚡ Fast Approval</h3>
                <p>Quick online application and rapid processing.</p>
              </div>

              <div className="value-card">
                <h3>🔒 Secure Process</h3>
                <p>Your information is protected using modern security.</p>
              </div>

              <div className="value-card">
                <h3>💰 Transparent Terms</h3>
                <p>No hidden charges and clear repayment schedules.</p>
              </div>

              <div className="value-card">
                <h3>🤝 Customer Focused</h3>
                <p>Dedicated support throughout your loan journey.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
