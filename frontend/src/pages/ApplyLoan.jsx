import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ApplyLoan() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    national_id: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
    employment_type: "Employed",
    employer_name: "",
    monthly_income: "",
    job_title: "",
    loan_amount: "",
    loan_term: "12",
    loan_purpose: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/loan-application",
        formData
      );

      alert(
        `Application Submitted Successfully!\n\nApplication Number: ${response.data.application_no}`
      );

      setFormData({
        first_name: "",
        last_name: "",
        national_id: "",
        dob: "",
        email: "",
        mobile: "",
        address: "",
        employment_type: "Employed",
        employer_name: "",
        monthly_income: "",
        job_title: "",
        loan_amount: "",
        loan_term: "12",
        loan_purpose: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit application.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="apply-page">
        <section className="apply-hero">
          <div className="container">
            <h1>Apply For A Personal Loan</h1>

            <p>
              Complete the application form below and our team will review your
              request.
            </p>
          </div>
        </section>

        <section className="apply-form-section">
          <div className="apply-form-container">
            <h2>Loan Application Form</h2>

            <form className="loan-form" onSubmit={handleSubmit}>
              {/* Personal Information */}

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>National ID</label>
                <input
                  type="text"
                  name="national_id"
                  value={formData.national_id}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Date Of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Residential Address</label>
                <textarea
                  rows="4"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Employment Information */}

              <div className="form-group">
                <label>Employment Type</label>

                <select
                  name="employment_type"
                  value={formData.employment_type}
                  onChange={handleChange}
                >
                  <option>Employed</option>
                  <option>Self Employed</option>
                  <option>Business Owner</option>
                </select>
              </div>

              <div className="form-group">
                <label>Employer Name</label>
                <input
                  type="text"
                  name="employer_name"
                  value={formData.employer_name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Monthly Income</label>
                <input
                  type="number"
                  name="monthly_income"
                  value={formData.monthly_income}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                />
              </div>

              {/* Loan Details */}

              <div className="form-group">
                <label>Loan Amount</label>
                <input
                  type="number"
                  name="loan_amount"
                  value={formData.loan_amount}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Loan Term</label>

                <select
                  name="loan_term"
                  value={formData.loan_term}
                  onChange={handleChange}
                >
                  <option value="12">12 Months</option>
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                  <option value="48">48 Months</option>
                  <option value="60">60 Months</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Loan Purpose</label>
                <textarea
                  rows="4"
                  name="loan_purpose"
                  value={formData.loan_purpose}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* File Uploads (Frontend Only For Now) */}

              <div className="form-group">
                <label>National ID Copy</label>
                <input type="file" />
              </div>

              <div className="form-group">
                <label>Payslip</label>
                <input type="file" />
              </div>

              <div className="form-group">
                <label>Bank Statement</label>
                <input type="file" />
              </div>

              <div className="form-group">
                <label>Proof Of Address</label>
                <input type="file" />
              </div>

              <div className="form-group full-width">
                <button type="submit" className="submit-loan-btn">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default ApplyLoan;