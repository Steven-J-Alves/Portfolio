import React, { useState } from 'react';

import './styles.css';

const Message = ({ setTrigger }) => {

  const [emailUser, setemailUser] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const [emails, setEmails] = useState([]);

  function handleMessageClick() {
    setTrigger(false);
  }

  function handleSend(e) {
    e.preventDefault();

    let newEmail = {
      emailUser,
      emailBody
    }

    // bug
    setEmails([...emails, newEmail]);
    localStorage.setItem('emailss', JSON.stringify(emails));
    setTrigger(false);
  }

  return (
    <section id="message-container">
      <div className="message-content">
        <h1>Email</h1>
        <form onSubmit={handleSend}>
          <input
            placeholder="Email"
            value={emailUser}
            onChange={e => setemailUser(e.target.value)}
            type="email"
          />
          <br />
          <textarea
            placeholder="Email body"
            value={emailBody}
            onChange={e => setEmailBody(e.target.value)}
          />
          <br />
          <button
            className="send"
            type="submit">Send</button><br />
          <button
            className="back"
            onClick={handleMessageClick}>
            Back
            </button>
        </form>
      </div>
    </section >
  )
}

export default Message;