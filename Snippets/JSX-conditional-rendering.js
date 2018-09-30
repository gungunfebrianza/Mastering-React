import React from 'react';
import './Message.css';

class Message extends React.Component {
  render() {
    let message;
    let today = new Date().getDay();

    if (today == 0) {
      message = <div className="sorry">We are closed on Sunday...</div>;
    } else {
      message = <div className="happy">How can we help you?</div>;
    }

    return message;
  }
}

export default Message;
