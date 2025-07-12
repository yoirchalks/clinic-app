import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffLoginPage = () => {
  const [staffId, setStaffId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const cleanedStaffId = parseInt(staffId.trim());

    if (!setStaffId) {
      alert(`staff id required`);
      return;
    }
    let attempt = "doctor";
    try {
      const response = await axios.post(
        "https://qwithme-ro6v.onrender.com/api/signIns",
        {
          staffId: cleanedStaffId,
          attempt,
        }
      );
      navigate("/staff", { state: response.data });
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
            Staff Login
          </h2>
          <div className="staffIdInput mb-6">
            <label className="block mb-2 font-semibold" htmlFor="staffId">
              Please enter ID here.
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
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default StaffLoginPage;
