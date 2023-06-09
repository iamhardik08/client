import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();
  if (!auth.token) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.email}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

export default AuthStatus;
