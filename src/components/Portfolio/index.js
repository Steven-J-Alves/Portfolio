import React from 'react';

import './styles.css'

const index = (props) => {
  return (
    <section id="works">
      <div className="works-content">
        <h1>Works</h1>
        <div className="portfolio-work">
          <div className="portfolio-icons">
            <i className={props.iconDelete}></i>
            <i className={props.iconEdit}></i>
          </div>
          <img src="https://media.gettyimages.com/photos/abstract-digital-network-communication-picture-id1149365028?s=2048x2048" alt="" />
          <p> File manager made in Python - Let you control your file system... </p>
        </div>
        <div className="portfolio-work">
          <div className="portfolio-icons">
            <i className={props.iconDelete}></i>
            <i className={props.iconEdit}></i>
          </div>
          <img src="https://media.gettyimages.com/photos/keeping-up-with-modern-advancements-picture-id1081869336?s=2048x2048" alt="" />
          <p> Network project made in Packettracer - Simulate an ISP network...</p>
        </div>
        <div className="portfolio-work">
          <div className="portfolio-icons">
            <i className={props.iconDelete}></i>
            <i className={props.iconEdit}></i>
          </div>
          <img src="https://media.gettyimages.com/photos/businessman-with-tablet-in-car-at-night-surrounded-by-data-picture-id970161196?s=2048x2048" alt="" />
          <p> Network monitoring system made in BashScript - Permite you visualize metrics in your infra...</p>
        </div>
        <div className="portfolio-work">
          <div className="portfolio-icons">
            <i className={props.iconDelete}></i>
            <i className={props.iconEdit} ></i>
          </div>
          <img src="https://media.gettyimages.com/photos/business-people-working-in-modern-office-space-picture-id973718370?s=2048x2048" alt="" />
          <p>DHCP Rogue made in Python - Let you to secure your network from MITM...</p>
        </div>
      </div>
    </section >
  )
}

export default index;