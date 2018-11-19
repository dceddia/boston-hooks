import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [people, setPeople] = useState(0);

  return (
    <div>
      <h1>Hello React Boston!</h1>
      People here tonight: {people}
      <button onClick={() => setPeople(people + 1)}>
        Welcome One More
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
