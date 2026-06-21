import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import PersonalLoan from "./pages/PersonalLoan";
import ApplyLoan from "./pages/ApplyLoan";
import Contact from "./pages/Contact";
import Complaint from "./pages/Complaint";
import TrackApplication from "./pages/TrackApplication";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/track" element={<TrackApplication />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
