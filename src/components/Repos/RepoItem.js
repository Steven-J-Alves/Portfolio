import React from 'react';

function RepoItem({ repos }) {
  return (
    <div className="repos-carts">
      {
        repos.map(repo => (
          < div className="card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnqTEc2-mRb5pak2Lar-ON9DRl90FpoZOibg&usqp=CAU" alt="" />
            <h1>{repo.name}</h1>
            <a target="_blank" href={repo.html_url}>
              <i class="fas fa-external-link-square-alt"></i>
            </a>
          </div>
        ))
      }
    </div >
  )
}

export default RepoItem;