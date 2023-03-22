
import './App.css';

function App() {
  const title = "Christopher Purnell";
  const link = "https://github.com/Ctpurnell";

  
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>{"Welcome to my profile page"}</p>

        <a href={ link }>My GitHub Profile</a>
      </div>
      
    </div>
  );
}

export default App;
