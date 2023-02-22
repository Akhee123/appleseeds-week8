import "./App.css";
import "./components/Login/LoginForm";
import LoginForm from "./components/Login/LoginForm";
import { userData } from "./data/data";

function App() {
  const candidates = {
    dog: 0,
    cat: 0,
    cow: 0,
    lion: 0,
  };
  
  const users = userData.map((element) => {
    return { ...element, voted: false };
  });

  localStorage.setItem("users", JSON.stringify(users));

  // Bad Practice!!!!! Will adjust later
  localStorage.setItem("Dog", candidates.dog);
  localStorage.setItem("Cat", candidates.cat);
  localStorage.setItem("Cow", candidates.cow);
  localStorage.setItem("Lion", candidates.lion);

  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
