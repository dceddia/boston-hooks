import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [coffee, setGramsCoffee] = useState(13);
  const [water, setOuncesWater] = useState(8);

  return (
    <div>
      <h1>☕</h1>
      <h4>Water</h4>
      <div onClick={() => setOuncesWater(water + 1)}>
        {water} oz
      </div>
      <h4>Coffee</h4>
      <div onClick={() => setGramsCoffee(coffee + 1)}>
        {coffee} g
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
