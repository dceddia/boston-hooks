import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [user, setUser] = useState({ username: 'dave' });

  return (
    <>
      <Header user={user} />
      <Body user={user} />
    </>
  );
}

function Header({ user }) {
  return <header>Hi {user.username}</header>;
}

function Body({ user }) {
  return (
    <main>
      <Sidebar user={user} />
      <Content />
    </main>
  );
}

function Sidebar({ user }) {
  return <aside>{user.username}</aside>;
}

function Content() {
  return (
    <article>
      This is some great content right here.
    </article>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
