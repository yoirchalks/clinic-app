import { useLocation, useNavigate } from "react-router-dom";
import AvatarUploader from "../components/Avatar";
import axios from "axios";

const PatientPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const patientId = location.state?.patient_id;
  const existingImage = location.state?.image;

  const handleCancelAppointment = async () => {
    const confirm = window.confirm("are you sure you want to leave the que?");
    if (confirm) {
      try {
        await axios.put(`http://localhost:3000/api/ques/${patientId}`);
        alert("appointment cancelled");
        console.log("appointment cancelled");
        navigate(-1);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <AvatarUploader
        existingImage={existingImage}
        uploadUrl={`http://localhost:3000/api/patients/${patientId}`}
      />
      <button onClick={handleCancelAppointment}>Cancel appointment</button>
    </>
  );
};

export default PatientPage;
