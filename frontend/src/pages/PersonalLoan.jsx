import Navbar from "../components/Navbar";

function PersonalLoan() {
  return (
    <>
      <Navbar />

      <div className="loan-page">

        <section className="loan-hero">
          <div className="container">
            <h1>Personal Loans</h1>

            <p>
              Fast, flexible, and affordable personal loans designed
              to help you achieve your financial goals.
            </p>
          </div>
        </section>

        <section className="loan-features">
          <div className="container">

            <h2>Loan Features</h2>

            <div className="loan-feature-grid">

              <div className="feature-card">
                <h3>N$ 1,000 - N$ 500,000</h3>
                <p>Flexible loan amounts.</p>
              </div>

              <div className="feature-card">
                <h3>12 - 60 Months</h3>
                <p>Convenient repayment terms.</p>
              </div>

              <div className="feature-card">
                <h3>Quick Approval</h3>
                <p>Fast online application process.</p>
              </div>

            </div>

          </div>
        </section>

        <section className="eligibility-section">
          <div className="container">

            <h2>Eligibility Criteria</h2>

            <div className="eligibility-grid">

              <div className="eligibility-card">
                Must be 18 years or older
              </div>

              <div className="eligibility-card">
                Valid National ID
              </div>

              <div className="eligibility-card">
                Proof of Income
              </div>

              <div className="eligibility-card">
                Active Bank Account
              </div>

            </div>

          </div>
        </section>

        <section className="documents-section">
          <div className="container">

            <h2>Required Documents</h2>

            <div className="document-grid">

              <div className="document-card">
                National ID Copy
              </div>

              <div className="document-card">
                Latest Payslip
              </div>

              <div className="document-card">
                Bank Statement
              </div>

              <div className="document-card">
                Proof of Address
              </div>

            </div>

          </div>
        </section>

        <section className="loan-process">
          <div className="container">

            <h2>How It Works</h2>

            <div className="process-grid">

              <div className="process-card">
                <h3>1</h3>
                <p>Apply Online</p>
              </div>

              <div className="process-card">
                <h3>2</h3>
                <p>Upload Documents</p>
              </div>

              <div className="process-card">
                <h3>3</h3>
                <p>Verification</p>
              </div>

              <div className="process-card">
                <h3>4</h3>
                <p>Loan Disbursement</p>
              </div>

            </div>

          </div>
        </section>

        <section className="loan-cta">
          <div className="container">

            <h2>Ready To Apply?</h2>

            <p>
              Start your application today and receive fast approval.
            </p>

            <button>
              Apply Now
            </button>

          </div>
        </section>

      </div>
    </>
  );
}

export default PersonalLoan;