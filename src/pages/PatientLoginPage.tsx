import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientLoginPage = () => {
  const [patientId, setPatientId] = useState("");
  const [staffId, setStaffId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const cleanedPatientId = parseInt(patientId.trim());
    const cleanedStaffId = parseInt(staffId.trim());

    if (!setPatientId) {
      alert(`patient id required`);
      return;
    }
    if (!setStaffId) {
      alert(`staff id required`);
      return;
    }
    let attempt = "patient";
    try {
      const response = await axios.post("http://localhost:3000/api/signIns", {
        patientId: cleanedPatientId,
        staffId: cleanedStaffId,
        attempt,
      });

      navigate("/patient", { state: response.data });
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          error.message ||
          "something went wrong whilst sending your data"
      );
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl text-green-950 font-bold mb-6 text-center">
            Login
          </h2>
          <div className="staffIdInput mb-6">
            <label className="block mb-2 font-semibold" htmlFor="staffId">
              Please enter staff ID here.
            </label>
            <input
              onChange={(e) => setStaffId(e.target.value)}
              type="number"
              min={1}
              name="staffId"
              id="staffId"
              placeholder="Staff ID"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="patientIdInput mb-6">
            <label className="block mb-2 font-semibold" htmlFor="patientId">
              Please enter your personal ID number here
            </label>
            <input
              id="patientId"
              onChange={(e) => setPatientId(e.target.value)}
              type="number"
              min={1}
              placeholder="Enter user ID here"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default PatientLoginPage;
