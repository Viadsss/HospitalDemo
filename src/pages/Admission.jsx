import { Link } from "react-router-dom";

export default function Admission() {
  return (
    <div>
      <h1>I am</h1>
      <Link to="./new">New Patient</Link>
      <br />
      <Link to="./returning">Returning Patient</Link>
    </div>
  );
}
