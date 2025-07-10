import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PatientLoginPage from "./pages/PatientLoginPage";
import PatientPage from "./pages/PatientPage";
import StaffPage from "./pages/StaffPage";
import StaffLoginPage from "./pages/StaffLoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/patientLogin" element={<PatientLoginPage />} />
      <Route path="/staffLogin" element={<StaffLoginPage />} />
      <Route path="/patient" element={<PatientPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
