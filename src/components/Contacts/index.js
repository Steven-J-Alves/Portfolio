import React, { useState } from 'react';

import "@fortawesome/fontawesome-free/css/all.css";
import './styles.css'

import Message from '../Message'

const About = () => {

  // State
  const [trigger, setTrigger] = useState(false);

  // 
  function handleMessageClick() {
    setTrigger(true)
  }

  // 
  if (trigger) {
    return <Message setTrigger={setTrigger} />
  } else {
    return (
      <section id="contacts-container">
        <div className="contacts-content">
          <h1>Contacts</h1>
          <button onClick={() => handleMessageClick()}>Send message</button>
          <p>Follow me on</p>
          <div className="icons">
            <a target="_blank" href="https://www.facebook.com/StevenAlves512/"> <i className="fab fa-facebook-square fa-3x" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/steven-alves-529727115/"><i className="fab fa-linkedin fa-3x" /></a>
            <a target="_blank" href="https://twitter.com/stevenalves512"><i className="fab fa-twitter-square fa-3x" /></a>
            <a target="_blank" href="https://github.com/xredocx215sevlanevets"><i className="fab fa-github-square fa-3x" /></a>
          </div>
          <p>Facebook LinkedIn Twitter Github</p>
        </div>
      </section>
    )
  }
}

export default About;