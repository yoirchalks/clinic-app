import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import AvatarUploader from "../components/Avatar";
import Sockets from "../components/Sockets";

function StaffPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const staffId = location.state.staff_id;
  const existingImage = location.state.image;

  const handleNextPatient = async () => {
    try {
      await axios.put(`https://qwithme-ro6v.onrender.com/api/ques/${staffId}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await axios.put(
        `https://qwithme-ro6v.onrender.com/api/signIns/${staffId}`,
        {
          id: staffId,
        }
      );
      navigate(-1);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <div>
      <AvatarUploader
        existingImage={existingImage}
        uploadUrl={`https://qwithme-ro6v.onrender.com/api/staff/${staffId}`}
      />
      <button onClick={handleNextPatient}>Next Patient</button>
      <button onClick={handleSignOut}>Log out</button>
      <Sockets uuid={location.state.uuid} />
    </div>
  );
}

export default StaffPage;
