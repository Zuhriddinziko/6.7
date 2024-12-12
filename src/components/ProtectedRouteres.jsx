import { Navigate } from "react-router-dom";

function ProtectedRouteres({ children, user }) {
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRouteres;
