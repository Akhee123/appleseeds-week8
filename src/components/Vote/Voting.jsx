import { userData } from "../../data/data";
import { useState } from "react";

export default function Voting() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [voted, setVoted] = useState(false);

  const selectHandler = (event) => {
    setSelectedCandidate(event.target.value);
  };
  const voteHandler = (event) => {
    event.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users"));
    // console.log(currentUser);
    // console.log(users);

    // Checking if user voted
if (users.find((element) => element.name === currentUser.name).voted){
    setVoted(true);
}
else {
    users.find((element) => element.name === currentUser.name).voted = true;
}
  };

  return (
    <>
      <div>
        <select id="candidates" onChange={selectHandler}>
          {/* Bad Practice!!!!! Will adjust later */}
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Cow">Cow</option>
          <option value="Lion">Lion</option>
        </select>
        <button onClick={voteHandler}>Vote</button>
      </div>
    </>
  );
}
