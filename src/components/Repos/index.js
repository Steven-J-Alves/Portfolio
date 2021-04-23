import React, { useState, useEffect } from 'react';

import axios from 'axios';

import RepoItem from '../../components/Repos/RepoItem';

import Spinner from '../Spinner/'

import './styles.css';

function Repo() {

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    getUserRepo();
  }, [])

  async function getUserRepo() {
    setLoading(true);

    const res = await axios.get(
      "https://api.github.com/users/Steven-J-Alves/repos?sort=created:asc"
    );

    setLoading(false);
    setRepos(res.data)
  }

  if (loading) {
    return <Spinner />
  } else {
    return (
      <section id="repos-container">
        <div className="repos-content">
          <h1>Repos</h1>
          <RepoItem repos={repos} />
        </div>
      </section>
    )
  }

}

export default Repo;