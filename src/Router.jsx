import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Patient from "./pages/Patient";
import Admission from "./pages/Admission";
import NewAdmissionForm from "./components/admission/NewAdmissionForm";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div>Error Page</div>,
      element: <App />,
    },
    { path: "/patient", element: <Patient /> },
    { path: "/admission", element: <Admission /> },
    { path: "/admission/new", element: <NewAdmissionForm /> },
  ]);

  return <RouterProvider router={router} />;
}
