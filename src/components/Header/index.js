import React from 'react';

import './styles.css'

import img from '../../assets/img.jpg'

const index = () => {
  return (
    <section id="header-container">
      <div className="header-content">
        <div className="text">
          <h1>STEVEN <br /> ALVES</h1>
          <p>"Se a caminhada está difícil, é porque você está no caminho certo".</p>
        </div>
        <img src="https://media.gettyimages.com/photos/overtime-is-something-all-successful-people-must-do-picture-id1149529036?s=2048x2048" alt="" />
      </div>
    </section>
  )
}

export default index;