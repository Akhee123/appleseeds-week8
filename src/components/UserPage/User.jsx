import { useState } from "react";
import LoginForm from "../Login/LoginForm";

export default function User() {
  const [backToLogin, setBackToLogin] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const clickHandler = () => {
    setBackToLogin(true);
  };

  return (
    <>
      {backToLogin && <LoginForm />}
      {!backToLogin && (
        <div>
          <h1>Thank you for voting, {currentUser.name}</h1>
          <button onClick={clickHandler}>Back to Login</button>
        </div>
      )}
    </>
  );
}
