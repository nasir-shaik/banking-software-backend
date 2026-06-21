import { useState } from "react";

import { Link } from "react-router-dom";

function LoanCalculator() {
  const [amount, setAmount] = useState(50000);
  const [term, setTerm] = useState(24);

  const interestRate = 12;

  const interest = Math.round(
    amount * (interestRate / 100) * (term / 12)
  );

  const totalRepayment = amount + interest;

  const monthlyPayment = Math.round(
    totalRepayment / term
  );

  return (
    <section className="calculator-section">
      <h2>Loan Calculator</h2>

      <div className="calculator-box">

        <div className="field">
          <label>Loan Amount</label>

          <div className="amount-display">
            N$ {amount.toLocaleString()}
          </div>

          <input
            type="range"
            min="1000"
            max="500000"
            step="1000"
            value={amount}
            onChange={(e) =>
              setAmount(Number(e.target.value))
            }
          />
        </div>

        <div className="field">
          <label>Loan Term</label>

          <select
            value={term}
            onChange={(e) =>
              setTerm(Number(e.target.value))
            }
          >
            <option value="12">12 Months</option>
            <option value="24">24 Months</option>
            <option value="36">36 Months</option>
            <option value="48">48 Months</option>
            <option value="60">60 Months</option>
          </select>
        </div>

        <div className="interest-box">
          Interest Rate: {interestRate}% p.a.
        </div>

        <div className="monthly-result">
          <p>Estimated Monthly Payment</p>

          <h3>
            N$ {monthlyPayment.toLocaleString()}
          </h3>
        </div>

        <div className="loan-summary">

          <div className="summary-card">
            <h4>Loan Amount</h4>
            <span>
              N$ {amount.toLocaleString()}
            </span>
          </div>

          <div className="summary-card">
            <h4>Interest</h4>
            <span>
              N$ {interest.toLocaleString()}
            </span>
          </div>

          <div className="summary-card">
            <h4>Total Repayment</h4>
            <span>
              N$ {totalRepayment.toLocaleString()}
            </span>
          </div>

        </div>

  <Link to="/apply-loan" className="loan-apply-btn">
  Apply For This Loan
</Link>

      </div>
    </section>
  );
}

export default LoanCalculator;