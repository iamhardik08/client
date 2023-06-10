import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import ManSvg from "./man.svg";
import "./LoginPage.css";

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
    <div className="login-page">
      <div className="login-left">
        <div className="login-form">
          <div className="sign-in-text">
          Sign in

          </div>
          
          <div className="enter-text">
          Hey! Enter your details to login to your account
          </div>

          <form onSubmit={handleSubmit(handleSubmitCb)}>
        <input {...register("email", { required: true, maxLength: 255, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  })} placeholder="Email" className="login-input"/>
        <br />
        <input {...register("password", { required: true, maxLength: 255})} placeholder="Password" className="login-input"/>
        <br />
        <input type="submit" className="login-btn"/>
      </form>
        </div>
      </div>

      <div className="login-right">
        <img src={ManSvg} />
      </div>
     
    </div>
  );
}

export default LoginPage;
