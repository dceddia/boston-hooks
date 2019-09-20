import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({
    username: 'dave'
  });

  return (
    <UserContext.Provider value={user}>
      <>
        <Header user={user} />
        <Body />
      </>
    </UserContext.Provider>
  );
}

function Header({ user }) {
  return <header>Hi {user.username}</header>;
}

function Body() {
  return (
    <main>
      <Sidebar />
      <Content />
    </main>
  );
}

function Sidebar() {
  const user = useContext(UserContext);
  return <aside>{user.username}</aside>;
}

function Content() {
  return (
    <article>
      This is some great content right here.
    </article>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
