import { useLocation } from "react-router-dom";
const PatientPage = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <button>Cancel appointment</button>
    </>
  );
};

export default PatientPage;
