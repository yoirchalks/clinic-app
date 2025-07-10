import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import AvatarUploader from "../components/Avatar";
import Sockets from "../components/Sockets";

function StaffPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const staffId = location.state.staff_id;
  const existingImage = location.state.image;

  const handleSignOut = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/signIns/${staffId}`,
        {
          id: staffId,
        }
      );
      navigate(-1);
      console.log(response);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <div>
      <AvatarUploader
        existingImage={existingImage}
        uploadUrl={`http://localhost:3000/api/staff/${staffId}`}
      />
      <button className="">Next Patient</button>
      <button onClick={handleSignOut}>Log out</button>
      <Sockets uuid={location.state.uuid} />
    </div>
  );
}

export default StaffPage;
