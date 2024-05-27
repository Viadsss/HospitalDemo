import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function PatientLoginForm({ setPatientData }) {
  const [formData, setFormData] = useState({ id: "", password: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/patient/login",
        formData
      );

      setPatientData(response.data);
      setFormData({ id: "", password: "" });
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Patient ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id.toUpperCase()}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit" disabled={isLoading}>
          Log In
        </button>
      </form>
    </div>
  );
}

PatientLoginForm.propTypes = {
  setPatientData: PropTypes.func.isRequired,
};
