import "./App.css";

function App() {
  const title = "Christopher Purnell";
  const link = "https://github.com/Ctpurnell";
  const pic = "/public/assets/IMG_0112.png"
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
      <p>{"Welcome to my profile page"}</p>

      <a href={link}>My GitHub Profile</a>
    </div>
  );
}

export default App;
