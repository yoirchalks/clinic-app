import axios from "axios";
import { useLocation } from "react-router-dom";

function StaffPage() {
  const location = useLocation();
  const staffId = location.state.staff_id;

  const handleSignOut = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/signIns/${staffId}`,
        {
          id: staffId,
        }
      ); //TODO: there are currently issues with socket.io backend...
      console.log(response);
    } catch (error) {}
  };
  return (
    <div>
      <button className="">Next Patient</button>
      <button onClick={handleSignOut}>Log out</button>
    </div>
  );
}

export default StaffPage;
