import "../admin.css";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [applications, setApplications] = useState([]);

  const loadApplications = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/applications",
      );

      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/applications",
        );

        setApplications(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/loan-status/${id}`, {
        status,
      });

      alert(`Application ${status}`);

      loadApplications();
    } catch (error) {
      console.log(error);
      alert("Failed to update status");
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-topbar">
        <h2>Namibia Loans Admin</h2>

        <button
          className="admin-logout-btn"
          onClick={() => {
            localStorage.removeItem("adminLoggedIn");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </button>
      </div>

      <div className="admin-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Applications</h3>
            <h1>{applications.length}</h1>
          </div>

          <div className="stat-card">
            <h3>Pending</h3>
            <h1>{applications.filter((x) => x.status === "Pending").length}</h1>
          </div>

          <div className="stat-card">
            <h3>Approved</h3>
            <h1>
              {applications.filter((x) => x.status === "Approved").length}
            </h1>
          </div>

          <div className="stat-card">
            <h3>Rejected</h3>
            <h1>
              {applications.filter((x) => x.status === "Rejected").length}
            </h1>
          </div>
        </div>

        <div className="application-table">
          <table>
            <thead>
              <tr>
                <th>Application No</th>
                <th>Name</th>
                <th>Loan Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.application_no}</td>

                  <td>
                    {app.first_name} {app.last_name}
                  </td>

                  <td>N$ {app.loan_amount}</td>

                  <td>
                    <span
                      className={
                        app.status === "Approved"
                          ? "status-approved"
                          : app.status === "Rejected"
                            ? "status-rejected"
                            : "status-pending"
                      }
                    >
                      {app.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="approve-btn"
                      onClick={() => updateStatus(app.id, "Approved")}
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() => updateStatus(app.id, "Rejected")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
