import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Test() {
  useOnMount(() => {
    console.log('mount');
  });
  useOnUnmount(() => console.log('unmounting...'));
  return <p>I am mounted</p>;
}
function useOnMount(fn) {
  useEffect(() => {
    fn();
  }, []);
}

function useOnUnmount(fn) {
  useEffect(() => fn, []);
}
function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <div>
      {mounted && <Test />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle Mountedness
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
