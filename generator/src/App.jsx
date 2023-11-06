import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./Home";

function App() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  const [image, setImage] = useState([]);
  const [type, setType] = useState([]);

  URL = `https://pokeapi.co/api/v2/pokemon/${number}`;

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [URL]);

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
      setImage(response.data.sprites.other.dream_world.front_default);
      setType(response.data.type);

      debugger;
    } catch (error) {}
  };

  return (
    <div className="App">
      <h2> Select A Pokemon!!!</h2>
      <Home data={data} handleChange={handleChange} image={image} type={type} />
    </div>
  );
}

export default App;
