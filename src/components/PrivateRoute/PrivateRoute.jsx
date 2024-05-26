import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { token } = useAuth();
  const shouldRedirect = !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
