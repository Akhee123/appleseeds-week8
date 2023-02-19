import { userData } from "../../data/data";
import Voting from "../Vote/Voting";
import { useState } from "react";

export default function LoginForm() {
  const [enteredUserEmail, setEnteredUserEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  //   const [currentUser, setCurrentUser] = useState(null);

  const userChangeHandler = (event) => {
    setEnteredUserEmail(event.target.value);
  };
  const passChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const submitHnadler = (event) => {
    event.preventDefault();
    const user = userData.find(
      (element) =>
        element.email === enteredUserEmail &&
        element.password === enteredPassword
    );

    if (user) {
      // Push user data to local storage
      localStorage.setItem("currentUser", JSON.stringify(user));
      setLoggedIn(true);
      //   setCurrentUser(user);
      console.log(user);
    } else {
      alert("Please Enter A valid Email or Password");
    }
  };

  return (
    <>
      {loggedIn && <Voting />}
      {!loggedIn && (
        <div>
          <form onSubmit={submitHnadler}>
            <input type="text" onChange={userChangeHandler} />
            <input type="password" onChange={passChangeHandler} />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
}
