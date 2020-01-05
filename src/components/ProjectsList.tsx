import React, { FC, useState, useEffect } from 'react';
import Project, { Repository } from './Project';
import { CardDeck, Spinner } from 'reactstrap';

export const ProjectsList: FC = () => {
  const [repos, setRepos] = useState<Repository[]>();

  useEffect(() => {
    fetch('https://api.github.com/users/bmiddha/repos?type=all&sort=updated&per_page=20')
      .then(res => res.json())
      .then(setRepos)
      .catch(console.error);
  }, []);

  return repos ? (
    <>
      <p className="lead">
        Data fetched from{' '}
        <a href="https://developer.github.com/v3/" target="_blank" rel="noopener noreferrer">
          GitHub API.
        </a>
      </p>
      <CardDeck>
        {repos.map((e, key) => (
          <Project key={key} {...e} />
        ))}
      </CardDeck>
    </>
  ) : (
    <div className="d-flex align-items-center">
      <Spinner className="mr-2" type="grow" />
    </div>
  );
};

export default ProjectsList;
