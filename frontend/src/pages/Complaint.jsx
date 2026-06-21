import Navbar from "../components/Navbar";

function Complaint() {
  return (
    <>
      <Navbar />

      <div className="complaint-page">
        <section className="complaint-hero">
          <div className="container">
            <h1>Customer Complaints</h1>

            <p>
              We value your feedback. Submit your complaint and our support team
              will review it promptly.
            </p>
          </div>
        </section>

        <section className="complaint-section">
          <div className="complaint-form-container">
            <h2>Submit Complaint</h2>

            <form className="complaint-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter email address" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter phone number" />
              </div>

              <div className="form-group">
                <label>Application Number</label>
                <input type="text" placeholder="APP-20260001" />
              </div>

              <div className="form-group full-width">
                <label>Complaint Category</label>

                <select>
                  <option>Loan Application</option>
                  <option>Delay In Approval</option>
                  <option>Technical Issue</option>
                  <option>Payment Issue</option>
                  <option>Wrong Information</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Complaint Description</label>

                <textarea
                  rows="6"
                  placeholder="Describe your complaint"
                ></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="submit-complaint-btn">
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Complaint;
