import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [catFact, setCatFact] = useState('');
  const [text, setText] = useState('');
  const [resultText, setResultText] = useState('');

  const click = async () => {
    try {
      const response = await axios.post(`${API_URL}/meow`, { text }, {headers: {'Content-Type': 'application/json'}});
      
      setResultText(response.data.result);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to meowify.');
    }
  }

  useEffect(() => {
    axios.get("https://catfact.ninja/fact").catch(() => {
      setCatFact('mraow');
    }).then((res) => {
      if (res) setCatFact(res.data.fact);
    });
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <img src='https://media.tenor.com/0EDznml5BDAAAAAj/cat-spinning.gif' alt='spinning cat' />
      <h1>meowifier</h1>
      <textarea placeholder='write something' name="postContent" value={text} onChange={handleChange} ></textarea>
      <button className="textButton" onClick={click}>press me</button>
      {resultText && <h2 className="result">{resultText}</h2>}
      <p className="catFact">{catFact}</p>
      <div class="link"><a href="https://github.com/krovskiy/meowifier-web"><img src="./src/assets/imgs/github.svg"/></a></div>
    
    </div>
  );
}

export default App;