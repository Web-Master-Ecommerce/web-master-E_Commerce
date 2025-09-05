import { Navigate } from "react-router-dom";

export default function Middleware({ children }) {
  const isAuth = localStorage.getItem("token"); // check if user is authenticated

  if (!isAuth) {
    return <Navigate  to="/login" replace />; // redirect to login if not authenticated
  }

  return children; // render the protected page
}
