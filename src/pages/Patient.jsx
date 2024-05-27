import { useState } from "react";
import PatientLoginForm from "../components/patient/PatientLoginForm";
import PatientDashboard from "../components/patient/PatientDashboard";

export default function Patient() {
  const [patientData, setPatientData] = useState(null);

  const handleLogOut = () => {
    setPatientData(null);
    console.log(patientData);
  };

  return (
    <>
      {patientData ? (
        <PatientDashboard
          patientData={patientData}
          handleLogOut={handleLogOut}
        />
      ) : (
        <div>
          <PatientLoginForm setPatientData={setPatientData} />
        </div>
      )}
    </>
  );
}
