import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>The App!</h1>
      <Link to="/patient">Patient</Link>
      <br />
      <Link to="/admission">Admission</Link>
      <br />
      <div style={{ width: "50%" }}></div>
    </div>
  );
}

export default App;
