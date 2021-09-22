import React from 'react';
import Nav from './components/nav/Nav';
import ChatScreen from './components/chatScreen/ChatScreen';
import './style/scss/App.scss';

const App = () => {
  return (
    <div className="__main">
      <Nav />
      <ChatScreen />
    </div>
  );
};

export default App;
