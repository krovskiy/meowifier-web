import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState('');
  const [text, setText] = useState('');
  const [displaytext, setDisplayText] = useState('');
  const [resultText, setResultText] = useState('');

  const click = async () => {
    const response = await axios.post('http://localhost:3000/meow', { text }, {headers: {'Content-Type': 'application/json'}});
    
    setDisplayText(text);
    setResultText(response.data.result);
  }

  useEffect(() => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <img src='https://media.tenor.com/0EDznml5BDAAAAAj/cat-spinning.gif'></img>
      <h1>meowifier</h1>
      <h2>{resultText}</h2>
      <textarea placeholder='write something' name="postContent" value={text} onChange={handleChange} ></textarea>
      <button className="textButton" onClick={click}>press me</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;