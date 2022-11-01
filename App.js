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
  
  useEffect(() => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then ((resp) => resp.json())
    .then ((data) => setQuotes(data))
  }, []);
  return (
    <div className="quotes">
      {quotes.map((quote) => (
        <Quote quote={quote}></Quote>
      ))}
    </div>
  );
}

function Quote(props) {
  const {quotes} = props.quote;
  return (
    <div className="quote">
      <h2>{quotes}</h2>
    </div>
  );
}

export default App;
