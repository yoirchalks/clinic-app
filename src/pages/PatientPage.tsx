import { useLocation } from "react-router-dom";
const PatientPage = () => {
  const location = useLocation();
  console.log(location.state);

  return <div>PatientPage</div>;
};

export default PatientPage;
