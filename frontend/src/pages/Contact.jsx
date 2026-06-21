import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">

        <section className="contact-hero">
          <div className="container">
            <h1>Contact Us</h1>

            <p>
              We're here to help. Contact our team for assistance,
              loan inquiries, or support.
            </p>
          </div>
        </section>

        <section className="contact-section">

          <div className="contact-grid">

            <div className="contact-form-card">

              <h2>Send Us A Message</h2>

              <form>

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  placeholder="Subject"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                ></textarea>

                <button type="submit">
                  Send Message
                </button>

              </form>

            </div>

            <div className="contact-info-card">

              <h2>Contact Information</h2>

              <div className="info-box">
                <h3>📍 Address</h3>
                <p>Windhoek, Namibia</p>
              </div>

              <div className="info-box">
                <h3>📞 Phone</h3>
                <p>+264 81 123 4567</p>
              </div>

              <div className="info-box">
                <h3>✉ Email</h3>
                <p>support@namibialoans.com</p>
              </div>

              <div className="info-box">
                <h3>🕒 Working Hours</h3>
                <p>Mon - Fri</p>
                <p>08:00 AM - 05:00 PM</p>
              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}

export default Contact;