import { userData } from "../../data/data";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/vote");
  };
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const passChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const submitHnadler = (event) => {
    event.preventDefault();
    console.log(enteredUser, enteredPassword);
    navigateToContacts();
  };

  return (
    <div>
      <form onSubmit={submitHnadler}>
        <input type="text" onChange={userChangeHandler} />
        <input type="password" onChange={passChangeHandler} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
