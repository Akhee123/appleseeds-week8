import { userData } from "../../data/data";
import { useState } from "react";
import Admin from "../AdminPage/Admin";
import User from "../UserPage/User";

export default function Voting() {
  // useStats for voting page
  const [selectedCandidate, setSelectedCandidate] = useState("Dog"); // Selected Candidate stat
  const [submitted, setSubmitted] = useState(false); // Submitted Flag

  // Current user data
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isAdmin = currentUser.type === "admin" ? true : false;
  const isUser = currentUser.type === "user" ? true : false;

  // Get voting user and users data from DB
  const users = JSON.parse(localStorage.getItem("users"));
  const selectedUser = users.findIndex(
    (element) => element.name === currentUser.name
  ); // Find index of the user in the useres DB
  const voted = users[selectedUser].voted;

  // Handler for selectedCandidate
  const selectHandler = (event) => {
    setSelectedCandidate(event.target.value);
  };

  // Handler for the voting process
  const voteHandler = (event) => {
    event.preventDefault();

    // Take vote
    if (!voted) {
      users[selectedUser].voted = true;
      // Update vote status in DB
      localStorage.setItem("users", JSON.stringify(users));

      // Vote action
      let vote;
      switch (selectedCandidate) {
        case "Dog":
          vote = parseInt(localStorage.getItem("Dog"));
          localStorage.setItem("Dog", ++vote);
          break;
        case "Cat":
          vote = parseInt(localStorage.getItem("Cat"));
          localStorage.setItem("Cat", ++vote);
          break;
        case "Cow":
          vote = parseInt(localStorage.getItem("Cow"));
          localStorage.setItem("Cow", ++vote);
          break;
        case "Lion":
          vote = parseInt(localStorage.getItem("Lion"));
          localStorage.setItem("Lion", ++vote);
          break;

        default:
          break;
      }
    }
    setSubmitted(true);
  };

  console.log(voted);
  return (
    <>
      {(isAdmin && voted) && <Admin />}
      {(isUser && voted) && <User />}
      {!voted && (
        <div>
          <select id="candidates" defaultValue="Dog" onChange={selectHandler}>
            {/* Bad Practice!!!!! Will adjust later */}
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Cow">Cow</option>
            <option value="Lion">Lion</option>
          </select>
          <button onClick={voteHandler}>Vote</button>
        </div>
      )}
    </>
  );
}
