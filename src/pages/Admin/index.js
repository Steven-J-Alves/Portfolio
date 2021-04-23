import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css'

import Navbar from '../../components/Navbar'
import Skills from '../../components/Skills'
import Portfolio from '../../components/Portfolio'


export default function Admin() {
  const history = useHistory();

  const codigo = "1";

  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const [skillTitle, setSkillTitle] = useState('');
  const [skillPicture, setSkillPicture] = useState('');
  const [skillRating, setSkillRating] = useState('');

  useEffect(() => {
    const pass = localStorage.getItem('@welcome-app/steven')
    if (pass) {
      setPassword(pass)
    }
  }, [])

  function handleLogin(e) {
    e.preventDefault();
    if (password == codigo) {
      localStorage.setItem('@welcome-app/steven', password);
      return setIsLogin(true);
    }
  }

  function form() {
    return (
      < div className="skills-form admin-login" >
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div >
    )
  }

  // 
  function handleSkill() {
    history.push(`/skills/${skillTitle}/${skillRating}/${skillPicture}`);
  }

  // 
  function handleWork() {
  }

  if (isLogin) {
    return (
      <>
        <Navbar menu3="Skills" menu4="Works" />
        <section id="skills">
          <div className="admin-content-skills">
            <Skills iconDelete={"fas fa-trash-alt del"} iconEdit={"fas fa-edit edt"} />
            <div className="skills-form">
              <form onSubmit={handleSkill}>
                <input
                  placeholder="Skills title"
                  type="text"
                  onChange={e => setSkillTitle(e.target.value)}
                />
                <input
                  placeholder="Skills picture"
                  type="text"
                  onChange={e => setSkillPicture(e.target.value)}
                />
                <input
                  placeholder="Skills rating"
                  type="text"
                  onChange={e => setSkillRating(e.target.value)}
                />
                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        </section >
        <section id="admin-portfolio">
          <div className="admin-content-portfolio">
            <Portfolio iconDelete={"fas fa-trash-alt del"} iconEdit={"fas fa-edit edt"} />
            <div className="skills-form">
              <form>
                <input placeholder="Work picture" type="text" />
                <input placeholder="Work description" type="text" />
                <button>Save</button>
              </form>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    return form();
  }

}