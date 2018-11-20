import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [items, setItems] = useState([
    'Eat',
    'Sleep',
    'Hooks'
  ]);

  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, 'Hooks'])}>
        More Hooks
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
