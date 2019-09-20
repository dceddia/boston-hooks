import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function useToggle(initialState) {
  const [isVisible, setVisible] = useState(
    initialState
  );

  const toggle = useCallback(
    () => setVisible(vis => !vis),
    []
  );

  return [isVisible, toggle];
}

function SpoilerAlert({ text }) {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div>
      {isVisible && <span>{text}</span>}
      {!isVisible && (
        <span className="hidden">~spoilers~</span>
      )}
      <button onClick={toggleVisible}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

ReactDOM.render(
  <SpoilerAlert text="Vader is Luke's Dad" />,
  document.querySelector('#root')
);
