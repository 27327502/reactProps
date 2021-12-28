import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/profile";

function App() {
  const name = "bilel rayana";
  const bio = "hello my name is bilel nice to meet you";
  const profession = "developpeur";
  const alertt = () => {
    alert("Hello si  " + name);
  };
  return (
    <div className="App">
      <Profile name={name} bio={bio} profession={profession} alert={alertt}>
        <img src="profilephoto.JPG" />
      </Profile>
    </div>
  );
}

export default App;
