import { Navigate, Outlet } from "react-router-dom";
import { useGlobalState } from "../store";

const AuthGuard = () => {
  const [currentUser] = useGlobalState("currentUser");
  return !currentUser ? <Navigate to={"/signup"} /> : <Outlet />;
};

export default AuthGuard;
