import PropTypes from "prop-types";

export default function PatientDashboard({ patientData, handleLogOut }) {
  return (
    <div>
      <h2>
        Welcome {patientData.firstName} {patientData.lastName}!
      </h2>
      <button onClick={handleLogOut}>Log out</button>
      <button>Edit</button>
    </div>
  );
}

PatientDashboard.propTypes = {
  patientData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    patientID: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleLogOut: PropTypes.func.isRequired,
};
