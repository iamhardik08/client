import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const data = {
      "email" : "thardik41@gmail.com",
      "password": "abc123"
  }
    fetch("http://localhost:8000/auth/login", {method: 'post', headers: { "Content-type": "application/json" }, body: JSON.stringify(data)})
      .then((response) => response.json())
      .then((resp) => console.log(resp));
  }, []);
  return <div className="App">Hello World</div>;
}

export default App;
