import React, { Component } from 'react';
import ChatListItems from './ChatListItems';
import p1 from '../../images/abdul-majid.jpg';

class ChatList extends Component {
  allChatUsers = [
    {
      image: p1,
      id: 1,
      name: 'Ahmad',
      active: true,
      isOnline: true,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 2,
      name: 'Tayyib',
      active: false,
      isOnline: false,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 3,
      name: 'Wafeeq',
      active: false,
      isOnline: false,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 4,
      name: 'Salah',
      active: false,
      isOnline: true,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 5,
      name: 'Zakariya',
      active: false,
      isOnline: false,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 6,
      name: 'Sabir',
      active: false,
      isOnline: true,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 7,
      name: 'Omar',
      active: false,
      isOnline: true,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 8,
      name: 'Fakhri',
      active: false,
      isOnline: false,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 9,
      name: 'Ali ',
      active: false,
      isOnline: true,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      id: 10,
      name: 'Yunus',
      active: false,
      isOnline: true,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }

  render() {
    return (
      <>
        <div className="main__chatlist">
          <button className="btn">
            <i className="fa fa-plus"></i>
            <span>New conversation</span>
          </button>

          <div className="chatlist__heading">
            <h2>Chats</h2>
            <button className="btn-nobg">
              <i className="fa fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="chatlist__search">
            <div className="search_wrap">
              <input type="text" placeholder="Search Here" required />
              <button className="search-btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="chatlist__items">
            {this.state.allChats.map((item, index) => {
              return (
                <ChatListItems
                  name={item.name}
                  key={item.id}
                  animationDelay={index + 1}
                  active={item.active ? 'active' : ''}
                  isOnline={item.isOnline ? 'active' : ''}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ChatList;
