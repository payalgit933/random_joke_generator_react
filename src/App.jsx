import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setJoke(res.data);
    }
    catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!joke) return <p>loading...</p>

  return (
    <div className="min-h-screen flex bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">😂 Random Joke Generator</h1>

        <div className="m-6 p-4">
          <p className="text-lg text-gray-900 font-semibold">🤔{joke.setup}</p>
          <p className="text-gray-700 mt-3">😏{joke.punchline}</p>
        </div>

        <button onClick={getData} className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Get Another Joke
        </button>
      </div>
    </div>
  );
}

export default App;
