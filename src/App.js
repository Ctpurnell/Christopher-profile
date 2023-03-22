import "./App.css";
import pic from "../src/IMG_0112.png";

function App() {
  const title = "Christopher Purnell";
  const link = "https://github.com/Ctpurnell";
  
  return (
    <div className="container">
      <h1>{title}</h1>
      <div>
        <img
          style={{ width: "160px", height: "160px", borderRadius: "80px" }}
          src={pic}
          alt="picture of my face"
        />
      </div>
      <h2>{"Welcome to my profile page. Yes all are welcome!"}</h2>

      <a href={link}>My GitHub Profile</a>
    </div>
  );
}

export default App;
