import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/";

  function handleSubmitCb(data) {
    auth.signin(data.email, data.password, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit(handleSubmitCb)}>
        <input {...register("email")} placeholder="Email" />
        <input {...register("password")} placeholder="Password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;
