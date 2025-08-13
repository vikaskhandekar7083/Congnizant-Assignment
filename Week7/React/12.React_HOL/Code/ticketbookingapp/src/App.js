import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage  from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin  = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let pageToRender;
  if (isLoggedIn) {
    pageToRender = <UserPage onLogout={handleLogout} />;
  } else {
    pageToRender = <GuestPage onLogin={handleLogin} />;
  }

  return (
    <div>
      {pageToRender}
    </div>
  );
}

export default App;
