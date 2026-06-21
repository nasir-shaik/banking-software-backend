import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function TrackApplication() {
  const [applicationNo, setApplicationNo] = useState("");
  const [application, setApplication] = useState(null);
  const [error, setError] = useState("");

  const trackApplication = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/track-application",
        {
          application_no: applicationNo,
        }
      );

      setApplication(response.data.data);
      setError("");
    } catch {
      setApplication(null);
      setError("Application Not Found");
    }
  };

  return (
    <>
      <Navbar />

      <div className="track-page">
        <section className="track-hero">
          <div className="container">
            <h1>Track Your Application</h1>

            <p>
              Enter your application number to check the latest
              status of your loan application.
            </p>
          </div>
        </section>

        <section className="track-search-section">
          <div className="track-search-card">
            <h2>Application Lookup</h2>

            <input
              type="text"
              placeholder="APP-202654321"
              value={applicationNo}
              onChange={(e) =>
                setApplicationNo(e.target.value)
              }
            />

            <button onClick={trackApplication}>
              Track Application
            </button>
          </div>
        </section>

        {application && (
          <section className="status-section">
            <h2>Application Details</h2>

            <div className="track-result-card">

              <p>
                <strong>Application No:</strong>{" "}
                {application.application_no}
              </p>

              <p>
                <strong>Name:</strong>{" "}
                {application.first_name}{" "}
                {application.last_name}
              </p>

              <p>
                <strong>Loan Amount:</strong>
                {" "}N$ {application.loan_amount}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {application.status}
              </p>

            </div>
          </section>
        )}

        {error && (
          <section className="status-section">
            <div className="track-result-card">
              <h3>{error}</h3>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default TrackApplication;