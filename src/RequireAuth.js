import {
    useLocation,
    Navigate,
  } from "react-router-dom";
  import "./App.css";
  import useAuth from "./useAuth";
  
  function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
  
  
  
  export default RequireAuth;
  