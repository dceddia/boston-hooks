import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(json => json.data.children.map(c => c.data))
      .then(posts => setPosts(posts));
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
