import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [staffId, setStaffId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log({ userId, staffId });
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
              type="text"
              name="staffId"
              id="staffId"
              placeholder="Staff ID"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="userIdInput mb-6">
            <label className="block mb-2 font-semibold" htmlFor="userId">
              If you are a patient, please enter your personal ID number here
            </label>
            <input
              onChange={(e) => setUserId(e.target.value)}
              type="text"
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

export default LoginPage;
