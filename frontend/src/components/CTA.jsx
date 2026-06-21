import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <h2>Ready To Apply?</h2>

      <p>
        Start your loan application today and receive fast approval with
        transparent repayment terms.
      </p>

      <Link to="/apply-loan" className="cta-apply-btn">
        Apply Now
      </Link>
    </section>
  );
}

export default CTA;


