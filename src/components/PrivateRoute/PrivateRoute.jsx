import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { user } = useAuth();
  const shouldRedirect = !user;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
