import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://v2.jokeapi.dev/joke/Any")
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        setError(error);
      }).finally(()=>{
        setLoading(false);
      });
  }, []);

  const refetch = () => {
    setLoading(true)
    axios
      .get("https://v2.jokeapi.dev/joke/Any")
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        setError(error);
      }).finally(()=>{
        setLoading(false);
      });
  }


  if (loading) return <h1>Loading...</h1>;

  if (error) console.error(error);

  return (
    <div className="App">
      <div className="carta">
        <h1>{response && <span>{response.setup} : {response.delivery}</span>}</h1>
<button onClick={refetch}>Next</button>
      </div>
    </div>
  );
}

export default App;
