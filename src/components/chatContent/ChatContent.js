import React, { Component, createRef } from 'react';
import Avatar from '../chatList/Avatar';
import ChatItem from './ChatItem';
import p1 from '../../images/abdul-majid.jpg';

class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAUp1',
      type: '',
      msg: 'As-salamu alaykum Ahmad, How are you?',
    },
    {
      key: 2,
      image: p1,
      type: 'other',
      msg: "I'm fine.",
    },
    {
      key: 3,
      image: p1,
      type: 'other',
      msg: 'What about you?',
    },
    {
      key: 4,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      type: '',
      msg: 'Awesome these days.',
    },
    {
      key: 5,
      image:
        p1,
      type: 'other',
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
      type: '',
      msg: 'What plan brother?',
    },
    {
      key: 7,
      image:
        p1,
      type: 'other',
      msg: "I'm talking about the project",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: '',
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        if (this.state.msg !== '') {
          this.chatItms.push({
            key: 1,
            type: '',
            msg: this.state.msg,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: '' });
        }
      }
    });
    this.scrollToBottom();
  }

  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <>
        <div className="main__chatcontent">
          <div className="content__header">
            <div className="blocks">
              <div className="current-chatting-user">
                <Avatar
                  isOnline="active"
                  image={p1}
                />
                <p>Ahmad</p>
              </div>
            </div>

            <div className="blocks">
              <div className="settings">
                <button className="btn-nobg">
                  <i className="fa fa-cog"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="content__screen">
            <div className="chat__items">
              {this.state.chat.map((itm, index) => {
                return (
                  <ChatItem
                    animationDelay={index + 2}
                    key={itm.key}
                    user={itm.type ? itm.type : 'me'}
                    msg={itm.msg}
                    image={itm.image}
                  />
                );
              })}
              <div ref={this.messagesEndRef} />
            </div>
          </div>

          <div className="content__footer">
            <div className="sendNewMessage">
              <button className="addFiles">
                <i className="fa fa-plus"></i>
              </button>
              <input
                type="text"
                placeholder="Type a message here"
                onChange={this.onStateChange}
                value={this.state.msg}
              />
              <button className="btnSendMsg" id="sendMsgBtn">
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChatContent;
