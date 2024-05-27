import axios from "axios";
import { useState } from "react";
import Modal from "../Modal";
import "../../styles/modal.css";
import { useNavigate } from "react-router-dom";

export default function NewAdmissionForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    password: "",
    complaints: "",
  });
  const [error, setError] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
  const [newUserData, setNewUserData] = useState(null);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/patient/signup",
        formData
      );

      setNewUserData(response.data);
      setFormData({
        firstName: "",
        lastName: "",
        middleName: "",
        password: "",
        complaints: "",
      });
    } catch (error) {
      setError("Failed to create patient");
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <>
      <div>
        <h2>Patient Admission Form:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="middleName">Middle Name:</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              maxLength={20}
              required
            />
            <br />
            <label htmlFor="complaints">Complaints:</label>
            <textarea
              id="complaints"
              name="complaints"
              value={formData.complaints}
              onChange={handleChange}
              rows={4}
              cols={50}
              required
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button type="submit" disabled={disableBtn}>
            Create Patient
          </button>
        </form>
      </div>
      {newUserData && (
        <Modal>
          <h1>
            Welcome {newUserData.firstName} {newUserData.lastName}!
          </h1>
          <h2>Your Patient ID: {newUserData.patientID}</h2>
          <div>Remember that!</div>
          <button onClick={handleCloseModal}>Thanks!</button>
        </Modal>
      )}
    </>
  );
}
