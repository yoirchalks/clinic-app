import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const onUserClick = () => {
    navigate("/patientLogin");
  };
  const onStaffClick = () => {
    navigate("/staffLogin");
  };

  return (
    <>
      <h1>Welcome to the Temple Fortune Health Center</h1>
      <h2>Please choose to continue</h2>
      <button className="ml-6" onClick={onUserClick}>
        Patient
      </button>
      <button onClick={onStaffClick}>Staff</button>
    </>
  );
}

export default LandingPage;
