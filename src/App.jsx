import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState('');
  const [text, setText] = useState('');
  const [displaytext, setDisplayText] = useState('');
  const [resultText, setResultText] = useState('');

  const click = async () => {
    try {
      const response = await axios.post('http://localhost:5000/meow', { text }, {headers: {'Content-Type': 'application/json'}});
      
      setDisplayText(text);
      setResultText(response.data.result);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to meowify. Make sure the backend is running on port 5000!');
    }
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
      <img src='https://media.tenor.com/0EDznml5BDAAAAAj/cat-spinning.gif' alt='spinning cat' />
      <h1>meowifier</h1>
      <textarea placeholder='write something' name="postContent" value={text} onChange={handleChange} ></textarea>
      <button className="textButton" onClick={click}>press me</button>
      {displaytext && <p className="original">Original: {displaytext}</p>}
      {resultText && <h2 className="result">Meowified: {resultText}</h2>}
      <p className="catFact">{catFact}</p>
    </div>
  );
}

export default App;