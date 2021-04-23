import React from 'react';
import { Link } from "react-scroll";
import PropTypes from 'prop-types';

import './styles.css'

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li><Link
            activeClass="active"
            to="header-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >{props.menu1}</Link></li>
          <li><Link
            activeClass="active"
            to="about-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >{props.menu2}</Link></li>
          <li><Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >{props.menu3}</Link></li>
          <li><Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >{props.menu4}</Link></li>
          <li><Link
            activeClass="active"
            to="repos-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >{props.menu6}</Link></li>
          <li><Link
            activeClass="active"
            to="contacts-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >{props.menu5}</Link></li>
        </ul>
      </nav>
      <hr />
    </div>
  )
}

// 
NavBar.propTypes = {
  props: PropTypes.string.isRequired,
};


export default NavBar;