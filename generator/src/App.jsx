import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      setPokemons(response.data);
      debugger;
    } catch (error) {}
  };

  return <div className="App"></div>;
}

export default App;
