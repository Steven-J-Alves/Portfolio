import React from 'react';

import {
  useParams
} from "react-router-dom";

import NavBar from '../../components/Navbar';
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Portfolio from '../../components/Portfolio';
import Repos from '../../components/Repos';
import Contacts from '../../components/Contacts';


function Main() {

  let { title, rating, picture } = useParams();

  return (
    <>
      <NavBar menu1="Home" menu2="About" menu3="Skills" menu4="Works" menu6="Repos" menu5="Contacts" />
      <Header />
      <About />
      <Skills title={title} rating={rating} picture={picture} />
      <Portfolio />
      <Repos />
      <Contacts />
    </>
  )
}

export default Main;