import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    document.title = title;
    console.log('set title', title);
  }, [title]);

  return (
    <>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
