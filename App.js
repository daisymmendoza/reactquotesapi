import React, { useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <LoadQuotes></LoadQuotes>
    </div>
  );
}

function LoadQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [newQuotes, setNewQuotes] = useState(false);
  
  useEffect(() => {
    fetch("http://api.quotable.io/random")
    .then ((resp) => resp.json())
    .then ((data) => setQuotes(data))
  }, [newQuotes]);
  return (
    <div className="quote">
      <h1>"{quotes.content}"</h1>
      <h2>-{quotes.author}</h2>

      <br></br>

      <button onClick={() => setNewQuotes(!newQuotes)}>New Quote</button>
    </div>
  );
}

export default App;
