import React from 'react';
import ChatList from '../chatList/ChatList';
import ChatContent from '../chatContent/ChatContent';
import UserProfile from '../userProfile/UserProfile';


const ChatScreen = () => {
  return (
      <div className="main__chatscreen">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
  );
};

export default ChatScreen;
